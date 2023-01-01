import{b as k}from"./Error-1dfe2922.js";import{s as h,B as I,U as w}from"./request-3bbdab19.js";import{k as x}from"./PopupTemplate-2917795f.js";import{y as p}from"./string-7d6c8f5c.js";import{k as E}from"./Extent-54ef1174.js";import{a as P,C as S,f as c,S as v}from"./aaBoundingBox-10130714.js";import{f as d}from"./Polyline-d942e774.js";import{t as O}from"./jsonUtils-511fa9a1.js";import $ from"./FeatureSet-daef9679.js";const F={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function R(r){const n=r.folders||[],t=n.slice(),e=new Map,s=new Map,a=new Map,f=new Map,m=new Map,l={esriGeometryPoint:s,esriGeometryPolyline:a,esriGeometryPolygon:f};(r.featureCollection&&r.featureCollection.layers||[]).forEach(o=>{const y=p(o);y.featureSet.features=[];const i=o.featureSet.geometryType;e.set(i,y);const g=o.layerDefinition.objectIdField;i==="esriGeometryPoint"?G(s,g,o.featureSet.features):i==="esriGeometryPolyline"?G(a,g,o.featureSet.features):i==="esriGeometryPolygon"&&G(f,g,o.featureSet.features)}),r.groundOverlays&&r.groundOverlays.forEach(o=>{m.set(o.id,o)}),n.forEach(o=>{o.networkLinkIds.forEach(y=>{const i=C(y,o.id,r.networkLinks);i&&t.push(i)})}),t.forEach(o=>{if(o.featureInfos){o.points=p(e.get("esriGeometryPoint")),o.polylines=p(e.get("esriGeometryPolyline")),o.polygons=p(e.get("esriGeometryPolygon")),o.mapImages=[];for(const y of o.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const i=l[y.type].get(y.id);i&&o[F[y.type]].featureSet.features.push(i);break}case"GroundOverlay":{const i=m.get(y.id);i&&o.mapImages.push(i);break}}o.fullExtent=b([o])}});const u=b(t);return{folders:n,sublayers:t,extent:u}}function q(r,n,t,e){const s=h&&h.findCredential(r);r=I(r,{token:s&&s.token});const a=k.kmlServiceUrl;return w(a,{query:{url:r,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(n)},responseType:"json",signal:e})}function A(r,n,t=null,e=[]){const s=[],a={},f=n.sublayers,m=n.folders.map(l=>l.id);return f.forEach(l=>{const u=new r;if(t?u.read(l,t):u.read(l),e.length&&m.includes(u.id)&&(u.visible=e.includes(u.id)),a[l.id]=u,l.parentFolderId!=null&&l.parentFolderId!==-1){const o=a[l.parentFolderId];o.sublayers||(o.sublayers=[]),o.sublayers.unshift(u)}else s.unshift(u)}),s}function G(r,n,t){t.forEach(e=>{r.set(e.attributes[n],e)})}function M(r,n){let t;return n.some(e=>e.id===r&&(t=e,!0)),t}function C(r,n,t){const e=M(r,t);return e&&(e.parentFolderId=n,e.networkLink=e),e}async function W(r){const n=$.fromJSON(r.featureSet).features,t=r.layerDefinition,e=O(t.drawingInfo.renderer),s=x.fromJSON(r.popupInfo),a=[];for(const f of n){const m=await e.getSymbolAsync(f);f.symbol=m,f.popupTemplate=s,f.visible=!0,a.push(f)}return a}function b(r){const n=P(S),t=P(S);for(const e of r){if(e.polygons&&e.polygons.featureSet&&e.polygons.featureSet.features)for(const s of e.polygons.featureSet.features)d(n,s.geometry),c(t,n);if(e.polylines&&e.polylines.featureSet&&e.polylines.featureSet.features)for(const s of e.polylines.featureSet.features)d(n,s.geometry),c(t,n);if(e.points&&e.points.featureSet&&e.points.featureSet.features)for(const s of e.points.featureSet.features)d(n,s.geometry),c(t,n);if(e.mapImages)for(const s of e.mapImages)d(n,s.extent),c(t,n)}return v(t,S)?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:E.WGS84}}export{A as S,W as b,R as d,q as g,b as j};
