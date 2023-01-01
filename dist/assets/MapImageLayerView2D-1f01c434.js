import{e as n,y as m,n as F,l as L}from"./cast-34ff1fab.js";import O from"./Graphic-ba3a92c9.js";import{j as Q}from"./Collection-3317d203.js";import{a as G,s as z}from"./Error-e5869661.js";import{x as D,E as Z,j as W}from"./promiseUtils-281d25c9.js";import{a as K,l as A}from"./reactiveUtils-aec98ee9.js";import{r as P,t as X}from"./typedArrayUtil-6bfe4dae.js";import{v as Y,r as ee}from"./ensureType-abaf235a.js";import{a as te}from"./BitmapContainer-8069c016.js";import{y as re,u as ie}from"./LayerView-3939a1f4.js";import{o as oe}from"./BaseGraphicContainer-f6bcd737.js";import{n as se}from"./HighlightGraphicContainer-e137698b.js";import{v as ae}from"./ExportStrategy-5bb9cd75.js";import{_ as ne}from"./preload-helper-596b5639.js";import{y as pe}from"./symbols-0eeb49ca.js";import{h as me}from"./string-46813dd9.js";import{$ as le}from"./unitUtils-2906b0b4.js";import{a as q,k as he,o as ue,r as ye}from"./Extent-b8913cd1.js";import{i as de,r as ce}from"./scaleUtils-e6e3e274.js";import{g as fe}from"./OperationalLayer-421969eb.js";import{c as ge}from"./ExportImageParameters-30ed4288.js";import{n as U}from"./floorFilterUtils-080a7cd2.js";import{s as T,a as we}from"./drapedUtils-06f95ae1.js";import{U as ve}from"./request-c6faf466.js";import{v as be}from"./normalizeUtils-f2358696.js";import{f as xe,s as $e,i as Ie}from"./utils-a49efee8.js";import{t as _e}from"./LayerFloorInfo-21f09518.js";import{c as Ee,v as Se}from"./jsonUtils-eb956695.js";import{i as Pe}from"./sublayerUtils-7c76a276.js";import{i as Re}from"./geometry-1b3a0099.js";import{T as Fe}from"./TimeExtent-b83e45a0.js";import{t as je}from"./typeUtils-0cf27003.js";import{i as Ne}from"./arcadeOnDemand-c5034a8b.js";import{i as Oe}from"./GraphicsCollection-f1594a92.js";import{d as Ue,s as Ve}from"./popupUtils-cd950428.js";import{i as Ge}from"./RefreshableLayerView-233725a1.js";import"./nextTick-3ee5a785.js";import"./PopupTemplate-8759f34d.js";import"./Clonable-a26a28b0.js";import"./fieldUtils-c253753a.js";import"./jsonMap-92eea954.js";import"./enumeration-e40d8895.js";import"./number-4b1bfb24.js";import"./locale-30120714.js";import"./Identifiable-016ad07d.js";import"./Polyline-7684a66d.js";import"./Evented-fac53f7f.js";import"./SimpleObservable-f97014ec.js";import"./CIMSymbol-6c8aee70.js";import"./Symbol-8a110cc7.js";import"./Color-0f9fdd46.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-ea6b845d.js";import"./SimpleFillSymbol-80498a78.js";import"./aaBoundingBox-77ee83e3.js";import"./persistableUrlUtils-3427b748.js";import"./collectionUtils-23cca63a.js";import"./Portal-d13c5d2a.js";import"./Loadable-3c0fb2d0.js";import"./Promise-19e65545.js";import"./PortalGroup-506cda94.js";import"./PortalUser-12cb329a.js";import"./WGLContainer-82b81574.js";import"./mat3f32-d3d088e8.js";import"./enums-64ab819c.js";import"./mat3-45e3f2eb.js";import"./vec2f32-461e65a9.js";import"./pixelUtils-3328f7e1.js";import"./utils-8ec30506.js";import"./parser-6760a715.js";import"./mat4-62d5e6a4.js";import"./enums-4ca4641f.js";import"./MaterialKey-7483d64a.js";import"./Utils-a3ec9931.js";import"./enums-ef042d89.js";import"./Texture-a2ec75db.js";import"./context-util-2080d28f.js";import"./VertexElementDescriptor-2925c6af.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./vec2f64-e0301652.js";import"./VertexArrayObject-945630a0.js";import"./ProgramTemplate-49a2b79c.js";import"./StyleDefinition-ae208a94.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./earcut-58237617.js";import"./vec2-f978aef8.js";import"./featureConversionUtils-9849a680.js";import"./OptimizedFeature-06185297.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./HandleOwner-9428adb4.js";import"./ExpandedCIM-95a6492d.js";import"./BidiEngine-836b7ef6.js";import"./aaBoundingRect-71c1e25d.js";import"./mat2d-80bd93af.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-68567b49.js";import"./GeometryUtils-eebff0a0.js";import"./floatRGBA-305df8f3.js";import"./normalizeUtilsSync-17da0933.js";import"./projectionSupport-a55065e0.js";import"./projection-0e524eaf.js";import"./assets-544006ef.js";import"./zscale-750d6efd.js";import"./json-48e3ea08.js";import"./labelingInfo-2aefe891.js";import"./labelUtils-cfa36e70.js";import"./defaultsJSON-b087dd4d.js";import"./jsonUtils-b9ebb089.js";import"./FeatureContainer-448644b8.js";import"./TileContainer-aa053718.js";import"./TileKey-c8cdd066.js";import"./Queue-bd70231f.js";import"./visualVariablesUtils-63ed6b67.js";import"./visualVariablesUtils-be33a1d6.js";import"./lengthUtils-02fceda8.js";import"./capabilities-41f4ea67.js";import"./Matcher-e9c80b09.js";import"./TileStrategy-67e80276.js";import"./TileStore-d37d632e.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./Query-394dcfc7.js";import"./Field-db318fdd.js";import"./fieldType-11b4c3ca.js";import"./FullTextSearch-7a786b52.js";import"./tileUtils-60097bb2.js";import"./TileClipper-5ee055e7.js";import"./Geometry-daada628.js";import"./LRUCache-9d77066f.js";import"./MemCache-97cd02d3.js";import"./devEnvironmentUtils-5002a058.js";import"./styleUtils-ea2c30a4.js";import"./schemaUtils-cb6f4fa9.js";import"./diffUtils-67450e3a.js";import"./createSymbolSchema-7219e927.js";import"./rendererUtils-cc7003e2.js";import"./FeatureReductionLayer-9b4d60f8.js";import"./BlendLayer-1dfdcb30.js";import"./UniqueValueRenderer-07be7be0.js";import"./LegendOptions-8b163282.js";import"./colorRamps-d6116b89.js";import"./sizeVariableUtils-d4870b0d.js";import"./compilerUtils-05c96a64.js";import"./jsonUtils-30a58fb0.js";import"./DictionaryLoader-076d7343.js";import"./deprecate-c2edfb4d.js";import"./util-dd3059e1.js";import"./ComputedAttributeStorage-16940434.js";import"./FeatureSetReader-4f707d3c.js";import"./centroid-5232e2a4.js";import"./FieldsIndex-bec5c377.js";import"./vec3f32-4322908d.js";import"./TileInfo-f6a83d08.js";import"./Bitmap-0184cfeb.js";import"./ElevationInfo-7059590d.js";const M=o=>o.spatialReference.wkid||JSON.stringify(o.spatialReference);function Ae(o,e){const{dpi:t,gdbVersion:i,geometry:r,geometryPrecision:s,height:u,layerOption:l,mapExtent:a,maxAllowableOffset:p,returnFieldName:h,returnGeometry:y,returnUnformattedValues:g,returnZ:I,spatialReference:x,timeExtent:$,tolerance:c,width:E}=o.toJSON(),{dynamicLayers:w,layerDefs:f,layerIds:v}=Te(o),V=e&&P(e.geometry)?e.geometry:null,b={geometryPrecision:s,maxAllowableOffset:p,returnFieldName:h,returnGeometry:y,returnUnformattedValues:g,returnZ:I,tolerance:c},S=V&&V.toJSON()||r;if(b.imageDisplay=`${E},${u},${t}`,i&&(b.gdbVersion=i),S&&(delete S.spatialReference,b.geometry=JSON.stringify(S),b.geometryType=Ee(S)),x?b.sr=x.wkid||JSON.stringify(x):S&&S.spatialReference?b.sr=M(S):a&&a.spatialReference&&(b.sr=M(a)),b.time=$?[$.start,$.end].join(","):null,a){const{xmin:C,ymin:H,xmax:B,ymax:k}=a;b.mapExtent=`${C},${H},${B},${k}`}return f&&(b.layerDefs=f),w&&!f&&(b.dynamicLayers=w),b.layers=l==="popup"?"visible":l,v&&!w&&(b.layers+=`:${v.join(",")}`),b}function Te(o){var x,$;const{mapExtent:e,floors:t,width:i,sublayers:r,layerIds:s,layerOption:u,gdbVersion:l}=o,a=($=(x=r==null?void 0:r.find(c=>c.layer!=null))==null?void 0:x.layer)==null?void 0:$.serviceSublayers,p=u==="popup",h={},y=de({extent:e,width:i,spatialReference:e==null?void 0:e.spatialReference}),g=[],I=c=>{const E=y===0,w=c.minScale===0||y<=c.minScale,f=c.maxScale===0||y>=c.maxScale;if(c.visible&&(E||w&&f))if(c.sublayers)c.sublayers.forEach(I);else{if((s==null?void 0:s.includes(c.id))===!1||p&&(!c.popupTemplate||!c.popupEnabled))return;g.unshift(c)}};if(r==null||r.forEach(I),r&&!g.length)h.layerIds=[];else{const c=Pe(g,a,l),E=g.map(w=>{const f=U(t,w);return w.toExportImageJSON(f)});if(c)h.dynamicLayers=JSON.stringify(E);else{if(r){let f=g.map(({id:v})=>v);s&&(f=f.filter(v=>s.includes(v))),h.layerIds=f}else s!=null&&s.length&&(h.layerIds=s);const w=Me(t,g);if(P(w)&&w.length){const f={};for(const v of w)v.definitionExpression&&(f[v.id]=v.definitionExpression);Object.keys(f).length&&(h.layerDefs=JSON.stringify(f))}}}return h}function Me(o,e){const t=!!(o!=null&&o.length),i=e.filter(r=>r.definitionExpression!=null||t&&r.floorInfo!=null);return i.length?i.map(r=>{const s=U(o,r),u=_e(s,r.definitionExpression);return{id:r.id,definitionExpression:u}}):null}var N;let d=N=class extends L{constructor(o){super(o),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}static from(o){return Y(N,o)}};n([m({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),n([m()],d.prototype,"floors",void 0),n([m({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),n([m({types:Re,json:{read:Se,write:!0}})],d.prototype,"geometry",void 0),n([m({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),n([m({type:Number,json:{write:!0}})],d.prototype,"height",void 0),n([m({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),n([m({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),n([m({type:q,json:{write:!0}})],d.prototype,"mapExtent",void 0),n([m({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),n([m({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),n([m({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),n([m({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),n([m({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),n([m({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),n([m({type:he,json:{write:!0}})],d.prototype,"spatialReference",void 0),n([m()],d.prototype,"sublayers",void 0),n([m({type:Fe,json:{write:!0}})],d.prototype,"timeExtent",void 0),n([m({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),n([m({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=N=n([F("esri.rest.support.IdentifyParameters")],d);const J=d;let _=class extends L{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return O.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:i,geometry:r}=e;i&&(t.attributes={...i}),P(r)&&(t.geometry=r.toJSON(),t.geometryType=je.toJSON(r.type))}};n([m({type:String,json:{write:!0}})],_.prototype,"displayFieldName",void 0),n([m({type:O})],_.prototype,"feature",void 0),n([ue("feature",["attributes","geometry"])],_.prototype,"readFeature",null),n([ye("feature")],_.prototype,"writeFeature",null),n([m({type:Number,json:{write:!0}})],_.prototype,"layerId",void 0),n([m({type:String,json:{write:!0}})],_.prototype,"layerName",void 0),_=n([F("esri.rest.support.IdentifyResult")],_);const Le=_;async function qe(o,e,t){const i=(e=Ce(e)).geometry?[e.geometry]:[],r=xe(o);return r.path+="/identify",be(i).then(s=>{const u=Ae(e,{geometry:s&&s[0]}),l=$e({...r.query,f:"json",...u}),a=Ie(l,t);return ve(r.path,a).then(Je).then(p=>He(p,e.sublayers))})}function Je(o){const e=o.data;return e.results=e.results||[],e.exceededTransferLimit=Boolean(e.exceededTransferLimit),e.results=e.results.map(t=>Le.fromJSON(t)),e}function Ce(o){return o=J.from(o)}function He(o,e){if(!(e!=null&&e.length))return o;const t=new Map;function i(r){t.set(r.id,r),r.sublayers&&r.sublayers.forEach(i)}e.forEach(i);for(const r of o.results)r.feature.sourceLayer=t.get(r.layerId);return o}let j=null;const Be=o=>{let e=class extends o{constructor(){super(...arguments),this._featuresResolutions=new WeakMap,this.highlightGraphics=new Oe,this.updateHighlightedFeatures=D(async t=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(t).catch(()=>{}))})}initialize(){this.exportImageParameters=new ge({layer:this.layer}),this.handles.add([K(()=>this.highlightGraphics,"change",t=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(t.added).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)})])}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(t,i){var u,l,a,p;const{layer:r}=this;if(!t)throw new G("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const s=((l=(u=this.layer.capabilities)==null?void 0:u.operations)==null?void 0:l.supportsQuery)??!0;if(!((((p=(a=this.layer.capabilities)==null?void 0:a.operations)==null?void 0:p.supportsIdentify)??!0)&&this.layer.version>=10.5)&&!s)throw new G("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:r});return s?this._fetchPopupFeaturesUsingQueries(t,i):this._fetchPopupFeaturesUsingIdentify(t,i)}canResume(){var t;return!!super.canResume()&&!((t=this.timeExtent)!=null&&t.isEmpty)}async _updateHighlightedFeaturesSymbols(t){for(const i of t){const r="renderer"in i.sourceLayer&&i.sourceLayer.renderer;"geometryType"in i.sourceLayer&&i.sourceLayer.geometryType==="point"&&r&&"getSymbolAsync"in r&&r.getSymbolAsync(i).then(async s=>{var a;let u="width"in s&&"height"in s&&s.width!=null&&s.height!=null?Math.max(s.width,s.height):"size"in s?s.size:null;const l="visualVariables"in r&&((a=r.visualVariables)==null?void 0:a.find(p=>p.type==="size"));l&&(j||(j=(await ne(()=>import("./UniqueValueRenderer-07be7be0.js").then(p=>p.v),["assets/UniqueValueRenderer-07be7be0.js","assets/cast-34ff1fab.js","assets/typedArrayUtil-6bfe4dae.js","assets/string-46813dd9.js","assets/Error-e5869661.js","assets/ensureType-abaf235a.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-281d25c9.js","assets/symbols-0eeb49ca.js","assets/CIMSymbol-6c8aee70.js","assets/enumeration-e40d8895.js","assets/jsonMap-92eea954.js","assets/Extent-b8913cd1.js","assets/fieldUtils-c253753a.js","assets/preload-helper-596b5639.js","assets/arcadeOnDemand-c5034a8b.js","assets/geometry-1b3a0099.js","assets/Polyline-7684a66d.js","assets/typeUtils-0cf27003.js","assets/Symbol-8a110cc7.js","assets/Color-0f9fdd46.js","assets/colorUtils-639f4d25.js","assets/mathUtils-daf59e84.js","assets/common-701a4199.js","assets/screenUtils-7afeb41c.js","assets/opacityUtils-ea6b845d.js","assets/SimpleFillSymbol-80498a78.js","assets/aaBoundingBox-77ee83e3.js","assets/request-c6faf466.js","assets/persistableUrlUtils-3427b748.js","assets/Collection-3317d203.js","assets/Evented-fac53f7f.js","assets/SimpleObservable-f97014ec.js","assets/collectionUtils-23cca63a.js","assets/Portal-d13c5d2a.js","assets/Loadable-3c0fb2d0.js","assets/Promise-19e65545.js","assets/locale-30120714.js","assets/PortalGroup-506cda94.js","assets/PortalUser-12cb329a.js","assets/Clonable-a26a28b0.js","assets/LegendOptions-8b163282.js","assets/reactiveUtils-aec98ee9.js","assets/diffUtils-67450e3a.js","assets/colorRamps-d6116b89.js","assets/sizeVariableUtils-d4870b0d.js","assets/Graphic-ba3a92c9.js","assets/PopupTemplate-8759f34d.js","assets/number-4b1bfb24.js","assets/Identifiable-016ad07d.js","assets/jsonUtils-eb956695.js","assets/compilerUtils-05c96a64.js","assets/lengthUtils-02fceda8.js","assets/unitUtils-2906b0b4.js","assets/jsonUtils-b9ebb089.js","assets/styleUtils-ea2c30a4.js"])).getSize),u=j(l,i,{view:this.view.type,scale:this.view.scale,shape:s.type==="simple-marker"?s.style:null})),this.highlightGraphics.includes(i)&&(i.symbol=new pe({style:"square",size:u,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),i.visible=!0,this.highlightGraphicUpdated(i,"symbol"))})}}async _updateHighlightedFeaturesGeometries(t){this._highlightGeometriesResolution=t;const i=this.highlightGraphics;if(!i.length||!this.layer.capabilities.operations.supportsQuery)return;const r=this._getTargetResolution(t),s=new Map;for(const a of i)if(!this._featuresResolutions.has(a)||this._featuresResolutions.get(a)>r){const p=a.sourceLayer;ee(s,p,()=>new Map).set(a.getObjectId(),a)}const u=Array.from(s,([a,p])=>{const h=a.createQuery();return h.objectIds=[...p.keys()],h.outFields=[a.objectIdField],h.returnGeometry=!0,h.maxAllowableOffset=r,h.outSpatialReference=this.view.spatialReference,a.queryFeatures(h)}),l=await Promise.all(u);if(!this.destroyed)for(const{features:a}of l)for(const p of a){const h=p.sourceLayer,y=s.get(h).get(p.getObjectId());y&&this.highlightGraphics.includes(y)&&(y.geometry=p.geometry,this.highlightGraphicUpdated(y,"geometry"),this._featuresResolutions.set(y,r))}}_getTargetResolution(t){const i=t*le(this.view.spatialReference),r=i/16;return r<=10?0:t/i*r}async _fetchPopupFeaturesUsingIdentify(t,i){const r=await this._createIdentifyParameters(t,i);if(X(r))return[];const{results:s}=await qe(this.layer.parsedUrl,r);return s.map(u=>u.feature)}async _createIdentifyParameters(t,i){const{floors:r,spatialReference:s,scale:u}=this.view,l=P(i)?i.event:null,a=await this._collectPopupProviders(this.layer.sublayers,u,i);if(!a.length)return null;await Promise.all(a.map(({sublayer:x})=>x.load().catch(()=>{})));const p=Math.min(me("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce((x,$)=>$.renderer?T({renderer:$.renderer,event:l}):x,2)),h=this.createFetchPopupFeaturesQueryGeometry(t,p),y=ce(u,s),g=Math.round(h.width/y),I=new q({xmin:h.center.x-y*g,ymin:h.center.y-y*g,xmax:h.center.x+y*g,ymax:h.center.y+y*g,spatialReference:h.spatialReference});return new J({floors:r,gdbVersion:this.layer.gdbVersion,geometry:t,height:g,layerOption:"popup",mapExtent:I,returnGeometry:!0,spatialReference:s,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:p,width:g})}async _fetchPopupFeaturesUsingQueries(t,i){const r=await this._collectPopupProviders(this.layer.sublayers,this.view.scale,i),s=P(i)?i.event:null,u=r.map(async({sublayer:l,popupTemplate:a})=>{var E,w;await l.load().catch(()=>{});const p=l.createQuery(),h=T({renderer:l.renderer,event:s}),y=this.createFetchPopupFeaturesQueryGeometry(t,h);if(p.geometry=y,p.outFields=await Ue(l,a),p.timeExtent=this.timeExtent,"floors"in this.view){const f=(w=(E=this.view)==null?void 0:E.floors)==null?void 0:w.clone(),v=U(f,l);P(v)&&(p.where=p.where?`(${p.where}) AND (${v})`:v)}const g=this._getTargetResolution(y.width/h),I=await this._loadArcadeModules(a),x=l.geometryType==="point"||I&&I.arcadeUtils.hasGeometryOperations(a);x||(p.maxAllowableOffset=g);const{features:$}=await l.queryFeatures(p),c=x?0:g;for(const f of $)this._featuresResolutions.set(f,c);return $});return(await Z(u)).reverse().reduce((l,a)=>a.value?[...l,...a.value]:l,[]).filter(l=>l!=null)}async _collectPopupProviders(t,i,r){const s=[],u=async a=>{const p=a.minScale===0||i<=a.minScale,h=a.maxScale===0||i>=a.maxScale;if(a.visible&&p&&h){if(a.sublayers)a.sublayers.forEach(u);else if(a.popupEnabled){const y=Ve(a,{...r,defaultPopupTemplateEnabled:!1});P(y)&&s.unshift({sublayer:a,popupTemplate:y})}}},l=t.toArray().reverse().map(u);return await Promise.all(l),s}_loadArcadeModules(t){var i;if((i=t.expressionInfos)!=null&&i.length||Array.isArray(t.content)&&t.content.some(r=>r.type==="expression"))return Ne()}};return n([m()],e.prototype,"highlightGraphics",void 0),n([m()],e.prototype,"exportImageParameters",void 0),n([m({readOnly:!0})],e.prototype,"exportImageVersion",null),n([m()],e.prototype,"layer",void 0),n([m()],e.prototype,"suspended",void 0),n([m(fe)],e.prototype,"timeExtent",void 0),e=n([F("esri.views.layers.MapImageLayerView")],e),e};let R=class extends Be(Ge(re(ie))){update(o){this.strategy.update(o).catch(e=>{W(e)||z.getLogger(this.declaredClass).error(e)}),o.stationary&&this.updateHighlightedFeatures(o.state.resolution),this._highlightView.processUpdate(o)}attach(){const{imageMaxWidth:o,imageMaxHeight:e,version:t}=this.layer,i=t>=10.3,r=t>=10;this._bitmapContainer=new te,this.container.addChild(this._bitmapContainer),this._highlightView=new oe({view:this.view,graphics:this.highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new se(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container),this.strategy=new ae({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:o,imageMaxHeight:e,imageRotationSupported:i,imageNormalizationSupported:r,hidpi:!0}),this.handles.add(A(()=>this.exportImageVersion,()=>this.requestUpdate()),"exportImageVersion"),this.handles.add(A(()=>{var s;return(s=this.view)==null?void 0:s.floors},()=>this.requestUpdate()),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(o){let e=null;if(o instanceof O?e=[o]:Q.isCollection(o)&&o.length>0?e=o.toArray():Array.isArray(o)&&o.length>0&&(e=o),e=e==null?void 0:e.filter(Boolean),!e||!e.length)return{remove:()=>{}};for(const t of e)"geometryType"in t.sourceLayer&&t.sourceLayer.geometryType==="point"&&(t.visible=!1);return this.highlightGraphics.addMany(e),{remove:()=>{this.highlightGraphics.removeMany(e)}}}supportsSpatialReference(o){return this.layer.serviceSupportsSpatialReference(o)}createFetchPopupFeaturesQueryGeometry(o,e){return we(o,e,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}highlightGraphicUpdated(o,e){this._highlightView.graphicUpdateHandler({graphic:o,property:e})}fetchImage(o,e,t,i){return this.layer.fetchImage(o,e,t,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}fetchImageBitmap(o,e,t,i){return this.layer.fetchImageBitmap(o,e,t,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};n([m()],R.prototype,"strategy",void 0),n([m()],R.prototype,"updating",void 0),R=n([F("esri.views.2d.layers.MapImageLayerView2D")],R);const Bi=R;export{Bi as default};