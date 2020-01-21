(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/table-mixins-actions */ "./resources/assets/js/mixins/table-mixins-actions.js");
/* harmony import */ var _mixins_alert_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins/alert-mixins */ "./resources/assets/js/mixins/alert-mixins.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    jobId: null
  },
  mixins: [_mixins_alert_mixins__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationObserver"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      showModal: false,
      voucherTypes: null,
      Bl: null,
      form: {
        currency_type: null,
        quotation_id: null,
        user_id: null,
        employee_number: null,
        amount: null,
        file: null,
        vouchertype: null,
        reason: null,
        deadline: null
      }
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      this.form.quotation_id = this.Bl.quote_id;

      if (_.isNil(this.form.currency_type) || _.isNil(this.form.amount) || _.isNil(this.form.vouchertype) || _.isNil(this.form.file) || _.isNil(this.form.employee_number)) {
        return this.flashError('Ensure all the fields are filled');
      }

      var formData = new FormData();
      formData.append('file', this.form.file);
      formData.append('deadline', moment(this.form.date));
      formData.append('vouchertype', this.form.vouchertype.iVoucherTypeID);
      formData.append('employee_number', this.form.employee_number);
      formData.append('quotation_id', this.form.quotation_id);
      formData.append('amount', this.form.amount);
      formData.append('reason', this.form.reason);
      formData.append('currency_type', this.form.currency_type);
      Event.fire('show-loader', true);
      axios.post('/project-cost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function () {
        Event.fire('show-loader', false);

        _this.$toastr.s("Funds Request successfully ");

        _this.showModal = false;
        _this.form = {};
        _this.stepChecked = true;
        Event.fire('load-requested-funds', _this.selectedJobStage);
      })["catch"](function () {
        _this.$toastr.e("An error occured ");

        Event.fire('show-loader', false);
      });
    },
    clearInput: function clearInput() {
      this.form.vouchertype = null;
    },
    getSelectedValue: function getSelectedValue() {},
    setDate: function setDate(value) {
      this.form.date = value;
    },
    getVoucherTypes: function getVoucherTypes() {
      var _this2 = this;

      var url = '/api/voucher-types';
      this.getRecord(url, {}, 'Voucher Types').then(function (response) {
        _this2.voucherTypes = response.data;
      });
    },
    handleFileUpload: function handleFileUpload() {
      this.form.file = this.$refs.file.files[0];
    },
    showForm: function showForm() {
      this.showModal = true;
    },
    getBlInfo: function getBlInfo() {
      var _this3 = this;

      var url = "/bill-of-lading/".concat(this.jobId, "/show");
      this.getRecord(url, {}, ' BL info').then(function (response) {
        _this3.Bl = response.data;
      });
    }
  },
  created: function created() {
    this.getVoucherTypes();
    this.getBlInfo();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue?vue&type=template&id=6c21ed89&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue?vue&type=template&id=6c21ed89& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "pull-left mr-2" },
    [
      _c(
        "button",
        { staticClass: "btn btn-info", on: { click: _vm.showForm } },
        [_vm._v("\n        Request Fund\n    ")]
      ),
      _vm._v(" "),
      _vm.showModal
        ? _c(
            "my-modal",
            {
              attrs: { id: "add-stage-checklist" },
              on: {
                "close-modal": function($event) {
                  _vm.showModal = false
                }
              }
            },
            [
              _c("div", { attrs: { slot: "title" }, slot: "title" }, [
                _vm._v(" Request Fund")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "p-2", attrs: { slot: "body" }, slot: "body" },
                [
                  _c("ValidationObserver", {
                    ref: "requestFunds",
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
                                    height: "300px",
                                    "overflow-y": "scroll"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-sm-6 " },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "employee_number" } },
                                        [_vm._v("Employee Number/ID")]
                                      ),
                                      _vm._v(" "),
                                      _c("ValidationProvider", {
                                        attrs: {
                                          rules: "required",
                                          name: "Employee number "
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form
                                                            .employee_number,
                                                        expression:
                                                          "form.employee_number"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "text",
                                                      required: "",
                                                      id: "employee_number"
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.form.employee_number
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.form,
                                                          "employee_number",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "form-control-feedback"
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-sm-6" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "amount" } },
                                        [_vm._v("Amount Requested")]
                                      ),
                                      _vm._v(" "),
                                      _c("ValidationProvider", {
                                        attrs: {
                                          rules: "required",
                                          name: "Amount Requested "
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.form.amount,
                                                        expression:
                                                          "form.amount"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "number",
                                                      required: "",
                                                      id: "amount",
                                                      step: "0.09"
                                                    },
                                                    domProps: {
                                                      value: _vm.form.amount
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.form,
                                                          "amount",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "form-control-feedback"
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-sm-6" },
                                    [
                                      _c("label", [_vm._v("Select Currency")]),
                                      _vm._v(" "),
                                      _c("ValidationProvider", {
                                        attrs: {
                                          rules: "required",
                                          name: "Select currency "
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("v-select", {
                                                    staticClass: "mb-0",
                                                    attrs: {
                                                      options: ["KES", "USD"]
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form.currency_type,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "currency_type",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.currency_type"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "form-control-feedback"
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-sm-6" },
                                    [
                                      _c("label", [
                                        _vm._v("Select Voucher Type")
                                      ]),
                                      _vm._v(" "),
                                      _c("ValidationProvider", {
                                        attrs: {
                                          rules: "required",
                                          name: "Select voucher "
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c(
                                                    "v-select",
                                                    {
                                                      attrs: {
                                                        label: "name",
                                                        filterable: true,
                                                        options:
                                                          _vm.voucherTypes
                                                      },
                                                      on: {
                                                        input:
                                                          _vm.getSelectedValue,
                                                        "search:focus":
                                                          _vm.clearInput
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "option",
                                                            fn: function(
                                                              option
                                                            ) {
                                                              return [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "d-center"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                        " +
                                                                        _vm._s(
                                                                          option.cVoucherName
                                                                        ) +
                                                                        "\n                                    "
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            }
                                                          },
                                                          {
                                                            key:
                                                              "selected-option",
                                                            fn: function(
                                                              option
                                                            ) {
                                                              return [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "selected d-center"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                        " +
                                                                        _vm._s(
                                                                          option.cVoucherName
                                                                        ) +
                                                                        "\n                                    "
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
                                                        value:
                                                          _vm.form.vouchertype,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.form,
                                                            "vouchertype",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "form.vouchertype"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "template",
                                                        { slot: "no-options" },
                                                        [
                                                          _vm._v(
                                                            "\n                                    Select voucher type\n                                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    2
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "form-control-feedback"
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-sm-6" },
                                    [
                                      _c("label", [_vm._v("Deadline")]),
                                      _vm._v(" "),
                                      _c("ValidationProvider", {
                                        attrs: {
                                          rules: "required",
                                          name: "Deadline "
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("datepicker", {
                                                    attrs: {
                                                      placeholder: "Deadline"
                                                    },
                                                    on: { input: _vm.setDate },
                                                    model: {
                                                      value: _vm.form.deadline,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "deadline",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.deadline"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "form-control-feedback"
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-sm-6" },
                                    [
                                      _c("label", { attrs: { for: "file" } }, [
                                        _vm._v("Select Supporting Doc")
                                      ]),
                                      _vm._v(" "),
                                      _c("ValidationProvider", {
                                        attrs: {
                                          rules: "required",
                                          name: "file "
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("input", {
                                                    ref: "file",
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "file",
                                                      id: "file"
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        return _vm.handleFileUpload()
                                                      }
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "form-control-feedback"
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-sm-12" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "reason" } },
                                        [_vm._v("Reason")]
                                      ),
                                      _vm._v(" "),
                                      _c("ValidationProvider", {
                                        attrs: {
                                          rules: "required",
                                          name: "reason "
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("textarea", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.form.reason,
                                                        expression:
                                                          "form.reason"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      id: "reason",
                                                      cols: "30",
                                                      rows: "3"
                                                    },
                                                    domProps: {
                                                      value: _vm.form.reason
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.form,
                                                          "reason",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "form-control-feedback"
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn pull-right btn-primary mr-2",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.save()
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        Send Request\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn pull-right btn-danger mr-3",
                                    on: {
                                      click: function($event) {
                                        _vm.showModal = false
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        Cancel\n                    "
                                    )
                                  ]
                                )
                              ])
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      3877589409
                    )
                  })
                ],
                1
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

/***/ "./resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestFund_vue_vue_type_template_id_6c21ed89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestFund.vue?vue&type=template&id=6c21ed89& */ "./resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue?vue&type=template&id=6c21ed89&");
/* harmony import */ var _RequestFund_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestFund.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RequestFund_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RequestFund_vue_vue_type_template_id_6c21ed89___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RequestFund_vue_vue_type_template_id_6c21ed89___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestFund_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RequestFund.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestFund_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue?vue&type=template&id=6c21ed89&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue?vue&type=template&id=6c21ed89& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestFund_vue_vue_type_template_id_6c21ed89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RequestFund.vue?vue&type=template&id=6c21ed89& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/ProjectCost/RequestFund.vue?vue&type=template&id=6c21ed89&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestFund_vue_vue_type_template_id_6c21ed89___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestFund_vue_vue_type_template_id_6c21ed89___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);