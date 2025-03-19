var __extends=this&&this.__extends||function(){var r=function(e,n){r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n))r[n]=e[n]};return r(e,n)};return function(e,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");r(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __assign=this&&this.__assign||function(){__assign=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++){e=arguments[n];for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i))r[i]=e[i]}return r};return __assign.apply(this,arguments)};var __awaiter=this&&this.__awaiter||function(r,e,n,t){function i(r){return r instanceof n?r:new n((function(e){e(r)}))}return new(n||(n=Promise))((function(n,a){function f(r){try{o(t.next(r))}catch(r){a(r)}}function u(r){try{o(t["throw"](r))}catch(r){a(r)}}function o(r){r.done?n(r.value):i(r.value).then(f,u)}o((t=t.apply(r,e||[])).next())}))};var __generator=this&&this.__generator||function(r,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,i,a,f;return f={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(f[Symbol.iterator]=function(){return this}),f;function u(r){return function(e){return o([r,e])}}function o(u){if(t)throw new TypeError("Generator is already executing.");while(f&&(f=0,u[0]&&(n=0)),n)try{if(t=1,i&&(a=u[0]&2?i["return"]:u[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,u[1])).done)return a;if(i=0,a)u=[u[0]&2,a.value];switch(u[0]){case 0:case 1:a=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;i=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){n.label=u[1];break}if(u[0]===6&&n.label<a[1]){n.label=a[1];a=u;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(u);break}if(a[2])n.ops.pop();n.trys.pop();continue}u=e.call(r,n)}catch(r){u=[6,r];i=0}finally{t=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(r,e,n){if(n||arguments.length===2)for(var t=0,i=e.length,a;t<i;t++){if(a||!(t in e)){if(!a)a=Array.prototype.slice.call(e,0,t);a[t]=e[t]}}return r.concat(a||Array.prototype.slice.call(e))};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register([],(function(r,e){"use strict";return{execute:function(){var n=this;var t="ionic";var i={allRenderFn:false,appendChildSlotFix:true,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:true,cmpDidLoad:true,cmpDidRender:true,cmpDidUnload:false,cmpDidUpdate:true,cmpShouldUpdate:false,cmpWillLoad:true,cmpWillRender:true,cmpWillUpdate:false,connectedCallback:true,constructableCSS:true,cssAnnotations:true,devTools:false,disconnectedCallback:true,element:false,event:true,experimentalScopedSlotChanges:true,experimentalSlotFixes:true,formAssociated:false,hasRenderFn:true,hostListener:true,hostListenerTarget:true,hostListenerTargetBody:true,hostListenerTargetDocument:true,hostListenerTargetParent:false,hostListenerTargetWindow:true,hotModuleReplacement:false,hydrateClientSide:true,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,hydratedSelectorName:"hydrated",initializeNextTick:false,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:true,lifecycleDOMEvents:false,member:true,method:true,mode:true,observeAttribute:true,profile:false,prop:true,propBoolean:true,propMutable:true,propNumber:true,propString:true,reflect:true,scoped:true,scopedSlotTextContentFix:true,scriptDataOpts:false,shadowDelegatesFocus:true,shadowDom:true,slot:true,slotChildNodesFix:true,slotRelocation:true,state:true,style:true,svg:true,taskQueue:true,transformTagName:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomPropOrAttr:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,vdomXlink:true,watchCallback:true};var a=Object.defineProperty;var f=function(r,e){for(var n in e)a(r,n,{get:e[n],enumerable:true})};var u=r("B",{isDev:false,isBrowser:true,isServer:false,isTesting:false});var o=new WeakMap;var l=function(r){return o.get(r)};var v=r("r",(function(r,e){return o.set(e.t=r,e)}));var s=function(r,e){var n={i:0,$hostElement$:r,u:e,o:new Map};{n.l=new Promise((function(r){return n.v=r}))}{n.h=new Promise((function(r){return n.p=r}));r["s-p"]=[];r["s-rc"]=[]}return o.set(r,n)};var c=function(r,e){return e in r};var d=function(r,e){return(0,console.error)(r,e)};var h=new Map;var p=function(r,n,t){var i=r.m.replace(/-/g,"_");var a=r.$;if(!a){return void 0}var f=h.get(a);if(f){return f[i]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return e.import("./".concat(a,".entry.js").concat("")).then((function(r){{h.set(a,r)}return r[i]}),d)};var m=new Map;var y=[];var w="r";var b="o";var $="s";var g="t";var _="s-id";var S="sty-id";var j="c-id";var k="{visibility:hidden}.hydrated{visibility:inherit}";var x="slot-fb{display:contents}slot-fb[hidden]{display:none}";var A="http://www.w3.org/1999/xlink";var O=typeof window!=="undefined"?window:{};var C=O.document||{head:{}};var T=r("H",O.HTMLElement||function(){function r(){}return r}());var E={i:0,_:"",jmp:function(r){return r()},raf:function(r){return requestAnimationFrame(r)},ael:function(r,e,n,t){return r.addEventListener(e,n,t)},rel:function(r,e,n,t){return r.removeEventListener(e,n,t)},ce:function(r,e){return new CustomEvent(r,e)}};var D=i.shadowDom;var R=function(){var r=false;try{C.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){r=true}}))}catch(r){}return r}();var L=r("p",(function(r){return Promise.resolve(r)}));var M=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(r){}return false}();var F=false;var N=[];var P=[];var U=function(r,e){return function(n){r.push(n);if(!F){F=true;if(e&&E.i&4){B(I)}else{E.raf(I)}}}};var W=function(r){for(var e=0;e<r.length;e++){try{r[e](performance.now())}catch(r){d(r)}}r.length=0};var I=function(){W(N);{W(P);if(F=N.length>0){E.raf(I)}}};var B=function(r){return L().then(r)};var H=r("d",U(N,false));var z=r("w",U(P,true));var G=r("j",(function(r){var e=new URL(r,E._);return e.origin!==O.location.origin?e.href:e.pathname}));var Q={};var q="http://www.w3.org/2000/svg";var K="http://www.w3.org/1999/xhtml";var V=function(r){return r!=null};var X=function(r){r=typeof r;return r==="object"||r==="function"};function J(r){var e,n,t;return(t=(n=(e=r.head)==null?void 0:e.querySelector('meta[name="csp-nonce"]'))==null?void 0:n.getAttribute("content"))!=null?t:void 0}var Y={};f(Y,{err:function(){return rr},map:function(){return er},ok:function(){return Z},unwrap:function(){return nr},unwrapErr:function(){return tr}});var Z=function(r){return{isOk:true,isErr:false,value:r}};var rr=function(r){return{isOk:false,isErr:true,value:r}};function er(r,e){if(r.isOk){var n=e(r.value);if(n instanceof Promise){return n.then((function(r){return Z(r)}))}else{return Z(n)}}if(r.isErr){var t=r.value;return rr(t)}throw"should never get here"}var nr=function(r){if(r.isOk){return r.value}else{throw r.value}};var tr=function(r){if(r.isErr){return r.value}else{throw r.value}};var ir=function(r,e){if(e===void 0){e=""}{return function(){return}}};var ar=function(r,e){{return function(){return}}};var fr=r("h",(function(r,e){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var i=null;var a=null;var f=null;var u=false;var o=false;var l=[];var v=function(e){for(var n=0;n<e.length;n++){i=e[n];if(Array.isArray(i)){v(i)}else if(i!=null&&typeof i!=="boolean"){if(u=typeof r!=="function"&&!X(i)){i=String(i)}if(u&&o){l[l.length-1].S+=i}else{l.push(u?ur(null,i):i)}o=u}}};v(n);if(e){if(e.key){a=e.key}if(e.name){f=e.name}{var s=e.className||e.class;if(s){e.class=typeof s!=="object"?s:Object.keys(s).filter((function(r){return s[r]})).join(" ")}}}if(typeof r==="function"){return r(e===null?{}:e,l,vr)}var c=ur(r,null);c.j=e;if(l.length>0){c.k=l}{c.A=a}{c.O=f}return c}));var ur=function(r,e){var n={i:0,C:r,S:e,T:null,k:null};{n.j=null}{n.A=null}{n.O=null}return n};var or=r("e",{});var lr=function(r){return r&&r.C===or};var vr={forEach:function(r,e){return r.map(sr).forEach(e)},map:function(r,e){return r.map(sr).map(e).map(cr)}};var sr=function(r){return{vattrs:r.j,vchildren:r.k,vkey:r.A,vname:r.O,vtag:r.C,vtext:r.S}};var cr=function(r){if(typeof r.vtag==="function"){var e=__assign({},r.vattrs);if(r.vkey){e.key=r.vkey}if(r.vname){e.name=r.vname}return fr.apply(void 0,__spreadArray([r.vtag,e],r.vchildren||[],false))}var n=ur(r.vtag,r.vtext);n.j=r.vattrs;n.k=r.vchildren;n.A=r.vkey;n.O=r.vname;return n};var dr=function(r,e,n,t){var i=ir("hydrateClient",e);var a=r.shadowRoot;var f=[];var u=[];var o=a?[]:null;var l=t.D=ur(e,null);if(!E.R){pr(C.body,E.R=new Map)}r[_]=n;r.removeAttribute(_);hr(l,f,u,o,r,r,n);f.map((function(r){var n=r.L+"."+r.M;var t=E.R.get(n);var i=r.T;if(t&&D&&t["s-en"]===""){t.parentNode.insertBefore(i,t.nextSibling)}if(!a){i["s-hn"]=e;if(t){i["s-ol"]=t;i["s-ol"]["s-nr"]=i}}E.R.delete(n)}));if(a){o.map((function(r){if(r){a.appendChild(r)}}))}i()};var hr=function(r,e,n,t,i,a,f){var u;var o;var l;var v;if(a.nodeType===1){u=a.getAttribute(j);if(u){o=u.split(".");if(o[0]===f||o[0]==="0"){l={i:0,L:o[0],M:o[1],F:o[2],N:o[3],C:a.tagName.toLowerCase(),T:a,j:null,k:null,A:null,O:null,S:null};e.push(l);a.removeAttribute(j);if(!r.k){r.k=[]}r.k[l.N]=l;r=l;if(t&&l.F==="0"){t[l.N]=l.T}}}if(a.shadowRoot){for(v=a.shadowRoot.childNodes.length-1;v>=0;v--){hr(r,e,n,t,i,a.shadowRoot.childNodes[v],f)}}for(v=a.childNodes.length-1;v>=0;v--){hr(r,e,n,t,i,a.childNodes[v],f)}}else if(a.nodeType===8){o=a.nodeValue.split(".");if(o[1]===f||o[1]==="0"){u=o[0];l={i:0,L:o[1],M:o[2],F:o[3],N:o[4],T:a,j:null,k:null,A:null,O:null,C:null,S:null};if(u===g){l.T=a.nextSibling;if(l.T&&l.T.nodeType===3){l.S=l.T.textContent;e.push(l);a.remove();if(!r.k){r.k=[]}r.k[l.N]=l;if(t&&l.F==="0"){t[l.N]=l.T}}}else if(l.L===f){if(u===$){l.C="slot";if(o[5]){a["s-sn"]=l.O=o[5]}else{a["s-sn"]=""}a["s-sr"]=true;if(t){l.T=C.createElement(l.C);if(l.O){l.T.setAttribute("name",l.O)}a.parentNode.insertBefore(l.T,a);a.remove();if(l.F==="0"){t[l.N]=l.T}}n.push(l);if(!r.k){r.k=[]}r.k[l.N]=l}else if(u===w){if(t){a.remove()}else{i["s-cr"]=a;a["s-cn"]=true}}}}}else if(r&&r.C==="style"){var s=ur(null,a.textContent);s.T=a;s.N="0";r.k=[s]}};var pr=function(r,e){if(r.nodeType===1){var n=0;if(r.shadowRoot){for(;n<r.shadowRoot.childNodes.length;n++){pr(r.shadowRoot.childNodes[n],e)}}for(n=0;n<r.childNodes.length;n++){pr(r.childNodes[n],e)}}else if(r.nodeType===8){var t=r.nodeValue.split(".");if(t[0]===b){e.set(t[1]+"."+t[2],r);r.nodeValue="";r["s-en"]=t[3]}}};var mr=function(r){return y.map((function(e){return e(r)})).find((function(r){return!!r}))};var yr=r("a",(function(r){return y.push(r)}));var wr=r("g",(function(r){return l(r).P}));var br=function(r,e){if(r!=null&&!X(r)){if(e&4){return r==="false"?false:r===""||!!r}if(e&2){return parseFloat(r)}if(e&1){return String(r)}return r}return r};var $r=r("f",(function(r){return l(r).$hostElement$}));var gr=r("c",(function(r,e,n){var t=$r(r);return{emit:function(r){return _r(t,e,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:r})}}}));var _r=function(r,e,n){var t=E.ce(e,n);r.dispatchEvent(t);return t};var Sr=new WeakMap;var jr=function(r,e,n){var t=m.get(r);if(M&&n){t=t||new CSSStyleSheet;if(typeof t==="string"){t=e}else{t.replaceSync(e)}}else{t=e}m.set(r,t)};var kr=function(r,e,n){var t;var i=Ar(e,n);var a=m.get(i);r=r.nodeType===11?r:C;if(a){if(typeof a==="string"){r=r.head||r;var f=Sr.get(r);var u=void 0;if(!f){Sr.set(r,f=new Set)}if(!f.has(i)){if(r.host&&(u=r.querySelector("[".concat(S,'="').concat(i,'"]')))){u.innerHTML=a}else{u=C.createElement("style");u.innerHTML=a;var o=(t=E.U)!=null?t:J(C);if(o!=null){u.setAttribute("nonce",o)}var l=!(e.i&1)||e.i&1&&r.nodeName!=="HEAD";if(l){r.insertBefore(u,r.querySelector("link"))}}if(e.i&4){u.innerHTML+=x}if(f){f.add(i)}}}else if(!r.adoptedStyleSheets.includes(a)){r.adoptedStyleSheets=__spreadArray(__spreadArray([],r.adoptedStyleSheets,true),[a],false)}}return i};var xr=function(r){var e=r.u;var n=r.$hostElement$;var t=e.i;var i=ir("attachStyles",e.m);var a=kr(n.shadowRoot?n.shadowRoot:n.getRootNode(),e,r.P);if(t&10&&t&2){n["s-sc"]=a;n.classList.add(a+"-h");if(t&2){n.classList.add(a+"-s")}}i()};var Ar=function(r,e){return"sc-"+(e&&r.i&32?r.m+"-"+e:r.m)};var Or=function(r,e,n,t,i,a){if(n!==t){var f=c(r,e);var u=e.toLowerCase();if(e==="class"){var o=r.classList;var l=Tr(n);var v=Tr(t);o.remove.apply(o,l.filter((function(r){return r&&!v.includes(r)})));o.add.apply(o,v.filter((function(r){return r&&!l.includes(r)})))}else if(e==="style"){{for(var s in n){if(!t||t[s]==null){if(s.includes("-")){r.style.removeProperty(s)}else{r.style[s]=""}}}}for(var s in t){if(!n||t[s]!==n[s]){if(s.includes("-")){r.style.setProperty(s,t[s])}else{r.style[s]=t[s]}}}}else if(e==="key");else if(e==="ref"){if(t){t(r)}}else if(!f&&e[0]==="o"&&e[1]==="n"){if(e[2]==="-"){e=e.slice(3)}else if(c(O,u)){e=u.slice(2)}else{e=u[2]+e.slice(3)}if(n||t){var d=e.endsWith(Er);e=e.replace(Dr,"");if(n){E.rel(r,e,n,d)}if(t){E.ael(r,e,t,d)}}}else{var h=X(t);if((f||h&&t!==null)&&!i){try{if(!r.tagName.includes("-")){var p=t==null?"":t;if(e==="list"){f=false}else if(n==null||r[e]!=p){r[e]=p}}else{r[e]=t}}catch(r){}}var m=false;{if(u!==(u=u.replace(/^xlink\:?/,""))){e=u;m=true}}if(t==null||t===false){if(t!==false||r.getAttribute(e)===""){if(m){r.removeAttributeNS(A,e)}else{r.removeAttribute(e)}}}else if((!f||a&4||i)&&!h){t=t===true?"":t;if(m){r.setAttributeNS(A,e,t)}else{r.setAttribute(e,t)}}}}};var Cr=/\s/;var Tr=function(r){return!r?[]:r.split(Cr)};var Er="Capture";var Dr=new RegExp(Er+"$");var Rr=function(r,e,n){var t=e.T.nodeType===11&&e.T.host?e.T.host:e.T;var i=r&&r.j||Q;var a=e.j||Q;{for(var f=0,u=Lr(Object.keys(i));f<u.length;f++){var o=u[f];if(!(o in a)){Or(t,o,i[o],void 0,n,e.i)}}}for(var l=0,v=Lr(Object.keys(a));l<v.length;l++){var o=v[l];Or(t,o,i[o],a[o],n,e.i)}};function Lr(r){return r.includes("ref")?__spreadArray(__spreadArray([],r.filter((function(r){return r!=="ref"})),true),["ref"],false):r}var Mr;var Fr;var Nr;var Pr=false;var Ur=false;var Wr=false;var Ir=false;var Br=function(r,e,n,t){var a;var f=e.k[n];var u=0;var o;var l;var v;if(!Pr){Wr=true;if(f.C==="slot"){if(Mr){t.classList.add(Mr+"-s")}f.i|=f.k?2:1}}if(f.S!==null){o=f.T=C.createTextNode(f.S)}else if(f.i&1){o=f.T=C.createTextNode("")}else{if(!Ir){Ir=f.C==="svg"}o=f.T=C.createElementNS(Ir?q:K,!Pr&&i.slotRelocation&&f.i&2?"slot-fb":f.C);if(Ir&&f.C==="foreignObject"){Ir=false}{Rr(null,f,Ir)}var s=o.getRootNode();var c=!s.querySelector("body");if(!c&&i.scoped&&V(Mr)&&o["s-si"]!==Mr){o.classList.add(o["s-si"]=Mr)}{ae(o,t)}if(f.k){for(u=0;u<f.k.length;++u){l=Br(r,f,u,o);if(l){o.appendChild(l)}}}{if(f.C==="svg"){Ir=false}else if(o.tagName==="foreignObject"){Ir=true}}}o["s-hn"]=Nr;{if(f.i&(2|1)){o["s-sr"]=true;o["s-cr"]=Fr;o["s-sn"]=f.O||"";o["s-rf"]=(a=f.j)==null?void 0:a.ref;v=r&&r.k&&r.k[n];if(v&&v.C===f.C&&r.T){{Hr(r.T)}}}}return o};var Hr=function(r){E.i|=1;var e=r.closest(Nr.toLowerCase());if(e!=null){var n=Array.from(e.childNodes).find((function(r){return r["s-cr"]}));var t=Array.from(r.childNodes);for(var i=0,a=n?t.reverse():t;i<a.length;i++){var f=a[i];if(f["s-sh"]!=null){te(e,f,n!=null?n:null);f["s-sh"]=void 0;Wr=true}}}E.i&=~1};var zr=function(r,e){E.i|=1;var n=Array.from(r.childNodes);if(r["s-sr"]&&i.experimentalSlotFixes){var t=r;while(t=t.nextSibling){if(t&&t["s-sn"]===r["s-sn"]&&t["s-sh"]===Nr){n.push(t)}}}for(var a=n.length-1;a>=0;a--){var f=n[a];if(f["s-hn"]!==Nr&&f["s-ol"]){te(Xr(f),f,Vr(f));f["s-ol"].remove();f["s-ol"]=void 0;f["s-sh"]=void 0;Wr=true}if(e){zr(f,e)}}E.i&=~1};var Gr=function(r,e,n,t,i,a){var f=r["s-cr"]&&r["s-cr"].parentNode||r;var u;if(f.shadowRoot&&f.tagName===Nr){f=f.shadowRoot}for(;i<=a;++i){if(t[i]){u=Br(null,n,i,r);if(u){t[i].T=u;te(f,u,Vr(e))}}}};var Qr=function(r,e,n){for(var t=e;t<=n;++t){var i=r[t];if(i){var a=i.T;ne(i);if(a){{Ur=true;if(a["s-ol"]){a["s-ol"].remove()}else{zr(a,true)}}a.remove()}}}};var qr=function(r,e,n,t,i){if(i===void 0){i=false}var a=0;var f=0;var u=0;var o=0;var l=e.length-1;var v=e[0];var s=e[l];var c=t.length-1;var d=t[0];var h=t[c];var p;var m;while(a<=l&&f<=c){if(v==null){v=e[++a]}else if(s==null){s=e[--l]}else if(d==null){d=t[++f]}else if(h==null){h=t[--c]}else if(Kr(v,d,i)){Jr(v,d,i);v=e[++a];d=t[++f]}else if(Kr(s,h,i)){Jr(s,h,i);s=e[--l];h=t[--c]}else if(Kr(v,h,i)){if(v.C==="slot"||h.C==="slot"){zr(v.T.parentNode,false)}Jr(v,h,i);te(r,v.T,s.T.nextSibling);v=e[++a];h=t[--c]}else if(Kr(s,d,i)){if(v.C==="slot"||h.C==="slot"){zr(s.T.parentNode,false)}Jr(s,d,i);te(r,s.T,v.T);s=e[--l];d=t[++f]}else{u=-1;{for(o=a;o<=l;++o){if(e[o]&&e[o].A!==null&&e[o].A===d.A){u=o;break}}}if(u>=0){m=e[u];if(m.C!==d.C){p=Br(e&&e[f],n,u,r)}else{Jr(m,d,i);e[u]=void 0;p=m.T}d=t[++f]}else{p=Br(e&&e[f],n,f,r);d=t[++f]}if(p){{te(Xr(v.T),p,Vr(v.T))}}}}if(a>l){Gr(r,t[c+1]==null?null:t[c+1].T,n,t,f,c)}else if(f>c){Qr(e,a,l)}};var Kr=function(r,e,n){if(n===void 0){n=false}if(r.C===e.C){if(r.C==="slot"){if("M"in r&&n&&r.T.nodeType!==8){return false}return r.O===e.O}if(!n){return r.A===e.A}return true}return false};var Vr=function(r){return r&&r["s-ol"]||r};var Xr=function(r){return(r["s-ol"]?r["s-ol"]:r).parentNode};var Jr=function(r,e,n){if(n===void 0){n=false}var t=e.T=r.T;var a=r.k;var f=e.k;var u=e.C;var o=e.S;var l;if(o===null){{Ir=u==="svg"?true:u==="foreignObject"?false:Ir}{if(u==="slot"&&!Pr){if(r.O!==e.O){e.T["s-sn"]=e.O||"";Hr(e.T.parentElement)}}else{Rr(r,e,Ir)}}if(a!==null&&f!==null){qr(t,a,e,f,n)}else if(f!==null){if(r.S!==null){t.textContent=""}Gr(t,null,e,f,0,f.length-1)}else if(!n&&i.updatable&&a!==null){Qr(a,0,a.length-1)}if(Ir&&u==="svg"){Ir=false}}else if(l=t["s-cr"]){l.parentNode.textContent=o}else if(r.S!==o){t.data=o}};var Yr=function(r){var e=r.childNodes;for(var n=0,t=e;n<t.length;n++){var i=t[n];if(i.nodeType===1){if(i["s-sr"]){var a=i["s-sn"];i.hidden=false;for(var f=0,u=e;f<u.length;f++){var o=u[f];if(o!==i){if(o["s-hn"]!==i["s-hn"]||a!==""){if(o.nodeType===1&&(a===o.getAttribute("slot")||a===o["s-sn"])||o.nodeType===3&&a===o["s-sn"]){i.hidden=true;break}}else{if(o.nodeType===1||o.nodeType===3&&o.textContent.trim()!==""){i.hidden=true;break}}}}}Yr(i)}}};var Zr=[];var re=function(r){var e;var n;var t;for(var i=0,a=r.childNodes;i<a.length;i++){var f=a[i];if(f["s-sr"]&&(e=f["s-cr"])&&e.parentNode){n=e.parentNode.childNodes;var u=f["s-sn"];var o=function(){e=n[t];if(!e["s-cn"]&&!e["s-nr"]&&e["s-hn"]!==f["s-hn"]&&(!e["s-sh"]||e["s-sh"]!==f["s-hn"])){if(ee(e,u)){var r=Zr.find((function(r){return r.W===e}));Ur=true;e["s-sn"]=e["s-sn"]||u;if(r){r.W["s-sh"]=f["s-hn"];r.I=f}else{e["s-sh"]=f["s-hn"];Zr.push({I:f,W:e})}if(e["s-sr"]){Zr.map((function(n){if(ee(n.W,e["s-sn"])){r=Zr.find((function(r){return r.W===e}));if(r&&!n.I){n.I=r.I}}}))}}else if(!Zr.some((function(r){return r.W===e}))){Zr.push({W:e})}}};for(t=n.length-1;t>=0;t--){o()}}if(f.nodeType===1){re(f)}}};var ee=function(r,e){if(r.nodeType===1){if(r.getAttribute("slot")===null&&e===""){return true}if(r.getAttribute("slot")===e){return true}return false}if(r["s-sn"]===e){return true}return e===""};var ne=function(r){{r.j&&r.j.ref&&r.j.ref(null);r.k&&r.k.map(ne)}};var te=function(r,e,n){var t=r==null?void 0:r.insertBefore(e,n);{ae(e,r)}return t};var ie=function(r){var e=[];if(r){e.push.apply(e,__spreadArray(__spreadArray(__spreadArray([],r["s-scs"]||[],false),[r["s-si"],r["s-sc"]],false),ie(r.parentElement),false))}return e};var ae=function(r,e,n){if(n===void 0){n=false}var t;if(r&&e&&r.nodeType===1){var i=new Set(ie(e).filter(Boolean));if(i.size){(t=r.classList)==null?void 0:t.add.apply(t,r["s-scs"]=__spreadArray([],i,true));if(r["s-ol"]||n){for(var a=0,f=Array.from(r.childNodes);a<f.length;a++){var u=f[a];ae(u,r,true)}}}}};var fe=function(r,e,n){if(n===void 0){n=false}var t,i,a,f,u;var o=r.$hostElement$;var l=r.u;var v=r.D||ur(null,null);var s=lr(e)?e:fr(null,null,e);Nr=o.tagName;if(l.B){s.j=s.j||{};l.B.map((function(r){var e=r[0],n=r[1];return s.j[n]=o[e]}))}if(n&&s.j){for(var c=0,d=Object.keys(s.j);c<d.length;c++){var h=d[c];if(o.hasAttribute(h)&&!["key","ref","style","class"].includes(h)){s.j[h]=o[h]}}}s.C=null;s.i|=4;r.D=s;s.T=v.T=o.shadowRoot||o;{Mr=o["s-sc"]}Pr=(l.i&1)!==0;{Fr=o["s-cr"];Ur=false}Jr(v,s,n);{E.i|=1;if(Wr){re(s.T);for(var p=0,m=Zr;p<m.length;p++){var y=m[p];var w=y.W;if(!w["s-ol"]){var b=C.createTextNode("");b["s-nr"]=w;te(w.parentNode,w["s-ol"]=b,w)}}for(var $=0,g=Zr;$<g.length;$++){var y=g[$];var w=y.W;var _=y.I;if(_){var S=_.parentNode;var j=_.nextSibling;if(j&&j.nodeType===1){var b=(t=w["s-ol"])==null?void 0:t.previousSibling;while(b){var k=(i=b["s-nr"])!=null?i:null;if(k&&k["s-sn"]===w["s-sn"]&&S===k.parentNode){k=k.nextSibling;while(k===w||(k==null?void 0:k["s-sr"])){k=k==null?void 0:k.nextSibling}if(!k||!k["s-nr"]){j=k;break}}b=b.previousSibling}}if(!j&&S!==w.parentNode||w.nextSibling!==j){if(w!==j){te(S,w,j);if(w.nodeType===1){w.hidden=(a=w["s-ih"])!=null?a:false}}}w&&typeof _["s-rf"]==="function"&&_["s-rf"](w)}else{if(w.nodeType===1){if(n){w["s-ih"]=(f=w.hidden)!=null?f:false}w.hidden=true}}}}if(Ur){Yr(s.T)}E.i&=~1;Zr.length=0}if(l.i&2){for(var x=0,A=s.T.childNodes;x<A.length;x++){var O=A[x];if(O["s-hn"]!==Nr&&!O["s-sh"]){if(n&&O["s-ih"]==null){O["s-ih"]=(u=O.hidden)!=null?u:false}O.hidden=true}}}Fr=void 0};var ue=function(r,e){if(e&&!r.H&&e["s-p"]){e["s-p"].push(new Promise((function(e){return r.H=e})))}};var oe=function(r,e){{r.i|=16}if(r.i&4){r.i|=512;return}ue(r,r.G);var n=function(){return le(r,e)};return z(n)};var le=function(r,e){var n=r.$hostElement$;var t=ir("scheduleUpdate",r.u.m);var i=r.t;if(!i){throw new Error("Can't render component <".concat(n.tagName.toLowerCase()," /> with invalid Stencil runtime! Make sure this imported component is compiled with a `externalRuntime: true` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime"))}var a;if(e){{r.i|=256;if(r.q){r.q.map((function(r){var e=r[0],n=r[1];return ye(i,e,n)}));r.q=void 0}}{a=ye(i,"componentWillLoad")}}{a=ve(a,(function(){return ye(i,"componentWillRender")}))}t();return ve(a,(function(){return ce(r,i,e)}))};var ve=function(r,e){return se(r)?r.then(e).catch((function(r){console.error(r);e()})):e()};var se=function(r){return r instanceof Promise||r&&r.then&&typeof r.then==="function"};var ce=function(r,e,t){return __awaiter(n,void 0,void 0,(function(){var n,i,a,f,u,o,l;return __generator(this,(function(v){i=r.$hostElement$;a=ir("update",r.u.m);f=i["s-rc"];if(t){xr(r)}u=ir("render",r.u.m);{de(r,e,i,t)}if(f){f.map((function(r){return r()}));i["s-rc"]=void 0}u();a();{o=(n=i["s-p"])!=null?n:[];l=function(){return he(r)};if(o.length===0){l()}else{Promise.all(o).then(l);r.i|=4;o.length=0}}return[2]}))}))};var de=function(r,e,n,t){try{e=e.render&&e.render();{r.i&=~16}{r.i|=2}{{{fe(r,e,t)}}}}catch(e){d(e,r.$hostElement$)}return null};var he=function(r){var e=r.u.m;var n=r.$hostElement$;var t=ir("postUpdate",e);var i=r.t;var a=r.G;{ye(i,"componentDidRender")}if(!(r.i&64)){r.i|=64;{we(n)}{ye(i,"componentDidLoad")}t();{r.p(n);if(!a){me()}}}else{{ye(i,"componentDidUpdate")}t()}{r.v(n)}{if(r.H){r.H();r.H=void 0}if(r.i&512){B((function(){return oe(r,false)}))}r.i&=~(4|512)}};var pe=r("i",(function(r){{var e=l(r);var n=e.$hostElement$.isConnected;if(n&&(e.i&(2|16))===2){oe(e,false)}return n}}));var me=function(r){{we(C.documentElement)}B((function(){return _r(O,"appload",{detail:{namespace:t}})}))};var ye=function(r,e,n){if(r&&r[e]){try{return r[e](n)}catch(r){d(r)}}return void 0};var we=function(r){var e;return r.classList.add((e=i.hydratedSelectorName)!=null?e:"hydrated")};var be=function(r,e){return l(r).o.get(e)};var $e=function(r,e,n,t){var i=l(r);if(!i){throw new Error("Couldn't find host element for \"".concat(t.m,'" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).'))}var a=i.$hostElement$;var f=i.o.get(e);var u=i.i;var o=i.t;n=br(n,t.K[e][0]);var v=Number.isNaN(f)&&Number.isNaN(n);var s=n!==f&&!v;if((!(u&8)||f===void 0)&&s){i.o.set(e,n);if(o){if(t.V&&u&128){var c=t.V[e];if(c){c.map((function(r){try{o[r](n,f,e)}catch(r){d(r,a)}}))}}if((u&(2|16))===2){oe(i,false)}}}};var ge=function(r,e,n){var t,i;var a=r.prototype;if(e.K||(e.V||r.watchers)){if(r.watchers&&!e.V){e.V=r.watchers}var f=Object.entries((t=e.K)!=null?t:{});f.map((function(r){var t=r[0],i=r[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return be(this,t)},set:function(r){$e(this,t,r,e)},configurable:true,enumerable:true})}else if(n&1&&i&64){Object.defineProperty(a,t,{value:function(){var r=[];for(var e=0;e<arguments.length;e++){r[e]=arguments[e]}var n;var i=l(this);return(n=i==null?void 0:i.l)==null?void 0:n.then((function(){var e;return(e=i.t)==null?void 0:e[t].apply(e,r)}))}})}}));if(n&1){var u=new Map;a.attributeChangedCallback=function(r,n,t){var i=this;E.jmp((function(){var f;var o=u.get(r);if(i.hasOwnProperty(o)){t=i[o];delete i[o]}else if(a.hasOwnProperty(o)&&typeof i[o]==="number"&&i[o]==t){return}else if(o==null){var v=l(i);var s=v==null?void 0:v.i;if(s&&!(s&8)&&s&128&&t!==n){var c=v.t;var d=(f=e.V)==null?void 0:f[r];d==null?void 0:d.forEach((function(e){if(c[e]!=null){c[e].call(c,t,n,r)}}))}return}i[o]=t===null&&typeof i[o]==="boolean"?false:t}))};r.observedAttributes=Array.from(new Set(__spreadArray(__spreadArray([],Object.keys((i=e.V)!=null?i:{}),true),f.filter((function(r){var e=r[0],n=r[1];return n[0]&15})).map((function(r){var n=r[0],t=r[1];var i;var a=t[1]||n;u.set(a,n);if(t[0]&512){(i=e.B)==null?void 0:i.push([n,a])}return a})),true)))}}return r};var _e=function(r,e,t,i){return __awaiter(n,void 0,void 0,(function(){var n,i,a,f,u,o,l,v,s,c,h;return __generator(this,(function(y){switch(y.label){case 0:if(!((e.i&32)===0))return[3,6];e.i|=32;i=t.$;if(!i)return[3,4];a=p(t);if(!(a&&"then"in a))return[3,2];f=ar();return[4,a];case 1:n=y.sent();f();return[3,3];case 2:n=a;y.label=3;case 3:if(!n){throw new Error('Constructor for "'.concat(t.m,"#").concat(e.P,'" was not found'))}if(!n.isProxied){{t.V=n.watchers}ge(n,t,2);n.isProxied=true}u=ir("createInstance",t.m);{e.i|=8}try{new n(e)}catch(r){d(r)}{e.i&=~8}{e.i|=128}u();Se(e.t);return[3,5];case 4:n=r.constructor;o=r.localName;customElements.whenDefined(o).then((function(){return e.i|=128}));y.label=5;case 5:if(n&&n.style){l=void 0;if(typeof n.style==="string"){l=n.style}else if(typeof n.style!=="string"){e.P=mr(r);if(e.P){l=n.style[e.P]}}v=Ar(t,e.P);if(!m.has(v)){s=ir("registerStyles",t.m);jr(v,l,!!(t.i&1));s()}}y.label=6;case 6:c=e.G;h=function(){return oe(e,true)};if(c&&c["s-rc"]){c["s-rc"].push(h)}else{h()}return[2]}}))}))};var Se=function(r){{ye(r,"connectedCallback")}};var je=function(r){if((E.i&1)===0){var e=l(r);var n=e.u;var t=ir("connectedCallback",n.m);if(!(e.i&1)){e.i|=1;var i=void 0;{i=r.getAttribute(_);if(i){if(n.i&1){var a=kr(r.shadowRoot,n,r.getAttribute("s-mode"));r.classList.remove(a+"-h",a+"-s")}dr(r,n.m,i,e)}}if(!i){if(n.i&(4|8)){ke(r)}}{var f=r;while(f=f.parentNode||f.host){if(f.nodeType===1&&f.hasAttribute("s-id")&&f["s-p"]||f["s-p"]){ue(e,e.G=f);break}}}if(n.K){Object.entries(n.K).map((function(e){var n=e[0],t=e[1][0];if(t&31&&r.hasOwnProperty(n)){var i=r[n];delete r[n];r[n]=i}}))}{_e(r,e,n)}}else{ze(r,e,n.X);if(e==null?void 0:e.t){Se(e.t)}else if(e==null?void 0:e.h){e.h.then((function(){return Se(e.t)}))}}t()}};var ke=function(r){var e=r["s-cr"]=C.createComment("");e["s-cn"]=true;te(r,e,r.firstChild)};var xe=function(r){{ye(r,"disconnectedCallback")}};var Ae=function(r){return __awaiter(n,void 0,void 0,(function(){var e;return __generator(this,(function(n){if((E.i&1)===0){e=l(r);{if(e.J){e.J.map((function(r){return r()}));e.J=void 0}}if(e==null?void 0:e.t){xe(e.t)}else if(e==null?void 0:e.h){e.h.then((function(){return xe(e.t)}))}}return[2]}))}))};var Oe=function(r,e){Ce(r);Te(r);Re(r);De(r);Fe(r);Le(r);Me(r);Ne(r);Pe(r,e);Ee(r)};var Ce=function(r){var e=r.cloneNode;r.cloneNode=function(r){var n=this;var t=n.shadowRoot&&D;var i=e.call(n,t?r:false);if(!t&&r){var a=0;var f=void 0,u=void 0;var o=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si","s-rf","s-scs"];for(;a<n.childNodes.length;a++){f=n.childNodes[a]["s-nr"];u=o.every((function(r){return!n.childNodes[a][r]}));if(f){if(i.__appendChild){i.__appendChild(f.cloneNode(true))}else{i.appendChild(f.cloneNode(true))}}if(u){i.appendChild(n.childNodes[a].cloneNode(true))}}}return i}};var Te=function(r){r.__appendChild=r.appendChild;r.appendChild=function(r){var e=r["s-sn"]=We(r);var n=Ie(this.childNodes,e,this.tagName);if(n){var t=Be(n,e);var i=t[t.length-1];var a=te(i.parentNode,r,i.nextSibling);Yr(this);return a}return this.__appendChild(r)}};var Ee=function(r){r.__removeChild=r.removeChild;r.removeChild=function(r){if(r&&typeof r["s-sn"]!=="undefined"){var e=Ie(this.childNodes,r["s-sn"],this.tagName);if(e){var n=Be(e,r["s-sn"]);var t=n.find((function(e){return e===r}));if(t){t.remove();Yr(this);return}}}return this.__removeChild(r)}};var De=function(r){var e=r.prepend;r.prepend=function(){var r=this;var n=[];for(var t=0;t<arguments.length;t++){n[t]=arguments[t]}n.forEach((function(n){if(typeof n==="string"){n=r.ownerDocument.createTextNode(n)}var t=n["s-sn"]=We(n);var i=Ie(r.childNodes,t,r.tagName);if(i){var a=document.createTextNode("");a["s-nr"]=n;i["s-cr"].parentNode.__appendChild(a);n["s-ol"]=a;var f=Be(i,t);var u=f[0];return te(u.parentNode,n,u.nextSibling)}if(n.nodeType===1&&!!n.getAttribute("slot")){n.hidden=true}return e.call(r,n)}))}};var Re=function(r){r.append=function(){var r=this;var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}e.forEach((function(e){if(typeof e==="string"){e=r.ownerDocument.createTextNode(e)}r.appendChild(e)}))}};var Le=function(r){var e=r.insertAdjacentHTML;r.insertAdjacentHTML=function(r,n){if(r!=="afterbegin"&&r!=="beforeend"){return e.call(this,r,n)}var t=this.ownerDocument.createElement("_");var i;t.innerHTML=n;if(r==="afterbegin"){while(i=t.firstChild){this.prepend(i)}}else if(r==="beforeend"){while(i=t.firstChild){this.append(i)}}}};var Me=function(r){r.insertAdjacentText=function(r,e){this.insertAdjacentHTML(r,e)}};var Fe=function(r){var e=r.insertAdjacentElement;r.insertAdjacentElement=function(r,n){if(r!=="afterbegin"&&r!=="beforeend"){return e.call(this,r,n)}if(r==="afterbegin"){this.prepend(n);return n}else if(r==="beforeend"){this.append(n);return n}return n}};var Ne=function(r){var e=Object.getOwnPropertyDescriptor(Node.prototype,"textContent");Object.defineProperty(r,"__textContent",e);{Object.defineProperty(r,"textContent",{get:function(){var r=Ue(this.childNodes);var e=r.map((function(r){var e,n;var t=[];var i=r.nextSibling;while(i&&i["s-sn"]===r["s-sn"]){if(i.nodeType===3||i.nodeType===1){t.push((n=(e=i.textContent)==null?void 0:e.trim())!=null?n:"")}i=i.nextSibling}return t.filter((function(r){return r!==""})).join(" ")})).filter((function(r){return r!==""})).join(" ");return" "+e+" "},set:function(r){var e=this;var n=Ue(this.childNodes);n.forEach((function(n){var t=n.nextSibling;while(t&&t["s-sn"]===n["s-sn"]){var i=t;t=t.nextSibling;i.remove()}if(n["s-sn"]===""){var a=e.ownerDocument.createTextNode(r);a["s-sn"]="";te(n.parentElement,a,n.nextSibling)}else{n.remove()}}))}})}};var Pe=function(r,e){var n=function(r){__extends(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}e.prototype.item=function(r){return this[r]};return e}(Array);if(e.i&8){var t=r.__lookupGetter__("childNodes");Object.defineProperty(r,"children",{get:function(){return this.childNodes.map((function(r){return r.nodeType===1}))}});Object.defineProperty(r,"childElementCount",{get:function(){return r.children.length}});Object.defineProperty(r,"childNodes",{get:function(){var r=t.call(this);if((E.i&1)===0&&l(this).i&2){var e=new n;for(var i=0;i<r.length;i++){var a=r[i]["s-nr"];if(a){e.push(a)}}return e}return n.from(r)}})}};var Ue=function(r){var e=[];for(var n=0,t=Array.from(r);n<t.length;n++){var i=t[n];if(i["s-sr"]){e.push(i)}e.push.apply(e,Ue(i.childNodes))}return e};var We=function(r){return r["s-sn"]||r.nodeType===1&&r.getAttribute("slot")||""};var Ie=function(r,e,n){var t=0;var i;for(;t<r.length;t++){i=r[t];if(i["s-sr"]&&i["s-sn"]===e&&i["s-hn"]===n){return i}i=Ie(i.childNodes,e,n);if(i){return i}}return null};var Be=function(r,e){var n=[r];while((r=r.nextSibling)&&r["s-sn"]===e){n.push(r)}return n};var He=r("b",(function(r,e){if(e===void 0){e={}}var n;var t=ir();var i=[];var a=e.exclude||[];var f=O.customElements;var u=C.head;var o=u.querySelector("meta[charset]");var v=C.createElement("style");var c=[];var d;var h=true;Object.assign(E,e);E._=new URL(e.resourcesUrl||"./",C.baseURI).href;{E.i|=2}var p=false;r.map((function(r){r[1].map((function(e){var n;var t={i:e[0],m:e[1],K:e[2],X:e[3]};if(t.i&4){p=true}{t.K=e[2]}{t.X=e[3]}{t.B=[]}{t.V=(n=e[4])!=null?n:{}}var u=t.m;var o=function(r){__extends(e,r);function e(e){var n=r.call(this,e)||this;n.hasRegisteredEventListeners=false;e=n;s(e,t);if(t.i&1){{if(!e.shadowRoot){{e.attachShadow({mode:"open",delegatesFocus:!!(t.i&16)})}}else{if(e.shadowRoot.mode!=="open"){throw new Error("Unable to re-use existing shadow root for ".concat(t.m,"! Mode is set to ").concat(e.shadowRoot.mode," but Stencil only supports open shadow roots."))}}}}return n}e.prototype.connectedCallback=function(){var r=this;var e=l(this);if(!this.hasRegisteredEventListeners){this.hasRegisteredEventListeners=true;ze(this,e,t.X)}if(d){clearTimeout(d);d=null}if(h){c.push(this)}else{E.jmp((function(){return je(r)}))}};e.prototype.disconnectedCallback=function(){var r=this;E.jmp((function(){return Ae(r)}))};e.prototype.componentOnReady=function(){return l(this).h};return e}(HTMLElement);{if(t.i&2){Oe(o.prototype,t)}}t.$=r[0];if(!a.includes(u)&&!f.get(u)){i.push(u);f.define(u,ge(o,t,1))}}))}));if(i.length>0){if(p){v.textContent+=x}{v.textContent+=i.sort()+k}if(v.innerHTML.length){v.setAttribute("data-styles","");var m=(n=E.U)!=null?n:J(C);if(m!=null){v.setAttribute("nonce",m)}u.insertBefore(v,o?o.nextSibling:u.firstChild)}}h=false;if(c.length){c.map((function(r){return r.connectedCallback()}))}else{{E.jmp((function(){return d=setTimeout(me,30)}))}}t()}));var ze=function(r,e,n,t){if(n){n.map((function(n){var t=n[0],i=n[1],a=n[2];var f=Qe(r,t);var u=Ge(e,a);var o=qe(t);E.ael(f,i,u,o);(e.J=e.J||[]).push((function(){return E.rel(f,i,u,o)}))}))}};var Ge=function(r,e){return function(n){var t;try{{if(r.i&256){(t=r.t)==null?void 0:t[e](n)}else{(r.q=r.q||[]).push([e,n])}}}catch(r){d(r)}}};var Qe=function(r,e){if(e&4)return C;if(e&8)return O;if(e&16)return C.body;return r};var qe=function(r){return R?{passive:(r&1)!==0,capture:(r&2)!==0}:(r&2)!==0};var Ke=r("s",(function(r){return E.U=r}))}}}));