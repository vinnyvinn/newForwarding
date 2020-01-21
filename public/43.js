(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _mixins_alert_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mixins/alert-mixins */ "./resources/assets/js/mixins/alert-mixins.js");
/* harmony import */ var _mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mixins/table-mixins-actions */ "./resources/assets/js/mixins/table-mixins-actions.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
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
    step: {
      required: true
    },
    jobId: {
      required: true
    }
  },
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_0__["ValidationObserver"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_mixins_alert_mixins__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data: function data() {
    return {
      showModal: false,
      form: {
        remark: null,
        date: null,
        file: null,
        text: null,
        subchecklist: [],
        step: null,
        stepChecked: false
      }
    };
  },
  computed: _objectSpread({
    setActive: function setActive() {
      return !_.isEmpty(this.step.dmsComponents) || this.stepChecked;
    },
    showFile: function showFile() {
      return !_.isNil(this.step.dmsComponents) && !_.isNil(this.step.dmsComponents.file);
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])({
    selectedJobStage: 'selectedJobStage'
  })),
  methods: {
    showForm: function showForm() {
      this.showModal = true;
    },
    setDate: function setDate(value) {
      this.form.date = value;
    },
    save: function save() {
      var _this = this;

      this.form.step = this.step;
      var formData = new FormData();
      formData.append('file', this.form.file);
      formData.append('completion_date', moment(this.form.date));
      formData.append('remark', this.form.remark);
      formData.append('text', this.form.text);
      formData.append('subchecklist', this.form.subchecklist);
      formData.append('bill_of_landing_stage_components_id', this.form.step.id);
      formData.append('bill_of_landing_id', this.jobId);
      Event.fire('show-loader', true);
      axios.post('/api/bldmsComponents', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function () {
        Event.fire('show-loader', false);
        Event.fire('reload-dsr');

        _this.$toastr.s("Checklist updated successfully ");

        _this.showModal = false;
        _this.form = {};
        _this.stepChecked = true;
        Event.fire('load-stage-checklist', _this.selectedJobStage);
      })["catch"](function () {
        _this.$toastr.e("An error occured ");

        Event.fire('show-loader', false);
      });
    },
    handleFileUpload: function handleFileUpload() {
      this.form.file = this.$refs.file.files[0];
    }
  },
  mounted: function mounted() {
    if (!_.isNil(this.step.dmsComponents)) {
      this.form.text = this.step.dmsComponents.text;
      this.form.remark = _.isNil(this.step.dmsComponents.remark) ? '' : this.step.dmsComponents.remark; // this.form.date = moment(this.step.dmsComponents.date);

      this.form.file = _.isNil(this.step.dmsComponents.file) ? '' : this.step.dmsComponents.file;
      this.form.subchecklist = this.step.dmsComponents.subchecklist;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[type=checkbox]:not(:checked):disabled + label:before {\n  border: 1px solid #b1b8bb !important;\n  background-color: unset !important;\n}\n[type=checkbox]:checked + label:before {\n  border-right: 2px solid #26a69a !important;\n  border-bottom: 2px solid #26a69a !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Complete.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=template&id=83bca41a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=template&id=83bca41a& ***!
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
  return _c(
    "div",
    [
      _c("ul", { staticClass: "icheck-list", on: { click: _vm.showForm } }, [
        _c("input", {
          key: _vm.step.id,
          attrs: { type: "checkbox", id: _vm.step.id, disabled: "true" },
          domProps: { checked: _vm.setActive, value: _vm.step.id }
        }),
        _vm._v(" "),
        _c("label", { attrs: { for: _vm.step.id } }, [
          _vm._v("\n            " + _vm._s(_vm.step.name) + "\n        ")
        ])
      ]),
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
                _c("b", [
                  _vm._v(_vm._s(_vm._f("capitalizeFirst")(_vm.step.name)))
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "body" }, slot: "body" },
                [
                  _c("ValidationObserver", {
                    ref: "completeStep",
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
                                  staticClass: "p-2 mb-2",
                                  staticStyle: {
                                    "min-height": "300px",
                                    "overflow-y": "scroll"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "components" } },
                                        [
                                          _vm._v(
                                            "Date (" +
                                              _vm._s(_vm.step.name) +
                                              ")"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("datepicker", {
                                        attrs: { placeholder: "End date" },
                                        on: { input: _vm.setDate },
                                        model: {
                                          value: _vm.form.date,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "date", $$v)
                                          },
                                          expression: "form.date"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.step.type === "file"
                                    ? _c("div", { staticClass: "form-group" }, [
                                        _c(
                                          "label",
                                          { attrs: { for: "components" } },
                                          [
                                            _vm._v(
                                              "Upload file\n                            "
                                            ),
                                            _vm.showFile
                                              ? _c("small", [
                                                  _c(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href:
                                                          _vm.step.dmsComponents
                                                            .file
                                                      }
                                                    },
                                                    [_vm._v(" view file")]
                                                  )
                                                ])
                                              : _vm._e()
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          ref: "file",
                                          staticClass: "form-control",
                                          attrs: { type: "file", id: "file" },
                                          on: {
                                            change: function($event) {
                                              return _vm.handleFileUpload()
                                            }
                                          }
                                        })
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.step.type === "text"
                                    ? _c("div", { staticClass: "form-group" }, [
                                        _c(
                                          "label",
                                          { attrs: { for: "text" } },
                                          [_vm._v("Text ")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.text,
                                              expression: "form.text"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: { type: "text", id: "text" },
                                          domProps: { value: _vm.form.text },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "text",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        })
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.step.type === "checkbox"
                                    ? _c(
                                        "div",
                                        { staticClass: "form-group col-sm-12" },
                                        _vm._l(_vm.step.components, function(
                                          component,
                                          key
                                        ) {
                                          return _c(
                                            "ul",
                                            { staticClass: "icheck-list" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.form.subchecklist,
                                                    expression:
                                                      "form.subchecklist"
                                                  }
                                                ],
                                                key: key,
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "checkbox",
                                                  id: key
                                                },
                                                domProps: {
                                                  value: component,
                                                  checked: Array.isArray(
                                                    _vm.form.subchecklist
                                                  )
                                                    ? _vm._i(
                                                        _vm.form.subchecklist,
                                                        component
                                                      ) > -1
                                                    : _vm.form.subchecklist
                                                },
                                                on: {
                                                  change: function($event) {
                                                    var $$a =
                                                        _vm.form.subchecklist,
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false
                                                    if (Array.isArray($$a)) {
                                                      var $$v = component,
                                                        $$i = _vm._i($$a, $$v)
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          _vm.$set(
                                                            _vm.form,
                                                            "subchecklist",
                                                            $$a.concat([$$v])
                                                          )
                                                      } else {
                                                        $$i > -1 &&
                                                          _vm.$set(
                                                            _vm.form,
                                                            "subchecklist",
                                                            $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice(
                                                                  $$i + 1
                                                                )
                                                              )
                                                          )
                                                      }
                                                    } else {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "subchecklist",
                                                        $$c
                                                      )
                                                    }
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                { attrs: { for: key } },
                                                [
                                                  _vm._v(
                                                    "\n                                " +
                                                      _vm._s(component) +
                                                      "\n                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        }),
                                        0
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: {
                                          rules: "",
                                          name: "Sub check list "
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c(
                                                    "label",
                                                    {
                                                      attrs: {
                                                        for: "components"
                                                      }
                                                    },
                                                    [_vm._v("Remarks")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("textarea", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.form.remark,
                                                        expression:
                                                          "form.remark"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      id: "components",
                                                      cols: "30",
                                                      rows: "3"
                                                    },
                                                    domProps: {
                                                      value: _vm.form.remark
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
                                                          "remark",
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
                                    attrs: { disabled: !valid },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.save()
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        Save\n                    "
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
                                        $event.preventDefault()
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
                      2604013613
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

/***/ "./resources/assets/js/views/JobProcessing/Steps/Complete.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/Steps/Complete.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Complete_vue_vue_type_template_id_83bca41a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complete.vue?vue&type=template&id=83bca41a& */ "./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=template&id=83bca41a&");
/* harmony import */ var _Complete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Complete.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Complete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Complete.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Complete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Complete_vue_vue_type_template_id_83bca41a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Complete_vue_vue_type_template_id_83bca41a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/JobProcessing/Steps/Complete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Complete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Complete.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=template&id=83bca41a&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=template&id=83bca41a& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_template_id_83bca41a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Complete.vue?vue&type=template&id=83bca41a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/Steps/Complete.vue?vue&type=template&id=83bca41a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_template_id_83bca41a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Complete_vue_vue_type_template_id_83bca41a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);