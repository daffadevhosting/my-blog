/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{d as n}from"./p-7b30edcc.js";import{f as o,c as e,a as t,b as i,g as a}from"./p-b9ea58ef.js";import{OVERLAY_BACK_BUTTON_PRIORITY as d,shouldUseCloseWatcher as r}from"./p-9af7f110.js";import{b as s,c as l,a as c}from"./p-597ff9af.js";import{C as u}from"./p-f554845e.js";import{B as f}from"./p-9b97df10.js";import{p as m}from"./p-3f4327f7.js";const p='[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-checkbox:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-radio:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',v=(n,o)=>{const e=n.querySelector(p);b(e,null!=o?o:n)},h=(n,o)=>{const e=Array.from(n.querySelectorAll(p));b(e.length>0?e[e.length-1]:null,null!=o?o:n)},b=(n,e)=>{let t=n;const i=null==n?void 0:n.shadowRoot;if(i&&(t=i.querySelector(p)||n),t){const n=t.closest("ion-radio-group");n?n.setFocus():o(t)}else e.focus()};let y=0,w=0;const g=new WeakMap,O=n=>({create:o=>D(n,o),dismiss:(o,e,t)=>M(document,o,e,n,t),getTop:async()=>F(document,n)}),T=O("ion-alert"),k=O("ion-action-sheet"),x=O("ion-loading"),j=O("ion-modal"),A=O("ion-picker-legacy"),I=O("ion-popover"),N=O("ion-toast"),S=n=>{"undefined"!=typeof document&&P(document);const o=y++;n.overlayIndex=o},C=n=>(n.hasAttribute("id")||(n.id="ion-overlay-"+ ++w),n.id),D=(n,o)=>"undefined"!=typeof window&&void 0!==window.customElements?window.customElements.whenDefined(n).then((()=>{const t=document.createElement(n);return t.classList.add("overlay-hidden"),Object.assign(t,Object.assign(Object.assign({},o),{hasController:!0})),z(document).appendChild(t),new Promise((n=>e(t,n)))})):Promise.resolve(),B=(n,e)=>{let t=n;const i=null==n?void 0:n.shadowRoot;i&&(t=i.querySelector(p)||n),t?o(t):e.focus()},P=n=>{0===y&&(y=1,n.addEventListener("focus",(o=>{((n,o)=>{const e=F(o,"ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover"),t=n.target;e&&t&&(e.classList.contains(en)||(e.shadowRoot?(()=>{if(e.contains(t))e.lastFocus=t;else if("ION-TOAST"===t.tagName)B(e.lastFocus,e);else{const n=e.lastFocus;v(e),n===o.activeElement&&h(e),e.lastFocus=o.activeElement}})():(()=>{if(e===t)e.lastFocus=void 0;else if("ION-TOAST"===t.tagName)B(e.lastFocus,e);else{const n=a(e);if(!n.contains(t))return;const i=n.querySelector(".ion-overlay-wrapper");if(!i)return;if(i.contains(t)||t===n.querySelector("ion-backdrop"))e.lastFocus=t;else{const n=e.lastFocus;v(i,e),n===o.activeElement&&h(i,e),e.lastFocus=o.activeElement}}})()))})(o,n)}),!0),n.addEventListener("ionBackButton",(o=>{const e=F(n);(null==e?void 0:e.backdropDismiss)&&o.detail.register(d,(()=>{e.dismiss(void 0,Q)}))})),r()||n.addEventListener("keydown",(o=>{if("Escape"===o.key){const o=F(n);(null==o?void 0:o.backdropDismiss)&&o.dismiss(void 0,Q)}})))},M=(n,o,e,t,i)=>{const a=F(n,t,i);return a?a.dismiss(o,e):Promise.reject("overlay does not exist")},E=(n,o)=>((n,o)=>(void 0===o&&(o="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast"),Array.from(n.querySelectorAll(o)).filter((n=>n.overlayIndex>0))))(n,o).filter((n=>!n.classList.contains("overlay-hidden"))),F=(n,o,e)=>{const t=E(n,o);return void 0===e?t[t.length-1]:t.find((n=>n.id===e))},G=(n=!1)=>{const o=z(document).querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");o&&(n?o.setAttribute("aria-hidden","true"):o.removeAttribute("aria-hidden"))},L=async(n,o,e,t,i)=>{var a,d;if(n.presented)return;"ION-TOAST"!==n.el.tagName&&G(!0),document.body.classList.add(f),nn(n.el),Z(n.el),n.presented=!0,n.willPresent.emit(),null===(a=n.willPresentShorthand)||void 0===a||a.emit();const r=s(n),c=n.enterAnimation?n.enterAnimation:l.get(o,"ios"===r?e:t);await W(n,c,n.el,i)&&(n.didPresent.emit(),null===(d=n.didPresentShorthand)||void 0===d||d.emit()),"ION-TOAST"!==n.el.tagName&&V(n.el),!n.keyboardClose||null!==document.activeElement&&n.el.contains(document.activeElement)||n.el.focus(),n.el.removeAttribute("aria-hidden")},V=async n=>{let o=document.activeElement;if(!o)return;const e=null==o?void 0:o.shadowRoot;e&&(o=e.querySelector(p)||o),await n.onDidDismiss(),null!==document.activeElement&&document.activeElement!==document.body||o.focus()},q=async(o,e,t,i,a,d,r)=>{var c,u;if(!o.presented)return!1;const m=void 0!==n?E(n).filter((n=>"ION-TOAST"!==n.tagName)):[];1===m.length&&m[0].id===o.el.id&&(G(!1),document.body.classList.remove(f)),o.presented=!1;try{Z(o.el),o.el.style.setProperty("pointer-events","none"),o.willDismiss.emit({data:e,role:t}),null===(c=o.willDismissShorthand)||void 0===c||c.emit({data:e,role:t});const n=s(o),f=o.leaveAnimation?o.leaveAnimation:l.get(i,"ios"===n?a:d);t!==R&&await W(o,f,o.el,r),o.didDismiss.emit({data:e,role:t}),null===(u=o.didDismissShorthand)||void 0===u||u.emit({data:e,role:t}),(g.get(o)||[]).forEach((n=>n.destroy())),g.delete(o),o.el.classList.add("overlay-hidden"),o.el.style.removeProperty("pointer-events"),void 0!==o.el.lastFocus&&(o.el.lastFocus=void 0)}catch(n){console.error(n)}return o.el.remove(),on(),!0},z=n=>n.querySelector("ion-app")||n.body,W=async(n,o,e,t)=>{e.classList.remove("overlay-hidden");const i=o(n.el,t);n.animated&&l.getBoolean("animated",!0)||i.duration(0),n.keyboardClose&&i.beforeAddWrite((()=>{const n=e.ownerDocument.activeElement;(null==n?void 0:n.matches("input,ion-input, ion-textarea"))&&n.blur()}));const a=g.get(n)||[];return g.set(n,[...a,i]),await i.play(),!0},$=(n,o)=>{let e;const t=new Promise((n=>e=n));return _(n,o,(n=>{e(n.detail)})),t},_=(n,o,e)=>{const a=t=>{i(n,o,a),e(t)};t(n,o,a)},H=n=>"cancel"===n||n===Q,J=n=>n(),K=(n,o)=>{if("function"==typeof n)return l.get("_zoneGate",J)((()=>{try{return n(o)}catch(n){throw n}}))},Q="backdrop",R="gesture",U=39,X=n=>{let o,e=!1;const t=u(),i=(i=!1)=>{if(o&&!i)return{delegate:o,inline:e};const{el:a,hasController:d,delegate:r}=n;return e=null!==a.parentNode&&!d,o=e?r||t:r,{inline:e,delegate:o}};return{attachViewToDom:async o=>{const{delegate:e}=i(!0);if(e)return await e.attachViewToDom(n.el,o);const{hasController:t}=n;if(t&&void 0!==o)throw new Error("framework delegate is missing");return null},removeViewFromDom:()=>{const{delegate:o}=i();o&&void 0!==n.el&&o.removeViewFromDom(n.el.parentElement,n.el)}}},Y=()=>{let n;const o=()=>{n&&(n(),n=void 0)};return{addClickListener:(e,t)=>{o();const i=void 0!==t?document.getElementById(t):null;i?n=((n,o)=>{const e=()=>{o.present()};return n.addEventListener("click",e),()=>{n.removeEventListener("click",e)}})(i,e):m(`A trigger element with the ID "${t}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`,e)},removeClickListener:o}},Z=o=>{void 0!==n&&c("android")&&o.setAttribute("aria-hidden","true")},nn=o=>{var e;if(void 0===n)return;const t=E(n);for(let n=t.length-1;n>=0;n--){const i=t[n],a=null!==(e=t[n+1])&&void 0!==e?e:o;(a.hasAttribute("aria-hidden")||"ION-TOAST"!==a.tagName)&&i.setAttribute("aria-hidden","true")}},on=()=>{if(void 0===n)return;const o=E(n);for(let n=o.length-1;n>=0;n--){const e=o[n];if(e.removeAttribute("aria-hidden"),"ION-TOAST"!==e.tagName)break}},en="ion-disable-focus-trap";export{Q as B,en as F,R as G,U as O,T as a,k as b,I as c,X as d,Y as e,L as f,q as g,$ as h,H as i,S as j,C as k,x as l,j as m,v as n,F as o,A as p,h as q,K as s,N as t}