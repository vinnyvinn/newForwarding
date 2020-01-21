(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuetable_2_src_components_Vuetable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetable-2/src/components/Vuetable */ "./node_modules/vuetable-2/src/components/Vuetable.vue");
/* harmony import */ var vuetable_2_src_components_VuetablePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetable-2/src/components/VuetablePagination */ "./node_modules/vuetable-2/src/components/VuetablePagination.vue");
/* harmony import */ var vuetable_2_src_components_VuetablePaginationInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetable-2/src/components/VuetablePaginationInfo */ "./node_modules/vuetable-2/src/components/VuetablePaginationInfo.vue");
/* harmony import */ var _mixins_vuetable_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mixins/vuetable-2 */ "./resources/assets/js/mixins/vuetable-2.js");
/* harmony import */ var _Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Add */ "./resources/assets/js/views/JobWorkflow/RequiredDocs/Add.vue");
/* harmony import */ var _mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/table-mixins-actions */ "./resources/assets/js/mixins/table-mixins-actions.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_vuetable_2__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_5__["default"]],
  components: {
    AddRequiredDocsComponent: _Add__WEBPACK_IMPORTED_MODULE_4__["default"],
    Vuetable: vuetable_2_src_components_Vuetable__WEBPACK_IMPORTED_MODULE_0__["default"],
    VuetablePagination: vuetable_2_src_components_VuetablePagination__WEBPACK_IMPORTED_MODULE_1__["default"],
    VuetablePaginationInfo: vuetable_2_src_components_VuetablePaginationInfo__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      fields: [{
        title: '#',
        name: 'id',
        sortField: 'id',
        titleClass: 'sorting'
      }, {
        name: 'name',
        sortField: 'name',
        titleClass: 'sorting'
      }, {
        name: 'description',
        sortField: 'description',
        titleClass: 'sorting'
      }, {
        name: 'created_at',
        title: 'Created',
        sortField: 'created_at',
        titleClass: 'sorting text-center',
        dataClass: 'text-center'
      }, {
        name: '__slot:actions',
        title: 'Actions',
        dataClass: 'text-center',
        titleClass: 'text-center'
      }],
      sortOrder: [{
        field: 'id',
        sortField: 'id',
        direction: 'asc'
      }],
      moreParams: {},
      customPagination: {}
    };
  },
  methods: {
    onCellClicked: function onCellClicked(data, field, event) {
      console.log('cellClicked: ', field.name);
      this.$refs.vuetable.toggleDetailRow(data.id);
    },
    deleteDocs: function deleteDocs(id) {
      var url = "/api/requiredDocs/" + id;
      this.deleteRecord(url);
    },
    editDocs: function editDocs(id) {
      window.location.href = '/required-docs/' + id + '/edit';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue?vue&type=template&id=1b00f5e3&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue?vue&type=template&id=1b00f5e3& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "row card-title fixed " }, [
            _c(
              "div",
              { staticClass: "col-md-4 " },
              [_c("add-required-docs-component")],
              1
            ),
            _vm._v(" "),
            _c("h4", { staticClass: "col-md-4  text-center" }, [
              _vm._v(" Required Documents")
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
              _c("filter-bar", { attrs: { placeholder: "Name" } }),
              _vm._v(" "),
              _c("vuetable", {
                ref: "vuetable",
                attrs: {
                  "api-url": "/api/requiredDocs",
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
                },
                scopedSlots: _vm._u([
                  {
                    key: "actions",
                    fn: function(props) {
                      return [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-warning",
                            on: {
                              click: function($event) {
                                return _vm.editDocs(props.rowData.id)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-pencil" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-danger",
                            attrs: { type: "submit" },
                            on: {
                              click: function($event) {
                                return _vm.deleteDocs(props.rowData.id)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-trash" })]
                        )
                      ]
                    }
                  }
                ])
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/mixins/vuetable-2.js":
/*!**************************************************!*\
  !*** ./resources/assets/js/mixins/vuetable-2.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! accounting */ "./node_modules/accounting/accounting.js");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(accounting__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _alert_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-mixins */ "./resources/assets/js/mixins/alert-mixins.js");




var vueTableMixin = {
  mixins: [_alert_mixins__WEBPACK_IMPORTED_MODULE_3__["default"]],
  created: function created() {},
  data: function data() {
    return {
      css: {
        table: {
          tableClass: ' display mx-auto  table table-striped table-bordered printableArea dataTable',
          ascendingIcon: 'fa fa-sort-up',
          descendingIcon: 'fa fa-sort-down'
        },
        pagination: {
          wrapperClass: 'pagination',
          activeClass: 'active',
          disabledClass: 'disabled',
          pageClass: 'page',
          linkClass: 'link',
          icons: {
            first: '',
            prev: '',
            next: '',
            last: ''
          }
        },
        icons: {
          first: 'glyphicon glyphicon-step-backward',
          prev: 'glyphicon glyphicon-chevron-left fa fa-angle-left',
          next: 'glyphicon glyphicon-chevron-right fa fa-angle-right',
          last: 'glyphicon glyphicon-step-forward'
        }
      },
      promise: true
    };
  },
  methods: {
    allcap: function allcap(value) {
      return value.toUpperCase();
    },
    genderLabel: function genderLabel(value) {
      return value === 'M' ? '<span class="label label-success"><i class="glyphicon glyphicon-star"></i> Male</span>' : '<span class="label label-danger"><i class="glyphicon glyphicon-heart"></i> Female</span>';
    },
    formatNumber: function formatNumber(value) {
      return accounting__WEBPACK_IMPORTED_MODULE_1___default.a.formatNumber(value, 2);
    },
    formatDate: function formatDate(value) {
      var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'D-MMM-YYYY';
      return value == null ? '' : moment__WEBPACK_IMPORTED_MODULE_2___default()(value, 'YYYY-MM-DD').format(fmt);
    },
    onPaginationData: function onPaginationData(paginationData) {
      this.customPagination = paginationData;
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
    },
    onChangePage: function onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    onCellClicked: function onCellClicked(data, field, event) {
      this.$refs.vuetable.toggleDetailRow(data.id);
    },
    loading: function loading() {
      this.$Progress.start();
      Event.fire('show-simple-spinner', true);
    },
    loaded: function loaded() {
      this.$Progress.finish();
      Event.fire('show-simple-spinner', false);
    },
    loadError: function loadError(error) {
      this.$Progress.fail();
      flash("An error occured");
      this.$toastr.e(" An error occured" + error);
      Event.fire('show-simple-spinner', false);
    }
  },
  events: {
    'filter-set': function filterSet(filterText) {
      var _this = this;

      this.moreParams = {
        filter: filterText
      };
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.nextTick(function () {
        return _this.$refs.vuetable.refresh();
      });
    },
    'filter-reset': function filterReset() {
      var _this2 = this;

      this.moreParams = {};
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.nextTick(function () {
        return _this2.$refs.vuetable.refresh();
      });
    },
    'per-page-set': function perPageSet(perPage) {
      var _this3 = this;

      this.moreParams = {
        perPage: perPage
      };
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.nextTick(function () {
        return _this3.$refs.vuetable.refresh();
      });
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    Event.listen('refresh-data', function () {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.nextTick(function () {
        return _this4.$refs.vuetable.refresh();
      });
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vueTableMixin);

/***/ }),

/***/ "./resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_1b00f5e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=1b00f5e3& */ "./resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue?vue&type=template&id=1b00f5e3&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_1b00f5e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_1b00f5e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue?vue&type=template&id=1b00f5e3&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue?vue&type=template&id=1b00f5e3& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1b00f5e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=1b00f5e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/RequiredDocs/Index.vue?vue&type=template&id=1b00f5e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1b00f5e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1b00f5e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);