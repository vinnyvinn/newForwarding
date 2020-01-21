(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Quotation/Services/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Quotation/Services/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    quoteid: {
      "default": null,
      type: Number
    },
    type: {
      "default": null,
      type: String
    },
    dclink: {
      "default": null,
      type: Number
    },
    currency: {
      required: true
    },
    taxes: {
      required: false,
      type: Array,
      "default": null
    },
    savedquotationservices: {
      required: false,
      type: Array,
      "default": null
    }
  },
  data: function data() {
    return {
      title: '',
      selectedServiceValue: null,
      quotationService: [],
      value: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    quotationServices: 'quotationServices',
    customerDetailsSet: 'customerDetailsSet'
  }), {
    showSubtotals: function showSubtotals() {
      return !_.isEmpty(this.quotationServices);
    },
    subTotalAmountExclTax: function subTotalAmountExclTax() {
      return this.quotationServices.reduce(function (sum, obj) {
        return sum + parseFloat(obj.total);
      }, 0);
    },
    subTotalAmountInclTax: function subTotalAmountInclTax() {
      return this.quotationServices.reduce(function (sum, obj) {
        return sum + parseFloat(obj.totalInclTax);
      }, 0);
    }
  }),
  methods: {
    formatToCurrency: function formatToCurrency(value) {
      return parseFloat(value).toFixed(2);
    },
    formatMoney: function formatMoney(amount) {
      var decimalCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".";
      var thousands = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ",";

      try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
        var negativeSign = amount < 0 ? "-" : "";
        var i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        var j = i.length > 3 ? i.length % 3 : 0;
        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
      } catch (e) {
        console.log(e);
      }
    },
    loadSavedServices: function loadSavedServices() {
      var _this = this;

      _.map(this.savedquotationservices, function (service) {
        var quantity = _this.formatToCurrency(service.total_units),
            sellingPrice = _this.formatToCurrency(service.selling_price);

        var totalInclTax = _this.formatToCurrency(sellingPrice * quantity + quantity * sellingPrice * (service.tax_details.TaxRate / 100));

        var quotationService = {
          service: service,
          id: service.id,
          service_id: service.service_id,
          stock_link: service.stock_link,
          selling_price: service.selling_price,
          tax_code: service.tax_code,
          tax_description: service.tax_description,
          tax_id: service.tax_id,
          type: service.type,
          unit: service.unit,
          name: service.name,
          total_units: service.total_units,
          tax_details: service.tax_details,
          tax: service.tax,
          total: _this.formatToCurrency(sellingPrice * quantity),
          totalInclTax: totalInclTax
        };

        _this.$store.commit('SET_QUOTATION_SERVICES', quotationService);
      });
    },
    moneySymbol: function moneySymbol(value) {
      return value === 'USD' ? '$' : 'Ksh';
    }
  },
  mounted: function mounted() {
    if (!_.isNil(this.quoteid)) {
      this.loadSavedServices();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Quotation/Services/Show.vue?vue&type=template&id=10918f70&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Quotation/Services/Show.vue?vue&type=template&id=10918f70& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("hr", { staticClass: "mt-0" }),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-12 table-responsive" }, [
      _c("table", { staticClass: "table table table-bordered" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          { attrs: { id: "service_table" } },
          _vm._l(_vm.quotationServices, function(service, index) {
            return _c("tr", [
              _c("td", [_vm._v(_vm._s(service.name))]),
              _vm._v(" "),
              _c("td", { staticClass: "text-right" }, [
                _vm._v(_vm._s(service.total_units))
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "text-right" }, [
                _vm._v(
                  _vm._s(
                    _vm._f("currency")(
                      service.selling_price,
                      _vm.moneySymbol(_vm.currency)
                    )
                  )
                )
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "text-right" }, [
                _vm._v(
                  _vm._s(
                    _vm._f("currency")(
                      service.total,
                      _vm.moneySymbol(_vm.currency)
                    )
                  )
                )
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "text-right" }, [
                _vm._v(_vm._s(service.tax_details.TaxRate) + " %")
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "text-right" }, [
                _vm._v(
                  _vm._s(
                    _vm._f("currency")(
                      service.totalInclTax,
                      _vm.moneySymbol(_vm.currency)
                    )
                  )
                )
              ])
            ])
          }),
          0
        ),
        _vm._v(" "),
        _vm.showSubtotals
          ? _c("tfoot", [
              _c("tr", [
                _c("td", { attrs: { colspan: "4" } }),
                _vm._v(" "),
                _c("td", { staticClass: "text-right" }, [
                  _vm._v("Total (Excl) " + _vm._s(_vm.currency) + ".  :")
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      _vm._f("currency")(
                        _vm.subTotalAmountExclTax,
                        _vm.moneySymbol(_vm.currency)
                      )
                    )
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", { attrs: { colspan: "4" } }),
                _vm._v(" "),
                _c("td", { staticClass: "text-right" }, [
                  _vm._v("Total Tax  " + _vm._s(_vm.currency) + " :")
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      _vm._f("currency")(
                        _vm.subTotalAmountInclTax - _vm.subTotalAmountExclTax,
                        _vm.moneySymbol(_vm.currency)
                      )
                    )
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", { attrs: { colspan: "4" } }),
                _vm._v(" "),
                _c("td", { staticClass: "text-right" }, [
                  _vm._v("Total Incl.  " + _vm._s(_vm.currency) + ":")
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      _vm._f("currency")(
                        _vm.subTotalAmountInclTax,
                        _vm.moneySymbol(_vm.currency)
                      )
                    )
                  )
                ])
              ])
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("hr")
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: " text-uppercase small font-weight-bold" }, [
          _vm._v("DESCRIPTION")
        ]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-right text-uppercase small font-weight-bold" },
          [_vm._v("QUANTITY")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-right  text-uppercase small font-weight-bold" },
          [_vm._v("UNIT PRICE")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-right text-uppercase small font-weight-bold" },
          [_vm._v("TOTAL EXCL.")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-right text-uppercase small font-weight-bold" },
          [_vm._v("TAX")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-right  text-uppercase small font-weight-bold" },
          [_vm._v("TOTAL INCL.")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/Quotation/Services/Show.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/views/Quotation/Services/Show.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_10918f70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=10918f70& */ "./resources/assets/js/views/Quotation/Services/Show.vue?vue&type=template&id=10918f70&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/Quotation/Services/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_10918f70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_10918f70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/Quotation/Services/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/Quotation/Services/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/views/Quotation/Services/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Quotation/Services/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/Quotation/Services/Show.vue?vue&type=template&id=10918f70&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/views/Quotation/Services/Show.vue?vue&type=template&id=10918f70& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_10918f70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=10918f70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Quotation/Services/Show.vue?vue&type=template&id=10918f70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_10918f70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_10918f70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);