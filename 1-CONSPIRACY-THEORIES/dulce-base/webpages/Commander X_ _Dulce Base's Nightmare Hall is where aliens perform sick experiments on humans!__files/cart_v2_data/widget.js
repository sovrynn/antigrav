function changePage(type, to = undefined) {
  var page = { type: type, hash: to ?? window.location.hash };
  addCurrentPageToStorage(JSON.stringify(page));
  navigateToStorePageIfNeeded();
  Wix.PubSub.publish('ecwid_page_changed', page, true);
}

function buildStateFromJsApiPage(page) {
  if (page.type === 'CART') {
    return '/cart'
  }
  return undefined
}

let statePassedFromAnotherFrame
let widgetState

function onEcwidStateChanged(event) {
  window.ec.setInternalState(event.data.state)
  statePassedFromAnotherFrame = event.data.state
}

function changePageIfWidgetStateChanged(type) {
  if (decodeURI(statePassedFromAnotherFrame) !== decodeURI(widgetState)) {
    changePage(type, `/${widgetState}`)
  }
  statePassedFromAnotherFrame = undefined
}

function addOnPageLoadEventListener(type) {
  Ecwid.OnPageLoad.add((page) => {
    if (type === 'SEARCH') {
      changePageIfWidgetStateChanged(type);
      return
    }

    const newState = buildStateFromJsApiPage(page)
    if (page.type === type && statePassedFromAnotherFrame !== newState.substring(1)) {
      changePage(type, newState)
    }

    statePassedFromAnotherFrame = undefined
  })
}

let timeOfLastHashChanged = 0;

function addHashChangeEventListener(type) {
  $(window).on('hashchange', function() {
    let timeDiff = Date.now() - timeOfLastHashChanged;
    if (!!window.location.hash && window.location.hash !== '#' && !!type && (type !== 'SEARCH' || timeDiff > 2000)) {
      timeOfLastHashChanged = Date.now();
      changePage(type);
      window.location.hash = ""
    }
  });
}

function addRouteChangeEventListener(type) {
  if (Ecwid.isStorefrontV3 && Ecwid.isStorefrontV3()) {
    addOnPageLoadEventListener(type)
  } else {
    addHashChangeEventListener(type)
  }
}

$(window).ready(function() {
	if (window.location.search.indexOf("send-refresh=true") > 0) {
		Wix.PubSub.publish('settings_changed', {}, false);
	}
	Wix.PubSub.subscribe('settings_changed', function(event) {
		window.location.href = window.location.href.replace("send-refresh=true", "");
	}, false);
});


let alwaysNavigateToStorePage = true
function setAlwaysNavigateToStorePage(alwaysNavigate) {
  if (alwaysNavigate !== undefined) {
    alwaysNavigateToStorePage = alwaysNavigate
  }
}

// according to ECWID-8518:
// when widget is on page without product browser, we need
//  - to publish ecwid_page_changed as persisted TRUE
//  - to navigate to the product browser page
// but if we already here, do not navigate to avoid empty state
function navigateToStorePageIfNeeded() {
  var storePageId = getPageId()
  if (alwaysNavigateToStorePage || !(Ecwid.isStorefrontV3 && Ecwid.isStorefrontV3())) {
    Wix.navigateToPage(storePageId);
    return
  }

  Wix.getCurrentPageId(function(currentPageId) {
    if (currentPageId !== storePageId) {
      Wix.navigateToPage(storePageId);
    }
  })
}

function widgetCustomHistoryHandler(state) {
  widgetState = state
}

function onWixPageNavigationEventListener(event) {
  const storePageId = getPageId();
  if (event.fromPage === storePageId && event.toPage !== storePageId) {
    statePassedFromAnotherFrame = undefined;
    window.ec.setInternalState("");
  }
}
