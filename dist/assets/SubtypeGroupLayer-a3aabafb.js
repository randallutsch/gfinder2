import{_ as Q}from"./preload-helper-101896b7.js";import{e as i,y as o,n as L,l as H,j as z,w as N,t as Z,J as P}from"./cast-7ef3a066.js";import{j as x}from"./Collection-8f94e599.js";import{a as w}from"./Error-1dfe2922.js";import{a as R}from"./HandleOwner-2d282b7c.js";import{r as C,s as K,B as W}from"./typedArrayUtil-4015bf74.js";import{O as q}from"./MultiOriginJSONSupport-98cda0d2.js";import{w as X,y as Y}from"./promiseUtils-e323addc.js";import{l as ee,U as te}from"./reactiveUtils-b911287d.js";import{t as re}from"./LayerFloorInfo-152559a6.js";import{j as ie,G as oe}from"./request-4f5c54dd.js";import"./ArrayPool-45db95ab.js";import{o as F,r as M}from"./Extent-54ef1174.js";import{b as se}from"./Layer-aa68e6a9.js";import{i as ne}from"./APIKeyMixin-62cd629d.js";import{p as ae}from"./ArcGISService-880ea933.js";import{n as le}from"./BlendLayer-00b35d0f.js";import{o as pe}from"./CustomParametersMixin-1353f893.js";import{a as ue}from"./EditBusLayer-862b6183.js";import{y as de,M as ye,F as me,x as ce,P as he,L as fe,O as be,v as ge,E as ve,I as we,T as $e,j as Fe,a as Se,D as Oe,G as Ie}from"./FeatureLayerBase-09de2b86.js";import{m as je,a as Te,v as _e,I as xe,p as Le,c as Ce,j as Ee}from"./OperationalLayer-0fbaa211.js";import{v as Pe}from"./PortalLayer-7f41b677.js";import{p as Ge}from"./RefreshableLayer-e9f8071f.js";import{t as De}from"./ScaleRangeLayer-21fc7ea0.js";import{a as Ve}from"./TemporalLayer-0dd6ce52.js";import{y as Ne}from"./arcgisLayerUrl-10f7b1f9.js";import{s as k}from"./fieldProperties-10028ce7.js";import{F as Re,b as qe}from"./fieldUtils-75feb382.js";import{t as Me}from"./Field-a857bb5a.js";import{k as ke}from"./PopupTemplate-9da636f6.js";import{p as Ae,C as Ue,_ as Be}from"./UniqueValueRenderer-5b8937c2.js";import{p as E}from"./jsonUtils-b516d686.js";import{y as $,o as Je}from"./string-7d6c8f5c.js";import{s as Qe}from"./Identifiable-d701141a.js";import{m as He}from"./Loadable-772aaf20.js";import{p as A}from"./FeatureTemplate-281b6fcc.js";import{j as ze,i as Ze,b as Ke,u as We,d as Xe}from"./labelingInfo-f5cd653d.js";import{p as Ye}from"./popupUtils-898e37d5.js";import{v as et}from"./TimeInfo-ce3628a3.js";import{e as tt}from"./versionUtils-b3079169.js";import{x as rt}from"./Query-8a7aa408.js";import"./nextTick-3ee5a785.js";import"./Evented-7dfb249a.js";import"./SimpleObservable-ddf0ceba.js";import"./geometry-22feb2bb.js";import"./Polyline-d942e774.js";import"./typeUtils-17403a33.js";import"./jsonMap-c8081704.js";import"./parser-60fed632.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./mat4-62d5e6a4.js";import"./common-701a4199.js";import"./HeightModelInfo-91a7cb2a.js";import"./unitUtils-58dc72ed.js";import"./Clonable-c315fc8d.js";import"./RelationshipQuery-2b83908f.js";import"./TimeExtent-dfe3f644.js";import"./persistableUrlUtils-afa98d6c.js";import"./ElevationInfo-a7cee627.js";import"./lengthUtils-f3b6e37f.js";import"./opacityUtils-2c2d0d87.js";import"./asyncUtils-bd6eb812.js";import"./Portal-0c20e3a4.js";import"./locale-30120714.js";import"./PortalGroup-100f1bed.js";import"./PortalUser-7acb0e3c.js";import"./PortalItem-fdbc6f1a.js";import"./assets-6d4d2dad.js";import"./Promise-e08b9d4d.js";import"./FieldsIndex-7523f868.js";import"./arcadeOnDemand-797f4f1c.js";import"./enumeration-cda3949b.js";import"./fieldType-36e8171c.js";import"./number-1bdcdfd9.js";import"./symbols-87ca67f4.js";import"./CIMSymbol-52d72a23.js";import"./Symbol-6522d2f3.js";import"./Color-7a3d8c62.js";import"./mathUtils-daf59e84.js";import"./aaBoundingBox-10130714.js";import"./collectionUtils-07fb1a58.js";import"./LegendOptions-998df0a8.js";import"./diffUtils-f2c670bd.js";import"./colorRamps-68d0ae1f.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-17f3b359.js";import"./jsonUtils-196b5f3d.js";import"./compilerUtils-c5090cf5.js";import"./jsonUtils-d1659db1.js";import"./styleUtils-5b0ea69d.js";import"./DictionaryLoader-3932e3bb.js";import"./LRUCache-f9ba273b.js";import"./MemCache-15515535.js";import"./deprecate-9e0289e6.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./labelUtils-d3906ba4.js";import"./defaultsJSON-b087dd4d.js";let f=class extends H{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const r of Object.keys(e))t[r]=Me(e[r]);return t}writeDomains(e,t){var n;if(!e)return;const r={};for(const s of Object.keys(e))e[s]&&(r[s]=(n=e[s])==null?void 0:n.toJSON());t.domains=r}};i([o({type:Number,json:{write:!0}})],f.prototype,"code",void 0),i([o({type:Object,json:{write:!0}})],f.prototype,"defaultValues",void 0),i([o({json:{write:!0}})],f.prototype,"domains",void 0),i([F("domains")],f.prototype,"readDomains",null),i([M("domains")],f.prototype,"writeDomains",null),i([o({type:String,json:{write:!0}})],f.prototype,"name",void 0),f=i([L("esri.layers.support.Subtype")],f);const it=f,ot=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],U={key:"type",base:Ae,errorContext:"renderer",typeMap:{simple:E,"unique-value":Ue,"class-breaks":Be}},G=k(),D=z({types:U});let st=0;function O(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function nt(e){return new E({symbol:at(e)})}function at(e){switch(e){case"point":case"multipoint":return Xe.clone();case"polyline":return We.clone();case"polygon":case"multipatch":return Ke.clone();default:return null}}function lt(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function B(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(n=>n.code===e)}function pt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const n={},s=B(e,t);if(C(s)){const{defaultValues:a}=s;for(const p in a)n[p]=a[p]}return n[t.subtypeField]=e,new A({name:"New Feature",drawingTool:r,prototype:{attributes:n}})}const ut="esri.layers.support.SubtypeSublayer";let l=class extends R(q(Qe(He))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${st++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}writeFieldOverrides(e,t,r){const{fields:n,parent:s}=this;let a;if(n){a=[];let p=0;n.forEach(({name:y,alias:c,editable:b,visible:g})=>{var I;if(!g)return;const d=(I=s==null?void 0:s.fields)==null?void 0:I.find(S=>S.name===y);if(!d)return;const h={name:y};let v=!1;c!==d.alias&&(h.alias=c,v=!0),b!==d.editable&&(h.editable=b,v=!0),a.push(h),v&&p++}),p===0&&a.length===n.length&&(a=null)}else a=$(e);a!=null&&a.length&&Je(r,a,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,n=e==null?void 0:e.fields;if(!(n!=null&&n.length))return null;const{subtypes:s,subtypeField:a}=e,p=s.find(g=>g.code===r),y=p==null?void 0:p.defaultValues,c=p==null?void 0:p.domains,b=[];for(const g of n){const d=g.clone(),{name:h}=d,v=t==null?void 0:t.find(j=>j.name===h);if(d.visible=!t||!!v,v){const{alias:j,editable:J}=v;j&&(d.alias=j),J===!1&&(d.editable=!1)}const I=(y==null?void 0:y[h])??null;d.defaultValue=h===a?r:I;const S=(c==null?void 0:c[h])??null;d.domain=h===a?null:S?S.type==="inherited"?d.domain:S.clone():null,b.push(d)}return b}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){Re(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?nt(e.geometryType):null}readRendererFromService(e,t,r){var y,c,b;if(t.type==="Table")return null;const n=(y=t.drawingInfo)==null?void 0:y.renderer,s=D(n,t,r);let a;const{subtypeCode:p}=this;if(p!=null&&lt(s,t.subtypeField)){const g=(c=s.uniqueValueInfos)==null?void 0:c.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(p));g&&(a=new E({symbol:g.symbol}))}else(s==null?void 0:s.type)!=="simple"||(b=s.visualVariables)!=null&&b.length||(a=s);return a}readRenderer(e,t,r){var s,a,p;const n=(a=(s=t==null?void 0:t.layerDefinition)==null?void 0:s.drawingInfo)==null?void 0:a.renderer;if(n&&!((p=n.visualVariables)!=null&&p.length))return D(n,t,r)||void 0}readTemplatesFromService(e,t){return[pt(this.subtypeCode,t)]}readTitleFromService(e,t){const r=B(this.subtypeCode,t);return C(r)?r.name:null}createPopupTemplate(e){let t=this;const{parent:r,fields:n,title:s}=this;if(r){const{displayField:a,editFieldsInfo:p,objectIdField:y}=r;t={displayField:a,editFieldsInfo:p,fields:n,objectIdField:y,title:s}}return Ye(t,e)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return ot.some(e=>this.originIdOf(e)===N.USER)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([o({json:{write:{ignoreOrigin:!0}}})],l.prototype,"charts",void 0),i([o({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],l.prototype,"editingEnabled",void 0),i([o({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],l.prototype,"fieldOverrides",void 0),i([M("fieldOverrides")],l.prototype,"writeFieldOverrides",null),i([o({...G.fields,readOnly:!0,json:{read:!1}})],l.prototype,"fields",null),i([o(G.fieldsIndex)],l.prototype,"fieldsIndex",void 0),i([o({type:de,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],l.prototype,"formTemplate",void 0),i([o({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),i([o({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),i([o(O($(je)))],l.prototype,"labelsVisible",void 0),i([o({type:[ze],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:Ze},write:{ignoreOrigin:!0}}})],l.prototype,"labelingInfo",void 0),i([o({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"layerType",void 0),i([o(O($(Te)))],l.prototype,"legendEnabled",void 0),i([o({type:["show","hide"]})],l.prototype,"listMode",void 0),i([o((()=>{const e=$(_e);return e.json.origins.service.read=!1,O(e)})())],l.prototype,"minScale",void 0),i([o((()=>{const e=$(xe);return e.json.origins.service.read=!1,O(e)})())],l.prototype,"maxScale",void 0),i([o({readOnly:!0})],l.prototype,"effectiveScaleRange",null),i([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],l.prototype,"opacity",void 0),i([o()],l.prototype,"parent",void 0),i([o(O($(Le)))],l.prototype,"popupEnabled",void 0),i([o({type:ke,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],l.prototype,"popupTemplate",void 0),i([o({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),i([o({types:U,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],l.prototype,"renderer",null),i([F("service","renderer",["drawingInfo.renderer","subtypeField","type"])],l.prototype,"readRendererFromService",null),i([F("renderer",["layerDefinition.drawingInfo.renderer"])],l.prototype,"readRenderer",null),i([o({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"subtypeCode",void 0),i([o({type:[A],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],l.prototype,"templates",void 0),i([F("service","templates",["geometryType","subtypeField","subtypes","type"])],l.prototype,"readTemplatesFromService",null),i([o({type:String,json:{write:{ignoreOrigin:!0}}})],l.prototype,"title",void 0),i([F("service","title",["subtypes"])],l.prototype,"readTitleFromService",null),i([o({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],l.prototype,"visible",void 0),l=i([L(ut)],l);const T=l,m="SubtypeGroupLayer",dt="esri.layers.SubtypeGroupLayer";function V(e,t){return new w("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const _=k();let u=class extends ye(ue(le(Ve(De(Ge(ae(Ce(Pe(q(pe(ne(R(se))))))))))))){constructor(...e){super(...e),this._handles=new Z,this._sublayersCollectionChanged=!1,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(x.ofType(T)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles(ee(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),te))}destroy(){var e;(e=this.source)==null||e.destroy(),this._handles=K(this._handles)}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=C(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(X).then(async()=>{if(!this.url)throw new w("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new w("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get parsedUrl(){const e=ie(this.url);return e!=null&&this.layerId!=null&&(e.path=oe(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?Ne(this.url,t):t}async addAttachment(e,t){return me(this,e,t,m)}async updateAttachment(e,t,r){return ce(this,e,t,r,m)}async applyEdits(e,t){return he(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await Y(Q(()=>import("./FeatureLayerSource-c2399c5d.js"),["assets/FeatureLayerSource-c2399c5d.js","assets/cast-7ef3a066.js","assets/typedArrayUtil-4015bf74.js","assets/string-7d6c8f5c.js","assets/Error-1dfe2922.js","assets/ArrayPool-45db95ab.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-e323addc.js","assets/geometry-22feb2bb.js","assets/Extent-54ef1174.js","assets/Polyline-d942e774.js","assets/typeUtils-17403a33.js","assets/jsonMap-c8081704.js","assets/Graphic-17f3b359.js","assets/PopupTemplate-9da636f6.js","assets/Clonable-c315fc8d.js","assets/Collection-8f94e599.js","assets/Evented-7dfb249a.js","assets/SimpleObservable-ddf0ceba.js","assets/fieldUtils-75feb382.js","assets/preload-helper-101896b7.js","assets/arcadeOnDemand-797f4f1c.js","assets/enumeration-cda3949b.js","assets/number-1bdcdfd9.js","assets/locale-30120714.js","assets/Identifiable-d701141a.js","assets/symbols-87ca67f4.js","assets/CIMSymbol-52d72a23.js","assets/Symbol-6522d2f3.js","assets/Color-7a3d8c62.js","assets/colorUtils-639f4d25.js","assets/mathUtils-daf59e84.js","assets/common-701a4199.js","assets/screenUtils-7afeb41c.js","assets/opacityUtils-2c2d0d87.js","assets/aaBoundingBox-10130714.js","assets/request-4f5c54dd.js","assets/persistableUrlUtils-afa98d6c.js","assets/collectionUtils-07fb1a58.js","assets/Portal-0c20e3a4.js","assets/Loadable-772aaf20.js","assets/Promise-e08b9d4d.js","assets/PortalGroup-100f1bed.js","assets/PortalUser-7acb0e3c.js","assets/jsonUtils-196b5f3d.js","assets/TimeExtent-dfe3f644.js","assets/clientSideDefaults-ba31a7fc.js","assets/QueryEngineCapabilities-42e44ded.js","assets/defaultsJSON-b087dd4d.js","assets/Query-8a7aa408.js","assets/Field-a857bb5a.js","assets/fieldType-36e8171c.js","assets/executeQueryJSON-3f3de317.js","assets/normalizeUtils-9ff08cf4.js","assets/query-46c36c98.js","assets/pbfQueryUtils-b3e55309.js","assets/pbf-99764d75.js","assets/OptimizedFeature-aa2e72dc.js","assets/unitUtils-58dc72ed.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/queryZScale-9c82ac96.js","assets/zscale-65468675.js","assets/FeatureSet-b6696527.js","assets/featureConversionUtils-99b22ab9.js","assets/RelationshipQuery-2b83908f.js","assets/executeForIds-11e022e0.js","assets/TopFeaturesQuery-c1b3daab.js","assets/arcgisLayerUrl-10f7b1f9.js","assets/editsZScale-6893b5ed.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=fe(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=re(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return be(this,e,t,m)}async fetchRecomputedExtents(e){return ge(this,e,m)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}async queryAttachments(e,t){return ve(this,e,t,m)}async queryFeatures(e,t){const r=await this.load(),n=rt.from(e)??r.createQuery(),s=W(n.outFields,[]);s.includes(this.subtypeField)||(s.push(this.subtypeField),n.outFields=s);const a=await r.source.queryFeatures(n,t);if(a!=null&&a.features)for(const p of a.features)p.layer=this._findSublayerForFeature(p),p.sourceLayer=this;return a}async queryObjectIds(e,t){return we(this,e,t,m)}async queryFeatureCount(e,t){return $e(this,e,t,m)}async queryExtent(e,t){return Fe(this,e,t,m)}async queryRelatedFeatures(e,t){return Se(this,e,t,m)}async queryRelatedFeaturesCount(e,t){return Oe(this,e,t,m)}write(e,t){var a;const{origin:r,layerContainerType:n,messages:s}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&n!=="tables")return s==null||s.push(V(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&n==="tables")return s==null||s.push(V(this,"using a non-table source cannot be written to tables in web maps")),null;return(a=this.sublayers)!=null&&a.length?super.write(e,t):(s==null||s.push(new w("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&tt(this,e)}_findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.sublayers.find(n=>n.subtypeCode===r)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new w("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new w("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),qe(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return Ie(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(n=>n.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.handles.remove("sublayers-owner")),e&&(e.forEach(r=>{r.parent=this}),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",({item:r})=>{r.parent=this}),e.on("after-remove",({item:r})=>{r.parent=null}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([o({readOnly:!0})],u.prototype,"createQueryVersion",null),i([o({type:Boolean,readOnly:!0})],u.prototype,"editingEnabled",null),i([o({..._.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),i([o(_.fieldsIndex)],u.prototype,"fieldsIndex",void 0),i([o(Ee)],u.prototype,"id",void 0),i([o({type:["show","hide","hide-children"]})],u.prototype,"listMode",void 0),i([o({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],u.prototype,"operationalLayerType",void 0),i([o(_.outFields)],u.prototype,"outFields",void 0),i([o({readOnly:!0})],u.prototype,"parsedUrl",null),i([o()],u.prototype,"source",null),i([o({type:[it],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],u.prototype,"subtypes",void 0),i([o({type:x.ofType(T),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const n=e.map(({code:s})=>{const a=new T({subtypeCode:s});return a.read(t,r),a});return new(x.ofType(T))(n)}}}},name:"layers",write:{overridePolicy(e,t,r){const n=this.originOf("sublayers"),s=N.PORTAL_ITEM;let a=!0;if(P(n)===s&&P(r.origin)>s){const p=e.some(y=>y.hasUserOverrides());a=this._sublayersCollectionChanged||p}return{enabled:a,ignoreOrigin:!0}}}}})],u.prototype,"sublayers",void 0),i([o({type:et})],u.prototype,"timeInfo",void 0),i([o({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),i([F("service","title",["name"])],u.prototype,"readTitleFromService",null),i([o({json:{read:!1}})],u.prototype,"type",void 0),u=i([L(dt)],u);const ii=u;export{ii as default};
