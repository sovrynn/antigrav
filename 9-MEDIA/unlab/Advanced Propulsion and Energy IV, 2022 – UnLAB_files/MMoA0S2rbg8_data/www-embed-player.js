(function(){'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var fa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ha=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=fa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ia;
if(typeof Object.setPrototypeOf=="function")ia=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},oa={};try{oa.__proto__=ma;la=oa.a;break a}catch(a){}la=!1}ia=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=ia;
function v(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ca=b.prototype}
function y(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function qa(a){if(!(a instanceof Array)){a=y(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ra(a){return sa(a,a)}
function sa(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ta(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ua=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ua});
function va(){this.B=!1;this.o=null;this.i=void 0;this.h=1;this.u=this.H=0;this.J=this.j=null}
function wa(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
va.prototype.G=function(a){this.i=a};
function xa(a,b){a.j={exception:b,Zd:!0};a.h=a.H||a.u}
va.prototype.return=function(a){this.j={return:a};this.h=this.u};
va.prototype.yield=function(a,b){this.h=b;return{value:a}};
va.prototype.A=function(a){this.h=a};
function ya(a,b,c){a.H=b;c!=void 0&&(a.u=c)}
function za(a,b){a.h=b;a.H=0}
function Aa(a){a.H=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){a.J=[a.j];a.H=0;a.u=0}
function Ca(a,b){var c=a.J.splice(0)[0];(c=a.j=a.j||c)?c.Zd?a.h=a.H||a.u:c.A!=void 0&&a.u<c.A?(a.h=c.A,a.j=null):a.h=a.u:a.h=b}
function Da(a){this.h=new va;this.i=a}
function Ea(a,b){wa(a.h);var c=a.h.o;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.o,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.B=!1,e;var f=e.value}catch(g){return a.h.o=null,xa(a.h,g),Ga(a)}a.h.o=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.B=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.B=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Zd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){wa(a.h);a.h.o?b=Fa(a,a.h.o.next,b,a.h.G):(a.h.G(b),b=Ga(a));return b};
this.throw=function(b){wa(a.h);a.h.o?b=Fa(a,a.h.o["throw"],b,a.h.G):(xa(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("globalThis",function(a){return a||da});
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ha});
u("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.Y=0;this.ib=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.V),reject:g(this.j)}};
b.prototype.V=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.aa(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.o(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.H(2,g)};
b.prototype.o=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.Y!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.Y);this.Y=g;this.ib=h;this.Y===2&&this.Z();this.B()};
b.prototype.Z=function(){var g=this;e(function(){if(g.G()){var h=da.console;typeof h!=="undefined"&&h.error(g.ib)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.ib;return k(g)};
b.prototype.B=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.aa=function(g){var h=this.i();g.Cc(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(w){try{l(r(w))}catch(z){m(z)}}:t}
var l,m,n=new b(function(r,t){l=r;m=t});
this.Cc(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Cc=function(g,h){function k(){switch(l.Y){case 1:g(l.ib);break;case 2:h(l.ib);break;default:throw Error("Unexpected state: "+l.Y);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=y(g),m=l.next();!m.done;m=l.next())d(m.value).Cc(h,k)})};
b.all=function(g){var h=y(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(z){r[w]=z;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Cc(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||pa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("SuppressedError",function(a){function b(c,d,e){if(!(this instanceof b))return new b(c,d,e);e=Error(e);"stack"in e&&(this.stack=e.stack);this.message=e.message;this.error=c;this.suppressed=d}
if(a)return a;v(b,Error);b.prototype.name="SuppressedError";return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=y(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ta(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ta(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ta(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ta(k,g)&&ta(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ta(k,g)&&ta(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ta(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=y(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(y([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=y(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(y([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ja(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ja(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ja(this,function(b){return b})}});
function Ka(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ka(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ja(this,function(b,c){return c})}});
u("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
u("Math.imul",function(a){return a?a:function(b,c){b=Number(b);c=Number(c);var d=b&65535,e=c&65535;return d*e+((b>>>16&65535)*e+d*(c>>>16&65535)<<16>>>0)|0}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ma(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Na(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Pa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(Math.random()*1E9>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Xa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ya(a,b,c){Ya=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ta:Xa;return Ya.apply(null,arguments)}
function Za(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function $a(){return Date.now()}
function ab(a){return a}
function bb(a,b){function c(){}
c.prototype=b.prototype;a.Ca=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function cb(a){var b=B.apply(1,arguments).filter(Boolean).join("&");if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")<0?"?":"&")+b}
function db(a,b){return b?"&"+a+"="+encodeURIComponent(b):""}
function eb(a){var b=a.url;a=a.uj;this.i=b;this.o=a;this.j=(new Date).getTime()-17040672E5;this.h={};for(var c=/[?&]([^&=]+)=([^&]*)/g;a=c.exec(b);)this.h[a[1]]=a[2]}
function fb(a){a=a.o;if(!a)return"";var b=db("uap",a.platform)+db("uapv",a.platformVersion)+db("uafv",a.uaFullVersion)+db("uaa",a.architecture)+db("uam",a.model)+db("uab",a.bitness);a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+";"+encodeURIComponent(c.version)}).join("|")));
a.wow64!=null&&(b+="&uaw="+Number(a.wow64));return b.slice(1)}
;function hb(a,b){if(b!==null&&b!==void 0){if(typeof b!=="object"&&typeof b!=="function")throw new TypeError("Object expected.");if(c===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");var c=b[Symbol.dispose]}if(typeof c!=="function")throw new TypeError("Object not disposable.");a.stack.push({value:b,dispose:c,async:!1})}return b}
function ib(a){function b(f){a.error=a.pb?new SuppressedError(f,a.error,"An error was suppressed during disposal."):f;a.pb=!0}
function c(){for(;d=a.stack.pop();)try{if(!d.async&&e===1)return e=0,a.stack.push(d),Promise.resolve().then(c);if(d.dispose){var f=d.dispose.call(d.value);if(d.async)return e|=2,Promise.resolve(f).then(c,function(g){b(g);return c()})}else e|=1}catch(g){b(g)}if(e===1)return a.pb?Promise.reject(a.error):Promise.resolve();
if(a.pb)throw a.error;}
var d,e=0;c()}
;function jb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,jb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
bb(jb,Error);jb.prototype.name="CustomError";var kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var lb=globalThis.trustedTypes,mb;function nb(){var a=null;if(!lb)return a;try{var b=function(c){return c};
a=lb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function ob(){mb===void 0&&(mb=nb());return mb}
;function pb(a){this.h=a}
pb.prototype.toString=function(){return this.h+""};
function qb(a){var b=ob();a=b?b.createScriptURL(a):a;return new pb(a)}
function rb(a){if(a instanceof pb)return a.h;throw Error("");}
;var sb=ra([""]),tb=sa(["\x00"],["\\0"]),ub=sa(["\n"],["\\n"]),vb=sa(["\x00"],["\\u0000"]);function wb(a){return a.toString().indexOf("`")===-1}
wb(function(a){return a(sb)})||wb(function(a){return a(tb)})||wb(function(a){return a(ub)})||wb(function(a){return a(vb)});function xb(a){this.h=a}
xb.prototype.toString=function(){return this.h};
var yb=new xb("about:invalid#zClosurez");function zb(a){this.Hf=a}
function Ab(a){return new zb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Bb=[Ab("data"),Ab("http"),Ab("https"),Ab("mailto"),Ab("ftp"),new zb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],Cb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function Db(a){if(a instanceof xb)if(a instanceof xb)a=a.h;else throw Error("");else a=Cb.test(a)?a:void 0;return a}
;function Eb(a,b){b=Db(b);b!==void 0&&(a.href=b)}
;function Fb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function Gb(a){this.h=a}
Gb.prototype.toString=function(){return this.h+""};function Hb(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Ib(a){this.h=a}
Ib.prototype.toString=function(){return this.h+""};
function Jb(a){var b=ob();a=b?b.createScript(a):a;return new Ib(a)}
function Kb(a){if(a instanceof Ib)return a.h;throw Error("");}
;function Lb(a){var b=Hb(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Mb(a,b){a.src=rb(b);Lb(a)}
;function Nb(){this.h=Ob[0].toLowerCase()}
Nb.prototype.toString=function(){return this.h};function Pb(a){var b="true".toString(),c=[new Nb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Nb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Qb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Rb(a,b){if(b instanceof pb)a.href=rb(b).toString(),a.rel="stylesheet";else{if(Qb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Db(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Sb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Tb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Ub=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Vb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Wb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Tb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Xb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Yb(a,b){b=Sb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Zb(a){var b=a.length;if(b>0){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function $b(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function ac(a,b){return a>b?1:a<b?-1:0}
;function bc(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function cc(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=dc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ec[c])c=ec[c];else{c=String(c);if(!ec[c]){var f=/function\s+([^\(]+)/m.exec(c);ec[c]=f?f[1]:"[Anonymous]"}c=ec[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function dc(a,b){b||(b={});b[fc(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[fc(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=dc(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[fc(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=dc(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function fc(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var ec={};function hc(a){return decodeURIComponent(a.replace(/\+/g," "))}
function ic(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var jc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kc(a){return a?decodeURI(a):a}
function mc(a){return kc(a.match(jc)[3]||null)}
function nc(a){return kc(a.match(jc)[5]||null)}
function oc(a){var b=a.match(jc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function pc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function qc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(d>=0){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?hc(e):"")}}}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function sc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function tc(a,b){b=sc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function uc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var vc=/#|$/,wc=/[?&]($|#)/;function xc(a,b){for(var c=a.search(vc),d=0,e,f=[];(e=uc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(wc,"$1")}
;function yc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function F(a,b,c){c=c===void 0?Error():c;var d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.code=a;b+=":";c instanceof Error?(this.message=b+c.message,this.stack=c.stack||""):(this.message=b+String(c),this.stack="");Object.setPrototypeOf(this,this.constructor.prototype)}
v(F,Error);function zc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function Ac(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Oa(d)?Ac.apply(null,d):zc(d)}}
;function I(){this.T=this.T;this.H=this.H}
I.prototype.T=!1;I.prototype.dispose=function(){this.T||(this.T=!0,this.da())};
I.prototype[Symbol.dispose]=function(){this.dispose()};
function Bc(a,b){a.addOnDisposeCallback(Za(zc,b))}
I.prototype.addOnDisposeCallback=function(a,b){this.T?b!==void 0?a.call(b):a():(this.H||(this.H=[]),b&&(a=a.bind(b)),this.H.push(a))};
I.prototype.da=function(){if(this.H)for(;this.H.length;)this.H.shift()()};function Cc(){var a=Dc();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:yc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new Ec(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new Ec(f))}))})}
function Ec(a){I.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Qb=this.vm.p;this.j=this.kc.bind(this);this.addOnDisposeCallback(function(){return void Fc(b)})}
v(Ec,I);Ec.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.Ha&&{c:a.Ha},a.cd&&{s:a.cd},a.Gd!==void 0&&{p:a.Gd}))};
Ec.prototype.kc=function(a){this.vm.e(a)};
Ec.prototype.Dc=function(a,b){return this.vm.c(a,b,!1)};
function Fc(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
Ec.prototype.sc=function(){return this.vm.l()};function Gc(a){var b,c,d={Ha:a.c,od:a.e,Qf:(b=a.mc)!=null?b:!1,Rf:(c=a.me)!=null?c:!1};a.co&&(d.Ac={Qd:a.co.c,Oe:a.co.a,Ag:a.co.s});return d}
function Hc(a){return function(){var b;return A(function(c){if(c.h==1)return c.yield(a(),2);b=c.i;return c.return({f:function(){return b.Pb.promise},
c:function(d){if(d>150)var e=!1;else try{b.cache=new Ic(d,b.logger),e=!0}catch(f){Jc(b,new F(22,"GBJ:init",f)),e=!1}return e},
m:function(d){return b.gb(Gc(d))},
mws:function(d){return b.Qc(Gc(d))}})})}}
function Kc(a,b){var c=Dc();c=c===void 0?"bevasrsg":c;b={s:function(f){var g;return a.snapshot(Object.assign({},f.c&&{Ha:f.c},f.s&&{cd:f.s},{sj:(g=f.p)!=null?g:!0}))},
e:function(f){var g;return void((g=a.kc)==null?void 0:g.call(a,f))},
c:function(f,g){return a.Dc(f,g)},
p:a.Qb,l:function(){return a.sc()},
wpc:b?Hc(b):void 0};var d=window===window.top?window:yc()?window:window.top,e=d[c];if(e){e.bevasrs=b;if(e.nqfbel!==void 0)for(c=y(e.nqfbel),d=c.next();!d.done;d=c.next())d=d.value,d(b);e.nqfbel=void 0}else e={},e=(e.bevasrs=b,e.nqfbel=void 0,e),d[c]=e}
;function Lc(a){var b=b===void 0?50:b;var c=[];Mc(a,Nc,6).forEach(function(d){Oc(d,2)<=b&&c.push(Oc(d,1))});
return c}
function Pc(a){var b=b===void 0?50:b;var c=[];Mc(a,Nc,6).forEach(function(d){Oc(d,2)>b&&c.push(Oc(d,1))});
return c}
;function Qc(a){a.then(function(){},function(){})}
function Rc(){I.apply(this,arguments);this.i=1}
v(Rc,I);Rc.prototype.share=function(){if(this.T)throw Error("E:AD");this.i++;return this};
Rc.prototype.dispose=function(){--this.i||I.prototype.dispose.call(this)};function Sc(a){return{fieldType:2,fieldName:a}}
function Tc(a){return{fieldType:3,fieldName:a}}
;function Uc(a){this.h=a;a.kd("/client_streamz/bg/frs",Tc("mk"))}
Uc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Vc(a){this.h=a;a.kd("/client_streamz/bg/wrl",Tc("mn"),Sc("ac"),Sc("sc"),Tc("rk"),Tc("mk"))}
Vc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Wc(a){this.h=a;a.Wb("/client_streamz/bg/ec",Tc("en"),Tc("mk"))}
Wc.prototype.Ia=function(a,b){this.h.Tb("/client_streamz/bg/ec",a,b)};
function Xc(a){this.h=a;a.kd("/client_streamz/bg/el",Tc("en"),Tc("mk"))}
Xc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)};
function Yc(a){this.h=a;a.Wb("/client_streamz/bg/cec",Sc("ec"),Tc("mk"))}
Yc.prototype.Ia=function(a,b){this.h.Tb("/client_streamz/bg/cec",a,b)};
function Zc(a){this.h=a;a.Wb("/client_streamz/bg/po/csc",Sc("cs"),Tc("mk"))}
Zc.prototype.Ia=function(a,b){this.h.Tb("/client_streamz/bg/po/csc",a,b)};
function $c(a){this.h=a;a.Wb("/client_streamz/bg/po/ctav",Tc("av"),Tc("mk"))}
$c.prototype.Ia=function(a,b){this.h.Tb("/client_streamz/bg/po/ctav",a,b)};
function ad(a){this.h=a;a.Wb("/client_streamz/bg/po/cwsc",Tc("su"),Tc("mk"))}
ad.prototype.Ia=function(a,b){this.h.Tb("/client_streamz/bg/po/cwsc",a,b)};var bd,cd=typeof String.prototype.isWellFormed==="function",dd=typeof TextEncoder!=="undefined";
function ed(a){var b=!1;b=b===void 0?!1:b;if(dd){if(b&&(cd?!a.isWellFormed():/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)))throw Error("Found an unpaired surrogate");a=(bd||(bd=new TextEncoder)).encode(a)}else{for(var c=0,d=new Uint8Array(3*a.length),e=0;e<a.length;e++){var f=a.charCodeAt(e);if(f<128)d[c++]=f;else{if(f<2048)d[c++]=f>>6|192;else{if(f>=55296&&f<=57343){if(f<=56319&&e<a.length){var g=a.charCodeAt(++e);if(g>=56320&&g<=57343){f=(f-55296)*1024+g-56320+
65536;d[c++]=f>>18|240;d[c++]=f>>12&63|128;d[c++]=f>>6&63|128;d[c++]=f&63|128;continue}else e--}if(b)throw Error("Found an unpaired surrogate");f=65533}d[c++]=f>>12|224;d[c++]=f>>6&63|128}d[c++]=f&63|128}}a=c===d.length?d:d.subarray(0,c)}return a}
;function fd(a){C.setTimeout(function(){throw a;},0)}
;function gd(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
;var hd=Ma(610401301,!1),id=Ma(748402147,Ma(1,!0));function jd(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var kd,ld=C.navigator;kd=ld?ld.userAgentData||null:null;function md(a){if(!hd||!kd)return!1;for(var b=0;b<kd.brands.length;b++){var c=kd.brands[b].brand;if(c&&c.indexOf(a)!=-1)return!0}return!1}
function J(a){return jd().indexOf(a)!=-1}
;function nd(){return hd?!!kd&&kd.brands.length>0:!1}
function od(){return nd()?!1:J("Opera")}
function pd(){return J("Firefox")||J("FxiOS")}
function qd(){return nd()?md("Chromium"):(J("Chrome")||J("CriOS"))&&!(nd()?0:J("Edge"))||J("Silk")}
;function rd(){return hd?!!kd&&!!kd.platform:!1}
function sd(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function td(a){td[" "](a);return a}
td[" "]=function(){};var ud=od(),vd=nd()?!1:J("Trident")||J("MSIE"),wd=J("Edge"),xd=J("Gecko")&&!(jd().toLowerCase().indexOf("webkit")!=-1&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),yd=jd().toLowerCase().indexOf("webkit")!=-1&&!J("Edge");yd&&J("Mobile");rd()||J("Macintosh");rd()||J("Windows");(rd()?kd.platform==="Linux":J("Linux"))||rd()||J("CrOS");var zd=rd()?kd.platform==="Android":J("Android");sd();J("iPad");J("iPod");sd()||J("iPad")||J("iPod");jd().toLowerCase().indexOf("kaios");pd();var Ad=sd()||J("iPod"),Bd=J("iPad");!J("Android")||qd()||pd()||od()||J("Silk");qd();var Cd=J("Safari")&&!(qd()||(nd()?0:J("Coast"))||od()||(nd()?0:J("Edge"))||(nd()?md("Microsoft Edge"):J("Edg/"))||(nd()?md("Opera"):J("OPR"))||pd()||J("Silk")||J("Android"))&&!(sd()||J("iPad")||J("iPod"));var Dd={},Ed=null;function Fd(a,b){Oa(a);b===void 0&&(b=0);Gd();b=Dd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Hd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;Id(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Id(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Ed[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Gd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Gd(){if(!Ed){Ed={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));Dd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];Ed[f]===void 0&&(Ed[f]=e)}}}}
;var Jd=typeof Uint8Array!=="undefined",Kd=!vd&&typeof btoa==="function",Ld=/[-_.]/g,Md={"-":"+",_:"/",".":"="};function Nd(a){return Md[a]||""}
var Od={};function Pd(a,b){Qd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
function Rd(){return Sd||(Sd=new Pd(null,Od))}
function Td(a){return new Uint8Array(Ud(a)||0)}
Pd.prototype.sizeBytes=function(){var a=Ud(this);return a?a.length:0};
function Ud(a){Qd(Od);var b=a.h;if(!(b==null||Jd&&b!=null&&b instanceof Uint8Array))if(typeof b==="string")if(Kd){b=Ld.test(b)?b.replace(Ld,Nd):b;b=atob(b);for(var c=new Uint8Array(b.length),d=0;d<b.length;d++)c[d]=b.charCodeAt(d);b=c}else b=Hd(b);else Na(b),b=null;return b==null?b:a.h=b}
var Sd;function Qd(a){if(a!==Od)throw Error("illegal external caller");}
;var Vd=void 0;function Wd(a){a=Error(a);bc(a,"warning");return a}
function Yd(a,b){if(a!=null){var c;var d=(c=Vd)!=null?c:Vd={};c=d[a]||0;c>=b||(d[a]=c+1,a=Error(),bc(a,"incident"),fd(a))}}
;var Zd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function $d(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var ae=$d("jas",void 0,!0),be=$d(void 0,"1oa"),ce=$d(void 0,Symbol()),de=$d(void 0,"0ub"),ee=$d(void 0,"0ubs"),fe=$d(void 0,"0ubsb"),ge=$d(void 0,"0actk"),he=$d("m_m","cj",!0),ie=$d(void 0,"vps"),je=$d();Math.max.apply(Math,qa(Object.values({Di:1,Ci:2,Bi:4,Gi:8,Ii:16,Ei:32,Xg:64,zi:128,dh:256,Hi:512,eh:1024,Ai:2048,Fi:4096})));var ke={Ff:{value:0,configurable:!0,writable:!0,enumerable:!1}},le=Object.defineProperties,K=Zd?ae:"Ff",me,ne=[];oe(ne,7);me=Object.freeze(ne);function pe(a,b){Zd||K in a||le(a,ke);a[K]|=b}
function oe(a,b){Zd||K in a||le(a,ke);a[K]=b}
;function qe(){return typeof BigInt==="function"}
;var re={};function se(a,b){return b===void 0?a.h!==te&&!!(2&(a.D[K]|0)):!!(2&b)&&a.h!==te}
var te={};function ue(a,b){if(a!=null)if(typeof a==="string")a=a?new Pd(a,Od):Rd();else if(a.constructor!==Pd)if(Jd&&a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new Pd(new Uint8Array(a),Od):Rd();else{if(!b)throw Error();a=void 0}return a}
var ve=Object.freeze({});function we(a,b,c){var d=b&128?0:-1,e=a.length,f;if(f=!!e)f=a[e-1],f=f!=null&&typeof f==="object"&&f.constructor===Object;var g=e+(f?-1:0);for(b=b&128?1:0;b<g;b++)c(b-d,a[b]);if(f){a=a[e-1];for(var h in a)!isNaN(h)&&c(+h,a[h])}}
var xe={};function ye(a){a.Vi=!0;return a}
;var ze=ye(function(a){return typeof a==="number"}),Ae=ye(function(a){return typeof a==="string"}),Be=ye(function(a){return typeof a==="boolean"});
function Ce(){var a=De;return ye(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var Ee=ye(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"}),Fe=ye(function(a){return!!a&&(typeof a==="object"||typeof a==="function")});var Ge=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function He(a){var b=a;if(Ae(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(ze(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Ge?BigInt(a):a=Be(a)?a?"1":"0":Ae(a)?a.trim()||"0":String(a)}
var Ne=ye(function(a){return Ge?a>=Ie&&a<=Je:a[0]==="-"?Ke(a,Le):Ke(a,Me)}),Le=Number.MIN_SAFE_INTEGER.toString(),Ie=Ge?BigInt(Number.MIN_SAFE_INTEGER):void 0,Me=Number.MAX_SAFE_INTEGER.toString(),Je=Ge?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function Ke(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var L=0,Oe=0,Pe;function Qe(a){var b=a>>>0;L=b;Oe=(a-b)/4294967296>>>0}
function Re(a){if(a<0){Qe(0-a);var b=y(Se(L,Oe));a=b.next().value;b=b.next().value;L=a>>>0;Oe=b>>>0}else Qe(a)}
function Te(a,b){var c=b*4294967296+(a>>>0);return Number.isSafeInteger(c)?c:Ue(a,b)}
function Ue(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else qe()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+Ve(c)+Ve(a));return c}
function Ve(a){a=String(a);return"0000000".slice(a.length)+a}
function We(){var a=L,b=Oe;b&2147483648?qe()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(Se(a,b)),a=b.next().value,b=b.next().value,a="-"+Ue(a,b)):a=Ue(a,b);return a}
function Xe(a){if(a.length<16)Re(Number(a));else if(qe())a=BigInt(a),L=Number(a&BigInt(4294967295))>>>0,Oe=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");Oe=L=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Oe*=1E6,L=L*1E6+d,L>=4294967296&&(Oe+=Math.trunc(L/4294967296),Oe>>>=0,L>>>=0);b&&(b=y(Se(L,Oe)),a=b.next().value,b=b.next().value,L=a,Oe=b)}}
function Se(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Ye(a){return Array.prototype.slice.call(a)}
;var Ze=typeof BigInt==="function"?BigInt.asIntN:void 0,$e=typeof BigInt==="function"?BigInt.asUintN:void 0,af=Number.isSafeInteger,bf=Number.isFinite,cf=Math.trunc;function df(a){return a.displayName||a.name||"unknown type name"}
function ef(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Na(a)+": "+a);return a}
var ff=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function gf(a){switch(typeof a){case "bigint":return!0;case "number":return bf(a);case "string":return ff.test(a);default:return!1}}
function hf(a){if(typeof a!=="number")throw Wd("int32");if(!bf(a))throw Wd("int32");return a|0}
function jf(a){return a==null?a:hf(a)}
function kf(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return bf(a)?a|0:void 0}
function lf(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return bf(a)?a>>>0:void 0}
function mf(a){var b=0;b=b===void 0?0:b;if(!gf(a))throw Wd("int64");var c=typeof a;switch(b){case 512:switch(c){case "string":return nf(a);case "bigint":return String(Ze(64,a));default:return of(a)}case 1024:switch(c){case "string":return pf(a);case "bigint":return He(Ze(64,a));default:return qf(a)}case 0:switch(c){case "string":return nf(a);case "bigint":return He(Ze(64,a));default:return rf(a)}default:return Fb(b,"Unknown format requested type for int64")}}
function sf(a){return a==null?a:mf(a)}
function tf(a){if(a[0]==="-")return!1;var b=a.length;return b<20?!0:b===20&&Number(a.substring(0,6))<184467}
function uf(a){var b=a.length;return a[0]==="-"?b<20?!0:b===20&&Number(a.substring(0,7))>-922337:b<19?!0:b===19&&Number(a.substring(0,6))<922337}
function vf(a){if(a<0){Re(a);var b=Ue(L,Oe);a=Number(b);return af(a)?a:b}b=String(a);if(tf(b))return b;Re(a);return Te(L,Oe)}
function wf(a){a.indexOf(".");if(uf(a))return a;Xe(a);return We()}
function rf(a){gf(a);a=cf(a);if(!af(a)){Re(a);var b=L,c=Oe;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=Te(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function of(a){gf(a);a=cf(a);if(af(a))a=String(a);else{var b=String(a);uf(b)?a=b:(Re(a),a=We())}return a}
function nf(a){gf(a);var b=cf(Number(a));if(af(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return wf(a)}
function pf(a){var b=cf(Number(a));if(af(b))return He(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return qe()?He(Ze(64,BigInt(a))):He(wf(a))}
function qf(a){return af(a)?He(rf(a)):He(of(a))}
function xf(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String(Ze(64,a));if(gf(a)){if(b==="string")return nf(a);if(b==="number")return rf(a)}}
function yf(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String($e(64,a));if(gf(a)){if(b==="string")return gf(a),b=cf(Number(a)),af(b)&&b>=0?a=String(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a.indexOf("."),tf(a)||(Xe(a),a=Ue(L,Oe))),a;if(b==="number")return gf(a),a=cf(a),a>=0&&af(a)?a:vf(a)}}
function zf(a){if(typeof a!=="string")throw Error();return a}
function Af(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Bf(a){return a==null||typeof a==="string"?a:void 0}
function Cf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+df(b)+" but got "+(a&&df(a.constructor)));}
function Df(a,b,c){if(a!=null&&a[he]===re)return a;if(Array.isArray(a)){var d=a[K]|0;c=d|c&32|c&2;c!==d&&oe(a,c);return new b(a)}}
;var Ef={};function Ff(a){return a}
;function Gf(a){var b=ab(ce);return b?a[b]:void 0}
var Hf={kj:!0};function If(a,b){b<100||Yd(ee,1)}
;function Jf(a,b,c,d){var e=d!==void 0;d=!!d;var f=ab(ce),g;!e&&Zd&&f&&(g=a[f])&&g.sf(If);f=[];var h=a.length;g=4294967295;var k=!1,l=!!(b&64),m=l?b&128?0:-1:void 0;if(!(b&1)){var n=h&&a[h-1];n!=null&&typeof n==="object"&&n.constructor===Object?(h--,g=h):n=void 0;if(l&&!(b&128)&&!e){k=!0;var r;g=((r=Kf)!=null?r:Ff)(g-m,m,a,n,void 0)+m}}b=void 0;for(r=0;r<h;r++){var t=a[r];if(t!=null&&(t=c(t,d))!=null)if(l&&r>=g){var w=r-m,z=void 0;((z=b)!=null?z:b={})[w]=t}else f[r]=t}if(n)for(var x in n)h=n[x],h!=
null&&(h=c(h,d))!=null&&(r=+x,t=void 0,l&&!Number.isNaN(r)&&(t=r+m)<g?f[t]=h:(r=void 0,((r=b)!=null?r:b={})[x]=h));b&&(k?f.push(b):f[g]=b);e&&ab(ce)&&Gf(a);return f}
function Lf(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return Ne(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[K]|0;return a.length===0&&b&1?void 0:Jf(a,b,Lf)}if(a!=null&&a[he]===re)return Mf(a);if(a instanceof Pd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{if(Kd){for(var c="",d=0,e=b.length-10240;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):
b);b=btoa(c)}else b=Fd(b);a=a.h=b}return a}return}return a}
var Kf;function Nf(a,b){if(b){Kf=b==null||b===Ff||b[ie]!==Ef?Ff:b;try{return Mf(a)}finally{Kf=void 0}}return Mf(a)}
function Mf(a){a=a.D;return Jf(a,a[K]|0,Lf)}
;var Of,Pf;function Qf(a){switch(typeof a){case "boolean":return Of||(Of=[0,void 0,!0]);case "number":return a>0?void 0:a===0?Pf||(Pf=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function M(a,b,c,d){d=d===void 0?0:d;if(a==null){var e=32;c?(a=[c],e|=128):a=[];b&&(e=e&-8380417|(b&1023)<<13)}else{if(!Array.isArray(a))throw Error("narr");e=a[K]|0;if(id&&1&e)throw Error("rfarr");2048&e&&!(2&e)&&Rf();if(e&256)throw Error("farr");if(e&64)return d!==0||e&2048||oe(a,e|2048),a;if(c&&(e|=128,c!==a[0]))throw Error("mid");a:{c=a;e|=64;var f=c.length;if(f){var g=f-1,h=c[g];if(h!=null&&typeof h==="object"&&h.constructor===Object){b=e&128?0:-1;g-=b;if(g>=1024)throw Error("pvtlmt");for(var k in h)f=
+k,f<g&&(c[f+b]=h[k],delete h[k]);e=e&-8380417|(g&1023)<<13;break a}}if(b){k=Math.max(b,f-(e&128?0:-1));if(k>1024)throw Error("spvt");e=e&-8380417|(k&1023)<<13}}}e|=64;d===0&&(e|=2048);oe(a,e);return a}
function Rf(){if(id)throw Error("carr");Yd(ge,5)}
;function Sf(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[K]|0;a.length===0&&c&1?a=void 0:c&2||(!b||4096&c||16&c?a=Tf(a,c,!1,b&&!(c&16)):(pe(a,34),c&4&&Object.freeze(a)));return a}if(a!=null&&a[he]===re)return b=a.D,c=b[K]|0,se(a,c)?a:Uf(a,b,c)?Vf(a,b):Tf(b,c);if(a instanceof Pd)return a}
function Vf(a,b,c){a=new a.constructor(b);c&&(a.h=te);a.i=te;return a}
function Tf(a,b,c,d){d!=null||(d=!!(34&b));a=Jf(a,b,Sf,d);d=32;c&&(d|=2);b=b&8380609|d;oe(a,b);return a}
function Wf(a){var b=a.D,c=b[K]|0;return se(a,c)?Uf(a,b,c)?Vf(a,b,!0):new a.constructor(Tf(b,c,!1)):a}
function Xf(a){if(a.h!==te)return!1;var b=a.D;b=Tf(b,b[K]|0);pe(b,2048);a.D=b;a.h=void 0;a.i=void 0;return!0}
function Yf(a){if(!Xf(a)&&se(a,a.D[K]|0))throw Error();}
function Zf(a,b){b===void 0&&(b=a[K]|0);b&32&&!(b&4096)&&oe(a,b|4096)}
function Uf(a,b,c){return c&2?!0:c&32&&!(c&4096)?(oe(b,c|2),a.h=te,!0):!1}
;var $f=He(0),ag={};function bg(a,b,c,d,e){Object.isExtensible(a);b=cg(a.D,b,c,e);if(b!==null||d&&a.i!==te)return b}
function cg(a,b,c,d){if(b===-1)return null;var e=b+(c?0:-1),f=a.length-1;if(!(f<1+(c?0:-1))){if(e>=f){var g=a[f];if(g!=null&&typeof g==="object"&&g.constructor===Object){c=g[b];var h=!0}else if(e===f)c=g;else return}else c=a[e];if(d&&c!=null){d=d(c);if(d==null)return d;if(!Object.is(d,c))return h?g[b]=d:a[e]=d,d}return c}}
function dg(a,b,c,d){Yf(a);var e=a.D;eg(e,e[K]|0,b,c,d);return a}
function eg(a,b,c,d,e){var f=c+(e?0:-1),g=a.length-1;if(g>=1+(e?0:-1)&&f>=g){var h=a[g];if(h!=null&&typeof h==="object"&&h.constructor===Object)return h[c]=d,b}if(f<=g)return a[f]=d,b;if(d!==void 0){var k;g=((k=b)!=null?k:b=a[K]|0)>>13&1023||536870912;c>=g?d!=null&&(f={},a[g+(e?0:-1)]=(f[c]=d,f)):a[f]=d}return b}
function fg(a){return!!(2&a)&&!!(4&a)||!!(256&a)}
function gg(a){return ue(a,!0)}
function hg(a){a=bg(a,1,void 0,void 0,gg);return a==null?Rd():a}
function ig(a,b,c){Yf(a);var d=a.D,e=d[K]|0;if(b==null)return eg(d,e,3),a;if(!Array.isArray(b))throw Wd();var f=b===me?7:b[K]|0,g=f,h=fg(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Ye(b),g=0,f=jg(f,e),k=!1);f|=5;h=4&f?512&f?512:1024&f?1024:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=Ye(b),g=0,f=jg(f,e),k=!1),b[l]=n)}f!==g&&(k&&(b=Ye(b),f=jg(f,e)),oe(b,f));eg(d,e,3,b);return a}
function kg(a,b,c,d){Yf(a);var e=a.D;eg(e,e[K]|0,b,c===""?void 0:c,d);return a}
function lg(a,b,c,d){Yf(a);a=a.D;var e=a[K]|0;if(d==null){var f=mg(a);if(ng(f,a,e,c)===b)f.set(c,0);else return}else{b===0||c.includes(b);f=mg(a);var g=ng(f,a,e,c);g!==b&&(g&&(e=eg(a,e,g)),f.set(c,b))}eg(a,e,b,d)}
function mg(a){if(Zd){var b;return(b=a[be])!=null?b:a[be]=new Map}if(be in a)return a[be];b=new Map;Object.defineProperty(a,be,{value:b});return b}
function ng(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];cg(b,g)!=null&&(e!==0&&(c=eg(b,c,e)),e=g)}a.set(d,e);return e}
function og(a,b,c,d,e){var f=!1;d=cg(a,d,e,function(g){var h=Df(g,c,b);f=h!==g&&h!=null;return h});
if(d!=null)return f&&!se(d)&&Zf(a,b),d}
function pg(a,b,c,d){var e=a.D,f=e[K]|0;b=og(e,f,b,c,d);if(b==null)return b;f=e[K]|0;if(!se(a,f)){var g=Wf(b);g!==b&&(Xf(a)&&(e=a.D,f=e[K]|0),b=g,f=eg(e,f,c,b,d),Zf(e,f))}return b}
function Mc(a,b,c){var d=void 0===ve?2:4;var e=a.D,f=e,g=e[K]|0,h=se(a,g);e=h?1:d;d=e===3;var k=!h;(e===2||k)&&Xf(a)&&(f=a.D,g=f[K]|0);a=cg(f,c);h=Array.isArray(a)?a:me;var l=h===me?7:h[K]|0;a=l;2&g&&(a|=2);var m=a|1;if(a=!(4&m)){var n=h,r=g,t=!!(2&m);t&&(r|=2);for(var w=!t,z=!0,x=0,H=0;x<n.length;x++){var G=Df(n[x],b,r);if(G instanceof b){if(!t){var V=se(G);w&&(w=!V);z&&(z=V)}n[H++]=G}}H<x&&(n.length=H);m|=4;m=z?m&-4097:m|4096;m=w?m|8:m&-9}m!==l&&(oe(h,m),2&m&&Object.freeze(h));if(k&&!(8&m||!h.length&&
(e===1||(e!==4?0:2&m||!(16&m)&&32&g)))){fg(m)&&(h=Ye(h),m=jg(m,g),g=eg(f,g,c,h));b=h;k=m;for(l=0;l<b.length;l++)n=b[l],m=Wf(n),n!==m&&(b[l]=m);k|=8;m=k=b.length?k|4096:k&-4097;oe(h,m)}b=h;k=h=m;e===1||(e!==4?0:2&h||!(16&h)&&32&g)?fg(h)||(h|=!b.length||a&&!(4096&h)||32&g&&!(4096&h||16&h)?2:256,h!==k&&oe(b,h),Object.freeze(b)):(e===2&&fg(h)&&(b=Ye(b),k=0,h=jg(h,g),g=eg(f,g,c,b)),fg(h)||(d||(h|=16),h!==k&&oe(b,h)));2&h||!(4096&h||16&h)||Zf(f,g);return b}
function qg(a,b){a!=null?Cf(a,b):a=void 0;return a}
function rg(a,b,c,d,e){d=qg(d,b);dg(a,c,d,e);d&&!se(d)&&Zf(a.D);return a}
function sg(a,b,c,d){Yf(a);var e=a.D,f=e[K]|0;if(d==null)return eg(e,f,c),a;if(!Array.isArray(d))throw Wd();for(var g=d===me?7:d[K]|0,h=g,k=fg(g),l=k||Object.isFrozen(d),m=!0,n=!0,r=0;r<d.length;r++){var t=d[r];Cf(t,b);k||(t=se(t),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g&-4097:g|4096);l&&g===h||(d=Ye(d),h=0,g=jg(g,f));g!==h&&oe(d,g);f=eg(e,f,c,d);2&g||!(4096&g||16&g)||Zf(e,f);return a}
function jg(a,b){return a=(2&b?a|2:a&-3)&-273}
function Oc(a,b,c){c=c===void 0?0:c;a=kf(bg(a,b));return a!=null?a:c}
function tg(a,b){var c=c===void 0?0:c;a=lf(bg(a,b));return a!=null?a:c}
function ug(a,b,c){c=c===void 0?$f:c;a=bg(a,b);b=typeof a;a=a==null?a:b==="bigint"?He(Ze(64,a)):gf(a)?b==="string"?pf(a):qf(a):void 0;return a!=null?a:c}
function vg(a,b,c,d){c=c===void 0?"":c;var e;return(e=Bf(bg(a,b,d)))!=null?e:c}
function wg(a){var b=b===void 0?0:b;a=bg(a,1);a=a==null?a:bf(a)?a|0:void 0;return a!=null?a:b}
function xg(a,b,c){return dg(a,b,Af(c))}
function yg(a,b,c){if(c!=null){if(!bf(c))throw Wd("enum");c|=0}return dg(a,b,c)}
;function zg(a,b){this.i=a>>>0;this.h=b>>>0}
function Ag(a){if(!a)return Bg||(Bg=new zg(0,0));if(!/^\d+$/.test(a))return null;Xe(a);return new zg(L,Oe)}
var Bg;function Cg(a,b){this.i=a>>>0;this.h=b>>>0}
function Dg(a){if(!a)return Eg||(Eg=new Cg(0,0));if(!/^-?\d+$/.test(a))return null;Xe(a);return new Cg(L,Oe)}
var Eg;function Fg(){this.h=[]}
Fg.prototype.length=function(){return this.h.length};
Fg.prototype.end=function(){var a=this.h;this.h=[];return a};
function Gg(a,b,c){for(;c>0||b>127;)a.h.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.h.push(b)}
function Hg(a,b){for(;b>127;)a.h.push(b&127|128),b>>>=7;a.h.push(b)}
Fg.prototype.writeUint8=function(a){this.h.push(a>>>0&255)};
function Ig(a,b){a.h.push(b>>>0&255);a.h.push(b>>>8&255);a.h.push(b>>>16&255);a.h.push(b>>>24&255)}
Fg.prototype.writeInt8=function(a){this.h.push(a>>>0&255)};function Jg(){this.j=[];this.i=0;this.h=new Fg}
function Kg(a,b){b.length!==0&&(a.j.push(b),a.i+=b.length)}
function Lg(a,b){Hg(a.h,b*8+2);b=a.h.end();Kg(a,b);b.push(a.i);return b}
function Mg(a,b){var c=b.pop();for(c=a.i+a.h.length()-c;c>127;)b.push(c&127|128),c>>>=7,a.i++;b.push(c);a.i++}
function Ng(a,b,c){if(c!=null){switch(typeof c){case "string":Ag(c)}Hg(a.h,b*8+1);switch(typeof c){case "number":a=a.h;Qe(c);Ig(a,L);Ig(a,Oe);break;case "bigint":c=BigInt.asUintN(64,c);c=new zg(Number(c&BigInt(4294967295)),Number(c>>BigInt(32)));a=a.h;b=c.h;Ig(a,c.i);Ig(a,b);break;default:c=Ag(c),a=a.h,b=c.h,Ig(a,c.i),Ig(a,b)}}}
function Og(a,b,c){Hg(a.h,b*8+2);Hg(a.h,c.length);Kg(a,a.h.end());Kg(a,c)}
;function Pg(){function a(){throw Error();}
Object.setPrototypeOf(a,a.prototype);return a}
var Qg=Pg(),Rg=Pg(),Sg=Pg(),Tg=Pg(),Ug=Pg(),Vg=Pg(),Wg=Pg();function N(a,b,c){this.D=M(a,b,c)}
N.prototype.toJSON=function(){return Nf(this)};
N.prototype.serialize=function(a){return JSON.stringify(Nf(this,a))};
function Xg(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");pe(b,32);return new a(b)}
N.prototype.clone=function(){var a=this.D,b=a[K]|0;return Uf(this,a,b)?Vf(this,a,!0):new this.constructor(Tf(a,b,!1))};
N.prototype[he]=re;N.prototype.toString=function(){return this.D.toString()};function Yg(a,b){this.hd=a;a=ab(Qg);this.h=!!a&&b===a||!1}
function Zg(a){var b=b===void 0?Qg:b;return new Yg(a,b)}
function $g(a,b,c,d,e){b=ah(b,d);b!=null&&(c=Lg(a,c),e(b,a),Mg(a,c))}
var bh=Zg($g),ch=Zg($g),dh=Symbol(),eh=Symbol(),fh,gh;
function hh(a){var b=ih,c=jh,d=a[dh];if(d)return d;d={};d.Li=a;d.ce=Qf(a[0]);var e=a[1],f=1;e&&e.constructor===Object&&(d.extensions=e,e=a[++f],typeof e==="function"&&(d.Gf=!0,fh!=null||(fh=e),gh!=null||(gh=a[f+1]),e=a[f+=2]));for(var g={};e&&kh(e);){for(var h=0;h<e.length;h++)g[e[h]]=e;e=a[++f]}for(h=1;e!==void 0;){typeof e==="number"&&(h+=e,e=a[++f]);var k=void 0;if(e instanceof Yg)var l=e;else l=bh,f--;e=void 0;if((e=l)==null?0:e.h){e=a[++f];k=a;var m=f;typeof e==="function"&&(e=e(),k[m]=e);k=
e}e=a[++f];m=h+1;typeof e==="number"&&e<0&&(m-=e,e=a[++f]);for(;h<m;h++){var n=g[h];k?c(d,h,l,k,n):b(d,h,l,n)}}return a[dh]=d}
function kh(a){return Array.isArray(a)&&!!a.length&&typeof a[0]==="number"&&a[0]>0}
function ah(a,b){if(a instanceof N)return a.D;if(Array.isArray(a))return M(a,b[0],b[1],2)}
;function ih(a,b,c){a[b]=c.hd}
function jh(a,b,c,d){var e,f,g=c.hd;a[b]=function(h,k,l){return g(h,k,l,f||(f=hh(d).ce),e||(e=lh(d)))}}
function lh(a){var b=a[eh];if(!b){var c=hh(a);b=function(d,e){return mh(d,e,c)};
a[eh]=b}return b}
function mh(a,b,c){we(a,a[K]|0,function(d,e){if(e!=null){var f=nh(c,d);f?f(b,e,d):d<500||Yd(fe,3)}});
(a=Gf(a))&&a.sf(function(d,e,f){Kg(b,b.h.end());for(d=0;d<f.length;d++)Kg(b,Ud(f[d])||new Uint8Array(0))})}
function nh(a,b){var c=a[b];if(c)return c;if(c=a.extensions)if(c=c[b]){c=Array.isArray(c)?c[0]instanceof Yg?c:[ch,c]:[c,void 0];var d=c[0].hd;if(c=c[1]){var e=lh(c),f=hh(c).ce;c=a.Gf?gh(f,e):function(g,h,k){return d(g,h,k,f,e)}}else c=d;
return a[b]=c}}
;function oh(a,b,c){if(Array.isArray(b)){var d=b[K]|0;if(d&4)return b;for(var e=0,f=0;e<b.length;e++){var g=a(b[e]);g!=null&&(b[f++]=g)}f<e&&(b.length=f);c&&(oe(b,(d|5)&-1537),d&2&&Object.freeze(b));return b}}
function ph(a,b,c){b=b==null||typeof b==="number"?b:b==="NaN"||b==="Infinity"||b==="-Infinity"?Number(b):void 0;b!=null&&(Hg(a.h,c*8+1),a=a.h,c=Pe||(Pe=new DataView(new ArrayBuffer(8))),c.setFloat64(0,+b,!0),L=c.getUint32(0,!0),Oe=c.getUint32(4,!0),Ig(a,L),Ig(a,Oe))}
function qh(a,b,c){b=xf(b);if(b!=null){switch(typeof b){case "string":Dg(b)}if(b!=null)switch(Hg(a.h,c*8),typeof b){case "number":a=a.h;Re(b);Gg(a,L,Oe);break;case "bigint":c=BigInt.asUintN(64,b);c=new Cg(Number(c&BigInt(4294967295)),Number(c>>BigInt(32)));Gg(a.h,c.i,c.h);break;default:c=Dg(b),Gg(a.h,c.i,c.h)}}}
function rh(a,b,c){b=kf(b);if(b!=null&&b!=null)if(Hg(a.h,c*8),a=a.h,c=b,c>=0)Hg(a,c);else{for(b=0;b<9;b++)a.h.push(c&127|128),c>>=7;a.h.push(1)}}
function sh(a,b,c){b=b==null||typeof b==="boolean"?b:typeof b==="number"?!!b:void 0;b!=null&&(Hg(a.h,c*8),a.h.h.push(b?1:0))}
function th(a,b,c){b=Bf(b);b!=null&&Og(a,c,ed(b))}
function uh(a,b,c,d,e){b=ah(b,d);b!=null&&(c=Lg(a,c),e(b,a),Mg(a,c))}
var vh=new Yg(ph,Wg),wh=new Yg(ph,Wg),xh=new Yg(qh,Ug),yh=new Yg(qh,Ug),zh=new Yg(rh,Tg),Ah=new Yg(rh,Tg),Bh;Bh=new Yg(function(a,b,c){Ng(a,c,yf(b))},Vg);
var Ch;Ch=new Yg(function(a,b,c){b=oh(yf,b,!1);if(b!=null)for(var d=0;d<b.length;d++)Ng(a,c,b[d])},Vg);
var Dh=new Yg(sh,Rg),Eh=new Yg(sh,Rg),Fh=new Yg(th,Sg),Gh;Gh=new Yg(function(a,b,c){b=oh(Bf,b,!0);if(b!=null)for(var d=0;d<b.length;d++){var e=a,f=c,g=b[d];g!=null&&Og(e,f,ed(g))}},Sg);
var Hh=new Yg(th,Sg),Ih,Jh=void 0;Jh=Jh===void 0?Qg:Jh;Ih=new Yg(function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)uh(a,b[f],c,d,e)},Jh);
var Kh=Zg(uh);function Lh(){var a=Mh;this.ctor=Nh;this.isRepeated=0;this.h=pg;this.defaultValue=void 0;this.i=a.Of!=null?xe:void 0}
Lh.prototype.register=function(){td(this)};function Oh(a){return function(b){return Xg(a,b)}}
;function Ph(a){this.D=M(a)}
v(Ph,N);function Qh(a,b){return ig(a,b,hf)}
;function Rh(a){this.D=M(a)}
v(Rh,N);var Sh=[1,2,3];var Th=[0,Sh,Hh,Ah,Eh];var Uh=[0,Ih,[0,vh,xh]];function Vh(a){this.D=M(a)}
v(Vh,N);var Wh=[1,2,3];var Xh=[0,Wh,yh,wh,Kh,Uh];function Yh(a){this.D=M(a)}
v(Yh,N);var Zh=[0,Ih,Th,Xh];var $h=[0,Fh];function ai(a){this.D=M(a)}
v(ai,N);var bi=[0,Fh,-1,Dh];var ci=[0,Fh,-1,zh,Dh];function di(a){this.D=M(a)}
v(di,N);var ei=[1,2,3];var fi=[0,ei,Kh,bi,Kh,ci,Kh,$h];function gi(a){this.D=M(a)}
v(gi,N);gi.prototype.j=function(a){return function(){var b=new Jg;mh(this.D,b,hh(a));Kg(b,b.h.end());for(var c=new Uint8Array(b.i),d=b.j,e=d.length,f=0,g=0;g<e;g++){var h=d[g];c.set(h,f);f+=h.length}b.j=[c];return c}}([0,
Fh,fi,Gh,Ih,Zh,Bh,Ch]);function hi(a){this.D=M(a)}
v(hi,N);function ii(a){var b=new gi;b=xg(b,1,a.i);var c=ji(a);b=ig(b,c,zf);c=[];for(var d=[],e=y(a.h.keys()),f=e.next();!f.done;f=e.next())d.push(f.value.split(","));for(e=0;e<d.length;e++){f=d[e];for(var g=a.o,h=a.rd(f)||[],k=[],l=0;l<h.length;l++){var m=h[l],n=m&&m.h;m=new Vh;switch(g){case 3:n=Number(n);Number.isFinite(n)&&lg(m,1,Wh,sf(n));break;case 2:n=Number(n);if(n!=null&&typeof n!=="number")throw Error("Value of float/double field must be a number, found "+typeof n+": "+n);lg(m,2,Wh,n)}k.push(m)}g=
k;for(h=0;h<g.length;h++){k=g[h];l=new Yh;k=rg(l,Vh,2,k);l=[];m=mi(a);for(n=0;n<m.length;n++){var r=m[n],t=f[n],w=new Rh;switch(r){case 3:lg(w,1,Sh,Af(String(t)));break;case 2:r=Number(t);Number.isFinite(r)&&lg(w,2,Sh,jf(r));break;case 1:lg(w,3,Sh,ef(t==="true"))}l.push(w)}sg(k,Rh,1,l);c.push(k)}}sg(b,Yh,4,c);return b}
;function ni(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function oi(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,t=0;t<64;t+=4)r[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],z=e[2],x=e[3],H=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var G=x^w&(z^x);var V=1518500249}else G=w^z^x,V=1859775393;else t<60?(G=w&z|x&(w|z),V=2400959708):(G=w^z^x,V=3395469782);G=((n<<5|n>>>27)&4294967295)+G+H+V+r[t]&4294967295;H=x;x=z;z=(w<<30|w>>>2)&4294967295;w=n;n=G}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+x&4294967295;e[4]=e[4]+H&4294967295}
function c(n,r){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],w=0,z=n.length;w<z;++w)t.push(n.charCodeAt(w));n=t}r||(r=n.length);t=0;if(l==0)for(;t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var w=24;w>=0;w-=8)n[r++]=e[t]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ye:function(){for(var n=d(),r="",t=0;t<n.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return r}}}
;function pi(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,qi(ni(d),a,c||null)].join(" "):null}
function qi(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Tb(d,function(h){e.push(h)}),ri(e.join(" "));
var f=[],g=[];Tb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Tb(d,function(h){e.push(h)});
a=ri(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function ri(a){var b=oi();b.update(a);return b.Ye().toLowerCase()}
;function si(a){this.h=a||{cookie:""}}
p=si.prototype;p.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{jc:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.jg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.jc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=kb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{jc:0,path:b,domain:c});return d};
p.dc=function(){return ti(this).keys};
p.bb=function(){return ti(this).values};
p.clear=function(){for(var a=ti(this).keys,b=a.length-1;b>=0;b--)this.remove(a[b])};
function ti(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=kb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ui=new si(typeof document=="undefined"?null:document);function vi(){var a=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__1PSAPISID||C.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new si(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function wi(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new si(document)).get(b));return a?pi(a,c,d):null}
function xi(a){var b=ni(C==null?void 0:C.location.href),c=[];if(vi()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?C.__SAPISID:C.__APISID;d||typeof document==="undefined"||(d=new si(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?pi(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=wi("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=wi("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function yi(){}
yi.prototype.compress=function(a){var b,c,d,e;return A(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
yi.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function zi(a){this.D=M(a)}
v(zi,N);function Ai(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return $a()};
this.i=this.h()}
Ai.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Ai.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
Ai.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Ai.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Bi(a){this.D=M(a)}
v(Bi,N);function Ci(a){this.D=M(a)}
v(Ci,N);function Di(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
p=Di.prototype;p.clone=function(){return new Di(this.x,this.y)};
p.equals=function(a){return a instanceof Di&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
p.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Ei(a,b){this.width=a;this.height=b}
p=Ei.prototype;p.clone=function(){return new Ei(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
p.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Fi(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Gi(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Hi(a){var b=Ii,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ji(a){for(var b in a)return!1;return!0}
function Ki(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Li(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Mi(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Ni(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Oi(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Oi(a[c]);return b}
var Pi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qi(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Pi.length;f++)c=Pi[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Ri(a,b){this.h=a===Si&&b||""}
Ri.prototype.toString=function(){return this.h};
var Si={};new Ri(Si,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Ti(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Ui(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Vi(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Wi(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Xi(a){this.D=M(a)}
v(Xi,N);Xi.prototype.Ic=function(){return wg(this)};function Yi(a){this.D=M(a)}
v(Yi,N);function Zi(a){this.D=M(a)}
v(Zi,N);function $i(a){sg(aj,Yi,1,a)}
var bj=Oh(Zi);function cj(a){this.D=M(a)}
v(cj,N);var dj=["platform","platformVersion","architecture","model","uaFullVersion"],aj=new Zi,ej=null;function fj(a,b){b=b===void 0?dj:b;if(!ej){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));$i((a.brands||[]).map(function(e){var f=new Yi;f=xg(f,1,e.brand);return xg(f,2,e.version)}));
typeof a.mobile==="boolean"&&dg(aj,2,ef(a.mobile));ej=a.getHighEntropyValues(b)}var d=new Set(b);return ej.then(function(e){var f=aj.clone();d.has("platform")&&xg(f,3,e.platform);d.has("platformVersion")&&xg(f,4,e.platformVersion);d.has("architecture")&&xg(f,5,e.architecture);d.has("model")&&xg(f,6,e.model);d.has("uaFullVersion")&&xg(f,7,e.uaFullVersion);return f.serialize()}).catch(function(){return aj.serialize()})}
;function gj(a){this.D=M(a)}
v(gj,N);function hj(a){return yg(a,1,1)}
;function ij(a){this.D=M(a,4)}
v(ij,N);function jj(a){this.D=M(a,36)}
v(jj,N);function kj(a){this.D=M(a,19)}
v(kj,N);kj.prototype.qc=function(a){return yg(this,2,a)};function lj(a,b){this.Sa=b=b===void 0?!1:b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new kj;Number.isInteger(a)&&this.h.qc(a);b||(this.locale=document.documentElement.getAttribute("lang"));mj(this,new gj)}
lj.prototype.qc=function(a){this.h.qc(a);return this};
function mj(a,b){rg(a.h,gj,1,b);wg(b)||hj(b);a.Sa||(b=nj(a),vg(b,5)||xg(b,5,a.locale));a.j&&(b=nj(a),pg(b,Zi,9)||rg(b,Zi,9,a.j))}
function oj(a,b){a.i=b}
function pj(a){var b=b===void 0?dj:b;var c=a.Sa?void 0:window;c?fj(c,b).then(function(d){a.j=bj(d!=null?d:"[]");d=nj(a);rg(d,Zi,9,a.j);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function nj(a){var b=pg(a.h,gj,1);b||(b=new gj,mj(a,b));a=b;b=pg(a,cj,11);b||(b=new cj,rg(a,cj,11,b));return b}
function qj(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;if(!a.Sa){var h=nj(a);var k=new Xi;k=yg(k,1,a.i);k=dg(k,2,ef(a.isFinal));d=dg(k,3,jf(d>0?d:void 0));d=dg(d,4,jf(f>0?f:void 0));d=dg(d,5,jf(g>0?g:void 0));f=d.D;g=f[K]|0;d=se(d,g)?d:Uf(d,f,g)?Vf(d,f):new d.constructor(Tf(f,g,!0));rg(h,Xi,10,d)}a=a.h.clone();h=Date.now().toString();a=dg(a,4,sf(h));b=b.slice();b=sg(a,jj,3,b);e&&(a=new Bi,e=dg(a,13,jf(e)),a=new Ci,e=rg(a,Bi,2,e),a=new ij,
e=rg(a,Ci,1,e),e=yg(e,2,9),rg(b,ij,18,e));c&&dg(b,14,sf(c));return b}
;var rj=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function sj(a,b,c,d){this.o=a;this.u=b;this.h=this.j=a;this.H=c||0;this.B=d||2}
sj.prototype.i=0;sj.prototype.reset=function(){this.h=this.j=this.o;this.i=0};
sj.prototype.getValue=function(){return this.j};
function tj(a){a.h=Math.min(a.u,a.h*a.B);a.j=Math.min(a.u,a.h+(a.H?Math.round(a.H*(Math.random()-.5)*2*a.h):0));a.i++}
;function Mh(a){this.D=M(a,8)}
v(Mh,N);var uj=Oh(Mh);function Nh(a){this.D=M(a)}
v(Nh,N);var vj;vj=new Lh;function wj(a){I.call(this);var b=this;this.componentId="";this.h=[];this.Wa="";this.pageId=null;this.lb=this.na=-1;this.G=this.experimentIds=null;this.B=this.o=0;this.V=null;this.aa=this.ha=0;this.Ub=1;this.timeoutMillis=0;this.za=!1;this.logSource=a.logSource;this.Fb=a.Fb||function(){};
this.j=new lj(a.logSource,a.Sa);this.network=a.network||null;this.wb=a.wb||null;this.bufferSize=1E3;this.J=a.Hg||null;this.sessionIndex=a.sessionIndex||null;this.ac=a.ac||!1;this.logger=null;this.withCredentials=!a.nd;this.Sa=a.Sa||!1;this.Z=!this.Sa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Va=typeof URLSearchParams!=="undefined"&&!!(new URL(xj())).searchParams&&!!(new URL(xj())).searchParams.set;var c=hj(new gj);mj(this.j,c);this.u=new sj(1E4,3E5,.1);a=yj(this,a.Nd);
this.i=new Ai(this.u.getValue(),a);this.Ga=new Ai(6E5,a);this.ac||this.Ga.start();this.Sa||(document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){zj(b);var d;(d=b.V)==null||d.flush()}}),document.addEventListener("pagehide",function(){zj(b);
var d;(d=b.V)==null||d.flush()}))}
v(wj,I);function yj(a,b){return a.Va?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
wj.prototype.da=function(){zj(this);this.i.stop();this.Ga.stop();I.prototype.da.call(this)};
function Aj(a){a.J||(a.J=xj());try{return(new URL(a.J)).toString()}catch(b){return(new URL(a.J,window.location.origin)).toString()}}
function Bj(a,b,c){a.V&&a.V.Ia(b,c)}
wj.prototype.log=function(a){Bj(this,2,1);if(this.Va){a=a.clone();var b=this.Ub++;a=dg(a,21,sf(b));this.componentId&&xg(a,26,this.componentId);b=a;var c=bg(b,1);var d=d===void 0?!1:d;var e=typeof c;d=c==null?c:e==="bigint"?String(Ze(64,c)):gf(c)?e==="string"?nf(c):d?of(c):rf(c):void 0;d==null&&(d=Date.now(),d=Number.isFinite(d)?d.toString():"0",dg(b,1,sf(d)));d=bg(b,15);d!=null&&(typeof d==="bigint"?Ne(d)?d=Number(d):(d=Ze(64,d),d=Ne(d)?Number(d):String(d)):d=gf(d)?typeof d==="number"?rf(d):nf(d):
void 0);d==null&&dg(b,15,sf((new Date).getTimezoneOffset()*60));this.experimentIds&&(d=this.experimentIds.clone(),rg(b,zi,16,d));Bj(this,1,1);b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b,Bj(this,3,b));this.h.push(a);this.ac||this.i.enabled||this.i.start()}};
wj.prototype.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.za&&this.Z)this.j.i=3,Cj(this);else{var d=Date.now();if(this.lb>d&&this.na<d)b&&b("throttled");else{this.network&&(typeof this.network.Ic==="function"?oj(this.j,this.network.Ic()):this.j.i=0);var e=this.h.length,f=qj(this.j,this.h,this.o,this.B,this.wb,this.ha,this.aa),g=this.Fb();if(g&&this.Wa===g)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=f.serialize();var h;this.G&&this.G.isSupported(d.length)&&
(h=this.G.compress(d));var k=Dj(this,d,g),l=function(r){c.u.reset();c.i.setInterval(c.u.getValue());if(r){var t=null;try{var w=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));t=uj(w)}catch(H){}if(t){r=Number(ug(t,1,He("-1")));r>0&&(c.na=Date.now(),c.lb=c.na+r);r=ab(ce);var z;Zd&&r&&((z=t.D[r])==null?void 0:z[175237375])!=null&&Yd(de,3);a:{var x=x===void 0?!1:x;if(ab(je)&&ab(ce)&&void 0===je){z=t.D;r=z[ce];if(!r)break a;if(r=r.lj)try{r(z,175237375,Hf);break a}catch(H){fd(H)}}x&&(x=t.D,(z=ab(ce))&&
z in x&&(x=x[z])&&delete x[175237375])}x=vj.ctor?vj.h(t,vj.ctor,175237375,vj.i):vj.h(t,175237375,null,vj.i);if(x=x===null?void 0:x)x=Oc(x,1,-1),x!==-1&&(c.u=new sj(x<1?1:x,3E5,.1),c.i.setInterval(c.u.getValue()))}}a&&a();c.B=0},m=function(r,t){var w=Mc(f,jj,3);
var z=Number(ug(f,14));tj(c.u);c.i.setInterval(c.u.getValue());r===401&&g&&(c.Wa=g);z&&(c.o+=z);t===void 0&&(t=c.isRetryable(r));t&&(c.h=w.concat(c.h),c.ac||c.i.enabled||c.i.start());Bj(c,7,1);b&&b("net-send-failed",r);++c.B},n=function(){c.network&&c.network.send(k,l,m)};
h?h.then(function(r){Bj(c,5,e);k.Yc["Content-Encoding"]="gzip";k.Yc["Content-Type"]="application/binary";k.body=r;k.Qe=2;n()},function(){Bj(c,6,e);
n()}):n()}}}};
function Dj(a,b,c){c=c===void 0?null:c;var d=d===void 0?a.withCredentials:d;var e={},f=new URL(Aj(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,Qe:1,Yc:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function zj(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function Cj(a){Ej(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.Z=!1);return d})}
function Ej(a,b){if(a.h.length!==0){var c=new URL(Aj(a));c.searchParams.delete("format");var d=a.Fb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=qj(a.j,e,a.o,a.B,a.wb,a.ha,a.aa);if(!b(c.toString(),f)){++a.B;break}a.o=0;a.B=0;a.ha=0;a.aa=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
wj.prototype.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function xj(){return"https://play.google.com/log?format=json&hasfast=true"}
;function Fj(){this.Je=typeof AbortController!=="undefined"}
Fj.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,r,t;return A(function(w){switch(w.h){case 1:return f=(e=d.Je?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,ya(w,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Yc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),w.yield(fetch(a.url,g),5);case 5:h=w.i;if(h.status!==200){(k=c)==null||k(h.status);w.A(3);break}if((l=b)==null){w.A(7);break}return w.yield(h.text(),8);case 8:l(w.i);case 7:case 3:Ba(w);clearTimeout(f);Ca(w,0);break;case 2:m=Aa(w);switch((n=m)==null?void 0:n.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}w.A(3)}})};
Fj.prototype.Ic=function(){return 4};function Gj(a,b){b=b===void 0?"0":b;I.call(this);this.logSource=a;this.sessionIndex=b;this.ab="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.wb=null;this.j=!1;this.pageId=null;this.bufferSize=void 0}
v(Gj,I);function Hj(a,b){a.i=b;return a}
function Ij(a,b){a.network=b;return a}
function Jj(a,b){a.h=b}
function Kj(a){a.j=!0;return a}
Gj.prototype.nd=function(){this.u=!0;return this};
function Lj(a){a.network||(a.network=new Fj);var b=new wj({logSource:a.logSource,Fb:a.Fb?a.Fb:xi,sessionIndex:a.sessionIndex,Hg:a.ab,Sa:a.o,ac:!1,nd:a.u,Nd:a.Nd,network:a.network});Bc(a,b);if(a.i){var c=a.i,d=nj(b.j);xg(d,7,c)}b.G=new yi;a.componentId&&(b.componentId=a.componentId);a.wb&&(b.wb=a.wb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new zi),c=b.experimentIds,d=d.serialize(),xg(c,4,d)):b.experimentIds&&dg(b.experimentIds,4));a.j&&(b.za=b.Z);pj(b.j);a.bufferSize&&
(b.bufferSize=a.bufferSize);a.network.qc&&a.network.qc(a.logSource);a.network.ug&&a.network.ug(b);return b}
;function Mj(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;I.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new Gj(a,"0"),a.componentId=b,Bc(this,a),c!==""&&(a.ab=c),d&&(a.o=!0),e&&Hj(a,e),g&&Ij(a,g),b=Lj(a));this.h=b}
v(Mj,I);Mj.prototype.flush=function(a){var b=a||[];if(b.length){a=new hi;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=ii(e);c.push(f);e.clear()}sg(a,gi,1,c);b=this.h;if(a instanceof jj)b.log(a);else try{var g=new jj,h=a.serialize();var k=xg(g,8,h);b.log(k)}catch(l){Bj(b,4,1)}this.h.flush()}};function Nj(a){this.h=a}
;function Oj(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function mi(a){return a.fields.map(function(b){return b.fieldType})}
function ji(a){return a.fields.map(function(b){return b.fieldName})}
p=Oj.prototype;p.Ke=function(a){var b=B.apply(1,arguments),c=this.rd(b);c?c.push(new Nj(a)):this.re(a,b)};
p.re=function(a){var b=this.Md(B.apply(1,arguments));this.h.set(b,[new Nj(a)])};
p.rd=function(){var a=this.Md(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
p.uf=function(){var a=this.rd(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
p.clear=function(){this.h.clear()};
p.Md=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Pj(a,b){Oj.call(this,a,3,b)}
v(Pj,Oj);Pj.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.uf(b);d&&(c=d.h);this.re(c+a,b)};function Qj(a,b){Oj.call(this,a,2,b)}
v(Qj,Oj);Qj.prototype.record=function(a){this.Ke(a,B.apply(1,arguments))};function Rj(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Rj.prototype.stopPropagation=function(){this.j=!0};
Rj.prototype.preventDefault=function(){this.defaultPrevented=!0};function Sj(a,b){Rj.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
bb(Sj,Rj);
Sj.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Sj.Ca.preventDefault.call(this)};
Sj.prototype.stopPropagation=function(){Sj.Ca.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Sj.prototype.preventDefault=function(){Sj.Ca.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Tj="closure_listenable_"+(Math.random()*1E6|0);var Uj=0;function Vj(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Kc=e;this.key=++Uj;this.nc=this.Bc=!1}
function Wj(a){a.nc=!0;a.listener=null;a.proxy=null;a.src=null;a.Kc=null}
;function Xj(a){this.src=a;this.listeners={};this.h=0}
Xj.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Yj(a,b,d,e);g>-1?(b=a[g],c||(b.Bc=!1)):(b=new Vj(b,this.src,f,!!d,e),b.Bc=c,a.push(b));return b};
Xj.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Yj(e,b,c,d);return b>-1?(Wj(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Zj(a,b){var c=b.type;c in a.listeners&&Yb(a.listeners[c],b)&&(Wj(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Yj(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.nc&&f.listener==b&&f.capture==!!c&&f.Kc==d)return e}return-1}
;var ak="closure_lm_"+(Math.random()*1E6|0),bk={},ck=0;function dk(a,b,c,d,e){if(d&&d.once)ek(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)dk(a,b[f],c,d,e);else c=fk(c),a&&a[Tj]?a.listen(b,c,Pa(d)?!!d.capture:!!d,e):gk(a,b,c,!1,d,e)}
function gk(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=hk(a);h||(a[ak]=h=new Xj(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=ik();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)rj||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(jk(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ck++}}
function ik(){function a(c){return b.call(a.src,a.listener,c)}
var b=kk;return a}
function ek(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ek(a,b[f],c,d,e);else c=fk(c),a&&a[Tj]?lk(a,b,c,Pa(d)?!!d.capture:!!d,e):gk(a,b,c,!0,d,e)}
function mk(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)mk(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=fk(c),a&&a[Tj])?a.i.remove(String(b),c,d,e):a&&(a=hk(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Yj(b,c,d,e)),(c=a>-1?b[a]:null)&&nk(c))}
function nk(a){if(typeof a!=="number"&&a&&!a.nc){var b=a.src;if(b&&b[Tj])Zj(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(jk(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ck--;(c=hk(b))?(Zj(c,a),c.h==0&&(c.src=null,b[ak]=null)):Wj(a)}}}
function jk(a){return a in bk?bk[a]:bk[a]="on"+a}
function kk(a,b){if(a.nc)a=!0;else{b=new Sj(b,this);var c=a.listener,d=a.Kc||a.src;a.Bc&&nk(a);a=c.call(d,b)}return a}
function hk(a){a=a[ak];return a instanceof Xj?a:null}
var ok="__closure_events_fn_"+(Math.random()*1E9>>>0);function fk(a){if(typeof a==="function")return a;a[ok]||(a[ok]=function(b){return a.handleEvent(b)});
return a[ok]}
;function pk(){I.call(this);this.i=new Xj(this);this.za=this;this.aa=null}
bb(pk,I);pk.prototype[Tj]=!0;p=pk.prototype;p.addEventListener=function(a,b,c,d){dk(this,a,b,c,d)};
p.removeEventListener=function(a,b,c,d){mk(this,a,b,c,d)};
function qk(a,b){var c=a.aa;if(c){var d=[];for(var e=1;c;c=c.aa)d.push(c),++e}a=a.za;c=b.type||b;typeof b==="string"?b=new Rj(b,a):b instanceof Rj?b.target=b.target||a:(e=b,b=new Rj(c,a),Qi(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=rk(g,c,!0,b)&&e}b.j||(g=b.h=a,e=rk(g,c,!0,b)&&e,b.j||(e=rk(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=rk(g,c,!1,b)&&e}
p.da=function(){pk.Ca.da.call(this);this.removeAllListeners();this.aa=null};
p.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function lk(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
p.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Wj(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function rk(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.nc&&g.capture==c){var h=g.listener,k=g.Kc||g.src;g.Bc&&Zj(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var sk=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function tk(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
tk.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function uk(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function vk(){this.i=this.h=null}
vk.prototype.add=function(a,b){var c=wk.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
vk.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var wk=new tk(function(){return new xk},function(a){return a.reset()});
function xk(){this.next=this.scope=this.h=null}
xk.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
xk.prototype.reset=function(){this.next=this.scope=this.h=null};var yk,zk=!1,Ak=new vk;function Bk(a,b){yk||Ck();zk||(yk(),zk=!0);Ak.add(a,b)}
function Ck(){var a=Promise.resolve(void 0);yk=function(){a.then(Dk)}}
function Dk(){for(var a;a=Ak.remove();){try{a.h.call(a.scope)}catch(b){fd(b)}uk(wk,a)}zk=!1}
;function Ek(){}
function Fk(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Gk(a){this.Y=0;this.ib=void 0;this.Db=this.Ya=this.parent_=null;this.Jc=this.pd=!1;if(a!=Ek)try{var b=this;a.call(void 0,function(c){Hk(b,2,c)},function(c){Hk(b,3,c)})}catch(c){Hk(this,3,c)}}
function Ik(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Ik.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Jk=new tk(function(){return new Ik},function(a){a.reset()});
function Kk(a,b,c){var d=Jk.get();d.i=a;d.h=b;d.context=c;return d}
function Lk(a){return new Gk(function(b,c){c(a)})}
Gk.prototype.then=function(a,b,c){return Mk(this,sk(typeof a==="function"?a:null),sk(typeof b==="function"?b:null),c)};
Gk.prototype.$goog_Thenable=!0;function Nk(a,b,c,d){Ok(a,Kk(b||Ek,c||null,d))}
p=Gk.prototype;p.finally=function(a){var b=this;a=sk(a);return new Gk(function(c,d){Nk(b,function(e){a();c(e)},function(e){a();
d(e)})})};
p.ed=function(a,b){return Mk(this,null,sk(a),b)};
p.catch=Gk.prototype.ed;p.cancel=function(a){if(this.Y==0){var b=new Pk(a);Bk(function(){Qk(this,b)},this)}};
function Qk(a,b){if(a.Y==0)if(a.parent_){var c=a.parent_;if(c.Ya){for(var d=0,e=null,f=null,g=c.Ya;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.Y==0&&d==1?Qk(c,b):(f?(d=f,d.next==c.Db&&(c.Db=d),d.next=d.next.next):Rk(c),Sk(c,e,3,b)))}a.parent_=null}else Hk(a,3,b)}
function Ok(a,b){a.Ya||a.Y!=2&&a.Y!=3||Tk(a);a.Db?a.Db.next=b:a.Ya=b;a.Db=b}
function Mk(a,b,c,d){var e=Kk(null,null,null);e.child=new Gk(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Pk?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;Ok(a,e);return e.child}
p.Fg=function(a){this.Y=0;Hk(this,2,a)};
p.Gg=function(a){this.Y=0;Hk(this,3,a)};
function Hk(a,b,c){if(a.Y==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.Y=1;a:{var d=c,e=a.Fg,f=a.Gg;if(d instanceof Gk){Nk(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if(typeof k==="function"){Uk(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ib=c,a.Y=b,a.parent_=null,Tk(a),b!=3||c instanceof Pk||Vk(a,c))}}
function Uk(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Tk(a){a.pd||(a.pd=!0,Bk(a.kf,a))}
function Rk(a){var b=null;a.Ya&&(b=a.Ya,a.Ya=b.next,b.next=null);a.Ya||(a.Db=null);return b}
p.kf=function(){for(var a;a=Rk(this);)Sk(this,a,this.Y,this.ib);this.pd=!1};
function Sk(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.Jc;a=a.parent_)a.Jc=!1;if(b.child)b.child.parent_=null,Wk(b,c,d);else try{b.j?b.i.call(b.context):Wk(b,c,d)}catch(e){Xk.call(null,e)}uk(Jk,b)}
function Wk(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Vk(a,b){a.Jc=!0;Bk(function(){a.Jc&&Xk.call(null,b)})}
var Xk=fd;function Pk(a){jb.call(this,a)}
bb(Pk,jb);Pk.prototype.name="cancel";function Yk(a,b){pk.call(this);this.j=a||1;this.h=b||C;this.o=Ya(this.Cg,this);this.u=$a()}
bb(Yk,pk);p=Yk.prototype;p.enabled=!1;p.Fa=null;p.setInterval=function(a){this.j=a;this.Fa&&this.enabled?(this.stop(),this.start()):this.Fa&&this.stop()};
p.Cg=function(){if(this.enabled){var a=$a()-this.u;a>0&&a<this.j*.8?this.Fa=this.h.setTimeout(this.o,this.j-a):(this.Fa&&(this.h.clearTimeout(this.Fa),this.Fa=null),qk(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
p.start=function(){this.enabled=!0;this.Fa||(this.Fa=this.h.setTimeout(this.o,this.j),this.u=$a())};
p.stop=function(){this.enabled=!1;this.Fa&&(this.h.clearTimeout(this.Fa),this.Fa=null)};
p.da=function(){Yk.Ca.da.call(this);this.stop();delete this.h};function Zk(a){I.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.B=new Set;this.flushInterval=3E4;this.h=new Yk(this.flushInterval);this.h.listen("tick",this.dd,!1,this);Bc(this,this.h)}
v(Zk,I);p=Zk.prototype;p.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function $k(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.dd()}
p.dd=function(){var a=this.i.values();a=[].concat(qa(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);al(a);this.j=0;this.h.enabled&&this.h.stop()};
p.Wb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Pj(a,b))};
p.kd=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Qj(a,b))};
function bl(a,b){return a.B.has(b)?void 0:a.i.get(b)}
p.Tb=function(a){this.Ie(a,1,B.apply(1,arguments))};
p.Ie=function(a,b){var c=B.apply(2,arguments),d=bl(this,a);d&&d instanceof Pj&&(d.j(b,c),$k(this))};
p.record=function(a,b){var c=B.apply(2,arguments),d=bl(this,a);d&&d instanceof Qj&&(d.record(b,c),$k(this))};
function al(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function cl(a){switch(a){case 200:return 0;case 400:return 3;case 401:return 16;case 403:return 7;case 404:return 5;case 409:return 10;case 412:return 9;case 429:return 8;case 499:return 1;case 500:return 2;case 501:return 12;case 503:return 14;case 504:return 4;default:return 2}}
function dl(a){switch(a){case 0:return"OK";case 1:return"CANCELLED";case 2:return"UNKNOWN";case 3:return"INVALID_ARGUMENT";case 4:return"DEADLINE_EXCEEDED";case 5:return"NOT_FOUND";case 6:return"ALREADY_EXISTS";case 7:return"PERMISSION_DENIED";case 16:return"UNAUTHENTICATED";case 8:return"RESOURCE_EXHAUSTED";case 9:return"FAILED_PRECONDITION";case 10:return"ABORTED";case 11:return"OUT_OF_RANGE";case 12:return"UNIMPLEMENTED";case 13:return"INTERNAL";case 14:return"UNAVAILABLE";case 15:return"DATA_LOSS";
default:return""}}
;function el(a,b,c){c=c===void 0?{}:c;b=Error.call(this,b);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.code=a;this.metadata=c;this.name="RpcError";Object.setPrototypeOf(this,this.constructor.prototype)}
v(el,Error);el.prototype.toString=function(){var a="RpcError("+(dl(this.code)||String(this.code))+")";this.message&&(a+=": "+this.message);return a};function fl(){}
fl.prototype.serialize=function(a){var b=[];gl(this,a,b);return b.join("")};
function gl(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),gl(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),hl(d,c),c.push(":"),gl(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":hl(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var il={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},jl=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function hl(a,b){b.push('"',a.replace(jl,function(c){var d=il[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),il[c]=d);return d}),'"')}
;function kl(){pk.call(this);this.headers=new Map;this.h=!1;this.M=null;this.o=this.Z="";this.j=this.V=this.B=this.J=!1;this.G=0;this.u=null;this.na="";this.ha=!1}
bb(kl,pk);var ll=/^https?$/i,ml=["POST","PUT"],nl=[];function ol(a,b,c,d,e,f,g){var h=new kl;nl.push(h);b&&h.listen("complete",b);lk(h,"ready",h.Ue);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
p=kl.prototype;p.Ue=function(){this.dispose();Yb(nl,this)};
p.send=function(a,b,c,d){if(this.M)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Z+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Z=a;this.o="";this.J=!1;this.h=!0;this.M=new XMLHttpRequest;this.M.onreadystatechange=sk(Ya(this.ee,this));try{this.getStatus(),this.V=!0,this.M.open(b,String(a),!0),this.V=!1}catch(g){this.getStatus();pl(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=y(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Sb(ml,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=y(c);for(d=b.next();!d.done;d=b.next())c=y(d.value),d=c.next().value,c=c.next().value,this.M.setRequestHeader(d,c);this.na&&(this.M.responseType=this.na);"withCredentials"in this.M&&this.M.withCredentials!==this.ha&&(this.M.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.Eg.bind(this),this.G)),
this.getStatus(),this.B=!0,this.M.send(a),this.B=!1}catch(g){this.getStatus(),pl(this,g)}};
p.Eg=function(){typeof La!="undefined"&&this.M&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),qk(this,"timeout"),this.abort(8))};
function pl(a,b){a.h=!1;a.M&&(a.j=!0,a.M.abort(),a.j=!1);a.o=b;ql(a);rl(a)}
function ql(a){a.J||(a.J=!0,qk(a,"complete"),qk(a,"error"))}
p.abort=function(){this.M&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.M.abort(),this.j=!1,qk(this,"complete"),qk(this,"abort"),rl(this))};
p.da=function(){this.M&&(this.h&&(this.h=!1,this.j=!0,this.M.abort(),this.j=!1),rl(this,!0));kl.Ca.da.call(this)};
p.ee=function(){this.T||(this.V||this.B||this.j?sl(this):this.Uf())};
p.Uf=function(){sl(this)};
function sl(a){if(a.h&&typeof La!="undefined")if(a.B&&(a.M?a.M.readyState:0)==4)setTimeout(a.ee.bind(a),0);else if(qk(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(tl(a))qk(a,"complete"),qk(a,"success");else{try{var b=(a.M?a.M.readyState:0)>2?a.M.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";ql(a)}}finally{rl(a)}}}
function rl(a,b){if(a.M){a.u&&(clearTimeout(a.u),a.u=null);var c=a.M;a.M=null;b||qk(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
p.isActive=function(){return!!this.M};
p.isComplete=function(){return(this.M?this.M.readyState:0)==4};
function tl(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=String(a.Z).match(jc)[1]||null,!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!ll.test(a?a.toLowerCase():"");c=b}return c}
p.getStatus=function(){try{return(this.M?this.M.readyState:0)>2?this.M.status:-1}catch(a){return-1}};
p.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function ul(){}
ul.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
ol(a.url,function(d){d=d.target;if(tl(d)){try{var e=d.M?d.M.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Yc,a.timeoutMillis,a.withCredentials)};
ul.prototype.Ic=function(){return 1};function vl(a,b){this.logger=a;this.event=b;this.startTime=wl()}
vl.prototype.done=function(){this.logger.rb(this.event,wl()-this.startTime)};
function xl(){Rc.apply(this,arguments)}
v(xl,Rc);function yl(a,b,c){var d=wl();b=b();a.rb(c,wl()-d);return b}
function zl(){xl.apply(this,arguments)}
v(zl,xl);p=zl.prototype;p.hc=function(){};
p.Ka=function(){};
p.rb=function(){};
p.wa=function(){};
p.Ua=function(){};
p.Pc=function(){};
p.Nc=function(){};
p.Oc=function(){};
function Al(a){xl.call(this);var b=this;this.logger=a;this.addOnDisposeCallback(function(){return void b.logger.dispose()})}
v(Al,xl);p=Al.prototype;p.update=function(a){this.logger.dispose();this.logger=a};
p.Ka=function(a){this.logger.Ka(a)};
p.rb=function(a,b){this.logger.rb(a,b)};
p.wa=function(a){this.logger.wa(a)};
p.Ua=function(){this.logger.Ua()};
p.Pc=function(a){this.logger.Pc(a)};
p.Nc=function(a){this.logger.Nc(a)};
p.Oc=function(a){this.logger.Oc(a)};
p.hc=function(a){this.logger.hc(a)};
function Bl(a,b,c,d,e){a=Kj(Ij(Hj(new Gj(1828,"0"),a),new ul));b.length&&Jj(a,Qh(new Ph,b));d!==void 0&&(a.ab=d);e&&a.nd();var f=new Mj(1828,"","",!1,"",Lj(a));Bc(f,a);var g=new Zk({flush:function(h){try{f.flush(h)}catch(k){c(k)}}});
g.addOnDisposeCallback(function(){setTimeout(function(){try{g.dd()}finally{f.dispose()}})});
g.o=1E5;g.flushInterval=3E4;g.h.setInterval(3E4);return g}
function Cl(a,b){I.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
v(Cl,I);function Dl(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-wl());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=wl(),a.timer=void 0}},b)}}
function El(a,b){xl.call(this);this.metrics=a;this.qa=b}
v(El,xl);p=El.prototype;p.hc=function(a){this.metrics.yg.record(a,this.qa)};
p.Ka=function(a){this.metrics.eventCount.Ia(a,this.qa)};
p.rb=function(a,b){this.metrics.jf.record(b,a,this.qa)};
p.wa=function(a){this.metrics.errorCount.Ia(a,this.qa)};
p.Pc=function(a){this.metrics.Lg.Ia(a,this.qa)};
p.Nc=function(a){this.metrics.Re.Ia(a,this.qa)};
p.Oc=function(a){this.metrics.Kg.Ia(a,this.qa)};
function Fl(a,b){b=b===void 0?[]:b;var c={qa:a.qa||"_",qd:a.qd||[],vd:a.vd|0,ab:a.ab,disableClearcutCredentialBinding:a.disableClearcutCredentialBinding,Sc:a.Sc||function(){},
Sb:a.Sb||function(f,g){return Bl(f,g,c.Sc,c.ab,c.disableClearcutCredentialBinding)}},d=c.Sb("50",c.qd.concat(b));
El.call(this,{yg:new Uc(d),errorCount:new Yc(d),eventCount:new Wc(d),jf:new Xc(d),vj:new Vc(d),Lg:new Zc(d),Re:new $c(d),Kg:new ad(d)},c.qa);var e=this;this.options=c;this.service=d;this.j=!a.Sb;this.h=new Cl(function(){return void e.service.dd()},c.vd);
this.addOnDisposeCallback(function(){e.h.dispose();e.j&&e.service.dispose()});
b.slice().sort(ac)}
v(Fl,El);Fl.prototype.Ua=function(){Dl(this.h)};
function wl(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function Gl(a){this.D=M(a)}
v(Gl,N);function Hl(a){this.D=M(a)}
v(Hl,N);function Il(a){this.D=M(a,0,"bfkj")}
v(Il,N);var Jl=function(a){return ye(function(b){return b instanceof a&&!se(b)})}(Il);
Il.Of="bfkj";function Kl(a){this.D=M(a)}
v(Kl,N);function Nc(a){this.D=M(a)}
v(Nc,N);function Ll(a){this.D=M(a)}
v(Ll,N);var Ml=Oh(Ll);function Nl(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Ol(a,b){if(a.disable)return new zl;var c=b?Lc(b):[],d=a.qa,e=a.mf,f=a.Pf,g=a.ab,h=a.Sc;a=a.Sb;b=b==null?void 0:pg(b,Kl,11);var k=k===void 0?50:k;b=(b==null?void 0:Oc(b,1))||0;d={qa:d,qd:e,vd:f,ab:g,Sc:h,Sb:a,disableClearcutCredentialBinding:b>0&&k>=b};c=c===void 0?[]:c;return new Fl(d,c)}
function Pl(a){function b(w,z,x,H){Promise.resolve().then(function(){k.done();h.Ua();h.dispose();g.resolve({Me:w,xg:z,Yf:x,Se:H})})}
function c(w,z,x,H){if(!d.logger.T){var G="k";z?G="h":x&&(G="u");G!=="k"?H!==0&&(d.logger.Ka(G),d.logger.rb(G,w)):d.j<=0?(d.logger.Ka(G),d.logger.rb(G,w),d.j=Math.floor(Math.random()*200)):d.j--}}
I.call(this);var d=this;this.j=Math.floor(Math.random()*200);this.h=new Ll;if("challenge"in a&&Jl(a.challenge)){var e=vg(a.challenge,4,void 0,xe);var f=vg(a.challenge,5,void 0,xe);vg(a.challenge,7,void 0,xe)&&(this.h=Ml(vg(a.challenge,7,void 0,xe)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var w,z,x;return A(function(H){if(H.h==1)return H.yield(d.i,2);w=H.i;z=w.xg;(x=z)==null||x();H.h=0})});
this.logger=Ol(a.Mb||{},this.h);Bc(this,this.logger);var g=new Nl;this.i=g.promise;this.logger.Ka("t");var h=this.logger.share(),k=new vl(h,"t");if(!C[f])throw this.logger.wa(25),Error("EGOU");if(!C[f].a)throw this.logger.wa(26),Error("ELIU");try{var l=C[f].a;f=[];for(var m=[],n=Lc(this.h),r=0;r<n.length;r++)f.push(n[r]),m.push(1);var t=Pc(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2);this.o=y(l(e,b,!0,a.Ae,c,[f,m],vg(this.h,5))).next().value;this.Qb=g.promise.then(function(){})}catch(w){throw this.logger.wa(28),
w;
}}
v(Pl,I);p=Pl.prototype;p.snapshot=function(a){if(this.T)throw Error("Already disposed");this.logger.Ka("n");var b=this.logger.share();return this.i.then(function(c){var d=c.Me;return new Promise(function(e){var f=new vl(b,"n");d(function(g){f.done();b.hc(g.length);b.Ua();b.dispose();e(g)},[a.Ha,
a.cd,a.Ee,a.Gd])})})};
p.te=function(a){var b=this;if(this.T)throw Error("Already disposed");this.logger.Ka("n");var c=yl(this.logger,function(){return b.o([a.Ha,a.cd,a.Ee,a.Gd])},"n");
this.logger.hc(c.length);this.logger.Ua();return c};
p.kc=function(a){this.i.then(function(b){var c;(c=b.Yf)==null||c(a)})};
p.Dc=function(a,b){return this.i.then(function(c){var d;return(d=c.Se)==null?void 0:d(a,b,!1)})};
p.sc=function(){return this.logger.share()};function Ql(a){if(!a)return null;a=Bf(bg(a,4,void 0,ag));return a===null||a===void 0?null:qb(a)}
;function Rl(){this.promises={};this.h=null}
function Sl(){Rl.instance||(Rl.instance=new Rl);return Rl.instance}
function Tl(a,b){return Ul(a,pg(b,Gl,1,xe),pg(b,Hl,2,xe),vg(b,3,void 0,xe))}
function Ul(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return Vl(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){Vl(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function Vl(a,b){return b?Wl(b):a?Xl(a):Promise.resolve()}
function Wl(a){return new Promise(function(b,c){var d=Ui("SCRIPT"),e=Ql(a);Mb(d,e);d.onload=function(){Vi(d);b()};
d.onerror=function(){Vi(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function Xl(a){return new Promise(function(b){var c=Ui("SCRIPT");if(a){var d=Bf(bg(a,6,void 0,ag));d=d===null||d===void 0?null:Jb(d)}else d=null;c.textContent=Kb(d);Lb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);Vi(c);b()})}
;function Yl(a){this.D=M(a)}
v(Yl,N);function Zl(a,b){return kg(a,1,Af(b))}
function $l(a,b){return kg(a,2,Af(b))}
;function am(a){I.call(this);var b=this;this.options=a;this.B=new Nl;this.Qb=this.B.promise;this.u=new Nl;this.J=1;this.j=new Nl;this.o=[];this.Tc=a.Tc||function(){};
this.logger=new Al(Ol(a.Mb||{}));bm(this,a.Oa,a.zf,a.mj,a.oj,Object.assign({},cm,a.wc||{}));this.addOnDisposeCallback(function(){return void dm(b)})}
v(am,I);p=am.prototype;p.snapshot=function(a){var b=this;return A(function(c){switch(c.h){case 1:if(b.T)throw Error("Already disposed");if(b.h||b.G){c.A(2);break}return c.yield(b.u.promise,2);case 2:if(!b.h){c.A(4);break}return c.yield(b.h.snapshot(a),5);case 5:return c.return(c.i);case 4:throw b.G;}})};
function em(a){var b;return A(function(c){if(a.T)throw Error("Already disposed");(b=a.i)!=null&&(b.endTimeMs=0,b.Zc(1));return c.yield(a.j.promise,0)})}
function dm(a){a.G=Error("Cancelled by dispose");a.u.resolve();Qc(a.B.promise);a.B.reject(Error("Cancelled by dispose"));a.logger.dispose();Promise.all(a.o).then(function(){var c;return A(function(d){(c=a.h)==null||c.dispose();a.h=void 0;d.h=0})});
a.o=[];var b;(b=a.i)!=null&&(b.endTimeMs=0,b.Zc(1));Qc(a.j.promise);a.j.reject(Error("Cancelled by dispose"))}
p.kc=function(a){var b,c;(b=this.h)==null||(c=b.kc)==null||c.call(b,a)};
p.Dc=function(a,b){var c,d,e;return(e=(c=this.h)==null?void 0:(d=c.Dc)==null?void 0:d.call(c,a,b))!=null?e:Promise.resolve()};
function fm(a,b){var c=a.Tc;a.Tc=function(){c();b()}}
function gm(a,b){a.T||(a.h=b,a.logger.update(b.sc()),a.u.resolve(),a.B.resolve(void 0),a.Tc())}
p.handleError=function(a){if(!this.T){this.G=a;this.u.resolve();var b,c;(c=(b=this.options).Tf)==null||c.call(b,a)}};
function hm(a,b){b&&(Promise.all(a.o).then(function(){return void b.dispose()}),a.o=[])}
function im(a,b){a.J=b;var c,d;(d=(c=a.options).gj)==null||d.call(c,b)}
function jm(a){a.T||(a.j.resolve(),a.j=new Nl)}
function bm(a,b,c,d,e,f){d=d===void 0?Sl():d;e=e===void 0?Promise.resolve(void 0):e;var g,h,k,l,m,n,r,t,w,z,x,H;A(function(G){switch(G.h){case 1:return G.yield(0,3);case 3:h=null;if(!g){G.A(6);break}im(a,7);ya(G,7);return G.yield(km(g.snapshot({}),f.Xe,function(){return Promise.resolve("E:CTO")}),9);
case 9:h=G.i;za(G,6);break;case 7:Aa(G),h="E:UCE";case 6:k=void 0,l=g?f.ef:f.ff,m=new sj(l,f.gf,f.hf,f.df),n=1;case 10:if(!(n<=f.maxAttempts)){G.A(12);break}if(n===1){G.A(13);break}im(a,0);a.i=new lm(m.getValue(),f.ye,f.ze);return G.yield(a.i.promise,14);case 14:r=G.i,a.i=void 0,r===1?(n=1,m.reset()):tj(m);case 13:ya(G,15);t=void 0;if(c){t=c;G.A(17);break}im(a,5);w=d.h;return G.yield(km(mm(b,w,h),f.qf,function(){return Promise.reject(Error("RGF:Fetch timed out"))}),18);
case 18:t=G.i;case 17:return im(a,3),G.yield(km(Tl(d,t),f.Jf,function(){return Promise.reject(Error("DTZ:Script timed out"))}),19);
case 19:return im(a,8),G.yield(e,20);case 20:return z=new Pl({challenge:t,Mb:a.options.Mb,Ae:a.options.Ae}),G.yield(km(z.Qb,f.wg,function(){return Promise.reject(Error("QEG:Setup timed out"))}),21);
case 21:k=z;G.A(12);break;case 15:x=Aa(G),a.handleError(x),jm(a);case 11:n++;G.A(10);break;case 12:if(a.T){G.A(5);break}k&&(c=void 0,hm(a,g),g=k,gm(a,k),jm(a));im(a,2);a.i=new lm(f.le,f.ye,f.ze);return G.yield(a.i.promise,22);case 22:a.i=void 0;if(a.T){G.A(5);break}G.A(3);break;case 5:(H=g)==null||H.dispose(),G.h=0}})}
p.sc=function(){return this.logger.share()};
var cm={le:432E5,ye:3E5,ze:10,Xe:1E4,qf:3E4,Jf:3E4,wg:6E4,ff:1E3,ef:6E4,gf:6E5,hf:.25,df:2,maxAttempts:10};function km(a,b,c){var d,e=new Promise(function(f){d=setTimeout(f,b)});
return Promise.race([a.finally(function(){return void clearTimeout(d)}),
e.then(c)])}
function lm(a,b,c){function d(){var f=e.endTimeMs-Date.now();f<=c?e.Zc(0):setTimeout(d,Math.min(f,b))}
var e=this;this.endTimeMs=Date.now()+a;this.promise=new Promise(function(f){e.Zc=f});
d()}
;function nm(a,b){try{return globalThis.sessionStorage.setItem(a,b),!0}catch(c){return!1}}
var om,pm=(om=Math.imul)!=null?om:function(a,b){return a*b|0};
function qm(a,b,c,d){b=b===void 0?0:b;c=c===void 0?a.length:c;var e=0;for(d&&(e=qm(d));b<c;b++)d=typeof a==="string"?a.charCodeAt(b):a[b],e=pm(31,e)+d|0;return e}
function rm(a,b){return[qm(a,0,a.length>>1,b),qm(a,a.length>>1)]}
var sm=[196,200,224,18];function tm(a){var b=y(rm(a,sm));a=b.next().value;b=b.next().value;return a.toString(16)+b.toString(16)}
function um(a,b){var c=rm(b);a=new Uint32Array(a.buffer);b=a[0];var d=y(c);c=d.next().value;d=d.next().value;for(var e=1;e<a.length;e+=2){for(var f=b,g=e,h=c,k=d,l=0;l<22;l++)g=g>>>8|g<<24,g+=f|0,g^=h+38293,f=f<<3|f>>>29,f^=g,k=k>>>8|k<<24,k+=h|0,k^=l+38293,h=h<<3|h>>>29,h^=k;f=[f,g];a[e]^=f[0];e+1<a.length&&(a[e+1]^=f[1])}}
function wm(a,b,c,d,e){var f=(4-(sm.length+c.length)%4)%4,g=new Uint8Array(4+f+sm.length+4+c.length),h=new DataView(g.buffer),k=0;h.setUint32(k,Math.random()*4294967295);k=k+4+f;g.set(sm,k);k+=sm.length;h.setUint32(k,e);g.set(c,k+4);um(g,d);return a.la(b,function(l){return void globalThis.sessionStorage.removeItem(l)})?nm(b,Fd(g))?"s":"t":"i"}
function xm(a,b){var c=globalThis.sessionStorage.getItem(a);if(!c)return["m"];try{var d=Hd(c);um(d,b)}catch(e){return globalThis.sessionStorage.removeItem(a),["c"]}for(b=4;b<7&&d[b]===0;)b++;for(c=0;c<sm.length;c++)if(d[b++]!==sm[c])return globalThis.sessionStorage.removeItem(a),["d"];c=(new DataView(d.buffer)).getUint32(b);return Math.floor(Date.now()/1E3)>=c?(globalThis.sessionStorage.removeItem(a),["e"]):["a",new Uint8Array(d.buffer,b+4)]}
function ym(a,b,c){c=c===void 0?[]:c;this.maxItems=a;this.h=b===void 0?0:b;this.i=c}
function zm(a){var b=globalThis.sessionStorage.getItem("iU5q-!O9@$");if(!b)return new ym(a);var c=b.split(",");if(c.length<2)return globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new ym(a);b=c.slice(1);b.length===1&&b[0]===""&&(b=[]);c=Number(c[0]);return isNaN(c)||c<0||c>b.length?(globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new ym(a)):new ym(a,c,b)}
ym.prototype.serialize=function(){return String(this.h)+","+this.i.join()};
ym.prototype.la=function(a,b){var c=void 0;if(this.i[this.h]!==a){var d=this.i.indexOf(a);d!==-1?(this.i.splice(d,1),d<this.h&&this.h--,this.i.splice(this.h,0,a)):(c=this.i[this.h],this.i[this.h]=a)}this.h=(this.h+1)%this.maxItems;a=nm("iU5q-!O9@$",this.serialize());c&&a&&b(c);return a};
function Ic(a,b){this.logger=b;try{var c=globalThis.sessionStorage&&!!globalThis.sessionStorage.getItem&&!!globalThis.sessionStorage.setItem&&!!globalThis.sessionStorage.removeItem}catch(d){c=!1}c&&(this.index=zm(a))}
function Am(a,b,c,d,e){var f=a.index?yl(a.logger,function(){return wm(a.index,tm(b),c,d,e)},"W"):"u";
a.logger.Oc(f)}
function Bm(a,b,c){var d=y(a.index?yl(a.logger,function(){return xm(tm(b),c)},"R"):["u"]),e=d.next().value;
d=d.next().value;a.logger.Nc(e);return d}
;var Cm={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);a>0;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Dm(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Em(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;g>=12;g-=12,h+=12)c+=Fm(a,h),d+=Fm(a,h+4),e+=Fm(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return Cm.toString(e)}
function Em(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Fm(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function Gm(a){I.call(this);this.logger=a;this.j=new Nl}
v(Gm,I);function Hm(a,b){var c=setTimeout(function(){a.j.resolve()},b);
a.addOnDisposeCallback(function(){return void clearTimeout(c)})}
Gm.prototype.Qc=function(a,b){var c=this.gb(a);b==null||b(c);return yl(this.logger,function(){return Fd(c,2)},this.i)};
function Im(a,b,c,d){return yl(a.logger,function(){return c?a.Qc(b,d):a.gb(b,d)},a.h)}
function Jm(a,b,c,d){Gm.call(this,a);this.o=b;this.B=c;this.h="m";this.i="x";this.u=0;Hm(this,d)}
v(Jm,Gm);Jm.prototype.gb=function(a,b){var c=this;this.logger.Ka(this.h);++this.u>=this.B&&this.j.resolve();var d=a();a=yl(this.logger,function(){return c.o(d)},"C");
if(a===void 0)throw new F(17,"YNJ:Undefined");if(!(a instanceof Uint8Array))throw new F(18,"ODM:Invalid");b==null||b(a);return a};
function Km(a,b,c){Gm.call(this,a);this.o=b;this.h="f";this.i="z";Hm(this,c)}
v(Km,Gm);Km.prototype.gb=function(){return this.o};
function Lm(a,b,c){Gm.call(this,a);this.o=b;this.h="w";this.i="z";Hm(this,c)}
v(Lm,Gm);Lm.prototype.gb=function(){var a=this;return yl(this.logger,function(){return Hd(a.o)},"d")};
Lm.prototype.Qc=function(){return this.o};
function Mm(a,b){Gm.call(this,a);this.error=b;this.h="e";this.i="y"}
v(Mm,Gm);function Nm(a,b){var c=(b(a.error.message)+":"+b(a.error.stack)).substring(0,2048);b=c.length+1;c=Om(c);var d=new Uint8Array(4+c.length);d.set([42,b&127|128,b>>7,a.error.code]);d.set(c,4);return d}
Mm.prototype.gb=function(){if(this.o)return this.o;this.o=Nm(this,function(a){return"_"+Dm(a)});
return Nm(this,function(a){return a})};
function Pm(a,b,c){Gm.call(this,a);this.o=b;this.clientState=c;this.h="S";this.i="q"}
v(Pm,Gm);Pm.prototype.gb=function(){var a=Math.floor(Date.now()/1E3),b=[Math.random()*255,Math.random()*255],c=b.concat([this.o&255,this.clientState],[a>>24&255,a>>16&255,a>>8&255,a&255]);a=new Uint8Array(2+c.length);a[0]=34;a[1]=c.length;a.set(c,2);c=a.subarray(2);for(var d=b=b.length;d<c.length;++d)c[d]^=c[d%b];this.logger.Pc(this.clientState);return a};
function Om(a){return globalThis.TextEncoder?(new TextEncoder).encode(a):gd(a)}
;var Qm={rf:3E4,zg:2E4};function Rm(a){I.call(this);var b=this;this.Pb=new Nl;this.j=0;this.i=void 0;this.state=2;this.vm=a.vm;this.Oa=a.Oa;this.wc=Object.assign({},Qm,a.wc||{});this.logger=a.vm.sc();var c;this.onError=(c=a.onError)!=null?c:function(){};
this.Ld=a.Ld||!1;if(Sm(a)){var d=this.vm;this.o=function(){return em(d).catch(function(g){g=Jc(b,new F(b.h?20:32,"TRG:Disposed",g));b.i=g;var h;(h=b.h)==null||h.dispose();b.h=void 0;b.Pb.reject(g)})};
fm(d,function(){return void Tm(b)});
d.J===2&&Tm(this)}else this.o=a.fj,Tm(this);var e=this.logger.share();e.Ka("o");var f=new vl(e,"o");this.Pb.promise.then(function(){f.done();e.Ua();e.dispose()},function(){return void e.dispose()});
this.addOnDisposeCallback(function(){b.h?(b.h.dispose(),b.h=void 0):b.i?b.logger.Ua():(b.i=Jc(b,new F(32,"TNP:Disposed")),b.logger.Ua(),b.Pb.reject(b.i))});
Bc(this,this.logger)}
v(Rm,I);function Um(a,b){if(!(b instanceof F))if(b instanceof el){var c=Error(b.toString());c.stack=b.stack;b=new F(11,"EBH:Error",c)}else b=new F(12,"BSO:Unknown",b);return Jc(a,b)}
function Tm(a){var b,c,d,e,f,g,h,k,l,m,n,r,t,w,z;return A(function(x){switch(x.h){case 1:b=void 0;a.j++;c=new Nl;a.vm instanceof am&&a.vm.o.push(c.promise);if(!a.Ld){x.A(2);break}d=new Nl;setTimeout(function(){return void d.resolve()});
return x.yield(d.promise,2);case 2:return e=a.logger.share(),ya(x,4,5),a.state=5,f={},g=[],x.yield(km(a.vm.snapshot({Ha:f,Ee:g}),a.wc.zg,function(){return Promise.reject(new F(15,"MDA:Timeout"))}),7);
case 7:h=x.i;if(a.T)throw new F(a.h?20:32,"MDA:Disposed");k=g[0];a.state=6;return x.yield(km(Vm(a.Oa,h),a.wc.rf,function(){return Promise.reject(new F(10,"BWB:Timeout"))}),8);
case 8:l=x.i;if(a.T)throw new F(a.h?20:32,"BWB:Disposed");a.state=7;b=yl(e,function(){var G=Wm(a,l,c,k);G.j.promise.then(function(){return void a.o()});
return G},"i");
case 5:Ba(x);e.dispose();Ca(x,6);break;case 4:m=Aa(x);(n=b)==null||n.dispose();if(!a.i){r=Um(a,m);c.resolve();var H;if(H=a.vm instanceof am&&a.j<2)a:if(m instanceof F)H=m.code!==32&&m.code!==20&&m.code!==10;else{if(m instanceof el)switch(m.code){case 2:case 13:case 14:case 4:break;default:H=!1;break a}H=!0}if(H)return t=(1+Math.random()*.25)*(a.h?6E4:1E3),w=setTimeout(function(){return void a.o()},t),a.addOnDisposeCallback(function(){return void clearTimeout(w)}),x.return();
a.i=r}e.wa(a.h?13:14);a.Pb.reject(a.i);return x.return();case 6:a.state=8,a.j=0,(z=a.h)==null||z.dispose(),a.h=b,a.Pb.resolve(),x.h=0}})}
function Wm(a,b,c,d){var e=tg(b,2)*1E3;if(e<=0)throw new F(31,"TTM:Invalid");if(vg(b,4))return new Lm(a.logger,vg(b,4),e);if(!tg(b,3))return new Km(a.logger,Td(hg(b)),e);if(!d)throw new F(4,"PMD:Undefined");d=d(Td(hg(b)));if(!(d instanceof Function))throw new F(16,"APF:Failed");a.u=Math.floor((Date.now()+e)/1E3);a=new Jm(a.logger,d,tg(b,3),e);a.addOnDisposeCallback(function(){return void c.resolve()});
return a}
Rm.prototype.gb=function(a){return Xm(this,Object.assign({},a),!1)};
Rm.prototype.Qc=function(a){return Xm(this,Object.assign({},a),!0)};
function Jc(a,b){a.logger.wa(b.code);a.onError(b);return b}
function Ym(a,b){b=b instanceof F?b:new F(5,"TVD:error",b);return Jc(a,b)}
function Xm(a,b,c){try{if(a.T)throw new F(21,"BNT:disposed");if(!a.h&&a.i)throw a.i;var d,e;return(e=(d=Zm(a,b,c))!=null?d:$m(a,b,c))!=null?e:an(a,b,c)}catch(f){if(!b.Rf)throw Ym(a,f);return bn(a,c,f)}}
function Zm(a,b,c){var d;return(d=a.h)==null?void 0:Im(d,function(){return cn(a,b)},c,function(e){var f;
if(a.h instanceof Jm&&((f=b.Ac)==null?0:f.Ag))try{var g;(g=a.cache)==null||Am(g,cn(a,b),e,b.Ac.Qd,a.u-120)}catch(h){Jc(a,new F(24,"ELX:write",h))}})}
function $m(a,b,c){var d;if((d=b.Ac)!=null&&d.Oe)try{var e,f=(e=a.cache)==null?void 0:Bm(e,cn(a,b),b.Ac.Qd);return f?c?yl(a.logger,function(){return Fd(f,2)},"a"):f:void 0}catch(g){Jc(a,new F(23,"RXO:read",g))}}
function an(a,b,c){var d={stack:[],error:void 0,pb:!1};try{if(!b.Qf)throw new F(29,"SDF:notready");return Im(hb(d,new Pm(a.logger,0,a.state)),function(){return cn(a,b)},c)}catch(e){d.error=e,d.pb=!0}finally{ib(d)}}
function bn(a,b,c){var d={stack:[],error:void 0,pb:!1};try{var e=Ym(a,c);return Im(hb(d,new Mm(a.logger,e)),function(){return[]},b)}catch(f){d.error=f,d.pb=!0}finally{ib(d)}}
function cn(a,b){return b.od?b.od:b.Ha?yl(a.logger,function(){return b.od=Om(b.Ha)},"c"):[]}
var Sm=function(a){return ye(function(b){if(!Fe(b))return!1;for(var c=y(Object.entries(a)),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;if(!(d in b)){if(e.Wi===!0)continue;return!1}if(!e(b[d]))return!1}return!0})}({vm:function(a){return ye(function(b){return b instanceof a})}(am)},"");var dn=window;function en(a){var b=fn;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function gn(){var a=[];en(function(b){a.push(b)});
return a}
var fn={Mg:"allow-forms",Ng:"allow-modals",Og:"allow-orientation-lock",Pg:"allow-pointer-lock",Qg:"allow-popups",Rg:"allow-popups-to-escape-sandbox",Sg:"allow-presentation",Tg:"allow-same-origin",Ug:"allow-scripts",Vg:"allow-top-navigation",Wg:"allow-top-navigation-by-user-activation"},hn=Fk(function(){return gn()});
function jn(){var a=kn(),b={};Tb(hn(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function kn(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function ln(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var mn=(new Date).getTime();function nn(a){this.D=M(a)}
v(nn,N);var on=Oh(nn);function pn(a){pk.call(this);var b=this;this.B=this.j=0;this.Ea=a!=null?a:{ra:function(e,f){return setTimeout(e,f)},
sa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(qn(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||rn(this)}
v(pn,pk);function sn(){var a=tn;pn.instance||(pn.instance=new pn(a));return pn.instance}
pn.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ea.sa(this.B);delete pn.instance};
pn.prototype.va=function(){return this.h};
function rn(a){a.B=a.Ea.ra(function(){var b;return A(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.A(3):c.yield(qn(a),3):c.yield(qn(a),3);rn(a);c.h=0})},3E4)}
function qn(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.j=a.Ea.ra(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ba(h);a.u=void 0;a.j&&(a.Ea.sa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?qk(a,"networkstatus-online"):qk(a,"networkstatus-offline"));c(g);Ca(h,0);break;case 2:Aa(h),g=!1,h.A(3)}})})}
;function un(){this.data=[];this.h=-1}
un.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
un.prototype.get=function(a){return!!this.data[a]};
function vn(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function wn(){this.blockSize=-1}
;function xn(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.H=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
bb(xn,wn);xn.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function yn(a,b,c){c||(c=0);var d=a.H;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
xn.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)yn(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){yn(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){yn(this,e);f=0;break}}this.i=f;this.o+=b}};
xn.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;yn(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function zn(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function An(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Bn(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:zn(a).match(/\S+/g)||[],b=Sb(a,b)>=0);return b}
function Cn(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Bn(a,"inverted-hdpi")&&An(a,Array.prototype.filter.call(a.classList?a.classList:zn(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Dn(){}
Dn.prototype.next=function(){return En};
var En={done:!0,value:void 0};Dn.prototype.Bb=function(){return this};function Fn(a){if(a instanceof Gn||a instanceof Hn||a instanceof In)return a;if(typeof a.next=="function")return new Gn(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Gn(function(){return a[Symbol.iterator]()});
if(typeof a.Bb=="function")return new Gn(function(){return a.Bb()});
throw Error("Not an iterator or iterable.");}
function Gn(a){this.h=a}
Gn.prototype.Bb=function(){return new Hn(this.h())};
Gn.prototype[Symbol.iterator]=function(){return new In(this.h())};
Gn.prototype.i=function(){return new In(this.h())};
function Hn(a){this.h=a}
v(Hn,Dn);Hn.prototype.next=function(){return this.h.next()};
Hn.prototype[Symbol.iterator]=function(){return new In(this.h)};
Hn.prototype.i=function(){return new In(this.h)};
function In(a){Gn.call(this,function(){return a});
this.j=a}
v(In,Gn);In.prototype.next=function(){return this.j.next()};function O(a){I.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.B=!!a}
bb(O,I);p=O.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
p.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.xc(a)}return!1};
p.xc=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Yb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.Ab=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.B)for(f=0;f<c.length;f++)e=c[f],Jn(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.T;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.xc(c)}}return f!=0}return!1};
function Jn(a,b,c){Bk(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.xc,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.da=function(){O.Ca.da.call(this);this.clear();this.j.length=0};function Kn(a){this.h=a}
Kn.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new fl).serialize(b))};
Kn.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Kn.prototype.remove=function(a){this.h.remove(a)};function Ln(a){this.h=a}
bb(Ln,Kn);function Mn(a){this.data=a}
function Nn(a){return a===void 0||a instanceof Mn?a:new Mn(a)}
Ln.prototype.set=function(a,b){Ln.Ca.set.call(this,a,Nn(b))};
Ln.prototype.i=function(a){a=Ln.Ca.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ln.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function On(a){this.h=a}
bb(On,Ln);On.prototype.set=function(a,b,c){if(b=Nn(b)){if(c){if(c<$a()){On.prototype.remove.call(this,a);return}b.expiration=c}b.creation=$a()}On.Ca.set.call(this,a,b)};
On.prototype.i=function(a){var b=On.Ca.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<$a()||c&&c>$a())On.prototype.remove.call(this,a);else return b}};function Pn(){}
;function Qn(){}
bb(Qn,Pn);Qn.prototype[Symbol.iterator]=function(){return Fn(this.Bb(!0)).i()};
Qn.prototype.clear=function(){var a=Array.from(this);a=y(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Rn(a){this.h=a;this.i=null}
bb(Rn,Qn);p=Rn.prototype;p.isAvailable=function(){if(this.i===null){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;this.i=b}return this.i};
p.set=function(a,b){Sn(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){Sn(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){Sn(this);this.h.removeItem(a)};
p.Bb=function(a){Sn(this);var b=0,c=this.h,d=new Dn;d.next=function(){if(b>=c.length)return En;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
p.clear=function(){Sn(this);this.h.clear()};
p.key=function(a){Sn(this);return this.h.key(a)};
function Sn(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");a.isAvailable()||fd(Error("Storage mechanism: Storage unavailable"))}
;function Tn(){var a=null;try{a=C.localStorage||null}catch(b){}Rn.call(this,a)}
bb(Tn,Rn);function Un(a,b){this.i=a;this.h=b+"::"}
bb(Un,Qn);Un.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Un.prototype.get=function(a){return this.i.get(this.h+a)};
Un.prototype.remove=function(a){this.i.remove(this.h+a)};
Un.prototype.Bb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Dn;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};function Vn(a){if(a.bb&&typeof a.bb=="function")return a.bb();if(typeof Map!=="undefined"&&a instanceof Map||typeof Set!=="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a==="string")return a.split("");if(Oa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Gi(a)}
function Wn(a){if(a.dc&&typeof a.dc=="function")return a.dc();if(!a.bb||typeof a.bb!="function"){if(typeof Map!=="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!=="undefined"&&a instanceof Set)){if(Oa(a)||typeof a==="string"){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}}
function Xn(a,b,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(b,c);else if(Oa(a)||typeof a==="string")Array.prototype.forEach.call(a,b,c);else for(var d=Wn(a),e=Vn(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}
;function Yn(a){this.i=this.B=this.j="";this.G=null;this.u=this.h="";this.o=!1;var b;a instanceof Yn?(this.o=a.o,Zn(this,a.j),this.B=a.B,this.i=a.i,$n(this,a.G),this.h=a.h,ao(this,a.H.clone()),this.u=a.u):a&&(b=String(a).match(jc))?(this.o=!1,Zn(this,b[1]||"",!0),this.B=bo(b[2]||""),this.i=bo(b[3]||"",!0),$n(this,b[4]),this.h=bo(b[5]||"",!0),ao(this,b[6]||"",!0),this.u=bo(b[7]||"")):(this.o=!1,this.H=new co(null,this.o))}
Yn.prototype.toString=function(){var a=[],b=this.j;b&&a.push(eo(b,fo,!0),":");var c=this.i;if(c||b=="file")a.push("//"),(b=this.B)&&a.push(eo(b,fo,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.G,c!=null&&a.push(":",String(c));if(c=this.h)this.i&&c.charAt(0)!="/"&&a.push("/"),a.push(eo(c,c.charAt(0)=="/"?go:ho,!0));(c=this.H.toString())&&a.push("?",c);(c=this.u)&&a.push("#",eo(c,io));return a.join("")};
Yn.prototype.resolve=function(a){var b=this.clone(),c=!!a.j;c?Zn(b,a.j):c=!!a.B;c?b.B=a.B:c=!!a.i;c?b.i=a.i:c=a.G!=null;var d=a.h;if(c)$n(b,a.G);else if(c=!!a.h){if(d.charAt(0)!="/")if(this.i&&!this.h)d="/"+d;else{var e=b.h.lastIndexOf("/");e!=-1&&(d=b.h.slice(0,e+1)+d)}e=d;if(e==".."||e==".")d="";else if(e.indexOf("./")!=-1||e.indexOf("/.")!=-1){d=e.lastIndexOf("/",0)==0;e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];h=="."?d&&g==e.length&&f.push(""):h==".."?((f.length>1||f.length==1&&
f[0]!="")&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.h=d:c=a.H.toString()!=="";c?ao(b,a.H.clone()):c=!!a.u;c&&(b.u=a.u);return b};
Yn.prototype.clone=function(){return new Yn(this)};
function Zn(a,b,c){a.j=c?bo(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function $n(a,b){if(b){b=Number(b);if(isNaN(b)||b<0)throw Error("Bad port number "+b);a.G=b}else a.G=null}
function ao(a,b,c){b instanceof co?(a.H=b,jo(a.H,a.o)):(c||(b=eo(b,ko)),a.H=new co(b,a.o))}
function bo(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function eo(a,b,c){return typeof a==="string"?(a=encodeURI(a).replace(b,lo),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function lo(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var fo=/[#\/\?@]/g,ho=/[#\?:]/g,go=/[#\?]/g,ko=/[#\?@]/g,io=/#/g;function co(a,b){this.i=this.h=null;this.j=a||null;this.o=!!b}
function mo(a){a.h||(a.h=new Map,a.i=0,a.j&&qc(a.j,function(b,c){a.add(hc(b),c)}))}
p=co.prototype;p.add=function(a,b){mo(this);this.j=null;a=no(this,a);var c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.i=this.i+1;return this};
p.remove=function(a){mo(this);a=no(this,a);return this.h.has(a)?(this.j=null,this.i=this.i-this.h.get(a).length,this.h.delete(a)):!1};
p.clear=function(){this.h=this.j=null;this.i=0};
function oo(a,b){mo(a);b=no(a,b);return a.h.has(b)}
p.forEach=function(a,b){mo(this);this.h.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};
p.dc=function(){mo(this);for(var a=Array.from(this.h.values()),b=Array.from(this.h.keys()),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
p.bb=function(a){mo(this);var b=[];if(typeof a==="string")oo(this,a)&&(b=b.concat(this.h.get(no(this,a))));else{a=Array.from(this.h.values());for(var c=0;c<a.length;c++)b=b.concat(a[c])}return b};
p.set=function(a,b){mo(this);this.j=null;a=no(this,a);oo(this,a)&&(this.i=this.i-this.h.get(a).length);this.h.set(a,[b]);this.i=this.i+1;return this};
p.get=function(a,b){if(!a)return b;a=this.bb(a);return a.length>0?String(a[0]):b};
p.toString=function(){if(this.j)return this.j;if(!this.h)return"";for(var a=[],b=Array.from(this.h.keys()),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.bb(d);for(var f=0;f<d.length;f++){var g=e;d[f]!==""&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.j=a.join("&")};
p.clone=function(){var a=new co;a.j=this.j;this.h&&(a.h=new Map(this.h),a.i=this.i);return a};
function no(a,b){b=String(b);a.o&&(b=b.toLowerCase());return b}
function jo(a,b){b&&!a.o&&(mo(a),a.j=null,a.h.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),c.length>0&&(this.j=null,this.h.set(no(this,e),Zb(c)),this.i=this.i+c.length))},a));
a.o=b}
p.extend=function(a){for(var b=0;b<arguments.length;b++)Xn(arguments[b],function(c,d){this.add(d,c)},this)};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var P={},po=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";P.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
P.Fd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var qo={Cb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Td:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},ro={Cb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Td:function(a){return[].concat.apply([],a)}};
P.vg=function(){po?(P.zb=Uint8Array,P.Ma=Uint16Array,P.He=Int32Array,P.assign(P,qo)):(P.zb=Array,P.Ma=Array,P.He=Array,P.assign(P,ro))};
P.vg();var so=!0;try{new Uint8Array(1)}catch(a){so=!1}
function to(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new P.zb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var uo={};uo=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var vo={},wo,xo=[],yo=0;yo<256;yo++){wo=yo;for(var zo=0;zo<8;zo++)wo=wo&1?3988292384^wo>>>1:wo>>>1;xo[yo]=wo}vo=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^xo[(a^b[d])&255];return a^-1};var Ao={};Ao={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Bo(a){for(var b=a.length;--b>=0;)a[b]=0}
var Co=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Do=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Eo=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Fo=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Go=Array(576);Bo(Go);var Ho=Array(60);Bo(Ho);var Io=Array(512);Bo(Io);var Jo=Array(256);Bo(Jo);var Ko=Array(29);Bo(Ko);var Lo=Array(30);Bo(Lo);function Mo(a,b,c,d,e){this.ue=a;this.pf=b;this.nf=c;this.af=d;this.Nf=e;this.Wd=a&&a.length}
var No,Oo,Po;function Qo(a,b){this.Sd=a;this.Lb=0;this.jb=b}
function Ro(a,b){a.ba[a.pending++]=b&255;a.ba[a.pending++]=b>>>8&255}
function So(a,b,c){a.ia>16-c?(a.pa|=b<<a.ia&65535,Ro(a,a.pa),a.pa=b>>16-a.ia,a.ia+=c-16):(a.pa|=b<<a.ia&65535,a.ia+=c)}
function To(a,b,c){So(a,c[b*2],c[b*2+1])}
function Uo(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Vo(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Uo(d[e]++,e))}
function Wo(a){var b;for(b=0;b<286;b++)a.ta[b*2]=0;for(b=0;b<30;b++)a.nb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ta[512]=1;a.Ta=a.Rb=0;a.Aa=a.matches=0}
function Xo(a){a.ia>8?Ro(a,a.pa):a.ia>0&&(a.ba[a.pending++]=a.pa);a.pa=0;a.ia=0}
function Yo(a,b,c){Xo(a);Ro(a,c);Ro(a,~c);P.Cb(a.ba,a.window,b,c,a.pending);a.pending+=c}
function Zo(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function $o(a,b,c){for(var d=a.ea[c],e=c<<1;e<=a.Ra;){e<a.Ra&&Zo(b,a.ea[e+1],a.ea[e],a.depth)&&e++;if(Zo(b,d,a.ea[e],a.depth))break;a.ea[c]=a.ea[e];c=e;e<<=1}a.ea[c]=d}
function ap(a,b,c){var d=0;if(a.Aa!==0){do{var e=a.ba[a.Zb+d*2]<<8|a.ba[a.Zb+d*2+1];var f=a.ba[a.ud+d];d++;if(e===0)To(a,f,b);else{var g=Jo[f];To(a,g+256+1,b);var h=Co[g];h!==0&&(f-=Ko[g],So(a,f,h));e--;g=e<256?Io[e]:Io[256+(e>>>7)];To(a,g,c);h=Do[g];h!==0&&(e-=Lo[g],So(a,e,h))}}while(d<a.Aa)}To(a,256,b)}
function bp(a,b){var c=b.Sd,d=b.jb.ue,e=b.jb.Wd,f=b.jb.af,g,h=-1;a.Ra=0;a.Hb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ea[++a.Ra]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Ra<2;){var k=a.ea[++a.Ra]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Ta--;e&&(a.Rb-=d[k*2+1])}b.Lb=h;for(g=a.Ra>>1;g>=1;g--)$o(a,c,g);k=f;do g=a.ea[1],a.ea[1]=a.ea[a.Ra--],$o(a,c,1),d=a.ea[1],a.ea[--a.Hb]=g,a.ea[--a.Hb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ea[1]=k++,$o(a,c,1);while(a.Ra>=
2);a.ea[--a.Hb]=a.ea[1];g=b.Sd;k=b.Lb;d=b.jb.ue;e=b.jb.Wd;f=b.jb.pf;var l=b.jb.nf,m=b.jb.Nf,n,r=0;for(n=0;n<=15;n++)a.Na[n]=0;g[a.ea[a.Hb]*2+1]=0;for(b=a.Hb+1;b<573;b++){var t=a.ea[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,r++);g[t*2+1]=n;if(!(t>k)){a.Na[n]++;var w=0;t>=l&&(w=f[t-l]);var z=g[t*2];a.Ta+=z*(n+w);e&&(a.Rb+=z*(d[t*2+1]+w))}}if(r!==0){do{for(n=m-1;a.Na[n]===0;)n--;a.Na[n]--;a.Na[n+1]+=2;a.Na[m]--;r-=2}while(r>0);for(n=m;n!==0;n--)for(t=a.Na[n];t!==0;)d=a.ea[--b],d>k||(g[d*2+1]!==n&&(a.Ta+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Vo(c,h,a.Na)}
function cp(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function dp(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do To(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(To(a,l,a.ja),g--),To(a,16,a.ja),So(a,g-3,2)):g<=10?(To(a,17,a.ja),So(a,g-3,3)):(To(a,18,a.ja),So(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function ep(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ta[c*2]!==0)return 0;if(a.ta[18]!==0||a.ta[20]!==0||a.ta[26]!==0)return 1;for(c=32;c<256;c++)if(a.ta[c*2]!==0)return 1;return 0}
var fp=!1;function gp(a,b,c){a.ba[a.Zb+a.Aa*2]=b>>>8&255;a.ba[a.Zb+a.Aa*2+1]=b&255;a.ba[a.ud+a.Aa]=c&255;a.Aa++;b===0?a.ta[c*2]++:(a.matches++,b--,a.ta[(Jo[c]+256+1)*2]++,a.nb[(b<256?Io[b]:Io[256+(b>>>7)])*2]++);return a.Aa===a.fc-1}
;function hp(a,b){a.msg=Ao[b];return b}
function ip(a){for(var b=a.length;--b>=0;)a[b]=0}
function jp(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(P.Cb(a.output,b.ba,b.lc,c,a.Nb),a.Nb+=c,b.lc+=c,a.Hd+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.lc=0))}
function kp(a,b){var c=a.xa>=0?a.xa:-1,d=a.v-a.xa,e=0;if(a.level>0){a.P.md===2&&(a.P.md=ep(a));bp(a,a.Mc);bp(a,a.Gc);cp(a,a.ta,a.Mc.Lb);cp(a,a.nb,a.Gc.Lb);bp(a,a.Pd);for(e=18;e>=3&&a.ja[Fo[e]*2+1]===0;e--);a.Ta+=3*(e+1)+5+5+4;var f=a.Ta+3+7>>>3;var g=a.Rb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)So(a,b?1:0,3),Yo(a,c,d);else if(a.strategy===4||g===f)So(a,2+(b?1:0),3),ap(a,Go,Ho);else{So(a,4+(b?1:0),3);c=a.Mc.Lb+1;d=a.Gc.Lb+1;e+=1;So(a,c-257,5);So(a,d-1,5);So(a,e-4,4);for(f=0;f<e;f++)So(a,
a.ja[Fo[f]*2+1],3);dp(a,a.ta,c-1);dp(a,a.nb,d-1);ap(a,a.ta,a.nb)}Wo(a);b&&Xo(a);a.xa=a.v;jp(a.P)}
function R(a,b){a.ba[a.pending++]=b}
function lp(a,b){a.ba[a.pending++]=b>>>8&255;a.ba[a.pending++]=b&255}
function mp(a,b){var c=a.be,d=a.v,e=a.ya,f=a.de,g=a.v>a.ma-262?a.v-(a.ma-262):0,h=a.window,k=a.kb,l=a.La,m=a.v+258,n=h[d+e-1],r=h[d+e];a.ya>=a.Vd&&(c>>=2);f>a.F&&(f=a.F);do{var t=b;if(h[t+e]===r&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Kb=b;e=t;if(t>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.F?e:a.F}
function np(a){var b=a.ma,c;do{var d=a.Fe-a.F-a.v;if(a.v>=b+(b-262)){P.Cb(a.window,a.window,b,b,0);a.Kb-=b;a.v-=b;a.xa-=b;var e=c=a.Lc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.La[--e],a.La[e]=f>=b?f-b:0;while(--c);d+=b}if(a.P.oa===0)break;e=a.P;c=a.window;f=a.v+a.F;var g=e.oa;g>d&&(g=d);g===0?c=0:(e.oa-=g,P.Cb(c,e.input,e.ub,g,f),e.state.wrap===1?e.K=uo(e.K,c,g,f):e.state.wrap===2&&(e.K=vo(e.K,c,g,f)),e.ub+=g,e.yb+=g,c=g);a.F+=c;if(a.F+a.la>=3)for(d=a.v-a.la,a.R=a.window[d],
a.R=(a.R<<a.Qa^a.window[d+1])&a.Pa;a.la&&!(a.R=(a.R<<a.Qa^a.window[d+3-1])&a.Pa,a.La[d&a.kb]=a.head[a.R],a.head[a.R]=d,d++,a.la--,a.F+a.la<3););}while(a.F<262&&a.P.oa!==0)}
function op(a,b){for(var c;;){if(a.F<262){np(a);if(a.F<262&&b===0)return 1;if(a.F===0)break}c=0;a.F>=3&&(a.R=(a.R<<a.Qa^a.window[a.v+3-1])&a.Pa,c=a.La[a.v&a.kb]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.ma-262&&(a.U=mp(a,c));if(a.U>=3)if(c=gp(a,a.v-a.Kb,a.U-3),a.F-=a.U,a.U<=a.wd&&a.F>=3){a.U--;do a.v++,a.R=(a.R<<a.Qa^a.window[a.v+3-1])&a.Pa,a.La[a.v&a.kb]=a.head[a.R],a.head[a.R]=a.v;while(--a.U!==0);a.v++}else a.v+=a.U,a.U=0,a.R=a.window[a.v],a.R=(a.R<<a.Qa^a.window[a.v+1])&a.Pa;else c=gp(a,0,
a.window[a.v]),a.F--,a.v++;if(c&&(kp(a,!1),a.P.S===0))return 1}a.la=a.v<2?a.v:2;return b===4?(kp(a,!0),a.P.S===0?3:4):a.Aa&&(kp(a,!1),a.P.S===0)?1:2}
function pp(a,b){for(var c,d;;){if(a.F<262){np(a);if(a.F<262&&b===0)return 1;if(a.F===0)break}c=0;a.F>=3&&(a.R=(a.R<<a.Qa^a.window[a.v+3-1])&a.Pa,c=a.La[a.v&a.kb]=a.head[a.R],a.head[a.R]=a.v);a.ya=a.U;a.he=a.Kb;a.U=2;c!==0&&a.ya<a.wd&&a.v-c<=a.ma-262&&(a.U=mp(a,c),a.U<=5&&(a.strategy===1||a.U===3&&a.v-a.Kb>4096)&&(a.U=2));if(a.ya>=3&&a.U<=a.ya){d=a.v+a.F-3;c=gp(a,a.v-1-a.he,a.ya-3);a.F-=a.ya-1;a.ya-=2;do++a.v<=d&&(a.R=(a.R<<a.Qa^a.window[a.v+3-1])&a.Pa,a.La[a.v&a.kb]=a.head[a.R],a.head[a.R]=a.v);
while(--a.ya!==0);a.sb=0;a.U=2;a.v++;if(c&&(kp(a,!1),a.P.S===0))return 1}else if(a.sb){if((c=gp(a,0,a.window[a.v-1]))&&kp(a,!1),a.v++,a.F--,a.P.S===0)return 1}else a.sb=1,a.v++,a.F--}a.sb&&(gp(a,0,a.window[a.v-1]),a.sb=0);a.la=a.v<2?a.v:2;return b===4?(kp(a,!0),a.P.S===0?3:4):a.Aa&&(kp(a,!1),a.P.S===0)?1:2}
function qp(a,b){for(var c,d,e,f=a.window;;){if(a.F<=258){np(a);if(a.F<=258&&b===0)return 1;if(a.F===0)break}a.U=0;if(a.F>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.U=258-(e-d);a.U>a.F&&(a.U=a.F)}a.U>=3?(c=gp(a,1,a.U-3),a.F-=a.U,a.v+=a.U,a.U=0):(c=gp(a,0,a.window[a.v]),a.F--,a.v++);if(c&&(kp(a,!1),a.P.S===0))return 1}a.la=0;return b===4?(kp(a,!0),a.P.S===0?3:4):
a.Aa&&(kp(a,!1),a.P.S===0)?1:2}
function rp(a,b){for(var c;;){if(a.F===0&&(np(a),a.F===0)){if(b===0)return 1;break}a.U=0;c=gp(a,0,a.window[a.v]);a.F--;a.v++;if(c&&(kp(a,!1),a.P.S===0))return 1}a.la=0;return b===4?(kp(a,!0),a.P.S===0?3:4):a.Aa&&(kp(a,!1),a.P.S===0)?1:2}
function sp(a,b,c,d,e){this.xf=a;this.Mf=b;this.Sf=c;this.Lf=d;this.tf=e}
var tp;tp=[new sp(0,0,0,0,function(a,b){var c=65535;for(c>a.Ba-5&&(c=a.Ba-5);;){if(a.F<=1){np(a);if(a.F===0&&b===0)return 1;if(a.F===0)break}a.v+=a.F;a.F=0;var d=a.xa+c;if(a.v===0||a.v>=d)if(a.F=a.v-d,a.v=d,kp(a,!1),a.P.S===0)return 1;if(a.v-a.xa>=a.ma-262&&(kp(a,!1),a.P.S===0))return 1}a.la=0;if(b===4)return kp(a,!0),a.P.S===0?3:4;a.v>a.xa&&kp(a,!1);return 1}),
new sp(4,4,8,4,op),new sp(4,5,16,8,op),new sp(4,6,32,32,op),new sp(4,4,16,16,pp),new sp(8,16,32,32,pp),new sp(8,16,128,128,pp),new sp(8,32,128,256,pp),new sp(32,128,258,1024,pp),new sp(32,258,258,4096,pp)];
function up(){this.P=null;this.status=0;this.ba=null;this.wrap=this.pending=this.lc=this.Ba=0;this.I=null;this.Da=0;this.method=8;this.Jb=-1;this.kb=this.Kd=this.ma=0;this.window=null;this.Fe=0;this.head=this.La=null;this.de=this.Vd=this.strategy=this.level=this.wd=this.be=this.ya=this.F=this.Kb=this.v=this.sb=this.he=this.U=this.xa=this.Qa=this.Pa=this.sd=this.Lc=this.R=0;this.ta=new P.Ma(1146);this.nb=new P.Ma(122);this.ja=new P.Ma(78);ip(this.ta);ip(this.nb);ip(this.ja);this.Pd=this.Gc=this.Mc=
null;this.Na=new P.Ma(16);this.ea=new P.Ma(573);ip(this.ea);this.Hb=this.Ra=0;this.depth=new P.Ma(573);ip(this.depth);this.ia=this.pa=this.la=this.matches=this.Rb=this.Ta=this.Zb=this.Aa=this.fc=this.ud=0}
function vp(a,b){if(!a||!a.state||b>5||b<0)return a?hp(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.oa!==0||c.status===666&&b!==4)return hp(a,a.S===0?-5:-2);c.P=a;var d=c.Jb;c.Jb=b;if(c.status===42)if(c.wrap===2)a.K=0,R(c,31),R(c,139),R(c,8),c.I?(R(c,(c.I.text?1:0)+(c.I.cb?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),R(c,c.I.time&255),R(c,c.I.time>>8&255),R(c,c.I.time>>16&255),R(c,c.I.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(R(c,c.I.extra.length&255),R(c,c.I.extra.length>>8&255)),c.I.cb&&(a.K=vo(a.K,c.ba,c.pending,0)),c.Da=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.Kd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;lp(c,e+(31-e%31));c.v!==0&&(lp(c,a.K>>>16),lp(c,a.K&65535));a.K=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Da<(c.I.extra.length&65535)&&(c.pending!==c.Ba||
(c.I.cb&&c.pending>e&&(a.K=vo(a.K,c.ba,c.pending-e,e)),jp(a),e=c.pending,c.pending!==c.Ba));)R(c,c.I.extra[c.Da]&255),c.Da++;c.I.cb&&c.pending>e&&(a.K=vo(a.K,c.ba,c.pending-e,e));c.Da===c.I.extra.length&&(c.Da=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.Ba&&(c.I.cb&&c.pending>e&&(a.K=vo(a.K,c.ba,c.pending-e,e)),jp(a),e=c.pending,c.pending===c.Ba)){var f=1;break}f=c.Da<c.I.name.length?c.I.name.charCodeAt(c.Da++)&255:0;R(c,f)}while(f!==0);c.I.cb&&c.pending>
e&&(a.K=vo(a.K,c.ba,c.pending-e,e));f===0&&(c.Da=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.Ba&&(c.I.cb&&c.pending>e&&(a.K=vo(a.K,c.ba,c.pending-e,e)),jp(a),e=c.pending,c.pending===c.Ba)){f=1;break}f=c.Da<c.I.comment.length?c.I.comment.charCodeAt(c.Da++)&255:0;R(c,f)}while(f!==0);c.I.cb&&c.pending>e&&(a.K=vo(a.K,c.ba,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.cb?(c.pending+2>c.Ba&&jp(a),c.pending+2<=c.Ba&&(R(c,
a.K&255),R(c,a.K>>8&255),a.K=0,c.status=113)):c.status=113);if(c.pending!==0){if(jp(a),a.S===0)return c.Jb=-1,0}else if(a.oa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return hp(a,-5);if(c.status===666&&a.oa!==0)return hp(a,-5);if(a.oa!==0||c.F!==0||b!==0&&c.status!==666){d=c.strategy===2?rp(c,b):c.strategy===3?qp(c,b):tp[c.level].tf(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.Jb=-1),0;if(d===2&&(b===1?(So(c,2,3),To(c,256,Go),c.ia===16?(Ro(c,c.pa),c.pa=0,c.ia=0):c.ia>=
8&&(c.ba[c.pending++]=c.pa&255,c.pa>>=8,c.ia-=8)):b!==5&&(So(c,0,3),Yo(c,0,0),b===3&&(ip(c.head),c.F===0&&(c.v=0,c.xa=0,c.la=0))),jp(a),a.S===0))return c.Jb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.K&255),R(c,a.K>>8&255),R(c,a.K>>16&255),R(c,a.K>>24&255),R(c,a.yb&255),R(c,a.yb>>8&255),R(c,a.yb>>16&255),R(c,a.yb>>24&255)):(lp(c,a.K>>>16),lp(c,a.K&65535));jp(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var wp={};wp=function(){this.input=null;this.yb=this.oa=this.ub=0;this.output=null;this.Hd=this.S=this.Nb=0;this.msg="";this.state=null;this.md=2;this.K=0};var xp=Object.prototype.toString;
function yp(a){if(!(this instanceof yp))return new yp(a);a=this.options=P.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.P=new wp;this.P.S=0;var b=this.P;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=hp(b,-2);else{e===8&&(e=9);var k=new up;b.state=k;k.P=b;k.wrap=h;k.I=null;k.Kd=e;k.ma=1<<k.Kd;k.kb=k.ma-1;k.sd=f+7;k.Lc=1<<k.sd;k.Pa=k.Lc-1;k.Qa=~~((k.sd+3-1)/3);k.window=new P.zb(k.ma*2);k.head=new P.Ma(k.Lc);k.La=new P.Ma(k.ma);k.fc=1<<f+6;k.Ba=k.fc*4;k.ba=new P.zb(k.Ba);k.Zb=1*k.fc;k.ud=3*k.fc;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.yb=b.Hd=0;b.md=2;c=b.state;c.pending=0;c.lc=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.K=c.wrap===2?
0:1;c.Jb=0;if(!fp){d=Array(16);for(f=g=0;f<28;f++)for(Ko[f]=g,e=0;e<1<<Co[f];e++)Jo[g++]=f;Jo[g-1]=f;for(f=g=0;f<16;f++)for(Lo[f]=g,e=0;e<1<<Do[f];e++)Io[g++]=f;for(g>>=7;f<30;f++)for(Lo[f]=g<<7,e=0;e<1<<Do[f]-7;e++)Io[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Go[e*2+1]=8,e++,d[8]++;for(;e<=255;)Go[e*2+1]=9,e++,d[9]++;for(;e<=279;)Go[e*2+1]=7,e++,d[7]++;for(;e<=287;)Go[e*2+1]=8,e++,d[8]++;Vo(Go,287,d);for(e=0;e<30;e++)Ho[e*2+1]=5,Ho[e*2]=Uo(e,5);No=new Mo(Go,Co,257,286,15);Oo=new Mo(Ho,
Do,0,30,15);Po=new Mo([],Eo,0,19,7);fp=!0}c.Mc=new Qo(c.ta,No);c.Gc=new Qo(c.nb,Oo);c.Pd=new Qo(c.ja,Po);c.pa=0;c.ia=0;Wo(c);c=0}else c=hp(b,-2);c===0&&(b=b.state,b.Fe=2*b.ma,ip(b.head),b.wd=tp[b.level].Mf,b.Vd=tp[b.level].xf,b.de=tp[b.level].Sf,b.be=tp[b.level].Lf,b.v=0,b.xa=0,b.F=0,b.la=0,b.U=b.ya=2,b.sb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(Ao[b]);a.header&&(b=this.P)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=to(a.dictionary):
xp.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.P;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.F)b=-2;else{b===1&&(a.K=uo(a.K,f,g,0));l.wrap=0;g>=l.ma&&(b===0&&(ip(l.head),l.v=0,l.xa=0,l.la=0),c=new P.zb(l.ma),P.Cb(c,f,g-l.ma,l.ma,0),f=c,g=l.ma);c=a.oa;d=a.ub;e=a.input;a.oa=g;a.ub=0;a.input=f;for(np(l);l.F>=3;){f=l.v;g=l.F-2;do l.R=(l.R<<l.Qa^l.window[f+3-1])&l.Pa,l.La[f&l.kb]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.F=2;np(l)}l.v+=l.F;l.xa=l.v;l.la=l.F;l.F=0;l.U=l.ya=2;l.sb=0;a.ub=d;a.input=e;a.oa=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Ao[b]);this.Ji=!0}}
yp.prototype.push=function(a,b){var c=this.P,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=to(a):xp.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.ub=0;c.oa=c.input.length;do{c.S===0&&(c.output=new P.zb(d),c.Nb=0,c.S=d);a=vp(c,e);if(a!==1&&a!==0)return zp(this,a),this.ended=!0,!1;if(c.S===0||c.oa===0&&(e===4||e===2))if(this.options.to==="string"){var f=P.Fd(c.output,c.Nb);b=f;f=f.length;if(f<65537&&(b.subarray&&so||!b.subarray))b=
String.fromCharCode.apply(null,P.Fd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=P.Fd(c.output,c.Nb),this.chunks.push(b)}while((c.oa>0||c.S===0)&&a!==1);if(e===4)return(c=this.P)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=hp(c,-2):(c.state=null,a=d===113?hp(c,-3):0)):a=-2,zp(this,a),this.ended=!0,a===0;e===2&&(zp(this,0),c.S=0);return!0};
function zp(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):P.Td(a.chunks));a.chunks=[];a.err=b;a.msg=a.P.msg}
function Ap(a,b){b=b||{};b.gzip=!0;b=new yp(b);b.push(a,!0);if(b.err)throw b.msg||Ao[b.err];return b.result}
;function Bp(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Jb(a):null:null}
function Cp(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?qb(a):null:null}
;function Dp(a){return qb(a===null?"null":a===void 0?"undefined":a)}
;function Ep(a){this.name=a}
;var Fp=new Ep("rawColdConfigGroup");var Gp=new Ep("rawHotConfigGroup");function Hp(a){this.D=M(a)}
v(Hp,N);function Ip(a){this.D=M(a)}
v(Ip,N);Ip.prototype.setTrackingParams=function(a){return dg(this,1,ue(a,!1))};var Jp=new Ep("continuationCommand");var Kp=new Ep("webCommandMetadata");var Lp=new Ep("signalServiceEndpoint");var Mp={bh:"EMBEDDED_PLAYER_MODE_UNKNOWN",Yg:"EMBEDDED_PLAYER_MODE_DEFAULT",ah:"EMBEDDED_PLAYER_MODE_PFP",Zg:"EMBEDDED_PLAYER_MODE_PFL"};var Np=new Ep("feedbackEndpoint");var De={ki:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",Ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",bi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",ji:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",mi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",ai:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
oi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",ni:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",di:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",wi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",ti:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",si:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",fi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",xi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",ci:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",yi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
ri:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",Bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",Dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",Ch:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",Gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",hi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
ii:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",Fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",Eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",gi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Vh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
li:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED",Zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHORTS_NON_DEFAULT_ASPECT_RATIO",Lh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PLAYER_IN_SQUEEZEBACK",Jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_CREATOR_AR_GIFT_RECEIVED"};var Op=new Ep("shareEndpoint"),Pp=new Ep("shareEntityEndpoint"),Qp=new Ep("shareEntityServiceEndpoint"),Rp=new Ep("webPlayerShareEntityServiceEndpoint");var Sp=new Ep("playlistEditEndpoint");var Tp=new Ep("modifyChannelNotificationPreferenceEndpoint");var Up=new Ep("undoFeedbackEndpoint");var Vp=new Ep("unsubscribeEndpoint");var Wp=new Ep("subscribeEndpoint");function Xp(){var a=Yp;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Zp(a){D("yt.ads.biscotti.lastId_",a)}
;function $p(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var aq=C.window,bq,cq,dq=(aq==null?void 0:(bq=aq.yt)==null?void 0:bq.config_)||(aq==null?void 0:(cq=aq.ytcfg)==null?void 0:cq.data_)||{};D("yt.config_",dq);function eq(){$p(dq,arguments)}
function S(a,b){return a in dq?dq[a]:b}
function fq(a){var b=dq.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var gq=[];function hq(a){gq.forEach(function(b){return b(a)})}
function iq(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){jq(b)}}:a}
function jq(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),eq("ERRORS",b));hq(a)}
function kq(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),eq("ERRORS",f))}
;var lq=/^[\w.]*$/,mq={q:!0,search_query:!0};function nq(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=oq(f[0]||""),h=oq(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?$b(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(nq);l.args=[{key:m,value:f[1],query:a,method:pq===n?"unchanged":n}];mq.hasOwnProperty(m)||kq(l)}}return c}
var pq=String(nq);function qq(a){var b=[];Fi(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Tb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function rq(a){a.charAt(0)==="?"&&(a=a.substring(1));return nq(a,"&")}
function sq(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),rq(a.length>1?a[1]:a[0])):{}}
function tq(a,b){return uq(a,b||{},!0)}
function uq(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=rq(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return tc(a,e)+d}
function vq(a){if(!b)var b=window.location.href;var c=a.match(jc)[1]||null,d=mc(a);c&&d?(a=a.match(jc),b=b.match(jc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?mc(b)===d&&(Number(b.match(jc)[4]||null)||null)===(Number(a.match(jc)[4]||null)||null):!0;return a}
function oq(a){return a&&a.match(lq)?a:hc(a)}
;function wq(a){var b=xq;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=mn;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ua){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();try{var g=dn.history.length}catch(Ua){g=0}e.u_his=g;var h;e.u_h=(h=dn.screen)==null?void 0:h.height;var k;e.u_w=(k=dn.screen)==null?void 0:k.width;var l;e.u_ah=(l=dn.screen)==null?void 0:l.availHeight;var m;e.u_aw=(m=dn.screen)==null?
void 0:m.availWidth;var n;e.u_cd=(n=dn.screen)==null?void 0:n.colorDepth}catch(Ua){}var r;g=b.h;try{var t=g.screenX;var w=g.screenY}catch(Ua){}try{var z=g.outerWidth;var x=g.outerHeight}catch(Ua){}try{var H=g.innerWidth;var G=g.innerHeight}catch(Ua){}try{var V=g.screenLeft;var ja=g.screenTop}catch(Ua){}try{H=g.innerWidth,G=g.innerHeight}catch(Ua){}try{var lc=g.screen.availWidth;var Xd=g.screen.availTop}catch(Ua){}t=[V,ja,t,w,lc,Xd,z,x,H,G];try{var ka=(b.h.top||window).document,gb=ka.compatMode=="CSS1Compat"?
ka.documentElement:ka.body;var Va=(new Ei(gb.clientWidth,gb.clientHeight)).round()}catch(Ua){Va=new Ei(-12245933,-12245933)}ka=Va;Va={};var Wa=Wa===void 0?C:Wa;gb=new un;"SVGElement"in Wa&&"createElementNS"in Wa.document&&gb.set(0);w=jn();w["allow-top-navigation-by-user-activation"]&&gb.set(1);w["allow-popups-to-escape-sandbox"]&&gb.set(2);Wa.crypto&&Wa.crypto.subtle&&gb.set(3);"TextDecoder"in Wa&&"TextEncoder"in Wa&&gb.set(4);Wa=vn(gb);Va.bc=Wa;Va.bih=ka.height;Va.biw=ka.width;Va.brdim=t.join();
b=b.i;b=b.prerendering?3:(r={visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""])!=null?r:0;r=(Va.vis=b,Va.wgl=!!dn.WebGLRenderingContext,Va);c=d.call(c,e,r);c.ca_type="image";a&&(c.bid=a);return c}
var xq=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return qq(wq(a))});$a();navigator.userAgent.indexOf(" (CrKey ");var yq="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function zq(){if(!yq)return null;var a=yq();return"open"in a?a:null}
function Aq(a){switch(Bq(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
function Bq(a){return a&&"status"in a?a.status:-1}
;function Cq(a,b){typeof a==="function"&&(a=iq(a));return window.setTimeout(a,b)}
;var Dq="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(qa(Dq),["client_dev_set_cookie"]);function T(a){a=Eq(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Fq(a,b){a=Eq(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Gq(){var a=Eq("html5_web_po_experiment_ids");return Array.isArray(a)?Vb(a,function(b){return Number(b||0)}):[Number(a||0)]}
function Hq(a){a=Eq(a);return a!==void 0?String(a):""}
function Eq(a){return S("EXPERIMENT_FLAGS",{})[a]}
function Iq(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=y(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=y(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Jq={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Kq="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(qa(Dq)),Lq=!1;function Mq(a,b,c,d,e,f,g,h,k){function l(){(m&&"readyState"in m?m.readyState:0)===4&&b&&iq(b)(m)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var m=zq();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;T("debug_forward_web_query_parameters")&&(a=Nq(a));m.open(c,a,!0);f&&(m.responseType=f);g&&(m.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Oq(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
k&&"onprogress"in m&&(m.onprogress=function(){k(m.responseText)});
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{m.setAttributionReporting(a)}catch(r){kq(r)}}m.send(d);return m}
function Oq(a,b){b=b===void 0?{}:b;var c=vq(a),d=S("INNERTUBE_CLIENT_NAME"),e=T("web_ajax_ignore_global_headers_if_set"),f;for(f in Jq){var g=S(Jq[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=S("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(mc(a)?!1:!0))){k=a;var l;if(l=T("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=mc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=nc(k)||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!mc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!mc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&mc(a)||(b["X-YouTube-Ad-Signals"]=qq(wq()));return b}
function Pq(a,b){b.method="POST";b.postParams||(b.postParams={});return Qq(a,b)}
function Qq(a,b){var c=b.format||"JSON";a=Rq(a,b);var d=Sq(a,b),e=!1,f=Tq(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Aq(k),m=null,n=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||n||r)m=Uq(a,c,k,b.convertToSafeHtml);l&&(l=Vq(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials,!1,b.onProgress);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Cq(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Rq(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=tq(a,b);return a}
function Sq(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||mc(a)&&!b.withCredentials&&mc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=rq(e),Qi(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):sc(e));f=e||f&&!Ji(f);!Lq&&f&&b.method!=="POST"&&(Lq=!0,jq(Error("AJAX request with postData should use POST")));return e}
function Uq(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,kq(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Wq(a):null)e={},Tb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Xq(g)})}d&&Yq(e);
return e}
function Yq(a){if(Pa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=a[b];var d=ob();c=d?d.createHTML(c):c;a[b]=new Gb(c)}else Yq(a[b])}}
function Vq(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Wq(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Xq(a){var b="";Tb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Nq(a){var b=window.location.search,c=mc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&vq(a)&&(c=document.location.hostname);var d=nc(a);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=rq(b),f={};Tb(Kq,function(g){e[g]&&(f[g]=e[g])});
return uq(a,f||{},!1)}
var Tq=Mq;var Zq=[{xd:function(a){return"Cannot read property '"+a.key+"'"},
Uc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{xd:function(a){return"Cannot call '"+a.key+"'"},
Uc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{xd:function(a){return a.key+" is not defined"},
Uc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var br={fb:[],Za:[{callback:$q,weight:500},{callback:ar,weight:500}]};function $q(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("-extension://")||a.includes("webkit-masked-url://")}
function ar(a){if(!a.stack)return!0;var b=!a.stack.includes("\n");return b&&a.stack.includes("ErrorType: ")||b&&a.stack.includes("Anonymous function (Unknown script")||a.stack.toLowerCase()==="not available"||a.fileName==="user-script"||a.fileName.startsWith("user-script:")?!0:!1}
;function cr(){this.Za=[];this.fb=[]}
var dr;function er(){if(!dr){var a=dr=new cr;a.fb.length=0;a.Za.length=0;fr(a,br)}return dr}
function fr(a,b){b.fb&&a.fb.push.apply(a.fb,b.fb);b.Za&&a.Za.push.apply(a.Za,b.Za)}
;var gr=new O;function hr(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=ir(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=ir(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=ir(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function ir(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function jr(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=kr(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=hr(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?kr(f+".ve",g,h,k):0;d+=f;d+=kr(e,a[e],b,c);if(d>500)break}}else c[b]=lr(a),d+=c[b].length;else c[b]=lr(a),d+=c[b].length;return d}
function kr(a,b,c,d){c+="."+a;a=lr(b);d[c]=a;return c.length+a.length}
function lr(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function mr(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function nr(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function or(){this.we=!0}
function pr(){or.instance||(or.instance=new or);return or.instance}
function qr(a,b){a={};var c=[];"USER_SESSION_ID"in dq&&c.push({key:"u",value:S("USER_SESSION_ID")});if(c=xi(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in dq||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in dq&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));return a}
;var rr={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function sr(a,b,c,d,e){ui.set(""+a,b,{jc:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function tr(a){return ui.get(""+a,void 0)}
function ur(a,b,c){ui.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function vr(){if(T("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!ui.isEnabled())return!1;if(ui.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?ui.set("TESTCOOKIESENABLED","1",{jc:60,jg:"none",secure:!0}):ui.set("TESTCOOKIESENABLED","1",{jc:60});if(ui.get("TESTCOOKIESENABLED")!=="1")return!1;ui.remove("TESTCOOKIESENABLED");return!0}
;var wr=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",wr);function xr(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=tr(this.h);a&&this.parse(a)}
var yr;function zr(){yr||(yr=new xr);return yr}
p=xr.prototype;p.get=function(a,b){Ar(a);Br(a);a=wr[a]!==void 0?wr[a].toString():null;return a!=null?a:b?b:""};
p.set=function(a,b){Ar(a);Br(a);if(b==null)throw Error("ExpectedNotNull");wr[a]=b.toString()};
function Cr(a){return!!((Dr("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
p.remove=function(a){Ar(a);Br(a);delete wr[a]};
p.clear=function(){for(var a in wr)delete wr[a]};
function Br(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ar(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Dr(a){a=wr[a]!==void 0?wr[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
p.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(wr[d]=c.toString())}};var Er={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Fr={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Gr(){var a=C.navigator;return a?a.connection:void 0}
function Hr(){var a=Gr();if(a){var b=Er[a.type||"unknown"]||"CONN_UNKNOWN";a=Er[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Ir(){var a=Gr();if(a!=null&&a.effectiveType)return Fr.hasOwnProperty(a.effectiveType)?Fr[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(qa(b));Object.setPrototypeOf(this,this.constructor.prototype)}
v(U,Error);function Jr(){try{return Kr(),!0}catch(a){return!1}}
function Kr(a){if(S("DATASYNC_ID")!==void 0)return S("DATASYNC_ID");throw new U("Datasync ID not set",a===void 0?"unknown":a);}
;function Lr(){}
function Mr(a,b){return tn.Xa(a,0,b)}
Lr.prototype.ra=function(a,b){return this.Xa(a,1,b)};
Lr.prototype.Vb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Nr=Fq("web_emulated_idle_callback_delay",300),Or=1E3/60-3,Pr=[8,5,4,3,2,1,0];
function Qr(a){a=a===void 0?{}:a;I.call(this);this.i=[];this.j={};this.aa=this.h=0;this.Z=this.u=!1;this.J=[];this.V=this.ha=!1;for(var b=y(Pr),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.jd=a.timeout||1;this.G=Or;this.B=0;this.za=this.Vf.bind(this);this.Ub=this.Dg.bind(this);this.Va=this.Le.bind(this);this.Wa=this.yf.bind(this);this.lb=this.dg.bind(this);this.Ga=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.na=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.za)}
v(Qr,I);p=Qr.prototype;p.Vb=function(a){var b=$a();Rr(this,a);a=$a()-b;this.u||(this.G-=a)};
p.Xa=function(a,b,c){++this.aa;if(b===10)return this.Vb(a),this.aa;var d=this.aa;this.j[d]=a;this.u&&!c?this.J.push({id:d,priority:b}):(this.i[b].push(d),this.Z||this.u||(this.h!==0&&Sr(this)!==this.B&&this.stop(),this.start()));return d};
p.sa=function(a){delete this.j[a]};
function Tr(a){a.J.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
p.isHidden=function(){return!!document.hidden||!1};
function Ur(a){return!a.isHidden()&&a.na}
function Sr(a){if(a.i[8].length){if(a.V)return 4;if(Ur(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Ur(a)?3:2:1;return 0}
p.wa=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Rr(a,b){try{b()}catch(c){a.wa(c)}}
function Vr(a){for(var b=y(Pr),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
p.yf=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;Wr(this,b);this.ha=!1};
p.Dg=function(){Wr(this)};
p.Le=function(){Xr(this)};
p.dg=function(a){this.V=!0;var b=Sr(this);b===4&&b!==this.B&&(this.stop(),this.start());Wr(this,void 0,a);this.V=!1};
p.Vf=function(){this.isHidden()||Xr(this);this.h&&(this.stop(),this.start())};
function Xr(a){a.stop();a.u=!0;for(var b=$a(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Rr(a,e)}Yr(a);a.u=!1;Vr(a)&&a.start();b=$a()-b;a.G-=b}
function Yr(a){for(var b=0,c=a.J.length;b<c;b++){var d=a.J[b];a.i[d.priority].push(d.id)}a.J.length=0}
function Wr(a,b,c){a.V&&a.B===4&&a.h||a.stop();a.u=!0;b=$a()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.wa(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Rr(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!($a()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Rr(a,c)}while(c&&$a()<b)}a.u=!1;Yr(a);a.G=Or;Vr(a)&&a.start()}
p.start=function(){this.Z=!1;if(this.h===0)switch(this.B=Sr(this),this.B){case 1:var a=this.Wa;this.h=this.Ga?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Nr);break;case 2:this.h=window.setTimeout(this.Ub,this.jd);break;case 3:this.h=window.requestAnimationFrame(this.lb);break;case 4:this.h=window.setTimeout(this.Va,0)}};
p.pause=function(){this.stop();this.Z=!0};
p.stop=function(){if(this.h){switch(this.B){case 1:var a=this.h;this.Ga?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
p.da=function(){Tr(this);this.stop();this.na&&document.removeEventListener("visibilitychange",this.za);I.prototype.da.call(this)};var Zr=E("yt.scheduler.instance.timerIdMap_")||{},$r=Fq("kevlar_tuner_scheduler_soft_state_timer_ms",800),as=0,bs=0;function cs(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.T)a=new Qr(S("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function ds(){es();var a=E("ytglobal.schedulerInstanceInstance_");a&&(zc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function es(){Tr(cs());for(var a in Zr)Zr.hasOwnProperty(a)&&delete Zr[Number(a)]}
function gs(a,b,c){if(!c)return c=c===void 0,-cs().Xa(a,b,c);var d=window.setTimeout(function(){var e=cs().Xa(a,b);Zr[d]=e},c);
return d}
function hs(a){cs().Vb(a)}
function is(a){var b=cs();if(a<0)b.sa(-a);else{var c=Zr[a];c?(b.sa(c),delete Zr[a]):window.clearTimeout(a)}}
function js(){ks()}
function ks(){window.clearTimeout(as);cs().start()}
function ls(){cs().pause();window.clearTimeout(as);as=window.setTimeout(js,$r)}
function ms(){window.clearTimeout(bs);bs=window.setTimeout(function(){ns(0)},$r)}
function ns(a){ms();var b=cs();b.o=a;b.start()}
function ps(a){ms();var b=cs();b.o>a&&(b.o=a,b.start())}
function qs(){window.clearTimeout(bs);var a=cs();a.o=0;a.start()}
function rs(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",ds),D("yt.scheduler.instance.addJob",gs),D("yt.scheduler.instance.addImmediateJob",hs),D("yt.scheduler.instance.cancelJob",is),D("yt.scheduler.instance.cancelAllJobs",es),D("yt.scheduler.instance.start",ks),D("yt.scheduler.instance.pause",ls),D("yt.scheduler.instance.setPriorityThreshold",ns),D("yt.scheduler.instance.enablePriorityThreshold",ps),D("yt.scheduler.instance.clearPriorityThreshold",qs),D("yt.scheduler.initialized",
!0))}
;function ss(){Lr.apply(this,arguments)}
v(ss,Lr);function ts(){ss.instance||(ss.instance=new ss);return ss.instance}
ss.prototype.Xa=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Cq(a,c||0)};
ss.prototype.sa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
ss.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
ss.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var tn=ts();T("web_scheduler_auto_init")&&rs();function us(a){var b=new Tn;this.h=(a=b.isAvailable()?a?new Un(b,a):b:null)?new On(a):null;this.i=document.domain||window.location.hostname}
us.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new fl).serialize(b))}catch(f){return}else e=escape(b);sr(a,e,c,this.i)};
us.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=tr(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
us.prototype.remove=function(a){this.h&&this.h.remove(a);ur(a,"/",this.i)};var vs=function(){var a;return function(){a||(a=new us("ytidb"));return a}}();
function ws(){var a;return(a=vs())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var xs=[],ys,zs=!1;function As(){var a={};for(ys=new Bs(a.handleError===void 0?Cs:a.handleError,a.logEvent===void 0?Ds:a.logEvent);xs.length>0;)switch(a=xs.shift(),a.type){case "ERROR":ys.wa(a.payload);break;case "EVENT":ys.logEvent(a.eventType,a.payload)}}
function Es(a){zs||(ys?ys.wa(a):(xs.push({type:"ERROR",payload:a}),xs.length>10&&xs.shift()))}
function Fs(a,b){zs||(ys?ys.logEvent(a,b):(xs.push({type:"EVENT",eventType:a,payload:b}),xs.length>10&&xs.shift()))}
;function Gs(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Hs(a){return a.substr(0,a.indexOf(":"))||a}
;var Is=Ad||Bd;function Js(a){var b=jd();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Ks={},Ls=(Ks.AUTH_INVALID="No user identifier specified.",Ks.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ks.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ks.MISSING_INDEX="Index not created.",Ks.MISSING_OBJECT_STORES="Object stores not created.",Ks.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Ks.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Ks.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Ks.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Ks.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Ks.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Ks.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Ks),Ms={},Ns=(Ms.AUTH_INVALID="ERROR",Ms.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ms.EXPLICIT_ABORT="IGNORED",Ms.IDB_NOT_SUPPORTED="ERROR",Ms.MISSING_INDEX=
"WARNING",Ms.MISSING_OBJECT_STORES="ERROR",Ms.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Ms.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Ms.QUOTA_EXCEEDED="WARNING",Ms.QUOTA_MAYBE_EXCEEDED="WARNING",Ms.UNKNOWN_ABORT="WARNING",Ms.INCOMPATIBLE_DB_VERSION="WARNING",Ms),Os={},Ps=(Os.AUTH_INVALID=!1,Os.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Os.EXPLICIT_ABORT=!1,Os.IDB_NOT_SUPPORTED=!1,Os.MISSING_INDEX=!1,Os.MISSING_OBJECT_STORES=!1,Os.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Os.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Os.QUOTA_EXCEEDED=!1,Os.QUOTA_MAYBE_EXCEEDED=!0,Os.UNKNOWN_ABORT=!0,Os.INCOMPATIBLE_DB_VERSION=!1,Os);function Qs(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Ls[a]:c;d=d===void 0?Ns[a]:d;e=e===void 0?Ps[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Qs.prototype)}
v(Qs,U);function Rs(a,b){Qs.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Ls.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Rs.prototype)}
v(Rs,Qs);function Ss(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ss.prototype)}
v(Ss,Error);var Ts=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Us(a,b,c,d){b=Hs(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Qs)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Qs("QUOTA_EXCEEDED",a);if(Cd&&e.name==="UnknownError")return new Qs("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ss)return new Qs("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Ts.some(function(f){return e.message.includes(f)}))return new Qs("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Qs("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",ge:e.name})];e.level="WARNING";return e}
function Vs(a,b,c){var d=ws();return new Qs("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Ws(a){if(!a)throw Error();throw a;}
function Xs(a){return a}
function Ys(a){this.h=a}
function Zs(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=y(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=y(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Zs.all=function(a){return new Zs(new Ys(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Ib:0};f.Ib<a.length;f={Ib:f.Ib},++f.Ib)Zs.resolve(a[f.Ib]).then(function(g){return function(h){d[g.Ib]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Zs.resolve=function(a){return new Zs(new Ys(function(b,c){a instanceof Zs?a.then(b,c):b(a)}))};
Zs.reject=function(a){return new Zs(new Ys(function(b,c){c(a)}))};
Zs.prototype.then=function(a,b){var c=this,d=a!=null?a:Xs,e=b!=null?b:Ws;return new Zs(new Ys(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){$s(c,c,d,f,g)}),c.i.push(function(){at(c,c,e,f,g)})):c.state.status==="FULFILLED"?$s(c,c,d,f,g):c.state.status==="REJECTED"&&at(c,c,e,f,g)}))};
Zs.prototype.catch=function(a){return this.then(void 0,a)};
function $s(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Zs?bt(a,b,f,d,e):d(f)}catch(g){e(g)}}
function at(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Zs?bt(a,b,f,d,e):d(f)}catch(g){e(g)}}
function bt(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Zs?bt(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ct(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function dt(a){return new Promise(function(b,c){ct(a,b,c)})}
function et(a){return new Zs(new Ys(function(b,c){ct(a,b,c)}))}
;function ft(a,b){return new Zs(new Ys(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var gt=window,W=gt.ytcsi&&gt.ytcsi.now?gt.ytcsi.now:gt.performance&&gt.performance.timing&&gt.performance.now&&gt.performance.timing.navigationStart?function(){return gt.performance.timing.navigationStart+gt.performance.now()}:function(){return(new Date).getTime()};function ht(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
function jt(){return T("idb_immediate_commit")}
p=ht.prototype;p.add=function(a,b,c){return kt(this,[a],{mode:"readwrite",ka:!0,commit:jt()},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return kt(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return kt(this,[a],{mode:"readonly",ka:!0,commit:jt()},function(c){return c.objectStore(a).count(b)})};
function lt(a,b,c){a=a.h.createObjectStore(b,c);return new mt(a)}
p.delete=function(a,b){return kt(this,[a],{mode:"readwrite",ka:!0,commit:jt()&&!(b instanceof IDBKeyRange)},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return kt(this,[a],{mode:"readonly",ka:!0,commit:jt()},function(c){return c.objectStore(a).get(b)})};
function nt(a,b,c){return kt(a,[b],{mode:"readwrite",ka:!0,commit:jt()},function(d){d=d.objectStore(b);return et(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function kt(a,b,c,d){var e,f,g,h,k,l,m,n,r,t,w,z;return A(function(x){switch(x.h){case 1:var H={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){x.A(4);break}g++;k=Math.round(W());ya(x,5);l=a.h.transaction(b,e.mode);H=x.yield;var G=!!e.commit;var V=new ot(l);G=pt(V,d,G);return H.call(x,G,7);case 7:return m=x.i,n=Math.round(W()),qt(a,k,n,g,void 0,b.join(),e),x.return(m);case 5:r=Aa(x);t=Math.round(W());
w=Us(r,a.h.name,b.join(),a.h.version);if((z=w instanceof Qs&&!w.h)||g>=f)qt(a,k,t,g,w,b.join(),e),h=w;x.A(2);break;case 4:return x.return(Promise.reject(h))}})}
function qt(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Qs&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Fs("QUOTA_EXCEEDED",{dbName:Hs(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Qs&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),Fs("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),rt(a,!1,d,f,b,g.tag),Es(e)):rt(a,!0,d,f,b,g.tag)}
function rt(a,b,c,d,e,f){Fs("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function mt(a){this.h=a}
p=mt.prototype;p.add=function(a,b){return et(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return et(this.h.clear()).then(function(){})};
function st(a,b,c){a.h.createIndex(b,c,{unique:!1})}
p.count=function(a){return et(this.h.count(a))};
function tt(a,b){return ut(a,{query:b},function(c){return c.delete().then(function(){return vt(c)})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?tt(this,a):et(this.h.delete(a))};
p.get=function(a){return et(this.h.get(a))};
p.index=function(a){try{return new wt(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Ss(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function ut(a,b,c){a=a.h.openCursor(b.query,b.direction);return xt(a).then(function(d){return ft(d,c)})}
function ot(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Qs;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function pt(a,b,c){var d=new Promise(function(e,f){try{var g=b(a);c&&a.commit();g.then(function(h){e(h)}).catch(f)}catch(h){f(h),a.abort()}});
return Promise.all([d,a.done]).then(function(e){return y(e).next().value})}
ot.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Qs("EXPLICIT_ABORT");};
ot.prototype.commit=function(){if(!this.aborted){var a,b;(b=(a=this.h).commit)==null||b.call(a)}};
ot.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new mt(a),this.i.set(a,b));return b};
function wt(a){this.h=a}
p=wt.prototype;p.count=function(a){return et(this.h.count(a))};
p.delete=function(a){return zt(this,{query:a},function(b){return b.delete().then(function(){return vt(b)})})};
p.get=function(a){return et(this.h.get(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function zt(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return xt(a).then(function(d){return ft(d,c)})}
function At(a,b){this.request=a;this.cursor=b}
function xt(a){return et(a).then(function(b){return b?new At(a,b):null})}
function vt(a){a.cursor.continue(void 0);return xt(a.request)}
At.prototype.delete=function(){return et(this.cursor.delete()).then(function(){})};
At.prototype.getValue=function(){return this.cursor.value};
At.prototype.update=function(a){return et(this.cursor.update(a))};function Bt(a,b,c){return new Promise(function(d,e){function f(){r||(r=new ht(g.result,{closed:n}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Pe,k=c.blocking,l=c.Bg,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&Fs("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Hs(a)});var w=f(),z=new ot(g.transaction);
m&&m(w,function(x){return t.oldVersion<x&&t.newVersion>=x},z);
z.done.catch(function(x){e(x)})}catch(x){e(x)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Fs("IDB_UNEXPECTEDLY_CLOSED",{dbName:Hs(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Ct(a,b,c){c=c===void 0?{}:c;return Bt(a,b,c)}
function Dt(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Pe)&&c.addEventListener("blocked",function(){e()}),g.yield(dt(c),4);
if(g.h!=2)return za(g,0);f=Aa(g);throw Us(f,a,"",-1);})}
;function Et(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
Et.prototype.i=function(a,b,c){c=c===void 0?{}:c;return Ct(a,b,c)};
Et.prototype.delete=function(a){a=a===void 0?{}:a;return Dt(this.name,a)};
function Ft(a,b){return new Qs("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Gt(a,b){if(!b)throw Vs("openWithToken",Hs(a.name));return a.open()}
Et.prototype.open=function(){function a(){var f,g,h,k,l,m,n,r,t,w;return A(function(z){switch(z.h){case 1:return g=(f=Error().stack)!=null?f:"",ya(z,2),z.yield(c.i(c.name,c.options.version,e),4);case 4:for(var x=h=z.i,H=c.options,G=[],V=y(Object.keys(H.Ob)),ja=V.next();!ja.done;ja=V.next()){ja=ja.value;var lc=H.Ob[ja],Xd=lc.eg===void 0?Number.MAX_VALUE:lc.eg;!(x.h.version>=lc.Xb)||x.h.version>=Xd||x.h.objectStoreNames.contains(ja)||G.push(ja)}k=G;if(k.length===0){z.A(5);break}l=Object.keys(c.options.Ob);
m=h.objectStoreNames();if(c.u<Fq("ytidb_reopen_db_retries",0))return c.u++,h.close(),Es(new Qs("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),z.return(a());if(!(c.o<Fq("ytidb_remake_db_retries",1))){z.A(6);break}c.o++;return z.yield(c.delete(),7);case 7:return Es(new Qs("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),z.return(a());case 6:throw new Rs(m,l);case 5:return z.return(h);case 2:n=Aa(z);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){z.A(8);break}return z.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=z.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,Ft(c,t);return z.return(r);case 8:throw b(),n instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Us(n,c.name,"",(w=c.options.version)!=null?w:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Ft(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Bg:b,upgrade:this.options.upgrade};return this.h=d=a()};var Ht=new Et("YtIdbMeta",{Ob:{databases:{Xb:1}},upgrade:function(a,b){b(1)&&lt(a,"databases",{keyPath:"actualName"})}});
function It(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Gt(Ht,b),2);c=d.i;return d.return(kt(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return et(f.h.put(a,void 0)).then(function(){})})}))})}
function Jt(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(Gt(Ht,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Kt(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(Gt(Ht,b),2)):e.h!=3?(d=e.i,e.yield(kt(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return ut(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return vt(g)})}),3)):e.return(c)})}
function Lt(a){return Kt(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Mt(a,b,c){return Kt(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Nt(a){var b,c;return A(function(d){if(d.h==1)return b=Kr("YtIdbMeta hasAnyMeta other"),d.yield(Kt(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Ot,Pt=new function(){}(new function(){});
function Qt(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=ws();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Is)f=/WebKit\/([0-9]+)/.exec(jd()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(jd()),f=!(f&&parseInt(f[1],10)>=602));if(f||wd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(It(d,Pt),4);case 4:return e.yield(Jt("yt-idb-test-do-not-use",Pt),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Rt(){if(Ot!==void 0)return Ot;zs=!0;return Ot=Qt().then(function(a){zs=!1;var b;if((b=vs())!=null&&b.h){var c;b={hasSucceededOnce:((c=ws())==null?void 0:c.hasSucceededOnce)||a};var d;(d=vs())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function St(){return E("ytglobal.idbToken_")||void 0}
function Tt(){var a=St();return a?Promise.resolve(a):Rt().then(function(b){(b=b?Pt:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Ut=0;function Vt(a,b){Ut||(Ut=tn.ra(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Tt(),2);case 2:c=h.i;if(!c)return h.return();d=!0;ya(h,3);return h.yield(Mt(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(Dt(f.actualName),7);case 7:return h.yield(Jt(f.actualName,c),6);case 6:za(h,4);break;case 3:g=Aa(h),Es(g),d=!1;case 4:tn.sa(Ut),Ut=0,d&&Vt(a,b),h.h=0}})}))}
function Wt(){var a;return A(function(b){return b.h==1?b.yield(Tt(),2):(a=b.i)?b.return(Nt(a)):b.return(!1)})}
new Nl;function Xt(a){if(!Jr())throw a=new Qs("AUTH_INVALID",{dbName:a}),Es(a),a;var b=Kr();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Yt(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Tt(),2);case 2:g=m.i;if(!g)throw h=Vs("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Es(h),h;Gs(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Xt(a);ya(m,3);return m.yield(It(k,g),5);case 5:return m.yield(Ct(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Aa(m),ya(m,7),m.yield(Jt(k.actualName,
g),9);case 9:za(m,8);break;case 7:Aa(m);case 8:throw l;}})}
function Zt(a,b,c){c=c===void 0?{}:c;return Yt(a,b,!1,c)}
function $t(a,b,c){c=c===void 0?{}:c;return Yt(a,b,!0,c)}
function au(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(Tt(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Gs(a);d=Xt(a);return e.yield(Dt(d.actualName,b),3)}return e.yield(Jt(d.actualName,c),0)})}
function bu(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(Dt(d.actualName,b),2):e.yield(Jt(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function cu(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(Tt(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Gs("LogsDatabaseV2");return d.yield(Lt(b),3)}c=d.i;return d.yield(bu(c,a,b),0)})}
function du(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(Tt(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Gs(a);return d.yield(Dt(a,b),3)}return d.yield(Jt(a,c),0)})}
;function eu(a,b){Et.call(this,a,b);this.options=b;Gs(a)}
v(eu,Et);function fu(a,b){var c;return function(){c||(c=new eu(a,b));return c}}
eu.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?$t:Zt)(a,b,Object.assign({},c))};
eu.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?du:au)(this.name,a)};
function gu(a,b){return fu(a,b)}
;var hu={},iu=gu("ytGcfConfig",{Ob:(hu.coldConfigStore={Xb:1},hu.hotConfigStore={Xb:1},hu),shared:!1,upgrade:function(a,b){b(1)&&(st(lt(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),st(lt(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function ju(a){return Gt(iu(),a)}
function ku(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(ju(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(nt(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function lu(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(ju(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(nt(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function mu(a){var b,c;return A(function(d){return d.h==1?d.yield(ju(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(kt(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return zt(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function nu(a){var b,c;return A(function(d){return d.h==1?d.yield(ju(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(kt(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return zt(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function ou(){I.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(qa(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
v(ou,I);ou.prototype.da=function(){for(var a=y(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;I.prototype.da.call(this)};function pu(){this.h=0;this.i=new ou}
function qu(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:S("RAW_HOT_CONFIG_GROUP")}
function ru(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.A(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=St();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(nu(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(ku(c,b,d),3);case 3:if(c)for(var h=c,k=y(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function su(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!T("start_client_gcf"))return h.A(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=St())?c?h.A(4):h.yield(mu(d),5):h.A(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(lu(c,b,g,d),0)})}
function tu(){if(!pu.instance){var a=new pu;pu.instance=a}a=pu.instance;var b=W()-a.h;if(!(a.h!==0&&b<Fq("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
pu.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function uu(){return"INNERTUBE_API_KEY"in dq&&"INNERTUBE_API_VERSION"in dq}
function vu(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),Af:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Yd:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ti:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),Cf:S("INNERTUBE_CONTEXT_HL"),Bf:S("INNERTUBE_CONTEXT_GL"),Df:S("INNERTUBE_HOST_OVERRIDE")||"",Ef:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ui:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function wu(a){var b={client:{hl:a.Cf,gl:a.Bf,clientName:a.Yd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Af}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Iq();c.length>0&&(b.request={internalExperimentFlags:c});c=a.Yd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=nr()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Hr())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&
(a=Ir())&&b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=tu())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=S("INNERTUBE_CONTEXT");var g;if(T("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=y(Object.entries(rq(S("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=y(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function xu(a,b,c){c=c===void 0?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Ki:(a=qr(pr()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var yu=typeof TextEncoder!=="undefined"?new TextEncoder:null,zu=yu?function(a){return yu.encode(a)}:function(a){a=gd(a);
for(var b=new Uint8Array(a.length),c=0;c<b.length;c++)b[c]=a[c];return b};var Au={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},Bu={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function Cu(a,b){this.version=a;this.args=b}
Cu.prototype.serialize=function(){return{version:this.version,args:this.args}};function Du(a,b){this.topic=a;this.h=b}
Du.prototype.toString=function(){return this.topic};var Eu=E("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.xc;O.prototype.publish=O.prototype.Ab;O.prototype.clear=O.prototype.clear;D("ytPubsub2Pubsub2Instance",Eu);var Fu=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",Fu);var Gu=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",Gu);var Hu=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",Hu);
D("ytPubsub2Pubsub2SkipSubKey",null);function Iu(a,b){var c=Ju();c&&c.publish.call(c,a.toString(),a,b)}
function Ku(a){var b=Lu,c=Ju();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Fu[d])try{if(f&&b instanceof Du&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Be){var l=new h;h.Be=l.version}var m=h.Be}catch(n){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Zb(k.args))}catch(n){throw n.message="yt.pubsub2.Data.deserialize(): "+n.message,n;}}catch(n){throw n.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+n.message,n;}a.call(window,f)}catch(n){jq(n)}},Hu[b.toString()]?E("yt.scheduler.instance")?tn.ra(g):Cq(g,0):g())});
Fu[d]=!0;Gu[b.toString()]||(Gu[b.toString()]=[]);Gu[b.toString()].push(d);return d}
function Mu(){var a=Nu,b=Ku(function(c){a.apply(void 0,arguments);Ou(b)});
return b}
function Ou(a){var b=Ju();b&&(typeof a==="number"&&(a=[a]),Tb(a,function(c){b.unsubscribeByKey(c);delete Fu[c]}))}
function Ju(){return E("ytPubsub2Pubsub2Instance")}
;function Pu(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Iu("meta_logging_csi_event",{timerName:a,tj:b})}
;var Qu=void 0,Ru=void 0;function Su(){Ru||(Ru=Cp(S("WORKER_SERIALIZATION_URL")));return Ru||void 0}
function Tu(){var a=Su();Qu||a===void 0||(Qu=new Worker(rb(a),void 0));return Qu}
;var Uu=Fq("max_body_size_to_compress",5E5),Vu=Fq("min_body_size_to_compress",500),Wu=!0,Xu=0,Yu=0,Zu=Fq("compression_performance_threshold_lr",250),$u=Fq("slow_compressions_before_abandon_count",4),av=!1,bv=new Map,cv=1,dv=!0;function ev(){if(typeof Worker==="function"&&Su()&&!av){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=bv.get(c.key);d&&(fv(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),bv.delete(c.key))}},b=Tu();
b&&(b.addEventListener("message",a),b.onerror=function(){bv.clear()},av=!0)}}
function gv(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(Wu)try{var g=hv(b);if(g!=null&&(g>Uu||g<Vu))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!dv||!T("initial_gzip_use_main_thread"))){av||ev();var h=Tu();if(h&&!e){bv.set(cv,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:cv});cv++;return}}var k=Ap(zu(b));fv(k,f,a,c,d)}}catch(l){kq(l),d(a,c)}else d(a,c)}
function fv(a,b,c,d,e){dv=!1;var f=W();b.ticks.gelc=f;Yu++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Zu&&(Xu++,T("abandon_compression_after_N_slow_zips")?Yu===Fq("compression_disable_point")&&Xu>$u&&(Wu=!1):Wu=!1);iv(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function jv(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Wu&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=hv(g);if(h!=null&&(h>Uu||h<Vu))return a;c=b?{level:1}:void 0;f=Ap(zu(g),c);var k=W();e.ticks.gelc=k;if(b){Yu++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Zu)if(Xu++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=Xu/Yu;var l=$u/Fq("compression_disable_point");Yu>0&&Yu%Fq("compression_disable_point")===0&&b>=l&&(Wu=!1)}else Wu=!1;iv(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return kq(m),a}}else return a}
function hv(a){try{return(new Blob(a.split(""))).size}catch(b){return kq(b),null}}
function iv(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||Pu("gel_compression",a,{sampleRate:.1})}
;function kv(a){a=Object.assign({},a);delete a.Authorization;var b=xi();if(b){var c=new xn;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Fd(c.digest(),3)}return a}
;var lv;function mv(){lv||(lv=new us("yt.innertube"));return lv}
function nv(a,b,c,d){if(d)return null;d=mv().get("nextId",!0)||1;var e=mv().get("requests",!0)||{};e[d]={method:a,request:b,authState:kv(c),requestTime:Math.round(W())};mv().set("nextId",d+1,86400,!0);mv().set("requests",e,86400,!0);return d}
function ov(a){var b=mv().get("requests",!0)||{};delete b[a];mv().set("requests",b,86400,!0)}
function pv(a){var b=mv().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(W())-d.requestTime<6E4)){var e=d.authState,f=kv(xu(!1));Mi(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),qv(a,d.method,e,{}));delete b[c]}}mv().set("requests",b,86400,!0)}}
;function rv(a){this.zc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Gb=function(){};
this.now=Date.now;this.cc=!1;var b;this.xe=(b=a.xe)!=null?b:100;var c;this.qe=(c=a.qe)!=null?c:1;var d;this.oe=(d=a.oe)!=null?d:2592E6;var e;this.je=(e=a.je)!=null?e:12E4;var f;this.pe=(f=a.pe)!=null?f:5E3;var g;this.W=(g=a.W)!=null?g:void 0;this.Hc=!!a.Hc;var h;this.Ec=(h=a.Ec)!=null?h:.1;var k;this.Wc=(k=a.Wc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.Gb&&(this.Gb=a.Gb);a.cc&&(this.cc=a.cc);a.zc&&(this.zc=a.zc);this.X=a.X;this.Ea=a.Ea;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Cd=a.Cd;this.zd=a.zd;sv(this)&&(!this.X||this.X("networkless_logging"))&&tv(this)}
function tv(a){sv(a)&&!a.cc&&(a.h=!0,a.Hc&&Math.random()<=a.Ec&&a.ga.Te(a.W),uv(a),a.fa.va()&&a.vc(),a.fa.listen(a.Cd,a.vc.bind(a)),a.fa.listen(a.zd,a.Rd.bind(a)))}
p=rv.prototype;p.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(sv(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.W).then(function(e){d.id=e;c.fa.va()&&vv(c,d)}).catch(function(e){vv(c,d);
wv(c,e)})}else this.sendFn(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(sv(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.X&&this.X("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.va()||this.X&&this.X("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.W).catch(function(l){wv(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.W).catch(function(g){d.sendFn(a,b,e.skipRetry);
wv(d,g)})}else this.sendFn(a,b,this.X&&this.X("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(sv(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.Eb(d.id,c.W):e=!0;c.fa.tb&&c.X&&c.X("vss_network_hint")&&c.fa.tb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.W).then(function(g){d.id=g;e&&c.ga.Eb(d.id,c.W)}).catch(function(g){wv(c,g)})}else this.sendFn(a,b,void 0,!0)};
p.vc=function(){var a=this;if(!sv(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ea.ra(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.ga.Ud("NEW",a.W),2);if(c.h!=3)return b=c.i,b?c.yield(vv(a,b),3):(a.Rd(),c.return());a.i&&(a.i=0,a.vc());c.h=0})},this.xe))};
p.Rd=function(){this.Ea.sa(this.i);this.i=0};
function vv(a,b){var c;return A(function(d){switch(d.h){case 1:if(!sv(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.A(2);break}return d.yield(a.ga.Kf(b.id,a.W),3);case 3:(c=d.i)||a.Gb(Error("The request cannot be found in the database."));case 2:if(xv(a,b,a.oe)){d.A(4);break}a.Gb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.A(5);break}return d.yield(a.ga.Eb(b.id,a.W),5);case 5:return d.return();case 4:b.skipRetry||(b=yv(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||b.id===void 0){d.A(8);break}return d.yield(a.ga.Eb(b.id,a.W),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function yv(a,b){if(!sv(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=Dv(f);(h=Ev(f))&&a.X&&a.X("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.X&&a.X("nwl_consider_error_code")&&g||a.X&&!a.X("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Wc)){m.A(2);break}if(!a.fa.bd){m.A(3);break}return m.yield(a.fa.bd(),3);case 3:if(a.fa.va()){m.A(2);break}c(e,f);if(!a.X||!a.X("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.A(6);
break}return m.yield(a.ga.Dd(b.id,a.W,!1),6);case 6:return m.return();case 2:if(a.X&&a.X("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Wc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.A(8);break}return b.sendCount<a.qe?m.yield(a.ga.Dd(b.id,a.W,!0,h?!1:void 0),12):m.yield(a.ga.Eb(b.id,a.W),8);case 12:a.Ea.ra(function(){a.fa.va()&&a.vc()},a.pe);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.A(2):h.yield(a.ga.Eb(b.id,a.W),2);a.fa.tb&&a.X&&a.X("vss_network_hint")&&a.fa.tb(!0);d(e,f);h.h=0})};
return b}
function xv(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function uv(a){if(!sv(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.Ud("QUEUED",a.W).then(function(b){b&&!xv(a,b,a.je)?a.Ea.ra(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.A(2):c.yield(a.ga.Dd(b.id,a.W),2);uv(a);c.h=0})}):a.fa.va()&&a.vc()})}
function wv(a,b){a.Ge&&!a.fa.va()?a.Ge(b):a.handleError(b)}
function sv(a){return!!a.W||a.zc}
function Dv(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Ev(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Fv;
function Gv(){if(Fv)return Fv();var a={};Fv=gu("LogsDatabaseV2",{Ob:(a.LogsRequestsStore={Xb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&lt(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),st(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Fv()}
;function Hv(a){return Gt(Gv(),a)}
function Iv(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Hv(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(nt(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();Jv(c);return g.return(f)})}
function Kv(a,b){var c,d,e,f,g,h,k,l,m;return A(function(n){if(n.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},n.yield(Hv(b),2);if(n.h!=3)return d=n.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,m=a==="NEW"?"readwrite":"readonly",T("use_readonly_for_get_most_recent_by_status_killswitch")&&(m="readwrite"),n.yield(kt(d,["LogsRequestsStore"],{mode:m,ka:!0},
function(r){return zt(r.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},function(t){t.getValue()&&(l=t.getValue(),a==="NEW"&&(l.status="QUEUED",t.update(l)))})}),3);
c.ticks.tc=W();Jv(c);return n.return(l)})}
function Lv(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Hv(b),2);c=d.i;return d.return(kt(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",et(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Mv(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(Hv(b),2);e=f.i;return f.return(kt(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),et(h.h.put(k,void 0)).then(function(){return k})):Zs.resolve(void 0)})}))})}
function Nv(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Hv(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Ov(a){var b,c;return A(function(d){if(d.h==1)return d.yield(Hv(a),2);b=d.i;c=W()-2592E6;return d.yield(kt(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return ut(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return vt(f)})})}),0)})}
function Pv(){A(function(a){return a.yield(cu(),0)})}
function Jv(a){T("nwl_csi_killswitch")||Pu("networkless_performance",a,{sampleRate:1})}
;var Qv={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,producerMediaServicesResetDetails:522,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,
startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,
keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515,
adsSeenClientLogging:517,producerEvent:518,tvhtml5CleanStart:519,deviceAccountMetricsEvent:520,derpLogEvent:521,playablesPortalEvent:523,ipValidationStarted:524,ipValidationReceived:525,reelsSequenceMutationEvent:527};var Rv={},Sv=gu("ServiceWorkerLogsDatabase",{Ob:(Rv.SWHealthLog={Xb:1},Rv),shared:!0,upgrade:function(a,b){b(1)&&st(lt(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Tv(a){return Gt(Sv(),a)}
function Uv(a){var b,c;A(function(d){if(d.h==1)return d.yield(Tv(a),2);b=d.i;c=W()-2592E6;return d.yield(kt(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return ut(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return vt(f)})})}),0)})}
function Vv(a){var b;return A(function(c){if(c.h==1)return c.yield(Tv(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Wv={},Xv=0;function Yv(a){var b=b===void 0?{}:b;var c=new Image,d=""+Xv++;Wv[d]=c;c.onload=c.onerror=function(){delete Wv[d]};
b.nj&&(c.referrerPolicy="no-referrer");c.src=a}
;var Zv;function $v(){Zv||(Zv=new us("yt.offline"));return Zv}
function aw(a){if(T("offline_error_handling")){var b=$v().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);$v().set("errors",b,2592E3,!0)}}
;function bw(){this.h=new Map;this.i=!1}
function cw(){if(!bw.instance){var a=E("yt.networkRequestMonitor.instance")||new bw;D("yt.networkRequestMonitor.instance",a);bw.instance=a}return bw.instance}
bw.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
bw.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
bw.prototype.removeParams=function(a){return a.split("?")[0]};
bw.prototype.removeParams=bw.prototype.removeParams;bw.prototype.isEndpointCFR=bw.prototype.isEndpointCFR;bw.prototype.requestComplete=bw.prototype.requestComplete;bw.getInstance=cw;function dw(){pk.call(this);var a=this;this.j=!1;this.h=sn();this.h.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=$v().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;jq(d)}$v().set("errors",{},2592E3,!0)}}})}
v(dw,pk);function ew(){if(!dw.instance){var a=E("yt.networkStatusManager.instance")||new dw;D("yt.networkStatusManager.instance",a);dw.instance=a}return dw.instance}
p=dw.prototype;p.va=function(){return this.h.va()};
p.tb=function(a){this.h.h=a};
p.wf=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
p.bf=function(){this.j=!0};
p.listen=function(a,b){return this.h.listen(a,b)};
p.bd=function(a){a=qn(this.h,a);a.then(function(b){T("use_cfr_monitor")&&cw().requestComplete("generate_204",b)});
return a};
dw.prototype.sendNetworkCheckRequest=dw.prototype.bd;dw.prototype.listen=dw.prototype.listen;dw.prototype.enableErrorFlushing=dw.prototype.bf;dw.prototype.getWindowStatus=dw.prototype.wf;dw.prototype.networkStatusHint=dw.prototype.tb;dw.prototype.isNetworkAvailable=dw.prototype.va;dw.getInstance=ew;function fw(a){a=a===void 0?{}:a;pk.call(this);var b=this;this.h=this.u=0;this.j=ew();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){gw(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){gw(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){qk(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){qk(b,"publicytnetworkstatus-offline")})))}
v(fw,pk);fw.prototype.va=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
fw.prototype.tb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
fw.prototype.bd=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&cw().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.tb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.va())})):c?d.return(c(a)):d.return(!0)})};
function gw(a,b){a.rateLimit?a.h?(tn.sa(a.u),a.u=tn.ra(function(){a.o!==b&&(qk(a,b),a.o=b,a.h=W())},a.rateLimit-(W()-a.h))):(qk(a,b),a.o=b,a.h=W()):qk(a,b)}
;var hw;function iw(){var a=rv.call;hw||(hw=new fw({aj:!0,Qi:!0}));a.call(rv,this,{ga:{Te:Ov,Eb:Nv,Ud:Kv,Kf:Lv,Dd:Mv,set:Iv},fa:hw,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;b=new U(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code);kq(b,void 0,void 0,void 0,!0)}else jq(b)},
Gb:kq,sendFn:jw,now:W,Ge:aw,Ea:ts(),Cd:"publicytnetworkstatus-online",zd:"publicytnetworkstatus-offline",Hc:!0,Ec:.1,Wc:Fq("potential_esf_error_limit",10),X:T,cc:!(Jr()&&kw())});this.j=new Nl;T("networkless_immediately_drop_all_requests")&&Pv();du("LogsDatabaseV2")}
v(iw,rv);function lw(){var a=E("yt.networklessRequestController.instance");a||(a=new iw,D("yt.networklessRequestController.instance",a),T("networkless_logging")&&Tt().then(function(b){a.W=b;tv(a);a.j.resolve();a.Hc&&Math.random()<=a.Ec&&a.W&&Uv(a.W);T("networkless_immediately_drop_sw_health_store")&&mw(a)}));
return a}
iw.prototype.writeThenSend=function(a,b){b||(b={});b=nw(a,b);Jr()||(this.h=!1);rv.prototype.writeThenSend.call(this,a,b)};
iw.prototype.sendThenWrite=function(a,b,c){b||(b={});b=nw(a,b);Jr()||(this.h=!1);rv.prototype.sendThenWrite.call(this,a,b,c)};
iw.prototype.sendAndWrite=function(a,b){b||(b={});b=nw(a,b);Jr()||(this.h=!1);rv.prototype.sendAndWrite.call(this,a,b)};
iw.prototype.awaitInitialization=function(){return this.j.promise};
function mw(a){var b;A(function(c){if(!a.W)throw b=Vs("clearSWHealthLogsDb"),b;return c.return(Vv(a.W).catch(function(d){a.handleError(d)}))})}
function jw(a,b,c,d){d=d===void 0?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&ow(a,b);if(T("use_request_time_ms_header"))b.headers&&vq(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Mq(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Mq(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{c:{var k=new eb({url:a});if(k.h.dsh==="1")var l=null;else{var m=k.h.ae;if(m==="1"){var n=k.h.adurl;if(n)try{l={version:3,Ze:decodeURIComponent(n),Ne:cb(k.i,"act=1","ri=1",fb(k))};break c}catch(ja){}}l=m==="2"?{version:4,Ze:cb(k.i,"dct=1","suid="+k.j,""),Ne:cb(k.i,"act=1","ri=1","suid="+k.j)}:null}}if(l){var r=nc(a),t;if(!(t=!r||!r.endsWith("/aclk"))){var w=a.search(vc),z=uc(a,0,"ri",w);if(z<0)var x=null;else{var H=a.indexOf("&",z);if(H<0||
H>w)H=w;x=hc(a.slice(z+3,H!==-1?H:0))}t=x!=="1"}var G=!t;break b}}catch(ja){}G=!1}if(G){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var V=!0;break b}}catch(ja){}V=!1}c=V?!0:!1}else c=!1;c||Yv(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),gv(a,b.postBody,b,Qq,d)):gv(a,JSON.stringify(b.postParams),b,Pq,d):Qq(a,b)}
function nw(a,b){T("use_event_time_ms_header")&&vq(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function ow(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){cw().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){cw().requestComplete(a,!0);d(e,f)}}
function kw(){return mc(document.location.toString())!=="www.youtube-nocookie.com"}
;var pw=!1,qw=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:pw};D("ytNetworklessLoggingInitializationOptions",qw);function rw(){var a;A(function(b){if(b.h==1)return b.yield(Tt(),2);a=b.i;if(!a||!Jr()&&!T("nwl_init_require_datasync_id_killswitch")||!kw())return b.A(0);pw=!0;qw.isNwlInitialized=pw;return b.yield(lw().awaitInitialization(),0)})}
;function sw(a){var b=this;this.config_=null;a?this.config_=a:uu()&&(this.config_=vu());Mr(function(){pv(b)},5E3)}
sw.prototype.isReady=function(){!this.config_&&uu()&&(this.config_=vu());return!!this.config_};
function qv(a,b,c,d){function e(n){n=n===void 0?!1:n;var r;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||T("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(r=nv(b,c,l,k)),r)){var t=g.onSuccess,w=g.onFetchSuccess;g.onSuccess=function(H,G){ov(r);t(H,G)};
c.onFetchSuccess=function(H,G){ov(r);w(H,G)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?lw().writeThenSend(m,g):lw().sendAndWrite(m,g);
else if(d.compress){var z=!d.networklessOptions.writeThenSend;if(g.postBody){var x=g.postBody;typeof x!=="string"&&(x=JSON.stringify(g.postBody));gv(m,x,g,Qq,z)}else gv(m,JSON.stringify(g.postParams),g,Pq,z)}else T("web_all_payloads_via_jspb")?Qq(m,g):Pq(m,g)}catch(H){if(H.name==="InvalidAccessError")r&&(ov(r),r=0),kq(Error("An extension is blocking network request."));else throw H;}r&&Mr(function(){pv(a)},5E3)}
!S("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&kq(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);jq(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onProgress:function(n){if(d.onProgress)d.onProgress(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Df)&&(h=f);var k=a.config_.Ef||!1,l=xu(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=tq(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(E("ytNetworklessLoggingInitializationOptions")?qw.isNwlInitialized:pw)?Rt().then(function(n){e(n)}):e(!1)}
;var tw=0,uw=yd?"webkit":xd?"moz":vd?"ms":ud?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++tw});var vw={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ww(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in vw||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function xw(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
ww.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ww.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ww.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ii=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Ii);var yw=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",yw);
function zw(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Hi(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&Mi(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Aw(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=zw(a,b,c,d);if(e)return e;e=++yw.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ww(h);if(!Wi(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ww(h);
h.currentTarget=a;return c.call(a,h)};
g=iq(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Bw()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Ii[e]=[a,b,c,g,d];return e}
function Cw(a){a&&(typeof a=="string"&&(a=[a]),Tb(a,function(b){if(b in Ii){var c=Ii[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Bw()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ii[b]}}))}
var Bw=Fk(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Dw(a){this.G=a;this.h=null;this.o=0;this.B=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.V=Aw(window,"mousemove",Ya(this.Z,this));a=Ya(this.J,this);typeof a==="function"&&(a=iq(a));this.aa=window.setInterval(a,25)}
bb(Dw,I);Dw.prototype.Z=function(a){a.h===void 0&&xw(a);var b=a.h;a.i===void 0&&xw(a);this.h=new Di(b,a.i)};
Dw.prototype.J=function(){if(this.h){var a=W();if(this.o!=0){var b=this.B,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.B=this.h;this.j=(this.j+1)%4}};
Dw.prototype.da=function(){window.clearInterval(this.aa);Cw(this.V)};var Ew={};
function Fw(a){var b=a===void 0?{}:a;a=b.ag===void 0?!1:b.ag;b=b.cf===void 0?!0:b.cf;if(E("_lact",window)==null){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&Gw();Aw(document,"keydown",Gw);Aw(document,"keyup",Gw);Aw(document,"mousedown",Gw);Aw(document,"mouseup",Gw);a?Aw(window,"touchmove",function(){Hw("touchmove",200)},{passive:!0}):(Aw(window,"resize",function(){Hw("resize",200)}),b&&Aw(window,"scroll",function(){Hw("scroll",200)}));
new Dw(function(){Hw("mouse",100)});
Aw(document,"touchstart",Gw,{passive:!0});Aw(document,"touchend",Gw,{passive:!0})}}
function Hw(a,b){Ew[a]||(Ew[a]=!0,tn.ra(function(){Gw();Ew[a]=!1},b))}
function Gw(){E("_lact",window)==null&&Fw();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function Iw(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Jw=C.ytPubsubPubsubInstance||new O,Kw=C.ytPubsubPubsubSubscribedKeys||{},Lw=C.ytPubsubPubsubTopicToKeys||{},Mw=C.ytPubsubPubsubIsSynchronous||{};function Nw(a,b){var c=Ow();if(c&&b){var d=c.subscribe(a,function(){function e(){Kw[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Mw[a]?e():Cq(e,0)}catch(g){jq(g)}},void 0);
Kw[d]=!0;Lw[a]||(Lw[a]=[]);Lw[a].push(d);return d}return 0}
function Pw(a){var b=Ow();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Tb(a,function(c){b.unsubscribeByKey(c);delete Kw[c]}))}
function Qw(a,b){var c=Ow();c&&c.publish.apply(c,arguments)}
function Rw(a){var b=Ow();if(b)if(b.clear(a),a)Sw(a);else for(var c in Lw)Sw(c)}
function Ow(){return C.ytPubsubPubsubInstance}
function Sw(a){Lw[a]&&(a=Lw[a],Tb(a,function(b){Kw[b]&&delete Kw[b]}),a.length=0)}
O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.xc;O.prototype.publish=O.prototype.Ab;O.prototype.clear=O.prototype.clear;D("ytPubsubPubsubInstance",Jw);D("ytPubsubPubsubTopicToKeys",Lw);D("ytPubsubPubsubIsSynchronous",Mw);D("ytPubsubPubsubSubscribedKeys",Kw);var Tw=Symbol("injectionDeps");function Uw(a){this.name=a}
Uw.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Vw(a){this.key=a}
function Ww(a){return new Vw(a)}
function Xw(){this.i=new Map;this.j=new Map;this.h=new Map}
function Yw(a,b){a.i.set(b.xb,b);var c=a.j.get(b.xb);if(c)try{c.Zc(a.resolve(b.xb))}catch(d){c.jj(d)}}
Xw.prototype.resolve=function(a){return a instanceof Vw?Zw(this,a.key,[],!0):Zw(this,a,[])};
function Zw(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Id!==void 0)var e=d.Id;else if(d.Jg)e=d[Tw]?$w(a,d[Tw],c):[],e=d.Jg.apply(d,qa(e));else if(d.gd){e=d.gd;var f=e[Tw]?$w(a,e[Tw],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(qa(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.rj||a.h.set(b,e);return e}
function $w(a,b,c){return b?b.map(function(d){return d instanceof Vw?Zw(a,d.key,c,!0):Zw(a,d,c)}):[]}
;var ax;function bx(){ax||(ax=new Xw);return ax}
;var cx=window;function dx(){var a,b;return"h5vcc"in cx&&((a=cx.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=cx.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in cx&&cx.performance.mark&&cx.performance.measure?2:0}
function ex(a){var b=dx();switch(b){case 1:cx.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:cx.performance.mark(a+"-start");break;case 0:break;default:Fb(b,"unknown trace type")}}
function fx(a){var b=dx();switch(b){case 1:cx.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";cx.performance.mark(c);cx.performance.measure(a,b,c);break;case 0:break;default:Fb(b,"unknown trace type")}}
;var gx=T("web_enable_lifecycle_monitoring")&&dx()!==0,hx=T("web_enable_lifecycle_monitoring");function ix(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function jx(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?ts():d;this.j=c;this.scheduler=d;this.i=new Nl;this.h=a;for(a={qb:0};a.qb<this.h.length;a={Vc:void 0,qb:a.qb},a.qb++)a.Vc=this.h[a.qb],c=function(e){return function(){e.Vc.td();b.h[e.qb].Xc=!0;b.h.every(function(f){return f.Xc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.Vc),d=this.scheduler.Xa(c,d),this.h[a.qb]=Object.assign({},a.Vc,{td:c,
jobId:d})}
function kx(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=y(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.Xc||(a.scheduler.sa(c.jobId),a.scheduler.Xa(c.td,10))}
jx.prototype.cancel=function(){for(var a=y(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.Xc||this.scheduler.sa(b.jobId),b.Xc=!0;this.i.resolve()};
jx.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function lx(a){this.state=a;this.plugins=[];this.o=void 0;this.B={};gx&&ex(this.state)}
p=lx.prototype;p.install=function(a){this.plugins.push(a);return this};
p.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
p.transition=function(a,b){var c=this;gx&&fx(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(kx(this.j),this.j=void 0);mx(this,a,b);this.state=a;gx&&ex(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(nx(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function nx(a,b){var c=b.filter(function(e){return ox(a,e)===10}),d=b.filter(function(e){return ox(a,e)!==10});
return a.B.qj?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.hg.apply(a,[c].concat(qa(e))),2);a.se.apply(a,[d].concat(qa(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.ig.apply(a,[c].concat(qa(e)));a.se.apply(a,[d].concat(qa(e)))}}
p.ig=function(a){for(var b=B.apply(1,arguments),c=ts(),d=y(a),e=d.next(),f={};!e.done;f={ec:void 0},e=d.next())f.ec=e.value,c.Vb(function(g){return function(){px(g.ec.name);qx(function(){return g.ec.callback.apply(g.ec,qa(b))});
rx(g.ec.name)}}(f))};
p.hg=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=ts(),d=y(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.A(0);f.eb=e.value;f.yc=void 0;g=function(k){return function(){px(k.eb.name);var l=qx(function(){return k.eb.callback.apply(k.eb,qa(b))});
Ee(l)?k.yc=T("web_lifecycle_error_handling_killswitch")?l.then(function(){rx(k.eb.name)}):l.then(function(){rx(k.eb.name)},function(m){ix(m);
rx(k.eb.name)}):rx(k.eb.name)}}(f);
c.Vb(g);return f.yc?h.yield(f.yc,3):h.A(3)}f={eb:void 0,yc:void 0};e=d.next();return h.A(2)})};
p.se=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{td:function(){px(e.name);qx(function(){return e.callback.apply(e,qa(b))});
rx(e.name)},
priority:ox(c,e)}});
d.length&&(this.j=new jx(d))};
function ox(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function px(a){gx&&a&&ex(a)}
function rx(a){gx&&a&&fx(a)}
function mx(a,b,c){hx&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(lx.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function qx(a){if(T("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){ix(b)}}
;function sx(a){lx.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var tx;v(sx,lx);sx.prototype.i=function(a,b){var c=this;this.h=Mr(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
sx.prototype.u=function(a,b){this.h&&(tn.sa(this.h),this.h=null);a(b==null?void 0:b.event)};
function ux(){tx||(tx=new sx);return tx}
;var vx=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return vx});function wx(){this.store={};this.h={}}
wx.prototype.storePayload=function(a,b){a=xx(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);T("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
wx.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=yx(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,qa(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,qa(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,qa(this.smartExtractMatchingEntries(a))));return c};
wx.prototype.extractMatchingEntries=function(a){a=yx(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,qa(this.store[a[c]])),delete this.store[a[c]]);return b};
wx.prototype.getSequenceCount=function(a){a=yx(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function yx(a,b){var c=xx(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&xx(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(zx(b.auth,g[0])){var h=b.isJspb;zx(h===void 0?"undefined":h?"true":"false",g[1])&&zx(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),zx(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function zx(a,b){return a===void 0||a==="undefined"?!0:a===b}
wx.prototype.getSequenceCount=wx.prototype.getSequenceCount;wx.prototype.extractMatchingEntries=wx.prototype.extractMatchingEntries;wx.prototype.smartExtractMatchingEntries=wx.prototype.smartExtractMatchingEntries;wx.prototype.storePayload=wx.prototype.storePayload;function xx(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function Ax(a,b){if(a)return a[b.name]}
;var Bx=Fq("initial_gel_batch_timeout",2E3),Cx=Fq("gel_queue_timeout_max_ms",6E4),Dx=Fq("gel_min_batch_size",5),Ex=void 0;function Fx(){this.o=this.h=this.i=0;this.j=!1}
var Gx=new Fx,Hx=new Fx,Ix=new Fx,Jx=new Fx,Kx,Lx=!0,Mx=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Mx);var Nx={};function Ox(){var a=E("yt.logging.ims");a||(a=new wx,D("yt.logging.ims",a));return a}
function Px(a,b){if(a.endpoint==="log_event"){Qx(a);var c=Rx(a),d=Sx(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=Qv[d||""];var f,g,h,k=bx().resolve(Ww(pu))==null?void 0:(f=qu())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!T("web_payload_policy_disabled_killswitch"))return;k=Tx(e.tier);if(k===400){Ux(a,b);return}}Nx[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};Ox().storePayload(c,a.payload);Vx(b,c,d==="gelDebuggingEvent")}}
function Vx(a,b,c){function d(){Wx({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(Ex=new a);a=Fq("tvhtml5_logging_max_batch_ads_fork")||Fq("tvhtml5_logging_max_batch")||Fq("web_logging_max_batch")||100;var f=W(),g=Xx(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=Ox().getSequenceCount(b));c>=1E3?d():c>=a?Kx||(Kx=Yx(function(){d();Kx=void 0},0)):f-h>=10&&(Zx(e,b.tier),g.o=f)}
function Ux(a,b){if(a.endpoint==="log_event"){T("more_accurate_gel_parser")&&Ox().storePayload({isJspb:!1},a.payload);Qx(a);var c=Rx(a),d=new Map;d.set(c,[a.payload]);var e=Sx(a.payload)||"";b&&(Ex=new b);return new Gk(function(f,g){Ex&&Ex.isReady()?$x(d,Ex,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Rx(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Mx[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Wx(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new Gk(function(e,f){var g=Xx(c,d),h=g.j;g.j=!1;ay(g.i);ay(g.h);g.h=0;Ex&&Ex.isReady()?d===void 0&&T("enable_web_tiered_gel")?by(e,f,a,b,c,300,h):by(e,f,a,b,c,d,h):(Zx(c,d),e())})}
function by(a,b,c,d,e,f,g){var h=Ex;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=T("enable_web_tiered_gel")?Ox().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Ox().extractMatchingEntries(e),k.set(d,f);else for(d=y(Object.keys(Nx)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?Ox().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Ox().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Nx[l];$x(k,h,a,b,c,!1,g)}
function Zx(a,b){function c(){Wx({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Xx(a,b),e=d===Jx||d===Ix?5E3:Cx;T("web_gel_timeout_cap")&&!d.h&&(e=Yx(function(){c()},e),d.h=e);
ay(d.i);e=S("LOGGING_BATCH_TIMEOUT",Fq("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&Lx&&(e=Bx);e=Yx(function(){Fq("gel_min_batch_size")>0?Ox().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Dx&&c():c()},e);
d.i=e}
function $x(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(W()),k=a.size,l=(g===void 0?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=y(a);var m=a.next();for(g={};!m.done;g={yd:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Bd:void 0,Ad:void 0},m=a.next()){var n=y(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Oi({context:wu(b.config_||vu())});if(!Oa(n)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Mx[m])&&
cy(g.batchRequest,m,n);delete Mx[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";dy(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.Bd=function(r){T("start_client_gcf")&&tn.ra(function(){return A(function(t){return t.yield(ey(r),0)})});
k--;k||c()};
g.yd=0;g.Ad=function(r){return function(){r.yd++;if(e.bypassNetworkless&&r.yd===1)try{qv(b,l,r.batchRequest,fy({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Bd,r.Ad,f)),Lx=!1}catch(t){jq(t),d()}k--;k||c()}}(g);
try{qv(b,l,g.batchRequest,fy(e,g.dangerousLogToVisitorSession,g.Bd,g.Ad,f)),Lx=!1}catch(r){jq(r),d()}}}
function fy(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Mi:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};gy()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function dy(a,b,c){gy()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),eq("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function cy(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Qx(a){var b=Hq("il_payload_scraping")==="enable_il_payload_scraping";if(!E("yt.logging.transport.enableScrapingForTest"))if(b)vx=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",vx),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),D("yt.logging.transport.scrapeClientEvent",
!0);else return;b=E("yt.logging.transport.scrapedPayloadsForTesting");var c=E("yt.logging.transport.payloadToScrape"),d=E("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}D("yt.logging.transport.scrapedPayloadsForTesting",b)}
function gy(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Yx(a,b){return T("transport_use_scheduler")===!1?Cq(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?Mr(function(){if(ux().currentState==="none")a();else{var c={};ux().install((c.none={callback:a},c))}},b):Mr(a,b)}
function ay(a){T("transport_use_scheduler")?tn.sa(a):window.clearTimeout(a)}
function ey(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=Ax(d,Gp),g=(f=d)==null?void 0:f.hotHashData,h=Ax(d,Fp),l=(k=d)==null?void 0:k.coldHashData,(m=bx().resolve(Ww(pu)))?g?e?n.yield(ru(m,g,e),2):n.yield(ru(m,g),2):n.A(2):n.return()):l?h?n.yield(su(m,l,h),0):n.yield(su(m,l),0):n.A(0)})}
function Xx(a,b){b=b===void 0?200:b;return a?b===300?Jx:Hx:b===300?Ix:Gx}
function Sx(a){a=Object.keys(a);a=y(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Qv[b])return b}
function Tx(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var hy=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",hy);
function iy(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Iw();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,hy[b]=b in hy?hy[b]+1:0,a.sequence={index:hy[b],groupKey:b},d.endOfSequence&&delete hy[d.sequenceGroup]);T("web_tag_automated_log_events")&&(e.context.automatedLogEventSource=d.automatedLogEventSource);(d.sendIsolatedPayload?
Ux:Px)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
;function Ds(a,b,c){c=c===void 0?{}:c;var d=sw;S("ytLoggingEventsDefaultDisabled",!1)&&sw===sw&&(d=null);iy(a,b,d,c)}
;var jy=new Set,ky=0,ly=0,my=0,ny=[],oy=[],py=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function qy(){Tb(S("ERRORS")||[],function(a){ry.apply(null,a)});
eq("ERRORS",[])}
function Cs(a){ry(a)}
function sy(a){ry(a,"WARNING")}
function ty(a){a instanceof Error?ry(a):(a=Pa(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",sy(a))}
function uy(a,b,c,d,e,f){b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=fq("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new U(h),e.name="UnhandledWindowError",e.message=h,e.fileName=
b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!T("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.Ve)f||(f={}),f.componentStack=m}f&&vy(e,f);g?ry(e):sy(e)}}
function ry(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(ky>=5))){d=[];e=y(oy);for(f=e.next();!f.done;f=e.next()){f=f.value;try{f()&&d.push(f())}catch(x){}}d=[].concat(qa(ny),qa(d));var k=cc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&
a.args&&a.args.length)for(var r=0;r<a.args.length&&!(n=jr(a.args[r],"params."+r,c,n),n>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var w="params."+r,z=lr(t[r]);c[w]=z;n+=w.length+z.length;if(n>500)break}}else c.params=lr(t)}if(d.length)for(r=0;r<d.length&&!(n=jr(d[r],"params.context."+r,c,n),n>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:m,
fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=er();c=y(a.fb);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.dj)){a=d.weight;break a}a=y(a.Za);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=y(Zq);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Uc[r.name])for(e=y(c.Uc[r.name]),d=e.next();!d.done;d=e.next())if(f=
d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.xd(f);break}r.params||(r.params={});a=er();r.params["params.errorServiceSignature"]="msg="+a.fb.length+"&cb="+a.Za.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Ri(Si,"sample")).constructor!==
Ri&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(r);if(r.sampleWeight!==0&&!jy.has(r.message)){if(g&&T("web_enable_error_204"))wy(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(gr.Ab("handleError",r),T("record_app_crashed_web")&&my===0&&r.sampleWeight===1&&(my++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),Ds("appCrashed",
g)),ly++):b==="WARNING"&&gr.Ab("handleWarning",r);if(T("kevlar_gel_error_routing")){g=b;h=h===void 0?{}:h;b:{a=y(py);for(c=a.next();!c.done;c=a.next())if(Js(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=
Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!fq("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Ds("clientError",h),(g==="ERROR"||T("errors_flush_gel_always_killswitch"))&&Wx(void 0,void 0,!1))}T("suppress_error_204_logging")||
wy(b,r)}try{jy.add(r.message)}catch(x){}ky++}}}
function wy(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=y(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=y(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=S("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Qq(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function vy(a){var b=B.apply(1,arguments);a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push.apply(a.args,qa(b))}
;function xy(){this.register=new Map}
function yy(a){a=y(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.ke("ABORTED")}
xy.prototype.clear=function(){yy(this);this.register.clear()};
var zy=new xy;var Ay=Date.now().toString();
function By(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(Ay)for(a=1,b=0;b<Ay.length;b++)d[a%16]^=d[(a-1)%16]/4^Ay.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Cy,Dy=C.ytLoggingDocDocumentNonce_;Dy||(Dy=By(),D("ytLoggingDocDocumentNonce_",Dy));Cy=Dy;function Ey(a){this.h=a}
p=Ey.prototype;p.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
p.getAsJspb=function(){var a=new Ip;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&dg(a,2,jf(this.h.veType)),this.h.veCounter!==void 0&&dg(a,6,jf(this.h.veCounter)),this.h.elementIndex!==void 0&&dg(a,3,jf(this.h.elementIndex)),this.h.isCounterfactual&&dg(a,5,ef(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();rg(a,Ip,7,b)}this.h.youtubeData!==void 0&&rg(a,Hp,8,this.h.jspbYoutubeData);return a};
p.toString=function(){return JSON.stringify(this.getAsJson())};
p.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
p.getLoggingDirectives=function(){return this.h.loggingDirectives};function Fy(a){return S("client-screen-nonce-store",{})[a===void 0?0:a]}
function Gy(a,b){b=b===void 0?0:b;var c=S("client-screen-nonce-store");c||(c={},eq("client-screen-nonce-store",c));c[b]=a}
function Hy(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Iy(a){return S(Hy(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",Iy);function Jy(){var a=S("csn-to-ctt-auth-info");a||(a={},eq("csn-to-ctt-auth-info",a));return a}
function Ky(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Ly(a){a=Fy(a===void 0?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Ly);function My(a,b,c){var d=Jy();(c=Ly(c))&&delete d[c];b&&(d[a]=b)}
function Ny(a){return Jy()[a]}
D("yt_logging_screen.getCttAuthInfo",Ny);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Fy(c)||b!==S(Hy(c)))if(My(a,d,c),Gy(a,c),eq(Hy(c),b),b=function(){setTimeout(function(){a&&Ds("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Cy,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Oy(){var a=Ni(Py),b;return(new Gk(function(c,d){a.onSuccess=function(e){Aq(e)?c(new Qy(e)):d(new Ry("Request failed, status="+Bq(e),"net.badstatus",e))};
a.onError=function(e){d(new Ry("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Ry("Request timed out","net.timeout",e))};
b=Qq("//googleads.g.doubleclick.net/pagead/id",a)})).ed(function(c){if(c instanceof Pk){var d;
(d=b)==null||d.abort()}return Lk(c)})}
function Ry(a,b,c){jb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Ry,jb);function Qy(a){this.xhr=a}
;function Sy(){this.Y=0;this.h=null}
Sy.prototype.then=function(a,b,c){return this.Y===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Ty(a):this.Y===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Uy(a):this};
Sy.prototype.getValue=function(){return this.h};
Sy.prototype.isRejected=function(){return this.Y==2};
Sy.prototype.$goog_Thenable=!0;function Uy(a){var b=new Sy;a=a===void 0?null:a;b.Y=2;b.h=a===void 0?null:a;return b}
function Ty(a){var b=new Sy;a=a===void 0?null:a;b.Y=1;b.h=a===void 0?null:a;return b}
;function Vy(a){var b=S("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(oc(a)));return a}
function Wy(a){var b={};T("json_condensed_response")&&(b.prettyPrint="false");return a=uq(a,b||{},!1)}
function Xy(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:vq(a)?"same-origin":"cors",credentials:vq(a)?"same-origin":"include"};b={};for(var d=y(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Yy(){return vi()||(Ad||Bd)&&Js("applewebkit")&&!Js("version")&&(!Js("safari")||Js("gsa/"))||zd&&Js("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function Zy(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function $y(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Mp)if(Mp[d]==c.embeddedPlayerMode){b=Mp[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function az(a){jb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof bz;this.isTimeout=a instanceof Ry&&a.errorCode=="net.timeout";this.isCanceled=a instanceof Pk}
v(az,jb);az.prototype.name="BiscottiError";function bz(){jb.call(this,"Biscotti ID is missing from server")}
v(bz,jb);bz.prototype.name="BiscottiMissingError";var Py={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},cz=null;function dz(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Yy())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if(Li(a)=="1")return Error("Biscotti ID is not available in private embed mode");if($y(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Yp(){var a=dz();if(a!==void 0)return Lk(a);cz||(cz=Oy().then(ez).ed(function(b){return fz(2,b)}));
return cz}
function ez(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new bz;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new bz;a=a.id;Zp(a);cz=Ty(a);gz(18E5,2);return a}
function fz(a,b){b=new az(b);Zp("");cz=Uy(b);a>0&&gz(12E4,a-1);throw b;}
function gz(a,b){Cq(function(){Oy().then(ez,function(c){return fz(b,c)}).ed(Ek)},a)}
function hz(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Yp()}catch(b){return Lk(b)}}
;var Ob=ra(["data-"]);function iz(a){a&&(a.dataset?a.dataset[jz()]="true":Pb(a))}
function kz(a){return a?a.dataset?a.dataset[jz()]:a.getAttribute("data-loaded"):null}
var lz={};function jz(){return lz.loaded||(lz.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function mz(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Ni(b);this.assets=a.assets||{};this.attrs=a.attrs||Ni(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
mz.prototype.clone=function(){var a=new mz,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Na(c)=="object"?a[b]=Ni(c):a[b]=c}return a};var nz=["att/get"],oz=["share/get_share_panel"],pz=["share/get_web_player_share_panel"],qz=["feedback"],rz=["notification/modify_channel_preference"],sz=["browse/edit_playlist"],tz=["subscription/subscribe"],uz=["subscription/unsubscribe"];var vz=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",vz);function wz(a){$p(vz,arguments)}
;function xz(a,b,c){yz(a,b,c===void 0?null:c)}
function zz(a){a=Az(a);var b=document.getElementById(a);b&&(Rw(a),b.parentNode.removeChild(b))}
function Bz(a,b){a&&b&&(a=""+Qa(b),(a=Cz[a])&&Pw(a))}
function yz(a,b,c){c=c===void 0?null:c;var d=Az(typeof a==="string"?a:a.toString()),e=document.getElementById(d),f=e&&kz(e),g=e&&!f;f?b&&b():(b&&(f=Nw(d,b),b=""+Qa(b),Cz[b]=f),g||(e=Dz(a,d,function(){kz(e)||(iz(e),Qw(d),Cq(function(){Rw(d)},0))},c)))}
function Dz(a,b,c,d){d=d===void 0?null:d;var e=Ui("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Mb(e,typeof a==="string"?Dp(a):a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Az(a){var b=document.createElement("a");Eb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ic(a)}
var Cz={};function Ez(a){var b=Fz(a),c=document.getElementById(b),d=c&&kz(c);d||c&&!d||(c=Gz(a,b,function(){if(!kz(c)){iz(c);Qw(b);var e=Za(Rw,b);Cq(e,0)}}))}
function Gz(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Dp(a);Rb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Fz(a){var b=Ui("A");Eb(b,new xb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ic(a)}
;function Hz(a){var b=B.apply(1,arguments);if(!Iz(a)||b.some(function(d){return!Iz(d)}))throw Error("Only objects may be merged.");
b=y(b);for(var c=b.next();!c.done;c=b.next())Jz(a,c.value)}
function Jz(a,b){for(var c in b)if(Iz(b[c])){if(c in a&&!Iz(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Jz(a[c],b[c])}else if(Kz(b[c])){if(c in a&&!Kz(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Lz(a[c],b[c])}else a[c]=b[c];return a}
function Lz(a,b){b=y(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Iz(c)?a.push(Jz({},c)):Kz(c)?a.push(Lz([],c)):a.push(c);return a}
function Iz(a){return typeof a==="object"&&!Array.isArray(a)}
function Kz(a){return typeof a==="object"&&Array.isArray(a)}
;var Mz="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Nz(a,b){var c=c===void 0?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=mc(window.location.href);e&&d.push(e);e=mc(a);if(Sb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),Eb(d,a),a=d.href)if(a=oc(a),a=pc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Ly()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Oz(a,b,f)}else Oz(a,b)}
function Oz(a,b,c){a=Pz(a);b=b?sc(b):"";c=c||5;Yy()&&sr(a,b,c)}
function Pz(a){for(var b=y(Mz),c=b.next();!c.done;c=b.next())a=xc(a,c.value);return"ST-"+ic(a).toString(36)}
;function Qz(a){for(var b=0,c=0;c<a.length;c++)b=b*31+a.charCodeAt(c),c<a.length-1&&(b%=0x800000000000);return b%1E5}
;function Rz(a){Cu.call(this,1,arguments);this.csn=a}
v(Rz,Cu);var Lu=new Du("screen-created",Rz),Sz=[],Tz=0,Uz=new Map,Vz=new Map,Wz=new Map;
function Xz(a,b,c,d,e,f){e=e===void 0?!1:e;f=f===void 0?{}:f;Object.assign(f,Yz({cttAuthInfo:Ny(b)||void 0},b));for(var g=y(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Ji(k)||!k.trackingParams&&!k.veType)&&sy(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=Zz(h,b);if(k.veType&&!Vz.has(l)&&!Wz.has(l)&&!e){if(!T("il_attach_cache_limit")||Uz.size<1E3){Uz.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&Uz.size>1E3&&sy(new U("IL Attach cache exceeded limit"))}h=
Zz(c,b);Uz.has(h)?$z(c,b):Wz.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Vb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?aA("visualElementAttached",f,c):a?iy("visualElementAttached",c,a,f):Ds("visualElementAttached",c,f)}
function aA(a,b,c){Sz.push({Zf:a,payload:c,Xi:void 0,options:b});Tz||(Tz=Mu())}
function Nu(a){if(Sz){for(var b=y(Sz),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Ds(c.Zf,c.payload,c.options));Sz.length=0}Tz=0}
function Zz(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function $z(a,b){a=Zz(a,b);if(Uz.has(a)){b=Uz.get(a)||[];var c=c===void 0?{}:c;Xz(b[0],b[1],b[2],[b[3]],!0,c);Uz.delete(a)}}
function Yz(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function bA(){}
bA.prototype.flush=function(a,b){a=a===void 0?[]:a;b=b===void 0?!1:b;if(T("enable_client_streamz_web")){a=y(a);for(var c=a.next();!c.done;c=a.next())c=ii(c.value),this.h&&rg(c,di,2,this.h),c={serializedIncrementBatch:Fd(c.j())},Ds("streamzIncremented",c,{sendIsolatedPayload:b})}};
function cA(a){var b=new di;var c=new ai;c=xg(c,1,"botguard");a=xg(c,2,a);a=qg(a,ai);lg(b,1,ei,a);a&&!se(a)&&Zf(b.D);this.h=b}
v(cA,bA);var dA=new Map;function eA(){try{return!!self.localStorage}catch(a){return!1}}
;function fA(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function gA(a){if(eA()){var b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=fA(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function hA(){if(!eA())return!1;var a=Kr(),b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=fA(c.value),c!==void 0&&c!==a)return!0;return!1}
;function iA(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(S("INNERTUBE_CLIENT_NAME")==="WEB"||S("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function jA(){var a=a===void 0?!0:a;try{window.sessionStorage.removeItem("stickiness_reload");window.sessionStorage.removeItem("session_logininfo");eq("LOGIN_INFO","");a&&window.sessionStorage.setItem("from_switch_account","1");a=!0;a=a===void 0?!1:a;var b,c=kA;c||(c=document.querySelector("#persist_identity"));if(b=c){var d=b.src?(new URL(b.src)).origin:"*";if(a){var e;(e=b.contentWindow)==null||e.postMessage({action:"clear"},d)}else if(!(Number(window.sessionStorage.getItem("stickiness_reload"))>=
2)){var f=window.sessionStorage.getItem("session_logininfo");if(f){var g;(g=b.contentWindow)==null||g.postMessage({loginInfo:f},d)}}}}catch(h){}}
function lA(a){if(a)if(a.startsWith("https://accounts.google.com/AddSession"))jA();else if(a.startsWith("https://accounts.google.com/ServiceLogin"))jA();else{var b;if(b=a.startsWith("https://myaccount.google.com"))b=(a instanceof Yn?a.clone():new Yn(a)).h.endsWith("/youtubeoptions");b&&jA()}if(S("LOGGED_IN",!0)&&iA()){b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=mc(window.location.href);c&&b.push(c);c=mc(a);Sb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=oc(a),(b=pc(b))?(b=Pz(b),b=(b=tr(b)||null)?rq(b):
{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;iA()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Nz(a,b)}}
var kA=null;function mA(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Nz(a,b);if(c)return!1;lA(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=tc(a,e);lA(b);a=void 0;a=a===void 0?Bb:a;a:if(f=b+f,a=a===void 0?Bb:a,!(f instanceof xb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof zb&&c.Hf(f)){f=new xb(f);break a}f=void 0}g=g.location;f=Db(f||yb);f!==void 0&&(g.href=f);return!0}
;function nA(a){if(Li(S("PLAYER_VARS",{}))!="1"){a&&Xp();try{hz().then(function(){},function(){}),Cq(nA,18E5)}catch(b){jq(b)}}}
;var oA=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function pA(){var a=a===void 0?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;var b=nc(a);if(T("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=sq(a).theme;return oA.get(c)||null}catch(d){}return null}
;function qA(){this.h={};if(this.i=vr()){var a=tr("CONSISTENCY");a&&rA(this,{encryptedTokenJarContents:a})}}
qA.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ja.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=y(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];rA(this,a)}};
function rA(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&sr("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var sA=window.location.hostname.split(".").slice(-2).join(".");function tA(){this.i=-1;var a=S("LOCATION_PLAYABILITY_TOKEN");S("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.localStorage=uA(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.h=void 0)}
var vA;function wA(){vA=E("yt.clientLocationService.instance");vA||(vA=new tA,D("yt.clientLocationService.instance",vA));return vA}
p=tA.prototype;
p.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.h)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.h.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.h.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.h.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.j||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.j||
this.locationPlayabilityToken};
p.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.h=void 0,S("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.localStorage=uA(this))&&this.localStorage.set("yt-location-playability-token",a,15552E3):sr("YT_CL",JSON.stringify({loctok:a}),15552E3,sA,!0))};
function uA(a){return a.localStorage===void 0?new us("yt-client-location"):a.localStorage}
p.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.localStorage=uA(this))&&this.localStorage.remove("yt-location-playability-token"):ur("YT_CL");this.j=void 0;this.i!==-1&&(clearTimeout(this.i),this.i=-1)};
p.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;S("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.h=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
p.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
p.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function xA(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=S("INNERTUBE_CONTEXT");if(!d)return ry(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=Oi(d);T("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;zr();var g="USER_INTERFACE_THEME_LIGHT";Cr(165)?g="USER_INTERFACE_THEME_DARK":Cr(174)?g="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:pA()||g;e.userInterfaceTheme=f;if(!b){if(f=Hr())e.connectionType=f;T("web_log_effective_connection_type")&&(f=Ir())&&(d.client.effectiveConnectionType=f)}var h;if(T("web_log_memory_total_kbytes")&&((h=C.navigator)==null?0:h.deviceMemory)){var k;h=(k=C.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}T("web_gcf_hashes_innertube")&&(f=tu())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=sq(C.location.href);!T("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo||(e.mainAppWebInfo={}),e.mainAppWebInfo.graftUrl=C.location.href,T("kevlar_woffle")&&mr.instance&&(k=mr.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),
e.mainAppWebInfo.webDisplayMode=nr(),e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!T("web_lr_app_quality_killswitch")&&(k=S("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!T("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;
break a}catch(ja){}l=void 0}l&&(e.timeZone=l)}(l=S("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=Iq();qA.instance||(qA.instance=new qA);d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:Gi(qA.instance.h)});!T("web_prequest_context_killswitch")&&(l=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=l);e=zr();l=Cr(58);e=e.get("gsml","");d.user=Object.assign({},d.user);l&&(d.user.enableSafetyMode=l);e&&(d.user.lockedSafetyMode=
!0);T("warm_op_csn_cleanup")?c&&(b=Ly())&&(d.clientScreenNonce=b):!b&&(b=Ly())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=E("yt.mdx.remote.remoteClient_"))d.remoteClient=a;wA().setLocationOnInnerTubeContext(d);try{var m=wq(),n=m.bid;delete m.bid;d.adSignalsInfo={params:[],bid:n};for(var r=y(Object.entries(m)),t=r.next();!t.done;t=r.next()){var w=y(t.value),z=w.next().value,x=w.next().value;m=z;n=x;a=void 0;(a=d.adSignalsInfo.params)==null||a.push({key:m,value:""+n})}var H,
G;if(((H=d.client)==null?void 0:H.clientName)==="TVHTML5"||((G=d.client)==null?void 0:G.clientName)==="TVHTML5_UNPLUGGED"){var V=S("INNERTUBE_CONTEXT");V.adSignalsInfo&&(d.adSignalsInfo.advertisingId=V.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=V.adSignalsInfo.limitAdTracking)}}catch(ja){ry(ja)}return d}
;function yA(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),S("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=S("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function zA(){this.h={}}
p=zA.prototype;p.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
p.get=function(a){if(this.contains(a))return this.h[a]};
p.set=function(a,b){this.h[a]=b};
p.dc=function(){return Object.keys(this.h)};
p.remove=function(a){delete this.h[a]};function AA(){this.mappings=new zA}
AA.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
AA.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Fb(b)}}return a};
new AA;function BA(a){return function(){return new a}}
;var CA={},DA=(CA.WEB_UNPLUGGED="^unplugged/",CA.WEB_UNPLUGGED_ONBOARDING="^unplugged/",CA.WEB_UNPLUGGED_OPS="^unplugged/",CA.WEB_UNPLUGGED_PUBLIC="^unplugged/",CA.WEB_CREATOR="^creator/",CA.WEB_KIDS="^kids/",CA.WEB_EXPERIMENTS="^experiments/",CA.WEB_MUSIC="^music/",CA.WEB_REMIX="^music/",CA.WEB_MUSIC_EMBEDDED_PLAYER="^music/",CA.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",CA);
function EA(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=DA[b];if(c){c=new RegExp(c);for(var d=y(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(DA).forEach(function(g){var h=y(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=y(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function FA(){}
FA.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?rr:c;var d={context:xA(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+EA(this.j());(e=(f=Ax(a.commandMetadata,Kp))==null?void 0:f.apiUrl)&&(b=e);f=Wy(Vy(b));a=Object.assign({},{command:a},void 0);d={input:f,hb:Xy(f),Ja:d,config:a};d.config.Yb?d.config.Yb.identity=c:d.config.Yb={identity:c};return d}c=new U("Error: Failed to create Request from Command.",a);ry(c)};
da.Object.defineProperties(FA.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function GA(){}
v(GA,FA);function HA(){}
v(HA,GA);HA.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",hb:Xy("/getDatasyncIdsEndpoint","GET"),Ja:{}}};
HA.prototype.j=function(){return[]};
HA.prototype.i=function(){};
HA.prototype.h=function(){};var IA={},JA=(IA.GET_DATASYNC_IDS=BA(HA),IA);function KA(a){return E("ytcsi."+(a||"")+"data_")||LA(a)}
function MA(){var a=KA();a.info||(a.info={});return a.info}
function NA(a){a=KA(a);a.metadata||(a.metadata={});return a.metadata}
function OA(a){a=KA(a);a.tick||(a.tick={});return a.tick}
function PA(a){a=KA(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function QA(a){a=PA(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function RA(a){var b=KA(a).nonce;b||(b=By(),KA(a).nonce=b);return b}
function LA(a){var b={tick:{},info:{}};D("ytcsi."+(a||"")+"data_",b);return b}
;function SA(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function TA(a){a=a||"";var b=UA();if(b[a])return b[a];var c=SA(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
function UA(){var a=E("ytcsi.reference");if(a)return a;SA();return E("ytcsi.reference")}
;var X={},VA=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.editor=
"LATENCY_ACTION_EDITOR",X.embed="LATENCY_ACTION_EMBED",X.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.landing="LATENCY_ACTION_LANDING",X.learning="LATENCY_ACTION_LEARNING",X.learning_journey_browse=
"LATENCY_ACTION_LEARNING_JOURNEY_BROWSE",X.learning_journey_watch="LATENCY_ACTION_LEARNING_JOURNEY_WATCH",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.management="LATENCY_ACTION_MANAGEMENT",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.projects="LATENCY_ACTION_PROJECTS",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium=
"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.review="LATENCY_ACTION_REVIEW",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard=
"LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",
X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",X);function WA(a){return VA[a]||"LATENCY_ACTION_UNKNOWN"}
;function XA(a,b){Cu.call(this,1,arguments);this.timer=b}
v(XA,Cu);var YA=new Du("aft-recorded",XA);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var ZA=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",ZA);function $A(){this.h=0}
function aB(){$A.instance||($A.instance=new $A);return $A.instance}
$A.prototype.tick=function(a,b,c,d){bB(this,"tick_"+a+"_"+b)||Ds("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
$A.prototype.info=function(a,b,c){var d=Object.keys(a).join("");bB(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Ds("latencyActionInfo",a,{cttAuthInfo:c}))};
$A.prototype.jspbInfo=function(){};
$A.prototype.span=function(a,b,c){var d=Object.keys(a).join("");bB(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Ds("latencyActionSpan",a,{cttAuthInfo:c}))};
function bB(a,b){ZA[b]=ZA[b]||{count:0};var c=ZA[b];c.count++;c.time=W();a.h||(a.h=Mr(function(){var d=W(),e;for(e in ZA)ZA[e]&&d-ZA[e].time>6E4&&delete ZA[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||sy(c)),!0):!1}
;var cB=window;function dB(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function eB(){var a;if(T("csi_use_performance_navigation_timing")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=fB(e.requestStart),e.responseEnd=fB(e.responseEnd),e.redirectStart=fB(e.redirectStart),e.redirectEnd=fB(e.redirectEnd),e.domainLookupEnd=fB(e.domainLookupEnd),e.connectStart=fB(e.connectStart),e.connectEnd=fB(e.connectEnd),e.responseStart=fB(e.responseStart),
e.secureConnectionStart=fB(e.secureConnectionStart),e.domainLookupStart=fB(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=T("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function fB(a){return Math.round(gB()+a)}
function gB(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=cB.performance||cB.mozPerformance||cB.msPerformance||cB.webkitPerformance||new dB;var hB=!1,iB=!1,jB={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"},kB=Ya(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Ek,Y);function lB(a,b){mB("_start",a,b)}
function nB(a,b){if(!T("web_csi_action_sampling_enabled")||!KA(b).actionDisabled){var c=TA(b||"");Hz(c.info,a);a.loadType&&(c=a.loadType,NA(b).loadType=c);Hz(QA(b),a);c=RA(b);b=KA(b).cttAuthInfo;aB().info(a,c,b)}}
function oB(){var a,b,c,d;return((d=bx().resolve(Ww(pu))==null?void 0:(a=qu())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function mB(a,b,c){if(!T("web_csi_action_sampling_enabled")||!KA(c).actionDisabled){var d=RA(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(bx().resolve(Ww(pu))==null?0:qu())&&!iB&&(iB=!0,mB("gcfl",W(),c));var f,g,h;e=(bx().resolve(Ww(pu))==null?void 0:(f=qu())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=oB();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}f?(e=Qz(d)%e!==0,KA(c).debugTicksExcludedLogged||
(f={},f.debugTicksExcluded=e,nB(f,c)),KA(c).debugTicksExcludedLogged=!0):e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||T("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=T("csi_use_performance_navigation_timing")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);try{Y.mark(e,{startTime:f})}catch(k){}}e=TA(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=y(e.callback[a]),f=e.next();!f.done;f=e.next())f=
f.value,f();e=PA(c);e.gelTicks&&(e.gelTicks[a]=!0);f=OA(c);e=b||W();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=KA(c).cttAuthInfo;a==="_start"?(a=aB(),bB(a,"baseline_"+d)||Ds("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):aB().tick(a,d,b,f);pB(c);return e}}}
function qB(){var a,b=(a=Y.getEntriesByType)==null?void 0:a.call(Y,"mark");b&&b.forEach(function(c){if(c.name.startsWith("mark_")){var d;(d=Y.clearMarks)==null||d.call(Y,c.name)}})}
function rB(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=uw+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function sB(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=y(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function tB(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Hb(document)&&a.setAttribute("nonce",Hb(document));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=gB(),mB("rsf_"+b,c+Math.round(a.fetchStart)),mB("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function uB(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Ub(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Wb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(mB("wffs",fB(b.startTime)),mB("wffe",fB(b.responseEnd)))}
function vB(a){var b=wB("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=wB(b[d],a);if(e)return e}return NaN}
function xB(a){D("ytglobal.timing"+(a||"")+"ready_",!0)}
function wB(a,b){if(a=OA(b)[a])return typeof a==="number"?a:a[a.length-1]}
function pB(a){var b=wB("_start",a),c=vB(a),d=!hB;b&&c&&d&&(Iu(YA,new XA(Math.round(c-b),a)),hB=!0)}
function yB(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Xb(a,function(c){return c.name==="first-paint"}))return fB(a.startTime)}var b;
T("csi_use_performance_navigation_timing")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.ej;return b?Math.max(0,b):0}
;function zB(a,b){iq(function(){TA("").info.actionType=a;b&&eq("TIMING_AFT_KEYS",b);eq("TIMING_ACTION",a);var c=sB();Object.keys(c).length>0&&nB(c);c={isNavigation:!0,actionType:WA(S("TIMING_ACTION"))};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=WA(d));if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Ly())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=rB();if(d===1||d===-1)c.isVisible=!0;NA();MA();c.loadType="cold";d=MA();var e=eB(),f=gB(),g=S("CSI_START_TIMESTAMP_MILLIS",
0);g>0&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(mB("srt",e.responseStart),d.prerender!==1&&lB(f));d=yB();d>0&&mB("fpt",d);d=eB();d.isPerformanceNavigationTiming&&nB({performanceNavigationTiming:!0},void 0);mB("nreqs",d.requestStart,void 0);mB("nress",d.responseStart,void 0);mB("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(mB("nrs",d.redirectStart,void 0),mB("nre",d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(mB("ndnss",d.domainLookupStart,
void 0),mB("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(mB("ntcps",d.connectStart,void 0),mB("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=gB()&&d.connectEnd-d.secureConnectionStart>0&&(mB("nstcps",d.secureConnectionStart,void 0),mB("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&uB();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in jB)jB.hasOwnProperty(h)&&(e=jB[h],tB(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=y(d),d=h.next();!d.done;d=
h.next())c.resourceInfo.push({resourceCache:d.value});nB(c);c=PA();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=QA();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(NA().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=OA();e=PA();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")mB(k,wB(k));else if(T("log_repeated_ytcsi_ticks"))for(f=y(d[k]),g=f.next();!g.done;g=f.next())g=g.value,mB(k.slice(1),
g);k={};d=!1;h=y(h);for(e=h.next();!e.done;e=h.next())d=e.value,Hz(c,d),Hz(k,d),d=!0;d&&nB(k)}xB();k=S("TIMING_ACTION");E("ytglobal.timingready_")&&k&&AB()&&vB()&&pB()})()}
function BB(){var a=a===void 0?{}:a;iq(function(){CB();var b=a.sampleRate;if(!T("web_csi_action_sampling_enabled")||b===void 0||b<=1)b=!1;else{var c=RA("attestation_challenge_fetch");b=Qz(c)%b!==0}b&&(KA("attestation_challenge_fetch").actionDisabled=!0);TA("attestation_challenge_fetch").info.actionType="attestation_challenge_fetch";a.cttAuthInfo&&(KA("attestation_challenge_fetch").cttAuthInfo=a.cttAuthInfo);eq("attestation_challenge_fetchTIMING_ACTION","attestation_challenge_fetch");iq(lB)(a.startTime,
"attestation_challenge_fetch");b={actionType:WA("attestation_challenge_fetch")};a.bj&&(b.previousAction=WA(S("TIMING_ACTION")));(c=Ly())&&c!=="UNDEFINED_CSN"&&(b.clientScreenNonce=c);DB(b,"attestation_challenge_fetch");xB("attestation_challenge_fetch")})()}
function CB(){iq(function(){AB("attestation_challenge_fetch")&&EB("aa",void 0,"attestation_challenge_fetch");var a=UA();a.attestation_challenge_fetch&&delete a.attestation_challenge_fetch;var b={timerName:"attestation_challenge_fetch",info:{},tick:{},span:{},jspbInfo:[]};SA().push(b);a.attestation_challenge_fetch=b;LA("attestation_challenge_fetch");kB();qB()})()}
function AB(a){return iq(function(){return FB("_start",a)})()}
function DB(a,b,c){iq(nB)(a,b,c===void 0?!1:c)}
function EB(a,b,c){return iq(mB)(a,b,c)}
function FB(a,b){return iq(function(){var c=OA(b);return a in c})()}
function GB(a){if(!T("universal_csi_network_ticks"))return"";a=nc(a)||"";for(var b=Object.keys(Au),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function HB(a){if(!T("universal_csi_network_ticks"))return function(){};
var b=Au[a];return b?(IB(b),function(){var c=T("universal_csi_network_ticks")?(c=Bu[a])?IB(c):!1:!1;return c}):function(){}}
function IB(a){return iq(function(){if(FB(a))return!1;EB(a,void 0,void 0);return!0})()}
function JB(a){iq(function(){if(!AB("attestation_challenge_fetch")||FB(a,"attestation_challenge_fetch"))return!1;EB(a,void 0,"attestation_challenge_fetch");return!0})()}
function KB(){iq(function(){var a=RA();requestAnimationFrame(function(){setTimeout(function(){a===RA()&&EB("ol",void 0,void 0)},0)})})()}
var LB=window;LB.ytcsi&&(LB.ytcsi.infoGel=DB,LB.ytcsi.tick=EB);var MB="tokens consistency service_params mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),NB=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function OB(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.uc||(a.uc={});a.uc=Object.assign({},JA,a.uc)}
function PB(a,b,c,d){if(OB.instance!==void 0){if(d=OB.instance,a=[a!==d.u,b!==d.fa,c!==d.j,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else OB.instance=new OB(a,b,c,d)}
function QB(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?rr:c;var d=RB(a,b);return d?new Gk(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new U("Error: Failed to build request for command.",b));n.A(0);break}lA(h.input);l=((k=h.hb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.we){m=SB(h.config,l);n.A(4);break}return n.yield(TB(h.config,l),5);case 5:m=n.i;case 4:e(UB(a,h,m)),n.h=
0}})}):Lk(new U("Error: No request builder found for command.",b))}
function VB(a,b){function c(){}
var d="/youtubei/v1/"+EA(nz);var e=e===void 0?{Yb:{identity:rr}}:e;var f=f===void 0?!0:f;c=HB(GB(d));b.context||(b.context=xA(void 0,f));return new Gk(function(g){var h,k,l,m,n;return A(function(r){if(r.h==1)return h=Vy(d),k=vq(h)?"same-origin":"cors",a.j.we?(l=SB(e,k),r.A(2)):r.yield(TB(e,k),3);r.h!=2&&(l=r.i);m=Wy(Vy(d));n={input:m,hb:Xy(m),Ja:b,config:e};g(UB(a,n,l,c));r.h=0})})}
function WB(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=y(MB);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function UB(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,r,t,w,z,x,H,G,V,ja,lc,Xd,ka,gb,Va,Wa,Ua,ki,li,zv,Av,Bv,Cv;return A(function(na){switch(na.h){case 1:na.A(2);break;case 3:if((e=na.i)&&!e.isExpired())return na.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ja)==null?0:g.context)){na.A(4);break}h=b.Ja.context;na.A(5);break;case 5:k=y([]),l=k.next();case 8:if(l.done){na.A(4);break}m=l.value;return na.yield(m.hj(h),9);case 9:l=k.next();na.A(8);break;case 4:if((n=a.i)==null||!n.pj(b.input,b.Ja)){na.A(12);break}return na.yield(a.i.Zi(b.input,
b.Ja),13);case 13:return r=na.i,WB(a,r,b),na.return(r);case 12:return(z=(w=b.config)==null?void 0:w.oc)&&a.h.has(z)?t=a.h.get(z):(x=JSON.stringify(b.Ja),V=(G=(H=b.hb)==null?void 0:H.headers)!=null?G:{},b.hb=Object.assign({},b.hb,{headers:Object.assign({},V,c)}),ja=Object.assign({},b.hb),b.hb.method==="POST"&&(ja=Object.assign({},ja,{body:x})),((lc=b.config)==null?0:lc.fg)&&EB(b.config.fg),Xd=function(){return a.fa.fetch(b.input,ja,b.config)},t=Xd(),z&&a.h.set(z,t)),na.yield(t,14);
case 14:(ka=na.i)&&T("web_streaming_player")&&Array.isArray(ka)&&(ka=ka[0].playerResponse);if(ka&&"error"in ka&&((gb=ka)==null?0:(Va=gb.error)==null?0:Va.details))for(Wa=ka.error.details,Ua=y(Wa),ki=Ua.next();!ki.done;ki=Ua.next())li=ki.value,(zv=li["@type"])&&NB.indexOf(zv)>-1&&(delete li["@type"],ka=li);z&&a.h.has(z)&&a.h.delete(z);((Av=b.config)==null?0:Av.gg)&&EB(b.config.gg);if(ka||(Bv=a.i)==null||!Bv.Ni(b.input,b.Ja)){na.A(15);break}return na.yield(a.i.Yi(b.input,b.Ja),16);case 16:ka=na.i;case 15:return WB(a,
ka,b),((Cv=b.config)==null?0:Cv.cg)&&EB(b.config.cg),d(),na.return(ka||void 0)}})}
function RB(a,b){a:{a=a.u;var c,d=(c=Ax(b,Lp))==null?void 0:c.signal;if(d&&a.uc&&(c=a.uc[d])){var e=c();break a}var f;if((c=(f=Ax(b,Jp))==null?void 0:f.request)&&a.We&&(f=a.We[c])){e=f();break a}for(e in b)if(a.ld[e]&&(b=a.ld[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function TB(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Yb)==null?void 0:d.sessionIndex;var h=g.yield;var k=qr(0,{sessionIndex:e});if(!(k instanceof Gk)){var l=new Gk(Ek);Hk(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},yA(b),f)))})}
function SB(a,b){var c;a=a==null?void 0:(c=a.Yb)==null?void 0:c.sessionIndex;c=qr(0,{sessionIndex:a});return Object.assign({},yA(b),c)}
;var XB=new Uw("INNERTUBE_TRANSPORT_TOKEN");function YB(){}
v(YB,GA);YB.prototype.j=function(){return tz};
YB.prototype.i=function(a){return Ax(a,Wp)||void 0};
YB.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(YB.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ZB(){}
v(ZB,GA);ZB.prototype.j=function(){return uz};
ZB.prototype.i=function(a){return Ax(a,Vp)||void 0};
ZB.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(ZB.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var $B=new Uw("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function aC(a){this.H=a}
v(aC,GA);aC.prototype.j=function(){return oz};
aC.prototype.i=function(a){return Ax(a,Pp)||Ax(a,Qp)||Ax(a,Op)};
aC.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.H)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.H.i(b.clientParamIdentifier)}};
aC[Tw]=[$B];function bC(){}
v(bC,GA);bC.prototype.j=function(){return qz};
bC.prototype.i=function(a){return Ax(a,Np)||void 0};
bC.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(bC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function cC(){}
v(cC,GA);cC.prototype.j=function(){return rz};
cC.prototype.i=function(a){return Ax(a,Tp)||void 0};
cC.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function dC(){}
v(dC,GA);dC.prototype.j=function(){return sz};
dC.prototype.i=function(a){return Ax(a,Sp)||void 0};
dC.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function eC(){}
v(eC,GA);eC.prototype.j=function(){return pz};
eC.prototype.i=function(a){return Ax(a,Rp)};
eC.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var fC=new Uw("FETCH_FN_TOKEN"),gC=new Uw("PARSE_FN_TOKEN"),hC=new Uw("WINDOW_REQUEST_TOKEN"),iC=new Uw("TEXT_DECODER_TOKEN");function jC(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;U.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
v(jC,U);var kC=new Uw("NETWORK_SLI_TOKEN");function lC(a,b,c,d){this.h=a;this.i=b;this.j=c;this.o=d}
lC.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=mC(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){sy(k);
if((c==null?0:c.lf)&&k instanceof jC&&k.errorType===1)return Promise.reject(k)}))})};
function mC(a,b,c){if(a.h){var d=nc(xc(b,"key"))||"/UNKNOWN_PATH";a.h.start(d)}d=c;T("wug_networking_gzip_request")&&(d=jv(c));var e;return new ((e=a.o)!=null?e:window.Request)(b,d)}
lC.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.If)&&a.ok)return Xg(b.If,e);e=e.replace(")]}'","");if((b==null?0:b.lf)&&e)try{var f=d(e)}catch(h){throw new jC(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Ri(),c=c.then(function(e){sy(new U("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
lC[Tw]=[Ww(kC),Ww(fC),Ww(gC),Ww(hC),Ww(iC)];var nC=new Uw("NETWORK_MANAGER_TOKEN");var oC;function pC(a){var b=new Il;if(a.interpreterJavascript){var c=Bp(a.interpreterJavascript);c=Kb(c).toString();var d=new Gl;xg(d,6,c);rg(b,Gl,1,d,xe)}else a.interpreterUrl&&(c=Cp(a.interpreterUrl),c=rb(c).toString(),d=new Hl,xg(d,4,c),rg(b,Hl,2,d,xe));a.interpreterHash&&kg(b,3,Af(a.interpreterHash),xe);a.program&&kg(b,4,Af(a.program),xe);a.globalName&&kg(b,5,Af(a.globalName),xe);a.clientExperimentsStateBlob&&kg(b,7,Af(a.clientExperimentsStateBlob),xe);return b}
function qC(a){var b={};a=y(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
function rC(a){return Number(a.t)||7200}
;function Dc(){if(T("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function sC(a){this.h=a}
sC.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
sC.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
sC.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function tC(){return new Promise(function(a){var b=window;b.ntpevasrs!==void 0?a(new sC(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new sC(c))}))})}
;var uC=ra(["https://static.doubleclick.net/instream/ad_status.js"]),vC=[],wC=function(a){var b=B.apply(1,arguments);if(b.length===0)return qb(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return qb(c)}(uC),xC=!1;
function yC(){if(Yy()){var a=S("PLAYER_VARS",{});if(Li(a)!="1"&&!$y(a)){var b=function(){xC=!0;"google_ad_status"in window?eq("DCLKSTAT",1):eq("DCLKSTAT",2)};
try{xz(wC,b)}catch(c){}vC.push(tn.ra(function(){if(!(xC||"google_ad_status"in window)){try{Bz(wC.toString(),b)}catch(c){}xC=!0;eq("DCLKSTAT",3)}},5E3))}}}
function zC(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function Z(a){this.h=a}
[new Z("b.f_"),new Z("j.s_"),new Z("r.s_"),new Z("e.h_"),new Z("i.s_"),new Z("s.t_"),new Z("p.h_"),new Z("s.i_"),new Z("f.i_"),new Z("a.b_"),new Z("a.o_"),new Z("g.o_"),new Z("p.i_"),new Z("p.m_"),new Z("n.k_"),new Z("i.f_"),new Z("a.s_"),new Z("m.c_"),new Z("n.h_"),new Z("o.p_"),new Z("m.p_"),new Z("o.a_"),new Z("d.p_"),new Z("e.i_")].reduce(function(a,b){a[b.h]=b;return a},{});function AC(a,b,c){var d=this;this.network=a;this.options=b;this.o=c;this.h=null;if(b.Ig){var e=new Nl;this.h=e.promise;C.ytAtRC&&tn.Xa(function(){var f,g;return A(function(h){if(h.h==1){if(!C.ytAtRC)return h.return();f=BC(null);return h.yield(d.ob(f),2)}g=h.i;C.ytAtRC&&C.ytAtRC(JSON.stringify(g));h.h=0})},2);
tC().then(function(f){var g,h,k,l;return A(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.ob(BC(n))}),m.yield(Cc(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,mb:qC(k),vm:g,bgChallenge:new Il};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,mb:qC(n),vm:g,bgChallenge:new Il};d.h=Promise.resolve(n)});
m.h=0})})}else b.preload&&CC(this,new Promise(function(f){Mr(function(){f(DC(d))},0)}))}
AC.prototype.j=function(){var a=this;return A(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
AC.prototype.i=function(a,b,c){var d=this,e,f,g;return A(function(h){d.h===null&&CC(d,DC(d));e=!1;f={};g=function(){var k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.mb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.A(3);break}l=Object.assign({},{c:k.challenge,e:a},b);ya(n,4);e=!0;return n.yield(k.vm.snapshot({Ha:l}),6);case 6:(m=n.i)?f.webResponse=m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";za(n,3);break;case 4:Aa(n),
f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var r=k.mb,t={};r.c6a&&(t.reportingStatus=String(Number(r.c)^zC()));r.c6b&&(t.broadSpectrumDetectionResult=String(Number(r.c)^Number(S("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),EC(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function BC(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function DC(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,r,t;return A(function(w){switch(w.h){case 1:c=BC(Sl().h);if(T("att_fet_ks"))return ya(w,7),w.yield(a.ob(c),9);ya(w,4);return w.yield(FC(a,c),6);case 6:g=w.i;e=g.Wf;f=g.Xf;d=g;za(w,3);break;case 4:return Aa(w),sy(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),GC(a,864E5),w.return({challenge:"",mb:{},vm:void 0,bgChallenge:void 0});case 9:d=w.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=qC(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");za(w,3);break;case 7:h=Aa(w);sy(h);b++;if(b>=5)return sy(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),GC(a,864E5),w.return({challenge:"",mb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return w.return(new Promise(function(z){Mr(function(){z(DC(a,
b))},k)}));
case 3:l=rC(f);GC(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){w.A(10);break}n=pC(d.bgChallenge);ya(w,11);return w.yield(Tl(Sl(),n),13);case 13:za(w,12);break;case 11:return r=Aa(w),sy(r),w.return({challenge:e,mb:f,vm:m,bgChallenge:n});case 12:return ya(w,14),m=new Pl({challenge:n,Mb:{qa:"aGIf"}}),w.yield(m.Qb,16);case 16:za(w,10);break;case 14:t=Aa(w),sy(t),m=void 0;case 10:return w.return({challenge:e,mb:f,vm:m,bgChallenge:n})}})}
AC.prototype.ob=function(a){var b=this,c;return A(function(d){c=b.o;if(!c||c.va())return d.return(b.network.ob(a));JB("att_pna");return d.return(new Promise(function(e){lk(c,"publicytnetworkstatus-online",function(){b.network.ob(a).then(e)})}))})};
function HC(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=qC(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Wf:b,Xf:c})}
function FC(a,b){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.A(4);break}if(!(d>0)){h.A(5);break}e.Od=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){Mr(function(){l(void 0)},k.Od)}}(e)),5);
case 5:return ya(h,7),h.yield(a.ob(b),9);case 9:return f=h.i,h.return(HC(f));case 7:c=g=Aa(h),g instanceof Error&&sy(g);case 8:d++;e={Od:void 0};h.A(2);break;case 4:throw c;}})}
function CC(a,b){a.h=b}
function IC(a){var b,c,d;return A(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=DC(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function GC(a,b){function c(){var e;return A(function(f){e=d-Date.now();return e<1E3?f.yield(IC(a),0):(Mr(c,Math.min(e,6E4)),f.A(0))})}
var d=Date.now()+b;c()}
function EC(a,b){return new Promise(function(c){Mr(function(){c(b())},a)})}
;function JC(a){this.h=a}
JC.prototype.ob=function(a){JB("att_fsr");return VB(this.h,a).then(function(b){JB("att_frr");return b})};function KC(){var a,b,c;return A(function(d){if(d.h==1)return a=bx().resolve(XB),a?d.yield(QB(a),2):(sy(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return sy(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Oi;return d.return(c)}sy(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function LC(){}
v(LC,GA);LC.prototype.j=function(){return qz};
LC.prototype.i=function(a){return Ax(a,Up)};
LC.prototype.h=function(a,b){b.undoToken&&(a.feedbackTokens=[b.undoToken]);b.isUndoTokenUnencrypted&&(a.isFeedbackTokenUnencrypted=b.isUndoTokenUnencrypted)};
da.Object.defineProperties(LC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function MC(){var a=a===void 0?uy:a;var b=b===void 0?{}:b;D("yt.logging.errors.log",ry);qy();fr(er(),b);window.onerror=a;Xk=ty;window.addEventListener("unhandledrejection",function(c){if(c.reason instanceof Error){var d=c.reason;vy(d,{source:"unhandledrejection"});d.name==="AbortError"&&(d.level="WARNING")}ty(c.reason);c.preventDefault()})}
;function NC(){var a;return(a=S("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var OC=C.caches,PC;function QC(a){var b=a.indexOf(":");return b===-1?{ge:a}:{ge:a.substring(0,b),datasyncId:a.substring(b+1)}}
function RC(){return A(function(a){if(PC!==void 0)return a.return(PC);PC=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return ya(d,2),d.yield(OC.open("test-only"),4);case 4:return d.yield(OC.delete("test-only"),5);case 5:za(d,3);break;case 2:if(c=Aa(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(PC)})}
function SC(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(RC(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(OC.keys(),3)}c=k.i;d=y(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=QC(f),h=g.datasyncId,!h||a.includes(h)||b.push(OC.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function TC(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(RC(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Kr("cache contains other");return h.yield(OC.keys(),3)}b=h.i;c=y(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=QC(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function UC(){try{return!!self.sessionStorage}catch(a){return!1}}
;function VC(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function WC(a){if(UC()){var b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=VC(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function XC(){if(!UC())return!1;var a=Kr(),b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=VC(c.value),c!==void 0&&c!==a)return!0;return!1}
;function YC(){KC().then(function(a){a&&(Vt(a),SC(a),gA(a),WC(a))})}
function ZC(){var a=new fw;tn.ra(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){g.A(2);break}b=Kr("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Vt(h);SC(h);gA(h);WC(h);return g.return()}c=hA();d=XC();return g.yield(TC(),3);case 3:return e=g.i,g.yield(Wt(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.va()?YC():lk(a,"publicytnetworkstatus-online",YC),g.h=0}})})}
;function $C(a){return new Promise(function(b){window.setTimeout(b,a)})}
function aD(a,b,c){this.oc=a;this.o=b;this.i=c;this.u=function(){return new XMLHttpRequest};
this.h=void 0;this.j=[]}
aD.prototype.getLatestChallengeResponse=function(){return this.i};
function mm(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){BB();EB("att_fs",void 0,"attestation_challenge_fetch");if(!a.h)throw new el(9,"Missing fetcher");return h.yield(a.h(b,c),2)}d=h.i;f=(e=d)==null?void 0:e.bgChallenge;if(!f)throw new el(15,"Missing field");a.i=d;a.j.forEach(function(k){k(d)});
g=pC(f);EB("att_fc",void 0,"attestation_challenge_fetch");CB();return h.return(g)})}
function Vm(a,b){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:c=new sj(100,3E5,.25,2),d=void 0;case 2:if(!(c.i<10)){h.A(4);break}ya(h,5);if(!(c.i>0)){h.A(7);break}return h.yield($C(c.getValue()),7);case 7:return h.yield(bD(a,b),9);case 9:return e=h.i,h.return(e);case 5:f=Aa(h);f instanceof el?d=f:(g=f instanceof Error?f.message:"Unknown",d=new el(9,g));tj(c);h.A(2);break;case 4:if(d)throw d;throw new el(9,"Unknown error");}})}
function bD(a,b){b=Zl($l(new Yl,b),a.oc);var c=new Nl,d=a.u();d.open("POST",a.o);d.setRequestHeader("X-Goog-Api-Key","AIzaSyDyT5W0Jh49F30Pqqtyfdf7pDLFKLJoAnw");d.setRequestHeader("Content-Type","application/json+protobuf");d.onload=function(){if(Aq(d)){var e=on(d.responseText);c.resolve(e)}else c.reject(new el(cl(Bq(d)),d.statusText))};
d.onerror=function(){c.reject(new el(cl(Bq(d)),d.statusText))};
d.send(b.serialize());return c.promise}
function cD(a){var b={bicf:function(f){a.h=f},
blc:function(){return a.getLatestChallengeResponse()},
bcr:function(f){a.j.push(f)}},c=window;
c.ntpevasrs=b;if(c.ntpqfbel!==void 0)for(var d=y(c.ntpqfbel),e=d.next();!e.done;e=d.next())e=e.value,e(b);c.ntpqfbel=void 0}
;function dD(a){var b,c;(b=a.ytcsi)==null||(c=b.tick)==null||c.call(b,"pot_ist")}
function eD(a){if(a instanceof Error){var b=E("yt.logging.errors.log");b&&b(a,"WARNING")}}
;function fD(a,b){var c=this;this.h=0;var d;this.Fc=(d=b==null?void 0:b.Fc)!=null?d:window;this.Rc=b==null?void 0:b.Rc;var e;this.oc=(e=b==null?void 0:b.oc)!=null?e:Hq("par_bir_key")||"O43z0dpjhgX20SCx4KAo";var f;this.Ce=(f=b==null?void 0:b.Ce)!=null?f:function(k){return new am(k)};
var g;d=(g=b==null?void 0:b.Si)!=null?g:function(k,l,m){return new aD(k,l,m)};
this.bgChallenge=pC(a.bgChallenge);this.ttlSeconds=rC(qC(a.challenge||""));this.Oa=d(this.oc,T("par_at_ep")?["www.youtube.com","m.youtube.com"].includes(C.location.hostname)?"/api/jnn/v1/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT",a);cD(this.Oa);var h;this.ne=(h=b==null?void 0:b.ne)!=null?h:function(k){dk(c.Fc.document,"visibilitychange",function(){c.Fc.document.visibilityState===
"visible"&&k()})}}
function gD(a){if(!a.vm){var b={maxAttempts:5,le:a.ttlSeconds*1E3};dD(a.Fc);a.vm=a.Ce({Oa:a.Oa,Mb:{disable:T("html5_web_po_disable_remote_logging"),qa:"aGIf",mf:Gq(),Pf:T("wpo_dis_lfdms")?0:1E3,Sb:function(d){var e=dA.get(d);e||(e=new cA(d),e=new Zk(e),dA.set(d,e));return e}},
wc:b,zf:a.bgChallenge,Tf:eD});a.h=Date.now();fm(a.vm,function(){a.h=Date.now()});
Kc(a.vm,function(){return A(function(d){return d.return(hD(a))})});
var c=a.j.bind(a);a.Rc&&a.ttlSeconds>0&&a.Rc.then(function(d){d.listen("publicytnetworkstatus-online",c)});
a.ne(c)}}
fD.prototype.j=function(){if(Date.now()>this.h+this.ttlSeconds*1E3){var a;(a=this.vm)==null||em(a)}};
function hD(a){if(a.i)return a.i;if(!a.vm)throw Error("VMNI");a.i=new Rm({vm:a.vm,Oa:a.Oa,Ld:!0,onError:eD});return a.i}
function iD(a,b){a=new fD(a,b);gD(a);hD(a)}
function jD(a){try{var b=JSON.parse(a);if(b.bgChallenge)return b}catch(c){}}
function kD(){var a=window,b={Rc:Promise.resolve(new fw)};a=a===void 0?window:a;var c=a.ytAtR,d;b==null||(d=b.Xd)==null||d.ij();if(c){if(c=jD(c)){var e;b==null||(e=b.Xd)==null||e.ke("SUCCESS");iD(c,b)}a.ytAtR=void 0}else a.ytAtRC=function(f){if(f=jD(f)){var g;b==null||(g=b.Xd)==null||g.ke("SUCCESS");iD(f,b);a.ytAtRC=void 0}}}
;var lD=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function mD(){this.state=1;this.vm=null;this.h=void 0}
p=mD.prototype;p.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=Bp(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=Cp(a.interpreterSafeUrl).toString());nD(this,e,d,a.program,b,c)}else sy(Error("BL:CIP"))};
function nD(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,xz(Dp(c),function(){window[g]?oD(a,d,g,e):(a.state=3,zz(c),sy(new U("BL:ULB",""+c)))},f)):b?(f=Ui("SCRIPT"),b instanceof Ib?(f.textContent=Kb(b),Lb(f)):f.textContent=b,f.nonce=Hb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?oD(a,d,g,e):(a.state=4,sy(new U("BL:ULBJ")))):sy(new U("BL:ULV"))}
p.isLoading=function(){return this.state===2};
function oD(a,b,c,d){a.state=5;var e=!!a.h&&lD.includes(mc(a.h)||"");try{var f=new Pl({program:b,globalName:c,Mb:{disable:!T("att_web_record_metrics")||!T("att_skip_metrics_for_cookieless_domains_ks")&&e,qa:"aGIf"}});f.Qb.then(function(){a.state=6;d&&d(b)});
a.Ed(f)}catch(g){a.state=7,g instanceof Error&&sy(g)}}
p.invoke=function(a){a=a===void 0?{}:a;return this.Jd()?this.De({Ha:a}):null};
p.dispose=function(){this.Ed(null);this.state=8};
p.Jd=function(){return!!this.vm};
p.De=function(a){return this.vm.te(a)};
p.Ed=function(a){zc(this.vm);this.vm=a};function pD(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function qD(){mD.apply(this,arguments)}
v(qD,mD);qD.prototype.Ed=function(a){var b;(b=pD())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.te.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
qD.prototype.Jd=function(){return!!pD()};
qD.prototype.De=function(a){return pD().bgvmc(a)};var rD=new Uw("AUTH_SERVICE_TOKEN");function sD(a){lx.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.H},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.H},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(sD,lx);sD.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
sD.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
sD.prototype.H=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
sD.prototype.i=function(){this.h=new Map};function tD(a){lx.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.H},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.H},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.H},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(tD,lx);tD.prototype.i=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
tD.prototype.h=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
tD.prototype.u=function(a,b){a(b==null?void 0:b.event)};
tD.prototype.H=function(a,b){a(b==null?void 0:b.event)};function uD(){this.o=new sD;this.u=new tD}
uD.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function vD(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
vD.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Ly(c===void 0?0:c)){a=this.client;d=new Ey({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=Zz(d,c);Vz.set(f,!0);$z(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Yz({cttAuthInfo:Ny(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?aA("visualElementGestured",f,d):a?iy("visualElementGestured",d,a,f):Ds("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
vD.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Ey({trackingParams:a}),b,c===void 0?0:c)};
vD.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Ly(d);a||(a=(a=Iy(d===void 0?0:d))?new Ey({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Yz({cttAuthInfo:Ny(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?aA("visualElementStateChanged",d,b):a?iy("visualElementStateChanged",b,a,d):Ds("visualElementStateChanged",b,d))}};
function wD(a,b){if(b===void 0)for(var c=Ky(),d=0;d<c.length;d++)c[d]!==void 0&&wD(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Xz(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function xD(){uD.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));T("web_log_cfg_cee_ks")||Mr(yD)}
v(xD,uD);xD.prototype.j=function(){Ds("finalPayload",{csn:Ly()})};
xD.prototype.h=function(){yy(zy)};
xD.prototype.i=function(){var a=wD;vD.instance||(vD.instance=new vD);a(vD.instance)};
function yD(){var a=S("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Ce();a=y(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&Ds("genericClientExperimentEvent",{eventType:c});delete dq.CLIENT_EXPERIMENT_EVENTS}}
;function zD(){}
function AD(){var a=E("ytglobal.storage_");a||(a=new zD,D("ytglobal.storage_",a));return a}
zD.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(BD()):d.return()})};
function BD(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",zD);function Bs(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
Bs.prototype.wa=function(a){this.handleError(a)};
Bs.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":CD(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function CD(a,b){AD().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:DD(c==null?void 0:c.usage),deviceStorageQuotaMbytes:DD(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function DD(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var ED={ld:{feedbackEndpoint:BA(bC),modifyChannelNotificationPreferenceEndpoint:BA(cC),playlistEditEndpoint:BA(dC),shareEntityEndpoint:BA(aC),subscribeEndpoint:BA(YB),undoFeedbackEndpoint:BA(LC),unsubscribeEndpoint:BA(ZB),webPlayerShareEntityServiceEndpoint:BA(eC)}};function FD(){var a=bx();Yw(a,{xb:nC,gd:lC});Yw(a,{xb:rD,gd:or});var b=wA(),c=a.resolve(rD),d=a.resolve(nC),e={};b&&(e.client_location=b);PB(ED,d,c,e);Yw(a,{xb:XB,Id:OB.instance})}
;var GD={},HD=(GD["api.invalidparam"]=2,GD.auth=150,GD["drm.auth"]=150,GD["heartbeat.net"]=150,GD["heartbeat.servererror"]=150,GD["heartbeat.stop"]=150,GD["html5.unsupportedads"]=5,GD["fmt.noneavailable"]=5,GD["fmt.decode"]=5,GD["fmt.unplayable"]=5,GD["html5.missingapi"]=5,GD["html5.unsupportedlive"]=5,GD["drm.unavailable"]=5,GD["mrm.blocked"]=151,GD["embedder.identity.denied"]=152,GD["embedder.identity.missing.referrer"]=153,GD);var ID=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function JD(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function KD(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=y(ID);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);if(a=a.embedConfig||a.embed_config)if(typeof a==="string")b.embed_config=a;else if(Pa(a))try{var e=JSON.stringify(a);b.embed_config=e}catch(f){console.error("Invalid embedConfig JSON",f)}return b}
function LD(a,b,c,d){if(Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function MD(a,b){I.call(this);var c=this;this.api=a;this.B=this.G=!1;this.J=[];this.V={};this.j=[];this.i=[];this.aa=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.Z=T("web_player_split_event_bus_iframe");this.u=S("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.o=function(d){c.onMessage(d)};
ND.addEventListener("message",this.o);if(a=S("WIDGET_ID"))this.sessionId=a;b&&this.o(b);OD(this,"onReady",function(){c.G=!0;var d=c.api.getVideoData();if(!d.isPlayable){c.aa=!0;d=d.errorCode;var e=e===void 0?5:e;c.errorCode=d?HD[d]||e:e;c.sendMessage("onError",Number(c.errorCode))}PD(c)});
OD(this,"onVideoProgress",this.rg.bind(this));OD(this,"onVolumeChange",this.sg.bind(this));OD(this,"onApiChange",this.kg.bind(this));OD(this,"onPlaybackQualityChange",this.og.bind(this));OD(this,"onPlaybackRateChange",this.pg.bind(this));OD(this,"onStateChange",this.qg.bind(this));OD(this,"onWebglSettingsChanged",this.tg.bind(this));OD(this,"onCaptionsTrackListChanged",this.lg.bind(this));OD(this,"captionssettingschanged",this.mg.bind(this))}
v(MD,I);function PD(a){if(a.G&&a.h&&!a.B){a.B=!0;a.G=!1;a.sendMessage("initialDelivery",QD(a));a.sendMessage("onReady");EB("ep_init_ar");for(var b=y(a.J),c=b.next();!c.done;c=b.next())RD(a,c.value);a.J=[]}}
function SD(a,b){a.sendMessage("infoDelivery",b)}
p=MD.prototype;p.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.B?RD(this,a):this.J.push(a)};
function TD(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function OD(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function QD(a){if(!a.api)return null;var b=a.api.getApiInterface();Yb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
p.qg=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());SD(this,a)};
p.og=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());SD(this,a)};
p.pg=function(a){SD(this,{playbackRate:a})};
p.kg=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.sg=function(){SD(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
p.rg=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());SD(this,a)};
p.tg=function(){SD(this,{sphericalProperties:this.api.getSphericalProperties()})};
p.lg=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};SD(this,a)}};
p.mg=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};SD(this,a)}};
p.onMessage=function(a){if(!(this.u!=="*"&&a.origin!==this.u||this.h&&a.source!==this.h||typeof a.data!=="string")){try{var b=JSON.parse(a.data)}catch(f){return}if(b)switch(b.event){case "listening":var c=a.source;a=a.origin;b=b.id;a!=="null"&&(this.u=this.targetOrigin=a);this.h=c;this.sessionId=b;PD(this);break;case "command":if(c=b.func,b=b.args,c==="addEventListener"&&b)c=b[0],b=a.origin,c==="onReady"?this.api.logApiCall(c+" invocation",b):c==="onError"&&this.aa&&(this.api.logApiCall(c+" invocation",
b,this.errorCode),this.errorCode=void 0),this.api.logApiCall(c+" registration",b),this.V[c]||c==="onReady"||(a=TD(this,c,b),this.i.push({eventType:c,listener:a,origin:b}),this.Z?this.api.handleExternalCall("addEventListener",[c,a],b):this.api.addEventListener(c,a),this.V[c]=!0);else if(a=a.origin,this.api.isExternalMethodAvailable(c,a)){b=b||[];if(b.length>0&&JD(c)){var d=b;if(Pa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},c){case "loadVideoById":case "cueVideoById":e=KD(d[0],d[1]!==void 0?
Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];typeof e==="string"&&(e={mediaContentUrl:e,startSeconds:d[1]!==void 0?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=d[2];break b}d=null}e.videoId=d;e=KD(e);break;case "loadPlaylist":case "cuePlaylist":e=LD(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(c,b,a);JD(c)&&SD(this,QD(this))}}}};
function RD(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){sy(d)}}}
p.da=function(){I.prototype.da.call(this);ND.removeEventListener("message",this.o);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.Z?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var ND=window;function UD(a,b,c){I.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=T("web_player_split_event_bus_iframe");this.i=function(e){d.onMessage(e)};
VD.addEventListener("message",this.i);WD(this,"RECEIVING")}
v(UD,I);p=UD.prototype;p.addListener=function(a,b){if(!(a in this.h)){var c=this.ng.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
p.ng=function(a,b){this.T||WD(this,a,XD(a,b))};
p.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
p.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
p.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function YD(a,b){switch(a){case "loadVideoById":return[KD(b)];case "cueVideoById":return[KD(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[LD(b)];case "cuePlaylist":return[LD(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function ZD(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function XD(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function WD(a,b,c){a.T||(b={id:a.id,command:b},c&&(b.data=c),$D.postMessage(JSON.stringify(b),a.origin))}
p.onMessage=function(a){if(a.origin===this.origin){var b=a.data;if(typeof b==="string"){try{b=JSON.parse(b)}catch(e){return}if(b.command){var c=b.command;b=b.data;a=a.origin;if(!this.T){var d=b||{};switch(c){case "addEventListener":typeof d.event==="string"&&this.addListener(d.event,a);break;case "removeEventListener":typeof d.event==="string"&&this.removeListener(d.event,a);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(c,a||null)&&(b=YD(c,b||{}),b=this.api.handleExternalCall(c,
b,a||null),(b=ZD(c,b))&&WD(this,c,b))}}}}}};
p.da=function(){VD.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);I.prototype.da.call(this)};
var VD=window,$D=window.parent;var aE=new qD;function bE(){return aE.Jd()}
function cE(a){a=a===void 0?{}:a;return aE.invoke(a)}
;function dE(a,b,c,d,e){I.call(this);var f=this;this.B=b;this.webPlayerContextConfig=d;this.Ub=e;this.Va=!1;this.api={};this.na=this.u=null;this.V=new O;this.h={};this.aa=this.za=this.elementId=this.Wa=this.config=null;this.Z=!1;this.j=this.G=null;this.Ga={};this.jd=["onReady"];this.lastError=null;this.lb=NaN;this.J={};this.ha=0;this.i=this.o=a;Bc(this,this.V);eE(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(fE(this),gE(this))}
v(dE,I);p=dE.prototype;p.getId=function(){return this.B};
p.loadNewVideoConfig=function(a){if(!this.T){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof mz||(b=new mz(b));this.config=b;this.setConfig(a);gE(this);this.isReady()&&hE(this)}};
function fE(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.B,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.B:a.config.attrs.id=a.B);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
p.setConfig=function(a){this.Wa=a;this.config=iE(a);fE(this);if(!this.za){var b;this.za=jE(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=ln(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=ln(Number(a)||a))};
function hE(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function kE(a){var b=!0,c=lE(a);c&&a.config&&(b=c.dataset.version===mE(a));return b&&!!E("yt.player.Application.create")}
function gE(a){if(!a.T&&!a.Z){var b=kE(a);if(b&&(lE(a)?"html5":null)==="html5")a.aa="html5",a.isReady()||nE(a);else if(oE(a),a.aa="html5",b&&a.j&&a.o)a.o.appendChild(a.j),nE(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=pE(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?iE(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Ub);nE(a)};
a.Z=!0;b?a.G():(xz(mE(a),a.G),(b=qE(a))&&Ez(b||""),rE(a)&&!c&&D("yt.player.Application.create",null))}}}
function lE(a){var b=Ti(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function nE(a){if(!a.T){var b=lE(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Z=!1;if(!pE(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}sE(a)}else a.lb=setTimeout(function(){nE(a)},50)}}
function sE(a){eE(a);a.Va=!0;var b=lE(a);if(b){a.u=tE(a,b,"addEventListener");a.na=tE(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=tE(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);hE(a);a.za&&a.za(a.api);a.V.Ab("onReady",a.api)}
function tE(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.B}),e.level="WARNING",e;}}}
function eE(a){a.Va=!1;if(a.na)for(var b in a.h)a.h.hasOwnProperty(b)&&a.na(b,a.h[b]);for(var c in a.J)a.J.hasOwnProperty(c)&&clearTimeout(Number(c));a.J={};a.u=null;a.na=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Wa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
p.isReady=function(){return this.Va};
p.addEventListener=function(a,b){var c=this,d=jE(this,b);d&&(Sb(this.jd,a)>=0||this.h[a]||(b=uE(this,a),this.u&&this.u(a,b)),this.V.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
p.removeEventListener=function(a,b){this.T||(b=jE(this,b))&&this.V.unsubscribe(a,b)};
function jE(a,b){var c=b;if(typeof b==="string"){if(a.Ga[b])return a.Ga[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ga[b]=c}return c?c:null}
function uE(a,b){function c(d){function e(){if(!a.T)try{a.V.Ab(b,d!=null?d:void 0)}catch(h){var g=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.B,data:d,originalStack:h.stack,componentStack:h.Ve});g.level="WARNING";throw g;}}
if(pE(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.J,h=String(f);h in g&&delete g[h]},0);
Ki(a.J,String(f))}}
return a.h[b]=c}
p.getPlayerType=function(){return this.aa||(lE(this)?"html5":null)};
p.getLastError=function(){return this.lastError};
function oE(a){a.cancel();eE(a);a.aa=null;a.config&&(a.config.loaded=!1);var b=lE(a);b&&(kE(a)||!rE(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
p.cancel=function(){this.G&&Bz(mE(this),this.G);clearTimeout(this.lb);this.Z=!1};
p.da=function(){oE(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ga=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Wa=this.config=this.api=null;delete this.o;delete this.i;I.prototype.da.call(this)};
function rE(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function mE(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function qE(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function pE(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function iE(a){for(var b={},c=y(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Ni(e):e}return b}
;var vE={},wE="player_uid_"+(Math.random()*1E9>>>0);function xE(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Ti(c):c;var e=wE+"_"+Qa(c),f=vE[e];if(f&&d)return yE(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new dE(c,e,a,b,void 0);vE[e]=f;f.addOnDisposeCallback(function(){delete vE[f.getId()]});
return f.api}
function yE(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var zE=null,AE=null,BE;
function CE(){KB();var a=zr(),b=Cr(119),c=window.devicePixelRatio>1;if(document.body&&Bn(document.body,"exp-invert-logo"))if(c&&!Bn(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Bn(d,"inverted-hdpi")){var e=zn(d);An(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Bn(document.body,"inverted-hdpi")&&Cn();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Dr(b)||0;d=c?d|67108864:d&-67108865;d===0?delete wr[b]:(c=d.toString(16),wr[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in wr)wr.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(wr[f])));var f=d.join("&");sr(b,f,63072E3,a.i,c)}}
function DE(){EE()}
function FE(){EB("ep_init_pr");EE()}
function EE(){var a=zE.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function GE(){zE&&zE.sendAbandonmentPing&&zE.sendAbandonmentPing();S("PL_ATT")&&aE.dispose();for(var a=tn,b=0,c=vC.length;b<c;b++)a.sa(vC[b]);vC.length=0;zz(wC.toString());xC=!1;eq("DCLKSTAT",0);Ac(AE);zE&&(zE.removeEventListener("onVideoDataChange",DE),zE.destroy())}
;var HE;T("embeds_no_early_ticks")?HE=W():EB("ep_init_eps");T("embeds_enable_scheduler")&&rs();D("yt.setConfig",eq);D("yt.config.set",eq);D("yt.setMsg",wz);D("yt.msgs.set",wz);D("yt.logging.errors.log",ry);
D("writeEmbed",function(){EB("ep_init_wes");var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}nA(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);c=NC();if(!c.serializedForcedExperimentIds){var d=sq(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)?zB("watch",["pbs","pbu","pbp"]):a.args&&Zy(a.args)?zB("video_preview",["ol"]):zB("embed_no_video",["ep_init_pr"]);zE=xE(a,c);zE.addEventListener("onVideoDataChange",DE);zE.addEventListener("onReady",FE);a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?AE=new MD(zE,BE):S("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(AE=new UD(zE,a,b));BE=void 0;yC();T("ytidb_create_logger_embed_killswitch")||As();a={};xD.h||(xD.h=new xD);
xD.h.install((a.flush_logs={callback:function(){Wx()}},a));
rw();if(T("embeds_enable_separate_ITS")){FD();var f=function(){return OB.instance}}else f=function(){var g,h;
if(!oC){var k=bx();Yw(k,{xb:nC,gd:lC});var l={ld:{feedbackEndpoint:BA(bC),modifyChannelNotificationPreferenceEndpoint:BA(cC),playlistEditEndpoint:BA(dC),shareEntityEndpoint:BA(aC),subscribeEndpoint:BA(YB),unsubscribeEndpoint:BA(ZB),webPlayerShareEntityServiceEndpoint:BA(eC)}},m=wA(),n={};m&&(n.client_location=m);g===void 0&&(g=pr());h===void 0&&(h=k.resolve(nC));PB(l,h,g,n);Yw(k,{xb:XB,Id:OB.instance});oC=k.resolve(XB)}return oC};
T("ytidb_clear_embedded_player")&&tn.ra(function(){f();ZC()});
T("enable_rta_manager")&&Mr(function(){T("attmusi")&&kD();var g=new JC(f());var h={preload:!T("enable_rta_npi"),Ig:T("attmusi")},k=!1;if(typeof h==="boolean")var l={preload:h};else typeof h==="undefined"?l={preload:!0}:(l=h,k=!!h.Pi);h=k?void 0:new fw;AC.instance=new AC(g,l,h);g=AC.instance;l=g.i.bind(g);D("yt.aba.att",l);g=g.j.bind(g);D("yt.aba.att2",g)});
EB("ep_init_wee")});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||bE);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||cE);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||zC);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||mA);D("yt.util.activity.init",E("yt.util.activity.init")||Fw);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||Iw);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||Gw);window.addEventListener("load",iq(function(){CE()}));
window.addEventListener("pageshow",iq(function(a){a.persisted||CE()}));
window.addEventListener("pagehide",iq(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?GE():a.persisted||GE()}));
T("embeds_enable_contrib_error_handling")?MC():(window.onerror=function(a,b,c,d,e){uy(a,b,c,d,e)},Xk=ty,window.addEventListener("unhandledrejection",function(a){ty(a.reason)}),qy());
(function(){if(T("embeds_enable_early_message_handler")&&S("ENABLE_JS_API")){var a=function(b){BE=b;window.removeEventListener("message",a)};
window.addEventListener("message",a)}})();
T("embeds_no_early_ticks")&&HE&&EB("ep_init_eps",HE);EB("ep_init_epe");}).call(this);
