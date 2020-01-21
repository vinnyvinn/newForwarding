(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Approvals/Notification.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Approvals/Notification.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      tableData: {},
      params: {
        url: ''
      }
    };
  },
  computed: {
    disableNextPage: function disableNextPage() {
      return this.tableData.to === this.tableData.current_page;
    },
    disablePrevPage: function disablePrevPage() {
      return this.tableData.from === this.tableData.current_page;
    }
  },
  methods: {
    getApprovalNotifications: function getApprovalNotifications() {
      var _this = this;

      Event.fire('show-loader', true);
      axios.get('/unread-notifications/' + this.params.url).then(function (response) {
        _this.tableData = response.data;
        Event.fire('show-loader', false);
      })["catch"](function (error) {
        console.log(error);
        Event.fire('show-loader', false);
      });
    },
    loadPage: function loadPage(type) {
      console.log(type === 'next' + this.disableNextPage);

      if (type === 'next' && !this.disableNextPage) {
        this.params.url = this.tableData.next_page_url;
        this.getApprovalNotifications();
      }

      if (type === 'prev' && !this.disablePrevPage) {
        this.params.url = this.tableData.prev_page_url;
        this.getApprovalNotifications();
      }
    }
  },
  created: function created() {
    this.getApprovalNotifications();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Approvals/Notification.vue?vue&type=template&id=58b59ebd&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/Approvals/Notification.vue?vue&type=template&id=58b59ebd& ***!
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
  return _c("div", { staticClass: "col-lg-4" }, [
    _c("div", { staticClass: "card" }, [
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c(
            "div",
            {
              staticClass:
                "ribbon ribbon-bookmark ribbon-right mb-3 ribbon-default",
              staticStyle: { "margin-bottom": "0" }
            },
            [_vm._v("\n                Notification\n            ")]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("hr", { staticClass: "m-0" }),
          _vm._v(" "),
          _vm._l(_vm.tableData.data, function(data) {
            return _c("ul", { staticClass: "feeds" }, [
              _c("li", [
                _vm._m(1, true),
                _vm._v(
                  "\n                    " +
                    _vm._s(data.title) +
                    "\n                    "
                ),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-xs pull-right btn-primary",
                    attrs: { href: "/notifications/" + data.id }
                  },
                  [_c("i", { staticClass: "fa fa-eye" })]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "text-muted  w-100 pl-5 mb-2",
                    staticStyle: { "margin-top": "-3px" }
                  },
                  [_vm._v(" " + _vm._s(data.ago))]
                )
              ])
            ])
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "text-right p-2" }, [
        _vm._v(
          "\n            " +
            _vm._s(_vm.tableData.from) +
            " - " +
            _vm._s(_vm.tableData.to) +
            " of " +
            _vm._s(_vm.tableData.total) +
            "   \n            "
        ),
        _c(
          "button",
          {
            class: _vm.disablePrevPage
              ? "cursor-pointer disabled"
              : "cursor-pointer",
            on: {
              click: function($event) {
                return _vm.loadPage("prev")
              }
            }
          },
          [_c("i", { staticClass: "fa fa-angle-left" })]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            class: _vm.disableNextPage
              ? "cursor-pointer disabled"
              : "cursor-pointer",
            on: {
              click: function($event) {
                return _vm.loadPage("next")
              }
            }
          },
          [_c("i", { staticClass: "fa fa-angle-right" })]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "card-title" }, [
      _c("button", { staticClass: "btn-circle btn-sm btn-warning" }, [
        _vm._v("10")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bg-light-info" }, [
      _c("i", { staticClass: "fa fa-bell-o" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/Approvals/Notification.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/views/Approvals/Notification.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification_vue_vue_type_template_id_58b59ebd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.vue?vue&type=template&id=58b59ebd& */ "./resources/assets/js/views/Approvals/Notification.vue?vue&type=template&id=58b59ebd&");
/* harmony import */ var _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/Approvals/Notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notification_vue_vue_type_template_id_58b59ebd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notification_vue_vue_type_template_id_58b59ebd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/Approvals/Notification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/Approvals/Notification.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/views/Approvals/Notification.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Approvals/Notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/Approvals/Notification.vue?vue&type=template&id=58b59ebd&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/views/Approvals/Notification.vue?vue&type=template&id=58b59ebd& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_58b59ebd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=template&id=58b59ebd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/Approvals/Notification.vue?vue&type=template&id=58b59ebd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_58b59ebd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_58b59ebd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);