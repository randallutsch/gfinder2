import{_ as g}from"./preload-helper-101896b7.js";import{l as u}from"./Color-7a3d8c62.js";import{c as h,x as p,l as z}from"./symbols-87ca67f4.js";import{c as x}from"./asyncUtils-bd6eb812.js";import"./string-7d6c8f5c.js";import{r as a,t as b,e as w}from"./typedArrayUtil-4015bf74.js";import{l as _}from"./common-701a4199.js";import"./Error-1dfe2922.js";import"./parser-60fed632.js";import"./mat4-62d5e6a4.js";import"./assets-6d4d2dad.js";import"./request-4f5c54dd.js";import{e as v}from"./ItemCache-eb0f81ed.js";new v(1e3);new u([128,128,128]);const L=new u("white");function W(t,o){if(!t)return null;let n=null;return h(t)?n=j(t):p(t)&&(n=t.color?new u(t.color):null),n?f(n,o):null}function j(t){const o=t.symbolLayers;if(!o)return null;let n=null;return o.forEach(r=>{var i;r.type==="object"&&((i=r.resource)==null?void 0:i.href)!=null||(n=r.type==="water"?w(r.color):a(r.material)?w(r.material.color):null)}),n?new u(n):null}function f(t,o){if(o==null||t==null)return t;const n=t.toRgba();return n[3]=n[3]*o,new u(n)}function E(t,o,n){const r=t.symbolLayers;if(!r)return;const i=l=>{const c=a(l)?l:null;return f(o=o??c??(n!=null?L:null),n)};r.forEach(l=>{var c;if(l.type!=="object"||((c=l.resource)==null?void 0:c.href)==null||o)if(l.type==="water")l.color=i(l.color);else{const m=a(l.material)?l.material.color:null,e=i(m);b(l.material)?l.material=new z({color:e}):l.material.color=e,n!=null&&"outline"in l&&a(l.outline)&&a(l.outline.color)&&(l.outline.color=f(l.outline.color,n))}})}function S(t,o,n){(o=o??t.color)&&(t.color=f(o,n)),n!=null&&"outline"in t&&t.outline&&t.outline.color&&(t.outline.color=f(t.outline.color,n))}function X(t,o,n){t&&(o||n!=null)&&(o&&(o=new u(o)),h(t)?E(t,o,n):p(t)&&S(t,o,n))}async function $(t,o){const n=t.symbolLayers;n&&await x(n,async r=>R(r,o))}async function R(t,o){switch(t.type){case"extrude":A(t,o);break;case"icon":case"line":case"text":O(t,o);break;case"path":I(t,o);break;case"object":await D(t,o)}}function O(t,o){const n=d(o);a(n)&&(t.size=n)}function d(t){for(const o of t)if(typeof o=="number")return o;return null}function A(t,o){t.size=typeof o[2]=="number"?o[2]:0}async function D(t,o){const{resourceSize:n,symbolSize:r}=await P(t),i=k(o,n,r);t.width=s(o[0],r[0],n[0],i),t.depth=s(o[1],r[1],n[1],i),t.height=s(o[2],r[2],n[2],i)}function I(t,o){const n=k(o,_,[t.width,void 0,t.height]);t.width=s(o[0],t.width,1,n),t.height=s(o[2],t.height,1,n)}function k(t,o,n){for(let r=0;r<3;r++){const i=t[r];switch(i){case"symbol-value":{const l=n[r];return l!=null?l/o[r]:1}case"proportional":break;default:if(i&&o[r])return i/o[r]}}return 1}async function P(t){const o=await g(()=>import("./symbolLayerUtils-4f18edf1.js"),["assets/symbolLayerUtils-4f18edf1.js","assets/preload-helper-101896b7.js","assets/request-4f5c54dd.js","assets/Error-1dfe2922.js","assets/string-7d6c8f5c.js","assets/typedArrayUtil-4015bf74.js","assets/promiseUtils-e323addc.js","assets/ItemCache-eb0f81ed.js","assets/MemCache-15515535.js","assets/cast-7ef3a066.js","assets/ArrayPool-45db95ab.js","assets/nextTick-3ee5a785.js","assets/aaBoundingBox-10130714.js","assets/Extent-54ef1174.js","assets/mathUtils-daf59e84.js","assets/common-701a4199.js","assets/symbols-87ca67f4.js","assets/CIMSymbol-52d72a23.js","assets/enumeration-cda3949b.js","assets/jsonMap-c8081704.js","assets/fieldUtils-75feb382.js","assets/arcadeOnDemand-797f4f1c.js","assets/geometry-22feb2bb.js","assets/Polyline-d942e774.js","assets/typeUtils-17403a33.js","assets/Symbol-6522d2f3.js","assets/Color-7a3d8c62.js","assets/colorUtils-639f4d25.js","assets/screenUtils-7afeb41c.js","assets/opacityUtils-2c2d0d87.js","assets/persistableUrlUtils-afa98d6c.js","assets/Collection-8f94e599.js","assets/Evented-7dfb249a.js","assets/SimpleObservable-ddf0ceba.js","assets/collectionUtils-07fb1a58.js","assets/Portal-0c20e3a4.js","assets/Loadable-772aaf20.js","assets/Promise-e08b9d4d.js","assets/locale-30120714.js","assets/PortalGroup-100f1bed.js","assets/PortalUser-7acb0e3c.js","assets/Clonable-c315fc8d.js"]),n=await o.computeObjectLayerResourceSize(t,10),{width:r,height:i,depth:l}=t,c=[r,l,i];let m=1;for(let e=0;e<3;e++){const y=c[e];if(y!=null){m=y/n[e];break}}for(let e=0;e<3;e++)c[e]==null&&(c[e]=n[e]*m);return{resourceSize:n,symbolSize:c}}function s(t,o,n,r){switch(t){case"proportional":return n*r;case"symbol-value":return o??n;default:return t}}function C(t,o){const n=d(o);if(!b(n))switch(t.type){case"simple-marker":t.size=n;break;case"picture-marker":{const r=t.width/t.height;r>1?(t.width=n,t.height=n*r):(t.width=n*r,t.height=n);break}case"simple-line":t.width=n;break;case"text":t.font.size=n}}async function Y(t,o){if(t&&o)return h(t)?$(t,o):void(p(t)&&C(t,o))}function Z(t,o,n){if(t&&o!=null)if(h(t)){const r=t.symbolLayers;r&&r.forEach(i=>{if(i&&i.type==="object")switch(n){case"tilt":i.tilt=o;break;case"roll":i.roll=o;break;default:i.heading=o}})}else p(t)&&(t.type!=="simple-marker"&&t.type!=="picture-marker"&&t.type!=="text"||(t.angle=o))}export{Y as M,Z as N,W as j,X as x};
