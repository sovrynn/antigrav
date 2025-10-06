var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(a,b){typeof define==="function"&&define.amd?define([],function(){return b()}):typeof exports==="object"?module.exports=b():a.whatInput=b()})(this,function(){function a(a){clearTimeout(p);c(a);i=!0;p=setTimeout(function(){i=!1},1E3)}function b(a){i||c(a)}function c(a){var c=a.keyCode?a.keyCode:a.which,b=a.target||a.srcElement,d=l[a.type];d==="pointer"&&(d=typeof a.pointerType==="number"?q[a.pointerType]:a.pointerType);if(h!==d&&(k||!h||!(d==="keyboard"&&o[c]!=="tab"&&j.indexOf(b.nodeName.toLowerCase())>=
0)))h=d,f.setAttribute("data-whatinput",h),m.indexOf(h)===-1&&m.push(h);d==="keyboard"&&g.indexOf(o[c])===-1&&o[c]&&g.push(o[c])}function d(a){a=g.indexOf(o[a.keyCode?a.keyCode:a.which]);a!==-1&&g.splice(a,1)}var g=[],f=document.body,i=!1,h=null,j=["input","select","textarea"],k=f.hasAttribute("data-whatinput-formtyping"),l={keydown:"keyboard",mousedown:"mouse",mouseenter:"mouse",touchstart:"touch",pointerdown:"pointer",MSPointerDown:"pointer"},m=[],o={9:"tab",13:"enter",16:"shift",27:"esc",32:"space",
37:"left",38:"up",39:"right",40:"down"},q={2:"touch",3:"touch",4:"mouse"},p;(function(){var c="mousedown";window.PointerEvent?c="pointerdown":window.MSPointerEvent&&(c="MSPointerDown");f.addEventListener?(f.addEventListener(c,b),f.addEventListener("mouseenter",b),"ontouchstart"in document.documentElement&&f.addEventListener("touchstart",a),f.addEventListener("keydown",b),f.addEventListener("keyup",d)):(f.attachEvent(c,b),f.attachEvent("mouseenter",b),"ontouchstart"in document.documentElement&&f.attachEvent("touchstart",
a),f.attachEvent("keydown",b),f.attachEvent("keyup",d))})();return{ask:function(){return h},keys:function(){return g},types:function(){return m},set:c}});


}
/*
     FILE ARCHIVED ON 17:16:36 Oct 15, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:31:02 Aug 01, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.532
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.015
  esindex: 0.009
  cdx.remote: 14.241
  LoadShardBlock: 99.089 (3)
  PetaboxLoader3.datanode: 138.502 (5)
  load_resource: 317.797 (2)
  PetaboxLoader3.resolve: 252.385
*/