import{J as b,w as f,e as o,y as p,n as S}from"./cast-34ff1fab.js";import{U as g}from"./request-c6faf466.js";import{T as w}from"./TimeExtent-b83e45a0.js";import{a as v}from"./Error-e5869661.js";import{a as I}from"./HandleOwner-9428adb4.js";import{n as $}from"./loadAll-e96474c4.js";import{r as O}from"./typedArrayUtil-6bfe4dae.js";import{O as E}from"./MultiOriginJSONSupport-98bacd7d.js";import{w as T,j as M}from"./promiseUtils-281d25c9.js";import{T as L}from"./ensureType-abaf235a.js";import{a as P,o as j,r as J}from"./Extent-b8913cd1.js";import{i as N}from"./scaleUtils-e6e3e274.js";import{b as R}from"./Layer-685ea357.js";import{i as U}from"./APIKeyMixin-dfeaf1ef.js";import{E as F,y as q,z as A}from"./SublayersOwner-966cc801.js";import{p as k}from"./ArcGISService-6da49723.js";import{n as _}from"./BlendLayer-1dfdcb30.js";import{o as z}from"./CustomParametersMixin-190de352.js";import{c as V,f as B}from"./OperationalLayer-421969eb.js";import{v as C}from"./PortalLayer-10051047.js";import{p as D}from"./RefreshableLayer-d1776f5f.js";import{t as G}from"./ScaleRangeLayer-d814fce3.js";import{a as H}from"./TemporalLayer-b5c0f8d2.js";import{c as K}from"./ExportImageParameters-30ed4288.js";import{n as x}from"./sublayerUtils-7c76a276.js";import{e as W}from"./versionUtils-053df52a.js";import"./string-46813dd9.js";import"./nextTick-3ee5a785.js";import"./preload-helper-596b5639.js";import"./reactiveUtils-aec98ee9.js";import"./asyncUtils-64877ef6.js";import"./Collection-3317d203.js";import"./Evented-fac53f7f.js";import"./SimpleObservable-f97014ec.js";import"./Loadable-3c0fb2d0.js";import"./Promise-19e65545.js";import"./unitUtils-2906b0b4.js";import"./jsonMap-92eea954.js";import"./geometry-1b3a0099.js";import"./Polyline-7684a66d.js";import"./typeUtils-0cf27003.js";import"./Identifiable-016ad07d.js";import"./Version-8b27d614.js";import"./CollectionFlattener-489ac26c.js";import"./PopupTemplate-8759f34d.js";import"./Clonable-a26a28b0.js";import"./fieldUtils-c253753a.js";import"./arcadeOnDemand-c5034a8b.js";import"./enumeration-e40d8895.js";import"./number-4b1bfb24.js";import"./locale-30120714.js";import"./UniqueValueRenderer-07be7be0.js";import"./symbols-0eeb49ca.js";import"./CIMSymbol-6c8aee70.js";import"./Symbol-8a110cc7.js";import"./Color-0f9fdd46.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-ea6b845d.js";import"./SimpleFillSymbol-80498a78.js";import"./aaBoundingBox-77ee83e3.js";import"./persistableUrlUtils-3427b748.js";import"./collectionUtils-23cca63a.js";import"./Portal-d13c5d2a.js";import"./PortalGroup-506cda94.js";import"./PortalUser-12cb329a.js";import"./LegendOptions-8b163282.js";import"./diffUtils-67450e3a.js";import"./colorRamps-d6116b89.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-ba3a92c9.js";import"./jsonUtils-eb956695.js";import"./compilerUtils-05c96a64.js";import"./lengthUtils-02fceda8.js";import"./jsonUtils-b9ebb089.js";import"./styleUtils-ea2c30a4.js";import"./jsonUtils-30a58fb0.js";import"./DictionaryLoader-076d7343.js";import"./LRUCache-9d77066f.js";import"./MemCache-97cd02d3.js";import"./deprecate-c2edfb4d.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./LayerFloorInfo-21f09518.js";import"./arcgisLayerUrl-efba9d7a.js";import"./FeatureType-b0584768.js";import"./Field-db318fdd.js";import"./fieldType-11b4c3ca.js";import"./FeatureTemplate-f1076210.js";import"./FieldsIndex-bec5c377.js";import"./labelingInfo-2aefe891.js";import"./labelUtils-cfa36e70.js";import"./defaultsJSON-b087dd4d.js";import"./Query-394dcfc7.js";import"./FullTextSearch-7a786b52.js";import"./popupUtils-6413f999.js";import"./parser-6760a715.js";import"./mat4-62d5e6a4.js";import"./ElevationInfo-7059590d.js";import"./PortalItem-a267e3e1.js";import"./assets-544006ef.js";import"./TimeInfo-5a12a645.js";import"./floorFilterUtils-080a7cd2.js";let i=class extends _(H(G(F(q(k(V(C(E(D(U(z(I(R))))))))))))){constructor(...t){super(...t),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}load(t){const e=O(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},t).catch(T).then(()=>this._fetchService(e))),Promise.resolve(this)}readImageFormat(t,e){const m=e.supportedImageFormatTypes;return m&&m.includes("PNG32")?"png32":"png24"}writeSublayers(t,e,m,r){if(!this.loaded||!t)return;const a=t.slice().reverse().flatten(({sublayers:s})=>s&&s.toArray().reverse()).toArray();let n=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const s=b(r.origin);if(s===f.PORTAL_ITEM){const c=this.createSublayersForOrigin("service").sublayers;n=x(a,c,f.SERVICE)}else if(s>f.PORTAL_ITEM){const c=this.createSublayersForOrigin("portal-item");n=x(a,c.sublayers,b(c.origin))}}const l=[],y={writeSublayerStructure:n,...r};let h=n;a.forEach(s=>{const c=s.write({},y);l.push(c),h=h||s.originOf("visible")==="user"}),l.some(s=>Object.keys(s).length>1)&&(e.layers=l),h&&(e.visibleLayers=a.filter(s=>s.visible).map(s=>s.id))}createExportImageParameters(t,e,m,r){const a=r&&r.pixelRatio||1;t&&this.version>=10&&(t=t.clone().shiftCentralMeridian());const n=new K({layer:this,floors:r==null?void 0:r.floors,scale:N({extent:t,width:e})*a}),l=n.toJSON();n.destroy();const y=!r||!r.rotation||this.version<10.3?{}:{rotation:-r.rotation},h=t&&t.spatialReference,s=h.wkid||JSON.stringify(h.toJSON());l.dpi*=a;const c={};if(r!=null&&r.timeExtent){const{start:u,end:d}=r.timeExtent.toJSON();c.time=u&&d&&u===d?""+u:`${u??"null"},${d??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return{bbox:t&&t.xmin+","+t.ymin+","+t.xmax+","+t.ymax,bboxSR:s,imageSR:s,size:e+","+m,...l,...y,...c}}async fetchImage(t,e,m,r){return this._fetchImage("image",t,e,m,r)}async fetchImageBitmap(t,e,m,r){const a=await this._fetchImage("blob",t,e,m,r);return createImageBitmap(a)}async fetchRecomputedExtents(t={}){const e={...t,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:m}=await g(this.url,e),{extent:r,fullExtent:a,timeExtent:n}=m,l=r||a;return{fullExtent:l&&P.fromJSON(l),timeExtent:n&&w.fromJSON({start:n[0],end:n[1]})}}loadAll(){return $(this,t=>{t(this.allSublayers)})}serviceSupportsSpatialReference(t){return W(this,t)}async _fetchImage(t,e,m,r,a){const n={responseType:t,signal:(a==null?void 0:a.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,m,r,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(n.query.dynamicLayers!=null&&!this.capabilities.exportMap.supportsDynamicLayers)throw new v("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:y}=await g(l,n);return y}catch(y){throw M(y)?y:new v("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:y})}}async _fetchService(t){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:e,ssl:m}=await g(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:t});m&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=e,this.read(e,{origin:"service",url:this.parsedUrl})}};o([p({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),o([p()],i.prototype,"dpi",void 0),o([p()],i.prototype,"gdbVersion",void 0),o([p()],i.prototype,"imageFormat",void 0),o([j("imageFormat",["supportedImageFormatTypes"])],i.prototype,"readImageFormat",null),o([p({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],i.prototype,"imageMaxHeight",void 0),o([p({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],i.prototype,"imageMaxWidth",void 0),o([p()],i.prototype,"imageTransparency",void 0),o([p({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),o([p({json:{read:!1,write:!1}})],i.prototype,"labelsVisible",void 0),o([p({type:["ArcGISMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),o([p({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),o([p()],i.prototype,"sourceJSON",void 0),o([p({json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),o([J("sublayers",{layers:{type:[A]},visibleLayers:{type:[L]}})],i.prototype,"writeSublayers",null),o([p({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),o([p({json:{read:!1},readOnly:!0,value:"map-image"})],i.prototype,"type",void 0),o([p(B)],i.prototype,"url",void 0),i=o([S("esri.layers.MapImageLayer")],i);const Hr=i;export{Hr as default};