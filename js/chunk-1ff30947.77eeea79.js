(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ff30947","chunk-77dbd15b"],{"41d2":function(t,i,a){"use strict";a.r(i);var _=function(){var t=this,i=t.$createElement,a=t._self._c||i;return t.isCompleted?a("div",{staticClass:"complete__order__container"},[a("div",{staticClass:"complete__order__wrapper"},[a("div",{staticClass:"complete__order__title"},[t._v("已完成預訂")]),a("div",{staticClass:"complete__order__text"},[t._v("感謝您的預訂，已將訂房詳情 Mail 給您，若預取消訂房或異動，請再來電，由客服人員為您做異動。")]),a("div",{staticClass:"complete__order__button__wrapper",on:{click:function(i){return i.stopPropagation(),i.preventDefault(),t.moveToFirstPage.apply(null,arguments)}}},[a("div",{staticClass:"complete__order__button"},[t._v("回到首頁")])])])]):t._e()},s=[],e=a("5530"),o=a("2f62"),n={computed:Object(e["a"])({},Object(o["b"])(["isCompleted"])),methods:{moveToFirstPage:function(){this.$store.commit("toggleToUncompleted"),this.$router.push({name:"home"})}}},c=n,r=(a("97fc"),a("2877")),l=Object(r["a"])(c,_,s,!1,null,"75c11ca4",null);i["default"]=l.exports},5451:function(t,i,a){},9771:function(t,i,a){},"97fc":function(t,i,a){"use strict";a("9771")},b4a5:function(t,i,a){"use strict";a("5451")},e116:function(t,i,a){"use strict";a.r(i);var _=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"confirm__page__container"},[a("Navbar"),a("ConfirmDetail")],1)},s=[],e=a("d178"),o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"confirm__container"},[a("div",{staticClass:"confirm__inner__container"},[t.isFinished?a("div",{staticClass:"confirm__inner__wrapper"},[a("div",{staticClass:"confirm__wrapper"},[a("div",{staticClass:"confirm__title"},[t._v("確認訂房資訊")]),a("div",{staticClass:"confirm__items__wrapper"},[a("div",{staticClass:"confirm__item"},[a("div",{staticClass:"confirm__item__subject"},[t._v("房型")]),a("div",{staticClass:"confirm__item__description"},[t._v(t._s(t.bookingData.roomType))])]),a("div",{staticClass:"confirm__item"},[a("div",{staticClass:"confirm__item__subject"},[t._v("預訂人")]),a("div",{staticClass:"confirm__item__description"},[t._v(t._s(t.bookingData.name))])]),a("div",{staticClass:"confirm__item"},[a("div",{staticClass:"confirm__item__subject"},[t._v("聯絡電話")]),a("div",{staticClass:"confirm__item__description"},[t._v(t._s(t.bookingData.phone))])]),a("div",{staticClass:"confirm__item"},[a("div",{staticClass:"confirm__item__subject"},[t._v("E-mail")]),a("div",{staticClass:"confirm__item__description"},[t._v(t._s(t.bookingData.email))])]),a("div",{staticClass:"confirm__item"},[a("div",{staticClass:"confirm__item__subject"},[t._v("預訂日期")]),a("div",{staticClass:"confirm__item__description confirm__item__date"},[t._v(t._s(t.bookingData.checkinDate)+" ~ "+t._s(t.bookingData.checkoutDate))])])])]),a("div",{staticClass:"amount__container"},[a("div",{staticClass:"amount__item amount__item__top"},[a("div",{staticClass:"amount__title"},[t._v("小計")]),a("div",{staticClass:"amount__inner__wrapper"},[a("div",{staticClass:"amount__inner__item"},[a("span",{staticClass:"amount__inner__text"},[t._v("總共")]),a("span",{staticClass:"amount__inner__date"},[t._v(t._s(t.bookingData.countDate)+"夜")])])])]),a("div",{staticClass:"amount__item"},[a("div",{staticClass:"amount__title"},[t._v("消費金額")]),a("div",{staticClass:"amount__price"},[t._v(t._s(t.bookingData.totalPrice))])]),a("div",{staticClass:"amount__buttons__wrapper"},[a("div",{staticClass:"amount__button__left__wrapper",on:{click:function(i){return i.stopPropagation(),i.preventDefault(),t.$router.go(-1)}}},[a("button",{staticClass:"amount__button"},[t._v("修改資料")])]),a("div",{staticClass:"amount__button__right__wrapper",on:{click:function(i){return i.stopPropagation(),i.preventDefault(),t.toggleComplete.apply(null,arguments)}}},[a("label",{staticClass:"amount__button amount__button__text",attrs:{for:"amount__checkbox"}},[t._v("確認預訂")])])])])]):t._e(),a("CompleteOrder"),a("router-link",{staticClass:"confirm__cancel__wrapper",attrs:{to:"/"},on:{click:function(t){t.stopPropagation(),t.preventDefault()}}},[a("div",{staticClass:"confirm__cancel"},[t._v("X")])])],1)])},n=[],c=a("5530"),r=a("41d2"),l=a("2f62"),m={components:{CompleteOrder:r["default"]},computed:Object(c["a"])({},Object(l["b"])(["isFinished","bookingData"])),methods:{toggleComplete:function(){this.$store.commit("toggleToComplete")},toggleToUncomplete:function(){this.$store.commit("toggleToUncompleted")}}},u=m,d=(a("b4a5"),a("2877")),p=Object(d["a"])(u,o,n,!1,null,"d7984478",null),v=p.exports,f={components:{Navbar:e["a"],ConfirmDetail:v}},C=f,b=Object(d["a"])(C,_,s,!1,null,"9bfda08a",null);i["default"]=b.exports}}]);
//# sourceMappingURL=chunk-1ff30947.77eeea79.js.map