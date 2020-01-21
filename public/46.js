(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
        name: 'po_no',
        title: 'Order No',
        titleClass: 'sorting text-center',
        dataClass: 'text-center'
      }, {
        name: 'Name',
        sortField: 'Name',
        title: 'Supplier',
        titleClass: 'sorting'
      }, {
        name: 'created_by',
        title: 'Created By',
        sortField: 'created_by',
        titleClass: 'sorting'
      }, {
        name: 'status',
        sortField: 'status',
        titleClass: 'sorting'
      }, {
        name: 'po_date',
        title: 'PO Date',
        sortField: 'po_date',
        titleClass: 'sorting'
      }],
      sortOrder: [{
        field: 'po_no',
        sortField: 'po_no',
        direction: 'asc'
      }],
      moreParams: {
        status: 1,
        startDate: null,
        endDate: null
      },
      customPagination: {},
      poStatus: 'all',
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
    },
    setStatus: function setStatus(value) {
      this.moreParams.status = value;
      Event.fire('refresh-data');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n.vs--disabled .vs__dropdown-toggle,\n.vs--disabled .vs__clear,\n.vs--disabled .vs__search,\n.vs--disabled .vs__selected,\n.vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: flex;\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid rgba(60, 60, 60, 0.26);\n  border-radius: 4px;\n  white-space: normal;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  padding: 0 2px;\n  position: relative;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n  padding: 4px 6px 0 3px;\n}\n\n/* Dropdown Toggle States */\n.vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n.vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n.vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transform: scale(1);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n.vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n  margin-right: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  position: absolute;\n  top: calc(100% - 1px);\n  left: 0;\n  z-index: 1000;\n  padding: 5px 0;\n  margin: 0;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(60, 60, 60, 0.26);\n  border-top-style: none;\n  border-radius: 0 0 4px 4px;\n  text-align: left;\n  list-style: none;\n  background: #fff;\n}\n.vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n.vs__dropdown-option:hover {\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  background: #5897fb;\n  color: #fff;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  background-color: #f0f0f0;\n  border: 1px solid rgba(60, 60, 60, 0.26);\n  border-radius: 4px;\n  color: #333;\n  line-height: 1.4;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  margin-left: 4px;\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  fill: rgba(60, 60, 60, 0.5);\n  text-shadow: 0 1px 0 #fff;\n}\n\n/* States */\n.vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-cancel-button,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  line-height: 1.4;\n  font-size: 1em;\n  border: 1px solid transparent;\n  border-left: none;\n  outline: none;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n}\n.vs__search::-webkit-input-placeholder {\n  color: inherit;\n}\n.vs__search::-moz-placeholder {\n  color: inherit;\n}\n.vs__search:-ms-input-placeholder {\n  color: inherit;\n}\n.vs__search::-ms-input-placeholder {\n  color: inherit;\n}\n.vs__search::placeholder {\n  color: inherit;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n.vs--unsearchable .vs__search:hover {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  transform: translateZ(0);\n  -webkit-animation: vSelectSpinner 1.1s infinite linear;\n          animation: vSelectSpinner 1.1s infinite linear;\n  transition: opacity 0.1s;\n}\n.vs__spinner,\n.vs__spinner:after {\n  border-radius: 50%;\n  width: 5em;\n  height: 5em;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PosReportComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=template&id=36a6e138&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=template&id=36a6e138& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
              _vm._v("Purchase Orders Reports")
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
                    staticClass: "pull-right col-2",
                    attrs: { slot: "filter3" },
                    slot: "filter3"
                  },
                  [
                    _c("v-select", {
                      attrs: { options: ["requested", "approved", "all"] },
                      on: { input: _vm.setStatus },
                      model: {
                        value: _vm.poStatus,
                        callback: function($$v) {
                          _vm.poStatus = $$v
                        },
                        expression: "poStatus"
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
                            "/export-po/" +
                            _vm.dataFrom +
                            "/" +
                            _vm.dateTo +
                            "/" +
                            _vm.poStatus +
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
                            "/export-po/" +
                            _vm.dataFrom +
                            "/" +
                            _vm.dateTo +
                            "/" +
                            _vm.poStatus +
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
                  "api-url": "/pos-report",
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
            "\n                            Reports\n                        "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/mixins/alert-mixins.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/mixins/alert-mixins.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var alertMixins = {
  methods: {
    deleteAlert: function deleteAlert() {
      var _this = this;

      this.$swal({
        type: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          _this.$swal('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
    },
    deleteConfirmAlert: function deleteConfirmAlert() {
      this.$swal({
        type: 'warning',
        title: 'Custom width, padding, background.',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: "\n                            rgba(0,0,123,0.4)\n                            url(\"/images/nyan-cat.gif\")\n                            center left\n                            no-repeat\n                          "
      });
    },
    flash: function flash(message) {
      this.$swal(message);
    },
    flashError: function flashError(message) {
      this.$swal('Error!', message, 'error');
    },
    flashSucces: function flashSucces(message) {
      this.$swal('success!', message, 'success');
    },
    showDrawer: function showDrawer(value) {
      Event.fire('show-drawer', value);
    },
    loading: function loading(value) {
      Event.fire('show-loader', value);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (alertMixins);

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

/***/ "./resources/assets/js/views/Reports/PosReportComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/views/Reports/PosReportComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PosReportComponent_vue_vue_type_template_id_36a6e138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PosReportComponent.vue?vue&type=template&id=36a6e138& */ "./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=template&id=36a6e138&");
/* harmony import */ var _PosReportComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PosReportComponent.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PosReportComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PosReportComponent.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PosReportComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PosReportComponent_vue_vue_type_template_id_36a6e138___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PosReportComponent_vue_vue_type_template_id_36a6e138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/Reports/PosReportComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PosReportComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PosReportComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PosReportComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PosReportComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PosReportComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PosReportComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PosReportComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PosReportComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PosReportComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PosReportComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=template&id=36a6e138&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=template&id=36a6e138& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PosReportComponent_vue_vue_type_template_id_36a6e138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PosReportComponent.vue?vue&type=template&id=36a6e138& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Reports/PosReportComponent.vue?vue&type=template&id=36a6e138&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PosReportComponent_vue_vue_type_template_id_36a6e138___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PosReportComponent_vue_vue_type_template_id_36a6e138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);