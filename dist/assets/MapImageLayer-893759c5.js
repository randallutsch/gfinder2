import{J as b,w as f,e as o,y as p,n as S}from"./cast-7ef3a066.js";import{U as g}from"./request-4f5c54dd.js";import{T as w}from"./TimeExtent-dfe3f644.js";import{a as v}from"./Error-1dfe2922.js";import{a as I}from"./HandleOwner-2d282b7c.js";import{n as $}from"./loadAll-b6703d72.js";import{r as O}from"./typedArrayUtil-4015bf74.js";import{O as E}from"./MultiOriginJSONSupport-98cda0d2.js";import{w as T,j as M}from"./promiseUtils-e323addc.js";import{T as L}from"./ArrayPool-45db95ab.js";import{a as P,o as j,r as J}from"./Extent-54ef1174.js";import{i as N}from"./scaleUtils-41e2aa25.js";import{b as R}from"./Layer-aa68e6a9.js";import{i as U}from"./APIKeyMixin-62cd629d.js";import{E as F,y as q,z as A}from"./SublayersOwner-8d28fd7e.js";import{p as k}from"./ArcGISService-880ea933.js";import{n as _}from"./BlendLayer-00b35d0f.js";import{o as z}from"./CustomParametersMixin-1353f893.js";import{c as V,f as B}from"./OperationalLayer-0fbaa211.js";import{v as C}from"./PortalLayer-7f41b677.js";import{p as D}from"./RefreshableLayer-e9f8071f.js";import{t as G}from"./ScaleRangeLayer-21fc7ea0.js";import{a as H}from"./TemporalLayer-0dd6ce52.js";import{c as K}from"./ExportImageParameters-c8c9aeec.js";import{n as x}from"./sublayerUtils-d4a79327.js";import{e as W}from"./versionUtils-b3079169.js";import"./string-7d6c8f5c.js";import"./nextTick-3ee5a785.js";import"./preload-helper-101896b7.js";import"./reactiveUtils-b911287d.js";import"./asyncUtils-bd6eb812.js";import"./Collection-8f94e599.js";import"./Evented-7dfb249a.js";import"./SimpleObservable-ddf0ceba.js";import"./Loadable-772aaf20.js";import"./Promise-e08b9d4d.js";import"./unitUtils-58dc72ed.js";import"./jsonMap-c8081704.js";import"./geometry-22feb2bb.js";import"./Polyline-d942e774.js";import"./typeUtils-17403a33.js";import"./Identifiable-d701141a.js";import"./Version-dcdf768d.js";import"./CollectionFlattener-8cf1891d.js";import"./PopupTemplate-9da636f6.js";import"./Clonable-c315fc8d.js";import"./fieldUtils-75feb382.js";import"./arcadeOnDemand-797f4f1c.js";import"./enumeration-cda3949b.js";import"./number-1bdcdfd9.js";import"./locale-30120714.js";import"./UniqueValueRenderer-5b8937c2.js";import"./symbols-87ca67f4.js";import"./CIMSymbol-52d72a23.js";import"./Symbol-6522d2f3.js";import"./Color-7a3d8c62.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-2c2d0d87.js";import"./aaBoundingBox-10130714.js";import"./persistableUrlUtils-afa98d6c.js";import"./collectionUtils-07fb1a58.js";import"./Portal-0c20e3a4.js";import"./PortalGroup-100f1bed.js";import"./PortalUser-7acb0e3c.js";import"./LegendOptions-998df0a8.js";import"./diffUtils-f2c670bd.js";import"./colorRamps-68d0ae1f.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-17f3b359.js";import"./jsonUtils-196b5f3d.js";import"./compilerUtils-c5090cf5.js";import"./lengthUtils-f3b6e37f.js";import"./jsonUtils-d1659db1.js";import"./styleUtils-5b0ea69d.js";import"./jsonUtils-b516d686.js";import"./DictionaryLoader-3932e3bb.js";import"./LRUCache-f9ba273b.js";import"./MemCache-15515535.js";import"./deprecate-9e0289e6.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./LayerFloorInfo-152559a6.js";import"./arcgisLayerUrl-10f7b1f9.js";import"./FeatureType-980424ee.js";import"./Field-a857bb5a.js";import"./fieldType-36e8171c.js";import"./FeatureTemplate-281b6fcc.js";import"./FieldsIndex-7523f868.js";import"./labelingInfo-f5cd653d.js";import"./labelUtils-d3906ba4.js";import"./defaultsJSON-b087dd4d.js";import"./Query-8a7aa408.js";import"./popupUtils-898e37d5.js";import"./parser-60fed632.js";import"./mat4-62d5e6a4.js";import"./ElevationInfo-a7cee627.js";import"./PortalItem-fdbc6f1a.js";import"./assets-6d4d2dad.js";import"./TimeInfo-ce3628a3.js";import"./floorFilterUtils-080a7cd2.js";let i=class extends _(H(G(F(q(k(V(C(E(D(U(z(I(R))))))))))))){constructor(...t){super(...t),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}load(t){const e=O(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},t).catch(T).then(()=>this._fetchService(e))),Promise.resolve(this)}readImageFormat(t,e){const m=e.supportedImageFormatTypes;return m&&m.includes("PNG32")?"png32":"png24"}writeSublayers(t,e,m,r){if(!this.loaded||!t)return;const a=t.slice().reverse().flatten(({sublayers:s})=>s&&s.toArray().reverse()).toArray();let n=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const s=b(r.origin);if(s===f.PORTAL_ITEM){const c=this.createSublayersForOrigin("service").sublayers;n=x(a,c,f.SERVICE)}else if(s>f.PORTAL_ITEM){const c=this.createSublayersForOrigin("portal-item");n=x(a,c.sublayers,b(c.origin))}}const l=[],y={writeSublayerStructure:n,...r};let h=n;a.forEach(s=>{const c=s.write({},y);l.push(c),h=h||s.originOf("visible")==="user"}),l.some(s=>Object.keys(s).length>1)&&(e.layers=l),h&&(e.visibleLayers=a.filter(s=>s.visible).map(s=>s.id))}createExportImageParameters(t,e,m,r){const a=r&&r.pixelRatio||1;t&&this.version>=10&&(t=t.clone().shiftCentralMeridian());const n=new K({layer:this,floors:r==null?void 0:r.floors,scale:N({extent:t,width:e})*a}),l=n.toJSON();n.destroy();const y=!r||!r.rotation||this.version<10.3?{}:{rotation:-r.rotation},h=t&&t.spatialReference,s=h.wkid||JSON.stringify(h.toJSON());l.dpi*=a;const c={};if(r!=null&&r.timeExtent){const{start:u,end:d}=r.timeExtent.toJSON();c.time=u&&d&&u===d?""+u:`${u??"null"},${d??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return{bbox:t&&t.xmin+","+t.ymin+","+t.xmax+","+t.ymax,bboxSR:s,imageSR:s,size:e+","+m,...l,...y,...c}}async fetchImage(t,e,m,r){return this._fetchImage("image",t,e,m,r)}async fetchImageBitmap(t,e,m,r){const a=await this._fetchImage("blob",t,e,m,r);return createImageBitmap(a)}async fetchRecomputedExtents(t={}){const e={...t,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:m}=await g(this.url,e),{extent:r,fullExtent:a,timeExtent:n}=m,l=r||a;return{fullExtent:l&&P.fromJSON(l),timeExtent:n&&w.fromJSON({start:n[0],end:n[1]})}}loadAll(){return $(this,t=>{t(this.allSublayers)})}serviceSupportsSpatialReference(t){return W(this,t)}async _fetchImage(t,e,m,r,a){const n={responseType:t,signal:(a==null?void 0:a.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,m,r,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(n.query.dynamicLayers!=null&&!this.capabilities.exportMap.supportsDynamicLayers)throw new v("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:y}=await g(l,n);return y}catch(y){throw M(y)?y:new v("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:y})}}async _fetchService(t){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:e,ssl:m}=await g(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:t});m&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=e,this.read(e,{origin:"service",url:this.parsedUrl})}};o([p({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),o([p()],i.prototype,"dpi",void 0),o([p()],i.prototype,"gdbVersion",void 0),o([p()],i.prototype,"imageFormat",void 0),o([j("imageFormat",["supportedImageFormatTypes"])],i.prototype,"readImageFormat",null),o([p({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],i.prototype,"imageMaxHeight",void 0),o([p({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],i.prototype,"imageMaxWidth",void 0),o([p()],i.prototype,"imageTransparency",void 0),o([p({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),o([p({json:{read:!1,write:!1}})],i.prototype,"labelsVisible",void 0),o([p({type:["ArcGISMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),o([p({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),o([p()],i.prototype,"sourceJSON",void 0),o([p({json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),o([J("sublayers",{layers:{type:[A]},visibleLayers:{type:[L]}})],i.prototype,"writeSublayers",null),o([p({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),o([p({json:{read:!1},readOnly:!0,value:"map-image"})],i.prototype,"type",void 0),o([p(B)],i.prototype,"url",void 0),i=o([S("esri.layers.MapImageLayer")],i);const Dr=i;export{Dr as default};
