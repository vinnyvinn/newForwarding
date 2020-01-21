(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/Add.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobWorkflow/Add.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _mixins_alert_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/alert-mixins */ "./resources/assets/js/mixins/alert-mixins.js");
/* harmony import */ var _mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/table-mixins-actions */ "./resources/assets/js/mixins/table-mixins-actions.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_0__["ValidationObserver"]
  },
  mixins: [_mixins_alert_mixins__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      showModal: false,
      stages: {},
      docs: {},
      checkedDocs: [],
      checkedStages: [],
      form: {
        slug: null,
        shipment_types_id: null,
        shipment_sub_types_id: null,
        stages_id: [],
        docs_id: []
      }
    };
  },
  computed: {
    nameSlug: function nameSlug() {
      return _.kebabCase(this.form.name);
    }
  },
  methods: {
    addWorkflow: function addWorkflow() {
      var _this = this;

      this.form.slug = this.nameSlug;
      this.showModal = false;
      this.form.stages_id = this.checkedStages;
      this.form.docs_id = this.checkedDocs;
      var url = '/api/jobWorkflowProcesses',
          data = this.form,
          serviceName = 'Job process workflow';
      this.addRecord(url, data, serviceName).then(function (response) {
        _this.form = {};
        _this.selectedShipment = null;
        _this.checkedDocs = [];
        _this.checkedStages = [];
      });
    },
    setShipmentType: function setShipmentType(value) {
      this.form.shipment_types_id = value.id;
    },
    setShipmentSubType: function setShipmentSubType(value) {
      this.form.shipment_sub_types_id = value.id;
    },
    getStages: function getStages() {
      var _this2 = this;

      this.getRecord('/stages', {
        all: 'all'
      }, 'Stages', false).then(function (response) {
        _this2.stages = response.data;
        console.log(_this2.stages);
      });
    },
    getRequiredDocs: function getRequiredDocs() {
      var _this3 = this;

      this.getRecord('/api/required-docs', 'Docs', false).then(function (response) {
        _this3.docs = response.data;
      });
    },
    createWorkflow: function createWorkflow() {
      this.showModal = true;
      this.getStages();
      this.getRequiredDocs();
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/Add.vue?vue&type=template&id=238de0ea&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobWorkflow/Add.vue?vue&type=template&id=238de0ea& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    [
      _c("modals-container"),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", on: { click: _vm.createWorkflow } },
        [_vm._v("\n        Add workflow\n    ")]
      ),
      _vm._v(" "),
      _vm.showModal
        ? _c(
            "my-modal",
            {
              attrs: { id: "add-shipment-type" },
              on: {
                "close-modal": function($event) {
                  _vm.showModal = false
                }
              }
            },
            [
              _c("div", { attrs: { slot: "title" }, slot: "title" }, [
                _vm._v(" Job processing Workflow")
              ]),
              _vm._v(" "),
              _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                _c(
                  "form",
                  {
                    attrs: { method: "post" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.addWorkflow($event)
                      }
                    }
                  },
                  [
                    _c("ValidationObserver", {
                      ref: "addShippmentType",
                      staticClass: "col-sm-12 ",
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var valid = ref.valid
                              var passes = ref.passes
                              return [
                                _c(
                                  "div",
                                  {
                                    staticClass: "row",
                                    staticStyle: {
                                      height: "60vh",
                                      "overflow-y": "scroll"
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-12" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-md-12 control-label"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                Shipment Type\n                                "
                                            ),
                                            _c(
                                              "span",
                                              { staticClass: "text-danger" },
                                              [_vm._v("*")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-md-12" },
                                          [
                                            _c("shipment-type-dropdown", {
                                              on: {
                                                "selected-value":
                                                  _vm.setShipmentType
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-12" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-md-12 control-label"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                Shipment Sub-Type\n                                "
                                            ),
                                            _c(
                                              "span",
                                              { staticClass: "text-danger" },
                                              [_vm._v("*")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-md-12" },
                                          [
                                            _c("shipment-sub-type-dropdown", {
                                              on: {
                                                "selected-value":
                                                  _vm.setShipmentSubType
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-12" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-md-12 control-label p-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                Select Stages\n                                "
                                            ),
                                            _c(
                                              "span",
                                              { staticClass: "text-danger" },
                                              [_vm._v("*")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "row p-2" },
                                          _vm._l(_vm.stages, function(stage) {
                                            return _c(
                                              "div",
                                              { staticClass: "col-sm-4" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c(
                                                      "ul",
                                                      {
                                                        staticClass:
                                                          "icheck-list"
                                                      },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.checkedStages,
                                                              expression:
                                                                "checkedStages"
                                                            }
                                                          ],
                                                          key: stage.id,
                                                          attrs: {
                                                            type: "checkbox",
                                                            id: stage.id
                                                          },
                                                          domProps: {
                                                            value: stage.id,
                                                            checked: Array.isArray(
                                                              _vm.checkedStages
                                                            )
                                                              ? _vm._i(
                                                                  _vm.checkedStages,
                                                                  stage.id
                                                                ) > -1
                                                              : _vm.checkedStages
                                                          },
                                                          on: {
                                                            change: function(
                                                              $event
                                                            ) {
                                                              var $$a =
                                                                  _vm.checkedStages,
                                                                $$el =
                                                                  $event.target,
                                                                $$c = $$el.checked
                                                                  ? true
                                                                  : false
                                                              if (
                                                                Array.isArray(
                                                                  $$a
                                                                )
                                                              ) {
                                                                var $$v =
                                                                    stage.id,
                                                                  $$i = _vm._i(
                                                                    $$a,
                                                                    $$v
                                                                  )
                                                                if (
                                                                  $$el.checked
                                                                ) {
                                                                  $$i < 0 &&
                                                                    (_vm.checkedStages = $$a.concat(
                                                                      [$$v]
                                                                    ))
                                                                } else {
                                                                  $$i > -1 &&
                                                                    (_vm.checkedStages = $$a
                                                                      .slice(
                                                                        0,
                                                                        $$i
                                                                      )
                                                                      .concat(
                                                                        $$a.slice(
                                                                          $$i +
                                                                            1
                                                                        )
                                                                      ))
                                                                }
                                                              } else {
                                                                _vm.checkedStages = $$c
                                                              }
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "label",
                                                          {
                                                            attrs: {
                                                              for: stage.id
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  stage.name
                                                                ) +
                                                                "\n                                            "
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          }),
                                          0
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-12" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-md-12 control-label p-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                Select Required Documents\n                                "
                                            ),
                                            _c(
                                              "span",
                                              { staticClass: "text-danger" },
                                              [_vm._v("*")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "row p-2" },
                                          _vm._l(_vm.docs, function(doc) {
                                            return _c(
                                              "div",
                                              { staticClass: "col-sm-4" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c(
                                                      "ul",
                                                      {
                                                        staticClass:
                                                          "icheck-list"
                                                      },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.checkedDocs,
                                                              expression:
                                                                "checkedDocs"
                                                            }
                                                          ],
                                                          key: doc.id,
                                                          attrs: {
                                                            type: "checkbox",
                                                            id: doc.id
                                                          },
                                                          domProps: {
                                                            value: doc.id,
                                                            checked: Array.isArray(
                                                              _vm.checkedDocs
                                                            )
                                                              ? _vm._i(
                                                                  _vm.checkedDocs,
                                                                  doc.id
                                                                ) > -1
                                                              : _vm.checkedDocs
                                                          },
                                                          on: {
                                                            change: function(
                                                              $event
                                                            ) {
                                                              var $$a =
                                                                  _vm.checkedDocs,
                                                                $$el =
                                                                  $event.target,
                                                                $$c = $$el.checked
                                                                  ? true
                                                                  : false
                                                              if (
                                                                Array.isArray(
                                                                  $$a
                                                                )
                                                              ) {
                                                                var $$v =
                                                                    doc.id,
                                                                  $$i = _vm._i(
                                                                    $$a,
                                                                    $$v
                                                                  )
                                                                if (
                                                                  $$el.checked
                                                                ) {
                                                                  $$i < 0 &&
                                                                    (_vm.checkedDocs = $$a.concat(
                                                                      [$$v]
                                                                    ))
                                                                } else {
                                                                  $$i > -1 &&
                                                                    (_vm.checkedDocs = $$a
                                                                      .slice(
                                                                        0,
                                                                        $$i
                                                                      )
                                                                      .concat(
                                                                        $$a.slice(
                                                                          $$i +
                                                                            1
                                                                        )
                                                                      ))
                                                                }
                                                              } else {
                                                                _vm.checkedDocs = $$c
                                                              }
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "label",
                                                          {
                                                            attrs: {
                                                              for: doc.id
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  doc.name
                                                                ) +
                                                                "\n                                            "
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          }),
                                          0
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-sm-12" }, [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("input", {
                                      staticClass: "btn btn-primary pull-right",
                                      attrs: {
                                        type: "submit",
                                        disabled: !valid,
                                        value: "Save"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-danger waves-effect  pull-right mr-3",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            _vm.showModal = false
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Close\n                            "
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        1769908334
                      )
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { attrs: { slot: "footer" }, slot: "footer" })
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

/***/ "./resources/assets/js/views/JobWorkflow/Add.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/views/JobWorkflow/Add.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_238de0ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=238de0ea& */ "./resources/assets/js/views/JobWorkflow/Add.vue?vue&type=template&id=238de0ea&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/JobWorkflow/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_238de0ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_238de0ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/JobWorkflow/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/JobWorkflow/Add.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/views/JobWorkflow/Add.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/JobWorkflow/Add.vue?vue&type=template&id=238de0ea&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/views/JobWorkflow/Add.vue?vue&type=template&id=238de0ea& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_238de0ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=238de0ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/Add.vue?vue&type=template&id=238de0ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_238de0ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_238de0ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);