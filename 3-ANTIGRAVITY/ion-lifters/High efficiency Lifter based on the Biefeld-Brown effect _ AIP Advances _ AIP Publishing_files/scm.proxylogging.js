var App = App || {};

SCM.ProxyLogging = (function() {

    var windowurl = window.location.href;
    var siteUrl = App.SiteURL.substring(0, App.SiteURL.indexOf('/'));
	if (!windowurl.includes(siteUrl))
    {
        fetch('/admin/api/analytics/logProxyAccess?proxyUrl=' + windowurl);
    }

    return {
        init: _init
    };

    function _init() {
    }
})();
