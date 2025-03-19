import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,c as createEvent,h,e as Host,f as getElement}from"./index-527b9e34.js";import{E as ENABLE_HTML_CONTENT_DEFAULT,a as sanitizeDOMString}from"./config-49c88215.js";import{g as getElementRoot,r as raf}from"./helpers-e48b0397.js";import{c as createLockController}from"./lock-controller-316928be.js";import{p as printIonWarning}from"./index-738d7504.js";import{O as OVERLAY_GESTURE_PRIORITY,d as createDelegateController,e as createTriggerController,i as isCancel,j as prepareOverlay,k as setOverlayId,f as present,g as dismiss,h as eventMethod,s as safeCall,G as GESTURE}from"./overlays-7579a420.js";import{c as createColorClasses,g as getClassMap}from"./theme-01f3f29c.js";import{c as config,b as getIonMode}from"./ionic-global-ca86cf32.js";import{c as createAnimation}from"./animation-eab5a4ca.js";import{w as win}from"./index-a5d50daf.js";import{createGesture}from"./index-39782642.js";import"./hardware-back-button-864101a3.js";import"./framework-delegate-c7d92b77.js";import"./gesture-controller-314a54f6.js";function getAnimationPosition(t,e,n,a){var i;if(n==="md"){i=t==="top"?8:-8}else{i=t==="top"?10:-10}if(e&&win){warnIfAnchorIsHidden(e,a);var o=e.getBoundingClientRect();if(t==="top"){i+=o.bottom}else if(t==="bottom"){i-=win.innerHeight-o.top}return{top:"".concat(i,"px"),bottom:"".concat(i,"px")}}else{return{top:"calc(".concat(i,"px + var(--ion-safe-area-top, 0px))"),bottom:"calc(".concat(i,"px - var(--ion-safe-area-bottom, 0px))")}}}function warnIfAnchorIsHidden(t,e){if(t.offsetParent===null){printIonWarning("The positionAnchor element for ion-toast was found in the DOM, but appears to be hidden. This may lead to unexpected positioning of the toast.",e)}}var getOffsetForMiddlePosition=function(t,e){return Math.floor(t/2-e/2)};var iosEnterAnimation=function(t,e){var n=createAnimation();var a=createAnimation();var i=e.position,o=e.top,r=e.bottom;var s=getElementRoot(t);var d=s.querySelector(".toast-wrapper");a.addElement(d);switch(i){case"top":a.fromTo("transform","translateY(-100%)","translateY(".concat(o,")"));break;case"middle":var l=getOffsetForMiddlePosition(t.clientHeight,d.clientHeight);d.style.top="".concat(l,"px");a.fromTo("opacity",.01,1);break;default:a.fromTo("transform","translateY(100%)","translateY(".concat(r,")"));break}return n.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(a)};var iosLeaveAnimation=function(t,e){var n=createAnimation();var a=createAnimation();var i=e.position,o=e.top,r=e.bottom;var s=getElementRoot(t);var d=s.querySelector(".toast-wrapper");a.addElement(d);switch(i){case"top":a.fromTo("transform","translateY(".concat(o,")"),"translateY(-100%)");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("transform","translateY(".concat(r,")"),"translateY(100%)");break}return n.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(a)};var mdEnterAnimation=function(t,e){var n=createAnimation();var a=createAnimation();var i=e.position,o=e.top,r=e.bottom;var s=getElementRoot(t);var d=s.querySelector(".toast-wrapper");a.addElement(d);switch(i){case"top":d.style.setProperty("transform","translateY(".concat(o,")"));a.fromTo("opacity",.01,1);break;case"middle":var l=getOffsetForMiddlePosition(t.clientHeight,d.clientHeight);d.style.top="".concat(l,"px");a.fromTo("opacity",.01,1);break;default:d.style.setProperty("transform","translateY(".concat(r,")"));a.fromTo("opacity",.01,1);break}return n.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(a)};var mdLeaveAnimation=function(t){var e=createAnimation();var n=createAnimation();var a=getElementRoot(t);var i=a.querySelector(".toast-wrapper");n.addElement(i).fromTo("opacity",.99,0);return e.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)};var createSwipeToDismissGesture=function(t,e,n){var a=getElementRoot(t).querySelector(".toast-wrapper");var i=t.clientHeight;var o=a.getBoundingClientRect();var r=0;var s=.5;var d=t.position==="middle"?.5:0;var l=t.position==="top"?-1:1;var c=getOffsetForMiddlePosition(i,o.height);var u=[{offset:0,transform:"translateY(-".concat(c+o.height,"px)")},{offset:.5,transform:"translateY(0px)"},{offset:1,transform:"translateY(".concat(c+o.height,"px)")}];var h=createAnimation("toast-swipe-to-dismiss-animation").addElement(a).duration(100);switch(t.position){case"middle":r=i+o.height;h.keyframes(u);h.progressStart(true,.5);break;case"top":r=o.bottom;h.keyframes([{offset:0,transform:"translateY(".concat(e.top,")")},{offset:1,transform:"translateY(-100%)"}]);h.progressStart(true,0);break;case"bottom":default:r=i-o.top;h.keyframes([{offset:0,transform:"translateY(".concat(e.bottom,")")},{offset:1,transform:"translateY(100%)"}]);h.progressStart(true,0);break}var p=function(t){return t*l/r};var f=function(t){var e=d+p(t.deltaY);h.progressStep(e)};var m=function(e){var i=e.velocityY;var o=(e.deltaY+i*1e3)/r*l;b.enable(false);var d=true;var f=1;var m=0;var v=0;if(t.position==="middle"){d=o>=s/2||o<=-s/2;f=1;m=0;var g=a.getBoundingClientRect();var x=g.top-c;var w="".concat(x,"px");var y=e.deltaY<=0?-1:1;var k=(c+g.height)*y;var E=d?"".concat(k,"px"):"0px";var T=[{offset:0,transform:"translateY(".concat(w,")")},{offset:1,transform:"translateY(".concat(E,")")}];h.keyframes(T);v=k-x}else{d=o>=s;f=d?1:0;m=p(e.deltaY);var I=d?1-m:m;v=I*r}var A=Math.min(Math.abs(v)/Math.abs(i),200);h.onFinish((function(){if(d){n();h.destroy()}else{if(t.position==="middle"){h.keyframes(u).progressStart(true,.5)}else{h.progressStart(true,0)}b.enable(true)}}),{oneTimeCallback:true}).progressEnd(f,m,A)};var b=createGesture({el:a,gestureName:"toast-swipe-to-dismiss",gesturePriority:OVERLAY_GESTURE_PRIORITY,direction:"y",onMove:f,onEnd:m});return b};var toastIosCss=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);pointer-events:auto}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-radius:14px;--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--max-width:700px;--max-height:478px;--start:10px;--end:10px;font-size:clamp(14px, 0.875rem, 43.4px)}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-middle{opacity:0.01}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;min-height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:clamp(17px, 1.0625rem, 21.998px);font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}";var IonToastIosStyle0=toastIosCss;var toastMdCss=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);pointer-events:auto}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, var(--ion-background-color-step-800, #333333));--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-50, var(--ion-text-color-step-950, #f2f2f2));--max-width:700px;--start:8px;--end:8px;font-size:0.875rem}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:1.25rem}.toast-message{line-height:1.25rem}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:0.875rem;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, var(--ion-text-color-step-900, #e6e6e6))}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}";var IonToastMdStyle0=toastMdCss;var Toast=function(){function t(t){var e=this;registerInstance(this,t);this.didPresent=createEvent(this,"ionToastDidPresent",7);this.willPresent=createEvent(this,"ionToastWillPresent",7);this.willDismiss=createEvent(this,"ionToastWillDismiss",7);this.didDismiss=createEvent(this,"ionToastDidDismiss",7);this.didPresentShorthand=createEvent(this,"didPresent",7);this.willPresentShorthand=createEvent(this,"willPresent",7);this.willDismissShorthand=createEvent(this,"willDismiss",7);this.didDismissShorthand=createEvent(this,"didDismiss",7);this.delegateController=createDelegateController(this);this.lockController=createLockController();this.triggerController=createTriggerController();this.customHTMLEnabled=config.get("innerHTMLTemplatesEnabled",ENABLE_HTML_CONTENT_DEFAULT);this.presented=false;this.dispatchCancelHandler=function(t){var n=t.detail.role;if(isCancel(n)){var a=e.getButtons().find((function(t){return t.role==="cancel"}));e.callButtonHandler(a)}};this.createSwipeGesture=function(t){var n=e.gesture=createSwipeToDismissGesture(e.el,t,(function(){e.dismiss(undefined,GESTURE)}));n.enable(true)};this.destroySwipeGesture=function(){var t=e.gesture;if(t===undefined){return}t.destroy();e.gesture=undefined};this.prefersSwipeGesture=function(){var t=e.swipeGesture;return t==="vertical"};this.revealContentToScreenReader=false;this.overlayIndex=undefined;this.delegate=undefined;this.hasController=false;this.color=undefined;this.enterAnimation=undefined;this.leaveAnimation=undefined;this.cssClass=undefined;this.duration=config.getNumber("toastDuration",0);this.header=undefined;this.layout="baseline";this.message=undefined;this.keyboardClose=false;this.position="bottom";this.positionAnchor=undefined;this.buttons=undefined;this.translucent=false;this.animated=true;this.icon=undefined;this.htmlAttributes=undefined;this.swipeGesture=undefined;this.isOpen=false;this.trigger=undefined}t.prototype.swipeGestureChanged=function(){this.destroySwipeGesture();if(this.presented&&this.prefersSwipeGesture()){this.createSwipeGesture(this.lastPresentedPosition)}};t.prototype.onIsOpenChange=function(t,e){if(t===true&&e===false){this.present()}else if(t===false&&e===true){this.dismiss()}};t.prototype.triggerChanged=function(){var t=this,e=t.trigger,n=t.el,a=t.triggerController;if(e){a.addClickListener(n,e)}};t.prototype.connectedCallback=function(){prepareOverlay(this.el);this.triggerChanged()};t.prototype.disconnectedCallback=function(){this.triggerController.removeClickListener()};t.prototype.componentWillLoad=function(){var t;if(!((t=this.htmlAttributes)===null||t===void 0?void 0:t.id)){setOverlayId(this.el)}};t.prototype.componentDidLoad=function(){var t=this;if(this.isOpen===true){raf((function(){return t.present()}))}this.triggerChanged()};t.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n,a,i,o;var r=this;return __generator(this,(function(s){switch(s.label){case 0:return[4,this.lockController.lock()];case 1:t=s.sent();return[4,this.delegateController.attachViewToDom()];case 2:s.sent();e=this,n=e.el,a=e.position;i=this.getAnchorElement();o=getAnimationPosition(a,i,getIonMode(this),n);this.lastPresentedPosition=o;return[4,present(this,"toastEnter",iosEnterAnimation,mdEnterAnimation,{position:a,top:o.top,bottom:o.bottom})];case 3:s.sent();this.revealContentToScreenReader=true;if(this.duration>0){this.durationTimeout=setTimeout((function(){return r.dismiss(undefined,"timeout")}),this.duration)}if(this.prefersSwipeGesture()){this.createSwipeGesture(o)}t();return[2]}}))}))};t.prototype.dismiss=function(t,e){return __awaiter(this,void 0,void 0,(function(){var n,a,i,o,r,s,d,l;return __generator(this,(function(c){switch(c.label){case 0:return[4,this.lockController.lock()];case 1:i=c.sent();o=this,r=o.durationTimeout,s=o.position,d=o.lastPresentedPosition;if(r){clearTimeout(r)}return[4,dismiss(this,t,e,"toastLeave",iosLeaveAnimation,mdLeaveAnimation,{position:s,top:(n=d===null||d===void 0?void 0:d.top)!==null&&n!==void 0?n:"",bottom:(a=d===null||d===void 0?void 0:d.bottom)!==null&&a!==void 0?a:""})];case 2:l=c.sent();if(l){this.delegateController.removeViewFromDom();this.revealContentToScreenReader=false}this.lastPresentedPosition=undefined;this.destroySwipeGesture();i();return[2,l]}}))}))};t.prototype.onDidDismiss=function(){return eventMethod(this.el,"ionToastDidDismiss")};t.prototype.onWillDismiss=function(){return eventMethod(this.el,"ionToastWillDismiss")};t.prototype.getButtons=function(){var t=this.buttons?this.buttons.map((function(t){return typeof t==="string"?{text:t}:t})):[];return t};t.prototype.getAnchorElement=function(){var t=this,e=t.position,n=t.positionAnchor,a=t.el;if(n===undefined){return}if(e==="middle"&&n!==undefined){printIonWarning('The positionAnchor property is ignored when using position="middle".',this.el);return undefined}if(typeof n==="string"){var i=document.getElementById(n);if(i===null){printIonWarning('An anchor element with an ID of "'.concat(n,'" was not found in the DOM.'),a);return undefined}return i}if(n instanceof HTMLElement){return n}printIonWarning("Invalid positionAnchor value:",n,a);return undefined};t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n;return __generator(this,(function(a){switch(a.label){case 0:e=t.role;if(isCancel(e)){return[2,this.dismiss(undefined,e)]}return[4,this.callButtonHandler(t)];case 1:n=a.sent();if(n){return[2,this.dismiss(undefined,e)]}return[2,Promise.resolve()]}}))}))};t.prototype.callButtonHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n;return __generator(this,(function(a){switch(a.label){case 0:if(!(t===null||t===void 0?void 0:t.handler))return[3,4];a.label=1;case 1:a.trys.push([1,3,,4]);return[4,safeCall(t.handler)];case 2:e=a.sent();if(e===false){return[2,false]}return[3,4];case 3:n=a.sent();console.error(n);return[3,4];case 4:return[2,true]}}))}))};t.prototype.renderButtons=function(t,e){var n;var a=this;if(t.length===0){return}var i=getIonMode(this);var o=(n={"toast-button-group":true},n["toast-button-group-".concat(e)]=true,n);return h("div",{class:o},t.map((function(t){return h("button",Object.assign({},t.htmlAttributes,{type:"button",class:buttonClass(t),tabIndex:0,onClick:function(){return a.buttonClick(t)},part:buttonPart(t)}),h("div",{class:"toast-button-inner"},t.icon&&h("ion-icon",{"aria-hidden":"true",icon:t.icon,slot:t.text===undefined?"icon-only":undefined,class:"toast-button-icon"}),t.text),i==="md"&&h("ion-ripple-effect",{type:t.icon!==undefined&&t.text===undefined?"unbounded":"bounded"}))})))};t.prototype.renderToastMessage=function(t,e){if(e===void 0){e=null}var n=this,a=n.customHTMLEnabled,i=n.message;if(a){return h("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message",innerHTML:sanitizeDOMString(i)})}return h("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message"},i)};t.prototype.renderHeader=function(t,e){if(e===void 0){e=null}return h("div",{key:t,class:"toast-header","aria-hidden":e,part:"header"},this.header)};t.prototype.render=function(){var t,e;var n=this,a=n.layout,i=n.el,o=n.revealContentToScreenReader,r=n.header,s=n.message;var d=this.getButtons();var l=d.filter((function(t){return t.side==="start"}));var c=d.filter((function(t){return t.side!=="start"}));var u=getIonMode(this);var p=(t={"toast-wrapper":true},t["toast-".concat(this.position)]=true,t["toast-layout-".concat(a)]=true,t);if(a==="stacked"&&l.length>0&&c.length>0){printIonWarning("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.",i)}return h(Host,Object.assign({key:"34036afc0701173d51c9c11ea4a2e1d65685ba41",tabindex:"-1"},this.htmlAttributes,{style:{zIndex:"".concat(6e4+this.overlayIndex)},class:createColorClasses(this.color,Object.assign(Object.assign((e={},e[u]=true,e),getClassMap(this.cssClass)),{"overlay-hidden":true,"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),h("div",{key:"d927e43957f47888ce4e64f1e99c935d55757af7",class:p},h("div",{key:"ca43bc42478181acdf8cdea6601a85fa95d12216",class:"toast-container",part:"container"},this.renderButtons(l,"start"),this.icon!==undefined&&h("ion-icon",{key:"fdd6fb8f6e947ed002bd2e63fdc8ec7e764f4a7d",class:"toast-icon",part:"icon",icon:this.icon,lazy:false,"aria-hidden":"true"}),h("div",{key:"37c16c81ee3e4304379dfbcabdffe73db73e4653",class:"toast-content",role:"status","aria-atomic":"true","aria-live":"polite"},!o&&r!==undefined&&this.renderHeader("oldHeader","true"),!o&&s!==undefined&&this.renderToastMessage("oldMessage","true"),o&&r!==undefined&&this.renderHeader("header"),o&&s!==undefined&&this.renderToastMessage("header")),this.renderButtons(c,"end"))))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}},enumerable:false,configurable:true});return t}();var buttonClass=function(t){var e;return e={"toast-button":true,"toast-button-icon-only":t.icon!==undefined&&t.text===undefined},e["toast-button-".concat(t.role)]=t.role!==undefined,e["ion-focusable"]=true,e["ion-activatable"]=true,e};var buttonPart=function(t){return isCancel(t.role)?"button cancel":"button"};Toast.style={ios:IonToastIosStyle0,md:IonToastMdStyle0};export{Toast as ion_toast};