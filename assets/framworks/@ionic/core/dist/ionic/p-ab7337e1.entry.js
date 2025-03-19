/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as e,c as s,h as t,e as o,f as l}from"./p-66a5d6a8.js";const i=class{constructor(t){e(this,t),this.ionSegmentViewScroll=s(this,"ionSegmentViewScroll",7),this.scrollEndTimeout=null,this.isTouching=!1,this.disabled=!1,this.isManualScroll=void 0}handleScroll(e){var s;const{scrollLeft:t,scrollWidth:o,clientWidth:l}=e.target;this.ionSegmentViewScroll.emit({scrollRatio:t/(o-l),isManualScroll:null===(s=this.isManualScroll)||void 0===s||s}),this.resetScrollEndTimeout()}handleScrollStart(){this.scrollEndTimeout&&(clearTimeout(this.scrollEndTimeout),this.scrollEndTimeout=null),this.isTouching=!0}handleTouchEnd(){this.isTouching=!1}resetScrollEndTimeout(){this.scrollEndTimeout&&(clearTimeout(this.scrollEndTimeout),this.scrollEndTimeout=null),this.scrollEndTimeout=setTimeout((()=>{this.checkForScrollEnd()}),100)}checkForScrollEnd(){this.isTouching||(this.isManualScroll=void 0)}async setContent(e,s=!0){const t=this.getSegmentContents().findIndex((s=>s.id===e));-1!==t&&(this.isManualScroll=!1,this.resetScrollEndTimeout(),this.el.scrollTo({top:0,left:t*this.el.offsetWidth,behavior:s?"smooth":"instant"}))}getSegmentContents(){return Array.from(this.el.querySelectorAll("ion-segment-content"))}render(){const{disabled:e,isManualScroll:s}=this;return t(o,{key:"fa528d2d9ae0f00fc3067defe2a047dce77c814a",class:{"segment-view-disabled":e,"segment-view-scroll-disabled":!1===s}},t("slot",{key:"74dc8b4d073caeff1bab272d11b9ea3e1a215954"}))}get el(){return l(this)}};i.style={ios:":host{display:-ms-flexbox;display:flex;height:100%;overflow-x:scroll;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled){-ms-touch-action:none;touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}",md:":host{display:-ms-flexbox;display:flex;height:100%;overflow-x:scroll;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled){-ms-touch-action:none;touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}"};export{i as ion_segment_view}