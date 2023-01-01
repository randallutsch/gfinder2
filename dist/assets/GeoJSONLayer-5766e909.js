import{_ as w}from"./preload-helper-101896b7.js";import{e as r,y as i,n as b}from"./cast-7ef3a066.js";import"./geometry-22feb2bb.js";import{k as j}from"./PopupTemplate-9da636f6.js";import"./UniqueValueRenderer-5b8937c2.js";import{b as J,n as N}from"./jsonUtils-b516d686.js";import{r as O,t as R}from"./typedArrayUtil-4015bf74.js";import{O as P}from"./MultiOriginJSONSupport-98cda0d2.js";import{x as q,w as k}from"./promiseUtils-e323addc.js";import{j as y}from"./request-4f5c54dd.js";import"./ArrayPool-45db95ab.js";import{i as I}from"./typeUtils-17403a33.js";import{b as T}from"./Layer-aa68e6a9.js";import{s as D,a as f}from"./Error-1dfe2922.js";import{h as G}from"./string-7d6c8f5c.js";import{m as L}from"./Loadable-772aaf20.js";import{u as Q}from"./workers-627b0098.js";import{l as Z}from"./clientSideDefaults-ba31a7fc.js";import z from"./FeatureSet-b6696527.js";import{a as x,k as F}from"./Extent-54ef1174.js";import{v as C}from"./Polyline-d942e774.js";import{n as V}from"./BlendLayer-00b35d0f.js";import{o as A}from"./CustomParametersMixin-1353f893.js";import{n as U,p as W}from"./FeatureReductionLayer-be2d99dd.js";import{c as B,d as M,j as H,m as K,a as X,w as Y,p as tt,l as et,f as rt}from"./OperationalLayer-0fbaa211.js";import{c as ot}from"./OrderedLayer-5a5e20b8.js";import{v as it}from"./PortalLayer-7f41b677.js";import{p as st}from"./RefreshableLayer-e9f8071f.js";import{t as nt}from"./ScaleRangeLayer-21fc7ea0.js";import{a as at}from"./TemporalLayer-0dd6ce52.js";import{p as pt}from"./FeatureTemplate-281b6fcc.js";import{n as lt}from"./FeatureType-980424ee.js";import{y as ut}from"./Field-a857bb5a.js";import{s as dt}from"./fieldProperties-10028ce7.js";import{F as g,b as mt}from"./fieldUtils-75feb382.js";import{j as ht,i as ct}from"./labelingInfo-f5cd653d.js";import{x as h}from"./Query-8a7aa408.js";import{p as yt}from"./popupUtils-898e37d5.js";import"./nextTick-3ee5a785.js";import"./Clonable-c315fc8d.js";import"./Collection-8f94e599.js";import"./Evented-7dfb249a.js";import"./SimpleObservable-ddf0ceba.js";import"./jsonMap-c8081704.js";import"./enumeration-cda3949b.js";import"./number-1bdcdfd9.js";import"./locale-30120714.js";import"./Identifiable-d701141a.js";import"./symbols-87ca67f4.js";import"./CIMSymbol-52d72a23.js";import"./Symbol-6522d2f3.js";import"./Color-7a3d8c62.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-2c2d0d87.js";import"./aaBoundingBox-10130714.js";import"./persistableUrlUtils-afa98d6c.js";import"./collectionUtils-07fb1a58.js";import"./Portal-0c20e3a4.js";import"./PortalGroup-100f1bed.js";import"./PortalUser-7acb0e3c.js";import"./LegendOptions-998df0a8.js";import"./arcadeOnDemand-797f4f1c.js";import"./reactiveUtils-b911287d.js";import"./diffUtils-f2c670bd.js";import"./colorRamps-68d0ae1f.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-17f3b359.js";import"./jsonUtils-196b5f3d.js";import"./compilerUtils-c5090cf5.js";import"./lengthUtils-f3b6e37f.js";import"./unitUtils-58dc72ed.js";import"./jsonUtils-d1659db1.js";import"./styleUtils-5b0ea69d.js";import"./DictionaryLoader-3932e3bb.js";import"./LRUCache-f9ba273b.js";import"./MemCache-15515535.js";import"./deprecate-9e0289e6.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./Promise-e08b9d4d.js";import"./Connection-e4833934.js";import"./Queue-26a7c9c9.js";import"./assets-6d4d2dad.js";import"./intl-5caf62af.js";import"./messages-c2cf09a4.js";import"./QueryEngineCapabilities-42e44ded.js";import"./defaultsJSON-b087dd4d.js";import"./fieldType-36e8171c.js";import"./parser-60fed632.js";import"./mat4-62d5e6a4.js";import"./TimeExtent-dfe3f644.js";import"./ElevationInfo-a7cee627.js";import"./asyncUtils-bd6eb812.js";import"./PortalItem-fdbc6f1a.js";import"./TimeInfo-ce3628a3.js";import"./FieldsIndex-7523f868.js";import"./labelUtils-d3906ba4.js";const E="esri.layers.graphics.sources.GeoJSONSource",v=D.getLogger(E);let d=class extends L{constructor(){super(...arguments),this.type="geojson",this.refresh=q(async t=>{await this.load();const{extent:e,timeExtent:o}=await this._connection.invoke("refresh",t);return this.sourceJSON.extent=e,o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=O(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;(t=this._connection)==null||t.close(),this._connection=null}applyEdits(t){return this.load().then(()=>this._applyEdits(t))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e)).then(o=>z.fromJSON(o))}queryFeaturesJSON(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e))}queryFeatureCount(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e))}queryObjectIds(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryObjectIds",t?t.toJSON():null,e))}queryExtent(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryExtent",t?t.toJSON():null,e)).then(o=>({count:o.count,extent:x.fromJSON(o.extent)}))}querySnapping(t,e={}){return this.load(e).then(()=>this._connection.invoke("querySnapping",t,e))}_applyEdits(t){if(!this._connection)throw new f("geojson-layer-source:edit-failure","Memory source not loaded");const e=this.layer.objectIdField,o=[],n=[],u=[];if(t.addFeatures)for(const a of t.addFeatures)o.push(this._serializeFeature(a));if(t.deleteFeatures)for(const a of t.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[e]!=null&&n.push(a.attributes[e]);if(t.updateFeatures)for(const a of t.updateFeatures)u.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:o,updates:u,deletes:n}).then(({extent:a,timeExtent:p,featureEditResults:l})=>(this.sourceJSON.extent=a,p&&(this.sourceJSON.timeInfo.timeExtent=[p.start,p.end]),this._createEditsResult(l)))}_createEditsResult(t){return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new f("geojson-layer-source:edit-failure",e.description,{code:e.code}):null}}_serializeFeature(t){const{attributes:e}=t,o=this._geometryForSerialization(t);return o?{geometry:o.toJSON(),attributes:e}:{attributes:e}}_geometryForSerialization(t){const{geometry:e}=t;return R(e)?null:e.type==="mesh"||e.type==="extent"?C.fromExtent(e.extent):e}async _startWorker(t){this._connection=await Q("GeoJSONSourceWorker",{strategy:G("feature-layers-workers")?"dedicated":"local",signal:t});const{fields:e,spatialReference:o,hasZ:n,geometryType:u,objectIdField:a,url:p,timeInfo:l,customParameters:S}=this.layer,_=this.layer.originOf("spatialReference")==="defaults",$={url:p,customParameters:S,fields:e&&e.map(c=>c.toJSON()),geometryType:I.toJSON(u),hasZ:n,objectIdField:a,timeInfo:l?l.toJSON():null,spatialReference:_?null:o&&o.toJSON()},m=await this._connection.invoke("load",$,{signal:t});for(const c of m.warnings)v.warn(c.message,{layer:this.layer,warning:c});m.featureErrors.length&&v.warn(`Encountered ${m.featureErrors.length} validation errors while loading features`,m.featureErrors),this.sourceJSON=m.layerDefinition,this.capabilities=Z(this.sourceJSON.hasZ,!0)}};r([i()],d.prototype,"capabilities",void 0),r([i()],d.prototype,"type",void 0),r([i({constructOnly:!0})],d.prototype,"layer",void 0),r([i()],d.prototype,"sourceJSON",void 0),d=r([b(E)],d);const ft=dt();let s=class extends ot(A(U(W(V(at(nt(st(B(it(P(T))))))))))){constructor(t){super(t),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=F.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var t;(t=this.source)==null||t.destroy()}load(t){const e=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},t).catch(k).then(()=>this.source.load(t)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),mt(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(e),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?y(this.url):null}set renderer(t){g(t,this.fieldsIndex),this._set("renderer",t)}set url(t){if(!t)return void this._set("url",t);const e=y(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async applyEdits(t,e){const o=await w(()=>import("./editingSupport-39efcb89.js"),["assets/editingSupport-39efcb89.js","assets/Graphic-17f3b359.js","assets/cast-7ef3a066.js","assets/typedArrayUtil-4015bf74.js","assets/string-7d6c8f5c.js","assets/Error-1dfe2922.js","assets/ArrayPool-45db95ab.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-e323addc.js","assets/geometry-22feb2bb.js","assets/Extent-54ef1174.js","assets/Polyline-d942e774.js","assets/typeUtils-17403a33.js","assets/jsonMap-c8081704.js","assets/PopupTemplate-9da636f6.js","assets/Clonable-c315fc8d.js","assets/Collection-8f94e599.js","assets/Evented-7dfb249a.js","assets/SimpleObservable-ddf0ceba.js","assets/fieldUtils-75feb382.js","assets/preload-helper-101896b7.js","assets/arcadeOnDemand-797f4f1c.js","assets/enumeration-cda3949b.js","assets/number-1bdcdfd9.js","assets/locale-30120714.js","assets/Identifiable-d701141a.js","assets/symbols-87ca67f4.js","assets/CIMSymbol-52d72a23.js","assets/Symbol-6522d2f3.js","assets/Color-7a3d8c62.js","assets/colorUtils-639f4d25.js","assets/mathUtils-daf59e84.js","assets/common-701a4199.js","assets/screenUtils-7afeb41c.js","assets/opacityUtils-2c2d0d87.js","assets/aaBoundingBox-10130714.js","assets/request-4f5c54dd.js","assets/persistableUrlUtils-afa98d6c.js","assets/collectionUtils-07fb1a58.js","assets/Portal-0c20e3a4.js","assets/Loadable-772aaf20.js","assets/Promise-e08b9d4d.js","assets/PortalGroup-100f1bed.js","assets/PortalUser-7acb0e3c.js","assets/jsonUtils-196b5f3d.js","assets/uuid-73213768.js","assets/normalizeUtils-9ff08cf4.js","assets/EditBusLayer-862b6183.js"]);await this.load();const n=await o.applyEdits(this,this.source,t,e);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(t,e){return super.on(t,e)}createPopupTemplate(t){return yt(this,t)}createQuery(){const t=new h,e=this.get("capabilities.data");t.returnGeometry=!0,e&&e.supportsZ&&(t.returnZ=!0),t.outFields=["*"],t.where=this.definitionExpression||"1=1";const{timeOffset:o,timeExtent:n}=this;return t.timeExtent=o!=null&&n!=null?n.offset(-o.value,o.unit):n||null,t}getFieldDomain(t,e){let o,n=!1;const u=e&&e.feature,a=u&&u.attributes,p=this.typeIdField&&a&&a[this.typeIdField];return p!=null&&this.types&&(n=this.types.some(l=>l.id==p&&(o=l.domains&&l.domains[t],o&&o.type==="inherited"&&(o=this._getLayerDomain(t)),!0))),n||o||(o=this._getLayerDomain(t)),o}getField(t){return this.fieldsIndex.get(t)}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(h.from(t)||this.createQuery(),e)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(h.from(t)||this.createQuery(),e))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(h.from(t)||this.createQuery(),e))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(h.from(t)||this.createQuery(),e))}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return O(e)&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_getLayerDomain(t){if(!this.fields)return null;let e=null;return this.fields.some(o=>(o.name===t&&(e=o.domain),!!e)),e}};r([i({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",null),r([i({type:String})],s.prototype,"copyright",void 0),r([i({readOnly:!0})],s.prototype,"createQueryVersion",null),r([i({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),r([i({type:String})],s.prototype,"displayField",void 0),r([i({type:Boolean})],s.prototype,"editingEnabled",void 0),r([i(M)],s.prototype,"elevationInfo",void 0),r([i({type:[ut],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),r([i(ft.fieldsIndex)],s.prototype,"fieldsIndex",void 0),r([i({type:x,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),r([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:I.read}}})],s.prototype,"geometryType",void 0),r([i({type:Boolean})],s.prototype,"hasZ",void 0),r([i(H)],s.prototype,"id",void 0),r([i({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),r([i(K)],s.prototype,"labelsVisible",void 0),r([i({type:[ht],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ct},write:!0}})],s.prototype,"labelingInfo",void 0),r([i(X)],s.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],s.prototype,"listMode",void 0),r([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],s.prototype,"objectIdField",void 0),r([i(Y)],s.prototype,"opacity",void 0),r([i({type:["GeoJSON"]})],s.prototype,"operationalLayerType",void 0),r([i({readOnly:!0})],s.prototype,"parsedUrl",null),r([i(tt)],s.prototype,"popupEnabled",void 0),r([i({type:j,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),r([i({types:J,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:N}}}})],s.prototype,"renderer",null),r([i(et)],s.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],s.prototype,"source",void 0),r([i({type:F})],s.prototype,"spatialReference",void 0),r([i({type:[pt]})],s.prototype,"templates",void 0),r([i()],s.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),r([i({type:String,readOnly:!0})],s.prototype,"typeIdField",void 0),r([i({type:[lt]})],s.prototype,"types",void 0),r([i(rt)],s.prototype,"url",null),s=r([b("esri.layers.GeoJSONLayer")],s);const lr=s;export{lr as default};
