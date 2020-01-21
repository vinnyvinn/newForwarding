(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    required: {
      "default": 'required',
      required: false,
      type: String
    }
  },
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_0__["ValidationObserver"]
  },
  mixins: [_mixins_table_mixins_actions__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      shipmentTypes: [],
      selectedShipmentType: null
    };
  },
  methods: {
    getShipmentTypes: function getShipmentTypes() {
      var _this = this;

      this.getRecord('/api/shipmentTypes', {
        all: true
      }, 'Shipment Types', false).then(function (response) {
        _this.shipmentTypes = response.data;
      });
    },
    getShipmentTypeValue: function getShipmentTypeValue(value) {
      this.$emit('selected-value', value);
    },
    clearShipmentTypeInput: function clearShipmentTypeInput() {
      this.selectedShipmentType = null;
    }
  },
  created: function created() {
    this.getShipmentTypes();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue?vue&type=template&id=5bb8ccd6&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue?vue&type=template&id=5bb8ccd6& ***!
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
  return _c("ValidationProvider", {
    attrs: { rules: "required", name: "Shipment  type" },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var errors = ref.errors
          return [
            _c(
              "v-select",
              {
                attrs: { filterable: true, options: _vm.shipmentTypes },
                on: {
                  input: _vm.getShipmentTypeValue,
                  "search:focus": _vm.clearShipmentTypeInput
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "option",
                      fn: function(option) {
                        return [
                          _c("div", { staticClass: "d-center" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(option.name) +
                                "\n            "
                            )
                          ])
                        ]
                      }
                    },
                    {
                      key: "selected-option",
                      fn: function(option) {
                        return [
                          _c("div", { staticClass: "selected d-center" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(option.name) +
                                "\n            "
                            )
                          ])
                        ]
                      }
                    }
                  ],
                  null,
                  true
                ),
                model: {
                  value: _vm.selectedShipmentType,
                  callback: function($$v) {
                    _vm.selectedShipmentType = $$v
                  },
                  expression: "selectedShipmentType"
                }
              },
              [
                _c("template", { slot: "no-options" }, [
                  _vm._v("\n            Select service\n        ")
                ])
              ],
              2
            ),
            _vm._v(" "),
            _c("span", { staticClass: "form-control-feedback" }, [
              _vm._v(_vm._s(errors[0]))
            ])
          ]
        }
      }
    ])
  })
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

/***/ "./resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown_vue_vue_type_template_id_5bb8ccd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=template&id=5bb8ccd6& */ "./resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue?vue&type=template&id=5bb8ccd6&");
/* harmony import */ var _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dropdown_vue_vue_type_template_id_5bb8ccd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dropdown_vue_vue_type_template_id_5bb8ccd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue?vue&type=template&id=5bb8ccd6&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue?vue&type=template&id=5bb8ccd6& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_5bb8ccd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=template&id=5bb8ccd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/JobWorkflow/ShipmentType/Dropdown.vue?vue&type=template&id=5bb8ccd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_5bb8ccd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_5bb8ccd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);