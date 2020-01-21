(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/StageTypes/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobWorkflow/StageTypes/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      form: {
        shipment_type_id: null,
        shipment_sub_type_id: null
      },
      shipmentTypes: null,
      shipmentSubTypes: null,
      selectedShipmentType: null,
      selectedShipmentSubType: null
    };
  },
  methods: {
    getShipments: function getShipments() {
      var _this = this;

      this.getRecord('/api/shipmentTypes', {
        all: true
      }, 'Shipment Sub-Types').then(function (response) {
        _this.shipmentTypes = response.data;
      });
    },
    getShipmentValue: function getShipmentValue(value) {
      this.form.shipment_type_id = value.id;
    },
    clearShipmentInput: function clearShipmentInput() {
      this.selectedShipmentType = null;
    },
    getShipmentsSubTypes: function getShipmentsSubTypes() {
      var _this2 = this;

      this.getRecord('/api/shipmentTypes', {
        all: true
      }, 'Shipment Sub-Types').then(function (response) {
        _this2.shipmentSubTypes = response.data;
      });
    },
    getShipmentSubTypeValue: function getShipmentSubTypeValue(value) {
      this.form.shipment_sub_type_id = value.id;
    },
    clearShipmentSubTypeInput: function clearShipmentSubTypeInput() {
      this.selectedShipmentSubType = null;
    }
  },
  created: function created() {
    this.getShipments();
    this.getShipmentsSubTypes();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/StageTypes/Index.vue?vue&type=template&id=bff90478&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobWorkflow/StageTypes/Index.vue?vue&type=template&id=bff90478& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "form-group col-md-12" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("ValidationProvider", {
            attrs: { rules: "required", name: "Shipment type" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var errors = ref.errors
                  return [
                    _c(
                      "v-select",
                      {
                        attrs: { filterable: true, options: _vm.shipmentTypes },
                        on: {
                          input: _vm.getShipmentValue,
                          "search:focus": _vm.clearShipmentInput
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "option",
                              fn: function(option) {
                                return [
                                  _c("div", { staticClass: "d-center" }, [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(option.name) +
                                        "\n                        "
                                    )
                                  ])
                                ]
                              }
                            },
                            {
                              key: "selected-option",
                              fn: function(option) {
                                return [
                                  _c(
                                    "div",
                                    { staticClass: "selected d-center" },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(option.name) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        ),
                        model: {
                          value: _vm.selectedShipmentType,
                          callback: function($$v) {
                            _vm.selectedShipmentType = $$v
                          },
                          expression: "selectedShipmentType"
                        }
                      },
                      [
                        _c("template", { slot: "no-options" }, [
                          _vm._v(
                            "\n                        Select shipment type\n                    "
                          )
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "form-control-feedback" }, [
                      _vm._v(_vm._s(errors[0]))
                    ])
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group col-md-12" }, [
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("ValidationProvider", {
            attrs: { rules: "required", name: "Shipment sub-type" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var errors = ref.errors
                  return [
                    _c(
                      "v-select",
                      {
                        attrs: {
                          filterable: true,
                          options: _vm.shipmentSubTypes
                        },
                        on: {
                          input: _vm.getShipmentSubTypeValue,
                          "search:focus": _vm.clearShipmentSubTypeInput
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "option",
                              fn: function(option) {
                                return [
                                  _c("div", { staticClass: "d-center" }, [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(option.name) +
                                        "\n                        "
                                    )
                                  ])
                                ]
                              }
                            },
                            {
                              key: "selected-option",
                              fn: function(option) {
                                return [
                                  _c(
                                    "div",
                                    { staticClass: "selected d-center" },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(option.name) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        ),
                        model: {
                          value: _vm.selectedShipmentSubType,
                          callback: function($$v) {
                            _vm.selectedShipmentSubType = $$v
                          },
                          expression: "selectedShipmentSubType"
                        }
                      },
                      [
                        _c("template", { slot: "no-options" }, [
                          _vm._v(
                            "\n                        Select shipment sub type\n                    "
                          )
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "form-control-feedback" }, [
                      _vm._v(_vm._s(errors[0]))
                    ])
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "col-md-12 control-label" }, [
      _vm._v("\n            Shipment Type\n            "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "col-md-12 control-label" }, [
      _vm._v("\n            Shipment Sub-Type\n            "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/JobWorkflow/StageTypes/Index.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/views/JobWorkflow/StageTypes/Index.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_bff90478___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=bff90478& */ "./resources/assets/js/views/JobWorkflow/StageTypes/Index.vue?vue&type=template&id=bff90478&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/JobWorkflow/StageTypes/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_bff90478___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_bff90478___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/JobWorkflow/StageTypes/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/JobWorkflow/StageTypes/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/views/JobWorkflow/StageTypes/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/StageTypes/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/JobWorkflow/StageTypes/Index.vue?vue&type=template&id=bff90478&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/views/JobWorkflow/StageTypes/Index.vue?vue&type=template&id=bff90478& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bff90478___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=bff90478& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/StageTypes/Index.vue?vue&type=template&id=bff90478&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bff90478___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bff90478___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);