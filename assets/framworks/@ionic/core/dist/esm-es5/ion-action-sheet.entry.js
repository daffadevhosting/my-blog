import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,c as createEvent,d as readTask,h,e as Host,f as getElement}from"./index-527b9e34.js";import{c as createButtonActiveGesture}from"./button-active-90f1dbc4.js";import{r as raf}from"./helpers-e48b0397.js";import{c as createLockController}from"./lock-controller-316928be.js";import{d as createDelegateController,e as createTriggerController,B as BACKDROP,i as isCancel,f as present,g as dismiss,h as eventMethod,s as safeCall,j as prepareOverlay,k as setOverlayId}from"./overlays-7579a420.js";import{g as getClassMap}from"./theme-01f3f29c.js";import{b as getIonMode}from"./ionic-global-ca86cf32.js";import{c as createAnimation}from"./animation-eab5a4ca.js";import"./haptic-ac164e4c.js";import"./capacitor-59395cbd.js";import"./index-a5d50daf.js";import"./index-39782642.js";import"./gesture-controller-314a54f6.js";import"./hardware-back-button-864101a3.js";import"./framework-delegate-c7d92b77.js";import"./index-738d7504.js";var iosEnterAnimation=function(t){var e=createAnimation();var o=createAnimation();var n=createAnimation();o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)");return e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([o,n])};var iosLeaveAnimation=function(t){var e=createAnimation();var o=createAnimation();var n=createAnimation();o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)");return e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([o,n])};var mdEnterAnimation=function(t){var e=createAnimation();var o=createAnimation();var n=createAnimation();o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)");return e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([o,n])};var mdLeaveAnimation=function(t){var e=createAnimation();var o=createAnimation();var n=createAnimation();o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)");return e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([o,n])};var actionSheetIosCss='.sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios:disabled{color:var(--button-color-disabled);opacity:0.4}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:calc(100vh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)));max-height:calc(100dvh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)))}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}@media (any-pointer: coarse){.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:not(:disabled):hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:not(:disabled):hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color-step-150, var(--ion-background-color, #fff)));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #0054e9);--button-color-disabled:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--color:var(--ion-color-step-400, var(--ion-text-color-step-600, #999999));text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);padding-bottom:var(--ion-safe-area-bottom, 0);-webkit-box-sizing:content-box;box-sizing:content-box}.action-sheet-container.sc-ion-action-sheet-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-size:max(13px, 0.8125rem);font-weight:400;text-align:center}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:max(13px, 0.8125rem);font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px;padding-top:14px;padding-bottom:14px;min-height:56px;font-size:max(20px, 1.25rem);contain:content}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:max(28px, 1.75rem);pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #c5000f)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #c5000f)}}';var IonActionSheetIosStyle0=actionSheetIosCss;var actionSheetMdCss='.sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md:disabled{color:var(--button-color-disabled);opacity:0.4}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:calc(100vh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)));max-height:calc(100dvh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)))}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}@media (any-pointer: coarse){.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:not(:disabled):hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:not(:disabled):hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--button-color-disabled:var(--button-color);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-wrapper.sc-ion-action-sheet-md{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:0}.action-sheet-title.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:1rem;text-align:start}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:0.875rem}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:var(--ion-safe-area-bottom)}.action-sheet-button.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:12px;position:relative;min-height:52px;font-size:1rem;text-align:start;contain:content;overflow:hidden}.action-sheet-icon.sc-ion-action-sheet-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:1.5rem}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}';var IonActionSheetMdStyle0=actionSheetMdCss;var ActionSheet=function(){function t(t){var e=this;registerInstance(this,t);this.didPresent=createEvent(this,"ionActionSheetDidPresent",7);this.willPresent=createEvent(this,"ionActionSheetWillPresent",7);this.willDismiss=createEvent(this,"ionActionSheetWillDismiss",7);this.didDismiss=createEvent(this,"ionActionSheetDidDismiss",7);this.didPresentShorthand=createEvent(this,"didPresent",7);this.willPresentShorthand=createEvent(this,"willPresent",7);this.willDismissShorthand=createEvent(this,"willDismiss",7);this.didDismissShorthand=createEvent(this,"didDismiss",7);this.delegateController=createDelegateController(this);this.lockController=createLockController();this.triggerController=createTriggerController();this.presented=false;this.onBackdropTap=function(){e.dismiss(undefined,BACKDROP)};this.dispatchCancelHandler=function(t){var o=t.detail.role;if(isCancel(o)){var n=e.getButtons().find((function(t){return t.role==="cancel"}));e.callButtonHandler(n)}};this.overlayIndex=undefined;this.delegate=undefined;this.hasController=false;this.keyboardClose=true;this.enterAnimation=undefined;this.leaveAnimation=undefined;this.buttons=[];this.cssClass=undefined;this.backdropDismiss=true;this.header=undefined;this.subHeader=undefined;this.translucent=false;this.animated=true;this.htmlAttributes=undefined;this.isOpen=false;this.trigger=undefined}t.prototype.onIsOpenChange=function(t,e){if(t===true&&e===false){this.present()}else if(t===false&&e===true){this.dismiss()}};t.prototype.triggerChanged=function(){var t=this,e=t.trigger,o=t.el,n=t.triggerController;if(e){n.addClickListener(o,e)}};t.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:return[4,this.lockController.lock()];case 1:t=e.sent();return[4,this.delegateController.attachViewToDom()];case 2:e.sent();return[4,present(this,"actionSheetEnter",iosEnterAnimation,mdEnterAnimation)];case 3:e.sent();t();return[2]}}))}))};t.prototype.dismiss=function(t,e){return __awaiter(this,void 0,void 0,(function(){var o,n;return __generator(this,(function(i){switch(i.label){case 0:return[4,this.lockController.lock()];case 1:o=i.sent();return[4,dismiss(this,t,e,"actionSheetLeave",iosLeaveAnimation,mdLeaveAnimation)];case 2:n=i.sent();if(n){this.delegateController.removeViewFromDom()}o();return[2,n]}}))}))};t.prototype.onDidDismiss=function(){return eventMethod(this.el,"ionActionSheetDidDismiss")};t.prototype.onWillDismiss=function(){return eventMethod(this.el,"ionActionSheetWillDismiss")};t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,(function(){var e,o;return __generator(this,(function(n){switch(n.label){case 0:e=t.role;if(isCancel(e)){return[2,this.dismiss(t.data,e)]}return[4,this.callButtonHandler(t)];case 1:o=n.sent();if(o){return[2,this.dismiss(t.data,t.role)]}return[2,Promise.resolve()]}}))}))};t.prototype.callButtonHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(o){switch(o.label){case 0:if(!t)return[3,2];return[4,safeCall(t.handler)];case 1:e=o.sent();if(e===false){return[2,false]}o.label=2;case 2:return[2,true]}}))}))};t.prototype.getButtons=function(){return this.buttons.map((function(t){return typeof t==="string"?{text:t}:t}))};t.prototype.connectedCallback=function(){prepareOverlay(this.el);this.triggerChanged()};t.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.triggerController.removeClickListener()};t.prototype.componentWillLoad=function(){var t;if(!((t=this.htmlAttributes)===null||t===void 0?void 0:t.id)){setOverlayId(this.el)}};t.prototype.componentDidLoad=function(){var t=this;var e=this,o=e.groupEl,n=e.wrapperEl;if(!this.gesture&&getIonMode(this)==="ios"&&n&&o){readTask((function(){var e=o.scrollHeight>o.clientHeight;if(!e){t.gesture=createButtonActiveGesture(n,(function(t){return t.classList.contains("action-sheet-button")}));t.gesture.enable(true)}}))}if(this.isOpen===true){raf((function(){return t.present()}))}this.triggerChanged()};t.prototype.render=function(){var t;var e=this;var o=this,n=o.header,i=o.htmlAttributes,a=o.overlayIndex;var r=getIonMode(this);var c=this.getButtons();var s=c.find((function(t){return t.role==="cancel"}));var d=c.filter((function(t){return t.role!=="cancel"}));var l="action-sheet-".concat(a,"-header");return h(Host,Object.assign({key:"7bbd202ca9e19727e7514abbe073687d982f80c3",role:"dialog","aria-modal":"true","aria-labelledby":n!==undefined?l:null,tabindex:"-1"},i,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign((t={},t[r]=true,t),getClassMap(this.cssClass)),{"overlay-hidden":true,"action-sheet-translucent":this.translucent}),onIonActionSheetWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap}),h("ion-backdrop",{key:"23344a9221a2e6720d7b9de5249dc37256cafa7b",tappable:this.backdropDismiss}),h("div",{key:"fbc2ba15549c2ab04e759e82df6e177fd80cc0a6",tabindex:"0","aria-hidden":"true"}),h("div",{key:"748ee5235d0b4cb26d6f1b7589f77af2e37ad28a",class:"action-sheet-wrapper ion-overlay-wrapper",ref:function(t){return e.wrapperEl=t}},h("div",{key:"7ce5fa236cf75e9b1e49c4725c9a811078706554",class:"action-sheet-container"},h("div",{key:"dc2251f3bcee4a93e3449f09621cbd2b65d329e9",class:"action-sheet-group",ref:function(t){return e.groupEl=t}},n!==undefined&&h("div",{key:"48d325c8a852f56ed57a9ada1a6709d05ba32ee2",id:l,class:{"action-sheet-title":true,"action-sheet-has-sub-title":this.subHeader!==undefined}},n,this.subHeader&&h("div",{key:"66093728052eb67f37a35f3232761ce4a08896f3",class:"action-sheet-sub-title"},this.subHeader)),d.map((function(t){return h("button",Object.assign({},t.htmlAttributes,{type:"button",id:t.id,class:buttonClass(t),onClick:function(){return e.buttonClick(t)},disabled:t.disabled}),h("span",{class:"action-sheet-button-inner"},t.icon&&h("ion-icon",{icon:t.icon,"aria-hidden":"true",lazy:false,class:"action-sheet-icon"}),t.text),r==="md"&&h("ion-ripple-effect",null))}))),s&&h("div",{key:"f4eb8e3e2885b85af5080df18d0de0bdd1d719de",class:"action-sheet-group action-sheet-group-cancel"},h("button",Object.assign({key:"169f4eb09255aba85062baad49ceb151239fbfb7"},s.htmlAttributes,{type:"button",class:buttonClass(s),onClick:function(){return e.buttonClick(s)}}),h("span",{key:"25fb8a466dd67ea94c79cfb4f9965527e1ce6d42",class:"action-sheet-button-inner"},s.icon&&h("ion-icon",{key:"eb5b071e120a2c86afdf967af6a763a43044d1ca",icon:s.icon,"aria-hidden":"true",lazy:false,class:"action-sheet-icon"}),s.text),r==="md"&&h("ion-ripple-effect",{key:"452ad7e1052b2c681e2d98de8193949755ad4d54"}))))),h("div",{key:"e1cecf280c987c050d9445e2c458b903f153089b",tabindex:"0","aria-hidden":"true"}))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}},enumerable:false,configurable:true});return t}();var buttonClass=function(t){var e;return Object.assign((e={"action-sheet-button":true,"ion-activatable":!t.disabled,"ion-focusable":!t.disabled},e["action-sheet-".concat(t.role)]=t.role!==undefined,e),getClassMap(t.cssClass))};ActionSheet.style={ios:IonActionSheetIosStyle0,md:IonActionSheetMdStyle0};export{ActionSheet as ion_action_sheet};