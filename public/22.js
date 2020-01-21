(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Admin/Settings/CompanyProfile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Admin/Settings/CompanyProfile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mixins_alert_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mixins/alert-mixins */ "./resources/assets/js/mixins/alert-mixins.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_0__["ValidationObserver"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  mixins: [_mixins_alert_mixins__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data: function data() {
    return {
      dropzoneOptions: {
        url: '/company-logo',
        thumbnailWidth: 300,
        maxFilesize: 2,
        headers: {
          "X-CSRF-TOKEN": document.head.querySelector("[name=csrf-token]").content
        },
        maxFiles: 1
      },
      form: {
        email_signature: '',
        company_vat: '',
        company_registration: '',
        company_domain: '',
        company_fax: '',
        company_mobile: '',
        company_phone_2: '',
        company_phone: '',
        company_email: '',
        company_country: '',
        company_state: '',
        company_zip_code: '',
        company_name: '',
        company_legal_name: '',
        logo_url: '',
        contact_person: '',
        company_address: '',
        company_city: '',
        building_name: '',
        company_tag_line: ''
      }
    };
  },
  methods: {
    saveSettings: function saveSettings() {
      var _this = this;

      Event.fire('show-loader', true);
      axios.post('/save-company-info', this.form).then(function (response) {
        Event.fire('show-loader', false);

        _this.flashSucces("Saved Successfully");
      })["catch"](function (error) {
        Event.fire('show-loader', false);

        _this.flashError("Not saved");
      });
    },
    vDropZoneSuccess: function vDropZoneSuccess(file, response) {
      this.form.logo_url = response.data.url;
      this.flashSucces("Company logo Saved Successfully");
    },
    vDropZoneSending: function vDropZoneSending(file, xhr, formData) {},
    vDropZoneError: function vDropZoneError(file, message, xhr) {
      this.flashError("Company not updated");
    },
    getCompanyInfo: function getCompanyInfo() {
      var _this2 = this;

      Event.fire('show-loader', true);
      axios.get('/get-company-info').then(function (response) {
        _this2.form = response.data;
        Event.fire('show-loader', false);
      })["catch"](function (error) {
        console.log(error);
        Event.fire('show-loader', false);
      });
    }
  },
  mounted: function mounted() {
    this.getCompanyInfo();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Admin/Settings/CompanyProfile.vue?vue&type=template&id=ac220b56&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Admin/Settings/CompanyProfile.vue?vue&type=template&id=ac220b56& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card pt-5 pb-5" }, [
    _c(
      "form",
      {
        attrs: { method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.saveSettings($event)
          }
        }
      },
      [
        _c("ValidationObserver", {
          ref: "addservice",
          staticClass: "col-sm-12 ",
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var valid = ref.valid
                var passes = ref.passes
                return [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group col-md-12" }, [
                        _c(
                          "label",
                          { staticClass: "col-md-12 control-label" },
                          [
                            _vm._v(
                              "\n                            Company Name\n                            "
                            ),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
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
                                name: "Company name"
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
                                              value: _vm.form.company_name,
                                              expression: "form.company_name"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: { type: "text" },
                                          domProps: {
                                            value: _vm.form.company_name
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "company_name",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "form-control-feedback"
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
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
                        _c(
                          "label",
                          { staticClass: "col-md-12 control-label" },
                          [
                            _vm._v(
                              "\n                            Legal Name\n                            "
                            ),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
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
                                name: "Company legal name"
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
                                                _vm.form.company_legal_name,
                                              expression:
                                                "form.company_legal_name"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: { type: "text" },
                                          domProps: {
                                            value: _vm.form.company_legal_name
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "company_legal_name",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "form-control-feedback"
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
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
                        _c(
                          "label",
                          { staticClass: "col-md-12 control-label" },
                          [_vm._v("Contact Person ")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.contact_person,
                                expression: "form.contact_person"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.form.contact_person },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "contact_person",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
                        _c(
                          "label",
                          { staticClass: "col-md-12 control-label" },
                          [_vm._v("Building Name ")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.building_name,
                                expression: "form.building_name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.form.building_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "building_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group col-md-12" },
                        [
                          _c(
                            "label",
                            { staticClass: "col-md-12 control-label p3" },
                            [
                              _vm._v(
                                "Company logo\n                            "
                              ),
                              _vm.form.logo_url
                                ? _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-xs btn-danger",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.form.logo_url = ""
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "Remove\n                            "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          !_vm.form.logo_url
                            ? _c("vue-dropzone", {
                                ref: "myVueDropzone",
                                attrs: {
                                  id: "dropzone",
                                  options: _vm.dropzoneOptions
                                },
                                on: {
                                  "vdropzone-success": _vm.vDropZoneSuccess,
                                  "vdropzone-sending": _vm.vDropZoneSending,
                                  "vdropzone-error": _vm.vDropZoneError
                                }
                              })
                            : _c("div", [
                                _c("img", {
                                  attrs: {
                                    src: _vm.form.logo_url,
                                    width: "100%",
                                    height: "300px"
                                  }
                                })
                              ])
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-12" }, [
                    _c("label", { staticClass: "col-md-12 control-label" }, [
                      _vm._v("\n                    Tag line  "),
                      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-12" },
                      [
                        _c("ValidationProvider", {
                          attrs: { rules: "required", name: "Company address" },
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
                                          value: _vm.form.company_tag_line,
                                          expression: "form.company_tag_line"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.form.company_tag_line
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "company_tag_line",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "form-control-feedback" },
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
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-12" }, [
                    _c("label", { staticClass: "col-md-12 control-label" }, [
                      _vm._v("\n                    Company Address "),
                      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-12" },
                      [
                        _c("ValidationProvider", {
                          attrs: { rules: "required", name: "Company address" },
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
                                          value: _vm.form.company_address,
                                          expression: "form.company_address"
                                        }
                                      ],
                                      staticClass: "form-control ta",
                                      attrs: { required: "" },
                                      domProps: {
                                        value: _vm.form.company_address
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "company_address",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "form-control-feedback" },
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
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { staticClass: "col-md-12 control-label" }, [
                        _vm._v("Zip Code")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.company_zip_code,
                              expression: "form.company_zip_code"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.company_zip_code },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "company_zip_code",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { staticClass: "col-md-12 control-label" }, [
                        _vm._v("City ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.company_city,
                              expression: "form.company_city"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.company_city },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "company_city",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { staticClass: "col-md-12 control-label" }, [
                        _vm._v("State ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.company_state,
                              expression: "form.company_state"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.company_state },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "company_state",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { staticClass: "col-md-12 control-label" }, [
                        _vm._v("Country")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.company_country,
                                expression: "form.company_country"
                              }
                            ],
                            staticClass: " form-control ",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "company_country",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "Yemen" } }, [
                              _vm._v("Yemen")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Zambia" } }, [
                              _vm._v("Zambia")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Zimbabwe" } }, [
                              _vm._v("Zimbabwe")
                            ])
                          ]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { staticClass: "col-md-12 control-label" }, [
                        _vm._v("Company Email ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.company_email,
                              expression: "form.company_email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.company_email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "company_email",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { staticClass: "col-md-12 control-label" }, [
                        _vm._v("Company Phone ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.company_phone,
                              expression: "form.company_phone"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.company_phone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "company_phone",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { staticClass: "col-md-12 control-label" }, [
                        _vm._v("Company Phone 2")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.company_phone_2,
                              expression: "form.company_phone_2"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.company_phone_2 },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "company_phone_2",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { staticClass: "col-md-12 control-label" }, [
                        _vm._v("Mobile ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.company_mobile,
                              expression: "form.company_mobile"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.company_mobile },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "company_mobile",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { staticClass: "col-md-12 control-label" }, [
                        _vm._v("Fax ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.company_fax,
                              expression: "form.company_fax"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.company_fax },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "company_fax",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { staticClass: "col-md-12 control-label" }, [
                        _vm._v("Website ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.company_domain,
                              expression: "form.company_domain"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.company_domain },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "company_domain",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { staticClass: "col-md-12 control-label" }, [
                        _vm._v("Company Registration ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.company_registration,
                              expression: "form.company_registration"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.company_registration },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "company_registration",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { staticClass: "col-md-12 control-label" }, [
                        _vm._v("Tax Number ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.company_vat,
                              expression: "form.company_vat"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.company_vat },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "company_vat",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-12" }, [
                    _c("label", { staticClass: "col-md-12 control-label" }, [
                      _vm._v("Email Signature ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.email_signature,
                            expression: "form.email_signature"
                          }
                        ],
                        staticClass: "form-control ta",
                        domProps: { value: _vm.form.email_signature },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "email_signature",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        staticClass: "btn btn-primary pull-right",
                        attrs: {
                          type: "submit",
                          disabled: !valid,
                          value: "Add Details"
                        }
                      })
                    ])
                  ])
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
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

/***/ "./resources/assets/js/views/Admin/Settings/CompanyProfile.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/views/Admin/Settings/CompanyProfile.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyProfile_vue_vue_type_template_id_ac220b56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyProfile.vue?vue&type=template&id=ac220b56& */ "./resources/assets/js/views/Admin/Settings/CompanyProfile.vue?vue&type=template&id=ac220b56&");
/* harmony import */ var _CompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyProfile.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/Admin/Settings/CompanyProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyProfile_vue_vue_type_template_id_ac220b56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyProfile_vue_vue_type_template_id_ac220b56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/Admin/Settings/CompanyProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/Admin/Settings/CompanyProfile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/views/Admin/Settings/CompanyProfile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Admin/Settings/CompanyProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/Admin/Settings/CompanyProfile.vue?vue&type=template&id=ac220b56&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/views/Admin/Settings/CompanyProfile.vue?vue&type=template&id=ac220b56& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_template_id_ac220b56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyProfile.vue?vue&type=template&id=ac220b56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Admin/Settings/CompanyProfile.vue?vue&type=template&id=ac220b56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_template_id_ac220b56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_template_id_ac220b56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);