(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"0922":function(e,a,t){"use strict";var n=t("a47f"),s=t.n(n);s.a},"480a":function(e,a,t){"use strict";t.r(a);var n=t("6e85"),s=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(a,e,function(){return n[e]})}(r);a["default"]=s.a},"63c6":function(e,a,t){"use strict";(function(e){t("b631"),t("921b");n(t("66fd"));var a=n(t("892f"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("543d")["createPage"])},"6e85":function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{source:0,addressList:[{name:"刘晓晓",mobile:"18666666666",addressName:"贵族皇仕牛排(东城店)",address:"北京市东城区",area:"B区",default:!0},{name:"刘大大",mobile:"18667766666",addressName:"龙回1区12号楼",address:"山东省济南市历城区",area:"西单元302",default:!1}]}},onLoad:function(e){console.log(e.source),this.source=e.source},methods:{checkAddress:function(a){1==this.source&&(this.$api.prePage().addressData=a,e.navigateBack())},addAddress:function(a,t){e.navigateTo({url:"/pages/address/addressManage?type=".concat(a,"&data=").concat(JSON.stringify(t))})},refreshList:function(e,a){this.addressList.unshift(e),console.log(e,a)}}};a.default=t}).call(this,t("543d")["default"])},"892f":function(e,a,t){"use strict";t.r(a);var n=t("b662"),s=t("480a");for(var r in s)"default"!==r&&function(e){t.d(a,e,function(){return s[e]})}(r);t("0922");var u=t("2877"),o=Object(u["a"])(s["default"],n["a"],n["b"],!1,null,null,null);a["default"]=o.exports},a47f:function(e,a,t){},b662:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement;e._self._c},s=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return s})}},[["63c6","common/runtime","common/vendor"]]]);