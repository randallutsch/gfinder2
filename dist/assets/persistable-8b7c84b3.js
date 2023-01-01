import{_ as N}from"./preload-helper-596b5639.js";import{i as _}from"./multiOriginJSONSupportUtils-c978f4c3.js";import{l as v,K as O,V as h,G as R}from"./request-0ae6f728.js";import{n as S}from"./uuid-73213768.js";import{d as z,S as $,J as F}from"./cast-34ff1fab.js";import{p as J,m as y,R as A,U as B,d as E,x as K}from"./persistableUrlUtils-94eb42ca.js";function f(e){return d[T(e)]||k}function T(e){return e instanceof Blob?e.type:V(e.url)}function V(e){const r=v(e);return g[r]||x}const d={},x="text/plain",k=d[x],g={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const e in g)d[g[e]]=e;function te(e){const r=(e==null?void 0:e.origins)??[void 0];return(o,i)=>{const n=D(e,o,i);for(const s of r){const a=z(o,s,i);for(const t in n)a[t]=n[t]}}}function D(e,r,o){if((e==null?void 0:e.type)==="resource")return G(e,r,o);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:i,write:n}=K;return{read:i,write:n}}}}function G(e,r,o){const i=$(r,o);return{type:String,read:(n,s,a)=>{const t=J(n,s,a);return i.type===String?t:typeof i.type=="function"?new i.type({url:t}):void 0},write:{writer(n,s,a,t){if(!t||!t.resources)return typeof n=="string"?void(s[a]=y(n,t)):void(s[a]=n.write({},t));const m=H(n),p=y(m,{...t,verifyItemRelativeUrls:t&&t.verifyItemRelativeUrls?{writtenUrls:t.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},A.NO),u=i.type!==String&&(!_(this)||t&&t.origin&&this.originIdOf(o)>F(t.origin)),c={object:this,propertyName:o,value:n,targetUrl:p,dest:s,targetPropertyName:a,context:t,params:e};t&&t.portalItem&&p&&!O(p)?u?L(c):q(c):t&&t.portalItem&&(p==null||B(p)!=null||h(p)||u)?U(c):s[a]=p}}}}function U(e){const{targetUrl:r,params:o,value:i,context:n,dest:s,targetPropertyName:a}=e;if(!n.portalItem)return;const t=E(r),m=(t==null?void 0:t.filename)??S(),p=(o==null?void 0:o.prefix)??(t==null?void 0:t.prefix),u=I(i,r,n),c=R(p,m),b=`${c}.${f(u)}`,l=n.portalItem.resourceFromPath(b);h(r)&&n.resources&&n.resources.pendingOperations.push(C(r).then(j=>{l.path=`${c}.${f(j)}`,s[a]=l.itemRelativeUrl}).catch(()=>{}));const P=(o==null?void 0:o.compress)??!1;n.resources&&w({...e,resource:l,content:u,compress:P,updates:n.resources.toAdd}),s[a]=l.itemRelativeUrl}function L(e){const{context:r,targetUrl:o,params:i,value:n,dest:s,targetPropertyName:a}=e;if(!r.portalItem)return;const t=r.portalItem.resourceFromPath(o),m=I(n,o,r),p=f(m),u=v(t.path),c=(i==null?void 0:i.compress)??!1;p===u?(r.resources&&w({...e,resource:t,content:m,compress:c,updates:r.resources.toUpdate}),s[a]=o):U(e)}function q({context:e,targetUrl:r,dest:o,targetPropertyName:i}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(r),compress:!1}),o[i]=r)}function w({object:e,propertyName:r,updates:o,resource:i,content:n,compress:s}){o.push({resource:i,content:n,compress:s,finish:a=>{M(e,r,a)}})}function I(e,r,o){return typeof e=="string"?{url:r}:new Blob([JSON.stringify(e.toJSON(o))],{type:"application/json"})}async function C(e){const r=(await N(()=>import("./request-0ae6f728.js").then(i=>i.w),["assets/request-0ae6f728.js","assets/preload-helper-596b5639.js","assets/Error-e5869661.js","assets/string-46813dd9.js","assets/typedArrayUtil-6bfe4dae.js","assets/promiseUtils-281d25c9.js"])).default,{data:o}=await r(e,{responseType:"blob"});return o}function H(e){return e==null?null:typeof e=="string"?e:e.url}function M(e,r,o){typeof e[r]=="string"?e[r]=o.url:e[r].url=o.url}export{te as g};
