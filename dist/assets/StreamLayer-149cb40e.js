import{_ as $}from"./preload-helper-101896b7.js";import{e,y as r,n as v,l as R,j as P}from"./cast-7ef3a066.js";import"./geometry-22feb2bb.js";import{k as T}from"./PopupTemplate-9da636f6.js";import{C as j}from"./UniqueValueRenderer-5b8937c2.js";import{o as O,p as F,b as _,n as D}from"./jsonUtils-b516d686.js";import{U as E}from"./request-4f5c54dd.js";import{M as N}from"./symbols-87ca67f4.js";import{a as m,s as k}from"./Error-1dfe2922.js";import{r as A}from"./typedArrayUtil-4015bf74.js";import{O as C}from"./MultiOriginJSONSupport-98cda0d2.js";import{w as U}from"./promiseUtils-e323addc.js";import{T as c}from"./ArrayPool-45db95ab.js";import{k as g,a as L,o as f}from"./Extent-54ef1174.js";import{i as d}from"./typeUtils-17403a33.js";import{b as J}from"./Layer-aa68e6a9.js";import{p as G}from"./ArcGISService-880ea933.js";import{n as V}from"./BlendLayer-00b35d0f.js";import{o as q}from"./CustomParametersMixin-1353f893.js";import{n as z,p as W}from"./FeatureReductionLayer-be2d99dd.js";import{c as M,m as Q,a as X,I as Y,v as Z,p as B,l as H,f as K}from"./OperationalLayer-0fbaa211.js";import{v as ee}from"./PortalLayer-7f41b677.js";import{p as te}from"./RefreshableLayer-e9f8071f.js";import{t as re}from"./ScaleRangeLayer-21fc7ea0.js";import{a as ie}from"./TemporalLayer-0dd6ce52.js";import{s as oe}from"./fieldProperties-10028ce7.js";import{F as u,b as se}from"./fieldUtils-75feb382.js";import{j as ne,i as pe}from"./labelingInfo-f5cd653d.js";import{t as ae}from"./styleUtils-d1f4a996.js";import{x as me}from"./Query-8a7aa408.js";import{p as le}from"./popupUtils-898e37d5.js";import{x as de}from"./ElevationInfo-a7cee627.js";import"./string-7d6c8f5c.js";import"./nextTick-3ee5a785.js";import"./Polyline-d942e774.js";import"./Clonable-c315fc8d.js";import"./Collection-8f94e599.js";import"./Evented-7dfb249a.js";import"./SimpleObservable-ddf0ceba.js";import"./jsonMap-c8081704.js";import"./enumeration-cda3949b.js";import"./number-1bdcdfd9.js";import"./locale-30120714.js";import"./Identifiable-d701141a.js";import"./LegendOptions-998df0a8.js";import"./Color-7a3d8c62.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./arcadeOnDemand-797f4f1c.js";import"./reactiveUtils-b911287d.js";import"./diffUtils-f2c670bd.js";import"./Portal-0c20e3a4.js";import"./Loadable-772aaf20.js";import"./Promise-e08b9d4d.js";import"./PortalGroup-100f1bed.js";import"./PortalUser-7acb0e3c.js";import"./colorRamps-68d0ae1f.js";import"./opacityUtils-2c2d0d87.js";import"./screenUtils-7afeb41c.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-17f3b359.js";import"./jsonUtils-196b5f3d.js";import"./compilerUtils-c5090cf5.js";import"./lengthUtils-f3b6e37f.js";import"./unitUtils-58dc72ed.js";import"./jsonUtils-d1659db1.js";import"./Symbol-6522d2f3.js";import"./persistableUrlUtils-afa98d6c.js";import"./styleUtils-5b0ea69d.js";import"./DictionaryLoader-3932e3bb.js";import"./LRUCache-f9ba273b.js";import"./MemCache-15515535.js";import"./CIMSymbol-52d72a23.js";import"./deprecate-9e0289e6.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./aaBoundingBox-10130714.js";import"./collectionUtils-07fb1a58.js";import"./arcgisLayerUrl-10f7b1f9.js";import"./parser-60fed632.js";import"./mat4-62d5e6a4.js";import"./TimeExtent-dfe3f644.js";import"./asyncUtils-bd6eb812.js";import"./PortalItem-fdbc6f1a.js";import"./assets-6d4d2dad.js";import"./TimeInfo-ce3628a3.js";import"./Field-a857bb5a.js";import"./fieldType-36e8171c.js";import"./FieldsIndex-7523f868.js";import"./labelUtils-d3906ba4.js";import"./defaultsJSON-b087dd4d.js";var y;let a=y=class extends R{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([r({type:Number,json:{write:!0}})],a.prototype,"age",void 0),e([r({type:Number,json:{write:!0}})],a.prototype,"ageReceived",void 0),e([r({type:Number,json:{write:!0}})],a.prototype,"displayCount",void 0),e([r({type:Number,json:{write:!0}})],a.prototype,"maxObservations",void 0),a=y=e([v("esri.layers.support.PurgeOptions")],a);const b=a,h=oe();let t=class extends z(W(V(ie(re(te(G(M(ee(C(q(J))))))))))){constructor(...i){super(...i),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new b,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=g.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(i,o){return typeof i=="string"?{url:i,...o}:i}load(i){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new m("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const o=A(i)?i.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},i).catch(U).then(()=>this._fetchService(o))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(i){u(i,this.fieldsIndex),this._set("renderer",i)}readRenderer(i,o,s){const p=(o=o.layerDefinition||o).drawingInfo&&o.drawingInfo.renderer||void 0;if(p){const n=O(p,o,s)||void 0;return n||k.getLogger(this.declaredClass).error("Failed to create renderer",{rendererDefinition:o.drawingInfo.renderer,layer:this,context:s}),n}if(o.defaultSymbol)return o.types&&o.types.length?new j({defaultSymbol:l(o.defaultSymbol,o,s),field:o.typeIdField,uniqueValueInfos:o.types.map(n=>({id:n.id,symbol:l(n.symbol,n,s)}))}):new F({symbol:l(o.defaultSymbol,o,s)})}async connect(i){const[{createConnection:o}]=await Promise.all([$(()=>import("./createConnection-544fd201.js"),["assets/createConnection-544fd201.js","assets/preload-helper-101896b7.js","assets/cast-7ef3a066.js","assets/typedArrayUtil-4015bf74.js","assets/string-7d6c8f5c.js","assets/Error-1dfe2922.js","assets/ArrayPool-45db95ab.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-e323addc.js","assets/geometry-22feb2bb.js","assets/Extent-54ef1174.js","assets/Polyline-d942e774.js","assets/typeUtils-17403a33.js","assets/jsonMap-c8081704.js","assets/request-4f5c54dd.js","assets/zscale-65468675.js","assets/unitUtils-58dc72ed.js","assets/Evented-7dfb249a.js","assets/query-46c36c98.js","assets/jsonUtils-196b5f3d.js","assets/normalizeUtils-9ff08cf4.js","assets/pbfQueryUtils-b3e55309.js","assets/pbf-99764d75.js","assets/OptimizedFeature-aa2e72dc.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/queryZScale-9c82ac96.js","assets/Query-8a7aa408.js","assets/TimeExtent-dfe3f644.js","assets/enumeration-cda3949b.js","assets/Field-a857bb5a.js","assets/fieldType-36e8171c.js","assets/Clonable-c315fc8d.js"]),this.load()]),s=d.toJSON(this.geometryType),{customParameters:p=null,definitionExpression:n=null,geometryDefinition:w=null,maxReconnectionAttempts:I=0,maxReconnectionInterval:S=20,spatialReference:x=this.spatialReference}=i||this.createConnectionParameters();return o(this.parsedUrl,this.spatialReference,x,s,{geometry:w,where:n},I,S,p)}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(i){return le(this,i)}createQuery(){const i=new me;return i.returnGeometry=!0,i.outFields=["*"],i.where=this.definitionExpression||"1=1",i}getFieldDomain(i,o){if(!this.fields)return null;let s=null;return this.fields.some(p=>(p.name===i&&(s=p.domain),!!s)),s}getField(i){return this.fieldsIndex.get(i)}serviceSupportsSpatialReference(i){return!0}async _fetchService(i){var o;if(this.webSocketUrl){if(!((o=this.timeInfo)!=null&&o.trackIdField))throw new m("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new m("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new m("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new m("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:s}=await E(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:i});this.sourceJSON=s}return this.sourceJSON={...this.sourceJSON??{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),u(this.renderer,this.fieldsIndex),se(this.timeInfo,this.fieldsIndex),ae(this,{origin:"service"})}};e([r({type:String})],t.prototype,"copyright",void 0),e([r({readOnly:!0})],t.prototype,"defaultPopupTemplate",null),e([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],t.prototype,"definitionExpression",void 0),e([r({type:String})],t.prototype,"displayField",void 0),e([r({type:de})],t.prototype,"elevationInfo",void 0),e([r(h.fields)],t.prototype,"fields",void 0),e([r(h.fieldsIndex)],t.prototype,"fieldsIndex",void 0),e([r({type:L})],t.prototype,"geometryDefinition",void 0),e([r({type:d.apiValues,json:{read:{reader:d.read}}})],t.prototype,"geometryType",void 0),e([r(Q)],t.prototype,"labelsVisible",void 0),e([r({type:[ne],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:pe},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],t.prototype,"labelingInfo",void 0),e([r(X)],t.prototype,"legendEnabled",void 0),e([r({type:["show","hide"]})],t.prototype,"listMode",void 0),e([r({type:c})],t.prototype,"maxReconnectionAttempts",void 0),e([r({type:c})],t.prototype,"maxReconnectionInterval",void 0),e([r(Y)],t.prototype,"maxScale",void 0),e([r(Z)],t.prototype,"minScale",void 0),e([r({type:String})],t.prototype,"objectIdField",void 0),e([r({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],t.prototype,"operationalLayerType",void 0),e([r(B)],t.prototype,"popupEnabled",void 0),e([r({type:T,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),e([r({type:b})],t.prototype,"purgeOptions",void 0),e([r({types:_,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:D,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],t.prototype,"renderer",null),e([f("service","renderer",["drawingInfo.renderer","defaultSymbol"]),f("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],t.prototype,"readRenderer",null),e([r(H)],t.prototype,"screenSizePerspectiveEnabled",void 0),e([r()],t.prototype,"sourceJSON",void 0),e([r({type:g,json:{origins:{service:{read:{source:"spatialReference"}}}}})],t.prototype,"spatialReference",void 0),e([r({json:{read:!1}})],t.prototype,"type",void 0),e([r(K)],t.prototype,"url",void 0),e([r({type:Number})],t.prototype,"updateInterval",void 0),e([r({type:String})],t.prototype,"webSocketUrl",void 0),t=e([v("esri.layers.StreamLayer")],t);const l=P({types:N}),Zt=t;export{Zt as default};
