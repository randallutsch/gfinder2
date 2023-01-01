import{G as n,l as v,U as R}from"./request-3bbdab19.js";import{a as d}from"./Error-1dfe2922.js";import{q as u,r as m,t as I}from"./typedArrayUtil-4015bf74.js";import"./preload-helper-596b5639.js";import"./string-7d6c8f5c.js";import"./promiseUtils-e323addc.js";async function $(e,t={},a){await e.load(a);const r=n(e.itemUrl,"resources"),{start:o=1,num:c=10,sortOrder:i="asc",sortField:l="created"}=t,p={query:{start:o,num:c,sortOrder:i,sortField:l,token:e.apiKey},signal:u(a,"signal")},s=await e.portal._request(r,p);return{total:s.total,nextStart:s.nextStart,resources:s.resources.map(({created:w,size:g,resource:y})=>({created:new Date(w),size:g,resource:e.resourceFromPath(y)}))}}async function T(e,t,a,r){if(!e.hasPath())throw new d(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const o=e.portalItem;await o.load(r);const c=n(o.userItemUrl,t==="add"?"addResources":"updateResources"),[i,l]=f(e.path),p=await q(a),s=new FormData;return i&&i!=="."&&s.append("resourcesPrefix",i),m(r)&&r.compress&&s.append("compress","true"),s.append("fileName",l),s.append("file",p,l),s.append("f","json"),m(r)&&r.access&&s.append("access",r.access),await o.portal._request(c,{method:"post",body:s,signal:u(r,"signal")}),e}async function _(e,t,a){if(!t.hasPath())throw new d("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(a);const r=n(e.userItemUrl,"removeResources");await e.portal._request(r,{method:"post",query:{resource:t.path},signal:u(a,"signal")}),t.portalItem=null}async function A(e,t){await e.load(t);const a=n(e.userItemUrl,"removeResources");return e.portal._request(a,{method:"post",query:{deleteAll:!0},signal:u(t,"signal")})}function f(e){const t=e.lastIndexOf("/");return t===-1?[".",e]:[e.slice(0,t),e.slice(t+1)]}function h(e){const[t,a]=P(e),[r,o]=f(t);return[r,o,a]}function P(e){const t=v(e);return I(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function q(e){return e instanceof Blob?e:(await R(e.url,{responseType:"blob"})).data}function k(e,t){if(!e.hasPath())return null;const[a,,r]=h(e.path);return e.portalItem.resourceFromPath(n(a,t+r))}function z(e,t){if(!e.hasPath())return null;const[a,,r]=h(e.path);return e.portalItem.resourceFromPath(n(a,t+r))}export{T as addOrUpdateResource,q as contentToBlob,$ as fetchResources,k as getSiblingOfSameType,z as getSiblingOfSameTypeI,A as removeAllResources,_ as removeResource,h as splitPrefixFileNameAndExtension};
