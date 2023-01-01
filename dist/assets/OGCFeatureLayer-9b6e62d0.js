import{e as r,y as i,n as j}from"./cast-7ef3a066.js";import"./geometry-22feb2bb.js";import{k as L}from"./PopupTemplate-2917795f.js";import"./UniqueValueRenderer-08aa8b40.js";import{b as N,n as k}from"./jsonUtils-511fa9a1.js";import{O as H}from"./MultiOriginJSONSupport-98cda0d2.js";import{t as J,r as F}from"./typedArrayUtil-4015bf74.js";import"./ArrayPool-45db95ab.js";import{t as Z,i as R}from"./typeUtils-17403a33.js";import{b as z}from"./Layer-d4420615.js";import{a as I}from"./Error-1dfe2922.js";import{m as U}from"./Loadable-772aaf20.js";import{N as V,F as O,v as $,x as W,k as K,T as X,S as Y,I as ee,j as te}from"./ogcFeatureUtils-29cc0952.js";import re from"./FeatureSet-daef9679.js";import{k as x,a as oe}from"./Extent-54ef1174.js";import{i as ie}from"./APIKeyMixin-62cd629d.js";import{n as se}from"./BlendLayer-00b35d0f.js";import{o as pe}from"./CustomParametersMixin-1353f893.js";import{n as ne,p as ae}from"./FeatureReductionLayer-df295e9a.js";import{c as le,d as ue,m as me,a as de,p as ce,l as ye,f as fe}from"./OperationalLayer-06028ec1.js";import{c as he}from"./OrderedLayer-5a5e20b8.js";import{v as ge}from"./PortalLayer-2a93959d.js";import{p as ve}from"./RefreshableLayer-e9f8071f.js";import{t as Se}from"./ScaleRangeLayer-21fc7ea0.js";import{a as xe}from"./TemporalLayer-797e0d5e.js";import{n as we}from"./FeatureType-980424ee.js";import{y as Ce}from"./Field-a857bb5a.js";import{s as be}from"./fieldProperties-69262b89.js";import{F as T,b as Fe}from"./fieldUtils-cb9b3e6e.js";import{j as Re,i as Ie}from"./labelingInfo-aad6832f.js";import{x as D}from"./Query-8a7aa408.js";import{p as Oe}from"./popupUtils-3b3b82a2.js";import"./string-7d6c8f5c.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-e323addc.js";import"./Polyline-d942e774.js";import"./Clonable-c315fc8d.js";import"./Collection-8f94e599.js";import"./Evented-7dfb249a.js";import"./SimpleObservable-ddf0ceba.js";import"./jsonMap-c8081704.js";import"./enumeration-cda3949b.js";import"./number-1bdcdfd9.js";import"./locale-30120714.js";import"./Identifiable-d701141a.js";import"./symbols-d548a197.js";import"./CIMSymbol-308c5b42.js";import"./Symbol-6522d2f3.js";import"./Color-7a3d8c62.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-2c2d0d87.js";import"./aaBoundingBox-10130714.js";import"./request-3bbdab19.js";import"./preload-helper-596b5639.js";import"./persistableUrlUtils-2c2cd088.js";import"./collectionUtils-07fb1a58.js";import"./Portal-af5b2c18.js";import"./PortalGroup-100f1bed.js";import"./PortalUser-0170111d.js";import"./LegendOptions-998df0a8.js";import"./arcadeOnDemand-490dc8ce.js";import"./reactiveUtils-b911287d.js";import"./diffUtils-f2c670bd.js";import"./colorRamps-68d0ae1f.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-c3b235bf.js";import"./jsonUtils-196b5f3d.js";import"./compilerUtils-c5090cf5.js";import"./lengthUtils-f3b6e37f.js";import"./unitUtils-58dc72ed.js";import"./jsonUtils-2b587c65.js";import"./styleUtils-58c095ea.js";import"./DictionaryLoader-e6470716.js";import"./LRUCache-f9ba273b.js";import"./MemCache-15515535.js";import"./deprecate-9e0289e6.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./Promise-e08b9d4d.js";import"./featureConversionUtils-99b22ab9.js";import"./OptimizedFeature-aa2e72dc.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./geojson-d0d048a8.js";import"./clientSideDefaults-ba31a7fc.js";import"./QueryEngineCapabilities-42e44ded.js";import"./defaultsJSON-b087dd4d.js";import"./FieldsIndex-b44c88ca.js";import"./fieldType-36e8171c.js";import"./parser-60fed632.js";import"./mat4-62d5e6a4.js";import"./TimeExtent-dfe3f644.js";import"./ElevationInfo-01beda98.js";import"./asyncUtils-bd6eb812.js";import"./PortalItem-49bcac17.js";import"./assets-04f03891.js";import"./TimeInfo-ce3628a3.js";import"./FeatureTemplate-281b6fcc.js";import"./labelUtils-d3906ba4.js";let c=class extends U{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:p},layer:{apiKey:n,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:n,customParameters:l},spatialReference:s,supportedCrs:p}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(s=>re.fromJSON(s))}queryFeaturesJSON(e,t={}){const s=this.getSource();return this.load(t).then(()=>V(s,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const s=new RegExp(`^${t}$`,"i");return e.conformsTo.some(p=>s.test(p))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getMaxRecordCount(e){var t,s,p,n,l,a,u,m;return((n=(p=(s=(t=e==null?void 0:e.components)==null?void 0:t.parameters)==null?void 0:s.limit)==null?void 0:p.schema)==null?void 0:n.maximum)??((m=(u=(a=(l=e==null?void 0:e.components)==null?void 0:l.parameters)==null?void 0:a.limitFeatures)==null?void 0:u.schema)==null?void 0:m.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??O,s=$(t);return J(s)?x.WGS84:new x({wkid:s})}_getSupportedSpatialReferences(e,t){const s="#/crs",p=e.crs??[O],n=p.includes(s)?p.filter(a=>a!==s).concat(t.crs):p,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter(a=>!l.test(a))}async _loadOGCServices(e,t){const s=F(t)?t.signal:null,{apiKey:p,collectionId:n,customParameters:l,fields:a,geometryType:u,hasZ:m,objectIdField:P,timeInfo:h,url:E}=e,_={fields:a==null?void 0:a.map(d=>d.toJSON()),geometryType:Z.toJSON(u),hasZ:m,objectIdField:P,timeInfo:h==null?void 0:h.toJSON()},y={apiKey:p,customParameters:l,signal:s},g=await W(E,y),[w,C]=await Promise.all([K(g,y),X(g,y)]);if(!this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new I("ogc-feature-layer:no-geojson-support","Server does not support geojson");const f=C.collections.find(d=>d.id===n);if(!f)throw new I("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const q=this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Y(g,y):null,b=await ee(f,_,y),M=this._getMaxRecordCount(q),G=this._getCapabilities(b.hasZ,M),Q=this._getStorageSpatialReference(f).toJSON(),A=this._getSupportedSpatialReferences(f,C),B=new RegExp(`^${te}`,"i"),v={};for(const d of A){const S=$(d);F(S)&&(v[S]||(v[S]=d.replace(B,"")))}this.featureDefinition={capabilities:G,collection:f,layerDefinition:b,spatialReference:Q,supportedCrs:v}}};r([i()],c.prototype,"featureDefinition",void 0),r([i({constructOnly:!0})],c.prototype,"layer",void 0),r([i()],c.prototype,"type",void 0),c=r([j("esri.layers.graphics.sources.OGCFeatureSource")],c);const $e=be();let o=class extends ie(pe(ne(ae(se(he(xe(Se(le(ge(ve(H(z)))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new c({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){T(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Oe(this,e)}createQuery(){return new D}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let s,p=!1;const n=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return l!=null&&this.types&&(p=this.types.some(u=>{var m;return u.id==l&&(s=(m=u.domains)==null?void 0:m[e],(s==null?void 0:s.type)==="inherited"&&(s=this._getLayerDomain(e)),!0)})),p||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(D.from(e)||this.createQuery(),t)).then(s=>{var p;return(p=s==null?void 0:s.features)==null||p.forEach(n=>{n.layer=n.sourceLayer=this}),s})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),T(this.renderer,this.fieldsIndex),Fe(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([i({readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"capabilities",void 0),r([i({type:String,json:{write:!0}})],o.prototype,"collectionId",void 0),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String})],o.prototype,"definitionExpression",void 0),r([i({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],o.prototype,"description",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Number})],o.prototype,"effectiveMaxRecordCount",null),r([i(ue)],o.prototype,"elevationInfo",void 0),r([i({type:[Ce],json:{origins:{service:{name:"layerDefinition.fields"}}}})],o.prototype,"fields",void 0),r([i($e.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({readOnly:!0,type:oe,json:{origins:{service:{name:"layerDefinition.extent"}}}})],o.prototype,"fullExtent",void 0),r([i({type:R.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:R.read}}}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],o.prototype,"hasZ",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i({type:[Re],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Ie},write:!0}}}})],o.prototype,"labelingInfo",void 0),r([i(me)],o.prototype,"labelsVisible",void 0),r([i(de)],o.prototype,"legendEnabled",void 0),r([i({type:Number})],o.prototype,"maxRecordCount",void 0),r([i({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i({type:["OGCFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(ce)],o.prototype,"popupEnabled",void 0),r([i({type:L,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:N,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:k,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],o.prototype,"renderer",null),r([i(ye)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({readOnly:!0,type:x,json:{origins:{service:{read:!0}}}})],o.prototype,"spatialReference",void 0),r([i({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],o.prototype,"title",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([i({type:[we]})],o.prototype,"types",void 0),r([i(fe)],o.prototype,"url",void 0),o=r([j("esri.layers.OGCFeatureLayer")],o);const Cr=o;export{Cr as default};