import{r as w,c as k,g as F,k as $,l as S,m as M,n as N,v as x,y as E,A as z,w as C,i as W}from"./typedArrayUtil-4015bf74.js";let d;function o(e){return typeof d[e]=="function"?d[e]=d[e](globalThis):d[e]}var y,g,b,m;d=(y=globalThis.dojoConfig)!=null&&y.has||(g=globalThis.esriConfig)!=null&&g.has?{...(b=globalThis.dojoConfig)==null?void 0:b.has,...(m=globalThis.esriConfig)==null?void 0:m.has}:{},o.add=(e,r,a,t)=>((t||d[e]===void 0)&&(d[e]=r),a&&o(e)),o.cache=d,o.add("esri-deprecation-warnings",!0),(()=>{var r;o.add("host-webworker",globalThis.WorkerGlobalScope!==void 0&&self instanceof globalThis.WorkerGlobalScope);const e=typeof window<"u"&&typeof location<"u"&&typeof document<"u"&&window.location===location&&window.document===document;if(o.add("host-browser",e),o.add("host-node",typeof globalThis.process=="object"&&((r=globalThis.process.versions)==null?void 0:r.node)&&globalThis.process.versions.v8),o.add("dom",e),o("host-browser")){const a=navigator,t=a.userAgent,n=a.appVersion,i=parseFloat(n);if(o.add("wp",parseFloat(t.split("Windows Phone")[1])||void 0),o.add("msapp",parseFloat(t.split("MSAppHost/")[1])||void 0),o.add("khtml",n.includes("Konqueror")?i:void 0),o.add("edge",parseFloat(t.split("Edge/")[1])||void 0),o.add("opr",parseFloat(t.split("OPR/")[1])||void 0),o.add("webkit",!o("wp")&&!o("edge")&&parseFloat(t.split("WebKit/")[1])||void 0),o.add("chrome",!o("edge")&&!o("opr")&&parseFloat(t.split("Chrome/")[1])||void 0),o.add("android",!o("wp")&&parseFloat(t.split("Android ")[1])||void 0),o.add("safari",!n.includes("Safari")||o("wp")||o("chrome")||o("android")||o("edge")||o("opr")?void 0:parseFloat(n.split("Version/")[1])),o.add("mac",n.includes("Macintosh")),!o("wp")&&t.match(/(iPhone|iPod|iPad)/)){const s=RegExp.$1.replace(/P/,"p"),l=t.match(/OS ([\d_]+)/)?RegExp.$1:"1",f=parseFloat(l.replace(/_/,".").replace(/_/g,""));o.add(s,f),o.add("ios",f)}o.add("trident",parseFloat(n.split("Trident/")[1])||void 0),o("webkit")||(!t.includes("Gecko")||o("wp")||o("khtml")||o("trident")||o("edge")||o.add("mozilla",i),o("mozilla")&&o.add("ff",parseFloat(t.split("Firefox/")[1]||t.split("Minefield/")[1])||void 0))}})(),(()=>{if(globalThis.navigator){const e=navigator.userAgent,r=/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(e),a=/iPhone/i.test(e);r&&o.add("esri-mobile",r),a&&o.add("esri-iPhone",a),o.add("esri-geolocation",!!navigator.geolocation)}o.add("esri-canvas-svg-support",!o("trident")),o.add("esri-wasm","WebAssembly"in globalThis),o.add("esri-shared-array-buffer",()=>{const e="SharedArrayBuffer"in globalThis,r=globalThis.crossOriginIsolated===!1;return e&&!r}),o.add("wasm-simd",()=>{const e=[0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11];return WebAssembly.validate(new Uint8Array(e))}),o.add("esri-atomics","Atomics"in globalThis),o.add("esri-workers","Worker"in globalThis),o.add("web-feat:cache","caches"in globalThis),o.add("esri-workers-arraybuffer-transfer",!o("safari")||Number(o("safari"))>=12),o.add("featurelayer-simplify-thresholds",[.5,.5,.5,.5]),o.add("featurelayer-simplify-payload-size-factors",[1,1,4]),o.add("featurelayer-snapshot-enabled",!0),o.add("featurelayer-snapshot-point-min-threshold",8e4),o.add("featurelayer-snapshot-point-max-threshold",4e5),o.add("featurelayer-snapshot-point-coverage",.1),o.add("featurelayer-advanced-symbols",!1),o.add("featurelayer-pbf",!0),o.add("featurelayer-pbf-statistics",!1),o.add("feature-layers-workers",!0),o.add("feature-polyline-generalization-factor",1),o.add("mapview-transitions-duration",200),o.add("mapview-srswitch-adjust-rotation-scale-threshold",24e6),o.add("mapserver-pbf-enabled",!1),o.add("mapimagelayer-popup-identify-max-tolerance",20),o.add("heatmap-allow-raster-fallback",!0),o.add("heatmap-force-raster",!1),o("host-webworker")||o("host-browser")&&(o.add("esri-csp-restrictions",()=>{try{new Function}catch{return!0}return!1}),o.add("esri-image-decode",()=>{if("decode"in new Image){const e=new Image;return e.src='data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>',void e.decode().then(()=>{o.add("esri-image-decode",!0,!0,!0)}).catch(()=>{o.add("esri-image-decode",!1,!0,!0)})}return!1}),o.add("esri-url-encodes-apostrophe",()=>{const e=window.document.createElement("a");return e.href="?'",e.href.includes("?%27")}))})();function D(e,r){let a;if(r)for(a in e)e.hasOwnProperty(a)&&(e[a]===void 0?delete e[a]:e[a]instanceof Object&&D(e[a],!0));else for(a in e)e.hasOwnProperty(a)&&e[a]===void 0&&delete e[a];return e}function c(e){if(!e||typeof e!="object"||typeof e=="function")return e;const r=A(e);if(w(r))return r;if(v(e))return e.clone();if(T(e))return e.map(c);if(O(e))return e.clone();const a={};for(const t of Object.getOwnPropertyNames(e))a[t]=c(e[t]);return a}function u(e){if(!e||typeof e!="object"||typeof e=="function"||"HTMLElement"in globalThis&&e instanceof HTMLElement)return e;const r=A(e);if(w(r))return r;if(T(e)){let a=!0;const t=e.map(n=>{const i=u(n);return n!=null&&i==null&&(a=!1),i});return a?t:null}if(v(e))return e.clone();if(!O(e)){const a=new(Object.getPrototypeOf(e)).constructor;for(const t of Object.getOwnPropertyNames(e)){const n=e[t],i=u(n);if(n!=null&&i==null)return null;a[t]=i}return a}return null}function v(e){return typeof e.clone=="function"}function T(e){return typeof e.map=="function"&&typeof e.forEach=="function"}function O(e){return typeof e.notifyChange=="function"&&typeof e.watch=="function"}function p(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;const r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}function A(e){if(k(e)||F(e)||$(e)||S(e)||M(e)||N(e)||x(e)||E(e)||z(e))return C(e);if(e instanceof Date)return new Date(e.getTime());if(e instanceof ArrayBuffer)return e.slice(0,e.byteLength);if(e instanceof Map){const r=new Map;for(const[a,t]of e)r.set(a,c(t));return r}if(e instanceof Set){const r=new Set;for(const a of e)r.add(c(a));return r}return null}function _(e,r){return e===r||typeof e=="number"&&isNaN(e)&&typeof r=="number"&&isNaN(r)||typeof(e||{}).getTime=="function"&&typeof(r||{}).getTime=="function"&&e.getTime()===r.getTime()||!1}function K(e,r){return e===r||(e==null||typeof e=="string"?e===r:typeof e=="number"?e===r||typeof r=="number"&&isNaN(e)&&isNaN(r):e instanceof Date?r instanceof Date&&e.getTime()===r.getTime():Array.isArray(e)?Array.isArray(r)&&W(e,r):e instanceof Set?r instanceof Set&&I(e,r):e instanceof Map?r instanceof Map&&G(e,r):!!p(e)&&p(r)&&B(e,r))}function B(e,r){if(e===null||r===null)return!1;const a=Object.keys(e);if(r===null||Object.keys(r).length!==a.length)return!1;for(const t of a)if(e[t]!==r[t]||!Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function I(e,r){if(e.size!==r.size)return!1;for(const a of e)if(!r.has(a))return!1;return!0}function G(e,r){if(e.size!==r.size)return!1;for(const[a,t]of e){const n=r.get(a);if(n!==t||n===void 0&&!r.has(a))return!1}return!0}function U(e,r,a=!1){return P(e,r,a)}function H(e,r){if(r!=null)return r[e]||j(e.split("."),!1,r)}function V(e,r,a){const t=e.split("."),n=t.pop(),i=j(t,!0,a);i&&n&&(i[n]=r)}function j(e,r,a){let t=a;for(const n of e){if(t==null)return;if(!(n in t)){if(!r)return;t[n]={}}t=t[n]}return t}function P(e,r,a){return r?Object.keys(r).reduce((t,n)=>{let i=t[n],s=r[n];return i===s?t:i===void 0?(t[n]=c(s),t):(Array.isArray(s)||Array.isArray(t)?(i=i?Array.isArray(i)?t[n]=i.concat():t[n]=[i]:t[n]=[],s&&(Array.isArray(s)||(s=[s]),a?s.forEach(l=>{i.includes(l)||i.push(l)}):t[n]=s.concat())):s&&typeof s=="object"?t[n]=P(i,s,a):t.hasOwnProperty(n)&&!r.hasOwnProperty(n)||(t[n]=s),t)},e||{}):e}const L=/\{([^\}]+)\}/g;function h(e){return e??""}function q(e,r){return e.replace(L,typeof r=="object"?(a,t)=>h(H(t,r)):(a,t)=>h(r(t)))}function J(e,r){return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,a=>r&&r.includes(a)?a:`\\${a}`)}function Q(e){let r=0;for(let a=0;a<e.length;a++)r=(r<<5)-r+e.charCodeAt(a),r|=0;return r}function X(e){return new DOMParser().parseFromString(e||"","text/html").body.innerText||""}export{K as N,U as a,J as b,Q as c,o as h,u as m,q as n,V as o,D as p,H as t,X as u,_ as w,c as y};
