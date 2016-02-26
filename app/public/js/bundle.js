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

	var _RetrieveQuote = __webpack_require__(18);

	var _RetrieveQuote2 = _interopRequireDefault(_RetrieveQuote);

	var _DeleteQuote = __webpack_require__(20);

	var _DeleteQuote2 = _interopRequireDefault(_DeleteQuote);

	var _ListQuotes = __webpack_require__(21);

	var _ListQuotes2 = _interopRequireDefault(_ListQuotes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var partials = { Main: _Main2.default, AddAQuote: _AddAQuote2.default, RetrieveQuote: _RetrieveQuote2.default, DeleteQuote: _DeleteQuote2.default, ListQuotes: _ListQuotes2.default };

	// export as client-side namespace
	/*eslint-env browser*/
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

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HelloWorld = function (_Component) {
		_inherits(HelloWorld, _Component);

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

				return _react2.default.createElement(
					"div",
					{ onClick: function onClick(e) {
							return _this2.handleClick(e);
						} },
					"Hello world",
					_react2.default.createElement(
						"div",
						null,
						this.state.hit && "OUCH!"
					)
				);
			}
		}]);

		return HelloWorld;
	}(_react.Component);

	exports.default = HelloWorld;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PropTypes = exports.Component = undefined;

	var _iaf = __webpack_require__(23);

	exports.default = _iaf.React;
	var Component = _iaf.React.Component;
	var PropTypes = _iaf.React.PropTypes;
	exports.Component = Component;
	exports.PropTypes = PropTypes;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(4);

	var _reduxThunk = __webpack_require__(5);

	var _redux = __webpack_require__(6);

	var _AddQuoteContainer = __webpack_require__(7);

	var _AddQuoteContainer2 = _interopRequireDefault(_AddQuoteContainer);

	var _quoteActionCreators = __webpack_require__(12);

	var actionCreators = _interopRequireWildcard(_quoteActionCreators);

	var _quoteReducers = __webpack_require__(17);

	var _quoteReducers2 = _interopRequireDefault(_quoteReducers);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AddAQuote = function (_Component) {
		_inherits(AddAQuote, _Component);

		function AddAQuote() {
			_classCallCheck(this, AddAQuote);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(AddAQuote).apply(this, arguments));
		}

		_createClass(AddAQuote, [{
			key: "componentWillMount",
			value: function componentWillMount() {

				var initialState = { products: { available: this.props.catalogue.slice() } };
				this.store = (0, _redux.createStore)(_quoteReducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk.thunkMiddleware));
				if (this.props.product) {

					this.store.dispatch(actionCreators.selectProduct(this.props.product));
				}
				if (this.props.term) {

					this.store.dispatch(actionCreators.selectTerm(this.props.term));
				}
			}
		}, {
			key: "render",
			value: function render() {

				return _react2.default.createElement(
					_reactRedux.Provider,
					{ store: this.store },
					_react2.default.createElement(_AddQuoteContainer2.default, null)
				);
			}
		}]);

		return AddAQuote;
	}(_react.Component);

	AddAQuote.propTypes = { catalogue: _react.PropTypes.array, product: _react.PropTypes.object, term: _react.PropTypes.object };
	exports.default = AddAQuote;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Provider = undefined;

	var _iaf = __webpack_require__(23);

	exports.default = _iaf.ReactRedux;
	var Provider = _iaf.ReactRedux.Provider;
	exports.Provider = Provider;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.thunkMiddleware = undefined;

	var _iaf = __webpack_require__(23);

	exports.default = _iaf.ReduxThunk;
	var thunkMiddleware = _iaf.ReduxThunk.thunkMiddleware;
	exports.thunkMiddleware = thunkMiddleware;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createStore = exports.applyMiddleware = undefined;

	var _iaf = __webpack_require__(23);

	exports.default = _iaf.Redux;
	var applyMiddleware = _iaf.Redux.applyMiddleware;
	var createStore = _iaf.Redux.createStore;
	exports.applyMiddleware = applyMiddleware;
	exports.createStore = createStore;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _addQuoteContainer = __webpack_require__(8);

	var _addQuoteContainer2 = _interopRequireDefault(_addQuoteContainer);

	var _AddQuote = __webpack_require__(9);

	var _AddQuote2 = _interopRequireDefault(_AddQuote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AddQuoteContainer = (0, _addQuoteContainer2.default)(_AddQuote2.default);

	// export the container
	exports.default = AddQuoteContainer;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(4);

	var _reactRedux2 = _interopRequireDefault(_reactRedux);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// a mapper for converting the state tree to just the part our widget requires
	var mapState = function mapState(state) {
	  return state.terms || {};
	};

	// a mapper taking the dispatch method and building methods for our view compoments to call
	var mapDispatch = function mapDispatch() {
	  return {};
	};

	exports.default = function (control) {
	  return _reactRedux2.default.connect(mapState, mapDispatch)(control);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ProductSelectorContainer = __webpack_require__(10);

	var _ProductSelectorContainer2 = _interopRequireDefault(_ProductSelectorContainer);

	var _TermSelectorContainer = __webpack_require__(14);

	var _TermSelectorContainer2 = _interopRequireDefault(_TermSelectorContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;
	var PropTypes = _react2.default.PropTypes;

	var AddQuote = function (_Component) {
		_inherits(AddQuote, _Component);

		function AddQuote(props) {
			_classCallCheck(this, AddQuote);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddQuote).call(this, props));

			_this.state = {};

			return _this;
		}

		_createClass(AddQuote, [{
			key: "renderTermSelector",
			value: function renderTermSelector() {
				var available = this.props.available;

				if (available && available.length) {

					return _react2.default.createElement(
						"div",
						{ className: "form-group" },
						_react2.default.createElement(
							"label",
							null,
							"Select a term"
						),
						_react2.default.createElement(_TermSelectorContainer2.default, null)
					);
				} else {

					return undefined;
				}
			}
		}, {
			key: "renderAdvice",
			value: function renderAdvice(isReady) {

				if (isReady) {
					return null;
				}
				var advice = this.props.available ? "term" : "product";
				return _react2.default.createElement(
					"p",
					{ className: "bg-info " },
					_react2.default.createElement("span", { className: "glyphicon glyphicon-info-sign", "aria-hidden": "true" }),
					" Select a ",
					advice,
					" to complete your request"
				);
			}
		}, {
			key: "renderSubmitButton",
			value: function renderSubmitButton(isReady, isDisabled) {

				var attributes = {};
				if (isDisabled) {
					attributes.disabled = "disabled";
				}
				return _react2.default.createElement("input", _extends({ type: "submit", value: "Submit", className: "btn btn-" + (isReady ? "primary" : "default") }, attributes));
			}
		}, {
			key: "renderSubmit",
			value: function renderSubmit() {
				var selected = this.props.selected;

				var isReady = !!selected;
				var isDisabled = this.state.isClient && !isReady;
				return _react2.default.createElement(
					"div",
					null,
					this.renderAdvice(isReady),
					!isDisabled && this.renderSubmitButton(isReady, isDisabled)
				);
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {

				if (typeof window !== "undefined") {

					// isomorphism control
					this.setState({ isClient: true }); //eslint-disable-line react/no-did-mount-set-state
					this.forceUpdate();
				}
			}
		}, {
			key: "render",
			value: function render() {

				return _react2.default.createElement(
					"form",
					{ method: "POST" },
					_react2.default.createElement(
						"div",
						{ className: "form-group" },
						_react2.default.createElement(
							"label",
							null,
							"Select a product"
						),
						_react2.default.createElement(_ProductSelectorContainer2.default, null)
					),
					this.renderTermSelector(),
					this.renderSubmit()
				);
			}
		}]);

		return AddQuote;
	}(Component);

	AddQuote.propTypes = {
		available: _react2.default.PropTypes.array,
		selected: _react2.default.PropTypes.object
	};

	exports.default = AddQuote;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _productSelectorContainer = __webpack_require__(11);

	var _productSelectorContainer2 = _interopRequireDefault(_productSelectorContainer);

	var _ProductSelector = __webpack_require__(13);

	var _ProductSelector2 = _interopRequireDefault(_ProductSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// build the container for our widget
	var ProductSelectorContainer = (0, _productSelectorContainer2.default)(_ProductSelector2.default);

	// export the container

	// importing the widget which this container handles
	exports.default = ProductSelectorContainer;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _reactRedux = __webpack_require__(4);

	var _reactRedux2 = _interopRequireDefault(_reactRedux);

	var _quoteActionCreators = __webpack_require__(12);

	var actionCreators = _interopRequireWildcard(_quoteActionCreators);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	// export the container

	exports.default = function (control) {
		return _reactRedux2.default.connect(mapStateToProps, mapDispatchToProps)(control);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.selectProduct = selectProduct;
	exports.selectTerm = selectTerm;
	function selectProduct(productId) {

		return { "type": "select-product", "id": productId };
	}
	function selectTerm(termId) {

		return { "type": "select-term", "id": termId };
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;
	var PropTypes = _react2.default.PropTypes;

	var ProductSelector = function (_Component) {
		_inherits(ProductSelector, _Component);

		function ProductSelector(props) {
			_classCallCheck(this, ProductSelector);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductSelector).call(this, props));

			_this.state = {};

			return _this;
		}

		_createClass(ProductSelector, [{
			key: "handleChange",
			value: function handleChange() {

				var product = this.refs.product.value;
				this.props.selectProduct(product);
			}
		}, {
			key: "renderProduct",
			value: function renderProduct(product) {

				return _react2.default.createElement(
					"option",
					{ key: product.value, value: product.value },
					product.text
				);
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				var selected = this.props.selected ? this.props.selected.value : "";
				return _react2.default.createElement(
					"select",
					{ ref: "product", name: "product", className: "form-control", value: selected, onChange: function onChange(e) {
							return _this2.handleChange(e);
						} },
					_react2.default.createElement(
						"option",
						{ value: "", disabled: true },
						"-- select a product --"
					),
					this.props.available.map(function (p) {
						return _this2.renderProduct(p);
					})
				);
			}
		}]);

		return ProductSelector;
	}(Component);

	ProductSelector.propTypes = {

		selectProduct: PropTypes.func.isRequired,
		selected: PropTypes.object,
		available: PropTypes.array

	};
	exports.default = ProductSelector;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _termSelectorContainer = __webpack_require__(15);

	var _termSelectorContainer2 = _interopRequireDefault(_termSelectorContainer);

	var _TermSelector = __webpack_require__(16);

	var _TermSelector2 = _interopRequireDefault(_TermSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// build the container for our widget
	var TermSelectorContainer = (0, _termSelectorContainer2.default)(_TermSelector2.default);

	// export the container


	// importing the widget which this container handles
	exports.default = TermSelectorContainer;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _reactRedux = __webpack_require__(4);

	var _reactRedux2 = _interopRequireDefault(_reactRedux);

	var _quoteActionCreators = __webpack_require__(12);

	var actionCreators = _interopRequireWildcard(_quoteActionCreators);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// a mapper for converting the state tree to just the part our widget requires
	var mapState = function mapState(state) {
		return state.terms || {};
	};

	// a mapper taking the dispatch method and building methods for our view compoments to call

	var mapDispatch = function mapDispatch(dispatch) {
		return {

			selectTerm: function selectTerm(id) {
				return dispatch(actionCreators.selectTerm(id));
			}

		};
	};

	// export the container factory

	exports.default = function (control) {
		return _reactRedux2.default.connect(mapState, mapDispatch)(control);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;
	var PropTypes = _react2.default.PropTypes;

	var TermSelector = function (_Component) {
		_inherits(TermSelector, _Component);

		function TermSelector(props) {
			_classCallCheck(this, TermSelector);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TermSelector).call(this, props));

			_this.state = {};

			return _this;
		}

		_createClass(TermSelector, [{
			key: "handleChange",
			value: function handleChange() {

				this.props.selectTerm(this.refs.term.value);
			}
		}, {
			key: "renderTermOption",
			value: function renderTermOption(term) {

				return _react2.default.createElement(
					"option",
					{ key: term.value, value: term.value },
					term.text
				);
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				var selected = this.props.selected ? this.props.selected.value : "";
				return _react2.default.createElement(
					"select",
					{ ref: "term", name: "term", className: "form-control", value: selected, onChange: function onChange(e) {
							return _this2.handleChange(e);
						} },
					_react2.default.createElement(
						"option",
						{ value: "", disabled: true },
						"-- select a term --"
					),
					this.props.available.map(function (term) {
						return _this2.renderTermOption(term);
					})
				);
			}
		}]);

		return TermSelector;
	}(Component);

	TermSelector.propTypes = {

		selectTerm: PropTypes.func.isRequired,
		selected: PropTypes.object,
		available: PropTypes.array

	};
	exports.default = TermSelector;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (state, action) {

		switch (action.type) {

			case "select-product":

				var selectedProduct = state.products.available.find(function (x) {
					return x.value === action.id;
				});
				return _extends({}, state, {
					products: _extends({}, state.products, {
						selected: selectedProduct

					}),
					terms: {

						available: selectedProduct ? selectedProduct.terms.slice() : undefined

					}

				});

			case "select-term":
				var selectedTerm = state.terms.available.find(function (x) {
					return x.value === action.id;
				});
				return _extends({}, state, {
					terms: _extends({}, state.terms, {
						selected: selectedTerm

					})

				});

			default:
				return state;

		}
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ShowQuote = __webpack_require__(19);

	var _ShowQuote2 = _interopRequireDefault(_ShowQuote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AddAQuote = function (_Component) {
		_inherits(AddAQuote, _Component);

		function AddAQuote() {
			_classCallCheck(this, AddAQuote);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(AddAQuote).apply(this, arguments));
		}

		_createClass(AddAQuote, [{
			key: "render",
			value: function render() {

				var quote = this.props.quote;
				if (quote) {

					quote.when = new Date(quote.when);
					return _react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(_ShowQuote2.default, { quote: quote }),
						_react2.default.createElement(
							"div",
							{ className: "well" },
							_react2.default.createElement(
								"a",
								{ href: "./" + quote.id + "/delete", className: "btn btn-danger" },
								"Delete"
							)
						)
					);
				} else {

					return _react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(
							"p",
							null,
							"Your quote could not be retrieved. Perhaps it was too good to be true?"
						)
					);
				}
			}
		}]);

		return AddAQuote;
	}(_react.Component);

	AddAQuote.propTypes = { quote: _react.PropTypes.object };
	exports.default = AddAQuote;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
		var quote = _ref.quote;
		return _react2.default.createElement(
			"table",
			{ className: "table" },
			_react2.default.createElement(
				"tbody",
				null,
				_react2.default.createElement(
					"tr",
					null,
					_react2.default.createElement(
						"th",
						{ scope: "row" },
						"Product"
					),
					_react2.default.createElement(
						"td",
						null,
						quote.product.text
					)
				),
				_react2.default.createElement(
					"tr",
					null,
					_react2.default.createElement(
						"th",
						{ scope: "row" },
						"Term"
					),
					_react2.default.createElement(
						"td",
						null,
						quote.term.text
					)
				),
				_react2.default.createElement(
					"tr",
					null,
					_react2.default.createElement(
						"th",
						{ scope: "row" },
						"Rate (p/a)"
					),
					_react2.default.createElement(
						"td",
						null,
						quote.price
					)
				),
				_react2.default.createElement(
					"tr",
					null,
					_react2.default.createElement(
						"th",
						{ scope: "row" },
						"Created"
					),
					_react2.default.createElement(
						"td",
						null,
						quote.when.toDateString()
					)
				)
			)
		);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ShowQuote = __webpack_require__(19);

	var _ShowQuote2 = _interopRequireDefault(_ShowQuote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DeleteQuote = function (_Component) {
		_inherits(DeleteQuote, _Component);

		function DeleteQuote() {
			_classCallCheck(this, DeleteQuote);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(DeleteQuote).apply(this, arguments));
		}

		_createClass(DeleteQuote, [{
			key: "render",
			value: function render() {

				var quote = this.props.quote;
				if (quote) {

					quote.when = new Date(quote.when);
					return _react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(_ShowQuote2.default, { quote: this.props.quote }),
						_react2.default.createElement(
							"form",
							{ className: "well", method: "POST" },
							_react2.default.createElement(
								"h4",
								null,
								"You are about to delete this quote. Please click to confirm."
							),
							_react2.default.createElement("input", { type: "submit", className: "btn btn-danger", value: "CONFIRM" })
						),
						_react2.default.createElement(
							"a",
							{ href: "/quotes" },
							"Your quotes"
						)
					);
				} else {

					return _react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(
							"p",
							null,
							"Your quote has been deleted."
						),
						_react2.default.createElement(
							"a",
							{ href: "/quotes" },
							"Your quotes"
						)
					);
				}
			}
		}]);

		return DeleteQuote;
	}(_react.Component);

	DeleteQuote.propTypes = { quote: _react.PropTypes.object };
	exports.default = DeleteQuote;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _QuoteList = __webpack_require__(22);

	var _QuoteList2 = _interopRequireDefault(_QuoteList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ListQuotes = function (_Component) {
		_inherits(ListQuotes, _Component);

		function ListQuotes() {
			_classCallCheck(this, ListQuotes);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ListQuotes).apply(this, arguments));
		}

		_createClass(ListQuotes, [{
			key: "render",
			value: function render() {
				var quotes = this.props.quotes;

				if (quotes && quotes.created && quotes.created.length) {

					var created = quotes.created.map(function (q) {

						return Object.assign({}, q, { href: "/quotes/retrieve/" + q.id });
					});
					return _react2.default.createElement(_QuoteList2.default, { created: created });
				} else {

					return _react2.default.createElement(
						"p",
						null,
						"You don't have any quotes yet."
					);
				}
			}
		}]);

		return ListQuotes;
	}(_react.Component);

	ListQuotes.propTypes = { quotes: _react.PropTypes.object };
	exports.default = ListQuotes;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
		var created = _ref.created;
		return _react2.default.createElement(
			"ul",
			{ className: "list-group" },
			created.map(function (q) {
				return _react2.default.createElement(
					"li",
					{ className: "list-group-item", key: q.href },
					_react2.default.createElement(
						"a",
						{ href: q.href },
						_react2.default.createElement(
							"div",
							null,
							q.when,
							": ",
							q.product.text,
							" ",
							q.term.text,
							" (£",
							q.price,
							")"
						)
					)
				);
			})
		);
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	/*eslint-env node, browser*/
	module.exports = (typeof window === "undefined" ? global : window).iaf.rating.iaf;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;