var stickyWidgetLib =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(28)('wks')
  , uid        = __webpack_require__(18)
  , Symbol     = __webpack_require__(2).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(9)
  , IE8_DOM_DEFINE = __webpack_require__(38)
  , toPrimitive    = __webpack_require__(20)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(1)
  , createDesc = __webpack_require__(13);
module.exports = __webpack_require__(3) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(42)
  , defined = __webpack_require__(15);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(4)
  , ctx       = __webpack_require__(11)
  , hide      = __webpack_require__(5)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(64);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(41)
  , enumBugKeys = __webpack_require__(29);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(1).f
  , has = __webpack_require__(6)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(70)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(23)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(24)
  , $export        = __webpack_require__(8)
  , redefine       = __webpack_require__(40)
  , hide           = __webpack_require__(5)
  , has            = __webpack_require__(6)
  , Iterators      = __webpack_require__(14)
  , $iterCreate    = __webpack_require__(71)
  , setToStringTag = __webpack_require__(19)
  , getPrototypeOf = __webpack_require__(76)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(9)
  , dPs         = __webpack_require__(72)
  , enumBugKeys = __webpack_require__(29)
  , IE_PROTO    = __webpack_require__(27)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(39)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(75).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys')
  , uid    = __webpack_require__(18);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(18)('meta')
  , isObject = __webpack_require__(10)
  , has      = __webpack_require__(6)
  , setDesc  = __webpack_require__(1).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(12)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(2)
  , core           = __webpack_require__(4)
  , LIBRARY        = __webpack_require__(24)
  , wksExt         = __webpack_require__(31)
  , defineProperty = __webpack_require__(1).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(11)
  , call        = __webpack_require__(51)
  , isArrayIter = __webpack_require__(52)
  , anObject    = __webpack_require__(9)
  , toLength    = __webpack_require__(17)
  , getIterFn   = __webpack_require__(53)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(61);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(12)(function(){
  return Object.defineProperty(__webpack_require__(39)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(6)
  , toIObject    = __webpack_require__(7)
  , arrayIndexOf = __webpack_require__(73)(false)
  , IE_PROTO     = __webpack_require__(27)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(26);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
var global        = __webpack_require__(2)
  , hide          = __webpack_require__(5)
  , Iterators     = __webpack_require__(14)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(26);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(41)
  , hiddenKeys = __webpack_require__(29).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(5);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(9);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(14)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(54)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(14);
module.exports = __webpack_require__(4).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(26)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(57);
__webpack_require__(58);
module.exports = __webpack_require__(59);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Источник: https://gist.github.com/k-gun/c2ea7c49edf7b757fe9561ba37cb19ca
;(function () {
    // helpers
    var regExp = function regExp(name) {
        return new RegExp('(^| )' + name + '( |$)');
    };
    var forEach = function forEach(list, fn, scope) {
        for (var i = 0; i < list.length; i++) {
            fn.call(scope, list[i]);
        }
    };

    // class list object with basic methods
    function ClassList(element) {
        this.element = element;
    }

    ClassList.prototype = {
        add: function add() {
            forEach(arguments, function (name) {
                if (!this.contains(name)) {
                    this.element.className += ' ' + name;
                }
            }, this);
        },
        remove: function remove() {
            forEach(arguments, function (name) {
                this.element.className = this.element.className.replace(regExp(name), '');
            }, this);
        },
        toggle: function toggle(name) {
            return this.contains(name) ? (this.remove(name), false) : (this.add(name), true);
        },
        contains: function contains(name) {
            return regExp(name).test(this.element.className);
        },
        // bonus..
        replace: function replace(oldName, newName) {
            this.remove(oldName), this.add(newName);
        }
    };

    // IE8/9, Safari
    if (!('classList' in Element.prototype)) {
        Object.defineProperty(Element.prototype, 'classList', {
            get: function get() {
                return new ClassList(this);
            }
        });
    }

    // replace() support for others
    if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
        DOMTokenList.prototype.replace = ClassList.prototype.replace;
    }
})();

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';

        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        var k;
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = +fromIndex || 0;
        if (Math.abs(n) === Infinity) {
            n = 0;
        }
        if (n >= len) {
            return -1;
        }
        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        while (k < len) {
            var kValue;
            if (k in O && O[k] === searchElement) {
                return k;
            }
            k++;
        }
        return -1;
    };
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImageInformerCreator = exports.ArticleExtractor = undefined;

var _ArticleExtractor = __webpack_require__(60);

var _ArticleExtractor2 = _interopRequireDefault(_ArticleExtractor);

var _ImageInformerCreator = __webpack_require__(105);

var _ImageInformerCreator2 = _interopRequireDefault(_ImageInformerCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ArticleExtractor = _ArticleExtractor2.default;
exports.ImageInformerCreator = _ImageInformerCreator2.default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(36);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(37);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Readability = __webpack_require__(65);

var _Readability2 = _interopRequireDefault(_Readability);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleExtractor = function () {
    function ArticleExtractor() {
        (0, _classCallCheck3.default)(this, ArticleExtractor);
    }

    (0, _createClass3.default)(ArticleExtractor, [{
        key: '_getArticleParent',
        value: function _getArticleParent(node) {

            // try to find article body by id
            if (node['id']) {

                var nodeInDom = document.getElementById(node['id']);
                return nodeInDom ? nodeInDom.parentNode : null;

                // try to find article body by css class
            } else if (node.classList && node.classList.length) {

                var classes = [];
                [].forEach.call(node.classList, function (className) {
                    return classes.push(className);
                });

                var articleNodes = document.getElementsByClassName(classes.join(' '));

                return articleNodes.length && typeof articleNodes[0] != 'undefined' ? articleNodes[0].parentNode : null;
            } else {

                return node.parentNode ? this._extractArticle(node.parentNode) : null;
            }
        }
    }, {
        key: '_extractArticle',
        value: function _extractArticle(node, _firstCall, _collectionLength) {
            var _this = this;

            var firstCall = _firstCall || false;
            var collectionLength = _collectionLength || 0;

            if (node[0] && firstCall && collectionLength === 1) {
                var fn = node[0];
                if (fn['id']) {
                    return document.getElementById(fn['id']);

                    // try to find article body by css class
                } else if (fn.classList && fn.classList.length) {

                    var classes = [];
                    [].forEach.call(fn.classList, function (className) {
                        return classes.push(className);
                    });

                    return document.querySelector(fn.tagName + '.' + classes.join('.')).parentNode;
                } else {
                    console.warn('SmartInformerCreator._extractArticle: ' + 'Cant select element from read DOM by using node -' + fn.tagName);
                    return null;
                }
            }

            var result = null;

            if (node && node.length) {

                // article consists of  more than one element
                [].forEach.call(node, function (element) {
                    return result = _this._getArticleParent(element, true);
                });
            } else {
                result = this._getArticleParent(node);
            }

            return result;
        }

        /**
         * If Readability.js return article with some structure.
         * If the structure is correct - SmartInformerCreator
         * will find correct place to paste informer to.
         * Otherwise, you can adjust article extraction in method below
         * or in method _extractArticle
         *
         * @returns {*}
         * @private
         */

    }, {
        key: '_handleSpecialCases',
        value: function _handleSpecialCases() {

            // found but not wat expected
            if (this.article && this.article.parentNode && this.article.parentNode.children[0] && this.article.parentNode.children[0].tagName === 'HEADER') {
                this.article = this.article.parentNode;
                return;
            }

            if (this.article && this.article.classList.contains('shortcode-content')) {
                this.article = this.article.parentNode;
                return;
            }

            if (this.article && this.article.id === 'wrap' && this.article.children[0].id === 'content') {
                this.article = this.article.children[0];
                return;
            }

            var logo = document.querySelector('a.logo.custom-logo-18');
            if (logo) {
                this.article = document.getElementsByClassName('content_text')[0];
                return;
            }

            logo = document.querySelector('div#page-wrap > center>img');
            if (logo) {
                this.article = document.getElementsByClassName('detail-left-side')[0];
                return;
            }

            if (this.article) {
                var articleInStructure = this.article.querySelector('div.td-pb-row > div.td-pb-span8.td-main-content > div.td-ss-main-content > this.article');

                if (articleInStructure) {
                    this.article = articleInStructure;
                    return;
                }
            }

            if (this.article && this.article.classList.contains('post-body') && this.article.classList.contains('entry-content')) {
                this.article = this.article.parentNode;
                return;
            }

            if (this.articleParsed && this.articleParsed.rootElements && this.articleParsed.rootElements.length) {
                [].forEach.call(this.articleParsed.rootElements, function (e) {
                    if (e.tagName === 'article') {
                        this.article = document.querySelector(e.tagName);
                    } else {
                        console.info('SmartInformerCreator._parseself.article: Cant parse self.article. ' + 'You should add this new condition to the code');
                    }
                });
            }

            if (this.article && this.article.tagName === 'ARTICLE' && this.article.id.search('post-') != -1 && this.article.classList.contains('status-publish')) {
                var main = document.querySelector('main#site-content.site-main');
                if (main) {
                    this.article = main;
                    return;
                }
            }

            // not found

            if (!this.article) {
                if (document.querySelector('div.entry-content')) {
                    this.article = document.querySelector('div.entry-content');
                    return;
                }
            }

            if (this.article) {
                return;
            }

            console.error('SmartInformerCreator._handleSpecialCases: article In DOM not recognized');
        }

        /**
         * Parse article
         *
         * @returns {Node|*|Element|null}
         */

    }, {
        key: 'parseArticle',
        value: function parseArticle() {

            // Readability's parse() works by modifying the DOM.
            // This removes some elements in the web page.
            // You could avoid this by passing the clone of the
            // document object while creating a Readability object.
            var loc = document.location;

            /**
             * Parse and get copy of the article from real DOM
             *
             * @type {object} articleParsed - copy of the article from real DOM
             */
            this.articleParsed = new _Readability2.default({
                spec: loc.href,
                host: loc.host,
                prePath: loc.protocol + "//" + loc.host,
                scheme: loc.protocol.substr(0, loc.protocol.indexOf(":")),
                pathBase: loc.protocol + "//" + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf("/") + 1)
            }, document.cloneNode(true)).parse();

            if (this.articleParsed) {
                this.article = this._extractArticle(this.articleParsed.rootElements, true, this.articleParsed.rootElements.length);
            } else {
                this.article = null;
            }

            this._handleSpecialCases();

            return this.article;
        }
    }]);
    return ArticleExtractor;
}();

exports.default = ArticleExtractor;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperty: __webpack_require__(1).f});

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(67);

var _typeof3 = _interopRequireDefault(_typeof2);

var _set = __webpack_require__(88);

var _set2 = _interopRequireDefault(_set);

var _from = __webpack_require__(100);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-env es6:false*/
/*
 * Copyright (c) 2010 Arc90 Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * This code is heavily based on Arc90's readability.js (1.7.1) script
 * available at: http://code.google.com/p/arc90labs-readability
 */

/**
 * Public constructor.
 * @param {Object}       uri     The URI descriptor object.
 * @param {HTMLDocument} doc     The document to parse.
 * @param {Object}       options The options object.
 */
function Readability(uri, doc, options) {
    options = options || {};

    this._uri = uri;
    this._doc = doc;
    this._biggestFrame = false;
    this._articleTitle = null;
    this._articleByline = null;
    this._articleDir = null;

    // Configureable options
    this._debug = !!options.debug;
    this._maxElemsToParse = options.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE;
    this._nbTopCandidates = options.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES;
    this._maxPages = options.maxPages || this.DEFAULT_MAX_PAGES;

    // Start with all flags set
    this._flags = this.FLAG_STRIP_UNLIKELYS | this.FLAG_WEIGHT_CLASSES | this.FLAG_CLEAN_CONDITIONALLY;

    // The list of pages we've parsed in this call of readability,
    // for autopaging. As a key store for easier searching.
    this._parsedPages = {};

    // A list of the ETag headers of pages we've parsed, in case they happen to match,
    // we'll know it's a duplicate.
    this._pageETags = {};

    // Make an AJAX request for each page and append it to the document.
    this._curPageNum = 1;

    var logEl;

    // Control whether log messages are sent to the console
    if (this._debug) {
        logEl = function logEl(e) {
            var rv = e.nodeName + " ";
            if (e.nodeType == e.TEXT_NODE) {
                return rv + '("' + e.textContent + '")';
            }
            var classDesc = e.className && "." + e.className.replace(/ /g, ".");
            var elDesc = "";
            if (e.id) elDesc = "(#" + e.id + classDesc + ")";else if (classDesc) elDesc = "(" + classDesc + ")";
            return rv + elDesc;
        };
        this.log = function () {
            if (typeof dump !== "undefined") {
                var msg = Array.prototype.map.call(arguments, function (x) {
                    return x && x.nodeName ? logEl(x) : x;
                }).join(" ");
                dump("Reader: (Readability) " + msg + "\n");
            } else if (typeof console !== "undefined") {
                var args = ["Reader: (Readability) "].concat(arguments);
                console.log.apply(console, args);
            }
        };
    } else {
        this.log = function () {};
    }
}

Readability.prototype = {
    FLAG_STRIP_UNLIKELYS: 0x1,
    FLAG_WEIGHT_CLASSES: 0x2,
    FLAG_CLEAN_CONDITIONALLY: 0x4,

    // Max number of nodes supported by this parser. Default: 0 (no limit)
    DEFAULT_MAX_ELEMS_TO_PARSE: 0,

    // The number of top candidates to consider when analysing how
    // tight the competition is among candidates.
    DEFAULT_N_TOP_CANDIDATES: 5,

    // The maximum number of pages to loop through before we call
    // it quits and just show a link.
    DEFAULT_MAX_PAGES: 5,

    // Element tags to score by default.
    DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),

    // All of the regular expressions in use within readability.
    // Defined up here so we don't instantiate them repeatedly in loops.
    REGEXPS: {
        unlikelyCandidates: /banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|foot|header|legends|menu|modal|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
        okMaybeItsACandidate: /and|article|body|column|main|shadow/i,
        positive: /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
        negative: /hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|masthead|media|meta|modal|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,
        extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
        byline: /byline|author|dateline|writtenby|p-author/i,
        replaceFonts: /<(\/?)font[^>]*>/gi,
        normalize: /\s{2,}/g,
        videos: /\/\/(www\.)?(dailymotion|youtube|youtube-nocookie|player\.vimeo)\.com/i,
        nextLink: /(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,
        prevLink: /(prev|earl|old|new|<|«)/i,
        whitespace: /^\s*$/,
        hasContent: /\S$/
    },

    DIV_TO_P_ELEMS: ["A", "BLOCKQUOTE", "DL", "DIV", "IMG", "OL", "P", "PRE", "TABLE", "UL", "SELECT"],

    ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P"],

    /**
     * Run any post-process modifications to article content as necessary.
     *
     * @param Element
     * @return void
     **/
    _postProcessContent: function _postProcessContent(articleContent) {
        // Readability cannot open relative uris so we convert them to absolute uris.
        this._fixRelativeUris(articleContent);
    },

    /**
     * Iterates over a NodeList, calls `filterFn` for each node and removes node
     * if function returned `true`.
     *
     * If function is not passed, removes all the nodes in node list.
     *
     * @param NodeList nodeList The nodes to operate on
     * @param Function filterFn the function to use as a filter
     * @return void
     */
    _removeNodes: function _removeNodes(nodeList, filterFn) {
        for (var i = nodeList.length - 1; i >= 0; i--) {
            var node = nodeList[i];
            var parentNode = node.parentNode;
            if (parentNode) {
                if (!filterFn || filterFn.call(this, node, i, nodeList)) {
                    parentNode.removeChild(node);
                }
            }
        }
    },

    /**
     * Iterates over a NodeList, and calls _setNodeTag for each node.
     *
     * @param NodeList nodeList The nodes to operate on
     * @param String newTagName the new tag name to use
     * @return void
     */
    _replaceNodeTags: function _replaceNodeTags(nodeList, newTagName) {
        for (var i = nodeList.length - 1; i >= 0; i--) {
            var node = nodeList[i];
            this._setNodeTag(node, newTagName);
        }
    },

    /**
     * Iterate over a NodeList, which doesn't natively fully implement the Array
     * interface.
     *
     * For convenience, the current object context is applied to the provided
     * iterate function.
     *
     * @param  NodeList nodeList The NodeList.
     * @param  Function fn       The iterate function.
     * @return void
     */
    _forEachNode: function _forEachNode(nodeList, fn) {
        Array.prototype.forEach.call(nodeList, fn, this);
    },

    /**
     * Iterate over a NodeList, return true if any of the provided iterate
     * function calls returns true, false otherwise.
     *
     * For convenience, the current object context is applied to the
     * provided iterate function.
     *
     * @param  NodeList nodeList The NodeList.
     * @param  Function fn       The iterate function.
     * @return Boolean
     */
    _someNode: function _someNode(nodeList, fn) {
        return Array.prototype.some.call(nodeList, fn, this);
    },

    /**
     * Concat all nodelists passed as arguments.
     *
     * @return ...NodeList
     * @return Array
     */
    _concatNodeLists: function _concatNodeLists() {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments);
        var nodeLists = args.map(function (list) {
            return slice.call(list);
        });
        return Array.prototype.concat.apply([], nodeLists);
    },

    _getAllNodesWithTag: function _getAllNodesWithTag(node, tagNames) {
        if (node.querySelectorAll) {
            return node.querySelectorAll(tagNames.join(','));
        }
        return [].concat.apply([], tagNames.map(function (tag) {
            var collection = node.getElementsByTagName(tag);
            return Array.isArray(collection) ? collection : (0, _from2.default)(collection);
        }));
    },

    /**
     * Converts each <a> and <img> uri in the given element to an absolute URI,
     * ignoring #ref URIs.
     *
     * @param Element
     * @return void
     */
    _fixRelativeUris: function _fixRelativeUris(articleContent) {
        var scheme = this._uri.scheme;
        var prePath = this._uri.prePath;
        var pathBase = this._uri.pathBase;

        function toAbsoluteURI(uri) {
            // If this is already an absolute URI, return it.
            if (/^[a-zA-Z][a-zA-Z0-9\+\-\.]*:/.test(uri)) return uri;

            // Scheme-rooted relative URI.
            if (uri.substr(0, 2) == "//") return scheme + "://" + uri.substr(2);

            // Prepath-rooted relative URI.
            if (uri[0] == "/") return prePath + uri;

            // Dotslash relative URI.
            if (uri.indexOf("./") === 0) return pathBase + uri.slice(2);

            // Ignore hash URIs:
            if (uri[0] == "#") return uri;

            // Standard relative URI; add entire path. pathBase already includes a
            // trailing "/".
            return pathBase + uri;
        }

        var links = articleContent.getElementsByTagName("a");
        this._forEachNode(links, function (link) {
            var href = link.getAttribute("href");
            if (href) {
                // Replace links with javascript: URIs with text content, since
                // they won't work after scripts have been removed from the page.
                if (href.indexOf("javascript:") === 0) {
                    var text = this._doc.createTextNode(link.textContent);
                    link.parentNode.replaceChild(text, link);
                } else {
                    link.setAttribute("href", toAbsoluteURI(href));
                }
            }
        });

        var imgs = articleContent.getElementsByTagName("img");
        this._forEachNode(imgs, function (img) {
            var src = img.getAttribute("src");
            if (src) {
                img.setAttribute("src", toAbsoluteURI(src));
            }
        });
    },

    /**
     * Get the article title as an H1.
     *
     * @return void
     **/
    _getArticleTitle: function _getArticleTitle() {
        var doc = this._doc;
        var curTitle = "";
        var origTitle = "";

        try {
            curTitle = origTitle = doc.title;

            // If they had an element with id "title" in their HTML
            if (typeof curTitle !== "string") curTitle = origTitle = this._getInnerText(doc.getElementsByTagName('title')[0]);
        } catch (e) {/* ignore exceptions setting the title. */
        }

        var titleHadHierarchicalSeparators = false;

        function wordCount(str) {
            return str.split(/\s+/).length;
        }

        // If there's a separator in the title, first remove the final part
        if (/ [\|\-\\\/>»] /.test(curTitle)) {
            titleHadHierarchicalSeparators = / [\\\/>»] /.test(curTitle);
            curTitle = origTitle.replace(/(.*)[\|\-\\\/>»] .*/gi, '$1');

            // If the resulting title is too short (3 words or fewer), remove
            // the first part instead:
            if (wordCount(curTitle) < 3) curTitle = origTitle.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi, '$1');
        } else if (curTitle.indexOf(': ') !== -1) {
            // Check if we have an heading containing this exact string, so we
            // could assume it's the full title.
            var headings = this._concatNodeLists(doc.getElementsByTagName('h1'), doc.getElementsByTagName('h2'));
            var match = this._someNode(headings, function (heading) {
                return heading.textContent === curTitle;
            });

            // If we don't, let's extract the title out of the original title string.
            if (!match) {
                curTitle = origTitle.substring(origTitle.lastIndexOf(':') + 1);

                // If the title is now too short, try the first colon instead:
                if (wordCount(curTitle) < 3) curTitle = origTitle.substring(origTitle.indexOf(':') + 1);
            }
        } else if (curTitle.length > 150 || curTitle.length < 15) {
            var hOnes = doc.getElementsByTagName('h1');

            if (hOnes.length === 1) curTitle = this._getInnerText(hOnes[0]);
        }

        curTitle = curTitle.trim();
        // If we now have 4 words or fewer as our title, and either no
        // 'hierarchical' separators (\, /, > or ») were found in the original
        // title or we decreased the number of words by more than 1 word, use
        // the original title.
        var curTitleWordCount = wordCount(curTitle);
        if (curTitleWordCount <= 4 && (!titleHadHierarchicalSeparators || curTitleWordCount != wordCount(origTitle.replace(/[\|\-\\\/>»]+/g, "")) - 1)) {
            curTitle = origTitle;
        }

        return curTitle;
    },

    /**
     * Prepare the HTML document for readability to scrape it.
     * This includes things like stripping javascript, CSS, and handling terrible markup.
     *
     * @return void
     **/
    _prepDocument: function _prepDocument() {
        var doc = this._doc;

        // Remove all style tags in head
        this._removeNodes(doc.getElementsByTagName("style"));

        if (doc.body) {
            this._replaceBrs(doc.body);
        }

        this._replaceNodeTags(doc.getElementsByTagName("font"), "SPAN");
    },

    /**
     * Finds the next element, starting from the given node, and ignoring
     * whitespace in between. If the given node is an element, the same node is
     * returned.
     */
    _nextElement: function _nextElement(node) {
        var next = node;
        while (next && next.nodeType != Node.ELEMENT_NODE && this.REGEXPS.whitespace.test(next.textContent)) {
            next = next.nextSibling;
        }
        return next;
    },

    /**
     * Replaces 2 or more successive <br> elements with a single <p>.
     * Whitespace between <br> elements are ignored. For example:
     *   <div>foo<br>bar<br> <br><br>abc</div>
     * will become:
     *   <div>foo<br>bar<p>abc</p></div>
     */
    _replaceBrs: function _replaceBrs(elem) {
        this._forEachNode(this._getAllNodesWithTag(elem, ["br"]), function (br) {
            var next = br.nextSibling;

            // Whether 2 or more <br> elements have been found and replaced with a
            // <p> block.
            var replaced = false;

            // If we find a <br> chain, remove the <br>s until we hit another element
            // or non-whitespace. This leaves behind the first <br> in the chain
            // (which will be replaced with a <p> later).
            while ((next = this._nextElement(next)) && next.tagName == "BR") {
                replaced = true;
                var brSibling = next.nextSibling;
                next.parentNode.removeChild(next);
                next = brSibling;
            }

            // If we removed a <br> chain, replace the remaining <br> with a <p>. Add
            // all sibling nodes as children of the <p> until we hit another <br>
            // chain.
            if (replaced) {
                var p = this._doc.createElement("p");
                br.parentNode.replaceChild(p, br);

                next = p.nextSibling;
                while (next) {
                    // If we've hit another <br><br>, we're done adding children to this <p>.
                    if (next.tagName == "BR") {
                        var nextElem = this._nextElement(next);
                        if (nextElem && nextElem.tagName == "BR") break;
                    }

                    // Otherwise, make this node a child of the new <p>.
                    var sibling = next.nextSibling;
                    p.appendChild(next);
                    next = sibling;
                }
            }
        });
    },

    _setNodeTag: function _setNodeTag(node, tag) {
        this.log("_setNodeTag", node, tag);
        if (node.__JSDOMParser__) {
            node.localName = tag.toLowerCase();
            node.tagName = tag.toUpperCase();
            return node;
        }

        var replacement = node.ownerDocument.createElement(tag);
        while (node.firstChild) {
            replacement.appendChild(node.firstChild);
        }
        node.parentNode.replaceChild(replacement, node);
        if (node.readability) replacement.readability = node.readability;

        for (var i = 0; i < node.attributes.length; i++) {
            replacement.setAttribute(node.attributes[i].name, node.attributes[i].value);
        }
        return replacement;
    },

    /**
     * Prepare the article node for display. Clean out any inline styles,
     * iframes, forms, strip extraneous <p> tags, etc.
     *
     * @param Element
     * @return void
     **/
    _prepArticle: function _prepArticle(articleContent) {
        this._cleanStyles(articleContent);

        // Check for data tables before we continue, to avoid removing items in
        // those tables, which will often be isolated even though they're
        // visually linked to other content-ful elements (text, images, etc.).
        this._markDataTables(articleContent);

        // Clean out junk from the article content
        this._cleanConditionally(articleContent, "form");
        this._cleanConditionally(articleContent, "fieldset");
        this._clean(articleContent, "object");
        this._clean(articleContent, "embed");
        this._clean(articleContent, "h1");
        this._clean(articleContent, "footer");

        // Clean out elements have "share" in their id/class combinations from final top candidates,
        // which means we don't remove the top candidates even they have "share".
        this._forEachNode(articleContent.children, function (topCandidate) {
            this._cleanMatchedNodes(topCandidate, /share/);
        });

        // If there is only one h2 and its text content substantially equals article title,
        // they are probably using it as a header and not a subheader,
        // so remove it since we already extract the title separately.
        var h2 = articleContent.getElementsByTagName('h2');
        if (h2.length === 1) {
            var lengthSimilarRate = (h2[0].textContent.length - this._articleTitle.length) / this._articleTitle.length;
            if (Math.abs(lengthSimilarRate) < 0.5) {
                var titlesMatch = false;
                if (lengthSimilarRate > 0) {
                    titlesMatch = h2[0].textContent.includes(this._articleTitle);
                } else {
                    titlesMatch = this._articleTitle.includes(h2[0].textContent);
                }
                if (titlesMatch) {
                    this._clean(articleContent, "h2");
                }
            }
        }

        this._clean(articleContent, "iframe");
        this._clean(articleContent, "input");
        this._clean(articleContent, "textarea");
        this._clean(articleContent, "select");
        this._clean(articleContent, "button");
        this._cleanHeaders(articleContent);

        // Do these last as the previous stuff may have removed junk
        // that will affect these
        this._cleanConditionally(articleContent, "table");
        this._cleanConditionally(articleContent, "ul");
        this._cleanConditionally(articleContent, "div");

        // Remove extra paragraphs
        this._removeNodes(articleContent.getElementsByTagName('p'), function (paragraph) {
            var imgCount = paragraph.getElementsByTagName('img').length;
            var embedCount = paragraph.getElementsByTagName('embed').length;
            var objectCount = paragraph.getElementsByTagName('object').length;
            // At this point, nasty iframes have been removed, only remain embedded video ones.
            var iframeCount = paragraph.getElementsByTagName('iframe').length;
            var totalCount = imgCount + embedCount + objectCount + iframeCount;

            return totalCount === 0 && !this._getInnerText(paragraph, false);
        });

        this._forEachNode(this._getAllNodesWithTag(articleContent, ["br"]), function (br) {
            var next = this._nextElement(br.nextSibling);
            if (next && next.tagName == "P") br.parentNode.removeChild(br);
        });
    },

    /**
     * Initialize a node with the readability object. Also checks the
     * className/id for special names to add to its score.
     *
     * @param Element
     * @return void
     **/
    _initializeNode: function _initializeNode(node) {
        node.readability = { "contentScore": 0 };

        switch (node.tagName) {
            case 'DIV':
                node.readability.contentScore += 5;
                break;

            case 'PRE':
            case 'TD':
            case 'BLOCKQUOTE':
                node.readability.contentScore += 3;
                break;

            case 'ADDRESS':
            case 'OL':
            case 'UL':
            case 'DL':
            case 'DD':
            case 'DT':
            case 'LI':
            case 'FORM':
                node.readability.contentScore -= 3;
                break;

            case 'H1':
            case 'H2':
            case 'H3':
            case 'H4':
            case 'H5':
            case 'H6':
            case 'TH':
                node.readability.contentScore -= 5;
                break;
        }

        node.readability.contentScore += this._getClassWeight(node);
    },

    _removeAndGetNext: function _removeAndGetNext(node) {
        var nextNode = this._getNextNode(node, true);
        node.parentNode.removeChild(node);
        return nextNode;
    },

    /**
     * Traverse the DOM from node to node, starting at the node passed in.
     * Pass true for the second parameter to indicate this node itself
     * (and its kids) are going away, and we want the next node over.
     *
     * Calling this in a loop will traverse the DOM depth-first.
     */
    _getNextNode: function _getNextNode(node, ignoreSelfAndKids) {
        // First check for kids if those aren't being ignored
        if (!ignoreSelfAndKids && node.firstElementChild) {
            return node.firstElementChild;
        }
        // Then for siblings...
        if (node.nextElementSibling) {
            return node.nextElementSibling;
        }
        // And finally, move up the parent chain *and* find a sibling
        // (because this is depth-first traversal, we will have already
        // seen the parent nodes themselves).
        do {
            node = node.parentNode;
        } while (node && !node.nextElementSibling);
        return node && node.nextElementSibling;
    },

    /**
     * Like _getNextNode, but for DOM implementations with no
     * firstElementChild/nextElementSibling functionality...
     */
    _getNextNodeNoElementProperties: function _getNextNodeNoElementProperties(node, ignoreSelfAndKids) {
        function nextSiblingEl(n) {
            do {
                n = n.nextSibling;
            } while (n && n.nodeType !== n.ELEMENT_NODE);
            return n;
        }

        // First check for kids if those aren't being ignored
        if (!ignoreSelfAndKids && node.children[0]) {
            return node.children[0];
        }
        // Then for siblings...
        var next = nextSiblingEl(node);
        if (next) {
            return next;
        }
        // And finally, move up the parent chain *and* find a sibling
        // (because this is depth-first traversal, we will have already
        // seen the parent nodes themselves).
        do {
            node = node.parentNode;
            if (node) next = nextSiblingEl(node);
        } while (node && !next);
        return node && next;
    },

    _checkByline: function _checkByline(node, matchString) {
        if (this._articleByline) {
            return false;
        }

        if (node.getAttribute !== undefined) {
            var rel = node.getAttribute("rel");
        }

        if ((rel === "author" || this.REGEXPS.byline.test(matchString)) && this._isValidByline(node.textContent)) {
            this._articleByline = node.textContent.trim();
            return true;
        }

        return false;
    },

    _getNodeAncestors: function _getNodeAncestors(node, maxDepth) {
        maxDepth = maxDepth || 0;
        var i = 0,
            ancestors = [];
        while (node.parentNode) {
            ancestors.push(node.parentNode);
            if (maxDepth && ++i === maxDepth) break;
            node = node.parentNode;
        }
        return ancestors;
    },

    /***
     * grabArticle - Using a variety of metrics (content score, classname, element types),
     * find the content that is most likely to be the stuff a user wants to read.
     * Then return it wrapped up in a div.
     *
     * @param page a document to run upon. Needs to be a full document, complete with body.
     * @return Element
     **/
    _grabArticle: function _grabArticle(page) {
        this.log("**** grabArticle ****");
        var doc = this._doc;
        var isPaging = page !== null ? true : false;
        page = page ? page : this._doc.body;

        // We can't grab an article if we don't have a page!
        if (!page) {
            this.log("No body found in document. Abort.");
            return null;
        }

        var pageCacheHtml = page.innerHTML;

        while (true) {
            var stripUnlikelyCandidates = this._flagIsActive(this.FLAG_STRIP_UNLIKELYS);

            // First, node prepping. Trash nodes that look cruddy (like ones with the
            // class name "comment", etc), and turn divs into P tags where they have been
            // used inappropriately (as in, where they contain no other block level elements.)
            var elementsToScore = [];
            var node = this._doc.documentElement;

            while (node) {
                var matchString = node.className + " " + node.id;

                // Check to see if this node is a byline, and remove it if it is.
                if (this._checkByline(node, matchString)) {
                    node = this._removeAndGetNext(node);
                    continue;
                }

                // Remove unlikely candidates
                if (stripUnlikelyCandidates) {
                    if (this.REGEXPS.unlikelyCandidates.test(matchString) && !this.REGEXPS.okMaybeItsACandidate.test(matchString) && node.tagName !== "BODY" && node.tagName !== "A") {
                        this.log("Removing unlikely candidate - " + matchString);
                        node = this._removeAndGetNext(node);
                        continue;
                    }
                }

                // Remove DIV, SECTION, and HEADER nodes without any content(e.g. text, image, video, or iframe).
                if ((node.tagName === "DIV" || node.tagName === "SECTION" || node.tagName === "HEADER" || node.tagName === "H1" || node.tagName === "H2" || node.tagName === "H3" || node.tagName === "H4" || node.tagName === "H5" || node.tagName === "H6") && this._isElementWithoutContent(node)) {
                    node = this._removeAndGetNext(node);
                    continue;
                }

                if (this.DEFAULT_TAGS_TO_SCORE.indexOf(node.tagName) !== -1) {
                    elementsToScore.push(node);
                }

                // Turn all divs that don't have children block level elements into p's
                if (node.tagName === "DIV") {
                    // Sites like http://mobile.slate.com encloses each paragraph with a DIV
                    // element. DIVs with only a P element inside and no text content can be
                    // safely converted into plain P elements to avoid confusing the scoring
                    // algorithm with DIVs with are, in practice, paragraphs.
                    if (this._hasSinglePInsideElement(node)) {
                        var newNode = node.children[0];
                        node.parentNode.replaceChild(newNode, node);
                        node = newNode;
                    } else if (!this._hasChildBlockElement(node)) {
                        node = this._setNodeTag(node, "P");
                        elementsToScore.push(node);
                    } else {
                        // EXPERIMENTAL
                        this._forEachNode(node.childNodes, function (childNode) {
                            if (childNode.nodeType === Node.TEXT_NODE && childNode.textContent.trim().length > 0) {
                                var p = doc.createElement('p');
                                p.textContent = childNode.textContent;
                                p.style.display = 'inline';
                                p.className = 'readability-styled';
                                node.replaceChild(p, childNode);
                            }
                        });
                    }
                }
                node = this._getNextNode(node);
            }

            /**
             * Loop through all paragraphs, and assign a score to them based on how content-y they look.
             * Then add their score to their parent node.
             *
             * A score is determined by things like number of commas, class names, etc. Maybe eventually link density.
             **/
            var candidates = [];
            this._forEachNode(elementsToScore, function (elementToScore) {
                if (!elementToScore.parentNode || typeof elementToScore.parentNode.tagName === 'undefined') return;

                // If this paragraph is less than 25 characters, don't even count it.
                var innerText = this._getInnerText(elementToScore);
                if (innerText.length < 25) return;

                // Exclude nodes with no ancestor.
                var ancestors = this._getNodeAncestors(elementToScore, 3);
                if (ancestors.length === 0) return;

                var contentScore = 0;

                // Add a point for the paragraph itself as a base.
                contentScore += 1;

                // Add points for any commas within this paragraph.
                contentScore += innerText.split(',').length;

                // For every 100 characters in this paragraph, add another point. Up to 3 points.
                contentScore += Math.min(Math.floor(innerText.length / 100), 3);

                // Initialize and score ancestors.
                this._forEachNode(ancestors, function (ancestor, level) {
                    if (!ancestor.tagName) return;

                    if (typeof ancestor.readability === 'undefined') {
                        this._initializeNode(ancestor);
                        candidates.push(ancestor);
                    }

                    // Node score divider:
                    // - parent:             1 (no division)
                    // - grandparent:        2
                    // - great grandparent+: ancestor level * 3
                    if (level === 0) var scoreDivider = 1;else if (level === 1) scoreDivider = 2;else scoreDivider = level * 3;
                    ancestor.readability.contentScore += contentScore / scoreDivider;
                });
            });

            // After we've calculated scores, loop through all of the possible
            // candidate nodes we found and find the one with the highest score.
            var topCandidates = [];
            for (var c = 0, cl = candidates.length; c < cl; c += 1) {
                var candidate = candidates[c];

                // Scale the final candidates score based on link density. Good content
                // should have a relatively small link density (5% or less) and be mostly
                // unaffected by this operation.
                var candidateScore = candidate.readability.contentScore * (1 - this._getLinkDensity(candidate));
                candidate.readability.contentScore = candidateScore;

                this.log('Candidate:', candidate, "with score " + candidateScore);

                for (var t = 0; t < this._nbTopCandidates; t++) {
                    var aTopCandidate = topCandidates[t];

                    if (!aTopCandidate || candidateScore > aTopCandidate.readability.contentScore) {
                        topCandidates.splice(t, 0, candidate);
                        if (topCandidates.length > this._nbTopCandidates) topCandidates.pop();
                        break;
                    }
                }
            }

            var topCandidate = topCandidates[0] || null;
            var neededToCreateTopCandidate = false;
            var parentOfTopCandidate;

            // If we still have no top candidate, just use the body as a last resort.
            // We also have to copy the body node so it is something we can modify.
            if (topCandidate === null || topCandidate.tagName === "BODY") {
                // Move all of the page's children into topCandidate
                topCandidate = doc.createElement("DIV");
                neededToCreateTopCandidate = true;
                // Move everything (not just elements, also text nodes etc.) into the container
                // so we even include text directly in the body:
                var kids = page.childNodes;
                while (kids.length) {
                    this.log("Moving child out:", kids[0]);
                    topCandidate.appendChild(kids[0]);
                }

                page.appendChild(topCandidate);

                this._initializeNode(topCandidate);
            } else if (topCandidate) {
                // Find a better top candidate node if it contains (at least three) nodes which belong to `topCandidates` array
                // and whose scores are quite closed with current `topCandidate` node.
                var alternativeCandidateAncestors = [];
                for (var i = 1; i < topCandidates.length; i++) {
                    if (topCandidates[i].readability.contentScore / topCandidate.readability.contentScore >= 0.75) {
                        alternativeCandidateAncestors.push(this._getNodeAncestors(topCandidates[i]));
                    }
                }
                var MINIMUM_TOPCANDIDATES = 3;
                if (alternativeCandidateAncestors.length >= MINIMUM_TOPCANDIDATES) {
                    parentOfTopCandidate = topCandidate.parentNode;
                    while (parentOfTopCandidate.tagName !== "BODY") {
                        var listsContainingThisAncestor = 0;
                        for (var ancestorIndex = 0; ancestorIndex < alternativeCandidateAncestors.length && listsContainingThisAncestor < MINIMUM_TOPCANDIDATES; ancestorIndex++) {
                            listsContainingThisAncestor += Number(alternativeCandidateAncestors[ancestorIndex].includes(parentOfTopCandidate));
                        }
                        if (listsContainingThisAncestor >= MINIMUM_TOPCANDIDATES) {
                            topCandidate = parentOfTopCandidate;
                            break;
                        }
                        parentOfTopCandidate = parentOfTopCandidate.parentNode;
                    }
                }
                if (!topCandidate.readability) {
                    this._initializeNode(topCandidate);
                }

                // Because of our bonus system, parents of candidates might have scores
                // themselves. They get half of the node. There won't be nodes with higher
                // scores than our topCandidate, but if we see the score going *up* in the first
                // few steps up the tree, that's a decent sign that there might be more content
                // lurking in other places that we want to unify in. The sibling stuff
                // below does some of that - but only if we've looked high enough up the DOM
                // tree.
                parentOfTopCandidate = topCandidate.parentNode;
                var lastScore = topCandidate.readability.contentScore;
                // The scores shouldn't get too low.
                var scoreThreshold = lastScore / 3;
                while (parentOfTopCandidate.tagName !== "BODY") {
                    if (!parentOfTopCandidate.readability) {
                        parentOfTopCandidate = parentOfTopCandidate.parentNode;
                        continue;
                    }
                    var parentScore = parentOfTopCandidate.readability.contentScore;
                    if (parentScore < scoreThreshold) break;
                    if (parentScore > lastScore) {
                        // Alright! We found a better parent to use.
                        topCandidate = parentOfTopCandidate;
                        break;
                    }
                    lastScore = parentOfTopCandidate.readability.contentScore;
                    parentOfTopCandidate = parentOfTopCandidate.parentNode;
                }

                // If the top candidate is the only child, use parent instead. This will help sibling
                // joining logic when adjacent content is actually located in parent's sibling node.
                parentOfTopCandidate = topCandidate.parentNode;
                while (parentOfTopCandidate.tagName != "BODY" && parentOfTopCandidate.children.length == 1) {
                    topCandidate = parentOfTopCandidate;
                    parentOfTopCandidate = topCandidate.parentNode;
                }
                if (!topCandidate.readability) {
                    this._initializeNode(topCandidate);
                }
            }

            // Now that we have the top candidate, look through its siblings for content
            // that might also be related. Things like preambles, content split by ads
            // that we removed, etc.
            var articleContent = doc.createElement("DIV");
            if (isPaging) articleContent.id = "readability-content";

            var siblingScoreThreshold = Math.max(10, topCandidate.readability.contentScore * 0.2);
            // Keep potential top candidate's parent node to try to get text direction of it later.
            parentOfTopCandidate = topCandidate.parentNode;
            var siblings = parentOfTopCandidate.children;

            for (var s = 0, sl = siblings.length; s < sl; s++) {
                var sibling = siblings[s];
                var append = false;

                this.log("Looking at sibling node:", sibling, sibling.readability ? "with score " + sibling.readability.contentScore : '');
                this.log("Sibling has score", sibling.readability ? sibling.readability.contentScore : 'Unknown');

                if (sibling === topCandidate) {
                    append = true;
                } else {
                    var contentBonus = 0;

                    // Give a bonus if sibling nodes and top candidates have the example same classname
                    if (sibling.className === topCandidate.className && topCandidate.className !== "") contentBonus += topCandidate.readability.contentScore * 0.2;

                    if (sibling.readability && sibling.readability.contentScore + contentBonus >= siblingScoreThreshold) {
                        append = true;
                    } else if (sibling.nodeName === "P") {
                        var linkDensity = this._getLinkDensity(sibling);
                        var nodeContent = this._getInnerText(sibling);
                        var nodeLength = nodeContent.length;

                        if (nodeLength > 80 && linkDensity < 0.25) {
                            append = true;
                        } else if (nodeLength < 80 && nodeLength > 0 && linkDensity === 0 && nodeContent.search(/\.( |$)/) !== -1) {
                            append = true;
                        }
                    }
                }

                if (append) {
                    this.log("Appending node:", sibling);

                    if (this.ALTER_TO_DIV_EXCEPTIONS.indexOf(sibling.nodeName) === -1) {
                        // We have a node that isn't a common block level element, like a form or td tag.
                        // Turn it into a div so it doesn't get filtered out later by accident.
                        this.log("Altering sibling:", sibling, 'to div.');

                        sibling = this._setNodeTag(sibling, "DIV");
                    }

                    articleContent.appendChild(sibling);
                    // siblings is a reference to the children array, and
                    // sibling is removed from the array when we call appendChild().
                    // As a result, we must revisit this index since the nodes
                    // have been shifted.
                    s -= 1;
                    sl -= 1;
                }
            }

            if (this._debug) this.log("Article content pre-prep: " + articleContent.innerHTML);
            // So we have all of the content that we need. Now we clean it up for presentation.
            this._prepArticle(articleContent);
            if (this._debug) this.log("Article content post-prep: " + articleContent.innerHTML);

            if (this._curPageNum === 1) {
                if (neededToCreateTopCandidate) {
                    // We already created a fake div thing, and there wouldn't have been any siblings left
                    // for the previous loop, so there's no point trying to create a new div, and then
                    // move all the children over. Just assign IDs and class names here. No need to append
                    // because that already happened anyway.
                    topCandidate.id = "readability-page-1";
                    topCandidate.className = "page";
                } else {
                    var div = doc.createElement("DIV");
                    div.id = "readability-page-1";
                    div.className = "page";
                    var children = articleContent.childNodes;
                    while (children.length) {
                        div.appendChild(children[0]);
                    }
                    articleContent.appendChild(div);
                }
            }

            if (this._debug) this.log("Article content after paging: " + articleContent.innerHTML);

            // Now that we've gone through the full algorithm, check to see if
            // we got any meaningful content. If we didn't, we may need to re-run
            // grabArticle with different flags set. This gives us a higher likelihood of
            // finding the content, and the sieve approach gives us a higher likelihood of
            // finding the -right- content.
            if (this._getInnerText(articleContent, true).length < 500) {
                page.innerHTML = pageCacheHtml;

                if (this._flagIsActive(this.FLAG_STRIP_UNLIKELYS)) {
                    this._removeFlag(this.FLAG_STRIP_UNLIKELYS);
                } else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) {
                    this._removeFlag(this.FLAG_WEIGHT_CLASSES);
                } else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) {
                    this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY);
                } else {
                    return null;
                }
            } else {
                // Find out text direction from ancestors of final top candidate.
                var ancestors = [parentOfTopCandidate, topCandidate].concat(this._getNodeAncestors(parentOfTopCandidate));
                this._someNode(ancestors, function (ancestor) {
                    if (!ancestor.tagName) return false;
                    var articleDir = ancestor.getAttribute("dir");
                    if (articleDir) {
                        this._articleDir = articleDir;
                        return true;
                    }
                    return false;
                });
                return articleContent;
            }
        }
    },

    /**
     * Check whether the input string could be a byline.
     * This verifies that the input is a string, and that the length
     * is less than 100 chars.
     *
     * @param possibleByline {string} - a string to check whether its a byline.
     * @return Boolean - whether the input string is a byline.
     */
    _isValidByline: function _isValidByline(byline) {
        if (typeof byline == 'string' || byline instanceof String) {
            byline = byline.trim();
            return byline.length > 0 && byline.length < 100;
        }
        return false;
    },

    /**
     * Attempts to get excerpt and byline metadata for the article.
     *
     * @return Object with optional "excerpt" and "byline" properties
     */
    _getArticleMetadata: function _getArticleMetadata() {
        var metadata = {};
        var values = {};
        var metaElements = this._doc.getElementsByTagName("meta");

        // Match "description", or Twitter's "twitter:description" (Cards)
        // in name attribute.
        var namePattern = /^\s*((twitter)\s*:\s*)?(description|title)\s*$/gi;

        // Match Facebook's Open Graph title & description properties.
        var propertyPattern = /^\s*og\s*:\s*(description|title)\s*$/gi;

        // Find description tags.
        this._forEachNode(metaElements, function (element) {
            var elementName = element.getAttribute("name");
            var elementProperty = element.getAttribute("property");

            if ([elementName, elementProperty].indexOf("author") !== -1) {
                metadata.byline = element.getAttribute("content");
                return;
            }

            var name = null;
            if (namePattern.test(elementName)) {
                name = elementName;
            } else if (propertyPattern.test(elementProperty)) {
                name = elementProperty;
            }

            if (name) {
                var content = element.getAttribute("content");
                if (content) {
                    // Convert to lowercase and remove any whitespace
                    // so we can match below.
                    name = name.toLowerCase().replace(/\s/g, '');
                    values[name] = content.trim();
                }
            }
        });

        if ("description" in values) {
            metadata.excerpt = values["description"];
        } else if ("og:description" in values) {
            // Use facebook open graph description.
            metadata.excerpt = values["og:description"];
        } else if ("twitter:description" in values) {
            // Use twitter cards description.
            metadata.excerpt = values["twitter:description"];
        }

        metadata.title = this._getArticleTitle();
        if (!metadata.title) {
            if ("og:title" in values) {
                // Use facebook open graph title.
                metadata.title = values["og:title"];
            } else if ("twitter:title" in values) {
                // Use twitter cards title.
                metadata.title = values["twitter:title"];
            }
        }

        return metadata;
    },

    /**
     * Removes script tags from the document.
     *
     * @param Element
     **/
    _removeScripts: function _removeScripts(doc) {
        this._removeNodes(doc.getElementsByTagName('script'), function (scriptNode) {
            scriptNode.nodeValue = "";
            scriptNode.removeAttribute('src');
            return true;
        });
        this._removeNodes(doc.getElementsByTagName('noscript'));
    },

    /**
     * Check if this node has only whitespace and a single P element
     * Returns false if the DIV node contains non-empty text nodes
     * or if it contains no P or more than 1 element.
     *
     * @param Element
     **/
    _hasSinglePInsideElement: function _hasSinglePInsideElement(element) {
        // There should be exactly 1 element child which is a P:
        if (element.children.length != 1 || element.children[0].tagName !== "P") {
            return false;
        }

        // And there should be no text nodes with real content
        return !this._someNode(element.childNodes, function (node) {
            return node.nodeType === Node.TEXT_NODE && this.REGEXPS.hasContent.test(node.textContent);
        });
    },

    _isElementWithoutContent: function _isElementWithoutContent(node) {
        return node.nodeType === Node.ELEMENT_NODE && node.textContent.trim().length == 0 && (node.children.length == 0 || node.children.length == node.getElementsByTagName("br").length + node.getElementsByTagName("hr").length);
    },

    /**
     * Determine whether element has any children block level elements.
     *
     * @param Element
     */
    _hasChildBlockElement: function _hasChildBlockElement(element) {
        return this._someNode(element.childNodes, function (node) {
            return this.DIV_TO_P_ELEMS.indexOf(node.tagName) !== -1 || this._hasChildBlockElement(node);
        });
    },

    /**
     * Get the inner text of a node - cross browser compatibly.
     * This also strips out any excess whitespace to be found.
     *
     * @param Element
     * @param Boolean normalizeSpaces (default: true)
     * @return string
     **/
    _getInnerText: function _getInnerText(e, normalizeSpaces) {
        normalizeSpaces = typeof normalizeSpaces === 'undefined' ? true : normalizeSpaces;
        var textContent = e.textContent.trim();

        if (normalizeSpaces) {
            return textContent.replace(this.REGEXPS.normalize, " ");
        }
        return textContent;
    },

    /**
     * Get the number of times a string s appears in the node e.
     *
     * @param Element
     * @param string - what to split on. Default is ","
     * @return number (integer)
     **/
    _getCharCount: function _getCharCount(e, s) {
        s = s || ",";
        return this._getInnerText(e).split(s).length - 1;
    },

    /**
     * Remove the style attribute on every e and under.
     * TODO: Test if getElementsByTagName(*) is faster.
     *
     * @param Element
     * @return void
     **/
    _cleanStyles: function _cleanStyles(e) {
        e = e || this._doc;
        if (!e) return;
        var cur = e.firstChild;

        // Remove any root styles, if we're able.
        if (typeof e.removeAttribute === 'function' && e.className !== 'readability-styled') e.removeAttribute('style');

        // Go until there are no more child nodes
        while (cur !== null) {
            if (cur.nodeType === cur.ELEMENT_NODE) {
                // Remove style attribute(s) :
                if (cur.className !== "readability-styled") cur.removeAttribute("style");

                this._cleanStyles(cur);
            }

            cur = cur.nextSibling;
        }
    },

    /**
     * Get the density of links as a percentage of the content
     * This is the amount of text that is inside a link divided by the total text in the node.
     *
     * @param Element
     * @return number (float)
     **/
    _getLinkDensity: function _getLinkDensity(element) {
        var textLength = this._getInnerText(element).length;
        if (textLength === 0) return 0;

        var linkLength = 0;

        // XXX implement _reduceNodeList?
        this._forEachNode(element.getElementsByTagName("a"), function (linkNode) {
            linkLength += this._getInnerText(linkNode).length;
        });

        return linkLength / textLength;
    },

    /**
     * Find a cleaned up version of the current URL, to use for comparing links for possible next-pageyness.
     *
     * @author Dan Lacy
     * @return string the base url
     **/
    _findBaseUrl: function _findBaseUrl() {
        var uri = this._uri;
        var noUrlParams = uri.path.split("?")[0];
        var urlSlashes = noUrlParams.split("/").reverse();
        var cleanedSegments = [];
        var possibleType = "";

        for (var i = 0, slashLen = urlSlashes.length; i < slashLen; i += 1) {
            var segment = urlSlashes[i];

            // Split off and save anything that looks like a file type.
            if (segment.indexOf(".") !== -1) {
                possibleType = segment.split(".")[1];

                // If the type isn't alpha-only, it's probably not actually a file extension.
                if (!possibleType.match(/[^a-zA-Z]/)) segment = segment.split(".")[0];
            }

            // If our first or second segment has anything looking like a page number, remove it.
            if (segment.match(/((_|-)?p[a-z]*|(_|-))[0-9]{1,2}$/i) && (i === 1 || i === 0)) segment = segment.replace(/((_|-)?p[a-z]*|(_|-))[0-9]{1,2}$/i, "");

            var del = false;

            // If this is purely a number, and it's the first or second segment,
            // it's probably a page number. Remove it.
            if (i < 2 && segment.match(/^\d{1,2}$/)) del = true;

            // If this is the first segment and it's just "index", remove it.
            if (i === 0 && segment.toLowerCase() === "index") del = true;

            // If our first or second segment is smaller than 3 characters,
            // and the first segment was purely alphas, remove it.
            if (i < 2 && segment.length < 3 && !urlSlashes[0].match(/[a-z]/i)) del = true;

            // If it's not marked for deletion, push it to cleanedSegments.
            if (!del) cleanedSegments.push(segment);
        }

        // This is our final, cleaned, base article URL.
        return uri.scheme + "://" + uri.host + cleanedSegments.reverse().join("/");
    },

    /**
     * Look for any paging links that may occur within the document.
     *
     * @param body
     * @return object (array)
     **/
    _findNextPageLink: function _findNextPageLink(elem) {
        var uri = this._uri;
        var possiblePages = {};
        var allLinks = elem.getElementsByTagName('a');
        var articleBaseUrl = this._findBaseUrl();

        // Loop through all links, looking for hints that they may be next-page links.
        // Things like having "page" in their textContent, className or id, or being a child
        // of a node with a page-y className or id.
        //
        // Also possible: levenshtein distance? longest common subsequence?
        //
        // After we do that, assign each page a score, and
        for (var i = 0, il = allLinks.length; i < il; i += 1) {
            var link = allLinks[i];
            var linkHref = allLinks[i].href.replace(/#.*$/, '').replace(/\/$/, '');

            // If we've already seen this page, ignore it.
            if (linkHref === "" || linkHref === articleBaseUrl || linkHref === uri.spec || linkHref in this._parsedPages) {
                continue;
            }

            // If it's on a different domain, skip it.
            if (uri.host !== linkHref.split(/\/+/g)[1]) continue;

            var linkText = this._getInnerText(link);

            // If the linkText looks like it's not the next page, skip it.
            if (linkText.match(this.REGEXPS.extraneous) || linkText.length > 25) continue;

            // If the leftovers of the URL after removing the base URL don't contain
            // any digits, it's certainly not a next page link.
            var linkHrefLeftover = linkHref.replace(articleBaseUrl, '');
            if (!linkHrefLeftover.match(/\d/)) continue;

            if (!(linkHref in possiblePages)) {
                possiblePages[linkHref] = { "score": 0, "linkText": linkText, "href": linkHref };
            } else {
                possiblePages[linkHref].linkText += ' | ' + linkText;
            }

            var linkObj = possiblePages[linkHref];

            // If the articleBaseUrl isn't part of this URL, penalize this link. It could
            // still be the link, but the odds are lower.
            // Example: http://www.actionscript.org/resources/articles/745/1/JavaScript-and-VBScript-Injection-in-ActionScript-3/Page1.html
            if (linkHref.indexOf(articleBaseUrl) !== 0) linkObj.score -= 25;

            var linkData = linkText + ' ' + link.className + ' ' + link.id;
            if (linkData.match(this.REGEXPS.nextLink)) linkObj.score += 50;

            if (linkData.match(/pag(e|ing|inat)/i)) linkObj.score += 25;

            if (linkData.match(/(first|last)/i)) {
                // -65 is enough to negate any bonuses gotten from a > or » in the text,
                // If we already matched on "next", last is probably fine.
                // If we didn't, then it's bad. Penalize.
                if (!linkObj.linkText.match(this.REGEXPS.nextLink)) linkObj.score -= 65;
            }

            if (linkData.match(this.REGEXPS.negative) || linkData.match(this.REGEXPS.extraneous)) linkObj.score -= 50;

            if (linkData.match(this.REGEXPS.prevLink)) linkObj.score -= 200;

            // If a parentNode contains page or paging or paginat
            var parentNode = link.parentNode;
            var positiveNodeMatch = false;
            var negativeNodeMatch = false;

            while (parentNode) {
                var parentNodeClassAndId = parentNode.className + ' ' + parentNode.id;

                if (!positiveNodeMatch && parentNodeClassAndId && parentNodeClassAndId.match(/pag(e|ing|inat)/i)) {
                    positiveNodeMatch = true;
                    linkObj.score += 25;
                }

                if (!negativeNodeMatch && parentNodeClassAndId && parentNodeClassAndId.match(this.REGEXPS.negative)) {
                    // If this is just something like "footer", give it a negative.
                    // If it's something like "body-and-footer", leave it be.
                    if (!parentNodeClassAndId.match(this.REGEXPS.positive)) {
                        linkObj.score -= 25;
                        negativeNodeMatch = true;
                    }
                }

                parentNode = parentNode.parentNode;
            }

            // If the URL looks like it has paging in it, add to the score.
            // Things like /page/2/, /pagenum/2, ?p=3, ?page=11, ?pagination=34
            if (linkHref.match(/p(a|g|ag)?(e|ing|ination)?(=|\/)[0-9]{1,2}/i) || linkHref.match(/(page|paging)/i)) linkObj.score += 25;

            // If the URL contains negative values, give a slight decrease.
            if (linkHref.match(this.REGEXPS.extraneous)) linkObj.score -= 15;

            /**
             * Minor punishment to anything that doesn't match our current URL.
             * NOTE: I'm finding this to cause more harm than good where something is exactly 50 points.
             *     Dan, can you show me a counterexample where this is necessary?
             * if (linkHref.indexOf(window.location.href) !== 0) {
            *  linkObj.score -= 1;
            * }
             **/

            // If the link text can be parsed as a number, give it a minor bonus, with a slight
            // bias towards lower numbered pages. This is so that pages that might not have 'next'
            // in their text can still get scored, and sorted properly by score.
            var linkTextAsNumber = parseInt(linkText, 10);
            if (linkTextAsNumber) {
                // Punish 1 since we're either already there, or it's probably
                // before what we want anyways.
                if (linkTextAsNumber === 1) {
                    linkObj.score -= 10;
                } else {
                    linkObj.score += Math.max(0, 10 - linkTextAsNumber);
                }
            }
        }

        // Loop thrugh all of our possible pages from above and find our top
        // candidate for the next page URL. Require at least a score of 50, which
        // is a relatively high confidence that this page is the next link.
        var topPage = null;
        for (var page in possiblePages) {
            if (possiblePages.hasOwnProperty(page)) {
                if (possiblePages[page].score >= 50 && (!topPage || topPage.score < possiblePages[page].score)) topPage = possiblePages[page];
            }
        }

        var nextHref = null;
        if (topPage) {
            nextHref = topPage.href.replace(/\/$/, '');

            this.log('NEXT PAGE IS ' + nextHref);
            this._parsedPages[nextHref] = true;
        }
        return nextHref;
    },

    _successfulRequest: function _successfulRequest(request) {
        return request.status >= 200 && request.status < 300 || request.status === 304 || request.status === 0 && request.responseText;
    },

    _ajax: function _ajax(url, options) {
        var request = new XMLHttpRequest();

        function respondToReadyState(readyState) {
            if (request.readyState === 4) {
                if (this._successfulRequest(request)) {
                    if (options.success) options.success(request);
                } else if (options.error) {
                    options.error(request);
                }
            }
        }

        if (typeof options === 'undefined') options = {};

        request.onreadystatechange = respondToReadyState;

        request.open('get', url, true);
        request.setRequestHeader('Accept', 'text/html');

        try {
            request.send(options.postBody);
        } catch (e) {
            if (options.error) options.error();
        }

        return request;
    },

    _appendNextPage: function _appendNextPage(nextPageLink) {
        var doc = this._doc;
        this._curPageNum += 1;

        var articlePage = doc.createElement("DIV");
        articlePage.id = 'readability-page-' + this._curPageNum;
        articlePage.className = 'page';
        articlePage.innerHTML = '<p class="page-separator" title="Page ' + this._curPageNum + '">&sect;</p>';

        doc.getElementById("readability-content").appendChild(articlePage);

        if (this._curPageNum > this._maxPages) {
            var nextPageMarkup = "<div style='text-align: center'><a href='" + nextPageLink + "'>View Next Page</a></div>";
            articlePage.innerHTML = articlePage.innerHTML + nextPageMarkup;
            return;
        }

        // Now that we've built the article page DOM element, get the page content
        // asynchronously and load the cleaned content into the div we created for it.
        (function (pageUrl, thisPage) {
            this._ajax(pageUrl, {
                success: function success(r) {

                    // First, check to see if we have a matching ETag in headers - if we do, this is a duplicate page.
                    var eTag = r.getResponseHeader('ETag');
                    if (eTag) {
                        if (eTag in this._pageETags) {
                            this.log("Exact duplicate page found via ETag. Aborting.");
                            articlePage.style.display = 'none';
                            return;
                        }
                        this._pageETags[eTag] = 1;
                    }

                    // TODO: this ends up doubling up page numbers on NYTimes articles. Need to generically parse those away.
                    var page = doc.createElement("DIV");

                    // Do some preprocessing to our HTML to make it ready for appending.
                    // - Remove any script tags. Swap and reswap newlines with a unicode
                    //   character because multiline regex doesn't work in javascript.
                    // - Turn any noscript tags into divs so that we can parse them. This
                    //   allows us to find any next page links hidden via javascript.
                    // - Turn all double br's into p's - was handled by prepDocument in the original view.
                    //   Maybe in the future abstract out prepDocument to work for both the original document
                    //   and AJAX-added pages.
                    var responseHtml = r.responseText.replace(/\n/g, '\uFFFF').replace(/<script.*?>.*?<\/script>/gi, '');
                    responseHtml = responseHtml.replace(/\n/g, '\uFFFF').replace(/<script.*?>.*?<\/script>/gi, '');
                    responseHtml = responseHtml.replace(/\uffff/g, '\n').replace(/<(\/?)noscript/gi, '<$1div');
                    responseHtml = responseHtml.replace(this.REGEXPS.replaceFonts, '<$1span>');

                    page.innerHTML = responseHtml;
                    this._replaceBrs(page);

                    // Reset all flags for the next page, as they will search through it and
                    // disable as necessary at the end of grabArticle.
                    this._flags = 0x1 | 0x2 | 0x4;

                    var secondNextPageLink = this._findNextPageLink(page);

                    // NOTE: if we end up supporting _appendNextPage(), we'll need to
                    // change this call to be async
                    var content = this._grabArticle(page);

                    if (!content) {
                        this.log("No content found in page to append. Aborting.");
                        return;
                    }

                    // Anti-duplicate mechanism. Essentially, get the first paragraph of our new page.
                    // Compare it against all of the the previous document's we've gotten. If the previous
                    // document contains exactly the innerHTML of this first paragraph, it's probably a duplicate.
                    var firstP = content.getElementsByTagName("P").length ? content.getElementsByTagName("P")[0] : null;
                    if (firstP && firstP.innerHTML.length > 100) {
                        for (var i = 1; i <= this._curPageNum; i += 1) {
                            var rPage = doc.getElementById('readability-page-' + i);
                            if (rPage && rPage.innerHTML.indexOf(firstP.innerHTML) !== -1) {
                                this.log('Duplicate of page ' + i + ' - skipping.');
                                articlePage.style.display = 'none';
                                this._parsedPages[pageUrl] = true;
                                return;
                            }
                        }
                    }

                    this._removeScripts(content);

                    thisPage.innerHTML = thisPage.innerHTML + content.innerHTML;

                    // After the page has rendered, post process the content. This delay is necessary because,
                    // in webkit at least, offsetWidth is not set in time to determine image width. We have to
                    // wait a little bit for reflow to finish before we can fix floating images.
                    setTimeout(function () {
                        this._postProcessContent(thisPage);
                    }.bind(this), 500);

                    if (secondNextPageLink) this._appendNextPage(secondNextPageLink);
                }
            });
        }).bind(this)(nextPageLink, articlePage);
    },

    /**
     * Get an elements class/id weight. Uses regular expressions to tell if this
     * element looks good or bad.
     *
     * @param Element
     * @return number (Integer)
     **/
    _getClassWeight: function _getClassWeight(e) {
        if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) return 0;

        var weight = 0;

        // Look for a special classname
        if (typeof e.className === 'string' && e.className !== '') {
            if (this.REGEXPS.negative.test(e.className)) weight -= 25;

            if (this.REGEXPS.positive.test(e.className)) weight += 25;
        }

        // Look for a special ID
        if (typeof e.id === 'string' && e.id !== '') {
            if (this.REGEXPS.negative.test(e.id)) weight -= 25;

            if (this.REGEXPS.positive.test(e.id)) weight += 25;
        }

        return weight;
    },

    /**
     * Clean a node of all elements of type "tag".
     * (Unless it's a youtube/vimeo video. People love movies.)
     *
     * @param Element
     * @param string tag to clean
     * @return void
     **/
    _clean: function _clean(e, tag) {
        var isEmbed = ["object", "embed", "iframe"].indexOf(tag) !== -1;

        this._removeNodes(e.getElementsByTagName(tag), function (element) {
            // Allow youtube and vimeo videos through as people usually want to see those.
            if (isEmbed) {
                var attributeValues = [].map.call(element.attributes, function (attr) {
                    return attr.value;
                }).join("|");

                // First, check the elements attributes to see if any of them contain youtube or vimeo
                if (this.REGEXPS.videos.test(attributeValues)) return false;

                // Then check the elements inside this element for the same.
                if (this.REGEXPS.videos.test(element.innerHTML)) return false;
            }

            return true;
        });
    },

    /**
     * Check if a given node has one of its ancestor tag name matching the
     * provided one.
     * @param  HTMLElement node
     * @param  String      tagName
     * @param  Number      maxDepth
     * @param  Function    filterFn a filter to invoke to determine whether this node 'counts'
     * @return Boolean
     */
    _hasAncestorTag: function _hasAncestorTag(node, tagName, maxDepth, filterFn) {
        maxDepth = maxDepth || 3;
        tagName = tagName.toUpperCase();
        var depth = 0;
        while (node.parentNode) {
            if (maxDepth > 0 && depth > maxDepth) return false;
            if (node.parentNode.tagName === tagName && (!filterFn || filterFn(node.parentNode))) return true;
            node = node.parentNode;
            depth++;
        }
        return false;
    },

    /**
     * Return an object indicating how many rows and columns this table has.
     */
    _getRowAndColumnCount: function _getRowAndColumnCount(table) {
        var rows = 0;
        var columns = 0;
        var trs = table.getElementsByTagName("tr");
        for (var i = 0; i < trs.length; i++) {
            var rowspan = trs[i].getAttribute("rowspan") || 0;
            if (rowspan) {
                rowspan = parseInt(rowspan, 10);
            }
            rows += rowspan || 1;

            // Now look for column-related info
            var columnsInThisRow = 0;
            var cells = trs[i].getElementsByTagName("td");
            for (var j = 0; j < cells.length; j++) {
                var colspan = cells[j].getAttribute("colspan") || 0;
                if (colspan) {
                    colspan = parseInt(colspan, 10);
                }
                columnsInThisRow += colspan || 1;
            }
            columns = Math.max(columns, columnsInThisRow);
        }
        return { rows: rows, columns: columns };
    },

    /**
     * Look for 'data' (as opposed to 'layout') tables, for which we use
     * similar checks as
     * https://dxr.mozilla.org/mozilla-central/rev/71224049c0b52ab190564d3ea0eab089a159a4cf/accessible/html/HTMLTableAccessible.cpp#920
     */
    _markDataTables: function _markDataTables(root) {
        var tables = root.getElementsByTagName("table");
        for (var i = 0; i < tables.length; i++) {
            var table = tables[i];
            var role = table.getAttribute("role");
            if (role == "presentation") {
                table._readabilityDataTable = false;
                continue;
            }
            var datatable = table.getAttribute("datatable");
            if (datatable == "0") {
                table._readabilityDataTable = false;
                continue;
            }
            var summary = table.getAttribute("summary");
            if (summary) {
                table._readabilityDataTable = true;
                continue;
            }

            var caption = table.getElementsByTagName("caption")[0];
            if (caption && caption.childNodes.length > 0) {
                table._readabilityDataTable = true;
                continue;
            }

            // If the table has a descendant with any of these tags, consider a data table:
            var dataTableDescendants = ["col", "colgroup", "tfoot", "thead", "th"];
            var descendantExists = function descendantExists(tag) {
                return !!table.getElementsByTagName(tag)[0];
            };
            if (dataTableDescendants.some(descendantExists)) {
                this.log("Data table because found data-y descendant");
                table._readabilityDataTable = true;
                continue;
            }

            // Nested tables indicate a layout table:
            if (table.getElementsByTagName("table")[0]) {
                table._readabilityDataTable = false;
                continue;
            }

            var sizeInfo = this._getRowAndColumnCount(table);
            if (sizeInfo.rows >= 10 || sizeInfo.columns > 4) {
                table._readabilityDataTable = true;
                continue;
            }
            // Now just go by size entirely:
            table._readabilityDataTable = sizeInfo.rows * sizeInfo.columns > 10;
        }
    },

    /**
     * Clean an element of all tags of type "tag" if they look fishy.
     * "Fishy" is an algorithm based on content length, classnames, link density, number of images & embeds, etc.
     *
     * @return void
     **/
    _cleanConditionally: function _cleanConditionally(e, tag) {
        if (!this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) return;

        var isList = tag === "ul" || tag === "ol";

        // Gather counts for other typical elements embedded within.
        // Traverse backwards so we can remove nodes at the same time
        // without effecting the traversal.
        //
        // TODO: Consider taking into account original contentScore here.
        this._removeNodes(e.getElementsByTagName(tag), function (node) {
            // First check if we're in a data table, in which case don't remove us.
            var isDataTable = function isDataTable(t) {
                return t._readabilityDataTable;
            };

            if (this._hasAncestorTag(node, "table", -1, isDataTable)) {
                return false;
            }

            var weight = this._getClassWeight(node);
            var contentScore = 0;

            this.log("Cleaning Conditionally", node);

            if (weight + contentScore < 0) {
                return true;
            }

            if (this._getCharCount(node, ',') < 10) {
                // If there are not very many commas, and the number of
                // non-paragraph elements is more than paragraphs or other
                // ominous signs, remove the element.
                var p = node.getElementsByTagName("p").length;
                var img = node.getElementsByTagName("img").length;
                var li = node.getElementsByTagName("li").length - 100;
                var input = node.getElementsByTagName("input").length;

                var embedCount = 0;
                var embeds = node.getElementsByTagName("embed");
                for (var ei = 0, il = embeds.length; ei < il; ei += 1) {
                    if (!this.REGEXPS.videos.test(embeds[ei].src)) embedCount += 1;
                }

                var linkDensity = this._getLinkDensity(node);
                var contentLength = this._getInnerText(node).length;

                var haveToRemove = img > 1 && p / img < 0.5 && !this._hasAncestorTag(node, "figure") || !isList && li > p || input > Math.floor(p / 3) || !isList && contentLength < 25 && (img === 0 || img > 2) && !this._hasAncestorTag(node, "figure") || !isList && weight < 25 && linkDensity > 0.2 || weight >= 25 && linkDensity > 0.5 || embedCount === 1 && contentLength < 75 || embedCount > 1;
                return haveToRemove;
            }
            return false;
        });
    },

    /**
     * Clean out elements whose id/class combinations match specific string.
     *
     * @param Element
     * @param RegExp match id/class combination.
     * @return void
     **/
    _cleanMatchedNodes: function _cleanMatchedNodes(e, regex) {
        var endOfSearchMarkerNode = this._getNextNode(e, true);
        var next = this._getNextNode(e);
        while (next && next != endOfSearchMarkerNode) {
            if (regex.test(next.className + " " + next.id)) {
                next = this._removeAndGetNext(next);
            } else {
                next = this._getNextNode(next);
            }
        }
    },

    /**
     * Clean out spurious headers from an Element. Checks things like classnames and link density.
     *
     * @param Element
     * @return void
     **/
    _cleanHeaders: function _cleanHeaders(e) {
        for (var headerIndex = 1; headerIndex < 3; headerIndex += 1) {
            this._removeNodes(e.getElementsByTagName('h' + headerIndex), function (header) {
                return this._getClassWeight(header) < 0;
            });
        }
    },

    _flagIsActive: function _flagIsActive(flag) {
        return (this._flags & flag) > 0;
    },

    _addFlag: function _addFlag(flag) {
        this._flags = this._flags | flag;
    },

    _removeFlag: function _removeFlag(flag) {
        this._flags = this._flags & ~flag;
    },

    /**
     * Decides whether or not the document is reader-able without parsing the whole thing.
     *
     * @return boolean Whether or not we suspect parse() will suceeed at returning an article object.
     */
    isProbablyReaderable: function isProbablyReaderable(helperIsVisible) {
        var nodes = this._getAllNodesWithTag(this._doc, ["p", "pre"]);

        // Get <div> nodes which have <br> node(s) and append them into the `nodes` variable.
        // Some articles' DOM structures might look like
        // <div>
        //   Sentences<br>
        //   <br>
        //   Sentences<br>
        // </div>
        var brNodes = this._getAllNodesWithTag(this._doc, ["div > br"]);
        if (brNodes.length) {
            var set = new _set2.default();
            [].forEach.call(brNodes, function (node) {
                set.add(node.parentNode);
            });
            nodes = [].concat.apply((0, _from2.default)(set), nodes);
        }

        // FIXME we should have a fallback for helperIsVisible, but this is
        // problematic because of jsdom's elem.style handling - see
        // https://github.com/mozilla/readability/pull/186 for context.

        var score = 0;
        // This is a little cheeky, we use the accumulator 'score' to decide what to return from
        // this callback:
        return this._someNode(nodes, function (node) {
            if (helperIsVisible && !helperIsVisible(node)) return false;
            var matchString = node.className + " " + node.id;

            if (this.REGEXPS.unlikelyCandidates.test(matchString) && !this.REGEXPS.okMaybeItsACandidate.test(matchString)) {
                return false;
            }

            if (node.matches && node.matches("li p")) {
                return false;
            }

            var textContentLength = node.textContent.trim().length;
            if (textContentLength < 140) {
                return false;
            }

            score += Math.sqrt(textContentLength - 140);

            if (score > 20) {
                return true;
            }
            return false;
        });
    },

    /**
     * Runs readability.
     *
     * Workflow:
     *  1. Prep the document by removing script tags, css, etc.
     *  2. Build readability's DOM tree.
     *  3. Grab the article content from the current dom tree.
     *  4. Replace the current DOM tree with the new one.
     *  5. Read peacefully.
     *
     * @return void
     **/
    parse: function parse() {
        // Avoid parsing too large documents, as per configuration option
        if (this._maxElemsToParse > 0) {
            var numTags = this._doc.getElementsByTagName("*").length;
            if (numTags > this._maxElemsToParse) {
                throw new Error("Aborting parsing document; " + numTags + " elements found");
            }
        }

        if (typeof this._doc.documentElement.firstElementChild === "undefined") {
            this._getNextNode = this._getNextNodeNoElementProperties;
        }
        // Remove script tags from the document.
        this._removeScripts(this._doc);

        // FIXME: Disabled multi-page article support for now as it
        // needs more work on infrastructure.

        // Make sure this document is added to the list of parsed pages first,
        // so we don't double up on the first page.
        // this._parsedPages[uri.spec.replace(/\/$/, '')] = true;

        // Pull out any possible next page link first.
        // var nextPageLink = this._findNextPageLink(doc.body);

        this._prepDocument();

        var metadata = this._getArticleMetadata();
        this._articleTitle = metadata.title;

        var articleContent = this._grabArticle();
        if (!articleContent) return null;

        this.log("Grabbed: " + articleContent.innerHTML);

        this._postProcessContent(articleContent);

        // if (nextPageLink) {
        //   // Append any additional pages after a small timeout so that people
        //   // can start reading without having to wait for this to finish processing.
        //   setTimeout((function() {
        //     this._appendNextPage(nextPageLink);
        //   }).bind(this), 500);
        // }

        // If we haven't found an excerpt in the article's metadata, use the article's
        // first paragraph as the excerpt. This is used for displaying a preview of
        // the article's content.
        if (!metadata.excerpt) {
            var paragraphs = articleContent.getElementsByTagName("p");
            if (paragraphs.length > 0) {
                metadata.excerpt = paragraphs[0].textContent.trim();
            }
        }

        var textContent = articleContent.textContent;

        return {
            uri: this._uri,
            title: this._articleTitle,
            byline: metadata.byline || this._articleByline,
            dir: this._articleDir,
            content: articleContent.innerHTML,
            textContent: textContent,
            length: textContent.length,
            excerpt: metadata.excerpt,
            rootElements: articleContent.children[0].children
        };
    }
};

if (( false ? 'undefined' : (0, _typeof3.default)(module)) === "object") {
    module.exports = Readability;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)(module)))

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(68);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(79);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21);
__webpack_require__(43);
module.exports = __webpack_require__(31).f('iterator');

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22)
  , defined   = __webpack_require__(15);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(25)
  , descriptor     = __webpack_require__(13)
  , setToStringTag = __webpack_require__(19)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(1)
  , anObject = __webpack_require__(9)
  , getKeys  = __webpack_require__(16);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(7)
  , toLength  = __webpack_require__(17)
  , toIndex   = __webpack_require__(74);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2).document && document.documentElement;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(6)
  , toObject    = __webpack_require__(30)
  , IE_PROTO    = __webpack_require__(27)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(78)
  , step             = __webpack_require__(44)
  , Iterators        = __webpack_require__(14)
  , toIObject        = __webpack_require__(7);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(23)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
__webpack_require__(48);
__webpack_require__(86);
__webpack_require__(87);
module.exports = __webpack_require__(4).Symbol;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(2)
  , has            = __webpack_require__(6)
  , DESCRIPTORS    = __webpack_require__(3)
  , $export        = __webpack_require__(8)
  , redefine       = __webpack_require__(40)
  , META           = __webpack_require__(32).KEY
  , $fails         = __webpack_require__(12)
  , shared         = __webpack_require__(28)
  , setToStringTag = __webpack_require__(19)
  , uid            = __webpack_require__(18)
  , wks            = __webpack_require__(0)
  , wksExt         = __webpack_require__(31)
  , wksDefine      = __webpack_require__(33)
  , keyOf          = __webpack_require__(82)
  , enumKeys       = __webpack_require__(83)
  , isArray        = __webpack_require__(46)
  , anObject       = __webpack_require__(9)
  , toIObject      = __webpack_require__(7)
  , toPrimitive    = __webpack_require__(20)
  , createDesc     = __webpack_require__(13)
  , _create        = __webpack_require__(25)
  , gOPNExt        = __webpack_require__(84)
  , $GOPD          = __webpack_require__(85)
  , $DP            = __webpack_require__(1)
  , $keys          = __webpack_require__(16)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(47).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(34).f  = $propertyIsEnumerable;
  __webpack_require__(45).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(24)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(5)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(16)
  , toIObject = __webpack_require__(7);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(16)
  , gOPS    = __webpack_require__(45)
  , pIE     = __webpack_require__(34);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(7)
  , gOPN      = __webpack_require__(47).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(34)
  , createDesc     = __webpack_require__(13)
  , toIObject      = __webpack_require__(7)
  , toPrimitive    = __webpack_require__(20)
  , has            = __webpack_require__(6)
  , IE8_DOM_DEFINE = __webpack_require__(38)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33)('asyncIterator');

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33)('observable');

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(21);
__webpack_require__(43);
__webpack_require__(90);
__webpack_require__(97);
module.exports = __webpack_require__(4).Set;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(91);

// 23.2 Set Objects
module.exports = __webpack_require__(93)('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP          = __webpack_require__(1).f
  , create      = __webpack_require__(25)
  , redefineAll = __webpack_require__(49)
  , ctx         = __webpack_require__(11)
  , anInstance  = __webpack_require__(50)
  , defined     = __webpack_require__(15)
  , forOf       = __webpack_require__(35)
  , $iterDefine = __webpack_require__(23)
  , step        = __webpack_require__(44)
  , setSpecies  = __webpack_require__(92)
  , DESCRIPTORS = __webpack_require__(3)
  , fastKey     = __webpack_require__(32).fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(2)
  , core        = __webpack_require__(4)
  , dP          = __webpack_require__(1)
  , DESCRIPTORS = __webpack_require__(3)
  , SPECIES     = __webpack_require__(0)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global         = __webpack_require__(2)
  , $export        = __webpack_require__(8)
  , meta           = __webpack_require__(32)
  , fails          = __webpack_require__(12)
  , hide           = __webpack_require__(5)
  , redefineAll    = __webpack_require__(49)
  , forOf          = __webpack_require__(35)
  , anInstance     = __webpack_require__(50)
  , isObject       = __webpack_require__(10)
  , setToStringTag = __webpack_require__(19)
  , dP             = __webpack_require__(1).f
  , each           = __webpack_require__(94)(0)
  , DESCRIPTORS    = __webpack_require__(3);

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(11)
  , IObject  = __webpack_require__(42)
  , toObject = __webpack_require__(30)
  , toLength = __webpack_require__(17)
  , asc      = __webpack_require__(95);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(96);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10)
  , isArray  = __webpack_require__(46)
  , SPECIES  = __webpack_require__(0)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(8);

$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(98)('Set')});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(54)
  , from    = __webpack_require__(99);
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(35);

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21);
__webpack_require__(102);
module.exports = __webpack_require__(4).Array.from;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(11)
  , $export        = __webpack_require__(8)
  , toObject       = __webpack_require__(30)
  , call           = __webpack_require__(51)
  , isArrayIter    = __webpack_require__(52)
  , toLength       = __webpack_require__(17)
  , createProperty = __webpack_require__(103)
  , getIterFn      = __webpack_require__(53);

$export($export.S + $export.F * !__webpack_require__(104)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(1)
  , createDesc      = __webpack_require__(13);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(36);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(37);

var _createClass3 = _interopRequireDefault(_createClass2);

var _helpers = __webpack_require__(106);

var helpers = _interopRequireWildcard(_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageInformerCreator = function () {
    function ImageInformerCreator(smartInformerName, id) {
        (0, _classCallCheck3.default)(this, ImageInformerCreator);


        if (!smartInformerName) {
            console.error('SmartInformerCreator.constructor: smartInformerName must be specified');
        }

        if (typeof id == 'undefined' || id == '') {
            console.error('SmartInformerCreator.constructor: Root Id was excepted but ' + id + ' given');
        }

        this.rootId = id;

        this.cssClasses = ['td-post-next-prev', 'adsb30', 'sadserver', 'adsbygoogle', 'fb-share-button', 'fb_iframe_widget', 'fb-comments', 'td_block_related_posts', 'td-post-sharing', 'td-post-sharing-top', 'sharing', 'shareaholic-ui', 'comments', 'related', 'share', 'at-share-btn-elements', 'post-footer'];

        this.ids = ['ad-space', 'fb_comments_div', 'ad-space', 'div-gpt-ad', 'MarketGidScript', 'MarketGidScriptRoot', 'disqus_comments_div', 'ScriptRoot', 'Preload', 'MarketGidComposite', 'SC_TBlock'];

        this.height = 0;
        this.supported_hosts = ['blogspot', 'hanoiiplus', /** FOR testing **/'newsatlast', 'ohtrending', 'albertespinola', 'webtretho'];
        this.supported_hosts.push(document.location.host === 'localhost' ? 'newsatlast' : document.location.host);
    }

    (0, _createClass3.default)(ImageInformerCreator, [{
        key: '_tryFindArticleImages',


        /**
         * Try to find images by their location
         *
         * @param imageWidth
         * @param before
         * @param after
         * @returns {Array}
         * @private
         */
        value: function _tryFindArticleImages(imageWidth, before, after) {
            var _this = this;

            var _helpers$getViewPortS = helpers.getViewPortSize(),
                viewportWidth = _helpers$getViewPortS.viewportWidth;

            var parts = viewportWidth / 4;
            var allImages = document.querySelectorAll('img');

            var array = [];
            [].forEach.call(allImages, function (img) {

                if (img.clientWidth && img.clientWidth <= imageWidth) {
                    return;
                }

                if (_this._isWrappedInLink(img) || _this._hasAddUpward(img)) {
                    return;
                }

                if (_this._isInFigure(img)) {
                    array.push(img.parentNode);
                    return;
                }

                var rect = img.getBoundingClientRect();
                var imageMiddle = rect.width / 2;
                var imageMiddleImQuarter = imageMiddle >= parts && imageMiddle <= parts * 3;

                if (_this._isSuitableAspectRation(img, before, after) && imageMiddleImQuarter) {

                    if (_this._isInFigure(img)) {
                        array.push(img.parentNode);
                        return;
                    }

                    array.push(img);
                }
            });

            return this._images = array;
        }

        /**
         * Check if there is one of the parent node is Add
         *
         * @param _element
         * @returns {boolean}
         * @private
         */

    }, {
        key: '_hasAddUpward',
        value: function _hasAddUpward(_element) {

            // by default - thing that there cant be ads inside text node
            if (helpers.isTextNode(_element) && !_element.parentNode) {
                return false;
            }

            var cantBeCalculated = false;

            this.ids.forEach(function (id) {
                return !cantBeCalculated && _element.id && (cantBeCalculated = _element.id.includes(id));
            });

            this.cssClasses.forEach(function (cssClass) {
                return !cantBeCalculated && _element.classList && (cantBeCalculated = _element.classList.contains(cssClass));
            });

            if (cantBeCalculated) {
                return true;
            }

            if (_element.parentNode) {
                cantBeCalculated = this._hasAddUpward(_element.parentNode);
            }

            return cantBeCalculated;
        }

        /**
         * There is a list of supported hosts - field supported_hosts
         * Check if given link's domain name is equal with
         * one of the supported_hosts domain
         *
         * @param image
         * @returns {boolean}
         * @private
         */

    }, {
        key: '_linkIsInSupportedHosts',
        value: function _linkIsInSupportedHosts(image) {

            var link = this._getParent(image, 'A');

            if (!link) {
                return true;
            }

            var isInSupportedDomainsList = false;

            this.supported_hosts.forEach(function (host) {
                !isInSupportedDomainsList && (isInSupportedDomainsList = link.href.search(host) != -1);
            });

            return isInSupportedDomainsList;
        }

        /**
         * Get parent block with tagName
         *
         * @param e
         * @param tagName
         * @returns {*}
         * @private
         */

    }, {
        key: '_getParent',
        value: function _getParent(e, tagName) {

            if (!e || !tagName) {
                return null;
            }

            if (e.tagName === tagName) {
                return e;
            }

            return this._getParent(e.parentNode, tagName);
        }
    }, {
        key: '_isWrappedInLink',
        value: function _isWrappedInLink() {
            var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


            if (!node) {
                console.error('SmartInformerCreator._isWrappedInAddLink: No image was provided');
                return false;
            }

            if (!node.parentNode) {
                return false;
            }

            if (node.parentNode.tagName === 'A') {
                return true;
            }

            return this._isWrappedInLink(node.parentNode);
        }

        /**
         * Check if image has suitable aspect ratio
         *
         * @param {HTMLElement} img - image
         * @param {number} before - width ratio
         * @param {number} after - height ratio
         * @returns {boolean}
         * @private
         */

    }, {
        key: '_isSuitableAspectRation',
        value: function _isSuitableAspectRation(img) {
            var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
            var after = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;


            if (img.tagName !== 'IMG') {
                return false;
            }

            var r = img.clientHeight / img.clientWidth;

            return r >= before && r <= after;
        }
    }, {
        key: '_isInFigure',
        value: function _isInFigure(img) {

            if (!img || !img.parentNode) {
                return false;
            }

            return img.parentNode.tagName === 'FIGURE' || this._isInFigure(img.parentNode);
        }

        /**
         * Find suitable images in the article
         *
         * @param {number} imageWidth - image width
         * @param {number} before
         * @param {number} after
         * @returns {*}
         */

    }, {
        key: '_findSuitableImages',
        value: function _findSuitableImages() {
            var imageWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 400;

            var _this2 = this;

            var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.2;
            var after = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;


            if (!this._article) {
                console.warn('ImageInformerCreator ._findSuitableImages: Article was not specified.');
                return this._tryFindArticleImages(imageWidth, before, after);
            }

            var array = [];
            [].forEach.call(this._article.querySelectorAll('img'), function (img) {
                if (img.tagName !== 'IMG') {
                    return;
                }

                if (img.clientWidth && img.clientWidth <= imageWidth) {
                    return;
                }

                var wrappedInLink = _this2._isWrappedInLink(img);

                if (wrappedInLink && _this2._hasAddUpward(img)) {
                    return;
                }

                if (wrappedInLink && !_this2._linkIsInSupportedHosts(img)) {
                    return;
                }

                if (_this2._isSuitableAspectRation(img, before, after)) {
                    if (_this2._isInFigure(img)) {
                        var figure = _this2._getParent(img, 'FIGURE');
                        array.push(figure);
                        return;
                    }

                    array.push(img);
                }
            });

            return this._images = array;
        }

        /**
         * Insert widget blocks
         *
         * @param {array| HTMLCollection} blocksToPaste - array of blocks, which will be paste in
         * @param {number} max_img_for_sticky_widget - max sticky blocks to paste
         */

    }, {
        key: 'insertWidget',
        value: function insertWidget() {
            var _this3 = this;

            var blocksToPaste = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._stickyBlocksToPaste;
            var max_img_for_sticky_widget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._images.length;


            if (!this._images || !this._images.length) {
                console.info('ImageInformerCreator.insertWidget: No Where to render - no images. ' + 'Find images before calling this method. Run ImageInformerCreator._findSuitableImages.');
                return;
            }

            if (!blocksToPaste || !blocksToPaste.length) {
                console.info('ImageInformerCreator.insertWidget: Nothing to render - no block. ' + 'Provide sticky block array|HTMLCollection which will be paste in.');
                return;
            }

            var counter = 0;
            [].forEach.call(blocksToPaste, function (item) {
                counter < max_img_for_sticky_widget && _this3._initIFrame(item, _this3._images.shift());
                counter++;
            });
        }

        /**
         * Create Ifrane after given block
         *
         * @param {Element} blockToiFrame - block to paste
         * @param {Element} imgNode - block
         * @private
         */

    }, {
        key: '_initIFrame',
        value: function _initIFrame(blockToiFrame, imgNode) {

            if (!blockToiFrame) {
                console.info('ImageInformerCreator._initIFrame: ' + 'Cant insert add after image - no block left on the page');
                return;
            }

            if (!imgNode) {
                console.info('ImageInformerCreator._initIFrame: ' + 'Cant insert add after image - no image left on the page');
                return;
            }

            var iFrame = this._insertIFrameToPage(imgNode);

            // fill the iFrame
            try {
                var infoWindow = iFrame.contentWindow.document;
                infoWindow.open();
                infoWindow.writeln("<html><head></head><body></body></html>");
                infoWindow.close();
                infoWindow.body.appendChild(blockToiFrame);

                this._setIFrameHeight(iFrame, blockToiFrame);
            } catch (e) {
                console.error('ImageInformerCreator._initIFrame: Error ', e);
            }

            // set close button listeners
            var closeButton = infoWindow.querySelector('.mgCloseButton');
            closeButton.addEventListener('click', function () {
                return iFrame.style.display = 'none';
            });
            closeButton.addEventListener('mousedown', function (e) {
                e.which === 2 && (iFrame.style.display = 'none');
                return true; // to allow the browser to know that we handled it.
            });

            // insert styles
            var cssStyle = infoWindow.createElement('style');
            cssStyle.innerHTML = this._styles + 'body,html{margin:0;padding:0}html{-ms-overflow-style:-ms-autohiding-scrollbar}.cbb{position:absolute;right:0;top:0;background-image:url(https://tpc.googlesyndication.com/pagead/images/x_button_blue2.svg);background-repeat:no-repeat;background-position:top right;cursor:pointer;height:15px;width:15px;z-index:9020}';
            infoWindow.head.appendChild(cssStyle);
        }
    }, {
        key: '_insertIFrameToPage',
        value: function _insertIFrameToPage(img) {

            var width = helpers.getStyle(img, 'width');
            var marginBottom = helpers.getStyle(img, 'margin-bottom');
            var marginLeft = helpers.getStyle(img, 'margin-left');
            var marginRight = helpers.getStyle(img, 'margin-right');
            var isFigure = img.tagName === 'FIGURE';

            if (isFigure) {
                var figureImage = img.querySelector('img');
                if (figureImage) {
                    width = helpers.getStyle(figureImage, 'width');
                    marginBottom = this._resetAndGet(img, 'margin-bottom', 'marginBottom') + 'px'; // _style.marginBottom;
                    marginLeft = helpers.getStyle(figureImage, 'margin-left');
                    marginRight = helpers.getStyle(figureImage, 'margin-right');
                }
            }

            img.style.setProperty('margin-bottom', '0px', 'important');
            img.style.setProperty('padding-bottom', '0px', 'important');

            // reset margin bottom
            var iFrame = document.createElement('iframe');
            iFrame.style.borderWidth = '0';
            iFrame.style.width = width;
            iFrame.style.marginBottom = marginBottom;
            iFrame.style.marginLeft = marginLeft;
            iFrame.style.marginRight = marginRight;

            img.parentNode.insertBefore(iFrame, img.nextSibling);

            if (!isFigure) {
                this._correctMargin(iFrame, img);
                this._correctSpecialCases(img);
            }

            return iFrame;
        }
    }, {
        key: '_setIFrameHeight',
        value: function _setIFrameHeight(iFrame, blockToiFrame) {

            var getIFrameHeight = function getIFrameHeight() {
                return iFrame.style.height = helpers.getStyle(blockToiFrame, 'height');
            };

            iFrame.addEventListener("readystatechange", function (e) {
                return e.target.readyState == "complete" && getIFrameHeight();
            });
        }
    }, {
        key: '_correctMargin',
        value: function _correctMargin(iFrame, node) {

            var rectImg = node.getBoundingClientRect();
            var rectIFrame = iFrame.getBoundingClientRect();

            if (rectImg.bottom !== rectIFrame.top && rectImg.bottom < rectIFrame.top) {
                iFrame.style.marginTop = -(rectIFrame.top - rectImg.bottom) + 'px';
            }
        }

        /**
         * Handler for special cases
         *
         * @param img
         * @private
         */

    }, {
        key: '_correctSpecialCases',
        value: function _correctSpecialCases(img) {

            var node = this._getNodeWithMarginEMCase(img);
            if (node) {
                node.style.setProperty('margin-left', '0px', 'important');
                node.style.setProperty('margin-right', '0px', 'important');
            }
        }

        /**
         * Rule if parent element margin-left\fight are
         * em + their parent text-align = center - reset margins
         *
         * @param node
         * @returns {null|Element}
         * @private
         */

    }, {
        key: '_getNodeWithMarginEMCase',
        value: function _getNodeWithMarginEMCase(node) {

            var result = null;

            if (!node || !node.style || !node.parentNode || !node.parentNode.style) {
                return result;
            }

            var marginsAreEM = node.style.marginLeft.search('em') != -1 && node.style.marginRight.search('em') != -1;

            if (marginsAreEM && node.parentNode.style.textAlign === 'center') {
                result = node;
            }

            if (!result) {
                result = this._getNodeWithMarginEMCase(node.parentNode);
            }

            return result;
        }

        /**
         *
         * @param node
         * @returns {*}
         * @private
         */
        //_isWrappedInText(node) {
        //
        //    if (!node) {
        //        console.error('SmartInformerCreator._isWrappedInText: No node was provided');
        //        return false;
        //    }
        //
        //    if (!node.parentNode) {
        //        return false;
        //    }
        //
        //    if (['P', 'SPAN'].indexOf(node.parentNode.tagName) != -1) {
        //        return true;
        //    }
        //
        //    return this._isWrappedInText(node.parentNode);
        //}

        /**
         * Get all children(+ their children) of the block
         * For each node - get property value - return it
         * For each node - set property value to null after getting it
         * Accumulate and return property value
         *
         * Used for reset margins
         *
         * @param block
         * @param property
         * @param propertyCamel
         * @returns {number}
         * @private
         */

    }, {
        key: '_resetAndGet',
        value: function _resetAndGet(block, property, propertyCamel) {
            var _this4 = this;

            var _style = window.getComputedStyle(block);

            var sum = _style[propertyCamel] === 'auto' ? 0 : _style[propertyCamel] !== "" ? parseInt(_style[propertyCamel].replace('px', '')) : 0;

            block.style.setProperty(property, '0', 'important');

            if (block.children && block.children.length) {
                [].forEach.call(block.children, function (e) {
                    return sum += _this4._resetAndGet(e, property, propertyCamel);
                });
            }

            return sum;
        }

        /**
         * Go throw all children nodes and sum their border height
         *
         * @param node
         * @returns {number}
         * @private
         */

    }, {
        key: '_getBorderHeight',
        value: function _getBorderHeight(node) {
            var _this5 = this;

            if (!node) {
                return 0;
            }

            var result = 0;

            if (node.children && node.children.length) {
                [].forEach.call(node.children, function (element) {
                    result += _this5._getBorderHeight(element);
                });
            }

            var style = window.getComputedStyle(node);

            var borderBottomWidth = style['borderBottomWidth'].replace('px', '');
            var borderTopWidth = style['borderTopWidth'].replace('px', '');

            return result + parseInt(borderBottomWidth === 'auto' ? 0 : borderBottomWidth) + parseInt(borderTopWidth === 'auto' ? 0 : borderTopWidth);
        }
    }, {
        key: 'stickyBlocksToPaste',
        set: function set(blocks) {
            this._stickyBlocksToPaste = blocks;
        },
        get: function get() {
            return this._stickyBlocksToPaste;
        }
    }, {
        key: 'article',
        set: function set(article) {
            this._article = article;
        },
        get: function get() {
            return this._article;
        }
    }, {
        key: 'styles',
        set: function set(styles) {
            this._styles = styles;
        }
    }, {
        key: 'images',
        get: function get() {
            return this._images;
        }
    }]);
    return ImageInformerCreator;
}();

exports.default = ImageInformerCreator;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function getNodeHeight(textNode) {
    var height = 0;
    if (document.createRange) {
        var range = document.createRange();
        range.selectNodeContents(textNode);
        if (range.getBoundingClientRect) {
            var rect = range.getBoundingClientRect();
            if (rect) {
                height = rect.bottom - rect.top;
            }
        }
    }
    //console.log(height);
    return height;
}

function isTextNode(node) {
    return node.nodeType === Node.TEXT_NODE;
}

/**
 * Get element margin
 *
 * @param {HTMLElement} _element - Web Element
 * @param {string} styleType - margin, padding, border
 * @returns {*}
 */
function getStylePx(_element) {
    var styleType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'margin';


    try {
        var style = window.getComputedStyle(_element);
        var margin = style[styleType].replace('px', '');

        return margin != 'auto' ? parseInt(margin) : 0;
    } catch (e) {

        if (_element.nodeName === '#text') {
            return getNodeHeight(_element);
        }
        return 0;
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getParentFontSize(_element) {
    var parent = _element.parentNode;
    var style = _element.currentStyle || window.getComputedStyle(_element);
    var fontSize = style.fontSize.replace('px', '');
    var lineHeight = style.lineHeight.replace('px', '');
    fontSize = isNumeric(fontSize) ? parseInt(fontSize) : 0;
    lineHeight = isNumeric(lineHeight) ? parseInt(lineHeight) : 0;

    return fontSize + lineHeight;
}

function getViewPortSize() {
    var viewportWidth = void 0;
    var viewportHeight = void 0;

    //Standards compliant browsers (mozilla/netscape/opera/IE7)
    if (typeof window.innerWidth != 'undefined') {
        viewportWidth = window.innerWidth, viewportHeight = window.innerHeight;
    }

    // IE6
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
            viewportWidth = document.documentElement.clientWidth, viewportHeight = document.documentElement.clientHeight;
        }

        //Older IE
        else {
                viewportWidth = document.getElementsByTagName('body')[0].clientWidth, viewportHeight = document.getElementsByTagName('body')[0].clientHeight;
            }

    return { viewportWidth: viewportWidth, viewportHeight: viewportHeight };
}

function getStyle(el, styleProp) {
    if (el.currentStyle) var y = el.currentStyle[styleProp];else if (window.getComputedStyle) var y = document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    return y;
}

exports.isTextNode = isTextNode;
exports.getStylePx = getStylePx;
exports.getParentFontSize = getParentFontSize;
exports.getViewPortSize = getViewPortSize;
exports.getNodeHeight = getNodeHeight;
exports.getStyle = getStyle;
exports.isNumeric = isNumeric;

/***/ })
/******/ ]);