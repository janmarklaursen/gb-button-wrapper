/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./build/index.js ***!
  \************************/
/******/(function () {
  // webpackBootstrap
  /******/
  "use strict";

  /******/
  var __webpack_modules__ = {
    /***/"./src/edit.js":
    /*!*********************!*\
      !*** ./src/edit.js ***!
      \*********************/
    /***/
    function (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_302__) {
      __nested_webpack_require_302__.r(__webpack_exports__);
      /* harmony export */
      __nested_webpack_require_302__.d(__webpack_exports__, {
        /* harmony export */"default": function () {
          return (/* binding */Edit
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_302__( /*! @babel/runtime/helpers/extends */"../node_modules/@babel/runtime/helpers/esm/extends.js");
      /* harmony import */
      var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_302__( /*! @wordpress/element */"@wordpress/element");
      /* harmony import */
      var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_302__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */
      var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_302__( /*! @wordpress/i18n */"@wordpress/i18n");
      /* harmony import */
      var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_302__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */
      var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_302__( /*! @wordpress/block-editor */"@wordpress/block-editor");
      /* harmony import */
      var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_302__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */
      var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_302__( /*! ./editor.scss */"./src/editor.scss");
      function Edit(props) {
        return (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(), {
          className: "embed-video--container"
        }), (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("video", {
          className: "background-video--video extra--class",
          autoplay: true,
          loop: true,
          muted: true,
          poster: "https://assets.codepen.io/6093409/river.jpg"
        }, (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
          src: "https://assets.codepen.io/6093409/river.mp4",
          type: "video/mp4"
        })), (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, null));
      }

      /***/
    },

    /***/"./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /***/
    function (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_3143__) {
      __nested_webpack_require_3143__.r(__webpack_exports__);
      /* harmony import */
      var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3143__( /*! @wordpress/blocks */"@wordpress/blocks");
      /* harmony import */
      var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_3143__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */
      var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_3143__( /*! ./style.scss */"./src/style.scss");
      /* harmony import */
      var _edit__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_3143__( /*! ./edit */"./src/edit.js");
      /* harmony import */
      var _save__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_3143__( /*! ./save */"./src/save.js");
      /* harmony import */
      var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_3143__( /*! ./block.json */"./src/block.json");
      /**
       * Registers a new block provided a unique name and an object defining its behavior.
       *
       * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
       */

      /**
       * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
       * All files containing `style` keyword are bundled together. The code used
       * gets applied both to the front of your site and to the editor.
       *
       * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
       */

      /**
       * Internal dependencies
       */

      (0, _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
        edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
        save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
      });

      /***/
    },

    /***/"./src/save.js":
    /*!*********************!*\
      !*** ./src/save.js ***!
      \*********************/
    /***/
    function (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_5168__) {
      __nested_webpack_require_5168__.r(__webpack_exports__);
      /* harmony export */
      __nested_webpack_require_5168__.d(__webpack_exports__, {
        /* harmony export */"default": function () {
          return (/* binding */save
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_5168__( /*! @babel/runtime/helpers/extends */"../node_modules/@babel/runtime/helpers/esm/extends.js");
      /* harmony import */
      var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_5168__( /*! @wordpress/element */"@wordpress/element");
      /* harmony import */
      var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_5168__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */
      var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_5168__( /*! @wordpress/block-editor */"@wordpress/block-editor");
      /* harmony import */
      var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_5168__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
      function save(props) {
        return (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), {
          className: "background-video--container"
        }), (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
      }

      /***/
    },

    /***/"./src/editor.scss":
    /*!*************************!*\
      !*** ./src/editor.scss ***!
      \*************************/
    /***/
    function (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_7102__) {
      __nested_webpack_require_7102__.r(__webpack_exports__);
      // extracted by mini-css-extract-plugin

      /***/
    },

    /***/"./src/style.scss":
    /*!************************!*\
      !*** ./src/style.scss ***!
      \************************/
    /***/
    function (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_7442__) {
      __nested_webpack_require_7442__.r(__webpack_exports__);
      // extracted by mini-css-extract-plugin

      /***/
    },

    /***/"@wordpress/block-editor":
    /*!*************************************!*\
      !*** external ["wp","blockEditor"] ***!
      \*************************************/
    /***/
    function (module) {
      module.exports = window["wp"]["blockEditor"];

      /***/
    },

    /***/"@wordpress/blocks":
    /*!********************************!*\
      !*** external ["wp","blocks"] ***!
      \********************************/
    /***/
    function (module) {
      module.exports = window["wp"]["blocks"];

      /***/
    },

    /***/"@wordpress/element":
    /*!*********************************!*\
      !*** external ["wp","element"] ***!
      \*********************************/
    /***/
    function (module) {
      module.exports = window["wp"]["element"];

      /***/
    },

    /***/"@wordpress/i18n":
    /*!******************************!*\
      !*** external ["wp","i18n"] ***!
      \******************************/
    /***/
    function (module) {
      module.exports = window["wp"]["i18n"];

      /***/
    },

    /***/"../node_modules/@babel/runtime/helpers/esm/extends.js":
    /*!*************************************************************!*\
      !*** ../node_modules/@babel/runtime/helpers/esm/extends.js ***!
      \*************************************************************/
    /***/
    function (__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_8991__) {
      __nested_webpack_require_8991__.r(__webpack_exports__);
      /* harmony export */
      __nested_webpack_require_8991__.d(__webpack_exports__, {
        /* harmony export */"default": function () {
          return (/* binding */_extends
          );
        }
        /* harmony export */
      });
      function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }

      /***/
    },

    /***/"./src/block.json":
    /*!************************!*\
      !*** ./src/block.json ***!
      \************************/
    /***/
    function (module) {
      module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"create-block/jamaa-embed-video","version":"0.1.0","title":"Jamaa Embed Video","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","supports":{"html":false},"attributes":{"acf_field":{"type":"string","default":"https://www.youtube.com/watch?v=7E4r16Oxjno"}},"textdomain":"jamaa_embed_video","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","script":"file:./frontend.js"}');

      /***/
    }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __nested_webpack_require_10805__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_10805__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __nested_webpack_require_10805__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/chunk loaded */
  /******/
  !function () {
    /******/var deferred = [];
    /******/
    __nested_webpack_require_10805__.O = function (result, chunkIds, fn, priority) {
      /******/if (chunkIds) {
        /******/priority = priority || 0;
        /******/
        for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
        /******/
        deferred[i] = [chunkIds, fn, priority];
        /******/
        return;
        /******/
      }
      /******/
      var notFulfilled = Infinity;
      /******/
      for (var i = 0; i < deferred.length; i++) {
        /******/var chunkIds = deferred[i][0];
        /******/
        var fn = deferred[i][1];
        /******/
        var priority = deferred[i][2];
        /******/
        var fulfilled = true;
        /******/
        for (var j = 0; j < chunkIds.length; j++) {
          /******/if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__nested_webpack_require_10805__.O).every(function (key) {
            return __nested_webpack_require_10805__.O[key](chunkIds[j]);
          })) {
            /******/chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/fulfilled = false;
            /******/
            if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/
        }
        /******/
        if (fulfilled) {
          /******/deferred.splice(i--, 1);
          /******/
          var r = fn();
          /******/
          if (r !== undefined) result = r;
          /******/
        }
        /******/
      }
      /******/
      return result;
      /******/
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/compat get default export */
  /******/
  !function () {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__nested_webpack_require_10805__.n = function (module) {
      /******/var getter = module && module.__esModule ? /******/function () {
        return module['default'];
      } : /******/function () {
        return module;
      };
      /******/
      __nested_webpack_require_10805__.d(getter, {
        a: getter
      });
      /******/
      return getter;
      /******/
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/
  !function () {
    /******/ // define getter functions for harmony exports
    /******/__nested_webpack_require_10805__.d = function (exports, definition) {
      /******/for (var key in definition) {
        /******/if (__nested_webpack_require_10805__.o(definition, key) && !__nested_webpack_require_10805__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  !function () {
    /******/__nested_webpack_require_10805__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  !function () {
    /******/ // define __esModule on exports
    /******/__nested_webpack_require_10805__.r = function (exports) {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/
  !function () {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/var installedChunks = {
      /******/"index": 0,
      /******/"./style-index": 0
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/
    __nested_webpack_require_10805__.O.j = function (chunkId) {
      return installedChunks[chunkId] === 0;
    };
    /******/
    /******/ // install a JSONP callback for chunk loading
    /******/
    var webpackJsonpCallback = function (parentChunkLoadingFunction, data) {
      /******/var chunkIds = data[0];
      /******/
      var moreModules = data[1];
      /******/
      var runtime = data[2];
      /******/ // add "moreModules" to the modules object,
      /******/ // then flag all "chunkIds" as loaded and fire callback
      /******/
      var moduleId,
        chunkId,
        i = 0;
      /******/
      if (chunkIds.some(function (id) {
        return installedChunks[id] !== 0;
      })) {
        /******/for (moduleId in moreModules) {
          /******/if (__nested_webpack_require_10805__.o(moreModules, moduleId)) {
            /******/__nested_webpack_require_10805__.m[moduleId] = moreModules[moduleId];
            /******/
          }
          /******/
        }
        /******/
        if (runtime) var result = runtime(__nested_webpack_require_10805__);
        /******/
      }
      /******/
      if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/
      for (; i < chunkIds.length; i++) {
        /******/chunkId = chunkIds[i];
        /******/
        if (__nested_webpack_require_10805__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          /******/installedChunks[chunkId][0]();
          /******/
        }
        /******/
        installedChunks[chunkId] = 0;
        /******/
      }
      /******/
      return __nested_webpack_require_10805__.O(result);
      /******/
    };
    /******/
    /******/
    var chunkLoadingGlobal = self["webpackChunkjamaa_embed_video"] = self["webpackChunkjamaa_embed_video"] || [];
    /******/
    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/
    chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    /******/
  }();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module depends on other loaded chunks and execution need to be delayed
  /******/
  var __webpack_exports__ = __nested_webpack_require_10805__.O(undefined, ["./style-index"], function () {
    return __nested_webpack_require_10805__("./src/index.js");
  });
  /******/
  __webpack_exports__ = __nested_webpack_require_10805__.O(__webpack_exports__);
  /******/
  /******/
})();
/******/ })()
;
//# sourceMappingURL=build.js.map