!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("chop-lines",["React"],t):"object"==typeof exports?exports["chop-lines"]=t(require("react")):e["chop-lines"]=t(e.React)}(window,function(__WEBPACK_EXTERNAL_MODULE__1__){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="dist/",o(o.s=9)}([function(e,t,o){"use strict";e.exports=o(5)},function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__1__},function(e,t,o){(function(e,t){var r,n,i,s;(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).enterModule)&&r(e),n="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=n,(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).default)&&i.register(n,"win","/Users/dwaltman/Git/chop-lines/node_modules/global/window.js"),(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).leaveModule)&&s(e)}).call(this,o(4)(e),o(7))},function(e,t,o){"use strict";(function(e){o.d(t,"c",function(){return u}),o.d(t,"a",function(){return d}),o.d(t,"b",function(){return _});var r,n=o(1);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var o,r,n=l(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function l(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).enterModule)&&r(e),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).enterModule;t&&t(e)}();var a,c,u=function(e){var t=e.lineHeight,o=e.maxHeight,r=e.overflow,l=e.children,a=s(e,["lineHeight","maxHeight","overflow","children"]);return n.createElement("div",i({},a,{style:{position:"relative",lineHeight:t,maxHeight:o,overflow:r}}),l)},d=function(e){var t=e.forwardedRef,o=e.children;return n.createElement("div",{ref:t,style:{opacity:0,pointerEvents:"none",left:0,position:"absolute",right:0,top:0,visibility:"hidden",zIndex:-1}},o)},_=function(e){var t=e.children;return n.createElement("div",{style:{bottom:0,lineHeight:"inherit",position:"absolute",right:0,userSelect:"none"}},t)};(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).default)&&(a.register(u,"Wrapper","/Users/dwaltman/Git/chop-lines/src/components.tsx"),a.register(d,"AutoSizer","/Users/dwaltman/Git/chop-lines/src/components.tsx"),a.register(_,"Ellipsis","/Users/dwaltman/Git/chop-lines/src/components.tsx")),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).leaveModule)&&c(e),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).default;e&&(e.register(i,"_extends","/Users/dwaltman/Git/chop-lines/src/components.tsx"),e.register(s,"_objectWithoutProperties","/Users/dwaltman/Git/chop-lines/src/components.tsx"),e.register(l,"_objectWithoutPropertiesLoose","/Users/dwaltman/Git/chop-lines/src/components.tsx"),e.register(u,"Wrapper","/Users/dwaltman/Git/chop-lines/src/components.tsx"),e.register(d,"AutoSizer","/Users/dwaltman/Git/chop-lines/src/components.tsx"),e.register(_,"Ellipsis","/Users/dwaltman/Git/chop-lines/src/components.tsx"))}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).leaveModule;t&&t(e)}()}).call(this,o(6)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,o){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var n,i=(n=o(1))&&"object"==r(n)&&"default"in n?n.default:n;t.AppContainer=function(e){return i.Children.only(e.children)},t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},t.configureComponent=function(){}},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,o){(function(e){var t,r,n,i;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}(t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).enterModule)&&t(e),r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":s(window))&&(r=window)}e.exports=r,(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).default)&&n.register(r,"g","/Users/dwaltman/Git/chop-lines/node_modules/webpack/buildin/global.js"),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).leaveModule)&&i(e)}).call(this,o(4)(e))},function(e,t,o){(function(e,t){var r;function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).enterModule)&&r(e);var i,s,l="Expected a function",a=NaN,c="[object Symbol]",u=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt,b="object"==(void 0===t?"undefined":n(t))&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,y=b||h||Function("return this")(),m=Object.prototype,g=m.toString,w=Math.max,O=Math.min,v=function(){return y.Date.now()};function P(e,t,o){var r,n,i,s,a,c,u=0,d=!1,_=!1,f=!0;if("function"!=typeof e)throw new TypeError(l);function p(t){var o=r,i=n;return r=n=void 0,u=t,s=e.apply(i,o)}function b(e){var o=e-c;return void 0===c||o>=t||o<0||_&&e-u>=i}function h(){var e=v();if(b(e))return y(e);a=setTimeout(h,function(e){var o=t-(e-c);return _?O(o,i-(e-u)):o}(e))}function y(e){return a=void 0,f&&r?p(e):(r=n=void 0,s)}function m(){var e=v(),o=b(e);if(r=arguments,n=this,c=e,o){if(void 0===a)return function(e){return u=e,a=setTimeout(h,t),d?p(e):s}(c);if(_)return a=setTimeout(h,t),p(c)}return void 0===a&&(a=setTimeout(h,t)),s}return t=L(t)||0,x(o)&&(d=!!o.leading,i=(_="maxWait"in o)?w(L(o.maxWait)||0,t):i,f="trailing"in o?!!o.trailing:f),m.cancel=function(){void 0!==a&&clearTimeout(a),u=0,r=c=n=a=void 0},m.flush=function(){return void 0===a?s:y(v())},m}function x(e){var t=n(e);return!!e&&("object"==t||"function"==t)}function E(e){return!!e&&"object"==n(e)}function G(e){return"symbol"==n(e)||E(e)&&g.call(e)==c}function L(e){if("number"==typeof e)return e;if(G(e))return a;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var o=_.test(e);return o||f.test(e)?p(e.slice(2),o?2:8):d.test(e)?a:+e}e.exports=P,(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).default)&&(i.register(l,"FUNC_ERROR_TEXT","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(a,"NAN","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(c,"symbolTag","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(u,"reTrim","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(d,"reIsBadHex","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(_,"reIsBinary","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(f,"reIsOctal","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(p,"freeParseInt","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(b,"freeGlobal","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(h,"freeSelf","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(y,"root","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(m,"objectProto","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(g,"objectToString","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(w,"nativeMax","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(O,"nativeMin","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(v,"now","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(P,"debounce","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(x,"isObject","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(E,"isObjectLike","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(G,"isSymbol","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js"),i.register(L,"toNumber","/Users/dwaltman/Git/chop-lines/node_modules/lodash.debounce/index.js")),(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).leaveModule)&&s(e)}).call(this,o(4)(e),o(7))},function(e,t,o){o(10),e.exports=o(11)},function(e,t,o){"use strict";e.exports=o(5)},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),global__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__),lodash_debounce__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__),_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),enterModule;function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,n=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).enterModule,enterModule&&enterModule(module),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).enterModule;e&&e(module)}();var ChopLines=function(_Component){function ChopLines(){var e,t;_classCallCheck(this,ChopLines);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return _defineProperty(_assertThisInitialized(_assertThisInitialized(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(ChopLines)).call.apply(e,[this].concat(r))))),"autoSizer",void 0),_defineProperty(_assertThisInitialized(_assertThisInitialized(t)),"state",{height:0}),_defineProperty(_assertThisInitialized(_assertThisInitialized(t)),"onResize",lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function(){global__WEBPACK_IMPORTED_MODULE_1___default.a.requestAnimationFrame(t.measureAutoSizer)},50)),_defineProperty(_assertThisInitialized(_assertThisInitialized(t)),"setAutoSizerRef",function(e){t.autoSizer=e}),_defineProperty(_assertThisInitialized(_assertThisInitialized(t)),"measureAutoSizer",function(){if(t.autoSizer){var e=t.autoSizer.getBoundingClientRect().height;e!==t.state.height&&t.setState({height:e})}}),t}return _inherits(ChopLines,_Component),_createClass(ChopLines,[{key:"componentDidMount",value:function(){this.measureAutoSizer(),global__WEBPACK_IMPORTED_MODULE_1___default.a.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){global__WEBPACK_IMPORTED_MODULE_1___default.a.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){var e=this.props,t=e.lines,o=e.lineHeight,r=e.children,n=e.ellipsis,i=void 0===n?"…":n,s=_objectWithoutProperties(e,["lines","lineHeight","children","ellipsis"]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__.c,_extends({},s,{lineHeight:"".concat(o,"px"),maxHeight:this.doesOverflow?"".concat(o*t,"px"):"auto",overflow:this.doesOverflow?"hidden":"auto"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__.a,{forwardedRef:this.setAutoSizerRef,"aria-hidden":!0},r),r,this.doesOverflow&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__.b,null,i))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}},{key:"doesOverflow",get:function(){var e=this.props,t=e.lineHeight,o=e.lines;return this.state.height>t*o}}]),ChopLines}(react__WEBPACK_IMPORTED_MODULE_0__.Component),_default=ChopLines,_default2=_default,reactHotLoader,leaveModule;__webpack_exports__.default=_default2,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).default,reactHotLoader&&(reactHotLoader.register(ChopLines,"ChopLines","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),reactHotLoader.register(_default,"default","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).leaveModule,leaveModule&&leaveModule(module),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).default;e&&(e.register(_typeof,"_typeof","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(_extends,"_extends","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(_objectWithoutProperties,"_objectWithoutProperties","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(_objectWithoutPropertiesLoose,"_objectWithoutPropertiesLoose","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(_classCallCheck,"_classCallCheck","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(_defineProperties,"_defineProperties","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(_createClass,"_createClass","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(_possibleConstructorReturn,"_possibleConstructorReturn","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(_getPrototypeOf,"_getPrototypeOf","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(_inherits,"_inherits","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(_setPrototypeOf,"_setPrototypeOf","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(_assertThisInitialized,"_assertThisInitialized","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(_defineProperty,"_defineProperty","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(ChopLines,"ChopLines","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(_default,"_default","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"),e.register(_default2,"default","/Users/dwaltman/Git/chop-lines/src/chop-lines.tsx"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).leaveModule;e&&e(module)}()}.call(this,__webpack_require__(6)(module))}])});