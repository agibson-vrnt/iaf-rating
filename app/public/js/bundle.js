(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Main = __webpack_require__(1);

	var _Main2 = _interopRequireDefault(_Main);

	var _AddAQuote = __webpack_require__(3);

	var _AddAQuote2 = _interopRequireDefault(_AddAQuote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*eslint-env browser*/


	var partials = { Main: _Main2.default, AddAQuote: _AddAQuote2.default };

	// export as client-side namespace
	if (typeof window !== "undefined" && window.iaf && window.iaf.rating) {

		window.iaf.rating.partials = partials;
	}
	// export as module
	exports.default = partials;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _iaf = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HelloWorld = function (_React$Component) {
		_inherits(HelloWorld, _React$Component);

		function HelloWorld(props) {
			_classCallCheck(this, HelloWorld);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HelloWorld).call(this, props));

			_this.state = {};

			return _this;
		}

		_createClass(HelloWorld, [{
			key: "handleClick",
			value: function handleClick() {

				this.setState({ hit: true });
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				return _iaf.React.createElement(
					"div",
					{ onClick: function onClick(e) {
							return _this2.handleClick(e);
						} },
					"Hello world",
					_iaf.React.createElement(
						"div",
						null,
						this.state.hit && "OUCH!"
					)
				);
			}
		}]);

		return HelloWorld;
	}(_iaf.React.Component);

	exports.default = HelloWorld;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	/*eslint-env node, browser*/
	module.exports = (typeof window === "undefined" ? global : window).iaf.rating.iaf;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _iaf = __webpack_require__(2);

	var _AddQuoteContainer = __webpack_require__(12);

	var _AddQuoteContainer2 = _interopRequireDefault(_AddQuoteContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Provider = _iaf.ReactRedux.Provider;

	var store = _iaf.Redux.createStore(function () {
		var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		var action = arguments[1];


		switch (action.type) {

			case "select-product":
				return _extends({}, state, {
					products: _extends({}, state.products, {
						selected: action.id

					}),
					terms: {

						available: [[12, "1 year"], [24, "2 years"]]

					}

				});
			default:
				return state;

		}
	});

	exports.default = function () {
		return _iaf.React.createElement(
			Provider,
			{ store: store },
			_iaf.React.createElement(_AddQuoteContainer2.default, null)
		);
	};

/***/ },
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _iaf = __webpack_require__(2);

	var _ProductSelectorContainer = __webpack_require__(7);

	var _ProductSelectorContainer2 = _interopRequireDefault(_ProductSelectorContainer);

	var _TermSelectorContainer = __webpack_require__(9);

	var _TermSelectorContainer2 = _interopRequireDefault(_TermSelectorContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HelloWorld = function (_React$Component) {
		_inherits(HelloWorld, _React$Component);

		function HelloWorld(props) {
			_classCallCheck(this, HelloWorld);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HelloWorld).call(this, props));

			_this.state = {};

			return _this;
		}

		_createClass(HelloWorld, [{
			key: "renderTermSelector",
			value: function renderTermSelector() {
				var available = this.props.available;

				if (available && available.length) {

					return _iaf.React.createElement(
						"div",
						{ className: "form-group" },
						_iaf.React.createElement(
							"label",
							null,
							"Select a term"
						),
						_iaf.React.createElement(_TermSelectorContainer2.default, null)
					);
				}
			}
		}, {
			key: "render",
			value: function render() {

				console.log(this.props);
				return _iaf.React.createElement(
					"form",
					{ method: "POST" },
					_iaf.React.createElement(
						"div",
						{ className: "form-group" },
						_iaf.React.createElement(
							"label",
							null,
							"Select a product"
						),
						_iaf.React.createElement(_ProductSelectorContainer2.default, null)
					),
					this.renderTermSelector(),
					_iaf.React.createElement("input", { type: "submit", value: "Submit", className: "btn btn-default" })
				);
			}
		}]);

		return HelloWorld;
	}(_iaf.React.Component);

	exports.default = HelloWorld;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _quoteActionCreators = __webpack_require__(11);

	var actionCreators = _interopRequireWildcard(_quoteActionCreators);

	var _iaf = __webpack_require__(2);

	var _ProductSelector = __webpack_require__(8);

	var _ProductSelector2 = _interopRequireDefault(_ProductSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// a mapper for converting the state tree to just the part our widget requires
	var mapStateToProps = function mapStateToProps(state) {
		return state.products || {};
	};

	// a mapper taking the dispatch method and building methods for our view compoments to call

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
		return {

			selectProduct: function selectProduct(productId) {
				return dispatch(actionCreators.selectProduct(productId));
			}

		};
	};

	// importing the connect utility from react-redux - this creates the container for us


	// importing the widget which this container handles


	// build the container for our widget
	var ProductSelectorContainer = _iaf.ReactRedux.connect(mapStateToProps, mapDispatchToProps)(_ProductSelector2.default);

	// export the container
	exports.default = ProductSelectorContainer;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _iaf = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HelloWorld = function (_React$Component) {
		_inherits(HelloWorld, _React$Component);

		function HelloWorld(props) {
			_classCallCheck(this, HelloWorld);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HelloWorld).call(this, props));

			_this.state = {};

			return _this;
		}

		_createClass(HelloWorld, [{
			key: "handleChange",
			value: function handleChange() {

				var product = this.refs.product.value;
				this.props.selectProduct(product);
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				console.log(this.props.selected);
				return _iaf.React.createElement(
					"select",
					{ ref: "product", name: "product", className: "form-control", defaultValue: this.props.selected || "", onChange: function onChange(e) {
							return _this2.handleChange(e);
						} },
					_iaf.React.createElement(
						"option",
						{ value: "", disabled: true },
						"-- select a product --"
					),
					_iaf.React.createElement(
						"option",
						{ value: "standard" },
						"Standard"
					),
					_iaf.React.createElement(
						"option",
						{ value: "premium" },
						"Premium"
					)
				);
			}
		}]);

		return HelloWorld;
	}(_iaf.React.Component);

	exports.default = HelloWorld;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _iaf = __webpack_require__(2);

	var _TermSelector = __webpack_require__(10);

	var _TermSelector2 = _interopRequireDefault(_TermSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// a mapper for converting the state tree to just the part our widget requires
	var mapStateToProps = function mapStateToProps(state) {
	  return state.terms || {};
	};

	// a mapper taking the dispatch method and building methods for our view compoments to call
	//import * as actionCreators from "../action-creators";
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {

	    //	doIt: () => dispatch( actionCreators.asyncAction() )

	  };
	};

	// importing the connect utility from react-redux - this creates the container for us


	// importing the widget which this container handles


	// build the container for our widget
	var TermSelectorContainer = _iaf.ReactRedux.connect(mapStateToProps, mapDispatchToProps)(_TermSelector2.default);

	// export the container
	exports.default = TermSelectorContainer;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _iaf = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TermSelector = function (_React$Component) {
		_inherits(TermSelector, _React$Component);

		function TermSelector(props) {
			_classCallCheck(this, TermSelector);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TermSelector).call(this, props));

			_this.state = {};

			return _this;
		}

		_createClass(TermSelector, [{
			key: "render",
			value: function render() {

				return _iaf.React.createElement(
					"select",
					{ name: "term", className: "form-control", defaultValue: "" },
					_iaf.React.createElement(
						"option",
						{ value: "", disabled: true },
						"-- select a term --"
					),
					_iaf.React.createElement(
						"option",
						{ value: "12" },
						"1 year"
					),
					_iaf.React.createElement(
						"option",
						{ value: "24" },
						"2 years"
					),
					_iaf.React.createElement(
						"option",
						{ value: "36" },
						"3 years"
					),
					_iaf.React.createElement(
						"option",
						{ value: "60" },
						"5 years"
					),
					_iaf.React.createElement(
						"option",
						{ value: "120" },
						"Lifetime"
					)
				);
			}
		}]);

		return TermSelector;
	}(_iaf.React.Component);

	exports.default = TermSelector;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.selectProduct = selectProduct;
	function selectProduct(productId) {

		return { "type": "select-product", "id": productId };
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _iaf = __webpack_require__(2);

	var _AddQuote = __webpack_require__(6);

	var _AddQuote2 = _interopRequireDefault(_AddQuote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// a mapper for converting the state tree to just the part our widget requires
	var mapStateToProps = function mapStateToProps(state) {
	  return state.terms || {};
	};

	// a mapper taking the dispatch method and building methods for our view compoments to call
	//import * as actionCreators from "../action-creators";
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {

	    //	doIt: () => dispatch( actionCreators.asyncAction() )

	  };
	};

	// importing the connect utility from react-redux - this creates the container for us


	// importing the widget which this container handles


	// build the container for our widget
	var AddQuoteContainer = _iaf.ReactRedux.connect(mapStateToProps, mapDispatchToProps)(_AddQuote2.default);

	// export the container
	exports.default = AddQuoteContainer;

/***/ }
/******/ ])
});
;