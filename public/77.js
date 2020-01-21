(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins/table-mixins-actions */ "./resources/assets/js/mixins/table-mixins-actions.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    jobId: {
      required: true
    }
  },
  mixins: [_mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_0__["ValidationObserver"]
  },
  data: function data() {
    return {
      showModal: false,
      quote: '',
      requiredDocs: [],
      form: {
        file: '',
        bill_of_landing_id: '',
        doc_name: '',
        vessel_id: ''
      }
    };
  },
  methods: {
    addClientImage: function addClientImage() {
      this.showModal = true;
    },
    handleFileUpload: function handleFileUpload() {
      this.form.file = this.$refs.file.files[0];
    },
    save: function save() {
      var _this = this;

      if (_.isNil(this.form.file)) {
        return this.flashError('File cannot be empty');
      }

      var formData = new FormData();
      formData.append('file', this.form.file);
      formData.append('bill_of_landing_id', this.jobId); // formData.append('vessel_id', this.quote.id);

      formData.append('vessel_id', this.jobId);
      formData.append('name', this.form.doc_name.name);
      Event.fire('show-loader', true);
      axios.post('/vessel/doc/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function () {
        Event.fire('show-loader', false);

        _this.$toastr.s("Cargo image added successfully ");

        _this.showModal = false;
        _this.form = {};

        _this.$emit('document-added');
      })["catch"](function () {
        _this.$toastr.e("An error occured ");

        Event.fire('show-loader', false);
      });
    },
    getClientRequiredDocs: function getClientRequiredDocs() {
      var _this2 = this;

      var url = '/client/required-docs/' + this.jobId;
      this.getRecord(url).then(function (_ref) {
        var data = _ref.data;
        _this2.quote = data;
        _this2.requiredDocs = JSON.parse(data.doc_ids);
      });
    }
  },
  created: function created() {
    this.getClientRequiredDocs();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue?vue&type=template&id=f29e2d46&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue?vue&type=template&id=f29e2d46& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _c("div", [
        _c(
          "a",
          {
            staticClass: "btn btn-success mb-2",
            attrs: { href: "/quotation/" + _vm.jobId, target: "_blank" }
          },
          [_vm._v("\n            Running Quote\n        ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-info mb-2",
            on: { click: _vm.addClientImage }
          },
          [_vm._v("\n            Add Client Document\n        ")]
        )
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
                _vm._v(" Add Client Documents")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "body" }, slot: "body" },
                [
                  _c("ValidationObserver", {
                    ref: "addShipment",
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
                                { staticClass: "form-group" },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      rules: "required",
                                      name: "Send notification "
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("label", [
                                                _vm._v("Select Document")
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-select",
                                                {
                                                  staticClass: "mb-0",
                                                  attrs: {
                                                    options: _vm.requiredDocs
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "option",
                                                        fn: function(option) {
                                                          return [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "d-center"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                    " +
                                                                    _vm._s(
                                                                      option.name
                                                                    ) +
                                                                    "\n                                "
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        }
                                                      },
                                                      {
                                                        key: "selected-option",
                                                        fn: function(option) {
                                                          return [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "selected d-center"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                    " +
                                                                    _vm._s(
                                                                      option.name
                                                                    ) +
                                                                    "\n                                "
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
                                                    value: _vm.form.doc_name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "doc_name",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.doc_name"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "template",
                                                    { slot: "no-options" },
                                                    [
                                                      _vm._v(
                                                        "\n                                Field Required\n                            "
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
                                { staticClass: "form-group" },
                                [
                                  _c("ValidationProvider", {
                                    attrs: { rules: "required", name: "file" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var errors = ref.errors
                                            return [
                                              _c(
                                                "label",
                                                { attrs: { for: "file" } },
                                                [
                                                  _vm._v(
                                                    "\n                            Upload file\n                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("input", {
                                                ref: "file",
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "file",
                                                  required: "required",
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
                      968953374
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

/***/ "./resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_f29e2d46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=f29e2d46& */ "./resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue?vue&type=template&id=f29e2d46&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_f29e2d46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_f29e2d46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue?vue&type=template&id=f29e2d46&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue?vue&type=template&id=f29e2d46& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_f29e2d46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=f29e2d46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobProcessing/ClientDocuments/Add.vue?vue&type=template&id=f29e2d46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_f29e2d46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_f29e2d46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);