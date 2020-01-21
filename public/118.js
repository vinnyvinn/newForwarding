(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Reports/LeadsReportComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Reports/LeadsReportComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuetable_2_src_components_Vuetable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetable-2/src/components/Vuetable */ "./node_modules/vuetable-2/src/components/Vuetable.vue");
/* harmony import */ var vuetable_2_src_components_VuetablePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetable-2/src/components/VuetablePagination */ "./node_modules/vuetable-2/src/components/VuetablePagination.vue");
/* harmony import */ var vuetable_2_src_components_VuetablePaginationInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetable-2/src/components/VuetablePaginationInfo */ "./node_modules/vuetable-2/src/components/VuetablePaginationInfo.vue");
/* harmony import */ var _mixins_vuetable_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/vuetable-2 */ "./resources/assets/js/mixins/vuetable-2.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_vuetable_2__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    Vuetable: vuetable_2_src_components_Vuetable__WEBPACK_IMPORTED_MODULE_0__["default"],
    VuetablePagination: vuetable_2_src_components_VuetablePagination__WEBPACK_IMPORTED_MODULE_1__["default"],
    VuetablePaginationInfo: vuetable_2_src_components_VuetablePaginationInfo__WEBPACK_IMPORTED_MODULE_2__["default"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: [{
        name: 'name',
        title: 'Name ',
        titleClass: 'sorting text-center',
        dataClass: 'text-center'
      }, {
        name: 'contact_person',
        title: 'Contact Person',
        sortField: 'contact_person',
        titleClass: 'sorting'
      }, {
        name: 'phone',
        title: 'Telephone',
        sortField: 'phone',
        titleClass: 'sorting'
      }, {
        name: 'email',
        sortField: 'email',
        titleClass: 'sorting'
      }, {
        name: 'currency',
        title: 'currency',
        sortField: 'currency',
        titleClass: 'sorting'
      }, {
        name: 'created_at',
        title: 'Created',
        sortField: 'generated_on',
        titleClass: 'sorting text-center',
        dataClass: 'text-center'
      }],
      sortOrder: [{
        field: 'name',
        sortField: 'name',
        direction: 'asc'
      }],
      moreParams: {
        status: 1,
        startDate: null,
        endDate: null
      },
      customPagination: {},
      startDate: null,
      endDate: null
    };
  },
  computed: {
    dataFrom: function dataFrom() {
      var today = new Date();
      return !_.isEmpty(this.formatDate(this.startDate, 'D-M-YYYY')) ? this.formatDate(this.startDate, 'D-M-YYYY') : this.formatDate(moment__WEBPACK_IMPORTED_MODULE_5___default()(today).subtract(30, 'day'), 'D-M-YYYY');
    },
    dateTo: function dateTo() {
      var today = new Date();
      return !_.isEmpty(this.formatDate(this.endDate, 'D-M-YYYY')) ? this.formatDate(this.endDate, 'D-M-YYYY') : this.formatDate(moment__WEBPACK_IMPORTED_MODULE_5___default()(today).add(1, 'day'), 'D-M-YYYY');
    }
  },
  methods: {
    onCellClicked: function onCellClicked(data, field, event) {
      console.log('cellClicked: ', field.name);
      this.$refs.vuetable.toggleDetailRow(data.id);
    },
    setStartDate: function setStartDate(date) {
      this.startDate = date;
      this.moreParams.from = this.formatDate(this.startDate);
      Event.fire('refresh-data');
    },
    setEndDate: function setEndDate(date) {
      this.endDate = date;
      this.moreParams.to = this.formatDate(this.endDate);
      Event.fire('refresh-data');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Reports/LeadsReportComponent.vue?vue&type=template&id=3638d355&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Reports/LeadsReportComponent.vue?vue&type=template&id=3638d355& ***!
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row card-title  " }, [
            _vm._m(0),
            _vm._v(" "),
            _c("h4", { staticClass: "col-md-4  text-center" }, [
              _vm._v("Leads Report")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-4 " },
              [
                _c("custom-pagination-info", {
                  ref: "pagination",
                  attrs: {
                    customPagination: _vm.customPagination,
                    css: _vm.css.pagination
                  },
                  on: { "vuetable-pagination:change-page": _vm.onChangePage }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("hr", { staticClass: "mb-0 mt-0" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card card-body " },
            [
              _c("simple-spiner"),
              _vm._v(" "),
              _c("filter-bar", { attrs: { placeholder: "Name" } }, [
                _c(
                  "div",
                  {
                    staticClass: "pull-right  mr-3",
                    attrs: { slot: "filter1" },
                    slot: "filter1"
                  },
                  [
                    _c("datepicker", {
                      attrs: { placeholder: "Start date" },
                      on: { input: _vm.setStartDate },
                      model: {
                        value: _vm.startDate,
                        callback: function($$v) {
                          _vm.startDate = $$v
                        },
                        expression: "startDate"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "pull-right mr-3",
                    attrs: { slot: "filter2" },
                    slot: "filter2"
                  },
                  [
                    _c("datepicker", {
                      attrs: { placeholder: "End date" },
                      on: { input: _vm.setEndDate },
                      model: {
                        value: _vm.endDate,
                        callback: function($$v) {
                          _vm.endDate = $$v
                        },
                        expression: "endDate"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "float-center",
                    attrs: { slot: "search" },
                    slot: "search"
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-success pull-right",
                        staticStyle: { "margin-left": "5px" },
                        attrs: {
                          href:
                            "/export-lead/" +
                            _vm.dataFrom +
                            "/" +
                            _vm.dateTo +
                            "/xls"
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-file-excel-o",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(" Export Excel\n                            ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-info pull-right",
                        attrs: {
                          href:
                            "/export-lead/" +
                            _vm.dataFrom +
                            "/" +
                            _vm.dateTo +
                            "/pdf"
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-file-pdf-o",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(
                          "\n                                Export Pdf\n                            "
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("vuetable", {
                ref: "vuetable",
                attrs: {
                  "api-url": "/leads-report",
                  fields: _vm.fields,
                  "pagination-path": "",
                  css: _vm.css.table,
                  "sort-order": _vm.sortOrder,
                  "multi-sort": true,
                  "append-params": _vm.moreParams
                },
                on: {
                  "vuetable:cell-clicked": _vm.onCellClicked,
                  "vuetable:pagination-data": _vm.onPaginationData,
                  "vuetable:loading": _vm.loading,
                  "vuetable:load-success": _vm.loaded,
                  "vuetable:load-error": _vm.loadError
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vuetable-pagination" },
                [
                  _c("vuetable-pagination-info", {
                    ref: "paginationInfo",
                    attrs: { "info-class": "pagination-info" }
                  }),
                  _vm._v(" "),
                  _c("vuetable-pagination", {
                    ref: "pagination",
                    attrs: { css: _vm.css.pagination },
                    on: { "vuetable-pagination:change-page": _vm.onChangePage }
                  })
                ],
                1
              )
            ],
            1
          )
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
    return _c("div", { staticClass: "col-md-4 " }, [
      _c(
        "div",
        {
          staticClass: "ribbon ribbon-bookmark ribbon-left ribbon-primary ",
          staticStyle: { top: "0" }
        },
        [
          _vm._v(
            "\n                            Leads\n                        "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/Reports/LeadsReportComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/views/Reports/LeadsReportComponent.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeadsReportComponent_vue_vue_type_template_id_3638d355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeadsReportComponent.vue?vue&type=template&id=3638d355& */ "./resources/assets/js/views/Reports/LeadsReportComponent.vue?vue&type=template&id=3638d355&");
/* harmony import */ var _LeadsReportComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeadsReportComponent.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/Reports/LeadsReportComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LeadsReportComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LeadsReportComponent_vue_vue_type_template_id_3638d355___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LeadsReportComponent_vue_vue_type_template_id_3638d355___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/Reports/LeadsReportComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/Reports/LeadsReportComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/views/Reports/LeadsReportComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadsReportComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeadsReportComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Reports/LeadsReportComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadsReportComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/Reports/LeadsReportComponent.vue?vue&type=template&id=3638d355&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/views/Reports/LeadsReportComponent.vue?vue&type=template&id=3638d355& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadsReportComponent_vue_vue_type_template_id_3638d355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeadsReportComponent.vue?vue&type=template&id=3638d355& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Reports/LeadsReportComponent.vue?vue&type=template&id=3638d355&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadsReportComponent_vue_vue_type_template_id_3638d355___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadsReportComponent_vue_vue_type_template_id_3638d355___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);