import{e as o,y as i,n}from"./cast-34ff1fab.js";import{b as a}from"./Error-e5869661.js";import{h as y,U as u}from"./request-c6faf466.js";import{n as d,y as h}from"./symbols-0eeb49ca.js";import{r as c}from"./typedArrayUtil-6bfe4dae.js";import{O as f}from"./MultiOriginJSONSupport-98bacd7d.js";import{w as S}from"./promiseUtils-281d25c9.js";import"./ensureType-abaf235a.js";import{G as v,o as g,a as b}from"./Extent-b8913cd1.js";import{b as C}from"./Layer-685ea357.js";import{n as w}from"./BlendLayer-1dfdcb30.js";import{c as G,j as $,a as _,f as x}from"./OperationalLayer-421969eb.js";import{v as P}from"./PortalLayer-10051047.js";import{p as R}from"./RefreshableLayer-d1776f5f.js";import{t as k}from"./ScaleRangeLayer-d814fce3.js";import{a as m}from"./Symbol-8a110cc7.js";import{m as F,S as j}from"./SimpleFillSymbol-80498a78.js";import"./string-46813dd9.js";import"./nextTick-3ee5a785.js";import"./preload-helper-596b5639.js";import"./CIMSymbol-6c8aee70.js";import"./enumeration-e40d8895.js";import"./jsonMap-92eea954.js";import"./fieldUtils-c253753a.js";import"./arcadeOnDemand-c5034a8b.js";import"./geometry-1b3a0099.js";import"./Polyline-7684a66d.js";import"./typeUtils-0cf27003.js";import"./Color-0f9fdd46.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-ea6b845d.js";import"./aaBoundingBox-77ee83e3.js";import"./persistableUrlUtils-3427b748.js";import"./Collection-3317d203.js";import"./Evented-fac53f7f.js";import"./SimpleObservable-f97014ec.js";import"./collectionUtils-23cca63a.js";import"./Portal-d13c5d2a.js";import"./Loadable-3c0fb2d0.js";import"./Promise-19e65545.js";import"./locale-30120714.js";import"./PortalGroup-506cda94.js";import"./PortalUser-12cb329a.js";import"./Clonable-a26a28b0.js";import"./Identifiable-016ad07d.js";import"./parser-6760a715.js";import"./mat4-62d5e6a4.js";import"./TimeExtent-b83e45a0.js";import"./ElevationInfo-7059590d.js";import"./lengthUtils-02fceda8.js";import"./unitUtils-2906b0b4.js";import"./asyncUtils-64877ef6.js";import"./PortalItem-a267e3e1.js";import"./assets-544006ef.js";const E=["atom","xml"],L={base:m,key:"type",typeMap:{"simple-line":F},errorContext:"symbol"},M={base:m,key:"type",typeMap:{"picture-marker":d,"simple-marker":h},errorContext:"symbol"},O={base:m,key:"type",typeMap:{"simple-fill":j},errorContext:"symbol"};let e=class extends w(R(G(P(k(f(C)))))){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(t,r){return typeof t=="string"?{url:t,...r}:t}readFeatureCollections(t,r){return r.featureCollection.layers.forEach(s=>{var l;const p=s.layerDefinition.drawingInfo.renderer.symbol;p&&p.type==="esriSFS"&&((l=p.outline)!=null&&l.style.includes("esriSFS"))&&(p.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const t=this._get("title");return t&&this.originOf("title")!=="defaults"?t:this.url?y(this.url,E)||"GeoRSS":t||""}set title(t){this._set("title",t)}load(t){const r=c(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},t).catch(S).then(()=>this._fetchService(r)).then(s=>{this.read(s,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const t=await this._fetchService();return this.read(t,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(t){const r=this.spatialReference,{data:s}=await u(a.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:v(r)?void 0:r.wkid??JSON.stringify(r)},signal:t});return s}_hasGeometry(t){var r;return((r=this.featureCollections)==null?void 0:r.some(s=>{var p,l;return((p=s.featureSet)==null?void 0:p.geometryType)===t&&((l=s.featureSet.features)==null?void 0:l.length)>0}))??!1}};o([i()],e.prototype,"description",void 0),o([i()],e.prototype,"featureCollections",void 0),o([g("service","featureCollections",["featureCollection.layers"])],e.prototype,"readFeatureCollections",null),o([i({type:b,json:{name:"lookAtExtent"}})],e.prototype,"fullExtent",void 0),o([i($)],e.prototype,"id",void 0),o([i(_)],e.prototype,"legendEnabled",void 0),o([i({types:L,json:{write:!0}})],e.prototype,"lineSymbol",void 0),o([i({type:["show","hide"]})],e.prototype,"listMode",void 0),o([i({types:M,json:{write:!0}})],e.prototype,"pointSymbol",void 0),o([i({types:O,json:{write:!0}})],e.prototype,"polygonSymbol",void 0),o([i({type:["GeoRSS"]})],e.prototype,"operationalLayerType",void 0),o([i(x)],e.prototype,"url",void 0),o([i({json:{origins:{service:{read:{source:"name",reader:t=>t||void 0}}}}})],e.prototype,"title",null),o([i({readOnly:!0,json:{read:!1},value:"geo-rss"})],e.prototype,"type",void 0),e=o([n("esri.layers.GeoRSSLayer")],e);const At=e;export{At as default};
