/*!
 * modernizr v3.12.0
 * Build https://modernizr.com/download?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-fontface-generatedcontent-geolocation-hashchange-history-hsla-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svgclippaths-textshadow-touchevents-video-webgl-websockets-websqldatabase-webworkers-addtest-atrule-domprefixes-hasevent-load-mq-prefixed-prefixedcss-prefixes-printshiv-setclasses-testallprops-testprop-teststyles-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera
 *  Veeck

 * MIT License
 */
!function(e,t,n,o){var r=[],a={_version:"3.12.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){r.push({name:e,fn:t,options:n})},addAsyncTest:function(e){r.push({name:null,fn:e})}},i=function(){};i.prototype=a,i=new i;var s=[];function c(e,t){return typeof e===t}var l,d,u=n.documentElement,p="svg"===u.nodeName.toLowerCase();function f(e){var t=u.className,n=i._config.classPrefix||"";if(p&&(t=t.baseVal),i._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}i._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),p?u.className.baseVal=t:u.className=t)}function m(e,t){if("object"==typeof e)for(var n in e)l(e,n)&&m(n,e[n]);else{var o=(e=e.toLowerCase()).split("."),r=i[o[0]];if(2===o.length&&(r=r[o[1]]),void 0!==r)return i;t="function"==typeof t?t():t,1===o.length?i[o[0]]=t:(!i[o[0]]||i[o[0]]instanceof Boolean||(i[o[0]]=new Boolean(i[o[0]])),i[o[0]][o[1]]=t),f([(t&&!1!==t?"":"no-")+o.join("-")]),i._trigger(e,t)}return i}l=c(d={}.hasOwnProperty,"undefined")||c(d.call,"undefined")?function(e,t){return t in e&&c(e.constructor.prototype[t],"undefined")}:function(e,t){return d.call(e,t)},a._l={},a.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),i.hasOwnProperty(e)&&setTimeout((function(){i._trigger(e,i[e])}),0)},a._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout((function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)}),0),delete this._l[e]}},i._q.push((function(){a.addTest=m}));var h=a._config.usePrefixes?"Moz O ms Webkit".split(" "):[];a._cssomPrefixes=h;var v=function(e){var n,o=R.length,r=t.CSSRule;if(void 0!==r){if(!e)return!1;if((n=(e=e.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in r)return"@"+e;for(var a=0;a<o;a++){var i=R[a];if(i.toUpperCase()+"_"+n in r)return"@-"+i.toLowerCase()+"-"+e}return!1}};a.atRule=v;var g=a._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];function y(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}a._domPrefixes=g;var T,b=(T=!("onblur"in u),function(e,t){var n;return!!e&&(t&&"string"!=typeof t||(t=y(t||"div")),!(n=(e="on"+e)in t)&&T&&(t.setAttribute||(t=y("div")),t.setAttribute(e,""),n="function"==typeof t[e],void 0!==t[e]&&(t[e]=void 0),t.removeAttribute(e)),n)});a.hasEvent=b,p||function(e,t){var n,o,r=e.html5||{},a=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,s=0,c={};function l(e,t){var n=e.createElement("p"),o=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",o.insertBefore(n.lastChild,o.firstChild)}function d(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function u(e){var t=c[e._html5shiv];return t||(t={},s++,e._html5shiv=s,c[s]=t),t}function p(e,n,r){return n||(n=t),o?n.createElement(e):(r||(r=u(n)),!(s=r.cache[e]?r.cache[e].cloneNode():i.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e)).canHaveChildren||a.test(e)||s.tagUrn?s:r.frag.appendChild(s));var s}function f(e){e||(e=t);var r=u(e);return!m.shivCSS||n||r.hasCSS||(r.hasCSS=!!l(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),o||function(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return m.shivMethods?p(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,(function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'}))+");return n}")(m,t.frag)}(e,r),e}!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",n="hidden"in e,o=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){n=!0,o=!0}}();var m={elements:r.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==r.shivCSS,supportsUnknownElements:o,shivMethods:!1!==r.shivMethods,type:"default",shivDocument:f,createElement:p,createDocumentFragment:function(e,n){if(e||(e=t),o)return e.createDocumentFragment();for(var r=(n=n||u(e)).frag.cloneNode(),a=0,i=d(),s=i.length;a<s;a++)r.createElement(i[a]);return r},addElements:function(e,t){var n=m.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),m.elements=n+" "+e,f(t)}};e.html5=m,f(t);var h,v=/^$|\b(?:all|print)\b/,g=!(o||(h=t.documentElement,void 0===t.namespaces||void 0===t.parentWindow||void 0===h.applyElement||void 0===h.removeNode||void 0===e.attachEvent));function y(e){for(var t,n=e.attributes,o=n.length,r=e.ownerDocument.createElement("html5shiv:"+e.nodeName);o--;)(t=n[o]).specified&&r.setAttribute(t.nodeName,t.nodeValue);return r.style.cssText=e.style.cssText,r}function T(e){var t,n,o=u(e),r=e.namespaces,a=e.parentWindow;if(!g||e.printShived)return e;function i(){clearTimeout(o._removeSheetTimer),t&&t.removeNode(!0),t=null}return void 0===r.html5shiv&&r.add("html5shiv"),a.attachEvent("onbeforeprint",(function(){i();for(var o,r,a,s=e.styleSheets,c=[],u=s.length,p=Array(u);u--;)p[u]=s[u];for(;a=p.pop();)if(!a.disabled&&v.test(a.media)){try{r=(o=a.imports).length}catch(e){r=0}for(u=0;u<r;u++)p.push(o[u]);try{c.push(a.cssText)}catch(e){}}c=function(e){for(var t,n=e.split("{"),o=n.length,r=RegExp("(^|[\\s,>+~])("+d().join("|")+")(?=[[\\s,>+~#.:]|$)","gi");o--;)(t=n[o]=n[o].split("}"))[t.length-1]=t[t.length-1].replace(r,"$1html5shiv\\:$2"),n[o]=t.join("}");return n.join("{")}(c.reverse().join("")),n=function(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,r=RegExp("^(?:"+d().join("|")+")$","i"),a=[];o--;)t=n[o],r.test(t.nodeName)&&a.push(t.applyElement(y(t)));return a}(e),t=l(e,c)})),a.attachEvent("onafterprint",(function(){!function(e){for(var t=e.length;t--;)e[t].removeNode()}(n),clearTimeout(o._removeSheetTimer),o._removeSheetTimer=setTimeout(i,500)})),e.printShived=!0,e}m.type+=" print",m.shivPrint=T,T(t),"object"==typeof module&&module.exports&&(module.exports=m)}(void 0!==t?t:this,n);var x=function(){},w=function(){};function S(e,t,o,r){var a,i,s,c,l="modernizr",d=y("div"),f=function(){var e=n.body;return e||((e=y(p?"svg":"body")).fake=!0),e}();if(parseInt(o,10))for(;o--;)(s=y("div")).id=r?r[o]:l+(o+1),d.appendChild(s);return(a=y("style")).type="text/css",a.id="s"+l,(f.fake?f:d).appendChild(a),f.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),d.id=l,f.fake&&(f.style.background="",f.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(f)),i=t(d,e),f.fake&&f.parentNode?(f.parentNode.removeChild(f),u.style.overflow=c,u.offsetHeight):d.parentNode.removeChild(d),!!i}function C(e,n,o){var r;if("getComputedStyle"in t){r=getComputedStyle.call(t,e,n);var a=t.console;if(null!==r)o&&(r=r.getPropertyValue(o));else if(a)a[a.error?"error":"log"].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!n&&e.currentStyle&&e.currentStyle[o];return r}t.console&&(x=function(){var e=console.error?"error":"log";t.console[e].apply(t.console,Array.prototype.slice.call(arguments))},w=function(){var e=console.warn?"warn":"log";t.console[e].apply(t.console,Array.prototype.slice.call(arguments))}),a.load=function(){"yepnope"in t?(w("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so weâ€™ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information."),t.yepnope.apply(t,[].slice.call(arguments,0))):x("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information.")};var E,P=(E=t.matchMedia||t.msMatchMedia)?function(e){var t=E(e);return t&&t.matches||!1}:function(e){var t=!1;return S("@media "+e+" { #modernizr { position: absolute; } }",(function(e){t="absolute"===C(e,null,"position")})),t};function k(e,t){return!!~(""+e).indexOf(t)}a.mq=P;var _={elem:y("modernizr")};i._q.push((function(){delete _.elem}));var z={style:_.elem.style};function N(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function M(e){return e.replace(/([a-z])-([a-z])/g,(function(e,t,n){return t+n.toUpperCase()})).replace(/^-/,"")}function $(e,n,o,r){if(r=!c(r,"undefined")&&r,!c(o,"undefined")){var a=function(e,n){var o=e.length;if("CSS"in t&&"supports"in t.CSS){for(;o--;)if(t.CSS.supports(N(e[o]),n))return!0;return!1}if("CSSSupportsRule"in t){for(var r=[];o--;)r.push("("+N(e[o])+":"+n+")");return S("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",(function(e){return"absolute"===C(e,null,"position")}))}}(e,o);if(!c(a,"undefined"))return a}for(var i,s,l,d,u,p=["modernizr","tspan","samp"];!z.style&&p.length;)i=!0,z.modElem=y(p.shift()),z.style=z.modElem.style;function f(){i&&(delete z.style,delete z.modElem)}for(l=e.length,s=0;s<l;s++)if(d=e[s],u=z.style[d],k(d,"-")&&(d=M(d)),void 0!==z.style[d]){if(r||c(o,"undefined"))return f(),"pfx"!==n||d;try{z.style[d]=o}catch(e){}if(z.style[d]!==u)return f(),"pfx"!==n||d}return f(),!1}function j(e,t){return function(){return e.apply(t,arguments)}}function A(e,t,n,o,r){var a=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+h.join(a+" ")+a).split(" ");return c(t,"string")||c(t,"undefined")?$(i,t,o,r):function(e,t,n){var o;for(var r in e)if(e[r]in t)return!1===n?e[r]:c(o=t[e[r]],"function")?j(o,n||t):o;return!1}(i=(e+" "+g.join(a+" ")+a).split(" "),t,n)}i._q.unshift((function(){delete z.style})),a.testAllProps=A;var O=a.prefixed=function(e,t,n){return 0===e.indexOf("@")?v(e):(-1!==e.indexOf("-")&&(e=M(e)),t?A(e,t,n):A(e,"pfx"))},R=a._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];a._prefixes=R;a.prefixedCSS=function(e){var t=O(e);return t&&N(t)};function L(e,t,n){return A(e,void 0,void 0,t,n)}a.testAllProps=L;var B=a.testProp=function(e,t,n){return $([e],void 0,t,n)},D=a.testStyles=S;
/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse": "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "** DEPRECATED see https://github.com/Modernizr/Modernizr/pull/2432 **",
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds â€“ https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/
i.addTest("touchevents",(function(){if("ontouchstart"in t||t.TouchEvent||t.DocumentTouch&&n instanceof DocumentTouch)return!0;var e=["(",R.join("touch-enabled),("),"heartz",")"].join("");return P(e)})),
/*!
{
  "name": "Application Cache",
  "property": "applicationcache",
  "caniuse": "offline-apps",
  "tags": ["storage", "offline"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache"
  }],
  "polyfills": ["html5gears"]
}
!*/
i.addTest("applicationcache","applicationCache"in t),
/*!
{
  "name": "HTML5 Audio Element",
  "property": "audio",
  "caniuse": "audio",
  "tags": ["html5", "audio", "media"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements"
  }]
}
!*/
function(){var e=y("audio");i.addTest("audio",(function(){var t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t))}catch(e){}return t}));try{e.canPlayType&&(i.addTest("audio.ogg",e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"")),i.addTest("audio.mp3",e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,"")),i.addTest("audio.opus",e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,"")),i.addTest("audio.wav",e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"")),i.addTest("audio.m4a",(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,"")))}catch(e){}}(),
/*!
{
  "name": "Canvas",
  "property": "canvas",
  "caniuse": "canvas",
  "tags": ["canvas", "graphics"],
  "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
}
!*/
i.addTest("canvas",(function(){var e=y("canvas");return!(!e.getContext||!e.getContext("2d"))})),
/*!
{
  "name": "Canvas text",
  "property": "canvastext",
  "caniuse": "canvas-text",
  "tags": ["canvas", "graphics"],
  "polyfills": ["canvastext"]
}
!*/
i.addTest("canvastext",(function(){return!1!==i.canvas&&"function"==typeof y("canvas").getContext("2d").fillText})),
/*!
{
  "name": "Hashchange event",
  "property": "hashchange",
  "caniuse": "hashchange",
  "tags": ["history"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange"
  }],
  "polyfills": [
    "jquery-hashchange",
    "moo-historymanager",
    "jquery-ajaxy",
    "hasher",
    "shistory"
  ]
}
!*/
i.addTest("hashchange",(function(){return!1!==b("hashchange",t)&&(void 0===n.documentMode||n.documentMode>7)})),
/*!
{
  "name": "Geolocation API",
  "property": "geolocation",
  "caniuse": "geolocation",
  "tags": ["media"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
  }],
  "polyfills": [
    "joshuabell-polyfill",
    "webshims",
    "geo-location-javascript",
    "geolocation-api-polyfill"
  ]
}
!*/
i.addTest("geolocation","geolocation"in navigator),
/*!
{
  "name": "History API",
  "property": "history",
  "caniuse": "history",
  "tags": ["history"],
  "authors": ["Hay Kranen", "Alexander Farkas"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/html51/browsers.html#the-history-interface"
  }, {
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
  }],
  "polyfills": ["historyjs", "html5historyapi"]
}
!*/
i.addTest("history",(function(){var e=navigator.userAgent;return!!e&&((-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")||"file:"===location.protocol)&&(t.history&&"pushState"in t.history))}));var F=y("input"),W="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),q={};
/*!
{
  "name": "Input attributes",
  "property": "input",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/input.html#input-type-attr-summary"
  }],
  "knownBugs": ["Some blackberry devices report false positive for input.multiple"]
}
!*/i.input=function(e){for(var n=0,o=e.length;n<o;n++)q[e[n]]=!!(e[n]in F);return q.list&&(q.list=!(!y("datalist")||!t.HTMLDataListElement)),q}(W),
/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/
function(){for(var e,t,o,r=["search","tel","url","email","datetime","date","month","week","time","datetime-local","number","range","color"],a=0;a<r.length;a++)F.setAttribute("type",e=r[a]),(o="text"!==F.type&&"style"in F)&&(F.value="1)",F.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&void 0!==F.style.WebkitAppearance?(u.appendChild(F),o=(t=n.defaultView).getComputedStyle&&"textfield"!==t.getComputedStyle(F,null).WebkitAppearance&&0!==F.offsetHeight,u.removeChild(F)):/^(search|tel)$/.test(e)||(o=/^(url|email)$/.test(e)?F.checkValidity&&!1===F.checkValidity():"1)"!==F.value)),i.addTest("inputtypes."+e,!!o)}();
/*!
{
  "name": "postMessage",
  "property": "postmessage",
  "caniuse": "x-doc-messaging",
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/webmessaging/#crossDocumentMessages"
  }],
  "polyfills": ["easyxdm", "postmessage-jquery"],
  "knownBugs": ["structuredclones - Android 2&3 can not send a structured clone of dates, filelists or regexps"],
  "warnings": ["Some old WebKit versions have bugs. Stick with object, array, number and pixeldata to be safe."]
}
!*/
var I=!0;try{t.postMessage({toString:function(){I=!1}},"*")}catch(e){}i.addTest("postmessage",new Boolean("postMessage"in t)),i.addTest("postmessage.structuredclones",I),
/*!
{
  "name": "HTML5 Video",
  "property": "video",
  "caniuse": "video",
  "tags": ["html5", "video", "media"],
  "knownBugs": ["Without QuickTime, `Modernizr.video.h264` will be `undefined`; https://github.com/Modernizr/Modernizr/issues/546"],
  "polyfills": [
    "html5media",
    "mediaelementjs",
    "sublimevideo",
    "videojs",
    "leanbackplayer",
    "videoforeverybody"
  ]
}
!*/
function(){var e=y("video");i.addTest("video",(function(){var t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t))}catch(e){}return t}));try{e.canPlayType&&(i.addTest("video.ogg",e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"")),i.addTest("video.h264",e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"")),i.addTest("video.h265",e.canPlayType('video/mp4; codecs="hev1"').replace(/^no$/,"")),i.addTest("video.webm",e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")),i.addTest("video.vp9",e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,"")),i.addTest("video.hls",e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,"")),i.addTest("video.av1",e.canPlayType('video/mp4; codecs="av01"').replace(/^no$/,"")))}catch(e){}}(),
/*!
{
  "name": "WebGL",
  "property": "webgl",
  "caniuse": "webgl",
  "tags": ["webgl", "graphics"],
  "polyfills": ["jebgl", "cwebgl", "iewebgl"]
}
!*/
i.addTest("webgl",(function(){return"WebGLRenderingContext"in t}));
/*!
{
  "name": "WebSockets Support",
  "property": "websockets",
  "authors": ["Phread (@fearphage)", "Mike Sherov (@mikesherov)", "Burak Yigit Kaya (@BYK)"],
  "caniuse": "websockets",
  "tags": ["html5"],
  "warnings": [
    "This test will reject any old version of WebSockets even if it is not prefixed such as in Safari 5.1"
  ],
  "notes": [{
    "name": "CLOSING State and Spec",
    "href": "https://www.w3.org/TR/websockets/#the-websocket-interface"
  }],
  "polyfills": [
    "sockjs",
    "socketio",
    "kaazing-websocket-gateway",
    "websocketjs",
    "atmosphere",
    "graceful-websocket",
    "portal",
    "datachannel"
  ]
}
!*/
var V,U,H,G=!1;try{G="WebSocket"in t&&2===t.WebSocket.CLOSING}catch(e){}i.addTest("websockets",G),
/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name": "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://web.archive.org/web/20180602074607/https://daneden.me/2011/12/14/putting-up-with-androids-bullshit/"
  }]
}
!*/
i.addTest("cssanimations",L("animationName","a",!0)),
/*!
{
  "name": "Background Size",
  "property": "backgroundsize",
  "tags": ["css"],
  "knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
  "notes": [{
    "name": "Related Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/396"
  }]
}
!*/
i.addTest("backgroundsize",L("backgroundSize","100%",!0)),
/*!
{
  "name": "Border Image",
  "property": "borderimage",
  "caniuse": "border-image",
  "polyfills": ["css3pie"],
  "knownBugs": ["Android < 2.0 is true, but has a broken implementation"],
  "tags": ["css"]
}
!*/
i.addTest("borderimage",L("borderImage","url() 1",!0)),
/*!
{
  "name": "Border Radius",
  "property": "borderradius",
  "caniuse": "border-radius",
  "polyfills": ["css3pie"],
  "tags": ["css"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/
i.addTest("borderradius",L("borderRadius","0px",!0)),
/*!
{
  "name": "Box Shadow",
  "property": "boxshadow",
  "caniuse": "css-boxshadow",
  "tags": ["css"],
  "knownBugs": [
    "WebOS false positives on this test.",
    "The Kindle Silk browser false positives"
  ]
}
!*/
i.addTest("boxshadow",L("boxShadow","1px 1px",!0)),
/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "https://www.w3.org/TR/css-flexbox-1/"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
i.addTest("flexbox",L("flexBasis","1px",!0)),(V=navigator.userAgent,U=V.match(/w(eb)?osbrowser/gi),H=V.match(/windows phone/gi)&&V.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,U||H)?i.addTest("fontface",!1):D('@font-face {font-family:"font";src:url("https://")}',(function(e,t){var o=n.getElementById("smodernizr"),r=o.sheet||o.styleSheet,a=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",s=/src/i.test(a)&&0===a.indexOf(t.split(" ")[0]);i.addTest("fontface",s)})),
/*!
{
  "name": "CSS Generated Content",
  "property": "generatedcontent",
  "tags": ["css"],
  "warnings": ["Android won't return correct height for anything below 7px #738"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-selectors/#gen-content"
  }, {
    "name": "MDN Docs on :before",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  }, {
    "name": "MDN Docs on :after",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::after"
  }]
}
!*/
D('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',(function(e){i.addTest("generatedcontent",e.offsetHeight>=6)})),
/*!
{
  "name": "CSS Gradients",
  "caniuse": "css-gradients",
  "property": "cssgradients",
  "tags": ["css"],
  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
  "notes": [{
    "name": "Webkit Gradient Syntax",
    "href": "https://webkit.org/blog/175/introducing-css-gradients/"
  }, {
    "name": "Linear Gradient Syntax",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient"
  }, {
    "name": "W3C Spec",
    "href": "https://drafts.csswg.org/css-images-3/#gradients"
  }]
}
!*/
i.addTest("cssgradients",(function(){for(var e,t="background-image:",n="",o=0,r=R.length-1;o<r;o++)e=0===o?"to ":"",n+=t+R[o]+"linear-gradient("+e+"left top, #9f9, white);";i._config.usePrefixes&&(n+=t+"-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");var a=y("a").style;return a.cssText=n,(""+a.backgroundImage).indexOf("gradient")>-1})),
/*!
{
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"]
}
!*/
i.addTest("hsla",(function(){var e=y("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",k(e.backgroundColor,"rgba")||k(e.backgroundColor,"hsla")})),
/*!
{
  "name": "CSS Multiple Backgrounds",
  "caniuse": "multibackgrounds",
  "property": "multiplebgs",
  "tags": ["css"]
}
!*/
i.addTest("multiplebgs",(function(){var e=y("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)})),
/*!
{
  "name": "CSS Opacity",
  "caniuse": "css-opacity",
  "property": "opacity",
  "tags": ["css"]
}
!*/
i.addTest("opacity",(function(){var e=y("a").style;return e.cssText=R.join("opacity:.55;"),/^0.55$/.test(e.opacity)})),
/*!
{
  "name": "CSS Reflections",
  "caniuse": "css-reflections",
  "property": "cssreflections",
  "tags": ["css"]
}
!*/
i.addTest("cssreflections",L("boxReflect","above",!0)),
/*!
{
  "name": "CSS rgba",
  "caniuse": "css3-colors",
  "property": "rgba",
  "tags": ["css"],
  "notes": [{
    "name": "CSSTricks Tutorial",
    "href": "https://css-tricks.com/rgba-browser-support/"
  }]
}
!*/
i.addTest("rgba",(function(){var e=y("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1})),
/*!
{
  "name": "CSS textshadow",
  "property": "textshadow",
  "caniuse": "css-textshadow",
  "tags": ["css"],
  "knownBugs": ["FF3.0 will false positive on this test"]
}
!*/
i.addTest("textshadow",B("textShadow","1px 1px")),
/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/
i.addTest("csstransforms",(function(){return-1===navigator.userAgent.indexOf("Android 2.")&&L("transform","scale(1)",!0)}));
/*!
{
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3C Spec (The @supports rule)",
    "href": "https://dev.w3.org/csswg/css3-conditional/#at-supports"
  }, {
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/648"
  }, {
    "name": "W3C Spec (The CSSSupportsRule interface)",
    "href": "https://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
!*/
var J="CSS"in t&&"supports"in t.CSS,Z="supportsCSS"in t;i.addTest("supports",J||Z),
/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occasionally fail this test on some systems; more info: https://bugs.chromium.org/p/chromium/issues/detail?id=129004"
  ]
}
!*/
i.addTest("csstransforms3d",(function(){return!!L("perspective","1px",!0)})),
/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
i.addTest("csstransitions",L("transition","all",!0)),
/*!
{
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
!*/
i.addTest("localstorage",(function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}})),
/*!
{
  "name": "Session Storage",
  "property": "sessionstorage",
  "tags": ["storage"],
  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
}
!*/
i.addTest("sessionstorage",(function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}})),
/*!
{
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
!*/
i.addTest("websqldatabase","openDatabase"in t);var K={}.toString;
/*!
{
  "name": "SVG clip paths",
  "property": "svgclippaths",
  "tags": ["svg"],
  "notes": [{
    "name": "Demo",
    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
  }]
}
!*/i.addTest("svgclippaths",(function(){return!!n.createElementNS&&/SVGClipPath/.test(K.call(n.createElementNS("http://www.w3.org/2000/svg","clipPath")))})),
/*!
{
  "name": "Inline SVG",
  "property": "inlinesvg",
  "caniuse": "svg-html5",
  "tags": ["svg"],
  "notes": [{
    "name": "Test page",
    "href": "https://paulirish.com/demo/inline-svg"
  }, {
    "name": "Test page and results",
    "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
  }],
  "polyfills": ["inline-svg-polyfill"],
  "knownBugs": ["False negative on some Chromia browsers."]
}
!*/
i.addTest("inlinesvg",(function(){var e=y("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)})),
/*!
{
  "name": "SVG SMIL animation",
  "property": "smil",
  "caniuse": "svg-smil",
  "tags": ["svg"],
  "notes": [{
  "name": "W3C Spec",
  "href": "https://www.w3.org/AudioVideo/"
  }]
}
!*/
i.addTest("smil",(function(){return!!n.createElementNS&&/SVGAnimate/.test(K.call(n.createElementNS("http://www.w3.org/2000/svg","animate")))})),
/*!
{
  "name": "Web Workers",
  "property": "webworkers",
  "caniuse": "webworkers",
  "tags": ["performance", "workers"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/workers/"
  }, {
    "name": "HTML5 Rocks Tutorial",
    "href": "https://www.html5rocks.com/en/tutorials/workers/basics/"
  }, {
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
  }],
  "polyfills": ["fakeworker", "html5shims"]
}
!*/
i.addTest("webworkers","Worker"in t),function(){var e,t,n,o,a,l;for(var d in r)if(r.hasOwnProperty(d)){if(e=[],(t=r[d]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=c(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)1===(l=e[a].split(".")).length?i[l[0]]=o:(i[l[0]]&&(!i[l[0]]||i[l[0]]instanceof Boolean)||(i[l[0]]=new Boolean(i[l[0]])),i[l[0]][l[1]]=o),s.push((o?"":"no-")+l.join("-"))}}(),f(s),delete a.addTest,delete a.addAsyncTest;for(var Q=0;Q<i._q.length;Q++)i._q[Q]();e.Modernizr=i}(window,window,document);