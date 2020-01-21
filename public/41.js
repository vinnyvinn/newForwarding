(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _mixins_alert_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins/alert-mixins */ "./resources/assets/js/mixins/alert-mixins.js");
/* harmony import */ var _mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mixins/table-mixins-actions */ "./resources/assets/js/mixins/table-mixins-actions.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    jobStages: {
      required: true
    },
    jobId: {
      required: true
    }
  },
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_0__["ValidationObserver"]
  },
  mixins: [_mixins_alert_mixins__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      showModal: false,
      selectedStage: null,
      stages: [],
      form: {
        stages_id: null,
        bill_of_landings_id: null,
        stage_name: null,
        stage_description: null,
        weight: null
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])({
    selectedJobStage: 'selectedJobStage'
  }), {
    filteredStages: function filteredStages() {
      var stageIds = _.map(this.jobStages, function (val) {
        return val.id;
      });

      return _.filter(this.stages, function (val) {
        return !_.includes(stageIds, val.id);
      });
    }
  }),
  methods: {
    shipment: function shipment(value) {
      this.form.type = value.name;
    },
    clearInput: function clearInput(value) {
      console.log(value);
      this.selectedStage = null;
    },
    save: function save() {
      var _this = this;

      this.form.bill_of_landings_id = this.jobId;
      var url = '/api/billofLandingStages',
          data = this.form,
          serviceName = 'Job Stage';
      this.addRecord(url, data, serviceName).then(function (response) {
        _this.form = {};
        _this.showModal = false;
        _this.selectedStage = false;
        Event.fire('job-stage-added', _this.form.stages_id);
        Event.fire('reload-dsr');
      });
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
    getSelectedValue: function getSelectedValue(value) {
      this.form.stage_description = value.description;
      this.form.weight = value.id;
      this.form.stage_name = value.name;
      this.form.stages_id = value.id;
    },
    addStage: function addStage() {
      this.showModal = true;
      this.getStages();
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form-control-feedback {\n    color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=template&id=20a2fd4e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=template&id=20a2fd4e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c(
        "button",
        {
          staticClass: "btn btn-outline- btn-rounded",
          on: { click: _vm.addStage }
        },
        [_vm._v("\n        Add Stage\n    ")]
      ),
      _vm._v(" "),
      _vm.showModal
        ? _c(
            "my-modal",
            {
              attrs: { id: "add-shipment" },
              on: {
                "close-modal": function($event) {
                  _vm.showModal = false
                }
              }
            },
            [
              _c("div", { attrs: { slot: "title" }, slot: "title" }, [
                _vm._v(" Add Stage To Job")
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
                        return _vm.save($event)
                      }
                    }
                  },
                  [
                    _c("ValidationObserver", {
                      ref: "addShipment",
                      staticClass: "col-sm-12 ",
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var valid = ref.valid
                              var passes = ref.passes
                              return [
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-12" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "col-md-12 control-label"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                Name\n                                "
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
                                          _c("ValidationProvider", {
                                            attrs: {
                                              rules: "required",
                                              name: "Name "
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
                                                              _vm.filteredStages
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
                                                                          "\n                                                " +
                                                                            _vm._s(
                                                                              option.name
                                                                            ) +
                                                                            "\n                                            "
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
                                                                          "\n                                                " +
                                                                            _vm._s(
                                                                              option.name
                                                                            ) +
                                                                            "\n                                            "
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
                                                              _vm.selectedStage,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.selectedStage = $$v
                                                            },
                                                            expression:
                                                              "selectedStage"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "template",
                                                            {
                                                              slot: "no-options"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                            Select/type to Add Stage\n                                        "
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
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          )
                                                        ]
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
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-12" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "col-md-12 control-label"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                Description\n                                "
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
                                          _c("ValidationProvider", {
                                            attrs: {
                                              rules: "required",
                                              name: "description"
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
                                                            value:
                                                              _vm.form
                                                                .stage_description,
                                                            expression:
                                                              "form.stage_description"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: { type: "text" },
                                                        domProps: {
                                                          value:
                                                            _vm.form
                                                              .stage_description
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.form,
                                                              "stage_description",
                                                              $event.target
                                                                .value
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
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          )
                                                        ]
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
                                  _c("div", { staticClass: "col-sm-12" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("input", {
                                        staticClass:
                                          "btn btn-primary pull-right",
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
                                            "\n                                    Close\n                                "
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                ])
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        1953807974
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

/***/ "./resources/assets/js/views/JobProcessing/Stages/Add.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/Stages/Add.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_20a2fd4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=20a2fd4e& */ "./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=template&id=20a2fd4e&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_20a2fd4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_20a2fd4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/JobProcessing/Stages/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=template&id=20a2fd4e&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=template&id=20a2fd4e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_20a2fd4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=20a2fd4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Stages/Add.vue?vue&type=template&id=20a2fd4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_20a2fd4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_20a2fd4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);