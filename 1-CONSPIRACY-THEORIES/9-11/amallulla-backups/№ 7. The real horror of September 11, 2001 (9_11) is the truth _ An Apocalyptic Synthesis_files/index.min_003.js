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

!function(){"use strict";var n={d:function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o:function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r:function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},t={};n.r(t),n.d(t,{actions:function(){return S},addAction:function(){return m},addFilter:function(){return p},applyFilters:function(){return k},createHooks:function(){return h},currentAction:function(){return w},currentFilter:function(){return I},defaultHooks:function(){return f},didAction:function(){return O},didFilter:function(){return j},doAction:function(){return b},doingAction:function(){return x},doingFilter:function(){return T},filters:function(){return z},hasAction:function(){return _},hasFilter:function(){return g},removeAction:function(){return A},removeAllActions:function(){return y},removeAllFilters:function(){return F},removeFilter:function(){return v}});var e=function(n){return"string"!=typeof n||""===n?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)},r=function(n){return"string"!=typeof n||""===n?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(n)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)},o=function(n,t){return function(o,i,c){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;const u=n[t];if(!r(o))return;if(!e(i))return;if("function"!=typeof c)return void console.error("The hook callback must be a function.");if("number"!=typeof s)return void console.error("If specified, the hook priority must be a number.");const l={callback:c,priority:s,namespace:i};if(u[o]){const n=u[o].handlers;let t;for(t=n.length;t>0&&!(s>=n[t-1].priority);t--);t===n.length?n[t]=l:n.splice(t,0,l),u.__current.forEach((n=>{n.name===o&&n.currentIndex>=t&&n.currentIndex++}))}else u[o]={handlers:[l],runs:0};"hookAdded"!==o&&n.doAction("hookAdded",o,i,c,s)}},i=function(n,t){let o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(i,c){const s=n[t];if(!r(i))return;if(!o&&!e(c))return;if(!s[i])return 0;let u=0;if(o)u=s[i].handlers.length,s[i]={runs:s[i].runs,handlers:[]};else{const n=s[i].handlers;for(let t=n.length-1;t>=0;t--)n[t].namespace===c&&(n.splice(t,1),u++,s.__current.forEach((n=>{n.name===i&&n.currentIndex>=t&&n.currentIndex--})))}return"hookRemoved"!==i&&n.doAction("hookRemoved",i,c),u}},c=function(n,t){return function(e,r){const o=n[t];return void 0!==r?e in o&&o[e].handlers.some((n=>n.namespace===r)):e in o}},s=function(n,t){let e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(r){const o=n[t];o[r]||(o[r]={handlers:[],runs:0}),o[r].runs++;const i=o[r].handlers;for(var c=arguments.length,s=new Array(c>1?c-1:0),u=1;u<c;u++)s[u-1]=arguments[u];if(!i||!i.length)return e?s[0]:void 0;const l={name:r,currentIndex:0};for(o.__current.push(l);l.currentIndex<i.length;){const n=i[l.currentIndex].callback.apply(null,s);e&&(s[0]=n),l.currentIndex++}return o.__current.pop(),e?s[0]:void 0}},u=function(n,t){return function(){var e,r;const o=n[t];return null!==(e=null===(r=o.__current[o.__current.length-1])||void 0===r?void 0:r.name)&&void 0!==e?e:null}},l=function(n,t){return function(e){const r=n[t];return void 0===e?void 0!==r.__current[0]:!!r.__current[0]&&e===r.__current[0].name}},a=function(n,t){return function(e){const o=n[t];if(r(e))return o[e]&&o[e].runs?o[e].runs:0}};class d{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=o(this,"actions"),this.addFilter=o(this,"filters"),this.removeAction=i(this,"actions"),this.removeFilter=i(this,"filters"),this.hasAction=c(this,"actions"),this.hasFilter=c(this,"filters"),this.removeAllActions=i(this,"actions",!0),this.removeAllFilters=i(this,"filters",!0),this.doAction=s(this,"actions"),this.applyFilters=s(this,"filters",!0),this.currentAction=u(this,"actions"),this.currentFilter=u(this,"filters"),this.doingAction=l(this,"actions"),this.doingFilter=l(this,"filters"),this.didAction=a(this,"actions"),this.didFilter=a(this,"filters")}}var h=function(){return new d};const f=h(),{addAction:m,addFilter:p,removeAction:A,removeFilter:v,hasAction:_,hasFilter:g,removeAllActions:y,removeAllFilters:F,doAction:b,applyFilters:k,currentAction:w,currentFilter:I,doingAction:x,doingFilter:T,didAction:O,didFilter:j,actions:S,filters:z}=f;(window.wp=window.wp||{}).hooks=t}();
//# sourceMappingURL=index.min.js.map

}
/*
     FILE ARCHIVED ON 00:49:41 Apr 07, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:00:29 Sep 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.776
  exclusion.robots: 0.029
  exclusion.robots.policy: 0.013
  esindex: 0.014
  cdx.remote: 124.24
  LoadShardBlock: 396.509 (3)
  PetaboxLoader3.datanode: 496.444 (5)
  load_resource: 713.797 (2)
  PetaboxLoader3.resolve: 364.929 (2)
*/