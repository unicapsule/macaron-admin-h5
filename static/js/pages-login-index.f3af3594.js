(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-index"],{"0206":function(t,i,n){var o=n("44c0");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=n("4f06").default;s("4a100c82",o,!0,{sourceMap:!1,shadowMode:!1})},"25a7":function(t,i,n){"use strict";n.r(i);var o=n("c0ba"),s=n("dda9");for(var a in s)"default"!==a&&function(t){n.d(i,t,function(){return s[t]})}(a);n("7c7d");var e,r=n("f0c5"),h=Object(r["a"])(s["default"],o["b"],o["c"],!1,null,"628c16c0",null,!1,o["a"],e);i["default"]=h.exports},"44c0":function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-628c16c0]{background-color:#fff}.status-area[data-v-628c16c0]{margin-top:4vw;margin-right:2vw;width:20vw;padding:2vw 0;text-align:center;border:1px solid #ddd}.status-area.active[data-v-628c16c0]{color:#fff;background-color:#3cba92;border-color:#fff}.login-area[data-v-628c16c0]{border:1px solid #ddd;padding:2.7vw 6.7vw;margin-top:2vw}.login-btn[data-v-628c16c0]{text-align:center;padding:2.7vw 4vw;background-color:#4cd964;border:1px solid #ddd;border-radius:1.3vw;color:#fff;margin:2.7vw 0}body.?%PAGE?%[data-v-628c16c0]{background-color:#fff}',""])},"622e":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("6b54"),n("a481");var o={username:/^(?![0-9])[a-zA-Z0-9_-\s]+$/,phone:/^(\+1|1)?([2-9]\d\d[2-9]\d{6})$/,email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,loginEmail:/^[A-Za-z0-9\u4e00-\u9fa5]+([\.-]?[A-Za-z0-9\u4e00-\u9fa5]+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/};function s(t){return o.username.test(t)}function a(t){return o.email.test(t)}function e(t){return o.loginEmail.test(t)}function r(t){return o.phone.test(t)}function h(t){var i=t.length,n="";return t=t.toString().replace(/[^0-9]/g,""),i=i>0?i:10,11==i&&(n="1 ",t=t.substring(1)),area=t.substring(0,3),prefix=t.substring(3,6),line=t.substring(6),n+"("+area+") "+prefix+"-"+line}var c={validateEmail:a,validateLoginEmail:e,validatePhone:r,validateUserName:s,formatPhone:h};i.default=c},"7c7d":function(t,i,n){"use strict";var o=n("0206"),s=n.n(o);s.a},c0ba:function(t,i,n){"use strict";var o,s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"login-wrap"},[n("v-uni-view",{staticClass:"login-left"},[n("v-uni-view",{staticClass:"login-title"},[n("v-uni-view",{staticClass:"login-title__info"},[t._v("Sign in to "+t._s(t.shopName))]),n("v-uni-view",{staticClass:"login-title__content"},[t._v("Please enter your credentials to proceed.")])],1),n("v-uni-view",[n("v-uni-view",{staticClass:"input-area"},[n("uni-inputs",{attrs:{placeholder:"enter your email here",label:"email address"},model:{value:t.email,callback:function(i){t.email=i},expression:"email"}}),n("uni-inputs",{attrs:{placeholder:"password",label:"password",inputType:"password"},model:{value:t.emailPsw,callback:function(i){t.emailPsw=i},expression:"emailPsw"}})],1)],1),n("uni-buttons",{attrs:{size:"big"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.login.apply(void 0,arguments)}}},[t._v("login")])],1),n("v-uni-view",{staticClass:"login-right"},[t.logo?n("v-uni-image",{style:{width:"100%",height:"100%"},attrs:{src:t.logo,mode:"aspectFill"}}):t._e()],1),n("uni-notify",{ref:"notify"})],1)},a=[];n.d(i,"b",function(){return s}),n.d(i,"c",function(){return a}),n.d(i,"a",function(){return o})},c733:function(t,i,n){"use strict";var o=n("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=o(n("622e")),a=(n("2f62"),{data:function(){return{email:"",emailPsw:"",beforePage:"",shopId:"",shopName:"",logo:"",initCompany:"",initShop:"",initCompanyId:"",initShopId:"",companyList:[],shopList:[],companyNameList:[],shopNameList:[]}},onLoad:function(t){this.beforePage=t.beforePage||"",uni.removeStorageSync("token"),this.initLogin(t),this.initShopInfo()},onBackPress:function(t){return"navigateBack"!==t.from&&(t.from,!0)},methods:{initLogin:function(t){this.shopId=t.shopId||"kx~shop~macaron",this.shopId&&this.getShopInfo(this.shopId)},initShopInfo:function(){this.shopName=uni.getStorageSync("shopName")||"",this.logo=uni.getStorageSync("logo")||""},getAllCompany:function(){var t=this;this.$getHttp(this.$API.getAllCompany,{type:"restaurant"}).then(function(i){if(1==i.status){var n=[];t.companyList=i.data,i.data.map(function(t){n.push(t.name)}),t.companyNameList=n,t.initCompanyList()}})},initCompanyList:function(){var t=this,i=uni.getStorageSync("cacheCompany"),n=uni.getStorageSync("cacheShop"),o=[];i?(this.initCompany=i.name,this.initCompanyId=i.id,this.initShop=n.name,this.initShopId=n.id,this.shopId=this.initShopId,this.companyList.map(function(n){n.companyId==i.id&&(t.shopList=n.shopList,n.shopList.map(function(t){o.push(t.shopName)}),t.shopNameList=o,console.log(o))})):(this.initCompany=this.companyNameList[0],this.initCompanyId=this.companyNameList[0].companyId,this.initShop=this.companyList[0].shopList[0]&&this.companyList[0].shopList[0].shopName,this.initShopId=this.companyList[0].shopList[0]&&this.companyList[0].shopList[0].shopId,this.shopId=this.initShopId,this.shopList=this.companyList[0],this.companyList[0].shopList.map(function(t){o.push(t.shopName)}),this.shopNameList=o)},selectCompany:function(t){var i=[];this.shopNameList=[],this.shopList=this.companyList[t.index].shopList,this.companyList[t.index].shopList.map(function(t){i.push(t.shopName)}),this.initCompany=this.companyNameList[t.index],this.initCompanyId=this.companyList[t.index].companyId,this.shopNameList=i,1==i.length?(this.initShop=i[0],this.initShopId=this.companyList[t.index].shopList[0].shopId,this.shopId=this.companyList[t.index].shopList[0].shopId):(this.initShop="",this.initShopId="",this.$refs.shopSelect.init(),this.shopId="")},selectShop:function(t){this.shopId=this.shopList[t.index].shopId,this.initShop=this.shopNameList[t.index],this.initShopId=this.shopList[t.index].shopId},getShopInfo:function(t){var i=this;this.$getHttp(this.$API.getShopInfo+"/".concat(t),{},!1).then(function(t){1==t.status&&(uni.setStorageSync("shopName",t.data.name),uni.setStorageSync("logo",t.data.logo),uni.setStorageSync("shopId",t.data.restaurantId),i.shopName=t.data.name||"",i.logo=t.data.logo||"")})},validateLogin:function(){var t=this.email,i=this.emailPsw;return s.default.validateLoginEmail(t)?!!i||(uni.showToast({icon:"none",title:"Please enter the password"}),!1):(uni.showToast({icon:"none",title:"Please enter the correct email"}),!1)},login:function(){var t=this,i=this.email,n=this.emailPsw,o=this.beforePage,s=this.shopId,a="",e={};this.validateLogin()&&(a=this.$API.loginShop,e={email:i,password:n,shopId:s},this.$postHttp(a,e).then(function(i){if(1==i.status){var n=i.data;"available"!=n.status?uni.showToast({icon:"none",title:"您的账号暂不可登录"}):(uni.showToast({icon:"none",title:"登录成功"}),uni.setStorageSync("token",n.token),uni.setStorageSync("shopInfo",n),o&&"undefined"!=o?uni.redirectTo({url:"/"+o}):uni.redirectTo({url:"/pages/index/index"}))}else t.$notify({type:"warning",title:i.message||"login failed",button:[],callback:function(){console.log("login error")}})}))},setCache:function(){uni.setStorageSync("cacheShop",{name:this.initShop,id:this.initShopId}),uni.setStorageSync("cacheCompany",{name:this.initCompany,id:this.initCompanyId})}}});i.default=a},dda9:function(t,i,n){"use strict";n.r(i);var o=n("c733"),s=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(i,t,function(){return o[t]})}(a);i["default"]=s.a}}]);