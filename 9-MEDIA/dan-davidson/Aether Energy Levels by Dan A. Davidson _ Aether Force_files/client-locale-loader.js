function fb3dClientLocaleLoader() {
  if(window.jQuery && typeof jQuery.ajax==='function') {
    function fb3dNormalizeUrl(url) {
      return url.replace(/https{0,1}:/, location.protocol);
    }
    function fb3dFetch(url) {
      return new Promise(function(resolve, reject) {
        jQuery.ajax({url: fb3dNormalizeUrl(url), dataType: 'text'}).done(resolve).fail(reject);
      });
    }
    FB3D_CLIENT_LOCALE.render = function() {
      delete FB3D_CLIENT_LOCALE.render;
      var isStable = !Promise.withResolvers || /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        pdfJs = FB3D_CLIENT_LOCALE.pdfJS, assetsJs = FB3D_CLIENT_LOCALE.pluginurl+'assets/js/';
      window.FB3D_LOCALE = {
        dictionary: FB3D_CLIENT_LOCALE.dictionary
      };
      window.PDFJS_LOCALE = {
        pdfJsCMapUrl: fb3dNormalizeUrl(pdfJs.pdfJsCMapUrl),
        pdfJsWorker: fb3dNormalizeUrl(isStable? pdfJs.stablePdfJsWorker: pdfJs.pdfJsWorker)
      };
      Promise.all([
        fb3dFetch(FB3D_CLIENT_LOCALE.pluginurl+'assets/css/client.css?ver='+FB3D_CLIENT_LOCALE.version),
        fb3dFetch(FB3D_CLIENT_LOCALE.cacheurl+'skins.js?ver='+FB3D_CLIENT_LOCALE.version),
        fb3dFetch(isStable? pdfJs.stablePdfJsLib: pdfJs.pdfJsLib),
        fb3dFetch(assetsJs+'three.min.js?ver=125'),
        fb3dFetch(assetsJs+'html2canvas.min.js?ver=0.5'),
        fb3dFetch(assetsJs+'client.min.js?ver='+FB3D_CLIENT_LOCALE.version),
      ]).then(function(fs) {
        jQuery('head').append(['<style type="text/css">', fs[0].replace(/url\('..\//gi, 'url(\''+fb3dNormalizeUrl(FB3D_CLIENT_LOCALE.pluginurl+'assets/')), '</style>'].join(''));
        for(var i = 1; i<fs.length; ++i) {
          eval(fs[i]);
        }
      });
    };
    if(jQuery('._'+FB3D_CLIENT_LOCALE.key).length) {
      FB3D_CLIENT_LOCALE.render();
    }
  }
  else {
    setTimeout(fb3dClientLocaleLoader, 100);
  }
}
fb3dClientLocaleLoader();
