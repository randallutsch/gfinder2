import{e as m,y as n,n as h}from"./cast-7ef3a066.js";import{a as s}from"./Error-1dfe2922.js";import{t as a,r as l}from"./typedArrayUtil-4015bf74.js";import{l as c}from"./reactiveUtils-b911287d.js";import"./ArrayPool-45db95ab.js";import f from"./FeatureSet-b6696527.js";import v from"./FeatureLayerView2D-71e06252.js";import{e as O}from"./util-72a186a3.js";import"./string-7d6c8f5c.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-e323addc.js";import"./geometry-22feb2bb.js";import"./Extent-54ef1174.js";import"./Polyline-d942e774.js";import"./typeUtils-17403a33.js";import"./jsonMap-c8081704.js";import"./Graphic-17f3b359.js";import"./PopupTemplate-9da636f6.js";import"./Clonable-c315fc8d.js";import"./Collection-8f94e599.js";import"./Evented-7dfb249a.js";import"./SimpleObservable-ddf0ceba.js";import"./fieldUtils-75feb382.js";import"./preload-helper-101896b7.js";import"./arcadeOnDemand-797f4f1c.js";import"./enumeration-cda3949b.js";import"./number-1bdcdfd9.js";import"./locale-30120714.js";import"./Identifiable-d701141a.js";import"./symbols-87ca67f4.js";import"./CIMSymbol-52d72a23.js";import"./Symbol-6522d2f3.js";import"./Color-7a3d8c62.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-2c2d0d87.js";import"./aaBoundingBox-10130714.js";import"./request-4f5c54dd.js";import"./persistableUrlUtils-afa98d6c.js";import"./collectionUtils-07fb1a58.js";import"./Portal-0c20e3a4.js";import"./Loadable-772aaf20.js";import"./Promise-e08b9d4d.js";import"./PortalGroup-100f1bed.js";import"./PortalUser-7acb0e3c.js";import"./jsonUtils-196b5f3d.js";import"./Field-a857bb5a.js";import"./fieldType-36e8171c.js";import"./utils-b31292b4.js";import"./mat3f32-d3d088e8.js";import"./parser-60fed632.js";import"./mat4-62d5e6a4.js";import"./enums-4ca4641f.js";import"./MaterialKey-13d5dd3c.js";import"./Utils-69437480.js";import"./enums-ef042d89.js";import"./enums-64ab819c.js";import"./Texture-2d4e629f.js";import"./context-util-87dfae31.js";import"./VertexElementDescriptor-2925c6af.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./FeatureReductionLayer-be2d99dd.js";import"./BlendLayer-00b35d0f.js";import"./TimeExtent-dfe3f644.js";import"./Query-8a7aa408.js";import"./UniqueValueRenderer-5b8937c2.js";import"./LegendOptions-998df0a8.js";import"./diffUtils-f2c670bd.js";import"./colorRamps-68d0ae1f.js";import"./sizeVariableUtils-d4870b0d.js";import"./compilerUtils-c5090cf5.js";import"./lengthUtils-f3b6e37f.js";import"./unitUtils-58dc72ed.js";import"./jsonUtils-d1659db1.js";import"./styleUtils-5b0ea69d.js";import"./jsonUtils-b516d686.js";import"./DictionaryLoader-3932e3bb.js";import"./LRUCache-f9ba273b.js";import"./MemCache-15515535.js";import"./deprecate-9e0289e6.js";import"./OperationalLayer-0fbaa211.js";import"./ElevationInfo-a7cee627.js";import"./labelingInfo-f5cd653d.js";import"./labelUtils-d3906ba4.js";import"./defaultsJSON-b087dd4d.js";import"./LayerView-3ffe8f9a.js";import"./HandleOwner-2d282b7c.js";import"./schemaUtils-85d1403c.js";import"./LayerFloorInfo-152559a6.js";import"./visualVariablesUtils-b964ebb8.js";import"./createSymbolSchema-0ec759f8.js";import"./ExpandedCIM-e40bb4ca.js";import"./BidiEngine-836b7ef6.js";import"./aaBoundingRect-e7f76732.js";import"./mat2d-80bd93af.js";import"./vec2-f978aef8.js";import"./vec2f32-461e65a9.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-14228c88.js";import"./GeometryUtils-eebff0a0.js";import"./floatRGBA-305df8f3.js";import"./rendererUtils-0c1268cc.js";import"./capabilities-dddb0ea5.js";import"./TileStore-e480c2b6.js";import"./Queue-26a7c9c9.js";import"./TileKey-03ab4f60.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./workers-627b0098.js";import"./Connection-e4833934.js";import"./assets-6d4d2dad.js";import"./intl-5caf62af.js";import"./messages-c2cf09a4.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-46813370.js";import"./RefreshableLayerView-5bc632d3.js";function d(t,r){if(a(t)&&a(r))return null;const e={};return l(r)&&(e.geometry=r.toJSON()),l(t)&&(e.where=t),e}let o=class extends v{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([c(()=>{var t;return(t=this.layer)==null?void 0:t.purgeOptions},()=>this._update()),c(()=>this.suspended,t=>{t?this._proxy.pauseStream():this._proxy.resumeStream()})])}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(t,r){t==="data-received"&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const e=super.on(t,r),i=this;return{remove(){e.remove(),t==="data-received"&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(t,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(t),r).then(e=>{const i=f.fromJSON(e);return i.features.forEach(p=>{p.layer=this.layer,p.sourceLayer=this.layer}),i})}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:t=>{this.set(t.propertyName,t.value)}}}_createTileRendererHash(t){const r=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(d(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(t)+r}async _createServiceOptions(){const t=this.layer,{objectIdField:r}=t,e=t.fields.map(u=>u.toJSON()),i=O(t.geometryType),p=t.timeInfo&&t.timeInfo.toJSON()||null,y=t.spatialReference?t.spatialReference.toJSON():null;return{type:"stream",fields:e,geometryType:i,objectIdField:r,timeInfo:p,source:this.layer.parsedUrl,serviceFilter:d(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:y,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:t.customParameters}}};m([n()],o.prototype,"errorString",void 0),m([n({readOnly:!0})],o.prototype,"connectionError",null),m([n()],o.prototype,"connectionStatus",void 0),o=m([h("esri.views.2d.layers.StreamLayerView2D")],o);const Dr=o;export{Dr as default};
