(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Tab.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/Tab.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    jobid: {
      required: true,
      type: Number
    }
  },
  data: function data() {
    return {
      currentPath: '',
      stepId: ''
    };
  },
  computed: {
    setActiveClassOnJobStep: function setActiveClassOnJobStep() {
      return this.$route.matched.some(function (route) {
        return route.name === 'job_processing_step_details_job_step_step_details';
      }) || this.$route.matched.some(function (route) {
        return route.name === 'job_processing_job_steps';
      });
    }
  },
  methods: {
    loadStepDetails: function loadStepDetails() {
      Event.fire('load-first-step-details');
    }
  },
  mounted: function mounted() {
    this.currentPath = this.$route.path;
    this.stepId = this.$route.params.stepId;

    if (this.$route.path === '/') {
      this.$router.push({
        name: 'job_processing_job_steps',
        params: {
          jobId: this.jobid
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Tab.vue?vue&type=template&id=b2b4915a&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/Tab.vue?vue&type=template&id=b2b4915a& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      {
        staticClass: "col-lg-12 col-xlg-12 col-md-12",
        staticStyle: { "border-top": "1px solid #dee2e6" }
      },
      [
        _c("div", { staticClass: "card" }, [
          _c(
            "ul",
            {
              staticClass: "nav nav-tabs profile-tab",
              attrs: { role: "tablist" }
            },
            [
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  on: {
                    click: function($event) {
                      return _vm.loadStepDetails()
                    }
                  }
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      class: { active: _vm.setActiveClassOnJobStep },
                      attrs: {
                        to: {
                          name: "job_processing_job_steps",
                          params: { jobId: _vm.jobid }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Job Processing\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link ",
                      attrs: {
                        to: {
                          name: "job_processing_clients_documents",
                          params: { jobId: _vm.jobid }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Clients Documents\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link ",
                      attrs: {
                        to: {
                          name: "job_processing_cargo_images",
                          params: { jobId: _vm.jobid }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Cargo Images\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link ",
                      attrs: {
                        to: "/job-processing/job-dsr",
                        to: {
                          name: "job_processing_job_dsr",
                          params: { jobId: _vm.jobid }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        DSR\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link ",
                      attrs: {
                        to: "/job-processing/job-delivery-docs",
                        to: {
                          name: "job_processing_job_delivery_docs",
                          params: { jobId: _vm.jobid }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Delivery Docs\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link ",
                      attrs: {
                        to: "/job-processing/complete-job",
                        to: {
                          name: "job_processing_complete_job",
                          params: { jobId: _vm.jobid }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Complete\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link ",
                      attrs: {
                        to: "/job-processing/project-cost",
                        to: {
                          name: "job_processing_project_cost",
                          params: { jobId: _vm.jobid }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Project Cost\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link ",
                      attrs: {
                        to: "/job-processing/purchase-order",
                        to: {
                          name: "job_processing_purchase_order",
                          params: { jobId: _vm.jobid }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Purchase Order\n                    "
                      )
                    ]
                  )
                ],
                1
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/Tab.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/Tab.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tab_vue_vue_type_template_id_b2b4915a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab.vue?vue&type=template&id=b2b4915a& */ "./resources/assets/js/views/JobProcessing/Tab.vue?vue&type=template&id=b2b4915a&");
/* harmony import */ var _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tab.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/JobProcessing/Tab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tab_vue_vue_type_template_id_b2b4915a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tab_vue_vue_type_template_id_b2b4915a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/JobProcessing/Tab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/Tab.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/Tab.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Tab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/Tab.vue?vue&type=template&id=b2b4915a&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/Tab.vue?vue&type=template&id=b2b4915a& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_b2b4915a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tab.vue?vue&type=template&id=b2b4915a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Tab.vue?vue&type=template&id=b2b4915a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_b2b4915a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_b2b4915a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);