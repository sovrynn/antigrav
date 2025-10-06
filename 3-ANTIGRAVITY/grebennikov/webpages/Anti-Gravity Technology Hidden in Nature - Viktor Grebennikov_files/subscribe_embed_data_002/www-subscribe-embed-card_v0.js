(function() { /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r;
function aa(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
  }
}
var ba = 'function' == typeof Object.defineProperties ?
    Object.defineProperty :
    function(a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = c.value;
      return a
    };
function ca(a) {
  a = [
    'object' == typeof globalThis && globalThis, a,
    'object' == typeof window && window, 'object' == typeof self && self,
    'object' == typeof global && global
  ];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) return c
  }
  throw Error('Cannot find global object');
}
var da = ca(this);
function t(a, b) {
  if (b)
    a: {
      for (var c = da, d = a.split('.'), e = 0; e < d.length - 1; e++) {
        var f = d[e];
        if (!(f in c)) break a;
        c = c[f]
      } d = d[d.length - 1];
      e = c[d];
      f = b(e);
      f != e && null != f &&
      ba(c, d, {configurable: !0, writable: !0, value: f})
    }
}
t('Symbol', function(a) {
  function b(e) {
    if (this instanceof b) throw new TypeError('Symbol is not a constructor');
    return new c('jscomp_symbol_' + (e || '') + '_' + d++, e)
  }
  function c(e, f) {
    this.f = e;
    ba(this, 'description', {configurable: !0, writable: !0, value: f})
  }
  if (a) return a;
  c.prototype.toString = function() {
    return this.f
  };
  var d = 0;
  return b
});
t('Symbol.iterator', function(a) {
  if (a) return a;
  a = Symbol('Symbol.iterator');
  for (
      var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'
                  .split(' '),
          c = 0;
      c < b.length; c++) {
    var d = da[b[c]];
    'function' === typeof d && 'function' != typeof d.prototype[a] &&
        ba(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function() {
            return ea(aa(this))
          }
        })
  }
  return a
});
function ea(a) {
  a = {next: a};
  a[Symbol.iterator] = function() {
    return this
  };
  return a
}
function u(a) {
  var b = 'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : {next: aa(a)}
}
function fa(a) {
  for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
  return c
}
var ha = 'function' == typeof Object.create ? Object.create : function(a) {
  function b() {}
  b.prototype = a;
  return new b
}, ia;
if ('function' == typeof Object.setPrototypeOf)
  ia = Object.setPrototypeOf;
else {
  var ja;
  a: {
    var ka = {a: !0}, la = {}; try {
      la.__proto__ = ka;
      ja = la.a;
      break a
    } catch (a) {} ja = !1
  } ia = ja ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
    return a
  } : null
}
var ma = ia;
function v(a, b) {
  a.prototype = ha(b.prototype);
  a.prototype.constructor = a;
  if (ma)
    ma(a, b);
  else
    for (var c in b)
      if ('prototype' != c)
        if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(b, c);
          d && Object.defineProperty(a, c, d)
        } else
          a[c] = b[c];
  a.H = b.prototype
}
function na() {
  this.A = !1;
  this.j = null;
  this.g = void 0;
  this.f = 1;
  this.l = this.o = 0;
  this.K = this.i = null
}
function oa(a) {
  if (a.A) throw new TypeError('Generator is already running');
  a.A = !0
}
na.prototype.D = function(a) {
  this.g = a
};
function pa(a, b) {
  a.i = {oa: b, ba: !0};
  a.f = a.o || a.l
}
na.prototype['return'] = function(a) {
  this.i = {'return': a};
  this.f = this.l
};
function y(a, b, c) {
  a.f = c;
  return {
    value: b
  }
}
na.prototype.G = function(a) {
  this.f = a
};
function qa(a) {
  this.f = new na;
  this.g = a
}
function ra(a, b) {
  oa(a.f);
  var c = a.f.j;
  if (c)
    return sa(a, 'return' in c ? c['return'] : function(d) {
      return {
        value: d, done: !0
      }
    }, b, a.f['return']);
  a.f['return'](b);
  return ua(a)
}
function sa(a, b, c, d) {
  try {
    var e = b.call(a.f.j, c);
    if (!(e instanceof Object))
      throw new TypeError('Iterator result ' + e + ' is not an object');
    if (!e.done) return a.f.A = !1, e;
    var f = e.value
  } catch (g) {
    return a.f.j = null, pa(a.f, g), ua(a)
  }
  a.f.j = null;
  d.call(a.f, f);
  return ua(a)
}
function ua(a) {
  for (; a.f.f;) try {
      var b = a.g(a.f);
      if (b) return a.f.A = !1, {
          value: b.value, done: !1
        }
    } catch (c) {
      a.f.g = void 0, pa(a.f, c)
    }
  a.f.A = !1;
  if (a.f.i) {
    b = a.f.i;
    a.f.i = null;
    if (b.ba) throw b.oa;
    return {
      value: b['return'], done: !0
    }
  }
  return {
    value: void 0, done: !0
  }
}
function va(a) {
  this.next = function(b) {
    oa(a.f);
    a.f.j ? b = sa(a, a.f.j.next, b, a.f.D) : (a.f.D(b), b = ua(a));
    return b
  };
  this['throw'] = function(b) {
    oa(a.f);
    a.f.j ? b = sa(a, a.f.j['throw'], b, a.f.D) : (pa(a.f, b), b = ua(a));
    return b
  };
  this['return'] = function(b) {
    return ra(a, b)
  };
  this[Symbol.iterator] = function() {
    return this
  }
}
function z(a, b) {
  var c = new va(new qa(b));
  ma && a.prototype && ma(c, a.prototype);
  return c
}
t('Reflect.setPrototypeOf', function(a) {
  return a ? a :
      ma ?
             function(b, c) {
               try {
                 return ma(b, c), !0
               } catch (d) {
                 return !1
               }
             } :
             null
});
function wa(a, b, c) {
  if (null == a)
    throw new TypeError(
        'The \'this\' value for String.prototype.' + c +
        ' must not be null or undefined');
  if (b instanceof RegExp)
    throw new TypeError(
        'First argument to String.prototype.' + c +
        ' must not be a regular expression');
  return a + ''
}
t('String.prototype.endsWith', function(a) {
  return a ? a : function(b, c) {
    var d = wa(this, b, 'endsWith');
    b += '';
    void 0 === c && (c = d.length);
    for (var e = Math.max(0, Math.min(c | 0, d.length)), f = b.length;
         0 < f && 0 < e;)
      if (d[--e] != b[--f]) return !1;
    return 0 >= f
  }
});
t('String.prototype.startsWith', function(a) {
  return a ? a : function(b, c) {
    var d = wa(this, b, 'startsWith');
    b += '';
    for (var e = d.length, f = b.length,
             g = Math.max(0, Math.min(c | 0, d.length)), h = 0;
         h < f && g < e;)
      if (d[g++] != b[h++]) return !1;
    return h >= f
  }
});
t('Object.setPrototypeOf', function(a) {
  return a || ma
});
function A(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
var xa = 'function' == typeof Object.assign ? Object.assign : function(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (d)
      for (var e in d) A(d, e) && (a[e] = d[e])
  }
  return a
};
t('Object.assign', function(a) {
  return a || xa
});
t('Promise', function(a) {
  function b(g) {
    this.g = 0;
    this.i = void 0;
    this.f = [];
    var h = this.j();
    try {
      g(h.resolve, h.reject)
    } catch (k) {
      h.reject(k)
    }
  }
  function c() {
    this.f = null
  }
  function d(g) {
    return g instanceof b ? g : new b(function(h) {
      h(g)
    })
  }
  if (a) return a;
  c.prototype.g = function(g) {
    if (null == this.f) {
      this.f = [];
      var h = this;
      this.i(function() {
        h.l()
      })
    }
    this.f.push(g)
  };
  var e = da.setTimeout;
  c.prototype.i = function(g) {
    e(g, 0)
  };
  c.prototype.l = function() {
    for (; this.f && this.f.length;) {
      var g = this.f;
      this.f = [];
      for (var h = 0; h < g.length; ++h) {
        var k = g[h];
        g[h] = null;
        try {
          k()
        } catch (l) {
          this.j(l)
        }
      }
    }
    this.f = null
  };
  c.prototype.j = function(g) {
    this.i(function() {
      throw g;
    })
  };
  b.prototype.j = function() {
    function g(l) {
      return function(m) {
        k || (k = !0, l.call(h, m))
      }
    }
    var h = this, k = !1;
    return {
      resolve: g(this.T), reject: g(this.l)
    }
  };
  b.prototype.T = function(g) {
    if (g === this)
      this.l(new TypeError('A Promise cannot resolve to itself'));
    else if (g instanceof b)
      this.ka(g);
    else {
      a: switch (typeof g) {
        case 'object':
          var h = null != g;
          break a;
        case 'function':
          h = !0;
          break a;
        default:
          h = !1
      }
      h ? this.K(g) : this.o(g)
    }
  };
  b.prototype.K = function(g) {
    var h = void 0;
    try {
      h = g.then
    } catch (k) {
      this.l(k);
      return
    }
    'function' == typeof h ? this.la(h, g) : this.o(g)
  };
  b.prototype.l = function(g) {
    this.A(2, g)
  };
  b.prototype.o = function(g) {
    this.A(1, g)
  };
  b.prototype.A = function(g, h) {
    if (0 != this.g)
      throw Error(
          'Cannot settle(' + g + ', ' + h +
          '): Promise already settled in state' + this.g);
    this.g = g;
    this.i = h;
    this.D()
  };
  b.prototype.D = function() {
    if (null != this.f) {
      for (var g = 0; g < this.f.length; ++g) f.g(this.f[g]);
      this.f = null
    }
  };
  var f = new c;
  b.prototype.ka = function(g) {
    var h = this.j();
    g.N(h.resolve, h.reject)
  };
  b.prototype.la = function(g, h) {
    var k = this.j();
    try {
      g.call(h, k.resolve, k.reject)
    } catch (l) {
      k.reject(l)
    }
  };
  b.prototype.then = function(g, h) {
    function k(q, p) {
      return 'function' == typeof q ? function(w) {
        try {
          l(q(w))
        } catch (x) {
          m(x)
        }
      } : p
    }
    var l, m, n = new b(function(q, p) {
                l = q;
                m = p
              });
    this.N(k(g, l), k(h, m));
    return n
  };
  b.prototype['catch'] = function(g) {
    return this.then(void 0, g)
  };
  b.prototype.N = function(g, h) {
    function k() {
      switch (l.g) {
        case 1:
          g(l.i);
          break;
        case 2:
          h(l.i);
          break;
        default:
          throw Error('Unexpected state: ' + l.g);
      }
    }
    var l = this;
    null == this.f ? f.g(k) : this.f.push(k)
  };
  b.resolve = d;
  b.reject = function(g) {
    return new b(function(h, k) {
      k(g)
    })
  };
  b.race = function(g) {
    return new b(function(h, k) {
      for (var l = u(g), m = l.next(); !m.done; m = l.next()) d(m.value).N(h, k)
    })
  };
  b.all = function(g) {
    var h = u(g), k = h.next();
    return k.done ? d([]) : new b(function(l, m) {
      function n(w) {
        return function(x) {
          q[w] = x;
          p--;
          0 == p && l(q)
        }
      }
      var q = [], p = 0;
      do q.push(void 0), p++, d(k.value).N(n(q.length - 1), m), k = h.next();
      while (!k.done)
    })
  };
  return b
});
function ya(a, b) {
  a instanceof String && (a += '');
  var c = 0, d = !1, e = {
    next: function() {
      if (!d && c < a.length) {
        var f = c++;
        return {
          value: b(f, a[f]), done: !1
        }
      }
      d = !0;
      return {
        done: !0, value: void 0
      }
    }
  };
  e[Symbol.iterator] = function() {
    return e
  };
  return e
}
t('Array.prototype.keys', function(a) {
  return a ? a : function() {
    return ya(this, function(b) {
      return b
    })
  }
});
t('Array.prototype.values', function(a) {
  return a ? a : function() {
    return ya(this, function(b, c) {
      return c
    })
  }
});
t('Object.is', function(a) {
  return a ? a : function(b, c) {
    return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
  }
});
t('Array.prototype.includes', function(a) {
  return a ? a : function(b, c) {
    var d = this;
    d instanceof String && (d = String(d));
    var e = d.length, f = c || 0;
    for (0 > f && (f = Math.max(f + e, 0)); f < e; f++) {
      var g = d[f];
      if (g === b || Object.is(g, b)) return !0
    }
    return !1
  }
});
t('String.prototype.includes', function(a) {
  return a ? a : function(b, c) {
    return -1 !== wa(this, b, 'includes').indexOf(b, c || 0)
  }
});
t('Array.prototype.entries', function(a) {
  return a ? a : function() {
    return ya(this, function(b, c) {
      return [b, c]
    })
  }
});
t('WeakMap', function(a) {
  function b(k) {
    this.f = (h += Math.random() + 1).toString();
    if (k) {
      k = u(k);
      for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
    }
  }
  function c() {}
  function d(k) {
    var l = typeof k;
    return 'object' === l && null !== k || 'function' === l
  }
  function e(k) {
    if (!A(k, g)) {
      var l = new c;
      ba(k, g, {value: l})
    }
  }
  function f(k) {
    var l = Object[k];
    l && (Object[k] = function(m) {
      if (m instanceof c) return m;
      Object.isExtensible(m) && e(m);
      return l(m)
    })
  }
  if (function() {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}), l = Object.seal({}),
              m = new a([[k, 2], [l, 3]]);
          if (2 != m.get(k) || 3 != m.get(l)) return !1;
          m['delete'](k);
          m.set(l, 4);
          return !m.has(k) && 4 == m.get(l)
        } catch (n) {
          return !1
        }
      }())
    return a;
  var g = '$jscomp_hidden_' + Math.random();
  f('freeze');
  f('preventExtensions');
  f('seal');
  var h = 0;
  b.prototype.set = function(k, l) {
    if (!d(k)) throw Error('Invalid WeakMap key');
    e(k);
    if (!A(k, g)) throw Error('WeakMap key fail: ' + k);
    k[g][this.f] = l;
    return this
  };
  b.prototype.get = function(k) {
    return d(k) && A(k, g) ? k[g][this.f] : void 0
  };
  b.prototype.has = function(k) {
    return d(k) && A(k, g) && A(k[g], this.f)
  };
  b.prototype['delete'] = function(k) {
    return d(k) && A(k, g) && A(k[g], this.f) ? delete k[g][this.f] : !1
  };
  return b
});
t('Map', function(a) {
  function b() {
    var h = {};
    return h.previous = h.next = h.head = h
  }
  function c(h, k) {
    var l = h.f;
    return ea(function() {
      if (l) {
        for (; l.head != h.f;) l = l.previous;
        for (; l.next != l.head;) return l = l.next, {done: !1, value: k(l)};
        l = null
      }
      return {
        done: !0, value: void 0
      }
    })
  }
  function d(h, k) {
    var l = k && typeof k;
    'object' == l || 'function' == l ?
        f.has(k) ? l = f.get(k) : (l = '' + ++g, f.set(k, l)) :
        l = 'p_' + k;
    var m = h.g[l];
    if (m && A(h.g, l))
      for (var n = 0; n < m.length; n++) {
        var q = m[n];
        if (k !== k && q.key !== q.key || k === q.key) return {
            id: l, list: m, index: n, B: q
          }
      }
    return {
      id: l, list: m, index: -1, B: void 0
    }
  }
  function e(h) {
    this.g = {};
    this.f = b();
    this.size = 0;
    if (h) {
      h = u(h);
      for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
    }
  }
  if (function() {
        if (!a || 'function' != typeof a || !a.prototype.entries ||
            'function' != typeof Object.seal)
          return !1;
        try {
          var h = Object.seal({x: 4}), k = new a(u([[h, 's']]));
          if ('s' != k.get(h) || 1 != k.size || k.get({x: 4}) ||
              k.set({x: 4}, 't') != k || 2 != k.size)
            return !1;
          var l = k.entries(), m = l.next();
          if (m.done || m.value[0] != h || 's' != m.value[1]) return !1;
          m = l.next();
          return m.done || 4 != m.value[0].x || 't' != m.value[1] ||
                  !l.next().done ?
              !1 :
              !0
        } catch (n) {
          return !1
        }
      }())
    return a;
  var f = new WeakMap;
  e.prototype.set = function(h, k) {
    h = 0 === h ? 0 : h;
    var l = d(this, h);
    l.list || (l.list = this.g[l.id] = []);
    l.B ? l.B.value = k :
          (l.B = {
            next: this.f,
            previous: this.f.previous,
            head: this.f,
            key: h,
            value: k
          },
           l.list.push(l.B), this.f.previous.next = l.B, this.f.previous = l.B,
           this.size++);
    return this
  };
  e.prototype['delete'] = function(h) {
    h = d(this, h);
    return h.B && h.list ?
        (h.list.splice(h.index, 1), h.list.length || delete this.g[h.id],
         h.B.previous.next = h.B.next, h.B.next.previous = h.B.previous,
         h.B.head = null, this.size--, !0) :
        !1
  };
  e.prototype.clear = function() {
    this.g = {};
    this.f = this.f.previous = b();
    this.size = 0
  };
  e.prototype.has = function(h) {
    return !!d(this, h).B
  };
  e.prototype.get = function(h) {
    return (h = d(this, h).B) && h.value
  };
  e.prototype.entries = function() {
    return c(this, function(h) {
      return [h.key, h.value]
    })
  };
  e.prototype.keys = function() {
    return c(this, function(h) {
      return h.key
    })
  };
  e.prototype.values = function() {
    return c(this, function(h) {
      return h.value
    })
  };
  e.prototype.forEach = function(h, k) {
    for (var l = this.entries(), m; !(m = l.next()).done;)
      m = m.value, h.call(k, m[1], m[0], this)
  };
  e.prototype[Symbol.iterator] = e.prototype.entries;
  var g = 0;
  return e
});
t('Object.entries', function(a) {
  return a ? a : function(b) {
    var c = [], d;
    for (d in b) A(b, d) && c.push([d, b[d]]);
    return c
  }
});
t('Set', function(a) {
  function b(c) {
    this.f = new Map;
    if (c) {
      c = u(c);
      for (var d; !(d = c.next()).done;) this.add(d.value)
    }
    this.size = this.f.size
  }
  if (function() {
        if (!a || 'function' != typeof a || !a.prototype.entries ||
            'function' != typeof Object.seal)
          return !1;
        try {
          var c = Object.seal({x: 4}), d = new a(u([c]));
          if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size ||
              d.add({x: 4}) != d || 2 != d.size)
            return !1;
          var e = d.entries(), f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done || f.value[0] == c || 4 != f.value[0].x ||
                  f.value[1] != f.value[0] ?
              !1 :
              e.next().done
        } catch (g) {
          return !1
        }
      }())
    return a;
  b.prototype.add = function(c) {
    c = 0 === c ? 0 : c;
    this.f.set(c, c);
    this.size = this.f.size;
    return this
  };
  b.prototype['delete'] = function(c) {
    c = this.f['delete'](c);
    this.size = this.f.size;
    return c
  };
  b.prototype.clear = function() {
    this.f.clear();
    this.size = 0
  };
  b.prototype.has = function(c) {
    return this.f.has(c)
  };
  b.prototype.entries = function() {
    return this.f.entries()
  };
  b.prototype.values = function() {
    return this.f.values()
  };
  b.prototype.keys = b.prototype.values;
  b.prototype[Symbol.iterator] = b.prototype.values;
  b.prototype.forEach = function(c, d) {
    var e = this;
    this.f.forEach(function(f) {
      return c.call(d, f, f, e)
    })
  };
  return b
});
var B = this || self;
function C(a, b) {
  for (var c = a.split('.'), d = b || B, e = 0; e < c.length; e++)
    if (d = d[c[e]], null == d) return null;
  return d
}
function za() {}
function Aa(a) {
  var b = typeof a;
  return 'object' != b ? b : a ? Array.isArray(a) ? 'array' : b : 'null'
}
function Ba(a) {
  var b = Aa(a);
  return 'array' == b || 'object' == b && 'number' == typeof a.length
}
function Ca(a) {
  var b = typeof a;
  return 'object' == b && null != a || 'function' == b
}
function Da(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function Ea(a, b, c) {
  if (!a) throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function Fa(a, b, c) {
  Function.prototype.bind &&
          -1 != Function.prototype.bind.toString().indexOf('native code') ?
      Fa = Da :
      Fa = Ea;
  return Fa.apply(null, arguments)
}
function D(a, b) {
  var c = a.split('.'), d = B;
  c[0] in d || 'undefined' == typeof d.execScript ||
      d.execScript('var ' + c[0]);
  for (var e; c.length && (e = c.shift());)
    c.length || void 0 === b ?
        d[e] && d[e] !== Object.prototype[e] ? d = d[e] : d = d[e] = {} :
        d[e] = b
}
function E(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.H = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
function Ga(a) {
  return a
}
function Ha(a) {
  var b = null, c = B.trustedTypes;
  if (!c || !c.createPolicy) return b;
  try {
    b = c.createPolicy(
        a, {createHTML: Ga, createScript: Ga, createScriptURL: Ga})
  } catch (d) {
    B.console && B.console.error(d.message)
  }
  return b
};
function Ia(a) {
  if (Error.captureStackTrace)
    Error.captureStackTrace(this, Ia);
  else {
    var b = Error().stack;
    b && (this.stack = b)
  }
  a && (this.message = String(a))
}
E(Ia, Error);
Ia.prototype.name = 'CustomError';
function Ja(a) {
  a = a.url;
  var b = /[?&]dsh=1(&|$)/.test(a);
  this.i = !b && /[?&]ae=1(&|$)/.test(a);
  this.j = !b && /[?&]ae=2(&|$)/.test(a);
  if ((this.f = /[?&]adurl=([^&]*)/.exec(a)) && this.f[1]) {
    try {
      var c = decodeURIComponent(this.f[1])
    } catch (d) {
      c = null
    }
    this.g = c
  }
};
var Ka = Array.prototype.indexOf ? function(a, b) {
  return Array.prototype.indexOf.call(a, b, void 0)
} : function(a, b) {
  if ('string' === typeof a)
    return 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
  for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b) return c;
  return -1
}, G = Array.prototype.forEach ? function(a, b, c) {
  Array.prototype.forEach.call(a, b, c)
} : function(a, b, c) {
  for (var d = a.length, e = 'string' === typeof a ? a.split('') : a, f = 0;
       f < d; f++)
    f in e && b.call(c, e[f], f, a)
}, La = Array.prototype.filter ? function(a, b) {
  return Array.prototype.filter.call(a, b, void 0)
} : function(a, b) {
  for (var c = a.length, d = [], e = 0,
           f = 'string' === typeof a ? a.split('') : a, g = 0;
       g < c; g++)
    if (g in f) {
      var h = f[g];
      b.call(void 0, h, g, a) && (d[e++] = h)
    }
  return d
}, Ma = Array.prototype.reduce ? function(a, b, c) {
  return Array.prototype.reduce.call(a, b, c)
} : function(a, b, c) {
  var d = c;
  G(a, function(e, f) {
    d = b.call(void 0, d, e, f, a)
  });
  return d
};
function Na(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c
  }
  return []
}
function Oa(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (Ba(d)) {
      var e = a.length || 0, f = d.length || 0;
      a.length = e + f;
      for (var g = 0; g < f; g++) a[e + g] = d[g]
    } else
      a.push(d)
  }
};
function Pa(a, b) {
  for (var c in a) b.call(void 0, a[c], c, a)
}
function Qa(a) {
  if (!a || 'object' !== typeof a) return a;
  if ('function' === typeof a.clone) return a.clone();
  var b = Array.isArray(a) ? [] :
      'function' !== typeof ArrayBuffer ||
          'function' !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) ||
          a instanceof DataView ?
                             {} :
                             new a.constructor(a.length),
      c;
  for (c in a) b[c] = Qa(a[c]);
  return b
}
var Sa =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'
        .split(' ');
function Ta(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (var f = 0; f < Sa.length; f++)
      c = Sa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
  }
};
var Ua;
var Va = String.prototype.trim ? function(a) {
  return a.trim()
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
function Wa(a, b) {
  if (b)
    a = a.replace(Xa, '&amp;')
            .replace(Ya, '&lt;')
            .replace(Za, '&gt;')
            .replace($a, '&quot;')
            .replace(ab, '&#39;')
            .replace(bb, '&#0;');
  else {
    if (!cb.test(a)) return a;
    -1 != a.indexOf('&') && (a = a.replace(Xa, '&amp;'));
    -1 != a.indexOf('<') && (a = a.replace(Ya, '&lt;'));
    -1 != a.indexOf('>') && (a = a.replace(Za, '&gt;'));
    -1 != a.indexOf('"') && (a = a.replace($a, '&quot;'));
    -1 != a.indexOf('\'') && (a = a.replace(ab, '&#39;'));
    -1 != a.indexOf('\x00') && (a = a.replace(bb, '&#0;'))
  }
  return a
}
var Xa = /&/g, Ya = /</g, Za = />/g, $a = /"/g, ab = /'/g, bb = /\x00/g,
    cb = /[\x00&<>"']/;
function H(a, b) {
  this.f = b === db ? a : ''
}
H.prototype.P = !0;
H.prototype.O = function() {
  return this.f.toString()
};
H.prototype.aa = !0;
H.prototype.Z = function() {
  return 1
};
var eb =
        /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
    fb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    gb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, db = {},
    hb = new H('about:invalid#zClosurez', db);
var I;
a: {
  var ib = B.navigator; if (ib) {
    var jb = ib.userAgent;
    if (jb) {
      I = jb;
      break a
    }
  } I = ''
} function J(a) {
  return -1 != I.indexOf(a)
};
function kb(a, b, c) {
  this.f = c === lb ? a : '';
  this.g = b
}
kb.prototype.aa = !0;
kb.prototype.Z = function() {
  return this.g
};
kb.prototype.P = !0;
kb.prototype.O = function() {
  return this.f.toString()
};
var lb = {};
function mb(a, b) {
  void 0 === Ua && (Ua = Ha('goog#html'));
  var c = (c = Ua) ? c.createHTML(a) : a;
  return new kb(c, b, lb)
};
function nb(a) {
  return a = Wa(a, void 0)
};
var ob =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function pb(a) {
  return a ? decodeURI(a) : a
}
function qb(a) {
  return pb(a.match(ob)[3] || null)
}
function rb(a, b, c) {
  if (Array.isArray(b))
    for (var d = 0; d < b.length; d++) rb(a, String(b[d]), c);
  else
    null != b &&
        c.push(a + ('' === b ? '' : '=' + encodeURIComponent(String(b))))
}
function sb(a) {
  var b = [], c;
  for (c in a) rb(c, a[c], b);
  return b.join('&')
}
var ub = /#|$/;
function K(a, b) {
  var c = void 0;
  return new (c || (c = Promise))(function(d, e) {
    function f(k) {
      try {
        h(b.next(k))
      } catch (l) {
        e(l)
      }
    }
    function g(k) {
      try {
        h(b['throw'](k))
      } catch (l) {
        e(l)
      }
    }
    function h(k) {
      k.done ? d(k.value) : (new c(function(l) {
                              l(k.value)
                            })).then(f, g)
    }
    h((b = b.apply(a, void 0)).next())
  })
};
var vb = J('Opera'), wb = J('Trident') || J('MSIE'), xb = J('Edge'),
    yb = J('Gecko') &&
    !(-1 != I.toLowerCase().indexOf('webkit') && !J('Edge')) &&
    !(J('Trident') || J('MSIE')) && !J('Edge'),
    zb = -1 != I.toLowerCase().indexOf('webkit') && !J('Edge');
function Ab() {
  var a = B.document;
  return a ? a.documentMode : void 0
}
var Bb;
a: {
  var Cb = '',
  Db =
      function() {
        var a = I;
        if (yb) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (xb) return /Edge\/([\d\.]+)/.exec(a);
        if (wb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (zb) return /WebKit\/(\S+)/.exec(a);
        if (vb) return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();
  Db && (Cb = Db ? Db[1] : '');
  if (wb) {
    var Eb = Ab();
    if (null != Eb && Eb > parseFloat(Cb)) {
      Bb = String(Eb);
      break a
    }
  } Bb = Cb
} var Fb = Bb,
      Gb;
if (B.document && wb) {
  var Hb = Ab();
  Gb = Hb ? Hb : parseInt(Fb, 10) || void 0
} else
  Gb = void 0;
var Ib = Gb;
var Jb = J('iPhone') && !J('iPod') && !J('iPad') || J('iPod'), Kb = J('iPad');
var Lb = {}, Mb = null;
var L = window;
function Nb(a) {
  var b = C('window.location.href');
  null == a && (a = 'Unknown Error of type "null/undefined"');
  if ('string' === typeof a)
    return {
      message: a,
      name: 'Unknown error',
      lineNumber: 'Not available',
      fileName: b,
      stack: 'Not available'
    };
  var c = !1;
  try {
    var d = a.lineNumber || a.line || 'Not available'
  } catch (g) {
    d = 'Not available', c = !0
  }
  try {
    var e = a.fileName || a.filename || a.sourceURL || B.$googDebugFname || b
  } catch (g) {
    e = 'Not available', c = !0
  }
  b = Ob(a);
  if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
    c = a.message;
    if (null == c) {
      if (a.constructor && a.constructor instanceof Function) {
        if (a.constructor.name)
          c = a.constructor.name;
        else if (c = a.constructor, Pb[c])
          c = Pb[c];
        else {
          c = String(c);
          if (!Pb[c]) {
            var f = /function\s+([^\(]+)/m.exec(c);
            Pb[c] = f ? f[1] : '[Anonymous]'
          }
          c = Pb[c]
        }
        c = 'Unknown Error of type "' + c + '"'
      } else
        c = 'Unknown Error of unknown type';
      'function' === typeof a.toString &&
          Object.prototype.toString !== a.toString && (c += ': ' + a.toString())
    }
    return {
      message: c, name: a.name || 'UnknownError', lineNumber: d, fileName: e,
          stack: b || 'Not available'
    }
  }
  a.stack = b;
  return a
}
function Ob(a, b) {
  b || (b = {});
  b[Qb(a)] = !0;
  var c = a.stack || '', d = a.La;
  d && !b[Qb(d)] &&
      (c += '\nCaused by: ',
       d.stack && 0 == d.stack.indexOf(d.toString()) ||
           (c += 'string' === typeof d ? d : d.message + '\n'),
       c += Ob(d, b));
  return c
}
function Qb(a) {
  var b = '';
  'function' === typeof a.toString && (b = '' + a);
  return b + a.stack
}
var Pb = {};
function Rb(a) {
  this.f = a || {
    cookie: ''
  }
}
r = Rb.prototype;
r.isEnabled = function() {
  return navigator.cookieEnabled
};
r.set = function(a, b, c) {
  var d = !1;
  if ('object' === typeof c) {
    var e = c.Sa;
    d = c.secure || !1;
    var f = c.domain || void 0;
    var g = c.path || void 0;
    var h = c.ca
  }
  if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
  if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
  void 0 === h && (h = -1);
  this.f.cookie = a + '=' + b + (f ? ';domain=' + f : '') +
      (g ? ';path=' + g : '') +
      (0 > h ? '' :
           0 == h ?
               ';expires=' + (new Date(1970, 1, 1)).toUTCString() :
               ';expires=' + (new Date(Date.now() + 1E3 * h)).toUTCString()) +
      (d ? ';secure' : '') + (null != e ? ';samesite=' + e : '')
};
r.get = function(a, b) {
  for (var c = a + '=', d = (this.f.cookie || '').split(';'), e = 0, f;
       e < d.length; e++) {
    f = Va(d[e]);
    if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
    if (f == a) return ''
  }
  return b
};
r.remove = function(a, b, c) {
  var d = void 0 !== this.get(a);
  this.set(a, '', {ca: 0, path: b, domain: c});
  return d
};
r.isEmpty = function() {
  return !this.f.cookie
};
r.clear = function() {
  for (var a = (this.f.cookie || '').split(';'), b = [], c = [], d, e, f = 0;
       f < a.length; f++)
    e = Va(a[f]), d = e.indexOf('='),
    -1 == d ? (b.push(''), c.push(e)) :
              (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};
var Sb = new Rb('undefined' == typeof document ? null : document);
var Tb = !wb || 9 <= Number(Ib);
function Ub(a, b) {
  this.width = a;
  this.height = b
}
r = Ub.prototype;
r.clone = function() {
  return new Ub(this.width, this.height)
};
r.aspectRatio = function() {
  return this.width / this.height
};
r.isEmpty = function() {
  return !(this.width * this.height)
};
r.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
r.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
r.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
function Vb(a, b) {
  Pa(b, function(c, d) {
    c && 'object' == typeof c && c.P && (c = c.O());
    'style' == d             ? a.style.cssText = c :
        'class' == d         ? a.className = c :
        'for' == d           ? a.htmlFor = c :
        Wb.hasOwnProperty(d) ? a.setAttribute(Wb[d], c) :
        0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0) ?
                               a.setAttribute(d, c) :
                               a[d] = c
  })
}
var Wb = {
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  colspan: 'colSpan',
  frameborder: 'frameBorder',
  height: 'height',
  maxlength: 'maxLength',
  nonce: 'nonce',
  role: 'role',
  rowspan: 'rowSpan',
  type: 'type',
  usemap: 'useMap',
  valign: 'vAlign',
  width: 'width'
};
function Xb(a, b, c) {
  var d = arguments, e = document, f = String(d[0]), g = d[1];
  if (!Tb && g && (g.name || g.type)) {
    f = ['<', f];
    g.name && f.push(' name="', nb(g.name), '"');
    if (g.type) {
      f.push(' type="', nb(g.type), '"');
      var h = {};
      Ta(h, g);
      delete h.type;
      g = h
    }
    f.push('>');
    f = f.join('')
  }
  f = Yb(e, f);
  g &&
      ('string' === typeof g ? f.className = g :
           Array.isArray(g)  ? f.className = g.join(' ') :
                               Vb(f, g));
  2 < d.length && Zb(e, f, d);
  return f
}
function Zb(a, b, c) {
  function d(h) {
    h && b.appendChild('string' === typeof h ? a.createTextNode(h) : h)
  }
  for (var e = 2; e < c.length; e++) {
    var f = c[e];
    if (!Ba(f) || Ca(f) && 0 < f.nodeType)
      d(f);
    else {
      a: {
        if (f && 'number' == typeof f.length) {
          if (Ca(f)) {
            var g = 'function' == typeof f.item || 'string' == typeof f.item;
            break a
          }
          if ('function' === typeof f) {
            g = 'function' == typeof f.item;
            break a
          }
        } g = !1
      } G(g ? Na(f) : f, d)
    }
  }
}
function Yb(a, b) {
  b = String(b);
  'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
  return a.createElement(b)
};
function $b(a) {
  var b = ac;
  if (b)
    for (var c in b)
      Object.prototype.hasOwnProperty.call(b, c) && a.call(void 0, b[c], c, b)
}
function bc() {
  var a = [];
  $b(function(b) {
    a.push(b)
  });
  return a
}
var ac = {
  ya: 'allow-forms',
  za: 'allow-modals',
  Aa: 'allow-orientation-lock',
  Ba: 'allow-pointer-lock',
  Ca: 'allow-popups',
  Da: 'allow-popups-to-escape-sandbox',
  Ea: 'allow-presentation',
  Fa: 'allow-same-origin',
  Ga: 'allow-scripts',
  Ha: 'allow-top-navigation',
  Ia: 'allow-top-navigation-by-user-activation'
},
    cc = function(a) {
      var b = !1, c;
      return function() {
        b || (c = a(), b = !0);
        return c
      }
    }(function() {
      return bc()
    });
function dc() {
  var a = Yb(document, 'IFRAME'), b = {};
  G(cc(), function(c) {
    a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
  });
  return b
};
function ec() {
  this.i = this.i;
  this.j = this.j
}
ec.prototype.i = !1;
ec.prototype.dispose = function() {
  this.i || (this.i = !0, this.L())
};
ec.prototype.L = function() {
  if (this.j)
    for (; this.j.length;) this.j.shift()()
};
var fc = {};
function gc() {}
function hc(a, b) {
  if (b !== fc) throw Error('Bad secret');
  this.f = a
}
v(hc, gc);
hc.prototype.toString = function() {
  return this.f
};
new hc('about:blank', fc);
new hc('about:invalid#zTSz', fc);
function ic(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = zb && !b && !c;
  if ((void 0 === b || d) && a.getBoundingClientRect) {
    try {
      var e = a.getBoundingClientRect()
    } catch (f) {
      e = { left: 0, top: 0, right: 0, bottom: 0 }
    }
    return new Ub(e.right - e.left, e.bottom - e.top)
  }
  return new Ub(b, c)
};
var jc = (new Date).getTime();
function kc(a) {
  if (!a) return '';
  a = a.split('#')[0].split('?')[0];
  a = a.toLowerCase();
  0 == a.indexOf('//') && (a = window.location.protocol + a);
  /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
  var b = a.substring(a.indexOf('://') + 3), c = b.indexOf('/');
  -1 != c && (b = b.substring(0, c));
  a = a.substring(0, a.indexOf('://'));
  if ('http' !== a && 'https' !== a && 'chrome-extension' !== a &&
      'moz-extension' !== a && 'file' !== a && 'android-app' !== a &&
      'chrome-search' !== a && 'chrome-untrusted' !== a && 'chrome' !== a &&
      'app' !== a && 'devtools' !== a)
    throw Error('Invalid URI scheme in origin: ' + a);
  c = '';
  var d = b.indexOf(':');
  if (-1 != d) {
    var e = b.substring(d + 1);
    b = b.substring(0, d);
    if ('http' === a && '80' !== e || 'https' === a && '443' !== e) c = ':' + e
  }
  return a + '://' + b + c
}; /*
   gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var lc = window, mc = document, nc = lc.location;
function oc() {}
var pc = /\[native code\]/;
function M(a, b, c) {
  return a[b] = a[b] || c
}
function qc(a) {
  a = a.sort();
  for (var b = [], c = void 0, d = 0; d < a.length; d++) {
    var e = a[d];
    e != c && b.push(e);
    c = e
  }
  return b
}
function N() {
  var a;
  if ((a = Object.create) && pc.test(a))
    a = a(null);
  else {
    a = {};
    for (var b in a) a[b] = void 0
  }
  return a
}
var rc = M(lc, 'gapi', {});
var P;
P = M(lc, '___jsl', N());
M(P, 'I', 0);
M(P, 'hel', 10);
function sc() {
  var a = nc.href;
  if (P.dpo)
    var b = P.h;
  else {
    b = P.h;
    var c = RegExp('([#].*&|[#])jsh=([^&#]*)', 'g'),
        d = RegExp('([?#].*&|[?#])jsh=([^&#]*)', 'g');
    if (a = a && (c.exec(a) || d.exec(a))) try {
        b = decodeURIComponent(a[2])
      } catch (e) {
      }
  }
  return b
}
function tc(a) {
  var b = M(P, 'PQ', []);
  P.PQ = [];
  var c = b.length;
  if (0 === c)
    a();
  else
    for (var d = 0, e = function() {
           ++d === c && a()
         }, f = 0; f < c; f++)
      b[f](e)
}
function uc(a) {
  return M(M(P, 'H', N()), a, N())
};
function vc() {
  function a() {
    e[0] = 1732584193;
    e[1] = 4023233417;
    e[2] = 2562383102;
    e[3] = 271733878;
    e[4] = 3285377520;
    m = l = 0
  }
  function b(n) {
    for (var q = g, p = 0; 64 > p; p += 4)
      q[p / 4] = n[p] << 24 | n[p + 1] << 16 | n[p + 2] << 8 | n[p + 3];
    for (p = 16; 80 > p; p++)
      n = q[p - 3] ^ q[p - 8] ^ q[p - 14] ^ q[p - 16],
      q[p] = (n << 1 | n >>> 31) & 4294967295;
    n = e[0];
    var w = e[1], x = e[2], F = e[3], ta = e[4];
    for (p = 0; 80 > p; p++) {
      if (40 > p)
        if (20 > p) {
          var O = F ^ w & (x ^ F);
          var Y = 1518500249
        } else
          O = w ^ x ^ F, Y = 1859775393;
      else
        60 > p ? (O = w & x | F & (w | x), Y = 2400959708) :
                 (O = w ^ x ^ F, Y = 3395469782);
      O = ((n << 5 | n >>> 27) & 4294967295) + O + ta + Y + q[p] & 4294967295;
      ta = F;
      F = x;
      x = (w << 30 | w >>> 2) & 4294967295;
      w = n;
      n = O
    }
    e[0] = e[0] + n & 4294967295;
    e[1] = e[1] + w & 4294967295;
    e[2] = e[2] + x & 4294967295;
    e[3] = e[3] + F & 4294967295;
    e[4] = e[4] + ta & 4294967295
  }
  function c(n, q) {
    if ('string' === typeof n) {
      n = unescape(encodeURIComponent(n));
      for (var p = [], w = 0, x = n.length; w < x; ++w) p.push(n.charCodeAt(w));
      n = p
    }
    q || (q = n.length);
    p = 0;
    if (0 == l)
      for (; p + 64 < q;) b(n.slice(p, p + 64)), p += 64, m += 64;
    for (; p < q;)
      if (f[l++] = n[p++], m++, 64 == l)
        for (l = 0, b(f); p + 64 < q;) b(n.slice(p, p + 64)), p += 64, m += 64
  }
  function d() {
    var n = [], q = 8 * m;
    56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
    for (var p = 63; 56 <= p; p--) f[p] = q & 255, q >>>= 8;
    b(f);
    for (p = q = 0; 5 > p; p++)
      for (var w = 24; 0 <= w; w -= 8) n[q++] = e[p] >> w & 255;
    return n
  }
  for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
  var l, m;
  a();
  return {
    reset: a, update: c, digest: d, ma: function() {
      for (var n = d(), q = '', p = 0; p < n.length; p++)
        q += '0123456789ABCDEF'.charAt(Math.floor(n[p] / 16)) +
            '0123456789ABCDEF'.charAt(n[p] % 16);
      return q
    }
  }
};
function wc(a, b, c) {
  var d = [], e = [];
  if (1 == (Array.isArray(c) ? 2 : 1))
    return e = [b, a], G(d, function(h) {
             e.push(h)
           }), xc(e.join(' '));
  var f = [], g = [];
  G(c, function(h) {
    g.push(h.key);
    f.push(h.value)
  });
  c = Math.floor((new Date).getTime() / 1E3);
  e = 0 == f.length ? [c, b, a] : [f.join(':'), c, b, a];
  G(d, function(h) {
    e.push(h)
  });
  a = xc(e.join(' '));
  a = [c, a];
  0 == g.length || a.push(g.join(''));
  return a.join('_')
}
function xc(a) {
  var b = vc();
  b.update(a);
  return b.ma().toLowerCase()
};
function yc(a) {
  var b = kc(String(B.location.href)), c;
  (c = B.__SAPISID || B.__APISID || B.__OVERRIDE_SID) ?
      c = !0 :
      (c = new Rb(document),
       c = c.get('SAPISID') || c.get('APISID') || c.get('__Secure-3PAPISID') ||
           c.get('SID'),
       c = !!c);
  if (c &&
      (c = (b = 0 == b.indexOf('https:') ||
                0 == b.indexOf('chrome-extension:') ||
                0 == b.indexOf('moz-extension:')) ?
           B.__SAPISID :
           B.__APISID,
       c ||
           (c = new Rb(document),
            c = c.get(b ? 'SAPISID' : 'APISID') || c.get('__Secure-3PAPISID')),
       c)) {
    b = b ? 'SAPISIDHASH' : 'APISIDHASH';
    var d = String(B.location.href);
    return d && c && b ? [b, wc(kc(d), c, a || null)].join(' ') : null
  }
  return null
};
var zc = M(P, 'perf', N());
M(zc, 'g', N());
var Ac = M(zc, 'i', N());
M(zc, 'r', []);
N();
N();
function Bc(a, b, c) {
  b && 0 < b.length &&
      (b = Cc(b), c && 0 < c.length && (b += '___' + Cc(c)),
       28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b,
       b = M(Ac, '_p', N()), M(b, c, N())[a] = (new Date).getTime(), b = zc.r,
       'function' === typeof b ? b(a, '_p', c) : b.push([a, '_p', c]))
}
function Cc(a) {
  return a.join('__').replace(/\./g, '_').replace(/\-/g, '_').replace(/,/g, '_')
};
var Dc = N(), Ec = [];
function Q(a) {
  throw Error('Bad hint' + (a ? ': ' + a : ''));
}
Ec.push([
  'jsl',
  function(a) {
    for (var b in a)
      if (Object.prototype.hasOwnProperty.call(a, b)) {
        var c = a[b];
        'object' == typeof c ? P[b] = M(P, b, []).concat(c) : M(P, b, c)
      }
    if (b = a.u)
      a = M(P, 'us', []), a.push(b),
      (b = /^https:(.*)$/.exec(b)) && a.push('http:' + b[1])
  }
]);
var Fc = /^(\/[a-zA-Z0-9_\-]+)+$/, Gc = [/\/amp\//, /\/amp$/, /^\/amp$/],
    Hc = /^[a-zA-Z0-9\-_\.,!]+$/, Ic = /^gapi\.loaded_[0-9]+$/,
    Jc = /^[a-zA-Z0-9,._-]+$/;
function Kc(a, b, c, d) {
  var e = a.split(';'), f = e.shift(), g = Dc[f], h = null;
  g ? h = g(e, b, c, d) : Q('no hint processor for: ' + f);
  h || Q('failed to generate load url');
  b = h;
  c = b.match(Lc);
  (d = b.match(Mc)) && 1 === d.length && Nc.test(b) && c && 1 === c.length ||
      Q('failed sanity: ' + a);
  return h
}
function Oc(a, b, c, d) {
  function e(f) {
    return encodeURIComponent(f).replace(/%2C/g, ',')
  }
  a = Pc(a);
  Ic.test(c) || Q('invalid_callback');
  b = Qc(b);
  d = d && d.length ? Qc(d) : null;
  return [
    encodeURIComponent(a.pathPrefix).replace(/%2C/g, ',').replace(/%2F/g, '/'),
    '/k=', e(a.version), '/m=', e(b), d ? '/exm=' + e(d) : '',
    '/rt=j/sv=1/d=1/ed=1', a.X ? '/am=' + e(a.X) : '',
    a.ha ? '/rs=' + e(a.ha) : '', a.ja ? '/t=' + e(a.ja) : '', '/cb=', e(c)
  ].join('')
}
function Pc(a) {
  '/' !== a.charAt(0) && Q('relative path');
  for (var b = a.substring(1).split('/'), c = []; b.length;) {
    a = b.shift();
    if (!a.length || 0 == a.indexOf('.'))
      Q('empty/relative directory');
    else if (0 < a.indexOf('=')) {
      b.unshift(a);
      break
    }
    c.push(a)
  }
  a = {};
  for (var d = 0, e = b.length; d < e; ++d) {
    var f = b[d].split('='), g = decodeURIComponent(f[0]),
        h = decodeURIComponent(f[1]);
    2 == f.length && g && h && (a[g] = a[g] || h)
  }
  b = '/' + c.join('/');
  Fc.test(b) || Q('invalid_prefix');
  c = 0;
  for (d = Gc.length; c < d; ++c) Gc[c].test(b) && Q('invalid_prefix');
  c = Rc(a, 'k', !0);
  d = Rc(a, 'am');
  e = Rc(a, 'rs');
  a = Rc(a, 't');
  return {
    pathPrefix: b, version: c, X: d, ha: e, ja: a
  }
}
function Qc(a) {
  for (var b = [], c = 0, d = a.length; c < d; ++c) {
    var e = a[c].replace(/\./g, '_').replace(/-/g, '_');
    Jc.test(e) && b.push(e)
  }
  return b.join(',')
}
function Rc(a, b, c) {
  a = a[b];
  !a && c && Q('missing: ' + b);
  if (a) {
    if (Hc.test(a)) return a;
    Q('invalid: ' + b)
  }
  return null
}
var Nc =
        /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
    Mc = /\/cb=/g, Lc = /\/\//g;
function Sc() {
  var a = sc();
  if (!a) throw Error('Bad hint');
  return a
}
Dc.m = function(a, b, c, d) {
  (a = a[0]) || Q('missing_hint');
  return 'https://apis.google.com' + Oc(a, b, c, d)
};
var Tc = decodeURI('%73cript'), Uc = /^[-+_0-9\/A-Za-z]+={0,2}$/;
function Vc(a, b) {
  for (var c = [], d = 0; d < a.length; ++d) {
    var e = a[d], f;
    if (f = e) {
      a: {for (f = 0; f < b.length; f++) if (b[f] === e) break a; f = -1} f =
          0 > f
    }
    f && c.push(e)
  }
  return c
}
function Wc() {
  var a = P.nonce;
  return void 0 !== a ?
      a && a === String(a) && a.match(Uc) ? a : P.nonce = null :
      mc.querySelector ?
      (a = mc.querySelector('script[nonce]')) ?
      (a = a.nonce || a.getAttribute('nonce') || '',
       a && a === String(a) && a.match(Uc) ? P.nonce = a : P.nonce = null) :
      null :
      null
}
function Xc(a) {
  if ('loading' != mc.readyState)
    Yc(a);
  else {
    var b = Wc(), c = '';
    null !== b && (c = ' nonce="' + b + '"');
    a = '<' + Tc + ' src="' + encodeURI(a) + '"' + c + '></' + Tc + '>';
    mc.write(Zc ? Zc.createHTML(a) : a)
  }
}
function Yc(a) {
  var b = mc.createElement(Tc);
  b.setAttribute('src', Zc ? Zc.createScriptURL(a) : a);
  a = Wc();
  null !== a && b.setAttribute('nonce', a);
  b.async = 'true';
  (a = mc.getElementsByTagName(Tc)[0]) ?
      a.parentNode.insertBefore(b, a) :
      (mc.head || mc.body || mc.documentElement).appendChild(b)
}
function $c(a, b) {
  var c = b && b._c;
  if (c)
    for (var d = 0; d < Ec.length; d++) {
      var e = Ec[d][0], f = Ec[d][1];
      f && Object.prototype.hasOwnProperty.call(c, e) && f(c[e], a, b)
    }
}
function ad(a, b, c) {
  bd(function() {
    var d = b === sc() ? M(rc, '_', N()) : N();
    d = M(uc(b), '_', d);
    a(d)
  }, c)
}
function cd(a, b) {
  var c = b || {};
  'function' == typeof b && (c = {}, c.callback = b);
  $c(a, c);
  var d = a ? a.split(':') : [], e = c.h || Sc(), f = M(P, 'ah', N());
  if (f['::'] && d.length) {
    for (var g = [], h = null; h = d.shift();) {
      var k = h.split('.');
      k = f[h] || f[k[1] && 'ns:' + k[0] || ''] || e;
      var l = g.length && g[g.length - 1] || null, m = l;
      l && l.hint == k || (m = {hint: k, features: []}, g.push(m));
      m.features.push(h)
    }
    var n = g.length;
    if (1 < n) {
      var q = c.callback;
      q && (c.callback = function() {
        0 == --n && q()
      })
    }
    for (; d = g.shift();) dd(d.features, c, d.hint)
  } else
    dd(d || [], c, e)
}
function dd(a, b, c) {
  function d(O, Y) {
    if (n) return 0;
    lc.clearTimeout(m);
    q.push.apply(q, w);
    var Ra = ((rc || {}).config || {}).update;
    Ra ? Ra(f) : f && M(P, 'cu', []).push(f);
    if (Y) {
      Bc('me0', O, p);
      try {
        ad(Y, c, l)
      } finally {
        Bc('me1', O, p)
      }
    }
    return 1
  }
  a = qc(a) || [];
  var e = b.callback, f = b.config, g = b.timeout, h = b.ontimeout,
      k = b.onerror, l = void 0;
  'function' == typeof k && (l = k);
  var m = null, n = !1;
  if (g && !h || !g && h)
    throw 'Timeout requires both the timeout parameter and ontimeout parameter to be set';
  k = M(uc(c), 'r', []).sort();
  var q = M(uc(c), 'L', []).sort(), p = [].concat(k);
  0 < g && (m = lc.setTimeout(function() {
    n = !0;
    h()
  }, g));
  var w = Vc(a, q);
  if (w.length) {
    w = Vc(a, k);
    var x = M(P, 'CP', []), F = x.length;
    x[F] = function(O) {
      function Y() {
        var tb = x[F + 1];
        tb && tb()
      }
      function Ra(tb) {
        x[F] = null;
        d(w, O) && tc(function() {
          e && e();
          tb()
        })
      }
      if (!O) return 0;
      Bc('ml1', w, p);
      0 < F && x[F - 1] ? x[F] = function() {
        Ra(Y)
      } : Ra(Y)
    };
    if (w.length) {
      var ta = 'loaded_' + P.I++;
      rc[ta] = function(O) {
        x[F](O);
        rc[ta] = null
      };
      a = Kc(c, w, 'gapi.' + ta, k);
      k.push.apply(k, w);
      Bc('ml0', w, p);
      b.sync || lc.___gapisync ? Xc(a) : Yc(a)
    } else
      x[F](oc)
  } else
    d(w) && e && e()
}
var Zc = Ha('goog#gapi');
function bd(a, b) {
  if (P.hee && 0 < P.hel) try {
      return a()
    } catch (c) {
      b && b(c), P.hel--, cd('debug_error', function() {
        try {
          window.___jsl.hefn(c)
        } catch (d) {
          throw c;
        }
      })
    }
  else
    try {
      return a()
    } catch (c) {
      throw b && b(c), c;
    }
}
rc.load = function(a, b) {
  return bd(function() {
    return cd(a, b)
  })
};
function ed() {
  this.g = [];
  this.f = -1
}
ed.prototype.set = function(a, b) {
  b = void 0 === b ? !0 : b;
  0 <= a && 52 > a && 0 === a % 1 && this.g[a] != b &&
      (this.g[a] = b, this.f = -1)
};
ed.prototype.get = function(a) {
  return !!this.g[a]
};
function fd(a) {
  -1 == a.f && (a.f = Ma(a.g, function(b, c, d) {
                  return c ? b + Math.pow(2, d) : b
                }, 0));
  return a.f
};
function gd(a, b) {
  this.i = a;
  this.j = b;
  this.g = 0;
  this.f = null
}
gd.prototype.get = function() {
  if (0 < this.g) {
    this.g--;
    var a = this.f;
    this.f = a.next;
    a.next = null
  } else
    a = this.i();
  return a
};
function hd(a, b) {
  a.j(b);
  100 > a.g && (a.g++, b.next = a.f, a.f = b)
};
function id(a) {
  B.setTimeout(function() {
    throw a;
  }, 0)
}
var jd;
function kd() {
  var a = B.MessageChannel;
  'undefined' === typeof a && 'undefined' !== typeof window &&
      window.postMessage && window.addEventListener && !J('Presto') &&
      (a = function() {
        var e = Yb(document, 'IFRAME');
        e.style.display = 'none';
        document.documentElement.appendChild(e);
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.close();
        var g = 'callImmediate' + Math.random(),
            h = 'file:' == f.location.protocol ?
            '*' :
            f.location.protocol + '//' + f.location.host;
        e = Fa(function(k) {
          if (('*' == h || k.origin == h) && k.data == g) this.port1.onmessage()
        }, this);
        f.addEventListener('message', e, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function() {
            f.postMessage(g, h)
          }
        }
      });
  if ('undefined' !== typeof a && !J('Trident') && !J('MSIE')) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      if (void 0 !== c.next) {
        c = c.next;
        var e = c.Y;
        c.Y = null;
        e()
      }
    };
    return function(e) {
      d.next = {Y: e};
      d = d.next;
      b.port2.postMessage(0)
    }
  }
  return function(e) {
    B.setTimeout(e, 0)
  }
};
function ld() {
  this.g = this.f = null
}
var nd = new gd(
    function() {
      return new md
    },
    function(a) {
      a.reset()
    });
ld.prototype.add = function(a, b) {
  var c = nd.get();
  c.set(a, b);
  this.g ? this.g.next = c : this.f = c;
  this.g = c
};
ld.prototype.remove = function() {
  var a = null;
  this.f &&
      (a = this.f, this.f = this.f.next, this.f || (this.g = null),
       a.next = null);
  return a
};
function md() {
  this.next = this.scope = this.f = null
}
md.prototype.set = function(a, b) {
  this.f = a;
  this.scope = b;
  this.next = null
};
md.prototype.reset = function() {
  this.next = this.scope = this.f = null
};
function od(a, b) {
  pd || qd();
  rd || (pd(), rd = !0);
  sd.add(a, b)
}
var pd;
function qd() {
  if (B.Promise && B.Promise.resolve) {
    var a = B.Promise.resolve(void 0);
    pd = function() {
      a.then(td)
    }
  } else
    pd = function() {
      var b = td;
      'function' !== typeof B.setImmediate ||
              B.Window && B.Window.prototype && !J('Edge') &&
                  B.Window.prototype.setImmediate == B.setImmediate ?
          (jd || (jd = kd()), jd(b)) :
          B.setImmediate(b)
    }
}
var rd = !1, sd = new ld;
function td() {
  for (var a; a = sd.remove();) {
    try {
      a.f.call(a.scope)
    } catch (b) {
      id(b)
    }
    hd(nd, a)
  }
  rd = !1
};
function R(a) {
  this.f = 0;
  this.A = void 0;
  this.j = this.g = this.i = null;
  this.l = this.o = !1;
  if (a != za) try {
      var b = this;
      a.call(
          void 0,
          function(c) {
            ud(b, 2, c)
          },
          function(c) {
            ud(b, 3, c)
          })
    } catch (c) {
      ud(this, 3, c)
    }
}
function vd() {
  this.next = this.context = this.onRejected = this.g = this.f = null;
  this.i = !1
}
vd.prototype.reset = function() {
  this.context = this.onRejected = this.g = this.f = null;
  this.i = !1
};
var wd = new gd(
    function() {
      return new vd
    },
    function(a) {
      a.reset()
    });
function xd(a, b, c) {
  var d = wd.get();
  d.g = a;
  d.onRejected = b;
  d.context = c;
  return d
}
function yd(a) {
  if (a instanceof R) return a;
  var b = new R(za);
  ud(b, 2, a);
  return b
}
function zd(a) {
  return new R(function(b, c) {
    c(a)
  })
}
R.prototype.then = function(a, b, c) {
  return Ad(
      this, 'function' === typeof a ? a : null,
      'function' === typeof b ? b : null, c)
};
R.prototype.$goog_Thenable = !0;
function Bd(a, b) {
  return Ad(a, null, b, void 0)
}
R.prototype.cancel = function(a) {
  if (0 == this.f) {
    var b = new Cd(a);
    od(function() {
      Dd(this, b)
    }, this)
  }
};
function Dd(a, b) {
  if (0 == a.f)
    if (a.i) {
      var c = a.i;
      if (c.g) {
        for (var d = 0, e = null, f = null, g = c.g;
             g && (g.i || (d++, g.f == a && (e = g), !(e && 1 < d)));
             g = g.next)
          e || (f = g);
        e &&
            (0 == c.f && 1 == d ? Dd(c, b) :
                                  (f ? (d = f, d.next == c.j && (c.j = d),
                                        d.next = d.next.next) :
                                       Ed(c),
                                   Fd(c, e, 3, b)))
      }
      a.i = null
    } else
      ud(a, 3, b)
}
function Gd(a, b) {
  a.g || 2 != a.f && 3 != a.f || Hd(a);
  a.j ? a.j.next = b : a.g = b;
  a.j = b
}
function Ad(a, b, c, d) {
  var e = xd(null, null, null);
  e.f = new R(function(f, g) {
    e.g = b ? function(h) {
      try {
        var k = b.call(d, h);
        f(k)
      } catch (l) {
        g(l)
      }
    } : f;
    e.onRejected = c ? function(h) {
      try {
        var k = c.call(d, h);
        void 0 === k && h instanceof Cd ? g(h) : f(k)
      } catch (l) {
        g(l)
      }
    } : g
  });
  e.f.i = a;
  Gd(a, e);
  return e.f
}
R.prototype.K = function(a) {
  this.f = 0;
  ud(this, 2, a)
};
R.prototype.T = function(a) {
  this.f = 0;
  ud(this, 3, a)
};
function ud(a, b, c) {
  if (0 == a.f) {
    a === c && (b = 3, c = new TypeError('Promise cannot resolve to itself'));
    a.f = 1;
    a: {
      var d = c, e = a.K, f = a.T; if (d instanceof R) {
        Gd(d, xd(e || za, f || null, a));
        var g = !0
      } else {
        if (d) try {
            var h = !!d.$goog_Thenable
          } catch (l) {
            h = !1
          }
        else
          h = !1;
        if (h)
          d.then(e, f, a), g = !0;
        else {
          if (Ca(d)) try {
              var k = d.then;
              if ('function' === typeof k) {
                Id(d, k, e, f, a);
                g = !0;
                break a
              }
            } catch (l) {
              f.call(a, l);
              g = !0;
              break a
            }
          g = !1
        }
      }
    } g ||
        (a.A = c, a.f = b, a.i = null, Hd(a),
         3 != b || c instanceof Cd || Jd(a, c))
  }
}
function Id(a, b, c, d, e) {
  function f(k) {
    h || (h = !0, d.call(e, k))
  }
  function g(k) {
    h || (h = !0, c.call(e, k))
  }
  var h = !1;
  try {
    b.call(a, g, f)
  } catch (k) {
    f(k)
  }
}
function Hd(a) {
  a.o || (a.o = !0, od(a.D, a))
}
function Ed(a) {
  var b = null;
  a.g && (b = a.g, a.g = b.next, b.next = null);
  a.g || (a.j = null);
  return b
}
R.prototype.D = function() {
  for (var a; a = Ed(this);) Fd(this, a, this.f, this.A);
  this.o = !1
};
function Fd(a, b, c, d) {
  if (3 == c && b.onRejected && !b.i)
    for (; a && a.l; a = a.i) a.l = !1;
  if (b.f)
    b.f.i = null, Kd(b, c, d);
  else
    try {
      b.i ? b.g.call(b.context) : Kd(b, c, d)
    } catch (e) {
      Ld.call(null, e)
    }
  hd(wd, b)
}
function Kd(a, b, c) {
  2 == b ? a.g.call(a.context, c) :
           a.onRejected && a.onRejected.call(a.context, c)
}
function Jd(a, b) {
  a.l = !0;
  od(function() {
    a.l && Ld.call(null, b)
  })
}
var Ld = id;
function Cd(a) {
  Ia.call(this, a)
}
E(Cd, Ia);
Cd.prototype.name = 'cancel';
function Md(a, b, c) {
  ec.call(this);
  this.f = a;
  this.o = b || 0;
  this.g = c;
  this.l = Fa(this.na, this)
}
E(Md, ec);
r = Md.prototype;
r.M = 0;
r.L = function() {
  Md.H.L.call(this);
  this.stop();
  delete this.f;
  delete this.g
};
r.start = function(a) {
  this.stop();
  var b = this.l;
  a = void 0 !== a ? a : this.o;
  if ('function' !== typeof b)
    if (b && 'function' == typeof b.handleEvent)
      b = Fa(b.handleEvent, b);
    else
      throw Error('Invalid listener argument');
  this.M = 2147483647 < Number(a) ? -1 : B.setTimeout(b, a || 0)
};
r.stop = function() {
  this.isActive() && B.clearTimeout(this.M);
  this.M = 0
};
r.isActive = function() {
  return 0 != this.M
};
r.na = function() {
  this.M = 0;
  this.f && this.f.call(this.g)
};
function Nd() {
  this.g = -1
};
function Od() {
  this.g = 64;
  this.f = [];
  this.o = [];
  this.A = [];
  this.j = [];
  this.j[0] = 128;
  for (var a = 1; a < this.g; ++a) this.j[a] = 0;
  this.l = this.i = 0;
  this.reset()
}
E(Od, Nd);
Od.prototype.reset = function() {
  this.f[0] = 1732584193;
  this.f[1] = 4023233417;
  this.f[2] = 2562383102;
  this.f[3] = 271733878;
  this.f[4] = 3285377520;
  this.l = this.i = 0
};
function Pd(a, b, c) {
  c || (c = 0);
  var d = a.A;
  if ('string' === typeof b)
    for (var e = 0; 16 > e; e++)
      d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 |
          b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3),
      c += 4;
  else
    for (e = 0; 16 > e; e++)
      d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
  for (e = 16; 80 > e; e++) {
    var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
    d[e] = (f << 1 | f >>> 31) & 4294967295
  }
  b = a.f[0];
  c = a.f[1];
  var g = a.f[2], h = a.f[3], k = a.f[4];
  for (e = 0; 80 > e; e++) {
    if (40 > e)
      if (20 > e) {
        f = h ^ c & (g ^ h);
        var l = 1518500249
      } else
        f = c ^ g ^ h, l = 1859775393;
    else
      60 > e ? (f = c & g | h & (c | g), l = 2400959708) :
               (f = c ^ g ^ h, l = 3395469782);
    f = (b << 5 | b >>> 27) + f + k + l + d[e] & 4294967295;
    k = h;
    h = g;
    g = (c << 30 | c >>> 2) & 4294967295;
    c = b;
    b = f
  }
  a.f[0] = a.f[0] + b & 4294967295;
  a.f[1] = a.f[1] + c & 4294967295;
  a.f[2] = a.f[2] + g & 4294967295;
  a.f[3] = a.f[3] + h & 4294967295;
  a.f[4] = a.f[4] + k & 4294967295
}
Od.prototype.update = function(a, b) {
  if (null != a) {
    void 0 === b && (b = a.length);
    for (var c = b - this.g, d = 0, e = this.o, f = this.i; d < b;) {
      if (0 == f)
        for (; d <= c;) Pd(this, a, d), d += this.g;
      if ('string' === typeof a)
        for (; d < b;) {
          if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.g) {
            Pd(this, e);
            f = 0;
            break
          }
        }
      else
        for (; d < b;)
          if (e[f] = a[d], ++f, ++d, f == this.g) {
            Pd(this, e);
            f = 0;
            break
          }
    }
    this.i = f;
    this.l += b
  }
};
Od.prototype.digest = function() {
  var a = [], b = 8 * this.l;
  56 > this.i ? this.update(this.j, 56 - this.i) :
                this.update(this.j, this.g - (this.i - 56));
  for (var c = this.g - 1; 56 <= c; c--) this.o[c] = b & 255, b /= 256;
  Pd(this, this.o);
  for (c = b = 0; 5 > c; c++)
    for (var d = 24; 0 <= d; d -= 8) a[b] = this.f[c] >> d & 255, ++b;
  return a
};
var Qd = 'StopIteration' in B ? B.StopIteration :
                                {message: 'StopIteration', stack: ''};
function Rd() {}
Rd.prototype.next = function() {
  throw Qd;
};
Rd.prototype.F = function() {
  return this
};
function Sd(a) {
  if (a instanceof Rd) return a;
  if ('function' == typeof a.F) return a.F(!1);
  if (Ba(a)) {
    var b = 0, c = new Rd;
    c.next = function() {
      for (;;) {
        if (b >= a.length) throw Qd;
        if (b in a) return a[b++];
        b++
      }
    };
    return c
  }
  throw Error('Not implemented');
}
function Td(a, b) {
  if (Ba(a)) try {
      G(a, b, void 0)
    } catch (c) {
      if (c !== Qd) throw c;
    }
  else {
    a = Sd(a);
    try {
      for (;;) b.call(void 0, a.next(), void 0, a)
    } catch (c) {
      if (c !== Qd) throw c;
    }
  }
}
function Ud(a) {
  if (Ba(a)) return Na(a);
  a = Sd(a);
  var b = [];
  Td(a, function(c) {
    b.push(c)
  });
  return b
};
function Vd(a, b) {
  this.i = {};
  this.f = [];
  this.j = this.g = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) throw Error('Uneven number of arguments');
    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
  } else if (a)
    if (a instanceof Vd)
      for (c = Wd(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
    else
      for (d in a) this.set(d, a[d])
}
function Wd(a) {
  Xd(a);
  return a.f.concat()
}
r = Vd.prototype;
r.equals = function(a, b) {
  if (this === a) return !0;
  if (this.g != a.g) return !1;
  var c = b || Yd;
  Xd(this);
  for (var d, e = 0; d = this.f[e]; e++)
    if (!c(this.get(d), a.get(d))) return !1;
  return !0
};
function Yd(a, b) {
  return a === b
}
r.isEmpty = function() {
  return 0 == this.g
};
r.clear = function() {
  this.i = {};
  this.j = this.g = this.f.length = 0
};
r.remove = function(a) {
  return Object.prototype.hasOwnProperty.call(this.i, a) ?
      (delete this.i[a], this.g--, this.j++,
       this.f.length > 2 * this.g && Xd(this), !0) :
      !1
};
function Xd(a) {
  if (a.g != a.f.length) {
    for (var b = 0, c = 0; b < a.f.length;) {
      var d = a.f[b];
      Object.prototype.hasOwnProperty.call(a.i, d) && (a.f[c++] = d);
      b++
    }
    a.f.length = c
  }
  if (a.g != a.f.length) {
    var e = {};
    for (c = b = 0; b < a.f.length;)
      d = a.f[b],
      Object.prototype.hasOwnProperty.call(e, d) || (a.f[c++] = d, e[d] = 1),
      b++;
    a.f.length = c
  }
}
r.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.i, a) ? this.i[a] : b
};
r.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.i, a) ||
      (this.g++, this.f.push(a), this.j++);
  this.i[a] = b
};
r.forEach = function(a, b) {
  for (var c = Wd(this), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this)
  }
};
r.clone = function() {
  return new Vd(this)
};
r.F = function(a) {
  Xd(this);
  var b = 0, c = this.j, d = this, e = new Rd;
  e.next = function() {
    if (c != d.j)
      throw Error('The map has changed since the iterator was created');
    if (b >= d.f.length) throw Qd;
    var f = d.f[b++];
    return a ? f : d.i[f]
  };
  return e
};
function Zd(a) {
  return 'string' == typeof a.className ?
      a.className :
      a.getAttribute && a.getAttribute('class') || ''
}
function $d(a, b) {
  'string' == typeof a.className ? a.className = b :
                                   a.setAttribute && a.setAttribute('class', b)
}
function ae(a, b) {
  if (a.classList)
    var c = a.classList.contains(b);
  else
    c = a.classList ? a.classList : Zd(a).match(/\S+/g) || [],
    c = 0 <= Ka(c, b);
  return c
}
function be(a, b) {
  if (a.classList)
    a.classList.add(b);
  else if (!ae(a, b)) {
    var c = Zd(a);
    $d(a, c + (0 < c.length ? ' ' + b : b))
  }
}
function ce(a, b) {
  a.classList ? a.classList.remove(b) :
                ae(a, b) &&
          $d(a,
             La(a.classList ? a.classList : Zd(a).match(/\S+/g) || [],
                function(c) {
                  return c != b
                })
                 .join(' '))
};
function de(a) {
  var b = [];
  ee(new fe, a, b);
  return b.join('')
}
function fe() {}
function ee(a, b, c) {
  if (null == b)
    c.push('null');
  else {
    if ('object' == typeof b) {
      if (Array.isArray(b)) {
        var d = b;
        b = d.length;
        c.push('[');
        for (var e = '', f = 0; f < b; f++) c.push(e), ee(a, d[f], c), e = ',';
        c.push(']');
        return
      }
      if (b instanceof String || b instanceof Number || b instanceof Boolean)
        b = b.valueOf();
      else {
        c.push('{');
        e = '';
        for (d in b)
          Object.prototype.hasOwnProperty.call(b, d) &&
              (f = b[d],
               'function' != typeof f &&
                   (c.push(e), ge(d, c), c.push(':'), ee(a, f, c), e = ','));
        c.push('}');
        return
      }
    }
    switch (typeof b) {
      case 'string':
        ge(b, c);
        break;
      case 'number':
        c.push(isFinite(b) && !isNaN(b) ? String(b) : 'null');
        break;
      case 'boolean':
        c.push(String(b));
        break;
      case 'function':
        c.push('null');
        break;
      default:
        throw Error('Unknown type: ' + typeof b);
    }
  }
}
var he = {
  '"': '\\"',
  '\\': '\\\\',
  '/': '\\/',
  '\b': '\\b',
  '\f': '\\f',
  '\n': '\\n',
  '\r': '\\r',
  '\t': '\\t',
  '\x0B': '\\u000b'
},
    ie = /\uffff/.test('\uffff') ? /[\\"\x00-\x1f\x7f-\uffff]/g :
                                   /[\\"\x00-\x1f\x7f-\xff]/g;
function ge(a, b) {
  b.push('"', a.replace(ie, function(c) {
    var d = he[c];
    d ||
        (d = '\\u' + (c.charCodeAt(0) | 65536).toString(16).substr(1),
         he[c] = d);
    return d
  }), '"')
};
function S(a) {
  ec.call(this);
  this.A = 1;
  this.l = [];
  this.o = 0;
  this.f = [];
  this.g = {};
  this.D = !!a
}
E(S, ec);
r = S.prototype;
r.subscribe = function(a, b, c) {
  var d = this.g[a];
  d || (d = this.g[a] = []);
  var e = this.A;
  this.f[e] = a;
  this.f[e + 1] = b;
  this.f[e + 2] = c;
  this.A = e + 3;
  d.push(e);
  return e
};
r.S = function(a) {
  var b = this.f[a];
  if (b) {
    var c = this.g[b];
    if (0 != this.o)
      this.l.push(a), this.f[a + 1] = za;
    else {
      if (c) {
        var d = Ka(c, a);
        0 <= d && Array.prototype.splice.call(c, d, 1)
      }
      delete this.f[a];
      delete this.f[a + 1];
      delete this.f[a + 2]
    }
  }
  return !!b
};
r.W = function(a, b) {
  var c = this.g[a];
  if (c) {
    for (var d = Array(arguments.length - 1), e = 1, f = arguments.length;
         e < f; e++)
      d[e - 1] = arguments[e];
    if (this.D)
      for (e = 0; e < c.length; e++) {
        var g = c[e];
        je(this.f[g + 1], this.f[g + 2], d)
      }
    else {
      this.o++;
      try {
        for (e = 0, f = c.length; e < f; e++)
          g = c[e], this.f[g + 1].apply(this.f[g + 2], d)
      } finally {
        if (this.o--, 0 < this.l.length && 0 == this.o)
          for (; c = this.l.pop();) this.S(c)
      }
    }
    return 0 != e
  }
  return !1
};
function je(a, b, c) {
  od(function() {
    a.apply(b, c)
  })
}
r.clear = function(a) {
  if (a) {
    var b = this.g[a];
    b && (G(b, this.S, this), delete this.g[a])
  } else
    this.f.length = 0, this.g = {}
};
r.L = function() {
  S.H.L.call(this);
  this.clear();
  this.l.length = 0
};
function ke(a) {
  this.f = a
}
ke.prototype.set = function(a, b) {
  void 0 === b ? this.f.remove(a) : this.f.set(a, de(b))
};
ke.prototype.get = function(a) {
  try {
    var b = this.f.get(a)
  } catch (c) {
    return
  }
  if (null !== b) try {
      return JSON.parse(b)
    } catch (c) {
      throw 'Storage: Invalid value was encountered';
    }
};
ke.prototype.remove = function(a) {
  this.f.remove(a)
};
function le(a) {
  this.f = a
}
E(le, ke);
function me(a) {
  this.data = a
}
function ne(a) {
  return void 0 === a || a instanceof me ? a : new me(a)
}
le.prototype.set = function(a, b) {
  le.H.set.call(this, a, ne(b))
};
le.prototype.g = function(a) {
  a = le.H.get.call(this, a);
  if (void 0 === a || a instanceof Object) return a;
  throw 'Storage: Invalid value was encountered';
};
le.prototype.get = function(a) {
  if (a = this.g(a)) {
    if (a = a.data, void 0 === a)
      throw 'Storage: Invalid value was encountered';
  } else
    a = void 0;
  return a
};
function oe(a) {
  this.f = a
}
E(oe, le);
oe.prototype.set = function(a, b, c) {
  if (b = ne(b)) {
    if (c) {
      if (c < Date.now()) {
        oe.prototype.remove.call(this, a);
        return
      }
      b.expiration = c
    }
    b.creation = Date.now()
  }
  oe.H.set.call(this, a, b)
};
oe.prototype.g = function(a) {
  var b = oe.H.g.call(this, a);
  if (b) {
    var c = b.creation, d = b.expiration;
    if (d && d < Date.now() || c && c > Date.now())
      oe.prototype.remove.call(this, a);
    else
      return b
  }
};
function pe() {};
function qe() {}
E(qe, pe);
qe.prototype.clear = function() {
  var a = Ud(this.F(!0)), b = this;
  G(a, function(c) {
    b.remove(c)
  })
};
function re(a) {
  this.f = a
}
E(re, qe);
r = re.prototype;
r.isAvailable = function() {
  if (!this.f) return !1;
  try {
    return this.f.setItem('__sak', '1'), this.f.removeItem('__sak'), !0
  } catch (a) {
    return !1
  }
};
r.set = function(a, b) {
  try {
    this.f.setItem(a, b)
  } catch (c) {
    if (0 == this.f.length) throw 'Storage mechanism: Storage disabled';
    throw 'Storage mechanism: Quota exceeded';
  }
};
r.get = function(a) {
  a = this.f.getItem(a);
  if ('string' !== typeof a && null !== a)
    throw 'Storage mechanism: Invalid value was encountered';
  return a
};
r.remove = function(a) {
  this.f.removeItem(a)
};
r.F = function(a) {
  var b = 0, c = this.f, d = new Rd;
  d.next = function() {
    if (b >= c.length) throw Qd;
    var e = c.key(b++);
    if (a) return e;
    e = c.getItem(e);
    if ('string' !== typeof e)
      throw 'Storage mechanism: Invalid value was encountered';
    return e
  };
  return d
};
r.clear = function() {
  this.f.clear()
};
r.key = function(a) {
  return this.f.key(a)
};
function se() {
  var a = null;
  try {
    a = window.localStorage || null
  } catch (b) {
  }
  this.f = a
}
E(se, re);
function te(a, b) {
  this.g = a;
  this.f = null;
  if (wb && !(9 <= Number(Ib))) {
    ue || (ue = new Vd);
    this.f = ue.get(a);
    this.f ||
        (b ? this.f = document.getElementById(b) :
             (this.f = document.createElement('userdata'),
              this.f.addBehavior('#default#userData'),
              document.body.appendChild(this.f)),
         ue.set(a, this.f));
    try {
      this.f.load(this.g)
    } catch (c) {
      this.f = null
    }
  }
}
E(te, qe);
var ve = {
  '.': '.2E',
  '!': '.21',
  '~': '.7E',
  '*': '.2A',
  '\'': '.27',
  '(': '.28',
  ')': '.29',
  '%': '.'
},
    ue = null;
function we(a) {
  return '_' + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(b) {
    return ve[b]
  })
}
r = te.prototype;
r.isAvailable = function() {
  return !!this.f
};
r.set = function(a, b) {
  this.f.setAttribute(we(a), b);
  xe(this)
};
r.get = function(a) {
  a = this.f.getAttribute(we(a));
  if ('string' !== typeof a && null !== a)
    throw 'Storage mechanism: Invalid value was encountered';
  return a
};
r.remove = function(a) {
  this.f.removeAttribute(we(a));
  xe(this)
};
r.F = function(a) {
  var b = 0, c = this.f.XMLDocument.documentElement.attributes, d = new Rd;
  d.next = function() {
    if (b >= c.length) throw Qd;
    var e = c[b++];
    if (a) return decodeURIComponent(e.nodeName.replace(/\./g, '%')).substr(1);
    e = e.nodeValue;
    if ('string' !== typeof e)
      throw 'Storage mechanism: Invalid value was encountered';
    return e
  };
  return d
};
r.clear = function() {
  for (var a = this.f.XMLDocument.documentElement, b = a.attributes.length;
       0 < b; b--)
    a.removeAttribute(a.attributes[b - 1].nodeName);
  xe(this)
};
function xe(a) {
  try {
    a.f.save(a.g)
  } catch (b) {
    throw 'Storage mechanism: Quota exceeded';
  }
};
function ye(a, b) {
  this.g = a;
  this.f = b + '::'
}
E(ye, qe);
ye.prototype.set = function(a, b) {
  this.g.set(this.f + a, b)
};
ye.prototype.get = function(a) {
  return this.g.get(this.f + a)
};
ye.prototype.remove = function(a) {
  this.g.remove(this.f + a)
};
ye.prototype.F = function(a) {
  var b = this.g.F(!0), c = this, d = new Rd;
  d.next = function() {
    for (var e = b.next(); e.substr(0, c.f.length) != c.f;) e = b.next();
    return a ? e.substr(c.f.length) : c.g.get(e)
  };
  return d
};
var ze =
    window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
D('yt.config_', ze);
function Ae(a) {
  var b = arguments;
  1 < b.length ? ze[b[0]] = b[1] : 1 === b.length && Object.assign(ze, b[0])
}
function T(a, b) {
  return a in ze ? ze[a] : b
};
var Be = [];
function Ce(a) {
  Be.forEach(function(b) {
    return b(a)
  })
}
function De(a) {
  return a && window.yterr ? function() {
    try {
      return a.apply(this, arguments)
    } catch (b) {
      Ee(b), Ce(b)
    }
  } : a
}
function Ee(a) {
  var b = C('yt.logging.errors.log');
  b ? b(a, 'ERROR', void 0, void 0, void 0) :
      (b = T('ERRORS', []), b.push([a, 'ERROR', void 0, void 0, void 0]),
       Ae('ERRORS', b))
}
function Fe(a) {
  var b = C('yt.logging.errors.log');
  b ? b(a, 'WARNING', void 0, void 0, void 0) :
      (b = T('ERRORS', []), b.push([a, 'WARNING', void 0, void 0, void 0]),
       Ae('ERRORS', b))
};
function Ge(a) {
  var b = [];
  Pa(a, function(c, d) {
    var e = encodeURIComponent(String(d)), f;
    Array.isArray(c) ? f = c : f = [c];
    G(f, function(g) {
      '' == g ? b.push(e) : b.push(e + '=' + encodeURIComponent(String(g)))
    })
  });
  return b.join('&')
}
function He(a) {
  '?' == a.charAt(0) && (a = a.substr(1));
  a = a.split('&');
  for (var b = {}, c = 0, d = a.length; c < d; c++) {
    var e = a[c].split('=');
    if (1 == e.length && e[0] || 2 == e.length) try {
        var f = decodeURIComponent((e[0] || '').replace(/\+/g, ' ')),
            g = decodeURIComponent((e[1] || '').replace(/\+/g, ' '));
        f in b ? Array.isArray(b[f]) ? Oa(b[f], g) : b[f] = [b[f], g] : b[f] = g
      } catch (k) {
        if ('q' != e[0]) {
          var h = Error('Error decoding URL component');
          h.params = {key: e[0], value: e[1]};
          Ee(h)
        }
      }
  }
  return b
}
function Ie(a, b, c) {
  var d = a.split('#', 2);
  a = d[0];
  d = 1 < d.length ? '#' + d[1] : '';
  var e = a.split('?', 2);
  a = e[0];
  e = He(e[1] || '');
  for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
  b = a;
  a = sb(e);
  a ? (c = b.indexOf('#'), 0 > c && (c = b.length), f = b.indexOf('?'),
       0 > f || f > c ? (f = c, e = '') : e = b.substring(f + 1, c),
       b = [b.substr(0, f), e, b.substr(c)], c = b[1],
       b[1] = a ? c ? c + '&' + a : a : c,
       a = b[0] + (b[1] ? '?' + b[1] : '') + b[2]) :
      a = b;
  return a + d
};
function Je() {
  return C('gapi.iframes.getContext')()
}
function Ke() {
  return C('gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER')
};
function U(a) {
  a = Le(a);
  return 'string' === typeof a && 'false' === a ? !1 : !!a
}
function Me(a, b) {
  var c = Le(a);
  return void 0 === c && void 0 !== b ? b : Number(c || 0)
}
function Le(a) {
  var b = T('EXPERIMENTS_FORCED_FLAGS', {});
  return void 0 !== b[a] ? b[a] : T('EXPERIMENT_FLAGS', {})[a]
};
var Ne = 0;
D('ytDomDomGetNextId', C('ytDomDomGetNextId') || function() {
  return ++Ne
});
D('ytEventsEventsListeners', B.ytEventsEventsListeners || {});
D('ytEventsEventsCounter', B.ytEventsEventsCounter || {count: 0});
function Oe(a, b) {
  'function' === typeof a && (a = De(a));
  return window.setTimeout(a, b)
};
function Pe() {}
function Qe(a, b) {
  return Re(a, 0, b)
};
function Se() {}
v(Se, Pe);
function Re(a, b, c) {
  isNaN(c) && (c = void 0);
  var d = C('yt.scheduler.instance.addJob');
  return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : Oe(a, c || 0)
}
Se.prototype.start = function() {
  var a = C('yt.scheduler.instance.start');
  a && a()
};
Se.f = void 0;
Se.g = function() {
  Se.f || (Se.f = new Se)
};
Se.g();
var Te = B.ytPubsubPubsubInstance || new S,
    Ue = B.ytPubsubPubsubSubscribedKeys || {},
    Ve = B.ytPubsubPubsubTopicToKeys || {},
    We = B.ytPubsubPubsubIsSynchronous || {};
S.prototype.subscribe = S.prototype.subscribe;
S.prototype.unsubscribeByKey = S.prototype.S;
S.prototype.publish = S.prototype.W;
S.prototype.clear = S.prototype.clear;
D('ytPubsubPubsubInstance', Te);
D('ytPubsubPubsubTopicToKeys', Ve);
D('ytPubsubPubsubIsSynchronous', We);
D('ytPubsubPubsubSubscribedKeys', Ue);
var Xe = window,
    V = Xe.ytcsi && Xe.ytcsi.now ?
    Xe.ytcsi.now :
    Xe.performance && Xe.performance.timing && Xe.performance.now &&
        Xe.performance.timing.navigationStart ?
    function() {
      return Xe.performance.timing.navigationStart + Xe.performance.now()
    } :
    function() {
      return (new Date).getTime()
    };
var Ye = Me('initial_gel_batch_timeout', 1E3), Ze = Math.pow(2, 16) - 1,
    $e = null, af = 0, bf = void 0, cf = 0, df = 0, ef = 0, ff = !0,
    gf = B.ytLoggingTransportLogPayloadsQueue_ || {};
D('ytLoggingTransportLogPayloadsQueue_', gf);
var hf = B.ytLoggingTransportGELQueue_ || new Map;
D('ytLoggingTransportGELQueue_', hf);
var jf = B.ytLoggingTransportTokensToCttTargetIds_ || {};
D('ytLoggingTransportTokensToCttTargetIds_', jf);
function kf() {
  window.clearTimeout(cf);
  window.clearTimeout(df);
  df = 0;
  bf && bf.isReady() ?
      (lf(hf), 'log_event' in gf && lf(Object.entries(gf.log_event)),
       hf.clear(), delete gf.log_event) :
      mf()
}
function mf() {
  U('web_gel_timeout_cap') && !df && (df = Oe(kf, 6E4));
  window.clearTimeout(cf);
  var a = T('LOGGING_BATCH_TIMEOUT', Me('web_gel_debounce_ms', 1E4));
  U('shorten_initial_gel_batch_timeout') && ff && (a = Ye);
  cf = Oe(kf, a)
}
function lf(a) {
  var b = bf, c = Math.round(V());
  a = u(a);
  for (var d = a.next(); !d.done; d = a.next()) {
    var e = u(d.value);
    d = e.next().value;
    var f = e.next().value;
    e = Qa({context: nf(b.f || of())});
    e.events = f;
    (f = jf[d]) && pf(e, d, f);
    delete jf[d];
    qf(e, c);
    rf(b, 'log_event', e, {
      retry: !0,
      onSuccess: function() {
        af = Math.round(V() - c)
      }
    });
    ff = !1
  }
}
function qf(a, b) {
  a.requestTimeMs = String(b);
  U('unsplit_gel_payloads_in_logs') && (a.unsplitGelPayloadsInLogs = !0);
  var c = T('EVENT_ID', void 0);
  if (c) {
    var d = T('BATCH_CLIENT_COUNTER', void 0) || 0;
    !d && U('web_client_counter_random_seed') &&
        (d = Math.floor(Math.random() * Ze / 2));
    d++;
    d > Ze && (d = 1);
    Ae('BATCH_CLIENT_COUNTER', d);
    c = {serializedEventId: c, clientCounter: String(d)};
    a.serializedClientEventId = c;
    $e && af && U('log_gel_rtt_web') && (a.previousBatchInfo = {
      serializedClientEventId: $e,
      roundtripMs: String(af)
    });
    $e = c;
    af = 0
  }
}
function pf(a, b, c) {
  if (c.videoId)
    var d = 'VIDEO';
  else if (c.playlistId)
    d = 'PLAYLIST';
  else
    return;
  a.credentialTransferTokenTargetId = c;
  a.context = a.context || {};
  a.context.user = a.context.user || {};
  a.context.user.credentialTransferTokens = [{token: b, scope: d}]
};
var sf = B.ytLoggingGelSequenceIdObj_ || {};
D('ytLoggingGelSequenceIdObj_', sf);
function tf(a, b, c, d) {
  d = void 0 === d ? {} : d;
  var e = {};
  e.eventTimeMs = Math.round(d.timestamp || V());
  e[a] = b;
  a = String;
  d.timestamp ? b = -1 :
                (b = C('_lact', window),
                 b = null == b ? -1 : Math.max(Date.now() - b, 0));
  e.context = {lastActivityMs: a(b)};
  U('log_sequence_info_on_gel_web') && d.ia &&
      (a = e.context, b = d.ia, sf[b] = b in sf ? sf[b] + 1 : 0,
       a.sequence = {index: sf[b], groupKey: b}, d.Oa && delete sf[d.ia]);
  d = d.Na;
  a = '';
  d &&
      (a = {},
       d.videoId ? a.videoId = d.videoId :
                   d.playlistId && (a.playlistId = d.playlistId),
       jf[d.token] = a, a = d.token);
  d = hf.get(a) || [];
  hf.set(a, d);
  d.push(e);
  c && (bf = new c);
  c = Me('web_logging_max_batch') || 100;
  e = V();
  d.length >= c ? kf() : 10 <= e - ef && (mf(), ef = e)
};
function uf(a) {
  var b = vf;
  a = void 0 === a ? C('yt.ads.biscotti.lastId_') || '' : a;
  b = Object.assign(wf(b), xf(b));
  b.ca_type = 'image';
  a && (b.bid = a);
  return b
}
function wf(a) {
  var b = {};
  b.dt = jc;
  b.flash = '0';
  a: {
    try {
      var c = a.f.top.location.href
    } catch (f) {
      a = 2;
      break a
    } a = c ? c === a.g.location.href ? 0 : 1 : 2
  } b = (b.frm = a, b);
  b.u_tz = -(new Date).getTimezoneOffset();
  var d = void 0 === d ? L : d;
  try {
    var e = d.history.length
  } catch (f) {
    e = 0
  }
  b.u_his = e;
  b.u_java = !!L.navigator && 'unknown' !== typeof L.navigator.javaEnabled &&
      !!L.navigator.javaEnabled && L.navigator.javaEnabled();
  L.screen &&
      (b.u_h = L.screen.height, b.u_w = L.screen.width,
       b.u_ah = L.screen.availHeight, b.u_aw = L.screen.availWidth,
       b.u_cd = L.screen.colorDepth);
  L.navigator && L.navigator.plugins &&
      (b.u_nplug = L.navigator.plugins.length);
  L.navigator && L.navigator.mimeTypes &&
      (b.u_nmime = L.navigator.mimeTypes.length);
  return b
}
function xf(a) {
  var b = a.f;
  try {
    var c = b.screenX;
    var d = b.screenY
  } catch (n) {
  }
  try {
    var e = b.outerWidth;
    var f = b.outerHeight
  } catch (n) {
  }
  try {
    var g = b.innerWidth;
    var h = b.innerHeight
  } catch (n) {
  }
  b = [
    b.screenLeft, b.screenTop, c, d, b.screen ? b.screen.availWidth : void 0,
    b.screen ? b.screen.availTop : void 0, e, f, g, h
  ];
  c = a.f.top;
  try {
    var k = (c || window).document,
        l = 'CSS1Compat' == k.compatMode ? k.documentElement : k.body;
    var m = (new Ub(l.clientWidth, l.clientHeight)).round()
  } catch (n) {
    m = new Ub(-12245933, -12245933)
  }
  k = m;
  m = {};
  l = new ed;
  B.SVGElement && B.document.createElementNS && l.set(0);
  c = dc();
  c['allow-top-navigation-by-user-activation'] && l.set(1);
  c['allow-popups-to-escape-sandbox'] && l.set(2);
  B.crypto && B.crypto.subtle && l.set(3);
  B.TextDecoder && B.TextEncoder && l.set(4);
  l = fd(l);
  m.bc = l;
  m.bih = k.height;
  m.biw = k.width;
  m.brdim = b.join();
  a = a.g;
  return m.vis = {
    visible: 1,
    hidden: 2,
    prerender: 3,
    preview: 4,
    unloaded: 5
  }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState ||
    ''] || 0,
         m.wgl = !!L.WebGLRenderingContext, m
}
var vf = new function() {
  var a = window.document;
  this.f = window;
  this.g = a
};
D('yt.ads_.signals_.getAdSignalsString', function(a) {
  return Ge(uf(a))
});
var yf = 'XMLHttpRequest' in B ? function() {
  return new XMLHttpRequest
} : null;
function zf() {
  if (!yf) return null;
  var a = yf();
  return 'open' in a ? a : null
};
var Af = {
  Authorization: 'AUTHORIZATION',
  'X-Goog-Visitor-Id': 'SANDBOXED_VISITOR_ID',
  'X-YouTube-Client-Name': 'INNERTUBE_CONTEXT_CLIENT_NAME',
  'X-YouTube-Client-Version': 'INNERTUBE_CONTEXT_CLIENT_VERSION',
  'X-YouTube-Device': 'DEVICE',
  'X-Youtube-Identity-Token': 'ID_TOKEN',
  'X-YouTube-Page-CL': 'PAGE_CL',
  'X-YouTube-Page-Label': 'PAGE_BUILD_LABEL',
  'X-YouTube-Variants-Checksum': 'VARIANTS_CHECKSUM'
},
    Bf =
        'app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address'
            .split(' '),
    Cf = !1;
function Df(a, b) {
  b = void 0 === b ? {} : b;
  if (!c) var c = window.location.href;
  var d = a.match(ob)[1] || null, e = qb(a);
  d && e ? (d = c, c = a.match(ob), d = d.match(ob),
            c = c[3] == d[3] && c[1] == d[1] && c[4] == d[4]) :
           c = e ? qb(c) == e &&
              (Number(c.match(ob)[4] || null) || null) ==
                  (Number(a.match(ob)[4] || null) || null) :
                   !0;
  d = U('web_ajax_ignore_global_headers_if_set');
  for (var f in Af)
    e = T(Af[f]), !e || !c && qb(a) || d && void 0 !== b[f] || (b[f] = e);
  if (c || !qb(a))
    b['X-YouTube-Utc-Offset'] = String(-(new Date).getTimezoneOffset());
  (c || !qb(a)) &&
      (f = 'undefined' != typeof Intl ?
           (new Intl.DateTimeFormat).resolvedOptions().timeZone :
           null) &&
      (b['X-YouTube-Time-Zone'] = f);
  if (c || !qb(a)) b['X-YouTube-Ad-Signals'] = Ge(uf(void 0));
  return b
}
function Ef(a) {
  var b = window.location.search, c = qb(a), d = pb(a.match(ob)[5] || null);
  d = (c = c &&
           (c.endsWith('youtube.com') || c.endsWith('youtube-nocookie.com'))) &&
      d && d.startsWith('/api/');
  if (!c || d) return a;
  var e = He(b), f = {};
  G(Bf, function(g) {
    e[g] && (f[g] = e[g])
  });
  return Ie(a, f || {}, !1)
}
function Ff(a, b) {
  if (window.fetch && 'XML' != b.format) {
    var c = {method: b.method || 'GET', credentials: 'same-origin'};
    b.headers && (c.headers = b.headers);
    a = Gf(a, b);
    var d = Hf(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = 'include');
    var e = !1, f;
    fetch(a, c).then(function(g) {
      if (!e) {
        e = !0;
        f && window.clearTimeout(f);
        var h = g.ok, k = function(l) {
          l = l || {};
          var m = b.context || B;
          h ? b.onSuccess && b.onSuccess.call(m, l, g) :
              b.onError && b.onError.call(m, l, g);
          b.U && b.U.call(m, l, g)
        };
        'JSON' == (b.format || 'JSON') &&
                (h || 400 <= g.status && 500 > g.status) ?
            g.json().then(
                k,
                function() {
                  k(null)
                }) :
            k(null)
      }
    });
    b.fa && 0 < b.timeout &&
        (f = Oe(function() {
           e || (e = !0, window.clearTimeout(f), b.fa.call(b.context || B))
         }, b.timeout))
  } else
    If(a, b)
}
function If(a, b) {
  var c = b.format || 'JSON';
  a = Gf(a, b);
  var d = Hf(a, b), e = !1,
      f = Jf(a, function(k) {
        if (!e) {
          e = !0;
          h && window.clearTimeout(h);
          a: switch (k && 'status' in k ? k.status : -1) {
            case 200:
            case 201:
            case 202:
            case 203:
            case 204:
            case 205:
            case 206:
            case 304:
              var l = !0;
              break a;
            default:
              l = !1
          }
          var m = null, n = 400 <= k.status && 500 > k.status,
              q = 500 <= k.status && 600 > k.status;
          if (l || n || q) m = Kf(a, c, k, b.Ma);
          if (l)
            a: if (k && 204 == k.status) l = !0;
          else {
            switch (c) {
              case 'XML':
                l = 0 == parseInt(m && m.return_code, 10);
                break a;
              case 'RAW':
                l = !0;
                break a
            }
            l = !!m
          }
          m = m || {};
          n = b.context || B;
          l ? b.onSuccess && b.onSuccess.call(n, k, m) :
              b.onError && b.onError.call(n, k, m);
          b.U && b.U.call(n, k, m)
        }
      }, b.method, d, b.headers, b.responseType, b.withCredentials);
  if (b.R && 0 < b.timeout) {
    var g = b.R;
    var h = Oe(function() {
      e ||
          (e = !0, f.abort(), window.clearTimeout(h), g.call(b.context || B, f))
    }, b.timeout)
  }
}
function Gf(a, b) {
  b.Qa &&
      (a = document.location.protocol + '//' + document.location.hostname +
           (document.location.port ? ':' + document.location.port : '') + a);
  var c = T('XSRF_FIELD_NAME', void 0), d = b.xa;
  d && (d[c] && delete d[c], a = Ie(a, d || {}, !0));
  return a
}
function Hf(a, b) {
  var c = T('XSRF_FIELD_NAME', void 0), d = T('XSRF_TOKEN', void 0),
      e = b.postBody || '', f = b.C, g = T('XSRF_FIELD_NAME', void 0), h;
  b.headers && (h = b.headers['Content-Type']);
  b.Pa || qb(a) && !b.withCredentials && qb(a) != document.location.hostname ||
      'POST' != b.method || h && 'application/x-www-form-urlencoded' != h ||
      b.C && b.C[g] || (f || (f = {}), f[c] = d);
  f && 'string' === typeof e &&
      (e = He(e), Ta(e, f),
       e = b.ga && 'JSON' == b.ga ? JSON.stringify(e) : sb(e));
  if (!(c = e) && (c = f)) {
    a: {
      for (var k in f) {
        f = !1;
        break a
      } f = !0
    } c = !f
  }
  !Cf && c && 'POST' != b.method &&
      (Cf = !0, Ee(Error('AJAX request with postData should use POST')));
  return e
}
function Kf(a, b, c, d) {
  var e = null;
  switch (b) {
    case 'JSON':
      try {
        var f = c.responseText
      } catch (g) {
        throw d = Error('Error reading responseText'), d.params = a, Fe(d), g;
      }
      a = c.getResponseHeader('Content-Type') || '';
      f && 0 <= a.indexOf('json') && (e = JSON.parse(f));
      break;
    case 'XML':
      if (a = (a = c.responseXML) ? Lf(a) : null)
        e = {}, G(a.getElementsByTagName('*'), function(g) {
          e[g.tagName] = Mf(g)
        })
  }
  d && Nf(e);
  return e
}
function Nf(a) {
  if (Ca(a))
    for (var b in a) {
      var c;
      (c = 'html_content' == b) ||
          (c = b.length - 5, c = 0 <= c && b.indexOf('_html', c) == c);
      if (c) {
        c = b;
        var d = mb(a[b], null);
        a[c] = d
      } else
        Nf(a[b])
    }
}
function Lf(a) {
  return a ? (a = ('responseXML' in a ? a.responseXML : a)
                      .getElementsByTagName('root')) &&
              0 < a.length ?
             a[0] :
             null :
             null
}
function Mf(a) {
  var b = '';
  G(a.childNodes, function(c) {
    b += c.nodeValue
  });
  return b
}
function Jf(a, b, c, d, e, f, g) {
  function h() {
    4 == (k && 'readyState' in k ? k.readyState : 0) && b && De(b)(k)
  }
  c = void 0 === c ? 'GET' : c;
  d = void 0 === d ? '' : d;
  var k = zf();
  if (!k) return null;
  'onloadend' in k ? k.addEventListener('loadend', h, !1) :
                     k.onreadystatechange = h;
  U('debug_forward_web_query_parameters') && (a = Ef(a));
  k.open(c, a, !0);
  f && (k.responseType = f);
  g && (k.withCredentials = !0);
  c = 'POST' == c && (void 0 === window.FormData || !(d instanceof FormData));
  if (e = Df(a, e))
    for (var l in e)
      k.setRequestHeader(l, e[l]),
          'content-type' == l.toLowerCase() && (c = !1);
  c && k.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  k.send(d);
  return k
};
function Of() {
  for (var a = {}, b = u(Object.entries(He(T('DEVICE', '')))), c = b.next();
       !c.done; c = b.next()) {
    var d = u(c.value);
    c = d.next().value;
    d = d.next().value;
    'cbrand' === c     ? a.deviceMake = d :
        'cmodel' === c ? a.deviceModel = d :
        'cbr' === c    ? a.browserName = d :
        'cbrver' === c ? a.browserVersion = d :
        'cos' === c    ? a.osName = d :
        'cosver' === c ? a.osVersion = d :
                         'cplatform' === c && (a.platform = d)
  }
  return a
};
function Pf() {
  return 'INNERTUBE_API_KEY' in ze && 'INNERTUBE_API_VERSION' in ze
}
function of () {
  return {
    innertubeApiKey: T('INNERTUBE_API_KEY', void 0),
        innertubeApiVersion: T('INNERTUBE_API_VERSION', void 0),
        qa: T('INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO'),
        ra: T('INNERTUBE_CONTEXT_CLIENT_NAME', 'WEB'),
        innertubeContextClientVersion:
            T('INNERTUBE_CONTEXT_CLIENT_VERSION', void 0),
        ta: T('INNERTUBE_CONTEXT_HL', void 0),
        sa: T('INNERTUBE_CONTEXT_GL', void 0),
        ua: T('INNERTUBE_HOST_OVERRIDE', void 0) || '',
        wa: !!T('INNERTUBE_USE_THIRD_PARTY_AUTH', !1),
        va: !!T('INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT', !1),
        appInstallData: T('SERIALIZED_CLIENT_CONFIG_DATA', void 0)
  }
}
function nf(a) {
  var b = {
    client: {
      hl: a.ta,
      gl: a.sa,
      clientName: a.ra,
      clientVersion: a.innertubeContextClientVersion,
      configInfo: a.qa
    }
  },
      c = window.devicePixelRatio;
  c && 1 != c && (b.client.screenDensityFloat = String(c));
  c = T('EXPERIMENTS_TOKEN', '');
  '' !== c && (b.client.experimentsToken = c);
  c = [];
  var d = T('EXPERIMENTS_FORCED_FLAGS', {});
  for (e in d) c.push({key: e, value: String(d[e])});
  var e = T('EXPERIMENT_FLAGS', {});
  for (var f in e)
    f.startsWith('force_') && void 0 === d[f] &&
        c.push({key: f, value: String(e[f])});
  0 < c.length && (b.request = {internalExperimentFlags: c});
  a.appInstallData && U('web_log_app_install_experiments') &&
      (b.client.configInfo = b.client.configInfo || {},
       b.client.configInfo.appInstallData = a.appInstallData);
  T('DELEGATED_SESSION_ID') && !U('pageid_as_header_web') &&
      (b.user = {onBehalfOfUser: T('DELEGATED_SESSION_ID')});
  b.client = Object.assign(b.client, Of());
  return b
}
function Qf(a, b, c) {
  c = void 0 === c ? {} : c;
  var d = {'X-Goog-Visitor-Id': c.visitorData || T('VISITOR_DATA', '')};
  if (b && b.includes('www.youtube-nocookie.com')) return d;
  (b = c.Ka || T('AUTHORIZATION')) ||
      (a ? b = 'Bearer ' + C('gapi.auth.getToken')().Ja : b = yc([]));
  b &&
      (d.Authorization = b, d['X-Goog-AuthUser'] = T('SESSION_INDEX', 0),
       U('pageid_as_header_web') &&
           (d['X-Goog-PageId'] = T('DELEGATED_SESSION_ID')));
  return d
};
function Rf(a) {
  a = Object.assign({}, a);
  delete a.Authorization;
  var b = yc();
  if (b) {
    var c = new Od;
    c.update(T('INNERTUBE_API_KEY', void 0));
    c.update(b);
    b = c.digest();
    c = 3;
    Ba(b);
    void 0 === c && (c = 0);
    if (!Mb) {
      Mb = {};
      for (
          var d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
                      .split(''),
              e = ['+/=', '+/', '-_=', '-_.', '-_'], f = 0;
          5 > f; f++) {
        var g = d.concat(e[f].split(''));
        Lb[f] = g;
        for (var h = 0; h < g.length; h++) {
          var k = g[h];
          void 0 === Mb[k] && (Mb[k] = h)
        }
      }
    }
    c = Lb[c];
    d = [];
    for (e = 0; e < b.length; e += 3) {
      var l = b[e], m = (f = e + 1 < b.length) ? b[e + 1] : 0;
      k = (g = e + 2 < b.length) ? b[e + 2] : 0;
      h = l >> 2;
      l = (l & 3) << 4 | m >> 4;
      m = (m & 15) << 2 | k >> 6;
      k &= 63;
      g || (k = 64, f || (m = 64));
      d.push(c[h], c[l], c[m] || '', c[k] || '')
    }
    a.hash = d.join('')
  }
  return a
}
function Sf(a) {
  a = Rf(a);
  var b = new Od;
  b.update(JSON.stringify(a, Object.keys(a).sort()));
  a = b.digest();
  b = '';
  for (var c = 0; c < a.length; c++)
    b += '0123456789ABCDEF'.charAt(Math.floor(a[c] / 16)) +
        '0123456789ABCDEF'.charAt(a[c] % 16);
  return b
};
function Tf() {
  var a = new se;
  (a = a.isAvailable() ? new ye(a, 'yt.innertube') : null) ||
      (a = new te('yt.innertube'), a = a.isAvailable() ? a : null);
  this.f = a ? new oe(a) : null;
  this.g = document.domain || window.location.hostname
}
Tf.prototype.set = function(a, b, c, d) {
  c = c || 31104E3;
  this.remove(a);
  if (this.f) try {
      this.f.set(a, b, Date.now() + 1E3 * c);
      return
    } catch (f) {
    }
  var e = '';
  if (d) try {
      e = escape(de(b))
    } catch (f) {
      return
    }
  else
    e = escape(b);
  b = this.g;
  Sb.set(
      'yt-dev.' + a, e,
      {ca: c, path: '/', domain: void 0 === b ? 'google.com' : b, secure: !1})
};
Tf.prototype.get = function(a, b) {
  var c = void 0, d = !this.f;
  if (!d) try {
      c = this.f.get(a)
    } catch (e) {
      d = !0
    }
  if (d && (c = Sb.get('yt-dev.' + a, void 0)) && (c = unescape(c), b)) try {
      c = JSON.parse(c)
    } catch (e) {
      this.remove(a), c = void 0
    }
  return c
};
Tf.prototype.remove = function(a) {
  this.f && this.f.remove(a);
  var b = this.g;
  Sb.remove('yt-dev.' + a, '/', void 0 === b ? 'google.com' : b)
};
var Uf;
function Vf() {
  Uf || (Uf = new Tf);
  return Uf
}
function Wf(a, b, c, d) {
  if (d) return null;
  d = Vf().get('nextId', !0) || 1;
  var e = Vf().get('requests', !0) || {};
  e[d] =
      {method: a, request: b, authState: Rf(c), requestTime: Math.round(V())};
  Vf().set('nextId', d + 1, 86400, !0);
  Vf().set('requests', e, 86400, !0);
  return d
}
function Xf(a) {
  var b = Vf().get('requests', !0) || {};
  delete b[a];
  Vf().set('requests', b, 86400, !0)
}
function Yf(a) {
  var b = Vf().get('requests', !0);
  if (b) {
    for (var c in b) {
      var d = b[c];
      if (!(6E4 > Math.round(V()) - d.requestTime)) {
        var e = d.authState;
        var f = Rf(Qf(!1));
        a: {
          var g = void 0, h = void 0;
          for (h in e) if (!(h in f) || e[h] !== f[h]) {
            e = !1;
            break a
          } for (g in f) if (!(g in e)) {
            e = !1;
            break a
          } e = !0
        } e &&
            (e = d.request,
             'requestTimeMs' in e && (e.requestTimeMs = Math.round(V())),
             rf(a, d.method, e, {}));
        delete b[c]
      }
    }
    Vf().set('requests', b, 86400, !0)
  }
};
function Zf() {};
var $f = Jb || Kb;
function ag(a) {
  var b = I;
  return b ? 0 <= b.toLowerCase().indexOf(a) : !1
};
function bg(a) {
  if (!a) throw Error();
  throw a;
}
function cg(a) {
  return a
}
function W(a) {
  var b = this;
  this.g = a;
  this.state = {status: 'PENDING'};
  this.f = [];
  this.onRejected = [];
  this.g(
      function(c) {
        if ('PENDING' === b.state.status) {
          b.state = {status: 'FULFILLED', value: c};
          c = u(b.f);
          for (var d = c.next(); !d.done; d = c.next()) d = d.value, d()
        }
      },
      function(c) {
        if ('PENDING' === b.state.status) {
          b.state = {status: 'REJECTED', reason: c};
          c = u(b.onRejected);
          for (var d = c.next(); !d.done; d = c.next()) d = d.value, d()
        }
      })
}
W.all = function(a) {
  return new W(function(b, c) {
    var d = [], e = a.length;
    0 === e && b(d);
    for (var f = {J: 0}; f.J < a.length; f = {J: f.J}, ++f.J)
      dg(W.resolve(a[f.J]).then(function(g) {
        return function(h) {
          d[g.J] = h;
          e--;
          0 === e && b(d)
        }
      }(f)),
         function(g) {
           c(g)
         })
  })
};
W.resolve = function(a) {
  return new W(function(b, c) {
    a instanceof W ? a.then(b, c) : b(a)
  })
};
W.reject = function(a) {
  return new W(function(b, c) {
    c(a)
  })
};
W.prototype.then = function(a, b) {
  var c = this, d = null !== a && void 0 !== a ? a : cg,
      e = null !== b && void 0 !== b ? b : bg;
  return new W(function(f, g) {
    'PENDING' === c.state.status       ? (c.f.push(function() {
      eg(c, c, d, f, g)
    }),
                                    c.onRejected.push(function() {
                                      fg(c, c, e, f, g)
                                    })) :
        'FULFILLED' === c.state.status ? eg(c, c, d, f, g) :
                                         'REJECTED' === c.state.status &&
            fg(c, c, e, f, g)
  })
};
function dg(a, b) {
  a.then(void 0, b)
}
function eg(a, b, c, d, e) {
  try {
    if ('FULFILLED' !== a.state.status)
      throw Error('calling handleResolve before the promise is fulfilled.');
    var f = c(a.state.value);
    f instanceof W ? gg(a, b, f, d, e) : d(f)
  } catch (g) {
    e(g)
  }
}
function fg(a, b, c, d, e) {
  try {
    if ('REJECTED' !== a.state.status)
      throw Error('calling handleReject before the promise is rejected.');
    var f = c(a.state.reason);
    f instanceof W ? gg(a, b, f, d, e) : d(f)
  } catch (g) {
    e(g)
  }
}
function gg(a, b, c, d, e) {
  b === c ? e(new TypeError('Circular promise chain detected.')) :
            c.then(
                function(f) {
                  f instanceof W ? gg(a, b, f, d, e) : d(f)
                },
                function(f) {
                  e(f)
                })
};
function hg() {
  var a = Error.call(this, 'Transaction was aborted');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, hg.prototype)
}
v(hg, Error);
function ig() {
  var a = Error.call(this, 'IndexedDB is not supported.');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, ig.prototype)
}
v(ig, Error);
function jg() {
  var a = Error.call(
      this, 'The current transaction exceeded its quota limitations.');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, jg.prototype)
}
v(jg, Error);
function kg() {
  var a = Error.call(
      this,
      'The current transaction may have failed because of exceeding quota limitations.');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, kg.prototype)
}
v(kg, Error);
function lg(a) {
  return a instanceof DOMException ?
      'VersionError' === a.name :
      'DOMError' in self && a instanceof DOMError ?
      'VersionError' === a.name :
      a instanceof Object && 'message' in a ?
      'An attempt was made to open a database using a lower version than the existing version.' ===
          a.message :
      !1
}
function mg(a, b) {
  return new W(function(c, d) {
    function e() {
      var f = a ? b(a) : null;
      f ? f.then(function(g) {
        a = g;
        e()
      }, d) : c()
    }
    e()
  })
};
function ng(a, b, c) {
  function d() {
    c(a.error);
    f()
  }
  function e() {
    b(a.result);
    f()
  }
  function f() {
    try {
      a.removeEventListener('success', e), a.removeEventListener('error', d)
    } catch (g) {
    }
  }
  a.addEventListener('success', e);
  a.addEventListener('error', d)
}
function og(a) {
  return new R(function(b, c) {
    ng(a, b, c)
  })
}
function X(a) {
  return new W(function(b, c) {
    ng(a, b, c)
  })
};
function pg(a) {
  this.f = a
}
r = pg.prototype;
r.add = function(a, b, c) {
  return qg(this, [a], 'readwrite', function(d) {
    return rg(d, a).add(b, c)
  })
};
r.clear = function(a) {
  return qg(this, [a], 'readwrite', function(b) {
    return rg(b, a).clear()
  })
};
r.close = function() {
  this.f.close()
};
r.count = function(a, b) {
  return qg(this, [a], 'readonly', function(c) {
    return rg(c, a).count(b)
  })
};
function sg(a, b, c) {
  a = a.f.createObjectStore(b, c);
  return new tg(a)
}
r['delete'] = function(a, b) {
  return qg(this, [a], 'readwrite', function(c) {
    return rg(c, a)['delete'](b)
  })
};
r.get = function(a, b) {
  return qg(this, [a], 'readwrite', function(c) {
    return rg(c, a).get(b)
  })
};
function ug(a, b) {
  return qg(a, ['databases'], 'readwrite', function(c) {
    return vg(rg(c, 'databases'), b, void 0)
  })
}
function qg(a, b, c, d) {
  c = void 0 === c ? 'readonly' : c;
  return new R(function(e, f) {
    var g = a.f.transaction(b, c), h = new wg(g, b);
    dg(d(h).then(function(k) {
      Bd(xg(h).then(function() {
        e(k)
      }),
         function(l) {
           f(l)
         })
    }),
       function(k) {
         f(k)
       })
  })
}
function tg(a) {
  this.f = a
}
r = tg.prototype;
r.add = function(a, b) {
  var c = b ? this.f.add(a, b) : this.f.add(a);
  return X(c)
};
r.clear = function() {
  return X(this.f.clear()).then(function() {})
};
r.count = function(a) {
  a = a ? this.f.count(a) : this.f.count();
  return X(a)
};
r['delete'] = function(a) {
  return X(this.f['delete'](a))
};
r.get = function(a) {
  return X(this.f.get(a))
};
r.index = function(a) {
  return new yg(this.f.index(a))
};
r.getName = function() {
  return this.f.name
};
function vg(a, b, c) {
  a = c ? a.f.put(b, c) : a.f.put(b);
  return X(a)
}
function wg(a) {
  var b = this;
  this.f = a;
  this.g = new Map;
  this.aborted = !1;
  this.done = new R(function(c, d) {
    b.f.addEventListener('complete', function() {
      c()
    });
    b.f.addEventListener('error', function(e) {
      e.currentTarget === e.target && d(b.f.error)
    });
    b.f.addEventListener('abort', function() {
      var e = b.f.error;
      e ? ('QuotaExceededError' === e.name ?
               Fe(new jg) :
               'UnknownError' === e.name && Fe(new kg),
           d(e)) :
          d(new hg)
    })
  })
}
wg.prototype.abort = function() {
  this.f.abort();
  this.aborted = !0
};
function xg(a) {
  var b = a.f;
  b.commit && !a.aborted && b.commit();
  return a.done
}
function rg(a, b) {
  var c = a.f.objectStore(b), d = a.g.get(c);
  d || (d = new tg(c), a.g.set(c, d));
  return d
}
function yg(a) {
  this.f = a
}
yg.prototype.count = function(a) {
  a = a ? this.f.count(a) : this.f.count();
  return X(a)
};
yg.prototype.get = function(a) {
  return X(this.f.get(a))
};
function zg(a, b, c) {
  a = a.f.openCursor(
      void 0 === b.query ? null : b.query,
      void 0 === b.direction ? 'next' : b.direction);
  return Ag(a).then(function(d) {
    return mg(d, c)
  })
}
function Bg(a, b) {
  this.request = a;
  this.f = b
}
function Ag(a) {
  return X(a).then(function(b) {
    return null === b ? null : new Bg(a, b)
  })
}
Bg.prototype['delete'] = function() {
  return X(this.f['delete']()).then(function() {})
};
Bg.prototype.update = function(a) {
  return X(this.f.update(a))
};
function Cg(a, b, c) {
  function d() {
    m || (m = new pg(f.result));
    return m
  }
  var e = wg;
  var f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
  var g = c.blocked, h = c.blocking, k = c.f, l = c.upgrade, m;
  l && f.addEventListener('upgradeneeded', function(n) {
    if (null === n.newVersion)
      throw Error('Invariant: newVersion on IDbVersionChangeEvent is null');
    if (null === f.transaction)
      throw Error('Invariant: transaction on IDbOpenDbRequest is null');
    var q = d(), p = new e(f.transaction);
    l(q, n.oldVersion, n.newVersion, p)
  });
  g && f.addEventListener('blocked', function() {
    g()
  });
  return og(f).then(function(n) {
    h && n.addEventListener('versionchange', function() {
      h(d())
    });
    k && n.addEventListener('close', function() {
      k()
    });
    return d()
  })
}
function Dg(a, b, c) {
  c = void 0 === c ? {} : c;
  return Cg(a, b, c)
};
var Eg, Fg, Gg = ['getAll', 'getAllKeys', 'getKey', 'openKeyCursor'],
            Hg = ['getAll', 'getAllKeys', 'getKey', 'openKeyCursor'];
function Ig() {
  return K(this, function b() {
    var c;
    return z(b, function(d) {
      switch (d.f) {
        case 1:
          var e;
          if (e = $f)
            e = /WebKit\/([0-9]+)/.exec(I),
            e = !!(e && 600 <= parseInt(e[1], 10));
          e &&
              (e = /WebKit\/([0-9]+)/.exec(I),
               e = !(e && 602 <= parseInt(e[1], 10)));
          if (e && !U('ytidb_allow_on_ios_safari_v8_and_v9'))
            return d['return'](!1);
          try {
            if (!self.indexedDB) return d['return'](!1)
          } catch (f) {
            return d['return'](!1)
          }
          d.o = 2;
          d.l = 3;
          return y(d, Dg('yt-idb-test-do-not-use'), 5);
        case 5:
          c = d.g;
        case 3:
          d.K = [d.i];
          d.o = 0;
          d.l = 0;
          if (c) try {
              c.close()
            } catch (f) {
            }
          e = d.K.splice(0)[0];
          (e = d.i = d.i || e) ? e.ba        ? d.f = d.o || d.l :
                  void 0 != e.G && d.l < e.G ? (d.f = e.G, d.i = null) :
                                               d.f = d.l :
                                 d.f = 4;
          break;
        case 2:
          return d.o = 0, d.i = null, d['return'](!1);
        case 4:
          return d['return'](!0)
      }
    })
  })
}
function Jg() {
  return void 0 !== Eg ? yd(Eg) : new R(function(a) {
    Ig().then(function(b) {
      Eg = b;
      a(b)
    })
  })
}
function Kg() {
  return void 0 !== Fg ? yd(Fg) :
                         Jg().then(function(a) {
                               if (!a) return !1;
                               var b = u(Gg);
                               for (a = b.next(); !a.done; a = b.next())
                                 if (!IDBObjectStore.prototype[a.value])
                                   return !1;
                               b = u(Hg);
                               for (a = b.next(); !a.done; a = b.next())
                                 if (!IDBIndex.prototype[a.value]) return !1;
                               return IDBObjectStore.prototype.getKey ? !0 : !1
                             })
                             .then(function(a) {
                               return Fg = a
                             })
};
var Lg;
function Mg() {
  function a(b) {
    b.close();
    Lg = void 0
  }
  Lg ||
      (Lg =
           Bd(Dg('YtIdbMeta', 1, {
                blocking: a,
                upgrade: function(b, c) {
                  1 > c && sg(b, 'databases', {keyPath: 'actualName'})
                }
              }),
              function(b) {
                return lg(b) ? Dg('YtIdbMeta', void 0, {blocking: a}) : zd(b)
              }));
  return Lg
}
function Ng(a) {
  return Mg().then(function(b) {
    return b.get('databases', a.actualName).then(function(c) {
      if (c ? a.actualName !== c.actualName || a.publicName !== c.publicName ||
                  a.userIdentifier !== c.userIdentifier ||
                  a.signedIn !== c.signedIn :
              1)
        return ug(b, a)
    })
  })
}
function Og(a) {
  return Mg().then(function(b) {
    return b['delete']('databases', a)
  })
};
function Pg(a) {
  try {
    var b = {
      actualName: 'LogsDataBase',
      publicName: 'LogsDataBase',
      userIdentifier: void 0,
      signedIn: !1
    }
  } catch (c) {
    return zd(c)
  }
  return Bd(
      Ng(b).then(function() {
        return a(b)
      }),
      function(c) {
        return Bd(Og(b.actualName), function() {}).then(function() {
          return zd(c)
        })
      })
}
function Qg() {
  return Jg().then(function(a) {
    if (!a) throw new ig;
  })
}
function Rg(a, b) {
  b = void 0 === b ? {} : b;
  return Qg().then(function() {
    return Pg(function(c) {
      return Dg(c.actualName, a, b)
    })
  })
};
function Sg() {
  W.call(this, function() {});
  throw Error(
      'Not allowed to instantiate the thennable outside of the core library.');
}
v(Sg, W);
Sg.reject = W.reject;
Sg.resolve = W.resolve;
Sg.all = W.all;
var Tg;
function Ug() {
  return K(this, function b() {
    return z(b, function(c) {
      if (!Tg) try {
          Tg = Rg(1, {
            upgrade: function(d, e) {
              1 > e &&
                  (sg(d, 'LogsRequestsStore',
                      {keyPath: 'id', autoIncrement: !0})
                       .f.createIndex(
                           'newRequest', ['status', 'authHash', 'timestamp'],
                           {unique: !1}),
                   sg(d, 'sapisid'))
            }
          })
        } catch (d) {
          if (!lg(d)) return Ee(d), c['return'](Promise.reject(d));
          Tg = Rg()
        }
      return c['return'](Tg)
    })
  })
}
function Vg(a) {
  return K(this, function c() {
    var d, e, f;
    return z(c, function(g) {
      if (1 == g.f) return y(g, Wg(), 2);
      if (3 != g.f) return d = g.g, y(g, Ug(), 3);
      e = g.g;
      f = Object.assign(
          Object.assign({}, a),
          {options: JSON.parse(JSON.stringify(a.options)), authHash: d});
      return g['return'](e.add('LogsRequestsStore', f))
    })
  })
}
function Xg() {
  return K(this, function b() {
    var c, d, e, f, g, h;
    return z(b, function(k) {
      switch (k.f) {
        case 1:
          return y(k, Wg(), 2);
        case 2:
          return c = k.g, d = ['NEW', c, 0], e = ['NEW', c, V()],
                 f = IDBKeyRange.bound(d, e), y(k, Ug(), 3);
        case 3:
          return g = k.g, h = void 0,
                 y(k, qg(g, ['LogsRequestsStore'], 'readwrite', function(l) {
                     return zg(
                         rg(l, 'LogsRequestsStore').index('newRequest'),
                         {query: f, direction: 'prev'}, function(m) {
                           m.f.value &&
                               (h = m.f.value, h.status = 'QUEUED', m.update(h))
                         })
                   }), 4);
        case 4:
          return k['return'](h)
      }
    })
  })
}
function Yg(a) {
  return K(this, function c() {
    var d;
    return z(c, function(e) {
      if (1 == e.f) return y(e, Ug(), 2);
      d = e.g;
      return e['return'](qg(d, ['LogsRequestsStore'], 'readwrite', function(f) {
        var g = rg(f, 'LogsRequestsStore');
        return g.get(a).then(function(h) {
          if (h)
            return h.status = 'QUEUED', vg(g, h).then(function() {
              return h
            })
        })
      }))
    })
  })
}
function Zg(a) {
  return K(this, function c() {
    var d;
    return z(c, function(e) {
      if (1 == e.f) return y(e, Ug(), 2);
      d = e.g;
      return e['return'](qg(d, ['LogsRequestsStore'], 'readwrite', function(f) {
        var g = rg(f, 'LogsRequestsStore');
        return g.get(a).then(function(h) {
          return h ?
              (h.status = 'NEW', h.sendCount += 1, vg(g, h).then(function() {
                return h
              })) :
              Sg.resolve(void 0)
        })
      }))
    })
  })
}
function $g(a) {
  return K(this, function c() {
    var d;
    return z(c, function(e) {
      if (1 == e.f) return y(e, Ug(), 2);
      d = e.g;
      return e['return'](d['delete']('LogsRequestsStore', a))
    })
  })
}
function Wg() {
  return K(this, function b() {
    var c;
    return z(b, function(d) {
      if (1 == d.f) {
        Zf.f || (Zf.f = new Zf);
        var e = {};
        var f = yc([]);
        f &&
            (e.Authorization = f, e['X-Goog-AuthUser'] = T('SESSION_INDEX', 0),
             'INNERTUBE_HOST_OVERRIDE' in ze ||
                 (e['X-Origin'] = window.location.origin),
             U('pageid_as_header_web') && 'DELEGATED_SESSION_ID' in ze &&
                 (e['X-Goog-PageId'] = T('DELEGATED_SESSION_ID')));
        e = yd(e);
        return y(d, e, 2)
      }
      c = d.g;
      return d['return'](Sf(c))
    })
  })
};
var ah = Me('network_polling_interval', 3E4);
function bh() {
  this.j = 0;
  this.f = window.navigator.onLine;
  ch(this);
  dh(this)
}
function eh() {
  bh.f || (bh.f = new bh);
  return bh.f
}
function fh(a) {
  var b = gh, c = hh;
  (new R(function(d) {
    a.g = d
  })).then(function() {
    b();
    c && (a.i = c)
  });
  ih(a)
}
function dh(a) {
  window.addEventListener('online', function() {
    a.f = !0;
    a.g && a.g()
  })
}
function ch(a) {
  window.addEventListener('offline', function() {
    a.f = !1;
    a.i && a.i()
  })
}
function ih(a) {
  a.j || (jh(a), window.navigator.onLine && a.g && a.g())
}
function jh(a) {
  a.j = Qe(function() {
    window.navigator.onLine ?
        (!1 === a.f && Ee(Error('NetworkStatusManager missed online event.')),
         a.f = !0, a.g && a.g()) :
        (!0 === a.f && Ee(Error('NetworkStatusManager missed offline event.')),
         a.f = !1, a.i && a.i());
    jh(a)
  }, ah)
};
var kh = Me('networkless_throttle_timeout') || 100,
    lh = Me('networkless_retry_attempts') || 1, mh = 0;
function nh(a, b) {
  b = void 0 === b ? {} : b;
  oh().then(function(c) {
    var d = eh().f;
    if (!c || U('networkless_bypass_write') ||
        d && U('vss_networkless_bypass_write'))
      If(a, b);
    else {
      var e = {url: a, options: b, timestamp: V(), status: 'NEW', sendCount: 0};
      Vg(e).then(function(f) {
        e.id = f;
        f = eh();
        f.f && !U('networkless_always_offline') ? ph(e) : fh(f)
      })['catch'](function(f) {
        ph(e);
        Ee(f)
      })
    }
  })
}
function gh() {
  var a = this;
  mh || (mh = Re(function() {
           return K(a, function c() {
             var d;
             return z(c, function(e) {
               if (1 == e.f) return y(e, Xg(), 2);
               if (3 != e.f)
                 return d = e.g, d ? y(e, ph(d), 3) : (hh(), e['return']());
               mh = 0;
               gh();
               e.f = 0
             })
           })
         }, 1, kh))
}
function hh() {
  var a = mh;
  if (!isNaN(a)) {
    var b = C('yt.scheduler.instance.cancelJob');
    b ? b(a) : window.clearTimeout(a)
  }
  mh = 0
}
function ph(a) {
  return K(this, function c() {
    var d;
    return z(c, function(e) {
      switch (e.f) {
        case 1:
          if (!a.id) {
            e.G(2);
            break
          }
          return y(e, Yg(a.id), 3);
        case 3:
          (d = e.g) ? a = d :
                      Fe(Error('The request cannot be found in the database.'));
        case 2:
          var f = a.timestamp;
          if (!(2592E6 <= V() - f)) {
            e.G(4);
            break
          }
          Fe(Error(
              'Networkless Logging: Stored logs request expired age limit'));
          if (!a.id) {
            e.G(5);
            break
          }
          return y(e, $g(a.id), 5);
        case 5:
          return e['return']();
        case 4:
          f = a = qh(a);
          var g, h;
          if (null ===
                          (h = null ===
                                       (g = null === f || void 0 === f ?
                                            void 0 :
                                            f.options) ||
                                   void 0 === g ?
                               void 0 :
                               g.C) ||
                      void 0 === h ?
                  0 :
                  h.requestTimeMs)
            f.options.C.requestTimeMs = Math.round(V());
          (a = f) && If(a.url, a.options);
          e.f = 0
      }
    })
  })
}
function qh(a) {
  var b = this, c = a.options.onError ? a.options.onError : function() {};
  a.options.onError = function(e, f) {
    return K(b, function h() {
      return z(h, function(k) {
        if (1 == k.f)
          return a && a.id ?
              a.sendCount < lh ? y(k, Zg(a.id), 6) : y(k, $g(a.id), 2) :
              k.G(2);
        2 != k.f && fh(eh());
        c(e, f);
        k.f = 0
      })
    })
  };
  var d = a.options.onSuccess ? a.options.onSuccess : function() {};
  a.options.onSuccess = function(e, f) {
    return K(b, function h() {
      return z(h, function(k) {
        if (1 == k.f) return a && a.id ? y(k, $g(a.id), 2) : k.G(2);
        d(e, f);
        k.f = 0
      })
    })
  };
  return a
}
function oh() {
  return K(this, function b() {
    return z(b, function(c) {
      return U('networkless_logging') ?
          (2 === Me('networkless_ytidb_version') && Kg().then(function(d) {
            return d
          }),
           c['return'](Jg())) :
          c['return'](!1)
    })
  })
};
function rh(a, b) {
  for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
  d = Error.call(this, a);
  this.message = d.message;
  'stack' in d && (this.stack = d.stack);
  this.args = [].concat(c instanceof Array ? c : fa(u(c)))
}
v(rh, Error);
function sh(a) {
  var b = this;
  this.f = null;
  a ? this.f = a : Pf() && (this.f = of());
  Qe(function() {
    Yf(b)
  }, 5E3)
}
sh.prototype.isReady = function() {
  !this.f && Pf() && (this.f = of());
  return !!this.f
};
function rf(a, b, c, d) {
  !T('VISITOR_DATA') && 'visitor_id' !== b && .01 > Math.random() &&
      Fe(new rh(
          'Missing VISITOR_DATA when sending innertube request.', b, c, d));
  if (!a.isReady()) {
    var e = new rh('innertube xhrclient not ready', b, c, d);
    Ee(e);
    e.sampleWeight = 0;
    throw e;
  }
  var f = {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    C: c,
    ga: 'JSON',
    R: function() {
      d.R()
    },
    fa: d.R,
    onSuccess: function(n, q) {
      if (d.onSuccess) d.onSuccess(q)
    },
    ea: function(n) {
      if (d.onSuccess) d.onSuccess(n)
    },
    onError: function(n, q) {
      if (d.onError) d.onError(q)
    },
    Ra: function(n) {
      if (d.onError) d.onError(n)
    },
    timeout: d.timeout,
    withCredentials: !0
  },
      g = '';
  (e = a.f.ua) && (g = e);
  var h = a.f.wa || !1, k = Qf(h, g, d);
  Object.assign(f.headers, k);
  f.headers.Authorization && !g &&
      (f.headers['x-origin'] = window.location.origin);
  e = '/youtubei/' + a.f.innertubeApiVersion + '/' + b;
  var l = {alt: 'json'};
  a.f.va && f.headers.Authorization || (l.key = a.f.innertubeApiKey);
  var m = Ie('' + g + e, l || {}, !0);
  oh().then(function(n) {
    if (d.retry && U('retry_web_logging_batches') &&
        'www.youtube-nocookie.com' != g) {
      if (U('networkless_gel') && !n || !U('networkless_gel'))
        var q = Wf(b, c, k, h);
      if (q) {
        var p = f.onSuccess, w = f.ea;
        f.onSuccess = function(x, F) {
          Xf(q);
          p(x, F)
        };
        c.ea = function(x, F) {
          Xf(q);
          w(x, F)
        }
      }
    }
    try {
      U('use_fetch_for_op_xhr') ?
          Ff(m, f) :
          U('networkless_gel') && d.retry ?
          (f.method = 'POST', nh(m, f)) :
          (f.method = 'POST', f.C || (f.C = {}), If(m, f))
    } catch (x) {
      if ('InvalidAccessError' == x.name)
        q && (Xf(q), q = 0),
            Fe(Error('An extension is blocking network request.'));
      else
        throw x;
    }
    q && Qe(function() {
      Yf(a)
    }, 5E3)
  })
};
function th(a, b, c) {
  c = void 0 === c ? {} : c;
  var d = sh;
  T('ytLoggingEventsDefaultDisabled', !1) && sh == sh && (d = null);
  tf(a, b, d, c)
};
var uh = Date.now().toString();
function vh() {
  a: {
    if (window.crypto && window.crypto.getRandomValues) try {
      var a = Array(16), b = new Uint8Array(16);
      window.crypto.getRandomValues(b);
      for (var c = 0; c < a.length; c++) a[c] = b[c];
      var d = a;
      break a
    } catch (e) {} d = Array(16);
    for (a = 0; 16 > a; a++) {
      b = Date.now();
      for (c = 0; c < b % 23; c++) d[a] = Math.random();
      d[a] = Math.floor(256 * Math.random())
    } if (uh) for (a = 1, b = 0; b < uh.length; b++) d[a % 16] =
        d[a % 16] ^ d[(a - 1) % 16] / 4 ^ uh.charCodeAt(b),
    a++
  } a = [];
  for (b = 0; b < d.length; b++)
    a.push('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
               .charAt(d[b] & 63));
  return a.join('')
};
var wh = B.ytLoggingDocDocumentNonce_ || vh();
D('ytLoggingDocDocumentNonce_', wh);
function xh(a) {
  a = void 0 === a ? 0 : a;
  return 0 == a ? 'client-screen-nonce' : 'client-screen-nonce.' + a
}
function yh(a) {
  a = void 0 === a ? 0 : a;
  return 0 == a ? 'ROOT_VE_TYPE' : 'ROOT_VE_TYPE.' + a
}
D('yt_logging_screen.getRootVeType', function(a) {
  return T(yh(void 0 === a ? 0 : a), void 0)
});
function zh() {
  var a = T('csn-to-ctt-auth-info');
  a || (a = {}, Ae('csn-to-ctt-auth-info', a));
  return a
}
function Ah(a) {
  a = void 0 === a ? 0 : a;
  var b = T(xh(a));
  if (!b && !T('USE_CSN_FALLBACK', !0)) return null;
  b || 0 != a ||
      (U('kevlar_client_side_screens') || U('c3_client_side_screens') ?
           b = 'UNDEFINED_CSN' :
           b = T('EVENT_ID'));
  return b ? b : null
}
D('yt_logging_screen.getCurrentCsn', Ah);
function Bh(a, b, c) {
  var d = zh();
  (c = Ah(c)) && delete d[c];
  b && (d[a] = b)
}
D('yt_logging_screen.getCttAuthInfo', function(a) {
  return zh()[a]
});
D('yt_logging_screen.setCurrentScreen', function(a, b, c, d) {
  c = void 0 === c ? 0 : c;
  if (a !== T(xh(c)) || b !== T(yh(c)))
    if (Bh(a, d, c), Ae(xh(c), a), Ae(yh(c), b),
        0 == c || U('web_screen_associated_all_layers'))
      b =
          function() {
        setTimeout(function() {
          a &&
              tf('foregroundHeartbeatScreenAssociated',
                 {clientDocumentNonce: wh, clientScreenNonce: a}, sh)
        }, 0)
      },
      'requestAnimationFrame' in window ? window.requestAnimationFrame(b) : b()
});
function Ch(a, b) {
  this.version = a;
  this.args = b
};
function Dh(a) {
  this.topic = a
}
Dh.prototype.toString = function() {
  return this.topic
};
var Eh = C('ytPubsub2Pubsub2Instance') || new S;
S.prototype.subscribe = S.prototype.subscribe;
S.prototype.unsubscribeByKey = S.prototype.S;
S.prototype.publish = S.prototype.W;
S.prototype.clear = S.prototype.clear;
D('ytPubsub2Pubsub2Instance', Eh);
D('ytPubsub2Pubsub2SubscribedKeys', C('ytPubsub2Pubsub2SubscribedKeys') || {});
D('ytPubsub2Pubsub2TopicToKeys', C('ytPubsub2Pubsub2TopicToKeys') || {});
D('ytPubsub2Pubsub2IsAsync', C('ytPubsub2Pubsub2IsAsync') || {});
D('ytPubsub2Pubsub2SkipSubKey', null);
function Fh(a, b) {
  var c = C('ytPubsub2Pubsub2Instance');
  c && c.publish.call(c, a.toString(), a, b)
};
var Gh = [
  {
    da: function(a) {
      return 'Cannot read property \'' + a.key + '\''
    },
    V: {
      TypeError: [
        {
          regexp: /Cannot read property '([^']+)' of (null|undefined)/,
          groups: ['key', 'value']
        },
        {
          regexp:
              /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
          groups: ['value', 'key']
        },
        {
          regexp:
              /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
          groups: ['value', 'key']
        },
        {
          regexp:
              /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
          groups: ['key']
        },
        {
          regexp:
              /Unable to get property '([^']+)' of (undefined or null) reference/,
          groups: ['key', 'value']
        }
      ],
      Error: [{
        regexp: /(Permission denied) to access property "([^']+)"/,
        groups: ['reason', 'key']
      }]
    }
  },
  {
    da: function(a) {
      return 'Cannot call \'' + a.key + '\''
    },
    V: {
      TypeError: [
        {
          regexp: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
          groups: ['base', 'key']
        },
        {
          regexp: /Object (.*) has no method '([^ ]+)'/,
          groups: ['base', 'key']
        },
        {
          regexp: /Object doesn't support property or method '([^ ]+)'/,
          groups: ['key']
        },
        {
          regexp:
              /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
          groups: ['key']
        },
        {
          regexp:
              /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
          groups: ['key']
        }
      ]
    }
  }
];
function Hh() {
  this.f = [];
  this.g = []
}
var Ih;
var Jh = new S;
var Kh = new Set, Lh = 0,
    Mh = ['PhantomJS', 'Googlebot', 'TO STOP THIS SECURITY SCAN go/scan'];
function Nh(a) {
  var b = void 0 === b ? {} : b;
  b.name = T('INNERTUBE_CONTEXT_CLIENT_NAME', 1);
  b.version = T('INNERTUBE_CONTEXT_CLIENT_VERSION', void 0);
  var c = b || {};
  b = 'WARNING';
  b = void 0 === b ? 'ERROR' : b;
  var d = void 0 === d ? !1 : d;
  if (a) {
    if (U('console_log_js_exceptions')) {
      var e = [];
      e.push('Name: ' + a.name);
      e.push('Message: ' + a.message);
      a.hasOwnProperty('params') &&
          e.push('Error Params: ' + JSON.stringify(a.params));
      e.push('File name: ' + a.fileName);
      e.push('Stacktrace: ' + a.stack);
      window.console.log(e.join('\n'), a)
    }
    if ((window && window.yterr || d) && !(5 <= Lh) && 0 !== a.sampleWeight) {
      var f = Nb(a);
      d = f.message || 'Unknown Error';
      e = f.name || 'UnknownError';
      var g = f.lineNumber || 'Not available',
          h = f.fileName || 'Not available';
      f = f.stack || a.f || 'Not available';
      if (a.hasOwnProperty('args') && a.args && a.args.length)
        for (var k = 0, l = 0; l < a.args.length; l++) {
          var m = a.args[l], n = 'params.' + l;
          k += n.length;
          if (m)
            if (Array.isArray(m))
              for (var q = c, p = 0;
                   p < m.length && !(m[p] && (k += Oh(p, m[p], n, q), 500 < k));
                   p++)
                ;
            else if ('object' === typeof m)
              for (q in q = void 0, p = c, m) {
                if (m[q] && (k += Oh(q, m[q], n, p), 500 < k)) break
              }
            else
              c[n] = String(JSON.stringify(m)).substring(0, 500),
              k += c[n].length;
          else
            c[n] = String(JSON.stringify(m)).substring(0, 500),
            k += c[n].length;
          if (500 <= k) break
        }
      else if (a.hasOwnProperty('params') && a.params)
        if (m = a.params, 'object' === typeof a.params)
          for (l in n = 0, m) {
            if (m[l] &&
                (k = 'params.' + l,
                 q = String(JSON.stringify(m[l])).substr(0, 500), c[k] = q,
                 n += k.length + q.length, 500 < n))
              break
          }
        else
          c.params = String(JSON.stringify(m)).substr(0, 500);
      navigator.vendor && !c.hasOwnProperty('vendor') &&
          (c.vendor = navigator.vendor);
      c = {
        message: d,
        name: e,
        lineNumber: g,
        fileName: h,
        stack: f,
        params: c
      };
      a = Number(a.columnNumber);
      isNaN(a) || (c.lineNumber = c.lineNumber + ':' + a);
      a = u(Gh);
      for (d = a.next(); !d.done; d = a.next())
        if (d = d.value, d.V[c.name])
          for (g = u(d.V[c.name]), e = g.next(); !e.done; e = g.next())
            if (h = e.value, e = c.message.match(h.regexp)) {
              c.params['error.original'] = e[0];
              g = h.groups;
              h = {};
              for (f = 0; f < g.length; f++)
                h[g[f]] = e[f + 1], c.params['error.' + g[f]] = e[f + 1];
              c.message = d.da(h);
              break
            }
      window.yterr && 'function' === typeof window.yterr && window.yterr(c);
      if (!(Kh.has(c.message) || 0 <= c.stack.indexOf('/YouTubeCenter.js') ||
            0 <= c.stack.indexOf('/mytube.js'))) {
        Jh.W('handleError', c);
        if (U('kevlar_gel_error_routing')) {
          a = b;
          a: {
            d = u(Mh); for (e = d.next(); !e.done;
                            e = d.next()) if (ag(e.value.toLowerCase())) {
              d = !0;
              break a
            } d = !1
          } if (!d) {
            d = {stackTrace: c.stack};
            c.fileName && (d.filename = c.fileName);
            e = c.lineNumber && c.lineNumber.split ? c.lineNumber.split(':') :
                                                     [];
            0 !== e.length &&
                (1 !== e.length || isNaN(Number(e[0])) ?
                     2 !== e.length || isNaN(Number(e[0])) ||
                         isNaN(Number(e[1])) ||
                         (d.lineNumber = Number(e[0]),
                          d.columnNumber = Number(e[1])) :
                     d.lineNumber = Number(e[0]));
            e = c.message;
            g = c.name;
            Ih || (Ih = new Hh);
            h = Ih;
            a: {
              f = u(h.g); for (l = f.next(); !l.done; l = f.next()) if (
                              l = l.value, c.message && c.message.match(l.f)) {
                h = l.weight;
                break a
              } h = u(h.f);
              for (f = h.next(); !f.done;
                   f = h.next()) if (f = f.value, f.callback(c)) {
                h = f.weight;
                break a
              } h = 1
            } e = {
              level: 'ERROR_LEVEL_UNKNOWN',
              message: e,
              errorClassName: g,
              sampleWeight: h
            };
            'ERROR' === a ?
                e.level = 'ERROR_LEVEL_ERROR' :
                'WARNING' === a && (e.level = 'ERROR_LEVEL_WARNNING');
            a = {isObfuscated: !0, browserStackInfo: d};
            d = {pageUrl: window.location.href, kvPairs: []};
            if (g = c.params)
              for (h = u(Object.keys(g)), f = h.next(); !f.done; f = h.next())
                f = f.value,
                d.kvPairs.push({key: 'client.' + f, value: String(g[f])});
            g = T('SERVER_NAME', void 0);
            h = T('SERVER_VERSION', void 0);
            g && h &&
                (d.kvPairs.push({key: 'server.name', value: g}),
                 d.kvPairs.push({key: 'server.version', value: h}));
            th('clientError', {errorMetadata: d, stackTrace: a, logMessage: e});
            kf()
          }
        }
        a = c.params || {};
        b = {
          xa: {
            a: 'logerror',
            t: 'jserror',
            type: c.name,
            msg: c.message.substr(0, 250),
            line: c.lineNumber,
            level: b,
            'client.name': a.name
          },
          C: {url: T('PAGE_NAME', window.location.href), file: c.fileName},
          method: 'POST'
        };
        a.version && (b['client.version'] = a.version);
        if (b.C) {
          c.stack && (b.C.stack = c.stack);
          d = u(Object.keys(a));
          for (e = d.next(); !e.done; e = d.next())
            e = e.value, b.C['client.' + e] = a[e];
          if (a = T('LATEST_ECATCHER_SERVICE_TRACKING_PARAMS', void 0))
            for (d = u(Object.keys(a)), e = d.next(); !e.done; e = d.next())
              e = e.value, b.C[e] = a[e];
          a = T('SERVER_NAME', void 0);
          d = T('SERVER_VERSION', void 0);
          a && d && (b.C['server.name'] = a, b.C['server.version'] = d)
        }
        If(T('ECATCHER_REPORT_HOST', '') + '/error_204', b);
        Kh.add(c.message);
        Lh++
      }
    }
  }
}
function Oh(a, b, c, d) {
  c += '.' + a;
  a = String(JSON.stringify(b)).substr(0, 500);
  d[c] = a;
  return c.length + a.length
};
function Ph(a, b) {
  for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
  if (!Qh(a) || c.some(function(e) {
        return !Qh(e)
      }))
    throw Error('Only objects may be merged.');
  c = u(c);
  for (d = c.next(); !d.done; d = c.next()) Rh(a, d.value);
  return a
}
function Rh(a, b) {
  for (var c in b)
    if (Qh(b[c])) {
      if (c in a && !Qh(a[c]))
        throw Error('Cannot merge an object into a non-object.');
      c in a || (a[c] = {});
      Rh(a[c], b[c])
    } else if (Sh(b[c])) {
      if (c in a && !Sh(a[c]))
        throw Error('Cannot merge an array into a non-array.');
      c in a || (a[c] = []);
      Th(a[c], b[c])
    } else
      a[c] = b[c];
  return a
}
function Th(a, b) {
  for (var c = u(b), d = c.next(); !d.done; d = c.next())
    d = d.value,
    Qh(d)     ? a.push(Rh({}, d)) :
        Sh(d) ? a.push(Th([], d)) :
                a.push(d);
  return a
}
function Qh(a) {
  return 'object' === typeof a && !Array.isArray(a)
}
function Sh(a) {
  return 'object' === typeof a && Array.isArray(a)
};
var Uh = {}, Vh = 0;
function Wh(a, b, c, d, e) {
  e = void 0 === e ? '' : e;
  if (a)
    if (c && !ag('cobalt')) {
      if (a) {
        a instanceof H ||
            (a = 'object' == typeof a && a.P ? a.O() : String(a),
             gb.test(a) ?
                 a = new H(a, db) :
                 (a = String(a), a = a.replace(/(%0A|%0D)/g, ''),
                  a = (b = a.match(fb)) && eb.test(b[1]) ? new H(a, db) :
                                                           null));
        a = a || hb;
        a instanceof H&& a.constructor === H ?
            a = a.f :
            (Aa(a), a = 'type_error:SafeUrl');
        if ('about:invalid#zClosurez' === a || a.startsWith('data'))
          a = '';
        else {
          if (!(a instanceof kb)) {
            b = 'object' == typeof a;
            var f = null;
            b && a.aa && (f = a.Z());
            a = mb(Wa(b && a.P ? a.O() : String(a)), f)
          }
          a instanceof kb&& a.constructor === kb ?
              a = a.f :
              (Aa(a), a = 'type_error:SafeHtml');
          a = encodeURIComponent(String(de(a.toString())))
        }
        /^[\s\xa0]*$/.test(a) ||
            (a = Xb('IFRAME', {
               src: 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"',
               style: 'display:none'
             }),
             (9 == a.nodeType ? a : a.ownerDocument || a.document)
                 .body.appendChild(a))
      }
    } else if (e)
      Jf(a, b, 'POST', e, d);
    else if (T('USE_NET_AJAX_FOR_PING_TRANSPORT', !1) || d)
      Jf(a, b, 'GET', '', d);
    else {
      b: {
        try {
          var g = new Ja({url: a});
          if (g.i && g.g || g.j) {
            var h = pb(a.match(ob)[5] || null), k;
            if (!(k = !h || !h.endsWith('/aclk'))) {
              var l = a.search(ub);
              d: {
                for (c = 0; 0 <= (c = a.indexOf('ri', c)) && c < l;) {
                  var m = a.charCodeAt(c - 1);
                  if (38 == m || 63 == m) {
                    var n = a.charCodeAt(c + 2);
                    if (!n || 61 == n || 38 == n || 35 == n) {
                      var q = c;
                      break d
                    }
                  }
                  c += 3
                } q = -1
              } if (0 > q) var p = null;
              else {
                var w = a.indexOf('&', q);
                if (0 > w || w > l) w = l;
                q += 3;
                p = decodeURIComponent(a.substr(q, w - q).replace(/\+/g, ' '))
              }
              k = '1' !== p
            }
            f = !k;
            break b
          }
        } catch (x) {} f = !1
      } f ?
          Xh(a) ? (b && b(), f = !0) : f = !1 :
          f = !1;
      f || Yh(a, b)
    }
}
function Xh(a, b) {
  try {
    if (window.navigator && window.navigator.sendBeacon &&
        window.navigator.sendBeacon(a, void 0 === b ? '' : b))
      return !0
  } catch (c) {
  }
  return !1
}
function Yh(a, b) {
  var c = new Image, d = '' + Vh++;
  Uh[d] = c;
  c.onload = c.onerror = function() {
    b && Uh[d] && b();
    delete Uh[d]
  };
  c.src = a
};
function Zh(a, b) {
  Ch.call(this, 1, arguments)
}
v(Zh, Ch);
function $h(a, b) {
  Ch.call(this, 1, arguments)
}
v($h, Ch);
var ai = new Dh('aft-recorded'), bi = new Dh('timing-sent');
var ci = window;
function di() {
  this.timing = {};
  this.clearResourceTimings = function() {};
  this.webkitClearResourceTimings = function() {};
  this.mozClearResourceTimings = function() {};
  this.msClearResourceTimings = function() {};
  this.oClearResourceTimings = function() {}
}
var ei = ci.performance || ci.mozPerformance || ci.msPerformance ||
    ci.webkitPerformance || new di;
var fi = !1;
Fa(ei.clearResourceTimings || ei.webkitClearResourceTimings ||
       ei.mozClearResourceTimings || ei.msClearResourceTimings ||
       ei.oClearResourceTimings || za,
   ei);
function gi(a) {
  var b = hi(a);
  if (b.aft) return b.aft;
  a = T((a || '') + 'TIMING_AFT_KEYS', ['ol']);
  for (var c = a.length, d = 0; d < c; d++) {
    var e = b[a[d]];
    if (e) return e
  }
  return NaN
}
function ii(a) {
  var b;
  (b = C('ytcsi.' + (a || '') + 'data_')) ||
      (b = {tick: {}, info: {}}, D('ytcsi.' + (a || '') + 'data_', b));
  return b
}
function ji(a) {
  a = ii(a);
  a.info || (a.info = {});
  return a.info
}
function hi(a) {
  a = ii(a);
  a.tick || (a.tick = {});
  return a.tick
}
function ki(a) {
  var b = ii(a).nonce;
  b || (b = vh(), ii(a).nonce = b);
  return b
}
function li(a) {
  var b = hi(a || ''), c = gi(a);
  c && !fi && (Fh(ai, new Zh(Math.round(c - b._start), a)), fi = !0)
};
function mi() {
  var a = C('ytcsi.debug');
  a || (a = [], D('ytcsi.debug', a), D('ytcsi.reference', {}));
  return a
}
function ni(a) {
  a = a || '';
  var b = C('ytcsi.reference');
  b || (mi(), b = C('ytcsi.reference'));
  if (b[a]) return b[a];
  var c = mi(), d = {timerName: a, info: {}, tick: {}, span: {}};
  c.push(d);
  return b[a] = d
};
var oi = B.ytLoggingLatencyUsageStats_ || {};
D('ytLoggingLatencyUsageStats_', oi);
function pi() {
  this.f = 0
}
function qi() {
  pi.f || (pi.f = new pi);
  return pi.f
}
pi.prototype.tick = function(a, b, c) {
  ri(this, 'tick_' + a + '_' + b) ||
      th('latencyActionTicked', {tickName: a, clientActionNonce: b},
         {timestamp: c})
};
pi.prototype.info = function(a, b) {
  var c = Object.keys(a).join('');
  ri(this, 'info_' + c + '_' + b) ||
      (c = Object.assign({}, a), c.clientActionNonce = b,
       th('latencyActionInfo', c))
};
pi.prototype.span = function(a, b) {
  var c = Object.keys(a).join('');
  ri(this, 'span_' + c + '_' + b) ||
      (a.clientActionNonce = b, th('latencyActionSpan', a))
};
function ri(a, b) {
  oi[b] = oi[b] || {count: 0};
  var c = oi[b];
  c.count++;
  c.time = V();
  a.f || (a.f = Qe(function() {
            var d = V(), e;
            for (e in oi) oi[e] && 6E4 < d - oi[e].time && delete oi[e];
            a && (a.f = 0)
          }, 5E3));
  return 5 < c.count ?
      (6 === c.count && 1 > 1E5 * Math.random() &&
           (c = new rh(
                'CSI data exceeded logging limit with key', b.split('_')),
            0 <= b.indexOf('plev') || Nh(c)),
       !0) :
      !1
};
var Z = {},
    si =
        (Z.ad_allowed = 'adTypesAllowed', Z.yt_abt = 'adBreakType',
         Z.ad_cpn = 'adClientPlaybackNonce', Z.ad_docid = 'adVideoId',
         Z.yt_ad_an = 'adNetworks', Z.ad_at = 'adType',
         Z.aida = 'appInstallDataAgeMs', Z.browse_id = 'browseId',
         Z.p = 'httpProtocol', Z.t = 'transportProtocol',
         Z.cpn = 'clientPlaybackNonce',
         Z.ccs = 'creatorInfo.creatorCanaryState',
         Z.cseg = 'creatorInfo.creatorSegment', Z.csn = 'clientScreenNonce',
         Z.docid = 'videoId', Z.GetHome_rid = 'requestIds',
         Z.GetSearch_rid = 'requestIds', Z.GetPlayer_rid = 'requestIds',
         Z.GetWatchNext_rid = 'requestIds', Z.GetBrowse_rid = 'requestIds',
         Z.GetLibrary_rid = 'requestIds', Z.is_continuation = 'isContinuation',
         Z.is_nav = 'isNavigation', Z.b_p = 'kabukiInfo.browseParams',
         Z.is_prefetch = 'kabukiInfo.isPrefetch',
         Z.is_secondary_nav = 'kabukiInfo.isSecondaryNav',
         Z.prev_browse_id = 'kabukiInfo.prevBrowseId',
         Z.query_source = 'kabukiInfo.querySource',
         Z.voz_type = 'kabukiInfo.vozType', Z.yt_lt = 'loadType',
         Z.mver = 'creatorInfo.measurementVersion', Z.yt_ad = 'isMonetized',
         Z.nr = 'webInfo.navigationReason',
         Z.nrsu = 'navigationRequestedSameUrl',
         Z.ncnp = 'webInfo.nonPreloadedNodeCount',
         Z.pnt = 'performanceNavigationTiming', Z.prt = 'playbackRequiresTap',
         Z.plt = 'playerInfo.playbackType',
         Z.pis = 'playerInfo.playerInitializedState',
         Z.paused = 'playerInfo.isPausedOnLoad', Z.yt_pt = 'playerType',
         Z.fmt = 'playerInfo.itag', Z.yt_pl = 'watchInfo.isPlaylist',
         Z.yt_pre = 'playerInfo.preloadType', Z.yt_ad_pr = 'prerollAllowed',
         Z.pa = 'previousAction', Z.yt_red = 'isRedSubscriber',
         Z.rce = 'mwebInfo.responseContentEncoding', Z.scrh = 'screenHeight',
         Z.scrw = 'screenWidth', Z.st = 'serverTimeMs',
         Z.ssdm = 'shellStartupDurationMs', Z.aq = 'tvInfo.appQuality',
         Z.br_trs = 'tvInfo.bedrockTriggerState',
         Z.kebqat = 'kabukiInfo.earlyBrowseRequestInfo.abandonmentType',
         Z.kebqa = 'kabukiInfo.earlyBrowseRequestInfo.adopted',
         Z.label = 'tvInfo.label', Z.is_mdx = 'tvInfo.isMdx',
         Z.preloaded = 'tvInfo.isPreloaded',
         Z.upg_player_vis = 'playerInfo.visibilityState',
         Z.query = 'unpluggedInfo.query',
         Z.upg_chip_ids_string = 'unpluggedInfo.upgChipIdsString',
         Z.yt_vst = 'videoStreamType', Z.vph = 'viewportHeight',
         Z.vpw = 'viewportWidth', Z.yt_vis = 'isVisible',
         Z.rcl = 'mwebInfo.responseContentLength',
         Z.GetSettings_rid = 'requestIds', Z.GetTrending_rid = 'requestIds',
         Z.GetMusicSearchSuggestions_rid = 'requestIds',
         Z.REQUEST_ID = 'requestIds', Z),
    ti =
        'isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap'
            .split(' '),
    ui = {},
    vi =
        (ui.ccs = 'CANARY_STATE_', ui.mver = 'MEASUREMENT_VERSION_',
         ui.pis = 'PLAYER_INITIALIZED_STATE_', ui.yt_pt = 'LATENCY_PLAYER_',
         ui.pa = 'LATENCY_ACTION_', ui.yt_vst = 'VIDEO_STREAM_TYPE_', ui),
    wi =
        'all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds'
            .split(' ');
function xi(a) {
  return !!T('FORCE_CSI_ON_GEL', !1) || U('csi_on_gel') || !!ii(a).useGel
}
function yi(a) {
  a = ii(a);
  if (!('gel' in a))
    a.gel = {gelTicks: {}, gelInfos: {}};
  else if (a.gel) {
    var b = a.gel;
    b.gelInfos || (b.gelInfos = {});
    b.gelTicks || (b.gelTicks = {})
  }
  return a.gel
};
function zi(a, b, c) {
  if (null !== b)
    if (ji(c)[a] = b, xi(c)) {
      var d = b;
      b = yi(c);
      if (b.gelInfos)
        b.gelInfos['info_' + a] = !0;
      else {
        var e = {};
        b.gelInfos = (e['info_' + a] = !0, e)
      }
      if (a.match('_rid')) {
        var f = a.split('_rid')[0];
        a = 'REQUEST_ID'
      }
      if (a in si) {
        b = si[a];
        0 <= Ka(ti, b) && (d = !!d);
        a in vi && 'string' === typeof d && (d = vi[a] + d.toUpperCase());
        a = d;
        d = b.split('.');
        for (var g = e = {}, h = 0; h < d.length - 1; h++) {
          var k = d[h];
          g[k] = {};
          g = g[k]
        }
        g[d[d.length - 1]] = 'requestIds' === b ? [{id: a, endpoint: f}] : a;
        f = Ph({}, e)
      } else
        0 <= Ka(wi, a) || Nh(new rh('Unknown label logged with GEL CSI', a)),
            f = void 0;
      f && xi(c) &&
          (b = ni(c || ''), Ph(b.info, f), b = yi(c),
           'gelInfos' in b || (b.gelInfos = {}), Ph(b.gelInfos, f), c = ki(c),
           qi().info(f, c))
    } else
      ni(c || '').info[a] = b
}
function Ai(a, b, c) {
  var d = hi(c);
  if (U('use_first_tick') && Bi(a, c)) return d[a];
  if (!b && '_' !== a[0]) {
    var e = a;
    ei.mark &&
        (0 == e.lastIndexOf('mark_', 0) || (e = 'mark_' + e),
         c && (e += ' (' + c + ')'), ei.mark(e))
  }
  e = b || V();
  d[a] = e;
  e = yi(c);
  e.gelTicks && (e.gelTicks['tick_' + a] = !0);
  c || b || V();
  if (xi(c)) {
    ni(c || '').tick[a] = b || V();
    e = ki(c);
    if ('_start' === a) {
      var f = qi();
      ri(f, 'baseline_' + e) ||
          th('latencyActionBaselined', {clientActionNonce: e}, {timestamp: b})
    } else
      qi().tick(a, e, b);
    li(c);
    e = !0
  } else
    e = !1;
  if (!e) {
    if (!C('yt.timing.' + (c || '') + 'pingSent_') &&
        (f = T((c || '') + 'TIMING_ACTION', void 0), e = hi(c),
         C('ytglobal.timing' + (c || '') + 'ready_') && f && Bi('_start') &&
             gi(c)))
      if (li(c), c)
        Ci(c);
      else {
        f = !0;
        var g = T('TIMING_WAIT', []);
        if (g.length)
          for (var h = 0, k = g.length; h < k; ++h)
            if (!(g[h] in e)) {
              f = !1;
              break
            }
        f && Ci(c)
      }
    ni(c || '').tick[a] = b || V()
  }
  return d[a]
}
function Bi(a, b) {
  var c = hi(b);
  return a in c
}
function Ci(a) {
  if (!xi(a)) {
    var b = hi(a), c = ji(a), d = b._start,
        e = T('CSI_SERVICE_NAME', 'youtube'),
        f = {v: 2, s: e, action: T((a || '') + 'TIMING_ACTION', void 0)},
        g = c.srt;
    void 0 !== b.srt && delete c.srt;
    b.aft = gi(a);
    var h = hi(a), k = h.pbr, l = h.vc;
    h = h.pbs;
    k && l && h && k < l && l < h && ji(a).yt_pvis && 'youtube' === e &&
        (zi('yt_lt', 'hot_bg', a), e = b.vc, k = b.pbs, delete b.aft,
         c.aft = Math.round(k - e));
    for (var m in c) '_' !== m.charAt(0) && (f[m] = c[m]);
    b.ps = V();
    m = {};
    e = [];
    for (var n in b)
      '_' !== n.charAt(0) &&
          (k = Math.round(b[n] - d), m[n] = k, e.push(n + '.' + k));
    f.rt = e.join(',');
    b = !!c.ap;
    U('debug_csi_data') &&
        (c = C('yt.timing.csiData'), c || (c = [], D('yt.timing.csiData', c)),
         c.push({page: location.href, time: new Date, args: f}));
    c = '';
    for (var q in f) f.hasOwnProperty(q) && (c += '&' + q + '=' + f[q]);
    f = '/csi_204?' + c.substring(1);
    if (window.navigator && window.navigator.sendBeacon && b) {
      var p = void 0 === p ? '' : p;
      Xh(f, p) || Wh(f, void 0, void 0, void 0, p)
    } else
      Wh(f);
    D('yt.timing.' + (a || '') + 'pingSent_', !0);
    Fh(bi, new $h(m.aft + (Number(g) || 0), a))
  }
}
var Di = window;
Di.ytcsi && (Di.ytcsi.info = zi, Di.ytcsi.tick = Ai);
new Md(Ei, 1E3);
function Ei() {
  Ai('vptl', 0);
  Ai('vpl', 0)
};
function Fi(a) {
  try {
    a.register('msg-hovercard-subscription', Gi, Ke())
  } catch (b) {
  }
}
function Gi(a) {
  if (a) {
    a = !!a.isSubscribed;
    var b = document.getElementById('yt-subscribe-card');
    a ? ce(b, 'subscribe') : be(b, 'subscribe');
    a ? be(b, 'subscribed') : ce(b, 'subscribed')
  }
};
function Hi() {
  var a = document.getElementById('yt-subscribe-card');
  b:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue('display')||'';break b}b=''}if('none'!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=ic(a);
  else {
    b = a.style;
    var c = b.display, d = b.visibility, e = b.position;
    b.visibility = 'hidden';
    b.position = 'absolute';
    b.display = 'inline';
    a = ic(a);
    b.display = c;
    b.position = e;
    b.visibility = d
  }
  a = {width: a.width, height: a.height};
  Je().ready(a, null, void 0);
  a = Ke();
  Je().addOnOpenerHandler(Fi, null, a)
}
var Ii = Hi;
Ii = void 0 === Ii ? {} : Ii;
'function' === typeof Ii && (Ii = {callback: Ii});
Hi = Ii;
if (Hi.gapiHintOverride || T('GAPI_HINT_OVERRIDE')) {
  var Ji;
  var Ki = document.location.href;
  if (-1 != Ki.indexOf('?')) {
    Ki = (Ki || '').split('#')[0];
    var Li = Ki.split('?', 2);
    Ji = He(1 < Li.length ? Li[1] : Li[0])
  } else
    Ji = {};
  var Mi = Ji.gapi_jsh;
  Mi && Ta(Hi, {_c: {jsl: {h: Mi}}})
}
cd('gapi.iframes:gapi.iframes.style.common', Hi);
}).call(this);
