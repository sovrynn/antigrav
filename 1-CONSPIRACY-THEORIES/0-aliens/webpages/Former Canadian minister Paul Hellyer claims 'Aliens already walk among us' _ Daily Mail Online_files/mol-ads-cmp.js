(function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  if (typeof window.CustomEvent !== 'function') {
    var CustomEvent$1 = function CustomEvent(event, params) {
      params = Object.assign({
        bubbles: false,
        cancelable: false,
        detail: undefined
      }, params || {});
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles || false, params.cancelable || false, params.detail);
      return evt;
    };

    CustomEvent$1.prototype = Event.prototype; // @ts-ignore

    window.CustomEvent = CustomEvent$1;
  }

  function curry(fn) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fn.length;

    var currified = function currified() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length === 0) {
        return currified;
      }

      if (args.length >= length) {
        return fn.apply(void 0, args);
      }

      var boundFn = fn.bind.apply(fn, [fn].concat(args));
      return curry(boundFn, length - args.length);
    };

    return currified;
  }

  var evolve = curry(function (fns, obj) {
    var rtn = {};

    var _arr = Object.entries(obj);

    for (var _i = 0; _i < _arr.length; _i++) {
      var _arr$_i = _slicedToArray(_arr[_i], 2),
          key = _arr$_i[0],
          value = _arr$_i[1];

      rtn[key] = typeof fns[key] === 'function' ? fns[key](value) : value;
    }

    return rtn;
  });
  var filter = curry(function (filter, obj) {
    var result = {};

    var _arr2 = Object.entries(obj);

    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var _arr2$_i = _slicedToArray(_arr2[_i2], 2),
          key = _arr2$_i[0],
          value = _arr2$_i[1];

      if (filter(value, key)) {
        result[key] = value;
      }
    }

    return result;
  });

  var isUndefined = function isUndefined(subject) {
    return typeof subject === 'undefined';
  };

  var cast = function cast(subject) {
    if (isUndefined(subject)) {
      return [];
    } else if (Array.isArray(subject)) {
      return subject;
    } else {
      return [subject];
    }
  };

  var CMPError =
  /*#__PURE__*/
  function (_Error) {
    _inherits(CMPError, _Error);

    function CMPError() {
      _classCallCheck(this, CMPError);

      return _possibleConstructorReturn(this, _getPrototypeOf(CMPError).apply(this, arguments));
    }

    return CMPError;
  }(_wrapNativeSuper(Error));

  var ElementDecorator =
  /*#__PURE__*/
  function () {
    function ElementDecorator(raw) {
      _classCallCheck(this, ElementDecorator);

      this.raw = raw;
    }

    _createClass(ElementDecorator, [{
      key: "on",
      value: function on(event, fns) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = cast(fns)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var fn = _step.value;
            this.raw.addEventListener(event, fn);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return this;
      }
    }, {
      key: "click",
      value: function click(fns) {
        return this.on('click', fns);
      }
    }, {
      key: "remove",
      value: function remove() {
        var parent = this.raw.parentNode;

        if (parent) {
          parent.removeChild(this.raw);
        }

        return this;
      }
    }, {
      key: "replace",
      value: function replace(elementDecorator) {
        var parent = this.raw.parentNode;

        if (!parent) {
          throw new CMPError('Cannot replace element');
        }

        parent.replaceChild(elementDecorator.raw, this.raw);
        return elementDecorator;
      }
    }, {
      key: "submit",
      value: function submit(fns) {
        return this.on('submit', fns);
      }
    }, {
      key: "appendChild",
      value: function appendChild(child) {
        this.raw.appendChild(child.raw);
        return this;
      }
    }]);

    return ElementDecorator;
  }();

  var setAttributes = function setAttributes(element, attributes) {
    var _arr = Object.entries(attributes);

    var _loop = function _loop() {
      var _arr$_i = _slicedToArray(_arr[_i], 2),
          key = _arr$_i[0],
          attribute = _arr$_i[1];

      var value = void 0;

      if (Array.isArray(attribute)) {
        value = attribute.join(' ');
      } else if (_typeof(attribute) === 'object') {
        value = Object.keys(attribute).filter(function (key) {
          return attribute[key];
        }).join(' ');
      } else if (typeof attribute === 'boolean') {
        value = '';
      } else {
        value = '' + attribute;
      }

      element.setAttribute(key, value);
    };

    for (var _i = 0; _i < _arr.length; _i++) {
      _loop();
    }
  };

  var appendChildren = function appendChildren(element, children, doc) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var child = _step2.value;
        element.appendChild(typeof child === 'string' ? doc.createTextNode(child) : child.raw);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  var TRANSLATE_REG_EXP = /(%\{([^\}]+)\})/g;
  var translate = curry(function (i18n, key) {
    var replacements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var children = i18n.t(key).split(TRANSLATE_REG_EXP);
    var translated = children.slice(0, 1);

    for (var i = 1; i < children.length; i++) {
      var child = children[i];
      translated.push(TRANSLATE_REG_EXP.test(child) ? replacements[children[++i]] : child);
    }

    return translated;
  });
  var $ = function $(name) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var doc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;
    var element = doc.createElement(name);
    setAttributes(element, attributes);
    appendChildren(element, Array.isArray(children) ? children : [children], doc);
    return new ElementDecorator(element);
  };
  var ps = function ps(str) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return str.split('\n').map(function (para) {
      return $('p', attrs, para);
    });
  };

  function render(_ref) {
    var body = _ref.body,
        footer = _ref.footer,
        _ref$headerLevel = _ref.headerLevel,
        headerLevel = _ref$headerLevel === void 0 ? 2 : _ref$headerLevel,
        title = _ref.title;
    var view = $('div', {
      class: 'mol-ads-cmp--modal'
    }, [$('div', {
      class: 'mol-ads-cmp--modal-dialog'
    }, [$('div', {
      class: 'mol-ads-cmp--modal-content'
    }, [$('div', {
      class: 'mol-ads-cmp--modal-header'
    }, [$("h".concat(headerLevel), {
      class: 'mol-ads-cmp--modal-title'
    }, title)]), $('div', {
      class: 'mol-ads-cmp--modal-body'
    }, body), $('div', {
      class: 'mol-ads-cmp--modal-footer'
    }, footer)])])]);
    return Object.assign(view, {
      close: function close() {
        return view.remove();
      }
    });
  }

  var splitOnFirst = function splitOnFirst(pattern, str) {
    var index = str.indexOf(pattern);
    return [str.substring(0, index), str.substring(index + 1)];
  };
  var kebabCase = function kebabCase(str) {
    return str.toLowerCase().replace(/[\W_]+/g, '-');
  };
  var replace = curry(function (pattern, replacement, subject) {
    return subject.replace(pattern, replacement);
  });
  var camelCase = replace(/(?:^\w|[A-Z]|\b\w|\W\w|\s+)/g, function (match, index) {
    if (+match === 0) {
      return '';
    }

    return (index === 0 ? match.toLowerCase() : match.toUpperCase()).replace(/\W+/, '');
  });
  var padStart = curry(function (length, char, subject) {
    return subject.padStart(length, char);
  });

  function randomId() {
    function transformTemplate(templateChar) {
      return charToNumber(templateChar).toString(16);
    }

    function generateNumber() {
      return Math.random() * 16 | 0;
    }

    function charToNumber(char) {
      var randomNumber = generateNumber();
      return char === 'x' ? randomNumber : randomNumber & 0x3 | 0x8;
    }

    var ID_TEMPLATE = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return ID_TEMPLATE.replace(/[xy]/g, transformTemplate);
  }

  var onContentLoaded = function onContentLoaded(handler) {
    if (['complete', 'loaded', 'interactive'].includes(document.readyState)) {
      handler();
    } else {
      document.addEventListener('DOMContentLoaded', handler);
    }
  };
  var parentQuerySelector = function parentQuerySelector(element, selector) {
    var collection = document.querySelectorAll(selector);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = collection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var possibleParent = _step.value;

        if (possibleParent.contains(element)) {
          return possibleParent;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  var switchNav = function switchNav(container, navLink) {
    var current = container.querySelector('.mol-ads-cmp--tab.active');

    if (current) {
      current.classList.remove('active');
    }

    navLink.parentNode.classList.add('active');
  };

  var switchBody = function switchBody(container, navLink) {
    var current = container.querySelector('.mol-ads-cmp--tab-body.active');

    if (current) {
      current.classList.remove('active');
    }

    var id = navLink.dataset.current;
    var body = id && document.getElementById(id);

    if (body) {
      body.classList.add('active');
    }
  };

  var switchTabs = function switchTabs(event) {
    event.preventDefault();
    var target = event.target;

    if (!target) {
      event.stopImmediatePropagation();
      return;
    }

    var container = parentQuerySelector(target, '.mol-ads-cmp--tabs-container');

    if (!container) {
      throw new Error('Can\'t find tab container');
    }

    switchNav(container, target);
    switchBody(container, target);
  };

  function tabs (_ref) {
    var _ref$onSwitch = _ref.onSwitch,
        onSwitch = _ref$onSwitch === void 0 ? function () {} : _ref$onSwitch,
        items = _ref.items;
    var settings = $('div', {
      class: 'mol-ads-cmp--tabs-container'
    }, [$('ul', {
      class: 'mol-ads-cmp--tabs'
    }, items.map(function (_ref2, index) {
      var title = _ref2.title,
          _ref2$onSelect = _ref2.onSelect,
          onSelect = _ref2$onSelect === void 0 ? function () {} : _ref2$onSelect;
      return $('li', {
        class: {
          'active': index === 0,
          'mol-ads-cmp--tab': true
        }
      }, [$('a', {
        'class': 'mol-ads-cmp--tab-trigger',
        'data-current': kebabCase(title),
        'data-index': index,
        'href': "#".concat(kebabCase(title))
      }, title).click([switchTabs, onSwitch]).click(onSelect)]);
    }))].concat(_toConsumableArray(items.map(function (item, index) {
      return $('div', {
        class: {
          'active': index === 0,
          'mol-ads-cmp--tab-body': true
        },
        id: kebabCase(item.title)
      }, item.body);
    }))));
    return Object.assign(settings, {
      switchTabs: function switchTabs() {
        var event = new CustomEvent('click', {
          cancelable: false
        });
        onSwitch(event);
        var tab = settings.raw.querySelector('.mol-ads-cmp--tab:not(.active) .mol-ads-cmp--tab-trigger');

        if (tab) {
          switchNav(settings.raw, tab);
          switchBody(settings.raw, tab);
        }
      }
    });
  }

  function confirmation (_ref) {
    var confirmText = _ref.confirmText,
        declineText = _ref.declineText,
        footer = _ref.footer,
        message = _ref.message,
        _ref$onConfirm = _ref.onConfirm,
        onConfirm = _ref$onConfirm === void 0 ? function () {} : _ref$onConfirm,
        _ref$onDecline = _ref.onDecline,
        onDecline = _ref$onDecline === void 0 ? function () {} : _ref$onDecline,
        title = _ref.title;
    return render({
      body: $('div', {
        class: 'mol-ads-cmp--modal-message'
      }, message),
      footer: footer || [$('button', {
        'class': 'mol-ads-cmp--btn-secondary',
        'data-cmp-no-consent': true,
        'type': 'button'
      }, declineText).click(onDecline), $('button', {
        'class': 'mol-ads-cmp--btn-primary',
        'data-cmp-no-consent': true,
        'type': 'button'
      }, confirmText).click(onConfirm)],
      title: title
    });
  }

  var TRACKING_SIGNATURE = '__cmp_ui_tracking\n';
  var postTrackingEvent = function postTrackingEvent(event) {
    window.top.postMessage(TRACKING_SIGNATURE + event, '*');
  };

  function layer3Message(_ref) {
    var hasTPhrase = _ref.hasTPhrase,
        renderConfig = _ref.renderConfig,
        translate$$1 = _ref.translate;
    var privacyText = hasTPhrase('settings.footer.privacy') ? translate$$1('settings.footer.privacy') : renderConfig.layerThree.privacyText;
    var privacyPolicyURL = hasTPhrase('links.privacyPolicy') ? translate$$1('links.privacyPolicy') : ~window.location.origin.indexOf('metro.co.uk') ? 'https://metro.co.uk/privacypolicy/' : 'https://www.dailymail.co.uk/privacy';
    return $('span', {}, ['We and our advertising partners collect personal information (such as the cookies stored on your browser, the advertising identifier on your mobile device, or the IP address of your device) when you visit our site or use our app. We, and our partners, use this information to tailor and deliver ads to you on our site or app, or to help tailor ads to you when you visit others "sites or use others" apps. To tailor ads that may be more relevant to you, we and/or our partners may share the information we collect with third parties.', $('br', {}), $('br', {}), 'To learn more about the information we collect and use for advertising purposes, please see our ', $('a', {
      href: privacyPolicyURL
    }, 'Privacy Policy'), ". If you do not wish for us or our partners to sell your personal information to third parties for advertising purposes, select the applicable control from the \u201C".concat(privacyText, "\u201D link provided. Note that although we will not sell your personal information after you click that button, we will continue to share some personal information with our partners (who will function as our service providers in such instance) to help us perform advertising-related functions such as, but not limited to, measuring the effectiveness of our ads, managing how many times you may see an ad, reporting on the performance of our ads, ensuring services are working correctly and securely, providing aggregate statistics and analytics, improving when and where you may see ads and/or reducing ad fraud."), $('br', {}), $('br', {}), 'If you access this site or app from other devices or browsers, visit the link below from those devices or browsers to ensure your choice applies to the data collected when you use those devices or browsers. If you use different browsers, devices or platforms, you will need to opt out on each browser, device or platform.', $('br', {}), $('br', {}), " Additionally, although clicking the \u201C".concat(privacyText, "\u201D link will opt you out of the sale of your personal information for advertising purposes, it will not opt you out of the use of previously collected and sold personal information (except for personal information sold within 90 days prior to your exercising your right to opt out) or all interest-based advertising."), $('br', {}), $('br', {}), 'If you would like more information about how to opt out of interest-based advertising in desktop and mobile browsers on a particular device, please visit ', $('a', {
      href: 'http://optout.aboutads.info/#/'
    }, 'http://optout.aboutads.info/#/'), ' and ', $('a', {
      href: 'http://optout.networkadvertising.org/#'
    }, 'http://optout.networkadvertising.org/#'), '. You may download the AppChoices app at ', $('a', {
      href: 'http://www.aboutads.info/appchoices'
    }, 'http://www.aboutads.info/appchoices'), ' to opt out in connection with mobile apps, or use the platform controls on your mobile device to opt out.']);
  }

  var accordion = function accordion(title, content) {
    var children = [$('div', {
      class: 'mol-ads-cmp-accordion-title'
    }, [$('div', {
      class: 'mol-ads-cmp-accordion-title-container'
    }, [title]), $('div', {
      class: 'mol-ads-cmp-accordion-chevron'
    }, '❮')]), $('div', {
      class: 'mol-ads-cmp-accordion-panel'
    }, content)];
    return $('div', {
      class: 'mol-ads-cmp-accordion'
    }, children).click(function (e) {
      var target = e.currentTarget;

      if (target) {
        var classNames = target.className.split(' ');
        if (classNames.find(function (el) {
          return el === 'active';
        })) classNames.pop();else classNames.push('active');
        target.className = classNames.join(' ');
        var panel = target.querySelector('.mol-ads-cmp-accordion-panel');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  };

  var byName = function byName(a, b) {
    return a.name.localeCompare(b.name);
  };

  var renderAdvertisers = function renderAdvertisers(vendorList) {
    var vendors = vendorList.vendors,
        purposes = vendorList.purposes,
        features = vendorList.features;
    return $('ul', {
      class: 'mol-ads-cmp--settings-consents'
    }, _toConsumableArray(vendors).sort(byName).map(function (vendor) {
      return $('li', {
        class: 'mol-ads-cmp--settings-consent'
      }, [accordion($('div', {
        class: 'mol-ads-cmp-accordion-title-content'
      }, [$('div', {
        class: 'mol-ads-cmp--settings-consent-name'
      }, vendor.name), $('a', {
        class: 'mol-ads-cmp--settings-consent-policy',
        href: vendor.policyUrl,
        target: '_blank'
      }, 'Privacy policy')]), [$('div', {}, Object.keys(vendor).filter(function (key) {
        var include = ['purposeIds', 'legIntPurposeIds', 'featureIds'];
        if (include.find(function (el) {
          return el === key && vendor[key].length > 0;
        })) return true;
        return false;
      }).map(function (key) {
        var details = {
          purposeIds: {
            title: 'Relying on Consent for:',
            data: purposes
          },
          legIntPurposeIds: {
            title: 'Relying on Legitimate Interest for:',
            data: purposes
          },
          featureIds: {
            title: 'Features:',
            data: features
          }
        };
        return $('div', {
          class: 'mol-ads-cmp-list'
        }, [$('div', {
          class: 'mol-ads-cmp-list-header'
        }, details[key].title), $('ul', {}, vendor[key].map(function (id) {
          return $('li', {}, "- ".concat(details[key].data.find(function (el) {
            return el.id === id;
          }).name));
        }))]);
      }))])]);
    }));
  };

  function render$1(_ref) {
    var onAccept = _ref.onAccept,
        onCloseSettings = _ref.onCloseSettings,
        onDecline = _ref.onDecline,
        nonTCFRegisteredVendors = _ref.nonTCFRegisteredVendors,
        nonRegisteredVendors = _ref.nonRegisteredVendors,
        hasTPhrase = _ref.hasTPhrase,
        translate$$1 = _ref.translate,
        vendorList = _ref.vendorList,
        renderConfig = _ref.renderConfig;
    var selectedTab = 'functional';
    var settingTabs = tabs({
      items: [{
        body: $('div', {}, [$('div', {
          class: 'mol-ads-cmp--settings-purposes-title'
        }, 'Purposes'), $('br'), translate$$1('settings.advertising.purposes.description_1'), $('a', {
          href: renderConfig.layerTwo.ccpaFrameworkHref || 'https://www.iab.com/guidelines/ccpa-framework/',
          target: '_blank'
        }, "The ".concat(renderConfig.layerTwo.ccpaFrameworkText)), ' and complies with its specifications and policies.', $('br'), $('br'), translate$$1('We work with advertising partners to show content and advertisement for products and services you might like. Understand how your data may be used and who our partners are below:'), $('ul', {
          class: 'mol-ads-cmp--settings-consents'
        }, vendorList.purposes.map(function (_ref2, i) {
          var id = _ref2.id,
              name = _ref2.name,
              description = _ref2.description;
          return $('li', {
            class: 'mol-ads-cmp--settings-consent'
          }, [accordion($('div', {
            class: 'mol-ads-cmp-accordion-title-content'
          }, [$('div', {
            class: 'mol-ads-cmp--settings-consent-bullet'
          }, [$('div', {
            class: 'mol-ads-cmp-circle'
          }, "".concat(i + 1)), $('div', {}, name)])]), $('div', {}, [$('div', {}, description), $('br'), $('div', {}, 'Vendors that use data in this way:'), $('br'), $('div', {
            class: 'mol-ads-policy-link-list'
          }, vendorList.vendors.filter(function (vendor) {
            return vendor.purposeIds.find(function (el) {
              return el === id;
            });
          }).map(function (_ref3) {
            var name = _ref3.name,
                policyUrl = _ref3.policyUrl;
            return $('a', {
              href: policyUrl,
              target: '_blank'
            }, name);
          }))]))]);
        })), $('h3', {}, translate$$1('settings.advertising.purposes.descriptionExtraH5'))].concat(_toConsumableArray(ps(translate$$1('settings.advertising.purposes.descriptionExtraP5'))), [$('ul', {
          class: 'mol-ads-cmp--settings-consents'
        }, vendorList.features.map(function (_ref4, i) {
          var id = _ref4.id,
              name = _ref4.name;
          return $('li', {
            class: 'mol-ads-cmp--settings-consent'
          }, [accordion($('div', {
            class: 'mol-ads-cmp-accordion-title-content'
          }, [$('div', {
            class: 'mol-ads-cmp--settings-consent-name'
          }, ['A. Offline Data Matching', 'B. Device linking', 'C. Precise geographic location data'][i])]), $('div', {}, [$('div', {}, translate$$1("settings.advertising.purposes.descriptionExtraP".concat(i + 6))), $('br'), $('div', {}, 'Vendors that use data in this way:'), $('br'), $('div', {
            class: 'mol-ads-policy-link-list'
          }, vendorList.vendors.filter(function (vendor) {
            return vendor.featureIds.find(function (el) {
              return el === id;
            });
          }).map(function (_ref5) {
            var name = _ref5.name,
                policyUrl = _ref5.policyUrl;
            return $('a', {
              href: policyUrl,
              target: '_blank'
            }, name);
          }))]))]);
        }))])),
        onSelect: function onSelect() {
          selectedTab = 'advertising';
          postTrackingEvent('settings advertising tab clicked');
        },
        title: 'Purposes'
      }, {
        body: $('div', {}, [$('strong', {
          class: 'mol-ads-vendorlist-title'
        }, 'Associated Newspapers Ltd.'), renderAdvertisers({
          purposes: vendorList.purposes,
          features: vendorList.features,
          vendors: [{
            id: 2,
            name: 'Associated Newspapers Ltd. (MailOnline, ThisIsMoney & Metro)',
            policyUrl: '/privacy',
            purposeIds: [1, 2, 3, 4],
            legIntPurposeIds: [5],
            featureIds: [1]
          }]
        }), $('strong', {
          class: 'mol-ads-vendorlist-title'
        }, 'TCF-Registered Vendors'), $('p', {
          class: 'mol-ads-vendors-paragraph'
        }, ['Below is a list of the third-party advertising companies who may have access to this data for the purposes and features they each declare when you click ', $('strong', {}, '"Got It" '), 'or ', $('strong', {}, '"Allow All".')]), renderAdvertisers(vendorList), $('strong', {
          class: 'mol-ads-vendorlist-title'
        }, 'Non-TCF Registered Vendors'), $('ul', {
          class: 'mol-ads-non-registered-vendors'
        }, nonTCFRegisteredVendors.sort(function (a, b) {
          return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0;
        }).map(function (vendor) {
          return $('li', {}, [$('div', {
            class: 'mol-ads-non-registered-item'
          }, [$('div', {}, vendor.name), $('a', {
            href: vendor.policyUrl,
            target: '_blank'
          }, 'Privacy policy')])]);
        })), $('strong', {
          class: 'mol-ads-vendorlist-title'
        }, 'Non–Registered Vendors'), $('ul', {
          class: 'mol-ads-non-registered-vendors'
        }, nonRegisteredVendors.sort(function (a, b) {
          return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0;
        }).map(function (vendor) {
          return $('li', {}, [$('div', {
            class: 'mol-ads-non-registered-item'
          }, [$('div', {}, vendor.name), $('a', {
            href: vendor.policyUrl,
            target: '_blank'
          }, 'Privacy policy')])]);
        }))]),
        onSelect: function onSelect() {
          selectedTab = 'functional';
          postTrackingEvent('settings functional tab clicked');
        },
        title: 'Vendors'
      }],
      onSwitch: function onSwitch() {// settings.raw.classList.toggle('mol-ads-cmp--settings-functional')
        // settings.raw.classList.toggle('mol-ads-cmp--settings-advertising')
      }
    });

    var confirm = function confirm() {
      var close = function close() {
        view.close();
      };

      var view = confirmation({
        confirmText: translate$$1('settings.confirmation.confirm'),
        declineText: translate$$1('settings.confirmation.decline'),
        footer: undefined,
        message: layer3Message({
          hasTPhrase: hasTPhrase,
          renderConfig: renderConfig,
          translate: translate$$1
        }),
        onConfirm: [close, function () {
          return postTrackingEvent('settings advertising panel disallow declined');
        }].concat(_toConsumableArray(cast(onAccept)), _toConsumableArray(cast(onCloseSettings))),
        onDecline: [close, function () {
          return postTrackingEvent('settings advertising panel disallow confirmed');
        }].concat(_toConsumableArray(cast(onDecline)), _toConsumableArray(cast(onCloseSettings))),
        title: translate$$1('settings.confirmation.title')
      });
      settings.appendChild(view);
    };

    var settingsModal = render({
      body: settingTabs,
      footer: [$('a', {
        class: 'mol-ads-cmp-footer-privacy'
      }, hasTPhrase('settings.footer.privacy') ? translate$$1('settings.footer.privacy') : renderConfig.layerTwo.footerPrivacyText).click(confirm) // FIXME if confirm denied then postTrackingEvent
      .click(function () {
        return postTrackingEvent('settings advertising panel disallow');
      }), $('div', {
        class: 'mol-ads-cmp-footer-buttons'
      }, [$('button', {
        class: 'mol-ads-cmp--btn-primary',
        type: 'button'
      }, 'Allow all').click(function () {
        return postTrackingEvent("settings ".concat(selectedTab, " panel allow all"));
      }).click(onAccept).click(onCloseSettings)])],
      title: translate$$1('settings.title')
    });
    var settings = $('div', {
      class: 'mol-ads-cmp--settings mol-ads-cmp--settings-advertising'
    }, settingsModal);
    return settings;
  }

  var DEBUG = 3;
  var INFO = 2;
  var WARN = 1;
  var ERROR = 0;
  var options = {
    level: ERROR,
    on: false,
    api: ''
  };

  var validateLevel = function validateLevel(level) {
    if (typeof level === 'number') {
      return level > DEBUG ? DEBUG : level;
    }

    switch (level) {
      case 'error':
        return ERROR;

      case 'warn':
        return WARN;

      case 'debug':
        return DEBUG;

      default:
        return INFO;
    }
  };

  var evolveOptions = evolve({
    level: validateLevel
  });
  var init = function init($options) {
    Object.assign(options, evolveOptions($options || {}));
    var levels = ['debug', 'info', 'warn', 'error'];

    for (var _i = 0; _i < levels.length; _i++) {
      var level = levels[_i];

      if (!console.hasOwnProperty(level)) {
        // @ts-ignore
        console[level] = console.log;
      }
    }
  };
  var getLevelText = function getLevelText() {
    if (!options.on) {
      return 'off';
    }

    switch (options.level) {
      case ERROR:
        return 'error';

      case WARN:
        return 'warn';

      case INFO:
        return 'info';

      case DEBUG:
        return 'debug';

      default:
        return 'off';
    }
  };
  function logline(_thing) {
    var _console, _console2, _console3, _console4, _console5;

    var messageLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : INFO;
    messageLevel = validateLevel(messageLevel);

    if (!options.on || messageLevel > options.level) {
      return;
    }

    var thing = castArray(_thing);
    var prepend = "[mol-ads-cmp-".concat(options.api, "]");

    switch (messageLevel) {
      case DEBUG:
        (_console = console).debug.apply(_console, ["".concat(prepend, " [DEBUG] ")].concat(_toConsumableArray(thing)));

        break;

      case INFO:
        (_console2 = console).info.apply(_console2, ["".concat(prepend, " [INFO] ")].concat(_toConsumableArray(thing)));

        break;

      case WARN:
        (_console3 = console).warn.apply(_console3, ["".concat(prepend, " [WARN] ")].concat(_toConsumableArray(thing)));

        break;

      case ERROR:
        (_console4 = console).error.apply(_console4, ["".concat(prepend, " [ERROR] ")].concat(_toConsumableArray(thing)));

        break;

      default:
        (_console5 = console).log.apply(_console5, _toConsumableArray(thing));

        break;
    }
  }

  var castArray = function castArray(something) {
    if (typeof something === 'undefined') {
      return [];
    } else if (Array.isArray(something)) {
      return something;
    } else {
      return [something];
    }
  };

  function log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var level = args.pop();
    logline(args, level);
  }

  function request(URL) {
    return fetch(URL).then(function (response) {
      return response.json();
    }).then(function (data) {
      return data;
    });
  }

  function fetchNonRegisteredVendorList(_x, _x2) {
    return _fetchNonRegisteredVendorList.apply(this, arguments);
  }

  function _fetchNonRegisteredVendorList() {
    _fetchNonRegisteredVendorList = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(baseURL, version) {
      var url, resp;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = "".concat(baseURL, "/nrv/").concat(version, "/vendor-list.json");
              logline("fetching nrv: ".concat(url), DEBUG);
              _context2.next = 4;
              return request(url);

            case 4:
              resp = _context2.sent;
              return _context2.abrupt("return", resp.map(function (_ref6) {
                var provider_id = _ref6.provider_id,
                    provider_name = _ref6.provider_name,
                    policy_url = _ref6.policy_url;
                return {
                  id: provider_id,
                  name: provider_name,
                  policyUrl: policy_url
                };
              }));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    return _fetchNonRegisteredVendorList.apply(this, arguments);
  }

  function fetchNonTCFRegisteredVendorList(_x3, _x4) {
    return _fetchNonTCFRegisteredVendorList.apply(this, arguments);
  }

  function _fetchNonTCFRegisteredVendorList() {
    _fetchNonTCFRegisteredVendorList = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(baseURL, version) {
      var url, resp;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url = "".concat(baseURL, "/custom/").concat(version, "/vendor-list.json");
              logline("fetching cvl: ".concat(url), DEBUG);
              _context3.next = 4;
              return request(url);

            case 4:
              resp = _context3.sent;
              return _context3.abrupt("return", resp.map(function (_ref7) {
                var provider_id = _ref7.provider_id,
                    provider_name = _ref7.provider_name,
                    policy_url = _ref7.policy_url;
                return {
                  id: provider_id,
                  name: provider_name,
                  policyUrl: policy_url
                };
              }));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    return _fetchNonTCFRegisteredVendorList.apply(this, arguments);
  }

  var fetchGVL =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(baseURL, version) {
      var url, _ref2, features, vendorListVersion, lastUpdated, purposes, vendors;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "".concat(baseURL, "/gvl/").concat(version, "/vendor-list.json");
              logline("fetching GVL: ".concat(url), DEBUG);
              _context.next = 4;
              return request(url);

            case 4:
              _ref2 = _context.sent;
              features = _ref2.features;
              vendorListVersion = _ref2.vendorListVersion;
              lastUpdated = _ref2.lastUpdated;
              purposes = _ref2.purposes;
              vendors = _ref2.vendors;
              return _context.abrupt("return", {
                features: Object.values(features).map(function (_ref3) {
                  var id = _ref3.id,
                      name = _ref3.name,
                      description = _ref3.description;
                  return {
                    id: id,
                    name: name,
                    description: description
                  };
                }),
                vendorListVersion: vendorListVersion,
                lastUpdated: lastUpdated,
                purposes: Object.values(purposes).map(function (_ref4) {
                  var id = _ref4.id,
                      name = _ref4.name,
                      description = _ref4.description;
                  return {
                    id: id,
                    name: name,
                    description: description
                  };
                }),
                vendors: Object.values(vendors).map(function (_ref5) {
                  var id = _ref5.id,
                      name = _ref5.name,
                      policyUrl = _ref5.policyUrl,
                      deletedDate = _ref5.deletedDate,
                      features = _ref5.features,
                      legIntPurposes = _ref5.legIntPurposes,
                      purposes = _ref5.purposes;
                  return {
                    id: id,
                    name: name,
                    policyUrl: policyUrl,
                    deletedDate: deletedDate,
                    featureIds: features,
                    legIntPurposeIds: legIntPurposes,
                    purposeIds: purposes
                  };
                })
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function fetchGVL(_x5, _x6) {
      return _ref.apply(this, arguments);
    };
  }();

  function alert (_ref) {
    var message = _ref.message,
        _ref$onClose = _ref.onClose,
        onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose;
    return $('div', {
      class: 'mol-ads-cmp--alert'
    }, [$('p', {
      class: 'mol-ads-cmp--alert-text'
    }, message), $('button', {
      class: 'mol-ads-cmp--close',
      type: 'button'
    }, [$('span', {}, ["\xD7"])]).click(onClose)]);
  }

  var getAndRemoveItem = function getAndRemoveItem(key) {
    var value = localStorage.getItem(key);
    localStorage.removeItem(key);
    return value;
  };
  var canUseLocalStorage = function canUseLocalStorage() {
    try {
      var testKey = 'mol.ads.cmp.test';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      logline('Cannot use localStorage', WARN);
      return false;
    }
  };
  var setLocalStorage = function setLocalStorage(name, value) {
    if (canUseLocalStorage()) {
      localStorage.setItem(name, value);
    }
  };
  var getLocalStorage = function getLocalStorage(name) {
    if (canUseLocalStorage()) {
      return localStorage.getItem(name) || '';
    }

    return '';
  };
  var removeLocalStorage = function removeLocalStorage(name) {
    if (canUseLocalStorage()) {
      localStorage.removeItem(name);
    }
  };
  var getCookie = function getCookie(name) {
    return getValueFromCookie(document.cookie, name);
  };
  var getValueFromCookie = function getValueFromCookie(cookie, name) {
    var decodedCookie = decodeURIComponent(cookie);
    var cookies = decodedCookie.split(/\s*;\s*/g);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = cookies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _cookie = _step.value;

        var _splitOnFirst = splitOnFirst('=', _cookie),
            _splitOnFirst2 = _slicedToArray(_splitOnFirst, 2),
            key = _splitOnFirst2[0],
            value = _splitOnFirst2[1];

        if (name === key) {
          return value;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return '';
  };
  var setCookie = function setCookie(name, value, exdays) {
    var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
    var date = new Date();
    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
    document.cookie = "".concat(name, "=").concat(value, ";expires=").concat(date.toUTCString(), ";path=").concat(path, ";");
  };
  var deleteCookie = function deleteCookie(name) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
    document.cookie = "".concat(name, "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=").concat(path, ";");
  };
  var canUseCookies = function canUseCookies() {
    setCookie('mol.ads.cmp.test', 'success', 0.01);
    var success = getCookie('mol.ads.cmp.test') === 'success';
    deleteCookie('mol.ads.cmp.test');
    return success;
  };
  var setCookieWithExpiry = function setCookieWithExpiry(name, value, expires) {
    var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
    document.cookie = "".concat(name, "=").concat(value, ";expires=").concat(expires, ";path=").concat(path);
  };
  var restoreCookieFromLocalStorage = function restoreCookieFromLocalStorage(name) {
    var lsValue = getLocalStorage(name);
    var lsExpires = getLocalStorage("".concat(name, "-expires"));

    if (lsValue && lsExpires) {
      var date = new Date();
      var expired = Date.parse(lsExpires) < date.getTime();

      if (expired) {
        removeLocalStorage(name);
        removeLocalStorage("".concat(name, "-expires"));
        return false;
      } else {
        setCookieWithExpiry(name, lsValue, lsExpires);
        return true;
      }
    }

    return false;
  };

  var JUST_CONSENTED = function () {
    try {
      return !!getAndRemoveItem('mol.ads.cmp.alert');
    } catch (error) {
      return false;
    }
  }();

  function render$2(_x) {
    return _render.apply(this, arguments);
  }

  function _render() {
    _render = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee6(_ref) {
      var api, applicableRegulations, banner, hasChoiceBeenMade, hasTPhrase, _ref$renderSettings, renderSettings, t, translate$$1, clientConsentString, forceSetConsentString, renderConfig, pVendorList, cvlUiVersion, nrvUiVersion, vendorListBaseUrl, isEmbeddedVideo, infoSvg, shouldConsentManagementBeEnforced, consentAlert, dissentAlert, toggleSettings, consentToAll, dissentToAll, showConsentAlert, getUSPData, loadAndRenderSettings, showDissentAlert, showAlert, options, parts, shakeCookieBanner, app, hideBannerOnsScroll, CONSENT, DISSENT, NOT_APPLICABLE, scrollableContent;

      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              api = _ref.api, applicableRegulations = _ref.applicableRegulations, banner = _ref.banner, hasChoiceBeenMade = _ref.hasChoiceBeenMade, hasTPhrase = _ref.hasTPhrase, _ref$renderSettings = _ref.renderSettings, renderSettings = _ref$renderSettings === void 0 ? true : _ref$renderSettings, t = _ref.t, translate$$1 = _ref.translate, clientConsentString = _ref.clientConsentString, forceSetConsentString = _ref.forceSetConsentString, renderConfig = _ref.renderConfig, pVendorList = _ref.pVendorList, cvlUiVersion = _ref.cvlUiVersion, nrvUiVersion = _ref.nrvUiVersion, vendorListBaseUrl = _ref.vendorListBaseUrl, isEmbeddedVideo = _ref.isEmbeddedVideo, infoSvg = _ref.infoSvg, shouldConsentManagementBeEnforced = _ref.shouldConsentManagementBeEnforced;
              consentAlert = alert({
                message: 'Great! Thanks for choosing the best browsing experience. You can change your privacy settings at any time from our Privacy Policy.',
                onClose: function onClose() {
                  consentAlert.remove();
                }
              });
              dissentAlert = alert({
                message: translate$$1('banner.alert.optOut'),
                onClose: function onClose() {
                  dissentAlert.remove();
                }
              });

              toggleSettings = function toggleSettings(event) {
                event.preventDefault();

                if (app.raw.classList.contains('mol-ads-cmp--settings-open')) {
                  document.documentElement.classList.remove('mol-ads-cmp--open');
                }

                app.raw.classList.toggle('mol-ads-cmp--settings-open');
              };

              consentToAll = function consentToAll(event) {
                event.preventDefault();
                api.consentToAll();
              };

              dissentToAll = function dissentToAll(event) {
                event.preventDefault();
                api.dissentToAll();
              };

              showConsentAlert = function showConsentAlert() {
                app.appendChild(consentAlert);
              };

              getUSPData = function getUSPData() {
                // @ts-ignore
                return api.callP('getUSPData');
              };

              loadAndRenderSettings =
              /*#__PURE__*/
              function () {
                var _ref2 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee(pVendorList) {
                  var _ref3, _ref4, vendorList, nonTCFRegisteredVendors, nonRegisteredVendors, opts, settingsModal;

                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!renderSettings) {
                            _context.next = 12;
                            break;
                          }

                          _context.next = 3;
                          return Promise.all([pVendorList, fetchNonTCFRegisteredVendorList(vendorListBaseUrl, cvlUiVersion), fetchNonRegisteredVendorList(vendorListBaseUrl, nrvUiVersion)]);

                        case 3:
                          _ref3 = _context.sent;
                          _ref4 = _slicedToArray(_ref3, 3);
                          vendorList = _ref4[0];
                          nonTCFRegisteredVendors = _ref4[1];
                          nonRegisteredVendors = _ref4[2];
                          opts = Object.assign({}, options, {
                            applicableRegulations: applicableRegulations,
                            nonTCFRegisteredVendors: nonTCFRegisteredVendors,
                            nonRegisteredVendors: nonRegisteredVendors,
                            vendorList: vendorList,
                            renderConfig: renderConfig
                          });
                          settingsModal = render$1(opts);
                          app.appendChild(settingsModal);
                          renderSettings = false;

                        case 12:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));

                return function loadAndRenderSettings(_x2) {
                  return _ref2.apply(this, arguments);
                };
              }();

              showDissentAlert = function showDissentAlert() {
                app.appendChild(dissentAlert);
              };

              showAlert =
              /*#__PURE__*/
              function () {
                var _ref5 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee2(consent) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!(typeof consent === 'undefined')) {
                            _context2.next = 4;
                            break;
                          }

                          _context2.next = 3;
                          return api.callP('hasConsentedToAll');

                        case 3:
                          consent = _context2.sent;

                        case 4:
                          if (consent) {
                            showConsentAlert();
                          } else {
                            showDissentAlert();
                          }

                        case 5:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));

                return function showAlert(_x3) {
                  return _ref5.apply(this, arguments);
                };
              }();

              options = {
                api: api,
                hasChoiceBeenMade: hasChoiceBeenMade,
                hasTPhrase: hasTPhrase,
                onAccept: isEmbeddedVideo ? [consentToAll, toggleSettings, function () {
                  var video = document.body.querySelector('[id^="vjs_video"]') || document.body.querySelector('[data-opts]') || document.body.querySelector('video');

                  if (video && video.player) {
                    video.player.play();
                  }
                }] : [consentToAll],
                onCloseSettings: [toggleSettings],
                onDecline: [dissentToAll],
                onOpenSettings: [toggleSettings, function () {
                  return postTrackingEvent('overlay open settings');
                },
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          loadAndRenderSettings(pVendorList);

                        case 1:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }))],
                t: t,
                translate: translate$$1,
                infoSvg: infoSvg,
                shouldConsentManagementBeEnforced: shouldConsentManagementBeEnforced
              };
              parts = banner ? [banner(options)] : [];

              shakeCookieBanner =
              /*#__PURE__*/
              function () {
                var _ref7 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(e) {
                  var t, banner, animationType;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          t = e.target;
                          banner = document.getElementsByClassName('mol-ads-cmp')[0];
                          banner.style.animationName = '';

                          if (!t.classList.contains('mol-ads-cmp')) {
                            _context4.next = 8;
                            break;
                          }

                          _context4.next = 6;
                          return new Promise(function (r) {
                            return setTimeout(r, 0);
                          });

                        case 6:
                          animationType = location.search.match(/ac.cmp.animation=(\w+)/);
                          banner.style.animationName = "".concat(animationType ? animationType[1] : 'shake');

                        case 8:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this);
                }));

                return function shakeCookieBanner(_x4) {
                  return _ref7.apply(this, arguments);
                };
              }();

              app = $('div', {
                class: 'mol-ads-cmp',
                'data-cmp-no-consent': true
              }, parts).on('mousedown', shakeCookieBanner).on('touchstart', shakeCookieBanner);

              if (applicableRegulations.includes('ccpa')) {
                window.document.documentElement.classList.add('ccpa');
              }

              hideBannerOnsScroll = function hideBannerOnsScroll() {
                return document.documentElement.classList.remove('mol-ads-cmp--open');
              };

              if (!(!hasChoiceBeenMade || forceSetConsentString)) {
                _context6.next = 24;
                break;
              }

              CONSENT = '1YNN';
              DISSENT = '1YYN';
              NOT_APPLICABLE = '1---';

              if (clientConsentString && [CONSENT, DISSENT, NOT_APPLICABLE].includes(clientConsentString)) {
                if (clientConsentString === CONSENT) {
                  api.consentToAll(location.origin);
                } else if (clientConsentString === DISSENT) {
                  api.dissentToAll(location.origin);
                } else {
                  api.setCCPANotApplicableStatus([location.origin, 'unknown']);
                }
              } else if (shouldConsentManagementBeEnforced) {
                scrollableContent = [window, document.querySelector('.scrollable-content')].filter(function (el) {
                  return el;
                });
                scrollableContent.forEach(function (el) {
                  return el.addEventListener('scroll', hideBannerOnsScroll);
                });
                api.consentToAll(location.origin);
                postTrackingEvent('overlay displayed');
                document.documentElement.classList.add('mol-ads-cmp--open');
              } else {
                api.setCCPANotApplicableStatus([location.origin, window.PageCriteria.channel]);
              }

              _context6.next = 43;
              break;

            case 24:
              _context6.t0 = shouldConsentManagementBeEnforced;

              if (!_context6.t0) {
                _context6.next = 31;
                break;
              }

              _context6.t1 = /$1--/;
              _context6.next = 29;
              return getUSPData();

            case 29:
              _context6.t2 = _context6.sent.uspString;
              _context6.t0 = _context6.t1.test.call(_context6.t1, _context6.t2);

            case 31:
              if (!_context6.t0) {
                _context6.next = 35;
                break;
              }

              // If we previously thought CCPA doesn't apply but we see a visitor now in CA,
              // we start complying with it
              postTrackingEvent('overlay displayed');
              document.documentElement.classList.add('mol-ads-cmp--open');
              api.consentToAll(location.origin);

            case 35:
              _context6.next = 37;
              return getUSPData();

            case 37:
              _context6.t3 = _context6.sent.uspString;

              if (!(_context6.t3 === '1N--')) {
                _context6.next = 40;
                break;
              }

              api.setCCPANotApplicableStatus([location.origin, window.PageCriteria.channel]);

            case 40:
              options.onAccept.push(showConsentAlert);
              options.onDecline.push(showDissentAlert);

              if (JUST_CONSENTED) {
                showAlert();
              }

            case 43:
              api.on('thanksGiven', function () {
                document.documentElement.classList.remove('mol-ads-cmp--open');
              });
              return _context6.abrupt("return", Object.assign(app, {
                alert: showAlert,
                openSettings: function () {
                  var _openSettings = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (shouldConsentManagementBeEnforced) {
                              app.raw.classList.add('mol-ads-cmp--settings-open');
                              postTrackingEvent('overlay open settings');
                              loadAndRenderSettings(pVendorList);
                            }

                          case 1:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this);
                  }));

                  function openSettings() {
                    return _openSettings.apply(this, arguments);
                  }

                  return openSettings;
                }(),
                closeSettings: function closeSettings() {
                  document.documentElement.classList.remove('mol-ads-cmp--open');
                }
              }));

            case 45:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));
    return _render.apply(this, arguments);
  }

  var parseURL = function parseURL(url) {
    var a = document.createElement('a');
    a.href = url;
    return a;
  };
  var getScriptTag = function getScriptTag() {
    var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    return doc.getElementById('mol-ads-cmp');
  };

  var Emitter =
  /*#__PURE__*/
  function () {
    function Emitter() {
      _classCallCheck(this, Emitter);

      this.eventToListenersMap = new Map();
      this.destinations = new Set();
    }

    _createClass(Emitter, [{
      key: "emit",
      value: function emit(eventName) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var listeners = this.eventToListenersMap.get(eventName);

        if (listeners) {
          listeners.forEach(function (listener) {
            listener.apply(void 0, [eventName].concat(args));
          });
        }

        this.destinations.forEach(function (destination) {
          destination.emit.apply(destination, [eventName].concat(args));
        });
      }
    }, {
      key: "off",
      value: function off(eventName, listener) {
        return this.eventToListenersMap.has(eventName) && this.eventToListenersMap.get(eventName).delete(listener);
      }
    }, {
      key: "on",
      value: function on(eventName, listener) {
        var listeners = this.eventToListenersMap.get(eventName);

        if (listeners) {
          listeners.add(listener);
        } else {
          listeners = new Set([listener]);
          this.eventToListenersMap.set(eventName, listeners);
        }

        return this.off.bind(this, eventName, listener);
      }
    }, {
      key: "once",
      value: function once(eventName, listener) {
        var off = this.on(eventName, function (eventName) {
          off();

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          listener.apply(void 0, [eventName].concat(args));
        });
        return off;
      }
    }, {
      key: "pipeEvents",
      value: function pipeEvents(emitter) {
        this.destinations.add(emitter);
      }
    }, {
      key: "future",
      value: function future(eventName) {
        var _this = this;

        return new Promise(function (resolve) {
          _this.once(eventName, function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            resolve(args);
          });
        });
      }
    }]);

    return Emitter;
  }();
  var MultiWindowEmitter =
  /*#__PURE__*/
  function (_Emitter) {
    _inherits(MultiWindowEmitter, _Emitter);

    function MultiWindowEmitter() {
      _classCallCheck(this, MultiWindowEmitter);

      return _possibleConstructorReturn(this, _getPrototypeOf(MultiWindowEmitter).apply(this, arguments));
    }

    _createClass(MultiWindowEmitter, [{
      key: "emit",
      value: function emit(name) {
        var _get2;

        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        (_get2 = _get(_getPrototypeOf(MultiWindowEmitter.prototype), "emit", this)).call.apply(_get2, [this, name].concat(args));

        var eventName = this.createStorageName(name);
        localStorage.setItem(eventName, JSON.stringify(args));
        localStorage.removeItem(eventName);
      }
    }, {
      key: "on",
      value: function on(name, listener) {
        var _this2 = this;

        var off = _get(_getPrototypeOf(MultiWindowEmitter.prototype), "on", this).call(this, name, listener);

        var handler = function handler(_ref) {
          var key = _ref.key,
              newValue = _ref.newValue;

          if (!newValue || key !== _this2.createStorageName(name)) {
            return;
          }

          try {
            var args = JSON.parse(newValue);
            listener(name, args);
          } catch (error) {
            logline(error, ERROR);
          }
        };

        window.addEventListener('storage', handler);
        return function () {
          window.removeEventListener('storage', handler);
          return off();
        };
      }
    }, {
      key: "createStorageName",
      value: function createStorageName(name) {
        return "mol.ads.cmp.event.".concat(name);
      }
    }]);

    return MultiWindowEmitter;
  }(Emitter);

  var reduceSearchParam = function reduceSearchParam(searchParams, kv) {
    // tslint:disable-next-line:prefer-const
    var _kv$split = kv.split('='),
        _kv$split2 = _slicedToArray(_kv$split, 2),
        key = _kv$split2[0],
        value = _kv$split2[1];

    key = decodeURIComponent(key);

    if (key.startsWith('!')) {
      searchParams[key.substr(1)] = false;
    } else if (key.endsWith('[]')) {
      key = key.substr(0, key.length - 2);
      searchParams[key] = [].concat(_toConsumableArray(searchParams[key] || []), _toConsumableArray((value || '').split(',').map(decodeURIComponent)));
    } else {
      searchParams[key] = value ? decodeURIComponent(value) : true;
    }

    return searchParams;
  };

  var parseSearchParams = function parseSearchParams(searchString) {
    return searchString.split('&').reduce(reduceSearchParam, {});
  };
  var searchParams = typeof window === 'undefined' ? {} : parseSearchParams(location.search.substr(1));

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var base64 = createCommonjsModule(function (module, exports) {
  (function(root) {

  	// Detect free variables `exports`.
  	var freeExports = exports;

  	// Detect free variable `module`.
  	var freeModule = module &&
  		module.exports == freeExports && module;

  	// Detect free variable `global`, from Node.js or Browserified code, and use
  	// it as `root`.
  	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
  	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
  		root = freeGlobal;
  	}

  	/*--------------------------------------------------------------------------*/

  	var InvalidCharacterError = function(message) {
  		this.message = message;
  	};
  	InvalidCharacterError.prototype = new Error;
  	InvalidCharacterError.prototype.name = 'InvalidCharacterError';

  	var error = function(message) {
  		// Note: the error messages used throughout this file match those used by
  		// the native `atob`/`btoa` implementation in Chromium.
  		throw new InvalidCharacterError(message);
  	};

  	var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  	// http://whatwg.org/html/common-microsyntaxes.html#space-character
  	var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;

  	// `decode` is designed to be fully compatible with `atob` as described in the
  	// HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
  	// The optimized base64-decoding algorithm used is based on @atk’s excellent
  	// implementation. https://gist.github.com/atk/1020396
  	var decode = function(input) {
  		input = String(input)
  			.replace(REGEX_SPACE_CHARACTERS, '');
  		var length = input.length;
  		if (length % 4 == 0) {
  			input = input.replace(/==?$/, '');
  			length = input.length;
  		}
  		if (
  			length % 4 == 1 ||
  			// http://whatwg.org/C#alphanumeric-ascii-characters
  			/[^+a-zA-Z0-9/]/.test(input)
  		) {
  			error(
  				'Invalid character: the string to be decoded is not correctly encoded.'
  			);
  		}
  		var bitCounter = 0;
  		var bitStorage;
  		var buffer;
  		var output = '';
  		var position = -1;
  		while (++position < length) {
  			buffer = TABLE.indexOf(input.charAt(position));
  			bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
  			// Unless this is the first of a group of 4 characters…
  			if (bitCounter++ % 4) {
  				// …convert the first 8 bits to a single ASCII character.
  				output += String.fromCharCode(
  					0xFF & bitStorage >> (-2 * bitCounter & 6)
  				);
  			}
  		}
  		return output;
  	};

  	// `encode` is designed to be fully compatible with `btoa` as described in the
  	// HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
  	var encode = function(input) {
  		input = String(input);
  		if (/[^\0-\xFF]/.test(input)) {
  			// Note: no need to special-case astral symbols here, as surrogates are
  			// matched, and the input is supposed to only contain ASCII anyway.
  			error(
  				'The string to be encoded contains characters outside of the ' +
  				'Latin1 range.'
  			);
  		}
  		var padding = input.length % 3;
  		var output = '';
  		var position = -1;
  		var a;
  		var b;
  		var c;
  		var buffer;
  		// Make sure any padding is handled outside of the loop.
  		var length = input.length - padding;

  		while (++position < length) {
  			// Read three bytes, i.e. 24 bits.
  			a = input.charCodeAt(position) << 16;
  			b = input.charCodeAt(++position) << 8;
  			c = input.charCodeAt(++position);
  			buffer = a + b + c;
  			// Turn the 24 bits into four chunks of 6 bits each, and append the
  			// matching character for each of them to the output.
  			output += (
  				TABLE.charAt(buffer >> 18 & 0x3F) +
  				TABLE.charAt(buffer >> 12 & 0x3F) +
  				TABLE.charAt(buffer >> 6 & 0x3F) +
  				TABLE.charAt(buffer & 0x3F)
  			);
  		}

  		if (padding == 2) {
  			a = input.charCodeAt(position) << 8;
  			b = input.charCodeAt(++position);
  			buffer = a + b;
  			output += (
  				TABLE.charAt(buffer >> 10) +
  				TABLE.charAt((buffer >> 4) & 0x3F) +
  				TABLE.charAt((buffer << 2) & 0x3F) +
  				'='
  			);
  		} else if (padding == 1) {
  			buffer = input.charCodeAt(position);
  			output += (
  				TABLE.charAt(buffer >> 2) +
  				TABLE.charAt((buffer << 4) & 0x3F) +
  				'=='
  			);
  		}

  		return output;
  	};

  	var base64 = {
  		'encode': encode,
  		'decode': decode,
  		'version': '0.1.0'
  	};

  	// Some AMD build optimizers, like r.js, check for specific condition patterns
  	// like the following:
  	if (freeExports && !freeExports.nodeType) {
  		if (freeModule) { // in Node.js or RingoJS v0.8.0+
  			freeModule.exports = base64;
  		} else { // in Narwhal or RingoJS v0.7.0-
  			for (var key in base64) {
  				base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);
  			}
  		}
  	} else { // in Rhino or a web browser
  		root.base64 = base64;
  	}

  }(commonjsGlobal));
  });

  /**
   * Number of bits for encoding the version integer
   * Expected to be the same across versions
   */
  var versionNumBits = 6;

  /**
   * Definition of the consent string encoded format
   *
   * From https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/Draft_for_Public_Comment_Transparency%20%26%20Consent%20Framework%20-%20cookie%20and%20vendor%20list%20format%20specification%20v1.0a.pdf
   */
  var vendorVersionMap = {
    /**
     * Version 1
     */
    1: {
      version: 1,
      metadataFields: ['version', 'created', 'lastUpdated', 'cmpId', 'cmpVersion', 'consentScreen', 'vendorListVersion'],
      fields: [{ name: 'version', type: 'int', numBits: 6 }, { name: 'created', type: 'date', numBits: 36 }, { name: 'lastUpdated', type: 'date', numBits: 36 }, { name: 'cmpId', type: 'int', numBits: 12 }, { name: 'cmpVersion', type: 'int', numBits: 12 }, { name: 'consentScreen', type: 'int', numBits: 6 }, { name: 'consentLanguage', type: 'language', numBits: 12 }, { name: 'vendorListVersion', type: 'int', numBits: 12 }, { name: 'purposeIdBitString', type: 'bits', numBits: 24 }, { name: 'maxVendorId', type: 'int', numBits: 16 }, { name: 'isRange', type: 'bool', numBits: 1 }, {
        name: 'vendorIdBitString',
        type: 'bits',
        numBits: function numBits(decodedObject) {
          return decodedObject.maxVendorId;
        },
        validator: function validator(decodedObject) {
          return !decodedObject.isRange;
        }
      }, {
        name: 'defaultConsent',
        type: 'bool',
        numBits: 1,
        validator: function validator(decodedObject) {
          return decodedObject.isRange;
        }
      }, {
        name: 'numEntries',
        numBits: 12,
        type: 'int',
        validator: function validator(decodedObject) {
          return decodedObject.isRange;
        }
      }, {
        name: 'vendorRangeList',
        type: 'list',
        listCount: function listCount(decodedObject) {
          return decodedObject.numEntries;
        },
        validator: function validator(decodedObject) {
          return decodedObject.isRange;
        },
        fields: [{
          name: 'isRange',
          type: 'bool',
          numBits: 1
        }, {
          name: 'startVendorId',
          type: 'int',
          numBits: 16
        }, {
          name: 'endVendorId',
          type: 'int',
          numBits: 16,
          validator: function validator(decodedObject) {
            return decodedObject.isRange;
          }
        }]
      }]
    }
  };

  var definitions = {
    versionNumBits: versionNumBits,
    vendorVersionMap: vendorVersionMap
  };

  /* eslint no-use-before-define: off */



  var versionNumBits$1 = definitions.versionNumBits,
      vendorVersionMap$1 = definitions.vendorVersionMap;

  function repeat(count) {
    var string = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';

    var padString = '';

    for (var i = 0; i < count; i += 1) {
      padString += string;
    }

    return padString;
  }

  function padLeft(string, padding) {
    return repeat(Math.max(0, padding)) + string;
  }

  function padRight(string, padding) {
    return string + repeat(Math.max(0, padding));
  }

  function encodeIntToBits(number, numBits) {
    var bitString = '';

    if (typeof number === 'number' && !isNaN(number)) {
      bitString = parseInt(number, 10).toString(2);
    }

    // Pad the string if not filling all bits
    if (numBits >= bitString.length) {
      bitString = padLeft(bitString, numBits - bitString.length);
    }

    // Truncate the string if longer than the number of bits
    if (bitString.length > numBits) {
      bitString = bitString.substring(0, numBits);
    }

    return bitString;
  }

  function encodeBoolToBits(value) {
    return encodeIntToBits(value === true ? 1 : 0, 1);
  }

  function encodeDateToBits(date, numBits) {
    if (date instanceof Date) {
      return encodeIntToBits(date.getTime() / 100, numBits);
    }
    return encodeIntToBits(date, numBits);
  }

  function encodeLetterToBits(letter, numBits) {
    return encodeIntToBits(letter.toUpperCase().charCodeAt(0) - 65, numBits);
  }

  function encodeLanguageToBits(language) {
    var numBits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;

    return encodeLetterToBits(language.slice(0, 1), numBits / 2) + encodeLetterToBits(language.slice(1), numBits / 2);
  }

  function decodeBitsToInt(bitString, start, length) {
    return parseInt(bitString.substr(start, length), 2);
  }

  function decodeBitsToDate(bitString, start, length) {
    return new Date(decodeBitsToInt(bitString, start, length) * 100);
  }

  function decodeBitsToBool(bitString, start) {
    return parseInt(bitString.substr(start, 1), 2) === 1;
  }

  function decodeBitsToLetter(bitString) {
    var letterCode = decodeBitsToInt(bitString);
    return String.fromCharCode(letterCode + 65).toLowerCase();
  }

  function decodeBitsToLanguage(bitString, start, length) {
    var languageBitString = bitString.substr(start, length);

    return decodeBitsToLetter(languageBitString.slice(0, length / 2)) + decodeBitsToLetter(languageBitString.slice(length / 2));
  }

  function encodeField(_ref) {
    var input = _ref.input,
        field = _ref.field;
    var name = field.name,
        type = field.type,
        numBits = field.numBits,
        encoder = field.encoder,
        validator = field.validator;


    if (typeof validator === 'function') {
      if (!validator(input)) {
        return '';
      }
    }
    if (typeof encoder === 'function') {
      return encoder(input);
    }

    var bitCount = typeof numBits === 'function' ? numBits(input) : numBits;

    var inputValue = input[name];
    var fieldValue = inputValue === null || inputValue === undefined ? '' : inputValue;

    switch (type) {
      case 'int':
        return encodeIntToBits(fieldValue, bitCount);
      case 'bool':
        return encodeBoolToBits(fieldValue);
      case 'date':
        return encodeDateToBits(fieldValue, bitCount);
      case 'bits':
        return padRight(fieldValue, bitCount - fieldValue.length).substring(0, bitCount);
      case 'list':
        return fieldValue.reduce(function (acc, listValue) {
          return acc + encodeFields({
            input: listValue,
            fields: field.fields
          });
        }, '');
      case 'language':
        return encodeLanguageToBits(fieldValue, bitCount);
      default:
        throw new Error('ConsentString - Unknown field type ' + type + ' for encoding');
    }
  }

  function encodeFields(_ref2) {
    var input = _ref2.input,
        fields = _ref2.fields;

    return fields.reduce(function (acc, field) {
      acc += encodeField({ input: input, field: field });

      return acc;
    }, '');
  }

  function decodeField(_ref3) {
    var input = _ref3.input,
        output = _ref3.output,
        startPosition = _ref3.startPosition,
        field = _ref3.field;
    var type = field.type,
        numBits = field.numBits,
        decoder = field.decoder,
        validator = field.validator,
        listCount = field.listCount;


    if (typeof validator === 'function') {
      if (!validator(output)) {
        // Not decoding this field so make sure we start parsing the next field at
        // the same point
        return { newPosition: startPosition };
      }
    }

    if (typeof decoder === 'function') {
      return decoder(input, output, startPosition);
    }

    var bitCount = typeof numBits === 'function' ? numBits(output) : numBits;

    switch (type) {
      case 'int':
        return { fieldValue: decodeBitsToInt(input, startPosition, bitCount) };
      case 'bool':
        return { fieldValue: decodeBitsToBool(input, startPosition) };
      case 'date':
        return { fieldValue: decodeBitsToDate(input, startPosition, bitCount) };
      case 'bits':
        return { fieldValue: input.substr(startPosition, bitCount) };
      case 'list':
        return decodeList(input, output, startPosition, field, listCount);
      case 'language':
        return { fieldValue: decodeBitsToLanguage(input, startPosition, bitCount) };
      default:
        throw new Error('ConsentString - Unknown field type ' + type + ' for decoding');
    }
  }

  function decodeList(input, output, startPosition, field, listCount) {
    var listEntryCount = 0;

    if (typeof listCount === 'function') {
      listEntryCount = listCount(output);
    } else if (typeof listCount === 'number') {
      listEntryCount = listCount;
    }

    var newPosition = startPosition;
    var fieldValue = [];

    for (var i = 0; i < listEntryCount; i += 1) {
      var decodedFields = decodeFields({
        input: input,
        fields: field.fields,
        startPosition: newPosition
      });

      newPosition = decodedFields.newPosition;
      fieldValue.push(decodedFields.decodedObject);
    }

    return { fieldValue: fieldValue, newPosition: newPosition };
  }

  function decodeFields(_ref4) {
    var input = _ref4.input,
        fields = _ref4.fields,
        _ref4$startPosition = _ref4.startPosition,
        startPosition = _ref4$startPosition === undefined ? 0 : _ref4$startPosition;

    var position = startPosition;

    var decodedObject = fields.reduce(function (acc, field) {
      var name = field.name,
          numBits = field.numBits;

      var _decodeField = decodeField({
        input: input,
        output: acc,
        startPosition: position,
        field: field
      }),
          fieldValue = _decodeField.fieldValue,
          newPosition = _decodeField.newPosition;

      if (fieldValue !== undefined) {
        acc[name] = fieldValue;
      }

      if (newPosition !== undefined) {
        position = newPosition;
      } else if (typeof numBits === 'number') {
        position += numBits;
      }

      return acc;
    }, {});

    return {
      decodedObject: decodedObject,
      newPosition: position
    };
  }

  /**
   * Encode the data properties to a bit string. Encoding will encode
   * either `selectedVendorIds` or the `vendorRangeList` depending on
   * the value of the `isRange` flag.
   */
  function encodeDataToBits(data, definitionMap) {
    var version = data.version;


    if (typeof version !== 'number') {
      throw new Error('ConsentString - No version field to encode');
    } else if (!definitionMap[version]) {
      throw new Error('ConsentString - No definition for version ' + version);
    } else {
      var fields = definitionMap[version].fields;
      return encodeFields({ input: data, fields: fields });
    }
  }

  /**
   * Take all fields required to encode the consent string and produce the URL safe Base64 encoded value
   */
  function encodeToBase64(data) {
    var definitionMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : vendorVersionMap$1;

    var binaryValue = encodeDataToBits(data, definitionMap);

    if (binaryValue) {
      // Pad length to multiple of 8
      var paddedBinaryValue = padRight(binaryValue, 7 - (binaryValue.length + 7) % 8);

      // Encode to bytes
      var bytes = '';
      for (var i = 0; i < paddedBinaryValue.length; i += 8) {
        bytes += String.fromCharCode(parseInt(paddedBinaryValue.substr(i, 8), 2));
      }

      // Make base64 string URL friendly
      return base64.encode(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }

    return null;
  }

  function decodeConsentStringBitValue(bitString) {
    var definitionMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : vendorVersionMap$1;

    var version = decodeBitsToInt(bitString, 0, versionNumBits$1);

    if (typeof version !== 'number') {
      throw new Error('ConsentString - Unknown version number in the string to decode');
    } else if (!vendorVersionMap$1[version]) {
      throw new Error('ConsentString - Unsupported version ' + version + ' in the string to decode');
    }

    var fields = definitionMap[version].fields;

    var _decodeFields = decodeFields({ input: bitString, fields: fields }),
        decodedObject = _decodeFields.decodedObject;

    return decodedObject;
  }

  /**
   * Decode the (URL safe Base64) value of a consent string into an object.
   */
  function decodeFromBase64(consentString, definitionMap) {
    // Add padding
    var unsafe = consentString;
    while (unsafe.length % 4 !== 0) {
      unsafe += '=';
    }

    // Replace safe characters
    unsafe = unsafe.replace(/-/g, '+').replace(/_/g, '/');

    var bytes = base64.decode(unsafe);

    var inputBits = '';
    for (var i = 0; i < bytes.length; i += 1) {
      var bitString = bytes.charCodeAt(i).toString(2);
      inputBits += padLeft(bitString, 8 - bitString.length);
    }

    return decodeConsentStringBitValue(inputBits, definitionMap);
  }

  function decodeBitsToIds(bitString) {
    return bitString.split('').reduce(function (acc, bit, index) {
      if (bit === '1') {
        if (acc.indexOf(index + 1) === -1) {
          acc.push(index + 1);
        }
      }
      return acc;
    }, []);
  }

  var bits = {
    padRight: padRight,
    padLeft: padLeft,
    encodeField: encodeField,
    encodeDataToBits: encodeDataToBits,
    encodeIntToBits: encodeIntToBits,
    encodeBoolToBits: encodeBoolToBits,
    encodeDateToBits: encodeDateToBits,
    encodeLanguageToBits: encodeLanguageToBits,
    encodeLetterToBits: encodeLetterToBits,
    encodeToBase64: encodeToBase64,
    decodeBitsToIds: decodeBitsToIds,
    decodeBitsToInt: decodeBitsToInt,
    decodeBitsToDate: decodeBitsToDate,
    decodeBitsToBool: decodeBitsToBool,
    decodeBitsToLanguage: decodeBitsToLanguage,
    decodeBitsToLetter: decodeBitsToLetter,
    decodeFromBase64: decodeFromBase64
  };

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var encodeToBase64$1 = bits.encodeToBase64,
      padRight$1 = bits.padRight;

  /**
   * Encode a list of vendor IDs into bits
   *
   * @param {integer} maxVendorId Highest vendor ID in the vendor list
   * @param {integer[]} allowedVendorIds Vendors that the user has given consent to
   */


  function encodeVendorIdsToBits(maxVendorId) {
    var allowedVendorIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var vendorString = '';

    for (var id = 1; id <= maxVendorId; id += 1) {
      vendorString += allowedVendorIds.indexOf(id) !== -1 ? '1' : '0';
    }

    return padRight$1(vendorString, Math.max(0, maxVendorId - vendorString.length));
  }

  /**
   * Encode a list of purpose IDs into bits
   *
   * @param {*} purposes List of purposes from the vendor list
   * @param {*} allowedPurposeIds List of purpose IDs that the user has given consent to
   */
  function encodePurposeIdsToBits(purposes) {
    var allowedPurposeIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

    var maxPurposeId = 0;
    for (var i = 0; i < purposes.length; i += 1) {
      maxPurposeId = Math.max(maxPurposeId, purposes[i].id);
    }
    for (var _i = 0; _i < allowedPurposeIds.length; _i += 1) {
      maxPurposeId = Math.max(maxPurposeId, allowedPurposeIds[_i]);
    }

    var purposeString = '';
    for (var id = 1; id <= maxPurposeId; id += 1) {
      purposeString += allowedPurposeIds.indexOf(id) !== -1 ? '1' : '0';
    }

    return purposeString;
  }

  /**
   * Convert a list of vendor IDs to ranges
   *
   * @param {object[]} vendors List of vendors from the vendor list (important: this list must to be sorted by ID)
   * @param {integer[]} allowedVendorIds List of vendor IDs that the user has given consent to
   */
  function convertVendorsToRanges(vendors, allowedVendorIds) {
    var range = [];
    var ranges = [];

    var idsInList = vendors.map(function (vendor) {
      return vendor.id;
    });

    for (var index = 0; index < vendors.length; index += 1) {
      var id = vendors[index].id;

      if (allowedVendorIds.indexOf(id) !== -1) {
        range.push(id);
      }

      // Do we need to close the current range?
      if ((allowedVendorIds.indexOf(id) === -1 // The vendor we are evaluating is not allowed
      || index === vendors.length - 1 // There is no more vendor to evaluate
      || idsInList.indexOf(id + 1) === -1 // There is no vendor after this one (ie there is a gap in the vendor IDs) ; we need to stop here to avoid including vendors that do not have consent
      ) && range.length) {
        var startVendorId = range.shift();
        var endVendorId = range.pop();

        range = [];

        ranges.push({
          isRange: typeof endVendorId === 'number',
          startVendorId: startVendorId,
          endVendorId: endVendorId
        });
      }
    }

    return ranges;
  }

  /**
   * Get maxVendorId from the list of vendors and return that id
   *
   * @param {object} vendors
   */
  function getMaxVendorId(vendors) {
    // Find the max vendor ID from the vendor list
    var maxVendorId = 0;

    vendors.forEach(function (vendor) {
      if (vendor.id > maxVendorId) {
        maxVendorId = vendor.id;
      }
    });
    return maxVendorId;
  }
  /**
   * Encode consent data into a web-safe base64-encoded string
   *
   * @param {object} consentData Data to include in the string (see `utils/definitions.js` for the list of fields)
   */
  function encodeConsentString(consentData) {
    var maxVendorId = consentData.maxVendorId;
    var _consentData$vendorLi = consentData.vendorList,
        vendorList = _consentData$vendorLi === undefined ? {} : _consentData$vendorLi,
        allowedPurposeIds = consentData.allowedPurposeIds,
        allowedVendorIds = consentData.allowedVendorIds;
    var _vendorList$vendors = vendorList.vendors,
        vendors = _vendorList$vendors === undefined ? [] : _vendorList$vendors,
        _vendorList$purposes = vendorList.purposes,
        purposes = _vendorList$purposes === undefined ? [] : _vendorList$purposes;

    // if no maxVendorId is in the ConsentData, get it

    if (!maxVendorId) {
      maxVendorId = getMaxVendorId(vendors);
    }

    // Encode the data with and without ranges and return the smallest encoded payload
    var noRangesData = encodeToBase64$1(_extends$1({}, consentData, {
      maxVendorId: maxVendorId,
      purposeIdBitString: encodePurposeIdsToBits(purposes, allowedPurposeIds),
      isRange: false,
      vendorIdBitString: encodeVendorIdsToBits(maxVendorId, allowedVendorIds)
    }));

    var vendorRangeList = convertVendorsToRanges(vendors, allowedVendorIds);

    var rangesData = encodeToBase64$1(_extends$1({}, consentData, {
      maxVendorId: maxVendorId,
      purposeIdBitString: encodePurposeIdsToBits(purposes, allowedPurposeIds),
      isRange: true,
      defaultConsent: false,
      numEntries: vendorRangeList.length,
      vendorRangeList: vendorRangeList
    }));

    return noRangesData.length < rangesData.length ? noRangesData : rangesData;
  }

  var encode = {
    convertVendorsToRanges: convertVendorsToRanges,
    encodeConsentString: encodeConsentString,
    getMaxVendorId: getMaxVendorId,
    encodeVendorIdsToBits: encodeVendorIdsToBits,
    encodePurposeIdsToBits: encodePurposeIdsToBits
  };

  var decodeBitsToIds$1 = bits.decodeBitsToIds,
      decodeFromBase64$1 = bits.decodeFromBase64;

  /**
   * Decode consent data from a web-safe base64-encoded string
   *
   * @param {string} consentString
   */


  function decodeConsentString(consentString) {
    var _decodeFromBase = decodeFromBase64$1(consentString),
        version = _decodeFromBase.version,
        cmpId = _decodeFromBase.cmpId,
        vendorListVersion = _decodeFromBase.vendorListVersion,
        purposeIdBitString = _decodeFromBase.purposeIdBitString,
        maxVendorId = _decodeFromBase.maxVendorId,
        created = _decodeFromBase.created,
        lastUpdated = _decodeFromBase.lastUpdated,
        isRange = _decodeFromBase.isRange,
        defaultConsent = _decodeFromBase.defaultConsent,
        vendorIdBitString = _decodeFromBase.vendorIdBitString,
        vendorRangeList = _decodeFromBase.vendorRangeList,
        cmpVersion = _decodeFromBase.cmpVersion,
        consentScreen = _decodeFromBase.consentScreen,
        consentLanguage = _decodeFromBase.consentLanguage;

    var consentStringData = {
      version: version,
      cmpId: cmpId,
      vendorListVersion: vendorListVersion,
      allowedPurposeIds: decodeBitsToIds$1(purposeIdBitString),
      maxVendorId: maxVendorId,
      created: created,
      lastUpdated: lastUpdated,
      cmpVersion: cmpVersion,
      consentScreen: consentScreen,
      consentLanguage: consentLanguage
    };

    if (isRange) {
      /* eslint no-shadow: off */
      var idMap = vendorRangeList.reduce(function (acc, _ref) {
        var isRange = _ref.isRange,
            startVendorId = _ref.startVendorId,
            endVendorId = _ref.endVendorId;

        var lastVendorId = isRange ? endVendorId : startVendorId;

        for (var i = startVendorId; i <= lastVendorId; i += 1) {
          acc[i] = true;
        }

        return acc;
      }, {});

      consentStringData.allowedVendorIds = [];

      for (var i = 1; i <= maxVendorId; i += 1) {
        if (defaultConsent && !idMap[i] || !defaultConsent && idMap[i]) {
          if (consentStringData.allowedVendorIds.indexOf(i) === -1) {
            consentStringData.allowedVendorIds.push(i);
          }
        }
      }
    } else {
      consentStringData.allowedVendorIds = decodeBitsToIds$1(vendorIdBitString);
    }

    return consentStringData;
  }

  var decode = {
    decodeConsentString: decodeConsentString
  };

  var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var encodeConsentString$1 = encode.encodeConsentString,
      _getMaxVendorId = encode.getMaxVendorId,
      encodeVendorIdsToBits$1 = encode.encodeVendorIdsToBits,
      encodePurposeIdsToBits$1 = encode.encodePurposeIdsToBits;

  var decodeConsentString$1 = decode.decodeConsentString;

  var vendorVersionMap$2 = definitions.vendorVersionMap;
  /**
   * Regular expression for validating
   */


  var consentLanguageRegexp = /^[a-z]{2}$/;

  var ConsentString = function () {
    function ConsentString() {
      var baseString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classCallCheck$1(this, ConsentString);

      this.created = new Date();
      this.lastUpdated = new Date();
      this.version = 1;
      this.vendorList = null;
      this.vendorListVersion = null;
      this.cmpId = null;
      this.cmpVersion = null;
      this.consentScreen = null;
      this.consentLanguage = null;
      this.allowedPurposeIds = [];
      this.allowedVendorIds = [];

      // Decode the base string
      if (baseString) {
        Object.assign(this, decodeConsentString$1(baseString));
      }
    }

    _createClass$1(ConsentString, [{
      key: 'getConsentString',
      value: function getConsentString() {
        var updateDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (!this.vendorList) {
          throw new Error('ConsentString - A vendor list is required to encode a consent string');
        }

        if (updateDate === true) {
          this.lastUpdated = new Date();
        }

        return encodeConsentString$1({
          version: this.getVersion(),
          vendorList: this.vendorList,
          allowedPurposeIds: this.allowedPurposeIds,
          allowedVendorIds: this.allowedVendorIds,
          created: this.created,
          lastUpdated: this.lastUpdated,
          cmpId: this.cmpId,
          cmpVersion: this.cmpVersion,
          consentScreen: this.consentScreen,
          consentLanguage: this.consentLanguage,
          vendorListVersion: this.vendorListVersion
        });
      }
    }, {
      key: 'getLastUpdated',
      value: function getLastUpdated() {

        return this.lastUpdated;
      }
    }, {
      key: 'setLastUpdated',
      value: function setLastUpdated() {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (date) {

          this.lastUpdated = new Date(date);
        } else {

          this.lastUpdated = new Date();
        }
      }
    }, {
      key: 'getCreated',
      value: function getCreated() {

        return this.created;
      }
    }, {
      key: 'setCreated',
      value: function setCreated() {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (date) {

          this.created = new Date(date);
        } else {

          this.created = new Date();
        }
      }
    }, {
      key: 'getMaxVendorId',
      value: function getMaxVendorId() {
        return _getMaxVendorId(this.vendorList.vendors);
      }
    }, {
      key: 'getParsedVendorConsents',
      value: function getParsedVendorConsents() {
        return encodeVendorIdsToBits$1(_getMaxVendorId(this.vendorList.vendors), this.allowedVendorIds);
      }
    }, {
      key: 'getParsedPurposeConsents',
      value: function getParsedPurposeConsents() {
        return encodePurposeIdsToBits$1(this.vendorList.purposes, this.allowedPurposeIds);
      }
    }, {
      key: 'getMetadataString',
      value: function getMetadataString() {
        return encodeConsentString$1({
          version: this.getVersion(),
          created: this.created,
          lastUpdated: this.lastUpdated,
          cmpId: this.cmpId,
          cmpVersion: this.cmpVersion,
          consentScreen: this.consentScreen,
          vendorListVersion: this.vendorListVersion
        });
      }
    }, {
      key: 'getVersion',
      value: function getVersion() {
        return this.version;
      }
    }, {
      key: 'getVendorListVersion',
      value: function getVendorListVersion() {
        return this.vendorListVersion;
      }
    }, {
      key: 'setGlobalVendorList',
      value: function setGlobalVendorList(vendorList) {
        if ((typeof vendorList === 'undefined' ? 'undefined' : _typeof$1(vendorList)) !== 'object') {
          throw new Error('ConsentString - You must provide an object when setting the global vendor list');
        }

        if (!vendorList.vendorListVersion || !Array.isArray(vendorList.purposes) || !Array.isArray(vendorList.vendors)) {
          // The provided vendor list does not look valid
          throw new Error('ConsentString - The provided vendor list does not respect the schema from the IAB EU’s GDPR Consent and Transparency Framework');
        }

        // Cloning the GVL
        // It's important as we might transform it and don't want to modify objects that we do not own
        this.vendorList = {
          vendorListVersion: vendorList.vendorListVersion,
          lastUpdated: vendorList.lastUpdated,
          purposes: vendorList.purposes,
          features: vendorList.features,

          // Clone the list and sort the vendors by ID (it breaks our range generation algorithm if they are not sorted)
          vendors: vendorList.vendors.slice(0).sort(function (firstVendor, secondVendor) {
            return firstVendor.id < secondVendor.id ? -1 : 1;
          })
        };
        this.vendorListVersion = vendorList.vendorListVersion;
      }
    }, {
      key: 'getGlobalVendorList',
      value: function getGlobalVendorList() {

        return this.vendorList;
      }
    }, {
      key: 'setCmpId',
      value: function setCmpId(id) {
        this.cmpId = id;
      }
    }, {
      key: 'getCmpId',
      value: function getCmpId() {
        return this.cmpId;
      }
    }, {
      key: 'setCmpVersion',
      value: function setCmpVersion(version) {
        this.cmpVersion = version;
      }
    }, {
      key: 'getCmpVersion',
      value: function getCmpVersion() {
        return this.cmpVersion;
      }
    }, {
      key: 'setConsentScreen',
      value: function setConsentScreen(screenId) {
        this.consentScreen = screenId;
      }
    }, {
      key: 'getConsentScreen',
      value: function getConsentScreen() {
        return this.consentScreen;
      }
    }, {
      key: 'setConsentLanguage',
      value: function setConsentLanguage(language) {
        if (consentLanguageRegexp.test(language) === false) {
          throw new Error('ConsentString - The consent language must be a two-letter ISO639-1 code (en, fr, de, etc.)');
        }

        this.consentLanguage = language;
      }
    }, {
      key: 'getConsentLanguage',
      value: function getConsentLanguage() {
        return this.consentLanguage;
      }
    }, {
      key: 'setPurposesAllowed',
      value: function setPurposesAllowed(purposeIds) {
        this.allowedPurposeIds = purposeIds;
      }
    }, {
      key: 'getPurposesAllowed',
      value: function getPurposesAllowed() {
        return this.allowedPurposeIds;
      }
    }, {
      key: 'setPurposeAllowed',
      value: function setPurposeAllowed(purposeId, value) {
        var purposeIndex = this.allowedPurposeIds.indexOf(purposeId);

        if (value === true) {
          if (purposeIndex === -1) {
            this.allowedPurposeIds.push(purposeId);
          }
        } else if (value === false) {
          if (purposeIndex !== -1) {
            this.allowedPurposeIds.splice(purposeIndex, 1);
          }
        }
      }
    }, {
      key: 'isPurposeAllowed',
      value: function isPurposeAllowed(purposeId) {
        return this.allowedPurposeIds.indexOf(purposeId) !== -1;
      }
    }, {
      key: 'setVendorsAllowed',
      value: function setVendorsAllowed(vendorIds) {
        this.allowedVendorIds = vendorIds;
      }
    }, {
      key: 'getVendorsAllowed',
      value: function getVendorsAllowed() {
        return this.allowedVendorIds;
      }
    }, {
      key: 'setVendorAllowed',
      value: function setVendorAllowed(vendorId, value) {
        var vendorIndex = this.allowedVendorIds.indexOf(vendorId);

        if (value === true) {
          if (vendorIndex === -1) {
            this.allowedVendorIds.push(vendorId);
          }
        } else if (value === false) {
          if (vendorIndex !== -1) {
            this.allowedVendorIds.splice(vendorIndex, 1);
          }
        }
      }
    }, {
      key: 'isVendorAllowed',
      value: function isVendorAllowed(vendorId) {
        return this.allowedVendorIds.indexOf(vendorId) !== -1;
      }
    }], [{
      key: 'decodeMetadataString',
      value: function decodeMetadataString(encodedMetadata) {
        var decodedString = decodeConsentString$1(encodedMetadata);
        var metadata = {};
        vendorVersionMap$2[decodedString.version].metadataFields.forEach(function (field) {
          metadata[field] = decodedString[field];
        });
        return metadata;
      }
    }]);

    return ConsentString;
  }();

  var consentString = {
    ConsentString: ConsentString
  };

  var ConsentString$1 = consentString.ConsentString;

  var decodeConsentString$2 = decode.decodeConsentString;

  var encodeConsentString$2 = encode.encodeConsentString;

  var dist = {
    ConsentString: ConsentString$1,
    decodeConsentString: decodeConsentString$2,
    encodeConsentString: encodeConsentString$2
  };
  var dist_1 = dist.ConsentString;

  // @ts-ignore
  var getConsentData = function getConsentData(vendorList) {
    var consentData = new dist_1();
    consentData.setGlobalVendorList(vendorList);
    consentData.setCmpId(27);
    consentData.setCmpVersion(1);
    consentData.setConsentScreen(1);
    consentData.setConsentLanguage('en');
    return consentData;
  };

  var CMP_META_KEY = 'cmp-meta';
  var CMP_META_CURRENT_VERSION = 2;
  var VERSION_TO_UPGRADE_SAMESITE = 2;

  var getRootWindowDomain = function getRootWindowDomain() {
    var match = (window.location !== window.parent.location ? document.referrer : document.location.href).match(/https?:\/\/([^:\/\n]+)/im);
    return match ? match[1] : undefined;
  };

  var ConsentModel =
  /*#__PURE__*/
  function (_MultiWindowEmitter) {
    _inherits(ConsentModel, _MultiWindowEmitter);

    function ConsentModel(backendBaseUrl, vendorList, clientConsentString, geoInfo, legislation) {
      var _this;

      _classCallCheck(this, ConsentModel);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ConsentModel).call(this));
      _this.backendBaseUrl = backendBaseUrl;
      _this.vendorList = vendorList;
      _this.clientConsentString = clientConsentString;
      _this.geoInfo = geoInfo;
      _this.legislation = legislation;

      _this.unload = function () {
        deleteCookie(ConsentModel.getCookieName());
        deleteCookie('uuid');
        removeLocalStorage(ConsentModel.getCookieName());
        removeLocalStorage("".concat(ConsentModel.getCookieName(), "-expires"));
        removeLocalStorage('uuid');
        removeLocalStorage('uuid-expires');
      };

      _this.metadata = clientConsentString || '';
      _this.consented = /^1.N.$/.test(_this.metadata);

      _this.on('update', function () {
        return _this.load();
      });

      _this.on('destroy', _this.unload);

      return _this;
    }

    _createClass(ConsentModel, [{
      key: "load",
      value: function load() {
        this.metadata = getCookie(ConsentModel.getCookieName());

        if (!this.metadata) {
          // No cookie? Check for a consent token in localStorage and restore
          var lsMetaData = restoreCookieFromLocalStorage(ConsentModel.getCookieName()) && restoreCookieFromLocalStorage('uuid') && getLocalStorage(ConsentModel.getCookieName());

          if (lsMetaData) {
            this.metadata = lsMetaData;
          }
        }

        logline("loading metadata \"".concat(this.metadata, "\""), DEBUG);
        this.consented = /^1.N.$/.test(this.metadata);
      }
    }, {
      key: "hasChoiceBeenMade",
      value: function hasChoiceBeenMade() {
        var usprivacy = getCookie('usprivacy') || getLocalStorage('usprivacy');
        return /^1.[YN].$/.test(usprivacy);
      }
    }, {
      key: "getAllVendorIds",
      value: function getAllVendorIds() {
        return this.vendorList.vendors.map(function (_ref) {
          var id = _ref.id;
          return id.toString();
        });
      }
    }, {
      key: "getConsentVersion",
      value: function getConsentVersion() {
        return this.consentData.getVersion();
      }
    }, {
      key: "getConsentData",
      value: function getConsentData$$1(version) {
        if (typeof version !== 'undefined' && version !== this.consentData.getVersion()) {
          return null;
        }

        return this.metadata;
      }
    }, {
      key: "getCookieExpireDays",
      value: function getCookieExpireDays(consented) {
        var consentExpires = 13 * 30; // 13 months

        var noConsentExpires = 30; // 1 month

        return consented ? consentExpires : noConsentExpires;
      }
    }, {
      key: "updateStorage",
      value: function updateStorage(consentStr, uuid) {
        var consentExdays = this.getCookieExpireDays(this.consented);
        var consentDate = new Date();
        consentDate.setTime(consentDate.getTime() + consentExdays * 24 * 60 * 60 * 1000);
        setLocalStorage(ConsentModel.getCookieName(), consentStr);
        setLocalStorage("".concat(ConsentModel.getCookieName(), "-expires"), consentDate.toUTCString());
        var uuidExDays = 100 * 365; // 100 years

        var uuidDate = new Date();
        uuidDate.setTime(uuidDate.getTime() + uuidExDays * 24 * 60 * 60 * 1000);
        setLocalStorage('uuid', uuid);
        setLocalStorage("uuid-expires", uuidDate.toUTCString());
        var meta = this.getMetaFromLocalStorage();
        meta.version = CMP_META_CURRENT_VERSION;
        setLocalStorage(CMP_META_KEY, JSON.stringify(meta));
      }
    }, {
      key: "save",
      value: function () {
        var _save = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(origin) {
          var res, _ref2, euconsent, usprivacy, uuid, consentStr;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.send(origin);

                case 2:
                  res = _context.sent;
                  _context.next = 5;
                  return res.json();

                case 5:
                  _ref2 = _context.sent;
                  euconsent = _ref2.euconsent;
                  usprivacy = _ref2.usprivacy;
                  uuid = _ref2.uuid;
                  consentStr = euconsent || usprivacy;
                  this.updateStorage(consentStr, uuid); // set version

                  this.load();
                  this.emit('update');

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function save(_x) {
          return _save.apply(this, arguments);
        }

        return save;
      }()
    }, {
      key: "destroy",
      value: function destroy() {
        deleteCookie(ConsentModel.getCookieName());
        deleteCookie('uuid');
        removeLocalStorage(ConsentModel.getCookieName());
        removeLocalStorage("".concat(ConsentModel.getCookieName(), "-expires"));
        removeLocalStorage('uuid');
        removeLocalStorage('uuid-expires');
        this.emit('destroy');
      }
    }, {
      key: "getMetaFromLocalStorage",
      value: function getMetaFromLocalStorage() {
        var storage = localStorage.getItem(CMP_META_KEY);
        return storage ? JSON.parse(storage) : {
          version: 0
        };
      }
    }, {
      key: "upgradeConsent",
      value: function () {
        var _upgradeConsent = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var bodyOptions, _this$getMetaFromLoca, version, body, metadata, consentData;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  bodyOptions = [];
                  _this$getMetaFromLoca = this.getMetaFromLocalStorage(), version = _this$getMetaFromLoca.version;

                  if (version < VERSION_TO_UPGRADE_SAMESITE) {
                    bodyOptions.push({});
                  } // if (this.consentData.getCmpId() === 1) {
                  //   debug('added item to post for cmpId')
                  //
                  //   let chance = parseFloat(localStorage.getItem('cmp-chance-of-upgrade') || '-1')
                  //   if (chance === -1) {
                  //     chance = Math.random()
                  //     localStorage.setItem('cmp-chance-of-upgrade', '' + chance)
                  //   }
                  //
                  //   const rollOutStart = Date.parse('2019-06-03T10:00:00')
                  //   const rollOutEnd = Date.parse('2019-06-06T16:00:00')
                  //   const rollOutProgress = (+new Date() - rollOutStart) / (rollOutEnd - rollOutStart)
                  //   if (rollOutProgress > chance) {
                  //     bodyOptions.push({
                  //       consentStringLastUpdated: '2020-01-01T00:00:00.000Z'
                  //     })
                  //   }
                  // }


                  if (!(bodyOptions.length === 0)) {
                    _context2.next = 5;
                    break;
                  }

                  return _context2.abrupt("return");

                case 5:
                  _context2.prev = 5;
                  body = _objectSpread({
                    domain: getRootWindowDomain()
                  }, bodyOptions.reduce(function (acc, next) {
                    return _objectSpread({}, acc, next);
                  }, {}));
                  _context2.next = 9;
                  return this.postUpgrade(body);

                case 9:
                  metadata = getCookie(ConsentModel.cookieName);
                  consentData = new dist_1(metadata);
                  logline("New vendor list version: ".concat(consentData.getVendorListVersion()), INFO);
                  _context2.next = 17;
                  break;

                case 14:
                  _context2.prev = 14;
                  _context2.t0 = _context2["catch"](5);
                  logline("Error trying to upgrade consent: ".concat(_context2.t0), WARN);

                case 17:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[5, 14]]);
        }));

        function upgradeConsent() {
          return _upgradeConsent.apply(this, arguments);
        }

        return upgradeConsent;
      }()
    }, {
      key: "setCCPANotApplicableStatus",
      value: function () {
        var _setCCPANotApplicableStatus = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(_ref3) {
          var _ref4, origin, channel, requestUUID, body, knownPrivacyString, knownUuid, shouldUpdateServer, rp, _ref5, usprivacy, uuid;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _ref4 = _slicedToArray(_ref3, 2), origin = _ref4[0], channel = _ref4[1];
                  requestUUID = getLocalStorage('uuid') || getCookie('uuid') || undefined;
                  body = _objectSpread({
                    channel: channel,
                    domain: origin
                  }, {
                    uuid: requestUUID
                  });
                  knownPrivacyString = getLocalStorage(ConsentModel.getCookieName());
                  knownUuid = getLocalStorage('uuid');
                  shouldUpdateServer = knownPrivacyString !== '1---' || !knownUuid;

                  if (shouldUpdateServer) {
                    _context3.next = 8;
                    break;
                  }

                  return _context3.abrupt("return");

                case 8:
                  rp = fetch("".concat(this.backendBaseUrl, "/ccpa/consent"), {
                    body: JSON.stringify(body),
                    credentials: 'include',
                    headers: {
                      'content-type': 'application/json'
                    },
                    method: 'POST'
                  }).then(function (r) {
                    return r.json();
                  });
                  _context3.next = 11;
                  return rp;

                case 11:
                  _ref5 = _context3.sent;
                  usprivacy = _ref5.usprivacy;
                  uuid = _ref5.uuid;
                  this.updateStorage(usprivacy, uuid);
                  this.emit('update');

                case 16:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function setCCPANotApplicableStatus(_x2) {
          return _setCCPANotApplicableStatus.apply(this, arguments);
        }

        return setCCPANotApplicableStatus;
      }()
    }, {
      key: "send",
      value: function send(origin) {
        var channel = searchParams['mol.ads.cmp.channel'] || null;
        var uuid = getLocalStorage('uuid') || getCookie('uuid') || undefined;
        var reqObj = {
          legislation: this.legislation,
          notice: true,
          optOut: Boolean(!this.consented),
          lspa: false,
          channel: channel,
          domain: origin,
          uuid: uuid,
          country: this.geoInfo.geo,
          region: this.geoInfo.region
        };
        return fetch("".concat(this.backendBaseUrl, "/ccpa/consent"), {
          body: JSON.stringify(reqObj),
          credentials: 'include',
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST'
        });
      }
    }, {
      key: "postUpgrade",
      value: function () {
        var _postUpgrade = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4(bodyOptions) {
          var rp, _ref6, usprivacy, uuid;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return fetch("".concat(this.backendBaseUrl, "/ccpa/consent/upgrade"), {
                    body: JSON.stringify(_objectSpread({}, bodyOptions, {
                      usprivacy: getCookie(ConsentModel.getCookieName()),
                      uuid: getCookie('uuid')
                    })),
                    credentials: 'include',
                    headers: {
                      'content-type': 'application/json'
                    },
                    method: 'POST'
                  });

                case 2:
                  rp = _context4.sent;
                  _context4.next = 5;
                  return rp.json();

                case 5:
                  _ref6 = _context4.sent;
                  usprivacy = _ref6.usprivacy;
                  uuid = _ref6.uuid;
                  this.updateStorage(usprivacy, uuid);

                case 9:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function postUpgrade(_x3) {
          return _postUpgrade.apply(this, arguments);
        }

        return postUpgrade;
      }()
    }, {
      key: "daisybit",
      get: function get() {
        if (this.metadata) {
          return this.metadata;
        }

        return getConsentData(this.vendorList).getConsentString();
      }
    }, {
      key: "USPString",
      get: function get() {
        return this.metadata;
      }
    }], [{
      key: "getCookieName",
      value: function getCookieName() {
        return 'usprivacy';
      }
    }, {
      key: "load",
      value: function () {
        var _load = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5(backendBaseUrl, clientConsentString, geoInfo, legislation, pVendorList) {
          var _ref7, _ref8, vendorList, consentModel;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return Promise.all([pVendorList]);

                case 2:
                  _ref7 = _context5.sent;
                  _ref8 = _slicedToArray(_ref7, 1);
                  vendorList = _ref8[0];
                  logline("creating consentModel, clientConsentString:\" ".concat(clientConsentString));
                  consentModel = new this(backendBaseUrl, vendorList, clientConsentString, geoInfo, legislation);

                  if (clientConsentString) {
                    _context5.next = 10;
                    break;
                  }

                  _context5.next = 10;
                  return consentModel.load();

                case 10:
                  return _context5.abrupt("return", consentModel);

                case 11:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function load(_x4, _x5, _x6, _x7, _x8) {
          return _load.apply(this, arguments);
        }

        return load;
      }()
    }]);

    return ConsentModel;
  }(MultiWindowEmitter);
  ConsentModel.cookieName = 'euconsent';

  var DissentedStubModel =
  /*#__PURE__*/
  function (_ConsentModel) {
    _inherits(DissentedStubModel, _ConsentModel);

    function DissentedStubModel() {
      _classCallCheck(this, DissentedStubModel);

      return _possibleConstructorReturn(this, _getPrototypeOf(DissentedStubModel).apply(this, arguments));
    }

    _createClass(DissentedStubModel, [{
      key: "load",
      value: function load() {
        this.consentData = getConsentData(this.vendorList);
        this.metadata = this.consentData.getConsentString();
        this.consented = false;
      }
    }]);

    return DissentedStubModel;
  }(ConsentModel);

  var ConsentedStubModel =
  /*#__PURE__*/
  function (_DissentedStubModel) {
    _inherits(ConsentedStubModel, _DissentedStubModel);

    function ConsentedStubModel() {
      _classCallCheck(this, ConsentedStubModel);

      return _possibleConstructorReturn(this, _getPrototypeOf(ConsentedStubModel).apply(this, arguments));
    }

    _createClass(ConsentedStubModel, [{
      key: "load",
      value: function load() {
        _get(_getPrototypeOf(ConsentedStubModel.prototype), "load", this).call(this);

        var purposesAllowed = this.vendorList.purposes.map(function (p) {
          return p.id;
        });
        var vendorsAllowed = this.vendorList.vendors.map(function (v) {
          return v.id;
        });
        this.consentData.setPurposesAllowed(purposesAllowed);
        this.consentData.setVendorsAllowed(vendorsAllowed);
        this.metadata = this.consentData.getConsentString();
        this.consented = true;
      }
    }]);

    return ConsentedStubModel;
  }(DissentedStubModel);

  function consentFactory (backendBaseUrl, Dflt, clientConsentString, geoInfo, legislation, pVendorList) {
    if (searchParams['mol.ads.cmp.stubConsent']) {
      logline('stubbing consent', WARN);
      return ConsentedStubModel.load(backendBaseUrl, clientConsentString, geoInfo, legislation, pVendorList);
    } else if (searchParams['mol.ads.cmp.stubDissent']) {
      logline('stubbing dissent', WARN);
      return DissentedStubModel.load(backendBaseUrl, clientConsentString, geoInfo, legislation, pVendorList);
    } else {
      logline("load consent: ".concat(clientConsentString));
      return Dflt.load(backendBaseUrl, clientConsentString, geoInfo, legislation, pVendorList);
    }
  }

  var API =
  /*#__PURE__*/
  function (_Emitter) {
    _inherits(API, _Emitter);

    function API(backendBaseUrl) {
      var _this;

      _classCallCheck(this, API);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(API).call(this));
      _this.backendBaseUrl = backendBaseUrl;
      _this.a = _defineProperty({
        push: _this.callQueueCommand.bind(_assertThisInitialized(_assertThisInitialized(_this)))
      }, Symbol.iterator,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      return _this;
    }

    _createClass(API, [{
      key: "callP",
      value: function callP(command) {
        var _this2 = this;

        var parameter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return new Promise(function (resolve, reject) {
          _this2.call(command, parameter, function (rtnValue, success) {
            if (success) {
              resolve(rtnValue);
            } else {
              reject(new CMPError('Bad response'));
            }
          });
        });
      }
    }, {
      key: "callQueueCommand",
      value: function callQueueCommand(_ref) {
        var _ref2 = _slicedToArray(_ref, 3),
            command = _ref2[0],
            parameter = _ref2[1],
            callback = _ref2[2];

        this.call(command, parameter, callback);
      }
    }, {
      key: "callQueue",
      value: function callQueue() {
        API.provision(); // @ts-ignore

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = window.__uspapi.a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var queueCommand = _step.value;

            try {
              this.callQueueCommand(queueCommand);
            } catch (error) {
              logline(error);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        window.__uspapi = this.call.bind(this);
        window.__uspapi.a = this.a;
      }
    }], [{
      key: "iframeHandler",
      value: function iframeHandler(_ref3) {
        var _this3 = this;

        var data = _ref3.data,
            origin = _ref3.origin,
            source = _ref3.source;

        if (!source) {
          return;
        }

        var msgIsString = typeof data === 'string'; // tslint:disable-next-line:variable-name

        var __cmpCall = {}; // tslint:disable-next-line:variable-name

        var __cmpReturn;

        try {

          var _ref4 = msgIsString ? JSON.parse(data) : data;

          __cmpCall = _ref4.__cmpCall;
          __cmpReturn = _ref4.__cmpReturn;
        } catch (error) {
          logline(error, WARN);
          logline(data, WARN);
          return;
        }

        if (__cmpReturn) {
          return;
        } else if (!__cmpCall) {
          logline('no __cmpCall', WARN);
          return;
        }

        var _cmpCall = __cmpCall,
            command = _cmpCall.command,
            callId = _cmpCall.callId;
        var _cmpCall2 = __cmpCall,
            _cmpCall2$parameter = _cmpCall2.parameter,
            parameter = _cmpCall2$parameter === void 0 ? null : _cmpCall2$parameter;

        if (isUndefined(command) || isUndefined(callId)) {
          throw new CMPError("Missing required keys from iframe messge. Got: ".concat(Object.keys(__cmpCall).join(', ')));
        }

        if (['consentToAll', 'dissentToAll'].includes(command) && parameter === null) {
          parameter = origin;
        }

        var callback = function callback(returnValue, success) {
          var message = {
            __cmpReturn: {
              callId: callId,
              returnValue: returnValue,
              success: success
            }
          };
          var data = msgIsString ? JSON.stringify(message) : message;
          logline("[".concat(callId, "] [").concat(_this3.name, "] responding to source"));
          logline(data);
          source.postMessage(data, '*');
        };

        logline("[".concat(callId, "] [").concat(this.name, "] received call ").concat(command, "(").concat(parameter, ")"));

        window.__uspapi(command, parameter, callback);
      }
    }, {
      key: "provision",
      value: function provision() {
        window.__uspapi = window.__uspapi || this.provisional;
        window.__uspapi.a = window.__uspapi.a || [];
      }
    }, {
      key: "provisional",
      value: function provisional(command, parameter, callback) {
        window.__uspapi.a.push([command, parameter, callback]);
      }
    }]);

    return API;
  }(Emitter);

  var __decorate = window && window.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };

  var requiresConsentModel = function requiresConsentModel(target, propertyKey, propertyDescriptor) {
    var method = propertyDescriptor.value;

    propertyDescriptor.value = function (parameter, callback) {
      if (!this.consentModel) {
        return callback(null, false);
      }

      method.call(this, parameter, callback);
    };
  };

  var BackendAPI =
  /*#__PURE__*/
  function (_API) {
    _inherits(BackendAPI, _API);

    function BackendAPI() {
      var _this;

      _classCallCheck(this, BackendAPI);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(BackendAPI).apply(this, arguments));
      _this.isReady = false;
      _this.isSingleFrame = false;
      return _this;
    }

    _createClass(BackendAPI, [{
      key: "init",
      value: function () {
        var _init = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(clientConsentString, geoInfo, legislation, pVendorList) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  API.provision();
                  _context.next = 3;
                  return consentFactory(this.backendBaseUrl, ConsentModel, clientConsentString, geoInfo, legislation, pVendorList);

                case 3:
                  this.consentModel = _context.sent;
                  this.isReady = true;
                  this.emit('ready');

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function init(_x, _x2, _x3, _x4) {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    }, {
      key: "hasStorageAccess",
      value: function hasStorageAccess(_, callback) {
        var hasStorageAccess = canUseCookies();
        callback(hasStorageAccess, true);
      }
    }, {
      key: "getVendorConsents",
      value: function getVendorConsents(vendorIds, callback) {
        var _this2 = this;

        var ids = vendorIds && vendorIds.length ? vendorIds : this.consentModel.getAllVendorIds();
        callback({
          gdprApplies: true,
          hasGlobalScope: false,
          metadata: this.consentModel.daisybit,
          purposeConsents: this.consentModel.vendorList.purposes.reduce(function (consentObject, purpose) {
            return _objectSpread({}, consentObject, _defineProperty({}, purpose.id, _this2.consentModel.consented));
          }, {}),
          vendorConsents: ids.reduce(function (consentObject, id) {
            return _objectSpread({}, consentObject, _defineProperty({}, id, _this2.consentModel.consented));
          }, {})
        }, true);
      }
    }, {
      key: "getConsentData",
      value: function getConsentData(consentStringVersion, callback) {
        if (typeof consentStringVersion !== 'undefined' && consentStringVersion !== null && consentStringVersion !== this.consentModel.getConsentVersion().toString()) {
          callback(null, true);
        }

        callback({
          consentData: this.consentModel.daisybit,
          gdprApplies: true,
          hasGlobalScope: false
        }, true);
      }
    }, {
      key: "getUSPData",
      value: function getUSPData(_, callback) {
        callback({
          uspString: this.consentModel.USPString,
          version: 1
        }, true);
      }
    }, {
      key: "ping",
      value: function ping(_, callback) {
        callback({
          cmpLoaded: !!this.consentModel,
          gdprAppliesGlobally: false
        }, true);
      }
      /* MOL API */

    }, {
      key: "consentToAll",
      value: function () {
        var _consentToAll = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(origin) {
          var callback,
              _args2 = arguments;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  callback = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : function () {};
                  this.consentModel.consented = true;
                  _context2.prev = 2;
                  _context2.next = 5;
                  return this.consentModel.save(origin);

                case 5:
                  callback(null, true);
                  _context2.next = 11;
                  break;

                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2["catch"](2);
                  callback(null, false);

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[2, 8]]);
        }));

        function consentToAll(_x5) {
          return _consentToAll.apply(this, arguments);
        }

        return consentToAll;
      }()
    }, {
      key: "dissentToAll",
      value: function () {
        var _dissentToAll = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(origin) {
          var callback,
              _args3 = arguments;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  callback = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : function () {};
                  this.consentModel.consented = false;
                  _context3.prev = 2;
                  _context3.next = 5;
                  return this.consentModel.save(origin);

                case 5:
                  callback(null, true);
                  _context3.next = 11;
                  break;

                case 8:
                  _context3.prev = 8;
                  _context3.t0 = _context3["catch"](2);
                  callback(null, false);

                case 11:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[2, 8]]);
        }));

        function dissentToAll(_x6) {
          return _dissentToAll.apply(this, arguments);
        }

        return dissentToAll;
      }()
    }, {
      key: "setCCPANotApplicableStatus",
      value: function () {
        var _setCCPANotApplicableStatus = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4(_ref) {
          var _ref2,
              origin,
              channel,
              callback,
              _args4 = arguments;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _ref2 = _slicedToArray(_ref, 2), origin = _ref2[0], channel = _ref2[1];
                  callback = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : function () {};
                  _context4.prev = 2;
                  _context4.next = 5;
                  return this.consentModel.setCCPANotApplicableStatus([origin, channel]);

                case 5:
                  callback(null, true);
                  _context4.next = 11;
                  break;

                case 8:
                  _context4.prev = 8;
                  _context4.t0 = _context4["catch"](2);
                  callback(null, false);

                case 11:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this, [[2, 8]]);
        }));

        function setCCPANotApplicableStatus(_x7) {
          return _setCCPANotApplicableStatus.apply(this, arguments);
        }

        return setCCPANotApplicableStatus;
      }()
    }, {
      key: "onConsent",
      value: function onConsent(_, callback) {
        var _this3 = this;

        this.consentModel.on('update', function () {
          if (_this3.consentModel.consented) {
            callback(null, true);
          }
        });
      }
    }, {
      key: "onDissent",
      value: function onDissent(_, callback) {
        var _this4 = this;

        this.consentModel.on('update', function () {
          if (!_this4.consentModel.consented) {
            callback(null, true);
          }
        });
      }
    }, {
      key: "onUpdate",
      value: function onUpdate(_, callback) {
        var _this5 = this;

        this.consentModel.on('update', function () {
          callback(_this5.consentModel.consented, true);
        });
      }
    }, {
      key: "hasChoiceBeenMade",
      value: function hasChoiceBeenMade(_, callback) {
        callback(this.consentModel.hasChoiceBeenMade(), true);
      }
    }, {
      key: "hasConsentedToAll",
      value: function hasConsentedToAll(_, callback) {
        callback(this.consentModel.consented, true);
      }
    }, {
      key: "ready",
      value: function ready(_, callback) {
        if (this.isReady) {
          callback(null, true);
        } else {
          this.on('ready', function () {
            return callback(null, true);
          });
        }
      }
    }, {
      key: "reset",
      value: function reset(_, callback) {
        this.consentModel.destroy();
        callback(null, true);
      }
    }, {
      key: "onReset",
      value: function onReset(_, callback) {
        this.consentModel.on('destroy', function () {
          return callback(null, true);
        });
      }
    }, {
      key: "getVendorList",
      value: function getVendorList(_, callback) {
        callback(this.consentModel.vendorList, true);
      }
    }, {
      key: "getMetadata",
      value: function getMetadata(_, callback) {
        callback({
          isRunningInSingleFrame: this.isSingleFrame
        }, true);
      }
    }, {
      key: "updateCookieIfNeeded",
      value: function () {
        var _updateCookieIfNeeded = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5(_) {
          var callback,
              _args5 = arguments;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  callback = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : function () {};
                  _context5.prev = 1;
                  _context5.next = 4;
                  return this.consentModel.upgradeConsent();

                case 4:
                  callback(null, true);
                  _context5.next = 10;
                  break;

                case 7:
                  _context5.prev = 7;
                  _context5.t0 = _context5["catch"](1);
                  callback(null, false);

                case 10:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this, [[1, 7]]);
        }));

        function updateCookieIfNeeded(_x8) {
          return _updateCookieIfNeeded.apply(this, arguments);
        }

        return updateCookieIfNeeded;
      }()
    }, {
      key: "call",
      value: function call(command) {
        var parameter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

        // @ts-ignore
        if (typeof this[command] !== 'function') {
          throw new Error("\"".concat(command, "\" is not a function"));
        } // @ts-ignore


        this[command](parameter, callback);
      }
    }], [{
      key: "load",
      value: function () {
        var _load = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6(backendBaseUrl, clientConsentString, geoInfo, legislation, pVendorList) {
          var api;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  api = new this(backendBaseUrl);
                  _context6.next = 3;
                  return api.init(clientConsentString, geoInfo, legislation, pVendorList);

                case 3:
                  return _context6.abrupt("return", api);

                case 4:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        function load(_x9, _x10, _x11, _x12, _x13) {
          return _load.apply(this, arguments);
        }

        return load;
      }()
    }]);

    return BackendAPI;
  }(API);

  __decorate([requiresConsentModel], BackendAPI.prototype, "getVendorConsents", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "getConsentData", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "getUSPData", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "consentToAll", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "dissentToAll", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "setCCPANotApplicableStatus", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "onConsent", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "onDissent", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "onUpdate", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "hasChoiceBeenMade", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "hasConsentedToAll", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "ready", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "reset", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "onReset", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "getVendorList", null);

  __decorate([requiresConsentModel], BackendAPI.prototype, "updateCookieIfNeeded", null);

  var requiresView = function requiresView(target, propertyKey, propertyDescriptor) {
    var method = propertyDescriptor.value;

    propertyDescriptor.value = function (parameter, callback) {
      if (!this.view) {
        return callback(null, false);
      }

      method.call(this, parameter, callback);
    };
  };

  var getCurrentPageChannel = function getCurrentPageChannel() {
    var channel = null;

    try {
      try {
        var articleSectionMeta = document.querySelector('meta[property="article:section"]');

        if (articleSectionMeta && articleSectionMeta.getAttribute('content')) {
          channel = articleSectionMeta.getAttribute('content');
        }
      } catch (error) {// Ignore, fail onto PageCriteria
      }

      if (!channel && window && 'PageCriteria' in window) {
        channel = window.PageCriteria.subchannel;
      }

      if (channel) {
        return channel.toLowerCase();
      }
    } catch (error) {// Not familiar with this codebase so coding a bit defensively here
    }

    return null;
  };

  var __decorate$1 = window && window.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };

  var isFrontendOnlyCommand = function isFrontendOnlyCommand(_, propertyKey) {
    FrontendAPI.frontendOnlyCommands.push(propertyKey);
  };

  var FrontendAPI =
  /*#__PURE__*/
  function (_API) {
    _inherits(FrontendAPI, _API);

    function FrontendAPI(backendBaseUrl, iframe, iframeWindow) {
      var _this;

      _classCallCheck(this, FrontendAPI);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FrontendAPI).call(this, backendBaseUrl));
      _this.iframe = iframe;
      _this.iframeWindow = iframeWindow;
      return _this;
    }

    _createClass(FrontendAPI, [{
      key: "call",
      value: function call(command) {
        var parameter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        logline("calling __cmp('".concat(command, "', '").concat(parameter, "')"), DEBUG);

        if (FrontendAPI.frontendOnlyCommands.includes(command)) {
          // @ts-ignore
          return this[command](parameter, callback);
        }

        var callId = randomId();
        this.createResponse(callId, function (_, data) {
          logline("[".concat(callId, "] received"));
          logline(data); // TODO: Figure out why TS hates this line
          // @ts-ignore

          callback(data.returnValue, data.success);
        });
        logline("[".concat(callId, "] calling ").concat(command, "(").concat(parameter, ")"));
        this.iframeWindow.postMessage({
          __cmpCall: {
            callId: callId,
            command: command,
            parameter: parameter
          }
        }, '*');
      }
    }, {
      key: "consentToAll",
      value: function consentToAll() {
        var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.origin;
        this.call('consentToAll', origin, function () {});
      }
    }, {
      key: "dissentToAll",
      value: function dissentToAll() {
        var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.origin;
        this.call('dissentToAll', origin, function () {});
      }
    }, {
      key: "setCCPANotApplicableStatus",
      value: function setCCPANotApplicableStatus(_ref, callback) {
        var _ref2 = _slicedToArray(_ref, 2),
            _ref2$ = _ref2[0],
            origin = _ref2$ === void 0 ? location.origin : _ref2$,
            _ref2$2 = _ref2[1],
            channel = _ref2$2 === void 0 ? '' : _ref2$2;

        this.call('setCCPANotApplicableStatus', [origin, channel], callback);
      }
    }, {
      key: "getUSPData",
      value: function getUSPData(_, callback) {
        this.call('getUSPData', null, callback);
      }
    }, {
      key: "openSettings",
      value: function openSettings(_, callback) {
        this.view.openSettings();
        callback(null, true);
      }
    }, {
      key: "closeSettings",
      value: function closeSettings(_, callback) {
        this.view.closeSettings();
      }
    }, {
      key: "giveThanks",
      value: function giveThanks(_, callback) {
        this.view.alert();
        this.emit('thanksGiven');
        callback(null, true);
      }
    }, {
      key: "rendered",
      value: function rendered(_, callback) {
        var _this2 = this;

        var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (this.view) {
          callback(null, true);
        } else if (count > 10) {
          callback(null, false);
        } else {
          setTimeout(function () {
            return _this2.rendered(_, callback, count + 1);
          }, 10);
        }
      }
    }, {
      key: "unload",
      value: function unload() {
        var _window = window,
            uspapi = _window.__uspapi;
        delete window.__uspapi;
        API.provision();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = uspapi.a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var queueCommand = _step.value;

            window.__uspapi.a.push(queueCommand);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.iframe.remove();
      }
    }, {
      key: "createResponse",
      value: function createResponse(callId, fn) {
        var _this3 = this;

        var handler = function handler(_ref3) {
          var data = _ref3.data,
              source = _ref3.source;

          if (source !== _this3.iframeWindow) {
            logline('message received from non CMP window', WARN); // return
          }

          var parsedData;

          try {
            parsedData = typeof data === 'string' ? JSON.parse(data) : data;
          } catch (error) {
            logline(error, WARN);
            return;
          }

          if (parsedData.__cmpReturn && parsedData.__cmpReturn.callId === callId) {
            window.removeEventListener('message', handler);
            fn(data, parsedData.__cmpReturn);
          }
        };

        window.addEventListener('message', handler);
      }
    }], [{
      key: "load",
      value: function load(_ref4) {
        var _this4 = this;

        var backendBaseUrl = _ref4.backendBaseUrl,
            consentString = _ref4.consentString,
            cvlUiVersion = _ref4.cvlUiVersion,
            geoInfo = _ref4.geoInfo,
            gvlUiVersion = _ref4.gvlUiVersion,
            nrvUiVersion = _ref4.nrvUiVersion,
            scriptVersionBaseUrl = _ref4.scriptVersionBaseUrl,
            vendorListBaseUrl = _ref4.vendorListBaseUrl;
        var _window2 = window,
            doc = _window2.document;

        var getIframeURL = function getIframeURL() {
          var url = "".concat(scriptVersionBaseUrl, "/html/iframe.html?mol.ads.cmp.log.level=").concat(getLevelText(), "&mol.geo.country=").concat(geoInfo.geo, "&mol.geo.region=").concat(geoInfo.region, "&clientConsentString=").concat(consentString);

          if (searchParams['mol.ads.cmp.stubConsent']) {
            url += '&mol.ads.cmp.stubConsent';
          } else if (searchParams['mol.ads.cmp.stubDissent']) {
            url += '&mol.ads.cmp.stubDissent';
          }
          [['backendBaseUrl', backendBaseUrl], ['cvlUiVersion', cvlUiVersion], ['gvlUiVersion', gvlUiVersion], ['nrvUiVersion', nrvUiVersion], ['vendorListBaseUrl', vendorListBaseUrl]].forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                k = _ref6[0],
                v = _ref6[1];

            url += "&".concat(k, "=").concat(v);
          });
          var channel = getCurrentPageChannel();

          if (channel) {
            url += "&mol.ads.cmp.channel=".concat(channel);
          }

          return url;
        };

        var iframe = $('iframe', {
          id: 'mol-ads-cmp-iframe',
          name: '__uspapiLocator',
          src: getIframeURL(),
          style: 'width:0;height:0;border:none;',
          title: 'MOL CMP iframe'
        }, [], doc).raw;
        return new Promise(function (resolve, reject) {
          var onLoad =
          /*#__PURE__*/
          function () {
            var _ref7 = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var contentWindow, api;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      contentWindow = iframe.contentWindow;
                      iframe.removeEventListener('load', onLoad);

                      if (!contentWindow) {
                        reject(new CMPError("Couldn't successfully create CMP"));
                      }

                      api = new _this4(backendBaseUrl, iframe, contentWindow);
                      resolve(api);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function onLoad() {
              return _ref7.apply(this, arguments);
            };
          }();

          iframe.addEventListener('load', onLoad);
          iframe.addEventListener('error', reject);
          onContentLoaded(function () {
            var provisionalLocator = document.getElementById('mol-ads-cmp-iframe');

            if (provisionalLocator) {
              provisionalLocator.remove();
            }

            doc.body.appendChild(iframe);
          });
        });
      }
    }]);

    return FrontendAPI;
  }(API);
  FrontendAPI.frontendOnlyCommands = [];

  __decorate$1([isFrontendOnlyCommand, requiresView], FrontendAPI.prototype, "openSettings", null);

  __decorate$1([isFrontendOnlyCommand, requiresView], FrontendAPI.prototype, "closeSettings", null);

  __decorate$1([isFrontendOnlyCommand, requiresView], FrontendAPI.prototype, "giveThanks", null);

  __decorate$1([isFrontendOnlyCommand], FrontendAPI.prototype, "rendered", null);

  var ConsentModModel =
  /*#__PURE__*/
  function (_ConsentModel) {
    _inherits(ConsentModModel, _ConsentModel);

    function ConsentModModel() {
      _classCallCheck(this, ConsentModModel);

      return _possibleConstructorReturn(this, _getPrototypeOf(ConsentModModel).apply(this, arguments));
    }

    _createClass(ConsentModModel, [{
      key: "save",
      value: function () {
        var _save = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(origin) {
          var response, _ref, euconsent, usprivacy, uuid, consentStr;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.send(origin);

                case 2:
                  response = _context.sent;
                  _context.next = 5;
                  return response.json();

                case 5:
                  _ref = _context.sent;
                  euconsent = _ref.euconsent;
                  usprivacy = _ref.usprivacy;
                  uuid = _ref.uuid;
                  consentStr = euconsent || usprivacy;
                  this.updateStorage(consentStr, uuid);
                  setCookie(ConsentModel.getCookieName(), consentStr, this.getCookieExpireDays(this.consented));
                  setCookie('uuid', uuid, 100 * 365);
                  this.load();
                  this.emit('update');

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function save(_x) {
          return _save.apply(this, arguments);
        }

        return save;
      }()
    }]);

    return ConsentModModel;
  }(ConsentModel);

  var __decorate$2 = window && window.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };

  var FrontendModAPI =
  /*#__PURE__*/
  function (_BackendAPI) {
    _inherits(FrontendModAPI, _BackendAPI);

    function FrontendModAPI() {
      _classCallCheck(this, FrontendModAPI);

      return _possibleConstructorReturn(this, _getPrototypeOf(FrontendModAPI).apply(this, arguments));
    }

    _createClass(FrontendModAPI, [{
      key: "init",
      value: function () {
        var _init = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(clientConsentString, geoInfo, legislation, pVendorList) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  logline('load consentModel');
                  _context.next = 3;
                  return consentFactory(this.backendBaseUrl, ConsentModModel, clientConsentString, geoInfo, legislation, pVendorList);

                case 3:
                  this.consentModel = _context.sent;
                  this.isReady = true;
                  this.isSingleFrame = true;
                  this.emit('ready');

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function init$$1(_x, _x2, _x3, _x4) {
          return _init.apply(this, arguments);
        }

        return init$$1;
      }()
    }, {
      key: "consentToAll",
      value: function consentToAll() {
        var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.origin;
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        return _get(_getPrototypeOf(FrontendModAPI.prototype), "consentToAll", this).call(this, origin, callback);
      }
    }, {
      key: "dissentToAll",
      value: function dissentToAll() {
        var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.origin;
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        return _get(_getPrototypeOf(FrontendModAPI.prototype), "dissentToAll", this).call(this, origin, callback);
      }
    }, {
      key: "openSettings",
      value: function openSettings(_, callback) {
        this.view.openSettings();
        callback(null, true);
      }
    }, {
      key: "closeSettings",
      value: function closeSettings(_, callback) {
        this.view.closeSettings();
        callback(null, true);
      }
    }, {
      key: "giveThanks",
      value: function giveThanks(_, callback) {
        this.view.alert();
        this.emit('thanksGiven');
        callback(null, true);
      }
    }, {
      key: "rendered",
      value: function rendered(_, callback) {
        var _this = this;

        var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (this.view) {
          callback(null, true);
        } else if (count > 10) {
          callback(null, false);
        } else {
          setTimeout(function () {
            return _this.rendered(_, callback, count + 1);
          }, 10);
        }
      }
    }, {
      key: "unload",
      value: function unload() {
        var _window = window,
            uspapi = _window.__uspapi;
        delete window.__uspapi;
        API.provision();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = uspapi.a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var queueCommand = _step.value;

            window.__uspapi.a.push(queueCommand);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (!this.iframe) {
          this.iframe.remove();
        }
      }
    }], [{
      key: "load",
      value: function () {
        var _load = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(backendBaseUrl, clientConsentString, geoInfo, legislation, pVendorList) {
          var _this2 = this;

          var _window2, doc, iframe, promise;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _window2 = window, doc = _window2.document;
                  iframe = $('iframe', {
                    id: 'mol-ads-cmp-iframe',
                    name: '__uspapiLocation',
                    style: 'width:0;height:0;border:none;'
                  }, [], doc).raw;
                  promise = new Promise(function (resolve, reject) {
                    var onLoad =
                    /*#__PURE__*/
                    function () {
                      var _ref = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2() {
                        var contentWindow;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                contentWindow = iframe.contentWindow;
                                iframe.removeEventListener('load', onLoad);

                                if (!contentWindow) {
                                  reject(new CMPError("Couldn't successfully create CMP"));
                                }

                                resolve(new _this2(backendBaseUrl));

                              case 4:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));

                      return function onLoad() {
                        return _ref.apply(this, arguments);
                      };
                    }();

                    iframe.addEventListener('load', onLoad);
                    iframe.addEventListener('error', reject);
                    onContentLoaded(function () {
                      return doc.body.appendChild(iframe);
                    });
                  });
                  return _context3.abrupt("return", Promise.all([promise, _get(_getPrototypeOf(FrontendModAPI), "load", this).call(this, backendBaseUrl, clientConsentString, geoInfo, legislation, pVendorList)]).then(function (_ref2) {
                    var _ref3 = _slicedToArray(_ref2, 2),
                        api = _ref3[1];
                    api.iframe = iframe;
                    return api;
                  }));

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function load(_x5, _x6, _x7, _x8, _x9) {
          return _load.apply(this, arguments);
        }

        return load;
      }()
    }]);

    return FrontendModAPI;
  }(BackendAPI);

  __decorate$2([requiresView], FrontendModAPI.prototype, "openSettings", null);

  __decorate$2([requiresView], FrontendModAPI.prototype, "closeSettings", null);

  __decorate$2([requiresView], FrontendModAPI.prototype, "giveThanks", null);

  var fnToStr = Function.prototype.toString;

  var constructorRegex = /^\s*class\b/;
  var isES6ClassFn = function isES6ClassFunction(value) {
  	try {
  		var fnStr = fnToStr.call(value);
  		return constructorRegex.test(fnStr);
  	} catch (e) {
  		return false; // not a function
  	}
  };

  var tryFunctionObject = function tryFunctionToStr(value) {
  	try {
  		if (isES6ClassFn(value)) { return false; }
  		fnToStr.call(value);
  		return true;
  	} catch (e) {
  		return false;
  	}
  };
  var toStr = Object.prototype.toString;
  var fnClass = '[object Function]';
  var genClass = '[object GeneratorFunction]';
  var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

  var isCallable = function isCallable(value) {
  	if (!value) { return false; }
  	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
  	if (typeof value === 'function' && !value.prototype) { return true; }
  	if (hasToStringTag) { return tryFunctionObject(value); }
  	if (isES6ClassFn(value)) { return false; }
  	var strClass = toStr.call(value);
  	return strClass === fnClass || strClass === genClass;
  };

  var toStr$1 = Object.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  var forEachArray = function forEachArray(array, iterator, receiver) {
      for (var i = 0, len = array.length; i < len; i++) {
          if (hasOwnProperty.call(array, i)) {
              if (receiver == null) {
                  iterator(array[i], i, array);
              } else {
                  iterator.call(receiver, array[i], i, array);
              }
          }
      }
  };

  var forEachString = function forEachString(string, iterator, receiver) {
      for (var i = 0, len = string.length; i < len; i++) {
          // no such thing as a sparse string.
          if (receiver == null) {
              iterator(string.charAt(i), i, string);
          } else {
              iterator.call(receiver, string.charAt(i), i, string);
          }
      }
  };

  var forEachObject = function forEachObject(object, iterator, receiver) {
      for (var k in object) {
          if (hasOwnProperty.call(object, k)) {
              if (receiver == null) {
                  iterator(object[k], k, object);
              } else {
                  iterator.call(receiver, object[k], k, object);
              }
          }
      }
  };

  var forEach = function forEach(list, iterator, thisArg) {
      if (!isCallable(iterator)) {
          throw new TypeError('iterator must be a function');
      }

      var receiver;
      if (arguments.length >= 3) {
          receiver = thisArg;
      }

      if (toStr$1.call(list) === '[object Array]') {
          forEachArray(list, iterator, receiver);
      } else if (typeof list === 'string') {
          forEachString(list, iterator, receiver);
      } else {
          forEachObject(list, iterator, receiver);
      }
  };

  var forEach_1 = forEach;

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var warning = function() {};

  var warning_1 = warning;

  /* eslint no-invalid-this: 1 */

  var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
  var slice = Array.prototype.slice;
  var toStr$2 = Object.prototype.toString;
  var funcType = '[object Function]';

  var implementation = function bind(that) {
      var target = this;
      if (typeof target !== 'function' || toStr$2.call(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice.call(arguments, 1);

      var bound;
      var binder = function () {
          if (this instanceof bound) {
              var result = target.apply(
                  this,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return this;
          } else {
              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );
          }
      };

      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
          boundArgs.push('$' + i);
      }

      bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

      if (target.prototype) {
          var Empty = function Empty() {};
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
      }

      return bound;
  };

  var functionBind = Function.prototype.bind || implementation;

  var src = functionBind.call(Function.call, Object.prototype.hasOwnProperty);

  var toStr$3 = Object.prototype.toString;

  var isArguments = function isArguments(value) {
  	var str = toStr$3.call(value);
  	var isArgs = str === '[object Arguments]';
  	if (!isArgs) {
  		isArgs = str !== '[object Array]' &&
  			value !== null &&
  			typeof value === 'object' &&
  			typeof value.length === 'number' &&
  			value.length >= 0 &&
  			toStr$3.call(value.callee) === '[object Function]';
  	}
  	return isArgs;
  };

  // modified from https://github.com/es-shims/es5-shim
  var has = Object.prototype.hasOwnProperty;
  var toStr$4 = Object.prototype.toString;
  var slice$1 = Array.prototype.slice;

  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
  var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
  var dontEnums = [
  	'toString',
  	'toLocaleString',
  	'valueOf',
  	'hasOwnProperty',
  	'isPrototypeOf',
  	'propertyIsEnumerable',
  	'constructor'
  ];
  var equalsConstructorPrototype = function (o) {
  	var ctor = o.constructor;
  	return ctor && ctor.prototype === o;
  };
  var excludedKeys = {
  	$applicationCache: true,
  	$console: true,
  	$external: true,
  	$frame: true,
  	$frameElement: true,
  	$frames: true,
  	$innerHeight: true,
  	$innerWidth: true,
  	$outerHeight: true,
  	$outerWidth: true,
  	$pageXOffset: true,
  	$pageYOffset: true,
  	$parent: true,
  	$scrollLeft: true,
  	$scrollTop: true,
  	$scrollX: true,
  	$scrollY: true,
  	$self: true,
  	$webkitIndexedDB: true,
  	$webkitStorageInfo: true,
  	$window: true
  };
  var hasAutomationEqualityBug = (function () {
  	/* global window */
  	if (typeof window === 'undefined') { return false; }
  	for (var k in window) {
  		try {
  			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
  				try {
  					equalsConstructorPrototype(window[k]);
  				} catch (e) {
  					return true;
  				}
  			}
  		} catch (e) {
  			return true;
  		}
  	}
  	return false;
  }());
  var equalsConstructorPrototypeIfNotBuggy = function (o) {
  	/* global window */
  	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
  		return equalsConstructorPrototype(o);
  	}
  	try {
  		return equalsConstructorPrototype(o);
  	} catch (e) {
  		return false;
  	}
  };

  var keysShim = function keys(object) {
  	var isObject = object !== null && typeof object === 'object';
  	var isFunction = toStr$4.call(object) === '[object Function]';
  	var isArguments$$1 = isArguments(object);
  	var isString = isObject && toStr$4.call(object) === '[object String]';
  	var theKeys = [];

  	if (!isObject && !isFunction && !isArguments$$1) {
  		throw new TypeError('Object.keys called on a non-object');
  	}

  	var skipProto = hasProtoEnumBug && isFunction;
  	if (isString && object.length > 0 && !has.call(object, 0)) {
  		for (var i = 0; i < object.length; ++i) {
  			theKeys.push(String(i));
  		}
  	}

  	if (isArguments$$1 && object.length > 0) {
  		for (var j = 0; j < object.length; ++j) {
  			theKeys.push(String(j));
  		}
  	} else {
  		for (var name in object) {
  			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
  				theKeys.push(String(name));
  			}
  		}
  	}

  	if (hasDontEnumBug) {
  		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

  		for (var k = 0; k < dontEnums.length; ++k) {
  			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
  				theKeys.push(dontEnums[k]);
  			}
  		}
  	}
  	return theKeys;
  };

  keysShim.shim = function shimObjectKeys() {
  	if (Object.keys) {
  		var keysWorksWithArguments = (function () {
  			// Safari 5.0 bug
  			return (Object.keys(arguments) || '').length === 2;
  		}(1, 2));
  		if (!keysWorksWithArguments) {
  			var originalKeys = Object.keys;
  			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
  				if (isArguments(object)) {
  					return originalKeys(slice$1.call(object));
  				} else {
  					return originalKeys(object);
  				}
  			};
  		}
  	} else {
  		Object.keys = keysShim;
  	}
  	return Object.keys || keysShim;
  };

  var objectKeys = keysShim;

  var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

  var toStr$5 = Object.prototype.toString;
  var concat = Array.prototype.concat;
  var origDefineProperty = Object.defineProperty;

  var isFunction = function (fn) {
  	return typeof fn === 'function' && toStr$5.call(fn) === '[object Function]';
  };

  var arePropertyDescriptorsSupported = function () {
  	var obj = {};
  	try {
  		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
  		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
  		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
  			return false;
  		}
  		return obj.x === obj;
  	} catch (e) { /* this is IE 8. */
  		return false;
  	}
  };
  var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

  var defineProperty = function (object, name, value, predicate) {
  	if (name in object && (!isFunction(predicate) || !predicate())) {
  		return;
  	}
  	if (supportsDescriptors) {
  		origDefineProperty(object, name, {
  			configurable: true,
  			enumerable: false,
  			value: value,
  			writable: true
  		});
  	} else {
  		object[name] = value;
  	}
  };

  var defineProperties = function (object, map) {
  	var predicates = arguments.length > 2 ? arguments[2] : {};
  	var props = objectKeys(map);
  	if (hasSymbols) {
  		props = concat.call(props, Object.getOwnPropertySymbols(map));
  	}
  	for (var i = 0; i < props.length; i += 1) {
  		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
  	}
  };

  defineProperties.supportsDescriptors = !!supportsDescriptors;

  var defineProperties_1 = defineProperties;

  /* globals
  	Set,
  	Map,
  	WeakSet,
  	WeakMap,

  	Promise,

  	Symbol,
  	Proxy,

  	Atomics,
  	SharedArrayBuffer,

  	ArrayBuffer,
  	DataView,
  	Uint8Array,
  	Float32Array,
  	Float64Array,
  	Int8Array,
  	Int16Array,
  	Int32Array,
  	Uint8ClampedArray,
  	Uint16Array,
  	Uint32Array,
  */

  var undefined$1; // eslint-disable-line no-shadow-restricted-names

  var ThrowTypeError = Object.getOwnPropertyDescriptor
  	? (function () { return Object.getOwnPropertyDescriptor(arguments, 'callee').get; }())
  	: function () { throw new TypeError(); };

  var hasSymbols$1 = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

  var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto
  var generatorFunction = undefined$1;
  var asyncFunction = undefined$1;
  var asyncGenFunction = undefined$1;

  var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);

  var INTRINSICS = {
  	'$ %Array%': Array,
  	'$ %ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
  	'$ %ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer.prototype,
  	'$ %ArrayIteratorPrototype%': hasSymbols$1 ? getProto([][Symbol.iterator]()) : undefined$1,
  	'$ %ArrayPrototype%': Array.prototype,
  	'$ %ArrayProto_entries%': Array.prototype.entries,
  	'$ %ArrayProto_forEach%': Array.prototype.forEach,
  	'$ %ArrayProto_keys%': Array.prototype.keys,
  	'$ %ArrayProto_values%': Array.prototype.values,
  	'$ %AsyncFromSyncIteratorPrototype%': undefined$1,
  	'$ %AsyncFunction%': asyncFunction,
  	'$ %AsyncFunctionPrototype%': undefined$1,
  	'$ %AsyncGenerator%': undefined$1,
  	'$ %AsyncGeneratorFunction%': asyncGenFunction,
  	'$ %AsyncGeneratorPrototype%': undefined$1,
  	'$ %AsyncIteratorPrototype%': undefined$1,
  	'$ %Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
  	'$ %Boolean%': Boolean,
  	'$ %BooleanPrototype%': Boolean.prototype,
  	'$ %DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
  	'$ %DataViewPrototype%': typeof DataView === 'undefined' ? undefined$1 : DataView.prototype,
  	'$ %Date%': Date,
  	'$ %DatePrototype%': Date.prototype,
  	'$ %decodeURI%': decodeURI,
  	'$ %decodeURIComponent%': decodeURIComponent,
  	'$ %encodeURI%': encodeURI,
  	'$ %encodeURIComponent%': encodeURIComponent,
  	'$ %Error%': Error,
  	'$ %ErrorPrototype%': Error.prototype,
  	'$ %eval%': eval, // eslint-disable-line no-eval
  	'$ %EvalError%': EvalError,
  	'$ %EvalErrorPrototype%': EvalError.prototype,
  	'$ %Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
  	'$ %Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array.prototype,
  	'$ %Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
  	'$ %Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array.prototype,
  	'$ %Function%': Function,
  	'$ %FunctionPrototype%': Function.prototype,
  	'$ %Generator%': undefined$1,
  	'$ %GeneratorFunction%': generatorFunction,
  	'$ %GeneratorPrototype%': undefined$1,
  	'$ %Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
  	'$ %Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array.prototype,
  	'$ %Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
  	'$ %Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined$1 : Int8Array.prototype,
  	'$ %Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
  	'$ %Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array.prototype,
  	'$ %isFinite%': isFinite,
  	'$ %isNaN%': isNaN,
  	'$ %IteratorPrototype%': hasSymbols$1 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
  	'$ %JSON%': JSON,
  	'$ %JSONParse%': JSON.parse,
  	'$ %Map%': typeof Map === 'undefined' ? undefined$1 : Map,
  	'$ %MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
  	'$ %MapPrototype%': typeof Map === 'undefined' ? undefined$1 : Map.prototype,
  	'$ %Math%': Math,
  	'$ %Number%': Number,
  	'$ %NumberPrototype%': Number.prototype,
  	'$ %Object%': Object,
  	'$ %ObjectPrototype%': Object.prototype,
  	'$ %ObjProto_toString%': Object.prototype.toString,
  	'$ %ObjProto_valueOf%': Object.prototype.valueOf,
  	'$ %parseFloat%': parseFloat,
  	'$ %parseInt%': parseInt,
  	'$ %Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
  	'$ %PromisePrototype%': typeof Promise === 'undefined' ? undefined$1 : Promise.prototype,
  	'$ %PromiseProto_then%': typeof Promise === 'undefined' ? undefined$1 : Promise.prototype.then,
  	'$ %Promise_all%': typeof Promise === 'undefined' ? undefined$1 : Promise.all,
  	'$ %Promise_reject%': typeof Promise === 'undefined' ? undefined$1 : Promise.reject,
  	'$ %Promise_resolve%': typeof Promise === 'undefined' ? undefined$1 : Promise.resolve,
  	'$ %Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
  	'$ %RangeError%': RangeError,
  	'$ %RangeErrorPrototype%': RangeError.prototype,
  	'$ %ReferenceError%': ReferenceError,
  	'$ %ReferenceErrorPrototype%': ReferenceError.prototype,
  	'$ %Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
  	'$ %RegExp%': RegExp,
  	'$ %RegExpPrototype%': RegExp.prototype,
  	'$ %Set%': typeof Set === 'undefined' ? undefined$1 : Set,
  	'$ %SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
  	'$ %SetPrototype%': typeof Set === 'undefined' ? undefined$1 : Set.prototype,
  	'$ %SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
  	'$ %SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer.prototype,
  	'$ %String%': String,
  	'$ %StringIteratorPrototype%': hasSymbols$1 ? getProto(''[Symbol.iterator]()) : undefined$1,
  	'$ %StringPrototype%': String.prototype,
  	'$ %Symbol%': hasSymbols$1 ? Symbol : undefined$1,
  	'$ %SymbolPrototype%': hasSymbols$1 ? Symbol.prototype : undefined$1,
  	'$ %SyntaxError%': SyntaxError,
  	'$ %SyntaxErrorPrototype%': SyntaxError.prototype,
  	'$ %ThrowTypeError%': ThrowTypeError,
  	'$ %TypedArray%': TypedArray,
  	'$ %TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined$1,
  	'$ %TypeError%': TypeError,
  	'$ %TypeErrorPrototype%': TypeError.prototype,
  	'$ %Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
  	'$ %Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array.prototype,
  	'$ %Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
  	'$ %Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray.prototype,
  	'$ %Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
  	'$ %Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array.prototype,
  	'$ %Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
  	'$ %Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array.prototype,
  	'$ %URIError%': URIError,
  	'$ %URIErrorPrototype%': URIError.prototype,
  	'$ %WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
  	'$ %WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap.prototype,
  	'$ %WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet,
  	'$ %WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet.prototype
  };

  var GetIntrinsic = function GetIntrinsic(name, allowMissing) {
  	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
  		throw new TypeError('"allowMissing" argument must be a boolean');
  	}

  	var key = '$ ' + name;
  	if (!(key in INTRINSICS)) {
  		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
  	}

  	// istanbul ignore if // hopefully this is impossible to test :-)
  	if (typeof INTRINSICS[key] === 'undefined' && !allowMissing) {
  		throw new TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
  	}
  	return INTRINSICS[key];
  };

  var $TypeError = GetIntrinsic('%TypeError%');
  var $SyntaxError = GetIntrinsic('%SyntaxError%');



  var predicates = {
    // https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
    'Property Descriptor': function isPropertyDescriptor(ES, Desc) {
      if (ES.Type(Desc) !== 'Object') {
        return false;
      }
      var allowed = {
        '[[Configurable]]': true,
        '[[Enumerable]]': true,
        '[[Get]]': true,
        '[[Set]]': true,
        '[[Value]]': true,
        '[[Writable]]': true
      };

      for (var key in Desc) { // eslint-disable-line
        if (src(Desc, key) && !allowed[key]) {
          return false;
        }
      }

      var isData = src(Desc, '[[Value]]');
      var IsAccessor = src(Desc, '[[Get]]') || src(Desc, '[[Set]]');
      if (isData && IsAccessor) {
        throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
      }
      return true;
    }
  };

  var assertRecord = function assertRecord(ES, recordType, argumentName, value) {
    var predicate = predicates[recordType];
    if (typeof predicate !== 'function') {
      throw new $SyntaxError('unknown record type: ' + recordType);
    }
    if (!predicate(ES, value)) {
      throw new $TypeError(argumentName + ' must be a ' + recordType);
    }
    console.log(predicate(ES, value), value);
  };

  var _isNaN = Number.isNaN || function isNaN(a) {
  	return a !== a;
  };

  var $isNaN = Number.isNaN || function (a) { return a !== a; };

  var _isFinite = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };

  var sign = function sign(number) {
  	return number >= 0 ? 1 : -1;
  };

  var mod = function mod(number, modulo) {
  	var remain = number % modulo;
  	return Math.floor(remain >= 0 ? remain : remain + modulo);
  };

  var isPrimitive = function isPrimitive(value) {
  	return value === null || (typeof value !== 'function' && typeof value !== 'object');
  };

  var toStr$6 = Object.prototype.toString;





  // http://ecma-international.org/ecma-262/5.1/#sec-8.12.8
  var ES5internalSlots = {
  	'[[DefaultValue]]': function (O) {
  		var actualHint;
  		if (arguments.length > 1) {
  			actualHint = arguments[1];
  		} else {
  			actualHint = toStr$6.call(O) === '[object Date]' ? String : Number;
  		}

  		if (actualHint === String || actualHint === Number) {
  			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
  			var value, i;
  			for (i = 0; i < methods.length; ++i) {
  				if (isCallable(O[methods[i]])) {
  					value = O[methods[i]]();
  					if (isPrimitive(value)) {
  						return value;
  					}
  				}
  			}
  			throw new TypeError('No default value');
  		}
  		throw new TypeError('invalid [[DefaultValue]] hint supplied');
  	}
  };

  // http://ecma-international.org/ecma-262/5.1/#sec-9.1
  var es5 = function ToPrimitive(input) {
  	if (isPrimitive(input)) {
  		return input;
  	}
  	if (arguments.length > 1) {
  		return ES5internalSlots['[[DefaultValue]]'](input, arguments[1]);
  	}
  	return ES5internalSlots['[[DefaultValue]]'](input);
  };

  var $Object = GetIntrinsic('%Object%');
  var $TypeError$1 = GetIntrinsic('%TypeError%');
  var $String = GetIntrinsic('%String%');













  // https://es5.github.io/#x9
  var ES5 = {
  	ToPrimitive: es5,

  	ToBoolean: function ToBoolean(value) {
  		return !!value;
  	},
  	ToNumber: function ToNumber(value) {
  		return +value; // eslint-disable-line no-implicit-coercion
  	},
  	ToInteger: function ToInteger(value) {
  		var number = this.ToNumber(value);
  		if (_isNaN(number)) { return 0; }
  		if (number === 0 || !_isFinite(number)) { return number; }
  		return sign(number) * Math.floor(Math.abs(number));
  	},
  	ToInt32: function ToInt32(x) {
  		return this.ToNumber(x) >> 0;
  	},
  	ToUint32: function ToUint32(x) {
  		return this.ToNumber(x) >>> 0;
  	},
  	ToUint16: function ToUint16(value) {
  		var number = this.ToNumber(value);
  		if (_isNaN(number) || number === 0 || !_isFinite(number)) { return 0; }
  		var posInt = sign(number) * Math.floor(Math.abs(number));
  		return mod(posInt, 0x10000);
  	},
  	ToString: function ToString(value) {
  		return $String(value);
  	},
  	ToObject: function ToObject(value) {
  		this.CheckObjectCoercible(value);
  		return $Object(value);
  	},
  	CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
  		/* jshint eqnull:true */
  		if (value == null) {
  			throw new $TypeError$1(optMessage || 'Cannot call method on ' + value);
  		}
  		return value;
  	},
  	IsCallable: isCallable,
  	SameValue: function SameValue(x, y) {
  		if (x === y) { // 0 === -0, but they are not identical.
  			if (x === 0) { return 1 / x === 1 / y; }
  			return true;
  		}
  		return _isNaN(x) && _isNaN(y);
  	},

  	// https://www.ecma-international.org/ecma-262/5.1/#sec-8
  	Type: function Type(x) {
  		if (x === null) {
  			return 'Null';
  		}
  		if (typeof x === 'undefined') {
  			return 'Undefined';
  		}
  		if (typeof x === 'function' || typeof x === 'object') {
  			return 'Object';
  		}
  		if (typeof x === 'number') {
  			return 'Number';
  		}
  		if (typeof x === 'boolean') {
  			return 'Boolean';
  		}
  		if (typeof x === 'string') {
  			return 'String';
  		}
  	},

  	// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
  	IsPropertyDescriptor: function IsPropertyDescriptor(Desc) {
  		if (this.Type(Desc) !== 'Object') {
  			return false;
  		}
  		var allowed = {
  			'[[Configurable]]': true,
  			'[[Enumerable]]': true,
  			'[[Get]]': true,
  			'[[Set]]': true,
  			'[[Value]]': true,
  			'[[Writable]]': true
  		};

  		for (var key in Desc) { // eslint-disable-line
  			if (src(Desc, key) && !allowed[key]) {
  				return false;
  			}
  		}

  		var isData = src(Desc, '[[Value]]');
  		var IsAccessor = src(Desc, '[[Get]]') || src(Desc, '[[Set]]');
  		if (isData && IsAccessor) {
  			throw new $TypeError$1('Property Descriptors may not be both accessor and data descriptors');
  		}
  		return true;
  	},

  	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.1
  	IsAccessorDescriptor: function IsAccessorDescriptor(Desc) {
  		if (typeof Desc === 'undefined') {
  			return false;
  		}

  		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

  		if (!src(Desc, '[[Get]]') && !src(Desc, '[[Set]]')) {
  			return false;
  		}

  		return true;
  	},

  	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.2
  	IsDataDescriptor: function IsDataDescriptor(Desc) {
  		if (typeof Desc === 'undefined') {
  			return false;
  		}

  		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

  		if (!src(Desc, '[[Value]]') && !src(Desc, '[[Writable]]')) {
  			return false;
  		}

  		return true;
  	},

  	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.3
  	IsGenericDescriptor: function IsGenericDescriptor(Desc) {
  		if (typeof Desc === 'undefined') {
  			return false;
  		}

  		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

  		if (!this.IsAccessorDescriptor(Desc) && !this.IsDataDescriptor(Desc)) {
  			return true;
  		}

  		return false;
  	},

  	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.4
  	FromPropertyDescriptor: function FromPropertyDescriptor(Desc) {
  		if (typeof Desc === 'undefined') {
  			return Desc;
  		}

  		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

  		if (this.IsDataDescriptor(Desc)) {
  			return {
  				value: Desc['[[Value]]'],
  				writable: !!Desc['[[Writable]]'],
  				enumerable: !!Desc['[[Enumerable]]'],
  				configurable: !!Desc['[[Configurable]]']
  			};
  		} else if (this.IsAccessorDescriptor(Desc)) {
  			return {
  				get: Desc['[[Get]]'],
  				set: Desc['[[Set]]'],
  				enumerable: !!Desc['[[Enumerable]]'],
  				configurable: !!Desc['[[Configurable]]']
  			};
  		} else {
  			throw new $TypeError$1('FromPropertyDescriptor must be called with a fully populated Property Descriptor');
  		}
  	},

  	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5
  	ToPropertyDescriptor: function ToPropertyDescriptor(Obj) {
  		if (this.Type(Obj) !== 'Object') {
  			throw new $TypeError$1('ToPropertyDescriptor requires an object');
  		}

  		var desc = {};
  		if (src(Obj, 'enumerable')) {
  			desc['[[Enumerable]]'] = this.ToBoolean(Obj.enumerable);
  		}
  		if (src(Obj, 'configurable')) {
  			desc['[[Configurable]]'] = this.ToBoolean(Obj.configurable);
  		}
  		if (src(Obj, 'value')) {
  			desc['[[Value]]'] = Obj.value;
  		}
  		if (src(Obj, 'writable')) {
  			desc['[[Writable]]'] = this.ToBoolean(Obj.writable);
  		}
  		if (src(Obj, 'get')) {
  			var getter = Obj.get;
  			if (typeof getter !== 'undefined' && !this.IsCallable(getter)) {
  				throw new TypeError('getter must be a function');
  			}
  			desc['[[Get]]'] = getter;
  		}
  		if (src(Obj, 'set')) {
  			var setter = Obj.set;
  			if (typeof setter !== 'undefined' && !this.IsCallable(setter)) {
  				throw new $TypeError$1('setter must be a function');
  			}
  			desc['[[Set]]'] = setter;
  		}

  		if ((src(desc, '[[Get]]') || src(desc, '[[Set]]')) && (src(desc, '[[Value]]') || src(desc, '[[Writable]]'))) {
  			throw new $TypeError$1('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  		}
  		return desc;
  	}
  };

  var es5$1 = ES5;

  var replace$1 = functionBind.call(Function.call, String.prototype.replace);

  var leftWhitespace = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
  var rightWhitespace = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;

  var implementation$1 = function trim() {
  	var S = es5$1.ToString(es5$1.CheckObjectCoercible(this));
  	return replace$1(replace$1(S, leftWhitespace, ''), rightWhitespace, '');
  };

  var zeroWidthSpace = '\u200b';

  var polyfill = function getPolyfill() {
  	if (String.prototype.trim && zeroWidthSpace.trim() === zeroWidthSpace) {
  		return String.prototype.trim;
  	}
  	return implementation$1;
  };

  var shim = function shimStringTrim() {
  	var polyfill$$1 = polyfill();
  	defineProperties_1(String.prototype, { trim: polyfill$$1 }, { trim: function () { return String.prototype.trim !== polyfill$$1; } });
  	return polyfill$$1;
  };

  var boundTrim = functionBind.call(Function.call, polyfill());

  defineProperties_1(boundTrim, {
  	getPolyfill: polyfill,
  	implementation: implementation$1,
  	shim: shim
  });

  var string_prototype_trim = boundTrim;

  var warn = function warn(message) {
    warning_1(false, message);
  };

  var replace$2 = String.prototype.replace;
  var split = String.prototype.split;

  // #### Pluralization methods
  // The string that separates the different phrase possibilities.
  var delimiter = '||||';

  var russianPluralGroups = function (n) {
    var end = n % 10;
    if (n !== 11 && end === 1) {
      return 0;
    }
    if (2 <= end && end <= 4 && !(n >= 12 && n <= 14)) {
      return 1;
    }
    return 2;
  };

  // Mapping from pluralization group plural logic.
  var pluralTypes = {
    arabic: function (n) {
      // http://www.arabeyes.org/Plural_Forms
      if (n < 3) { return n; }
      var lastTwo = n % 100;
      if (lastTwo >= 3 && lastTwo <= 10) return 3;
      return lastTwo >= 11 ? 4 : 5;
    },
    bosnian_serbian: russianPluralGroups,
    chinese: function () { return 0; },
    croatian: russianPluralGroups,
    french: function (n) { return n > 1 ? 1 : 0; },
    german: function (n) { return n !== 1 ? 1 : 0; },
    russian: russianPluralGroups,
    lithuanian: function (n) {
      if (n % 10 === 1 && n % 100 !== 11) { return 0; }
      return n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19) ? 1 : 2;
    },
    czech: function (n) {
      if (n === 1) { return 0; }
      return (n >= 2 && n <= 4) ? 1 : 2;
    },
    polish: function (n) {
      if (n === 1) { return 0; }
      var end = n % 10;
      return 2 <= end && end <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    },
    icelandic: function (n) { return (n % 10 !== 1 || n % 100 === 11) ? 1 : 0; },
    slovenian: function (n) {
      var lastTwo = n % 100;
      if (lastTwo === 1) {
        return 0;
      }
      if (lastTwo === 2) {
        return 1;
      }
      if (lastTwo === 3 || lastTwo === 4) {
        return 2;
      }
      return 3;
    }
  };


  // Mapping from pluralization group to individual language codes/locales.
  // Will look up based on exact match, if not found and it's a locale will parse the locale
  // for language code, and if that does not exist will default to 'en'
  var pluralTypeToLanguages = {
    arabic: ['ar'],
    bosnian_serbian: ['bs-Latn-BA', 'bs-Cyrl-BA', 'srl-RS', 'sr-RS'],
    chinese: ['id', 'id-ID', 'ja', 'ko', 'ko-KR', 'lo', 'ms', 'th', 'th-TH', 'zh'],
    croatian: ['hr', 'hr-HR'],
    german: ['fa', 'da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hi-IN', 'hu', 'hu-HU', 'it', 'nl', 'no', 'pt', 'sv', 'tr'],
    french: ['fr', 'tl', 'pt-br'],
    russian: ['ru', 'ru-RU'],
    lithuanian: ['lt'],
    czech: ['cs', 'cs-CZ', 'sk'],
    polish: ['pl'],
    icelandic: ['is'],
    slovenian: ['sl-SL']
  };

  function langToTypeMap(mapping) {
    var ret = {};
    forEach_1(mapping, function (langs, type) {
      forEach_1(langs, function (lang) {
        ret[lang] = type;
      });
    });
    return ret;
  }

  function pluralTypeName(locale) {
    var langToPluralType = langToTypeMap(pluralTypeToLanguages);
    return langToPluralType[locale]
      || langToPluralType[split.call(locale, /-/, 1)[0]]
      || langToPluralType.en;
  }

  function pluralTypeIndex(locale, count) {
    return pluralTypes[pluralTypeName(locale)](count);
  }

  function escape(token) {
    return token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function constructTokenRegex(opts) {
    var prefix = (opts && opts.prefix) || '%{';
    var suffix = (opts && opts.suffix) || '}';

    if (prefix === delimiter || suffix === delimiter) {
      throw new RangeError('"' + delimiter + '" token is reserved for pluralization');
    }

    return new RegExp(escape(prefix) + '(.*?)' + escape(suffix), 'g');
  }

  var dollarRegex = /\$/g;
  var dollarBillsYall = '$$';
  var defaultTokenRegex = /%\{(.*?)\}/g;

  // ### transformPhrase(phrase, substitutions, locale)
  //
  // Takes a phrase string and transforms it by choosing the correct
  // plural form and interpolating it.
  //
  //     transformPhrase('Hello, %{name}!', {name: 'Spike'});
  //     // "Hello, Spike!"
  //
  // The correct plural form is selected if substitutions.smart_count
  // is set. You can pass in a number instead of an Object as `substitutions`
  // as a shortcut for `smart_count`.
  //
  //     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 1}, 'en');
  //     // "1 new message"
  //
  //     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 2}, 'en');
  //     // "2 new messages"
  //
  //     transformPhrase('%{smart_count} new messages |||| 1 new message', 5, 'en');
  //     // "5 new messages"
  //
  // You should pass in a third argument, the locale, to specify the correct plural type.
  // It defaults to `'en'` with 2 plural forms.
  function transformPhrase(phrase, substitutions, locale, tokenRegex) {
    if (typeof phrase !== 'string') {
      throw new TypeError('Polyglot.transformPhrase expects argument #1 to be string');
    }

    if (substitutions == null) {
      return phrase;
    }

    var result = phrase;
    var interpolationRegex = tokenRegex || defaultTokenRegex;

    // allow number as a pluralization shortcut
    var options = typeof substitutions === 'number' ? { smart_count: substitutions } : substitutions;

    // Select plural form: based on a phrase text that contains `n`
    // plural forms separated by `delimiter`, a `locale`, and a `substitutions.smart_count`,
    // choose the correct plural form. This is only done if `count` is set.
    if (options.smart_count != null && result) {
      var texts = split.call(result, delimiter);
      result = string_prototype_trim(texts[pluralTypeIndex(locale || 'en', options.smart_count)] || texts[0]);
    }

    // Interpolate: Creates a `RegExp` object for each interpolation placeholder.
    result = replace$2.call(result, interpolationRegex, function (expression, argument) {
      if (!src(options, argument) || options[argument] == null) { return expression; }
      // Ensure replacement value is escaped to prevent special $-prefixed regex replace tokens.
      return replace$2.call(options[argument], dollarRegex, dollarBillsYall);
    });

    return result;
  }

  // ### Polyglot class constructor
  function Polyglot(options) {
    var opts = options || {};
    this.phrases = {};
    this.extend(opts.phrases || {});
    this.currentLocale = opts.locale || 'en';
    var allowMissing = opts.allowMissing ? transformPhrase : null;
    this.onMissingKey = typeof opts.onMissingKey === 'function' ? opts.onMissingKey : allowMissing;
    this.warn = opts.warn || warn;
    this.tokenRegex = constructTokenRegex(opts.interpolation);
  }

  // ### polyglot.locale([locale])
  //
  // Get or set locale. Internally, Polyglot only uses locale for pluralization.
  Polyglot.prototype.locale = function (newLocale) {
    if (newLocale) this.currentLocale = newLocale;
    return this.currentLocale;
  };

  // ### polyglot.extend(phrases)
  //
  // Use `extend` to tell Polyglot how to translate a given key.
  //
  //     polyglot.extend({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     });
  //
  // The key can be any string.  Feel free to call `extend` multiple times;
  // it will override any phrases with the same key, but leave existing phrases
  // untouched.
  //
  // It is also possible to pass nested phrase objects, which get flattened
  // into an object with the nested keys concatenated using dot notation.
  //
  //     polyglot.extend({
  //       "nav": {
  //         "hello": "Hello",
  //         "hello_name": "Hello, %{name}",
  //         "sidebar": {
  //           "welcome": "Welcome"
  //         }
  //       }
  //     });
  //
  //     console.log(polyglot.phrases);
  //     // {
  //     //   'nav.hello': 'Hello',
  //     //   'nav.hello_name': 'Hello, %{name}',
  //     //   'nav.sidebar.welcome': 'Welcome'
  //     // }
  //
  // `extend` accepts an optional second argument, `prefix`, which can be used
  // to prefix every key in the phrases object with some string, using dot
  // notation.
  //
  //     polyglot.extend({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     }, "nav");
  //
  //     console.log(polyglot.phrases);
  //     // {
  //     //   'nav.hello': 'Hello',
  //     //   'nav.hello_name': 'Hello, %{name}'
  //     // }
  //
  // This feature is used internally to support nested phrase objects.
  Polyglot.prototype.extend = function (morePhrases, prefix) {
    forEach_1(morePhrases, function (phrase, key) {
      var prefixedKey = prefix ? prefix + '.' + key : key;
      if (typeof phrase === 'object') {
        this.extend(phrase, prefixedKey);
      } else {
        this.phrases[prefixedKey] = phrase;
      }
    }, this);
  };

  // ### polyglot.unset(phrases)
  // Use `unset` to selectively remove keys from a polyglot instance.
  //
  //     polyglot.unset("some_key");
  //     polyglot.unset({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     });
  //
  // The unset method can take either a string (for the key), or an object hash with
  // the keys that you would like to unset.
  Polyglot.prototype.unset = function (morePhrases, prefix) {
    if (typeof morePhrases === 'string') {
      delete this.phrases[morePhrases];
    } else {
      forEach_1(morePhrases, function (phrase, key) {
        var prefixedKey = prefix ? prefix + '.' + key : key;
        if (typeof phrase === 'object') {
          this.unset(phrase, prefixedKey);
        } else {
          delete this.phrases[prefixedKey];
        }
      }, this);
    }
  };

  // ### polyglot.clear()
  //
  // Clears all phrases. Useful for special cases, such as freeing
  // up memory if you have lots of phrases but no longer need to
  // perform any translation. Also used internally by `replace`.
  Polyglot.prototype.clear = function () {
    this.phrases = {};
  };

  // ### polyglot.replace(phrases)
  //
  // Completely replace the existing phrases with a new set of phrases.
  // Normally, just use `extend` to add more phrases, but under certain
  // circumstances, you may want to make sure no old phrases are lying around.
  Polyglot.prototype.replace = function (newPhrases) {
    this.clear();
    this.extend(newPhrases);
  };


  // ### polyglot.t(key, options)
  //
  // The most-used method. Provide a key, and `t` will return the
  // phrase.
  //
  //     polyglot.t("hello");
  //     => "Hello"
  //
  // The phrase value is provided first by a call to `polyglot.extend()` or
  // `polyglot.replace()`.
  //
  // Pass in an object as the second argument to perform interpolation.
  //
  //     polyglot.t("hello_name", {name: "Spike"});
  //     => "Hello, Spike"
  //
  // If you like, you can provide a default value in case the phrase is missing.
  // Use the special option key "_" to specify a default.
  //
  //     polyglot.t("i_like_to_write_in_language", {
  //       _: "I like to write in %{language}.",
  //       language: "JavaScript"
  //     });
  //     => "I like to write in JavaScript."
  //
  Polyglot.prototype.t = function (key, options) {
    var phrase, result;
    var opts = options == null ? {} : options;
    if (typeof this.phrases[key] === 'string') {
      phrase = this.phrases[key];
    } else if (typeof opts._ === 'string') {
      phrase = opts._;
    } else if (this.onMissingKey) {
      var onMissingKey = this.onMissingKey;
      result = onMissingKey(key, opts, this.currentLocale, this.tokenRegex);
    } else {
      this.warn('Missing translation for key: "' + key + '"');
      result = key;
    }
    if (typeof phrase === 'string') {
      result = transformPhrase(phrase, opts, this.currentLocale, this.tokenRegex);
    }
    return result;
  };


  // ### polyglot.has(key)
  //
  // Check if polyglot has a translation for given key
  Polyglot.prototype.has = function (key) {
    return src(this.phrases, key);
  };

  // export transformPhrase
  Polyglot.transformPhrase = function transform(phrase, substitutions, locale) {
    return transformPhrase(phrase, substitutions, locale);
  };

  var nodePolyglot = Polyglot;

  var fetchI18nList =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(baseURL, version, lang) {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(baseURL, "/data/v").concat(version, "/i18n/").concat(lang, ".json"));

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response.json());

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function fetchI18nList(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  function getI18n (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  }

  function _ref() {
    _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(baseURL, version, lang) {
      var list;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetchI18nList(baseURL, version, lang);

            case 2:
              list = _context.sent;
              return _context.abrupt("return", new nodePolyglot({
                phrases: list
              }));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return _ref.apply(this, arguments);
  }

  var IS_SAFARI = function () {
    var ua = navigator.userAgent.toLowerCase();

    if (ua.indexOf('safari') !== -1) {
      if (ua.indexOf('chrome') === -1) {
        return true; // Safari
      }
    }

    return false;
  }();
  var IS_IE = navigator.appName === 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/));

  var createFormValue = function createFormValue(name, value) {
    return $('input', {
      name: name,
      type: 'hidden',
      value: value
    });
  };

  function form (_ref) {
    var _ref$attributes = _ref.attributes,
        attributes = _ref$attributes === void 0 ? {} : _ref$attributes,
        children = _ref.children,
        consent = _ref.consent;
    var builtInInputs = [createFormValue('consent', consent ? 'yes' : 'no'), createFormValue('domain', location.origin)];
    var channel = getCurrentPageChannel();

    if (channel) {
      builtInInputs.push(createFormValue('channel', channel));
    }

    return $('form', _objectSpread({
      action: 'javascript:void(0);'
    }, attributes), [].concat(builtInInputs, _toConsumableArray(cast(children)))).submit(function () {
      return localStorage.setItem('mol.ads.cmp.alert', 'true');
    });
  }

  var infoSVGs = {
    whiteOnTransparent: encodeURI('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii43IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik04IDBjNC40MjQgMCA4IDMuNTc2IDggOCAwIDQuNDI0LTMuNTc2IDgtOCA4LTQuNDI0IDAtOC0zLjU3Ni04LTggMC00LjQyNCAzLjU3Ni04IDgtOHptMCAyYTEuNSAxLjUgMCAxIDAgMCAzIDEuNSAxLjUgMCAwIDAgMC0zek02IDZsMSAxdjZINnYxaDR2LTFIOVY2SDZ6Ii8+PC9zdmc+'),
    blueOnWhite: encodeURI('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1klEQVR4nO2aS2sTURTH787Hxgf4aC2Ioc29KRUXfglFK7oIhDmnBjfuhBYf8TPUbgRBcelHqBSr/QZScWltozu7kLZrg5G/nGEwtjNJk5kzM5nSA2eTDOfeX84j5547xhzKAZXJKk5XGLcdY8ESlhxjzTJ2LKMV6I5jfPG/IzyTZy97OGWGQS7WcbQygxlLWHGEP46BAbVtGe/LBBZbJmsZq+KYZTyyjM0Ym49UsWU9PBTbmUA4Dzcd4bsWQIR+c4QbqQGI6x3heYoAuz1EeHP1Po6rQjjCiGV8zgrCdXR1so7zKhATHkq+u7OHgK+EpuwhEUSJcdYy1nOD4E7exPZMUJnyCCdE5gzjU6wSbRmvEy7cqjCe2BpGRR2jIZ8lDLOXg5fY5L9iI2SX0Uhqt+zhet8hpZLchJG9tiXOFew2+woxS3isEtM1jO61PXEXFzRsO8ZcTwghVWw7wqFFeKpk+0dPr0gDqLSQn+x+gmsmO++yT73CakVrodSVsNz1PCFtde4b5L61faWOkyEQR7gzBJvDQOFFuBUGYSzkvTE3uM5H5ceS1gLdclAdhLAYBlFsDjMDYaxFgWxrL5SBR35GgbQKCPLrQINsH5TQWi8cCEclu2L5zdAji5n8IWbgkfkQSDC3LRSIZUyHQGSgrN00pgliGb9LVZwIgQR58qEoII7wznQTmYoXBcR68LqCjD/AETlGDjuIZWzuO4CQ0f6wgzjCrMliHLTfGom8Qdjoe+Io9xPDClJmXOsL4r/FXqmFglZuEF6YWBc7jNW8N+86+lGKkYkj4/dwxhK+5g5BaE7VcM4kvughNPOEKDMuGQ2R4bPcT+QRTlNJPRH5Z5nxZehYmlfVcj+RZqhZwsbAJTauBBVtTrOd8W0RZnN5A0LCzW80CcsxjwBt6WJlsh67tGqLDJRlFiunNst4G7xAs/XvpRrClnwmx9Pgmemu54lDMcWXv6i3vzCiWOS5AAAAAElFTkSuQmCC')
  };
  var defaultBanner = function defaultBanner(_ref) {
    var onAccept = _ref.onAccept,
        onOpenSettings = _ref.onOpenSettings,
        t = _ref.t,
        infoSvg = _ref.infoSvg,
        shouldConsentManagementBeEnforced = _ref.shouldConsentManagementBeEnforced;
    var infoSrc = infoSVGs[infoSvg];
    return form({
      attributes: {
        class: 'mol-ads-cmp--banner'
      },
      children: $('div', {
        class: 'mol-ads-cmp--container'
      }, [$('h2', {
        class: 'mol-ads-cmp--title'
      }, [].concat(_toConsumableArray(t('banner.title')), [$('span', {
        class: 'mol-ads-cmp--nobr'
      }, ['data ', $('span', {
        class: 'mol-ads-cmp--tooltip'
      }, [$('a', {
        class: 'mol-ads-cmp--tooltip-trigger',
        href: '#types-of-data-tooltip'
      }, $('img', {
        class: 'mol-ads-cmp--info',
        src: infoSrc
      })), $('div', {
        id: 'types-of-data-tooltip',
        class: 'mol-ads-cmp--tooltipcontent'
      }, $('div', {
        class: 'mol-ads-cmp--tooltipframe'
      }, [$('a', {
        class: 'mol-ads-cmp--tooltip-close',
        href: '#close'
      }), $('span', {
        class: 'mol-ads-cmp--tooltipcontent-header'
      }, 'Types of data being accessed'), $('ul', {
        class: 'mol-ads-cmp--settings-purposes'
      }, [$('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Unique identifiers for the device using the site'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Browser information'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'IP address'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Activities such as pages visited'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Location of where the site is used')])]))])]), ' from your device, so that:'])), $('ul', {
        class: 'mol-ads-cmp--publisher-purposes'
      }, [$('li', {}, ["We can deliver content and advertising that's relevant to ", $('span', {
        class: 'mol-ads-cmp--nobr'
      }, ['you ', $('div', {
        class: 'mol-ads-cmp--tooltip'
      }, [$('a', {
        class: 'mol-ads-cmp--tooltip-trigger',
        href: '#advertising-purposes-tooltip'
      }, $('img', {
        class: 'mol-ads-cmp--info',
        src: infoSrc
      })), $('span', {
        id: 'advertising-purposes-tooltip',
        class: 'mol-ads-cmp--tooltipcontent'
      }, $('div', {
        class: 'mol-ads-cmp--tooltipframe'
      }, $('div', {}, [$('a', {
        class: 'mol-ads-cmp--tooltip-close',
        href: '#close'
      }), $('span', {
        class: 'mol-ads-cmp--tooltipcontent-header'
      }, 'Ways in which we use your data for advertising purposes'), $('ul', {
        class: 'mol-ads-cmp--settings-purposes'
      }, [$('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Information storage and access'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Personalisation'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Ad selection, delivery, reporting'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Content selection, delivery, reporting'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Measurement')])])))])])]), $('li', {}, 'We give you the best experience')]), $('div', {
        class: 'mol-ads-cmp--message'
      }, [$('div', {}, 'Control how your data is used and view more info at any'), $('div', {}, 'time via the Cookie Settings link in our Privacy Policy')]), $('div', {
        class: 'mol-ads-cmp--button-privacy-link-group'
      }, [].concat(_toConsumableArray(shouldConsentManagementBeEnforced && window.innerWidth > 600 ? [$('div', {
        class: 'mol-ads-ccpa--message'
      }, [$('u', {}, [$('a', {}, 'View more info').click(onOpenSettings)])])] : [$('span')]), [$('div', {
        class: 'mol-ads-cmp--buttons'
      }, [($('button', {
        class: 'mol-ads-cmp--btn-primary',
        type: 'button'
      }, t('banner.consent')).click(onAccept)).click(function () {
        return postTrackingEvent('overlay accepted');
      }).click(function () {
        document.documentElement.classList.remove('mol-ads-cmp--open');
      })])], _toConsumableArray(shouldConsentManagementBeEnforced && window.innerWidth <= 600 ? [$('div', {
        class: 'mol-ads-ccpa--message'
      }, [$('u', {}, [$('a', {}, 'View more info').click(onOpenSettings)])])] : [$('span')])))]),
      consent: true
    });
  };
  var videoBanner = function videoBanner(_ref2) {
    var onAccept = _ref2.onAccept,
        t = _ref2.t,
        infoSvg = _ref2.infoSvg;
    var infoSrc = infoSVGs[infoSvg];
    return form({
      attributes: {
        class: 'mol-ads-cmp--banner'
      },
      children: [$('div', {
        class: 'mol-ads-cmp--container'
      }, [$('h2', {
        class: 'mol-ads-cmp--title'
      }, ['DMG Media and its partners use cookies and other technologies to collect user', $('span', {
        class: 'mol-ads-cmp--nobr'
      }, ['data ', $('span', {
        class: 'mol-ads-cmp--tooltip'
      }, [$('a', {
        class: 'mol-ads-cmp--tooltip-trigger',
        href: '#types-of-data-tooltip'
      }, $('img', {
        class: 'mol-ads-cmp--info',
        src: infoSrc
      })), $('div', {
        id: 'types-of-data-tooltip',
        class: 'mol-ads-cmp--tooltipcontent'
      }, $('div', {
        class: 'mol-ads-cmp--tooltipframe'
      }, $('div', {}, [$('a', {
        class: 'mol-ads-cmp--tooltip-close',
        href: '#close'
      }), $('span', {
        class: 'mol-ads-cmp--tooltipcontent-header'
      }, 'Types of data being accessed'), $('ul', {
        class: 'mol-ads-cmp--settings-purposes'
      }, [$('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Unique identifiers for the device using the site'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Browser information'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'IP address'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Activities such as pages visited'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Location of where the site is used')])])))])]), ' from your device, so that:']), $('ul', {
        class: 'mol-ads-cmp--publisher-purposes'
      }, [$('li', {}, ["We can deliver content and advertising that's relevant to", $('span', {
        class: 'mol-ads-cmp--nobr'
      }, ['you ', $('div', {
        class: 'mol-ads-cmp--tooltip'
      }, [$('a', {
        class: 'mol-ads-cmp--tooltip-trigger',
        href: '#advertising-purposes-tooltip'
      }, $('img', {
        class: 'mol-ads-cmp--info',
        src: infoSrc
      })), $('span', {
        id: 'advertising-purposes-tooltip',
        class: 'mol-ads-cmp--tooltipcontent'
      }, $('div', {
        class: 'mol-ads-cmp--tooltipframe'
      }, [$('a', {
        class: 'mol-ads-cmp--tooltip-close',
        href: '#close'
      }), $('span', {
        class: 'mol-ads-cmp--tooltipcontent-header'
      }, 'Ways in which we use your data for advertising purposes'), $('ul', {
        class: 'mol-ads-cmp--settings-purposes'
      }, [$('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Information storage and access'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Personalisation'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Ad selection, delivery, reporting'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Content selection, delivery, reporting'), $('li', {
        class: 'mol-ads-cmp--settings-purpose'
      }, 'Measurement')])]))])])]), $('li', {}, 'We give you the best experience')]), ($('button', {
        class: 'mol-ads-cmp--btn-primary',
        type: 'button'
      }, t('videoBanner.consent')).click(onAccept)).click(function () {
        return postTrackingEvent('overlay accepted');
      }), $('p', {}, t('videoBanner.privacySettings.message', {
        link: $('a', {
          class: 'mol-ads-cmp--open-settings'
        }, t('videoBanner.privacySettings.link'))
      })).click(function (e) {
        e.preventDefault();
        window.postMessage({
          ns: '@mol-ads/mol-ads-cmp',
          id: '@mol-ads-embedded-video-cmp',
          sender: '@mol-ads-cmp',
          action: 'privacy_policy:clicked'
        }, '*');
      })])],
      consent: true
    });
  };

  function getApplicableRegulations() {
    return ['ccpa'];
  }

  var getGeoInfo = function getGeoInfo(options) {
    return {
      geo: options.geo,
      region: options.region
    };
  };

  var parseBoolAttribute = function parseBoolAttribute(x) {
    return ['', 'true'].includes(x);
  };

  var parseJSONAttribute = function parseJSONAttribute(x) {
    return JSON.parse(x);
  };

  var evolveOptions$1 = evolve({
    render: parseBoolAttribute,
    renderVideo: parseBoolAttribute,
    renderConfig: parseJSONAttribute,
    shouldConsentManagementBeEnforced: parseBoolAttribute
  });

  var getOptions = function getOptions() {
    var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var cmpScript = getScriptTag(doc);
    var scriptVersionBaseUrl = cmpScript ? parseURL(cmpScript.src).href.replace(/\/iife\/mol-ads-cmp.*\.js$/, '') : '';
    var options = {
      api: 'frontend',
      backendBaseUrl: 'https://cmp.dmgmediaprivacy.co.uk',
      cvlUiVersion: 1,
      gvlUiVersion: 186,
      i18nVersion: 7,
      logLevel: searchParams['mol.ads.cmp.log.level'] || 'off',
      nrvUiVersion: 1,
      region: 'unknown',
      render: false,
      renderConfig: {
        layerTwo: {
          ccpaFrameworkText: 'California Consumer Privacy Act',
          footerPrivacyText: 'Do not sell my info'
        },
        layerThree: {
          privacyText: 'Do Not Sell My Info'
        }
      },
      scriptVersionBaseUrl: scriptVersionBaseUrl,
      vendorListBaseUrl: 'https://cmp.dmgmediaprivacy.co.uk',
      infoSvg: 'whiteOnTransparent'
    };

    for (var option in cmpScript ? cmpScript.dataset : {}) {
      if (cmpScript.dataset.hasOwnProperty(option)) {
        Object.assign(options, evolveOptions$1(_defineProperty({}, option, cmpScript.dataset[option])));
      }
    }

    return options;
  };

  var buildFrontendAPI =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(_ref) {
      var banner, backendBaseUrl, _ref$clientConsentStr, clientConsentString, cvlUiVersion, _ref$forceSetConsentS, forceSetConsentString, geo, gvlUiVersion, _ref$i18nLang, i18nLang, i18nVersion, legislation, nrvUiVersion, region, renderConfig, renderSettings, renderInSelector, pVendorList, scriptVersionBaseUrl, shouldConsentManagementBeEnforced, vendorListBaseUrl, isEmbeddedVideo, infoSvg, api, geoInfo, _ref3, _ref4, hasChoiceBeenMade, i18n, view;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              banner = _ref.banner, backendBaseUrl = _ref.backendBaseUrl, _ref$clientConsentStr = _ref.clientConsentString, clientConsentString = _ref$clientConsentStr === void 0 ? '' : _ref$clientConsentStr, cvlUiVersion = _ref.cvlUiVersion, _ref$forceSetConsentS = _ref.forceSetConsentString, forceSetConsentString = _ref$forceSetConsentS === void 0 ? false : _ref$forceSetConsentS, geo = _ref.geo, gvlUiVersion = _ref.gvlUiVersion, _ref$i18nLang = _ref.i18nLang, i18nLang = _ref$i18nLang === void 0 ? 'en' : _ref$i18nLang, i18nVersion = _ref.i18nVersion, legislation = _ref.legislation, nrvUiVersion = _ref.nrvUiVersion, region = _ref.region, renderConfig = _ref.renderConfig, renderSettings = _ref.renderSettings, renderInSelector = _ref.renderInSelector, pVendorList = _ref.pVendorList, scriptVersionBaseUrl = _ref.scriptVersionBaseUrl, shouldConsentManagementBeEnforced = _ref.shouldConsentManagementBeEnforced, vendorListBaseUrl = _ref.vendorListBaseUrl, isEmbeddedVideo = _ref.isEmbeddedVideo, infoSvg = _ref.infoSvg;
              _context2.next = 3;
              return FrontendAPI.load({
                backendBaseUrl: backendBaseUrl,
                consentString: clientConsentString,
                cvlUiVersion: cvlUiVersion,
                geoInfo: getGeoInfo({
                  geo: geo,
                  region: region
                }),
                gvlUiVersion: gvlUiVersion,
                nrvUiVersion: nrvUiVersion,
                scriptVersionBaseUrl: scriptVersionBaseUrl,
                vendorListBaseUrl: vendorListBaseUrl
              });

            case 3:
              api = _context2.sent;
              geoInfo = getGeoInfo({
                geo: geo,
                region: region
              });
              _context2.next = 7;
              return api.callP('hasStorageAccess');

            case 7:
              if (!_context2.sent) {
                _context2.next = 11;
                break;
              }

              window.addEventListener('message', FrontendAPI.iframeHandler);
              _context2.next = 17;
              break;

            case 11:
              logline('Cannot use iframed API', DEBUG);
              api.unload();
              _context2.next = 15;
              return FrontendModAPI.load(backendBaseUrl, clientConsentString, geoInfo, legislation, pVendorList);

            case 15:
              api = _context2.sent;
              window.addEventListener('message', FrontendModAPI.iframeHandler);

            case 17:
              _context2.next = 19;
              return Promise.all([api.callP('hasChoiceBeenMade'), getI18n(vendorListBaseUrl, i18nVersion, i18nLang)]);

            case 19:
              _ref3 = _context2.sent;
              _ref4 = _slicedToArray(_ref3, 2);
              hasChoiceBeenMade = _ref4[0];
              i18n = _ref4[1];

              if (!hasChoiceBeenMade) {
                _context2.next = 26;
                break;
              }

              _context2.next = 26;
              return api.callP('updateCookieIfNeeded');

            case 26:
              view = render$2({
                api: api,
                applicableRegulations: getApplicableRegulations(),
                banner: banner,
                cvlUiVersion: cvlUiVersion,
                hasChoiceBeenMade: hasChoiceBeenMade,
                hasTPhrase: i18n.has.bind(i18n),
                renderSettings: renderSettings,
                t: translate(i18n),
                translate: i18n.t.bind(i18n),
                clientConsentString: clientConsentString,
                forceSetConsentString: forceSetConsentString,
                nrvUiVersion: nrvUiVersion,
                renderConfig: renderConfig,
                pVendorList: pVendorList,
                vendorListBaseUrl: vendorListBaseUrl,
                isEmbeddedVideo: isEmbeddedVideo,
                infoSvg: infoSvg,
                shouldConsentManagementBeEnforced: shouldConsentManagementBeEnforced
              });
              _context2.next = 29;
              return view;

            case 29:
              api.view = _context2.sent;
              onContentLoaded(
              /*#__PURE__*/
              _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                var renderIn, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, tooltipTrigger;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        renderIn = renderInSelector && document.querySelector(renderInSelector);

                        if (!renderIn) {
                          renderIn = document.body;
                        } // @ts-ignore


                        renderIn.appendChild(api.view.raw); // Temporary workaround to prevent click working on tooltips on desktop devices

                        _context.prev = 3;

                        if (!(window && window.PageCriteria && !window.PageCriteria.isMobile && !window.PageCriteria.isTablet)) {
                          _context.next = 24;
                          break;
                        }

                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 8;

                        for (_iterator = renderIn.querySelectorAll('.mol-ads-cmp--tooltip-trigger')[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                          tooltipTrigger = _step.value;
                          tooltipTrigger.addEventListener('click', function (event) {
                            event.preventDefault();
                          });
                        }

                        _context.next = 16;
                        break;

                      case 12:
                        _context.prev = 12;
                        _context.t0 = _context["catch"](8);
                        _didIteratorError = true;
                        _iteratorError = _context.t0;

                      case 16:
                        _context.prev = 16;
                        _context.prev = 17;

                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                          _iterator.return();
                        }

                      case 19:
                        _context.prev = 19;

                        if (!_didIteratorError) {
                          _context.next = 22;
                          break;
                        }

                        throw _iteratorError;

                      case 22:
                        return _context.finish(19);

                      case 23:
                        return _context.finish(16);

                      case 24:
                        _context.next = 28;
                        break;

                      case 26:
                        _context.prev = 26;
                        _context.t1 = _context["catch"](3);

                      case 28:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this, [[3, 26], [8, 12, 16, 24], [17,, 19, 23]]);
              })));
              return _context2.abrupt("return", api);

            case 32:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function buildFrontendAPI(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var buildBackendAPI = function buildBackendAPI(backendBaseUrl, clientConsentString, geoInfo, legislation, pVendorList) {
    window.addEventListener('message', BackendAPI.iframeHandler);
    return BackendAPI.load(backendBaseUrl, clientConsentString, geoInfo, legislation, pVendorList);
  };

  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var options, api, banner, pVendorList;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            options = getOptions();

            if (options.logLevel !== 'off') {
              init({
                level: options.logLevel,
                on: true,
                api: options.api
              });
            }

            log('heeellllo dickwad');
            log('script options:', JSON.stringify(options), DEBUG);

            if (options.render) {
              banner = defaultBanner;
            } else if (options.renderVideo) {
              banner = videoBanner;
            }

            pVendorList = fetchGVL(options.vendorListBaseUrl, options.gvlUiVersion);
            pVendorList.then(function (vendorList) {
              log("gvl loaded", vendorList, DEBUG);
            });
            _context3.prev = 7;

            if (!(options.api === 'frontend')) {
              _context3.next = 14;
              break;
            }

            _context3.next = 11;
            return buildFrontendAPI({
              backendBaseUrl: options.backendBaseUrl,
              banner: banner,
              cvlUiVersion: options.cvlUiVersion,
              clientConsentString: options.clientConsentString,
              geo: options.geo,
              gvlUiVersion: options.gvlUiVersion,
              forceSetConsentString: options.forceSetConsentString,
              i18nLang: options.i18nLang,
              i18nVersion: options.i18nVersion,
              legislation: options.legislation,
              nrvUiVersion: options.nrvUiVersion,
              region: options.region,
              renderConfig: options.renderConfig,
              renderInSelector: options.renderIn,
              renderSettings: !options.renderVideo,
              pVendorList: pVendorList,
              scriptVersionBaseUrl: options.scriptVersionBaseUrl,
              shouldConsentManagementBeEnforced: options.shouldConsentManagementBeEnforced,
              vendorListBaseUrl: options.vendorListBaseUrl,
              isEmbeddedVideo: !!options.renderVideo,
              infoSvg: options.infoSvg
            });

          case 11:
            _context3.t0 = _context3.sent;
            _context3.next = 17;
            break;

          case 14:
            _context3.next = 16;
            return buildBackendAPI(options.backendBaseUrl, options.clientconsentstring || '', getGeoInfo({
              geo: options.geo,
              region: options.region
            }), options.legislation, pVendorList);

          case 16:
            _context3.t0 = _context3.sent;

          case 17:
            api = _context3.t0;
            api.callQueue();
            _context3.next = 25;
            break;

          case 21:
            _context3.prev = 21;
            _context3.t1 = _context3["catch"](7);
            logline(_context3.t1, ERROR);
            return _context3.abrupt("return");

          case 25:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[7, 21]]);
  }))();

}());
//# sourceMappingURL=mol-ads-cmp.js.map
