module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(48);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(6);

  var _coreLocation = __webpack_require__(3);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(12);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(20);
    }, '/500': function _() {
      return __webpack_require__(21);
    }, '/': function _() {
      return __webpack_require__(22);
    }, '/merch': function merch() {
      return __webpack_require__(23);
    }, '/tour': function tour() {
      return __webpack_require__(24);
    }, '/videos': function videos() {
      return __webpack_require__(25);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(6);

  var _historyLibCreateBrowserHistory = __webpack_require__(45);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(46);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(47);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "09db233d0974a7fd0d61647b048c4369.eot";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "18a5c7dcd109433df7716c627b6d22e8.png";

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(26);

  var _albumsConfigJs = __webpack_require__(8);

  var _albumsConfigJs2 = _interopRequireDefault(_albumsConfigJs);

  var _staticAlbumCoverPng = __webpack_require__(39);

  var _staticAlbumCoverPng2 = _interopRequireDefault(_staticAlbumCoverPng);

  var _staticAlbumCover2Png = __webpack_require__(40);

  var _staticAlbumCover2Png2 = _interopRequireDefault(_staticAlbumCover2Png);

  var _staticPromo1Png = __webpack_require__(5);

  var _staticPromo1Png2 = _interopRequireDefault(_staticPromo1Png);

  var AlbumPromo = function AlbumPromo() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        { className: 'album-promo' },
        _react2['default'].createElement(AlbumArt, null)
      ),
      _react2['default'].createElement(
        AlbumTeaser,
        null,
        _react2['default'].createElement('iframe', {
          width: '560',
          height: '315',
          src: 'https://www.youtube.com/embed/pOPAt6W76sM',
          frameBorder: '0',
          allowFullScreen: 'true'
        })
      ),
      _react2['default'].createElement(
        'div',
        { className: 'release-info' },
        _react2['default'].createElement(
          'h1',
          null,
          'IN STORES JULY 8, 2016'
        ),
        _react2['default'].createElement(
          PreorderButton,
          {
            link: 'http://smarturl.it/Masked'
          },
          ' BUY CD/EP'
        ),
        _react2['default'].createElement(
          PreorderButton,
          {
            link: 'http://geni.us/MIEP?app=itunes'
          },
          ' BUY DIGITAL'
        )
      ),
      _react2['default'].createElement(MusicSection, { config: _albumsConfigJs2['default'] })
    );
  };

  var AlbumArt = function AlbumArt() {
    return _react2['default'].createElement(
      'div',
      { className: 'album-art-wrapper' },
      _react2['default'].createElement('img', {
        src: _staticAlbumCover2Png2['default'],
        className: 'album-art'
      }),
      _react2['default'].createElement(
        'div',
        { className: 'album-title' },
        _react2['default'].createElement(
          'h2',
          null,
          'NEW EP'
        ),
        _react2['default'].createElement(
          'h1',
          null,
          'LOVE AND OTHER CRIMES'
        ),
        _react2['default'].createElement(
          'h2',
          null,
          'OUT 07.08.2016'
        )
      )
    );
  };

  var AlbumTeaser = function AlbumTeaser(props) {
    return _react2['default'].createElement(
      'div',
      { className: 'album-teaser' },
      _react2['default'].createElement(
        'div',
        { className: 'video-background' },
        _react2['default'].createElement(
          'div',
          { className: 'responsive-video-wrapper' },
          props.children
        )
      )
    );
  };

  var PreorderButton = function PreorderButton(props) {
    return _react2['default'].createElement(
      'a',
      {
        className: 'preorder-button',
        href: props.link
      },
      _react2['default'].createElement(
        'span',
        { className: 'preorder-text' },
        props.children
      )
    );
  };

  var MusicSection = function MusicSection(_ref) {
    var config = _ref.config;

    var albums = config.map(function (album) {
      return _react2['default'].createElement(AlbumLinks, {
        key: album.title,
        image: album.thumbnail,
        spotifyLink: album.spotifyLink,
        appleLink: album.appleLink,
        title: album.title,
        storeLink: album.storeLink
      });
    });

    return _react2['default'].createElement(
      'div',
      { className: 'music-section' },
      _react2['default'].createElement('div', { className: 'album-links-wrapper' })
    );
  };

  var AlbumLinks = function AlbumLinks(_ref2) {
    var image = _ref2.image;
    var spotifyLink = _ref2.spotifyLink;
    var appleLink = _ref2.appleLink;
    var title = _ref2.title;
    var storeLink = _ref2.storeLink;
    return _react2['default'].createElement(
      'div',
      { className: "promoted-album" },
      _react2['default'].createElement(
        'a',
        { href: storeLink },
        _react2['default'].createElement('img', {
          className: 'promoted-album-thumbnail',
          src: image
        })
      ),
      _react2['default'].createElement(
        'div',
        { className: 'listen-links' },
        _react2['default'].createElement(
          'a',
          {
            className: 'spotify-link',
            href: spotifyLink
          },
          _react2['default'].createElement('i', {
            className: 'link-icon fa fa-spotify',
            'aria-hidden': 'true'
          }),
          'SPOTIFY'
        ),
        _react2['default'].createElement(
          'a',
          {
            className: 'apple-link',
            href: appleLink
          },
          _react2['default'].createElement('i', {
            className: 'link-icon fa fa-apple',
            'aria-hidden': 'true'
          }),
          'APPLE MUSIC'
        )
      )
    );
  };

  exports['default'] = AlbumPromo;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

  // import VoidCover from '../../static/void-cover.png';
  // import AltCover from '../../static/alt-cover.png';
  // import AllHellCover from '../../static/allHell-cover.png';

  "use strict";

  Object.defineProperty(exports, "__esModule", {
  		value: true
  });
  var albums = [{
  		title: "AllHell",
  		spotifyLink: "#",
  		appleLink: "#",
  		thumbnail: "",
  		storeLink: "http://smarturl.it/VannaMA"
  }, {
  		title: "Void",
  		spotifyLink: "https://play.spotify.com/album/0qH0QizOeIbULmQVXq3sEj",
  		appleLink: "http://geni.us/VANNAALT?app=itunes",
  		thumbnail: "",
  		storeLink: "http://smarturl.it/VannaMA"
  }, {
  		title: "ALT",
  		spotifyLink: "https://play.spotify.com/album/0CO124UhDKHk172wfuWpUO",
  		appleLink: "http://geni.us/VANNAVOID?app=itunes",
  		thumbnail: "",
  		storeLink: "http://smarturl.it/VannaMA"
  }];

  exports["default"] = albums;
  module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(27);

  var _socialConfigJs = __webpack_require__(10);

  var _socialConfigJs2 = _interopRequireDefault(_socialConfigJs);

  var Footer = function Footer(_ref) {
    var mobile = _ref.mobile;
    return _react2['default'].createElement(
      'footer',
      {
        className: mobile ? "mobile-footer" : "footer"
      },
      _react2['default'].createElement(Social, { config: _socialConfigJs2['default'] })
    );
  };

  var Social = function Social(_ref2) {
    var config = _ref2.config;
    return _react2['default'].createElement(
      'div',
      { className: 'social-wrapper' },
      _react2['default'].createElement(SocialLinks, { config: config })
    );
  };

  var SocialLinks = function SocialLinks(_ref3) {
    var config = _ref3.config;

    var socialList = config.map(function (i) {
      return _react2['default'].createElement(SocialButton, {
        link: i.link,
        name: i.name,
        key: i.name
      });
    });

    return _react2['default'].createElement(
      'ul',
      { className: 'social-list' },
      socialList
    );
  };

  var SocialButton = function SocialButton(_ref4) {
    var link = _ref4.link;
    var name = _ref4.name;
    return _react2['default'].createElement(
      'a',
      { href: link },
      _react2['default'].createElement('i', {
        className: "social-icon fa fa-" + name,
        'aria-hidden': 'true'
      })
    );
  };

  exports['default'] = Footer;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  var socialLinks = [{
  	name: "facebook",
  	link: "https://www.facebook.com/maskedintruder"
  }, {
  	name: "twitter",
  	link: "https://twitter.com/maskedintruder1"
  }, {
  	name: "tumblr",
  	link: "https://www.tumblr.com/tagged/masked-intruder"
  }, {
  	name: "instagram",
  	link: "https://www.instagram.com/maskedintruder/"
  }];

  exports["default"] = socialLinks;
  module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  		value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _staticMainLogoPng = __webpack_require__(43);

  var _staticMainLogoPng2 = _interopRequireDefault(_staticMainLogoPng);

  __webpack_require__(28);

  var Header = function Header() {
  		return _react2['default'].createElement(
  				'div',
  				null,
  				_react2['default'].createElement(
  						'div',
  						{ className: 'header-wrapper' },
  						_react2['default'].createElement(
  								'div',
  								null,
  								_react2['default'].createElement('img', { className: 'header-logo', src: _staticMainLogoPng2['default'] }),
  								_react2['default'].createElement(
  										'a',
  										{
  												className: 'spotify-link',
  												href: 'https://play.spotify.com/artist/4qUFkkArfii3qNG8TnbPfc'
  										},
  										' LISTEN ON SPOTIFY',
  										_react2['default'].createElement('i', { className: 'fa fa-spotify', 'aria-hidden': 'true' })
  								)
  						)
  				)
  		);
  };

  exports['default'] = Header;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(29);

  var _Navigation = __webpack_require__(16);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _FooterFooterJs = __webpack_require__(9);

  var _FooterFooterJs2 = _interopRequireDefault(_FooterFooterJs);

  var Layout = _react2['default'].createClass({
    displayName: 'Layout',

    getInitialState: function getInitialState() {
      return {
        mobileMenuOpen: false,
        mobile: true,
        linkState: [{
          name: "Home",
          href: "/",
          show: true
        }, {
          name: "Merch",
          href: "/merch",
          show: true
        }, {
          name: "Videos",
          href: "/videos",
          show: true
        }, {
          name: "Tour",
          href: "/tour",
          show: true
        }]
      };
    },

    componentDidMount: function componentDidMount() {
      if (!matchMedia('(max-width: 768px)').matches) {
        this.setState({ mobile: false });
      }
    },

    componentWillUnmount: function componentWillUnmount() {
      setScroll();
    },

    toggleMenu: function toggleMenu(e) {
      this.setScroll();
      this.setState({
        mobileMenuOpen: !this.state.mobileMenuOpen
      });
      this.linksIn();
    },

    linksIn: function linksIn() {
      var _this = this;

      length = this.state.linkState.length;

      var stagger = function stagger(i) {
        if (i < length) {
          setTimeout(function () {
            var links = _this.state.linkState;
            var showing = _this.state.linkState[i].show;

            _this.setState({
              linkState: [].concat(_toConsumableArray(links.slice(0, i)), [Object.assign({}, links[i], {
                show: !showing
              })], _toConsumableArray(links.slice(i + 1)))
            });

            stagger(i + 1);
          }, 70);
        }
      };

      stagger(0);
    },

    setScroll: function setScroll() {

      var handle = function handle(e) {
        e.preventDefault();
      };

      if (this.state.mobileMenuOpen) {
        document.body.style.overflow = null;
        document.body.ontouchmove = null;
      } else {
        document.body.style.overflow = "hidden";
        document.body.ontouchmove = handle;
      }
    },

    render: function render() {

      return _react2['default'].createElement(
        'div',
        { className: 'layout-wrapper' },
        _react2['default'].createElement(
          'div',
          { className: 'layout' },
          _react2['default'].createElement(_Navigation2['default'], {
            mobile: this.state.mobile,
            mobileMenuOpen: this.state.mobileMenuOpen,
            toggleMenu: this.toggleMenu,
            linkState: this.state.linkState
          }),
          this.props.children,
          _react2['default'].createElement(_FooterFooterJs2['default'], { mobile: this.state.mobile })
        )
      );
    }
  });

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(30);

  var _coreLocation = __webpack_require__(3);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({}, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(31);

  var _merchConfigJs = __webpack_require__(15);

  var _merchConfigJs2 = _interopRequireDefault(_merchConfigJs);

  var MerchStore = function MerchStore(_ref) {
    var thumbnail = _ref.thumbnail;
    var link = _ref.link;
    var country = _ref.country;
    var name = _ref.name;
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'a',
        { href: link },
        _react2['default'].createElement(
          'div',
          { className: 'merch-store' },
          _react2['default'].createElement(
            'div',
            { className: 'title-wrapper' },
            _react2['default'].createElement(
              'h1',
              { className: 'title' },
              name
            ),
            _react2['default'].createElement(
              'p',
              { className: 'country-name' },
              country
            )
          ),
          _react2['default'].createElement('img', {
            clasSName: 'merch-store-thumbnail',
            src: thumbnail
          })
        )
      )
    );
  };

  var MerchLinks = function MerchLinks(_ref2) {
    var config = _ref2.config;

    var merchList = config.map(function (i) {
      return _react2['default'].createElement(MerchStore, {
        key: i.name,
        thumbnail: i.thumbnail,
        link: i.link,
        country: i.country,
        name: i.name
      });
    });

    return _react2['default'].createElement(
      'div',
      null,
      merchList
    );
  };

  var MerchWrapper = function MerchWrapper() {
    return _react2['default'].createElement(
      'div',
      { className: 'merch-wrapper' },
      _react2['default'].createElement(MerchLinks, { config: _merchConfigJs2['default'] })
    );
  };

  exports['default'] = MerchWrapper;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _static24hundredPng = __webpack_require__(36);

  var _static24hundredPng2 = _interopRequireDefault(_static24hundredPng);

  var _staticAll_in_logoPng = __webpack_require__(41);

  var _staticAll_in_logoPng2 = _interopRequireDefault(_staticAll_in_logoPng);

  var _staticMerchnowPng = __webpack_require__(44);

  var _staticMerchnowPng2 = _interopRequireDefault(_staticMerchnowPng);

  var _staticJxrPng = __webpack_require__(42);

  var _staticJxrPng2 = _interopRequireDefault(_staticJxrPng);

  var merchStores = [{
  	name: "Merch Now",
  	link: "http://smarturl.it/Masked",
  	thumbnail: _staticMerchnowPng2['default'],
  	country: "United States"
  }, {
  	name: "24 Hundred",
  	link: "http://24hundred.net/collections/pure-noise-records/band-masked-intruder",
  	thumbnail: _static24hundredPng2['default'],
  	country: "Australia"
  }, {
  	name: "JXR",
  	link: "http://www.shopjxr.com/category-s/289.htm",
  	thumbnail: _staticJxrPng2['default'],
  	country: "Europe"
  }];

  exports['default'] = merchStores;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(32);

  var _Link = __webpack_require__(13);

  var _Link2 = _interopRequireDefault(_Link);

  // import VannaLogo from '../../static/vanna-brand-logo.png';

  var Navigation = function Navigation(_ref) {
    var mobile = _ref.mobile;
    var mobileMenuOpen = _ref.mobileMenuOpen;
    var toggleMenu = _ref.toggleMenu;
    var linkState = _ref.linkState;
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        { className: mobile ? "desktop-nav-hidden" : "desktop-nav-show"
        },
        _react2['default'].createElement(DesktopNav, {
          mobile: mobile,
          toggleMenu: toggleMenu,
          linkState: linkState
        })
      ),
      _react2['default'].createElement(
        'div',
        { className: mobile ? "mobile-nav-show" : "mobile-nav-hidden"
        },
        _react2['default'].createElement(MobileNav, {
          mobile: mobile,
          toggleMenu: toggleMenu,
          mobileMenuOpen: mobileMenuOpen,
          linkState: linkState
        }),
        _react2['default'].createElement('div', { className: 'mobile-navbar' })
      )
    );
  };

  var DesktopNav = function DesktopNav(_ref2) {
    var mobile = _ref2.mobile;
    var toggleMenu = _ref2.toggleMenu;
    var linkState = _ref2.linkState;
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(Links, {
        mobile: mobile,
        toggleMenu: toggleMenu,
        linkState: linkState
      })
    );
  };

  var BrandIcon = function BrandIcon() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement('img', {
        className: 'brand',
        src: VannaLogo
      })
    );
  };

  var MobileNav = function MobileNav(_ref3) {
    var mobile = _ref3.mobile;
    var toggleMenu = _ref3.toggleMenu;
    var mobileMenuOpen = _ref3.mobileMenuOpen;
    var linkState = _ref3.linkState;
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        { className: 'mobile-navigation' },
        _react2['default'].createElement(MenuIcon, {
          toggleMenu: toggleMenu,
          mobileMenuOpen: mobileMenuOpen
        })
      ),
      _react2['default'].createElement(MobileMenu, {
        mobile: mobile,
        toggleMenu: toggleMenu,
        mobileMenuOpen: mobileMenuOpen,
        linkState: linkState
      })
    );
  };

  var MobileMenu = function MobileMenu(_ref4) {
    var mobile = _ref4.mobile;
    var toggleMenu = _ref4.toggleMenu;
    var mobileMenuOpen = _ref4.mobileMenuOpen;
    var linkState = _ref4.linkState;
    return _react2['default'].createElement(
      'div',
      { className: mobileMenuOpen ? "mobile-menu-wrapper-open" : "mobile-menu-wrapper-closed"
      },
      _react2['default'].createElement(
        'div',
        { className: mobileMenuOpen ? "mobile-menu-background mmbOpen" : "mobile-menu-background mmbClosed"
        },
        _react2['default'].createElement(Links, {
          mobile: mobile,
          toggleMenu: toggleMenu,
          mobileMenuOpen: mobileMenuOpen,
          linkState: linkState
        })
      )
    );
  };

  var Links = function Links(_ref5) {
    var mobile = _ref5.mobile;
    var toggleMenu = _ref5.toggleMenu;
    var linkState = _ref5.linkState;

    var mobileClick = function mobileClick() {
      _Link2['default'].handleClick();
      toggleMenu();
    };

    var desktopClick = function desktopClick() {
      _Link2['default'].handleClick();
    };

    var linksMapped = linkState.map(function (i, index) {
      return _react2['default'].createElement(
        'li',
        {
          className: i.show ? "" : "animate-nav-item",
          key: index
        },
        _react2['default'].createElement(
          'a',
          {
            className: 'Navigation-link',
            href: i.href,
            onClick: mobile ? mobileClick : desktopClick
          },
          ' ',
          i.name
        )
      );
    });

    return _react2['default'].createElement(
      'ul',
      { className: mobile ? "mobile-nav-links" : "desktop-navigation",
        role: 'menu'
      },
      ' ',
      linksMapped
    );
  };

  var MenuIcon = function MenuIcon(_ref6) {
    var toggleMenu = _ref6.toggleMenu;
    var mobileMenuOpen = _ref6.mobileMenuOpen;
    return _react2['default'].createElement(
      'div',
      {
        className: 'menu-icon',
        onClick: toggleMenu
      },
      _react2['default'].createElement('i', { className: mobileMenuOpen ? "fa fa-times-circle close animate-nav-item" : "fa fa-bars burger",
        'aria-hidden': 'true'
      }),
      _react2['default'].createElement(
        'span',
        { className: 'menu-title' },
        'MENU'
      )
    );
  };

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(33);

  var TourDatesWrapper = _react2['default'].createClass({
  	displayName: 'TourDatesWrapper',

  	componentWillMount: function componentWillMount() {
  		var tourDates = _react2['default'].createElement(
  			'a',
  			{
  				href: 'http://www.bandsintown.com/Masked%20Intruder',
  				className: 'bit-widget-initializer',
  				'data-artist': 'Masked Intruder'
  			},
  			' Masked Intruder Tour Dates'
  		);

  		this.setState({ tourDates: tourDates });
  	},

  	render: function render() {
  		return _react2['default'].createElement(
  			'div',
  			{ className: 'tour-dates-wrapper' },
  			this.state.tourDates
  		);
  	}
  });

  exports['default'] = TourDatesWrapper;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  var videoData = [{
  	url: "https://www.youtube.com/embed/pOPAt6W76sM",
  	title: "Beyond a Shadow of Doubt"
  }, {
  	url: "https://www.youtube.com/embed/NWzaob3Yo9A",
  	title: "Crime Spree"
  }, {
  	url: "https://www.youtube.com/embed/eGWLJz0a0YA",
  	title: "I Dont Wanna Be Alone Tonight"
  }];

  exports["default"] = videoData;
  module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  		value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(34);

  var _VideoDataJs = __webpack_require__(18);

  var _VideoDataJs2 = _interopRequireDefault(_VideoDataJs);

  var Videos = _react2['default'].createClass({
  		displayName: 'Videos',

  		getInitialState: function getInitialState() {
  				return { mobile: true };
  		},

  		componentDidMount: function componentDidMount() {
  				if (!matchMedia('(max-width: 768px)').matches) {
  						this.setState({ mobile: false });
  				}
  		},

  		render: function render() {

  				return _react2['default'].createElement(
  						'div',
  						{ className: 'videos-wrapper' },
  						_react2['default'].createElement(VideoList, {
  								data: _VideoDataJs2['default'],
  								mobile: this.state.mobile
  						})
  				);
  		}
  });

  var VideoList = function VideoList(_ref) {
  		var data = _ref.data;
  		var mobile = _ref.mobile;

  		var Iframe = undefined,
  		    videoList = undefined,
  		    height = undefined,
  		    width = undefined;

  		Iframe = 'iframe';
  		videoList = [];
  		height = mobile ? "180" : "360";
  		width = mobile ? "320" : "640";

  		data.forEach(function (v) {
  				var src = v.url;
  				var title = v.title;

  				videoList.push(_react2['default'].createElement(
  						'div',
  						{
  								className: 'video-background',
  								key: title
  						},
  						_react2['default'].createElement(
  								'div',
  								{ className: 'video' },
  								_react2['default'].createElement(Iframe, {
  										iframe: 'iframe',
  										src: src,
  										width: width,
  										height: height,
  										frameBorder: '0',
  										allowFullScreen: true
  								})
  						)
  				));
  		});

  		return _react2['default'].createElement(
  				'div',
  				null,
  				videoList
  		);
  };

  exports['default'] = Videos;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsHeaderHeaderJs = __webpack_require__(11);

  var _componentsHeaderHeaderJs2 = _interopRequireDefault(_componentsHeaderHeaderJs);

  var _componentsAlbumPromoAlbumPromoJs = __webpack_require__(7);

  var _componentsAlbumPromoAlbumPromoJs2 = _interopRequireDefault(_componentsAlbumPromoAlbumPromoJs);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsHeaderHeaderJs2['default'], null),
          _react2['default'].createElement(_componentsAlbumPromoAlbumPromoJs2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsMerchMerchJs = __webpack_require__(14);

  var _componentsMerchMerchJs2 = _interopRequireDefault(_componentsMerchMerchJs);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsMerchMerchJs2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsTourDatesTourDatesJs = __webpack_require__(17);

  var _componentsTourDatesTourDatesJs2 = _interopRequireDefault(_componentsTourDatesTourDatesJs);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'tour' },
          _react2['default'].createElement(
            'div',
            { className: 'tour-header' },
            _react2['default'].createElement(
              'h1',
              null,
              'TOUR DATES'
            )
          ),
          _react2['default'].createElement(_componentsTourDatesTourDatesJs2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsVideosVideosJs = __webpack_require__(19);

  var _componentsVideosVideosJs2 = _interopRequireDefault(_componentsVideosVideosJs);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsVideosVideosJs2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);", ""]);

  // module
  exports.push([module.id, "@font-face {\n\tfont-family: 'Cooper Std';\n\tsrc: url('/../static/CooperBlack/CooperBlackStd.eot');\n\tsrc: url('/../static/CooperBlack/CooperBlackStd.eot?#iefix') format('embedded-opentype'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.woff') format('woff'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.ttf') format('truetype'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.svg#CooperBlackStd') format('svg');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Animations\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Video\n * -------------------------------------------------------------------------- */\n\n.responsive-video-wrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n}\n\n.responsive-video-wrapper iframe {\n\tposition: absolute;\n\tborder: 0 none;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n\n.album-promo {\n\twidth: 100%;\n\theight: 700px;\n\tmargin-top: 300px;\n\tmargin-bottom: 60px;\n\tpadding: 20px;\n\tbackground-color: rgba(255,255,255, 1);\n}\n\n.album-art-wrapper {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t-webkit-flex-direction: row;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\t-webkit-box-pack: center;\n\t-webkit-justify-content: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\tpadding-left: 40px;\n\tpadding-right: 40px;\n\tcolor: #dd1b24;\n}\n\n.album-art {\n\tmargin: auto;\n}\n\n.album-title {\n\tmargin: auto;\n\t-webkit-box-flex: 1;\n\t-webkit-flex: auto;\n\t    -ms-flex: auto;\n\t        flex: auto;\n}\n\n.album-teaser {\n\tmargin: auto;\n\tmargin-bottom: 40px;\n\tmargin-top: -60px;\n\tdisplay: block;\n\ttext-align: center;\n}\n\n.video-background {\n\tpadding: 100px;\n\tpadding-left: 20%;\n\tpadding-right: 20%;\n\tmargin: 0 none;\n\ttext-align: center;\n\tbackground-color: rgba(255,255,255,.5);\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.release-info {\n\tmargin: auto;\n\tcolor: white;\n\tletter-spacing: 3px;\n\theight: 180px;\n}\n\n.release-info h1 {\n\tfont-weight: 200;\n\tmargin-bottom: 40px;\n\tmargin-top: 60px;\n}\n\n\n.preorder-button {\n\tmargin: 10px;\n\tmargin-top: 60px;\n\tfont-size: 30px;\n\tcolor: rgba(0,0,0,.8);;\n    background-color: #99c3db;\n    border: 3px solid rgba(0,0,0,.8);\n\ttext-decoration: none;\n\tpadding-top: 10px;\n\tpadding-right: 20px;\n\tpadding-left: 20px;\n\tborder-radius: 30px;\n\t-webkit-transition: all .2s ease-out;\n\t-o-transition: all .2s ease-out;\n\ttransition: all .2s ease-out\n}\n\n\n.preorder-button:hover{\n\topacity: .7;\n}\n\n.music-section {\n\theight: 1080px;\n\twidth: 100%;\n\tbackground: url(" + __webpack_require__(5) + ") no-repeat center center scroll;\n    -webkit-background-size: cover;\n            background-size: cover;\n    -webkit-box-shadow: 0px -4px 8px -2px rgba(0,0,0,0.25);\n            box-shadow: 0px -4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.album-links-wrapper {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: reverse;\n\t-webkit-flex-direction: row-reverse;\n\t    -ms-flex-direction: row-reverse;\n\t        flex-direction: row-reverse;\n\tpadding: auto;\n\tpadding-top: 300px;\n\n}\n\n.promoted-album {\n\tbackground-color: rgba(255,255,255, .9);\n\tpadding: 40px;\n\tmargin: auto;\n\tborder-radius: 2px;\n    -webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n            box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.listen-links {\n\ttext-align: center;\n\theight: 40px;\n\tmargin-top: 10px;\n\tbackground: -webkit-gradient(linear, left top, left bottom, from(rgba(235,143,183,1)), to(rgba(254,227,130,1)));\n\tbackground: -webkit-linear-gradient(top, rgba(235,143,183,1) 0%, rgba(254,227,130,1) 100%);\n\tbackground: -o-linear-gradient(top, rgba(235,143,183,1) 0%, rgba(254,227,130,1) 100%);\n\tbackground: linear-gradient(to bottom, rgba(235,143,183,1) 0%, rgba(254,227,130,1) 100%);\n\tborder-radius: 2px;\n    -webkit-box-shadow: 4px 4px 8px -4px rgba(0,0,0,0.25);\n            box-shadow: 4px 4px 8px -4px rgba(0,0,0,0.25);\n    -webkit-transition: all .2s ease-out;\n    -o-transition: all .2s ease-out;\n    transition: all .2s ease-out;\n}\n\n.listen-links a {\n\tpadding: 10px;\n\ttext-decoration: none;\n\tcolor: white;\n}\n\n.listen-links:hover{\n\t-webkit-transform: scale(.97);\n\t    -ms-transform: scale(.97);\n\t     -o-transform: scale(.97);\n\t        transform: scale(.97);\n}\n\n\n.link-icon {\n\tmargin-top: 12px;\n\tmargin-right: 6px;\n\tcolor: rgba(0,0,0, .7);\n}\n\n.promoted-album-thumbnail {\n\twidth: 300px;\n    -webkit-box-shadow: 4px 4px 8px -3px rgba(0,0,0,0.25);\n            box-shadow: 4px 4px 8px -3px rgba(0,0,0,0.25);\n    -webkit-transition: all .2s ease-out;\n    -o-transition: all .2s ease-out;\n    transition: all .2s ease-out\n}\n\n.promoted-album-thumbnail:hover{\n\t-webkit-transform: scale(.97);\n\t    -ms-transform: scale(.97);\n\t     -o-transform: scale(.97);\n\t        transform: scale(.97);\n}\n\n\n\n/* ipad */\n@media (max-device-width: 1024px)  {\n\n   .promoted-album {\n   \t  margin: 0 auto;\n   \t  margin-bottom: 20px;\n   \t  display: inline-block;\n   }\n\n   .album-links-wrapper {\n\t\t-webkit-box-orient: vertical;\n\t\t-webkit-box-direction: normal;\n\t\t-webkit-flex-direction: column;\n\t\t    -ms-flex-direction: column;\n\t\t        flex-direction: column;\n\t}\n\n\t.album-promo {\n\t\twidth: 100%;\n\t\theight: 400px;\n\t\tmargin-top: 100px;\n\t\tmargin-bottom: 60px;\n\t\tpadding: auto;\n\t\toverflow-x: hidden;\n\t}\n\n\t.album-logo {\n\t\tmargin-top: 45px;\n\t\tmax-width: 400px;\n\t}\n\n\t.music-section {\n\t\tdisplay: none;\n\t}\n\n\t.promoted-album-thumbnail {\n\t\twidth: 600px;\n\t}\n\n\t.album-art-wrapper {\n\t\twidth: 400px;\n\t\theight: 100%;\n\t\tmargin: auto;\n\t}\n\n\t.album-promo {\n\t\tmax-width: 1024px;\n\t\toverflow: hidden;\n\t}\n\n\t.album-title {\n\t\tmargin: auto;\n\t\tmargin-left: 30px;\n\t\twidth: 400px;\n\t}\n\n\t.album-title h2 {\n\t\tfont-size: 16px;\n\t}\n\n\t.album-title h1 {\n\t\tfont-size: 24px;\n\t}\n\n\t.album-art {\n\t\twidth: 400px;\n\t\tmargin-left: -120px;\n\t}\n\n}\n\n/* iphone 6+ */\n@media (max-device-width: 736px)  { \n\n   .album-logo {\n\t  margin-top: 45px;\n\t  max-width: 300px;\n\t}\n\n\t.promoted-album-thumbnail {\n\t\twidth: 300px;\n\t}\n\n\t.album-promo {\n\t\theight: 200px;\n\t\twidth: 100%;\n\t\tpadding: 0px;\n\t\toverflow: hidden;\n\t}\n\n\t.album-links-wrapper {\n\t\tpadding-top: 100px;\n\t}\n\n\t.release-info{\n\t\tpadding-top: 10px;\n\t}\n\n\t.release-info h1 {\n\t\tfont-size: 20px;\n\t\tmargin-top: -10px;\n\t\tmargin-bottom: 30px;\n\t}\n\n\t.preorder-button {\n\t\tdisplay: block;\n\t\tmargin-top: 0px;\n\t}\n\n\t.album-teaser {\n\t\tmargin-bottom: 40px;\n\t\tmargin-top: -60px;\n\t}\n\n\t.video-background {\n\t\tpadding: 40px;\n\t\tpadding-left: 0%;\n\t\tpadding-right: 0%;\n\t}\n\n\t.album-links-wrapper {\n\t\tpadding-top: 40px;\n\t}\n\n\t.album-art-wrapper {\n\t\twidth: 300px;\n\t\tmargin-left: 80px;\n\t}\n\n\t.album-promo {\n\t\tmax-width: 667px;\n\t}\n\n\t.album-title {\n\n\t\tmargin-left: 30px;\n\t}\n\n\t.album-title h2 {\n\t\tfont-size: 12px;\n\t}\n\n\t.album-title h1 {\n\t\tfont-size: 20px;\n\t}\n\n\t\n}\n\n/* iphone 6 */\n@media (max-device-width: 667px) { \n\n   .album-logo {\n\t  margin-top: 45px;\n\t  max-width: 300px;\n\t}\n\n\t.promoted-album-thumbnail {\n\t\twidth: 270px;\n\t}\n\n\t.album-promo {\n\t\tpadding: 0px;\n\t\toverflow: hidden;\n\t\tmargin-top: 40px;\n\t}\n    \n    .album-art-wrapper {\n\t\twidth:50%;\n\t}\n\n\n\t.album-promo {\n\t\tmax-width: 667px;\n\t}\n\n\t.album-title {\n\n\t\tmargin-left: 30px;\n\t}\n\n\t.album-title h2 {\n\t\tfont-size: 12px;\n\t}\n\n\t.album-title h1 {\n\t\tfont-size: 20px;\n\t}\n}\n\n/* iphone 5 */\n@media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 568px) {\n\n   .album-logo {\n\t  margin-top: 45px;\n\t  max-width: 300px;\n\t}\n\n\t.promoted-album {\n\t\tpadding: 20px;\n\t}\n\n\t.promoted-album-thumbnail {\n\t\twidth: 260px;\n\t}\n\n\t.album-promo {\n\t\tpadding: 0px;\n\t\toverflow: hidden;\n\t\tmargin-top: 40px;\n\t}\n\n\t .album-art-wrapper {\n\t\twidth: 250px;\n\t}\n\n\t.album-promo {\n\t\tmax-width: 667px;\n\t}\n\n\t.album-title {\n\n\t\tmargin-left: 10px;\n\t}\n\n\t.album-title h2 {\n\t\tfont-size: 10px;\n\t}\n\n\t.album-title h1 {\n\t\tfont-size: 18px;\n\t}\n\n\t.preorder-text {\n\t\tfont-size: 24px;\n\t}\n\n\t.preorder-button {\n\t\tline-height: 34px;\n\t}\n\t.release-info h1 {\n\t\tfont-size: 14px;\n\t}\n}", ""]);

  // exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);", ""]);

  // module
  exports.push([module.id, "@font-face {\n\tfont-family: 'Cooper Std';\n\tsrc: url('/../static/CooperBlack/CooperBlackStd.eot');\n\tsrc: url('/../static/CooperBlack/CooperBlackStd.eot?#iefix') format('embedded-opentype'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.woff') format('woff'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.ttf') format('truetype'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.svg#CooperBlackStd') format('svg');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Animations\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Video\n * -------------------------------------------------------------------------- */\n\n.responsive-video-wrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n}\n\n.responsive-video-wrapper iframe {\n\tposition: absolute;\n\tborder: 0 none;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.social-wrapper {\n\ttext-align: left;\n\tpadding-top: 20px;\n}\n\n.social-list a {\n\tfont-size: 30px;\n\tmargin: 15px;\n\t-webkit-transition: opacity .3s ease;\n\t-o-transition: opacity .3s ease;\n\ttransition: opacity .3s ease\n}\n\n.social-list a:hover{\n\topacity: .5;\n}\n\n.fa-facebook {\n\tcolor: #3b5998;\n}\n\n.fa-tumblr {\n\tcolor: #32506d;\n}\n\n.fa-twitter {\n\tcolor: #00aced;\n}\n\n.fa-instagram {\n\tcolor: #517fa4;\n}\n\n.footer {\n\theight: 100px;\n\tmargin-top: -20px;\n\tbackground-color: rgba(255,255,255, 1);\n}\n\n.mobile-footer {\n\tmargin-top: 0px;\n\tbottom: 0;\n\theight: 85px;\n\tbackground-color: rgba(255,255,255,.5);\n}\n\n/* iphone 6+ */\n@media only screen and (max-device-width: 736px) { \n\n\t.social-wrapper {\n\t\ttext-align: center;\n\t\tpadding-top: 12px;\n\t\tmargin-right: 13%;\n\t}\n\n  \t.social-list a {\n\t\tfont-size: 24px;\n\t\tmargin: 15px;\n\t\t-webkit-transition: opacity .3s ease;\n\t\t-o-transition: opacity .3s ease;\n\t\ttransition: opacity .3s ease\n\t}\n\n  \t.social-list a:hover{\n\t\topacity: .5;\n\t}\n}", ""]);

  // exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);", ""]);

  // module
  exports.push([module.id, "@font-face {\n\tfont-family: 'Cooper Std';\n\tsrc: url('/../static/CooperBlack/CooperBlackStd.eot');\n\tsrc: url('/../static/CooperBlack/CooperBlackStd.eot?#iefix') format('embedded-opentype'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.woff') format('woff'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.ttf') format('truetype'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.svg#CooperBlackStd') format('svg');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Animations\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Video\n * -------------------------------------------------------------------------- */\n\n.responsive-video-wrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n}\n\n.responsive-video-wrapper iframe {\n\tposition: absolute;\n\tborder: 0 none;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.spotify-link {\n  text-decoration: none;\n  color: white;\n  font-size: 24px;\n  display: block;\n  margin-top: 100px;\n  margin-bottom: -160px;\n  cursor: pointer;\n  opacity: .7;\n  -webkit-transition: opacity .2s;\n  -o-transition: opacity .2s;\n  transition: opacity .2s;\n}\n\n.spotify-link i {\n\tcolor: #81b71a;\n\tmargin-left: 5px;\n}\n\n.spotify-link:hover{\n\topacity: 1;\n}\n\n/* Smartphones (portrait and landscape) ----------- */\n@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n  \n  .header-logo {\n    width: 400px;\n    margin-top: 10px;\n  }\n\n  .spotify-link {\n    font-size: 18px;\n    margin-top: 20px;\n    margin-bottom: -20px;\n  }\n}\n\n\n/* iPads (portrait and landscape) ----------- */\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {\n\n  .header-logo {\n    width: 700px;\n  }\n\n  .spotify-link {\n    margin-top: 40px;\n    margin-bottom: -40px;\n  }\n}\n\n/* Partial Window Desktop ----------- */\n@media only screen  and (min-width : 769px) {\n\n  .header-logo {\n    width: 800px;\n  }\n}\n\n\n/* Desktops and laptops ----------- */\n@media only screen  and (min-width : 1224px) {\n\n  .header-logo {\n    width: 880px;\n  }\n}\n\n/* Large screens ----------- */\n@media only screen  and (min-width : 1824px) {\n\n  .header-logo {\n    width: 1080px;\n  }\n}\n\n\n/* iPhone 5 ----------- */\n\n\n@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){\n  .header-logo {\n    width: 300px;\n  }\n}\n\n/* iPhone 6 ----------- */\n\n\n@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){\n\n  .header-logo {\n    width: 300px;\n  }\n}\n\n/* iPhone 6+ ----------- */\n\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){\n/* Styles */\n\n\n}\n\n", ""]);

  // exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);", ""]);

  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n@font-face {\n\tfont-family: 'Cooper Std';\n\tsrc: url('/../static/CooperBlack/CooperBlackStd.eot');\n\tsrc: url('/../static/CooperBlack/CooperBlackStd.eot?#iefix') format('embedded-opentype'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.woff') format('woff'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.ttf') format('truetype'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.svg#CooperBlackStd') format('svg');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Animations\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Video\n * -------------------------------------------------------------------------- */\n\n.responsive-video-wrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n}\n\n.responsive-video-wrapper iframe {\n\tposition: absolute;\n\tborder: 0 none;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n@font-face {\n  font-family: 'Cooper Std';\n  src: url(" + __webpack_require__(4) + ");\n  src: url(" + __webpack_require__(4) + "?#iefix) format('embedded-opentype'),\n    url(" + __webpack_require__(38) + ") format('woff'),\n    url(" + __webpack_require__(35) + ") format('truetype'),\n    url(" + __webpack_require__(37) + "#CooperBlackStd) format('svg');\n  font-weight: 900;\n  font-style: normal;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(235,143,183,1)), to(rgba(254,227,130,1)));\n  background: -webkit-linear-gradient(top, rgba(235,143,183,1) 0%, rgba(254,227,130,1) 100%);\n  background: -o-linear-gradient(top, rgba(235,143,183,1) 0%, rgba(254,227,130,1) 100%);\n  background: linear-gradient(to bottom, rgba(235,143,183,1) 0%, rgba(254,227,130,1) 100%);\n  background-repeat: no-repeat cover;\n  background-attachment: fixed;\n  color: rgba(0,0,0, .7);\n  font-family: 'Cooper Std';\n}\n\n.layout {\n  margin: 0 auto;\n  padding: 0;\n  text-align: center;\n  overflow: hidden;\n}\n\n", ""]);

  // exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);", ""]);

  // module
  exports.push([module.id, "@font-face {\n\tfont-family: 'Cooper Std';\n\tsrc: url('/../static/CooperBlack/CooperBlackStd.eot');\n\tsrc: url('/../static/CooperBlack/CooperBlackStd.eot?#iefix') format('embedded-opentype'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.woff') format('woff'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.ttf') format('truetype'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.svg#CooperBlackStd') format('svg');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Animations\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Video\n * -------------------------------------------------------------------------- */\n\n.responsive-video-wrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n}\n\n.responsive-video-wrapper iframe {\n\tposition: absolute;\n\tborder: 0 none;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.merch-wrapper {\n\tmargin-top: 40px;\n}\n\na {\n\ttext-decoration: none;\n}\n\n.merch-store {\n\tdisplay: inline-block;\n\tmargin: auto;\n\tmargin-bottom: 40px;\n\theight: 600px;\n\twidth: 500px;\n\tborder-radius: 2px;\n\ttext-decoration: none;\n\tborder: none;\n\tcursor: pointer;\n\tbackground: #99c3db;\n    -webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n            box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n    -webkit-transition: all .2s ease-out;\n    -o-transition: all .2s ease-out;\n    transition: all .2s ease-out;\n}\n\n.merch-store img {\n\topacity: .8;\n\tmax-height: 400px;\n\tmargin-top: 50px;\n\t-webkit-transition: all .2s ease-out;\n\t-o-transition: all .2s ease-out;\n\ttransition: all .2s ease-out;\n}\n\n.merch-store h1 {\n\tfont-size: 40px;\n\tletter-spacing: 3px;\n\ttext-transform: uppercase;\n\tcolor: #e08db1;\n\tbackground: -webkit-linear-gradient(left, rgba(235,143,183,1) 0%, rgba(254,227,130,1) 100%);\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n}\n\n.merch-store p {\n\tfont-size: 16px;\n\tcolor: #e08db1;\n\tbackground: -webkit-linear-gradient(left, rgba(235,143,183,1) 0%, rgba(254,227,130,1) 100%);\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n}\n\n.merch-store:hover{\n\t-webkit-transform: scale(.95);\n\t    -ms-transform: scale(.95);\n\t     -o-transform: scale(.95);\n\t        transform: scale(.95);\n}\n\t\n\n\n.title-wrapper {\n\theight: 100px;\n\tpadding: 10px;\n\tpadding-top: 4px;\n\tbackground-color: rgba(255,255,255, 1);\n}\n\n.country-name {\n\tmargin-top: -25px;\n}\n\n/* iphone 6+ */\n@media (max-device-width: 736px)  { \n\n\t.merch-wrapper {\n\t\tmargin-top: 20px;\n\t}\n\n\t.merch-store {\n\t\tmax-width: 100%;\n\t\theight: 550px;\n\t\t-webkit-transform: scale(.9);\n\t\t    -ms-transform: scale(.9);\n\t\t     -o-transform: scale(.9);\n\t\t        transform: scale(.9);\n\t\tmargin-bottom: 0px;\n\t\tmargin-top: 0px none;\n\t}\n\n\t.merch-store img {\n\t\tmax-width: 300px;\n\t}\n\n\t.merch-store:hover{\n\t\t-webkit-transform: scale(.9);\n\t\t    -ms-transform: scale(.9);\n\t\t     -o-transform: scale(.9);\n\t\t        transform: scale(.9);\n\t}\n}\n\n/* iphone 5 */\n@media (max-device-width: 568px) {\n\n    .merch-store h1 {\n\t\tfont-size: 30px;\n\t\tmargin-top: 30px;\n\t}\n \n}\n\n", ""]);

  // exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);", ""]);

  // module
  exports.push([module.id, "@font-face {\n\tfont-family: 'Cooper Std';\n\tsrc: url('/../static/CooperBlack/CooperBlackStd.eot');\n\tsrc: url('/../static/CooperBlack/CooperBlackStd.eot?#iefix') format('embedded-opentype'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.woff') format('woff'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.ttf') format('truetype'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.svg#CooperBlackStd') format('svg');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Animations\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Video\n * -------------------------------------------------------------------------- */\n\n.responsive-video-wrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n}\n\n.responsive-video-wrapper iframe {\n\tposition: absolute;\n\tborder: 0 none;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.desktop-navigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 3em 0 5em 0;\n  list-style: none;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.desktop-navigation li {\n\t-webkit-transform: scale(.8);\n\t    -ms-transform: scale(.8);\n\t     -o-transform: scale(.8);\n\t        transform: scale(.8);\n\tmargin-right: -20px;\n\tmargin-left: -20px;\n\tpadding: 0 1em;\n\topacity: 1;\n\t-webkit-transition: -webkit-transform .2s ease-out;\n\ttransition: -webkit-transform .2s ease-out;\n\t-o-transition: transform .2s ease-out, -o-transform .2s ease-out;\n\ttransition: transform .2s ease-out;\n\ttransition: transform .2s ease-out, -webkit-transform .2s ease-out, -o-transform .2s ease-out\n}\n\n.desktop-navigation li:hover{\n\t-webkit-transform: scale(.95);\n\t    -ms-transform: scale(.95);\n\t     -o-transform: scale(.95);\n\t        transform: scale(.95);\n}\n\n.brand {\n  position: absolute;\n  left: 40px;\n  top: 10px;\n  width: 200px;\n}\n\n.desktop-nav-hidden {\n  visibility: hidden;\n  display: none;\n}\n\n.desktop-nav-show {\n  visibility: visible;\n}\n\n.mobile-navigation {\n  position: absolute;\n  height: 100%;\n}\n\n.mobile-navbar {\n  position: relative;\n  height: 60px;\n  width: 100%;\n  z-index: 1500;\n  background-color: rgba(255,255,255,.5);\n}\n\n.mobile-nav-hidden {\n  visibility: hidden;\n}\n\n.mobile-nav-show {\n  visibility: visible;\n}\n\n.mobile-nav-links {\n  height: 350px;\n  top: 50%;\n  margin-top: -175px;\n  position: relative;\n  padding: 0px;\n  transform: translate3d(0,0,0);\n  -webkit-transform: translate3d(0,0,0);\n\n}\n\n.mobile-nav-links li {\n\ttext-align: center;\n\tfont-size: 40px;\n\tlist-style: none;\n\tmargin-top: 30px;\n}\n\n.mobile-menu-background {\n  position: absolute;\n  z-index: 3000;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  background-color: rgba(255,255,255,1);\n  text-align: center;\n}\n\n.mobile-menu-wrapper-open {\n  opacity: 1;\n  visibility: visible;\n}\n\n.mobile-menu-wrapper-closed {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.mmbOpen a {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease .25s;\n  -o-transition: opacity 1s ease .25s;\n  transition: opacity 1s ease .25s;\n}\n\n.mmbClosed a {\n  opacity: 0;\n}\n\n.menu-icon {\n  position: absolute;\n  z-index: 4000;\n  width: 120px;\n  margin-top: 22px;\n  left: 100%;\n}\n\n.menu-title {\n  font-size: 15px;\n  margin-left: 4px;\n  display: inline;\n}\n\n.burger {\n  font-size: 20px;\n  display: inline-block;\n}\n\n.close {\n  font-size: 20px;\n  display: inline-block;\n}\n\n.animate-nav-item {\n  -webkit-animation: slide .5s 1;\n       -o-animation: slide .5s 1;\n          animation: slide .5s 1;\n}\n\n.Navigation-link {\n  font-size: 40px;\n  padding-top: 10px;\n  padding-right: 20px;\n  padding-left: 20px;\n  color: rgba(0,0,0,.8);\n  background-color: #99c3db;\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer;\n  border: 3px solid rgba(0,0,0,.8);\n  border-radius: 30px;\n  -webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n          box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n  -webkit-transition: all .3s ease-out;\n  -o-transition: all .3s ease-out;\n  transition: all .3s ease-out;\n}\n\n@-webkit-keyframes slide {\n  0% { -webkit-transform: translateX(-10em); transform: translateX(-10em); }\n  100% { -webkit-transform: translateX(0em); transform: translateX(0em); }\n}\n\n@-o-keyframes slide {\n  0% { -o-transform: translateX(-10em); transform: translateX(-10em); }\n  100% { -o-transform: translateX(0em); transform: translateX(0em); }\n}\n\n@keyframes slide {\n  0% { -webkit-transform: translateX(-10em); -o-transform: translateX(-10em); transform: translateX(-10em); }\n  100% { -webkit-transform: translateX(0em); -o-transform: translateX(0em); transform: translateX(0em); }\n}\n\n/* ipad */\n@media only screen \n  and (min-device-width: 768px) \n  and (max-device-width: 1024px) \n  and (orientation: portrait) \n  and (min-device-pixel-ratio: 1) {\n\n    .mobile-nav-links {\n      height: 600px;\n      top: 50%;\n      margin-top: -300px;\n      position: relative;\n      padding: 0px;\n    }\n\n    .mobile-nav-links li {\n      text-align: center;\n      font-size: 80px;\n      list-style: none;\n      margin-top: 30px;\n      font-weight: lighter;\n    }\n}\n\n@media only screen and (min-width: 769px) {\n  .mobile-navigation {\n    visibility: hidden;\n  }\n\n  .mobile-navbar {\n    visibility: hidden;\n  }\n}", ""]);

  // exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);", ""]);

  // module
  exports.push([module.id, "@font-face {\n\tfont-family: 'Cooper Std';\n\tsrc: url('/../static/CooperBlack/CooperBlackStd.eot');\n\tsrc: url('/../static/CooperBlack/CooperBlackStd.eot?#iefix') format('embedded-opentype'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.woff') format('woff'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.ttf') format('truetype'),\n\t\turl('/../static/CooperBlack/CooperBlackStd.svg#CooperBlackStd') format('svg');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Animations\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Video\n * -------------------------------------------------------------------------- */\n\n.responsive-video-wrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n}\n\n.responsive-video-wrapper iframe {\n\tposition: absolute;\n\tborder: 0 none;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.tour {\n  text-align: center;\n}\n\n.tour-dates-wrapper {\n  margin-top: 100px;\n  margin-bottom: 30px;\n}\n\n.tour-dates-wrapper a {\n  color: white;\n}\n\n.tour-header {\n  position: absolute;\n  background-color: white;\n  width: 100%;\n  margin: auto;\n  margin-top: -100px;\n  text-align: center;\n}\n\n.tour-header h1 {\n\tfont-size: 40px;\n\tcolor: #e08db1;\n\tbackground: -webkit-linear-gradient(left, rgba(235,143,183,1) 0%, rgba(254,227,130,1) 100%);\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n}\n\n\n/* iphone 5 */\n@media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 568px)\n  and (min-device-pixel-ratio: 2) {\n\n    .tour-dates-wrapper {\n      overflow: scroll;\n    }\n\n    .tour-header {\n      margin-bottom: 40px;\n      margin-top: 0px;\n    }\n \n}\n\n/* iphone 6 */\n@media only screen \n  and (min-device-width: 375px) \n  and (max-device-width: 667px) { \n\n\n}\n\n/* iphone 6+ */\n@media only screen \n  and (min-device-width: 414px) \n  and (max-device-width: 736px) { \n\n\n\n    .tour-dates-wrapper {\n      margin-top: 100px;\n      margin-bottom: 20px;\n    }\n\n}\n\n/* ipad */\n@media only screen \n  and (min-device-width: 768px) \n  and (max-device-width: 1024px) {\n\n\n\n}", ""]);

  // exports


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, ".videos-wrapper {\n\tmargin-top: 40px;\n\ttext-align: center;\n\tmargin-bottom: 40px;\n}\n\n.video-background {\n\tbackground-color: rgba(255,255,255, 1);\n\tborder-radius: 2px;\n\tpadding: 20px;\n\tmargin: auto;\n\tmargin-bottom: 20px;\n    -webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n            box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n    max-width: 640px;\n}\n\n\n@media screen and (device-aspect-ratio: 40/71) {\n\n\t.videos-wrapper {\n\t\ttext-align: left;\n\t}\n\n\t.video-background {\n\t  padding: 0px none;\n\t  margin-left: -20px;\n\t  max-width: 320px;\n\t}\n}", ""]);

  // exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "8c4b43ed4c80e3e913feacb37ffb4860.ttf";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "cf597ecf00cb8e3e07bf299e0c43f535.png";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "4b6619895760dbd4ef663ffe3943f372.svg";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "8929a080f4f8f315b3ca3d89b71be4a3.woff";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "55623696d0081b2976890d42000b9876.png";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "25df8f5120940542b8048f1859af582a.png";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "20e08ad91b4bc6ea8d7c95d19cb72edc.png";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "a6d8b3259b2c90680b8f1101c334f6df.png";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "c9d0fd85fa0903237d99bfe66e2e9823.png";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "8e8b99a1beeb96ad060727c53cbaf515.png";

/***/ },
/* 45 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 46 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 47 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 48 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);