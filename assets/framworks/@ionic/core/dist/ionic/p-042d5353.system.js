var __awaiter=this&&this.__awaiter||function(n,r,e,t){function i(n){return n instanceof e?n:new e((function(r){r(n)}))}return new(e||(e=Promise))((function(e,a){function u(n){try{c(t.next(n))}catch(n){a(n)}}function o(n){try{c(t["throw"](n))}catch(n){a(n)}}function c(n){n.done?e(n.value):i(n.value).then(u,o)}c((t=t.apply(n,r||[])).next())}))};var __generator=this&&this.__generator||function(n,r){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,i,a,u;return u={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function o(n){return function(r){return c([n,r])}}function c(o){if(t)throw new TypeError("Generator is already executing.");while(u&&(u=0,o[0]&&(e=0)),e)try{if(t=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:e.label++;return{value:o[1],done:false};case 5:e.label++;i=o[1];o=[0];continue;case 7:o=e.ops.pop();e.trys.pop();continue;default:if(!(a=e.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){e.label=o[1];break}if(o[0]===6&&e.label<a[1]){e.label=a[1];a=o;break}if(a&&e.label<a[2]){e.label=a[2];e.ops.push(o);break}if(a[2])e.ops.pop();e.trys.pop();continue}o=r.call(n,e)}catch(n){o=[6,n];i=0}finally{t=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-f201b53a.system.js","./p-f11a9436.system.js","./p-0ec5b7cf.system.js","./p-297d6806.system.js"],(function(n,r){"use strict";var e,t,i,a,u;return{setters:[function(n){e=n.c},function(n){t=n.w;i=n.B},function(n){a=n.p},function(n){u=n.r}],execute:function(){var o=this;var c=n("L","ionViewWillEnter");var f=n("a","ionViewDidEnter");var s=n("b","ionViewWillLeave");var v=n("c","ionViewDidLeave");var l=n("d","ionViewWillUnload");var d=function(n){n.tabIndex=-1;n.focus()};var h=function(n){return n.offsetParent!==null};var w=function(){var n=function(n){var r=e.get("focusManagerPriority",false);if(r){var t=document.activeElement;if(t!==null&&(n===null||n===void 0?void 0:n.contains(t))){t.setAttribute(_,"true")}}};var r=function(n){var r=e.get("focusManagerPriority",false);if(Array.isArray(r)&&!n.contains(document.activeElement)){var t=n.querySelector("[".concat(_,"]"));if(t&&h(t)){d(t);return}for(var i=0,u=r;i<u.length;i++){var o=u[i];switch(o){case"content":var c=n.querySelector('main, [role="main"]');if(c&&h(c)){d(c);return}break;case"heading":var f=n.querySelector('h1, [role="heading"][aria-level="1"]');if(f&&h(f)){d(f);return}break;case"banner":var s=n.querySelector('header, [role="banner"]');if(s&&h(s)){d(s);return}break;default:a("Unrecognized focus manager priority value ".concat(o));break}}d(n)}};return{saveViewFocus:n,setViewFocus:r}};var _="ion-last-focus";var b=function(){return r.import("./p-24ae7b33.system.js")};var g=function(){return r.import("./p-a587b2ae.system.js")};var m=w();var p=n("t",(function(n){return new Promise((function(r,e){t((function(){y(n);k(n).then((function(e){if(e.animation){e.animation.destroy()}P(n);r(e)}),(function(r){P(n);e(r)}))}))}))}));var y=function(n){var r=n.enteringEl;var e=n.leavingEl;m.saveViewFocus(e);U(r,e,n.direction);if(n.showGoBack){r.classList.add("can-go-back")}else{r.classList.remove("can-go-back")}F(r,false);r.style.setProperty("pointer-events","none");if(e){F(e,false);e.style.setProperty("pointer-events","none")}};var k=function(n){return __awaiter(o,void 0,void 0,(function(){var r,e;return __generator(this,(function(t){switch(t.label){case 0:return[4,V(n)];case 1:r=t.sent();e=r&&i.isBrowser?j(r,n):E(n);return[2,e]}}))}))};var P=function(n){var r=n.enteringEl;var e=n.leavingEl;r.classList.remove("ion-page-invisible");r.style.removeProperty("pointer-events");if(e!==undefined){e.classList.remove("ion-page-invisible");e.style.removeProperty("pointer-events")}m.setViewFocus(r)};var V=function(n){return __awaiter(o,void 0,void 0,(function(){var r,e;return __generator(this,(function(t){switch(t.label){case 0:if(!n.leavingEl||!n.animated||n.duration===0){return[2,undefined]}if(n.animationBuilder){return[2,n.animationBuilder]}if(!(n.mode==="ios"))return[3,2];return[4,b()];case 1:e=t.sent().iosTransitionAnimation;return[3,4];case 2:return[4,g()];case 3:e=t.sent().mdTransitionAnimation;t.label=4;case 4:r=e;return[2,r]}}))}))};var j=function(n,r){return __awaiter(o,void 0,void 0,(function(){var e,t;return __generator(this,(function(i){switch(i.label){case 0:return[4,x(r,true)];case 1:i.sent();e=n(r.baseEl,r);M(r.enteringEl,r.leavingEl);return[4,L(e,r)];case 2:t=i.sent();if(r.progressCallback){r.progressCallback(undefined)}if(t){S(r.enteringEl,r.leavingEl)}return[2,{hasCompleted:t,animation:e}]}}))}))};var E=function(n){return __awaiter(o,void 0,void 0,(function(){var r,t,i;return __generator(this,(function(a){switch(a.label){case 0:r=n.enteringEl;t=n.leavingEl;i=e.get("focusManagerPriority",false);return[4,x(n,i)];case 1:a.sent();M(r,t);S(r,t);return[2,{hasCompleted:true}]}}))}))};var x=function(n,r){return __awaiter(o,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:e=n.deepWait!==undefined?n.deepWait:r;if(!e)return[3,2];return[4,Promise.all([D(n.enteringEl),D(n.leavingEl)])];case 1:t.sent();t.label=2;case 2:return[4,C(n.viewIsReady,n.enteringEl)];case 3:t.sent();return[2]}}))}))};var C=function(n,r){return __awaiter(o,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:if(!n)return[3,2];return[4,n(r)];case 1:e.sent();e.label=2;case 2:return[2]}}))}))};var L=function(n,r){var e=r.progressCallback;var t=new Promise((function(r){n.onFinish((function(n){return r(n===1)}))}));if(e){n.progressStart(true);e(n)}else{n.play()}return t};var M=function(n,r){W(r,s);W(n,c)};var S=function(n,r){W(n,f);W(r,v)};var W=n("l",(function(n,r){if(n){var e=new CustomEvent(r,{bubbles:false,cancelable:false});n.dispatchEvent(e)}}));var A=n("w",(function(){return new Promise((function(n){return u((function(){return u((function(){return n()}))}))}))}));var D=n("e",(function(n){return __awaiter(o,void 0,void 0,(function(){var r,e,t;return __generator(this,(function(i){switch(i.label){case 0:r=n;if(!r)return[3,6];if(!(r.componentOnReady!=null))return[3,2];return[4,r.componentOnReady()];case 1:e=i.sent();if(e!=null){return[2]}return[3,4];case 2:if(!(r.__registerHost!=null))return[3,4];t=new Promise((function(n){return u(n)}));return[4,t];case 3:i.sent();return[2];case 4:return[4,Promise.all(Array.from(r.children).map(D))];case 5:i.sent();i.label=6;case 6:return[2]}}))}))}));var F=n("s",(function(n,r){if(r){n.setAttribute("aria-hidden","true");n.classList.add("ion-page-hidden")}else{n.hidden=false;n.removeAttribute("aria-hidden");n.classList.remove("ion-page-hidden")}}));var U=function(n,r,e){if(n!==undefined){n.style.zIndex=e==="back"?"99":"101"}if(r!==undefined){r.style.zIndex="100"}};var z=n("g",(function(n){if(n.classList.contains("ion-page")){return n}var r=n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");if(r){return r}return n}))}}}));