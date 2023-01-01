import{e as i,y as r,n as h}from"./cast-34ff1fab.js";import"./geometry-1b3a0099.js";import{a as y}from"./Error-e5869661.js";import{r as d}from"./typedArrayUtil-6bfe4dae.js";import{x as w,w as S}from"./promiseUtils-281d25c9.js";import{j as O}from"./request-c6faf466.js";import"./ensureType-abaf235a.js";import{a as F,o as b,k as I}from"./Extent-b8913cd1.js";import q from"./FeatureLayer-51d11ec6.js";import{h as N}from"./string-46813dd9.js";import{m as _}from"./Loadable-3c0fb2d0.js";import{u as x}from"./workers-6a283d68.js";import J from"./FeatureSet-b61b4ed5.js";import{l as j}from"./clientSideDefaults-dae7a427.js";import{x as p}from"./Query-394dcfc7.js";import{p as C,f as P}from"./persistableUrlUtils-3427b748.js";import"./nextTick-3ee5a785.js";import"./Polyline-7684a66d.js";import"./typeUtils-0cf27003.js";import"./jsonMap-92eea954.js";import"./preload-helper-596b5639.js";import"./PopupTemplate-8759f34d.js";import"./Clonable-a26a28b0.js";import"./Collection-3317d203.js";import"./Evented-fac53f7f.js";import"./SimpleObservable-f97014ec.js";import"./fieldUtils-c253753a.js";import"./arcadeOnDemand-c5034a8b.js";import"./enumeration-e40d8895.js";import"./number-4b1bfb24.js";import"./locale-30120714.js";import"./Identifiable-016ad07d.js";import"./UniqueValueRenderer-07be7be0.js";import"./symbols-0eeb49ca.js";import"./CIMSymbol-6c8aee70.js";import"./Symbol-8a110cc7.js";import"./Color-0f9fdd46.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-ea6b845d.js";import"./SimpleFillSymbol-80498a78.js";import"./aaBoundingBox-77ee83e3.js";import"./collectionUtils-23cca63a.js";import"./Portal-d13c5d2a.js";import"./PortalGroup-506cda94.js";import"./PortalUser-12cb329a.js";import"./LegendOptions-8b163282.js";import"./reactiveUtils-aec98ee9.js";import"./diffUtils-67450e3a.js";import"./colorRamps-d6116b89.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-ba3a92c9.js";import"./jsonUtils-eb956695.js";import"./Promise-19e65545.js";import"./compilerUtils-05c96a64.js";import"./lengthUtils-02fceda8.js";import"./unitUtils-2906b0b4.js";import"./jsonUtils-b9ebb089.js";import"./styleUtils-ea2c30a4.js";import"./jsonUtils-30a58fb0.js";import"./DictionaryLoader-076d7343.js";import"./LRUCache-9d77066f.js";import"./MemCache-97cd02d3.js";import"./deprecate-c2edfb4d.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./MultiOriginJSONSupport-98bacd7d.js";import"./LayerFloorInfo-21f09518.js";import"./FeatureLayerBase-08ed5a89.js";import"./Field-db318fdd.js";import"./fieldType-11b4c3ca.js";import"./HeightModelInfo-2307586e.js";import"./arcgisLayerUrl-efba9d7a.js";import"./OperationalLayer-421969eb.js";import"./TimeExtent-b83e45a0.js";import"./ElevationInfo-7059590d.js";import"./RelationshipQuery-a9eb59b9.js";import"./Layer-685ea357.js";import"./HandleOwner-9428adb4.js";import"./editsZScale-ea881b08.js";import"./queryZScale-785f7a48.js";import"./zscale-750d6efd.js";import"./APIKeyMixin-dfeaf1ef.js";import"./ArcGISService-6da49723.js";import"./BlendLayer-1dfdcb30.js";import"./parser-6760a715.js";import"./mat4-62d5e6a4.js";import"./CustomParametersMixin-190de352.js";import"./EditBusLayer-e5ae410e.js";import"./FeatureReductionLayer-9b4d60f8.js";import"./labelingInfo-2aefe891.js";import"./labelUtils-cfa36e70.js";import"./defaultsJSON-b087dd4d.js";import"./OrderedLayer-1b69d825.js";import"./PortalLayer-10051047.js";import"./asyncUtils-64877ef6.js";import"./PortalItem-a267e3e1.js";import"./assets-544006ef.js";import"./RefreshableLayer-d1776f5f.js";import"./ScaleRangeLayer-d814fce3.js";import"./TemporalLayer-b5c0f8d2.js";import"./TimeInfo-5a12a645.js";import"./FeatureTemplate-f1076210.js";import"./FeatureType-b0584768.js";import"./fieldProperties-2bcd082f.js";import"./FieldsIndex-bec5c377.js";import"./versionUtils-053df52a.js";import"./styleUtils-e7c24653.js";import"./TopFeaturesQuery-80c6fd7d.js";import"./popupUtils-6413f999.js";import"./Connection-3d967827.js";import"./Queue-bd70231f.js";import"./intl-1561e875.js";import"./messages-fe8e2c1f.js";import"./FullTextSearch-7a786b52.js";import"./QueryEngineCapabilities-42e44ded.js";let a=class extends _{constructor(t){super(t),this.type="csv",this.refresh=w(async e=>{await this.load();const{extent:s,timeExtent:n}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=s,n&&(this.sourceJSON.timeInfo.timeExtent=[n.start,n.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=d(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;(t=this._connection)==null||t.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const s=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return J.fromJSON(s)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const s=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:s.count,extent:F.fromJSON(s.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await x("CSVSourceWorker",{strategy:N("feature-layers-workers")?"dedicated":"local",signal:t});const{url:e,delimiter:s,fields:n,latitudeField:f,longitudeField:g,spatialReference:l,timeInfo:m}=this.loadOptions,u=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:s,fields:n==null?void 0:n.map(v=>v.toJSON()),latitudeField:f,longitudeField:g,spatialReference:l==null?void 0:l.toJSON(),timeInfo:m==null?void 0:m.toJSON()}},{signal:t});this.locationInfo=u.locationInfo,this.sourceJSON=u.layerDefinition,this.delimiter=u.delimiter}};i([r()],a.prototype,"type",void 0),i([r()],a.prototype,"loadOptions",void 0),i([r()],a.prototype,"customParameters",void 0),i([r()],a.prototype,"locationInfo",void 0),i([r()],a.prototype,"sourceJSON",void 0),i([r()],a.prototype,"delimiter",void 0),a=i([h("esri.layers.graphics.sources.CSVSource")],a);function c(t,e){throw new y(e,`CSVLayer (title: ${t.title}, id: ${t.id}) cannot be saved to a portal item`)}let o=class extends q{constructor(...t){super(...t),this.geometryType="point",this.capabilities=j(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=I.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}load(t){const e=d(t)?t.signal:null,s=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},t).catch(S).then(async()=>this.initLayerProperties(await this.createGraphicsSource(e)));return this.addResolvingPromise(s),Promise.resolve(this)}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(t,e){return e.showLabels!=null?e.showLabels:!!(e.layerDefinition&&e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.labelingInfo)}set url(t){if(!t)return void this._set("url",t);const e=O(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){const e=new a({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url},customParameters:this.customParameters});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(p.from(t)||this.createQuery())).then(s=>{if(s!=null&&s.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(p.from(t)||this.createQuery()))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(p.from(t)||this.createQuery()))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(p.from(t)||this.createQuery()))}read(t,e){super.read(t,e),e&&e.origin==="service"&&this.revert(["latitudeField","longitudeField"],"service")}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new y("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(t){return c(this,"csv-layer:save")}async saveAs(t,e){return c(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return d(e)&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};i([r({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",void 0),i([r({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],o.prototype,"delimiter",void 0),i([r({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"editingEnabled",void 0),i([r({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],o.prototype,"fields",void 0),i([r({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),i([b("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],o.prototype,"readWebMapLabelsVisible",null),i([r({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"latitudeField",void 0),i([r({type:["show","hide"]})],o.prototype,"listMode",void 0),i([r({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"locationType",void 0),i([r({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"longitudeField",void 0),i([r({type:["CSV"]})],o.prototype,"operationalLayerType",void 0),i([r()],o.prototype,"outFields",void 0),i([r({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],o.prototype,"path",void 0),i([r({json:{read:!1},cast:null,type:a,readOnly:!0})],o.prototype,"source",void 0),i([r({json:{read:!1},value:"csv",readOnly:!0})],o.prototype,"type",void 0),i([r({json:{read:C,write:{isRequired:!0,ignoreOrigin:!0,writer:P}}})],o.prototype,"url",null),o=i([h("esri.layers.CSVLayer")],o);const Qe=o;export{Qe as default};
