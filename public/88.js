(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Invoice/Client/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Invoice/Client/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
    quotationInfo: {
      required: true
    }
  },
  data: function data() {
    return {
      quotation: {
        cargo: {
          id: '',
          bl_no: '',
          cargo_name: '',
          vessel_name: '',
          cargo_qty: '',
          cargo_weight: '',
          container_no: '',
          consignee_name: ''
        },
        customer: {
          id: '',
          Name: '',
          Contact_Person: '',
          Telephone: '',
          EMail: ''
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Invoice/Client/Edit.vue?vue&type=template&id=08f74d69&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Invoice/Client/Edit.vue?vue&type=template&id=08f74d69& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _c(
      "button",
      {
        staticClass: "btn btn-info",
        staticStyle: { display: "none" },
        attrs: {
          "data-toggle": "modal",
          "data-target": ".bs-example-modal-details"
        }
      },
      [_vm._v("\n        Edit Details\n    ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade bs-example-modal-details",
        staticStyle: { display: "none" },
        attrs: {
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "myLargeModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "form",
                  {
                    staticClass: "form-material m-t-40",
                    attrs: { action: "", method: "post" }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.quotation.cargo.id,
                            expression: "quotation.cargo.id"
                          }
                        ],
                        attrs: { type: "hidden", name: "cargo_id" },
                        domProps: { value: _vm.quotation.cargo.id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.quotation.cargo,
                              "id",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.quotation.customer.id,
                            expression: "quotation.customer.id"
                          }
                        ],
                        attrs: { type: "hidden", name: "customer_id" },
                        domProps: { value: _vm.quotation.customer.id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.quotation.customer,
                              "id",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "Name" } }, [
                            _vm._v("Customer Name")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.quotation.customer.Name,
                                expression: "quotation.customer.Name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              required: "",
                              id: "Name",
                              name: "Name"
                            },
                            domProps: { value: _vm.quotation.customer.Name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.quotation.customer,
                                  "Name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "Contact_Person" } }, [
                            _vm._v("Contact Person")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.quotation.customer.Contact_Person,
                                expression: "quotation.customer.Contact_Person"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              required: "",
                              id: "Contact_Person",
                              name: "Contact_Person"
                            },
                            domProps: {
                              value: _vm.quotation.customer.Contact_Person
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.quotation.customer,
                                  "Contact_Person",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "Telephone" } }, [
                            _vm._v("Phone")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.quotation.customer.Telephone,
                                expression: "quotation.customer.Telephone"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              required: "",
                              id: "Telephone",
                              name: "Telephone"
                            },
                            domProps: {
                              value: _vm.quotation.customer.Telephone
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.quotation.customer,
                                  "Telephone",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "EMail" } }, [
                            _vm._v("Email")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.quotation.customer.EMail,
                                expression: "quotation.customer.EMail"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              required: "",
                              id: "EMail",
                              name: "EMail"
                            },
                            domProps: { value: _vm.quotation.customer.EMail },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.quotation.customer,
                                  "EMail",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "bl_no" } }, [
                            _vm._v("B/L NO")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.quotation.cargo.bl_no,
                                expression: "quotation.cargo.bl_no"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              required: "",
                              id: "bl_no",
                              name: "bl_no"
                            },
                            domProps: { value: _vm.quotation.cargo.bl_no },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.quotation.cargo,
                                  "bl_no",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "cargo_name" } }, [
                            _vm._v("CARGO")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.quotation.cargo.cargo_name,
                                expression: "quotation.cargo.cargo_name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              required: "",
                              id: "cargo_name",
                              name: "cargo_name"
                            },
                            domProps: { value: _vm.quotation.cargo.cargo_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.quotation.cargo,
                                  "cargo_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "vessel_name" } }, [
                            _vm._v("VESSEL/DSTN")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.quotation.cargo.vessel_name,
                                expression: "quotation.cargo.vessel_name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              required: "",
                              id: "vessel_name",
                              name: "vessel_name"
                            },
                            domProps: {
                              value: _vm.quotation.cargo.vessel_name
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.quotation.cargo,
                                  "vessel_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "cargo_qty" } }, [
                            _vm._v("QUANTITY")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.quotation.cargo.cargo_qty,
                                expression: "quotation.cargo.cargo_qty"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "number",
                              required: "",
                              id: "cargo_qty",
                              name: "cargo_qty"
                            },
                            domProps: { value: _vm.quotation.cargo.cargo_qty },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.quotation.cargo,
                                  "cargo_qty",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "cargo_weight" } }, [
                            _vm._v("WEIGHT")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.quotation.cargo.cargo_weight,
                                expression: "quotation.cargo.cargo_weight"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              required: "",
                              id: "cargo_weight",
                              name: "cargo_weight"
                            },
                            domProps: {
                              value: _vm.quotation.cargo.cargo_weight
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.quotation.cargo,
                                  "cargo_weight",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "container_no" } }, [
                            _vm._v("C'NER")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.quotation.cargo.container_no,
                                expression: "quotation.cargo.container_no"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              required: "",
                              id: "container_no",
                              name: "container_no"
                            },
                            domProps: {
                              value: _vm.quotation.cargo.container_no
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.quotation.cargo,
                                  "container_no",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "consignee_name" } }, [
                            _vm._v("CONSIGNEE")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.quotation.cargo.consignee_name,
                                expression: "quotation.cargo.consignee_name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              required: "",
                              id: "consignee_name",
                              name: "consignee_name"
                            },
                            domProps: {
                              value: _vm.quotation.cargo.consignee_name
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.quotation.cargo,
                                  "consignee_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(1)
                    ])
                  ]
                )
              ])
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h4",
        { staticClass: "modal-title", attrs: { id: "myLargeModalLabel" } },
        [_vm._v("Edit DSR")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-hidden": "true"
          }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("input", {
        staticClass: "btn pull-right btn-primary",
        attrs: { type: "submit", value: "Update" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "modal-footer" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-danger waves-effect pull-left",
            staticStyle: { "margin-top": "-16px" },
            attrs: { type: "button", "data-dismiss": "modal" }
          },
          [_vm._v("Close\n                                        ")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12" }, [_c("hr")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/Invoice/Client/Edit.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/views/Invoice/Client/Edit.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_08f74d69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=08f74d69& */ "./resources/assets/js/views/Invoice/Client/Edit.vue?vue&type=template&id=08f74d69&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/Invoice/Client/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_08f74d69___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_08f74d69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/Invoice/Client/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/Invoice/Client/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/views/Invoice/Client/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Invoice/Client/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/Invoice/Client/Edit.vue?vue&type=template&id=08f74d69&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/views/Invoice/Client/Edit.vue?vue&type=template&id=08f74d69& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_08f74d69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=08f74d69& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Invoice/Client/Edit.vue?vue&type=template&id=08f74d69&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_08f74d69___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_08f74d69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);