function storageAvailable(type) {
	try {
		var storage = window[type];
		var x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}

function addToSessionStorage(key, value) {
	if (storageAvailable("sessionStorage")) {
		sessionStorage.setItem(key, value);
	}
}

function getFromSessionStorage(key) {
	if (storageAvailable("sessionStorage")) {
		return sessionStorage.getItem(key);
	} else {
		return null;
	}
}

function removeFromSessionStorage(key) {
	if (storageAvailable("sessionStorage")) {
		sessionStorage.removeItem(key);
	}
}

function addCurrentPageToStorage(value) {
	addToSessionStorage("EcwidCurrentPage", value);
}

function getCurrentPageFromStorage() {
	return getFromSessionStorage("EcwidCurrentPage");
}

function removeCurrentPageFromStorage() {
	return removeFromSessionStorage("EcwidCurrentPage");
}
