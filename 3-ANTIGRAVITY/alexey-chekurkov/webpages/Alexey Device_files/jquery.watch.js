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

/*

 jQuery Watch Plugin

 @author Darcy Clarke
 @version 2.0

 Copyright (c) 2012 Darcy Clarke
 Dual licensed under the MIT and GPL licenses.

 ADDS: 

 - $.watch()

 USES:

 - DOMAttrModified event

 FALLBACKS:

 - propertychange event
 - setTimeout() with delay 

 EXAMPLE:

 $('div').watch('width height', function(){
 console.log(this.style.width, this.style.height);
 });

 $('div').animate({width:'100px',height:'200px'}, 500);

*/
(function(d){"function"===typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],d):d(jQuery)})(function(d){d.extend(d.fn,{watch:function(b,c,a){var f=document.createElement("div"),j=function(a,b){var a="on"+a,c=a in b;c||(b.setAttribute(a,"return;"),c=typeof b[a]=="function");"onpropertychange"==a&&d.browser.msie&&d.browser.version>=9&&(c=!1);return c};typeof c=="function"&&(a=c,c={});typeof a!="function"&&(a=function(){});c=d.extend({},{throttle:10},c);return this.each(function(){var g=
d(this),i=function(){for(var a=g.data(),b=!1,c,f=0;f<a.props.length;f++)if(c=g.css(a.props[f]),a.vals[f]!=c){a.vals[f]=c;b=!0;break}b&&a.cb&&a.cb.call(g,a)},h={props:b.split(","),cb:a,vals:[]};d.each(h.props,function(a){h.vals[a]=g.css(h.props[a])});g.data(h);if(j("DOMAttrModified",f))g.on("DOMAttrModified",a);else if(j("propertychange",f))g.on("propertychange",a);else setInterval(i,c.throttle)})}})});
;(function(){if(!("undefined"==typeof Muse||"undefined"==typeof Muse.assets)){var c=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]==b)return c;return-1}(Muse.assets.required,"jquery.watch.js");if(-1!=c){Muse.assets.required.splice(c,1);for(var c=document.getElementsByTagName("meta"),b=0,d=c.length;b<d;b++){var a=c[b];if("generator"==a.getAttribute("name")){"2018.1.0.386"!=a.getAttribute("content")&&Muse.assets.outOfDate.push("jquery.watch.js");break}}}}})();


}
/*
     FILE ARCHIVED ON 17:16:35 Oct 15, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:31:02 Aug 01, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.867
  exclusion.robots: 0.042
  exclusion.robots.policy: 0.025
  esindex: 0.015
  cdx.remote: 12.828
  LoadShardBlock: 112.368 (3)
  PetaboxLoader3.datanode: 126.594 (4)
  load_resource: 236.246
  PetaboxLoader3.resolve: 208.16
*/