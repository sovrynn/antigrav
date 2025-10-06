(function() { /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var m;
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
function r(a, b) {
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
r('Symbol', function(a) {
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
r('Symbol.iterator', function(a) {
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
}, ia = function() {
  function a() {
    function c() {}
    new c;
    Reflect.construct(c, [], function() {});
    return new c instanceof c
  }
  if ('undefined' != typeof Reflect && Reflect.construct) {
    if (a()) return Reflect.construct;
    var b = Reflect.construct;
    return function(c, d, e) {
      c = b(c, d);
      e && Reflect.setPrototypeOf(c, e.prototype);
      return c
    }
  }
  return function(c, d, e) {
    void 0 === e && (e = c);
    e = ha(e.prototype || Object.prototype);
    return Function.prototype.apply.call(c, e, d) || e
  }
}(), ja;
if ('function' == typeof Object.setPrototypeOf)
  ja = Object.setPrototypeOf;
else {
  var ka;
  a: {
    var la = {a: !0}, ma = {}; try {
      ma.__proto__ = la;
      ka = ma.a;
      break a
    } catch (a) {} ka = !1
  } ja = ka ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
    return a
  } : null
}
var na = ja;
function pa(a, b) {
  a.prototype = ha(b.prototype);
  a.prototype.constructor = a;
  if (na)
    na(a, b);
  else
    for (var c in b)
      if ('prototype' != c)
        if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(b, c);
          d && Object.defineProperty(a, c, d)
        } else
          a[c] = b[c];
  a.G = b.prototype
}
function qa() {
  this.B = !1;
  this.l = null;
  this.g = void 0;
  this.f = 1;
  this.o = this.A = 0;
  this.J = this.i = null
}
function ra(a) {
  if (a.B) throw new TypeError('Generator is already running');
  a.B = !0
}
qa.prototype.F = function(a) {
  this.g = a
};
function sa(a, b) {
  a.i = {qb: b, Ga: !0};
  a.f = a.A || a.o
}
qa.prototype['return'] = function(a) {
  this.i = {'return': a};
  this.f = this.o
};
function ta(a, b, c) {
  a.f = c;
  return {
    value: b
  }
}
qa.prototype.O = function(a) {
  this.f = a
};
function ua(a) {
  this.f = new qa;
  this.g = a
}
function va(a, b) {
  ra(a.f);
  var c = a.f.l;
  if (c)
    return wa(a, 'return' in c ? c['return'] : function(d) {
      return {
        value: d, done: !0
      }
    }, b, a.f['return']);
  a.f['return'](b);
  return xa(a)
}
function wa(a, b, c, d) {
  try {
    var e = b.call(a.f.l, c);
    if (!(e instanceof Object))
      throw new TypeError('Iterator result ' + e + ' is not an object');
    if (!e.done) return a.f.B = !1, e;
    var f = e.value
  } catch (g) {
    return a.f.l = null, sa(a.f, g), xa(a)
  }
  a.f.l = null;
  d.call(a.f, f);
  return xa(a)
}
function xa(a) {
  for (; a.f.f;) try {
      var b = a.g(a.f);
      if (b) return a.f.B = !1, {
          value: b.value, done: !1
        }
    } catch (c) {
      a.f.g = void 0, sa(a.f, c)
    }
  a.f.B = !1;
  if (a.f.i) {
    b = a.f.i;
    a.f.i = null;
    if (b.Ga) throw b.qb;
    return {
      value: b['return'], done: !0
    }
  }
  return {
    value: void 0, done: !0
  }
}
function ya(a) {
  this.next = function(b) {
    ra(a.f);
    a.f.l ? b = wa(a, a.f.l.next, b, a.f.F) : (a.f.F(b), b = xa(a));
    return b
  };
  this['throw'] = function(b) {
    ra(a.f);
    a.f.l ? b = wa(a, a.f.l['throw'], b, a.f.F) : (sa(a.f, b), b = xa(a));
    return b
  };
  this['return'] = function(b) {
    return va(a, b)
  };
  this[Symbol.iterator] = function() {
    return this
  }
}
function za(a, b) {
  var c = new ya(new ua(b));
  na && a.prototype && na(c, a.prototype);
  return c
}
r('Reflect', function(a) {
  return a ? a : {}
});
r('Reflect.construct', function() {
  return ia
});
r('Reflect.setPrototypeOf', function(a) {
  return a ? a :
      na ?
             function(b, c) {
               try {
                 return na(b, c), !0
               } catch (d) {
                 return !1
               }
             } :
             null
});
function Aa(a, b, c) {
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
r('String.prototype.endsWith', function(a) {
  return a ? a : function(b, c) {
    var d = Aa(this, b, 'endsWith');
    b += '';
    void 0 === c && (c = d.length);
    for (var e = Math.max(0, Math.min(c | 0, d.length)), f = b.length;
         0 < f && 0 < e;)
      if (d[--e] != b[--f]) return !1;
    return 0 >= f
  }
});
r('String.prototype.startsWith', function(a) {
  return a ? a : function(b, c) {
    var d = Aa(this, b, 'startsWith');
    b += '';
    for (var e = d.length, f = b.length,
             g = Math.max(0, Math.min(c | 0, d.length)), h = 0;
         h < f && g < e;)
      if (d[g++] != b[h++]) return !1;
    return h >= f
  }
});
r('Object.setPrototypeOf', function(a) {
  return a || na
});
function Ba(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
var Ca = 'function' == typeof Object.assign ? Object.assign : function(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (d)
      for (var e in d) Ba(d, e) && (a[e] = d[e])
  }
  return a
};
r('Object.assign', function(a) {
  return a || Ca
});
r('Promise', function(a) {
  function b(g) {
    this.g = 0;
    this.i = void 0;
    this.f = [];
    var h = this.l();
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
        h.o()
      })
    }
    this.f.push(g)
  };
  var e = da.setTimeout;
  c.prototype.i = function(g) {
    e(g, 0)
  };
  c.prototype.o = function() {
    for (; this.f && this.f.length;) {
      var g = this.f;
      this.f = [];
      for (var h = 0; h < g.length; ++h) {
        var k = g[h];
        g[h] = null;
        try {
          k()
        } catch (l) {
          this.l(l)
        }
      }
    }
    this.f = null
  };
  c.prototype.l = function(g) {
    this.i(function() {
      throw g;
    })
  };
  b.prototype.l = function() {
    function g(l) {
      return function(n) {
        k || (k = !0, l.call(h, n))
      }
    }
    var h = this, k = !1;
    return {
      resolve: g(this.T), reject: g(this.o)
    }
  };
  b.prototype.T = function(g) {
    if (g === this)
      this.o(new TypeError('A Promise cannot resolve to itself'));
    else if (g instanceof b)
      this.ca(g);
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
      h ? this.J(g) : this.A(g)
    }
  };
  b.prototype.J = function(g) {
    var h = void 0;
    try {
      h = g.then
    } catch (k) {
      this.o(k);
      return
    }
    'function' == typeof h ? this.ja(h, g) : this.A(g)
  };
  b.prototype.o = function(g) {
    this.B(2, g)
  };
  b.prototype.A = function(g) {
    this.B(1, g)
  };
  b.prototype.B = function(g, h) {
    if (0 != this.g)
      throw Error(
          'Cannot settle(' + g + ', ' + h +
          '): Promise already settled in state' + this.g);
    this.g = g;
    this.i = h;
    this.F()
  };
  b.prototype.F = function() {
    if (null != this.f) {
      for (var g = 0; g < this.f.length; ++g) f.g(this.f[g]);
      this.f = null
    }
  };
  var f = new c;
  b.prototype.ca = function(g) {
    var h = this.l();
    g.da(h.resolve, h.reject)
  };
  b.prototype.ja = function(g, h) {
    var k = this.l();
    try {
      g.call(h, k.resolve, k.reject)
    } catch (l) {
      k.reject(l)
    }
  };
  b.prototype.then = function(g, h) {
    function k(q, t) {
      return 'function' == typeof q ? function(w) {
        try {
          l(q(w))
        } catch (F) {
          n(F)
        }
      } : t
    }
    var l, n, p = new b(function(q, t) {
                l = q;
                n = t
              });
    this.da(k(g, l), k(h, n));
    return p
  };
  b.prototype['catch'] = function(g) {
    return this.then(void 0, g)
  };
  b.prototype.da = function(g, h) {
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
      for (var l = u(g), n = l.next(); !n.done; n = l.next())
        d(n.value).da(h, k)
    })
  };
  b.all = function(g) {
    var h = u(g), k = h.next();
    return k.done ? d([]) : new b(function(l, n) {
      function p(w) {
        return function(F) {
          q[w] = F;
          t--;
          0 == t && l(q)
        }
      }
      var q = [], t = 0;
      do q.push(void 0), t++, d(k.value).da(p(q.length - 1), n), k = h.next();
      while (!k.done)
    })
  };
  return b
});
function Da(a, b) {
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
r('Array.prototype.keys', function(a) {
  return a ? a : function() {
    return Da(this, function(b) {
      return b
    })
  }
});
r('Array.prototype.values', function(a) {
  return a ? a : function() {
    return Da(this, function(b, c) {
      return c
    })
  }
});
r('Object.is', function(a) {
  return a ? a : function(b, c) {
    return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
  }
});
r('Array.prototype.includes', function(a) {
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
r('String.prototype.includes', function(a) {
  return a ? a : function(b, c) {
    return -1 !== Aa(this, b, 'includes').indexOf(b, c || 0)
  }
});
r('WeakMap', function(a) {
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
    if (!Ba(k, g)) {
      var l = new c;
      ba(k, g, {value: l})
    }
  }
  function f(k) {
    var l = Object[k];
    l && (Object[k] = function(n) {
      if (n instanceof c) return n;
      Object.isExtensible(n) && e(n);
      return l(n)
    })
  }
  if (function() {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}), l = Object.seal({}),
              n = new a([[k, 2], [l, 3]]);
          if (2 != n.get(k) || 3 != n.get(l)) return !1;
          n['delete'](k);
          n.set(l, 4);
          return !n.has(k) && 4 == n.get(l)
        } catch (p) {
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
    if (!Ba(k, g)) throw Error('WeakMap key fail: ' + k);
    k[g][this.f] = l;
    return this
  };
  b.prototype.get = function(k) {
    return d(k) && Ba(k, g) ? k[g][this.f] : void 0
  };
  b.prototype.has = function(k) {
    return d(k) && Ba(k, g) && Ba(k[g], this.f)
  };
  b.prototype['delete'] = function(k) {
    return d(k) && Ba(k, g) && Ba(k[g], this.f) ? delete k[g][this.f] : !1
  };
  return b
});
r('Array.prototype.entries', function(a) {
  return a ? a : function() {
    return Da(this, function(b, c) {
      return [b, c]
    })
  }
});
r('Map', function(a) {
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
    var n = h.g[l];
    if (n && Ba(h.g, l))
      for (var p = 0; p < n.length; p++) {
        var q = n[p];
        if (k !== k && q.key !== q.key || k === q.key) return {
            id: l, list: n, index: p, H: q
          }
      }
    return {
      id: l, list: n, index: -1, H: void 0
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
          var l = k.entries(), n = l.next();
          if (n.done || n.value[0] != h || 's' != n.value[1]) return !1;
          n = l.next();
          return n.done || 4 != n.value[0].x || 't' != n.value[1] ||
                  !l.next().done ?
              !1 :
              !0
        } catch (p) {
          return !1
        }
      }())
    return a;
  var f = new WeakMap;
  e.prototype.set = function(h, k) {
    h = 0 === h ? 0 : h;
    var l = d(this, h);
    l.list || (l.list = this.g[l.id] = []);
    l.H ? l.H.value = k :
          (l.H = {
            next: this.f,
            previous: this.f.previous,
            head: this.f,
            key: h,
            value: k
          },
           l.list.push(l.H), this.f.previous.next = l.H, this.f.previous = l.H,
           this.size++);
    return this
  };
  e.prototype['delete'] = function(h) {
    h = d(this, h);
    return h.H && h.list ?
        (h.list.splice(h.index, 1), h.list.length || delete this.g[h.id],
         h.H.previous.next = h.H.next, h.H.next.previous = h.H.previous,
         h.H.head = null, this.size--, !0) :
        !1
  };
  e.prototype.clear = function() {
    this.g = {};
    this.f = this.f.previous = b();
    this.size = 0
  };
  e.prototype.has = function(h) {
    return !!d(this, h).H
  };
  e.prototype.get = function(h) {
    return (h = d(this, h).H) && h.value
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
    for (var l = this.entries(), n; !(n = l.next()).done;)
      n = n.value, h.call(k, n[1], n[0], this)
  };
  e.prototype[Symbol.iterator] = e.prototype.entries;
  var g = 0;
  return e
});
r('Object.entries', function(a) {
  return a ? a : function(b) {
    var c = [], d;
    for (d in b) Ba(b, d) && c.push([d, b[d]]);
    return c
  }
});
r('Set', function(a) {
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
var v = this || self;
function x(a, b) {
  for (var c = a.split('.'), d = b || v, e = 0; e < c.length; e++)
    if (d = d[c[e]], null == d) return null;
  return d
}
function Ea() {}
function Fa(a) {
  a.la = void 0;
  a.C = function() {
    return a.la ? a.la : a.la = new a
  }
}
function Ga(a) {
  var b = typeof a;
  return 'object' != b ? b : a ? Array.isArray(a) ? 'array' : b : 'null'
}
function Ha(a) {
  var b = Ga(a);
  return 'array' == b || 'object' == b && 'number' == typeof a.length
}
function Ia(a) {
  var b = typeof a;
  return 'object' == b && null != a || 'function' == b
}
function Ja(a) {
  return Object.prototype.hasOwnProperty.call(a, Ka) && a[Ka] || (a[Ka] = ++La)
}
var Ka = 'closure_uid_' + (1E9 * Math.random() >>> 0), La = 0;
function Ma(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function Oa(a, b, c) {
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
function y(a, b, c) {
  Function.prototype.bind &&
          -1 != Function.prototype.bind.toString().indexOf('native code') ?
      y = Ma :
      y = Oa;
  return y.apply(null, arguments)
}
function Pa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d)
  }
}
function Qa() {
  return Date.now()
}
function z(a, b) {
  var c = a.split('.'), d = v;
  c[0] in d || 'undefined' == typeof d.execScript ||
      d.execScript('var ' + c[0]);
  for (var e; c.length && (e = c.shift());)
    c.length || void 0 === b ?
        d[e] && d[e] !== Object.prototype[e] ? d = d[e] : d = d[e] = {} :
        d[e] = b
}
function A(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.G = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
function Ra(a) {
  return a
}
function Sa(a) {
  var b = null, c = v.trustedTypes;
  if (!c || !c.createPolicy) return b;
  try {
    b = c.createPolicy(
        a, {createHTML: Ra, createScript: Ra, createScriptURL: Ra})
  } catch (d) {
    v.console && v.console.error(d.message)
  }
  return b
};
function Ta(a) {
  if (Error.captureStackTrace)
    Error.captureStackTrace(this, Ta);
  else {
    var b = Error().stack;
    b && (this.stack = b)
  }
  a && (this.message = String(a))
}
A(Ta, Error);
Ta.prototype.name = 'CustomError';
var Ua;
function Va(a) {
  a = a.url;
  var b = /[?&]dsh=1(&|$)/.test(a);
  this.i = !b && /[?&]ae=1(&|$)/.test(a);
  this.l = !b && /[?&]ae=2(&|$)/.test(a);
  if ((this.f = /[?&]adurl=([^&]*)/.exec(a)) && this.f[1]) {
    try {
      var c = decodeURIComponent(this.f[1])
    } catch (d) {
      c = null
    }
    this.g = c
  }
};
function Wa(a) {
  var b = !1, c;
  return function() {
    b || (c = a(), b = !0);
    return c
  }
};
var Xa = Array.prototype.indexOf ? function(a, b) {
  return Array.prototype.indexOf.call(a, b, void 0)
} : function(a, b) {
  if ('string' === typeof a)
    return 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
  for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b) return c;
  return -1
}, B = Array.prototype.forEach ? function(a, b, c) {
  Array.prototype.forEach.call(a, b, c)
} : function(a, b, c) {
  for (var d = a.length, e = 'string' === typeof a ? a.split('') : a, f = 0;
       f < d; f++)
    f in e && b.call(c, e[f], f, a)
}, Ya = Array.prototype.filter ? function(a, b, c) {
  return Array.prototype.filter.call(a, b, c)
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0,
           g = 'string' === typeof a ? a.split('') : a, h = 0;
       h < d; h++)
    if (h in g) {
      var k = g[h];
      b.call(c, k, h, a) && (e[f++] = k)
    }
  return e
}, Za = Array.prototype.map ? function(a, b) {
  return Array.prototype.map.call(a, b, void 0)
} : function(a, b) {
  for (var c = a.length, d = Array(c),
           e = 'string' === typeof a ? a.split('') : a, f = 0;
       f < c; f++)
    f in e && (d[f] = b.call(void 0, e[f], f, a));
  return d
}, $a = Array.prototype.reduce ? function(a, b, c) {
  return Array.prototype.reduce.call(a, b, c)
} : function(a, b, c) {
  var d = c;
  B(a, function(e, f) {
    d = b.call(void 0, d, e, f, a)
  });
  return d
}, ab = Array.prototype.some ? function(a, b) {
  return Array.prototype.some.call(a, b, void 0)
} : function(a, b) {
  for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0;
       e < c; e++)
    if (e in d && b.call(void 0, d[e], e, a)) return !0;
  return !1
};
function bb(a, b) {
  a: {
    var c = a.length;
    for (var d = 'string' === typeof a ? a.split('') : a, e = 0; e < c;
         e++) if (e in d && b.call(void 0, d[e], e, a)) {
      c = e;
      break a
    } c = -1
  } return 0 > c ?
                              null :
      'string' === typeof a ? a.charAt(c) :
                              a[c]
}
function cb(a, b) {
  return 0 <= Xa(a, b)
}
function db(a) {
  return Array.prototype.concat.apply([], arguments)
}
function eb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c
  }
  return []
}
function fb(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (Ha(d)) {
      var e = a.length || 0, f = d.length || 0;
      a.length = e + f;
      for (var g = 0; g < f; g++) a[e + g] = d[g]
    } else
      a.push(d)
  }
}
function gb(a, b, c, d) {
  return Array.prototype.splice.apply(a, hb(arguments, 1))
}
function hb(a, b, c) {
  return 2 >= arguments.length ? Array.prototype.slice.call(a, b) :
                                 Array.prototype.slice.call(a, b, c)
}
function ib(a) {
  for (var b = [], c = 0; c < arguments.length; c++) {
    var d = arguments[c];
    if (Array.isArray(d))
      for (var e = 0; e < d.length; e += 8192) {
        var f = hb(d, e, e + 8192);
        f = ib.apply(null, f);
        for (var g = 0; g < f.length; g++) b.push(f[g])
      }
    else
      b.push(d)
  }
  return b
};
function jb(a, b, c) {
  for (var d in a) b.call(c, a[d], d, a)
}
function kb(a) {
  var b = [], c = 0, d;
  for (d in a) b[c++] = a[d];
  return b
}
function lb(a) {
  var b = mb, c;
  for (c in b)
    if (a.call(void 0, b[c], c, b)) return c
}
function nb(a, b) {
  for (var c in a)
    if (!(c in b) || a[c] !== b[c]) return !1;
  for (var d in b)
    if (!(d in a)) return !1;
  return !0
}
function ob(a) {
  if (!a || 'object' !== typeof a) return a;
  if ('function' === typeof a.clone) return a.clone();
  var b = Array.isArray(a) ? [] :
      'function' !== typeof ArrayBuffer ||
          'function' !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) ||
          a instanceof DataView ?
                             {} :
                             new a.constructor(a.length),
      c;
  for (c in a) b[c] = ob(a[c]);
  return b
}
var pb =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'
        .split(' ');
function rb(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (var f = 0; f < pb.length; f++)
      c = pb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
  }
};
var sb;
var tb = String.prototype.trim ? function(a) {
  return a.trim()
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
function ub(a, b) {
  if (b)
    a = a.replace(vb, '&amp;')
            .replace(wb, '&lt;')
            .replace(xb, '&gt;')
            .replace(yb, '&quot;')
            .replace(zb, '&#39;')
            .replace(Ab, '&#0;');
  else {
    if (!Bb.test(a)) return a;
    -1 != a.indexOf('&') && (a = a.replace(vb, '&amp;'));
    -1 != a.indexOf('<') && (a = a.replace(wb, '&lt;'));
    -1 != a.indexOf('>') && (a = a.replace(xb, '&gt;'));
    -1 != a.indexOf('"') && (a = a.replace(yb, '&quot;'));
    -1 != a.indexOf('\'') && (a = a.replace(zb, '&#39;'));
    -1 != a.indexOf('\x00') && (a = a.replace(Ab, '&#0;'))
  }
  return a
}
var vb = /&/g, wb = /</g, xb = />/g, yb = /"/g, zb = /'/g, Ab = /\x00/g,
    Bb = /[\x00&<>"']/;
function Cb(a, b) {
  for (var c = 0, d = tb(String(a)).split('.'), e = tb(String(b)).split('.'),
           f = Math.max(d.length, e.length), g = 0;
       0 == c && g < f; g++) {
    var h = d[g] || '', k = e[g] || '';
    do {
      h = /(\d*)(\D*)(.*)/.exec(h) || ['', '', '', ''];
      k = /(\d*)(\D*)(.*)/.exec(k) || ['', '', '', ''];
      if (0 == h[0].length && 0 == k[0].length) break;
      c = Db(0 == h[1].length ? 0 : parseInt(h[1], 10),
             0 == k[1].length ? 0 : parseInt(k[1], 10)) ||
          Db(0 == h[2].length, 0 == k[2].length) || Db(h[2], k[2]);
      h = h[3];
      k = k[3]
    } while (0 == c)
  }
  return c
}
function Db(a, b) {
  return a < b ? -1 : a > b ? 1 : 0
};
function Eb(a, b) {
  this.f = b === Fb ? a : ''
}
Eb.prototype.aa = !0;
Eb.prototype.Y = function() {
  return this.f.toString()
};
Eb.prototype.Ea = !0;
Eb.prototype.Aa = function() {
  return 1
};
function Gb(a) {
  if (a instanceof Eb && a.constructor === Eb) return a.f;
  Ga(a);
  return 'type_error:SafeUrl'
}
var Hb =
        /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
    Ib = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    Jb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, Fb = {},
    Kb = new Eb('about:invalid#zClosurez', Fb);
var Lb;
a: {
  var Mb = v.navigator; if (Mb) {
    var Nb = Mb.userAgent;
    if (Nb) {
      Lb = Nb;
      break a
    }
  } Lb = ''
} function C(a) {
  return -1 != Lb.indexOf(a)
};
function Ob() {
  return C('Firefox') || C('FxiOS')
}
function Pb() {
  return C('Safari') &&
      !(Qb() || C('Coast') || C('Opera') || C('Edge') || C('Edg/') ||
        C('OPR') || Ob() || C('Silk') || C('Android'))
}
function Qb() {
  return (C('Chrome') || C('CriOS')) && !C('Edge')
}
function Rb() {
  return C('Android') && !(Qb() || Ob() || C('Opera') || C('Silk'))
};
function Sb(a, b, c) {
  this.f = c === Tb ? a : '';
  this.g = b
}
Sb.prototype.Ea = !0;
Sb.prototype.Aa = function() {
  return this.g
};
Sb.prototype.aa = !0;
Sb.prototype.Y = function() {
  return this.f.toString()
};
function Ub(a) {
  if (a instanceof Sb && a.constructor === Sb) return a.f;
  Ga(a);
  return 'type_error:SafeHtml'
}
var Tb = {};
function Vb(a, b) {
  void 0 === sb && (sb = Sa('goog#html'));
  var c = (c = sb) ? c.createHTML(a) : a;
  return new Sb(c, b, Tb)
}
var Wb = new Sb(v.trustedTypes && v.trustedTypes.emptyHTML || '', 0, Tb);
var Xb = Wa(function() {
  var a = document.createElement('div'), b = document.createElement('div');
  b.appendChild(document.createElement('div'));
  a.appendChild(b);
  b = a.firstChild.firstChild;
  a.innerHTML = Ub(Wb);
  return !b.parentElement
});
function Yb(a, b) {
  if (Xb())
    for (; a.lastChild;) a.removeChild(a.lastChild);
  a.innerHTML = Ub(b)
};
function Zb(a) {
  return a = ub(a, void 0)
}
function $b(a) {
  return String(a).replace(/\-([a-z])/g, function(b, c) {
    return c.toUpperCase()
  })
}
function ac(a) {
  return a.replace(RegExp('(^|[\\s]+)([a-z])', 'g'), function(b, c, d) {
    return c + d.toUpperCase()
  })
};
var bc =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function cc(a) {
  return a ? decodeURI(a) : a
}
function dc(a) {
  return cc(a.match(bc)[3] || null)
}
function ec(a, b) {
  if (!b) return a;
  var c = a.indexOf('#');
  0 > c && (c = a.length);
  var d = a.indexOf('?');
  if (0 > d || d > c) {
    d = c;
    var e = ''
  } else
    e = a.substring(d + 1, c);
  c = [a.substr(0, d), e, a.substr(c)];
  d = c[1];
  c[1] = b ? d ? d + '&' + b : b : d;
  return c[0] + (c[1] ? '?' + c[1] : '') + c[2]
}
function fc(a, b, c) {
  if (Array.isArray(b))
    for (var d = 0; d < b.length; d++) fc(a, String(b[d]), c);
  else
    null != b &&
        c.push(a + ('' === b ? '' : '=' + encodeURIComponent(String(b))))
}
function gc(a, b) {
  for (var c = [], d = b || 0; d < a.length; d += 2) fc(a[d], a[d + 1], c);
  return c.join('&')
}
function hc(a) {
  var b = [], c;
  for (c in a) fc(c, a[c], b);
  return b.join('&')
}
function ic(a, b) {
  var c = 2 == arguments.length ? gc(arguments[1], 0) : gc(arguments, 1);
  return ec(a, c)
}
function jc(a, b) {
  var c = hc(b);
  return ec(a, c)
}
var kc = /#|$/;
function lc(a, b) {
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
function mc() {
  return C('iPhone') && !C('iPod') && !C('iPad')
}
function nc() {
  return mc() || C('iPad') || C('iPod')
};
function oc(a) {
  oc[' '](a);
  return a
}
oc[' '] = Ea;
function pc(a, b, c, d) {
  d = d ? d(b) : b;
  return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
};
var qc = C('Opera'), D = C('Trident') || C('MSIE'), rc = C('Edge'),
    sc = rc || D,
    tc = C('Gecko') &&
    !(-1 != Lb.toLowerCase().indexOf('webkit') && !C('Edge')) &&
    !(C('Trident') || C('MSIE')) && !C('Edge'),
    uc = -1 != Lb.toLowerCase().indexOf('webkit') && !C('Edge'),
    vc = C('Macintosh'), wc = C('Windows'), xc = C('Android'), yc = mc(),
    zc = C('iPad'), Ac = C('iPod'), Bc = nc();
function Cc() {
  var a = v.document;
  return a ? a.documentMode : void 0
}
var Dc;
a: {
  var Fc = '',
  Gc =
      function() {
        var a = Lb;
        if (tc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (rc) return /Edge\/([\d\.]+)/.exec(a);
        if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (uc) return /WebKit\/(\S+)/.exec(a);
        if (qc) return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();
  Gc && (Fc = Gc ? Gc[1] : '');
  if (D) {
    var Hc = Cc();
    if (null != Hc && Hc > parseFloat(Fc)) {
      Dc = String(Hc);
      break a
    }
  } Dc = Fc
} var Ic = Dc,
      Jc = {};
function Kc(a) {
  return pc(Jc, a, function() {
    return 0 <= Cb(Ic, a)
  })
}
var Lc;
if (v.document && D) {
  var Mc = Cc();
  Lc = Mc ? Mc : parseInt(Ic, 10) || void 0
} else
  Lc = void 0;
var Nc = Lc;
var Oc = Ob(), Pc = mc() || C('iPod'), Qc = C('iPad'), Rc = Rb(), Sc = Qb(),
    Tc = Pb() && !nc();
var Uc = {}, Vc = null;
var Wc = window;
function Xc(a) {
  var b = x('window.location.href');
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
    var e = a.fileName || a.filename || a.sourceURL || v.$googDebugFname || b
  } catch (g) {
    e = 'Not available', c = !0
  }
  b = Yc(a);
  if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
    c = a.message;
    if (null == c) {
      if (a.constructor && a.constructor instanceof Function) {
        if (a.constructor.name)
          c = a.constructor.name;
        else if (c = a.constructor, Zc[c])
          c = Zc[c];
        else {
          c = String(c);
          if (!Zc[c]) {
            var f = /function\s+([^\(]+)/m.exec(c);
            Zc[c] = f ? f[1] : '[Anonymous]'
          }
          c = Zc[c]
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
function Yc(a, b) {
  b || (b = {});
  b[$c(a)] = !0;
  var c = a.stack || '', d = a.mc;
  d && !b[$c(d)] &&
      (c += '\nCaused by: ',
       d.stack && 0 == d.stack.indexOf(d.toString()) ||
           (c += 'string' === typeof d ? d : d.message + '\n'),
       c += Yc(d, b));
  return c
}
function $c(a) {
  var b = '';
  'function' === typeof a.toString && (b = '' + a);
  return b + a.stack
}
var Zc = {};
function ad(a) {
  this.f = a || {
    cookie: ''
  }
}
m = ad.prototype;
m.isEnabled = function() {
  return navigator.cookieEnabled
};
m.set = function(a, b, c) {
  var d = !1;
  if ('object' === typeof c) {
    var e = c.wc;
    d = c.secure || !1;
    var f = c.domain || void 0;
    var g = c.path || void 0;
    var h = c.Ja
  }
  if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
  if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
  void 0 === h && (h = -1);
  this.f.cookie = a + '=' + b + (f ? ';domain=' + f : '') +
      (g ? ';path=' + g : '') +
      (0 > h      ? '' :
           0 == h ? ';expires=' + (new Date(1970, 1, 1)).toUTCString() :
                    ';expires=' + (new Date(Qa() + 1E3 * h)).toUTCString()) +
      (d ? ';secure' : '') + (null != e ? ';samesite=' + e : '')
};
m.get = function(a, b) {
  for (var c = a + '=', d = (this.f.cookie || '').split(';'), e = 0, f;
       e < d.length; e++) {
    f = tb(d[e]);
    if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
    if (f == a) return ''
  }
  return b
};
m.remove = function(a, b, c) {
  var d = void 0 !== this.get(a);
  this.set(a, '', {Ja: 0, path: b, domain: c});
  return d
};
m.isEmpty = function() {
  return !this.f.cookie
};
m.clear = function() {
  for (var a = (this.f.cookie || '').split(';'), b = [], c = [], d, e, f = 0;
       f < a.length; f++)
    e = tb(a[f]), d = e.indexOf('='),
    -1 == d ? (b.push(''), c.push(e)) :
              (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};
var bd = new ad('undefined' == typeof document ? null : document);
var cd = !D || 9 <= Number(Nc),
    dd = !tc && !D || D && 9 <= Number(Nc) || tc && Kc('1.9.1'),
    ed = D && !Kc('9');
function E(a, b) {
  this.x = void 0 !== a ? a : 0;
  this.y = void 0 !== b ? b : 0
}
m = E.prototype;
m.clone = function() {
  return new E(this.x, this.y)
};
m.equals = function(a) {
  return a instanceof E &&
      (this == a     ? !0 :
           this && a ? this.x == a.x && this.y == a.y :
                       !1)
};
function fd(a, b) {
  return new E(a.x - b.x, a.y - b.y)
}
m.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this
};
m.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this
};
m.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this
};
function gd(a, b) {
  this.width = a;
  this.height = b
}
m = gd.prototype;
m.clone = function() {
  return new gd(this.width, this.height)
};
m.aspectRatio = function() {
  return this.width / this.height
};
m.isEmpty = function() {
  return !(this.width * this.height)
};
m.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
m.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
m.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
function hd(a) {
  return a ? new id(jd(a)) : Ua || (Ua = new id)
}
function G(a) {
  return 'string' === typeof a ? document.getElementById(a) : a
}
function kd(a, b) {
  var c = b || document;
  return c.querySelectorAll && c.querySelector ? c.querySelectorAll('.' + a) :
                                                 ld(document, '*', a, b)
}
function H(a, b) {
  var c = b || document;
  if (c.getElementsByClassName)
    c = c.getElementsByClassName(a)[0];
  else {
    c = document;
    var d = b || c;
    c = d.querySelectorAll && d.querySelector && a ?
        d.querySelector(a ? '.' + a : '') :
        ld(c, '*', a, b)[0] || null
  }
  return c || null
}
function ld(a, b, c, d) {
  a = d || a;
  b = b && '*' != b ? String(b).toUpperCase() : '';
  if (a.querySelectorAll && a.querySelector && (b || c))
    return a.querySelectorAll(b + (c ? '.' + c : ''));
  if (c && a.getElementsByClassName) {
    a = a.getElementsByClassName(c);
    if (b) {
      d = {};
      for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
      d.length = e;
      return d
    }
    return a
  }
  a = a.getElementsByTagName(b || '*');
  if (c) {
    d = {};
    for (f = e = 0; g = a[f]; f++)
      b = g.className,
      'function' == typeof b.split && cb(b.split(/\s+/), c) && (d[e++] = g);
    d.length = e;
    return d
  }
  return a
}
function md(a, b) {
  jb(b, function(c, d) {
    c && 'object' == typeof c && c.aa && (c = c.Y());
    'style' == d             ? a.style.cssText = c :
        'class' == d         ? a.className = c :
        'for' == d           ? a.htmlFor = c :
        nd.hasOwnProperty(d) ? a.setAttribute(nd[d], c) :
        0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0) ?
                               a.setAttribute(d, c) :
                               a[d] = c
  })
}
var nd = {
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
function od(a) {
  a = a.document;
  a = pd(a) ? a.documentElement : a.body;
  return new gd(a.clientWidth, a.clientHeight)
}
function qd(a) {
  var b = rd(a);
  a = sd(a);
  return D && Kc('10') && a.pageYOffset != b.scrollTop ?
      new E(b.scrollLeft, b.scrollTop) :
      new E(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}
function rd(a) {
  return a.scrollingElement ? a.scrollingElement :
      !uc && pd(a)          ? a.documentElement :
                              a.body || a.documentElement
}
function sd(a) {
  return a.parentWindow || a.defaultView
}
function td(a, b, c) {
  var d = arguments, e = document, f = String(d[0]), g = d[1];
  if (!cd && g && (g.name || g.type)) {
    f = ['<', f];
    g.name && f.push(' name="', Zb(g.name), '"');
    if (g.type) {
      f.push(' type="', Zb(g.type), '"');
      var h = {};
      rb(h, g);
      delete h.type;
      g = h
    }
    f.push('>');
    f = f.join('')
  }
  f = ud(e, f);
  g &&
      ('string' === typeof g ? f.className = g :
           Array.isArray(g)  ? f.className = g.join(' ') :
                               md(f, g));
  2 < d.length && vd(e, f, d);
  return f
}
function vd(a, b, c) {
  function d(h) {
    h && b.appendChild('string' === typeof h ? a.createTextNode(h) : h)
  }
  for (var e = 2; e < c.length; e++) {
    var f = c[e];
    if (!Ha(f) || Ia(f) && 0 < f.nodeType)
      d(f);
    else {
      a: {
        if (f && 'number' == typeof f.length) {
          if (Ia(f)) {
            var g = 'function' == typeof f.item || 'string' == typeof f.item;
            break a
          }
          if ('function' === typeof f) {
            g = 'function' == typeof f.item;
            break a
          }
        } g = !1
      } B(g ? eb(f) : f, d)
    }
  }
}
function ud(a, b) {
  b = String(b);
  'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
  return a.createElement(b)
}
function pd(a) {
  return 'CSS1Compat' == a.compatMode
}
function wd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function xd(a) {
  return dd && void 0 != a.children ? a.children :
                                      Ya(a.childNodes, function(b) {
                                        return 1 == b.nodeType
                                      })
}
function yd(a) {
  return Ia(a) && 1 == a.nodeType
}
function zd(a, b) {
  if (!a || !b) return !1;
  if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
  if ('undefined' != typeof a.compareDocumentPosition)
    return a == b || !!(a.compareDocumentPosition(b) & 16);
  for (; b && a != b;) b = b.parentNode;
  return b == a
}
function jd(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Ad(a, b) {
  if ('textContent' in a)
    a.textContent = b;
  else if (3 == a.nodeType)
    a.data = String(b);
  else if (a.firstChild && 3 == a.firstChild.nodeType) {
    for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
    a.firstChild.data = String(b)
  } else {
    for (var c; c = a.firstChild;) a.removeChild(c);
    c = jd(a);
    a.appendChild(c.createTextNode(String(b)))
  }
}
function Bd(a, b) {
  var c = [];
  return Cd(a, b, c, !0) ? c[0] : void 0
}
function Cd(a, b, c, d) {
  if (null != a)
    for (a = a.firstChild; a;) {
      if (b(a) && (c.push(a), d) || Cd(a, b, c, d)) return !0;
      a = a.nextSibling
    }
  return !1
}
var Ed = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1},
    Fd = {IMG: ' ', BR: '\n'};
function Gd(a) {
  var b;
  if ((b = 'A' == a.tagName && a.hasAttribute('href') || 'INPUT' == a.tagName ||
               'TEXTAREA' == a.tagName || 'SELECT' == a.tagName ||
               'BUTTON' == a.tagName ?
           !a.disabled && (!Hd(a) || Id(a)) :
           Hd(a) && Id(a)) &&
      D) {
    var c;
    'function' !== typeof a.getBoundingClientRect ||
            D&& null == a.parentElement ?
        c = {height: a.offsetHeight, width: a.offsetWidth} :
        c = a.getBoundingClientRect();
    a = null != c && 0 < c.height && 0 < c.width
  } else
    a = b;
  return a
}
function Hd(a) {
  return D && !Kc('9') ?
      (a = a.getAttributeNode('tabindex'), null != a && a.specified) :
      a.hasAttribute('tabindex')
}
function Id(a) {
  a = a.tabIndex;
  return 'number' === typeof a && 0 <= a && 32768 > a
}
function Jd(a) {
  if (ed && null !== a && 'innerText' in a)
    a = a.innerText.replace(/(\r\n|\r|\n)/g, '\n');
  else {
    var b = [];
    Kd(a, b, !0);
    a = b.join('')
  }
  a = a.replace(/ \xAD /g, ' ').replace(/\xAD/g, '');
  a = a.replace(/\u200B/g, '');
  ed || (a = a.replace(/ +/g, ' '));
  ' ' != a && (a = a.replace(/^\s*/, ''));
  return a
}
function Kd(a, b, c) {
  if (!(a.nodeName in Ed))
    if (3 == a.nodeType)
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, '')) :
          b.push(a.nodeValue);
    else if (a.nodeName in Fd)
      b.push(Fd[a.nodeName]);
    else
      for (a = a.firstChild; a;) Kd(a, b, c), a = a.nextSibling
}
function Ld(a, b, c, d) {
  if (!b && !c) return null;
  var e = b ? String(b).toUpperCase() : null;
  return Md(a, function(f) {
    return (!e || f.nodeName == e) &&
        (!c ||
         'string' === typeof f.className && cb(f.className.split(/\s+/), c))
  }, !0, d)
}
function J(a, b) {
  return Ld(a, null, b, void 0)
}
function Md(a, b, c, d) {
  a && !c && (a = a.parentNode);
  for (c = 0; a && (null == d || c <= d);) {
    if (b(a)) return a;
    a = a.parentNode;
    c++
  }
  return null
}
function id(a) {
  this.f = a || v.document || document
}
id.prototype.getElementsByTagName = function(a, b) {
  return (b || this.f).getElementsByTagName(String(a))
};
id.prototype.createElement = function(a) {
  return ud(this.f, a)
};
id.prototype.appendChild = function(a, b) {
  a.appendChild(b)
};
id.prototype.isElement = yd;
function Nd(a) {
  var b = Od;
  if (b)
    for (var c in b)
      Object.prototype.hasOwnProperty.call(b, c) && a.call(void 0, b[c], c, b)
}
function Pd() {
  var a = [];
  Nd(function(b) {
    a.push(b)
  });
  return a
}
var Od = {
  Ub: 'allow-forms',
  Vb: 'allow-modals',
  Wb: 'allow-orientation-lock',
  Xb: 'allow-pointer-lock',
  Yb: 'allow-popups',
  Zb: 'allow-popups-to-escape-sandbox',
  ac: 'allow-presentation',
  cc: 'allow-same-origin',
  dc: 'allow-scripts',
  ec: 'allow-top-navigation',
  fc: 'allow-top-navigation-by-user-activation'
},
    Qd = Wa(function() {
      return Pd()
    });
function Rd() {
  var a = ud(document, 'IFRAME'), b = {};
  B(Qd(), function(c) {
    a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
  });
  return b
};
function Sd() {
  this.i = this.i;
  this.l = this.l
}
Sd.prototype.i = !1;
Sd.prototype.fa = function() {
  return this.i
};
Sd.prototype.dispose = function() {
  this.i || (this.i = !0, this.X())
};
Sd.prototype.X = function() {
  if (this.l)
    for (; this.l.length;) this.l.shift()()
};
function Td(a) {
  a && 'function' == typeof a.dispose && a.dispose()
};
function Ud(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
m = Ud.prototype;
m.getHeight = function() {
  return this.bottom - this.top
};
m.clone = function() {
  return new Ud(this.top, this.right, this.bottom, this.left)
};
m.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this
};
m.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this
};
m.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this
};
function Vd(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
}
Vd.prototype.clone = function() {
  return new Vd(this.left, this.top, this.width, this.height)
};
Vd.prototype.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
Vd.prototype.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
Vd.prototype.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
var Wd = {};
function Xd() {}
function Yd(a, b) {
  if (b !== Wd) throw Error('Bad secret');
  this.f = a
}
pa(Yd, Xd);
Yd.prototype.toString = function() {
  return this.f
};
new Yd('about:blank', Wd);
new Yd('about:invalid#zTSz', Wd);
function Zd(a, b, c) {
  if ('string' === typeof b)
    (b = $d(a, b)) && (a.style[b] = c);
  else
    for (var d in b) {
      c = a;
      var e = b[d], f = $d(c, d);
      f && (c.style[f] = e)
    }
}
var ae = {};
function $d(a, b) {
  var c = ae[b];
  if (!c) {
    var d = $b(b);
    c = d;
    void 0 === a.style[d] &&
        (d = (uc     ? 'Webkit' :
                  tc ? 'Moz' :
                  D  ? 'ms' :
                  qc ? 'O' :
                       null) +
             ac(d),
         void 0 !== a.style[d] && (c = d));
    ae[b] = c
  }
  return c
}
function be(a, b) {
  var c = jd(a);
  return c.defaultView && c.defaultView.getComputedStyle &&
          (c = c.defaultView.getComputedStyle(a, null)) ?
      c[b] || c.getPropertyValue(b) || '' :
      ''
}
function ce(a, b) {
  return be(a, b) || (a.currentStyle ? a.currentStyle[b] : null) ||
      a.style && a.style[b]
}
function de(a) {
  try {
    return a.getBoundingClientRect()
  } catch (b) {
    return {
      left: 0, top: 0, right: 0, bottom: 0
    }
  }
}
function ee(a) {
  if (D && !(8 <= Number(Nc))) return a.offsetParent;
  var b = jd(a), c = ce(a, 'position'), d = 'fixed' == c || 'absolute' == c;
  for (a = a.parentNode; a && a != b; a = a.parentNode)
    if (11 == a.nodeType && a.host && (a = a.host), c = ce(a, 'position'),
        d = d && 'static' == c && a != b.documentElement && a != b.body,
        !d &&
            (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight ||
             'fixed' == c || 'absolute' == c || 'relative' == c))
      return a;
  return null
}
function fe(a) {
  for (var b = new Ud(0, Infinity, Infinity, 0), c = hd(a), d = c.f.body,
           e = c.f.documentElement, f = rd(c.f);
       a = ee(a);)
    if (!(D && 0 == a.clientWidth || uc && 0 == a.clientHeight && a == d) &&
        a != d && a != e && 'visible' != ce(a, 'overflow')) {
      var g = ge(a), h = new E(a.clientLeft, a.clientTop);
      g.x += h.x;
      g.y += h.y;
      b.top = Math.max(b.top, g.y);
      b.right = Math.min(b.right, g.x + a.clientWidth);
      b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
      b.left = Math.max(b.left, g.x)
    }
  d = f.scrollLeft;
  f = f.scrollTop;
  b.left = Math.max(b.left, d);
  b.top = Math.max(b.top, f);
  c = od(sd(c.f) || window);
  b.right = Math.min(b.right, d + c.width);
  b.bottom = Math.min(b.bottom, f + c.height);
  return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ?
      b :
      null
}
function ge(a) {
  var b = jd(a), c = new E(0, 0);
  var d = b ? jd(b) : document;
  d = !D || 9 <= Number(Nc) || pd(hd(d).f) ? d.documentElement : d.body;
  if (a == d) return c;
  a = de(a);
  b = qd(hd(b).f);
  c.x = a.left + b.x;
  c.y = a.top + b.y;
  return c
}
function he(a) {
  a = de(a);
  return new E(a.left, a.top)
}
function ie(a, b, c) {
  if (b instanceof gd)
    c = b.height, b = b.width;
  else if (void 0 == c)
    throw Error('missing height argument');
  a.style.width = je(b, !0);
  a.style.height = je(c, !0)
}
function je(a, b) {
  'number' == typeof a && (a = (b ? Math.round(a) : a) + 'px');
  return a
}
function ke(a) {
  var b = le;
  if ('none' != ce(a, 'display')) return b(a);
  var c = a.style, d = c.display, e = c.visibility, f = c.position;
  c.visibility = 'hidden';
  c.position = 'absolute';
  c.display = 'inline';
  a = b(a);
  c.display = d;
  c.position = f;
  c.visibility = e;
  return a
}
function le(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = uc && !b && !c;
  return (void 0 === b || d) && a.getBoundingClientRect ?
      (a = de(a), new gd(a.right - a.left, a.bottom - a.top)) :
      new gd(b, c)
}
function me(a) {
  var b = ge(a);
  a = ke(a);
  return new Vd(b.x, b.y, a.width, a.height)
}
function ne(a) {
  return 'rtl' == ce(a, 'direction')
}
function oe(a, b) {
  if (/^\d+px?$/.test(b)) return parseInt(b, 10);
  var c = a.style.left, d = a.runtimeStyle.left;
  a.runtimeStyle.left = a.currentStyle.left;
  a.style.left = b;
  var e = a.style.pixelLeft;
  a.style.left = c;
  a.runtimeStyle.left = d;
  return +e
}
function pe(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null;
  return c ? oe(a, c) : 0
}
var qe = {thin: 2, medium: 4, thick: 6};
function re(a, b) {
  if ('none' == (a.currentStyle ? a.currentStyle[b + 'Style'] : null)) return 0;
  var c = a.currentStyle ? a.currentStyle[b + 'Width'] : null;
  return c in qe ? qe[c] : oe(a, c)
};
var se = (new Date).getTime();
function te(a) {
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
var ue = window, ve = document, we = ue.location;
function xe() {}
var ye = /\[native code\]/;
function K(a, b, c) {
  return a[b] = a[b] || c
}
function ze(a) {
  a = a.sort();
  for (var b = [], c = void 0, d = 0; d < a.length; d++) {
    var e = a[d];
    e != c && b.push(e);
    c = e
  }
  return b
}
function Ae() {
  var a;
  if ((a = Object.create) && ye.test(a))
    a = a(null);
  else {
    a = {};
    for (var b in a) a[b] = void 0
  }
  return a
}
var Be = K(ue, 'gapi', {});
var L;
L = K(ue, '___jsl', Ae());
K(L, 'I', 0);
K(L, 'hel', 10);
function Ce() {
  var a = we.href;
  if (L.dpo)
    var b = L.h;
  else {
    b = L.h;
    var c = RegExp('([#].*&|[#])jsh=([^&#]*)', 'g'),
        d = RegExp('([?#].*&|[?#])jsh=([^&#]*)', 'g');
    if (a = a && (c.exec(a) || d.exec(a))) try {
        b = decodeURIComponent(a[2])
      } catch (e) {
      }
  }
  return b
}
function De(a) {
  var b = K(L, 'PQ', []);
  L.PQ = [];
  var c = b.length;
  if (0 === c)
    a();
  else
    for (var d = 0, e = function() {
           ++d === c && a()
         }, f = 0; f < c; f++)
      b[f](e)
}
function Ee(a) {
  return K(K(L, 'H', Ae()), a, Ae())
};
function Fe() {
  function a() {
    e[0] = 1732584193;
    e[1] = 4023233417;
    e[2] = 2562383102;
    e[3] = 271733878;
    e[4] = 3285377520;
    n = l = 0
  }
  function b(p) {
    for (var q = g, t = 0; 64 > t; t += 4)
      q[t / 4] = p[t] << 24 | p[t + 1] << 16 | p[t + 2] << 8 | p[t + 3];
    for (t = 16; 80 > t; t++)
      p = q[t - 3] ^ q[t - 8] ^ q[t - 14] ^ q[t - 16],
      q[t] = (p << 1 | p >>> 31) & 4294967295;
    p = e[0];
    var w = e[1], F = e[2], I = e[3], qb = e[4];
    for (t = 0; 80 > t; t++) {
      if (40 > t)
        if (20 > t) {
          var oa = I ^ w & (F ^ I);
          var Na = 1518500249
        } else
          oa = w ^ F ^ I, Na = 1859775393;
      else
        60 > t ? (oa = w & F | I & (w | F), Na = 2400959708) :
                 (oa = w ^ F ^ I, Na = 3395469782);
      oa =
          ((p << 5 | p >>> 27) & 4294967295) + oa + qb + Na + q[t] & 4294967295;
      qb = I;
      I = F;
      F = (w << 30 | w >>> 2) & 4294967295;
      w = p;
      p = oa
    }
    e[0] = e[0] + p & 4294967295;
    e[1] = e[1] + w & 4294967295;
    e[2] = e[2] + F & 4294967295;
    e[3] = e[3] + I & 4294967295;
    e[4] = e[4] + qb & 4294967295
  }
  function c(p, q) {
    if ('string' === typeof p) {
      p = unescape(encodeURIComponent(p));
      for (var t = [], w = 0, F = p.length; w < F; ++w) t.push(p.charCodeAt(w));
      p = t
    }
    q || (q = p.length);
    t = 0;
    if (0 == l)
      for (; t + 64 < q;) b(p.slice(t, t + 64)), t += 64, n += 64;
    for (; t < q;)
      if (f[l++] = p[t++], n++, 64 == l)
        for (l = 0, b(f); t + 64 < q;) b(p.slice(t, t + 64)), t += 64, n += 64
  }
  function d() {
    var p = [], q = 8 * n;
    56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
    for (var t = 63; 56 <= t; t--) f[t] = q & 255, q >>>= 8;
    b(f);
    for (t = q = 0; 5 > t; t++)
      for (var w = 24; 0 <= w; w -= 8) p[q++] = e[t] >> w & 255;
    return p
  }
  for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
  var l, n;
  a();
  return {
    reset: a, update: c, digest: d, mb: function() {
      for (var p = d(), q = '', t = 0; t < p.length; t++)
        q += '0123456789ABCDEF'.charAt(Math.floor(p[t] / 16)) +
            '0123456789ABCDEF'.charAt(p[t] % 16);
      return q
    }
  }
};
function Ge(a, b, c) {
  var d = [], e = [];
  if (1 == (Array.isArray(c) ? 2 : 1))
    return e = [b, a], B(d, function(h) {
             e.push(h)
           }), He(e.join(' '));
  var f = [], g = [];
  B(c, function(h) {
    g.push(h.key);
    f.push(h.value)
  });
  c = Math.floor((new Date).getTime() / 1E3);
  e = 0 == f.length ? [c, b, a] : [f.join(':'), c, b, a];
  B(d, function(h) {
    e.push(h)
  });
  a = He(e.join(' '));
  a = [c, a];
  0 == g.length || a.push(g.join(''));
  return a.join('_')
}
function He(a) {
  var b = Fe();
  b.update(a);
  return b.mb().toLowerCase()
};
function Ie(a) {
  var b = te(String(v.location.href)), c;
  (c = v.__SAPISID || v.__APISID || v.__OVERRIDE_SID) ?
      c = !0 :
      (c = new ad(document),
       c = c.get('SAPISID') || c.get('APISID') || c.get('__Secure-3PAPISID') ||
           c.get('SID'),
       c = !!c);
  if (c &&
      (c = (b = 0 == b.indexOf('https:') ||
                0 == b.indexOf('chrome-extension:') ||
                0 == b.indexOf('moz-extension:')) ?
           v.__SAPISID :
           v.__APISID,
       c ||
           (c = new ad(document),
            c = c.get(b ? 'SAPISID' : 'APISID') || c.get('__Secure-3PAPISID')),
       c)) {
    b = b ? 'SAPISIDHASH' : 'APISIDHASH';
    var d = String(v.location.href);
    return d && c && b ? [b, Ge(te(d), c, a || null)].join(' ') : null
  }
  return null
};
var Je = K(L, 'perf', Ae());
K(Je, 'g', Ae());
var Ke = K(Je, 'i', Ae());
K(Je, 'r', []);
Ae();
Ae();
function Le(a, b, c) {
  b && 0 < b.length &&
      (b = Me(b), c && 0 < c.length && (b += '___' + Me(c)),
       28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b,
       b = K(Ke, '_p', Ae()), K(b, c, Ae())[a] = (new Date).getTime(), b = Je.r,
       'function' === typeof b ? b(a, '_p', c) : b.push([a, '_p', c]))
}
function Me(a) {
  return a.join('__').replace(/\./g, '_').replace(/\-/g, '_').replace(/,/g, '_')
};
var Ne = Ae(), Oe = [];
function Pe(a) {
  throw Error('Bad hint' + (a ? ': ' + a : ''));
}
Oe.push([
  'jsl',
  function(a) {
    for (var b in a)
      if (Object.prototype.hasOwnProperty.call(a, b)) {
        var c = a[b];
        'object' == typeof c ? L[b] = K(L, b, []).concat(c) : K(L, b, c)
      }
    if (b = a.u)
      a = K(L, 'us', []), a.push(b),
      (b = /^https:(.*)$/.exec(b)) && a.push('http:' + b[1])
  }
]);
var Qe = /^(\/[a-zA-Z0-9_\-]+)+$/, Re = [/\/amp\//, /\/amp$/, /^\/amp$/],
    Se = /^[a-zA-Z0-9\-_\.,!]+$/, Te = /^gapi\.loaded_[0-9]+$/,
    Ue = /^[a-zA-Z0-9,._-]+$/;
function Ve(a, b, c, d) {
  var e = a.split(';'), f = e.shift(), g = Ne[f], h = null;
  g ? h = g(e, b, c, d) : Pe('no hint processor for: ' + f);
  h || Pe('failed to generate load url');
  b = h;
  c = b.match(We);
  (d = b.match(Xe)) && 1 === d.length && Ye.test(b) && c && 1 === c.length ||
      Pe('failed sanity: ' + a);
  return h
}
function Ze(a, b, c, d) {
  function e(f) {
    return encodeURIComponent(f).replace(/%2C/g, ',')
  }
  a = $e(a);
  Te.test(c) || Pe('invalid_callback');
  b = af(b);
  d = d && d.length ? af(d) : null;
  return [
    encodeURIComponent(a.pathPrefix).replace(/%2C/g, ',').replace(/%2F/g, '/'),
    '/k=', e(a.version), '/m=', e(b), d ? '/exm=' + e(d) : '',
    '/rt=j/sv=1/d=1/ed=1', a.sa ? '/am=' + e(a.sa) : '',
    a.Wa ? '/rs=' + e(a.Wa) : '', a.gb ? '/t=' + e(a.gb) : '', '/cb=', e(c)
  ].join('')
}
function $e(a) {
  '/' !== a.charAt(0) && Pe('relative path');
  for (var b = a.substring(1).split('/'), c = []; b.length;) {
    a = b.shift();
    if (!a.length || 0 == a.indexOf('.'))
      Pe('empty/relative directory');
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
  Qe.test(b) || Pe('invalid_prefix');
  c = 0;
  for (d = Re.length; c < d; ++c) Re[c].test(b) && Pe('invalid_prefix');
  c = bf(a, 'k', !0);
  d = bf(a, 'am');
  e = bf(a, 'rs');
  a = bf(a, 't');
  return {
    pathPrefix: b, version: c, sa: d, Wa: e, gb: a
  }
}
function af(a) {
  for (var b = [], c = 0, d = a.length; c < d; ++c) {
    var e = a[c].replace(/\./g, '_').replace(/-/g, '_');
    Ue.test(e) && b.push(e)
  }
  return b.join(',')
}
function bf(a, b, c) {
  a = a[b];
  !a && c && Pe('missing: ' + b);
  if (a) {
    if (Se.test(a)) return a;
    Pe('invalid: ' + b)
  }
  return null
}
var Ye =
        /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
    Xe = /\/cb=/g, We = /\/\//g;
function cf() {
  var a = Ce();
  if (!a) throw Error('Bad hint');
  return a
}
Ne.m = function(a, b, c, d) {
  (a = a[0]) || Pe('missing_hint');
  return 'https://apis.google.com' + Ze(a, b, c, d)
};
var df = decodeURI('%73cript'), ef = /^[-+_0-9\/A-Za-z]+={0,2}$/;
function ff(a, b) {
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
function gf() {
  var a = L.nonce;
  return void 0 !== a ?
      a && a === String(a) && a.match(ef) ? a : L.nonce = null :
      ve.querySelector ?
      (a = ve.querySelector('script[nonce]')) ?
      (a = a.nonce || a.getAttribute('nonce') || '',
       a && a === String(a) && a.match(ef) ? L.nonce = a : L.nonce = null) :
      null :
      null
}
function hf(a) {
  if ('loading' != ve.readyState)
    jf(a);
  else {
    var b = gf(), c = '';
    null !== b && (c = ' nonce="' + b + '"');
    a = '<' + df + ' src="' + encodeURI(a) + '"' + c + '></' + df + '>';
    ve.write(kf ? kf.createHTML(a) : a)
  }
}
function jf(a) {
  var b = ve.createElement(df);
  b.setAttribute('src', kf ? kf.createScriptURL(a) : a);
  a = gf();
  null !== a && b.setAttribute('nonce', a);
  b.async = 'true';
  (a = ve.getElementsByTagName(df)[0]) ?
      a.parentNode.insertBefore(b, a) :
      (ve.head || ve.body || ve.documentElement).appendChild(b)
}
function lf(a, b) {
  var c = b && b._c;
  if (c)
    for (var d = 0; d < Oe.length; d++) {
      var e = Oe[d][0], f = Oe[d][1];
      f && Object.prototype.hasOwnProperty.call(c, e) && f(c[e], a, b)
    }
}
function mf(a, b, c) {
  nf(function() {
    var d = b === Ce() ? K(Be, '_', Ae()) : Ae();
    d = K(Ee(b), '_', d);
    a(d)
  }, c)
}
function of (a, b) {
  var c = b || {};
  'function' == typeof b && (c = {}, c.callback = b);
  lf(a, c);
  var d = a ? a.split(':') : [], e = c.h || cf(), f = K(L, 'ah', Ae());
  if (f['::'] && d.length) {
    for (var g = [], h = null; h = d.shift();) {
      var k = h.split('.');
      k = f[h] || f[k[1] && 'ns:' + k[0] || ''] || e;
      var l = g.length && g[g.length - 1] || null, n = l;
      l && l.hint == k || (n = {hint: k, features: []}, g.push(n));
      n.features.push(h)
    }
    var p = g.length;
    if (1 < p) {
      var q = c.callback;
      q && (c.callback = function() {
        0 == --p && q()
      })
    }
    for (; d = g.shift();) pf(d.features, c, d.hint)
  } else
    pf(d || [], c, e)
}
function pf(a, b, c) {
  function d(oa, Na) {
    if (p) return 0;
    ue.clearTimeout(n);
    q.push.apply(q, w);
    var Ec = ((Be || {}).config || {}).update;
    Ec ? Ec(f) : f && K(L, 'cu', []).push(f);
    if (Na) {
      Le('me0', oa, t);
      try {
        mf(Na, c, l)
      } finally {
        Le('me1', oa, t)
      }
    }
    return 1
  }
  a = ze(a) || [];
  var e = b.callback, f = b.config, g = b.timeout, h = b.ontimeout,
      k = b.onerror, l = void 0;
  'function' == typeof k && (l = k);
  var n = null, p = !1;
  if (g && !h || !g && h)
    throw 'Timeout requires both the timeout parameter and ontimeout parameter to be set';
  k = K(Ee(c), 'r', []).sort();
  var q = K(Ee(c), 'L', []).sort(), t = [].concat(k);
  0 < g && (n = ue.setTimeout(function() {
    p = !0;
    h()
  }, g));
  var w = ff(a, q);
  if (w.length) {
    w = ff(a, k);
    var F = K(L, 'CP', []), I = F.length;
    F[I] = function(oa) {
      function Na() {
        var Dd = F[I + 1];
        Dd && Dd()
      }
      function Ec(Dd) {
        F[I] = null;
        d(w, oa) && De(function() {
          e && e();
          Dd()
        })
      }
      if (!oa) return 0;
      Le('ml1', w, t);
      0 < I && F[I - 1] ? F[I] = function() {
        Ec(Na)
      } : Ec(Na)
    };
    if (w.length) {
      var qb = 'loaded_' + L.I++;
      Be[qb] = function(oa) {
        F[I](oa);
        Be[qb] = null
      };
      a = Ve(c, w, 'gapi.' + qb, k);
      k.push.apply(k, w);
      Le('ml0', w, t);
      b.sync || ue.___gapisync ? hf(a) : jf(a)
    } else
      F[I](xe)
  } else
    d(w) && e && e()
}
var kf = Sa('goog#gapi');
function nf(a, b) {
  if (L.hee && 0 < L.hel) try {
      return a()
    } catch (c) {
      b && b(c), L.hel--, of('debug_error', function() {
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
Be.load = function(a, b) {
  return nf(function() {
    return of(a, b)
  })
};
function qf() {
  this.g = [];
  this.f = -1
}
qf.prototype.set = function(a, b) {
  b = void 0 === b ? !0 : b;
  0 <= a && 52 > a && 0 === a % 1 && this.g[a] != b &&
      (this.g[a] = b, this.f = -1)
};
qf.prototype.get = function(a) {
  return !!this.g[a]
};
function rf(a) {
  -1 == a.f && (a.f = $a(a.g, function(b, c, d) {
                  return c ? b + Math.pow(2, d) : b
                }, 0));
  return a.f
};
function sf(a, b) {
  this.i = a;
  this.l = b;
  this.g = 0;
  this.f = null
}
sf.prototype.get = function() {
  if (0 < this.g) {
    this.g--;
    var a = this.f;
    this.f = a.next;
    a.next = null
  } else
    a = this.i();
  return a
};
function tf(a, b) {
  a.l(b);
  100 > a.g && (a.g++, b.next = a.f, a.f = b)
};
function uf(a) {
  v.setTimeout(function() {
    throw a;
  }, 0)
}
var vf;
function wf() {
  var a = v.MessageChannel;
  'undefined' === typeof a && 'undefined' !== typeof window &&
      window.postMessage && window.addEventListener && !C('Presto') &&
      (a = function() {
        var e = ud(document, 'IFRAME');
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
        e = y(function(k) {
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
  if ('undefined' !== typeof a && !C('Trident') && !C('MSIE')) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      if (void 0 !== c.next) {
        c = c.next;
        var e = c.ua;
        c.ua = null;
        e()
      }
    };
    return function(e) {
      d.next = {ua: e};
      d = d.next;
      b.port2.postMessage(0)
    }
  }
  return function(e) {
    v.setTimeout(e, 0)
  }
};
function xf() {
  this.g = this.f = null
}
var zf = new sf(
    function() {
      return new yf
    },
    function(a) {
      a.reset()
    });
xf.prototype.add = function(a, b) {
  var c = zf.get();
  c.set(a, b);
  this.g ? this.g.next = c : this.f = c;
  this.g = c
};
xf.prototype.remove = function() {
  var a = null;
  this.f &&
      (a = this.f, this.f = this.f.next, this.f || (this.g = null),
       a.next = null);
  return a
};
function yf() {
  this.next = this.scope = this.f = null
}
yf.prototype.set = function(a, b) {
  this.f = a;
  this.scope = b;
  this.next = null
};
yf.prototype.reset = function() {
  this.next = this.scope = this.f = null
};
function Af(a, b) {
  Bf || Cf();
  Df || (Bf(), Df = !0);
  Ef.add(a, b)
}
var Bf;
function Cf() {
  if (v.Promise && v.Promise.resolve) {
    var a = v.Promise.resolve(void 0);
    Bf = function() {
      a.then(Ff)
    }
  } else
    Bf = function() {
      var b = Ff;
      'function' !== typeof v.setImmediate ||
              v.Window && v.Window.prototype && !C('Edge') &&
                  v.Window.prototype.setImmediate == v.setImmediate ?
          (vf || (vf = wf()), vf(b)) :
          v.setImmediate(b)
    }
}
var Df = !1, Ef = new xf;
function Ff() {
  for (var a; a = Ef.remove();) {
    try {
      a.f.call(a.scope)
    } catch (b) {
      uf(b)
    }
    tf(zf, a)
  }
  Df = !1
};
function Gf(a) {
  this.f = 0;
  this.B = void 0;
  this.l = this.g = this.i = null;
  this.o = this.A = !1;
  if (a != Ea) try {
      var b = this;
      a.call(
          void 0,
          function(c) {
            Hf(b, 2, c)
          },
          function(c) {
            Hf(b, 3, c)
          })
    } catch (c) {
      Hf(this, 3, c)
    }
}
function If() {
  this.next = this.context = this.onRejected = this.i = this.f = null;
  this.g = !1
}
If.prototype.reset = function() {
  this.context = this.onRejected = this.i = this.f = null;
  this.g = !1
};
var Jf = new sf(
    function() {
      return new If
    },
    function(a) {
      a.reset()
    });
function Kf(a, b, c) {
  var d = Jf.get();
  d.i = a;
  d.onRejected = b;
  d.context = c;
  return d
}
function Lf(a) {
  if (a instanceof Gf) return a;
  var b = new Gf(Ea);
  Hf(b, 2, a);
  return b
}
function Mf(a) {
  return new Gf(function(b, c) {
    c(a)
  })
}
Gf.prototype.then = function(a, b, c) {
  return Nf(
      this, 'function' === typeof a ? a : null,
      'function' === typeof b ? b : null, c)
};
Gf.prototype.$goog_Thenable = !0;
function Of(a, b) {
  var c = Kf(b, b, void 0);
  c.g = !0;
  Pf(a, c)
}
function Qf(a, b) {
  return Nf(a, null, b, void 0)
}
Gf.prototype.cancel = function(a) {
  if (0 == this.f) {
    var b = new Rf(a);
    Af(function() {
      Sf(this, b)
    }, this)
  }
};
function Sf(a, b) {
  if (0 == a.f)
    if (a.i) {
      var c = a.i;
      if (c.g) {
        for (var d = 0, e = null, f = null, g = c.g;
             g && (g.g || (d++, g.f == a && (e = g), !(e && 1 < d)));
             g = g.next)
          e || (f = g);
        e &&
            (0 == c.f && 1 == d ? Sf(c, b) :
                                  (f ? (d = f, d.next == c.l && (c.l = d),
                                        d.next = d.next.next) :
                                       Tf(c),
                                   Uf(c, e, 3, b)))
      }
      a.i = null
    } else
      Hf(a, 3, b)
}
function Pf(a, b) {
  a.g || 2 != a.f && 3 != a.f || Vf(a);
  a.l ? a.l.next = b : a.g = b;
  a.l = b
}
function Nf(a, b, c, d) {
  var e = Kf(null, null, null);
  e.f = new Gf(function(f, g) {
    e.i = b ? function(h) {
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
        void 0 === k && h instanceof Rf ? g(h) : f(k)
      } catch (l) {
        g(l)
      }
    } : g
  });
  e.f.i = a;
  Pf(a, e);
  return e.f
}
Gf.prototype.J = function(a) {
  this.f = 0;
  Hf(this, 2, a)
};
Gf.prototype.T = function(a) {
  this.f = 0;
  Hf(this, 3, a)
};
function Hf(a, b, c) {
  if (0 == a.f) {
    a === c && (b = 3, c = new TypeError('Promise cannot resolve to itself'));
    a.f = 1;
    a: {
      var d = c, e = a.J, f = a.T; if (d instanceof Gf) {
        Pf(d, Kf(e || Ea, f || null, a));
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
          if (Ia(d)) try {
              var k = d.then;
              if ('function' === typeof k) {
                Wf(d, k, e, f, a);
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
        (a.B = c, a.f = b, a.i = null, Vf(a),
         3 != b || c instanceof Rf || Xf(a, c))
  }
}
function Wf(a, b, c, d, e) {
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
function Vf(a) {
  a.A || (a.A = !0, Af(a.F, a))
}
function Tf(a) {
  var b = null;
  a.g && (b = a.g, a.g = b.next, b.next = null);
  a.g || (a.l = null);
  return b
}
Gf.prototype.F = function() {
  for (var a; a = Tf(this);) Uf(this, a, this.f, this.B);
  this.A = !1
};
function Uf(a, b, c, d) {
  if (3 == c && b.onRejected && !b.g)
    for (; a && a.o; a = a.i) a.o = !1;
  if (b.f)
    b.f.i = null, Yf(b, c, d);
  else
    try {
      b.g ? b.i.call(b.context) : Yf(b, c, d)
    } catch (e) {
      Zf.call(null, e)
    }
  tf(Jf, b)
}
function Yf(a, b, c) {
  2 == b ? a.i.call(a.context, c) :
           a.onRejected && a.onRejected.call(a.context, c)
}
function Xf(a, b) {
  a.o = !0;
  Af(function() {
    a.o && Zf.call(null, b)
  })
}
var Zf = uf;
function Rf(a) {
  Ta.call(this, a)
}
A(Rf, Ta);
Rf.prototype.name = 'cancel';
function $f(a, b, c) {
  Sd.call(this);
  this.f = a;
  this.A = b || 0;
  this.g = c;
  this.o = y(this.ob, this)
}
A($f, Sd);
m = $f.prototype;
m.Z = 0;
m.X = function() {
  $f.G.X.call(this);
  this.stop();
  delete this.f;
  delete this.g
};
m.start = function(a) {
  this.stop();
  var b = this.o;
  a = void 0 !== a ? a : this.A;
  if ('function' !== typeof b)
    if (b && 'function' == typeof b.handleEvent)
      b = y(b.handleEvent, b);
    else
      throw Error('Invalid listener argument');
  this.Z = 2147483647 < Number(a) ? -1 : v.setTimeout(b, a || 0)
};
m.stop = function() {
  this.isActive() && v.clearTimeout(this.Z);
  this.Z = 0
};
m.isActive = function() {
  return 0 != this.Z
};
m.ob = function() {
  this.Z = 0;
  this.f && this.f.call(this.g)
};
function ag() {
  this.g = -1
};
function bg() {
  this.g = 64;
  this.f = [];
  this.A = [];
  this.B = [];
  this.l = [];
  this.l[0] = 128;
  for (var a = 1; a < this.g; ++a) this.l[a] = 0;
  this.o = this.i = 0;
  this.reset()
}
A(bg, ag);
bg.prototype.reset = function() {
  this.f[0] = 1732584193;
  this.f[1] = 4023233417;
  this.f[2] = 2562383102;
  this.f[3] = 271733878;
  this.f[4] = 3285377520;
  this.o = this.i = 0
};
function cg(a, b, c) {
  c || (c = 0);
  var d = a.B;
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
bg.prototype.update = function(a, b) {
  if (null != a) {
    void 0 === b && (b = a.length);
    for (var c = b - this.g, d = 0, e = this.A, f = this.i; d < b;) {
      if (0 == f)
        for (; d <= c;) cg(this, a, d), d += this.g;
      if ('string' === typeof a)
        for (; d < b;) {
          if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.g) {
            cg(this, e);
            f = 0;
            break
          }
        }
      else
        for (; d < b;)
          if (e[f] = a[d], ++f, ++d, f == this.g) {
            cg(this, e);
            f = 0;
            break
          }
    }
    this.i = f;
    this.o += b
  }
};
bg.prototype.digest = function() {
  var a = [], b = 8 * this.o;
  56 > this.i ? this.update(this.l, 56 - this.i) :
                this.update(this.l, this.g - (this.i - 56));
  for (var c = this.g - 1; 56 <= c; c--) this.A[c] = b & 255, b /= 256;
  cg(this, this.A);
  for (c = b = 0; 5 > c; c++)
    for (var d = 24; 0 <= d; d -= 8) a[b] = this.f[c] >> d & 255, ++b;
  return a
};
var dg = 'StopIteration' in v ? v.StopIteration :
                                {message: 'StopIteration', stack: ''};
function eg() {}
eg.prototype.next = function() {
  throw dg;
};
eg.prototype.N = function() {
  return this
};
function fg(a) {
  if (a instanceof eg) return a;
  if ('function' == typeof a.N) return a.N(!1);
  if (Ha(a)) {
    var b = 0, c = new eg;
    c.next = function() {
      for (;;) {
        if (b >= a.length) throw dg;
        if (b in a) return a[b++];
        b++
      }
    };
    return c
  }
  throw Error('Not implemented');
}
function gg(a, b) {
  if (Ha(a)) try {
      B(a, b, void 0)
    } catch (c) {
      if (c !== dg) throw c;
    }
  else {
    a = fg(a);
    try {
      for (;;) b.call(void 0, a.next(), void 0, a)
    } catch (c) {
      if (c !== dg) throw c;
    }
  }
}
function hg(a) {
  if (Ha(a)) return eb(a);
  a = fg(a);
  var b = [];
  gg(a, function(c) {
    b.push(c)
  });
  return b
};
function ig(a, b) {
  this.i = {};
  this.f = [];
  this.P = this.g = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) throw Error('Uneven number of arguments');
    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
  } else if (a)
    if (a instanceof ig)
      for (c = jg(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
    else
      for (d in a) this.set(d, a[d])
}
function jg(a) {
  kg(a);
  return a.f.concat()
}
m = ig.prototype;
m.equals = function(a, b) {
  if (this === a) return !0;
  if (this.g != a.g) return !1;
  var c = b || lg;
  kg(this);
  for (var d, e = 0; d = this.f[e]; e++)
    if (!c(this.get(d), a.get(d))) return !1;
  return !0
};
function lg(a, b) {
  return a === b
}
m.isEmpty = function() {
  return 0 == this.g
};
m.clear = function() {
  this.i = {};
  this.P = this.g = this.f.length = 0
};
m.remove = function(a) {
  return Object.prototype.hasOwnProperty.call(this.i, a) ?
      (delete this.i[a], this.g--, this.P++,
       this.f.length > 2 * this.g && kg(this), !0) :
      !1
};
function kg(a) {
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
m.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.i, a) ? this.i[a] : b
};
m.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.i, a) ||
      (this.g++, this.f.push(a), this.P++);
  this.i[a] = b
};
m.forEach = function(a, b) {
  for (var c = jg(this), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this)
  }
};
m.clone = function() {
  return new ig(this)
};
m.N = function(a) {
  kg(this);
  var b = 0, c = this.P, d = this, e = new eg;
  e.next = function() {
    if (c != d.P)
      throw Error('The map has changed since the iterator was created');
    if (b >= d.f.length) throw dg;
    var f = d.f[b++];
    return a ? f : d.i[f]
  };
  return e
};
function mg(a) {
  return 'string' == typeof a.className ?
      a.className :
      a.getAttribute && a.getAttribute('class') || ''
}
function ng(a) {
  return a.classList ? a.classList : mg(a).match(/\S+/g) || []
}
function og(a, b) {
  'string' == typeof a.className ? a.className = b :
                                   a.setAttribute && a.setAttribute('class', b)
}
function M(a, b) {
  return a.classList ? a.classList.contains(b) : cb(ng(a), b)
}
function N(a, b) {
  if (a.classList)
    a.classList.add(b);
  else if (!M(a, b)) {
    var c = mg(a);
    og(a, c + (0 < c.length ? ' ' + b : b))
  }
}
function pg(a, b) {
  if (a.classList)
    B(b, function(f) {
      N(a, f)
    });
  else {
    var c = {};
    B(ng(a), function(f) {
      c[f] = !0
    });
    B(b, function(f) {
      c[f] = !0
    });
    var d = '', e;
    for (e in c) d += 0 < d.length ? ' ' + e : e;
    og(a, d)
  }
}
function qg(a, b) {
  a.classList ? a.classList.remove(b) : M(a, b) && og(a, Ya(ng(a), function(c) {
                                                           return c != b
                                                         }).join(' '))
}
function rg(a, b) {
  a.classList ? B(b, function(c) {
    qg(a, c)
  }) : og(a, Ya(ng(a), function(c) {
               return !cb(b, c)
             }).join(' '))
}
function sg(a, b, c) {
  c ? N(a, b) : qg(a, b)
}
function tg(a, b, c) {
  M(a, b) && (qg(a, b), N(a, c))
}
function ug(a, b) {
  var c = !M(a, b);
  sg(a, b, c)
};
var vg = !D && !Pb();
function wg(a, b) {
  if (/-[a-z]/.test(b)) return null;
  if (vg && a.dataset) {
    if (Rb() && !(b in a.dataset)) return null;
    var c = a.dataset[b];
    return void 0 === c ? null : c
  }
  return a.getAttribute(
      'data-' + String(b).replace(/([A-Z])/g, '-$1').toLowerCase())
};
function xg(a) {
  var b = [];
  yg(new zg, a, b);
  return b.join('')
}
function zg() {}
function yg(a, b, c) {
  if (null == b)
    c.push('null');
  else {
    if ('object' == typeof b) {
      if (Array.isArray(b)) {
        var d = b;
        b = d.length;
        c.push('[');
        for (var e = '', f = 0; f < b; f++) c.push(e), yg(a, d[f], c), e = ',';
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
                   (c.push(e), Ag(d, c), c.push(':'), yg(a, f, c), e = ','));
        c.push('}');
        return
      }
    }
    switch (typeof b) {
      case 'string':
        Ag(b, c);
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
var Bg = {
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
    Cg = /\uffff/.test('\uffff') ? /[\\"\x00-\x1f\x7f-\uffff]/g :
                                   /[\\"\x00-\x1f\x7f-\xff]/g;
function Ag(a, b) {
  b.push('"', a.replace(Cg, function(c) {
    var d = Bg[c];
    d ||
        (d = '\\u' + (c.charCodeAt(0) | 65536).toString(16).substr(1),
         Bg[c] = d);
    return d
  }), '"')
};
var Dg = new WeakMap;
function Eg(a, b) {
  for (var c = [a], d = b.length - 1; 0 <= d; --d) c.push(typeof b[d], b[d]);
  return c.join('\x0B')
};
var Fg = function() {
  if (wc) {
    var a = /Windows NT ([0-9.]+)/;
    return (a = a.exec(Lb)) ? a[1] : '0'
  }
  return vc ? (a = /10[_.][0-9_.]+/,
               (a = a.exec(Lb)) ? a[0].replace(/_/g, '.') : '10') :
      xc    ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(Lb)) ? a[1] : '') :
      yc || zc || Ac ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/,
                        (a = a.exec(Lb)) ? a[1].replace(/_/g, '.') : '') :
                       ''
}();
function Gg(a) {
  return (a = a.exec(Lb)) ? a[1] : ''
}
var Hg = function() {
  if (Oc) return Gg(/Firefox\/([0-9.]+)/);
  if (D || rc || qc) return Ic;
  if (Sc) return nc() ? Gg(/CriOS\/([0-9.]+)/) : Gg(/Chrome\/([0-9.]+)/);
  if (Tc && !nc()) return Gg(/Version\/([0-9.]+)/);
  if (Pc || Qc) {
    var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Lb);
    if (a) return a[1] + '.' + a[2]
  } else if (Rc)
    return (a = Gg(/Android\s+([0-9.]+)/)) ? a : Gg(/Version\/([0-9.]+)/);
  return ''
}();
function Ig(a, b, c, d, e, f, g) {
  var h;
  if (h = c.offsetParent) {
    var k = 'HTML' == h.tagName || 'BODY' == h.tagName;
    if (!k || 'static' != ce(h, 'position')) {
      var l = ge(h);
      if (!k) {
        k = ne(h);
        var n;
        if (n = k) {
          n = Tc && 0 <= Cb(Hg, 10);
          var p;
          if (p = Bc) p = 0 <= Cb(Fg, 10);
          var q = Sc && 0 <= Cb(Hg, 85);
          n = tc || n || p || q
        }
        k = n ? -h.scrollLeft :
            !k || sc && Kc('8') || 'visible' == ce(h, 'overflowX') ?
                h.scrollLeft :
                h.scrollWidth - h.clientWidth - h.scrollLeft;
        l = fd(l, new E(k, h.scrollTop))
      }
    }
  }
  h = l || new E;
  l = me(a);
  if (k = fe(a))
    q = new Vd(k.left, k.top, k.right - k.left, k.bottom - k.top),
    k = Math.max(l.left, q.left),
    n = Math.min(l.left + l.width, q.left + q.width),
    k <= n &&
        (p = Math.max(l.top, q.top),
         q = Math.min(l.top + l.height, q.top + q.height),
         p <= q && (l.left = k, l.top = p, l.width = n - k, l.height = q - p));
  k = hd(a);
  p = hd(c);
  if (k.f != p.f) {
    n = k.f.body;
    p = sd(p.f);
    q = new E(0, 0);
    var t = (t = jd(n)) ? sd(t) : window;
    b: {
      try {
        oc(t.parent);
        var w = !0;
        break b
      } catch (qb) {} w = !1
    } if (w) {
      w = n;
      do {
        var F = t == p ? ge(w) : he(w);
        q.x += F.x;
        q.y += F.y
      } while (t && t != p && t != t.parent && (w = t.frameElement) &&
               (t = t.parent))
    }
    w = fd(q, ge(n));
    !D || 9 <= Number(Nc) || pd(k.f) || (w = fd(w, qd(k.f)));
    l.left += w.x;
    l.top += w.y
  }
  a = Jg(a, b);
  b = l.left;
  a&4 ? b += l.width : a & 2 && (b += l.width / 2);
  b = new E(b, l.top + (a & 1 ? l.height : 0));
  b = fd(b, h);
  e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
  var I;
  g && (I = fe(c)) &&
      (I.top -= h.y, I.right -= h.x, I.bottom -= h.y, I.left -= h.x);
  return Kg(b, c, d, f, I, g, void 0)
}
function Kg(a, b, c, d, e, f, g) {
  a = a.clone();
  var h = Jg(b, c);
  c = ke(b);
  g = g ? g.clone() : c.clone();
  a = a.clone();
  g = g.clone();
  var k = 0;
  if (d || 0 != h)
    h&4      ? a.x -= g.width + (d ? d.right : 0) :
        h& 2 ? a.x -= g.width / 2 :
               d && (a.x += d.left),
        h& 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
  if (f) {
    if (e) {
      d = a;
      h = g;
      k = 0;
      65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
      132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
      d.x < e.left && f&1 && (d.x = e.left, k |= 1);
      if (f & 16) {
        var l = d.x;
        d.x < e.left && (d.x = e.left, k |= 4);
        d.x + h.width > e.right &&
            (h.width = Math.min(e.right - d.x, l + h.width - e.left),
             h.width = Math.max(h.width, 0), k |= 4)
      }
      d.x + h.width > e.right && f&1 &&
          (d.x = Math.max(e.right - h.width, e.left), k |= 1);
      f&2 &&
          (k |= (d.x < e.left ? 16 : 0) | (d.x + h.width > e.right ? 32 : 0));
      d.y < e.top && f&4 && (d.y = e.top, k |= 2);
      f&32 &&
          (l = d.y, d.y < e.top && (d.y = e.top, k |= 8),
           d.y + h.height > e.bottom &&
               (h.height = Math.min(e.bottom - d.y, l + h.height - e.top),
                h.height = Math.max(h.height, 0), k |= 8));
      d.y + h.height > e.bottom && f&4 &&
          (d.y = Math.max(e.bottom - h.height, e.top), k |= 2);
      f&8 &&
          (k |= (d.y < e.top ? 64 : 0) | (d.y + h.height > e.bottom ? 128 : 0));
      e = k
    } else
      e = 256;
    k = e
  }
  f = new Vd(0, 0, 0, 0);
  f.left = a.x;
  f.top = a.y;
  f.width = g.width;
  f.height = g.height;
  e = k;
  if (e & 496) return e;
  a = new E(f.left, f.top);
  a instanceof E ? (g = a.x, a = a.y) : (g = a, a = void 0);
  b.style.left = je(g, !1);
  b.style.top = je(a, !1);
  g = new gd(f.width, f.height);
  c == g || c && g && c.width == g.width && c.height == g.height ||
      (c = g, g = jd(b), a = pd(hd(g).f),
       !D || Kc('10') || a && Kc('8') ?
           (b = b.style,
            tc     ? b.MozBoxSizing = 'border-box' :
                uc ? b.WebkitBoxSizing = 'border-box' :
                     b.boxSizing = 'border-box',
            b.width = Math.max(c.width, 0) + 'px',
            b.height = Math.max(c.height, 0) + 'px') :
           (g = b.style,
            a ? (D ? (a = pe(b, 'paddingLeft'), f = pe(b, 'paddingRight'),
                      d = pe(b, 'paddingTop'), h = pe(b, 'paddingBottom'),
                      a = new Ud(d, f, h, a)) :
                     (a = be(b, 'paddingLeft'), f = be(b, 'paddingRight'),
                      d = be(b, 'paddingTop'), h = be(b, 'paddingBottom'),
                      a = new Ud(
                          parseFloat(d), parseFloat(f), parseFloat(h),
                          parseFloat(a))),
                 !D || 9 <= Number(Nc) ?
                     (f = be(b, 'borderLeftWidth'),
                      d = be(b, 'borderRightWidth'),
                      h = be(b, 'borderTopWidth'),
                      b = be(b, 'borderBottomWidth'),
                      b = new Ud(
                          parseFloat(h), parseFloat(d), parseFloat(b),
                          parseFloat(f))) :
                     (f = re(b, 'borderLeft'), d = re(b, 'borderRight'),
                      h = re(b, 'borderTop'), b = re(b, 'borderBottom'),
                      b = new Ud(h, d, b, f)),
                 g.pixelWidth = c.width - b.left - a.left - a.right - b.right,
                 g.pixelHeight =
                     c.height - b.top - a.top - a.bottom - b.bottom) :
                (g.pixelWidth = c.width, g.pixelHeight = c.height)));
  return e
}
function Jg(a, b) {
  return (b & 8 && ne(a) ? b ^ 4 : b) & -9
};
function O(a) {
  Sd.call(this);
  this.B = 1;
  this.o = [];
  this.A = 0;
  this.f = [];
  this.g = {};
  this.F = !!a
}
A(O, Sd);
m = O.prototype;
m.subscribe = function(a, b, c) {
  var d = this.g[a];
  d || (d = this.g[a] = []);
  var e = this.B;
  this.f[e] = a;
  this.f[e + 1] = b;
  this.f[e + 2] = c;
  this.B = e + 3;
  d.push(e);
  return e
};
function Lg(a, b) {
  var c = !1, d = a.subscribe('ROOT_MENU_REMOVED', function(e) {
    c || (c = !0, this.W(d), b.apply(void 0, arguments))
  }, a)
}
function Mg(a, b, c) {
  if (b = a.g[b]) {
    var d = a.f;
    (b = bb(b, function(e) {
       return d[e + 1] == c && void 0 == d[e + 2]
     })) && a.W(b)
  }
}
m.W = function(a) {
  var b = this.f[a];
  if (b) {
    var c = this.g[b];
    if (0 != this.A)
      this.o.push(a), this.f[a + 1] = Ea;
    else {
      if (c) {
        var d = Xa(c, a);
        0 <= d && Array.prototype.splice.call(c, d, 1)
      }
      delete this.f[a];
      delete this.f[a + 1];
      delete this.f[a + 2]
    }
  }
  return !!b
};
m.M = function(a, b) {
  var c = this.g[a];
  if (c) {
    for (var d = Array(arguments.length - 1), e = 1, f = arguments.length;
         e < f; e++)
      d[e - 1] = arguments[e];
    if (this.F)
      for (e = 0; e < c.length; e++) {
        var g = c[e];
        Ng(this.f[g + 1], this.f[g + 2], d)
      }
    else {
      this.A++;
      try {
        for (e = 0, f = c.length; e < f; e++)
          g = c[e], this.f[g + 1].apply(this.f[g + 2], d)
      } finally {
        if (this.A--, 0 < this.o.length && 0 == this.A)
          for (; c = this.o.pop();) this.W(c)
      }
    }
    return 0 != e
  }
  return !1
};
function Ng(a, b, c) {
  Af(function() {
    a.apply(b, c)
  })
}
m.clear = function(a) {
  if (a) {
    var b = this.g[a];
    b && (B(b, this.W, this), delete this.g[a])
  } else
    this.f.length = 0, this.g = {}
};
function Og(a, b) {
  if (b) {
    var c = a.g[b];
    return c ? c.length : 0
  }
  c = 0;
  for (var d in a.g) c += Og(a, d);
  return c
}
m.X = function() {
  O.G.X.call(this);
  this.clear();
  this.o.length = 0
};
function Pg(a) {
  this.f = a
}
Pg.prototype.set = function(a, b) {
  void 0 === b ? this.f.remove(a) : this.f.set(a, xg(b))
};
Pg.prototype.get = function(a) {
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
Pg.prototype.remove = function(a) {
  this.f.remove(a)
};
function Qg(a) {
  this.f = a
}
A(Qg, Pg);
function Rg(a) {
  this.data = a
}
function Sg(a) {
  return void 0 === a || a instanceof Rg ? a : new Rg(a)
}
Qg.prototype.set = function(a, b) {
  Qg.G.set.call(this, a, Sg(b))
};
Qg.prototype.g = function(a) {
  a = Qg.G.get.call(this, a);
  if (void 0 === a || a instanceof Object) return a;
  throw 'Storage: Invalid value was encountered';
};
Qg.prototype.get = function(a) {
  if (a = this.g(a)) {
    if (a = a.data, void 0 === a)
      throw 'Storage: Invalid value was encountered';
  } else
    a = void 0;
  return a
};
function Tg(a) {
  this.f = a
}
A(Tg, Qg);
Tg.prototype.set = function(a, b, c) {
  if (b = Sg(b)) {
    if (c) {
      if (c < Qa()) {
        Tg.prototype.remove.call(this, a);
        return
      }
      b.expiration = c
    }
    b.creation = Qa()
  }
  Tg.G.set.call(this, a, b)
};
Tg.prototype.g = function(a) {
  var b = Tg.G.g.call(this, a);
  if (b) {
    var c = b.creation, d = b.expiration;
    if (d && d < Qa() || c && c > Qa())
      Tg.prototype.remove.call(this, a);
    else
      return b
  }
};
function Ug() {};
function Vg() {}
A(Vg, Ug);
Vg.prototype.clear = function() {
  var a = hg(this.N(!0)), b = this;
  B(a, function(c) {
    b.remove(c)
  })
};
function Wg(a) {
  this.f = a
}
A(Wg, Vg);
m = Wg.prototype;
m.isAvailable = function() {
  if (!this.f) return !1;
  try {
    return this.f.setItem('__sak', '1'), this.f.removeItem('__sak'), !0
  } catch (a) {
    return !1
  }
};
m.set = function(a, b) {
  try {
    this.f.setItem(a, b)
  } catch (c) {
    if (0 == this.f.length) throw 'Storage mechanism: Storage disabled';
    throw 'Storage mechanism: Quota exceeded';
  }
};
m.get = function(a) {
  a = this.f.getItem(a);
  if ('string' !== typeof a && null !== a)
    throw 'Storage mechanism: Invalid value was encountered';
  return a
};
m.remove = function(a) {
  this.f.removeItem(a)
};
m.N = function(a) {
  var b = 0, c = this.f, d = new eg;
  d.next = function() {
    if (b >= c.length) throw dg;
    var e = c.key(b++);
    if (a) return e;
    e = c.getItem(e);
    if ('string' !== typeof e)
      throw 'Storage mechanism: Invalid value was encountered';
    return e
  };
  return d
};
m.clear = function() {
  this.f.clear()
};
m.key = function(a) {
  return this.f.key(a)
};
function Xg() {
  var a = null;
  try {
    a = window.localStorage || null
  } catch (b) {
  }
  this.f = a
}
A(Xg, Wg);
function Yg(a, b) {
  this.g = a;
  this.f = null;
  if (D && !(9 <= Number(Nc))) {
    Zg || (Zg = new ig);
    this.f = Zg.get(a);
    this.f ||
        (b ? this.f = document.getElementById(b) :
             (this.f = document.createElement('userdata'),
              this.f.addBehavior('#default#userData'),
              document.body.appendChild(this.f)),
         Zg.set(a, this.f));
    try {
      this.f.load(this.g)
    } catch (c) {
      this.f = null
    }
  }
}
A(Yg, Vg);
var $g = {
  '.': '.2E',
  '!': '.21',
  '~': '.7E',
  '*': '.2A',
  '\'': '.27',
  '(': '.28',
  ')': '.29',
  '%': '.'
},
    Zg = null;
function ah(a) {
  return '_' + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(b) {
    return $g[b]
  })
}
m = Yg.prototype;
m.isAvailable = function() {
  return !!this.f
};
m.set = function(a, b) {
  this.f.setAttribute(ah(a), b);
  bh(this)
};
m.get = function(a) {
  a = this.f.getAttribute(ah(a));
  if ('string' !== typeof a && null !== a)
    throw 'Storage mechanism: Invalid value was encountered';
  return a
};
m.remove = function(a) {
  this.f.removeAttribute(ah(a));
  bh(this)
};
m.N = function(a) {
  var b = 0, c = this.f.XMLDocument.documentElement.attributes, d = new eg;
  d.next = function() {
    if (b >= c.length) throw dg;
    var e = c[b++];
    if (a) return decodeURIComponent(e.nodeName.replace(/\./g, '%')).substr(1);
    e = e.nodeValue;
    if ('string' !== typeof e)
      throw 'Storage mechanism: Invalid value was encountered';
    return e
  };
  return d
};
m.clear = function() {
  for (var a = this.f.XMLDocument.documentElement, b = a.attributes.length;
       0 < b; b--)
    a.removeAttribute(a.attributes[b - 1].nodeName);
  bh(this)
};
function bh(a) {
  try {
    a.f.save(a.g)
  } catch (b) {
    throw 'Storage mechanism: Quota exceeded';
  }
};
function ch(a, b) {
  this.g = a;
  this.f = b + '::'
}
A(ch, Vg);
ch.prototype.set = function(a, b) {
  this.g.set(this.f + a, b)
};
ch.prototype.get = function(a) {
  return this.g.get(this.f + a)
};
ch.prototype.remove = function(a) {
  this.g.remove(this.f + a)
};
ch.prototype.N = function(a) {
  var b = this.g.N(!0), c = this, d = new eg;
  d.next = function() {
    for (var e = b.next(); e.substr(0, c.f.length) != c.f;) e = b.next();
    return a ? e.substr(c.f.length) : c.g.get(e)
  };
  return d
};
var dh =
    window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
z('yt.config_', dh);
function eh(a) {
  var b = arguments;
  1 < b.length ? dh[b[0]] = b[1] : 1 === b.length && Object.assign(dh, b[0])
}
function P(a, b) {
  return a in dh ? dh[a] : b
};
var fh = [];
function gh(a) {
  fh.forEach(function(b) {
    return b(a)
  })
}
function hh(a) {
  return a && window.yterr ? function() {
    try {
      return a.apply(this, arguments)
    } catch (b) {
      ih(b), gh(b)
    }
  } : a
}
function ih(a) {
  var b = x('yt.logging.errors.log');
  b ? b(a, 'ERROR', void 0, void 0, void 0) :
      (b = P('ERRORS', []), b.push([a, 'ERROR', void 0, void 0, void 0]),
       eh('ERRORS', b))
}
function jh(a) {
  var b = x('yt.logging.errors.log');
  b ? b(a, 'WARNING', void 0, void 0, void 0) :
      (b = P('ERRORS', []), b.push([a, 'WARNING', void 0, void 0, void 0]),
       eh('ERRORS', b))
};
function kh(a, b) {
  'function' === typeof a && (a = hh(a));
  return window.setTimeout(a, b)
}
function lh(a) {
  window.clearTimeout(a)
};
var mh = v.ytPubsubPubsubInstance || new O,
    nh = v.ytPubsubPubsubSubscribedKeys || {},
    oh = v.ytPubsubPubsubTopicToKeys || {},
    ph = v.ytPubsubPubsubIsSynchronous || {};
function qh(a, b, c) {
  var d = rh();
  if (d) {
    var e = d.subscribe(a, function() {
      var f = arguments;
      var g = function() {
        nh[e] && b.apply && 'function' == typeof b.apply &&
            b.apply(c || window, f)
      };
      try {
        ph[a] ? g() : kh(g, 0)
      } catch (h) {
        ih(h)
      }
    }, c);
    nh[e] = !0;
    oh[a] || (oh[a] = []);
    oh[a].push(e);
    return e
  }
  return 0
}
function sh(a) {
  var b = rh();
  b &&
      ('number' === typeof a ? a = [a] :
                               'string' === typeof a && (a = [parseInt(a, 10)]),
       B(a, function(c) {
         b.unsubscribeByKey(c);
         delete nh[c]
       }))
}
function th(a, b) {
  var c = rh();
  return c ? c.publish.apply(c, arguments) : !1
}
function uh(a, b) {
  ph[a] = !0;
  var c = rh();
  c && c.publish.apply(c, arguments);
  ph[a] = !1
}
function rh() {
  return v.ytPubsubPubsubInstance
}
O.prototype.subscribe = O.prototype.subscribe;
O.prototype.unsubscribeByKey = O.prototype.W;
O.prototype.publish = O.prototype.M;
O.prototype.clear = O.prototype.clear;
z('ytPubsubPubsubInstance', mh);
z('ytPubsubPubsubTopicToKeys', oh);
z('ytPubsubPubsubIsSynchronous', ph);
z('ytPubsubPubsubSubscribedKeys', nh);
function vh(a, b, c) {
  a &&
      (a.dataset ? a.dataset[wh(b)] = String(c) :
                   a.setAttribute('data-' + b, c))
}
function xh(a, b) {
  return a ? a.dataset ? a.dataset[wh(b)] : a.getAttribute('data-' + b) : null
}
function yh(a, b) {
  a && (a.dataset ? delete a.dataset[wh(b)] : a.removeAttribute('data-' + b))
}
var zh = {};
function wh(a) {
  return zh[a] || (zh[a] = String(a).replace(/\-([a-z])/g, function(b, c) {
           return c.toUpperCase()
         }))
};
function Q(a, b) {
  this.version = a;
  this.args = b
};
function R(a, b) {
  this.topic = a;
  this.f = b
}
R.prototype.toString = function() {
  return this.topic
};
function Ah() {}
function Bh(a, b) {
  return Ch(a, 0, b)
}
function Dh(a, b) {
  return Ch(a, 1, b)
};
function Eh() {}
pa(Eh, Ah);
function Ch(a, b, c) {
  isNaN(c) && (c = void 0);
  var d = x('yt.scheduler.instance.addJob');
  return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : kh(a, c || 0)
}
Eh.prototype.start = function() {
  var a = x('yt.scheduler.instance.start');
  a && a()
};
Fa(Eh);
Eh.C();
var Fh = x('ytPubsub2Pubsub2Instance') || new O;
O.prototype.subscribe = O.prototype.subscribe;
O.prototype.unsubscribeByKey = O.prototype.W;
O.prototype.publish = O.prototype.M;
O.prototype.clear = O.prototype.clear;
z('ytPubsub2Pubsub2Instance', Fh);
var Gh = x('ytPubsub2Pubsub2SubscribedKeys') || {};
z('ytPubsub2Pubsub2SubscribedKeys', Gh);
var Hh = x('ytPubsub2Pubsub2TopicToKeys') || {};
z('ytPubsub2Pubsub2TopicToKeys', Hh);
var Ih = x('ytPubsub2Pubsub2IsAsync') || {};
z('ytPubsub2Pubsub2IsAsync', Ih);
z('ytPubsub2Pubsub2SkipSubKey', null);
function S(a, b) {
  var c = Jh();
  c && c.publish.call(c, a.toString(), a, b)
}
function Kh(a, b, c) {
  var d = Jh();
  if (!d) return 0;
  var e = d.subscribe(a.toString(), function(f, g) {
    var h = x('ytPubsub2Pubsub2SkipSubKey');
    h && h == e || (h = function() {
      if (Gh[e]) try {
          if (g && a instanceof R && a != f) try {
              var k = a.f, l = g;
              if (!l.args || !l.version)
                throw Error(
                    'yt.pubsub2.Data.deserialize(): serializedData is incomplete.');
              try {
                if (!k.P) {
                  var n = new k;
                  k.P = n.version
                }
                var p = k.P
              } catch (q) {
              }
              if (!p || l.version != p)
                throw Error(
                    'yt.pubsub2.Data.deserialize(): serializedData version is incompatible.');
              try {
                g = Reflect.construct(k, eb(l.args))
              } catch (q) {
                throw q.message = 'yt.pubsub2.Data.deserialize(): ' + q.message,
                      q;
              }
            } catch (q) {
              throw q.message =
                  'yt.pubsub2.pubsub2 cross-binary conversion error for ' +
                  a.toString() + ': ' + q.message,
                    q;
            }
          b.call(c || window, g)
        } catch (q) {
          ih(q)
        }
    }, Ih[a.toString()] ? x('yt.scheduler.instance') ? Dh(h) : kh(h, 0) : h())
  });
  Gh[e] = !0;
  Hh[a.toString()] || (Hh[a.toString()] = []);
  Hh[a.toString()].push(e);
  return e
}
function Lh(a) {
  var b = Jh();
  b && ('number' === typeof a && (a = [a]), B(a, function(c) {
          b.unsubscribeByKey(c);
          delete Gh[c]
        }))
}
function Jh() {
  return x('ytPubsub2Pubsub2Instance')
};
var Mh = 0;
function Nh(a) {
  var b = a.__yt_uid_key;
  b || (b = Oh(), a.__yt_uid_key = b);
  return b
}
function Ph(a, b) {
  a = G(a);
  b = G(b);
  return !!Md(a, function(c) {
    return c === b
  }, !0, void 0)
}
function Qh(a, b) {
  var c = ld(document, a, null, b);
  return c.length ? c[0] : null
}
function Rh() {
  var a = document, b;
  ab(
      [
        'fullscreenElement', 'webkitFullscreenElement', 'mozFullScreenElement',
        'msFullscreenElement'
      ],
      function(c) {
        b = a[c];
        return !!b
      });
  return b
}
function Sh() {
  sg(document.body, 'hide-players', !1);
  var a = kd('preserve-players');
  B(a, function(b) {
    qg(b, 'preserve-players')
  })
}
var Oh = x('ytDomDomGetNextId') || function() {
  return ++Mh
};
z('ytDomDomGetNextId', Oh);
var Th = {
  stopImmediatePropagation: 1,
  stopPropagation: 1,
  preventMouseEvent: 1,
  preventManipulation: 1,
  preventDefault: 1,
  layerX: 1,
  layerY: 1,
  screenX: 1,
  screenY: 1,
  scale: 1,
  rotation: 1,
  webkitMovementX: 1,
  webkitMovementY: 1
};
function Uh(a) {
  this.type = '';
  this.state = this.source = this.data = this.currentTarget =
      this.relatedTarget = this.target = null;
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
  this.clientY = this.clientX = 0;
  this.changedTouches = this.touches = null;
  try {
    if (a = a || window.event) {
      this.event = a;
      for (var b in a) b in Th || (this[b] = a[b]);
      var c = a.target || a.srcElement;
      c && 3 == c.nodeType && (c = c.parentNode);
      this.target = c;
      var d = a.relatedTarget;
      if (d) try {
          d = d.nodeName ? d : null
        } catch (e) {
          d = null
        }
      else
        'mouseover' == this.type ? d = a.fromElement :
                                   'mouseout' == this.type && (d = a.toElement);
      this.relatedTarget = d;
      this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
      this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
      this.keyCode = a.keyCode ? a.keyCode : a.which;
      this.charCode =
          a.charCode || ('keypress' == this.type ? this.keyCode : 0);
      this.altKey = a.altKey;
      this.ctrlKey = a.ctrlKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey
    }
  } catch (e) {
  }
}
Uh.prototype.preventDefault = function() {
  this.event &&
      (this.event.returnValue = !1,
       this.event.preventDefault && this.event.preventDefault())
};
Uh.prototype.stopPropagation = function() {
  this.event &&
      (this.event.cancelBubble = !0,
       this.event.stopPropagation && this.event.stopPropagation())
};
Uh.prototype.stopImmediatePropagation = function() {
  this.event &&
      (this.event.cancelBubble = !0,
       this.event.stopImmediatePropagation &&
           this.event.stopImmediatePropagation())
};
var mb = v.ytEventsEventsListeners || {};
z('ytEventsEventsListeners', mb);
var Vh = v.ytEventsEventsCounter || {count: 0};
z('ytEventsEventsCounter', Vh);
function Wh(a, b, c, d) {
  d = void 0 === d ? {} : d;
  a.addEventListener &&
      ('mouseenter' != b || 'onmouseenter' in document ?
           'mouseleave' != b || 'onmouseenter' in document ?
           'mousewheel' == b &&
                   'MozBoxSizing' in document.documentElement.style &&
                   (b = 'MozMousePixelScroll') :
           b = 'mouseout' :
           b = 'mouseover');
  return lb(function(e) {
    var f = 'boolean' === typeof e[4] && e[4] == !!d,
        g = Ia(e[4]) && Ia(d) && nb(e[4], d);
    return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || g)
  })
}
function T(a, b, c, d) {
  d = void 0 === d ? {} : d;
  if (!a || !a.addEventListener && !a.attachEvent) return '';
  var e = Wh(a, b, c, d);
  if (e) return e;
  e = ++Vh.count + '';
  var f =
      !('mouseenter' != b && 'mouseleave' != b || !a.addEventListener ||
        'onmouseenter' in document);
  var g = f ? function(h) {
    h = new Uh(h);
    if (!Md(h.relatedTarget, function(k) {
          return k == a
        }, !0))
      return h.currentTarget = a, h.type = b, c.call(a, h)
  } : function(h) {
    h = new Uh(h);
    h.currentTarget = a;
    return c.call(a, h)
  };
  g = hh(g);
  a.addEventListener ?
      ('mouseenter' == b&& f     ? b = 'mouseover' :
           'mouseleave' == b&& f ? b = 'mouseout' :
                                   'mousewheel' == b &&
               'MozBoxSizing' in document.documentElement.style &&
               (b = 'MozMousePixelScroll'),
       Xh() || 'boolean' === typeof d ? a.addEventListener(b, g, d) :
                                        a.addEventListener(b, g, !!d.capture)) :
      a.attachEvent('on' + b, g);
  mb[e] = [a, b, c, g, d];
  return e
}
function Yh(a, b, c) {
  var d = a || document;
  return T(d, 'click', function(e) {
    var f = Md(e.target, function(g) {
      return g === d || c(g)
    }, !0);
    f && f !== d && !f.disabled && (e.currentTarget = f, b.call(f, e))
  })
}
function Zh(a) {
  a = a || window.event;
  a = a.target || a.srcElement;
  3 == a.nodeType && (a = a.parentNode);
  return a
}
var Xh = Wa(function() {
  var a = !1;
  try {
    var b = Object.defineProperty({}, 'capture', {
      get: function() {
        a = !0
      }
    });
    window.addEventListener('test', null, b)
  } catch (c) {
  }
  return a
});
function $h(a, b, c) {
  return Yh(a, b, function(d) {
    return M(d, c)
  })
}
function ai(a) {
  if (document.createEvent) {
    var b = document.createEvent('HTMLEvents');
    b.initEvent('click', !0, !0);
    a.dispatchEvent(b)
  } else
    b = document.createEventObject(), a.fireEvent('onclick', b)
}
function bi(a) {
  a && ('string' == typeof a && (a = [a]), B(a, function(b) {
          if (b in mb) {
            var c = mb[b], d = c[0], e = c[1], f = c[3];
            c = c[4];
            d.removeEventListener ? Xh() || 'boolean' === typeof c ?
                                    d.removeEventListener(e, f, c) :
                                    d.removeEventListener(e, f, !!c.capture) :
                                    d.detachEvent && d.detachEvent('on' + e, f);
            delete mb[b]
          }
        }))
};
var ci = {}, di = 'ontouchstart' in document;
function ei(a, b, c) {
  switch (a) {
    case 'mouseover':
    case 'mouseout':
      var d = 3;
      break;
    case 'mouseenter':
    case 'mouseleave':
      d = 9
  }
  return Md(c, function(e) {
    return M(e, b)
  }, !0, d)
}
function fi(a) {
  var b = 'mouseover' == a.type && 'mouseenter' in ci ||
      'mouseout' == a.type && 'mouseleave' in ci,
      c = a.type in ci || b;
  if ('HTML' != a.target.tagName && c) {
    if (b) {
      b = 'mouseover' == a.type ? 'mouseenter' : 'mouseleave';
      c = ci[b];
      for (var d in c.g) {
        var e = ei(b, d, a.target);
        e && !Md(a.relatedTarget, function(f) {
          return f == e
        }, !0) && c.M(d, e, b, a)
      }
    }
    if (b = ci[a.type])
      for (d in b.g) (e = ei(a.type, d, a.target)) && b.M(d, e, a.type, a)
  }
}
T(document, 'blur', fi, !0);
T(document, 'change', fi, !0);
T(document, 'click', fi);
T(document, 'focus', fi, !0);
T(document, 'mouseover', fi);
T(document, 'mouseout', fi);
T(document, 'mousedown', fi);
T(document, 'keydown', fi);
T(document, 'keyup', fi);
T(document, 'keypress', fi);
T(document, 'cut', fi);
T(document, 'paste', fi);
di &&
    (T(document, 'touchstart', fi), T(document, 'touchend', fi),
     T(document, 'touchcancel', fi));
function gi(a) {
  this.o = a;
  this.B = {};
  this.J = [];
  this.F = []
}
m = gi.prototype;
m.K = function(a) {
  return J(a, U(this))
};
function U(a, b) {
  return 'yt-uix' + (a.o ? '-' + a.o : '') + (b ? '-' + b : '')
}
m.unregister = function() {
  sh(this.J);
  this.J.length = 0;
  Lh(this.F);
  this.F.length = 0
};
m.init = Ea;
m.dispose = Ea;
function hi(a, b, c) {
  a.J.push(qh(b, c, a))
}
function ii(a, b, c) {
  a.F.push(Kh(b, c, a))
}
function V(a, b, c, d) {
  d = U(a, d);
  var e = y(c, a);
  b in ci || (ci[b] = new O);
  ci[b].subscribe(d, e);
  a.B[c] = e
}
function W(a, b, c, d) {
  if (b in ci) {
    var e = ci[b];
    Mg(e, U(a, d), a.B[c]);
    0 >= Og(e) && (e.dispose(), delete ci[b])
  }
  delete a.B[c]
}
m.V = function(a, b, c) {
  var d = this.j(a, b);
  if (d && (d = x(d))) {
    var e = hb(arguments, 2);
    gb(e, 0, 0, a);
    d.apply(null, e)
  }
};
m.j = function(a, b) {
  return xh(a, b)
};
function ji(a, b) {
  vh(a, 'tooltip-text', b)
};
var ki = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
z('yt.uix.widgets_', ki);
function li(a) {
  var b = [];
  jb(a, function(c, d) {
    var e = encodeURIComponent(String(d)), f;
    Array.isArray(c) ? f = c : f = [c];
    B(f, function(g) {
      '' == g ? b.push(e) : b.push(e + '=' + encodeURIComponent(String(g)))
    })
  });
  return b.join('&')
}
function mi(a) {
  '?' == a.charAt(0) && (a = a.substr(1));
  a = a.split('&');
  for (var b = {}, c = 0, d = a.length; c < d; c++) {
    var e = a[c].split('=');
    if (1 == e.length && e[0] || 2 == e.length) try {
        var f = decodeURIComponent((e[0] || '').replace(/\+/g, ' ')),
            g = decodeURIComponent((e[1] || '').replace(/\+/g, ' '));
        f in b ? Array.isArray(b[f]) ? fb(b[f], g) : b[f] = [b[f], g] : b[f] = g
      } catch (k) {
        if ('q' != e[0]) {
          var h = Error('Error decoding URL component');
          h.params = {key: e[0], value: e[1]};
          ih(h)
        }
      }
  }
  return b
}
function ni(a) {
  return -1 != a.indexOf('?') ?
      (a = (a || '').split('#')[0], a = a.split('?', 2),
       mi(1 < a.length ? a[1] : a[0])) :
      {}
}
function oi(a, b, c) {
  var d = a.split('#', 2);
  a = d[0];
  d = 1 < d.length ? '#' + d[1] : '';
  var e = a.split('?', 2);
  a = e[0];
  e = mi(e[1] || '');
  for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
  return jc(a, e) + d
}
function pi(a) {
  if (!b) var b = window.location.href;
  var c = a.match(bc)[1] || null, d = dc(a);
  c && d ? (a = a.match(bc), b = b.match(bc),
            a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) :
           a = d ? dc(b) == d &&
              (Number(b.match(bc)[4] || null) || null) ==
                  (Number(a.match(bc)[4] || null) || null) :
                   !0;
  return a
};
function qi(a) {
  a = void 0 === a ? {} : a;
  'function' === typeof a && (a = {callback: a});
  if (a.gapiHintOverride || P('GAPI_HINT_OVERRIDE')) {
    var b = ni(document.location.href).gapi_jsh;
    b && rb(a, {_c: {jsl: {h: b}}})
  }
  of('gapi.iframes:gapi.iframes.style.common', a)
};
function ri() {
  return x('gapi.iframes.getContext')()
};
function si(a) {
  Q.call(this, 1, arguments);
  this.f = a
}
A(si, Q);
function ti(a) {
  Q.call(this, 1, arguments);
  this.f = a
}
A(ti, Q);
function ui(a, b, c) {
  Q.call(this, 3, arguments);
  this.i = a;
  this.g = b;
  this.f = null != c ? !!c : null
}
A(ui, Q);
function vi(a, b, c, d, e, f) {
  Q.call(this, 2, arguments);
  this.f = a;
  this.g = b;
  this.l = c || null;
  this.i = d || null;
  this.source = e || null;
  this.params = f || null
}
A(vi, Q);
function wi(a, b, c) {
  Q.call(this, 1, arguments);
  this.f = a;
  this.g = b
}
A(wi, Q);
function xi(a, b, c, d, e, f, g, h) {
  Q.call(this, 1, arguments);
  this.f = a;
  this.o = b;
  this.g = c;
  this.A = d || null;
  this.l = e || null;
  this.i = f || null;
  this.source = g || null;
  this.params = h || null
}
A(xi, Q);
var yi = new R('subscription-batch-subscribe', si),
    zi = new R('subscription-batch-unsubscribe', si),
    Ai = new R('subscription-subscribe', vi),
    Bi = new R('subscription-subscribe-loading', ti),
    Ci = new R('subscription-subscribe-loaded', ti),
    Di = new R('subscription-subscribe-success', wi),
    Ei = new R('subscription-subscribe-external', vi),
    Fi = new R('subscription-unsubscribe', xi),
    Gi = new R('subscription-unsubscirbe-loading', ti),
    Hi = new R('subscription-unsubscribe-loaded', ti),
    Ii = new R('subscription-unsubscribe-success', ti),
    Ji = new R('subscription-external-unsubscribe', xi),
    Ki = new R('subscription-enable-ypc', ti),
    Li = new R('subscription-disable-ypc', ti),
    Mi = new R('subscription-prefs', ui),
    Ni = new R('subscription-prefs-success', ui),
    Oi = new R('subscription-prefs-failure', ui);
function Pi() {
  var a = void 0 === a ? !1 : a;
  var b = Rh();
  if (a)
    for (; b && b.shadowRoot;) b = b.shadowRoot.fullscreenElement;
  return b ? b : null
};
function Qi(a, b) {
  (a = G(a)) && a.style && (a.style.display = b ? '' : 'none', sg(a, 'hid', !b))
}
function Ri(a) {
  return (a = G(a)) ? 'none' != a.style.display && !M(a, 'hid') : !1
}
function Si(a) {
  B(arguments, function(b) {
    !Ha(b) || b instanceof Element ? Qi(b, !0) : B(b, function(c) {
      Si(c)
    })
  })
}
function Ti(a) {
  B(arguments, function(b) {
    !Ha(b) || b instanceof Element ? Qi(b, !1) : B(b, function(c) {
      Ti(c)
    })
  })
}
(function(a, b) {
function c(f) {
  var g = u(f);
  f = g.next().value;
  g = fa(g);
  return a.apply(f, g)
}
function d(f) {
  f = u(f);
  f.next();
  f = fa(f);
  return b(e, f)
}
b = void 0 === b ? Eg : b;
var e = Ja(a);
return function(f) {
  for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
  h = this || v;
  var k = Dg.get(h);
  k || (k = {}, Dg.set(h, k));
  return pc(k, [this].concat(g instanceof Array ? g : fa(u(g))), c, d)
}
})(function(a) {
var b = ud(document, 'DIV');
a && (b.className = a);
b.style.cssText =
    'overflow:auto;position:absolute;top:0;width:100px;height:100px';
a = ud(document, 'DIV');
ie(a, '200px', '200px');
b.appendChild(a);
document.body.appendChild(b);
a = b.offsetWidth - b.clientWidth;
wd(b);
return a
});
function Ui() {
  gi.call(this, 'tooltip');
  this.f = 0;
  this.g = {}
}
A(Ui, gi);
Fa(Ui);
m = Ui.prototype;
m.register = function() {
  V(this, 'mouseover', this.ga);
  V(this, 'mouseout', this.R);
  V(this, 'focus', this.za);
  V(this, 'blur', this.ta);
  V(this, 'click', this.R);
  V(this, 'touchstart', this.ab);
  V(this, 'touchend', this.ia);
  V(this, 'touchcancel', this.ia)
};
m.unregister = function() {
  W(this, 'mouseover', this.ga);
  W(this, 'mouseout', this.R);
  W(this, 'focus', this.za);
  W(this, 'blur', this.ta);
  W(this, 'click', this.R);
  W(this, 'touchstart', this.ab);
  W(this, 'touchend', this.ia);
  W(this, 'touchcancel', this.ia);
  this.dispose();
  Ui.G.unregister.call(this)
};
m.dispose = function() {
  for (var a in this.g) this.R(this.g[a]);
  this.g = {}
};
m.ga = function(a) {
  if (!(this.f && 1E3 > Qa() - this.f)) {
    var b = parseInt(this.j(a, 'tooltip-hide-timer'), 10);
    b && (yh(a, 'tooltip-hide-timer'), lh(b));
    b = y(function() {
      Vi(this, a);
      yh(a, 'tooltip-show-timer')
    }, this);
    var c = parseInt(this.j(a, 'tooltip-show-delay'), 10) || 0;
    b = kh(b, c);
    vh(a, 'tooltip-show-timer', b.toString());
    a.title && (ji(a, Wi(this, a)), a.title = '');
    b = Ja(a).toString();
    this.g[b] = a
  }
};
m.R = function(a) {
  var b = parseInt(this.j(a, 'tooltip-show-timer'), 10);
  b && (lh(b), yh(a, 'tooltip-show-timer'));
  b = y(function() {
    if (a) {
      var c = G(Xi(this, a));
      c && (Yi(c), wd(c), yh(a, 'content-id'));
      c = G(Xi(this, a, 'arialabel'));
      wd(c)
    }
    yh(a, 'tooltip-hide-timer')
  }, this);
  b = kh(b, 50);
  vh(a, 'tooltip-hide-timer', b.toString());
  if (b = this.j(a, 'tooltip-text')) a.title = b;
  b = Ja(a).toString();
  delete this.g[b]
};
m.za = function(a, b) {
  this.f = 0;
  this.ga(a, b)
};
m.ta = function(a) {
  this.f = 0;
  this.R(a)
};
m.ab = function(a, b, c) {
  c.changedTouches &&
      (this.f = 0,
       (a = ei(b, U(this), c.changedTouches[0].target)) && this.ga(a, b))
};
m.ia = function(a, b, c) {
  c.changedTouches &&
      (this.f = Qa(),
       (a = ei(b, U(this), c.changedTouches[0].target)) && this.R(a))
};
function Zi(a, b, c) {
  ji(b, c);
  a = a.j(b, 'content-id');
  (a = G(a)) && Ad(a, c)
}
function Wi(a, b) {
  return a.j(b, 'tooltip-text') || b.title
}
function Vi(a, b) {
  if (b) {
    var c = Wi(a, b);
    if (c) {
      var d = G(Xi(a, b));
      if (!d) {
        d = document.createElement('div');
        d.id = Xi(a, b);
        og(d, U(a, 'tip'));
        var e = document.createElement('div');
        og(e, U(a, 'tip-body'));
        var f = document.createElement('div');
        og(f, U(a, 'tip-arrow'));
        var g = document.createElement('div');
        g.setAttribute('aria-hidden', 'true');
        og(g, U(a, 'tip-content'));
        var h = $i(a, b), k = Xi(a, b, 'content');
        g.id = k;
        vh(b, 'content-id', k);
        e.appendChild(g);
        h && d.appendChild(h);
        d.appendChild(e);
        d.appendChild(f);
        var l = Jd(b);
        k = Xi(a, b, 'arialabel');
        f = document.createElement('div');
        N(f, U(a, 'arialabel'));
        f.id = k;
        l = b.hasAttribute('aria-label') ? b.getAttribute('aria-label') :
            'rtl' == document.body.getAttribute('dir') ? c + ' ' + l :
                                                         l + ' ' + c;
        Ad(f, l);
        b.setAttribute('aria-labelledby', k);
        k = Pi() || document.body;
        k.appendChild(f);
        k.appendChild(d);
        Zi(a, b, c);
        (c = parseInt(a.j(b, 'tooltip-max-width'), 10)) && e.offsetWidth > c &&
            (e.style.width = c + 'px', N(g, U(a, 'normal-wrap')));
        g = M(b, U(a, 'reverse'));
        aj(a, b, d, e, h, g) || aj(a, b, d, e, h, !g);
        var n = U(a, 'tip-visible');
        kh(function() {
          N(d, n)
        }, 0)
      }
    }
  }
}
function aj(a, b, c, d, e, f) {
  sg(c, U(a, 'tip-reverse'), f);
  var g = 0;
  f && (g = 1);
  var h = ke(b);
  f = new E((h.width - 10) / 2, f ? h.height : 0);
  var k = ge(b);
  Kg(new E(k.x + f.x, k.y + f.y), c, g);
  f = od(window);
  if (1 == c.nodeType)
    var l = he(c);
  else
    c = c.changedTouches ? c.changedTouches[0] : c,
    l = new E(c.clientX, c.clientY);
  c = ke(d);
  var n = Math.floor(c.width / 2);
  g = !!(f.height < l.y + h.height);
  h = !!(l.y < h.height);
  k = !!(l.x < n);
  f = !!(f.width < l.x + n);
  l = (c.width + 3) / -2 - -5;
  a = a.j(b, 'force-tooltip-direction');
  if ('left' == a || k)
    l = -5;
  else if ('right' == a || f)
    l = 20 - c.width - 3;
  a = Math.floor(l) + 'px';
  d.style.left = a;
  e &&
      (e.style.left = a, e.style.height = c.height + 'px',
       e.style.width = c.width + 'px');
  return !(g || h)
}
function Xi(a, b, c) {
  a = U(a) + Nh(b);
  c && (a += '-' + c);
  return a
}
function $i(a, b) {
  var c = null;
  wc && M(b, U(a, 'masked')) &&
      ((c = G('yt-uix-tooltip-shared-mask')) ?
           (c.parentNode.removeChild(c), Si(c)) :
           (c = ud(document, 'IFRAME'), c.src = 'javascript:""',
            c.id = 'yt-uix-tooltip-shared-mask', og(c, U(a, 'tip-mask'))));
  return c
}
function Yi(a) {
  var b = G('yt-uix-tooltip-shared-mask'), c = b && Md(b, function(d) {
                                                 return d == a
                                               }, !1, 2);
  b && c && (b.parentNode.removeChild(b), Ti(b), document.body.appendChild(b))
};
function bj(a) {
  var b = cj();
  if (b = window.open(
          b, 'loginPopup', 'width=375,height=440,resizable=yes,scrollbars=yes',
          !0)) {
    var c = qh('LOGGED_IN', function(d) {
      sh(P('LOGGED_IN_PUBSUB_KEY', void 0));
      eh('LOGGED_IN', !0);
      a(d)
    });
    eh('LOGGED_IN_PUBSUB_KEY', c);
    b.moveTo((screen.width - 375) / 2, (screen.height - 440) / 2)
  }
}
function cj() {
  var a = document.location.protocol + '//' + document.domain + '/post_login';
  a = ic(a, 'mode', 'subscribe');
  a = ic('/signin?context=popup', 'next', a);
  return a = ic(a, 'feature', 'sub_button')
}
z('yt.pubsub.publish', th);
function X(a) {
  a = dj(a);
  return 'string' === typeof a && 'false' === a ? !1 : !!a
}
function ej(a, b) {
  var c = dj(a);
  return void 0 === c && void 0 !== b ? b : Number(c || 0)
}
function dj(a) {
  var b = P('EXPERIMENTS_FORCED_FLAGS', {});
  return void 0 !== b[a] ? b[a] : P('EXPERIMENT_FLAGS', {})[a]
}
function fj() {
  var a = [], b = P('EXPERIMENTS_FORCED_FLAGS', {});
  for (c in b) a.push({key: c, value: String(b[c])});
  var c = P('EXPERIMENT_FLAGS', {});
  for (var d in c)
    d.startsWith('force_') && void 0 === b[d] &&
        a.push({key: d, value: String(c[d])});
  return a
};
var gj = window,
    hj = gj.ytcsi && gj.ytcsi.now ?
    gj.ytcsi.now :
    gj.performance && gj.performance.timing && gj.performance.now &&
        gj.performance.timing.navigationStart ?
    function() {
      return gj.performance.timing.navigationStart + gj.performance.now()
    } :
    function() {
      return (new Date).getTime()
    };
var ij = ej('initial_gel_batch_timeout', 1E3), jj = Math.pow(2, 16) - 1,
    kj = null, lj = 0, mj = void 0, nj = 0, oj = 0, pj = 0, qj = !0,
    rj = v.ytLoggingTransportLogPayloadsQueue_ || {};
z('ytLoggingTransportLogPayloadsQueue_', rj);
var sj = v.ytLoggingTransportGELQueue_ || new Map;
z('ytLoggingTransportGELQueue_', sj);
var tj = v.ytLoggingTransportTokensToCttTargetIds_ || {};
z('ytLoggingTransportTokensToCttTargetIds_', tj);
function uj() {
  lh(nj);
  lh(oj);
  oj = 0;
  mj && mj.isReady() ?
      (vj(sj), 'log_event' in rj && vj(Object.entries(rj.log_event)),
       sj.clear(), delete rj.log_event) :
      wj()
}
function wj() {
  X('web_gel_timeout_cap') && !oj && (oj = kh(uj, 6E4));
  lh(nj);
  var a = P('LOGGING_BATCH_TIMEOUT', ej('web_gel_debounce_ms', 1E4));
  X('shorten_initial_gel_batch_timeout') && qj && (a = ij);
  nj = kh(uj, a)
}
function vj(a) {
  var b = mj, c = Math.round(hj());
  a = u(a);
  for (var d = a.next(); !d.done; d = a.next()) {
    var e = u(d.value);
    d = e.next().value;
    var f = e.next().value;
    e = ob({context: xj(b.f || yj())});
    e.events = f;
    (f = tj[d]) && zj(e, d, f);
    delete tj[d];
    Aj(e, c);
    Bj(b, 'log_event', e, {
      retry: !0,
      onSuccess: function() {
        lj = Math.round(hj() - c)
      }
    });
    qj = !1
  }
}
function Aj(a, b) {
  a.requestTimeMs = String(b);
  X('unsplit_gel_payloads_in_logs') && (a.unsplitGelPayloadsInLogs = !0);
  var c = P('EVENT_ID', void 0);
  if (c) {
    var d = P('BATCH_CLIENT_COUNTER', void 0) || 0;
    !d && X('web_client_counter_random_seed') &&
        (d = Math.floor(Math.random() * jj / 2));
    d++;
    d > jj && (d = 1);
    eh('BATCH_CLIENT_COUNTER', d);
    c = {serializedEventId: c, clientCounter: String(d)};
    a.serializedClientEventId = c;
    kj && lj && X('log_gel_rtt_web') && (a.previousBatchInfo = {
      serializedClientEventId: kj,
      roundtripMs: String(lj)
    });
    kj = c;
    lj = 0
  }
}
function zj(a, b, c) {
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
var Cj = v.ytLoggingGelSequenceIdObj_ || {};
z('ytLoggingGelSequenceIdObj_', Cj);
function Dj(a, b, c, d) {
  d = void 0 === d ? {} : d;
  var e = {};
  e.eventTimeMs = Math.round(d.timestamp || hj());
  e[a] = b;
  a = String;
  d.timestamp ?
      b = -1 :
      (b = x('_lact', window), b = null == b ? -1 : Math.max(Qa() - b, 0));
  e.context = {lastActivityMs: a(b)};
  X('log_sequence_info_on_gel_web') && d.Xa &&
      (a = e.context, b = d.Xa, Cj[b] = b in Cj ? Cj[b] + 1 : 0,
       a.sequence = {index: Cj[b], groupKey: b}, d.pc && delete Cj[d.Xa]);
  d = d.oc;
  a = '';
  d &&
      (a = {},
       d.videoId ? a.videoId = d.videoId :
                   d.playlistId && (a.playlistId = d.playlistId),
       tj[d.token] = a, a = d.token);
  d = sj.get(a) || [];
  sj.set(a, d);
  d.push(e);
  c && (mj = new c);
  c = ej('web_logging_max_batch') || 100;
  e = hj();
  d.length >= c ? uj() : 10 <= e - pj && (wj(), pj = e)
};
function Ej(a) {
  var b = Fj;
  a = void 0 === a ? x('yt.ads.biscotti.lastId_') || '' : a;
  b = Object.assign(Gj(b), Hj(b));
  b.ca_type = 'image';
  a && (b.bid = a);
  return b
}
function Gj(a) {
  var b = {};
  b.dt = se;
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
  var d = void 0 === d ? Wc : d;
  try {
    var e = d.history.length
  } catch (f) {
    e = 0
  }
  b.u_his = e;
  b.u_java = !!Wc.navigator && 'unknown' !== typeof Wc.navigator.javaEnabled &&
      !!Wc.navigator.javaEnabled && Wc.navigator.javaEnabled();
  Wc.screen &&
      (b.u_h = Wc.screen.height, b.u_w = Wc.screen.width,
       b.u_ah = Wc.screen.availHeight, b.u_aw = Wc.screen.availWidth,
       b.u_cd = Wc.screen.colorDepth);
  Wc.navigator && Wc.navigator.plugins &&
      (b.u_nplug = Wc.navigator.plugins.length);
  Wc.navigator && Wc.navigator.mimeTypes &&
      (b.u_nmime = Wc.navigator.mimeTypes.length);
  return b
}
function Hj(a) {
  var b = a.f;
  try {
    var c = b.screenX;
    var d = b.screenY
  } catch (l) {
  }
  try {
    var e = b.outerWidth;
    var f = b.outerHeight
  } catch (l) {
  }
  try {
    var g = b.innerWidth;
    var h = b.innerHeight
  } catch (l) {
  }
  b = [
    b.screenLeft, b.screenTop, c, d, b.screen ? b.screen.availWidth : void 0,
    b.screen ? b.screen.availTop : void 0, e, f, g, h
  ];
  c = a.f.top;
  try {
    var k = od(c || window).round()
  } catch (l) {
    k = new gd(-12245933, -12245933)
  }
  c = k;
  k = {};
  d = new qf;
  v.SVGElement && v.document.createElementNS && d.set(0);
  e = Rd();
  e['allow-top-navigation-by-user-activation'] && d.set(1);
  e['allow-popups-to-escape-sandbox'] && d.set(2);
  v.crypto && v.crypto.subtle && d.set(3);
  v.TextDecoder && v.TextEncoder && d.set(4);
  d = rf(d);
  k.bc = d;
  k.bih = c.height;
  k.biw = c.width;
  k.brdim = b.join();
  a = a.g;
  return k.vis = {
    visible: 1,
    hidden: 2,
    prerender: 3,
    preview: 4,
    unloaded: 5
  }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState ||
    ''] || 0,
         k.wgl = !!Wc.WebGLRenderingContext, k
}
var Fj = new function() {
  var a = window.document;
  this.f = window;
  this.g = a
};
z('yt.ads_.signals_.getAdSignalsString', function(a) {
  return li(Ej(a))
});
var Ij = 'XMLHttpRequest' in v ? function() {
  return new XMLHttpRequest
} : null;
function Jj() {
  if (!Ij) return null;
  var a = Ij();
  return 'open' in a ? a : null
};
var Kj = {
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
    Lj =
        'app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address'
            .split(' '),
    Mj = !1;
function Nj(a, b) {
  b = void 0 === b ? {} : b;
  var c = pi(a), d = X('web_ajax_ignore_global_headers_if_set'), e;
  for (e in Kj) {
    var f = P(Kj[e]);
    !f || !c && dc(a) || d && void 0 !== b[e] || (b[e] = f)
  }
  if (c || !dc(a))
    b['X-YouTube-Utc-Offset'] = String(-(new Date).getTimezoneOffset());
  (c || !dc(a)) &&
      (d = 'undefined' != typeof Intl ?
           (new Intl.DateTimeFormat).resolvedOptions().timeZone :
           null) &&
      (b['X-YouTube-Time-Zone'] = d);
  if (c || !dc(a)) b['X-YouTube-Ad-Signals'] = li(Ej(void 0));
  return b
}
function Oj(a) {
  var b = window.location.search, c = dc(a), d = cc(a.match(bc)[5] || null);
  d = (c = c &&
           (c.endsWith('youtube.com') || c.endsWith('youtube-nocookie.com'))) &&
      d && d.startsWith('/api/');
  if (!c || d) return a;
  var e = mi(b), f = {};
  B(Lj, function(g) {
    e[g] && (f[g] = e[g])
  });
  return oi(a, f || {}, !1)
}
function Pj(a, b) {
  if (window.fetch && 'XML' != b.format) {
    var c = {method: b.method || 'GET', credentials: 'same-origin'};
    b.headers && (c.headers = b.headers);
    a = Qj(a, b);
    var d = Rj(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = 'include');
    var e = !1, f;
    fetch(a, c).then(function(g) {
      if (!e) {
        e = !0;
        f && lh(f);
        var h = g.ok, k = function(l) {
          l = l || {};
          var n = b.context || v;
          h ? b.onSuccess && b.onSuccess.call(n, l, g) :
              b.onError && b.onError.call(n, l, g);
          b.ba && b.ba.call(n, l, g)
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
    b.Sa && 0 < b.timeout && (f = kh(function() {
                                e || (e = !0, lh(f), b.Sa.call(b.context || v))
                              }, b.timeout))
  } else
    Sj(a, b)
}
function Sj(a, b) {
  var c = b.format || 'JSON';
  a = Qj(a, b);
  var d = Rj(a, b), e = !1,
      f = Tj(a, function(k) {
        if (!e) {
          e = !0;
          h && lh(h);
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
          var n = null, p = 400 <= k.status && 500 > k.status,
              q = 500 <= k.status && 600 > k.status;
          if (l || p || q) n = Uj(a, c, k, b.nc);
          if (l)
            a: if (k && 204 == k.status) l = !0;
          else {
            switch (c) {
              case 'XML':
                l = 0 == parseInt(n && n.return_code, 10);
                break a;
              case 'RAW':
                l = !0;
                break a
            }
            l = !!n
          }
          n = n || {};
          p = b.context || v;
          l ? b.onSuccess && b.onSuccess.call(p, k, n) :
              b.onError && b.onError.call(p, k, n);
          b.ba && b.ba.call(p, k, n)
        }
      }, b.method, d, b.headers, b.responseType, b.withCredentials);
  if (b.ha && 0 < b.timeout) {
    var g = b.ha;
    var h = kh(function() {
      e || (e = !0, f.abort(), lh(h), g.call(b.context || v, f))
    }, b.timeout)
  }
}
function Qj(a, b) {
  b.tc &&
      (a = document.location.protocol + '//' + document.location.hostname +
           (document.location.port ? ':' + document.location.port : '') + a);
  var c = P('XSRF_FIELD_NAME', void 0), d = b.qa;
  d && (d[c] && delete d[c], a = oi(a, d || {}, !0));
  return a
}
function Rj(a, b) {
  var c = P('XSRF_FIELD_NAME', void 0), d = P('XSRF_TOKEN', void 0),
      e = b.postBody || '', f = b.D, g = P('XSRF_FIELD_NAME', void 0), h;
  b.headers && (h = b.headers['Content-Type']);
  b.qc || dc(a) && !b.withCredentials && dc(a) != document.location.hostname ||
      'POST' != b.method || h && 'application/x-www-form-urlencoded' != h ||
      b.D && b.D[g] || (f || (f = {}), f[c] = d);
  f && 'string' === typeof e &&
      (e = mi(e), rb(e, f),
       e = b.Va && 'JSON' == b.Va ? JSON.stringify(e) : hc(e));
  if (!(c = e) && (c = f)) {
    a: {
      for (var k in f) {
        f = !1;
        break a
      } f = !0
    } c = !f
  }
  !Mj && c && 'POST' != b.method &&
      (Mj = !0, ih(Error('AJAX request with postData should use POST')));
  return e
}
function Uj(a, b, c, d) {
  var e = null;
  switch (b) {
    case 'JSON':
      try {
        var f = c.responseText
      } catch (g) {
        throw d = Error('Error reading responseText'), d.params = a, jh(d), g;
      }
      a = c.getResponseHeader('Content-Type') || '';
      f && 0 <= a.indexOf('json') && (e = JSON.parse(f));
      break;
    case 'XML':
      if (a = (a = c.responseXML) ? Vj(a) : null)
        e = {}, B(a.getElementsByTagName('*'), function(g) {
          e[g.tagName] = Wj(g)
        })
  }
  d && Xj(e);
  return e
}
function Xj(a) {
  if (Ia(a))
    for (var b in a) {
      var c;
      (c = 'html_content' == b) ||
          (c = b.length - 5, c = 0 <= c && b.indexOf('_html', c) == c);
      if (c) {
        c = b;
        var d = Vb(a[b], null);
        a[c] = d
      } else
        Xj(a[b])
    }
}
function Vj(a) {
  return a ? (a = ('responseXML' in a ? a.responseXML : a)
                      .getElementsByTagName('root')) &&
              0 < a.length ?
             a[0] :
             null :
             null
}
function Wj(a) {
  var b = '';
  B(a.childNodes, function(c) {
    b += c.nodeValue
  });
  return b
}
function Tj(a, b, c, d, e, f, g) {
  function h() {
    4 == (k && 'readyState' in k ? k.readyState : 0) && b && hh(b)(k)
  }
  c = void 0 === c ? 'GET' : c;
  d = void 0 === d ? '' : d;
  var k = Jj();
  if (!k) return null;
  'onloadend' in k ? k.addEventListener('loadend', h, !1) :
                     k.onreadystatechange = h;
  X('debug_forward_web_query_parameters') && (a = Oj(a));
  k.open(c, a, !0);
  f && (k.responseType = f);
  g && (k.withCredentials = !0);
  c = 'POST' == c && (void 0 === window.FormData || !(d instanceof FormData));
  if (e = Nj(a, e))
    for (var l in e)
      k.setRequestHeader(l, e[l]),
          'content-type' == l.toLowerCase() && (c = !1);
  c && k.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  k.send(d);
  return k
};
function Yj() {
  for (var a = {}, b = u(Object.entries(mi(P('DEVICE', '')))), c = b.next();
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
function Zj() {
  return 'INNERTUBE_API_KEY' in dh && 'INNERTUBE_API_VERSION' in dh
}
function yj() {
  return {
    innertubeApiKey: P('INNERTUBE_API_KEY', void 0),
        innertubeApiVersion: P('INNERTUBE_API_VERSION', void 0),
        xb: P('INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO'),
        yb: P('INNERTUBE_CONTEXT_CLIENT_NAME', 'WEB'),
        innertubeContextClientVersion:
            P('INNERTUBE_CONTEXT_CLIENT_VERSION', void 0),
        Ab: P('INNERTUBE_CONTEXT_HL', void 0),
        zb: P('INNERTUBE_CONTEXT_GL', void 0),
        Bb: P('INNERTUBE_HOST_OVERRIDE', void 0) || '',
        Db: !!P('INNERTUBE_USE_THIRD_PARTY_AUTH', !1),
        Cb: !!P('INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT', !1),
        appInstallData: P('SERIALIZED_CLIENT_CONFIG_DATA', void 0)
  }
}
function xj(a) {
  var b = {
    client: {
      hl: a.Ab,
      gl: a.zb,
      clientName: a.yb,
      clientVersion: a.innertubeContextClientVersion,
      configInfo: a.xb
    }
  },
      c = window.devicePixelRatio;
  c && 1 != c && (b.client.screenDensityFloat = String(c));
  c = P('EXPERIMENTS_TOKEN', '');
  '' !== c && (b.client.experimentsToken = c);
  c = fj();
  0 < c.length && (b.request = {internalExperimentFlags: c});
  a.appInstallData && X('web_log_app_install_experiments') &&
      (b.client.configInfo = b.client.configInfo || {},
       b.client.configInfo.appInstallData = a.appInstallData);
  P('DELEGATED_SESSION_ID') && !X('pageid_as_header_web') &&
      (b.user = {onBehalfOfUser: P('DELEGATED_SESSION_ID')});
  b.client = Object.assign(b.client, Yj());
  return b
}
function ak(a, b, c) {
  c = void 0 === c ? {} : c;
  var d = {'X-Goog-Visitor-Id': c.visitorData || P('VISITOR_DATA', '')};
  if (b && b.includes('www.youtube-nocookie.com')) return d;
  (b = c.lc || P('AUTHORIZATION')) ||
      (a ? b = 'Bearer ' + x('gapi.auth.getToken')().jc : b = Ie([]));
  b &&
      (d.Authorization = b, d['X-Goog-AuthUser'] = P('SESSION_INDEX', 0),
       X('pageid_as_header_web') &&
           (d['X-Goog-PageId'] = P('DELEGATED_SESSION_ID')));
  return d
};
function bk(a) {
  a = Object.assign({}, a);
  delete a.Authorization;
  var b = Ie();
  if (b) {
    var c = new bg;
    c.update(P('INNERTUBE_API_KEY', void 0));
    c.update(b);
    b = c.digest();
    c = 3;
    Ha(b);
    void 0 === c && (c = 0);
    if (!Vc) {
      Vc = {};
      for (
          var d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
                      .split(''),
              e = ['+/=', '+/', '-_=', '-_.', '-_'], f = 0;
          5 > f; f++) {
        var g = d.concat(e[f].split(''));
        Uc[f] = g;
        for (var h = 0; h < g.length; h++) {
          var k = g[h];
          void 0 === Vc[k] && (Vc[k] = h)
        }
      }
    }
    c = Uc[c];
    d = [];
    for (e = 0; e < b.length; e += 3) {
      var l = b[e], n = (f = e + 1 < b.length) ? b[e + 1] : 0;
      k = (g = e + 2 < b.length) ? b[e + 2] : 0;
      h = l >> 2;
      l = (l & 3) << 4 | n >> 4;
      n = (n & 15) << 2 | k >> 6;
      k &= 63;
      g || (k = 64, f || (n = 64));
      d.push(c[h], c[l], c[n] || '', c[k] || '')
    }
    a.hash = d.join('')
  }
  return a
}
function ck(a) {
  a = bk(a);
  var b = new bg;
  b.update(JSON.stringify(a, Object.keys(a).sort()));
  a = b.digest();
  b = '';
  for (var c = 0; c < a.length; c++)
    b += '0123456789ABCDEF'.charAt(Math.floor(a[c] / 16)) +
        '0123456789ABCDEF'.charAt(a[c] % 16);
  return b
};
function dk(a, b, c, d, e) {
  bd.set('yt-dev.' + a, b, {
    Ja: c,
    path: '/',
    domain: void 0 === d ? 'google.com' : d,
    secure: void 0 === e ? !1 : e
  })
}
function ek(a) {
  return bd.get('yt-dev.' + a, void 0)
};
function fk() {
  var a = new Xg;
  (a = a.isAvailable() ? new ch(a, 'yt.innertube') : null) ||
      (a = new Yg('yt.innertube'), a = a.isAvailable() ? a : null);
  this.f = a ? new Tg(a) : null;
  this.g = document.domain || window.location.hostname
}
fk.prototype.set = function(a, b, c, d) {
  c = c || 31104E3;
  this.remove(a);
  if (this.f) try {
      this.f.set(a, b, Qa() + 1E3 * c);
      return
    } catch (f) {
    }
  var e = '';
  if (d) try {
      e = escape(xg(b))
    } catch (f) {
      return
    }
  else
    e = escape(b);
  dk(a, e, c, this.g)
};
fk.prototype.get = function(a, b) {
  var c = void 0, d = !this.f;
  if (!d) try {
      c = this.f.get(a)
    } catch (e) {
      d = !0
    }
  if (d && (c = ek(a)) && (c = unescape(c), b)) try {
      c = JSON.parse(c)
    } catch (e) {
      this.remove(a), c = void 0
    }
  return c
};
fk.prototype.remove = function(a) {
  this.f && this.f.remove(a);
  var b = this.g;
  bd.remove('yt-dev.' + a, '/', void 0 === b ? 'google.com' : b)
};
var gk;
function hk() {
  gk || (gk = new fk);
  return gk
}
function ik(a, b, c, d) {
  if (d) return null;
  d = hk().get('nextId', !0) || 1;
  var e = hk().get('requests', !0) || {};
  e[d] =
      {method: a, request: b, authState: bk(c), requestTime: Math.round(hj())};
  hk().set('nextId', d + 1, 86400, !0);
  hk().set('requests', e, 86400, !0);
  return d
}
function jk(a) {
  var b = hk().get('requests', !0) || {};
  delete b[a];
  hk().set('requests', b, 86400, !0)
}
function kk(a) {
  var b = hk().get('requests', !0);
  if (b) {
    for (var c in b) {
      var d = b[c];
      if (!(6E4 > Math.round(hj()) - d.requestTime)) {
        var e = d.authState, f = bk(ak(!1));
        nb(e, f) &&
            (e = d.request,
             'requestTimeMs' in e && (e.requestTimeMs = Math.round(hj())),
             Bj(a, d.method, e, {}));
        delete b[c]
      }
    }
    hk().set('requests', b, 86400, !0)
  }
};
function lk() {}
function mk() {
  var a = {}, b = Ie([]);
  b &&
      (a.Authorization = b, a['X-Goog-AuthUser'] = P('SESSION_INDEX', 0),
       'INNERTUBE_HOST_OVERRIDE' in dh ||
           (a['X-Origin'] = window.location.origin),
       X('pageid_as_header_web') && 'DELEGATED_SESSION_ID' in dh &&
           (a['X-Goog-PageId'] = P('DELEGATED_SESSION_ID')));
  return a
};
var nk = {identityType: 'UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN'};
var ok = Pc || Qc;
function pk(a) {
  var b = Lb;
  return b ? 0 <= b.toLowerCase().indexOf(a) : !1
};
function qk(a) {
  if (!a) throw Error();
  throw a;
}
function rk(a) {
  return a
}
function Y(a) {
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
Y.all = function(a) {
  return new Y(function(b, c) {
    var d = [], e = a.length;
    0 === e && b(d);
    for (var f = {S: 0}; f.S < a.length; f = {S: f.S}, ++f.S)
      sk(Y.resolve(a[f.S]).then(function(g) {
        return function(h) {
          d[g.S] = h;
          e--;
          0 === e && b(d)
        }
      }(f)),
         function(g) {
           c(g)
         })
  })
};
Y.resolve = function(a) {
  return new Y(function(b, c) {
    a instanceof Y ? a.then(b, c) : b(a)
  })
};
Y.reject = function(a) {
  return new Y(function(b, c) {
    c(a)
  })
};
Y.prototype.then = function(a, b) {
  var c = this, d = null !== a && void 0 !== a ? a : rk,
      e = null !== b && void 0 !== b ? b : qk;
  return new Y(function(f, g) {
    'PENDING' === c.state.status       ? (c.f.push(function() {
      tk(c, c, d, f, g)
    }),
                                    c.onRejected.push(function() {
                                      uk(c, c, e, f, g)
                                    })) :
        'FULFILLED' === c.state.status ? tk(c, c, d, f, g) :
                                         'REJECTED' === c.state.status &&
            uk(c, c, e, f, g)
  })
};
function sk(a, b) {
  a.then(void 0, b)
}
function tk(a, b, c, d, e) {
  try {
    if ('FULFILLED' !== a.state.status)
      throw Error('calling handleResolve before the promise is fulfilled.');
    var f = c(a.state.value);
    f instanceof Y ? vk(a, b, f, d, e) : d(f)
  } catch (g) {
    e(g)
  }
}
function uk(a, b, c, d, e) {
  try {
    if ('REJECTED' !== a.state.status)
      throw Error('calling handleReject before the promise is rejected.');
    var f = c(a.state.reason);
    f instanceof Y ? vk(a, b, f, d, e) : d(f)
  } catch (g) {
    e(g)
  }
}
function vk(a, b, c, d, e) {
  b === c ? e(new TypeError('Circular promise chain detected.')) :
            c.then(
                function(f) {
                  f instanceof Y ? vk(a, b, f, d, e) : d(f)
                },
                function(f) {
                  e(f)
                })
};
function wk() {
  var a = Error.call(this, 'Transaction was aborted');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, wk.prototype)
}
pa(wk, Error);
function xk() {
  var a = Error.call(this, 'IndexedDB is not supported.');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, xk.prototype)
}
pa(xk, Error);
function yk() {
  var a = Error.call(
      this, 'The current transaction exceeded its quota limitations.');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, yk.prototype)
}
pa(yk, Error);
function zk() {
  var a = Error.call(
      this,
      'The current transaction may have failed because of exceeding quota limitations.');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, zk.prototype)
}
pa(zk, Error);
function Ak(a) {
  return a instanceof DOMException ?
      'VersionError' === a.name :
      'DOMError' in self && a instanceof DOMError ?
      'VersionError' === a.name :
      a instanceof Object && 'message' in a ?
      'An attempt was made to open a database using a lower version than the existing version.' ===
          a.message :
      !1
}
function Bk(a, b) {
  return new Y(function(c, d) {
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
function Ck(a, b, c) {
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
function Dk(a) {
  return new Gf(function(b, c) {
    Ck(a, b, c)
  })
}
function Ek(a) {
  return new Y(function(b, c) {
    Ck(a, b, c)
  })
};
function Fk(a) {
  this.f = a
}
m = Fk.prototype;
m.add = function(a, b, c) {
  return Gk(this, [a], 'readwrite', function(d) {
    return Hk(d, a).add(b, c)
  })
};
m.clear = function(a) {
  return Gk(this, [a], 'readwrite', function(b) {
    return Hk(b, a).clear()
  })
};
m.close = function() {
  this.f.close()
};
m.count = function(a, b) {
  return Gk(this, [a], 'readonly', function(c) {
    return Hk(c, a).count(b)
  })
};
function Ik(a, b, c) {
  a = a.f.createObjectStore(b, c);
  return new Jk(a)
}
m['delete'] = function(a, b) {
  return Gk(this, [a], 'readwrite', function(c) {
    return Hk(c, a)['delete'](b)
  })
};
m.get = function(a, b) {
  return Gk(this, [a], 'readwrite', function(c) {
    return Hk(c, a).get(b)
  })
};
function Kk(a, b) {
  return Gk(a, ['databases'], 'readwrite', function(c) {
    return Lk(Hk(c, 'databases'), b, void 0)
  })
}
function Gk(a, b, c, d) {
  c = void 0 === c ? 'readonly' : c;
  return new Gf(function(e, f) {
    var g = a.f.transaction(b, c), h = new Mk(g, b);
    sk(d(h).then(function(k) {
      Qf(Nk(h).then(function() {
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
function Jk(a) {
  this.f = a
}
m = Jk.prototype;
m.add = function(a, b) {
  var c = b ? this.f.add(a, b) : this.f.add(a);
  return Ek(c)
};
m.clear = function() {
  return Ek(this.f.clear()).then(function() {})
};
m.count = function(a) {
  a = a ? this.f.count(a) : this.f.count();
  return Ek(a)
};
m['delete'] = function(a) {
  return Ek(this.f['delete'](a))
};
m.get = function(a) {
  return Ek(this.f.get(a))
};
m.index = function(a) {
  return new Ok(this.f.index(a))
};
m.getName = function() {
  return this.f.name
};
function Lk(a, b, c) {
  a = c ? a.f.put(b, c) : a.f.put(b);
  return Ek(a)
}
function Mk(a) {
  var b = this;
  this.f = a;
  this.g = new Map;
  this.aborted = !1;
  this.done = new Gf(function(c, d) {
    b.f.addEventListener('complete', function() {
      c()
    });
    b.f.addEventListener('error', function(e) {
      e.currentTarget === e.target && d(b.f.error)
    });
    b.f.addEventListener('abort', function() {
      var e = b.f.error;
      e ? ('QuotaExceededError' === e.name ?
               jh(new yk) :
               'UnknownError' === e.name && jh(new zk),
           d(e)) :
          d(new wk)
    })
  })
}
Mk.prototype.abort = function() {
  this.f.abort();
  this.aborted = !0
};
function Nk(a) {
  var b = a.f;
  b.commit && !a.aborted && b.commit();
  return a.done
}
function Hk(a, b) {
  var c = a.f.objectStore(b), d = a.g.get(c);
  d || (d = new Jk(c), a.g.set(c, d));
  return d
}
function Ok(a) {
  this.f = a
}
Ok.prototype.count = function(a) {
  a = a ? this.f.count(a) : this.f.count();
  return Ek(a)
};
Ok.prototype.get = function(a) {
  return Ek(this.f.get(a))
};
function Pk(a, b, c) {
  a = a.f.openCursor(
      void 0 === b.query ? null : b.query,
      void 0 === b.direction ? 'next' : b.direction);
  return Qk(a).then(function(d) {
    return Bk(d, c)
  })
}
function Rk(a, b) {
  this.request = a;
  this.f = b
}
function Qk(a) {
  return Ek(a).then(function(b) {
    return null === b ? null : new Rk(a, b)
  })
}
Rk.prototype['delete'] = function() {
  return Ek(this.f['delete']()).then(function() {})
};
Rk.prototype.update = function(a) {
  return Ek(this.f.update(a))
};
function Sk(a, b, c) {
  function d() {
    n || (n = new Fk(f.result));
    return n
  }
  var e = Mk;
  var f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
  var g = c.blocked, h = c.blocking, k = c.f, l = c.upgrade, n;
  l && f.addEventListener('upgradeneeded', function(p) {
    if (null === p.newVersion)
      throw Error('Invariant: newVersion on IDbVersionChangeEvent is null');
    if (null === f.transaction)
      throw Error('Invariant: transaction on IDbOpenDbRequest is null');
    var q = d(), t = new e(f.transaction);
    l(q, p.oldVersion, p.newVersion, t)
  });
  g && f.addEventListener('blocked', function() {
    g()
  });
  return Dk(f).then(function(p) {
    h && p.addEventListener('versionchange', function() {
      h(d())
    });
    k && p.addEventListener('close', function() {
      k()
    });
    return d()
  })
}
function Tk(a, b, c) {
  c = void 0 === c ? {} : c;
  return Sk(a, b, c)
};
var Uk, Vk, Wk = ['getAll', 'getAllKeys', 'getKey', 'openKeyCursor'],
            Xk = ['getAll', 'getAllKeys', 'getKey', 'openKeyCursor'];
function Yk() {
  return lc(this, function b() {
    var c;
    return za(b, function(d) {
      switch (d.f) {
        case 1:
          var e;
          if (e = ok)
            e = /WebKit\/([0-9]+)/.exec(Lb),
            e = !!(e && 600 <= parseInt(e[1], 10));
          e &&
              (e = /WebKit\/([0-9]+)/.exec(Lb),
               e = !(e && 602 <= parseInt(e[1], 10)));
          if (e && !X('ytidb_allow_on_ios_safari_v8_and_v9'))
            return d['return'](!1);
          try {
            if (!self.indexedDB) return d['return'](!1)
          } catch (f) {
            return d['return'](!1)
          }
          d.A = 2;
          d.o = 3;
          return ta(d, Tk('yt-idb-test-do-not-use'), 5);
        case 5:
          c = d.g;
        case 3:
          d.J = [d.i];
          d.A = 0;
          d.o = 0;
          if (c) try {
              c.close()
            } catch (f) {
            }
          e = d.J.splice(0)[0];
          (e = d.i = d.i || e) ? e.Ga        ? d.f = d.A || d.o :
                  void 0 != e.O && d.o < e.O ? (d.f = e.O, d.i = null) :
                                               d.f = d.o :
                                 d.f = 4;
          break;
        case 2:
          return d.A = 0, d.i = null, d['return'](!1);
        case 4:
          return d['return'](!0)
      }
    })
  })
}
function Zk() {
  return void 0 !== Uk ? Lf(Uk) : new Gf(function(a) {
    Yk().then(function(b) {
      Uk = b;
      a(b)
    })
  })
}
function $k() {
  return void 0 !== Vk ? Lf(Vk) :
                         Zk().then(function(a) {
                               if (!a) return !1;
                               var b = u(Wk);
                               for (a = b.next(); !a.done; a = b.next())
                                 if (!IDBObjectStore.prototype[a.value])
                                   return !1;
                               b = u(Xk);
                               for (a = b.next(); !a.done; a = b.next())
                                 if (!IDBIndex.prototype[a.value]) return !1;
                               return IDBObjectStore.prototype.getKey ? !0 : !1
                             })
                             .then(function(a) {
                               return Vk = a
                             })
};
var al;
function bl() {
  function a(b) {
    b.close();
    al = void 0
  }
  al ||
      (al =
           Qf(Tk('YtIdbMeta', 1, {
                blocking: a,
                upgrade: function(b, c) {
                  1 > c && Ik(b, 'databases', {keyPath: 'actualName'})
                }
              }),
              function(b) {
                return Ak(b) ? Tk('YtIdbMeta', void 0, {blocking: a}) : Mf(b)
              }));
  return al
}
function cl(a) {
  return bl().then(function(b) {
    return b.get('databases', a.actualName).then(function(c) {
      if (c ? a.actualName !== c.actualName || a.publicName !== c.publicName ||
                  a.userIdentifier !== c.userIdentifier ||
                  a.signedIn !== c.signedIn :
              1)
        return Kk(b, a)
    })
  })
}
function dl(a) {
  return bl().then(function(b) {
    return b['delete']('databases', a)
  })
};
function el(a) {
  try {
    var b = {
      actualName: 'LogsDataBase',
      publicName: 'LogsDataBase',
      userIdentifier: void 0,
      signedIn: !1
    }
  } catch (c) {
    return Mf(c)
  }
  return Qf(
      cl(b).then(function() {
        return a(b)
      }),
      function(c) {
        return Qf(dl(b.actualName), function() {}).then(function() {
          return Mf(c)
        })
      })
}
function fl() {
  return Zk().then(function(a) {
    if (!a) throw new xk;
  })
}
function gl(a, b) {
  b = void 0 === b ? {} : b;
  return fl().then(function() {
    return el(function(c) {
      return Tk(c.actualName, a, b)
    })
  })
};
function hl() {
  Y.call(this, function() {});
  throw Error(
      'Not allowed to instantiate the thennable outside of the core library.');
}
pa(hl, Y);
hl.reject = Y.reject;
hl.resolve = Y.resolve;
hl.all = Y.all;
var il;
function jl() {
  return lc(this, function b() {
    return za(b, function(c) {
      if (!il) try {
          il = gl(1, {
            upgrade: function(d, e) {
              1 > e &&
                  (Ik(d, 'LogsRequestsStore',
                      {keyPath: 'id', autoIncrement: !0})
                       .f.createIndex(
                           'newRequest', ['status', 'authHash', 'timestamp'],
                           {unique: !1}),
                   Ik(d, 'sapisid'))
            }
          })
        } catch (d) {
          if (!Ak(d)) return ih(d), c['return'](Promise.reject(d));
          il = gl()
        }
      return c['return'](il)
    })
  })
}
function kl(a) {
  return lc(this, function c() {
    var d, e, f;
    return za(c, function(g) {
      if (1 == g.f) return ta(g, ll(), 2);
      if (3 != g.f) return d = g.g, ta(g, jl(), 3);
      e = g.g;
      f = Object.assign(
          Object.assign({}, a),
          {options: JSON.parse(JSON.stringify(a.options)), authHash: d});
      return g['return'](e.add('LogsRequestsStore', f))
    })
  })
}
function ml() {
  return lc(this, function b() {
    var c, d, e, f, g, h;
    return za(b, function(k) {
      switch (k.f) {
        case 1:
          return ta(k, ll(), 2);
        case 2:
          return c = k.g, d = ['NEW', c, 0], e = ['NEW', c, hj()],
                 f = IDBKeyRange.bound(d, e), ta(k, jl(), 3);
        case 3:
          return g = k.g, h = void 0,
                 ta(k, Gk(g, ['LogsRequestsStore'], 'readwrite', function(l) {
                      return Pk(
                          Hk(l, 'LogsRequestsStore').index('newRequest'),
                          {query: f, direction: 'prev'}, function(n) {
                            n.f.value &&
                                (h = n.f.value, h.status = 'QUEUED',
                                 n.update(h))
                          })
                    }), 4);
        case 4:
          return k['return'](h)
      }
    })
  })
}
function nl(a) {
  return lc(this, function c() {
    var d;
    return za(c, function(e) {
      if (1 == e.f) return ta(e, jl(), 2);
      d = e.g;
      return e['return'](Gk(d, ['LogsRequestsStore'], 'readwrite', function(f) {
        var g = Hk(f, 'LogsRequestsStore');
        return g.get(a).then(function(h) {
          if (h)
            return h.status = 'QUEUED', Lk(g, h).then(function() {
              return h
            })
        })
      }))
    })
  })
}
function ol(a) {
  return lc(this, function c() {
    var d;
    return za(c, function(e) {
      if (1 == e.f) return ta(e, jl(), 2);
      d = e.g;
      return e['return'](Gk(d, ['LogsRequestsStore'], 'readwrite', function(f) {
        var g = Hk(f, 'LogsRequestsStore');
        return g.get(a).then(function(h) {
          return h ?
              (h.status = 'NEW', h.sendCount += 1, Lk(g, h).then(function() {
                return h
              })) :
              hl.resolve(void 0)
        })
      }))
    })
  })
}
function pl(a) {
  return lc(this, function c() {
    var d;
    return za(c, function(e) {
      if (1 == e.f) return ta(e, jl(), 2);
      d = e.g;
      return e['return'](d['delete']('LogsRequestsStore', a))
    })
  })
}
function ll() {
  return lc(this, function b() {
    var c;
    return za(b, function(d) {
      if (1 == d.f) {
        lk.f || (lk.f = new lk);
        var e = Lf(mk());
        return ta(d, e, 2)
      }
      c = d.g;
      return d['return'](ck(c))
    })
  })
};
var ql = ej('network_polling_interval', 3E4);
function rl() {
  this.l = 0;
  this.f = window.navigator.onLine;
  sl(this);
  tl(this)
}
function ul() {
  rl.f || (rl.f = new rl);
  return rl.f
}
function vl(a) {
  var b = wl, c = xl;
  (new Gf(function(d) {
    a.g = d
  })).then(function() {
    b();
    c && (a.i = c)
  });
  yl(a)
}
function tl(a) {
  window.addEventListener('online', function() {
    a.f = !0;
    a.g && a.g()
  })
}
function sl(a) {
  window.addEventListener('offline', function() {
    a.f = !1;
    a.i && a.i()
  })
}
function yl(a) {
  a.l || (zl(a), window.navigator.onLine && a.g && a.g())
}
function zl(a) {
  a.l = Bh(function() {
    window.navigator.onLine ?
        (!1 === a.f && ih(Error('NetworkStatusManager missed online event.')),
         a.f = !0, a.g && a.g()) :
        (!0 === a.f && ih(Error('NetworkStatusManager missed offline event.')),
         a.f = !1, a.i && a.i());
    zl(a)
  }, ql)
};
var Al = ej('networkless_throttle_timeout') || 100,
    Bl = ej('networkless_retry_attempts') || 1, Cl = 0;
function Dl(a, b) {
  b = void 0 === b ? {} : b;
  El().then(function(c) {
    var d = ul().f;
    if (!c || X('networkless_bypass_write') ||
        d && X('vss_networkless_bypass_write'))
      Sj(a, b);
    else {
      var e =
          {url: a, options: b, timestamp: hj(), status: 'NEW', sendCount: 0};
      kl(e).then(function(f) {
        e.id = f;
        f = ul();
        f.f && !X('networkless_always_offline') ? Fl(e) : vl(f)
      })['catch'](function(f) {
        Fl(e);
        ih(f)
      })
    }
  })
}
function wl() {
  var a = this;
  Cl || (Cl = Dh(function() {
           return lc(a, function c() {
             var d;
             return za(c, function(e) {
               if (1 == e.f) return ta(e, ml(), 2);
               if (3 != e.f)
                 return d = e.g, d ? ta(e, Fl(d), 3) : (xl(), e['return']());
               Cl = 0;
               wl();
               e.f = 0
             })
           })
         }, Al))
}
function xl() {
  var a = Cl;
  if (!isNaN(a)) {
    var b = x('yt.scheduler.instance.cancelJob');
    b ? b(a) : lh(a)
  }
  Cl = 0
}
function Fl(a) {
  return lc(this, function c() {
    var d;
    return za(c, function(e) {
      switch (e.f) {
        case 1:
          if (!a.id) {
            e.O(2);
            break
          }
          return ta(e, nl(a.id), 3);
        case 3:
          (d = e.g) ? a = d :
                      jh(Error('The request cannot be found in the database.'));
        case 2:
          var f = a.timestamp;
          if (!(2592E6 <= hj() - f)) {
            e.O(4);
            break
          }
          jh(Error(
              'Networkless Logging: Stored logs request expired age limit'));
          if (!a.id) {
            e.O(5);
            break
          }
          return ta(e, pl(a.id), 5);
        case 5:
          return e['return']();
        case 4:
          f = a = Gl(a);
          var g, h;
          if (null ===
                          (h = null ===
                                       (g = null === f || void 0 === f ?
                                            void 0 :
                                            f.options) ||
                                   void 0 === g ?
                               void 0 :
                               g.D) ||
                      void 0 === h ?
                  0 :
                  h.requestTimeMs)
            f.options.D.requestTimeMs = Math.round(hj());
          (a = f) && Sj(a.url, a.options);
          e.f = 0
      }
    })
  })
}
function Gl(a) {
  var b = this, c = a.options.onError ? a.options.onError : function() {};
  a.options.onError = function(e, f) {
    return lc(b, function h() {
      return za(h, function(k) {
        if (1 == k.f)
          return a && a.id ?
              a.sendCount < Bl ? ta(k, ol(a.id), 6) : ta(k, pl(a.id), 2) :
              k.O(2);
        2 != k.f && vl(ul());
        c(e, f);
        k.f = 0
      })
    })
  };
  var d = a.options.onSuccess ? a.options.onSuccess : function() {};
  a.options.onSuccess = function(e, f) {
    return lc(b, function h() {
      return za(h, function(k) {
        if (1 == k.f) return a && a.id ? ta(k, pl(a.id), 2) : k.O(2);
        d(e, f);
        k.f = 0
      })
    })
  };
  return a
}
function El() {
  return lc(this, function b() {
    return za(b, function(c) {
      return X('networkless_logging') ?
          (2 === ej('networkless_ytidb_version') && $k().then(function(d) {
            return d
          }),
           c['return'](Zk())) :
          c['return'](!1)
    })
  })
};
function Hl(a, b) {
  for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
  d = Error.call(this, a);
  this.message = d.message;
  'stack' in d && (this.stack = d.stack);
  this.args = [].concat(c instanceof Array ? c : fa(u(c)))
}
pa(Hl, Error);
function Il(a) {
  var b = this;
  this.f = null;
  a ? this.f = a : Zj() && (this.f = yj());
  Bh(function() {
    kk(b)
  }, 5E3)
}
Il.prototype.isReady = function() {
  !this.f && Zj() && (this.f = yj());
  return !!this.f
};
function Bj(a, b, c, d) {
  !P('VISITOR_DATA') && 'visitor_id' !== b && .01 > Math.random() &&
      jh(new Hl(
          'Missing VISITOR_DATA when sending innertube request.', b, c, d));
  if (!a.isReady()) {
    var e = new Hl('innertube xhrclient not ready', b, c, d);
    ih(e);
    e.sampleWeight = 0;
    throw e;
  }
  var f = {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    D: c,
    Va: 'JSON',
    ha: function() {
      d.ha()
    },
    Sa: d.ha,
    onSuccess: function(p, q) {
      if (d.onSuccess) d.onSuccess(q)
    },
    Ra: function(p) {
      if (d.onSuccess) d.onSuccess(p)
    },
    onError: function(p, q) {
      if (d.onError) d.onError(q)
    },
    uc: function(p) {
      if (d.onError) d.onError(p)
    },
    timeout: d.timeout,
    withCredentials: !0
  },
      g = '';
  (e = a.f.Bb) && (g = e);
  var h = a.f.Db || !1, k = ak(h, g, d);
  Object.assign(f.headers, k);
  f.headers.Authorization && !g &&
      (f.headers['x-origin'] = window.location.origin);
  e = '/youtubei/' + a.f.innertubeApiVersion + '/' + b;
  var l = {alt: 'json'};
  a.f.Cb && f.headers.Authorization || (l.key = a.f.innertubeApiKey);
  var n = oi('' + g + e, l || {}, !0);
  El().then(function(p) {
    if (d.retry && X('retry_web_logging_batches') &&
        'www.youtube-nocookie.com' != g) {
      if (X('networkless_gel') && !p || !X('networkless_gel'))
        var q = ik(b, c, k, h);
      if (q) {
        var t = f.onSuccess, w = f.Ra;
        f.onSuccess = function(F, I) {
          jk(q);
          t(F, I)
        };
        c.Ra = function(F, I) {
          jk(q);
          w(F, I)
        }
      }
    }
    try {
      X('use_fetch_for_op_xhr') ?
          Pj(n, f) :
          X('networkless_gel') && d.retry ?
          (f.method = 'POST', Dl(n, f)) :
          (f.method = 'POST', f.D || (f.D = {}), Sj(n, f))
    } catch (F) {
      if ('InvalidAccessError' == F.name)
        q && (jk(q), q = 0),
            jh(Error('An extension is blocking network request.'));
      else
        throw F;
    }
    q && Bh(function() {
      kk(a)
    }, 5E3)
  })
};
var Jl = Qa().toString();
function Kl() {
  a: {
    if (window.crypto && window.crypto.getRandomValues) try {
      var a = Array(16), b = new Uint8Array(16);
      window.crypto.getRandomValues(b);
      for (var c = 0; c < a.length; c++) a[c] = b[c];
      var d = a;
      break a
    } catch (e) {} d = Array(16);
    for (a = 0; 16 > a; a++) {
      b = Qa();
      for (c = 0; c < b % 23; c++) d[a] = Math.random();
      d[a] = Math.floor(256 * Math.random())
    } if (Jl) for (a = 1, b = 0; b < Jl.length; b++) d[a % 16] =
        d[a % 16] ^ d[(a - 1) % 16] / 4 ^ Jl.charCodeAt(b),
    a++
  } a = [];
  for (b = 0; b < d.length; b++)
    a.push('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
               .charAt(d[b] & 63));
  return a.join('')
};
var Ll = v.ytLoggingDocDocumentNonce_ || Kl();
z('ytLoggingDocDocumentNonce_', Ll);
function Ml(a) {
  a = void 0 === a ? 0 : a;
  return 0 == a ? 'client-screen-nonce' : 'client-screen-nonce.' + a
}
function Nl(a) {
  a = void 0 === a ? 0 : a;
  return 0 == a ? 'ROOT_VE_TYPE' : 'ROOT_VE_TYPE.' + a
}
z('yt_logging_screen.getRootVeType', function(a) {
  return P(Nl(void 0 === a ? 0 : a), void 0)
});
function Ol() {
  var a = P('csn-to-ctt-auth-info');
  a || (a = {}, eh('csn-to-ctt-auth-info', a));
  return a
}
function Pl(a) {
  a = void 0 === a ? 0 : a;
  var b = P(Ml(a));
  if (!b && !P('USE_CSN_FALLBACK', !0)) return null;
  b || 0 != a ||
      (X('kevlar_client_side_screens') || X('c3_client_side_screens') ?
           b = 'UNDEFINED_CSN' :
           b = P('EVENT_ID'));
  return b ? b : null
}
z('yt_logging_screen.getCurrentCsn', Pl);
function Ql(a, b, c) {
  var d = Ol();
  (c = Pl(c)) && delete d[c];
  b && (d[a] = b)
}
z('yt_logging_screen.getCttAuthInfo', function(a) {
  return Ol()[a]
});
z('yt_logging_screen.setCurrentScreen', function(a, b, c, d) {
  c = void 0 === c ? 0 : c;
  if (a !== P(Ml(c)) || b !== P(Nl(c)))
    if (Ql(a, d, c), eh(Ml(c), a), eh(Nl(c), b),
        0 == c || X('web_screen_associated_all_layers'))
      b =
          function() {
        setTimeout(function() {
          a &&
              Dj('foregroundHeartbeatScreenAssociated',
                 {clientDocumentNonce: Ll, clientScreenNonce: a}, Il)
        }, 0)
      },
      'requestAnimationFrame' in window ? window.requestAnimationFrame(b) : b()
});
function Rl() {
  gi.call(this, 'button');
  this.f = null;
  this.i = [];
  this.g = {}
}
A(Rl, gi);
Fa(Rl);
m = Rl.prototype;
m.register = function() {
  V(this, 'click', this.bb);
  V(this, 'keydown', this.Ha);
  V(this, 'keypress', this.Ia);
  hi(this, 'page-scroll', this.ub)
};
m.unregister = function() {
  W(this, 'click', this.bb);
  W(this, 'keydown', this.Ha);
  W(this, 'keypress', this.Ia);
  Sl(this);
  this.g = {};
  Rl.G.unregister.call(this)
};
m.bb = function(a) {
  a && !a.disabled && (this.toggle(a), this.click(a))
};
m.Ha = function(a, b, c) {
  if (!(c.altKey || c.ctrlKey || c.shiftKey || c.metaKey) &&
      (b = Tl(this, a))) {
    var d = function(g) {
      var h = '';
      g.tagName && (h = g.tagName.toLowerCase());
      return 'ul' == h || 'table' == h
    }, e;
    d(b) ? e = b : e = Bd(b, d);
    if (e) {
      e = e.tagName.toLowerCase();
      if ('ul' == e)
        var f = this.Ib;
      else
        'table' == e && (f = this.Hb);
      f && Ul(this, a, b, c, y(f, this))
    }
  }
};
m.ub = function() {
  var a = this.g, b = 0;
  for (d in a) b++;
  if (0 != b)
    for (var c in a) {
      b = a[c];
      var d = J(b.activeButtonNode || b.parentNode, U(this));
      if (void 0 == d || void 0 == b) break;
      Vl(this, d, b, !0)
    }
};
function Ul(a, b, c, d, e) {
  var f = Ri(c), g = 9 == d.keyCode;
  if (g || 32 == d.keyCode || 13 == d.keyCode)
    if (d = Wl(a, c)) {
      if (void 0 !== d.firstElementChild)
        b = d.firstElementChild;
      else
        for (b = d.firstChild; b && 1 != b.nodeType;) b = b.nextSibling;
      if ('a' == b.tagName.toLowerCase()) {
        var h = void 0 === h ? {} : h;
        var k = void 0 === k ? '' : k;
        var l = void 0 === l ? window : l;
        l = l.location;
        h = jc(b.href, h) + k;
        h instanceof Eb || h instanceof Eb ||
            (h = 'object' == typeof h && h.aa ? h.Y() : String(h),
             Jb.test(h) || (h = 'about:invalid#zClosurez'), h = new Eb(h, Fb));
        l.href = Gb(h)
      } else
        ai(b)
    } else
      g && Xl(a, b);
  else
    f ? 27 == d.keyCode ? (Wl(a, c), Xl(a, b)) : e(b, c, d) :
        (h = M(b, U(a, 'reverse')) ? 38 : 40,
         d.keyCode == h && (ai(b), d.preventDefault()))
}
m.Ia = function(a, b, c) {
  c.altKey || c.ctrlKey || c.shiftKey || c.metaKey ||
      (a = Tl(this, a), Ri(a) && c.preventDefault())
};
function Wl(a, b) {
  var c = U(a, 'menu-item-highlight'), d = H(c, b);
  d && qg(d, c);
  return d
}
function Yl(a, b, c) {
  N(c, U(a, 'menu-item-highlight'));
  var d = c.getAttribute('id');
  d || (d = U(a, 'item-id-' + Ja(c)), c.setAttribute('id', d));
  b.setAttribute('aria-activedescendant', d)
}
m.Hb = function(a, b, c) {
  var d = Wl(this, b);
  b = Qh('table', b);
  var e = Qh('tr', b);
  e = ld(document, 'td', null, e).length;
  b = ld(document, 'td', null, b);
  d = Zl(d, b, e, c);
  -1 != d && (Yl(this, a, b[d]), c.preventDefault())
};
m.Ib = function(a, b, c) {
  if (40 == c.keyCode || 38 == c.keyCode) {
    var d = Wl(this, b);
    b = Ya(ld(document, 'li', null, b), Ri);
    d = Zl(d, b, 1, c);
    Yl(this, a, b[d]);
    c.preventDefault()
  }
};
function Zl(a, b, c, d) {
  var e = b.length;
  a = Xa(b, a);
  if (-1 == a)
    if (38 == d.keyCode)
      a = e - c;
    else {
      if (37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode) a = 0
    }
  else
    39 == d.keyCode     ? (a % c == c - 1 && (a -= c), a += 1) :
        37 == d.keyCode ? (0 == a % c && (a += c), --a) :
        38 == d.keyCode ? (a < c && (a += e), a -= c) :
                          40 == d.keyCode && (a >= e - c && (a -= e), a += c);
  return a
}
function $l(a, b) {
  var c = b.iframeMask;
  c ||
      (c = ud(document, 'IFRAME'), c.src = 'javascript:""',
       og(c, U(a, 'menu-mask')), Ti(c), b.iframeMask = c);
  return c
}
function Vl(a, b, c, d) {
  var e = J(b, U(a, 'group')), f = !!a.j(b, 'button-menu-ignore-group');
  e = e && !f ? e : b;
  f = 9;
  var g = 8, h = me(b);
  if (M(b, U(a, 'reverse'))) {
    f = 8;
    g = 9;
    h = h.top + 'px';
    try {
      c.style.maxHeight = h
    } catch (n) {
    }
  }
  M(b, 'flip') && (M(b, U(a, 'reverse')) ? (f = 12, g = 13) : (f = 13, g = 12));
  var k;
  a.j(b, 'button-has-sibling-menu') ?
      k = ee(e) :
      a.j(b, 'button-menu-root-container') && (k = am(a, b));
  D && !Kc('8') && (k = null);
  if (k) {
    var l = me(k);
    l = new Ud(-l.top, l.left, l.top, -l.left)
  }
  k = new E(0, 1);
  M(b, U(a, 'center-menu')) &&
      (k.x -= Math.round((ke(c).width - ke(b).width) / 2));
  d && (k.y += qd(document).y);
  if (a = $l(a, b))
    b = ke(c), a.style.width = b.width + 'px', a.style.height = b.height + 'px',
    Ig(e, f, a, g, k, l, 197), d && Zd(a, 'position', 'fixed');
  Ig(e, f, c, g, k, l, 197)
}
function am(a, b) {
  if (a.j(b, 'button-menu-root-container')) {
    var c = a.j(b, 'button-menu-root-container');
    return J(b, c)
  }
  return document.body
}
m.eb = function(a) {
  if (a) {
    var b = Tl(this, a);
    if (b) {
      a.setAttribute('aria-pressed', 'true');
      a.setAttribute('aria-expanded', 'true');
      b.originalParentNode = b.parentNode;
      b.activeButtonNode = a;
      b.parentNode.removeChild(b);
      var c;
      this.j(a, 'button-has-sibling-menu') ? c = a.parentNode : c = am(this, a);
      c.appendChild(b);
      b.style.minWidth = a.offsetWidth - 2 + 'px';
      var d = $l(this, a);
      d && c.appendChild(d);
      (c = !!this.j(a, 'button-menu-fixed')) && (this.g[Nh(a).toString()] = b);
      Vl(this, a, b, c);
      uh('yt-uix-button-menu-before-show', a, b);
      Si(b);
      d && Si(d);
      this.V(a, 'button-menu-action', !0);
      N(a, U(this, 'active'));
      b = y(this.cb, this, a, !1);
      d = y(this.cb, this, a, !0);
      c = y(this.Sb, this, a, void 0);
      this.f && Tl(this, this.f) == Tl(this, a) || Sl(this);
      th('yt-uix-button-menu-show', a);
      bi(this.i);
      this.i = [
        T(document, 'click', d), T(document, 'contextmenu', b),
        T(window, 'resize', c)
      ];
      this.f = a
    }
  }
};
function Xl(a, b) {
  if (b) {
    var c = Tl(a, b);
    if (c) {
      a.f = null;
      b.setAttribute('aria-pressed', 'false');
      b.setAttribute('aria-expanded', 'false');
      b.removeAttribute('aria-activedescendant');
      Ti(c);
      a.V(b, 'button-menu-action', !1);
      var d = $l(a, b), e = Nh(c).toString();
      delete a.g[e];
      kh(function() {
        d && d.parentNode && (Ti(d), d.parentNode.removeChild(d));
        c.originalParentNode &&
            (c.parentNode.removeChild(c), c.originalParentNode.appendChild(c),
             c.originalParentNode = null, c.activeButtonNode = null)
      }, 1)
    }
    e = J(b, U(a, 'group'));
    var f = [U(a, 'active')];
    e && f.push(U(a, 'group-active'));
    rg(b, f);
    th('yt-uix-button-menu-hide', b);
    bi(a.i);
    a.i.length = 0
  }
}
m.Sb = function(a, b) {
  var c = Tl(this, a);
  if (c) {
    b && (b instanceof Sb ? Yb(c, b) : Ad(c, b));
    var d = !!this.j(a, 'button-menu-fixed');
    Vl(this, a, c, d)
  }
};
m.cb = function(a, b, c) {
  c = Zh(c);
  var d = J(c, U(this));
  if (d) {
    d = Tl(this, d);
    var e = Tl(this, a);
    if (d == e) return
  }
  d = J(c, U(this, 'menu'));
  e = d == Tl(this, a);
  var f = M(c, U(this, 'menu-item')), g = M(c, U(this, 'menu-close'));
  if (!d || e && (f || g))
    Xl(this, a),
        d && b && this.j(a, 'button-menu-indicate-selected') &&
        ((a = H(U(this, 'content'), a)) && Ad(a, Jd(c)), bm(this, d, c))
};
function bm(a, b, c) {
  var d = U(a, 'menu-item-selected');
  a = kd(d, b);
  B(a, function(e) {
    qg(e, d)
  });
  N(c.parentNode, d)
}
function Tl(a, b) {
  if (!b.widgetMenu) {
    var c = a.j(b, 'button-menu-id');
    c = c && G(c);
    var d = U(a, 'menu');
    c ? pg(c, [d, U(a, 'menu-external')]) : c = H(d, b);
    b.widgetMenu = c
  }
  return b.widgetMenu
}
m.isToggled = function(a) {
  return M(a, U(this, 'toggled'))
};
m.toggle = function(a) {
  if (this.j(a, 'button-toggle')) {
    var b = J(a, U(this, 'group')), c = U(this, 'toggled'), d = M(a, c);
    if (b && this.j(b, 'button-toggle-group')) {
      var e = this.j(b, 'button-toggle-group');
      b = kd(U(this), b);
      B(b, function(f) {
        f != a || 'optional' == e && d ?
            (qg(f, c), f.removeAttribute('aria-pressed')) :
            (N(a, c), f.setAttribute('aria-pressed', 'true'))
      })
    } else
      d ? a.removeAttribute('aria-pressed') :
          a.setAttribute('aria-pressed', 'true'),
          ug(a, c)
  }
};
m.click = function(a) {
  if (Tl(this, a)) {
    var b = Tl(this, a);
    if (b) {
      var c = J(b.activeButtonNode || b.parentNode, U(this));
      c && c != a ? (Xl(this, c), kh(y(this.eb, this, a), 1)) :
          Ri(b)   ? Xl(this, a) :
                    this.eb(a)
    }
    a.focus()
  }
  this.V(a, 'button-action')
};
function Sl(a) {
  a.f && Xl(a, a.f)
};
function cm(a) {
  gi.call(this, a);
  this.i = null
}
A(cm, gi);
m = cm.prototype;
m.K = function(a) {
  var b = gi.prototype.K.call(this, a);
  return b ? b : a
};
m.register = function() {
  hi(this, 'yt-uix-kbd-nav-move-out-done', this.hide)
};
m.dispose = function() {
  dm(this);
  cm.G.dispose.call(this)
};
m.j = function(a, b) {
  var c = cm.G.j.call(this, a, b);
  return c                                                            ? c :
      (c = cm.G.j.call(this, a, 'card-config')) && (c = x(c)) && c[b] ? c[b] :
                                                                        null
};
m.show = function(a) {
  var b = this.K(a);
  if (b) {
    N(b, U(this, 'active'));
    var c = em(this, a, b);
    if (c) {
      c.cardTargetNode = a;
      c.cardRootNode = b;
      fm(this, a, c);
      var d = U(this, 'card-visible'),
          e = this.j(a, 'card-delegate-show') && this.j(b, 'card-action');
      this.V(b, 'card-action', a);
      this.i = a;
      Ti(c);
      kh(y(function() {
           e || (Si(c), th('yt-uix-card-show', b, a, c));
           gm(c);
           N(c, d);
           th('yt-uix-kbd-nav-move-in-to', c)
         }, this), 10)
    }
  }
};
function em(a, b, c) {
  var d = c || b, e = U(a, 'card');
  c = hm(a, d);
  var f = G(U(a, 'card') + Nh(d));
  if (f)
    return a = H(U(a, 'card-body'), f), zd(a, c) || (wd(c), a.appendChild(c)),
           f;
  f = document.createElement('div');
  f.id = U(a, 'card') + Nh(d);
  og(f, e);
  (d = a.j(d, 'card-class')) && pg(f, d.split(/\s+/));
  d = document.createElement('div');
  d.className = U(a, 'card-border');
  b = a.j(b, 'orientation') || 'horizontal';
  e = document.createElement('div');
  e.className = 'yt-uix-card-border-arrow yt-uix-card-border-arrow-' + b;
  var g = document.createElement('div');
  g.className = U(a, 'card-body');
  a = document.createElement('div');
  a.className = 'yt-uix-card-body-arrow yt-uix-card-body-arrow-' + b;
  wd(c);
  g.appendChild(c);
  d.appendChild(a);
  d.appendChild(g);
  f.appendChild(e);
  f.appendChild(d);
  document.body.appendChild(f);
  return f
}
function fm(a, b, c) {
  var d = a.j(b, 'orientation') || 'horizontal';
  var e = H(U(a, 'anchor'), b) || b;
  var f = a.j(b, 'position'), g = !!a.j(b, 'force-position'),
      h = a.j(b, 'position-fixed');
  d = 'horizontal' == d;
  var k = 'bottomright' == f || 'bottomleft' == f,
      l = 'topright' == f || 'bottomright' == f;
  if (l && k) {
    var n = 13;
    var p = 8
  } else
    l && !k ? (n = 12, p = 9) : !l && k ? (n = 9, p = 12) : (n = 8, p = 13);
  var q = ne(document.body);
  f = ne(b);
  q != f && (n ^= 4);
  if (d) {
    f = b.offsetHeight / 2 - 12;
    var t = new E(-12, b.offsetHeight + 6)
  } else
    f = b.offsetWidth / 2 - 6, t = new E(b.offsetWidth + 6, -12);
  var w = ke(c);
  f = Math.min(f, (d ? w.height : w.width) - 24 - 6);
  6 > f &&
      (f = 6,
       d ? t.y += 12 - b.offsetHeight / 2 : t.x += 12 - b.offsetWidth / 2);
  w = null;
  g || (w = 10);
  b = U(a, 'card-flip');
  a = U(a, 'card-reverse');
  sg(c, b, l);
  sg(c, a, k);
  w = Ig(e, n, c, p, t, null, w);
  !g && w &&
      (w & 48 && (l = !l, n ^= 4, p ^= 4), w & 192 && (k = !k, n ^= 1, p ^= 1),
       sg(c, b, l), sg(c, a, k), Ig(e, n, c, p, t));
  h &&
      (e = parseInt(c.style.top, 10), g = qd(document).y,
       Zd(c, 'position', 'fixed'), Zd(c, 'top', e - g + 'px'));
  q &&
      (c.style.right = '', e = me(c),
       e.left = e.left || parseInt(c.style.left, 10), g = od(window),
       c.style.left = '', c.style.right = g.width - e.left - e.width + 'px');
  e = H('yt-uix-card-body-arrow', c);
  g = H('yt-uix-card-border-arrow', c);
  d = d ? k ? 'top' : 'bottom' : !q && l || q && !l ? 'left' : 'right';
  e.setAttribute('style', '');
  g.setAttribute('style', '');
  e.style[d] = f + 'px';
  g.style[d] = f + 'px';
  k = H('yt-uix-card-arrow', c);
  l = H('yt-uix-card-arrow-background', c);
  k && l &&
      (c = 'right' == d ? ke(c).width - f - 13 : f + 11, f = c / Math.sqrt(2),
       k.style.left = c + 'px', k.style.marginLeft = '1px',
       l.style.marginLeft = -f + 'px', l.style.marginTop = f + 'px')
}
m.hide = function(a) {
  if (a = this.K(a)) {
    var b = G(U(this, 'card') + Nh(a));
    b &&
        (qg(a, U(this, 'active')), qg(b, U(this, 'card-visible')), Ti(b),
         this.i = null, b.cardTargetNode = null, b.cardRootNode = null,
         b.cardMask && (wd(b.cardMask), b.cardMask = null))
  }
};
function dm(a) {
  a.i && a.hide(a.i)
}
m.Rb = function(a, b) {
  var c = this.K(a);
  if (c) {
    if (b) {
      var d = hm(this, c);
      if (!d) return;
      b instanceof Sb ? Yb(d, b) : Ad(d, b)
    }
    M(c, U(this, 'active')) &&
        (c = em(this, a, c), fm(this, a, c), Si(c), gm(c))
  }
};
m.isActive = function(a) {
  return (a = this.K(a)) ? M(a, U(this, 'active')) : !1
};
function hm(a, b) {
  var c = b.cardContentNode;
  if (!c) {
    var d = U(a, 'content'), e = U(a, 'card-content');
    (c = (c = a.j(b, 'card-id')) ? G(c) : H(d, b)) ||
        (c = document.createElement('div'));
    var f = c;
    qg(f, d);
    N(f, e);
    b.cardContentNode = c
  }
  return c
}
function gm(a) {
  var b = a.cardMask;
  b ||
      (b = ud(document, 'IFRAME'), b.src = 'javascript:""',
       pg(b, ['yt-uix-card-iframe-mask']), a.cardMask = b);
  b.style.position = a.style.position;
  b.style.top = a.style.top;
  b.style.left = a.offsetLeft + 'px';
  b.style.height = a.clientHeight + 'px';
  b.style.width = a.clientWidth + 'px';
  document.body.appendChild(b)
};
function im() {
  gi.call(this, 'kbd-nav')
}
var jm;
A(im, gi);
Fa(im);
m = im.prototype;
m.register = function() {
  V(this, 'keydown', this.Ca);
  hi(this, 'yt-uix-kbd-nav-move-in', this.Pa);
  hi(this, 'yt-uix-kbd-nav-move-in-to', this.Jb);
  hi(this, 'yt-uix-kbd-move-next', this.Qa);
  hi(this, 'yt-uix-kbd-nav-move-to', this.ea)
};
m.unregister = function() {
  W(this, 'keydown', this.Ca);
  bi(jm)
};
m.Ca = function(a, b, c) {
  var d = c.keyCode;
  if (a = J(a, U(this))) switch (d) {
      case 13:
      case 32:
        this.Pa(a);
        break;
      case 27:
        c.preventDefault();
        c.stopImmediatePropagation();
        a: {
          for (c = wg(a, 'kbdNavMoveOut'); !c;) {
            c = J(a.parentElement, U(this));
            if (!c) break a;
            c = wg(c, 'kbdNavMoveOut')
          } c = G(c);
          this.ea(c);
          th('yt-uix-kbd-nav-move-out-done', c)
        } break;
      case 40:
      case 38:
        if ((b = c.target) && M(a, U(this, 'list'))) switch (d) {
            case 40:
              this.Qa(b, a);
              break;
            case 38:
              d = document.activeElement == a, a = km(a), b = a.indexOf(b),
              0 > b && !d ||
                  (b = d ? a.length - 1 : (a.length + b - 1) % a.length,
                   a[b].focus(), lm(this, a[b]))
          }
        c.preventDefault()
    }
};
m.Pa = function(a) {
  var b = wg(a, 'kbdNavMoveIn');
  b = G(b);
  mm(this, a, b);
  this.ea(b)
};
m.Jb = function(a) {
  var b = document;
  try {
    var c = b && b.activeElement;
    var d = c && c.nodeName ? c : null
  } catch (e) {
    d = null
  }
  mm(this, d, a);
  this.ea(a)
};
m.ea = function(a) {
  if (a)
    if (Gd(a))
      a.focus();
    else {
      var b = Bd(a, function(c) {
        return yd(c) ? Gd(c) : !1
      });
      b ? b.focus() : (a.setAttribute('tabindex', '-1'), a.focus())
    }
};
function mm(a, b, c) {
  if (b && c)
    if (N(c, U(a)), a = b.id,
        a || (a = 'kbd-nav-' + Math.floor(1E6 * Math.random() + 1), b.id = a),
        b = a, vg && c.dataset)
      c.dataset.kbdNavMoveOut = b;
    else {
      if (/-[a-z]/.test('kbdNavMoveOut')) throw Error('');
      c.setAttribute(
          'data-' +
              'kbdNavMoveOut'.replace(/([A-Z])/g, '-$1').toLowerCase(),
          b)
    }
}
m.Qa = function(a, b) {
  var c = document.activeElement == b, d = km(b), e = d.indexOf(a);
  0 > e && !c || (c = c ? 0 : (e + 1) % d.length, d[c].focus(), lm(this, d[c]))
};
function lm(a, b) {
  if (b) {
    var c = Ld(b, 'LI');
    c && (N(c, U(a, 'highlight')), jm = T(b, 'blur', y(function(d) {
                                            qg(d, U(this, 'highlight'));
                                            bi(jm)
                                          }, a, c)))
  }
}
function km(a) {
  if ('UL' != a.tagName.toUpperCase()) return [];
  a = Ya(xd(a), function(b) {
    return 'LI' == b.tagName.toUpperCase()
  });
  return Ya(Za(a, function(b) {
              return Ri(b) ? Bd(b, function(c) {
                return yd(c) ? Gd(c) : !1
              }) : !1
            }), function(b) {
    return !!b
  })
};
function nm() {
  gi.call(this, 'menu');
  this.g = this.f = null;
  this.i = {};
  this.A = {};
  this.l = null
}
A(nm, gi);
Fa(nm);
function om(a) {
  var b = nm.C();
  if (M(a, U(b))) return a;
  var c = b.K(a);
  return c ? c : J(a, U(b, 'content')) == b.f ? b.g : null
}
m = nm.prototype;
m.register = function() {
  V(this, 'click', this.Ba);
  V(this, 'mouseenter', this.sb);
  hi(this, 'page-scroll', this.vb);
  hi(this, 'yt-uix-kbd-nav-move-out-done', function(a) {
    a = this.K(a);
    pm(this, a)
  });
  this.l = new O
};
m.unregister = function() {
  W(this, 'click', this.Ba);
  this.g = this.f = null;
  bi(ib(kb(this.i)));
  this.i = {};
  jb(this.A, function(a) {
    wd(a)
  }, this);
  this.A = {};
  Td(this.l);
  this.l = null;
  nm.G.unregister.call(this)
};
m.Ba = function(a, b, c) {
  a && (b = qm(this, a), !b.disabled && Ph(c.target, b) && rm(this, a))
};
m.sb = function(a, b, c) {
  a && M(a, U(this, 'hover')) &&
      (b = qm(this, a), Ph(c.target, b) && rm(this, a, !0))
};
m.vb = function() {
  this.f && this.g && sm(this, this.g, this.f)
};
function sm(a, b, c) {
  var d = tm(a, b);
  d && ie(d, ke(c));
  if (c == a.f) {
    var e = 9, f = 8;
    M(b, U(a, 'reversed')) && (e ^= 1, f ^= 1);
    M(b, U(a, 'flipped')) && (e ^= 4, f ^= 4);
    a = new E(0, 1);
    d && Ig(b, e, d, f, a, null, 197);
    Ig(b, e, c, f, a, null, 197)
  }
}
function rm(a, b, c) {
  um(a, b) && !c ?
      pm(a, b) :
      (vm(a, b), !a.f || Ph(b, a.f) ? a.fb(b) : Lg(a.l, y(a.fb, a, b)))
}
m.fb = function(a) {
  if (a) {
    var b = wm(this, a);
    if (b) {
      uh('yt-uix-menu-before-show', a, b);
      if (this.f)
        Ph(a, this.f) || pm(this, this.g);
      else {
        this.g = a;
        this.f = b;
        M(a, U(this, 'sibling-content')) ||
            (wd(b), document.body.appendChild(b));
        var c = qm(this, a).offsetWidth - 2;
        b.style.minWidth = c + 'px'
      }
      (c = tm(this, a)) && b.parentNode &&
          b.parentNode.insertBefore(c, b.nextSibling);
      qg(b, U(this, 'content-hidden'));
      sm(this, a, b);
      pg(qm(this, a), [U(this, 'trigger-selected'), 'yt-uix-button-toggled']);
      th('yt-uix-menu-show', a);
      xm(b);
      ym(this, a);
      th('yt-uix-kbd-nav-move-in-to', b);
      var d = y(this.Tb, this, a), e = y(this.Fb, this, a);
      c = Ja(a).toString();
      this.i[c] = [T(b, 'click', e), T(document, 'click', d)];
      M(a, U(this, 'indicate-selected')) &&
          (d = y(this.Gb, this, a), this.i[c].push(T(b, 'click', d)));
      M(a, U(this, 'hover')) &&
          (a = y(this.tb, this, a), this.i[c].push(T(document, 'mousemove', a)))
    }
  }
};
m.tb = function(a, b) {
  var c = Zh(b);
  if (c) {
    var d = qm(this, a);
    Ph(c, d) || zm(this, c) || Am(this, a)
  }
};
m.Tb = function(a, b) {
  var c = Zh(b);
  if (c) {
    if (zm(this, c)) {
      var d = J(c, U(this, 'content')), e = Ld(c, 'LI');
      e && d && zd(d, e) && uh('yt-uix-menu-item-clicked', c);
      c = J(c, U(this, 'close-on-select'));
      if (!c) return;
      d = om(c)
    }
    pm(this, d || a)
  }
};
function vm(a, b) {
  if (b) {
    var c = J(b, U(a, 'content'));
    c && (c = kd(U(a), c), B(c, function(d) {
            !Ph(d, b) && um(this, d) && Am(this, d)
          }, a))
  }
}
function pm(a, b) {
  if (b) {
    var c = [];
    c.push(b);
    var d = wm(a, b);
    d && (d = kd(U(a), d), d = eb(d), c = c.concat(d), B(c, function(e) {
            um(this, e) && Am(this, e)
          }, a))
  }
}
function Am(a, b) {
  if (b) {
    var c = wm(a, b);
    rg(qm(a, b), [U(a, 'trigger-selected'), 'yt-uix-button-toggled']);
    N(c, U(a, 'content-hidden'));
    var d = wm(a, b);
    d && md(d, {'aria-expanded': 'false'});
    (d = tm(a, b)) && d.parentNode && wd(d);
    c && c == a.f &&
        (a.g.appendChild(c), a.f = null, a.g = null,
         a.l && a.l.M('ROOT_MENU_REMOVED'));
    th('yt-uix-menu-hide', b);
    c = Ja(b).toString();
    bi(a.i[c]);
    delete a.i[c]
  }
}
m.Fb = function(a, b) {
  var c = Zh(b);
  c && Bm(this, a, c)
};
m.Gb = function(a, b) {
  var c = Zh(b);
  if (c) {
    var d = qm(this, a);
    if (d && (c = Ld(c, 'LI')))
      if (c = Jd(c).trim(), d.hasChildNodes()) {
        var e = Rl.C();
        (d = H(U(e, 'content'), d)) && Ad(d, c)
      } else
        Ad(d, c)
  }
};
function ym(a, b) {
  var c = wm(a, b);
  if (c) {
    B(c.children, function(e) {
      'LI' == e.tagName && md(e, {role: 'menuitem'})
    });
    md(c, {'aria-expanded': 'true'});
    var d = c.id;
    d || (d = 'aria-menu-id-' + Ja(c), c.id = d);
    (c = qm(a, b)) && md(c, {'aria-controls': d})
  }
}
function Bm(a, b, c) {
  var d = wm(a, b);
  d && M(b, U(a, 'checked')) && (a = Ld(c, 'LI')) &&
      (a = H('yt-ui-menu-item-checked-hid', a)) &&
      (d = kd('yt-ui-menu-item-checked', d), B(d, function(e) {
         tg(e, 'yt-ui-menu-item-checked', 'yt-ui-menu-item-checked-hid')
       }), tg(a, 'yt-ui-menu-item-checked-hid', 'yt-ui-menu-item-checked'))
}
function um(a, b) {
  var c = wm(a, b);
  return c ? !M(c, U(a, 'content-hidden')) : !1
}
function xm(a) {
  a = ld(document, 'UL', null, a);
  B(a, function(b) {
    b.tabIndex = 0;
    var c = im.C();
    pg(b, [U(c), U(c, 'list')])
  })
}
function wm(a, b) {
  var c = xh(b, 'menu-content-id');
  return c && (c = G(c)) ?
                 (pg(c, [U(a, 'content'), U(a, 'content-external')]), c) :
      b == a.g ? a.f :
                 H(U(a, 'content'), b)
}
function tm(a, b) {
  var c = Ja(b).toString(), d = a.A[c];
  if (!d) {
    d = ud(document, 'IFRAME');
    d.src = 'javascript:""';
    var e = [U(a, 'mask')];
    B(ng(b), function(f) {
      e.push(f + '-mask')
    });
    pg(d, e);
    a.A[c] = d
  }
  return d || null
}
function qm(a, b) {
  return H(U(a, 'trigger'), b)
}
function zm(a, b) {
  return Ph(b, a.f) || Ph(b, a.g)
};
function Cm() {
  cm.call(this, 'clickcard');
  this.f = {};
  this.g = {}
}
A(Cm, cm);
Fa(Cm);
m = Cm.prototype;
m.register = function() {
  Cm.G.register.call(this);
  V(this, 'click', this.wa, 'target');
  V(this, 'click', this.va, 'close')
};
m.unregister = function() {
  Cm.G.unregister.call(this);
  W(this, 'click', this.wa, 'target');
  W(this, 'click', this.va, 'close');
  for (var a in this.f) bi(this.f[a]);
  this.f = {};
  for (a in this.g) bi(this.g[a]);
  this.g = {}
};
m.wa = function(a, b, c) {
  c.preventDefault();
  b = Ld(c.target, 'button');
  if (!b || !b.disabled) {
    if (b = this.j(a, 'card-target'))
      a = document, a = 'string' === typeof b ? a.getElementById(b) : b;
    b = this.K(a);
    this.j(b, 'disabled') ||
        (M(b, U(this, 'active')) ? (this.hide(a), qg(b, U(this, 'active'))) :
                                   (this.show(a), N(b, U(this, 'active'))))
  }
};
m.show = function(a) {
  Cm.G.show.call(this, a);
  var b = this.K(a), c = Ja(a).toString();
  if (!xh(b, 'click-outside-persists')) {
    if (this.f[c]) return;
    b = T(document, 'click', y(this.xa, this, a));
    var d = T(window, 'blur', y(this.xa, this, a));
    this.f[c] = [b, d]
  }
  a = T(window, 'resize', y(this.Rb, this, a, void 0));
  this.g[c] = a
};
m.hide = function(a) {
  Cm.G.hide.call(this, a);
  a = Ja(a).toString();
  var b = this.f[a];
  b && (bi(b), this.f[a] = null);
  if (b = this.g[a]) bi(b), delete this.g[a]
};
m.xa = function(a, b) {
  var c = 'yt-uix' + (this.o ? '-' + this.o : '') + '-card', d = null;
  b.target && (d = J(b.target, c) || J(om(b.target), c));
  (d = d || J(document.activeElement, c) ||
       (document.activeElement ? J(om(document.activeElement), c) : null)) ||
      this.hide(a)
};
m.va = function(a) {
  (a = J(a, U(this, 'card'))) && (a = a.cardTargetNode) && this.hide(a)
};
function Dm() {
  cm.call(this, 'hovercard')
}
A(Dm, cm);
Fa(Dm);
m = Dm.prototype;
m.register = function() {
  V(this, 'mouseenter', this.La, 'target');
  V(this, 'mouseleave', this.Na, 'target');
  V(this, 'mouseenter', this.Ma, 'card');
  V(this, 'mouseleave', this.Oa, 'card')
};
m.unregister = function() {
  W(this, 'mouseenter', this.La, 'target');
  W(this, 'mouseleave', this.Na, 'target');
  W(this, 'mouseenter', this.Ma, 'card');
  W(this, 'mouseleave', this.Oa, 'card')
};
m.La = function(a) {
  if (Em != a) {
    Em && (this.hide(Em), Em = null);
    var b = y(this.show, this, a), c = parseInt(this.j(a, 'delay-show'), 10);
    b = kh(b, -1 < c ? c : 200);
    vh(a, 'card-timer', b.toString());
    Em = a;
    a.alt && (vh(a, 'card-alt', a.alt), a.alt = '');
    a.title && (vh(a, 'card-title', a.title), a.title = '')
  }
};
m.Na = function(a) {
  var b = parseInt(this.j(a, 'card-timer'), 10);
  lh(b);
  this.K(a).isCardHidable = !0;
  b = parseInt(this.j(a, 'delay-hide'), 10);
  b = -1 < b ? b : 200;
  kh(y(this.wb, this, a), b);
  if (b = this.j(a, 'card-alt')) a.alt = b;
  if (b = this.j(a, 'card-title')) a.title = b
};
m.wb = function(a) {
  this.K(a).isCardHidable && (this.hide(a), Em = null)
};
m.Ma = function(a) {
  a && (a.cardRootNode.isCardHidable = !1)
};
m.Oa = function(a) {
  a && this.hide(a.cardTargetNode)
};
var Em = null;
function Fm(a, b, c, d, e, f) {
  this.f = a;
  this.B = null;
  this.i = H('yt-dialog-fg', this.f) || this.f;
  if (a = H('yt-dialog-title', this.i)) {
    var g = 'yt-dialog-title-' + Ja(this.i);
    a.setAttribute('id', g);
    this.i.setAttribute('aria-labelledby', g)
  }
  this.i.setAttribute('tabindex', '-1');
  this.T = H('yt-dialog-focus-trap', this.f);
  this.ca = !1;
  this.l = new O;
  this.F = [];
  this.F.push($h(this.f, y(this.Kb, this), 'yt-dialog-dismiss'));
  this.F.push(T(this.T, 'focus', y(this.rb, this), !0));
  Gm(this);
  this.ja = b;
  this.ib = c;
  this.hb = d;
  this.J = e;
  this.jb = f;
  this.A = this.o = null
}
var Hm = {LOADING: 'loading', hc: 'content', ic: 'working'};
function Im(a, b) {
  a.fa() || a.l.subscribe('post-all', b)
}
function Gm(a) {
  a = H('yt-dialog-fg-content', a.f);
  var b = [];
  jb(Hm, function(c) {
    b.push('yt-dialog-show-' + c)
  });
  rg(a, b);
  N(a, 'yt-dialog-show-content')
}
m = Fm.prototype;
m.show = function() {
  if (!this.fa()) {
    this.B = document.activeElement;
    if (!this.hb) {
      this.g ||
          (this.g = G('yt-dialog-bg'),
           this.g ||
               (this.g = ud(document, 'div'), this.g.id = 'yt-dialog-bg',
                og(this.g, 'yt-dialog-bg'), document.body.appendChild(this.g)));
      var a = window, b = a.document;
      var c = 0;
      if (b) {
        c = b.body;
        var d = b.documentElement;
        if (d && c)
          if (a = od(a).height, pd(b) && d.scrollHeight)
            c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
          else {
            b = d.scrollHeight;
            var e = d.offsetHeight;
            d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
            c = b > a ? b > e ? b : e : b < e ? b : e
          }
        else
          c = 0
      }
      this.g.style.height = c + 'px';
      Si(this.g)
    }
    this.Da();
    c = Jm(this);
    Km(c);
    this.o = T(document, 'keydown', y(this.Eb, this));
    c = this.f;
    d = qh('player-added', this.Da, this);
    vh(c, 'player-ready-pubsub-key', d);
    this.ib && (this.A = T(document, 'click', y(this.Pb, this)));
    Si(this.f);
    this.i.setAttribute('tabindex', '0');
    Lm(this);
    this.J || N(document.body, 'yt-dialog-active');
    Sl(Rl.C());
    dm(Cm.C());
    dm(Dm.C());
    th('yt-ui-dialog-show-complete', this)
  }
};
function Mm() {
  var a = kd('yt-dialog');
  return ab(a, function(b) {
    return Ri(b)
  })
}
m.Da = function() {
  if (!this.jb) {
    var a = this.f;
    sg(document.body, 'hide-players', !0);
    a && sg(a, 'preserve-players', !0)
  }
};
function Jm(a) {
  var b = ld(document, 'iframe', null, a.f);
  B(b, function(c) {
    var d = xh(c, 'onload');
    d && (d = x(d)) && T(c, 'load', d);
    if (d = xh(c, 'src')) c.src = d
  }, a);
  return eb(b)
}
function Km(a) {
  B(document.getElementsByTagName('iframe'), function(b) {
    -1 == Xa(a, b) && N(b, 'iframe-hid')
  })
}
function Nm() {
  var a = kd('iframe-hid');
  B(a, function(b) {
    qg(b, 'iframe-hid')
  })
}
m.Kb = function(a) {
  a = a.currentTarget;
  a.disabled || (a = xh(a, 'action') || '', this.dismiss(a))
};
m.dismiss = function(a) {
  if (!this.fa()) {
    this.l.M('pre-all');
    this.l.M('pre-' + a);
    Ti(this.f);
    dm(Cm.C());
    dm(Dm.C());
    this.i.setAttribute('tabindex', '-1');
    Mm() ||
        (Ti(this.g), this.J || qg(document.body, 'yt-dialog-active'), Sh(),
         Nm());
    this.o && (bi(this.o), this.o = null);
    this.A && (bi(this.A), this.A = null);
    var b = this.f;
    if (b) {
      var c = xh(b, 'player-ready-pubsub-key');
      c && (sh(c), yh(b, 'player-ready-pubsub-key'))
    }
    this.l.M('post-all');
    th('yt-ui-dialog-hide-complete', this);
    'cancel' == a && th('yt-ui-dialog-cancelled', this);
    this.l && this.l.M('post-' + a);
    this.B && this.B.focus()
  }
};
m.setTitle = function(a) {
  Ad(H('yt-dialog-title', this.f), a)
};
m.Eb = function(a) {
  kh(y(function() {
       this.ja || 27 != a.keyCode || this.dismiss('cancel')
     }, this), 0);
  9 == a.keyCode && a.shiftKey && M(document.activeElement, 'yt-dialog-fg') &&
      a.preventDefault()
};
m.Pb = function(a) {
  'yt-dialog-base' == a.target.className && this.dismiss('cancel')
};
m.fa = function() {
  return this.ca
};
m.dispose = function() {
  Ri(this.f) && this.dismiss('dispose');
  bi(this.F);
  this.F.length = 0;
  kh(y(function() {
       this.B = null
     }, this), 0);
  this.T = this.i = null;
  this.l.dispose();
  this.l = null;
  this.ca = !0
};
m.rb = function(a) {
  a.stopPropagation();
  Lm(this)
};
function Lm(a) {
  kh(y(function() {
       this.i && this.i.focus()
     }, a), 0)
}
z('yt.ui.Dialog', Fm);
function Om() {
  gi.call(this, 'overlay');
  this.l = this.g = this.i = this.f = null
}
pa(Om, gi);
m = Om.prototype;
m.register = function() {
  V(this, 'click', this.oa, 'target');
  V(this, 'click', this.hide, 'close');
  Pm(this)
};
m.unregister = function() {
  gi.prototype.unregister.call(this);
  W(this, 'click', this.oa, 'target');
  W(this, 'click', this.hide, 'close');
  this.l && (sh(this.l), this.l = null);
  this.g && (bi(this.g), this.g = null)
};
m.oa = function(a) {
  if (!this.f || !Ri(this.f.f)) {
    var b = this.K(a);
    a = Qm(b, a);
    b || (b = a ? a.overlayParentNode : null);
    if (b && a) {
      var c = !!this.j(b, 'disable-shortcuts') || !1,
          d = !!this.j(b, 'disable-outside-click-dismiss') || !1;
      this.f = new Fm(a, c);
      this.i = b;
      var e = H('yt-dialog-fg', a);
      if (e) {
        var f = this.j(b, 'overlay-class') || '',
            g = this.j(b, 'overlay-style') || 'default',
            h = this.j(b, 'overlay-shape') || 'default';
        f = f ? f.split(' ') : [];
        f.push(U(this, g));
        f.push(U(this, h));
        pg(e, f)
      }
      this.f.show();
      th('yt-uix-kbd-nav-move-to', e || a);
      Pm(this);
      c || d ||
          (c = y(function(k) {
             M(k.target, 'yt-dialog-base') && Rm(this)
           }, this), a = H('yt-dialog-base', a), this.g = T(a, 'click', c));
      this.V(b, 'overlay-shown');
      th('yt-uix-overlay-shown', b)
    }
  }
};
function Pm(a) {
  a.l || (a.l = qh('yt-uix-overlay-hide', Sm));
  a.f && Im(a.f, function() {
    var b = Om.C();
    b.i = null;
    b.f.dispose();
    b.f = null
  })
}
function Rm(a) {
  if (a.f) {
    var b = a.i;
    a.f.dismiss('overlayhide');
    b && a.V(b, 'overlay-hidden');
    a.i = null;
    a.g && (bi(a.g), a.g = null);
    a.f = null
  }
}
function Qm(a, b) {
  var c;
  if (a)
    if (c = H('yt-dialog', a)) {
      var d = G('body-container');
      d && (d.appendChild(c), a.overlayContentNode = c, c.overlayParentNode = a)
    } else
      c = a.overlayContentNode;
  else
    b && (c = J(b, 'yt-dialog'));
  return c
}
function Tm() {
  var a = Om.C();
  if (a.i)
    a = H('yt-dialog-fg-content', a.i.overlayContentNode);
  else
    a: {
      if (a = kd('yt-dialog-fg-content')) for (var b = 0; b < a.length; b++) {
        var c = J(a[b], 'yt-dialog');
        if (Ri(c)) {
          a = a[b];
          break a
        }
      } a = null
    } return a
}
m.hide = function(a) {
  a && a.disabled || th('yt-uix-overlay-hide')
};
function Sm() {
  Rm(Om.C())
}
m.show = function(a) {
  this.oa(a)
};
Fa(Om);
var Um = {}, Vm = [];
function Wm(a) {
  a = J(a, 'yt-uix-button-subscription-container');
  a = H('unsubscribe-confirmation-overlay-container', a);
  return H('yt-dialog', a)
}
function Xm(a, b) {
  bi(Vm);
  Vm.length = 0;
  Um[b] || (Um[b] = Wm(a));
  Om.C().show(Um[b]);
  var c = Tm();
  return new Gf(function(d) {
    Vm.push($h(c, function() {
      d()
    }, 'overlay-confirmation-unsubscribe-button'))
  })
};
function Ym() {
  var a = P('PLAYER_CONFIG');
  return a && a.args && void 0 !== a.args.authuser ?
      !0 :
      !(!P('SESSION_INDEX') && !P('LOGGED_IN'))
};
function Zm() {
  gi.call(this, 'subscription-button')
}
pa(Zm, gi);
m = Zm.prototype;
m.register = function() {
  V(this, 'click', this.ra);
  ii(this, Bi, this.Ua);
  ii(this, Ci, this.Ta);
  ii(this, Di, this.Nb);
  ii(this, Gi, this.Ua);
  ii(this, Hi, this.Ta);
  ii(this, Ii, this.Ob);
  ii(this, Ki, this.Mb);
  ii(this, Li, this.Lb)
};
m.unregister = function() {
  W(this, 'click', this.ra);
  gi.prototype.unregister.call(this)
};
m.isSubscribed = function(a) {
  return !!this.j(a, 'is-subscribed')
};
m.ra = function(a) {
  var b = this.j(a, 'href'), c = this.j(a, 'insecure');
  if (b)
    a = this.j(a, 'target') || '_self', window.open(b, a);
  else if (!c)
    if (Ym()) {
      b = this.j(a, 'channel-external-id');
      c = this.j(a, 'clicktracking');
      var d = $m(this, a), e = this.j(a, 'parent-url');
      if (this.j(a, 'is-subscribed')) {
        var f = this.j(a, 'subscription-id'),
            g = this.j(a, 'unsubscribe-params'),
            h = new xi(b, f, d, a, c, e, g);
        this.j(a, 'show-unsub-confirm-dialog') ? Xm(a, b).then(function() {
          S(Fi, h)
        }) :
                                                 S(Fi, h)
      } else
        a = this.j(a, 'params'), S(Ai, new vi(b, d, c, e, void 0, a))
    } else
      an(this, a)
};
m.Ua = function(a) {
  this.U(a.f, this.Ya, !0)
};
m.Ta = function(a) {
  this.U(a.f, this.Ya, !1)
};
m.Nb = function(a) {
  this.U(a.f, this.Za, !0, a.g)
};
m.Ob = function(a) {
  this.U(a.f, this.Za, !1)
};
m.Mb = function(a) {
  this.U(a.f, this.pb)
};
m.Lb = function(a) {
  this.U(a.f, this.nb)
};
m.Za = function(a, b, c) {
  b ? (vh(a, 'is-subscribed', 'true'), c && vh(a, 'subscription-id', c)) :
      (yh(a, 'is-subscribed'), yh(a, 'subscription-id'));
  bn(this, a)
};
function $m(a, b) {
  if (!a.j(b, 'ypc-enabled')) return null;
  var c = a.j(b, 'ypc-item-type'), d = a.j(b, 'ypc-item-id');
  return {
    itemType: c, itemId: d, subscriptionElement: b
  }
}
m.Ya = function(a, b) {
  var c = J(a, 'yt-uix-button-subscription-container');
  sg(c, 'yt-subscription-button-disabled-mask-container', b);
  a.setAttribute('aria-busy', b ? 'true' : 'false');
  a.disabled = b
};
function bn(a, b) {
  var c = a.j(b, 'style-type'), d = !!a.j(b, 'is-subscribed');
  c = '-' + c;
  var e = 'yt-uix-button-subscribed' + c;
  sg(b, 'yt-uix-button-subscribe' + c, !d);
  sg(b, e, d);
  a.j(b, 'subscriber-count-tooltip') &&
      !a.j(b, 'subscriber-count-show-when-subscribed') &&
      (c = U(Ui.C()), sg(b, c, !d),
       b.title = d ? '' : a.j(b, 'subscriber-count-title'));
  d ? kh(function() {
    N(b, 'hover-enabled')
  }, 1E3) : qg(b, 'hover-enabled')
}
m.pb = function(a) {
  var b = !!this.j(a, 'ypc-item-type'), c = !!this.j(a, 'ypc-item-id');
  !this.j(a, 'ypc-enabled') && b && c &&
      (N(a, 'ypc-enabled'), vh(a, 'ypc-enabled', 'true'))
};
m.nb = function(a) {
  this.j(a, 'ypc-enabled') && (qg(a, 'ypc-enabled'), yh(a, 'ypc-enabled'))
};
function cn(a, b) {
  var c = kd(U(a));
  return Ya(c, function(d) {
    return b == this.j(d, 'channel-external-id')
  }, a)
}
m.kb = function(a, b, c) {
  var d = hb(arguments, 2);
  B(a, function(e) {
    b.apply(this, db(e, d))
  }, this)
};
m.U = function(a, b, c) {
  var d = cn(this, a);
  d = db([d], hb(arguments, 1));
  this.kb.apply(this, d)
};
function an(a, b) {
  var c = y(function(d) {
    d.discoverable_subscriptions &&
        eh('SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS',
           d.discoverable_subscriptions);
    this.ra(b)
  }, a);
  bj(c)
}
Fa(Zm);
function dn(a, b, c) {
  c = void 0 === c ? {} : c;
  var d = Il;
  P('ytLoggingEventsDefaultDisabled', !1) && Il == Il && (d = null);
  Dj(a, b, d, c)
};
var en = [
  {
    Ka: function(a) {
      return 'Cannot read property \'' + a.key + '\''
    },
    ma: {
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
    Ka: function(a) {
      return 'Cannot call \'' + a.key + '\''
    },
    ma: {
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
function fn() {
  this.f = [];
  this.g = []
}
var gn;
var hn = new O;
var jn = new Set, kn = 0,
    ln = ['PhantomJS', 'Googlebot', 'TO STOP THIS SECURITY SCAN go/scan'];
function mn(a) {
  nn(a)
}
function on(a) {
  nn(a, 'WARNING')
}
function nn(a, b) {
  var c = void 0 === c ? {} : c;
  c.name = P('INNERTUBE_CONTEXT_CLIENT_NAME', 1);
  c.version = P('INNERTUBE_CONTEXT_CLIENT_VERSION', void 0);
  var d = c || {};
  c = void 0 === b ? 'ERROR' : b;
  c = void 0 === c ? 'ERROR' : c;
  var e = void 0 === e ? !1 : e;
  if (a) {
    if (X('console_log_js_exceptions')) {
      var f = [];
      f.push('Name: ' + a.name);
      f.push('Message: ' + a.message);
      a.hasOwnProperty('params') &&
          f.push('Error Params: ' + JSON.stringify(a.params));
      f.push('File name: ' + a.fileName);
      f.push('Stacktrace: ' + a.stack);
      window.console.log(f.join('\n'), a)
    }
    if ((window && window.yterr || e) && !(5 <= kn) && 0 !== a.sampleWeight) {
      var g = Xc(a);
      e = g.message || 'Unknown Error';
      f = g.name || 'UnknownError';
      var h = g.lineNumber || 'Not available',
          k = g.fileName || 'Not available';
      g = g.stack || a.f || 'Not available';
      if (a.hasOwnProperty('args') && a.args && a.args.length)
        for (var l = 0, n = 0; n < a.args.length; n++) {
          var p = a.args[n], q = 'params.' + n;
          l += q.length;
          if (p)
            if (Array.isArray(p))
              for (var t = d, w = 0;
                   w < p.length && !(p[w] && (l += pn(w, p[w], q, t), 500 < l));
                   w++)
                ;
            else if ('object' === typeof p)
              for (t in t = void 0, w = d, p) {
                if (p[t] && (l += pn(t, p[t], q, w), 500 < l)) break
              }
            else
              d[q] = String(JSON.stringify(p)).substring(0, 500),
              l += d[q].length;
          else
            d[q] = String(JSON.stringify(p)).substring(0, 500),
            l += d[q].length;
          if (500 <= l) break
        }
      else if (a.hasOwnProperty('params') && a.params)
        if (p = a.params, 'object' === typeof a.params)
          for (n in q = 0, p) {
            if (p[n] &&
                (l = 'params.' + n,
                 t = String(JSON.stringify(p[n])).substr(0, 500), d[l] = t,
                 q += l.length + t.length, 500 < q))
              break
          }
        else
          d.params = String(JSON.stringify(p)).substr(0, 500);
      navigator.vendor && !d.hasOwnProperty('vendor') &&
          (d.vendor = navigator.vendor);
      d = {
        message: e,
        name: f,
        lineNumber: h,
        fileName: k,
        stack: g,
        params: d
      };
      e = Number(a.columnNumber);
      isNaN(e) || (d.lineNumber = d.lineNumber + ':' + e);
      e = u(en);
      for (f = e.next(); !f.done; f = e.next())
        if (f = f.value, f.ma[d.name])
          for (k = u(f.ma[d.name]), h = k.next(); !h.done; h = k.next())
            if (g = h.value, h = d.message.match(g.regexp)) {
              d.params['error.original'] = h[0];
              k = g.groups;
              g = {};
              for (n = 0; n < k.length; n++)
                g[k[n]] = h[n + 1], d.params['error.' + k[n]] = h[n + 1];
              d.message = f.Ka(g);
              break
            }
      window.yterr && 'function' === typeof window.yterr && window.yterr(d);
      if (!(jn.has(d.message) || 0 <= d.stack.indexOf('/YouTubeCenter.js') ||
            0 <= d.stack.indexOf('/mytube.js'))) {
        hn.M('handleError', d);
        if (X('kevlar_gel_error_routing')) {
          e = c;
          a: {
            f = u(ln); for (h = f.next(); !h.done;
                            h = f.next()) if (pk(h.value.toLowerCase())) {
              f = !0;
              break a
            } f = !1
          } if (!f) {
            f = {stackTrace: d.stack};
            d.fileName && (f.filename = d.fileName);
            h = d.lineNumber && d.lineNumber.split ? d.lineNumber.split(':') :
                                                     [];
            0 !== h.length &&
                (1 !== h.length || isNaN(Number(h[0])) ?
                     2 !== h.length || isNaN(Number(h[0])) ||
                         isNaN(Number(h[1])) ||
                         (f.lineNumber = Number(h[0]),
                          f.columnNumber = Number(h[1])) :
                     f.lineNumber = Number(h[0]));
            h = d.message;
            k = d.name;
            gn || (gn = new fn);
            g = gn;
            a: {
              n = u(g.g); for (p = n.next(); !p.done; p = n.next()) if (
                              p = p.value, d.message && d.message.match(p.f)) {
                g = p.weight;
                break a
              } g = u(g.f);
              for (n = g.next(); !n.done;
                   n = g.next()) if (n = n.value, n.f(d)) {
                g = n.weight;
                break a
              } g = 1
            } h = {
              level: 'ERROR_LEVEL_UNKNOWN',
              message: h,
              errorClassName: k,
              sampleWeight: g
            };
            'ERROR' === e ?
                h.level = 'ERROR_LEVEL_ERROR' :
                'WARNING' === e && (h.level = 'ERROR_LEVEL_WARNNING');
            e = {isObfuscated: !0, browserStackInfo: f};
            f = {pageUrl: window.location.href, kvPairs: []};
            if (k = d.params)
              for (g = u(Object.keys(k)), n = g.next(); !n.done; n = g.next())
                n = n.value,
                f.kvPairs.push({key: 'client.' + n, value: String(k[n])});
            k = P('SERVER_NAME', void 0);
            g = P('SERVER_VERSION', void 0);
            k && g &&
                (f.kvPairs.push({key: 'server.name', value: k}),
                 f.kvPairs.push({key: 'server.version', value: g}));
            dn('clientError', {errorMetadata: f, stackTrace: e, logMessage: h});
            uj()
          }
        }
        e = d.params || {};
        c = {
          qa: {
            a: 'logerror',
            t: 'jserror',
            type: d.name,
            msg: d.message.substr(0, 250),
            line: d.lineNumber,
            level: c,
            'client.name': e.name
          },
          D: {url: P('PAGE_NAME', window.location.href), file: d.fileName},
          method: 'POST'
        };
        e.version && (c['client.version'] = e.version);
        if (c.D) {
          d.stack && (c.D.stack = d.stack);
          f = u(Object.keys(e));
          for (h = f.next(); !h.done; h = f.next())
            h = h.value, c.D['client.' + h] = e[h];
          if (e = P('LATEST_ECATCHER_SERVICE_TRACKING_PARAMS', void 0))
            for (f = u(Object.keys(e)), h = f.next(); !h.done; h = f.next())
              h = h.value, c.D[h] = e[h];
          e = P('SERVER_NAME', void 0);
          f = P('SERVER_VERSION', void 0);
          e && f && (c.D['server.name'] = e, c.D['server.version'] = f)
        }
        Sj(P('ECATCHER_REPORT_HOST', '') + '/error_204', c);
        jn.add(d.message);
        kn++
      }
    }
  }
}
function pn(a, b, c, d) {
  c += '.' + a;
  a = String(JSON.stringify(b)).substr(0, 500);
  d[c] = a;
  return c.length + a.length
};
function qn(a, b) {
  for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
  if (!rn(a) || c.some(function(e) {
        return !rn(e)
      }))
    throw Error('Only objects may be merged.');
  c = u(c);
  for (d = c.next(); !d.done; d = c.next()) sn(a, d.value);
  return a
}
function sn(a, b) {
  for (var c in b)
    if (rn(b[c])) {
      if (c in a && !rn(a[c]))
        throw Error('Cannot merge an object into a non-object.');
      c in a || (a[c] = {});
      sn(a[c], b[c])
    } else if (tn(b[c])) {
      if (c in a && !tn(a[c]))
        throw Error('Cannot merge an array into a non-array.');
      c in a || (a[c] = []);
      un(a[c], b[c])
    } else
      a[c] = b[c];
  return a
}
function un(a, b) {
  for (var c = u(b), d = c.next(); !d.done; d = c.next())
    d = d.value,
    rn(d)     ? a.push(sn({}, d)) :
        tn(d) ? a.push(un([], d)) :
                a.push(d);
  return a
}
function rn(a) {
  return 'object' === typeof a && !Array.isArray(a)
}
function tn(a) {
  return 'object' === typeof a && Array.isArray(a)
};
var vn = {}, wn = 0;
function xn(a, b, c, d, e) {
  e = void 0 === e ? '' : e;
  if (a)
    if (c && !pk('cobalt')) {
      if (a) {
        a instanceof Eb ||
            (a = 'object' == typeof a && a.aa ? a.Y() : String(a),
             Jb.test(a) ?
                 a = new Eb(a, Fb) :
                 (a = String(a), a = a.replace(/(%0A|%0D)/g, ''),
                  a = (b = a.match(Ib)) && Hb.test(b[1]) ? new Eb(a, Fb) :
                                                           null));
        a = Gb(a || Kb);
        if ('about:invalid#zClosurez' === a || a.startsWith('data'))
          a = '';
        else {
          if (!(a instanceof Sb)) {
            b = 'object' == typeof a;
            var f = null;
            b && a.Ea && (f = a.Aa());
            a = Vb(ub(b && a.aa ? a.Y() : String(a)), f)
          }
          a = Ub(a).toString();
          a = encodeURIComponent(String(xg(a)))
        }
        /^[\s\xa0]*$/.test(a) ||
            (a = td('IFRAME', {
               src: 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"',
               style: 'display:none'
             }),
             jd(a).body.appendChild(a))
      }
    } else if (e)
      Tj(a, b, 'POST', e, d);
    else if (P('USE_NET_AJAX_FOR_PING_TRANSPORT', !1) || d)
      Tj(a, b, 'GET', '', d);
    else {
      b: {
        try {
          var g = new Va({url: a});
          if (g.i && g.g || g.l) {
            var h = cc(a.match(bc)[5] || null), k;
            if (!(k = !h || !h.endsWith('/aclk'))) {
              var l = a.search(kc);
              d: {
                for (c = 0; 0 <= (c = a.indexOf('ri', c)) && c < l;) {
                  var n = a.charCodeAt(c - 1);
                  if (38 == n || 63 == n) {
                    var p = a.charCodeAt(c + 2);
                    if (!p || 61 == p || 38 == p || 35 == p) {
                      var q = c;
                      break d
                    }
                  }
                  c += 3
                } q = -1
              } if (0 > q) var t = null;
              else {
                var w = a.indexOf('&', q);
                if (0 > w || w > l) w = l;
                q += 3;
                t = decodeURIComponent(a.substr(q, w - q).replace(/\+/g, ' '))
              }
              k = '1' !== t
            }
            f = !k;
            break b
          }
        } catch (F) {} f = !1
      } f ?
          yn(a) ? (b && b(), f = !0) : f = !1 :
          f = !1;
      f || zn(a, b)
    }
}
function yn(a, b) {
  try {
    if (window.navigator && window.navigator.sendBeacon &&
        window.navigator.sendBeacon(a, void 0 === b ? '' : b))
      return !0
  } catch (c) {
  }
  return !1
}
function zn(a, b) {
  var c = new Image, d = '' + wn++;
  vn[d] = c;
  c.onload = c.onerror = function() {
    b && vn[d] && b();
    delete vn[d]
  };
  c.src = a
};
function An(a, b) {
  Q.call(this, 1, arguments)
}
pa(An, Q);
function Bn(a, b) {
  Q.call(this, 1, arguments)
}
pa(Bn, Q);
var Cn = new R('aft-recorded', An), Dn = new R('timing-sent', Bn);
var En = window;
function Fn() {
  this.timing = {};
  this.clearResourceTimings = function() {};
  this.webkitClearResourceTimings = function() {};
  this.mozClearResourceTimings = function() {};
  this.msClearResourceTimings = function() {};
  this.oClearResourceTimings = function() {}
}
var Gn = En.performance || En.mozPerformance || En.msPerformance ||
    En.webkitPerformance || new Fn;
var Hn = !1;
y(Gn.clearResourceTimings || Gn.webkitClearResourceTimings ||
      Gn.mozClearResourceTimings || Gn.msClearResourceTimings ||
      Gn.oClearResourceTimings || Ea,
  Gn);
function In(a) {
  var b = Jn(a);
  if (b.aft) return b.aft;
  a = P((a || '') + 'TIMING_AFT_KEYS', ['ol']);
  for (var c = a.length, d = 0; d < c; d++) {
    var e = b[a[d]];
    if (e) return e
  }
  return NaN
}
function Kn(a) {
  var b;
  (b = x('ytcsi.' + (a || '') + 'data_')) ||
      (b = {tick: {}, info: {}}, z('ytcsi.' + (a || '') + 'data_', b));
  return b
}
function Ln(a) {
  a = Kn(a);
  a.info || (a.info = {});
  return a.info
}
function Jn(a) {
  a = Kn(a);
  a.tick || (a.tick = {});
  return a.tick
}
function Mn(a) {
  var b = Kn(a).nonce;
  b || (b = Kl(), Kn(a).nonce = b);
  return b
}
function Nn(a) {
  var b = Jn(a || ''), c = In(a);
  c && !Hn && (S(Cn, new An(Math.round(c - b._start), a)), Hn = !0)
};
function On() {
  var a = x('ytcsi.debug');
  a || (a = [], z('ytcsi.debug', a), z('ytcsi.reference', {}));
  return a
}
function Pn(a) {
  a = a || '';
  var b = x('ytcsi.reference');
  b || (On(), b = x('ytcsi.reference'));
  if (b[a]) return b[a];
  var c = On(), d = {timerName: a, info: {}, tick: {}, span: {}};
  c.push(d);
  return b[a] = d
};
var Qn = v.ytLoggingLatencyUsageStats_ || {};
z('ytLoggingLatencyUsageStats_', Qn);
function Rn() {
  this.f = 0
}
function Sn() {
  Rn.f || (Rn.f = new Rn);
  return Rn.f
}
Rn.prototype.tick = function(a, b, c) {
  Tn(this, 'tick_' + a + '_' + b) ||
      dn('latencyActionTicked', {tickName: a, clientActionNonce: b},
         {timestamp: c})
};
Rn.prototype.info = function(a, b) {
  var c = Object.keys(a).join('');
  Tn(this, 'info_' + c + '_' + b) ||
      (c = Object.assign({}, a), c.clientActionNonce = b,
       dn('latencyActionInfo', c))
};
Rn.prototype.span = function(a, b) {
  var c = Object.keys(a).join('');
  Tn(this, 'span_' + c + '_' + b) ||
      (a.clientActionNonce = b, dn('latencyActionSpan', a))
};
function Tn(a, b) {
  Qn[b] = Qn[b] || {count: 0};
  var c = Qn[b];
  c.count++;
  c.time = hj();
  a.f || (a.f = Bh(function() {
            var d = hj(), e;
            for (e in Qn) Qn[e] && 6E4 < d - Qn[e].time && delete Qn[e];
            a && (a.f = 0)
          }, 5E3));
  return 5 < c.count ?
      (6 === c.count && 1 > 1E5 * Math.random() &&
           (c = new Hl(
                'CSI data exceeded logging limit with key', b.split('_')),
            0 <= b.indexOf('plev') || on(c)),
       !0) :
      !1
};
var Z = {},
    Un =
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
    Vn =
        'isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap'
            .split(' '),
    Wn = {},
    Xn =
        (Wn.ccs = 'CANARY_STATE_', Wn.mver = 'MEASUREMENT_VERSION_',
         Wn.pis = 'PLAYER_INITIALIZED_STATE_', Wn.yt_pt = 'LATENCY_PLAYER_',
         Wn.pa = 'LATENCY_ACTION_', Wn.yt_vst = 'VIDEO_STREAM_TYPE_', Wn),
    Yn =
        'all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds'
            .split(' ');
function Zn(a) {
  return !!P('FORCE_CSI_ON_GEL', !1) || X('csi_on_gel') || !!Kn(a).useGel
}
function $n(a) {
  a = Kn(a);
  if (!('gel' in a))
    a.gel = {gelTicks: {}, gelInfos: {}};
  else if (a.gel) {
    var b = a.gel;
    b.gelInfos || (b.gelInfos = {});
    b.gelTicks || (b.gelTicks = {})
  }
  return a.gel
};
function ao(a, b, c) {
  if (null !== b)
    if (Ln(c)[a] = b, Zn(c)) {
      var d = b;
      b = $n(c);
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
      if (a in Un) {
        b = Un[a];
        cb(Vn, b) && (d = !!d);
        a in Xn && 'string' === typeof d && (d = Xn[a] + d.toUpperCase());
        a = d;
        d = b.split('.');
        for (var g = e = {}, h = 0; h < d.length - 1; h++) {
          var k = d[h];
          g[k] = {};
          g = g[k]
        }
        g[d[d.length - 1]] = 'requestIds' === b ? [{id: a, endpoint: f}] : a;
        f = qn({}, e)
      } else
        cb(Yn, a) || on(new Hl('Unknown label logged with GEL CSI', a)),
            f = void 0;
      f && Zn(c) &&
          (b = Pn(c || ''), qn(b.info, f), b = $n(c),
           'gelInfos' in b || (b.gelInfos = {}), qn(b.gelInfos, f), c = Mn(c),
           Sn().info(f, c))
    } else
      Pn(c || '').info[a] = b
}
function bo(a, b, c) {
  var d = Jn(c);
  if (X('use_first_tick') && co(a, c)) return d[a];
  if (!b && '_' !== a[0]) {
    var e = a;
    Gn.mark &&
        (0 == e.lastIndexOf('mark_', 0) || (e = 'mark_' + e),
         c && (e += ' (' + c + ')'), Gn.mark(e))
  }
  e = b || hj();
  d[a] = e;
  e = $n(c);
  e.gelTicks && (e.gelTicks['tick_' + a] = !0);
  c || b || hj();
  if (Zn(c)) {
    Pn(c || '').tick[a] = b || hj();
    e = Mn(c);
    if ('_start' === a) {
      var f = Sn();
      Tn(f, 'baseline_' + e) ||
          dn('latencyActionBaselined', {clientActionNonce: e}, {timestamp: b})
    } else
      Sn().tick(a, e, b);
    Nn(c);
    e = !0
  } else
    e = !1;
  if (!e) {
    if (!x('yt.timing.' + (c || '') + 'pingSent_') &&
        (f = P((c || '') + 'TIMING_ACTION', void 0), e = Jn(c),
         x('ytglobal.timing' + (c || '') + 'ready_') && f && co('_start') &&
             In(c)))
      if (Nn(c), c)
        eo(c);
      else {
        f = !0;
        var g = P('TIMING_WAIT', []);
        if (g.length)
          for (var h = 0, k = g.length; h < k; ++h)
            if (!(g[h] in e)) {
              f = !1;
              break
            }
        f && eo(c)
      }
    Pn(c || '').tick[a] = b || hj()
  }
  return d[a]
}
function co(a, b) {
  var c = Jn(b);
  return a in c
}
function eo(a) {
  if (!Zn(a)) {
    var b = Jn(a), c = Ln(a), d = b._start,
        e = P('CSI_SERVICE_NAME', 'youtube'),
        f = {v: 2, s: e, action: P((a || '') + 'TIMING_ACTION', void 0)},
        g = c.srt;
    void 0 !== b.srt && delete c.srt;
    b.aft = In(a);
    var h = Jn(a), k = h.pbr, l = h.vc;
    h = h.pbs;
    k && l && h && k < l && l < h && Ln(a).yt_pvis && 'youtube' === e &&
        (ao('yt_lt', 'hot_bg', a), e = b.vc, k = b.pbs, delete b.aft,
         c.aft = Math.round(k - e));
    for (var n in c) '_' !== n.charAt(0) && (f[n] = c[n]);
    b.ps = hj();
    n = {};
    e = [];
    for (var p in b)
      '_' !== p.charAt(0) &&
          (k = Math.round(b[p] - d), n[p] = k, e.push(p + '.' + k));
    f.rt = e.join(',');
    b = !!c.ap;
    X('debug_csi_data') &&
        (c = x('yt.timing.csiData'), c || (c = [], z('yt.timing.csiData', c)),
         c.push({page: location.href, time: new Date, args: f}));
    c = '';
    for (var q in f) f.hasOwnProperty(q) && (c += '&' + q + '=' + f[q]);
    f = '/csi_204?' + c.substring(1);
    if (window.navigator && window.navigator.sendBeacon && b) {
      var t = void 0 === t ? '' : t;
      yn(f, t) || xn(f, void 0, void 0, void 0, t)
    } else
      xn(f);
    z('yt.timing.' + (a || '') + 'pingSent_', !0);
    S(Dn, new Bn(n.aft + (Number(g) || 0), a))
  }
}
var fo = window;
fo.ytcsi && (fo.ytcsi.info = ao, fo.ytcsi.tick = bo);
new $f(go, 1E3);
function go() {
  bo('vptl', 0);
  bo('vpl', 0)
};
function ho(a) {
  this.f = a;
  this.L = null;
  P('SUBSCRIBE_EMBED_HOVERCARD_URL') &&
      (io(this), T(this.f, 'mouseover', y(this.l, this)),
       T(this.f, 'mouseout', y(this.ka, this)),
       T(this.f, 'click', y(this.ka, this)), Kh(Di, Pa(this.g, !0), this),
       Kh(Ii, Pa(this.g, !1), this), jo(this))
}
function io(a) {
  var b = {
    url: P('SUBSCRIBE_EMBED_HOVERCARD_URL'),
    style: 'bubble',
    hideClickDetection: !0,
    show: !1,
    anchor: a.f,
    relayOpen: '-1'
  };
  a = y(a.i, a);
  ri().open(b, a)
}
function jo(a) {
  Ym() || qh('LOGGED_IN', function() {
    this.L && (this.ka(), this.L.close(), this.L = null, io(this))
  }, a)
}
ho.prototype.i = function(a) {
  this.L = a;
  a = Zm.C().isSubscribed(this.f);
  this.g(a)
};
ho.prototype.l = function() {
  this.L && this.L.restyle({show: !0})
};
ho.prototype.ka = function() {
  this.L && this.L.restyle({show: !1})
};
ho.prototype.g = function(a) {
  if (this.L) {
    a = {isSubscribed: a};
    try {
      this.L.send(
          'msg-hovercard-subscription', a, void 0,
          x('gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER'))
    } catch (b) {
    }
  }
};
function ko() {
  qi(function() {
    var a = ke(G('yt-subscribe'));
    a = {width: a.width, height: a.height};
    var b = lo;
    ri().ready(a, null, b)
  })
}
function lo(a) {
  if (a.length && a[a.length - 1]) {
    a = a[a.length - 1].eurl;
    var b = G('yt-subscribe'), c = Zm.C();
    if (b = H(U(c), b)) a && (Zm.C(), vh(b, 'parent-url', a)), new ho(b)
  }
};
var mo = x('ytglobal.prefsUserPrefsPrefs_') || {};
z('ytglobal.prefsUserPrefsPrefs_', mo);
function no() {
  this.f = P('ALT_PREF_COOKIE_NAME', 'PREF');
  var a = ek(this.f);
  if (a) {
    a = decodeURIComponent(a).split('&');
    for (var b = 0; b < a.length; b++) {
      var c = a[b].split('='), d = c[0];
      (c = c[1]) && (mo[d] = c.toString())
    }
  }
}
m = no.prototype;
m.get = function(a, b) {
  oo(a);
  po(a);
  var c = qo(a);
  return null != c ? c : b ? b : ''
};
m.set = function(a, b) {
  oo(a);
  po(a);
  if (null == b) throw Error('ExpectedNotNull');
  mo[a] = b.toString()
};
function ro(a) {
  var b = qo('f' + (Math.floor(a / 31) + 1));
  return !!(
      ((null != b && /^[A-Fa-f0-9]+$/.test(b) ? parseInt(b, 16) : null) || 0) &
      1 << a % 31)
}
m.remove = function(a) {
  oo(a);
  po(a);
  delete mo[a]
};
m.save = function() {
  dk(this.f, this.dump(), 63072E3)
};
m.clear = function() {
  for (var a in mo) delete mo[a]
};
m.dump = function() {
  var a = [], b;
  for (b in mo) a.push(b + '=' + encodeURIComponent(String(mo[b])));
  return a.join('&')
};
function po(a) {
  if (/^f([1-9][0-9]*)$/.test(a)) throw Error('ExpectedRegexMatch: ' + a);
}
function oo(a) {
  if (!/^\w+$/.test(a)) throw Error('ExpectedRegexMismatch: ' + a);
}
function qo(a) {
  return void 0 !== mo[a] ? mo[a].toString() : null
}
Fa(no);
var so = new Map([
  ['dark', 'USER_INTERFACE_THEME_DARK'], ['light', 'USER_INTERFACE_THEME_LIGHT']
]),
    to = [
      '/fashion', '/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ',
      '/channel/UCTApTkbpcqiLL39WUlne4ig', '/channel/UCW5PCzG3KQvbOX4zc3KY0lQ'
    ];
function uo() {
  var a = void 0 === a ? window.location.href : a;
  if (X('kevlar_disable_theme_param')) return null;
  var b = cc(a.match(bc)[5] || null);
  if (vo(b)) return 'USER_INTERFACE_THEME_DARK';
  a = ni(a).theme;
  return so.get(a) || null
}
function vo(a) {
  var b = to.map(function(c) {
    return c.toLowerCase()
  });
  return !X('disable_dark_fashion_destination_launch') && b.some(function(c) {
    return a.toLowerCase().startsWith(c)
  }) ?
      !0 :
      !1
};
function wo() {
  this.f = {};
  var a = ek('CONSISTENCY');
  a && xo(this, {encryptedTokenJarContents: a})
}
wo.prototype.g = function(a, b) {
  var c, d, e,
      f = null ===
              (d = null === (c = b.context) || void 0 === c ? void 0 :
                                                              c.request) ||
          void 0 === d ?
      void 0 :
      d.consistencyTokenJars,
      g = null === (e = a.responseContext) || void 0 === e ?
      void 0 :
      e.consistencyTokenJar;
  f && g && this.replace(f, g)
};
wo.prototype.replace = function(a, b) {
  for (var c = u(a), d = c.next(); !d.done; d = c.next())
    delete this.f[d.value.encryptedTokenJarContents];
  xo(this, b)
};
function xo(a, b) {
  if (b.encryptedTokenJarContents &&
      (a.f[b.encryptedTokenJarContents] = b,
       'string' === typeof b.expirationSeconds)) {
    var c = Number(b.expirationSeconds);
    setTimeout(function() {
      delete a.f[b.encryptedTokenJarContents]
    }, 1E3 * c);
    dk('CONSISTENCY', b.encryptedTokenJarContents, c, void 0, !0)
  }
};
function yo() {
  var a = P('LOCATION_PLAYABILITY_TOKEN');
  a && (this.locationPlayabilityToken = a, this.f = void 0)
}
function zo() {
  yo.f || (yo.f = new yo);
  return yo.f
}
yo.prototype.g = function(a) {
  var b;
  a = null === (b = a.responseContext) || void 0 === b ?
      void 0 :
      b.locationPlayabilityToken;
  void 0 !== a && (this.locationPlayabilityToken = a, this.f = void 0)
};
var Ao = {
  bluetooth: 'CONN_DISCO',
  cellular: 'CONN_CELLULAR_UNKNOWN',
  ethernet: 'CONN_WIFI',
  none: 'CONN_NONE',
  wifi: 'CONN_WIFI',
  wimax: 'CONN_CELLULAR_4G',
  other: 'CONN_UNKNOWN',
  unknown: 'CONN_UNKNOWN',
  'slow-2g': 'CONN_CELLULAR_2G',
  '2g': 'CONN_CELLULAR_2G',
  '3g': 'CONN_CELLULAR_3G',
  '4g': 'CONN_CELLULAR_4G'
};
function Bo(a, b, c) {
  this.f = a;
  this.l = b;
  this.g = mn;
  this.i = c
}
function Co(a) {
  if (!Do) {
    var b = {
      ya: {
        playlistEditEndpoint: Eo,
        subscribeEndpoint: Fo,
        unsubscribeEndpoint: Go,
        modifyChannelNotificationPreferenceEndpoint: Ho
      }
    };
    var c = X('web_enable_client_location_service') ? zo() : void 0, d = [];
    c && d.push(c);
    Io.f || (Io.f = new Io);
    c = Io.f;
    lk.f || (lk.f = new lk);
    Bo.f = new Bo(b, c, d);
    Do = Bo.f
  }
  b = Do;
  var e = void 0 === e ? nk : e;
  a: {
    var f, g; if ((null === (f = a.signalServiceEndpoint) || void 0 === f ?
                       0 :
                       f.signal) &&
                  b.f.Qb && (f = b.f.Qb[a.signalServiceEndpoint.signal])) {
      var h = new f;
      break a
    } if ((null === (g = a.continuationCommand) || void 0 === g ? 0 :
                                                                  g.request) &&
          b.f.lb && (g = b.f.lb[a.continuationCommand.request])) {
      h = new g;
      break a
    } for (h in a) if (b.f.ya[h] && (g = b.f.ya[h])) {
      h = new g;
      break a
    } h = void 0
  } if (!h) return b
      .g(new Hl('Error: No request builder found for command.', a)),
      Lf({});
  g = void 0;
  g = void 0 === g ? {} : g;
  f = a.clickTrackingParams;
  var k = void 0 === k ? !0 : k;
  if (d = P('INNERTUBE_CONTEXT')) {
    d = ob(d);
    d.client || (d.client = {});
    c = d.client;
    'MWEB' === c.clientName &&
        (c.clientFormFactor =
             P('IS_TABLET') ? 'LARGE_FORM_FACTOR' : 'SMALL_FORM_FACTOR');
    c.screenWidthPoints = window.innerWidth;
    c.screenHeightPoints = window.innerHeight;
    c.screenPixelDensity = Math.round(window.devicePixelRatio) || 1;
    c.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var l = void 0 === l ? !1 : l;
    no.C();
    var n =
        ro(165) ? 'USER_INTERFACE_THEME_DARK' : 'USER_INTERFACE_THEME_LIGHT';
    X('kevlar_apply_prefers_color_theme') &&
        (n = ro(165) ? 'USER_INTERFACE_THEME_DARK' :
             ro(174) ? 'USER_INTERFACE_THEME_LIGHT' :
             window.matchMedia &&
                 window.matchMedia('(prefers-color-scheme)').matches &&
                 window.matchMedia('(prefers-color-scheme: dark)').matches ?
                       'USER_INTERFACE_THEME_DARK' :
                       'USER_INTERFACE_THEME_LIGHT');
    l = l ? n : uo() || n;
    c.userInterfaceTheme = l;
    if (X('web_log_connection')) {
      c: {
        if (n = (l = window.navigator) ? l.connection : void 0) {
          l = Ao[n.type || 'unknown'] || 'CONN_UNKNOWN';
          n = Ao[n.f || 'unknown'] || 'CONN_UNKNOWN';
          'CONN_CELLULAR_UNKNOWN' === l && 'CONN_UNKNOWN' !== n && (l = n);
          if ('CONN_UNKNOWN' !== l) break c;
          if ('CONN_UNKNOWN' !== n) {
            l = n;
            break c
          }
        } l = void 0
      } l &&
          (c.connectionType = l)
    }
    (l = ek('EXPERIMENTS_DEBUG')) ?
        c.experimentsToken = 'ZERO' === l ? 'GgIQAQ%3D%3D' : l :
        delete c.experimentsToken;
    l = fj();
    wo.f || (wo.f = new wo);
    c = kb(wo.f.f);
    d.request = Object.assign(
        Object.assign({}, d.request),
        {internalExperimentFlags: l, consistencyTokenJars: c});
    c = no.C();
    l = ro(58);
    c = c.get('gsml', '');
    d.user = Object.assign({}, d.user);
    l && (d.user.enableSafetyMode = l);
    c && (d.user.lockedSafetyMode = !0);
    (l = P('DELEGATED_SESSION_ID')) && !X('pageid_as_header_web') &&
        (d.user.onBehalfOfUser = l);
    k && (k = Pl()) && (d.clientScreenNonce = k);
    f && (d.clickTracking = {clickTrackingParams: f});
    X('web_enable_client_location_service') &&
        (k = zo(), d.client || (d.client = {}),
         k.f ? (d.client.locationInfo || (d.client.locationInfo = {}),
                d.client.locationInfo.latitudeE7 = 1E7 * k.f.coords.latitude,
                d.client.locationInfo.longitudeE7 = 1E7 * k.f.coords.longitude,
                d.client.locationInfo.horizontalAccuracyMeters =
                    k.f.coords.accuracy) :
               k.locationPlayabilityToken &&
                 (d.client.locationPlayabilityToken =
                      k.locationPlayabilityToken));
    k = d
  } else
    nn(Error('Error: No InnerTubeContext shell provided in ytconfig.')), k = {};
  k = {context: k};
  (f = h.i(a)) ?
      h.f(k, f, g) :
      (nn(new Hl('Error: Failed to create Request from Command.', a)),
       k = void 0);
  if (!k)
    return b.g(new Hl('Error: Failed to build request for command.', a)),
           Lf({});
  var p, q;
  h = '/youtubei/v1/' + Jo(h.g());
  (g = null ===
               (q = null === (p = a.commandMetadata) || void 0 === p ?
                    void 0 :
                    p.webCommandMetadata) ||
           void 0 === q ?
       void 0 :
       q.apiUrl) &&
      (h = g);
  h = oi(h, {key: P('INNERTUBE_API_KEY')}, !1);
  if (p = P('INNERTUBE_HOST_OVERRIDE'))
    p = String(p), q = String, f = h.match(bc), h = f[5], g = f[6], f = f[7],
    d = '', h && (d += h), g && (d += '?' + g), f && (d += '#' + f),
    h = p + q(d);
  p = h;
  a = {
    input: p,
    na: {
      method: 'POST',
      mode: pi(p) ? 'same-origin' : 'cors',
      credentials: pi(p) ? 'same-origin' : 'include'
    },
    Fa: k,
    config: {command: a, kc: {identity: e}}
  };
  return Ko(b, a)
}
function Ko(a, b) {
  var c = JSON.stringify(b.Fa);
  return Lo()
      .then(function(d) {
        b.na = Object.assign(Object.assign({}, b.na), {headers: d});
        d = Object.assign(Object.assign({}, b.na), {body: c});
        return a.l.fetch(b.input, d)
      })
      .then(function(d) {
        if (d && a.i)
          for (var e = u(a.i), f = e.next(); !f.done; f = e.next())
            f.value.g(d, b.Fa);
        return Lf(d)
      })
}
function Lo() {
  return Lf(mk()).then(function(a) {
    a = Object.assign(
        {
          'Content-Type': 'application/json',
          'X-Goog-Visitor-Id': P('VISITOR_DATA')
        },
        a);
    return Lf(a)
  })
};
var Mo = ['notification/modify_channel_preference'],
    No = ['browse/edit_playlist'], Oo = ['subscription/subscribe'],
    Po = ['subscription/unsubscribe'];
var Qo = {},
    Ro =
        (Qo.WEB_UNPLUGGED = '^unplugged/',
         Qo.WEB_UNPLUGGED_ONBOARDING = '^unplugged/',
         Qo.WEB_UNPLUGGED_OPS = '^unplugged/',
         Qo.WEB_UNPLUGGED_PUBLIC = '^unplugged/', Qo.WEB_CREATOR = '^creator/',
         Qo.WEB_KIDS = '^kids/', Qo.WEB_EXPERIMENTS = '^experiments/',
         Qo.WEB_MUSIC = '^music/', Qo.WEB_REMIX = '^music/',
         Qo.WEB_MUSIC_EMBEDDED_PLAYER = '^music/',
         Qo.WEB_MUSIC_EMBEDDED_PLAYER = '^main_app/|^sfv/', Qo);
function Jo(a) {
  var b = void 0 === b ? 'UNKNOWN_INTERFACE' : b;
  if (1 === a.length) return a[0];
  var c = Ro[b];
  if (c) {
    var d = new RegExp(c), e = u(a);
    for (c = e.next(); !c.done; c = e.next())
      if (c = c.value, d.exec(c)) return c
  }
  var f = [];
  Object.entries(Ro).forEach(function(g) {
    var h = u(g);
    g = h.next().value;
    h = h.next().value;
    b !== g && f.push(h)
  });
  d = new RegExp(f.join('|'));
  a.sort(function(g, h) {
    return g.length - h.length
  });
  e = u(a);
  for (c = e.next(); !c.done; c = e.next())
    if (c = c.value, !d.exec(c)) return c;
  return a[0]
};
function So() {};
function Fo() {}
pa(Fo, So);
Fo.prototype.g = function() {
  return Oo
};
Fo.prototype.i = function(a) {
  return a.subscribeEndpoint
};
Fo.prototype.f = function(a, b, c) {
  c = void 0 === c ? {} : c;
  b.channelIds && (a.channelIds = b.channelIds);
  b.siloName && (a.siloName = b.siloName);
  b.params && (a.params = b.params);
  c.botguardResponse && (a.botguardResponse = c.botguardResponse);
  c.feature && (a.clientFeature = c.feature)
};
function Go() {}
pa(Go, So);
Go.prototype.g = function() {
  return Po
};
Go.prototype.i = function(a) {
  return a.unsubscribeEndpoint
};
Go.prototype.f = function(a, b) {
  b.channelIds && (a.channelIds = b.channelIds);
  b.siloName && (a.siloName = b.siloName);
  b.params && (a.params = b.params)
};
function Ho() {}
pa(Ho, So);
Ho.prototype.g = function() {
  return Mo
};
Ho.prototype.i = function(a) {
  return a.modifyChannelNotificationPreferenceEndpoint
};
Ho.prototype.f = function(a, b) {
  b.params && (a.params = b.params);
  b.secondaryParams && (a.secondaryParams = b.secondaryParams)
};
function Eo() {}
pa(Eo, So);
Eo.prototype.g = function() {
  return No
};
Eo.prototype.i = function(a) {
  return a.playlistEditEndpoint
};
Eo.prototype.f = function(a, b) {
  b.actions && (a.actions = b.actions);
  b.params && (a.params = b.params);
  b.playlistId && (a.playlistId = b.playlistId)
};
function Io() {}
Io.prototype.fetch = function(a, b) {
  var c = new Request(a, b);
  return Lf(fetch(c).then(function(d) {
    return To(d)
  })['catch'](function(d) {
    on(d)
  }))
};
function To(a) {
  var b = a.json();
  a.redirected || a.ok || b.then(function(c) {
    on(new Hl('Error: API fetch failed', a.status, a.url, c))
  });
  return b
};
var Do;
function Uo(a) {
  Q.call(this, 1, arguments)
}
A(Uo, Q);
function Vo(a, b) {
  Q.call(this, 2, arguments);
  this.g = a;
  this.f = b
}
A(Vo, Q);
function Wo(a, b, c, d) {
  Q.call(this, 1, arguments);
  this.f = b;
  this.itemType = c || null;
  this.itemId = d || null
}
A(Wo, Q);
function Xo(a, b) {
  Q.call(this, 1, arguments);
  this.g = a;
  this.f = b || null
}
A(Xo, Q);
function Yo(a) {
  Q.call(this, 1, arguments)
}
A(Yo, Q);
var Zo = new R('ypc-core-load', Uo), $o = new R('ypc-guide-sync-success', Vo),
    ap = new R('ypc-purchase-success', Wo),
    bp = new R('ypc-subscription-cancel', Yo),
    cp = new R('ypc-subscription-cancel-success', Xo),
    dp = new R('ypc-init-subscription', Yo);
var ep = [];
function fp(a) {
  a.g ? S(Zo, new Uo(function() {
            S(dp, new Yo(a.g))
          })) :
      X('web_classic_innertube_subscription_update') ?
        gp(a.f, a.params) :
        hp(a.f, a.l, a.i, a.source, a.params)
}
function ip(a) {
  a.g ? S(Zo, new Uo(function() {
            S(bp, new Yo(a.g))
          })) :
      X('web_classic_innertube_subscription_update') ?
        jp(a.f, a.params) :
        kp(a.f, a.o, a.l, a.i, a.source)
}
function lp(a) {
  mp(eb(a.f))
}
function np(a) {
  op(eb(a.f))
}
function pp(a) {
  qp(a.i, a.g, a.f)
}
function rp(a) {
  var b = a.itemId, c = a.f.subscriptionId;
  b && c && S(Di, new wi(b, c, a.f.channelInfo))
}
function sp(a) {
  var b = a.f;
  jb(a.g, function(c, d) {
    S(Di, new wi(d, c, b[d]))
  })
}
function tp(a) {
  S(Ii, new ti(a.g.itemId));
  a.f && a.f.length && (up(a.f, Ii), up(a.f, Ki))
}
function gp(a, b) {
  var c = new ti(a);
  S(Bi, c);
  Of(Co({
       commandMetadata: {
         webCommandMetadata: {apiUrl: '/youtubei/v1/subscription/subscribe'}
       },
       subscribeEndpoint: {channelIds: [a], params: b}
     }).then(function() {
    S(Di,
      new wi(
          a, Math.round(1E4 * Math.random()).toString(),
          {thumbnail: '', title: '', url: '', sc: a}))
  }),
     function() {
       S(Ci, c)
     })
}
function hp(a, b, c, d, e) {
  var f = new ti(a);
  S(Bi, f);
  var g = {};
  g.c = a;
  c && (g.eurl = c);
  d && (g.source = d);
  c = {};
  (d = P('PLAYBACK_ID')) && (c.plid = d);
  (d = P('EVENT_ID')) && (c.ei = d);
  e && (c.params = e);
  b && vp(b, c);
  Sj('/subscription_ajax?action_create_subscription_to_channel=1', {
    method: 'POST',
    qa: g,
    D: c,
    onSuccess: function(h, k) {
      var l = k.response;
      S(Di, new wi(a, l.id, l.channel_info));
      l.show_feed_privacy_dialog && th('SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG', a)
    },
    ba: function() {
      S(Ci, f)
    }
  })
}
function jp(a, b) {
  var c = new ti(a);
  S(Gi, c);
  Of(Co({
       commandMetadata: {
         webCommandMetadata: {apiUrl: '/youtubei/v1/subscription/unsubscribe'}
       },
       unsubscribeEndpoint: {channelIds: [a], params: b}
     }).then(function() {
    S(Ii, c)
  }),
     function() {
       S(Hi, c)
     })
}
function kp(a, b, c, d, e) {
  var f = new ti(a);
  S(Gi, f);
  var g = {};
  g.c = a;
  d && (g.eurl = d);
  e && (g.source = e);
  d = {};
  d.c = a;
  d.s = b;
  (a = P('PLAYBACK_ID')) && (d.plid = a);
  (a = P('EVENT_ID')) && (d.ei = a);
  c && vp(c, d);
  Sj('/subscription_ajax?action_remove_subscriptions=1', {
    method: 'POST',
    qa: g,
    D: d,
    onSuccess: function() {
      S(Ii, f)
    },
    ba: function() {
      S(Hi, f)
    }
  })
}
function qp(a, b, c) {
  if (a) {
    var d = {};
    d.channel_id = a;
    switch (b) {
      case 'receive-all-updates':
        d.receive_all_updates = !0;
        break;
      case 'receive-no-updates':
        d.receive_no_updates = !0;
        d.receive_post_updates = !1;
        break;
      case 'receive-highlight-updates':
        d.receive_all_updates = !1;
        d.receive_no_updates = !1;
        break;
      default:
        return
    }
    null === c || d.receive_no_updates || (d.receive_post_updates = c);
    var e = new ui(a, b, c);
    Sj('/subscription_ajax?action_update_subscription_preferences=1', {
      method: 'POST',
      D: d,
      onError: function() {
        S(Oi, e)
      },
      onSuccess: function() {
        S(Ni, e)
      }
    })
  }
}
function mp(a) {
  if (a.length) {
    var b = gb(a, 0, 40);
    S('subscription-batch-subscribe-loading');
    up(b, Bi);
    var c = {};
    c.a = b.join(',');
    var d = function() {
      S('subscription-batch-subscribe-loaded');
      up(b, Ci)
    };
    Sj('/subscription_ajax?action_create_subscription_to_all=1', {
      method: 'POST',
      D: c,
      onSuccess: function(e, f) {
        d();
        var g = f.response, h = g.id;
        if (Array.isArray(h) && h.length == b.length) {
          var k = g.channel_info_map;
          B(h, function(l, n) {
            var p = b[n];
            S(Di, new wi(p, l, k[p]))
          });
          a.length ? mp(a) : S('subscription-batch-subscribe-finished')
        }
      },
      onError: function() {
        d();
        S('subscription-batch-subscribe-failure')
      }
    })
  }
}
function op(a) {
  if (a.length) {
    var b = gb(a, 0, 40);
    S('subscription-batch-unsubscribe-loading');
    up(b, Gi);
    var c = {};
    c.c = b.join(',');
    var d = function() {
      S('subscription-batch-unsubscribe-loaded');
      up(b, Hi)
    };
    Sj('/subscription_ajax?action_remove_subscriptions=1', {
      method: 'POST',
      D: c,
      onSuccess: function() {
        d();
        up(b, Ii);
        a.length && op(a)
      },
      onError: function() {
        d()
      }
    })
  }
}
function up(a, b) {
  B(a, function(c) {
    S(b, new ti(c))
  })
}
function vp(a, b) {
  var c = mi(a), d;
  for (d in c) b[d] = c[d]
};
z('yt.setConfig', eh);
z('yt.config.set', eh);
z('ytbin.www.subscribeembed.init', function() {
  var a = !0;
  ep.push(Kh(Ai, fp), Kh(Fi, ip));
  a ||
      ep.push(
          Kh(Ei, fp), Kh(Ji, ip), Kh(yi, lp), Kh(zi, np), Kh(Mi, pp),
          Kh(ap, rp), Kh(cp, tp), Kh($o, sp));
  a = Zm.C();
  var b = U(a);
  b in ki ||
      (a.register(), hi(a, 'yt-uix-init-' + b, a.init),
       hi(a, 'yt-uix-dispose-' + b, a.dispose), ki[b] = a);
  ko()
});
}).call(this);
