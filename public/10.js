(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _mixins_alert_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins/alert-mixins */ "./resources/assets/js/mixins/alert-mixins.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    services: {
      required: false,
      type: Array,
      "default": null
    },
    quoteid: {
      "default": null,
      type: Number
    },
    taxes: {
      required: false,
      type: Array,
      "default": null
    },
    rate: {
      required: false,
      type: Number,
      "default": null
    },
    currency: {
      required: true
    }
  },
  mixins: [_mixins_alert_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_0__["ValidationObserver"]
  },
  data: function data() {
    return {
      selectedServiceValue: null,
      selectedTaxValue: null,
      serviceForm: {
        service_units: null,
        selling_price: null,
        rate: null
      }
    };
  },
  computed: _objectSpread({
    stockLink: function stockLink() {
      return this.selectedServiceValue.StockLink;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])({
    quotationServices: 'quotationServices'
  })),
  methods: {
    clearServiceInput: function clearServiceInput() {
      this.selectedServiceValue = null;
    },
    getSelectedServiceValue: function getSelectedServiceValue() {},
    getTaxValue: function getTaxValue() {},
    formatToCurrency: function formatToCurrency(value) {
      return parseFloat(value).toFixed(2);
    },
    addServiceToQuotation: function addServiceToQuotation() {
      if (this.serviceSellingPrice(this.serviceForm) < this.selectedServiceValue.selling_price) {
        return this.flashError("Unit  cost cannot be below buying price " + this.currency + " " + this.serviceRate(this.selectedServiceValue));
      }

      var quantity = this.formatToCurrency(this.serviceForm.service_units),
          sellingPrice = this.formatToCurrency(this.serviceForm.selling_price);
      var totalInclTax = this.formatToCurrency(parseFloat(sellingPrice) * parseFloat(quantity) + parseFloat(quantity) * parseFloat(sellingPrice) * (parseFloat(this.selectedTaxValue.TaxRate) / 100));
      var quotationServiceData = {
        service: this.selectedServiceValue,
        id: Object.keys(this.quotationServices).length + 1,
        service_id: this.selectedServiceValue.id,
        stock_link: this.stockLink,
        selling_price: this.serviceForm.selling_price,
        tax_code: this.selectedTaxValue.Code,
        tax_description: this.selectedTaxValue.Description,
        tax_id: this.selectedTaxValue.idTaxRate,
        type: this.selectedServiceValue.type,
        unit: this.selectedServiceValue.unit,
        rate: this.serviceRate(this.selectedServiceValue),
        name: this.selectedServiceValue.name,
        total_units: this.serviceForm.service_units,
        tax_details: this.selectedTaxValue,
        tax: parseFloat(quantity) * parseFloat(sellingPrice) * (parseFloat(this.selectedTaxValue.TaxRate) / 100),
        total: sellingPrice * quantity,
        totalInclTax: totalInclTax
      };
      this.quotationService = quotationServiceData; //save quotation if quote id is not empty

      if (!_.isNil(this.quoteid)) {
        var serviceFormData = {
          quotation_id: this.quoteid,
          DCLink: this.dclink,
          inputCur: this.currency,
          type: this.type,
          service: this.quotationService
        };
        return this.saveQuotationServiceToDb(serviceFormData, quotationServiceData);
      } else {
        this.serviceForm = {};
        this.$store.commit('SET_QUOTATION_SERVICES', quotationServiceData);
        this.selectedTaxValue = this.selectedServiceValue = null;
      }

      this.$refs.addservice.reset();
    },
    saveQuotationServiceToDb: function saveQuotationServiceToDb(data, quotationServiceData) {
      var _this = this;

      Event.fire('show-loader', true);
      axios.post('/add-service-to-quotation', data).then(function (response) {
        Event.fire('show-loader', false);

        _this.$toastr.s("Service added successfully");

        console.log(response);
        _this.serviceForm = {};

        _this.$store.commit('SET_QUOTATION_SERVICES', quotationServiceData);

        _this.selectedTaxValue = _this.selectedServiceValue = null;

        _this.$refs.addservice.reset();
      })["catch"](function (error) {
        Event.fire('show-loader', false);

        _this.$toastr.e("Service not added ");
      });
    },
    clearTaxInput: function clearTaxInput() {
      this.selectedTaxValue = null;
    },
    serviceRate: function serviceRate(value) {
      return this.formatToCurrency(this.currency === 'USD' ? value.rate / this.rate : value.rate);
    },
    serviceTax: function serviceTax() {
      return this.formatToCurrency(this.currency === 'USD' ? this.selectedTaxValue.TaxRate * (parseFloat(this.serviceForm.selling_price) * parseFloat(this.serviceForm.service_units)) / 100 / parseFloat(this.rate) : this.selectedTaxValue.TaxRate * (parseFloat(this.serviceForm.selling_price) * parseFloat(this.serviceForm.service_units)) / 100);
    },
    serviceSellingPrice: function serviceSellingPrice(value) {
      return this.formatToCurrency(this.currency === 'USD' ? value.selling_price / this.rate : value.selling_price);
    }
  },
  watch: {
    'selectedServiceValue': function selectedServiceValue(value) {
      if (!_.isNull(value)) {
        this.serviceForm.selling_price = this.serviceRate(value);
      }
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n.vs--disabled .vs__dropdown-toggle,\n.vs--disabled .vs__clear,\n.vs--disabled .vs__search,\n.vs--disabled .vs__selected,\n.vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: flex;\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid rgba(60, 60, 60, 0.26);\n  border-radius: 4px;\n  white-space: normal;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  padding: 0 2px;\n  position: relative;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n  padding: 4px 6px 0 3px;\n}\n\n/* Dropdown Toggle States */\n.vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n.vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n.vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transform: scale(1);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n.vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n  margin-right: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  position: absolute;\n  top: calc(100% - 1px);\n  left: 0;\n  z-index: 1000;\n  padding: 5px 0;\n  margin: 0;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(60, 60, 60, 0.26);\n  border-top-style: none;\n  border-radius: 0 0 4px 4px;\n  text-align: left;\n  list-style: none;\n  background: #fff;\n}\n.vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n.vs__dropdown-option:hover {\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  background: #5897fb;\n  color: #fff;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  background-color: #f0f0f0;\n  border: 1px solid rgba(60, 60, 60, 0.26);\n  border-radius: 4px;\n  color: #333;\n  line-height: 1.4;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  margin-left: 4px;\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  fill: rgba(60, 60, 60, 0.5);\n  text-shadow: 0 1px 0 #fff;\n}\n\n/* States */\n.vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-cancel-button,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  line-height: 1.4;\n  font-size: 1em;\n  border: 1px solid transparent;\n  border-left: none;\n  outline: none;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n}\n.vs__search::-webkit-input-placeholder {\n  color: inherit;\n}\n.vs__search::-moz-placeholder {\n  color: inherit;\n}\n.vs__search:-ms-input-placeholder {\n  color: inherit;\n}\n.vs__search::-ms-input-placeholder {\n  color: inherit;\n}\n.vs__search::placeholder {\n  color: inherit;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n.vs--unsearchable .vs__search:hover {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  transform: translateZ(0);\n  -webkit-animation: vSelectSpinner 1.1s infinite linear;\n          animation: vSelectSpinner 1.1s infinite linear;\n  transition: opacity 0.1s;\n}\n.vs__spinner,\n.vs__spinner:after {\n  border-radius: 50%;\n  width: 5em;\n  height: 5em;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.select2-container .select2-selection--single {\n  height: 50px !important;\n  padding: 2px;\n}\n.vs__search {\n  padding: 2px !important;\n}\n.select2-container .select2-selection--single {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  /* height: 28px; */\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  /* -webkit-user-select: none; */\n}\n.size-modal-content {\n  padding: 10px;\n}\n.v--modal-overlay[data-modal=example] {\n  background: rgba(0, 0, 0, 0.3);\n}\n.demo-modal-class {\n  border-radius: 5px;\n  background: #F7F7F7;\n  box-shadow: 5px 5px 30px 0 rgba(46, 61, 73, 0.2);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=template&id=56bbe1b4&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=template&id=56bbe1b4& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-12 col-md-12 " }, [
                      _c(
                        "div",
                        { staticClass: "form-group mb-2" },
                        [
                          _c("ValidationProvider", {
                            attrs: { rules: "required", name: "Service" },
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
                                            options: _vm.services
                                          },
                                          on: {
                                            "search:focus":
                                              _vm.clearServiceInput,
                                            input: _vm.getSelectedServiceValue
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
                                                        staticClass: "d-center"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                        " +
                                                            _vm._s(
                                                              option.name
                                                            ) +
                                                            " ~ SP KES " +
                                                            _vm._s(
                                                              option.rate
                                                            ) +
                                                            " | USD " +
                                                            _vm._s(
                                                              _vm.formatToCurrency(
                                                                option.rate /
                                                                  _vm.rate
                                                              )
                                                            ) +
                                                            "\n                                    "
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
                                                          "\n                                        " +
                                                            _vm._s(
                                                              option.name
                                                            ) +
                                                            " ~ SP KES " +
                                                            _vm._s(
                                                              option.rate
                                                            ) +
                                                            " | USD " +
                                                            _vm._s(
                                                              _vm.formatToCurrency(
                                                                option.rate /
                                                                  _vm.rate
                                                              )
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
                                            value: _vm.selectedServiceValue,
                                            callback: function($$v) {
                                              _vm.selectedServiceValue = $$v
                                            },
                                            expression: "selectedServiceValue"
                                          }
                                        },
                                        [
                                          _c(
                                            "template",
                                            { slot: "no-options" },
                                            [
                                              _vm._v(
                                                "\n                                    Select service\n                                "
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
                    _c("div", { staticClass: "col-sm-12  col-md-3" }, [
                      _c(
                        "div",
                        { staticClass: "form-group mb-2" },
                        [
                          _c("label", [
                            _vm._v("Quantity "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: { rules: "required", name: "Quantity" },
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
                                              _vm.serviceForm.service_units,
                                            expression:
                                              "serviceForm.service_units"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "number",
                                          step: "0.01",
                                          required: "required"
                                        },
                                        domProps: {
                                          value: _vm.serviceForm.service_units
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.serviceForm,
                                              "service_units",
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
                    _c("div", { staticClass: "col-sm-12 col-md-3" }, [
                      _c(
                        "div",
                        { staticClass: "form-group mb-2" },
                        [
                          _c("label", [
                            _vm._v("Unit Cost(Excl.) "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: { rules: "required", name: "Unit cost" },
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
                                              _vm.serviceForm.selling_price,
                                            expression:
                                              "serviceForm.selling_price"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "number",
                                          step: "0.01",
                                          required: "required"
                                        },
                                        domProps: {
                                          value: _vm.serviceForm.selling_price
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.serviceForm,
                                              "selling_price",
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
                    _c("div", { staticClass: "col-sm-12 col-md-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group mb-2" },
                        [
                          _c("label", [
                            _vm._v("Tax "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: { rules: "required", name: "Tax rate" },
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
                                            filterable: true,
                                            options: _vm.taxes
                                          },
                                          on: {
                                            input: _vm.getTaxValue,
                                            "search:focus": _vm.clearTaxInput
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
                                                        staticClass: "d-center"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                        " +
                                                            _vm._s(
                                                              option.Description
                                                            ) +
                                                            " - " +
                                                            _vm._s(
                                                              option.TaxRate
                                                            ) +
                                                            " %\n                                    "
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
                                                          "\n                                        " +
                                                            _vm._s(
                                                              option.Description
                                                            ) +
                                                            " - " +
                                                            _vm._s(
                                                              option.TaxRate
                                                            ) +
                                                            " %\n                                    "
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
                                            value: _vm.selectedTaxValue,
                                            callback: function($$v) {
                                              _vm.selectedTaxValue = $$v
                                            },
                                            expression: "selectedTaxValue"
                                          }
                                        },
                                        [
                                          _c(
                                            "template",
                                            { slot: "no-options" },
                                            [
                                              _vm._v(
                                                "\n                                    Select service\n                                "
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
                    _c("div", { staticClass: "col-sm-12 col-md-2" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-block btn-sm mt-4 btn-info p-2",
                          attrs: { disabled: !valid },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.addServiceToQuotation()
                            }
                          }
                        },
                        [
                          _c("span", [
                            _c("i", { staticClass: "fa fa-check" }),
                            _vm._v(" Add service")
                          ])
                        ]
                      )
                    ])
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

/***/ "./resources/assets/js/views/Quotation/Services/Add.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/views/Quotation/Services/Add.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_56bbe1b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=56bbe1b4& */ "./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=template&id=56bbe1b4&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_56bbe1b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_56bbe1b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/Quotation/Services/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=template&id=56bbe1b4&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=template&id=56bbe1b4& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_56bbe1b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=56bbe1b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Quotation/Services/Add.vue?vue&type=template&id=56bbe1b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_56bbe1b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_56bbe1b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);