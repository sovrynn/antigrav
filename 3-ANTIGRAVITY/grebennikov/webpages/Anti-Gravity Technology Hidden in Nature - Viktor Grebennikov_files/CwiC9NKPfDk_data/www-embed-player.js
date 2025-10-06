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
function z(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function qa(a){if(!(a instanceof Array)){a=z(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ra(a){return sa(a,a)}
function sa(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ta(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ua=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ua});
function va(){this.B=!1;this.o=null;this.i=void 0;this.h=1;this.u=this.H=0;this.J=this.j=null}
function wa(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
va.prototype.G=function(a){this.i=a};
function xa(a,b){a.j={exception:b,Yd:!0};a.h=a.H||a.u}
va.prototype.return=function(a){this.j={return:a};this.h=this.u};
va.prototype.yield=function(a,b){this.h=b;return{value:a}};
va.prototype.A=function(a){this.h=a};
function ya(a,b,c){a.H=b;c!=void 0&&(a.u=c)}
function za(a,b){a.h=b;a.H=0}
function Aa(a){a.H=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){a.J=[a.j];a.H=0;a.u=0}
function Ca(a,b){var c=a.J.splice(0)[0];(c=a.j=a.j||c)?c.Yd?a.h=a.H||a.u:c.A!=void 0&&a.u<c.A?(a.h=c.A,a.j=null):a.h=a.u:a.h=b}
function Da(a){this.h=new va;this.i=a}
function Ea(a,b){wa(a.h);var c=a.h.o;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.o,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.B=!1,e;var f=e.value}catch(g){return a.h.o=null,xa(a.h,g),Ga(a)}a.h.o=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.B=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.B=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Yd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
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
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(w){try{l(r(w))}catch(y){m(y)}}:t}
var l,m,n=new b(function(r,t){l=r;m=t});
this.Cc(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Cc=function(g,h){function k(){switch(l.Y){case 1:g(l.ib);break;case 2:h(l.ib);break;default:throw Error("Unexpected state: "+l.Y);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=z(g),m=l.next();!m.done;m=l.next())d(m.value).Cc(h,k)})};
b.all=function(g){var h=z(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(y){r[w]=y;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Cc(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||pa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("SuppressedError",function(a){function b(c,d,e){if(!(this instanceof b))return new b(c,d,e);e=Error(e);"stack"in e&&(this.stack=e.stack);this.message=e.message;this.error=c;this.suppressed=d}
if(a)return a;v(b,Error);b.prototype.name="SuppressedError";return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=z(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
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
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=z(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(z([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
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
u("Set",function(a){function b(c){this.h=new Map;if(c){c=z(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(z([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
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
var Ra="closure_uid_"+(Math.random()*1E9>>>0),Sa=0;function Wa(a,b,c){return a.call.apply(a.bind,arguments)}
function Xa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ya(a,b,c){Ya=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Wa:Xa;return Ya.apply(null,arguments)}
function Za(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function $a(){return Date.now()}
function ab(a){return a}
function bb(a,b){function c(){}
c.prototype=b.prototype;a.Ca=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function cb(a){var b=B.apply(1,arguments).filter(Boolean).join("&");if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")<0?"?":"&")+b}
function db(a,b){return b?"&"+a+"="+encodeURIComponent(b):""}
function eb(a){var b=a.url;a=a.vj;this.i=b;this.o=a;this.j=(new Date).getTime()-17040672E5;this.h={};for(var c=/[?&]([^&=]+)=([^&]*)/g;a=c.exec(b);)this.h[a[1]]=a[2]}
function gb(a){a=a.o;if(!a)return"";var b=db("uap",a.platform)+db("uapv",a.platformVersion)+db("uafv",a.uaFullVersion)+db("uaa",a.architecture)+db("uam",a.model)+db("uab",a.bitness);a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+";"+encodeURIComponent(c.version)}).join("|")));
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
function Ec(a){I.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Pb=this.vm.p;this.j=this.jc.bind(this);this.addOnDisposeCallback(function(){return void Fc(b)})}
v(Ec,I);Ec.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.Ha&&{c:a.Ha},a.cd&&{s:a.cd},a.Ed!==void 0&&{p:a.Ed}))};
Ec.prototype.jc=function(a){this.vm.e(a)};
Ec.prototype.Dc=function(a,b){return this.vm.c(a,b,!1)};
function Fc(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
Ec.prototype.sc=function(){return this.vm.l()};function Gc(a){var b,c,d={Ha:a.c,md:a.e,Qf:(b=a.mc)!=null?b:!1,Rf:(c=a.me)!=null?c:!1};a.co&&(d.Ac={Od:a.co.c,Oe:a.co.a,Ag:a.co.s});return d}
function Hc(a){return function(){var b;return A(function(c){if(c.h==1)return c.yield(a(),2);b=c.i;return c.return({f:function(){return b.Ob.promise},
c:function(d){if(d>150)var e=!1;else try{b.cache=new Ic(d,b.logger),e=!0}catch(f){Jc(b,new F(22,"GBJ:init",f)),e=!1}return e},
m:function(d){return b.gb(Gc(d))},
mws:function(d){return b.Qc(Gc(d))}})})}}
function Kc(a,b){var c=Dc();c=c===void 0?"bevasrsg":c;b={s:function(f){var g;return a.snapshot(Object.assign({},f.c&&{Ha:f.c},f.s&&{cd:f.s},{tj:(g=f.p)!=null?g:!0}))},
e:function(f){var g;return void((g=a.jc)==null?void 0:g.call(a,f))},
c:function(f,g){return a.Dc(f,g)},
p:a.Pb,l:function(){return a.sc()},
wpc:b?Hc(b):void 0};var d=window===window.top?window:yc()?window:window.top,e=d[c];if(e){e.bevasrs=b;if(e.nqfbel!==void 0)for(c=z(e.nqfbel),d=c.next();!d.done;d=c.next())d=d.value,d(b);e.nqfbel=void 0}else e={},e=(e.bevasrs=b,e.nqfbel=void 0,e),d[c]=e}
;function Lc(a){var b=b===void 0?51:b;var c=[];Mc(a,Nc,6).forEach(function(d){Oc(d,2)<=b&&c.push(Oc(d,1))});
return c}
function Pc(a){var b=b===void 0?51:b;var c=[];Mc(a,Nc,6).forEach(function(d){Oc(d,2)>b&&c.push(Oc(d,1))});
return c}
;function Qc(a){a.then(function(){},function(){})}
function Rc(){I.apply(this,arguments);this.i=1}
v(Rc,I);Rc.prototype.share=function(){if(this.T)throw Error("E:AD");this.i++;return this};
Rc.prototype.dispose=function(){--this.i||I.prototype.dispose.call(this)};function Sc(a){return{fieldType:2,fieldName:a}}
function Tc(a){return{fieldType:3,fieldName:a}}
;function Uc(a){this.h=a;a.jd("/client_streamz/bg/frs",Tc("mk"))}
Uc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Vc(a){this.h=a;a.jd("/client_streamz/bg/wrl",Tc("mn"),Sc("ac"),Sc("sc"),Tc("rk"),Tc("mk"))}
Vc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Wc(a){this.h=a;a.Vb("/client_streamz/bg/ec",Tc("en"),Tc("mk"))}
Wc.prototype.Ia=function(a,b){this.h.Sb("/client_streamz/bg/ec",a,b)};
function Xc(a){this.h=a;a.jd("/client_streamz/bg/el",Tc("en"),Tc("mk"))}
Xc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)};
function Yc(a){this.h=a;a.Vb("/client_streamz/bg/cec",Sc("ec"),Tc("mk"))}
Yc.prototype.Ia=function(a,b){this.h.Sb("/client_streamz/bg/cec",a,b)};
function Zc(a){this.h=a;a.Vb("/client_streamz/bg/po/csc",Sc("cs"),Tc("mk"))}
Zc.prototype.Ia=function(a,b){this.h.Sb("/client_streamz/bg/po/csc",a,b)};
function $c(a){this.h=a;a.Vb("/client_streamz/bg/po/ctav",Tc("av"),Tc("mk"))}
$c.prototype.Ia=function(a,b){this.h.Sb("/client_streamz/bg/po/ctav",a,b)};
function ad(a){this.h=a;a.Vb("/client_streamz/bg/po/cwsc",Tc("su"),Tc("mk"))}
ad.prototype.Ia=function(a,b){this.h.Sb("/client_streamz/bg/po/cwsc",a,b)};var bd,cd=typeof String.prototype.isWellFormed==="function",dd=typeof TextEncoder!=="undefined";
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
function Sd(){return Td||(Td=new Pd(null,Od))}
function Ud(a){return new Uint8Array(Vd(a)||0)}
Pd.prototype.sizeBytes=function(){var a=Vd(this);return a?a.length:0};
function Vd(a){Qd(Od);var b=a.h;if(!(b==null||Jd&&b!=null&&b instanceof Uint8Array))if(typeof b==="string")if(Kd){b=Ld.test(b)?b.replace(Ld,Nd):b;b=atob(b);for(var c=new Uint8Array(b.length),d=0;d<b.length;d++)c[d]=b.charCodeAt(d);b=c}else b=Hd(b);else Na(b),b=null;return b==null?b:a.h=b}
var Td;function Qd(a){if(a!==Od)throw Error("illegal external caller");}
;var Wd=void 0;function Xd(a){a=Error(a);bc(a,"warning");return a}
function Yd(a,b){if(a!=null){var c;var d=(c=Wd)!=null?c:Wd={};c=d[a]||0;c>=b||(d[a]=c+1,a=Error(),bc(a,"incident"),fd(a))}}
;var Zd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function $d(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var ae=$d("jas",void 0,!0),be=$d(void 0,"1oa"),ce=$d(void 0,Symbol()),de=$d(void 0,"0ub"),ee=$d(void 0,"0ubs"),fe=$d(void 0,"0ubsb"),ge=$d(void 0,"0actk"),he=$d("m_m","dj",!0),ie=$d(void 0,"vps"),je=$d();Math.max.apply(Math,qa(Object.values({Ei:1,Di:2,Ci:4,Hi:8,Ji:16,Fi:32,Xg:64,Ai:128,dh:256,Ii:512,eh:1024,Bi:2048,Gi:4096})));var ke={Ff:{value:0,configurable:!0,writable:!0,enumerable:!1}},le=Object.defineProperties,K=Zd?ae:"Ff",me,ne=[];oe(ne,7);me=Object.freeze(ne);function pe(a,b){Zd||K in a||le(a,ke);a[K]|=b}
function oe(a,b){Zd||K in a||le(a,ke);a[K]=b}
;function qe(){return typeof BigInt==="function"}
;var re={};function se(a,b){return b===void 0?a.h!==te&&!!(2&(a.D[K]|0)):!!(2&b)&&a.h!==te}
var te={};function ue(a,b){if(a!=null)if(typeof a==="string")a=a?new Pd(a,Od):Sd();else if(a.constructor!==Pd)if(Jd&&a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new Pd(new Uint8Array(a),Od):Sd();else{if(!b)throw Error();a=void 0}return a}
var ve=Object.freeze({});function we(a,b,c){var d=b&128?0:-1,e=a.length,f;if(f=!!e)f=a[e-1],f=f!=null&&typeof f==="object"&&f.constructor===Object;var g=e+(f?-1:0);for(b=b&128?1:0;b<g;b++)c(b-d,a[b]);if(f){a=a[e-1];for(var h in a)!isNaN(h)&&c(+h,a[h])}}
var xe={};function ye(a){a.Wi=!0;return a}
;var ze=ye(function(a){return typeof a==="number"}),Ae=ye(function(a){return typeof a==="string"}),Be=ye(function(a){return typeof a==="boolean"});
function Ce(){var a=De;return ye(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var Ee=ye(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"}),Fe=ye(function(a){return!!a&&(typeof a==="object"||typeof a==="function")});var Ge=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function He(a){var b=a;if(Ae(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(ze(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Ge?BigInt(a):a=Be(a)?a?"1":"0":Ae(a)?a.trim()||"0":String(a)}
var Ne=ye(function(a){return Ge?a>=Ie&&a<=Je:a[0]==="-"?Ke(a,Le):Ke(a,Me)}),Le=Number.MIN_SAFE_INTEGER.toString(),Ie=Ge?BigInt(Number.MIN_SAFE_INTEGER):void 0,Me=Number.MAX_SAFE_INTEGER.toString(),Je=Ge?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function Ke(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var L=0,Oe=0,Pe;function Qe(a){var b=a>>>0;L=b;Oe=(a-b)/4294967296>>>0}
function Re(a){if(a<0){Qe(0-a);var b=z(Se(L,Oe));a=b.next().value;b=b.next().value;L=a>>>0;Oe=b>>>0}else Qe(a)}
function Te(a,b){var c=b*4294967296+(a>>>0);return Number.isSafeInteger(c)?c:Ue(a,b)}
function Ue(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else qe()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+Ve(c)+Ve(a));return c}
function Ve(a){a=String(a);return"0000000".slice(a.length)+a}
function We(){var a=L,b=Oe;b&2147483648?qe()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=z(Se(a,b)),a=b.next().value,b=b.next().value,a="-"+Ue(a,b)):a=Ue(a,b);return a}
function Xe(a){if(a.length<16)Re(Number(a));else if(qe())a=BigInt(a),L=Number(a&BigInt(4294967295))>>>0,Oe=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");Oe=L=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Oe*=1E6,L=L*1E6+d,L>=4294967296&&(Oe+=Math.trunc(L/4294967296),Oe>>>=0,L>>>=0);b&&(b=z(Se(L,Oe)),a=b.next().value,b=b.next().value,L=a,Oe=b)}}
function Se(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Ye(a){return Array.prototype.slice.call(a)}
;var Ze=typeof BigInt==="function"?BigInt.asIntN:void 0,$e=typeof BigInt==="function"?BigInt.asUintN:void 0,af=Number.isSafeInteger,bf=Number.isFinite,cf=Math.trunc;function df(a){return a.displayName||a.name||"unknown type name"}
function ef(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Na(a)+": "+a);return a}
var ff=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function gf(a){switch(typeof a){case "bigint":return!0;case "number":return bf(a);case "string":return ff.test(a);default:return!1}}
function hf(a){if(typeof a!=="number")throw Xd("int32");if(!bf(a))throw Xd("int32");return a|0}
function jf(a){return a==null?a:hf(a)}
function kf(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return bf(a)?a|0:void 0}
function lf(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return bf(a)?a>>>0:void 0}
function mf(a){var b=0;b=b===void 0?0:b;if(!gf(a))throw Xd("int64");var c=typeof a;switch(b){case 512:switch(c){case "string":return nf(a);case "bigint":return String(Ze(64,a));default:return of(a)}case 1024:switch(c){case "string":return pf(a);case "bigint":return He(Ze(64,a));default:return qf(a)}case 0:switch(c){case "string":return nf(a);case "bigint":return He(Ze(64,a));default:return rf(a)}default:return Fb(b,"Unknown format requested type for int64")}}
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
var Hf={lj:!0};function If(a,b){b<100||Yd(ee,1)}
;function Jf(a,b,c,d){var e=d!==void 0;d=!!d;var f=ab(ce),g;!e&&Zd&&f&&(g=a[f])&&g.sf(If);f=[];var h=a.length;g=4294967295;var k=!1,l=!!(b&64),m=l?b&128?0:-1:void 0;if(!(b&1)){var n=h&&a[h-1];n!=null&&typeof n==="object"&&n.constructor===Object?(h--,g=h):n=void 0;if(l&&!(b&128)&&!e){k=!0;var r;g=((r=Kf)!=null?r:Ff)(g-m,m,a,n,void 0)+m}}b=void 0;for(r=0;r<h;r++){var t=a[r];if(t!=null&&(t=c(t,d))!=null)if(l&&r>=g){var w=r-m,y=void 0;((y=b)!=null?y:b={})[w]=t}else f[r]=t}if(n)for(var x in n)h=n[x],h!=
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
function hg(a){a=bg(a,1,void 0,void 0,gg);return a==null?Sd():a}
function ig(a,b,c){Yf(a);var d=a.D,e=d[K]|0;if(b==null)return eg(d,e,3),a;if(!Array.isArray(b))throw Xd();var f=b===me?7:b[K]|0,g=f,h=fg(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Ye(b),g=0,f=jg(f,e),k=!1);f|=5;h=4&f?512&f?512:1024&f?1024:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=Ye(b),g=0,f=jg(f,e),k=!1),b[l]=n)}f!==g&&(k&&(b=Ye(b),f=jg(f,e)),oe(b,f));eg(d,e,3,b);return a}
function kg(a,b,c,d){Yf(a);var e=a.D;eg(e,e[K]|0,b,c===""?void 0:c,d);return a}
function lg(a,b,c,d){Yf(a);a=a.D;var e=a[K]|0;if(d==null){var f=mg(a);if(ng(f,a,e,c)===b)f.set(c,0);else return}else{b===0||c.includes(b);f=mg(a);var g=ng(f,a,e,c);g!==b&&(g&&(e=eg(a,e,g)),f.set(c,b))}eg(a,e,b,d)}
function mg(a){if(Zd){var b;return(b=a[be])!=null?b:a[be]=new Map}if(be in a)return a[be];b=new Map;Object.defineProperty(a,be,{value:b});return b}
function ng(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];cg(b,g)!=null&&(e!==0&&(c=eg(b,c,e)),e=g)}a.set(d,e);return e}
function og(a,b,c,d,e){var f=!1;d=cg(a,d,e,function(g){var h=Df(g,c,b);f=h!==g&&h!=null;return h});
if(d!=null)return f&&!se(d)&&Zf(a,b),d}
function pg(a,b,c,d){var e=a.D,f=e[K]|0;b=og(e,f,b,c,d);if(b==null)return b;f=e[K]|0;if(!se(a,f)){var g=Wf(b);g!==b&&(Xf(a)&&(e=a.D,f=e[K]|0),b=g,f=eg(e,f,c,b,d),Zf(e,f))}return b}
function Mc(a,b,c){var d=void 0===ve?2:4;var e=a.D,f=e,g=e[K]|0,h=se(a,g);e=h?1:d;d=e===3;var k=!h;(e===2||k)&&Xf(a)&&(f=a.D,g=f[K]|0);a=cg(f,c);h=Array.isArray(a)?a:me;var l=h===me?7:h[K]|0;a=l;2&g&&(a|=2);var m=a|1;if(a=!(4&m)){var n=h,r=g,t=!!(2&m);t&&(r|=2);for(var w=!t,y=!0,x=0,H=0;x<n.length;x++){var G=Df(n[x],b,r);if(G instanceof b){if(!t){var V=se(G);w&&(w=!V);y&&(y=V)}n[H++]=G}}H<x&&(n.length=H);m|=4;m=y?m&-4097:m|4096;m=w?m|8:m&-9}m!==l&&(oe(h,m),2&m&&Object.freeze(h));if(k&&!(8&m||!h.length&&
(e===1||(e!==4?0:2&m||!(16&m)&&32&g)))){fg(m)&&(h=Ye(h),m=jg(m,g),g=eg(f,g,c,h));b=h;k=m;for(l=0;l<b.length;l++)n=b[l],m=Wf(n),n!==m&&(b[l]=m);k|=8;m=k=b.length?k|4096:k&-4097;oe(h,m)}b=h;k=h=m;e===1||(e!==4?0:2&h||!(16&h)&&32&g)?fg(h)||(h|=!b.length||a&&!(4096&h)||32&g&&!(4096&h||16&h)?2:256,h!==k&&oe(b,h),Object.freeze(b)):(e===2&&fg(h)&&(b=Ye(b),k=0,h=jg(h,g),g=eg(f,g,c,b)),fg(h)||(d||(h|=16),h!==k&&oe(b,h)));2&h||!(4096&h||16&h)||Zf(f,g);return b}
function qg(a,b){a!=null?Cf(a,b):a=void 0;return a}
function rg(a,b,c,d,e){d=qg(d,b);dg(a,c,d,e);d&&!se(d)&&Zf(a.D);return a}
function sg(a,b,c,d){Yf(a);var e=a.D,f=e[K]|0;if(d==null)return eg(e,f,c),a;if(!Array.isArray(d))throw Xd();for(var g=d===me?7:d[K]|0,h=g,k=fg(g),l=k||Object.isFrozen(d),m=!0,n=!0,r=0;r<d.length;r++){var t=d[r];Cf(t,b);k||(t=se(t),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g&-4097:g|4096);l&&g===h||(d=Ye(d),h=0,g=jg(g,f));g!==h&&oe(d,g);f=eg(e,f,c,d);2&g||!(4096&g||16&g)||Zf(e,f);return a}
function jg(a,b){return a=(2&b?a|2:a&-3)&-273}
function Oc(a,b,c){c=c===void 0?0:c;a=kf(bg(a,b));return a!=null?a:c}
function tg(a,b){var c=c===void 0?0:c;a=lf(bg(a,b));return a!=null?a:c}
function ug(a,b,c){c=c===void 0?$f:c;a=bg(a,b);b=typeof a;a=a==null?a:b==="bigint"?He(Ze(64,a)):gf(a)?b==="string"?pf(a):qf(a):void 0;return a!=null?a:c}
function vg(a,b,c,d){c=c===void 0?"":c;var e;return(e=Bf(bg(a,b,d)))!=null?e:c}
function wg(a){var b=b===void 0?0:b;a=bg(a,1);a=a==null?a:bf(a)?a|0:void 0;return a!=null?a:b}
function xg(a,b,c){return dg(a,b,Af(c))}
function yg(a,b,c){if(c!=null){if(!bf(c))throw Xd("enum");c|=0}return dg(a,b,c)}
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
N.prototype[he]=re;N.prototype.toString=function(){return this.D.toString()};function Yg(a,b){this.gd=a;a=ab(Qg);this.h=!!a&&b===a||!1}
function Zg(a){var b=b===void 0?Qg:b;return new Yg(a,b)}
function $g(a,b,c,d,e){b=ah(b,d);b!=null&&(c=Lg(a,c),e(b,a),Mg(a,c))}
var bh=Zg($g),ch=Zg($g),dh=Symbol(),eh=Symbol(),fh,gh;
function hh(a){var b=ih,c=jh,d=a[dh];if(d)return d;d={};d.Mi=a;d.be=Qf(a[0]);var e=a[1],f=1;e&&e.constructor===Object&&(d.extensions=e,e=a[++f],typeof e==="function"&&(d.Gf=!0,fh!=null||(fh=e),gh!=null||(gh=a[f+1]),e=a[f+=2]));for(var g={};e&&kh(e);){for(var h=0;h<e.length;h++)g[e[h]]=e;e=a[++f]}for(h=1;e!==void 0;){typeof e==="number"&&(h+=e,e=a[++f]);var k=void 0;if(e instanceof Yg)var l=e;else l=bh,f--;e=void 0;if((e=l)==null?0:e.h){e=a[++f];k=a;var m=f;typeof e==="function"&&(e=e(),k[m]=e);k=
e}e=a[++f];m=h+1;typeof e==="number"&&e<0&&(m-=e,e=a[++f]);for(;h<m;h++){var n=g[h];k?c(d,h,l,k,n):b(d,h,l,n)}}return a[dh]=d}
function kh(a){return Array.isArray(a)&&!!a.length&&typeof a[0]==="number"&&a[0]>0}
function ah(a,b){if(a instanceof N)return a.D;if(Array.isArray(a))return M(a,b[0],b[1],2)}
;function ih(a,b,c){a[b]=c.gd}
function jh(a,b,c,d){var e,f,g=c.gd;a[b]=function(h,k,l){return g(h,k,l,f||(f=hh(d).be),e||(e=lh(d)))}}
function lh(a){var b=a[eh];if(!b){var c=hh(a);b=function(d,e){return mh(d,e,c)};
a[eh]=b}return b}
function mh(a,b,c){we(a,a[K]|0,function(d,e){if(e!=null){var f=nh(c,d);f?f(b,e,d):d<500||Yd(fe,3)}});
(a=Gf(a))&&a.sf(function(d,e,f){Kg(b,b.h.end());for(d=0;d<f.length;d++)Kg(b,Vd(f[d])||new Uint8Array(0))})}
function nh(a,b){var c=a[b];if(c)return c;if(c=a.extensions)if(c=c[b]){c=Array.isArray(c)?c[0]instanceof Yg?c:[ch,c]:[c,void 0];var d=c[0].gd;if(c=c[1]){var e=lh(c),f=hh(c).be;c=a.Gf?gh(f,e):function(g,h,k){return d(g,h,k,f,e)}}else c=d;
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
v(hi,N);function ii(a){var b=new gi;b=xg(b,1,a.i);var c=ji(a);b=ig(b,c,zf);c=[];for(var d=[],e=z(a.h.keys()),f=e.next();!f.done;f=e.next())d.push(f.value.split(","));for(e=0;e<d.length;e++){f=d[e];for(var g=a.o,h=a.pd(f)||[],k=[],l=0;l<h.length;l++){var m=h[l],n=m&&m.h;m=new Vh;switch(g){case 3:n=Number(n);Number.isFinite(n)&&lg(m,1,Wh,sf(n));break;case 2:n=Number(n);if(n!=null&&typeof n!=="number")throw Error("Value of float/double field must be a number, found "+typeof n+": "+n);lg(m,2,Wh,n)}k.push(m)}g=
k;for(h=0;h<g.length;h++){k=g[h];l=new Yh;k=rg(l,Vh,2,k);l=[];m=ki(a);for(n=0;n<m.length;n++){var r=m[n],t=f[n],w=new Rh;switch(r){case 3:lg(w,1,Sh,Af(String(t)));break;case 2:r=Number(t);Number.isFinite(r)&&lg(w,2,Sh,jf(r));break;case 1:lg(w,3,Sh,ef(t==="true"))}l.push(w)}sg(k,Rh,1,l);c.push(k)}}sg(b,Yh,4,c);return b}
;function ni(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function oi(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,t=0;t<64;t+=4)r[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],y=e[2],x=e[3],H=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var G=x^w&(y^x);var V=1518500249}else G=w^y^x,V=1859775393;else t<60?(G=w&y|x&(w|y),V=2400959708):(G=w^y^x,V=3395469782);G=((n<<5|n>>>27)&4294967295)+G+H+V+r[t]&4294967295;H=x;x=y;y=(w<<30|w>>>2)&4294967295;w=n;n=G}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+x&4294967295;e[4]=e[4]+H&4294967295}
function c(n,r){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],w=0,y=n.length;w<y;++w)t.push(n.charCodeAt(w));n=t}r||(r=n.length);t=0;if(l==0)for(;t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var w=24;w>=0;w-=8)n[r++]=e[t]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ye:function(){for(var n=d(),r="",t=0;t<n.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return r}}}
;function pi(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,qi(ni(d),a,c||null)].join(" "):null}
function qi(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Tb(d,function(h){e.push(h)}),ri(e.join(" "));
var f=[],g=[];Tb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Tb(d,function(h){e.push(h)});
a=ri(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function ri(a){var b=oi();b.update(a);return b.Ye().toLowerCase()}
;function si(a){this.h=a||{cookie:""}}
p=si.prototype;p.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{hc:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.jg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.hc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=kb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{hc:0,path:b,domain:c});return d};
p.cc=function(){return ti(this).keys};
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
v(Nh,N);var vj;vj=new Lh;function wj(a){I.call(this);var b=this;this.componentId="";this.h=[];this.Wa="";this.pageId=null;this.lb=this.na=-1;this.G=this.experimentIds=null;this.B=this.o=0;this.V=null;this.aa=this.ha=0;this.Tb=1;this.timeoutMillis=0;this.za=!1;this.logSource=a.logSource;this.Eb=a.Eb||function(){};
this.j=new lj(a.logSource,a.Sa);this.network=a.network||null;this.wb=a.wb||null;this.bufferSize=1E3;this.J=a.Hg||null;this.sessionIndex=a.sessionIndex||null;this.Zb=a.Zb||!1;this.logger=null;this.withCredentials=!a.ld;this.Sa=a.Sa||!1;this.Z=!this.Sa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Va=typeof URLSearchParams!=="undefined"&&!!(new URL(xj())).searchParams&&!!(new URL(xj())).searchParams.set;var c=hj(new gj);mj(this.j,c);this.u=new sj(1E4,3E5,.1);a=yj(this,a.Ld);
this.i=new Ai(this.u.getValue(),a);this.Ga=new Ai(6E5,a);this.Zb||this.Ga.start();this.Sa||(document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){zj(b);var d;(d=b.V)==null||d.flush()}}),document.addEventListener("pagehide",function(){zj(b);
var d;(d=b.V)==null||d.flush()}))}
v(wj,I);function yj(a,b){return a.Va?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
wj.prototype.da=function(){zj(this);this.i.stop();this.Ga.stop();I.prototype.da.call(this)};
function Aj(a){a.J||(a.J=xj());try{return(new URL(a.J)).toString()}catch(b){return(new URL(a.J,window.location.origin)).toString()}}
function Bj(a,b,c){a.V&&a.V.Ia(b,c)}
wj.prototype.log=function(a){Bj(this,2,1);if(this.Va){a=a.clone();var b=this.Tb++;a=dg(a,21,sf(b));this.componentId&&xg(a,26,this.componentId);b=a;var c=bg(b,1);var d=d===void 0?!1:d;var e=typeof c;d=c==null?c:e==="bigint"?String(Ze(64,c)):gf(c)?e==="string"?nf(c):d?of(c):rf(c):void 0;d==null&&(d=Date.now(),d=Number.isFinite(d)?d.toString():"0",dg(b,1,sf(d)));d=bg(b,15);d!=null&&(typeof d==="bigint"?Ne(d)?d=Number(d):(d=Ze(64,d),d=Ne(d)?Number(d):String(d)):d=gf(d)?typeof d==="number"?rf(d):nf(d):
void 0);d==null&&dg(b,15,sf((new Date).getTimezoneOffset()*60));this.experimentIds&&(d=this.experimentIds.clone(),rg(b,zi,16,d));Bj(this,1,1);b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b,Bj(this,3,b));this.h.push(a);this.Zb||this.i.enabled||this.i.start()}};
wj.prototype.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.za&&this.Z)this.j.i=3,Cj(this);else{var d=Date.now();if(this.lb>d&&this.na<d)b&&b("throttled");else{this.network&&(typeof this.network.Ic==="function"?oj(this.j,this.network.Ic()):this.j.i=0);var e=this.h.length,f=qj(this.j,this.h,this.o,this.B,this.wb,this.ha,this.aa),g=this.Eb();if(g&&this.Wa===g)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=f.serialize();var h;this.G&&this.G.isSupported(d.length)&&
(h=this.G.compress(d));var k=Dj(this,d,g),l=function(r){c.u.reset();c.i.setInterval(c.u.getValue());if(r){var t=null;try{var w=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));t=uj(w)}catch(H){}if(t){r=Number(ug(t,1,He("-1")));r>0&&(c.na=Date.now(),c.lb=c.na+r);r=ab(ce);var y;Zd&&r&&((y=t.D[r])==null?void 0:y[175237375])!=null&&Yd(de,3);a:{var x=x===void 0?!1:x;if(ab(je)&&ab(ce)&&void 0===je){y=t.D;r=y[ce];if(!r)break a;if(r=r.mj)try{r(y,175237375,Hf);break a}catch(H){fd(H)}}x&&(x=t.D,(y=ab(ce))&&
y in x&&(x=x[y])&&delete x[175237375])}x=vj.ctor?vj.h(t,vj.ctor,175237375,vj.i):vj.h(t,175237375,null,vj.i);if(x=x===null?void 0:x)x=Oc(x,1,-1),x!==-1&&(c.u=new sj(x<1?1:x,3E5,.1),c.i.setInterval(c.u.getValue()))}}a&&a();c.B=0},m=function(r,t){var w=Mc(f,jj,3);
var y=Number(ug(f,14));tj(c.u);c.i.setInterval(c.u.getValue());r===401&&g&&(c.Wa=g);y&&(c.o+=y);t===void 0&&(t=c.isRetryable(r));t&&(c.h=w.concat(c.h),c.Zb||c.i.enabled||c.i.start());Bj(c,7,1);b&&b("net-send-failed",r);++c.B},n=function(){c.network&&c.network.send(k,l,m)};
h?h.then(function(r){Bj(c,5,e);k.Yc["Content-Encoding"]="gzip";k.Yc["Content-Type"]="application/binary";k.body=r;k.Qe=2;n()},function(){Bj(c,6,e);
n()}):n()}}}};
function Dj(a,b,c){c=c===void 0?null:c;var d=d===void 0?a.withCredentials:d;var e={},f=new URL(Aj(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,Qe:1,Yc:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function zj(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function Cj(a){Ej(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.Z=!1);return d})}
function Ej(a,b){if(a.h.length!==0){var c=new URL(Aj(a));c.searchParams.delete("format");var d=a.Eb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=qj(a.j,e,a.o,a.B,a.wb,a.ha,a.aa);if(!b(c.toString(),f)){++a.B;break}a.o=0;a.B=0;a.ha=0;a.aa=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
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
Gj.prototype.ld=function(){this.u=!0;return this};
function Lj(a){a.network||(a.network=new Fj);var b=new wj({logSource:a.logSource,Eb:a.Eb?a.Eb:xi,sessionIndex:a.sessionIndex,Hg:a.ab,Sa:a.o,Zb:!1,ld:a.u,Ld:a.Ld,network:a.network});Bc(a,b);if(a.i){var c=a.i,d=nj(b.j);xg(d,7,c)}b.G=new yi;a.componentId&&(b.componentId=a.componentId);a.wb&&(b.wb=a.wb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new zi),c=b.experimentIds,d=d.serialize(),xg(c,4,d)):b.experimentIds&&dg(b.experimentIds,4));a.j&&(b.za=b.Z);pj(b.j);a.bufferSize&&
(b.bufferSize=a.bufferSize);a.network.qc&&a.network.qc(a.logSource);a.network.ug&&a.network.ug(b);return b}
;function Mj(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;I.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new Gj(a,"0"),a.componentId=b,Bc(this,a),c!==""&&(a.ab=c),d&&(a.o=!0),e&&Hj(a,e),g&&Ij(a,g),b=Lj(a));this.h=b}
v(Mj,I);Mj.prototype.flush=function(a){var b=a||[];if(b.length){a=new hi;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=ii(e);c.push(f);e.clear()}sg(a,gi,1,c);b=this.h;if(a instanceof jj)b.log(a);else try{var g=new jj,h=a.serialize();var k=xg(g,8,h);b.log(k)}catch(l){Bj(b,4,1)}this.h.flush()}};function Nj(a){this.h=a}
;function Oj(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function ki(a){return a.fields.map(function(b){return b.fieldType})}
function ji(a){return a.fields.map(function(b){return b.fieldName})}
p=Oj.prototype;p.Ke=function(a){var b=B.apply(1,arguments),c=this.pd(b);c?c.push(new Nj(a)):this.qe(a,b)};
p.qe=function(a){var b=this.Kd(B.apply(1,arguments));this.h.set(b,[new Nj(a)])};
p.pd=function(){var a=this.Kd(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
p.uf=function(){var a=this.pd(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
p.clear=function(){this.h.clear()};
p.Kd=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Pj(a,b){Oj.call(this,a,3,b)}
v(Pj,Oj);Pj.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.uf(b);d&&(c=d.h);this.qe(c+a,b)};function Qj(a,b){Oj.call(this,a,2,b)}
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
;function Gk(a){this.Y=0;this.ib=void 0;this.Cb=this.Ya=this.parent_=null;this.Jc=this.nd=!1;if(a!=Ek)try{var b=this;a.call(void 0,function(c){Hk(b,2,c)},function(c){Hk(b,3,c)})}catch(c){Hk(this,3,c)}}
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
function Qk(a,b){if(a.Y==0)if(a.parent_){var c=a.parent_;if(c.Ya){for(var d=0,e=null,f=null,g=c.Ya;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.Y==0&&d==1?Qk(c,b):(f?(d=f,d.next==c.Cb&&(c.Cb=d),d.next=d.next.next):Rk(c),Sk(c,e,3,b)))}a.parent_=null}else Hk(a,3,b)}
function Ok(a,b){a.Ya||a.Y!=2&&a.Y!=3||Tk(a);a.Cb?a.Cb.next=b:a.Ya=b;a.Cb=b}
function Mk(a,b,c,d){var e=Kk(null,null,null);e.child=new Gk(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Pk?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;Ok(a,e);return e.child}
p.Fg=function(a){this.Y=0;Hk(this,2,a)};
p.Gg=function(a){this.Y=0;Hk(this,3,a)};
function Hk(a,b,c){if(a.Y==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.Y=1;a:{var d=c,e=a.Fg,f=a.Gg;if(d instanceof Gk){Nk(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if(typeof k==="function"){Uk(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ib=c,a.Y=b,a.parent_=null,Tk(a),b!=3||c instanceof Pk||Vk(a,c))}}
function Uk(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Tk(a){a.nd||(a.nd=!0,Bk(a.kf,a))}
function Rk(a){var b=null;a.Ya&&(b=a.Ya,a.Ya=b.next,b.next=null);a.Ya||(a.Cb=null);return b}
p.kf=function(){for(var a;a=Rk(this);)Sk(this,a,this.Y,this.ib);this.nd=!1};
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
p.Vb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Pj(a,b))};
p.jd=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Qj(a,b))};
function bl(a,b){return a.B.has(b)?void 0:a.i.get(b)}
p.Sb=function(a){this.Ie(a,1,B.apply(1,arguments))};
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
p.send=function(a,b,c,d){if(this.M)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Z+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Z=a;this.o="";this.J=!1;this.h=!0;this.M=new XMLHttpRequest;this.M.onreadystatechange=sk(Ya(this.de,this));try{this.getStatus(),this.V=!0,this.M.open(b,String(a),!0),this.V=!1}catch(g){this.getStatus();pl(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=z(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Sb(ml,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=z(c);for(d=b.next();!d.done;d=b.next())c=z(d.value),d=c.next().value,c=c.next().value,this.M.setRequestHeader(d,c);this.na&&(this.M.responseType=this.na);"withCredentials"in this.M&&this.M.withCredentials!==this.ha&&(this.M.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.Eg.bind(this),this.G)),
this.getStatus(),this.B=!0,this.M.send(a),this.B=!1}catch(g){this.getStatus(),pl(this,g)}};
p.Eg=function(){typeof La!="undefined"&&this.M&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),qk(this,"timeout"),this.abort(8))};
function pl(a,b){a.h=!1;a.M&&(a.j=!0,a.M.abort(),a.j=!1);a.o=b;ql(a);rl(a)}
function ql(a){a.J||(a.J=!0,qk(a,"complete"),qk(a,"error"))}
p.abort=function(){this.M&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.M.abort(),this.j=!1,qk(this,"complete"),qk(this,"abort"),rl(this))};
p.da=function(){this.M&&(this.h&&(this.h=!1,this.j=!0,this.M.abort(),this.j=!1),rl(this,!0));kl.Ca.da.call(this)};
p.de=function(){this.T||(this.V||this.B||this.j?sl(this):this.Uf())};
p.Uf=function(){sl(this)};
function sl(a){if(a.h&&typeof La!="undefined")if(a.B&&(a.M?a.M.readyState:0)==4)setTimeout(a.de.bind(a),0);else if(qk(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(tl(a))qk(a,"complete"),qk(a,"success");else{try{var b=(a.M?a.M.readyState:0)>2?a.M.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";ql(a)}}finally{rl(a)}}}
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
v(zl,xl);p=zl.prototype;p.fc=function(){};
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
p.fc=function(a){this.logger.fc(a)};
function Bl(a,b,c,d){a=Kj(Ij(Hj(new Gj(1828,"0"),a),new ul));b.length&&Jj(a,Qh(new Ph,b));d!==void 0&&(a.ab=d);a.ld();var e=new Mj(1828,"","",!1,"",Lj(a));Bc(e,a);var f=new Zk({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.dd()}finally{e.dispose()}})});
f.o=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function Cl(a,b){I.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
v(Cl,I);function Dl(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-wl());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=wl(),a.timer=void 0}},b)}}
function El(a,b){xl.call(this);this.metrics=a;this.qa=b}
v(El,xl);p=El.prototype;p.fc=function(a){this.metrics.yg.record(a,this.qa)};
p.Ka=function(a){this.metrics.eventCount.Ia(a,this.qa)};
p.rb=function(a,b){this.metrics.jf.record(b,a,this.qa)};
p.wa=function(a){this.metrics.errorCount.Ia(a,this.qa)};
p.Pc=function(a){this.metrics.Lg.Ia(a,this.qa)};
p.Nc=function(a){this.metrics.Re.Ia(a,this.qa)};
p.Oc=function(a){this.metrics.Kg.Ia(a,this.qa)};
function Fl(a,b){b=b===void 0?[]:b;var c={qa:a.qa||"_",od:a.od||[],td:a.td|0,ab:a.ab,Sc:a.Sc||function(){},
Rb:a.Rb||function(f,g){return Bl(f,g,c.Sc,c.ab)}},d=c.Rb("51",c.od.concat(b));
El.call(this,{yg:new Uc(d),errorCount:new Yc(d),eventCount:new Wc(d),jf:new Xc(d),wj:new Vc(d),Lg:new Zc(d),Re:new $c(d),Kg:new ad(d)},c.qa);var e=this;this.options=c;this.service=d;this.j=!a.Rb;this.h=new Cl(function(){return void e.service.dd()},c.td);
this.addOnDisposeCallback(function(){e.h.dispose();e.j&&e.service.dispose()});
b.slice().sort(ac)}
v(Fl,El);Fl.prototype.Ua=function(){Dl(this.h)};
function wl(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function Gl(a){this.D=M(a)}
v(Gl,N);function Hl(a){this.D=M(a)}
v(Hl,N);function Il(a){this.D=M(a,0,"bfkj")}
v(Il,N);var Jl=function(a){return ye(function(b){return b instanceof a&&!se(b)})}(Il);
Il.Of="bfkj";function Nc(a){this.D=M(a)}
v(Nc,N);function Kl(a){this.D=M(a)}
v(Kl,N);var Ll=Oh(Kl);function Ml(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Nl(a,b){if(a.disable)return new zl;b=b?Lc(b):[];a={qa:a.qa,od:a.mf,td:a.Pf,ab:a.ab,Sc:a.Sc,Rb:a.Rb};b=b===void 0?[]:b;return new Fl(a,b)}
function Ol(a){function b(w,y,x,H){Promise.resolve().then(function(){k.done();h.Ua();h.dispose();g.resolve({Me:w,xg:y,Yf:x,Se:H})})}
function c(w,y,x,H){if(!d.logger.T){var G="k";y?G="h":x&&(G="u");G!=="k"?H!==0&&(d.logger.Ka(G),d.logger.rb(G,w)):d.j<=0?(d.logger.Ka(G),d.logger.rb(G,w),d.j=Math.floor(Math.random()*200)):d.j--}}
I.call(this);var d=this;this.j=Math.floor(Math.random()*200);this.h=new Kl;if("challenge"in a&&Jl(a.challenge)){var e=vg(a.challenge,4,void 0,xe);var f=vg(a.challenge,5,void 0,xe);vg(a.challenge,7,void 0,xe)&&(this.h=Ll(vg(a.challenge,7,void 0,xe)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var w,y,x;return A(function(H){if(H.h==1)return H.yield(d.i,2);w=H.i;y=w.xg;(x=y)==null||x();H.h=0})});
this.logger=Nl(a.Lb||{},this.h);Bc(this,this.logger);var g=new Ml;this.i=g.promise;this.logger.Ka("t");var h=this.logger.share(),k=new vl(h,"t");if(!C[f])throw this.logger.wa(25),Error("EGOU");if(!C[f].a)throw this.logger.wa(26),Error("ELIU");try{var l=C[f].a;f=[];for(var m=[],n=Lc(this.h),r=0;r<n.length;r++)f.push(n[r]),m.push(1);var t=Pc(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2);this.o=z(l(e,b,!0,a.Ae,c,[f,m],vg(this.h,5))).next().value;this.Pb=g.promise.then(function(){})}catch(w){throw this.logger.wa(28),
w;
}}
v(Ol,I);p=Ol.prototype;p.snapshot=function(a){if(this.T)throw Error("Already disposed");this.logger.Ka("n");var b=this.logger.share();return this.i.then(function(c){var d=c.Me;return new Promise(function(e){var f=new vl(b,"n");d(function(g){f.done();b.fc(g.length);b.Ua();b.dispose();e(g)},[a.Ha,
a.cd,a.Ee,a.Ed])})})};
p.se=function(a){var b=this;if(this.T)throw Error("Already disposed");this.logger.Ka("n");var c=yl(this.logger,function(){return b.o([a.Ha,a.cd,a.Ee,a.Ed])},"n");
this.logger.fc(c.length);this.logger.Ua();return c};
p.jc=function(a){this.i.then(function(b){var c;(c=b.Yf)==null||c(a)})};
p.Dc=function(a,b){return this.i.then(function(c){var d;return(d=c.Se)==null?void 0:d(a,b,!1)})};
p.sc=function(){return this.logger.share()};function Pl(a){if(!a)return null;a=Bf(bg(a,4,void 0,ag));return a===null||a===void 0?null:qb(a)}
;function Ql(){this.promises={};this.h=null}
function Rl(){Ql.instance||(Ql.instance=new Ql);return Ql.instance}
function Sl(a,b){return Tl(a,pg(b,Gl,1,xe),pg(b,Hl,2,xe),vg(b,3,void 0,xe))}
function Tl(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return Ul(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){Ul(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function Ul(a,b){return b?Vl(b):a?Wl(a):Promise.resolve()}
function Vl(a){return new Promise(function(b,c){var d=Ui("SCRIPT"),e=Pl(a);Mb(d,e);d.onload=function(){Vi(d);b()};
d.onerror=function(){Vi(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function Wl(a){return new Promise(function(b){var c=Ui("SCRIPT");if(a){var d=Bf(bg(a,6,void 0,ag));d=d===null||d===void 0?null:Jb(d)}else d=null;c.textContent=Kb(d);Lb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);Vi(c);b()})}
;function Xl(a){this.D=M(a)}
v(Xl,N);function Yl(a,b){return kg(a,1,Af(b))}
function Zl(a,b){return kg(a,2,Af(b))}
;function $l(a){I.call(this);var b=this;this.options=a;this.B=new Ml;this.Pb=this.B.promise;this.u=new Ml;this.J=1;this.j=new Ml;this.o=[];this.Tc=a.Tc||function(){};
this.logger=new Al(Nl(a.Lb||{}));am(this,a.Oa,a.zf,a.nj,a.pj,Object.assign({},bm,a.wc||{}));this.addOnDisposeCallback(function(){return void cm(b)})}
v($l,I);p=$l.prototype;p.snapshot=function(a){var b=this;return A(function(c){switch(c.h){case 1:if(b.T)throw Error("Already disposed");if(b.h||b.G){c.A(2);break}return c.yield(b.u.promise,2);case 2:if(!b.h){c.A(4);break}return c.yield(b.h.snapshot(a),5);case 5:return c.return(c.i);case 4:throw b.G;}})};
function dm(a){var b;return A(function(c){if(a.T)throw Error("Already disposed");(b=a.i)!=null&&(b.endTimeMs=0,b.Zc(1));return c.yield(a.j.promise,0)})}
function cm(a){a.G=Error("Cancelled by dispose");a.u.resolve();Qc(a.B.promise);a.B.reject(Error("Cancelled by dispose"));a.logger.dispose();Promise.all(a.o).then(function(){var c;return A(function(d){(c=a.h)==null||c.dispose();a.h=void 0;d.h=0})});
a.o=[];var b;(b=a.i)!=null&&(b.endTimeMs=0,b.Zc(1));Qc(a.j.promise);a.j.reject(Error("Cancelled by dispose"))}
p.jc=function(a){var b,c;(b=this.h)==null||(c=b.jc)==null||c.call(b,a)};
p.Dc=function(a,b){var c,d,e;return(e=(c=this.h)==null?void 0:(d=c.Dc)==null?void 0:d.call(c,a,b))!=null?e:Promise.resolve()};
function em(a,b){var c=a.Tc;a.Tc=function(){c();b()}}
function fm(a,b){a.T||(a.h=b,a.logger.update(b.sc()),a.u.resolve(),a.B.resolve(void 0),a.Tc())}
p.handleError=function(a){if(!this.T){this.G=a;this.u.resolve();var b,c;(c=(b=this.options).Tf)==null||c.call(b,a)}};
function gm(a,b){b&&(Promise.all(a.o).then(function(){return void b.dispose()}),a.o=[])}
function hm(a,b){a.J=b;var c,d;(d=(c=a.options).hj)==null||d.call(c,b)}
function im(a){a.T||(a.j.resolve(),a.j=new Ml)}
function am(a,b,c,d,e,f){d=d===void 0?Rl():d;e=e===void 0?Promise.resolve(void 0):e;var g,h,k,l,m,n,r,t,w,y,x,H;A(function(G){switch(G.h){case 1:return G.yield(0,3);case 3:h=null;if(!g){G.A(6);break}hm(a,7);ya(G,7);return G.yield(jm(g.snapshot({}),f.Xe,function(){return Promise.resolve("E:CTO")}),9);
case 9:h=G.i;za(G,6);break;case 7:Aa(G),h="E:UCE";case 6:k=void 0,l=g?f.ef:f.ff,m=new sj(l,f.gf,f.hf,f.df),n=1;case 10:if(!(n<=f.maxAttempts)){G.A(12);break}if(n===1){G.A(13);break}hm(a,0);a.i=new km(m.getValue(),f.xe,f.ye);return G.yield(a.i.promise,14);case 14:r=G.i,a.i=void 0,r===1?(n=1,m.reset()):tj(m);case 13:ya(G,15);t=void 0;if(c){t=c;G.A(17);break}hm(a,5);w=d.h;return G.yield(jm(lm(b,w,h),f.qf,function(){return Promise.reject(Error("RGF:Fetch timed out"))}),18);
case 18:t=G.i;case 17:return hm(a,3),G.yield(jm(Sl(d,t),f.Jf,function(){return Promise.reject(Error("DTZ:Script timed out"))}),19);
case 19:return hm(a,8),G.yield(e,20);case 20:return y=new Ol({challenge:t,Lb:a.options.Lb,Ae:a.options.Ae}),G.yield(jm(y.Pb,f.wg,function(){return Promise.reject(Error("QEG:Setup timed out"))}),21);
case 21:k=y;G.A(12);break;case 15:x=Aa(G),a.handleError(x),im(a);case 11:n++;G.A(10);break;case 12:if(a.T){G.A(5);break}k&&(c=void 0,gm(a,g),g=k,fm(a,k),im(a));hm(a,2);a.i=new km(f.ke,f.xe,f.ye);return G.yield(a.i.promise,22);case 22:a.i=void 0;if(a.T){G.A(5);break}G.A(3);break;case 5:(H=g)==null||H.dispose(),G.h=0}})}
p.sc=function(){return this.logger.share()};
var bm={ke:432E5,xe:3E5,ye:10,Xe:1E4,qf:3E4,Jf:3E4,wg:6E4,ff:1E3,ef:6E4,gf:6E5,hf:.25,df:2,maxAttempts:10};function jm(a,b,c){var d,e=new Promise(function(f){d=setTimeout(f,b)});
return Promise.race([a.finally(function(){return void clearTimeout(d)}),
e.then(c)])}
function km(a,b,c){function d(){var f=e.endTimeMs-Date.now();f<=c?e.Zc(0):setTimeout(d,Math.min(f,b))}
var e=this;this.endTimeMs=Date.now()+a;this.promise=new Promise(function(f){e.Zc=f});
d()}
;function mm(a,b){try{return globalThis.sessionStorage.setItem(a,b),!0}catch(c){return!1}}
var nm,om=(nm=Math.imul)!=null?nm:function(a,b){return a*b|0};
function pm(a,b,c,d){b=b===void 0?0:b;c=c===void 0?a.length:c;var e=0;for(d&&(e=pm(d));b<c;b++)d=typeof a==="string"?a.charCodeAt(b):a[b],e=om(31,e)+d|0;return e}
function qm(a,b){return[pm(a,0,a.length>>1,b),pm(a,a.length>>1)]}
var rm=[196,200,224,18];function sm(a){var b=z(qm(a,rm));a=b.next().value;b=b.next().value;return a.toString(16)+b.toString(16)}
function tm(a,b){var c=qm(b);a=new Uint32Array(a.buffer);b=a[0];var d=z(c);c=d.next().value;d=d.next().value;for(var e=1;e<a.length;e+=2){for(var f=b,g=e,h=c,k=d,l=0;l<22;l++)g=g>>>8|g<<24,g+=f|0,g^=h+38293,f=f<<3|f>>>29,f^=g,k=k>>>8|k<<24,k+=h|0,k^=l+38293,h=h<<3|h>>>29,h^=k;f=[f,g];a[e]^=f[0];e+1<a.length&&(a[e+1]^=f[1])}}
function um(a,b,c,d,e){var f=(4-(rm.length+c.length)%4)%4,g=new Uint8Array(4+f+rm.length+4+c.length),h=new DataView(g.buffer),k=0;h.setUint32(k,Math.random()*4294967295);k=k+4+f;g.set(rm,k);k+=rm.length;h.setUint32(k,e);g.set(c,k+4);tm(g,d);return a.la(b,function(l){return void globalThis.sessionStorage.removeItem(l)})?mm(b,Fd(g))?"s":"t":"i"}
function wm(a,b){var c=globalThis.sessionStorage.getItem(a);if(!c)return["m"];try{var d=Hd(c);tm(d,b)}catch(e){return globalThis.sessionStorage.removeItem(a),["c"]}for(b=4;b<7&&d[b]===0;)b++;for(c=0;c<rm.length;c++)if(d[b++]!==rm[c])return globalThis.sessionStorage.removeItem(a),["d"];c=(new DataView(d.buffer)).getUint32(b);return Math.floor(Date.now()/1E3)>=c?(globalThis.sessionStorage.removeItem(a),["e"]):["a",new Uint8Array(d.buffer,b+4)]}
function xm(a,b,c){c=c===void 0?[]:c;this.maxItems=a;this.h=b===void 0?0:b;this.i=c}
function ym(a){var b=globalThis.sessionStorage.getItem("iU5q-!O9@$");if(!b)return new xm(a);var c=b.split(",");if(c.length<2)return globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new xm(a);b=c.slice(1);b.length===1&&b[0]===""&&(b=[]);c=Number(c[0]);return isNaN(c)||c<0||c>b.length?(globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new xm(a)):new xm(a,c,b)}
xm.prototype.serialize=function(){return String(this.h)+","+this.i.join()};
xm.prototype.la=function(a,b){var c=void 0;if(this.i[this.h]!==a){var d=this.i.indexOf(a);d!==-1?(this.i.splice(d,1),d<this.h&&this.h--,this.i.splice(this.h,0,a)):(c=this.i[this.h],this.i[this.h]=a)}this.h=(this.h+1)%this.maxItems;a=mm("iU5q-!O9@$",this.serialize());c&&a&&b(c);return a};
function Ic(a,b){this.logger=b;try{var c=globalThis.sessionStorage&&!!globalThis.sessionStorage.getItem&&!!globalThis.sessionStorage.setItem&&!!globalThis.sessionStorage.removeItem}catch(d){c=!1}c&&(this.index=ym(a))}
function zm(a,b,c,d,e){var f=a.index?yl(a.logger,function(){return um(a.index,sm(b),c,d,e)},"W"):"u";
a.logger.Oc(f)}
function Am(a,b,c){var d=z(a.index?yl(a.logger,function(){return wm(sm(b),c)},"R"):["u"]),e=d.next().value;
d=d.next().value;a.logger.Nc(e);return d}
;var Bm={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);a>0;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Cm(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Dm(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;g>=12;g-=12,h+=12)c+=Em(a,h),d+=Em(a,h+4),e+=Em(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return Bm.toString(e)}
function Dm(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Em(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function Fm(a){I.call(this);this.logger=a;this.j=new Ml}
v(Fm,I);function Gm(a,b){var c=setTimeout(function(){a.j.resolve()},b);
a.addOnDisposeCallback(function(){return void clearTimeout(c)})}
Fm.prototype.Qc=function(a,b){var c=this.gb(a);b==null||b(c);return yl(this.logger,function(){return Fd(c,2)},this.i)};
function Hm(a,b,c,d){return yl(a.logger,function(){return c?a.Qc(b,d):a.gb(b,d)},a.h)}
function Im(a,b,c,d){Fm.call(this,a);this.o=b;this.B=c;this.h="m";this.i="x";this.u=0;Gm(this,d)}
v(Im,Fm);Im.prototype.gb=function(a,b){var c=this;this.logger.Ka(this.h);++this.u>=this.B&&this.j.resolve();var d=a();a=yl(this.logger,function(){return c.o(d)},"C");
if(a===void 0)throw new F(17,"YNJ:Undefined");if(!(a instanceof Uint8Array))throw new F(18,"ODM:Invalid");b==null||b(a);return a};
function Jm(a,b,c){Fm.call(this,a);this.o=b;this.h="f";this.i="z";Gm(this,c)}
v(Jm,Fm);Jm.prototype.gb=function(){return this.o};
function Km(a,b,c){Fm.call(this,a);this.o=b;this.h="w";this.i="z";Gm(this,c)}
v(Km,Fm);Km.prototype.gb=function(){var a=this;return yl(this.logger,function(){return Hd(a.o)},"d")};
Km.prototype.Qc=function(){return this.o};
function Lm(a,b){Fm.call(this,a);this.error=b;this.h="e";this.i="y"}
v(Lm,Fm);function Mm(a,b){var c=(b(a.error.message)+":"+b(a.error.stack)).substring(0,2048);b=c.length+1;c=Nm(c);var d=new Uint8Array(4+c.length);d.set([42,b&127|128,b>>7,a.error.code]);d.set(c,4);return d}
Lm.prototype.gb=function(){if(this.o)return this.o;this.o=Mm(this,function(a){return"_"+Cm(a)});
return Mm(this,function(a){return a})};
function Om(a,b,c){Fm.call(this,a);this.o=b;this.clientState=c;this.h="S";this.i="q"}
v(Om,Fm);Om.prototype.gb=function(){var a=Math.floor(Date.now()/1E3),b=[Math.random()*255,Math.random()*255],c=b.concat([this.o&255,this.clientState],[a>>24&255,a>>16&255,a>>8&255,a&255]);a=new Uint8Array(2+c.length);a[0]=34;a[1]=c.length;a.set(c,2);c=a.subarray(2);for(var d=b=b.length;d<c.length;++d)c[d]^=c[d%b];this.logger.Pc(this.clientState);return a};
function Nm(a){return globalThis.TextEncoder?(new TextEncoder).encode(a):gd(a)}
;var Pm={rf:3E4,zg:2E4};function Qm(a){I.call(this);var b=this;this.Ob=new Ml;this.j=0;this.i=void 0;this.state=2;this.vm=a.vm;this.Oa=a.Oa;this.wc=Object.assign({},Pm,a.wc||{});this.logger=a.vm.sc();var c;this.onError=(c=a.onError)!=null?c:function(){};
this.Jd=a.Jd||!1;if(Rm(a)){var d=this.vm;this.o=function(){return dm(d).catch(function(g){g=Jc(b,new F(b.h?20:32,"TRG:Disposed",g));b.i=g;var h;(h=b.h)==null||h.dispose();b.h=void 0;b.Ob.reject(g)})};
em(d,function(){return void Sm(b)});
d.J===2&&Sm(this)}else this.o=a.gj,Sm(this);var e=this.logger.share();e.Ka("o");var f=new vl(e,"o");this.Ob.promise.then(function(){f.done();e.Ua();e.dispose()},function(){return void e.dispose()});
this.addOnDisposeCallback(function(){b.h?(b.h.dispose(),b.h=void 0):b.i?b.logger.Ua():(b.i=Jc(b,new F(32,"TNP:Disposed")),b.logger.Ua(),b.Ob.reject(b.i))});
Bc(this,this.logger)}
v(Qm,I);function Tm(a,b){if(!(b instanceof F))if(b instanceof el){var c=Error(b.toString());c.stack=b.stack;b=new F(11,"EBH:Error",c)}else b=new F(12,"BSO:Unknown",b);return Jc(a,b)}
function Sm(a){var b,c,d,e,f,g,h,k,l,m,n,r,t,w,y;return A(function(x){switch(x.h){case 1:b=void 0;a.j++;c=new Ml;a.vm instanceof $l&&a.vm.o.push(c.promise);if(!a.Jd){x.A(2);break}d=new Ml;setTimeout(function(){return void d.resolve()});
return x.yield(d.promise,2);case 2:return e=a.logger.share(),ya(x,4,5),a.state=5,f={},g=[],x.yield(jm(a.vm.snapshot({Ha:f,Ee:g}),a.wc.zg,function(){return Promise.reject(new F(15,"MDA:Timeout"))}),7);
case 7:h=x.i;if(a.T)throw new F(a.h?20:32,"MDA:Disposed");k=g[0];a.state=6;return x.yield(jm(Um(a.Oa,h),a.wc.rf,function(){return Promise.reject(new F(10,"BWB:Timeout"))}),8);
case 8:l=x.i;if(a.T)throw new F(a.h?20:32,"BWB:Disposed");a.state=7;b=yl(e,function(){var G=Vm(a,l,c,k);G.j.promise.then(function(){return void a.o()});
return G},"i");
case 5:Ba(x);e.dispose();Ca(x,6);break;case 4:m=Aa(x);(n=b)==null||n.dispose();if(!a.i){r=Tm(a,m);c.resolve();var H;if(H=a.vm instanceof $l&&a.j<2)a:if(m instanceof F)H=m.code!==32&&m.code!==20&&m.code!==10;else{if(m instanceof el)switch(m.code){case 2:case 13:case 14:case 4:break;default:H=!1;break a}H=!0}if(H)return t=(1+Math.random()*.25)*(a.h?6E4:1E3),w=setTimeout(function(){return void a.o()},t),a.addOnDisposeCallback(function(){return void clearTimeout(w)}),x.return();
a.i=r}e.wa(a.h?13:14);a.Ob.reject(a.i);return x.return();case 6:a.state=8,a.j=0,(y=a.h)==null||y.dispose(),a.h=b,a.Ob.resolve(),x.h=0}})}
function Vm(a,b,c,d){var e=tg(b,2)*1E3;if(e<=0)throw new F(31,"TTM:Invalid");if(vg(b,4))return new Km(a.logger,vg(b,4),e);if(!tg(b,3))return new Jm(a.logger,Ud(hg(b)),e);if(!d)throw new F(4,"PMD:Undefined");d=d(Ud(hg(b)));if(!(d instanceof Function))throw new F(16,"APF:Failed");a.u=Math.floor((Date.now()+e)/1E3);a=new Im(a.logger,d,tg(b,3),e);a.addOnDisposeCallback(function(){return void c.resolve()});
return a}
Qm.prototype.gb=function(a){return Wm(this,Object.assign({},a),!1)};
Qm.prototype.Qc=function(a){return Wm(this,Object.assign({},a),!0)};
function Jc(a,b){a.logger.wa(b.code);a.onError(b);return b}
function Xm(a,b){b=b instanceof F?b:new F(5,"TVD:error",b);return Jc(a,b)}
function Wm(a,b,c){try{if(a.T)throw new F(21,"BNT:disposed");if(!a.h&&a.i)throw a.i;var d,e;return(e=(d=Ym(a,b,c))!=null?d:Zm(a,b,c))!=null?e:$m(a,b,c)}catch(f){if(!b.Rf)throw Xm(a,f);return an(a,c,f)}}
function Ym(a,b,c){var d;return(d=a.h)==null?void 0:Hm(d,function(){return bn(a,b)},c,function(e){var f;
if(a.h instanceof Im&&((f=b.Ac)==null?0:f.Ag))try{var g;(g=a.cache)==null||zm(g,bn(a,b),e,b.Ac.Od,a.u-120)}catch(h){Jc(a,new F(24,"ELX:write",h))}})}
function Zm(a,b,c){var d;if((d=b.Ac)!=null&&d.Oe)try{var e,f=(e=a.cache)==null?void 0:Am(e,bn(a,b),b.Ac.Od);return f?c?yl(a.logger,function(){return Fd(f,2)},"a"):f:void 0}catch(g){Jc(a,new F(23,"RXO:read",g))}}
function $m(a,b,c){var d={stack:[],error:void 0,pb:!1};try{if(!b.Qf)throw new F(29,"SDF:notready");return Hm(hb(d,new Om(a.logger,0,a.state)),function(){return bn(a,b)},c)}catch(e){d.error=e,d.pb=!0}finally{ib(d)}}
function an(a,b,c){var d={stack:[],error:void 0,pb:!1};try{var e=Xm(a,c);return Hm(hb(d,new Lm(a.logger,e)),function(){return[]},b)}catch(f){d.error=f,d.pb=!0}finally{ib(d)}}
function bn(a,b){return b.md?b.md:b.Ha?yl(a.logger,function(){return b.md=Nm(b.Ha)},"c"):[]}
var Rm=function(a){return ye(function(b){if(!Fe(b))return!1;for(var c=z(Object.entries(a)),d=c.next();!d.done;d=c.next()){var e=z(d.value);d=e.next().value;e=e.next().value;if(!(d in b)){if(e.Xi===!0)continue;return!1}if(!e(b[d]))return!1}return!0})}({vm:function(a){return ye(function(b){return b instanceof a})}($l)},"");var cn=window;function dn(a){var b=en;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function fn(){var a=[];dn(function(b){a.push(b)});
return a}
var en={Mg:"allow-forms",Ng:"allow-modals",Og:"allow-orientation-lock",Pg:"allow-pointer-lock",Qg:"allow-popups",Rg:"allow-popups-to-escape-sandbox",Sg:"allow-presentation",Tg:"allow-same-origin",Ug:"allow-scripts",Vg:"allow-top-navigation",Wg:"allow-top-navigation-by-user-activation"},gn=Fk(function(){return fn()});
function hn(){var a=jn(),b={};Tb(gn(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function jn(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function kn(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var ln=(new Date).getTime();function mn(a){this.D=M(a)}
v(mn,N);var nn=Oh(mn);function on(a){pk.call(this);var b=this;this.B=this.j=0;this.Ea=a!=null?a:{ra:function(e,f){return setTimeout(e,f)},
sa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(pn(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||qn(this)}
v(on,pk);function rn(){var a=sn;on.instance||(on.instance=new on(a));return on.instance}
on.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ea.sa(this.B);delete on.instance};
on.prototype.va=function(){return this.h};
function qn(a){a.B=a.Ea.ra(function(){var b;return A(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.A(3):c.yield(pn(a),3):c.yield(pn(a),3);qn(a);c.h=0})},3E4)}
function pn(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.j=a.Ea.ra(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ba(h);a.u=void 0;a.j&&(a.Ea.sa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?qk(a,"networkstatus-online"):qk(a,"networkstatus-offline"));c(g);Ca(h,0);break;case 2:Aa(h),g=!1,h.A(3)}})})}
;function tn(){this.data=[];this.h=-1}
tn.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
tn.prototype.get=function(a){return!!this.data[a]};
function un(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function vn(){this.blockSize=-1}
;function wn(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.H=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
bb(wn,vn);wn.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function xn(a,b,c){c||(c=0);var d=a.H;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
wn.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)xn(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){xn(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){xn(this,e);f=0;break}}this.i=f;this.o+=b}};
wn.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;xn(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function yn(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function zn(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function An(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:yn(a).match(/\S+/g)||[],b=Sb(a,b)>=0);return b}
function Bn(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):An(a,"inverted-hdpi")&&zn(a,Array.prototype.filter.call(a.classList?a.classList:yn(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Cn(){}
Cn.prototype.next=function(){return Dn};
var Dn={done:!0,value:void 0};Cn.prototype.Ab=function(){return this};function En(a){if(a instanceof Fn||a instanceof Gn||a instanceof Hn)return a;if(typeof a.next=="function")return new Fn(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Fn(function(){return a[Symbol.iterator]()});
if(typeof a.Ab=="function")return new Fn(function(){return a.Ab()});
throw Error("Not an iterator or iterable.");}
function Fn(a){this.h=a}
Fn.prototype.Ab=function(){return new Gn(this.h())};
Fn.prototype[Symbol.iterator]=function(){return new Hn(this.h())};
Fn.prototype.i=function(){return new Hn(this.h())};
function Gn(a){this.h=a}
v(Gn,Cn);Gn.prototype.next=function(){return this.h.next()};
Gn.prototype[Symbol.iterator]=function(){return new Hn(this.h)};
Gn.prototype.i=function(){return new Hn(this.h)};
function Hn(a){Fn.call(this,function(){return a});
this.j=a}
v(Hn,Fn);Hn.prototype.next=function(){return this.j.next()};function O(a){I.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.B=!!a}
bb(O,I);p=O.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
p.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.xc(a)}return!1};
p.xc=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Yb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.zb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.B)for(f=0;f<c.length;f++)e=c[f],In(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.T;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.xc(c)}}return f!=0}return!1};
function In(a,b,c){Bk(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.xc,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.da=function(){O.Ca.da.call(this);this.clear();this.j.length=0};function Jn(a){this.h=a}
Jn.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new fl).serialize(b))};
Jn.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Jn.prototype.remove=function(a){this.h.remove(a)};function Kn(a){this.h=a}
bb(Kn,Jn);function Ln(a){this.data=a}
function Mn(a){return a===void 0||a instanceof Ln?a:new Ln(a)}
Kn.prototype.set=function(a,b){Kn.Ca.set.call(this,a,Mn(b))};
Kn.prototype.i=function(a){a=Kn.Ca.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Kn.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Nn(a){this.h=a}
bb(Nn,Kn);Nn.prototype.set=function(a,b,c){if(b=Mn(b)){if(c){if(c<$a()){Nn.prototype.remove.call(this,a);return}b.expiration=c}b.creation=$a()}Nn.Ca.set.call(this,a,b)};
Nn.prototype.i=function(a){var b=Nn.Ca.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<$a()||c&&c>$a())Nn.prototype.remove.call(this,a);else return b}};function On(){}
;function Pn(){}
bb(Pn,On);Pn.prototype[Symbol.iterator]=function(){return En(this.Ab(!0)).i()};
Pn.prototype.clear=function(){var a=Array.from(this);a=z(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Qn(a){this.h=a;this.i=null}
bb(Qn,Pn);p=Qn.prototype;p.isAvailable=function(){if(this.i===null){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;this.i=b}return this.i};
p.set=function(a,b){Rn(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){Rn(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){Rn(this);this.h.removeItem(a)};
p.Ab=function(a){Rn(this);var b=0,c=this.h,d=new Cn;d.next=function(){if(b>=c.length)return Dn;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
p.clear=function(){Rn(this);this.h.clear()};
p.key=function(a){Rn(this);return this.h.key(a)};
function Rn(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");a.isAvailable()||fd(Error("Storage mechanism: Storage unavailable"))}
;function Sn(){var a=null;try{a=C.localStorage||null}catch(b){}Qn.call(this,a)}
bb(Sn,Qn);function Tn(a,b){this.i=a;this.h=b+"::"}
bb(Tn,Pn);Tn.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Tn.prototype.get=function(a){return this.i.get(this.h+a)};
Tn.prototype.remove=function(a){this.i.remove(this.h+a)};
Tn.prototype.Ab=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Cn;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};function Un(a){if(a.bb&&typeof a.bb=="function")return a.bb();if(typeof Map!=="undefined"&&a instanceof Map||typeof Set!=="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a==="string")return a.split("");if(Oa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Gi(a)}
function Vn(a){if(a.cc&&typeof a.cc=="function")return a.cc();if(!a.bb||typeof a.bb!="function"){if(typeof Map!=="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!=="undefined"&&a instanceof Set)){if(Oa(a)||typeof a==="string"){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}}
function Wn(a,b,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(b,c);else if(Oa(a)||typeof a==="string")Array.prototype.forEach.call(a,b,c);else for(var d=Vn(a),e=Un(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}
;function Xn(a){this.i=this.B=this.j="";this.G=null;this.u=this.h="";this.o=!1;var b;a instanceof Xn?(this.o=a.o,Yn(this,a.j),this.B=a.B,this.i=a.i,Zn(this,a.G),this.h=a.h,$n(this,a.H.clone()),this.u=a.u):a&&(b=String(a).match(jc))?(this.o=!1,Yn(this,b[1]||"",!0),this.B=ao(b[2]||""),this.i=ao(b[3]||"",!0),Zn(this,b[4]),this.h=ao(b[5]||"",!0),$n(this,b[6]||"",!0),this.u=ao(b[7]||"")):(this.o=!1,this.H=new bo(null,this.o))}
Xn.prototype.toString=function(){var a=[],b=this.j;b&&a.push(co(b,eo,!0),":");var c=this.i;if(c||b=="file")a.push("//"),(b=this.B)&&a.push(co(b,eo,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.G,c!=null&&a.push(":",String(c));if(c=this.h)this.i&&c.charAt(0)!="/"&&a.push("/"),a.push(co(c,c.charAt(0)=="/"?fo:go,!0));(c=this.H.toString())&&a.push("?",c);(c=this.u)&&a.push("#",co(c,ho));return a.join("")};
Xn.prototype.resolve=function(a){var b=this.clone(),c=!!a.j;c?Yn(b,a.j):c=!!a.B;c?b.B=a.B:c=!!a.i;c?b.i=a.i:c=a.G!=null;var d=a.h;if(c)Zn(b,a.G);else if(c=!!a.h){if(d.charAt(0)!="/")if(this.i&&!this.h)d="/"+d;else{var e=b.h.lastIndexOf("/");e!=-1&&(d=b.h.slice(0,e+1)+d)}e=d;if(e==".."||e==".")d="";else if(e.indexOf("./")!=-1||e.indexOf("/.")!=-1){d=e.lastIndexOf("/",0)==0;e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];h=="."?d&&g==e.length&&f.push(""):h==".."?((f.length>1||f.length==1&&
f[0]!="")&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.h=d:c=a.H.toString()!=="";c?$n(b,a.H.clone()):c=!!a.u;c&&(b.u=a.u);return b};
Xn.prototype.clone=function(){return new Xn(this)};
function Yn(a,b,c){a.j=c?ao(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function Zn(a,b){if(b){b=Number(b);if(isNaN(b)||b<0)throw Error("Bad port number "+b);a.G=b}else a.G=null}
function $n(a,b,c){b instanceof bo?(a.H=b,io(a.H,a.o)):(c||(b=co(b,jo)),a.H=new bo(b,a.o))}
function ao(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function co(a,b,c){return typeof a==="string"?(a=encodeURI(a).replace(b,ko),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function ko(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var eo=/[#\/\?@]/g,go=/[#\?:]/g,fo=/[#\?]/g,jo=/[#\?@]/g,ho=/#/g;function bo(a,b){this.i=this.h=null;this.j=a||null;this.o=!!b}
function lo(a){a.h||(a.h=new Map,a.i=0,a.j&&qc(a.j,function(b,c){a.add(hc(b),c)}))}
p=bo.prototype;p.add=function(a,b){lo(this);this.j=null;a=mo(this,a);var c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.i=this.i+1;return this};
p.remove=function(a){lo(this);a=mo(this,a);return this.h.has(a)?(this.j=null,this.i=this.i-this.h.get(a).length,this.h.delete(a)):!1};
p.clear=function(){this.h=this.j=null;this.i=0};
function no(a,b){lo(a);b=mo(a,b);return a.h.has(b)}
p.forEach=function(a,b){lo(this);this.h.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};
p.cc=function(){lo(this);for(var a=Array.from(this.h.values()),b=Array.from(this.h.keys()),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
p.bb=function(a){lo(this);var b=[];if(typeof a==="string")no(this,a)&&(b=b.concat(this.h.get(mo(this,a))));else{a=Array.from(this.h.values());for(var c=0;c<a.length;c++)b=b.concat(a[c])}return b};
p.set=function(a,b){lo(this);this.j=null;a=mo(this,a);no(this,a)&&(this.i=this.i-this.h.get(a).length);this.h.set(a,[b]);this.i=this.i+1;return this};
p.get=function(a,b){if(!a)return b;a=this.bb(a);return a.length>0?String(a[0]):b};
p.toString=function(){if(this.j)return this.j;if(!this.h)return"";for(var a=[],b=Array.from(this.h.keys()),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.bb(d);for(var f=0;f<d.length;f++){var g=e;d[f]!==""&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.j=a.join("&")};
p.clone=function(){var a=new bo;a.j=this.j;this.h&&(a.h=new Map(this.h),a.i=this.i);return a};
function mo(a,b){b=String(b);a.o&&(b=b.toLowerCase());return b}
function io(a,b){b&&!a.o&&(lo(a),a.j=null,a.h.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),c.length>0&&(this.j=null,this.h.set(mo(this,e),Zb(c)),this.i=this.i+c.length))},a));
a.o=b}
p.extend=function(a){for(var b=0;b<arguments.length;b++)Wn(arguments[b],function(c,d){this.add(d,c)},this)};/*

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
var P={},oo=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";P.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
P.Dd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var po={Bb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Sd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},qo={Bb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Sd:function(a){return[].concat.apply([],a)}};
P.vg=function(){oo?(P.yb=Uint8Array,P.Ma=Uint16Array,P.He=Int32Array,P.assign(P,po)):(P.yb=Array,P.Ma=Array,P.He=Array,P.assign(P,qo))};
P.vg();var ro=!0;try{new Uint8Array(1)}catch(a){ro=!1}
function so(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new P.yb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var to={};to=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var uo={},vo,wo=[],xo=0;xo<256;xo++){vo=xo;for(var yo=0;yo<8;yo++)vo=vo&1?3988292384^vo>>>1:vo>>>1;wo[xo]=vo}uo=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^wo[(a^b[d])&255];return a^-1};var zo={};zo={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Ao(a){for(var b=a.length;--b>=0;)a[b]=0}
var Bo=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Co=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Do=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Eo=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Fo=Array(576);Ao(Fo);var Go=Array(60);Ao(Go);var Ho=Array(512);Ao(Ho);var Io=Array(256);Ao(Io);var Jo=Array(29);Ao(Jo);var Ko=Array(30);Ao(Ko);function Lo(a,b,c,d,e){this.te=a;this.pf=b;this.nf=c;this.af=d;this.Nf=e;this.Vd=a&&a.length}
var Mo,No,Oo;function Po(a,b){this.Rd=a;this.Kb=0;this.jb=b}
function Qo(a,b){a.ba[a.pending++]=b&255;a.ba[a.pending++]=b>>>8&255}
function Ro(a,b,c){a.ia>16-c?(a.pa|=b<<a.ia&65535,Qo(a,a.pa),a.pa=b>>16-a.ia,a.ia+=c-16):(a.pa|=b<<a.ia&65535,a.ia+=c)}
function So(a,b,c){Ro(a,c[b*2],c[b*2+1])}
function To(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Uo(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=To(d[e]++,e))}
function Vo(a){var b;for(b=0;b<286;b++)a.ta[b*2]=0;for(b=0;b<30;b++)a.nb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ta[512]=1;a.Ta=a.Qb=0;a.Aa=a.matches=0}
function Wo(a){a.ia>8?Qo(a,a.pa):a.ia>0&&(a.ba[a.pending++]=a.pa);a.pa=0;a.ia=0}
function Xo(a,b,c){Wo(a);Qo(a,c);Qo(a,~c);P.Bb(a.ba,a.window,b,c,a.pending);a.pending+=c}
function Yo(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Zo(a,b,c){for(var d=a.ea[c],e=c<<1;e<=a.Ra;){e<a.Ra&&Yo(b,a.ea[e+1],a.ea[e],a.depth)&&e++;if(Yo(b,d,a.ea[e],a.depth))break;a.ea[c]=a.ea[e];c=e;e<<=1}a.ea[c]=d}
function $o(a,b,c){var d=0;if(a.Aa!==0){do{var e=a.ba[a.Yb+d*2]<<8|a.ba[a.Yb+d*2+1];var f=a.ba[a.sd+d];d++;if(e===0)So(a,f,b);else{var g=Io[f];So(a,g+256+1,b);var h=Bo[g];h!==0&&(f-=Jo[g],Ro(a,f,h));e--;g=e<256?Ho[e]:Ho[256+(e>>>7)];So(a,g,c);h=Co[g];h!==0&&(e-=Ko[g],Ro(a,e,h))}}while(d<a.Aa)}So(a,256,b)}
function ap(a,b){var c=b.Rd,d=b.jb.te,e=b.jb.Vd,f=b.jb.af,g,h=-1;a.Ra=0;a.Gb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ea[++a.Ra]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Ra<2;){var k=a.ea[++a.Ra]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Ta--;e&&(a.Qb-=d[k*2+1])}b.Kb=h;for(g=a.Ra>>1;g>=1;g--)Zo(a,c,g);k=f;do g=a.ea[1],a.ea[1]=a.ea[a.Ra--],Zo(a,c,1),d=a.ea[1],a.ea[--a.Gb]=g,a.ea[--a.Gb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ea[1]=k++,Zo(a,c,1);while(a.Ra>=
2);a.ea[--a.Gb]=a.ea[1];g=b.Rd;k=b.Kb;d=b.jb.te;e=b.jb.Vd;f=b.jb.pf;var l=b.jb.nf,m=b.jb.Nf,n,r=0;for(n=0;n<=15;n++)a.Na[n]=0;g[a.ea[a.Gb]*2+1]=0;for(b=a.Gb+1;b<573;b++){var t=a.ea[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,r++);g[t*2+1]=n;if(!(t>k)){a.Na[n]++;var w=0;t>=l&&(w=f[t-l]);var y=g[t*2];a.Ta+=y*(n+w);e&&(a.Qb+=y*(d[t*2+1]+w))}}if(r!==0){do{for(n=m-1;a.Na[n]===0;)n--;a.Na[n]--;a.Na[n+1]+=2;a.Na[m]--;r-=2}while(r>0);for(n=m;n!==0;n--)for(t=a.Na[n];t!==0;)d=a.ea[--b],d>k||(g[d*2+1]!==n&&(a.Ta+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Uo(c,h,a.Na)}
function bp(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function cp(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do So(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(So(a,l,a.ja),g--),So(a,16,a.ja),Ro(a,g-3,2)):g<=10?(So(a,17,a.ja),Ro(a,g-3,3)):(So(a,18,a.ja),Ro(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function dp(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ta[c*2]!==0)return 0;if(a.ta[18]!==0||a.ta[20]!==0||a.ta[26]!==0)return 1;for(c=32;c<256;c++)if(a.ta[c*2]!==0)return 1;return 0}
var ep=!1;function fp(a,b,c){a.ba[a.Yb+a.Aa*2]=b>>>8&255;a.ba[a.Yb+a.Aa*2+1]=b&255;a.ba[a.sd+a.Aa]=c&255;a.Aa++;b===0?a.ta[c*2]++:(a.matches++,b--,a.ta[(Io[c]+256+1)*2]++,a.nb[(b<256?Ho[b]:Ho[256+(b>>>7)])*2]++);return a.Aa===a.ec-1}
;function gp(a,b){a.msg=zo[b];return b}
function hp(a){for(var b=a.length;--b>=0;)a[b]=0}
function ip(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(P.Bb(a.output,b.ba,b.kc,c,a.Mb),a.Mb+=c,b.kc+=c,a.Fd+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.kc=0))}
function jp(a,b){var c=a.xa>=0?a.xa:-1,d=a.v-a.xa,e=0;if(a.level>0){a.P.kd===2&&(a.P.kd=dp(a));ap(a,a.Mc);ap(a,a.Gc);bp(a,a.ta,a.Mc.Kb);bp(a,a.nb,a.Gc.Kb);ap(a,a.Nd);for(e=18;e>=3&&a.ja[Eo[e]*2+1]===0;e--);a.Ta+=3*(e+1)+5+5+4;var f=a.Ta+3+7>>>3;var g=a.Qb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Ro(a,b?1:0,3),Xo(a,c,d);else if(a.strategy===4||g===f)Ro(a,2+(b?1:0),3),$o(a,Fo,Go);else{Ro(a,4+(b?1:0),3);c=a.Mc.Kb+1;d=a.Gc.Kb+1;e+=1;Ro(a,c-257,5);Ro(a,d-1,5);Ro(a,e-4,4);for(f=0;f<e;f++)Ro(a,
a.ja[Eo[f]*2+1],3);cp(a,a.ta,c-1);cp(a,a.nb,d-1);$o(a,a.ta,a.nb)}Vo(a);b&&Wo(a);a.xa=a.v;ip(a.P)}
function R(a,b){a.ba[a.pending++]=b}
function kp(a,b){a.ba[a.pending++]=b>>>8&255;a.ba[a.pending++]=b&255}
function lp(a,b){var c=a.Zd,d=a.v,e=a.ya,f=a.ce,g=a.v>a.ma-262?a.v-(a.ma-262):0,h=a.window,k=a.kb,l=a.La,m=a.v+258,n=h[d+e-1],r=h[d+e];a.ya>=a.Ud&&(c>>=2);f>a.F&&(f=a.F);do{var t=b;if(h[t+e]===r&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Jb=b;e=t;if(t>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.F?e:a.F}
function mp(a){var b=a.ma,c;do{var d=a.Fe-a.F-a.v;if(a.v>=b+(b-262)){P.Bb(a.window,a.window,b,b,0);a.Jb-=b;a.v-=b;a.xa-=b;var e=c=a.Lc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.La[--e],a.La[e]=f>=b?f-b:0;while(--c);d+=b}if(a.P.oa===0)break;e=a.P;c=a.window;f=a.v+a.F;var g=e.oa;g>d&&(g=d);g===0?c=0:(e.oa-=g,P.Bb(c,e.input,e.ub,g,f),e.state.wrap===1?e.K=to(e.K,c,g,f):e.state.wrap===2&&(e.K=uo(e.K,c,g,f)),e.ub+=g,e.xb+=g,c=g);a.F+=c;if(a.F+a.la>=3)for(d=a.v-a.la,a.R=a.window[d],
a.R=(a.R<<a.Qa^a.window[d+1])&a.Pa;a.la&&!(a.R=(a.R<<a.Qa^a.window[d+3-1])&a.Pa,a.La[d&a.kb]=a.head[a.R],a.head[a.R]=d,d++,a.la--,a.F+a.la<3););}while(a.F<262&&a.P.oa!==0)}
function np(a,b){for(var c;;){if(a.F<262){mp(a);if(a.F<262&&b===0)return 1;if(a.F===0)break}c=0;a.F>=3&&(a.R=(a.R<<a.Qa^a.window[a.v+3-1])&a.Pa,c=a.La[a.v&a.kb]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.ma-262&&(a.U=lp(a,c));if(a.U>=3)if(c=fp(a,a.v-a.Jb,a.U-3),a.F-=a.U,a.U<=a.ud&&a.F>=3){a.U--;do a.v++,a.R=(a.R<<a.Qa^a.window[a.v+3-1])&a.Pa,a.La[a.v&a.kb]=a.head[a.R],a.head[a.R]=a.v;while(--a.U!==0);a.v++}else a.v+=a.U,a.U=0,a.R=a.window[a.v],a.R=(a.R<<a.Qa^a.window[a.v+1])&a.Pa;else c=fp(a,0,
a.window[a.v]),a.F--,a.v++;if(c&&(jp(a,!1),a.P.S===0))return 1}a.la=a.v<2?a.v:2;return b===4?(jp(a,!0),a.P.S===0?3:4):a.Aa&&(jp(a,!1),a.P.S===0)?1:2}
function op(a,b){for(var c,d;;){if(a.F<262){mp(a);if(a.F<262&&b===0)return 1;if(a.F===0)break}c=0;a.F>=3&&(a.R=(a.R<<a.Qa^a.window[a.v+3-1])&a.Pa,c=a.La[a.v&a.kb]=a.head[a.R],a.head[a.R]=a.v);a.ya=a.U;a.ge=a.Jb;a.U=2;c!==0&&a.ya<a.ud&&a.v-c<=a.ma-262&&(a.U=lp(a,c),a.U<=5&&(a.strategy===1||a.U===3&&a.v-a.Jb>4096)&&(a.U=2));if(a.ya>=3&&a.U<=a.ya){d=a.v+a.F-3;c=fp(a,a.v-1-a.ge,a.ya-3);a.F-=a.ya-1;a.ya-=2;do++a.v<=d&&(a.R=(a.R<<a.Qa^a.window[a.v+3-1])&a.Pa,a.La[a.v&a.kb]=a.head[a.R],a.head[a.R]=a.v);
while(--a.ya!==0);a.sb=0;a.U=2;a.v++;if(c&&(jp(a,!1),a.P.S===0))return 1}else if(a.sb){if((c=fp(a,0,a.window[a.v-1]))&&jp(a,!1),a.v++,a.F--,a.P.S===0)return 1}else a.sb=1,a.v++,a.F--}a.sb&&(fp(a,0,a.window[a.v-1]),a.sb=0);a.la=a.v<2?a.v:2;return b===4?(jp(a,!0),a.P.S===0?3:4):a.Aa&&(jp(a,!1),a.P.S===0)?1:2}
function pp(a,b){for(var c,d,e,f=a.window;;){if(a.F<=258){mp(a);if(a.F<=258&&b===0)return 1;if(a.F===0)break}a.U=0;if(a.F>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.U=258-(e-d);a.U>a.F&&(a.U=a.F)}a.U>=3?(c=fp(a,1,a.U-3),a.F-=a.U,a.v+=a.U,a.U=0):(c=fp(a,0,a.window[a.v]),a.F--,a.v++);if(c&&(jp(a,!1),a.P.S===0))return 1}a.la=0;return b===4?(jp(a,!0),a.P.S===0?3:4):
a.Aa&&(jp(a,!1),a.P.S===0)?1:2}
function qp(a,b){for(var c;;){if(a.F===0&&(mp(a),a.F===0)){if(b===0)return 1;break}a.U=0;c=fp(a,0,a.window[a.v]);a.F--;a.v++;if(c&&(jp(a,!1),a.P.S===0))return 1}a.la=0;return b===4?(jp(a,!0),a.P.S===0?3:4):a.Aa&&(jp(a,!1),a.P.S===0)?1:2}
function rp(a,b,c,d,e){this.xf=a;this.Mf=b;this.Sf=c;this.Lf=d;this.tf=e}
var sp;sp=[new rp(0,0,0,0,function(a,b){var c=65535;for(c>a.Ba-5&&(c=a.Ba-5);;){if(a.F<=1){mp(a);if(a.F===0&&b===0)return 1;if(a.F===0)break}a.v+=a.F;a.F=0;var d=a.xa+c;if(a.v===0||a.v>=d)if(a.F=a.v-d,a.v=d,jp(a,!1),a.P.S===0)return 1;if(a.v-a.xa>=a.ma-262&&(jp(a,!1),a.P.S===0))return 1}a.la=0;if(b===4)return jp(a,!0),a.P.S===0?3:4;a.v>a.xa&&jp(a,!1);return 1}),
new rp(4,4,8,4,np),new rp(4,5,16,8,np),new rp(4,6,32,32,np),new rp(4,4,16,16,op),new rp(8,16,32,32,op),new rp(8,16,128,128,op),new rp(8,32,128,256,op),new rp(32,128,258,1024,op),new rp(32,258,258,4096,op)];
function tp(){this.P=null;this.status=0;this.ba=null;this.wrap=this.pending=this.kc=this.Ba=0;this.I=null;this.Da=0;this.method=8;this.Ib=-1;this.kb=this.Id=this.ma=0;this.window=null;this.Fe=0;this.head=this.La=null;this.ce=this.Ud=this.strategy=this.level=this.ud=this.Zd=this.ya=this.F=this.Jb=this.v=this.sb=this.ge=this.U=this.xa=this.Qa=this.Pa=this.qd=this.Lc=this.R=0;this.ta=new P.Ma(1146);this.nb=new P.Ma(122);this.ja=new P.Ma(78);hp(this.ta);hp(this.nb);hp(this.ja);this.Nd=this.Gc=this.Mc=
null;this.Na=new P.Ma(16);this.ea=new P.Ma(573);hp(this.ea);this.Gb=this.Ra=0;this.depth=new P.Ma(573);hp(this.depth);this.ia=this.pa=this.la=this.matches=this.Qb=this.Ta=this.Yb=this.Aa=this.ec=this.sd=0}
function up(a,b){if(!a||!a.state||b>5||b<0)return a?gp(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.oa!==0||c.status===666&&b!==4)return gp(a,a.S===0?-5:-2);c.P=a;var d=c.Ib;c.Ib=b;if(c.status===42)if(c.wrap===2)a.K=0,R(c,31),R(c,139),R(c,8),c.I?(R(c,(c.I.text?1:0)+(c.I.cb?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),R(c,c.I.time&255),R(c,c.I.time>>8&255),R(c,c.I.time>>16&255),R(c,c.I.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(R(c,c.I.extra.length&255),R(c,c.I.extra.length>>8&255)),c.I.cb&&(a.K=uo(a.K,c.ba,c.pending,0)),c.Da=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.Id-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;kp(c,e+(31-e%31));c.v!==0&&(kp(c,a.K>>>16),kp(c,a.K&65535));a.K=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Da<(c.I.extra.length&65535)&&(c.pending!==c.Ba||
(c.I.cb&&c.pending>e&&(a.K=uo(a.K,c.ba,c.pending-e,e)),ip(a),e=c.pending,c.pending!==c.Ba));)R(c,c.I.extra[c.Da]&255),c.Da++;c.I.cb&&c.pending>e&&(a.K=uo(a.K,c.ba,c.pending-e,e));c.Da===c.I.extra.length&&(c.Da=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.Ba&&(c.I.cb&&c.pending>e&&(a.K=uo(a.K,c.ba,c.pending-e,e)),ip(a),e=c.pending,c.pending===c.Ba)){var f=1;break}f=c.Da<c.I.name.length?c.I.name.charCodeAt(c.Da++)&255:0;R(c,f)}while(f!==0);c.I.cb&&c.pending>
e&&(a.K=uo(a.K,c.ba,c.pending-e,e));f===0&&(c.Da=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.Ba&&(c.I.cb&&c.pending>e&&(a.K=uo(a.K,c.ba,c.pending-e,e)),ip(a),e=c.pending,c.pending===c.Ba)){f=1;break}f=c.Da<c.I.comment.length?c.I.comment.charCodeAt(c.Da++)&255:0;R(c,f)}while(f!==0);c.I.cb&&c.pending>e&&(a.K=uo(a.K,c.ba,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.cb?(c.pending+2>c.Ba&&ip(a),c.pending+2<=c.Ba&&(R(c,
a.K&255),R(c,a.K>>8&255),a.K=0,c.status=113)):c.status=113);if(c.pending!==0){if(ip(a),a.S===0)return c.Ib=-1,0}else if(a.oa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return gp(a,-5);if(c.status===666&&a.oa!==0)return gp(a,-5);if(a.oa!==0||c.F!==0||b!==0&&c.status!==666){d=c.strategy===2?qp(c,b):c.strategy===3?pp(c,b):sp[c.level].tf(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.Ib=-1),0;if(d===2&&(b===1?(Ro(c,2,3),So(c,256,Fo),c.ia===16?(Qo(c,c.pa),c.pa=0,c.ia=0):c.ia>=
8&&(c.ba[c.pending++]=c.pa&255,c.pa>>=8,c.ia-=8)):b!==5&&(Ro(c,0,3),Xo(c,0,0),b===3&&(hp(c.head),c.F===0&&(c.v=0,c.xa=0,c.la=0))),ip(a),a.S===0))return c.Ib=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.K&255),R(c,a.K>>8&255),R(c,a.K>>16&255),R(c,a.K>>24&255),R(c,a.xb&255),R(c,a.xb>>8&255),R(c,a.xb>>16&255),R(c,a.xb>>24&255)):(kp(c,a.K>>>16),kp(c,a.K&65535));ip(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var vp={};vp=function(){this.input=null;this.xb=this.oa=this.ub=0;this.output=null;this.Fd=this.S=this.Mb=0;this.msg="";this.state=null;this.kd=2;this.K=0};var wp=Object.prototype.toString;
function xp(a){if(!(this instanceof xp))return new xp(a);a=this.options=P.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.P=new vp;this.P.S=0;var b=this.P;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=gp(b,-2);else{e===8&&(e=9);var k=new tp;b.state=k;k.P=b;k.wrap=h;k.I=null;k.Id=e;k.ma=1<<k.Id;k.kb=k.ma-1;k.qd=f+7;k.Lc=1<<k.qd;k.Pa=k.Lc-1;k.Qa=~~((k.qd+3-1)/3);k.window=new P.yb(k.ma*2);k.head=new P.Ma(k.Lc);k.La=new P.Ma(k.ma);k.ec=1<<f+6;k.Ba=k.ec*4;k.ba=new P.yb(k.Ba);k.Yb=1*k.ec;k.sd=3*k.ec;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.xb=b.Fd=0;b.kd=2;c=b.state;c.pending=0;c.kc=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.K=c.wrap===2?
0:1;c.Ib=0;if(!ep){d=Array(16);for(f=g=0;f<28;f++)for(Jo[f]=g,e=0;e<1<<Bo[f];e++)Io[g++]=f;Io[g-1]=f;for(f=g=0;f<16;f++)for(Ko[f]=g,e=0;e<1<<Co[f];e++)Ho[g++]=f;for(g>>=7;f<30;f++)for(Ko[f]=g<<7,e=0;e<1<<Co[f]-7;e++)Ho[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Fo[e*2+1]=8,e++,d[8]++;for(;e<=255;)Fo[e*2+1]=9,e++,d[9]++;for(;e<=279;)Fo[e*2+1]=7,e++,d[7]++;for(;e<=287;)Fo[e*2+1]=8,e++,d[8]++;Uo(Fo,287,d);for(e=0;e<30;e++)Go[e*2+1]=5,Go[e*2]=To(e,5);Mo=new Lo(Fo,Bo,257,286,15);No=new Lo(Go,
Co,0,30,15);Oo=new Lo([],Do,0,19,7);ep=!0}c.Mc=new Po(c.ta,Mo);c.Gc=new Po(c.nb,No);c.Nd=new Po(c.ja,Oo);c.pa=0;c.ia=0;Vo(c);c=0}else c=gp(b,-2);c===0&&(b=b.state,b.Fe=2*b.ma,hp(b.head),b.ud=sp[b.level].Mf,b.Ud=sp[b.level].xf,b.ce=sp[b.level].Sf,b.Zd=sp[b.level].Lf,b.v=0,b.xa=0,b.F=0,b.la=0,b.U=b.ya=2,b.sb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(zo[b]);a.header&&(b=this.P)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=so(a.dictionary):
wp.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.P;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.F)b=-2;else{b===1&&(a.K=to(a.K,f,g,0));l.wrap=0;g>=l.ma&&(b===0&&(hp(l.head),l.v=0,l.xa=0,l.la=0),c=new P.yb(l.ma),P.Bb(c,f,g-l.ma,l.ma,0),f=c,g=l.ma);c=a.oa;d=a.ub;e=a.input;a.oa=g;a.ub=0;a.input=f;for(mp(l);l.F>=3;){f=l.v;g=l.F-2;do l.R=(l.R<<l.Qa^l.window[f+3-1])&l.Pa,l.La[f&l.kb]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.F=2;mp(l)}l.v+=l.F;l.xa=l.v;l.la=l.F;l.F=0;l.U=l.ya=2;l.sb=0;a.ub=d;a.input=e;a.oa=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(zo[b]);this.Ki=!0}}
xp.prototype.push=function(a,b){var c=this.P,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=so(a):wp.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.ub=0;c.oa=c.input.length;do{c.S===0&&(c.output=new P.yb(d),c.Mb=0,c.S=d);a=up(c,e);if(a!==1&&a!==0)return yp(this,a),this.ended=!0,!1;if(c.S===0||c.oa===0&&(e===4||e===2))if(this.options.to==="string"){var f=P.Dd(c.output,c.Mb);b=f;f=f.length;if(f<65537&&(b.subarray&&ro||!b.subarray))b=
String.fromCharCode.apply(null,P.Dd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=P.Dd(c.output,c.Mb),this.chunks.push(b)}while((c.oa>0||c.S===0)&&a!==1);if(e===4)return(c=this.P)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=gp(c,-2):(c.state=null,a=d===113?gp(c,-3):0)):a=-2,yp(this,a),this.ended=!0,a===0;e===2&&(yp(this,0),c.S=0);return!0};
function yp(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):P.Sd(a.chunks));a.chunks=[];a.err=b;a.msg=a.P.msg}
function zp(a,b){b=b||{};b.gzip=!0;b=new xp(b);b.push(a,!0);if(b.err)throw b.msg||zo[b.err];return b.result}
;function Ap(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Jb(a):null:null}
function Bp(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?qb(a):null:null}
;function Cp(a){return qb(a===null?"null":a===void 0?"undefined":a)}
;function Dp(a){this.name=a}
;var Ep=new Dp("rawColdConfigGroup");var Fp=new Dp("rawHotConfigGroup");function Gp(a){this.D=M(a)}
v(Gp,N);function Hp(a){this.D=M(a)}
v(Hp,N);Hp.prototype.setTrackingParams=function(a){return dg(this,1,ue(a,!1))};var Ip=new Dp("continuationCommand");var Jp=new Dp("webCommandMetadata");var Kp=new Dp("signalServiceEndpoint");var Lp={bh:"EMBEDDED_PLAYER_MODE_UNKNOWN",Yg:"EMBEDDED_PLAYER_MODE_DEFAULT",ah:"EMBEDDED_PLAYER_MODE_PFP",Zg:"EMBEDDED_PLAYER_MODE_PFL"};var Mp=new Dp("feedbackEndpoint");var De={li:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",Ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",ci:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",ki:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",ni:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",bi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
ri:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",oi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",fi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",xi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",wi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",ti:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",gi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",yi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",di:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",zi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
si:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",Bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",Dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",Ch:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",Gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",ii:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
ji:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",Fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",Eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",hi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Vh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
mi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED",ai:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHORTS_NON_DEFAULT_ASPECT_RATIO",Lh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PLAYER_IN_SQUEEZEBACK",Jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_CREATOR_AR_GIFT_RECEIVED",Uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RETURNED_TO_VIDEO_AFTER_FAILED_ATTEMPT_TO_BACKGROUND"};var Np=new Dp("shareEndpoint"),Op=new Dp("shareEntityEndpoint"),Pp=new Dp("shareEntityServiceEndpoint"),Qp=new Dp("webPlayerShareEntityServiceEndpoint");var Rp=new Dp("playlistEditEndpoint");var Sp=new Dp("modifyChannelNotificationPreferenceEndpoint");var Tp=new Dp("undoFeedbackEndpoint");var Up=new Dp("unsubscribeEndpoint");var Vp=new Dp("subscribeEndpoint");function Wp(){var a=Xp;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Yp(a){D("yt.ads.biscotti.lastId_",a)}
;function Zp(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var $p=C.window,aq,bq,cq=($p==null?void 0:(aq=$p.yt)==null?void 0:aq.config_)||($p==null?void 0:(bq=$p.ytcfg)==null?void 0:bq.data_)||{};D("yt.config_",cq);function dq(){Zp(cq,arguments)}
function S(a,b){return a in cq?cq[a]:b}
function eq(a){var b=cq.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var fq=[];function gq(a){fq.forEach(function(b){return b(a)})}
function hq(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){iq(b)}}:a}
function iq(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),dq("ERRORS",b));gq(a)}
function jq(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),dq("ERRORS",f))}
;var kq=/^[\w.]*$/,lq={q:!0,search_query:!0};function mq(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=nq(f[0]||""),h=nq(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?$b(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(mq);l.args=[{key:m,value:f[1],query:a,method:oq===n?"unchanged":n}];lq.hasOwnProperty(m)||jq(l)}}return c}
var oq=String(mq);function pq(a){var b=[];Fi(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Tb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function qq(a){a.charAt(0)==="?"&&(a=a.substring(1));return mq(a,"&")}
function rq(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),qq(a.length>1?a[1]:a[0])):{}}
function sq(a,b){return tq(a,b||{},!0)}
function tq(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=qq(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return tc(a,e)+d}
function uq(a){if(!b)var b=window.location.href;var c=a.match(jc)[1]||null,d=mc(a);c&&d?(a=a.match(jc),b=b.match(jc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?mc(b)===d&&(Number(b.match(jc)[4]||null)||null)===(Number(a.match(jc)[4]||null)||null):!0;return a}
function nq(a){return a&&a.match(kq)?a:hc(a)}
;function vq(a){var b=wq;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ln;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ta){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();try{var g=cn.history.length}catch(Ta){g=0}e.u_his=g;var h;e.u_h=(h=cn.screen)==null?void 0:h.height;var k;e.u_w=(k=cn.screen)==null?void 0:k.width;var l;e.u_ah=(l=cn.screen)==null?void 0:l.availHeight;var m;e.u_aw=(m=cn.screen)==null?
void 0:m.availWidth;var n;e.u_cd=(n=cn.screen)==null?void 0:n.colorDepth}catch(Ta){}var r;g=b.h;try{var t=g.screenX;var w=g.screenY}catch(Ta){}try{var y=g.outerWidth;var x=g.outerHeight}catch(Ta){}try{var H=g.innerWidth;var G=g.innerHeight}catch(Ta){}try{var V=g.screenLeft;var ja=g.screenTop}catch(Ta){}try{H=g.innerWidth,G=g.innerHeight}catch(Ta){}try{var lc=g.screen.availWidth;var Rd=g.screen.availTop}catch(Ta){}t=[V,ja,t,w,lc,Rd,y,x,H,G];try{var ka=(b.h.top||window).document,fb=ka.compatMode=="CSS1Compat"?
ka.documentElement:ka.body;var Ua=(new Ei(fb.clientWidth,fb.clientHeight)).round()}catch(Ta){Ua=new Ei(-12245933,-12245933)}ka=Ua;Ua={};var Va=Va===void 0?C:Va;fb=new tn;"SVGElement"in Va&&"createElementNS"in Va.document&&fb.set(0);w=hn();w["allow-top-navigation-by-user-activation"]&&fb.set(1);w["allow-popups-to-escape-sandbox"]&&fb.set(2);Va.crypto&&Va.crypto.subtle&&fb.set(3);"TextDecoder"in Va&&"TextEncoder"in Va&&fb.set(4);Va=un(fb);Ua.bc=Va;Ua.bih=ka.height;Ua.biw=ka.width;Ua.brdim=t.join();
b=b.i;b=b.prerendering?3:(r={visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""])!=null?r:0;r=(Ua.vis=b,Ua.wgl=!!cn.WebGLRenderingContext,Ua);c=d.call(c,e,r);c.ca_type="image";a&&(c.bid=a);return c}
var wq=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return pq(vq(a))});$a();navigator.userAgent.indexOf(" (CrKey ");var xq="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function yq(){if(!xq)return null;var a=xq();return"open"in a?a:null}
function zq(a){switch(Aq(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
function Aq(a){return a&&"status"in a?a.status:-1}
;function Bq(a,b){typeof a==="function"&&(a=hq(a));return window.setTimeout(a,b)}
;var Cq="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(qa(Cq),["client_dev_set_cookie"]);function T(a){a=Dq(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Eq(a,b){a=Dq(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Fq(){var a=Dq("html5_web_po_experiment_ids");return Array.isArray(a)?Vb(a,function(b){return Number(b||0)}):[Number(a||0)]}
function Gq(a){a=Dq(a);return a!==void 0?String(a):""}
function Dq(a){return S("EXPERIMENT_FLAGS",{})[a]}
function Hq(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=z(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=z(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Iq={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Jq="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(qa(Cq)),Kq=!1;function Lq(a,b,c,d,e,f,g,h,k){function l(){(m&&"readyState"in m?m.readyState:0)===4&&b&&hq(b)(m)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var m=yq();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;T("debug_forward_web_query_parameters")&&(a=Mq(a));m.open(c,a,!0);f&&(m.responseType=f);g&&(m.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Nq(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
k&&"onprogress"in m&&(m.onprogress=function(){k(m.responseText)});
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{m.setAttributionReporting(a)}catch(r){jq(r)}}m.send(d);return m}
function Nq(a,b){b=b===void 0?{}:b;var c=uq(a),d=S("INNERTUBE_CLIENT_NAME"),e=T("web_ajax_ignore_global_headers_if_set"),f;for(f in Iq){var g=S(Iq[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=S("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(mc(a)?!1:!0))){k=a;var l;if(l=T("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=mc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=nc(k)||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!mc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!mc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&mc(a)||(b["X-YouTube-Ad-Signals"]=pq(vq()));return b}
function Oq(a,b){b.method="POST";b.postParams||(b.postParams={});return Pq(a,b)}
function Pq(a,b){var c=b.format||"JSON";a=Qq(a,b);var d=Rq(a,b),e=!1,f=Sq(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=zq(k),m=null,n=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||n||r)m=Tq(a,c,k,b.convertToSafeHtml);l&&(l=Uq(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials,!1,b.onProgress);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Bq(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Qq(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=sq(a,b);return a}
function Rq(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||mc(a)&&!b.withCredentials&&mc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=qq(e),Qi(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):sc(e));f=e||f&&!Ji(f);!Kq&&f&&b.method!=="POST"&&(Kq=!0,iq(Error("AJAX request with postData should use POST")));return e}
function Tq(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,jq(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Vq(a):null)e={},Tb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Wq(g)})}d&&Xq(e);
return e}
function Xq(a){if(Pa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=a[b];var d=ob();c=d?d.createHTML(c):c;a[b]=new Gb(c)}else Xq(a[b])}}
function Uq(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Vq(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Wq(a){var b="";Tb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Mq(a){var b=window.location.search,c=mc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&uq(a)&&(c=document.location.hostname);var d=nc(a);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=qq(b),f={};Tb(Jq,function(g){e[g]&&(f[g]=e[g])});
return tq(a,f||{},!1)}
var Sq=Lq;var Yq=[{vd:function(a){return"Cannot read property '"+a.key+"'"},
Uc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{vd:function(a){return"Cannot call '"+a.key+"'"},
Uc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{vd:function(a){return a.key+" is not defined"},
Uc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var ar={fb:[],Za:[{callback:Zq,weight:500},{callback:$q,weight:500}]};function Zq(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("-extension://")||a.includes("webkit-masked-url://")}
function $q(a){if(!a.stack)return!0;var b=!a.stack.includes("\n");return b&&a.stack.includes("ErrorType: ")||b&&a.stack.includes("Anonymous function (Unknown script")||a.stack.toLowerCase()==="not available"||a.fileName==="user-script"||a.fileName.startsWith("user-script:")?!0:!1}
;function br(){this.Za=[];this.fb=[]}
var cr;function dr(){if(!cr){var a=cr=new br;a.fb.length=0;a.Za.length=0;er(a,ar)}return cr}
function er(a,b){b.fb&&a.fb.push.apply(a.fb,b.fb);b.Za&&a.Za.push.apply(a.Za,b.Za)}
;var fr=new O;function gr(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=hr(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=hr(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=hr(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function hr(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function ir(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=jr(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=gr(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?jr(f+".ve",g,h,k):0;d+=f;d+=jr(e,a[e],b,c);if(d>500)break}}else c[b]=kr(a),d+=c[b].length;else c[b]=kr(a),d+=c[b].length;return d}
function jr(a,b,c,d){c+="."+a;a=kr(b);d[c]=a;return c.length+a.length}
function kr(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function lr(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function mr(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function nr(){this.ue=!0}
function or(a){var b={},c=[];"USER_SESSION_ID"in cq&&c.push({key:"u",value:S("USER_SESSION_ID")});if(c=xi(c))b.Authorization=c,c=a=a==null?void 0:a.sessionIndex,c===void 0&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in cq||(b["X-Origin"]=window.location.origin),a===void 0&&"DELEGATED_SESSION_ID"in cq&&(b["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));return b}
;var pr={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function qr(a,b,c,d,e){ui.set(""+a,b,{hc:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function rr(a){return ui.get(""+a,void 0)}
function sr(a,b,c){ui.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function tr(){if(T("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!ui.isEnabled())return!1;if(ui.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?ui.set("TESTCOOKIESENABLED","1",{hc:60,jg:"none",secure:!0}):ui.set("TESTCOOKIESENABLED","1",{hc:60});if(ui.get("TESTCOOKIESENABLED")!=="1")return!1;ui.remove("TESTCOOKIESENABLED");return!0}
;var ur=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",ur);function vr(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=rr(this.h);a&&this.parse(a)}
var wr;function xr(){wr||(wr=new vr);return wr}
p=vr.prototype;p.get=function(a,b){yr(a);zr(a);a=ur[a]!==void 0?ur[a].toString():null;return a!=null?a:b?b:""};
p.set=function(a,b){yr(a);zr(a);if(b==null)throw Error("ExpectedNotNull");ur[a]=b.toString()};
function Ar(a){return!!((Br("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
p.remove=function(a){yr(a);zr(a);delete ur[a]};
p.clear=function(){for(var a in ur)delete ur[a]};
function zr(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function yr(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Br(a){a=ur[a]!==void 0?ur[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
p.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(ur[d]=c.toString())}};var Cr={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Dr={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Er(){var a=C.navigator;return a?a.connection:void 0}
function Fr(){var a=Er();if(a){var b=Cr[a.type||"unknown"]||"CONN_UNKNOWN";a=Cr[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Gr(){var a=Er();if(a!=null&&a.effectiveType)return Dr.hasOwnProperty(a.effectiveType)?Dr[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(qa(b));Object.setPrototypeOf(this,this.constructor.prototype)}
v(U,Error);function Hr(){try{return Ir(),!0}catch(a){return!1}}
function Ir(a){if(S("DATASYNC_ID")!==void 0)return S("DATASYNC_ID");throw new U("Datasync ID not set",a===void 0?"unknown":a);}
;function Jr(){}
function Kr(a,b){return sn.Xa(a,0,b)}
Jr.prototype.ra=function(a,b){return this.Xa(a,1,b)};
Jr.prototype.Ub=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Lr=Eq("web_emulated_idle_callback_delay",300),Mr=1E3/60-3,Nr=[8,5,4,3,2,1,0];
function Or(a){a=a===void 0?{}:a;I.call(this);this.i=[];this.j={};this.aa=this.h=0;this.Z=this.u=!1;this.J=[];this.V=this.ha=!1;for(var b=z(Nr),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.hd=a.timeout||1;this.G=Mr;this.B=0;this.za=this.Vf.bind(this);this.Tb=this.Dg.bind(this);this.Va=this.Le.bind(this);this.Wa=this.yf.bind(this);this.lb=this.dg.bind(this);this.Ga=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.na=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.za)}
v(Or,I);p=Or.prototype;p.Ub=function(a){var b=$a();Pr(this,a);a=$a()-b;this.u||(this.G-=a)};
p.Xa=function(a,b,c){++this.aa;if(b===10)return this.Ub(a),this.aa;var d=this.aa;this.j[d]=a;this.u&&!c?this.J.push({id:d,priority:b}):(this.i[b].push(d),this.Z||this.u||(this.h!==0&&Qr(this)!==this.B&&this.stop(),this.start()));return d};
p.sa=function(a){delete this.j[a]};
function Rr(a){a.J.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
p.isHidden=function(){return!!document.hidden||!1};
function Sr(a){return!a.isHidden()&&a.na}
function Qr(a){if(a.i[8].length){if(a.V)return 4;if(Sr(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Sr(a)?3:2:1;return 0}
p.wa=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Pr(a,b){try{b()}catch(c){a.wa(c)}}
function Tr(a){for(var b=z(Nr),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
p.yf=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;Ur(this,b);this.ha=!1};
p.Dg=function(){Ur(this)};
p.Le=function(){Vr(this)};
p.dg=function(a){this.V=!0;var b=Qr(this);b===4&&b!==this.B&&(this.stop(),this.start());Ur(this,void 0,a);this.V=!1};
p.Vf=function(){this.isHidden()||Vr(this);this.h&&(this.stop(),this.start())};
function Vr(a){a.stop();a.u=!0;for(var b=$a(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Pr(a,e)}Wr(a);a.u=!1;Tr(a)&&a.start();b=$a()-b;a.G-=b}
function Wr(a){for(var b=0,c=a.J.length;b<c;b++){var d=a.J[b];a.i[d.priority].push(d.id)}a.J.length=0}
function Ur(a,b,c){a.V&&a.B===4&&a.h||a.stop();a.u=!0;b=$a()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.wa(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Pr(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!($a()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Pr(a,c)}while(c&&$a()<b)}a.u=!1;Wr(a);a.G=Mr;Tr(a)&&a.start()}
p.start=function(){this.Z=!1;if(this.h===0)switch(this.B=Qr(this),this.B){case 1:var a=this.Wa;this.h=this.Ga?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Lr);break;case 2:this.h=window.setTimeout(this.Tb,this.hd);break;case 3:this.h=window.requestAnimationFrame(this.lb);break;case 4:this.h=window.setTimeout(this.Va,0)}};
p.pause=function(){this.stop();this.Z=!0};
p.stop=function(){if(this.h){switch(this.B){case 1:var a=this.h;this.Ga?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
p.da=function(){Rr(this);this.stop();this.na&&document.removeEventListener("visibilitychange",this.za);I.prototype.da.call(this)};var Xr=E("yt.scheduler.instance.timerIdMap_")||{},Yr=Eq("kevlar_tuner_scheduler_soft_state_timer_ms",800),Zr=0,$r=0;function as(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.T)a=new Or(S("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function bs(){cs();var a=E("ytglobal.schedulerInstanceInstance_");a&&(zc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function cs(){Rr(as());for(var a in Xr)Xr.hasOwnProperty(a)&&delete Xr[Number(a)]}
function ds(a,b,c){if(!c)return c=c===void 0,-as().Xa(a,b,c);var d=window.setTimeout(function(){var e=as().Xa(a,b);Xr[d]=e},c);
return d}
function es(a){as().Ub(a)}
function gs(a){var b=as();if(a<0)b.sa(-a);else{var c=Xr[a];c?(b.sa(c),delete Xr[a]):window.clearTimeout(a)}}
function hs(){is()}
function is(){window.clearTimeout(Zr);as().start()}
function js(){as().pause();window.clearTimeout(Zr);Zr=window.setTimeout(hs,Yr)}
function ks(){window.clearTimeout($r);$r=window.setTimeout(function(){ls(0)},Yr)}
function ls(a){ks();var b=as();b.o=a;b.start()}
function ms(a){ks();var b=as();b.o>a&&(b.o=a,b.start())}
function ns(){window.clearTimeout($r);var a=as();a.o=0;a.start()}
function ps(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",bs),D("yt.scheduler.instance.addJob",ds),D("yt.scheduler.instance.addImmediateJob",es),D("yt.scheduler.instance.cancelJob",gs),D("yt.scheduler.instance.cancelAllJobs",cs),D("yt.scheduler.instance.start",is),D("yt.scheduler.instance.pause",js),D("yt.scheduler.instance.setPriorityThreshold",ls),D("yt.scheduler.instance.enablePriorityThreshold",ms),D("yt.scheduler.instance.clearPriorityThreshold",ns),D("yt.scheduler.initialized",
!0))}
;function qs(){Jr.apply(this,arguments)}
v(qs,Jr);function rs(){qs.instance||(qs.instance=new qs);return qs.instance}
qs.prototype.Xa=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Bq(a,c||0)};
qs.prototype.sa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
qs.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
qs.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var sn=rs();T("web_scheduler_auto_init")&&ps();function ss(a){var b=new Sn;this.h=(a=b.isAvailable()?a?new Tn(b,a):b:null)?new Nn(a):null;this.i=document.domain||window.location.hostname}
ss.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new fl).serialize(b))}catch(f){return}else e=escape(b);qr(a,e,c,this.i)};
ss.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=rr(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ss.prototype.remove=function(a){this.h&&this.h.remove(a);sr(a,"/",this.i)};var ts=function(){var a;return function(){a||(a=new ss("ytidb"));return a}}();
function us(){var a;return(a=ts())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var vs=[],ws,xs=!1;function ys(){var a={};for(ws=new zs(a.handleError===void 0?As:a.handleError,a.logEvent===void 0?Bs:a.logEvent);vs.length>0;)switch(a=vs.shift(),a.type){case "ERROR":ws.wa(a.payload);break;case "EVENT":ws.logEvent(a.eventType,a.payload)}}
function Cs(a){xs||(ws?ws.wa(a):(vs.push({type:"ERROR",payload:a}),vs.length>10&&vs.shift()))}
function Ds(a,b){xs||(ws?ws.logEvent(a,b):(vs.push({type:"EVENT",eventType:a,payload:b}),vs.length>10&&vs.shift()))}
;function Es(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Fs(a){return a.substr(0,a.indexOf(":"))||a}
;var Gs=Ad||Bd;function Hs(a){var b=jd();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Is={},Js=(Is.AUTH_INVALID="No user identifier specified.",Is.EXPLICIT_ABORT="Transaction was explicitly aborted.",Is.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Is.MISSING_INDEX="Index not created.",Is.MISSING_OBJECT_STORES="Object stores not created.",Is.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Is.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Is.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Is.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Is.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Is.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Is.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Is),Ks={},Ls=(Ks.AUTH_INVALID="ERROR",Ks.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ks.EXPLICIT_ABORT="IGNORED",Ks.IDB_NOT_SUPPORTED="ERROR",Ks.MISSING_INDEX=
"WARNING",Ks.MISSING_OBJECT_STORES="ERROR",Ks.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Ks.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Ks.QUOTA_EXCEEDED="WARNING",Ks.QUOTA_MAYBE_EXCEEDED="WARNING",Ks.UNKNOWN_ABORT="WARNING",Ks.INCOMPATIBLE_DB_VERSION="WARNING",Ks),Ms={},Ns=(Ms.AUTH_INVALID=!1,Ms.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ms.EXPLICIT_ABORT=!1,Ms.IDB_NOT_SUPPORTED=!1,Ms.MISSING_INDEX=!1,Ms.MISSING_OBJECT_STORES=!1,Ms.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ms.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ms.QUOTA_EXCEEDED=!1,Ms.QUOTA_MAYBE_EXCEEDED=!0,Ms.UNKNOWN_ABORT=!0,Ms.INCOMPATIBLE_DB_VERSION=!1,Ms);function Os(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Js[a]:c;d=d===void 0?Ls[a]:d;e=e===void 0?Ns[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Os.prototype)}
v(Os,U);function Ps(a,b){Os.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Js.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ps.prototype)}
v(Ps,Os);function Qs(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Qs.prototype)}
v(Qs,Error);var Rs=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ss(a,b,c,d){b=Fs(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Os)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Os("QUOTA_EXCEEDED",a);if(Cd&&e.name==="UnknownError")return new Os("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Qs)return new Os("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Rs.some(function(f){return e.message.includes(f)}))return new Os("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Os("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",ee:e.name})];e.level="WARNING";return e}
function Ts(a,b,c){var d=us();return new Os("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Us(a){if(!a)throw Error();throw a;}
function Vs(a){return a}
function Ws(a){this.h=a}
function Xs(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=z(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=z(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Xs.all=function(a){return new Xs(new Ws(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Hb:0};f.Hb<a.length;f={Hb:f.Hb},++f.Hb)Xs.resolve(a[f.Hb]).then(function(g){return function(h){d[g.Hb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Xs.resolve=function(a){return new Xs(new Ws(function(b,c){a instanceof Xs?a.then(b,c):b(a)}))};
Xs.reject=function(a){return new Xs(new Ws(function(b,c){c(a)}))};
Xs.prototype.then=function(a,b){var c=this,d=a!=null?a:Vs,e=b!=null?b:Us;return new Xs(new Ws(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Ys(c,c,d,f,g)}),c.i.push(function(){Zs(c,c,e,f,g)})):c.state.status==="FULFILLED"?Ys(c,c,d,f,g):c.state.status==="REJECTED"&&Zs(c,c,e,f,g)}))};
Xs.prototype.catch=function(a){return this.then(void 0,a)};
function Ys(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Xs?$s(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Zs(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Xs?$s(a,b,f,d,e):d(f)}catch(g){e(g)}}
function $s(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Xs?$s(a,b,f,d,e):d(f)},function(f){e(f)})}
;function at(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function bt(a){return new Promise(function(b,c){at(a,b,c)})}
function ct(a){return new Xs(new Ws(function(b,c){at(a,b,c)}))}
;function dt(a,b){return new Xs(new Ws(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var et=window,W=et.ytcsi&&et.ytcsi.now?et.ytcsi.now:et.performance&&et.performance.timing&&et.performance.now&&et.performance.timing.navigationStart?function(){return et.performance.timing.navigationStart+et.performance.now()}:function(){return(new Date).getTime()};function ft(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
function gt(){return T("idb_immediate_commit")}
p=ft.prototype;p.add=function(a,b,c){return ht(this,[a],{mode:"readwrite",ka:!0,commit:gt()},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return ht(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return ht(this,[a],{mode:"readonly",ka:!0,commit:gt()},function(c){return c.objectStore(a).count(b)})};
function jt(a,b,c){a=a.h.createObjectStore(b,c);return new kt(a)}
p.delete=function(a,b){return ht(this,[a],{mode:"readwrite",ka:!0,commit:gt()&&!(b instanceof IDBKeyRange)},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return ht(this,[a],{mode:"readonly",ka:!0,commit:gt()},function(c){return c.objectStore(a).get(b)})};
function lt(a,b,c){return ht(a,[b],{mode:"readwrite",ka:!0,commit:gt()},function(d){d=d.objectStore(b);return ct(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function ht(a,b,c,d){var e,f,g,h,k,l,m,n,r,t,w,y;return A(function(x){switch(x.h){case 1:var H={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){x.A(4);break}g++;k=Math.round(W());ya(x,5);l=a.h.transaction(b,e.mode);H=x.yield;var G=!!e.commit;var V=new mt(l);G=nt(V,d,G);return H.call(x,G,7);case 7:return m=x.i,n=Math.round(W()),ot(a,k,n,g,void 0,b.join(),e),x.return(m);case 5:r=Aa(x);t=Math.round(W());
w=Ss(r,a.h.name,b.join(),a.h.version);if((y=w instanceof Os&&!w.h)||g>=f)ot(a,k,t,g,w,b.join(),e),h=w;x.A(2);break;case 4:return x.return(Promise.reject(h))}})}
function ot(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Os&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Ds("QUOTA_EXCEEDED",{dbName:Fs(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Os&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),Ds("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),pt(a,!1,d,f,b,g.tag),Cs(e)):pt(a,!0,d,f,b,g.tag)}
function pt(a,b,c,d,e,f){Ds("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function kt(a){this.h=a}
p=kt.prototype;p.add=function(a,b){return ct(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return ct(this.h.clear()).then(function(){})};
function qt(a,b,c){a.h.createIndex(b,c,{unique:!1})}
p.count=function(a){return ct(this.h.count(a))};
function rt(a,b){return st(a,{query:b},function(c){return c.delete().then(function(){return tt(c)})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?rt(this,a):ct(this.h.delete(a))};
p.get=function(a){return ct(this.h.get(a))};
p.index=function(a){try{return new ut(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Qs(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function st(a,b,c){a=a.h.openCursor(b.query,b.direction);return vt(a).then(function(d){return dt(d,c)})}
function mt(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Os;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function nt(a,b,c){var d=new Promise(function(e,f){try{var g=b(a);c&&a.commit();g.then(function(h){e(h)}).catch(f)}catch(h){f(h),a.abort()}});
return Promise.all([d,a.done]).then(function(e){return z(e).next().value})}
mt.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Os("EXPLICIT_ABORT");};
mt.prototype.commit=function(){if(!this.aborted){var a,b;(b=(a=this.h).commit)==null||b.call(a)}};
mt.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new kt(a),this.i.set(a,b));return b};
function ut(a){this.h=a}
p=ut.prototype;p.count=function(a){return ct(this.h.count(a))};
p.delete=function(a){return wt(this,{query:a},function(b){return b.delete().then(function(){return tt(b)})})};
p.get=function(a){return ct(this.h.get(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function wt(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return vt(a).then(function(d){return dt(d,c)})}
function xt(a,b){this.request=a;this.cursor=b}
function vt(a){return ct(a).then(function(b){return b?new xt(a,b):null})}
function tt(a){a.cursor.continue(void 0);return vt(a.request)}
xt.prototype.delete=function(){return ct(this.cursor.delete()).then(function(){})};
xt.prototype.getValue=function(){return this.cursor.value};
xt.prototype.update=function(a){return ct(this.cursor.update(a))};function zt(a,b,c){return new Promise(function(d,e){function f(){r||(r=new ft(g.result,{closed:n}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Pe,k=c.blocking,l=c.Bg,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&Ds("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Fs(a)});var w=f(),y=new mt(g.transaction);
m&&m(w,function(x){return t.oldVersion<x&&t.newVersion>=x},y);
y.done.catch(function(x){e(x)})}catch(x){e(x)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Ds("IDB_UNEXPECTEDLY_CLOSED",{dbName:Fs(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function At(a,b,c){c=c===void 0?{}:c;return zt(a,b,c)}
function Bt(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Pe)&&c.addEventListener("blocked",function(){e()}),g.yield(bt(c),4);
if(g.h!=2)return za(g,0);f=Aa(g);throw Ss(f,a,"",-1);})}
;function Ct(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
Ct.prototype.i=function(a,b,c){c=c===void 0?{}:c;return At(a,b,c)};
Ct.prototype.delete=function(a){a=a===void 0?{}:a;return Bt(this.name,a)};
function Dt(a,b){return new Os("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Et(a,b){if(!b)throw Ts("openWithToken",Fs(a.name));return a.open()}
Ct.prototype.open=function(){function a(){var f,g,h,k,l,m,n,r,t,w;return A(function(y){switch(y.h){case 1:return g=(f=Error().stack)!=null?f:"",ya(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:for(var x=h=y.i,H=c.options,G=[],V=z(Object.keys(H.Nb)),ja=V.next();!ja.done;ja=V.next()){ja=ja.value;var lc=H.Nb[ja],Rd=lc.eg===void 0?Number.MAX_VALUE:lc.eg;!(x.h.version>=lc.Wb)||x.h.version>=Rd||x.h.objectStoreNames.contains(ja)||G.push(ja)}k=G;if(k.length===0){y.A(5);break}l=Object.keys(c.options.Nb);
m=h.objectStoreNames();if(c.u<Eq("ytidb_reopen_db_retries",0))return c.u++,h.close(),Cs(new Os("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),y.return(a());if(!(c.o<Eq("ytidb_remake_db_retries",1))){y.A(6);break}c.o++;return y.yield(c.delete(),7);case 7:return Cs(new Os("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),y.return(a());case 6:throw new Ps(m,l);case 5:return y.return(h);case 2:n=Aa(y);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){y.A(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=y.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,Dt(c,t);return y.return(r);case 8:throw b(),n instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ss(n,c.name,"",(w=c.options.version)!=null?w:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Dt(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Bg:b,upgrade:this.options.upgrade};return this.h=d=a()};var Ft=new Ct("YtIdbMeta",{Nb:{databases:{Wb:1}},upgrade:function(a,b){b(1)&&jt(a,"databases",{keyPath:"actualName"})}});
function Gt(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Et(Ft,b),2);c=d.i;return d.return(ht(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return ct(f.h.put(a,void 0)).then(function(){})})}))})}
function Ht(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(Et(Ft,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function It(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(Et(Ft,b),2)):e.h!=3?(d=e.i,e.yield(ht(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return st(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return tt(g)})}),3)):e.return(c)})}
function Jt(a){return It(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Kt(a,b,c){return It(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Lt(a){var b,c;return A(function(d){if(d.h==1)return b=Ir("YtIdbMeta hasAnyMeta other"),d.yield(It(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Mt,Nt=new function(){}(new function(){});
function Ot(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=us();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Gs)f=/WebKit\/([0-9]+)/.exec(jd()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(jd()),f=!(f&&parseInt(f[1],10)>=602));if(f||wd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Gt(d,Nt),4);case 4:return e.yield(Ht("yt-idb-test-do-not-use",Nt),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Pt(){if(Mt!==void 0)return Mt;xs=!0;return Mt=Ot().then(function(a){xs=!1;var b;if((b=ts())!=null&&b.h){var c;b={hasSucceededOnce:((c=us())==null?void 0:c.hasSucceededOnce)||a};var d;(d=ts())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Qt(){return E("ytglobal.idbToken_")||void 0}
function Rt(){var a=Qt();return a?Promise.resolve(a):Pt().then(function(b){(b=b?Nt:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var St=0;function Tt(a,b){St||(St=sn.ra(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Rt(),2);case 2:c=h.i;if(!c)return h.return();d=!0;ya(h,3);return h.yield(Kt(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(Bt(f.actualName),7);case 7:return h.yield(Ht(f.actualName,c),6);case 6:za(h,4);break;case 3:g=Aa(h),Cs(g),d=!1;case 4:sn.sa(St),St=0,d&&Tt(a,b),h.h=0}})}))}
function Ut(){var a;return A(function(b){return b.h==1?b.yield(Rt(),2):(a=b.i)?b.return(Lt(a)):b.return(!1)})}
new Ml;function Vt(a){if(!Hr())throw a=new Os("AUTH_INVALID",{dbName:a}),Cs(a),a;var b=Ir();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Wt(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Rt(),2);case 2:g=m.i;if(!g)throw h=Ts("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Cs(h),h;Es(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Vt(a);ya(m,3);return m.yield(Gt(k,g),5);case 5:return m.yield(At(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Aa(m),ya(m,7),m.yield(Ht(k.actualName,
g),9);case 9:za(m,8);break;case 7:Aa(m);case 8:throw l;}})}
function Xt(a,b,c){c=c===void 0?{}:c;return Wt(a,b,!1,c)}
function Yt(a,b,c){c=c===void 0?{}:c;return Wt(a,b,!0,c)}
function Zt(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(Rt(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Es(a);d=Vt(a);return e.yield(Bt(d.actualName,b),3)}return e.yield(Ht(d.actualName,c),0)})}
function $t(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(Bt(d.actualName,b),2):e.yield(Ht(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function au(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(Rt(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Es("LogsDatabaseV2");return d.yield(Jt(b),3)}c=d.i;return d.yield($t(c,a,b),0)})}
function bu(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(Rt(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Es(a);return d.yield(Bt(a,b),3)}return d.yield(Ht(a,c),0)})}
;function cu(a,b){Ct.call(this,a,b);this.options=b;Es(a)}
v(cu,Ct);function du(a,b){var c;return function(){c||(c=new cu(a,b));return c}}
cu.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Yt:Xt)(a,b,Object.assign({},c))};
cu.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?bu:Zt)(this.name,a)};
function eu(a,b){return du(a,b)}
;var fu={},gu=eu("ytGcfConfig",{Nb:(fu.coldConfigStore={Wb:1},fu.hotConfigStore={Wb:1},fu),shared:!1,upgrade:function(a,b){b(1)&&(qt(jt(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),qt(jt(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function hu(a){return Et(gu(),a)}
function iu(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(hu(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(lt(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function ju(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(hu(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(lt(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function ku(a){var b,c;return A(function(d){return d.h==1?d.yield(hu(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(ht(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return wt(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function lu(a){var b,c;return A(function(d){return d.h==1?d.yield(hu(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(ht(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return wt(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function mu(){I.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(qa(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
v(mu,I);mu.prototype.da=function(){for(var a=z(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;I.prototype.da.call(this)};function nu(){this.h=0;this.i=new mu}
function ou(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:S("RAW_HOT_CONFIG_GROUP")}
function pu(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.A(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Qt();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(lu(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(iu(c,b,d),3);case 3:if(c)for(var h=c,k=z(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function qu(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!T("start_client_gcf"))return h.A(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Qt())?c?h.A(4):h.yield(ku(d),5):h.A(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(ju(c,b,g,d),0)})}
function ru(){if(!nu.instance){var a=new nu;nu.instance=a}a=nu.instance;var b=W()-a.h;if(!(a.h!==0&&b<Eq("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
nu.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function su(){return"INNERTUBE_API_KEY"in cq&&"INNERTUBE_API_VERSION"in cq}
function tu(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),Af:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Xd:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ui:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),Cf:S("INNERTUBE_CONTEXT_HL"),Bf:S("INNERTUBE_CONTEXT_GL"),Df:S("INNERTUBE_HOST_OVERRIDE")||"",Ef:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Vi:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function uu(a){var b={client:{hl:a.Cf,gl:a.Bf,clientName:a.Xd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Af}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Hq();c.length>0&&(b.request={internalExperimentFlags:c});c=a.Xd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=mr()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Fr())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&
(a=Gr())&&b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=ru())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=S("INNERTUBE_CONTEXT");var g;if(T("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=z(Object.entries(qq(S("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=z(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function vu(a,b,c){c=c===void 0?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Li:(nr.instance||(nr.instance=new nr),a=or(),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var wu=typeof TextEncoder!=="undefined"?new TextEncoder:null,xu=wu?function(a){return wu.encode(a)}:function(a){a=gd(a);
for(var b=new Uint8Array(a.length),c=0;c<b.length;c++)b[c]=a[c];return b};var yu={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},zu={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function Au(a,b){this.version=a;this.args=b}
Au.prototype.serialize=function(){return{version:this.version,args:this.args}};function Bu(a,b){this.topic=a;this.h=b}
Bu.prototype.toString=function(){return this.topic};var Cu=E("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.xc;O.prototype.publish=O.prototype.zb;O.prototype.clear=O.prototype.clear;D("ytPubsub2Pubsub2Instance",Cu);var Du=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",Du);var Eu=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",Eu);var Fu=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",Fu);
D("ytPubsub2Pubsub2SkipSubKey",null);function Gu(a,b){var c=Hu();c&&c.publish.call(c,a.toString(),a,b)}
function Iu(a){var b=Ju,c=Hu();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Du[d])try{if(f&&b instanceof Bu&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Be){var l=new h;h.Be=l.version}var m=h.Be}catch(n){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Zb(k.args))}catch(n){throw n.message="yt.pubsub2.Data.deserialize(): "+n.message,n;}}catch(n){throw n.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+n.message,n;}a.call(window,f)}catch(n){iq(n)}},Fu[b.toString()]?E("yt.scheduler.instance")?sn.ra(g):Bq(g,0):g())});
Du[d]=!0;Eu[b.toString()]||(Eu[b.toString()]=[]);Eu[b.toString()].push(d);return d}
function Ku(){var a=Lu,b=Iu(function(c){a.apply(void 0,arguments);Mu(b)});
return b}
function Mu(a){var b=Hu();b&&(typeof a==="number"&&(a=[a]),Tb(a,function(c){b.unsubscribeByKey(c);delete Du[c]}))}
function Hu(){return E("ytPubsub2Pubsub2Instance")}
;function Nu(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Gu("meta_logging_csi_event",{timerName:a,uj:b})}
;var Ou=void 0,Pu=void 0;function Qu(){Pu||(Pu=Bp(S("WORKER_SERIALIZATION_URL")));return Pu||void 0}
function Ru(){var a=Qu();Ou||a===void 0||(Ou=new Worker(rb(a),void 0));return Ou}
;var Su=Eq("max_body_size_to_compress",5E5),Tu=Eq("min_body_size_to_compress",500),Uu=!0,Vu=0,Wu=0,Xu=Eq("compression_performance_threshold_lr",250),Yu=Eq("slow_compressions_before_abandon_count",4),Zu=!1,$u=new Map,av=1,bv=!0;function cv(){if(typeof Worker==="function"&&Qu()&&!Zu){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=$u.get(c.key);d&&(dv(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),$u.delete(c.key))}},b=Ru();
b&&(b.addEventListener("message",a),b.onerror=function(){$u.clear()},Zu=!0)}}
function ev(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(Uu)try{var g=fv(b);if(g!=null&&(g>Su||g<Tu))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!bv||!T("initial_gzip_use_main_thread"))){Zu||cv();var h=Ru();if(h&&!e){$u.set(av,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:av});av++;return}}var k=zp(xu(b));dv(k,f,a,c,d)}}catch(l){jq(l),d(a,c)}else d(a,c)}
function dv(a,b,c,d,e){bv=!1;var f=W();b.ticks.gelc=f;Wu++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Xu&&(Vu++,T("abandon_compression_after_N_slow_zips")?Wu===Eq("compression_disable_point")&&Vu>Yu&&(Uu=!1):Uu=!1);gv(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function hv(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Uu&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=fv(g);if(h!=null&&(h>Su||h<Tu))return a;c=b?{level:1}:void 0;f=zp(xu(g),c);var k=W();e.ticks.gelc=k;if(b){Wu++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Xu)if(Vu++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=Vu/Wu;var l=Yu/Eq("compression_disable_point");Wu>0&&Wu%Eq("compression_disable_point")===0&&b>=l&&(Uu=!1)}else Uu=!1;gv(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return jq(m),a}}else return a}
function fv(a){try{return(new Blob(a.split(""))).size}catch(b){return jq(b),null}}
function gv(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||Nu("gel_compression",a,{sampleRate:.1})}
;function iv(a){a=Object.assign({},a);delete a.Authorization;var b=xi();if(b){var c=new wn;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Fd(c.digest(),3)}return a}
;var jv;function kv(){jv||(jv=new ss("yt.innertube"));return jv}
function lv(a,b,c,d){if(d)return null;d=kv().get("nextId",!0)||1;var e=kv().get("requests",!0)||{};e[d]={method:a,request:b,authState:iv(c),requestTime:Math.round(W())};kv().set("nextId",d+1,86400,!0);kv().set("requests",e,86400,!0);return d}
function mv(a){var b=kv().get("requests",!0)||{};delete b[a];kv().set("requests",b,86400,!0)}
function nv(a){var b=kv().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(W())-d.requestTime<6E4)){var e=d.authState,f=iv(vu(!1));Mi(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),ov(a,d.method,e,{}));delete b[c]}}kv().set("requests",b,86400,!0)}}
;function pv(a){this.zc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Fb=function(){};
this.now=Date.now;this.ac=!1;var b;this.we=(b=a.we)!=null?b:100;var c;this.pe=(c=a.pe)!=null?c:1;var d;this.ne=(d=a.ne)!=null?d:2592E6;var e;this.he=(e=a.he)!=null?e:12E4;var f;this.oe=(f=a.oe)!=null?f:5E3;var g;this.W=(g=a.W)!=null?g:void 0;this.Hc=!!a.Hc;var h;this.Ec=(h=a.Ec)!=null?h:.1;var k;this.Wc=(k=a.Wc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.Fb&&(this.Fb=a.Fb);a.ac&&(this.ac=a.ac);a.zc&&(this.zc=a.zc);this.X=a.X;this.Ea=a.Ea;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Ad=a.Ad;this.xd=a.xd;qv(this)&&(!this.X||this.X("networkless_logging"))&&rv(this)}
function rv(a){qv(a)&&!a.ac&&(a.h=!0,a.Hc&&Math.random()<=a.Ec&&a.ga.Te(a.W),sv(a),a.fa.va()&&a.vc(),a.fa.listen(a.Ad,a.vc.bind(a)),a.fa.listen(a.xd,a.Pd.bind(a)))}
p=pv.prototype;p.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(qv(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.W).then(function(e){d.id=e;c.fa.va()&&tv(c,d)}).catch(function(e){tv(c,d);
uv(c,e)})}else this.sendFn(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(qv(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.X&&this.X("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.va()||this.X&&this.X("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.W).catch(function(l){uv(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.W).catch(function(g){d.sendFn(a,b,e.skipRetry);
uv(d,g)})}else this.sendFn(a,b,this.X&&this.X("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(qv(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.Db(d.id,c.W):e=!0;c.fa.tb&&c.X&&c.X("vss_network_hint")&&c.fa.tb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.W).then(function(g){d.id=g;e&&c.ga.Db(d.id,c.W)}).catch(function(g){uv(c,g)})}else this.sendFn(a,b,void 0,!0)};
p.vc=function(){var a=this;if(!qv(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ea.ra(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.ga.Td("NEW",a.W),2);if(c.h!=3)return b=c.i,b?c.yield(tv(a,b),3):(a.Pd(),c.return());a.i&&(a.i=0,a.vc());c.h=0})},this.we))};
p.Pd=function(){this.Ea.sa(this.i);this.i=0};
function tv(a,b){var c;return A(function(d){switch(d.h){case 1:if(!qv(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.A(2);break}return d.yield(a.ga.Kf(b.id,a.W),3);case 3:(c=d.i)||a.Fb(Error("The request cannot be found in the database."));case 2:if(vv(a,b,a.ne)){d.A(4);break}a.Fb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.A(5);break}return d.yield(a.ga.Db(b.id,a.W),5);case 5:return d.return();case 4:b.skipRetry||(b=wv(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||b.id===void 0){d.A(8);break}return d.yield(a.ga.Db(b.id,a.W),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function wv(a,b){if(!qv(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=xv(f);(h=Cv(f))&&a.X&&a.X("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.X&&a.X("nwl_consider_error_code")&&g||a.X&&!a.X("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Wc)){m.A(2);break}if(!a.fa.bd){m.A(3);break}return m.yield(a.fa.bd(),3);case 3:if(a.fa.va()){m.A(2);break}c(e,f);if(!a.X||!a.X("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.A(6);
break}return m.yield(a.ga.Bd(b.id,a.W,!1),6);case 6:return m.return();case 2:if(a.X&&a.X("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Wc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.A(8);break}return b.sendCount<a.pe?m.yield(a.ga.Bd(b.id,a.W,!0,h?!1:void 0),12):m.yield(a.ga.Db(b.id,a.W),8);case 12:a.Ea.ra(function(){a.fa.va()&&a.vc()},a.oe);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.A(2):h.yield(a.ga.Db(b.id,a.W),2);a.fa.tb&&a.X&&a.X("vss_network_hint")&&a.fa.tb(!0);d(e,f);h.h=0})};
return b}
function vv(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function sv(a){if(!qv(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.Td("QUEUED",a.W).then(function(b){b&&!vv(a,b,a.he)?a.Ea.ra(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.A(2):c.yield(a.ga.Bd(b.id,a.W),2);sv(a);c.h=0})}):a.fa.va()&&a.vc()})}
function uv(a,b){a.Ge&&!a.fa.va()?a.Ge(b):a.handleError(b)}
function qv(a){return!!a.W||a.zc}
function xv(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Cv(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Dv;
function Ev(){if(Dv)return Dv();var a={};Dv=eu("LogsDatabaseV2",{Nb:(a.LogsRequestsStore={Wb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&jt(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),qt(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Dv()}
;function Fv(a){return Et(Ev(),a)}
function Gv(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Fv(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(lt(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();Hv(c);return g.return(f)})}
function Iv(a,b){var c,d,e,f,g,h,k,l,m;return A(function(n){if(n.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},n.yield(Fv(b),2);if(n.h!=3)return d=n.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,m=a==="NEW"?"readwrite":"readonly",T("use_readonly_for_get_most_recent_by_status_killswitch")&&(m="readwrite"),n.yield(ht(d,["LogsRequestsStore"],{mode:m,ka:!0},
function(r){return wt(r.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},function(t){t.getValue()&&(l=t.getValue(),a==="NEW"&&(l.status="QUEUED",t.update(l)))})}),3);
c.ticks.tc=W();Hv(c);return n.return(l)})}
function Jv(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Fv(b),2);c=d.i;return d.return(ht(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",ct(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Kv(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(Fv(b),2);e=f.i;return f.return(ht(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),ct(h.h.put(k,void 0)).then(function(){return k})):Xs.resolve(void 0)})}))})}
function Lv(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Fv(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Mv(a){var b,c;return A(function(d){if(d.h==1)return d.yield(Fv(a),2);b=d.i;c=W()-2592E6;return d.yield(ht(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return st(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return tt(f)})})}),0)})}
function Nv(){A(function(a){return a.yield(au(),0)})}
function Hv(a){T("nwl_csi_killswitch")||Nu("networkless_performance",a,{sampleRate:1})}
;var Ov={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
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
adsSeenClientLogging:517,producerEvent:518,tvhtml5CleanStart:519,deviceAccountMetricsEvent:520,derpLogEvent:521,playablesPortalEvent:523,ipValidationStarted:524,ipValidationReceived:525,reelsSequenceMutationEvent:527};var Pv={},Qv=eu("ServiceWorkerLogsDatabase",{Nb:(Pv.SWHealthLog={Wb:1},Pv),shared:!0,upgrade:function(a,b){b(1)&&qt(jt(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Rv(a){return Et(Qv(),a)}
function Sv(a){var b,c;A(function(d){if(d.h==1)return d.yield(Rv(a),2);b=d.i;c=W()-2592E6;return d.yield(ht(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return st(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return tt(f)})})}),0)})}
function Tv(a){var b;return A(function(c){if(c.h==1)return c.yield(Rv(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Uv={},Vv=0;function Wv(a){var b=b===void 0?{}:b;var c=new Image,d=""+Vv++;Uv[d]=c;c.onload=c.onerror=function(){delete Uv[d]};
b.oj&&(c.referrerPolicy="no-referrer");c.src=a}
;var Xv;function Yv(){Xv||(Xv=new ss("yt.offline"));return Xv}
function Zv(a){if(T("offline_error_handling")){var b=Yv().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Yv().set("errors",b,2592E3,!0)}}
;function $v(){this.h=new Map;this.i=!1}
function aw(){if(!$v.instance){var a=E("yt.networkRequestMonitor.instance")||new $v;D("yt.networkRequestMonitor.instance",a);$v.instance=a}return $v.instance}
$v.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
$v.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
$v.prototype.removeParams=function(a){return a.split("?")[0]};
$v.prototype.removeParams=$v.prototype.removeParams;$v.prototype.isEndpointCFR=$v.prototype.isEndpointCFR;$v.prototype.requestComplete=$v.prototype.requestComplete;$v.getInstance=aw;function bw(){pk.call(this);var a=this;this.j=!1;this.h=rn();this.h.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=Yv().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;iq(d)}Yv().set("errors",{},2592E3,!0)}}})}
v(bw,pk);function cw(){if(!bw.instance){var a=E("yt.networkStatusManager.instance")||new bw;D("yt.networkStatusManager.instance",a);bw.instance=a}return bw.instance}
p=bw.prototype;p.va=function(){return this.h.va()};
p.tb=function(a){this.h.h=a};
p.wf=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
p.bf=function(){this.j=!0};
p.listen=function(a,b){return this.h.listen(a,b)};
p.bd=function(a){a=pn(this.h,a);a.then(function(b){T("use_cfr_monitor")&&aw().requestComplete("generate_204",b)});
return a};
bw.prototype.sendNetworkCheckRequest=bw.prototype.bd;bw.prototype.listen=bw.prototype.listen;bw.prototype.enableErrorFlushing=bw.prototype.bf;bw.prototype.getWindowStatus=bw.prototype.wf;bw.prototype.networkStatusHint=bw.prototype.tb;bw.prototype.isNetworkAvailable=bw.prototype.va;bw.getInstance=cw;function dw(a){a=a===void 0?{}:a;pk.call(this);var b=this;this.h=this.u=0;this.j=cw();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){ew(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ew(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){qk(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){qk(b,"publicytnetworkstatus-offline")})))}
v(dw,pk);dw.prototype.va=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
dw.prototype.tb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
dw.prototype.bd=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&aw().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.tb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.va())})):c?d.return(c(a)):d.return(!0)})};
function ew(a,b){a.rateLimit?a.h?(sn.sa(a.u),a.u=sn.ra(function(){a.o!==b&&(qk(a,b),a.o=b,a.h=W())},a.rateLimit-(W()-a.h))):(qk(a,b),a.o=b,a.h=W()):qk(a,b)}
;var fw;function gw(){var a=pv.call;fw||(fw=new dw({bj:!0,Ri:!0}));a.call(pv,this,{ga:{Te:Mv,Db:Lv,Td:Iv,Kf:Jv,Bd:Kv,set:Gv},fa:fw,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;b=new U(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code);jq(b,void 0,void 0,void 0,!0)}else iq(b)},
Fb:jq,sendFn:hw,now:W,Ge:Zv,Ea:rs(),Ad:"publicytnetworkstatus-online",xd:"publicytnetworkstatus-offline",Hc:!0,Ec:.1,Wc:Eq("potential_esf_error_limit",10),X:T,ac:!(Hr()&&iw())});this.j=new Ml;T("networkless_immediately_drop_all_requests")&&Nv();bu("LogsDatabaseV2")}
v(gw,pv);function jw(){var a=E("yt.networklessRequestController.instance");a||(a=new gw,D("yt.networklessRequestController.instance",a),T("networkless_logging")&&Rt().then(function(b){a.W=b;rv(a);a.j.resolve();a.Hc&&Math.random()<=a.Ec&&a.W&&Sv(a.W);T("networkless_immediately_drop_sw_health_store")&&kw(a)}));
return a}
gw.prototype.writeThenSend=function(a,b){b||(b={});b=lw(a,b);Hr()||(this.h=!1);pv.prototype.writeThenSend.call(this,a,b)};
gw.prototype.sendThenWrite=function(a,b,c){b||(b={});b=lw(a,b);Hr()||(this.h=!1);pv.prototype.sendThenWrite.call(this,a,b,c)};
gw.prototype.sendAndWrite=function(a,b){b||(b={});b=lw(a,b);Hr()||(this.h=!1);pv.prototype.sendAndWrite.call(this,a,b)};
gw.prototype.awaitInitialization=function(){return this.j.promise};
function kw(a){var b;A(function(c){if(!a.W)throw b=Ts("clearSWHealthLogsDb"),b;return c.return(Tv(a.W).catch(function(d){a.handleError(d)}))})}
function hw(a,b,c,d){d=d===void 0?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&mw(a,b);if(T("use_request_time_ms_header"))b.headers&&uq(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Lq(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Lq(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{c:{var k=new eb({url:a});if(k.h.dsh==="1")var l=null;else{var m=k.h.ae;if(m==="1"){var n=k.h.adurl;if(n)try{l={version:3,Ze:decodeURIComponent(n),Ne:cb(k.i,"act=1","ri=1",gb(k))};break c}catch(ja){}}l=m==="2"?{version:4,Ze:cb(k.i,"dct=1","suid="+k.j,""),Ne:cb(k.i,"act=1","ri=1","suid="+k.j)}:null}}if(l){var r=nc(a),t;if(!(t=!r||!r.endsWith("/aclk"))){var w=a.search(vc),y=uc(a,0,"ri",w);if(y<0)var x=null;else{var H=a.indexOf("&",y);if(H<0||
H>w)H=w;x=hc(a.slice(y+3,H!==-1?H:0))}t=x!=="1"}var G=!t;break b}}catch(ja){}G=!1}if(G){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var V=!0;break b}}catch(ja){}V=!1}c=V?!0:!1}else c=!1;c||Wv(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),ev(a,b.postBody,b,Pq,d)):ev(a,JSON.stringify(b.postParams),b,Oq,d):Pq(a,b)}
function lw(a,b){T("use_event_time_ms_header")&&uq(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function mw(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){aw().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){aw().requestComplete(a,!0);d(e,f)}}
function iw(){return mc(document.location.toString())!=="www.youtube-nocookie.com"}
;var nw=!1,ow=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:nw};D("ytNetworklessLoggingInitializationOptions",ow);function pw(){var a;A(function(b){if(b.h==1)return b.yield(Rt(),2);a=b.i;if(!a||!Hr()&&!T("nwl_init_require_datasync_id_killswitch")||!iw())return b.A(0);nw=!0;ow.isNwlInitialized=nw;return b.yield(jw().awaitInitialization(),0)})}
;function qw(a){var b=this;this.config_=null;a?this.config_=a:su()&&(this.config_=tu());Kr(function(){nv(b)},5E3)}
qw.prototype.isReady=function(){!this.config_&&su()&&(this.config_=tu());return!!this.config_};
function ov(a,b,c,d){function e(n){n=n===void 0?!1:n;var r;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||T("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(r=lv(b,c,l,k)),r)){var t=g.onSuccess,w=g.onFetchSuccess;g.onSuccess=function(H,G){mv(r);t(H,G)};
c.onFetchSuccess=function(H,G){mv(r);w(H,G)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?jw().writeThenSend(m,g):jw().sendAndWrite(m,g);
else if(d.compress){var y=!d.networklessOptions.writeThenSend;if(g.postBody){var x=g.postBody;typeof x!=="string"&&(x=JSON.stringify(g.postBody));ev(m,x,g,Pq,y)}else ev(m,JSON.stringify(g.postParams),g,Oq,y)}else T("web_all_payloads_via_jspb")?Pq(m,g):Oq(m,g)}catch(H){if(H.name==="InvalidAccessError")r&&(mv(r),r=0),jq(Error("An extension is blocking network request."));else throw H;}r&&Kr(function(){nv(a)},5E3)}
!S("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&jq(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);iq(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onProgress:function(n){if(d.onProgress)d.onProgress(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Df)&&(h=f);var k=a.config_.Ef||!1,l=vu(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=sq(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(E("ytNetworklessLoggingInitializationOptions")?ow.isNwlInitialized:nw)?Pt().then(function(n){e(n)}):e(!1)}
;var rw=0,sw=yd?"webkit":xd?"moz":vd?"ms":ud?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++rw});var tw={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function uw(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in tw||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function vw(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
uw.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
uw.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
uw.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ii=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Ii);var ww=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",ww);
function xw(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Hi(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&Mi(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function yw(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=xw(a,b,c,d);if(e)return e;e=++ww.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new uw(h);if(!Wi(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new uw(h);
h.currentTarget=a;return c.call(a,h)};
g=hq(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),zw()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Ii[e]=[a,b,c,g,d];return e}
function Aw(a){a&&(typeof a=="string"&&(a=[a]),Tb(a,function(b){if(b in Ii){var c=Ii[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?zw()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ii[b]}}))}
var zw=Fk(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Bw(a){this.G=a;this.h=null;this.o=0;this.B=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.V=yw(window,"mousemove",Ya(this.Z,this));a=Ya(this.J,this);typeof a==="function"&&(a=hq(a));this.aa=window.setInterval(a,25)}
bb(Bw,I);Bw.prototype.Z=function(a){a.h===void 0&&vw(a);var b=a.h;a.i===void 0&&vw(a);this.h=new Di(b,a.i)};
Bw.prototype.J=function(){if(this.h){var a=W();if(this.o!=0){var b=this.B,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.B=this.h;this.j=(this.j+1)%4}};
Bw.prototype.da=function(){window.clearInterval(this.aa);Aw(this.V)};var Cw={};
function Dw(a){var b=a===void 0?{}:a;a=b.ag===void 0?!1:b.ag;b=b.cf===void 0?!0:b.cf;if(E("_lact",window)==null){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&Ew();yw(document,"keydown",Ew);yw(document,"keyup",Ew);yw(document,"mousedown",Ew);yw(document,"mouseup",Ew);a?yw(window,"touchmove",function(){Fw("touchmove",200)},{passive:!0}):(yw(window,"resize",function(){Fw("resize",200)}),b&&yw(window,"scroll",function(){Fw("scroll",200)}));
new Bw(function(){Fw("mouse",100)});
yw(document,"touchstart",Ew,{passive:!0});yw(document,"touchend",Ew,{passive:!0})}}
function Fw(a,b){Cw[a]||(Cw[a]=!0,sn.ra(function(){Ew();Cw[a]=!1},b))}
function Ew(){E("_lact",window)==null&&Dw();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function Gw(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Hw=C.ytPubsubPubsubInstance||new O,Iw=C.ytPubsubPubsubSubscribedKeys||{},Jw=C.ytPubsubPubsubTopicToKeys||{},Kw=C.ytPubsubPubsubIsSynchronous||{};function Lw(a,b){var c=Mw();if(c&&b){var d=c.subscribe(a,function(){function e(){Iw[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Kw[a]?e():Bq(e,0)}catch(g){iq(g)}},void 0);
Iw[d]=!0;Jw[a]||(Jw[a]=[]);Jw[a].push(d);return d}return 0}
function Nw(a){var b=Mw();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Tb(a,function(c){b.unsubscribeByKey(c);delete Iw[c]}))}
function Ow(a,b){var c=Mw();c&&c.publish.apply(c,arguments)}
function Pw(a){var b=Mw();if(b)if(b.clear(a),a)Qw(a);else for(var c in Jw)Qw(c)}
function Mw(){return C.ytPubsubPubsubInstance}
function Qw(a){Jw[a]&&(a=Jw[a],Tb(a,function(b){Iw[b]&&delete Iw[b]}),a.length=0)}
O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.xc;O.prototype.publish=O.prototype.zb;O.prototype.clear=O.prototype.clear;D("ytPubsubPubsubInstance",Hw);D("ytPubsubPubsubTopicToKeys",Jw);D("ytPubsubPubsubIsSynchronous",Kw);D("ytPubsubPubsubSubscribedKeys",Iw);var Rw=Symbol("injectionDeps");function Sw(a){this.name=a}
Sw.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Tw(a){this.key=a}
function Uw(a){return new Tw(a)}
function Vw(){this.i=new Map;this.j=new Map;this.h=new Map}
function Ww(a,b){a.i.set(b.lc,b);var c=a.j.get(b.lc);if(c)try{c.Zc(a.resolve(b.lc))}catch(d){c.kj(d)}}
Vw.prototype.resolve=function(a){return a instanceof Tw?Xw(this,a.key,[],!0):Xw(this,a,[])};
function Xw(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.ze!==void 0)var e=d.ze;else if(d.Jg)e=d[Rw]?Yw(a,d[Rw],c):[],e=d.Jg.apply(d,qa(e));else if(d.Gd){e=d.Gd;var f=e[Rw]?Yw(a,e[Rw],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(qa(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.sj||a.h.set(b,e);return e}
function Yw(a,b,c){return b?b.map(function(d){return d instanceof Tw?Xw(a,d.key,c,!0):Xw(a,d,c)}):[]}
;var Zw;function $w(){Zw||(Zw=new Vw);return Zw}
;var ax=window;function bx(){var a,b;return"h5vcc"in ax&&((a=ax.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=ax.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in ax&&ax.performance.mark&&ax.performance.measure?2:0}
function cx(a){var b=bx();switch(b){case 1:ax.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:ax.performance.mark(a+"-start");break;case 0:break;default:Fb(b,"unknown trace type")}}
function dx(a){var b=bx();switch(b){case 1:ax.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";ax.performance.mark(c);ax.performance.measure(a,b,c);break;case 0:break;default:Fb(b,"unknown trace type")}}
;var ex=T("web_enable_lifecycle_monitoring")&&bx()!==0,fx=T("web_enable_lifecycle_monitoring");function gx(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function hx(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?rs():d;this.j=c;this.scheduler=d;this.i=new Ml;this.h=a;for(a={qb:0};a.qb<this.h.length;a={Vc:void 0,qb:a.qb},a.qb++)a.Vc=this.h[a.qb],c=function(e){return function(){e.Vc.rd();b.h[e.qb].Xc=!0;b.h.every(function(f){return f.Xc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.Vc),d=this.scheduler.Xa(c,d),this.h[a.qb]=Object.assign({},a.Vc,{rd:c,
jobId:d})}
function ix(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=z(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.Xc||(a.scheduler.sa(c.jobId),a.scheduler.Xa(c.rd,10))}
hx.prototype.cancel=function(){for(var a=z(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.Xc||this.scheduler.sa(b.jobId),b.Xc=!0;this.i.resolve()};
hx.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function jx(a){this.state=a;this.plugins=[];this.o=void 0;this.B={};ex&&cx(this.state)}
p=jx.prototype;p.install=function(a){this.plugins.push(a);return this};
p.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
p.transition=function(a,b){var c=this;ex&&dx(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(ix(this.j),this.j=void 0);kx(this,a,b);this.state=a;ex&&cx(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(lx(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function lx(a,b){var c=b.filter(function(e){return mx(a,e)===10}),d=b.filter(function(e){return mx(a,e)!==10});
return a.B.rj?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.hg.apply(a,[c].concat(qa(e))),2);a.re.apply(a,[d].concat(qa(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.ig.apply(a,[c].concat(qa(e)));a.re.apply(a,[d].concat(qa(e)))}}
p.ig=function(a){for(var b=B.apply(1,arguments),c=rs(),d=z(a),e=d.next(),f={};!e.done;f={dc:void 0},e=d.next())f.dc=e.value,c.Ub(function(g){return function(){nx(g.dc.name);ox(function(){return g.dc.callback.apply(g.dc,qa(b))});
px(g.dc.name)}}(f))};
p.hg=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=rs(),d=z(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.A(0);f.eb=e.value;f.yc=void 0;g=function(k){return function(){nx(k.eb.name);var l=ox(function(){return k.eb.callback.apply(k.eb,qa(b))});
Ee(l)?k.yc=T("web_lifecycle_error_handling_killswitch")?l.then(function(){px(k.eb.name)}):l.then(function(){px(k.eb.name)},function(m){gx(m);
px(k.eb.name)}):px(k.eb.name)}}(f);
c.Ub(g);return f.yc?h.yield(f.yc,3):h.A(3)}f={eb:void 0,yc:void 0};e=d.next();return h.A(2)})};
p.re=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{rd:function(){nx(e.name);ox(function(){return e.callback.apply(e,qa(b))});
px(e.name)},
priority:mx(c,e)}});
d.length&&(this.j=new hx(d))};
function mx(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function nx(a){ex&&a&&cx(a)}
function px(a){ex&&a&&dx(a)}
function kx(a,b,c){fx&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(jx.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function ox(a){if(T("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){gx(b)}}
;function qx(a){jx.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var rx;v(qx,jx);qx.prototype.i=function(a,b){var c=this;this.h=Kr(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
qx.prototype.u=function(a,b){this.h&&(sn.sa(this.h),this.h=null);a(b==null?void 0:b.event)};
function sx(){rx||(rx=new qx);return rx}
;var tx=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return tx});function ux(){this.store={};this.h={}}
ux.prototype.storePayload=function(a,b){a=vx(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);T("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
ux.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=wx(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,qa(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,qa(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,qa(this.smartExtractMatchingEntries(a))));return c};
ux.prototype.extractMatchingEntries=function(a){a=wx(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,qa(this.store[a[c]])),delete this.store[a[c]]);return b};
ux.prototype.getSequenceCount=function(a){a=wx(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function wx(a,b){var c=vx(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&vx(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(xx(b.auth,g[0])){var h=b.isJspb;xx(h===void 0?"undefined":h?"true":"false",g[1])&&xx(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),xx(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function xx(a,b){return a===void 0||a==="undefined"?!0:a===b}
ux.prototype.getSequenceCount=ux.prototype.getSequenceCount;ux.prototype.extractMatchingEntries=ux.prototype.extractMatchingEntries;ux.prototype.smartExtractMatchingEntries=ux.prototype.smartExtractMatchingEntries;ux.prototype.storePayload=ux.prototype.storePayload;function vx(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function yx(a,b){if(a)return a[b.name]}
;var zx=Eq("initial_gel_batch_timeout",2E3),Ax=Eq("gel_queue_timeout_max_ms",6E4),Bx=Eq("gel_min_batch_size",5),Cx=void 0;function Dx(){this.o=this.h=this.i=0;this.j=!1}
var Ex=new Dx,Fx=new Dx,Gx=new Dx,Hx=new Dx,Ix,Jx=!0,Kx=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Kx);var Lx={};function Mx(){var a=E("yt.logging.ims");a||(a=new ux,D("yt.logging.ims",a));return a}
function Nx(a,b){if(a.endpoint==="log_event"){Ox(a);var c=Px(a),d=Qx(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=Ov[d||""];var f,g,h,k=$w().resolve(Uw(nu))==null?void 0:(f=ou())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!T("web_payload_policy_disabled_killswitch"))return;k=Rx(e.tier);if(k===400){Sx(a,b);return}}Lx[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};Mx().storePayload(c,a.payload);Tx(b,c,d==="gelDebuggingEvent")}}
function Tx(a,b,c){function d(){Ux({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(Cx=new a);a=Eq("tvhtml5_logging_max_batch_ads_fork")||Eq("tvhtml5_logging_max_batch")||Eq("web_logging_max_batch")||100;var f=W(),g=Vx(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=Mx().getSequenceCount(b));c>=1E3?d():c>=a?Ix||(Ix=Wx(function(){d();Ix=void 0},0)):f-h>=10&&(Xx(e,b.tier),g.o=f)}
function Sx(a,b){if(a.endpoint==="log_event"){T("more_accurate_gel_parser")&&Mx().storePayload({isJspb:!1},a.payload);Ox(a);var c=Px(a),d=new Map;d.set(c,[a.payload]);var e=Qx(a.payload)||"";b&&(Cx=new b);return new Gk(function(f,g){Cx&&Cx.isReady()?Yx(d,Cx,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Px(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Kx[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Ux(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new Gk(function(e,f){var g=Vx(c,d),h=g.j;g.j=!1;Zx(g.i);Zx(g.h);g.h=0;Cx&&Cx.isReady()?d===void 0&&T("enable_web_tiered_gel")?$x(e,f,a,b,c,300,h):$x(e,f,a,b,c,d,h):(Xx(c,d),e())})}
function $x(a,b,c,d,e,f,g){var h=Cx;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=T("enable_web_tiered_gel")?Mx().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Mx().extractMatchingEntries(e),k.set(d,f);else for(d=z(Object.keys(Lx)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?Mx().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Mx().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Lx[l];Yx(k,h,a,b,c,!1,g)}
function Xx(a,b){function c(){Ux({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Vx(a,b),e=d===Hx||d===Gx?5E3:Ax;T("web_gel_timeout_cap")&&!d.h&&(e=Wx(function(){c()},e),d.h=e);
Zx(d.i);e=S("LOGGING_BATCH_TIMEOUT",Eq("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&Jx&&(e=zx);e=Wx(function(){Eq("gel_min_batch_size")>0?Mx().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Bx&&c():c()},e);
d.i=e}
function Yx(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(W()),k=a.size,l=(g===void 0?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=z(a);var m=a.next();for(g={};!m.done;g={wd:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,zd:void 0,yd:void 0},m=a.next()){var n=z(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Oi({context:uu(b.config_||tu())});if(!Oa(n)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Kx[m])&&
ay(g.batchRequest,m,n);delete Kx[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";by(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.zd=function(r){T("start_client_gcf")&&sn.ra(function(){return A(function(t){return t.yield(cy(r),0)})});
k--;k||c()};
g.wd=0;g.yd=function(r){return function(){r.wd++;if(e.bypassNetworkless&&r.wd===1)try{ov(b,l,r.batchRequest,dy({writeThenSend:!0},r.dangerousLogToVisitorSession,r.zd,r.yd,f)),Jx=!1}catch(t){iq(t),d()}k--;k||c()}}(g);
try{ov(b,l,g.batchRequest,dy(e,g.dangerousLogToVisitorSession,g.zd,g.yd,f)),Jx=!1}catch(r){iq(r),d()}}}
function dy(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Ni:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};ey()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function by(a,b,c){ey()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),dq("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ay(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Ox(a){var b=Gq("il_payload_scraping")==="enable_il_payload_scraping";if(!E("yt.logging.transport.enableScrapingForTest"))if(b)tx=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",tx),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),D("yt.logging.transport.scrapeClientEvent",
!0);else return;b=E("yt.logging.transport.scrapedPayloadsForTesting");var c=E("yt.logging.transport.payloadToScrape"),d=E("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}D("yt.logging.transport.scrapedPayloadsForTesting",b)}
function ey(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Wx(a,b){return T("transport_use_scheduler")===!1?Bq(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?Kr(function(){if(sx().currentState==="none")a();else{var c={};sx().install((c.none={callback:a},c))}},b):Kr(a,b)}
function Zx(a){T("transport_use_scheduler")?sn.sa(a):window.clearTimeout(a)}
function cy(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=yx(d,Fp),g=(f=d)==null?void 0:f.hotHashData,h=yx(d,Ep),l=(k=d)==null?void 0:k.coldHashData,(m=$w().resolve(Uw(nu)))?g?e?n.yield(pu(m,g,e),2):n.yield(pu(m,g),2):n.A(2):n.return()):l?h?n.yield(qu(m,l,h),0):n.yield(qu(m,l),0):n.A(0)})}
function Vx(a,b){b=b===void 0?200:b;return a?b===300?Hx:Fx:b===300?Gx:Ex}
function Qx(a){a=Object.keys(a);a=z(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Ov[b])return b}
function Rx(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var fy=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",fy);
function gy(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Gw();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,fy[b]=b in fy?fy[b]+1:0,a.sequence={index:fy[b],groupKey:b},d.endOfSequence&&delete fy[d.sequenceGroup]);T("web_tag_automated_log_events")&&(e.context.automatedLogEventSource=d.automatedLogEventSource);(d.sendIsolatedPayload?
Sx:Nx)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
;function Bs(a,b,c){c=c===void 0?{}:c;var d=qw;S("ytLoggingEventsDefaultDisabled",!1)&&qw===qw&&(d=null);gy(a,b,d,c)}
;var hy=new Set,iy=0,jy=0,ky=0,ly=[],my=[],ny=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function oy(){Tb(S("ERRORS")||[],function(a){py.apply(null,a)});
dq("ERRORS",[])}
function As(a){py(a)}
function qy(a){py(a,"WARNING")}
function ry(a){a instanceof Error?py(a):(a=Pa(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",qy(a))}
function sy(a,b,c,d,e,f){b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=eq("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new U(h),e.name="UnhandledWindowError",e.message=h,e.fileName=
b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!T("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.Ve)f||(f={}),f.componentStack=m}f&&ty(e,f);g?py(e):qy(e)}}
function py(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(iy>=5))){d=[];e=z(my);for(f=e.next();!f.done;f=e.next()){f=f.value;try{f()&&d.push(f())}catch(x){}}d=[].concat(qa(ly),qa(d));var k=cc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&
a.args&&a.args.length)for(var r=0;r<a.args.length&&!(n=ir(a.args[r],"params."+r,c,n),n>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var w="params."+r,y=kr(t[r]);c[w]=y;n+=w.length+y.length;if(n>500)break}}else c.params=kr(t)}if(d.length)for(r=0;r<d.length&&!(n=ir(d[r],"params.context."+r,c,n),n>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:m,
fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=dr();c=z(a.fb);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.ej)){a=d.weight;break a}a=z(a.Za);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=z(Yq);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Uc[r.name])for(e=z(c.Uc[r.name]),d=e.next();!d.done;d=e.next())if(f=
d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.vd(f);break}r.params||(r.params={});a=dr();r.params["params.errorServiceSignature"]="msg="+a.fb.length+"&cb="+a.Za.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Ri(Si,"sample")).constructor!==
Ri&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(r);if(r.sampleWeight!==0&&!hy.has(r.message)){if(g&&T("web_enable_error_204"))uy(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(fr.zb("handleError",r),T("record_app_crashed_web")&&ky===0&&r.sampleWeight===1&&(ky++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),Bs("appCrashed",
g)),jy++):b==="WARNING"&&fr.zb("handleWarning",r);if(T("kevlar_gel_error_routing")){g=b;h=h===void 0?{}:h;b:{a=z(ny);for(c=a.next();!c.done;c=a.next())if(Hs(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=
Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!eq("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=z(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=z(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Bs("clientError",h),(g==="ERROR"||T("errors_flush_gel_always_killswitch"))&&Ux(void 0,void 0,!1))}T("suppress_error_204_logging")||
uy(b,r)}try{hy.add(r.message)}catch(x){}iy++}}}
function uy(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=z(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=z(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=S("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Pq(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function ty(a){var b=B.apply(1,arguments);a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push.apply(a.args,qa(b))}
;function vy(){this.register=new Map}
function wy(a){a=z(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.je("ABORTED")}
vy.prototype.clear=function(){wy(this);this.register.clear()};
var xy=new vy;var yy=Date.now().toString();
function zy(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(yy)for(a=1,b=0;b<yy.length;b++)d[a%16]^=d[(a-1)%16]/4^yy.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Ay,By=C.ytLoggingDocDocumentNonce_;By||(By=zy(),D("ytLoggingDocDocumentNonce_",By));Ay=By;function Cy(a){this.h=a}
p=Cy.prototype;p.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
p.getAsJspb=function(){var a=new Hp;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&dg(a,2,jf(this.h.veType)),this.h.veCounter!==void 0&&dg(a,6,jf(this.h.veCounter)),this.h.elementIndex!==void 0&&dg(a,3,jf(this.h.elementIndex)),this.h.isCounterfactual&&dg(a,5,ef(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();rg(a,Hp,7,b)}this.h.youtubeData!==void 0&&rg(a,Gp,8,this.h.jspbYoutubeData);return a};
p.toString=function(){return JSON.stringify(this.getAsJson())};
p.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
p.getLoggingDirectives=function(){return this.h.loggingDirectives};function Dy(a){return S("client-screen-nonce-store",{})[a===void 0?0:a]}
function Ey(a,b){b=b===void 0?0:b;var c=S("client-screen-nonce-store");c||(c={},dq("client-screen-nonce-store",c));c[b]=a}
function Fy(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Gy(a){return S(Fy(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",Gy);function Hy(){var a=S("csn-to-ctt-auth-info");a||(a={},dq("csn-to-ctt-auth-info",a));return a}
function Iy(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Jy(a){a=Dy(a===void 0?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Jy);function Ky(a,b,c){var d=Hy();(c=Jy(c))&&delete d[c];b&&(d[a]=b)}
function Ly(a){return Hy()[a]}
D("yt_logging_screen.getCttAuthInfo",Ly);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Dy(c)||b!==S(Fy(c)))if(Ky(a,d,c),Ey(a,c),dq(Fy(c),b),b=function(){setTimeout(function(){a&&Bs("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ay,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function My(){var a=Ni(Ny),b;return(new Gk(function(c,d){a.onSuccess=function(e){zq(e)?c(new Oy(e)):d(new Py("Request failed, status="+Aq(e),"net.badstatus",e))};
a.onError=function(e){d(new Py("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Py("Request timed out","net.timeout",e))};
b=Pq("//googleads.g.doubleclick.net/pagead/id",a)})).ed(function(c){if(c instanceof Pk){var d;
(d=b)==null||d.abort()}return Lk(c)})}
function Py(a,b,c){jb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Py,jb);function Oy(a){this.xhr=a}
;function Qy(){this.Y=0;this.h=null}
Qy.prototype.then=function(a,b,c){return this.Y===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Ry(a):this.Y===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Sy(a):this};
Qy.prototype.getValue=function(){return this.h};
Qy.prototype.isRejected=function(){return this.Y==2};
Qy.prototype.$goog_Thenable=!0;function Sy(a){var b=new Qy;a=a===void 0?null:a;b.Y=2;b.h=a===void 0?null:a;return b}
function Ry(a){var b=new Qy;a=a===void 0?null:a;b.Y=1;b.h=a===void 0?null:a;return b}
;function Ty(a){var b=S("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(oc(a)));return a}
function Uy(a){var b={};T("json_condensed_response")&&(b.prettyPrint="false");return a=tq(a,b||{},!1)}
function Vy(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:uq(a)?"same-origin":"cors",credentials:uq(a)?"same-origin":"include"};b={};for(var d=z(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Wy(){return vi()||(Ad||Bd)&&Hs("applewebkit")&&!Hs("version")&&(!Hs("safari")||Hs("gsa/"))||zd&&Hs("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function Xy(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function Yy(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Lp)if(Lp[d]==c.embeddedPlayerMode){b=Lp[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Zy(a){jb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof $y;this.isTimeout=a instanceof Py&&a.errorCode=="net.timeout";this.isCanceled=a instanceof Pk}
v(Zy,jb);Zy.prototype.name="BiscottiError";function $y(){jb.call(this,"Biscotti ID is missing from server")}
v($y,jb);$y.prototype.name="BiscottiMissingError";var Ny={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},az=null;function bz(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Wy())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if(Li(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Yy(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Xp(){var a=bz();if(a!==void 0)return Lk(a);az||(az=My().then(cz).ed(function(b){return dz(2,b)}));
return az}
function cz(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new $y;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new $y;a=a.id;Yp(a);az=Ry(a);ez(18E5,2);return a}
function dz(a,b){b=new Zy(b);Yp("");az=Sy(b);a>0&&ez(12E4,a-1);throw b;}
function ez(a,b){Bq(function(){My().then(cz,function(c){return dz(b,c)}).ed(Ek)},a)}
function fz(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Xp()}catch(b){return Lk(b)}}
;var Ob=ra(["data-"]);function gz(a){a&&(a.dataset?a.dataset[hz()]="true":Pb(a))}
function iz(a){return a?a.dataset?a.dataset[hz()]:a.getAttribute("data-loaded"):null}
var jz={};function hz(){return jz.loaded||(jz.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function kz(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Ni(b);this.assets=a.assets||{};this.attrs=a.attrs||Ni(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
kz.prototype.clone=function(){var a=new kz,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Na(c)=="object"?a[b]=Ni(c):a[b]=c}return a};var lz=["att/get"],mz=["share/get_share_panel"],nz=["share/get_web_player_share_panel"],oz=["feedback"],pz=["notification/modify_channel_preference"],qz=["browse/edit_playlist"],rz=["subscription/subscribe"],sz=["subscription/unsubscribe"];var tz=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",tz);function uz(a){Zp(tz,arguments)}
;function vz(a,b,c){wz(a,b,c===void 0?null:c)}
function xz(a){a=yz(a);var b=document.getElementById(a);b&&(Pw(a),b.parentNode.removeChild(b))}
function zz(a,b){a&&b&&(a=""+Qa(b),(a=Az[a])&&Nw(a))}
function wz(a,b,c){c=c===void 0?null:c;var d=yz(typeof a==="string"?a:a.toString()),e=document.getElementById(d),f=e&&iz(e),g=e&&!f;f?b&&b():(b&&(f=Lw(d,b),b=""+Qa(b),Az[b]=f),g||(e=Bz(a,d,function(){iz(e)||(gz(e),Ow(d),Bq(function(){Pw(d)},0))},c)))}
function Bz(a,b,c,d){d=d===void 0?null:d;var e=Ui("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Mb(e,typeof a==="string"?Cp(a):a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function yz(a){var b=document.createElement("a");Eb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ic(a)}
var Az={};function Cz(a){var b=Dz(a),c=document.getElementById(b),d=c&&iz(c);d||c&&!d||(c=Ez(a,b,function(){if(!iz(c)){gz(c);Ow(b);var e=Za(Pw,b);Bq(e,0)}}))}
function Ez(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Cp(a);Rb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Dz(a){var b=Ui("A");Eb(b,new xb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ic(a)}
;function Fz(a){var b=B.apply(1,arguments);if(!Gz(a)||b.some(function(d){return!Gz(d)}))throw Error("Only objects may be merged.");
b=z(b);for(var c=b.next();!c.done;c=b.next())Hz(a,c.value)}
function Hz(a,b){for(var c in b)if(Gz(b[c])){if(c in a&&!Gz(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Hz(a[c],b[c])}else if(Iz(b[c])){if(c in a&&!Iz(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Jz(a[c],b[c])}else a[c]=b[c];return a}
function Jz(a,b){b=z(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Gz(c)?a.push(Hz({},c)):Iz(c)?a.push(Jz([],c)):a.push(c);return a}
function Gz(a){return typeof a==="object"&&!Array.isArray(a)}
function Iz(a){return typeof a==="object"&&Array.isArray(a)}
;var Kz="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Lz(a,b){var c=c===void 0?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=mc(window.location.href);e&&d.push(e);e=mc(a);if(Sb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),Eb(d,a),a=d.href)if(a=oc(a),a=pc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Jy()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Mz(a,b,f)}else Mz(a,b)}
function Mz(a,b,c){a=Nz(a);b=b?sc(b):"";c=c||5;Wy()&&qr(a,b,c)}
function Nz(a){for(var b=z(Kz),c=b.next();!c.done;c=b.next())a=xc(a,c.value);return"ST-"+ic(a).toString(36)}
;function Oz(a){for(var b=0,c=0;c<a.length;c++)b=b*31+a.charCodeAt(c),c<a.length-1&&(b%=0x800000000000);return b%1E5}
;function Pz(a){Au.call(this,1,arguments);this.csn=a}
v(Pz,Au);var Ju=new Bu("screen-created",Pz),Qz=[],Rz=0,Sz=new Map,Tz=new Map,Uz=new Map;
function Vz(a,b,c,d,e,f){e=e===void 0?!1:e;f=f===void 0?{}:f;Object.assign(f,Wz({cttAuthInfo:Ly(b)||void 0},b));for(var g=z(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Ji(k)||!k.trackingParams&&!k.veType)&&qy(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=Xz(h,b);if(k.veType&&!Tz.has(l)&&!Uz.has(l)&&!e){if(!T("il_attach_cache_limit")||Sz.size<1E3){Sz.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&Sz.size>1E3&&qy(new U("IL Attach cache exceeded limit"))}h=
Xz(c,b);Sz.has(h)?Yz(c,b):Uz.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Vb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Zz("visualElementAttached",f,c):a?gy("visualElementAttached",c,a,f):Bs("visualElementAttached",c,f)}
function Zz(a,b,c){Qz.push({Zf:a,payload:c,Yi:void 0,options:b});Rz||(Rz=Ku())}
function Lu(a){if(Qz){for(var b=z(Qz),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Bs(c.Zf,c.payload,c.options));Qz.length=0}Rz=0}
function Xz(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Yz(a,b){a=Xz(a,b);if(Sz.has(a)){b=Sz.get(a)||[];var c=c===void 0?{}:c;Vz(b[0],b[1],b[2],[b[3]],!0,c);Sz.delete(a)}}
function Wz(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function $z(){}
$z.prototype.flush=function(a,b){a=a===void 0?[]:a;b=b===void 0?!1:b;if(T("enable_client_streamz_web")){a=z(a);for(var c=a.next();!c.done;c=a.next())c=ii(c.value),this.h&&rg(c,di,2,this.h),c={serializedIncrementBatch:Fd(c.j())},Bs("streamzIncremented",c,{sendIsolatedPayload:b})}};
function aA(a){var b=new di;var c=new ai;c=xg(c,1,"botguard");a=xg(c,2,a);a=qg(a,ai);lg(b,1,ei,a);a&&!se(a)&&Zf(b.D);this.h=b}
v(aA,$z);var bA=new Map;function cA(){try{return!!self.localStorage}catch(a){return!1}}
;function dA(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function eA(a){if(cA()){var b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=dA(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function fA(){if(!cA())return!1;var a=Ir(),b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=dA(c.value),c!==void 0&&c!==a)return!0;return!1}
;function gA(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(S("INNERTUBE_CLIENT_NAME")==="WEB"||S("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function hA(){var a=a===void 0?!0:a;try{window.sessionStorage.removeItem("stickiness_reload");window.sessionStorage.removeItem("session_logininfo");dq("LOGIN_INFO","");a&&window.sessionStorage.setItem("from_switch_account","1");a=!0;a=a===void 0?!1:a;var b,c=iA;c||(c=document.querySelector("#persist_identity"));if(b=c){var d=b.src?(new URL(b.src)).origin:"*";if(a){var e;(e=b.contentWindow)==null||e.postMessage({action:"clear"},d)}else if(!(Number(window.sessionStorage.getItem("stickiness_reload"))>=
2)){var f=window.sessionStorage.getItem("session_logininfo");if(f){var g;(g=b.contentWindow)==null||g.postMessage({loginInfo:f},d)}}}}catch(h){}}
function jA(a){if(a)if(a.startsWith("https://accounts.google.com/AddSession"))hA();else if(a.startsWith("https://accounts.google.com/ServiceLogin"))hA();else{var b;if(b=a.startsWith("https://myaccount.google.com"))b=(a instanceof Xn?a.clone():new Xn(a)).h.endsWith("/youtubeoptions");b&&hA()}if(S("LOGGED_IN",!0)&&gA()){b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=mc(window.location.href);c&&b.push(c);c=mc(a);Sb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=oc(a),(b=pc(b))?(b=Nz(b),b=(b=rr(b)||null)?qq(b):
{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;gA()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Lz(a,b)}}
var iA=null;function kA(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Lz(a,b);if(c)return!1;jA(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=tc(a,e);jA(b);a=void 0;a=a===void 0?Bb:a;a:if(f=b+f,a=a===void 0?Bb:a,!(f instanceof xb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof zb&&c.Hf(f)){f=new xb(f);break a}f=void 0}g=g.location;f=Db(f||yb);f!==void 0&&(g.href=f);return!0}
;function lA(a){if(Li(S("PLAYER_VARS",{}))!="1"){a&&Wp();try{fz().then(function(){},function(){}),Bq(lA,18E5)}catch(b){iq(b)}}}
;function mA(){this.h={}}
p=mA.prototype;p.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
p.get=function(a){if(this.contains(a))return this.h[a]};
p.set=function(a,b){this.h[a]=b};
p.cc=function(){return Object.keys(this.h)};
p.remove=function(a){delete this.h[a]};function nA(){this.mappings=new mA}
nA.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
nA.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Fb(b)}}return a};
new nA;var oA=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function pA(){var a=a===void 0?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;var b=nc(a);if(T("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=rq(a).theme;return oA.get(c)||null}catch(d){}return null}
;function qA(a){var b=new Il;if(a.interpreterJavascript){var c=Ap(a.interpreterJavascript);c=Kb(c).toString();var d=new Gl;xg(d,6,c);rg(b,Gl,1,d,xe)}else a.interpreterUrl&&(c=Bp(a.interpreterUrl),c=rb(c).toString(),d=new Hl,xg(d,4,c),rg(b,Hl,2,d,xe));a.interpreterHash&&kg(b,3,Af(a.interpreterHash),xe);a.program&&kg(b,4,Af(a.program),xe);a.globalName&&kg(b,5,Af(a.globalName),xe);a.clientExperimentsStateBlob&&kg(b,7,Af(a.clientExperimentsStateBlob),xe);return b}
function rA(a){var b={};a=z(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
function sA(a){return Number(a.t)||7200}
;function Dc(){if(T("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function tA(a){this.h=a}
tA.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
tA.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
tA.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function uA(){return new Promise(function(a){var b=window;b.ntpevasrs!==void 0?a(new tA(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new tA(c))}))})}
;var vA=ra(["https://static.doubleclick.net/instream/ad_status.js"]),wA=[],xA=function(a){var b=B.apply(1,arguments);if(b.length===0)return qb(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return qb(c)}(vA),yA=!1;
function zA(){if(Wy()){var a=S("PLAYER_VARS",{});if(Li(a)!="1"&&!Yy(a)){var b=function(){yA=!0;"google_ad_status"in window?dq("DCLKSTAT",1):dq("DCLKSTAT",2)};
try{vz(xA,b)}catch(c){}wA.push(sn.ra(function(){if(!(yA||"google_ad_status"in window)){try{zz(xA.toString(),b)}catch(c){}yA=!0;dq("DCLKSTAT",3)}},5E3))}}}
function AA(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function X(a){this.h=a}
[new X("b.f_"),new X("j.s_"),new X("r.s_"),new X("e.h_"),new X("i.s_"),new X("s.t_"),new X("p.h_"),new X("s.i_"),new X("f.i_"),new X("a.b_"),new X("a.o_"),new X("g.o_"),new X("p.i_"),new X("p.m_"),new X("n.k_"),new X("i.f_"),new X("a.s_"),new X("m.c_"),new X("n.h_"),new X("o.p_"),new X("m.p_"),new X("o.a_"),new X("d.p_"),new X("e.i_")].reduce(function(a,b){a[b.h]=b;return a},{});function BA(a){return E("ytcsi."+(a||"")+"data_")||CA(a)}
function DA(){var a=BA();a.info||(a.info={});return a.info}
function EA(a){a=BA(a);a.metadata||(a.metadata={});return a.metadata}
function FA(a){a=BA(a);a.tick||(a.tick={});return a.tick}
function GA(a){a=BA(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function HA(a){a=GA(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function IA(a){var b=BA(a).nonce;b||(b=zy(),BA(a).nonce=b);return b}
function CA(a){var b={tick:{},info:{}};D("ytcsi."+(a||"")+"data_",b);return b}
;function JA(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function KA(a){a=a||"";var b=LA();if(b[a])return b[a];var c=JA(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
function LA(){var a=E("ytcsi.reference");if(a)return a;JA();return E("ytcsi.reference")}
;var Y={},MA=(Y.auto_search="LATENCY_ACTION_AUTO_SEARCH",Y.ad_to_ad="LATENCY_ACTION_AD_TO_AD",Y.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",Y.app_startup="LATENCY_ACTION_APP_STARTUP",Y.browse="LATENCY_ACTION_BROWSE",Y.cast_splash="LATENCY_ACTION_CAST_SPLASH",Y.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",Y.channels="LATENCY_ACTION_CHANNELS",Y.chips="LATENCY_ACTION_CHIPS",Y.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",Y.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",Y.editor=
"LATENCY_ACTION_EDITOR",Y.embed="LATENCY_ACTION_EMBED",Y.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",Y.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",Y.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",Y.explore="LATENCY_ACTION_EXPLORE",Y.favorites="LATENCY_ACTION_FAVORITES",Y.home="LATENCY_ACTION_HOME",Y.inboarding="LATENCY_ACTION_INBOARDING",Y.landing="LATENCY_ACTION_LANDING",Y.learning="LATENCY_ACTION_LEARNING",Y.learning_journey_browse=
"LATENCY_ACTION_LEARNING_JOURNEY_BROWSE",Y.learning_journey_watch="LATENCY_ACTION_LEARNING_JOURNEY_WATCH",Y.library="LATENCY_ACTION_LIBRARY",Y.live="LATENCY_ACTION_LIVE",Y.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",Y.management="LATENCY_ACTION_MANAGEMENT",Y.mini_app="LATENCY_ACTION_MINI_APP_PLAY",Y.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",Y.onboarding="LATENCY_ACTION_ONBOARDING",Y.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",Y.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",Y.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",Y.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",Y.prebuffer="LATENCY_ACTION_PREBUFFER",Y.prefetch="LATENCY_ACTION_PREFETCH",Y.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",Y.profile_switcher="LATENCY_ACTION_LOGIN",Y.projects="LATENCY_ACTION_PROJECTS",Y.reel_watch="LATENCY_ACTION_REEL_WATCH",Y.results="LATENCY_ACTION_RESULTS",Y.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",Y.premium=
"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",Y.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",Y.review="LATENCY_ACTION_REVIEW",Y.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",Y.search_ui="LATENCY_ACTION_SEARCH_UI",Y.search_suggest="LATENCY_ACTION_SUGGEST",Y.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",Y.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",Y.seek="LATENCY_ACTION_PLAYER_SEEK",Y.settings="LATENCY_ACTION_SETTINGS",Y.store="LATENCY_ACTION_STORE",Y.supervision_dashboard=
"LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",Y.tenx="LATENCY_ACTION_TENX",Y.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",Y.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",Y.watch="LATENCY_ACTION_WATCH",Y.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",Y["watch,watch7"]="LATENCY_ACTION_WATCH",Y["watch,watch7_html5"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",Y.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",Y.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",
Y.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",Y.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",Y.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",Y.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",Y.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",Y.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",Y);function NA(a){return MA[a]||"LATENCY_ACTION_UNKNOWN"}
;function OA(a,b){Au.call(this,1,arguments);this.timer=b}
v(OA,Au);var PA=new Bu("aft-recorded",OA);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var QA=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",QA);function RA(){this.h=0}
function SA(){RA.instance||(RA.instance=new RA);return RA.instance}
RA.prototype.tick=function(a,b,c,d){TA(this,"tick_"+a+"_"+b)||Bs("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
RA.prototype.info=function(a,b,c){var d=Object.keys(a).join("");TA(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Bs("latencyActionInfo",a,{cttAuthInfo:c}))};
RA.prototype.jspbInfo=function(){};
RA.prototype.span=function(a,b,c){var d=Object.keys(a).join("");TA(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Bs("latencyActionSpan",a,{cttAuthInfo:c}))};
function TA(a,b){QA[b]=QA[b]||{count:0};var c=QA[b];c.count++;c.time=W();a.h||(a.h=Kr(function(){var d=W(),e;for(e in QA)QA[e]&&d-QA[e].time>6E4&&delete QA[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||qy(c)),!0):!1}
;var UA=window;function VA(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function WA(){var a;if(T("csi_use_performance_navigation_timing")){var b,c,d,e=Z==null?void 0:(a=Z.getEntriesByType)==null?void 0:(b=a.call(Z,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=XA(e.requestStart),e.responseEnd=XA(e.responseEnd),e.redirectStart=XA(e.redirectStart),e.redirectEnd=XA(e.redirectEnd),e.domainLookupEnd=XA(e.domainLookupEnd),e.connectStart=XA(e.connectStart),e.connectEnd=XA(e.connectEnd),e.responseStart=XA(e.responseStart),
e.secureConnectionStart=XA(e.secureConnectionStart),e.domainLookupStart=XA(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=T("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Z.timing)):Z.timing;return a}
function XA(a){return Math.round(YA()+a)}
function YA(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=UA.performance||UA.mozPerformance||UA.msPerformance||UA.webkitPerformance||new VA;var ZA=!1,$A=!1,aB={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"},bB=Ya(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||Ek,Z);function cB(a,b){dB("_start",a,b)}
function eB(a,b){if(!T("web_csi_action_sampling_enabled")||!BA(b).actionDisabled){var c=KA(b||"");Fz(c.info,a);a.loadType&&(c=a.loadType,EA(b).loadType=c);Fz(HA(b),a);c=IA(b);b=BA(b).cttAuthInfo;SA().info(a,c,b)}}
function fB(){var a,b,c,d;return((d=$w().resolve(Uw(nu))==null?void 0:(a=ou())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function dB(a,b,c){if(!T("web_csi_action_sampling_enabled")||!BA(c).actionDisabled){var d=IA(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){($w().resolve(Uw(nu))==null?0:ou())&&!$A&&($A=!0,dB("gcfl",W(),c));var f,g,h;e=($w().resolve(Uw(nu))==null?void 0:(f=ou())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=fB();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}f?(e=Oz(d)%e!==0,BA(c).debugTicksExcludedLogged||
(f={},f.debugTicksExcluded=e,eB(f,c)),BA(c).debugTicksExcludedLogged=!0):e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Z.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||T("web_csi_disable_alt_time_performance_mark"))Z.mark(e);else{f=T("csi_use_performance_navigation_timing")?f-Z.timeOrigin:f-(Z.timeOrigin||Z.timing.navigationStart);try{Z.mark(e,{startTime:f})}catch(k){}}e=KA(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=z(e.callback[a]),f=e.next();!f.done;f=e.next())f=
f.value,f();e=GA(c);e.gelTicks&&(e.gelTicks[a]=!0);f=FA(c);e=b||W();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=BA(c).cttAuthInfo;a==="_start"?(a=SA(),TA(a,"baseline_"+d)||Bs("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):SA().tick(a,d,b,f);gB(c);return e}}}
function hB(){var a,b=(a=Z.getEntriesByType)==null?void 0:a.call(Z,"mark");b&&b.forEach(function(c){if(c.name.startsWith("mark_")){var d;(d=Z.clearMarks)==null||d.call(Z,c.name)}})}
function iB(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=sw+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function jB(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=z(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=z(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function kB(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Hb(document)&&a.setAttribute("nonce",Hb(document));return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=YA(),dB("rsf_"+b,c+Math.round(a.fetchStart)),dB("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function lB(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=Ub(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Wb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(dB("wffs",XA(b.startTime)),dB("wffe",XA(b.responseEnd)))}
function mB(a){var b=nB("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=nB(b[d],a);if(e)return e}return NaN}
function oB(a){D("ytglobal.timing"+(a||"")+"ready_",!0)}
function nB(a,b){if(a=FA(b)[a])return typeof a==="number"?a:a[a.length-1]}
function gB(a){var b=nB("_start",a),c=mB(a),d=!ZA;b&&c&&d&&(Gu(PA,new OA(Math.round(c-b),a)),ZA=!0)}
function pB(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=Xb(a,function(c){return c.name==="first-paint"}))return XA(a.startTime)}var b;
T("csi_use_performance_navigation_timing")?b=Z.getEntriesByType("first-paint")[0].startTime:b=Z.timing.fj;return b?Math.max(0,b):0}
;function qB(a,b){hq(function(){KA("").info.actionType=a;b&&dq("TIMING_AFT_KEYS",b);dq("TIMING_ACTION",a);var c=jB();Object.keys(c).length>0&&eB(c);c={isNavigation:!0,actionType:NA(S("TIMING_ACTION"))};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=NA(d));if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Jy())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=iB();if(d===1||d===-1)c.isVisible=!0;EA();DA();c.loadType="cold";d=DA();var e=WA(),f=YA(),g=S("CSI_START_TIMESTAMP_MILLIS",
0);g>0&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(dB("srt",e.responseStart),d.prerender!==1&&cB(f));d=pB();d>0&&dB("fpt",d);d=WA();d.isPerformanceNavigationTiming&&eB({performanceNavigationTiming:!0},void 0);dB("nreqs",d.requestStart,void 0);dB("nress",d.responseStart,void 0);dB("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(dB("nrs",d.redirectStart,void 0),dB("nre",d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(dB("ndnss",d.domainLookupStart,
void 0),dB("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(dB("ntcps",d.connectStart,void 0),dB("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=YA()&&d.connectEnd-d.secureConnectionStart>0&&(dB("nstcps",d.secureConnectionStart,void 0),dB("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&lB();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in aB)aB.hasOwnProperty(h)&&(e=aB[h],kB(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=z(d),d=h.next();!d.done;d=
h.next())c.resourceInfo.push({resourceCache:d.value});eB(c);c=GA();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=HA();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(EA().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=FA();e=GA();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")dB(k,nB(k));else if(T("log_repeated_ytcsi_ticks"))for(f=z(d[k]),g=f.next();!g.done;g=f.next())g=g.value,dB(k.slice(1),
g);k={};d=!1;h=z(h);for(e=h.next();!e.done;e=h.next())d=e.value,Fz(c,d),Fz(k,d),d=!0;d&&eB(k)}oB();k=S("TIMING_ACTION");E("ytglobal.timingready_")&&k&&rB()&&mB()&&gB()})()}
function sB(){var a=a===void 0?{}:a;hq(function(){tB();var b=a.sampleRate;if(!T("web_csi_action_sampling_enabled")||b===void 0||b<=1)b=!1;else{var c=IA("attestation_challenge_fetch");b=Oz(c)%b!==0}b&&(BA("attestation_challenge_fetch").actionDisabled=!0);KA("attestation_challenge_fetch").info.actionType="attestation_challenge_fetch";a.cttAuthInfo&&(BA("attestation_challenge_fetch").cttAuthInfo=a.cttAuthInfo);dq("attestation_challenge_fetchTIMING_ACTION","attestation_challenge_fetch");hq(cB)(a.startTime,
"attestation_challenge_fetch");b={actionType:NA("attestation_challenge_fetch")};a.cj&&(b.previousAction=NA(S("TIMING_ACTION")));(c=Jy())&&c!=="UNDEFINED_CSN"&&(b.clientScreenNonce=c);uB(b,"attestation_challenge_fetch");oB("attestation_challenge_fetch")})()}
function tB(){hq(function(){rB("attestation_challenge_fetch")&&vB("aa",void 0,"attestation_challenge_fetch");var a=LA();a.attestation_challenge_fetch&&delete a.attestation_challenge_fetch;var b={timerName:"attestation_challenge_fetch",info:{},tick:{},span:{},jspbInfo:[]};JA().push(b);a.attestation_challenge_fetch=b;CA("attestation_challenge_fetch");bB();hB()})()}
function rB(a){return hq(function(){return wB("_start",a)})()}
function uB(a,b,c){hq(eB)(a,b,c===void 0?!1:c)}
function vB(a,b,c){return hq(dB)(a,b,c)}
function wB(a,b){return hq(function(){var c=FA(b);return a in c})()}
function xB(a){if(!T("universal_csi_network_ticks"))return"";a=nc(a)||"";for(var b=Object.keys(yu),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function yB(a){if(!T("universal_csi_network_ticks"))return function(){};
var b=yu[a];return b?(zB(b),function(){var c=T("universal_csi_network_ticks")?(c=zu[a])?zB(c):!1:!1;return c}):function(){}}
function zB(a){return hq(function(){if(wB(a))return!1;vB(a,void 0,void 0);return!0})()}
function AB(a){hq(function(){if(!rB("attestation_challenge_fetch")||wB(a,"attestation_challenge_fetch"))return!1;vB(a,void 0,"attestation_challenge_fetch");return!0})()}
function BB(){hq(function(){var a=IA();requestAnimationFrame(function(){setTimeout(function(){a===IA()&&vB("ol",void 0,void 0)},0)})})()}
var CB=window;CB.ytcsi&&(CB.ytcsi.infoGel=uB,CB.ytcsi.tick=vB);function DB(a,b,c){var d=this;this.network=a;this.options=b;this.o=c;this.h=null;if(b.Ig){var e=new Ml;this.h=e.promise;C.ytAtRC&&sn.Xa(function(){var f,g;return A(function(h){if(h.h==1){if(!C.ytAtRC)return h.return();f=EB(null);return h.yield(d.ob(f),2)}g=h.i;C.ytAtRC&&C.ytAtRC(JSON.stringify(g));h.h=0})},2);
uA().then(function(f){var g,h,k,l;return A(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.ob(EB(n))}),m.yield(Cc(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,mb:rA(k),vm:g,bgChallenge:new Il};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,mb:rA(n),vm:g,bgChallenge:new Il};d.h=Promise.resolve(n)});
m.h=0})})}else b.preload&&FB(this,new Promise(function(f){Kr(function(){f(GB(d))},0)}))}
DB.prototype.j=function(){var a=this;return A(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
DB.prototype.i=function(a,b,c){var d=this,e,f,g;return A(function(h){d.h===null&&FB(d,GB(d));e=!1;f={};g=function(){var k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.mb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.A(3);break}l=Object.assign({},{c:k.challenge,e:a},b);ya(n,4);e=!0;return n.yield(k.vm.snapshot({Ha:l}),6);case 6:(m=n.i)?f.webResponse=m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";za(n,3);break;case 4:Aa(n),
f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var r=k.mb,t={};r.c6a&&(t.reportingStatus=String(Number(r.c)^AA()));r.c6b&&(t.broadSpectrumDetectionResult=String(Number(r.c)^Number(S("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),HB(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function EB(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function GB(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,r,t;return A(function(w){switch(w.h){case 1:c=EB(Rl().h);if(T("att_fet_ks"))return ya(w,7),w.yield(a.ob(c),9);ya(w,4);return w.yield(IB(a,c),6);case 6:g=w.i;e=g.Wf;f=g.Xf;d=g;za(w,3);break;case 4:return Aa(w),qy(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),JB(a,864E5),w.return({challenge:"",mb:{},vm:void 0,bgChallenge:void 0});case 9:d=w.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=rA(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");za(w,3);break;case 7:h=Aa(w);qy(h);b++;if(b>=5)return qy(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),JB(a,864E5),w.return({challenge:"",mb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return w.return(new Promise(function(y){Kr(function(){y(GB(a,
b))},k)}));
case 3:l=sA(f);JB(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){w.A(10);break}n=qA(d.bgChallenge);ya(w,11);return w.yield(Sl(Rl(),n),13);case 13:za(w,12);break;case 11:return r=Aa(w),qy(r),w.return({challenge:e,mb:f,vm:m,bgChallenge:n});case 12:return ya(w,14),m=new Ol({challenge:n,Lb:{qa:"aGIf"}}),w.yield(m.Pb,16);case 16:za(w,10);break;case 14:t=Aa(w),qy(t),m=void 0;case 10:return w.return({challenge:e,mb:f,vm:m,bgChallenge:n})}})}
DB.prototype.ob=function(a){var b=this,c;return A(function(d){c=b.o;if(!c||c.va())return d.return(b.network.ob(a));AB("att_pna");return d.return(new Promise(function(e){lk(c,"publicytnetworkstatus-online",function(){b.network.ob(a).then(e)})}))})};
function KB(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=rA(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Wf:b,Xf:c})}
function IB(a,b){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.A(4);break}if(!(d>0)){h.A(5);break}e.Md=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){Kr(function(){l(void 0)},k.Md)}}(e)),5);
case 5:return ya(h,7),h.yield(a.ob(b),9);case 9:return f=h.i,h.return(KB(f));case 7:c=g=Aa(h),g instanceof Error&&qy(g);case 8:d++;e={Md:void 0};h.A(2);break;case 4:throw c;}})}
function FB(a,b){a.h=b}
function LB(a){var b,c,d;return A(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=GB(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function JB(a,b){function c(){var e;return A(function(f){e=d-Date.now();return e<1E3?f.yield(LB(a),0):(Kr(c,Math.min(e,6E4)),f.A(0))})}
var d=Date.now()+b;c()}
function HB(a,b){return new Promise(function(c){Kr(function(){c(b())},a)})}
;var MB={},NB=(MB.WEB_UNPLUGGED="^unplugged/",MB.WEB_UNPLUGGED_ONBOARDING="^unplugged/",MB.WEB_UNPLUGGED_OPS="^unplugged/",MB.WEB_UNPLUGGED_PUBLIC="^unplugged/",MB.WEB_CREATOR="^creator/",MB.WEB_KIDS="^kids/",MB.WEB_EXPERIMENTS="^experiments/",MB.WEB_MUSIC="^music/",MB.WEB_REMIX="^music/",MB.WEB_MUSIC_EMBEDDED_PLAYER="^music/",MB.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",MB);
function OB(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=NB[b];if(c){c=new RegExp(c);for(var d=z(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(NB).forEach(function(g){var h=z(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=z(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function PB(){this.h=QB.instance}
PB.prototype.ob=function(a){AB("att_fsr");return RB(this.h,a).then(function(b){AB("att_frr");return b})};var SB=new Sw("INNERTUBE_TRANSPORT_TOKEN");function TB(){var a,b,c;return A(function(d){if(d.h==1)return a=$w().resolve(SB),a?d.yield(UB(a),2):(qy(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return qy(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Pi;return d.return(c)}qy(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function VB(){this.h={};if(this.i=tr()){var a=rr("CONSISTENCY");a&&WB(this,{encryptedTokenJarContents:a})}}
VB.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ja.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=z(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];WB(this,a)}};
function WB(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&qr("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var XB=window.location.hostname.split(".").slice(-2).join(".");function YB(){this.i=-1;var a=S("LOCATION_PLAYABILITY_TOKEN");S("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.localStorage=ZB(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.h=void 0)}
var $B;function aC(){$B=E("yt.clientLocationService.instance");$B||($B=new YB,D("yt.clientLocationService.instance",$B));return $B}
p=YB.prototype;
p.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.h)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.h.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.h.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.h.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.j||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.j||
this.locationPlayabilityToken};
p.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.h=void 0,S("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.localStorage=ZB(this))&&this.localStorage.set("yt-location-playability-token",a,15552E3):qr("YT_CL",JSON.stringify({loctok:a}),15552E3,XB,!0))};
function ZB(a){return a.localStorage===void 0?new ss("yt-client-location"):a.localStorage}
p.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.localStorage=ZB(this))&&this.localStorage.remove("yt-location-playability-token"):sr("YT_CL");this.j=void 0;this.i!==-1&&(clearTimeout(this.i),this.i=-1)};
p.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;S("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.h=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
p.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
p.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function bC(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=S("INNERTUBE_CONTEXT");if(!d)return py(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=Oi(d);T("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;xr();var g="USER_INTERFACE_THEME_LIGHT";Ar(165)?g="USER_INTERFACE_THEME_DARK":Ar(174)?g="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:pA()||g;e.userInterfaceTheme=f;if(!b){if(f=Fr())e.connectionType=f;T("web_log_effective_connection_type")&&(f=Gr())&&(d.client.effectiveConnectionType=f)}var h;if(T("web_log_memory_total_kbytes")&&((h=C.navigator)==null?0:h.deviceMemory)){var k;h=(k=C.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}T("web_gcf_hashes_innertube")&&(f=ru())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=rq(C.location.href);!T("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo||(e.mainAppWebInfo={}),e.mainAppWebInfo.graftUrl=C.location.href,T("kevlar_woffle")&&lr.instance&&(k=lr.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),
e.mainAppWebInfo.webDisplayMode=mr(),e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!T("web_lr_app_quality_killswitch")&&(k=S("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!T("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;
break a}catch(ja){}l=void 0}l&&(e.timeZone=l)}(l=S("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=Hq();VB.instance||(VB.instance=new VB);d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:Gi(VB.instance.h)});!T("web_prequest_context_killswitch")&&(l=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=l);e=xr();l=Ar(58);e=e.get("gsml","");d.user=Object.assign({},d.user);l&&(d.user.enableSafetyMode=l);e&&(d.user.lockedSafetyMode=
!0);T("warm_op_csn_cleanup")?c&&(b=Jy())&&(d.clientScreenNonce=b):!b&&(b=Jy())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=E("yt.mdx.remote.remoteClient_"))d.remoteClient=a;aC().setLocationOnInnerTubeContext(d);try{var m=vq(),n=m.bid;delete m.bid;d.adSignalsInfo={params:[],bid:n};for(var r=z(Object.entries(m)),t=r.next();!t.done;t=r.next()){var w=z(t.value),y=w.next().value,x=w.next().value;m=y;n=x;a=void 0;(a=d.adSignalsInfo.params)==null||a.push({key:m,value:""+n})}var H,
G;if(((H=d.client)==null?void 0:H.clientName)==="TVHTML5"||((G=d.client)==null?void 0:G.clientName)==="TVHTML5_UNPLUGGED"){var V=S("INNERTUBE_CONTEXT");V.adSignalsInfo&&(d.adSignalsInfo.advertisingId=V.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=V.adSignalsInfo.limitAdTracking)}}catch(ja){py(ja)}return d}
;function cC(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),S("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=S("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function dC(a){return function(){return new a}}
;function eC(){}
eC.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?pr:c;var d={context:bC(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+OB(this.j());(e=(f=yx(a.commandMetadata,Jp))==null?void 0:f.apiUrl)&&(b=e);f=Uy(Ty(b));a=Object.assign({},{command:a},void 0);d={input:f,hb:Vy(f),Ja:d,config:a};d.config.Xb?d.config.Xb.identity=c:d.config.Xb={identity:c};return d}c=new U("Error: Failed to create Request from Command.",a);py(c)};
da.Object.defineProperties(eC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function fC(){}
v(fC,eC);function gC(){}
v(gC,fC);gC.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",hb:Vy("/getDatasyncIdsEndpoint","GET"),Ja:{}}};
gC.prototype.j=function(){return[]};
gC.prototype.i=function(){};
gC.prototype.h=function(){};var hC={},iC=(hC.GET_DATASYNC_IDS=dC(gC),hC);var jC="tokens consistency service_params mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),kC=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function QB(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.uc||(a.uc={});a.uc=Object.assign({},iC,a.uc)}
function lC(a,b,c){var d=mC;if(QB.instance!==void 0){if(c=QB.instance,a=[d!==c.u,a!==c.fa,b!==c.j,!1,!1,!1,void 0!==c.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else QB.instance=new QB(d,a,b,c)}
function UB(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?pr:c;var d=nC(a,b);return d?new Gk(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new U("Error: Failed to build request for command.",b));n.A(0);break}jA(h.input);l=((k=h.hb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.ue){m=oC(h.config,l);n.A(4);break}return n.yield(pC(h.config,l),5);case 5:m=n.i;case 4:e(qC(a,h,m)),n.h=
0}})}):Lk(new U("Error: No request builder found for command.",b))}
function RB(a,b){function c(){}
var d="/youtubei/v1/"+OB(lz);var e=e===void 0?{Xb:{identity:pr}}:e;var f=f===void 0?!0:f;c=yB(xB(d));b.context||(b.context=bC(void 0,f));return new Gk(function(g){var h,k,l,m,n;return A(function(r){if(r.h==1)return h=Ty(d),k=uq(h)?"same-origin":"cors",a.j.ue?(l=oC(e,k),r.A(2)):r.yield(pC(e,k),3);r.h!=2&&(l=r.i);m=Uy(Ty(d));n={input:m,hb:Vy(m),Ja:b,config:e};g(qC(a,n,l,c));r.h=0})})}
function rC(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=z(jC);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function qC(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,r,t,w,y,x,H,G,V,ja,lc,Rd,ka,fb,Ua,Va,Ta,li,mi,yv,zv,Av,Bv;return A(function(na){switch(na.h){case 1:na.A(2);break;case 3:if((e=na.i)&&!e.isExpired())return na.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ja)==null?0:g.context)){na.A(4);break}h=b.Ja.context;na.A(5);break;case 5:k=z([]),l=k.next();case 8:if(l.done){na.A(4);break}m=l.value;return na.yield(m.ij(h),9);case 9:l=k.next();na.A(8);break;case 4:if((n=a.i)==null||!n.qj(b.input,b.Ja)){na.A(12);break}return na.yield(a.i.aj(b.input,
b.Ja),13);case 13:return r=na.i,rC(a,r,b),na.return(r);case 12:return(y=(w=b.config)==null?void 0:w.oc)&&a.h.has(y)?t=a.h.get(y):(x=JSON.stringify(b.Ja),V=(G=(H=b.hb)==null?void 0:H.headers)!=null?G:{},b.hb=Object.assign({},b.hb,{headers:Object.assign({},V,c)}),ja=Object.assign({},b.hb),b.hb.method==="POST"&&(ja=Object.assign({},ja,{body:x})),((lc=b.config)==null?0:lc.fg)&&vB(b.config.fg),Rd=function(){return a.fa.fetch(b.input,ja,b.config)},t=Rd(),y&&a.h.set(y,t)),na.yield(t,14);
case 14:(ka=na.i)&&T("web_streaming_player")&&Array.isArray(ka)&&(ka=ka[0].playerResponse);if(ka&&"error"in ka&&((fb=ka)==null?0:(Ua=fb.error)==null?0:Ua.details))for(Va=ka.error.details,Ta=z(Va),li=Ta.next();!li.done;li=Ta.next())mi=li.value,(yv=mi["@type"])&&kC.indexOf(yv)>-1&&(delete mi["@type"],ka=mi);y&&a.h.has(y)&&a.h.delete(y);((zv=b.config)==null?0:zv.gg)&&vB(b.config.gg);if(ka||(Av=a.i)==null||!Av.Oi(b.input,b.Ja)){na.A(15);break}return na.yield(a.i.Zi(b.input,b.Ja),16);case 16:ka=na.i;case 15:return rC(a,
ka,b),((Bv=b.config)==null?0:Bv.cg)&&vB(b.config.cg),d(),na.return(ka||void 0)}})}
function nC(a,b){a:{a=a.u;var c,d=(c=yx(b,Kp))==null?void 0:c.signal;if(d&&a.uc&&(c=a.uc[d])){var e=c();break a}var f;if((c=(f=yx(b,Ip))==null?void 0:f.request)&&a.We&&(f=a.We[c])){e=f();break a}for(e in b)if(a.Qd[e]&&(b=a.Qd[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function pC(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Xb)==null?void 0:d.sessionIndex;var h=g.yield;var k=or({sessionIndex:e});if(!(k instanceof Gk)){var l=new Gk(Ek);Hk(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},cC(b),f)))})}
function oC(a,b){var c;a=a==null?void 0:(c=a.Xb)==null?void 0:c.sessionIndex;c=or({sessionIndex:a});return Object.assign({},cC(b),c)}
;function sC(){}
v(sC,fC);sC.prototype.j=function(){return rz};
sC.prototype.i=function(a){return yx(a,Vp)||void 0};
sC.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(sC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function tC(){}
v(tC,fC);tC.prototype.j=function(){return sz};
tC.prototype.i=function(a){return yx(a,Up)||void 0};
tC.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(tC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var uC=new Sw("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function vC(a){this.H=a}
v(vC,fC);vC.prototype.j=function(){return mz};
vC.prototype.i=function(a){return yx(a,Op)||yx(a,Pp)||yx(a,Np)};
vC.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.H)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.H.i(b.clientParamIdentifier)}};
vC[Rw]=[uC];function wC(){}
v(wC,fC);wC.prototype.j=function(){return oz};
wC.prototype.i=function(a){return yx(a,Mp)||void 0};
wC.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(wC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function xC(){}
v(xC,fC);xC.prototype.j=function(){return oz};
xC.prototype.i=function(a){return yx(a,Tp)};
xC.prototype.h=function(a,b){b.undoToken&&(a.feedbackTokens=[b.undoToken]);b.isUndoTokenUnencrypted&&(a.isFeedbackTokenUnencrypted=b.isUndoTokenUnencrypted)};
da.Object.defineProperties(xC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function yC(){}
v(yC,fC);yC.prototype.j=function(){return pz};
yC.prototype.i=function(a){return yx(a,Sp)||void 0};
yC.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function zC(){}
v(zC,fC);zC.prototype.j=function(){return qz};
zC.prototype.i=function(a){return yx(a,Rp)||void 0};
zC.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function AC(){}
v(AC,fC);AC.prototype.j=function(){return nz};
AC.prototype.i=function(a){return yx(a,Qp)};
AC.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function BC(){var a=a===void 0?sy:a;var b=b===void 0?{}:b;D("yt.logging.errors.log",py);oy();er(dr(),b);window.onerror=a;Xk=ry;window.addEventListener("unhandledrejection",function(c){if(c.reason instanceof Error){var d=c.reason;ty(d,{source:"unhandledrejection"});d.name==="AbortError"&&(d.level="WARNING")}ry(c.reason);c.preventDefault()})}
;function CC(){var a;return(a=S("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var DC=C.caches,EC;function FC(a){var b=a.indexOf(":");return b===-1?{ee:a}:{ee:a.substring(0,b),datasyncId:a.substring(b+1)}}
function GC(){return A(function(a){if(EC!==void 0)return a.return(EC);EC=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return ya(d,2),d.yield(DC.open("test-only"),4);case 4:return d.yield(DC.delete("test-only"),5);case 5:za(d,3);break;case 2:if(c=Aa(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(EC)})}
function HC(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(GC(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(DC.keys(),3)}c=k.i;d=z(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=FC(f),h=g.datasyncId,!h||a.includes(h)||b.push(DC.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function IC(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(GC(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Ir("cache contains other");return h.yield(DC.keys(),3)}b=h.i;c=z(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=FC(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function JC(){try{return!!self.sessionStorage}catch(a){return!1}}
;function KC(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function LC(a){if(JC()){var b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=KC(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function MC(){if(!JC())return!1;var a=Ir(),b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=KC(c.value),c!==void 0&&c!==a)return!0;return!1}
;function NC(){TB().then(function(a){a&&(Tt(a),HC(a),eA(a),LC(a))})}
function OC(){var a=new dw;sn.ra(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){g.A(2);break}b=Ir("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Tt(h);HC(h);eA(h);LC(h);return g.return()}c=fA();d=MC();return g.yield(IC(),3);case 3:return e=g.i,g.yield(Ut(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.va()?NC():lk(a,"publicytnetworkstatus-online",NC),g.h=0}})})}
;function PC(a){return new Promise(function(b){window.setTimeout(b,a)})}
function QC(a,b,c){this.oc=a;this.o=b;this.i=c;this.u=function(){return new XMLHttpRequest};
this.h=void 0;this.j=[]}
QC.prototype.getLatestChallengeResponse=function(){return this.i};
function lm(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){sB();vB("att_fs",void 0,"attestation_challenge_fetch");if(!a.h)throw new el(9,"Missing fetcher");return h.yield(a.h(b,c),2)}d=h.i;f=(e=d)==null?void 0:e.bgChallenge;if(!f)throw new el(15,"Missing field");a.i=d;a.j.forEach(function(k){k(d)});
g=qA(f);vB("att_fc",void 0,"attestation_challenge_fetch");tB();return h.return(g)})}
function Um(a,b){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:c=new sj(100,3E5,.25,2),d=void 0;case 2:if(!(c.i<10)){h.A(4);break}ya(h,5);if(!(c.i>0)){h.A(7);break}return h.yield(PC(c.getValue()),7);case 7:return h.yield(RC(a,b),9);case 9:return e=h.i,h.return(e);case 5:f=Aa(h);f instanceof el?d=f:(g=f instanceof Error?f.message:"Unknown",d=new el(9,g));tj(c);h.A(2);break;case 4:if(d)throw d;throw new el(9,"Unknown error");}})}
function RC(a,b){b=Yl(Zl(new Xl,b),a.oc);var c=new Ml,d=a.u();d.open("POST",a.o);d.setRequestHeader("X-Goog-Api-Key","AIzaSyDyT5W0Jh49F30Pqqtyfdf7pDLFKLJoAnw");d.setRequestHeader("Content-Type","application/json+protobuf");d.onload=function(){if(zq(d)){var e=nn(d.responseText);c.resolve(e)}else c.reject(new el(cl(Aq(d)),d.statusText))};
d.onerror=function(){c.reject(new el(cl(Aq(d)),d.statusText))};
d.send(b.serialize());return c.promise}
function SC(a){var b={bicf:function(f){a.h=f},
blc:function(){return a.getLatestChallengeResponse()},
bcr:function(f){a.j.push(f)}},c=window;
c.ntpevasrs=b;if(c.ntpqfbel!==void 0)for(var d=z(c.ntpqfbel),e=d.next();!e.done;e=d.next())e=e.value,e(b);c.ntpqfbel=void 0}
;function TC(a){var b,c;(b=a.ytcsi)==null||(c=b.tick)==null||c.call(b,"pot_ist")}
function UC(a){if(a instanceof Error){var b=E("yt.logging.errors.log");b&&b(a,"WARNING")}}
;function VC(a,b){var c=this;this.h=0;var d;this.Fc=(d=b==null?void 0:b.Fc)!=null?d:window;this.Rc=b==null?void 0:b.Rc;var e;this.oc=(e=b==null?void 0:b.oc)!=null?e:Gq("par_bir_key")||"O43z0dpjhgX20SCx4KAo";var f;this.Ce=(f=b==null?void 0:b.Ce)!=null?f:function(k){return new $l(k)};
var g;d=(g=b==null?void 0:b.Ti)!=null?g:function(k,l,m){return new QC(k,l,m)};
this.bgChallenge=qA(a.bgChallenge);this.ttlSeconds=sA(rA(a.challenge||""));this.Oa=d(this.oc,T("par_at_ep")?["www.youtube.com","m.youtube.com"].includes(C.location.hostname)?"/api/jnn/v1/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT",a);SC(this.Oa);var h;this.le=(h=b==null?void 0:b.le)!=null?h:function(k){dk(c.Fc.document,"visibilitychange",function(){c.Fc.document.visibilityState===
"visible"&&k()})}}
function WC(a){if(!a.vm){var b={maxAttempts:5,ke:a.ttlSeconds*1E3};TC(a.Fc);a.vm=a.Ce({Oa:a.Oa,Lb:{disable:T("html5_web_po_disable_remote_logging"),qa:"aGIf",mf:Fq(),Pf:T("wpo_dis_lfdms")?0:1E3,Rb:function(d){var e=bA.get(d);e||(e=new aA(d),e=new Zk(e),bA.set(d,e));return e}},
wc:b,zf:a.bgChallenge,Tf:UC});a.h=Date.now();em(a.vm,function(){a.h=Date.now()});
Kc(a.vm,function(){return A(function(d){return d.return(XC(a))})});
var c=a.j.bind(a);a.Rc&&a.ttlSeconds>0&&a.Rc.then(function(d){d.listen("publicytnetworkstatus-online",c)});
a.le(c)}}
VC.prototype.j=function(){if(Date.now()>this.h+this.ttlSeconds*1E3){var a;(a=this.vm)==null||dm(a)}};
function XC(a){if(a.i)return a.i;if(!a.vm)throw Error("VMNI");a.i=new Qm({vm:a.vm,Oa:a.Oa,Jd:!0,onError:UC});return a.i}
function YC(a,b){a=new VC(a,b);WC(a);XC(a)}
function ZC(a){try{var b=JSON.parse(a);if(b.bgChallenge)return b}catch(c){}}
function $C(){var a=window,b={Rc:Promise.resolve(new dw)};a=a===void 0?window:a;var c=a.ytAtR,d;b==null||(d=b.Wd)==null||d.jj();if(c){if(c=ZC(c)){var e;b==null||(e=b.Wd)==null||e.je("SUCCESS");YC(c,b)}a.ytAtR=void 0}else a.ytAtRC=function(f){if(f=ZC(f)){var g;b==null||(g=b.Wd)==null||g.je("SUCCESS");YC(f,b);a.ytAtRC=void 0}}}
;var aD=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function bD(){this.state=1;this.vm=null;this.h=void 0}
p=bD.prototype;p.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=Ap(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=Bp(a.interpreterSafeUrl).toString());cD(this,e,d,a.program,b,c)}else qy(Error("BL:CIP"))};
function cD(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,vz(Cp(c),function(){window[g]?dD(a,d,g,e):(a.state=3,xz(c),qy(new U("BL:ULB",""+c)))},f)):b?(f=Ui("SCRIPT"),b instanceof Ib?(f.textContent=Kb(b),Lb(f)):f.textContent=b,f.nonce=Hb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?dD(a,d,g,e):(a.state=4,qy(new U("BL:ULBJ")))):qy(new U("BL:ULV"))}
p.isLoading=function(){return this.state===2};
function dD(a,b,c,d){a.state=5;var e=!!a.h&&aD.includes(mc(a.h)||"");try{var f=new Ol({program:b,globalName:c,Lb:{disable:!T("att_web_record_metrics")||!T("att_skip_metrics_for_cookieless_domains_ks")&&e,qa:"aGIf"}});f.Pb.then(function(){a.state=6;d&&d(b)});
a.Cd(f)}catch(g){a.state=7,g instanceof Error&&qy(g)}}
p.invoke=function(a){a=a===void 0?{}:a;return this.Hd()?this.De({Ha:a}):null};
p.dispose=function(){this.Cd(null);this.state=8};
p.Hd=function(){return!!this.vm};
p.De=function(a){return this.vm.se(a)};
p.Cd=function(a){zc(this.vm);this.vm=a};function eD(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function fD(){bD.apply(this,arguments)}
v(fD,bD);fD.prototype.Cd=function(a){var b;(b=eD())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.se.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
fD.prototype.Hd=function(){return!!eD()};
fD.prototype.De=function(a){return eD().bgvmc(a)};var gD=new Sw("AUTH_SERVICE_TOKEN");var hD=new Sw("FETCH_FN_TOKEN"),iD=new Sw("PARSE_FN_TOKEN"),jD=new Sw("WINDOW_REQUEST_TOKEN"),kD=new Sw("TEXT_DECODER_TOKEN");function lD(a){jx.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.H},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.H},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(lD,jx);lD.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
lD.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
lD.prototype.H=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
lD.prototype.i=function(){this.h=new Map};function mD(a){jx.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.H},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.H},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.H},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(mD,jx);mD.prototype.i=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
mD.prototype.h=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
mD.prototype.u=function(a,b){a(b==null?void 0:b.event)};
mD.prototype.H=function(a,b){a(b==null?void 0:b.event)};function nD(){this.o=new lD;this.u=new mD}
nD.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function oD(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
oD.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Jy(c===void 0?0:c)){a=this.client;d=new Cy({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=Xz(d,c);Tz.set(f,!0);Yz(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Wz({cttAuthInfo:Ly(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Zz("visualElementGestured",f,d):a?gy("visualElementGestured",d,a,f):Bs("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
oD.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Cy({trackingParams:a}),b,c===void 0?0:c)};
oD.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Jy(d);a||(a=(a=Gy(d===void 0?0:d))?new Cy({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Wz({cttAuthInfo:Ly(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Zz("visualElementStateChanged",d,b):a?gy("visualElementStateChanged",b,a,d):Bs("visualElementStateChanged",b,d))}};
function pD(a,b){if(b===void 0)for(var c=Iy(),d=0;d<c.length;d++)c[d]!==void 0&&pD(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Vz(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function qD(){nD.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));T("web_log_cfg_cee_ks")||Kr(rD)}
v(qD,nD);qD.prototype.j=function(){Bs("finalPayload",{csn:Jy()})};
qD.prototype.h=function(){wy(xy)};
qD.prototype.i=function(){var a=pD;oD.instance||(oD.instance=new oD);a(oD.instance)};
function rD(){var a=S("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Ce();a=z(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&Bs("genericClientExperimentEvent",{eventType:c});delete cq.CLIENT_EXPERIMENT_EVENTS}}
;function sD(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;U.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
v(sD,U);var tD=new Sw("NETWORK_SLI_TOKEN");function uD(a,b,c,d){this.h=a;this.i=b;this.j=c;this.o=d}
uD.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=vD(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){qy(k);
if((c==null?0:c.lf)&&k instanceof sD&&k.errorType===1)return Promise.reject(k)}))})};
function vD(a,b,c){if(a.h){var d=nc(xc(b,"key"))||"/UNKNOWN_PATH";a.h.start(d)}d=c;T("wug_networking_gzip_request")&&(d=hv(c));var e;return new ((e=a.o)!=null?e:window.Request)(b,d)}
uD.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.If)&&a.ok)return Xg(b.If,e);e=e.replace(")]}'","");if((b==null?0:b.lf)&&e)try{var f=d(e)}catch(h){throw new sD(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Si(),c=c.then(function(e){qy(new U("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
uD[Rw]=[Uw(tD),Uw(hD),Uw(iD),Uw(jD),Uw(kD)];var wD=new Sw("NETWORK_MANAGER_TOKEN");function xD(){}
function yD(){var a=E("ytglobal.storage_");a||(a=new xD,D("ytglobal.storage_",a));return a}
xD.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(zD()):d.return()})};
function zD(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",xD);function zs(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
zs.prototype.wa=function(a){this.handleError(a)};
zs.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":AD(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function AD(a,b){yD().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:BD(c==null?void 0:c.usage),deviceStorageQuotaMbytes:BD(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function BD(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var mC={Qd:{feedbackEndpoint:dC(wC),modifyChannelNotificationPreferenceEndpoint:dC(yC),playlistEditEndpoint:dC(zC),shareEntityEndpoint:dC(vC),subscribeEndpoint:dC(sC),undoFeedbackEndpoint:dC(xC),unsubscribeEndpoint:dC(tC),webPlayerShareEntityServiceEndpoint:dC(AC)}};function CD(){var a=$w();Ww(a,{lc:wD,Gd:uD});Ww(a,{lc:gD,Gd:nr});var b=aC(),c=a.resolve(gD),d=a.resolve(wD),e={};b&&(e.client_location=b);lC(d,c,e);Ww(a,{lc:SB,ze:QB.instance})}
;var DD={},ED=(DD["api.invalidparam"]=2,DD.auth=150,DD["drm.auth"]=150,DD["heartbeat.net"]=150,DD["heartbeat.servererror"]=150,DD["heartbeat.stop"]=150,DD["html5.unsupportedads"]=5,DD["fmt.noneavailable"]=5,DD["fmt.decode"]=5,DD["fmt.unplayable"]=5,DD["html5.missingapi"]=5,DD["html5.unsupportedlive"]=5,DD["drm.unavailable"]=5,DD["mrm.blocked"]=151,DD["embedder.identity.denied"]=152,DD["embedder.identity.missing.referrer"]=153,DD);var FD=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function GD(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function HD(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=z(FD);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);if(a=a.embedConfig||a.embed_config)if(typeof a==="string")b.embed_config=a;else if(Pa(a))try{var e=JSON.stringify(a);b.embed_config=e}catch(f){console.error("Invalid embedConfig JSON",f)}return b}
function ID(a,b,c,d){if(Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function JD(a,b){I.call(this);var c=this;this.api=a;this.B=this.G=!1;this.J=[];this.V={};this.j=[];this.i=[];this.aa=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.Z=T("web_player_split_event_bus_iframe");this.u=S("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.o=function(d){c.onMessage(d)};
KD.addEventListener("message",this.o);if(a=S("WIDGET_ID"))this.sessionId=a;b&&this.o(b);LD(this,"onReady",function(){c.G=!0;var d=c.api.getVideoData();if(!d.isPlayable){c.aa=!0;d=d.errorCode;var e=e===void 0?5:e;c.errorCode=d?ED[d]||e:e;c.sendMessage("onError",Number(c.errorCode))}MD(c)});
LD(this,"onVideoProgress",this.rg.bind(this));LD(this,"onVolumeChange",this.sg.bind(this));LD(this,"onApiChange",this.kg.bind(this));LD(this,"onPlaybackQualityChange",this.og.bind(this));LD(this,"onPlaybackRateChange",this.pg.bind(this));LD(this,"onStateChange",this.qg.bind(this));LD(this,"onWebglSettingsChanged",this.tg.bind(this));LD(this,"onCaptionsTrackListChanged",this.lg.bind(this));LD(this,"captionssettingschanged",this.mg.bind(this))}
v(JD,I);function MD(a){if(a.h)if(a.B)T("embeds_send_already_init_message")&&a.sendMessage("alreadyInitialized");else if(a.G){a.B=!0;a.G=!1;a.sendMessage("initialDelivery",ND(a));a.sendMessage("onReady");vB("ep_init_ar");for(var b=z(a.J),c=b.next();!c.done;c=b.next())OD(a,c.value);a.J=[]}}
function PD(a,b){a.sendMessage("infoDelivery",b)}
p=JD.prototype;p.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.B?OD(this,a):this.J.push(a)};
function QD(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function LD(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function ND(a){if(!a.api)return null;var b=a.api.getApiInterface();Yb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
p.qg=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());PD(this,a)};
p.og=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());PD(this,a)};
p.pg=function(a){PD(this,{playbackRate:a})};
p.kg=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.sg=function(){PD(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
p.rg=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());PD(this,a)};
p.tg=function(){PD(this,{sphericalProperties:this.api.getSphericalProperties()})};
p.lg=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};PD(this,a)}};
p.mg=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};PD(this,a)}};
p.onMessage=function(a){if(!(this.u!=="*"&&a.origin!==this.u||this.h&&a.source!==this.h||typeof a.data!=="string")){try{var b=JSON.parse(a.data)}catch(f){return}if(b)switch(b.event){case "listening":var c=a.source;a=a.origin;b=b.id;a!=="null"&&(this.u=this.targetOrigin=a);this.h=c;this.sessionId=b;MD(this);break;case "command":if(c=b.func,b=b.args,c==="addEventListener"&&b)c=b[0],b=a.origin,c==="onReady"?this.api.logApiCall(c+" invocation",b):c==="onError"&&this.aa&&(this.api.logApiCall(c+" invocation",
b,this.errorCode),this.errorCode=void 0),this.api.logApiCall(c+" registration",b),this.V[c]||c==="onReady"||(a=QD(this,c,b),this.i.push({eventType:c,listener:a,origin:b}),this.Z?this.api.handleExternalCall("addEventListener",[c,a],b):this.api.addEventListener(c,a),this.V[c]=!0);else if(a=a.origin,this.api.isExternalMethodAvailable(c,a)){b=b||[];if(b.length>0&&GD(c)){var d=b;if(Pa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},c){case "loadVideoById":case "cueVideoById":e=HD(d[0],d[1]!==void 0?
Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];typeof e==="string"&&(e={mediaContentUrl:e,startSeconds:d[1]!==void 0?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=d[2];break b}d=null}e.videoId=d;e=HD(e);break;case "loadPlaylist":case "cuePlaylist":e=ID(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(c,b,a);GD(c)&&PD(this,ND(this))}}}};
function OD(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){qy(d)}}}
p.da=function(){I.prototype.da.call(this);KD.removeEventListener("message",this.o);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.Z?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var KD=window;function RD(a,b,c){I.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=T("web_player_split_event_bus_iframe");this.i=function(e){d.onMessage(e)};
SD.addEventListener("message",this.i);TD(this,"RECEIVING")}
v(RD,I);p=RD.prototype;p.addListener=function(a,b){if(!(a in this.h)){var c=this.ng.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
p.ng=function(a,b){this.T||TD(this,a,UD(a,b))};
p.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
p.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
p.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function VD(a,b){switch(a){case "loadVideoById":return[HD(b)];case "cueVideoById":return[HD(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[ID(b)];case "cuePlaylist":return[ID(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function WD(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function UD(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function TD(a,b,c){a.T||(b={id:a.id,command:b},c&&(b.data=c),XD.postMessage(JSON.stringify(b),a.origin))}
p.onMessage=function(a){if(a.origin===this.origin){var b=a.data;if(typeof b==="string"){try{b=JSON.parse(b)}catch(e){return}if(b.command){var c=b.command;b=b.data;a=a.origin;if(!this.T){var d=b||{};switch(c){case "addEventListener":typeof d.event==="string"&&this.addListener(d.event,a);break;case "removeEventListener":typeof d.event==="string"&&this.removeListener(d.event,a);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(c,a||null)&&(b=VD(c,b||{}),b=this.api.handleExternalCall(c,
b,a||null),(b=WD(c,b))&&TD(this,c,b))}}}}}};
p.da=function(){SD.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);I.prototype.da.call(this)};
var SD=window,XD=window.parent;var YD=new fD;function ZD(){return YD.Hd()}
function $D(a){a=a===void 0?{}:a;return YD.invoke(a)}
;function aE(a,b,c,d,e){I.call(this);var f=this;this.B=b;this.webPlayerContextConfig=d;this.Tb=e;this.Va=!1;this.api={};this.na=this.u=null;this.V=new O;this.h={};this.aa=this.za=this.elementId=this.Wa=this.config=null;this.Z=!1;this.j=this.G=null;this.Ga={};this.hd=["onReady"];this.lastError=null;this.lb=NaN;this.J={};this.ha=0;this.i=this.o=a;Bc(this,this.V);bE(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(cE(this),dE(this))}
v(aE,I);p=aE.prototype;p.getId=function(){return this.B};
p.loadNewVideoConfig=function(a){if(!this.T){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof kz||(b=new kz(b));this.config=b;this.setConfig(a);dE(this);this.isReady()&&eE(this)}};
function cE(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.B,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.B:a.config.attrs.id=a.B);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
p.setConfig=function(a){this.Wa=a;this.config=fE(a);cE(this);if(!this.za){var b;this.za=gE(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=kn(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=kn(Number(a)||a))};
function eE(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function hE(a){var b=!0,c=iE(a);c&&a.config&&(b=c.dataset.version===jE(a));return b&&!!E("yt.player.Application.create")}
function dE(a){if(!a.T&&!a.Z){var b=hE(a);if(b&&(iE(a)?"html5":null)==="html5")a.aa="html5",a.isReady()||kE(a);else if(lE(a),a.aa="html5",b&&a.j&&a.o)a.o.appendChild(a.j),kE(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=mE(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?fE(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Tb);kE(a)};
a.Z=!0;b?a.G():(vz(jE(a),a.G),(b=nE(a))&&Cz(b||""),oE(a)&&!c&&D("yt.player.Application.create",null))}}}
function iE(a){var b=Ti(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function kE(a){if(!a.T){var b=iE(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Z=!1;if(!mE(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}pE(a)}else a.lb=setTimeout(function(){kE(a)},50)}}
function pE(a){bE(a);a.Va=!0;var b=iE(a);if(b){a.u=qE(a,b,"addEventListener");a.na=qE(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=qE(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);eE(a);a.za&&a.za(a.api);a.V.zb("onReady",a.api)}
function qE(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.B}),e.level="WARNING",e;}}}
function bE(a){a.Va=!1;if(a.na)for(var b in a.h)a.h.hasOwnProperty(b)&&a.na(b,a.h[b]);for(var c in a.J)a.J.hasOwnProperty(c)&&clearTimeout(Number(c));a.J={};a.u=null;a.na=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Wa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
p.isReady=function(){return this.Va};
p.addEventListener=function(a,b){var c=this,d=gE(this,b);d&&(Sb(this.hd,a)>=0||this.h[a]||(b=rE(this,a),this.u&&this.u(a,b)),this.V.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
p.removeEventListener=function(a,b){this.T||(b=gE(this,b))&&this.V.unsubscribe(a,b)};
function gE(a,b){var c=b;if(typeof b==="string"){if(a.Ga[b])return a.Ga[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ga[b]=c}return c?c:null}
function rE(a,b){function c(d){function e(){if(!a.T)try{a.V.zb(b,d!=null?d:void 0)}catch(h){var g=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.B,data:d,originalStack:h.stack,componentStack:h.Ve});g.level="WARNING";throw g;}}
if(mE(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.J,h=String(f);h in g&&delete g[h]},0);
Ki(a.J,String(f))}}
return a.h[b]=c}
p.getPlayerType=function(){return this.aa||(iE(this)?"html5":null)};
p.getLastError=function(){return this.lastError};
function lE(a){a.cancel();bE(a);a.aa=null;a.config&&(a.config.loaded=!1);var b=iE(a);b&&(hE(a)||!oE(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
p.cancel=function(){this.G&&zz(jE(this),this.G);clearTimeout(this.lb);this.Z=!1};
p.da=function(){lE(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ga=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Wa=this.config=this.api=null;delete this.o;delete this.i;I.prototype.da.call(this)};
function oE(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function jE(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function nE(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function mE(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function fE(a){for(var b={},c=z(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Ni(e):e}return b}
;var sE={},tE="player_uid_"+(Math.random()*1E9>>>0);function uE(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Ti(c):c;var e=tE+"_"+Qa(c),f=sE[e];if(f&&d)return vE(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new aE(c,e,a,b,void 0);sE[e]=f;f.addOnDisposeCallback(function(){delete sE[f.getId()]});
return f.api}
function vE(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var wE=null,xE=null,yE;
function zE(){BB();var a=xr(),b=Ar(119),c=window.devicePixelRatio>1;if(document.body&&An(document.body,"exp-invert-logo"))if(c&&!An(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!An(d,"inverted-hdpi")){var e=yn(d);zn(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&An(document.body,"inverted-hdpi")&&Bn();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Br(b)||0;d=c?d|67108864:d&-67108865;d===0?delete ur[b]:(c=d.toString(16),ur[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in ur)ur.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(ur[f])));var f=d.join("&");qr(b,f,63072E3,a.i,c)}}
function AE(){BE()}
function CE(){vB("ep_init_pr");BE()}
function BE(){var a=wE.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function DE(){wE&&wE.sendAbandonmentPing&&wE.sendAbandonmentPing();S("PL_ATT")&&YD.dispose();for(var a=sn,b=0,c=wA.length;b<c;b++)a.sa(wA[b]);wA.length=0;xz(xA.toString());yA=!1;dq("DCLKSTAT",0);Ac(xE);wE&&(wE.removeEventListener("onVideoDataChange",AE),wE.destroy())}
;var EE;T("embeds_no_early_ticks")?EE=W():vB("ep_init_eps");T("embeds_enable_scheduler")&&ps();D("yt.setConfig",dq);D("yt.config.set",dq);D("yt.setMsg",uz);D("yt.msgs.set",uz);D("yt.logging.errors.log",py);
D("writeEmbed",function(){vB("ep_init_wes");var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}lA(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);c=CC();if(!c.serializedForcedExperimentIds){var d=rq(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)?qB("watch",["pbs","pbu","pbp"]):a.args&&Xy(a.args)?qB("video_preview",["ol"]):qB("embed_no_video",["ep_init_pr"]);wE=uE(a,c);wE.addEventListener("onVideoDataChange",AE);wE.addEventListener("onReady",CE);a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?xE=new JD(wE,yE):S("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(xE=new RD(wE,a,b));yE=void 0;zA();T("ytidb_create_logger_embed_killswitch")||ys();a={};qD.h||(qD.h=new qD);
qD.h.install((a.flush_logs={callback:function(){Ux()}},a));
pw();CD();T("ytidb_clear_embedded_player")&&sn.ra(function(){OC()});
T("enable_rta_manager")&&Kr(function(){T("attmusi")&&$C();var f=new PB;var g={preload:!T("enable_rta_npi"),Ig:T("attmusi")},h=!1;if(typeof g==="boolean")var k={preload:g};else typeof g==="undefined"?k={preload:!0}:(k=g,h=!!g.Qi);g=h?void 0:new dw;DB.instance=new DB(f,k,g);f=DB.instance;k=f.i.bind(f);D("yt.aba.att",k);f=f.j.bind(f);D("yt.aba.att2",f)});
vB("ep_init_wee")});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||ZD);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||$D);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||AA);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||kA);D("yt.util.activity.init",E("yt.util.activity.init")||Dw);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||Gw);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||Ew);window.addEventListener("load",hq(function(){zE()}));
window.addEventListener("pageshow",hq(function(a){a.persisted||zE()}));
window.addEventListener("pagehide",hq(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?DE():a.persisted||DE()}));
T("embeds_enable_contrib_error_handling")?BC():(window.onerror=function(a,b,c,d,e){sy(a,b,c,d,e)},Xk=ry,window.addEventListener("unhandledrejection",function(a){ry(a.reason)}),oy());
(function(){if(T("embeds_enable_early_message_handler")&&S("ENABLE_JS_API")){var a=function(b){yE=b;window.removeEventListener("message",a)};
window.addEventListener("message",a)}})();
T("embeds_no_early_ticks")&&EE&&vB("ep_init_eps",EE);vB("ep_init_epe");}).call(this);
