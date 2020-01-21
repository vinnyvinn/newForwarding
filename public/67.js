(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/table-mixins-actions */ "./resources/assets/js/mixins/table-mixins-actions.js");
/* harmony import */ var _mixins_alert_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins/alert-mixins */ "./resources/assets/js/mixins/alert-mixins.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_alert_mixins__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    jobId: {
      required: true
    }
  },
  data: function data() {
    return {
      showModal: false,
      projectStatement: null
    };
  },
  computed: {
    totalSellingPrice: function totalSellingPrice() {
      return this.projectStatement.reduce(function (sum, obj) {
        return sum + parseFloat(obj.selling_price);
      }, 0);
    },
    totalCost: function totalCost() {
      return this.projectStatement.reduce(function (sum, obj) {
        return sum + parseFloat(obj.cost);
      }, 0);
    },
    totalProfit: function totalProfit() {
      return this.projectStatement.reduce(function (sum, obj) {
        return sum + parseFloat(obj.profit);
      }, 0);
    }
  },
  methods: {
    getProjectStatement: function getProjectStatement() {
      var _this = this;

      var url = '/api/project-statement/' + this.jobId;
      this.getRecord(url, {}, 'Petty Cash').then(function (response) {
        _this.projectStatement = response.data;
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.getProjectStatement();
    Event.listen('load-project-statement', function () {
      _this2.getProjectStatement();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue?vue&type=template&id=d7ebe454&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue?vue&type=template&id=d7ebe454& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "pull-left mr-2 " },
    [
      _c(
        "button",
        {
          staticClass: "btn btn-success",
          on: {
            click: function($event) {
              _vm.showModal = true
            }
          }
        },
        [_vm._v("\n        Project Statement\n    ")]
      ),
      _vm._v(" "),
      _vm.showModal
        ? _c(
            "my-modal",
            {
              attrs: { id: "add-stage-checklist", width: "80%" },
              on: {
                "close-modal": function($event) {
                  _vm.showModal = false
                }
              }
            },
            [
              _c("div", { attrs: { slot: "title" }, slot: "title" }, [
                _vm._v(" Project Statement")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "p-2", attrs: { slot: "body" }, slot: "body" },
                [
                  _c(
                    "div",
                    { staticClass: "card" },
                    [
                      _c(
                        "job-processing-project-cost-add-project-service-cost",
                        { attrs: { jobId: _vm.jobId } }
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body" }, [
                        _c("table", { staticClass: "table table-stripped" }, [
                          _c("thead", [
                            _c("tr", [
                              _c("th", [_vm._v("Service Name")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Receipt")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Selling Price")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Cost")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Profit")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.projectStatement, function(cash) {
                              return _c("tr", [
                                _c("td", [_vm._v(_vm._s(cash.name))]),
                                _vm._v(" "),
                                _c("td", [
                                  cash.receipt !== ""
                                    ? _c(
                                        "a",
                                        {
                                          attrs: {
                                            href: cash.receipt,
                                            target: "_blank"
                                          }
                                        },
                                        [_vm._v(" Download")]
                                      )
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(cash.selling_price))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(cash.cost))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(cash.profit))])
                              ])
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c("tfoot", [
                            _c("tr", [
                              _c("th", { attrs: { colspan: "2" } }, [
                                _vm._v("Total")
                              ]),
                              _vm._v(" "),
                              _c("th", [
                                _vm._v(
                                  _vm._s(
                                    parseFloat(_vm.totalSellingPrice).toFixed(2)
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", [
                                _vm._v(
                                  _vm._s(parseFloat(_vm.totalCost).toFixed(2))
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", [
                                _vm._v(
                                  _vm._s(parseFloat(_vm.totalProfit).toFixed(2))
                                )
                              ])
                            ])
                          ])
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn pull-right btn-danger mr-3",
                      on: {
                        click: function($event) {
                          _vm.showModal = false
                        }
                      }
                    },
                    [_vm._v("\n                Cancel\n            ")]
                  )
                ]
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
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

/***/ "./resources/assets/js/mixins/table-mixins-actions.js":
/*!************************************************************!*\
  !*** ./resources/assets/js/mixins/table-mixins-actions.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TableMixinsActions = {
  methods: {
    removeRecord: function removeRecord(url) {
      var _this = this;

      var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return new Promise(function (resolve, reject) {
        _this.$swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
          if (result.value) {
            Event.fire('show-loader', true);
            axios.post(url).then(function (response) {
              Event.fire('show-loader', false);
              resolve(response);

              _this.$toastr.s("Service deleted successfully ");

              if (refresh) {
                Event.fire('refresh-data');
              }
            })["catch"](function (error) {
              Event.fire('show-loader', false);
              reject(error.response);

              _this.$swal('Not Deleted!', 'The record has not been deleted, an error occured', 'error');
            });
          }
        });
      });
    },
    deleteRecord: function deleteRecord(url) {
      var _this2 = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var refresh = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return new Promise(function (resolve, reject) {
        _this2.$swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
          if (result.value) {
            Event.fire('show-loader', true);
            axios["delete"](url, {
              params: params
            }).then(function (response) {
              Event.fire('show-loader', false);
              resolve(response);

              _this2.$toastr.s("Service deleted successfully ");

              if (refresh) {
                Event.fire('refresh-data');
              }
            })["catch"](function (error) {
              Event.fire('show-loader', false);
              reject(error.response);

              _this2.$swal('Not Deleted!', 'The record has not been deleted, an error occured', 'error');
            });
          }
        });
      });
    },
    addRecord: function addRecord(url, formData, serviceName) {
      var _this3 = this;

      var refresh = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return new Promise(function (resolve, reject) {
        Event.fire('show-loader', true);
        axios.post(url, formData).then(function (response) {
          if (refresh) {
            Event.fire('refresh-data');
          }

          resolve(response); // this.flashSucces(serviceName+ " added successfully");

          _this3.$toastr.s(serviceName + " added successfully");

          Event.fire('show-loader', false);
        })["catch"](function (error) {
          reject(error.response);

          _this3.flashError(serviceName + " not added" + error);
        });
      });
    },
    getRecord: function getRecord(url, params, serviceName) {
      var _this4 = this;

      var refresh = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return new Promise(function (resolve, reject) {
        Event.fire('show-loader', true);
        axios.get(url, {
          params: params
        }).then(function (response) {
          if (refresh) {
            Event.fire('refresh-data');
          }

          Event.fire('show-loader', false);
          resolve(response);
        })["catch"](function (error) {
          reject(error.response);

          _this4.flashError(serviceName + " not retrieved" + error);

          Event.fire('show-loader', false);
        });
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TableMixinsActions);

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewProjectStatement_vue_vue_type_template_id_d7ebe454___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewProjectStatement.vue?vue&type=template&id=d7ebe454& */ "./resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue?vue&type=template&id=d7ebe454&");
/* harmony import */ var _ViewProjectStatement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewProjectStatement.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewProjectStatement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewProjectStatement_vue_vue_type_template_id_d7ebe454___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewProjectStatement_vue_vue_type_template_id_d7ebe454___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProjectStatement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewProjectStatement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProjectStatement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue?vue&type=template&id=d7ebe454&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue?vue&type=template&id=d7ebe454& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProjectStatement_vue_vue_type_template_id_d7ebe454___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewProjectStatement.vue?vue&type=template&id=d7ebe454& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/ProjectCost/ViewProjectStatement.vue?vue&type=template&id=d7ebe454&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProjectStatement_vue_vue_type_template_id_d7ebe454___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProjectStatement_vue_vue_type_template_id_d7ebe454___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);