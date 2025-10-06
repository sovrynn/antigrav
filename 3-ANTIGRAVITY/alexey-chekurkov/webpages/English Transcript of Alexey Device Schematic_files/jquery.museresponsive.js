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
 Copyright 2011-2016 Adobe Systems Incorporated. All Rights Reserved.
*/
(function(c){"function"===typeof define&&define.amd&&define.amd.jQuery?define(["jquery","museutils"],c):c(jQuery)})(function(c){var b="undefined"!==typeof console&&console.log&&console.log.bind?console.log.bind(console,"[MR]"):function(){},d=!0,a=c(window),f=function(a){var c=null,d=null,f=null,g=a.parent().children().length,h=a.index();1==g?c=a.parent():0==h?f=a.next():d=a.prev();this.getNode=function(){return a};this.swapWith=function(a){c?c.append(a.getNode()):d?d.after(a.getNode()):f?f.before(a.getNode()):
b("WARNING: Invalid state - either parent, prev, next should have a valid value")}},h=function(a,b){var d=new f(a),g=new f(b);c("script",b).remove();d.swapWith(g);g.swapWith(d);d=a.attr("class");a.attr("class",b.attr("class"));b.attr("class",d);g=["temp_no_id","temp_no_img_src"];for(d=0;d<g.length;d++)a.hasClass(g[d])&&(a.removeClass(g[d]),b.addClass(g[d]));if(b.closest("form").length&&(b.hasClass("wrapped-input")||b.is("p")&&b.parents(".fld-message").length)){for(var g=a.closest("form"),h=b.closest("form"),
j=a.closest(".fld-grp"),l=b.closest(".fld-grp"),r=["non-empty-st","focus-st","fld-err-st"],d=0;d<r.length;d++)j.length&&l.length&&j.hasClass(r[d])&&!l.hasClass(r[d])&&(j.removeClass(r[d]),l.addClass(r[d]));r=["frm-subm-err-st","frm-subm-ok-st","frm-sub-st"];for(d=0;d<r.length;d++)g.length&&h.length&&g.hasClass(r[d])&&!h.hasClass(r[d])&&(g.removeClass(r[d]),h.addClass(r[d]))}b.removeClass("placeholder").addClass("shared_content");a.addClass("placeholder").removeClass("shared_content")},g=function(f){f.data("bpObj",
this);var g=this,m=f.hasClass("active"),n=function(a){a==m?b('WARNING: Setting the same "active" state twice',this.toString()):(m=a)?(f.addClass("active"),l.trigger("muse_bp_activate",[j,f,g]),f.trigger("muse_this_bp_activate")):(f.removeClass("active"),l.trigger("muse_bp_deactivate",[j,f,g]),f.trigger("muse_this_bp_deactivate"))},j=function(){var a=f.attr("data-min-width")||void 0,b=f.attr("data-max-width")||void 0,c="";void 0!==a&&(c+=(c?" and ":"")+"(min-width: "+a+"px)");void 0!==b&&(c+=(c?" and ":
"")+"(max-width: "+b+"px)");return c}(),l=c("body");this.getCondition=function(){return j};this.isActive=function(){return m};this.isMatched=function(){var g;g=c("#muse_css_mq").css("background-color");g.match(/^rgb/)?(g=g.replace(/\s+/g,"").match(/([\d\,]+)/gi)[0].split(","),g=(parseInt(g[0])<<16)+(parseInt(g[1])<<8)+parseInt(g[2])):g=g.match(/^\#/)?parseInt(g.substr(1),16):0;var h=f.attr("data-max-width")||16777215;16777214==g&&b("WARNING: No media query was matched by the CSS.");d&&g<a.width()&&
(d=!1,c("html").addClass("always_vert_scroll"));return h==g};this.activateImages=function(){var a=0;c(".temp_no_img_src",f).each(function(){var b=c(this);a++;b.removeClass("temp_no_img_src").attr("src",b.attr("data-orig-src")).removeAttr("data-orig-src")})};this.swapPlaceholderNodesRecursively=function(a){var d=this;c(".placeholder",a).each(function(){var a=c(this),f=a.attr("data-placeholder-for");if(f){var g=c(".shared_content").filter(function(a,b){return f==c(b).attr("data-content-guid")});0==
g.length?b("WARNING: Could not find content node with GUID",f):1<g.length?b("WARNING: Found",g.length,"content nodes with GUID",f,", expected only 1"):(h(a,g),d.swapPlaceholderNodesRecursively(g))}else b("WARNING: Invalid placeholder-for data property for placeholder node",a)})};this.activateIDs=function(a){c(".temp_no_id",a).each(function(){var a=c(this),d=a.attr("data-orig-id"),f=c("#"+d);1==f.length?f.removeAttr("id").attr("data-orig-id",d).addClass("temp_no_id"):b("WARNING: Expected to find 1 node with id",
d,"but found",f.length);a.removeAttr("data-orig-id").attr("id",d).removeClass("temp_no_id")})};this.activate=function(){m?b("WARNING: Trying to activate same breakpoint twice",this.toString()):(this.swapPlaceholderNodesRecursively(f),this.activateIDs(f),this.activateImages(),n(!0))};this.deactivate=function(){m?n(!1):b("WARNING: Trying to deactivate same breakpoint twice",this.toString())};this.onRegisterAlreadyActiveBP=function(){this.activateImages();l.trigger("muse_bp_activate",[j,f,g]);f.trigger("muse_this_bp_activate")};
this.toString=function(){return"[Breakpoint "+j+", "+(m?"active":"not active")+", "+(this.isMatched()?"matched":"not matched")+"]"}},j=new function(){var d=function(c){if(c)if(c==j)b("WARNING: breakpoint is already active.");else{j&&j.deactivate();j=c;a.data("muse-mq",c.getCondition());h.attr("data-content",j.toString());if(!c.isActive())return j.activate(),!0;return!1}else b("WARNING: Cannot update active breakpoint NULL.")},f=function(){for(var a=0;a<r.length;a++)if(r[a].isMatched())return r[a];
b("WARNING: Could not find any active breakpoint");return null},g=function(){if(!j||!j.isMatched()){var b=f();b&&!b.isActive()&&(c("body").addClass("awaiting_bp_activate_scroll"),d(b));var g=o;setTimeout(function(){a.scrollTop(g);a.trigger("scroll");c("body").removeClass("awaiting_bp_activate_scroll")},16)}else o=a.scrollTop()},h=c(".css-section-debug .js"),j=null,l=!1,o=0,r=[];this.registerBreakpoint=function(a){r.push(a);if(a.isMatched()){if(!d(a))a.onRegisterAlreadyActiveBP()}else a.isActive()&&
a.deactivate()};this.watchBreakpointChanges=function(){l||(a.on("resize",function(){Muse.Utils.requestAnimationFrame(function(){g()})}),g(),l=!0)}},l=null;c.fn.registerBreakpoint=function(){if(!window.matchMedia&&"undefined"==typeof window.CSSMediaRule)b("WARNING: Browser does not support media queries."),this.each(function(){var a=c(this);if(void 0===(a.attr("data-max-width")||void 0)){var b=new g(a);b.activateImages();c("body").trigger("muse_bp_activate",[b.getCondition(),a,b]);a.trigger("muse_this_bp_activate")}});
else return null==l&&(l=c("body").append('<div id="muse_css_mq"></div>')),this.each(function(){j.registerBreakpoint(new g(c(this)))}),j.watchBreakpointChanges(),a.trigger("scroll"),this}});
;(function(){if(!("undefined"==typeof Muse||"undefined"==typeof Muse.assets)){var c=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]==b)return c;return-1}(Muse.assets.required,"jquery.museresponsive.js");if(-1!=c){Muse.assets.required.splice(c,1);for(var c=document.getElementsByTagName("meta"),b=0,d=c.length;b<d;b++){var a=c[b];if("generator"==a.getAttribute("name")){"2018.1.0.386"!=a.getAttribute("content")&&Muse.assets.outOfDate.push("jquery.museresponsive.js");break}}}}})();


}
/*
     FILE ARCHIVED ON 17:27:22 Oct 15, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:25:20 Aug 01, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.53
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 27.395
  LoadShardBlock: 241.811 (3)
  PetaboxLoader3.datanode: 175.249 (5)
  PetaboxLoader3.resolve: 220.353 (3)
  load_resource: 237.702 (2)
*/