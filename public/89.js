(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Invoice/Title.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Invoice/Title.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    logo: {
      required: false
    },
    type: {
      required: false
    },
    number: {
      required: false
    },
    quotation: {
      required: false
    },
    date: {
      required: false
    }
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    companyInfo: 'companyInfo'
  })),
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Invoice/Title.vue?vue&type=template&id=22d2a9da&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Invoice/Title.vue?vue&type=template&id=22d2a9da& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: " pr-2 pl-2 pb-0 mb-0" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          { staticClass: "pull-left text-left" },
          [_c("company-address")],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "pull-right text-left" }, [
          _c("address", { attrs: { id: "clients_address" } }, [
            _c("table", [
              _c("tr", [
                _c("td", { staticClass: "pull-right" }),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td", [
                  _c("div", { staticClass: "form-group mb-0 mt-4 w-100" }, [
                    _c("h5", { staticClass: "mt-2 pull-right" }, [
                      _c("b", [_vm._v(_vm._s(_vm.type))]),
                      _vm._v(" "),
                      _c("hr")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticClass: "pull-right" }),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td", [_c("h5", [_vm._v(_vm._s(_vm.number))])])
              ]),
              _vm._v(" "),
              _c("tr", [
                _vm._m(0),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("td", [
                  _c("h5", [_vm._v(_vm._s(_vm.companyInfo.company_vat))])
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _vm._m(2),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _c("td", [
                  _c("h5", [_vm._v(_vm._s(_vm.companyInfo.company_mobile))])
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "pull-left" }, [
          _c("address", [
            _vm._m(5),
            _vm._v(" "),
            _c("h5", [
              _vm._v("Name  :  " + _vm._s(_vm.quotation.customer.Name) + " ")
            ]),
            _vm._v(" "),
            _c("h5", [
              _vm._v(
                "Contact Person  :  " +
                  _vm._s(_vm.quotation.customer.Contact_Person) +
                  " "
              )
            ]),
            _vm._v(" "),
            _c("h5", [
              _vm._v("Phone  :  " + _vm._s(_vm.quotation.customer.Telephone))
            ]),
            _vm._v(" "),
            _c("h5", [
              _vm._v("Email  :  " + _vm._s(_vm.quotation.customer.EMail))
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("p", [
              _c("b", [_vm._v("Date  :  ")]),
              _vm._v(" " + _vm._s(_vm.date))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pull-right text-left" }, [
          _c("table", [
            _c("tr", [
              _vm._m(6),
              _vm._v(" "),
              _vm._m(7),
              _vm._v(" "),
              _c("td", [_c("h5", [_vm._v(_vm._s(_vm.quotation.cargo.bl_no))])])
            ]),
            _vm._v(" "),
            _c("tr", [
              _vm._m(8),
              _vm._v(" "),
              _vm._m(9),
              _vm._v(" "),
              _c("td", [
                _c("h5", [_vm._v(_vm._s(_vm.quotation.cargo.cargo_name))])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "pull-right text-black" }, [
                _vm._v("Vessel/DSTN")
              ]),
              _vm._v(" "),
              _vm._m(10),
              _vm._v(" "),
              _c("td", [
                _c("h5", { staticClass: "text-grey" }, [
                  _vm._v(_vm._s(_vm.quotation.cargo.vessel_name))
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "pull-right" }, [_vm._v("Quantity")]),
              _vm._v(" "),
              _vm._m(11),
              _vm._v(" "),
              _c("td", [
                _c("h5", [_vm._v(_vm._s(_vm.quotation.cargo.cargo_qty))])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "pull-right" }, [_vm._v("Weight")]),
              _vm._v(" "),
              _vm._m(12),
              _vm._v(" "),
              _c("td", [
                _c("h5", [_vm._v(_vm._s(_vm.quotation.cargo.cargo_weight))])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "pull-right" }, [_vm._v("Date")]),
              _vm._v(" "),
              _vm._m(13),
              _vm._v(" "),
              _c("td", [_c("h5", [_vm._v(_vm._s(_vm.date))])])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "pull-right" }, [
      _c("h5", [_vm._v("Tax Registration")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("h5", [_vm._v(" :  ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "pull-right" }, [
      _c("h5", [_vm._v("Telephone ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("h5", [_vm._v(" : ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12" }, [_c("hr")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", [_c("b", [_vm._v("To")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "pull-right" }, [
      _c("h5", [_vm._v("B/L NO")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("h5", [_vm._v("  :  ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "pull-right" }, [
      _c("h5", [_vm._v("Cargo ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("h5", [_vm._v("  :  ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("h5", [_vm._v("  :  ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("h5", [_vm._v("  :  ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("h5", [_vm._v("  :  ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("h5", [_vm._v("  :  ")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/Invoice/Title.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/views/Invoice/Title.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Title_vue_vue_type_template_id_22d2a9da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Title.vue?vue&type=template&id=22d2a9da& */ "./resources/assets/js/views/Invoice/Title.vue?vue&type=template&id=22d2a9da&");
/* harmony import */ var _Title_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/Invoice/Title.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Title_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Title_vue_vue_type_template_id_22d2a9da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Title_vue_vue_type_template_id_22d2a9da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/Invoice/Title.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/Invoice/Title.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/views/Invoice/Title.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Title.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Invoice/Title.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/Invoice/Title.vue?vue&type=template&id=22d2a9da&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/views/Invoice/Title.vue?vue&type=template&id=22d2a9da& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_template_id_22d2a9da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Title.vue?vue&type=template&id=22d2a9da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Invoice/Title.vue?vue&type=template&id=22d2a9da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_template_id_22d2a9da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_template_id_22d2a9da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);