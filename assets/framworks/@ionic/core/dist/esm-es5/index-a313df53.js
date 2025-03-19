import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{c as config}from"./ionic-global-ca86cf32.js";import{w as writeTask,B as Build}from"./index-527b9e34.js";import{p as printIonWarning}from"./index-738d7504.js";import{r as raf}from"./helpers-e48b0397.js";var LIFECYCLE_WILL_ENTER="ionViewWillEnter";var LIFECYCLE_DID_ENTER="ionViewDidEnter";var LIFECYCLE_WILL_LEAVE="ionViewWillLeave";var LIFECYCLE_DID_LEAVE="ionViewDidLeave";var LIFECYCLE_WILL_UNLOAD="ionViewWillUnload";var moveFocus=function(n){n.tabIndex=-1;n.focus()};var isVisible=function(n){return n.offsetParent!==null};var createFocusController=function(){var n=function(n){var e=config.get("focusManagerPriority",false);if(e){var r=document.activeElement;if(r!==null&&(n===null||n===void 0?void 0:n.contains(r))){r.setAttribute(LAST_FOCUS,"true")}}};var e=function(n){var e=config.get("focusManagerPriority",false);if(Array.isArray(e)&&!n.contains(document.activeElement)){var r=n.querySelector("[".concat(LAST_FOCUS,"]"));if(r&&isVisible(r)){moveFocus(r);return}for(var i=0,t=e;i<t.length;i++){var a=t[i];switch(a){case"content":var o=n.querySelector('main, [role="main"]');if(o&&isVisible(o)){moveFocus(o);return}break;case"heading":var s=n.querySelector('h1, [role="heading"][aria-level="1"]');if(s&&isVisible(s)){moveFocus(s);return}break;case"banner":var u=n.querySelector('header, [role="banner"]');if(u&&isVisible(u)){moveFocus(u);return}break;default:printIonWarning("Unrecognized focus manager priority value ".concat(a));break}}moveFocus(n)}};return{saveViewFocus:n,setViewFocus:e}};var LAST_FOCUS="ion-last-focus";var iosTransitionAnimation=function(){return import("./ios.transition-5fe4d6c8.js")};var mdTransitionAnimation=function(){return import("./md.transition-3d0d3730.js")};var focusController=createFocusController();var transition=function(n){return new Promise((function(e,r){writeTask((function(){beforeTransition(n);runTransition(n).then((function(r){if(r.animation){r.animation.destroy()}afterTransition(n);e(r)}),(function(e){afterTransition(n);r(e)}))}))}))};var beforeTransition=function(n){var e=n.enteringEl;var r=n.leavingEl;focusController.saveViewFocus(r);setZIndex(e,r,n.direction);if(n.showGoBack){e.classList.add("can-go-back")}else{e.classList.remove("can-go-back")}setPageHidden(e,false);e.style.setProperty("pointer-events","none");if(r){setPageHidden(r,false);r.style.setProperty("pointer-events","none")}};var runTransition=function(n){return __awaiter(void 0,void 0,void 0,(function(){var e,r;return __generator(this,(function(i){switch(i.label){case 0:return[4,getAnimationBuilder(n)];case 1:e=i.sent();r=e&&Build.isBrowser?animation(e,n):noAnimation(n);return[2,r]}}))}))};var afterTransition=function(n){var e=n.enteringEl;var r=n.leavingEl;e.classList.remove("ion-page-invisible");e.style.removeProperty("pointer-events");if(r!==undefined){r.classList.remove("ion-page-invisible");r.style.removeProperty("pointer-events")}focusController.setViewFocus(e)};var getAnimationBuilder=function(n){return __awaiter(void 0,void 0,void 0,(function(){var e,r;return __generator(this,(function(i){switch(i.label){case 0:if(!n.leavingEl||!n.animated||n.duration===0){return[2,undefined]}if(n.animationBuilder){return[2,n.animationBuilder]}if(!(n.mode==="ios"))return[3,2];return[4,iosTransitionAnimation()];case 1:r=i.sent().iosTransitionAnimation;return[3,4];case 2:return[4,mdTransitionAnimation()];case 3:r=i.sent().mdTransitionAnimation;i.label=4;case 4:e=r;return[2,e]}}))}))};var animation=function(n,e){return __awaiter(void 0,void 0,void 0,(function(){var r,i;return __generator(this,(function(t){switch(t.label){case 0:return[4,waitForReady(e,true)];case 1:t.sent();r=n(e.baseEl,e);fireWillEvents(e.enteringEl,e.leavingEl);return[4,playTransition(r,e)];case 2:i=t.sent();if(e.progressCallback){e.progressCallback(undefined)}if(i){fireDidEvents(e.enteringEl,e.leavingEl)}return[2,{hasCompleted:i,animation:r}]}}))}))};var noAnimation=function(n){return __awaiter(void 0,void 0,void 0,(function(){var e,r,i;return __generator(this,(function(t){switch(t.label){case 0:e=n.enteringEl;r=n.leavingEl;i=config.get("focusManagerPriority",false);return[4,waitForReady(n,i)];case 1:t.sent();fireWillEvents(e,r);fireDidEvents(e,r);return[2,{hasCompleted:true}]}}))}))};var waitForReady=function(n,e){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(i){switch(i.label){case 0:r=n.deepWait!==undefined?n.deepWait:e;if(!r)return[3,2];return[4,Promise.all([deepReady(n.enteringEl),deepReady(n.leavingEl)])];case 1:i.sent();i.label=2;case 2:return[4,notifyViewReady(n.viewIsReady,n.enteringEl)];case 3:i.sent();return[2]}}))}))};var notifyViewReady=function(n,e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:if(!n)return[3,2];return[4,n(e)];case 1:r.sent();r.label=2;case 2:return[2]}}))}))};var playTransition=function(n,e){var r=e.progressCallback;var i=new Promise((function(e){n.onFinish((function(n){return e(n===1)}))}));if(r){n.progressStart(true);r(n)}else{n.play()}return i};var fireWillEvents=function(n,e){lifecycle(e,LIFECYCLE_WILL_LEAVE);lifecycle(n,LIFECYCLE_WILL_ENTER)};var fireDidEvents=function(n,e){lifecycle(n,LIFECYCLE_DID_ENTER);lifecycle(e,LIFECYCLE_DID_LEAVE)};var lifecycle=function(n,e){if(n){var r=new CustomEvent(e,{bubbles:false,cancelable:false});n.dispatchEvent(r)}};var waitForMount=function(){return new Promise((function(n){return raf((function(){return raf((function(){return n()}))}))}))};var deepReady=function(n){return __awaiter(void 0,void 0,void 0,(function(){var e,r,i;return __generator(this,(function(t){switch(t.label){case 0:e=n;if(!e)return[3,6];if(!(e.componentOnReady!=null))return[3,2];return[4,e.componentOnReady()];case 1:r=t.sent();if(r!=null){return[2]}return[3,4];case 2:if(!(e.__registerHost!=null))return[3,4];i=new Promise((function(n){return raf(n)}));return[4,i];case 3:t.sent();return[2];case 4:return[4,Promise.all(Array.from(e.children).map(deepReady))];case 5:t.sent();t.label=6;case 6:return[2]}}))}))};var setPageHidden=function(n,e){if(e){n.setAttribute("aria-hidden","true");n.classList.add("ion-page-hidden")}else{n.hidden=false;n.removeAttribute("aria-hidden");n.classList.remove("ion-page-hidden")}};var setZIndex=function(n,e,r){if(n!==undefined){n.style.zIndex=r==="back"?"99":"101"}if(e!==undefined){e.style.zIndex="100"}};var getIonPageElement=function(n){if(n.classList.contains("ion-page")){return n}var e=n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");if(e){return e}return n};export{LIFECYCLE_WILL_ENTER as L,LIFECYCLE_DID_ENTER as a,LIFECYCLE_WILL_LEAVE as b,LIFECYCLE_DID_LEAVE as c,LIFECYCLE_WILL_UNLOAD as d,deepReady as e,getIonPageElement as g,lifecycle as l,setPageHidden as s,transition as t,waitForMount as w};