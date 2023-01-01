import{j as l}from"./asyncUtils-64877ef6.js";import{a as n,s as g}from"./Error-e5869661.js";import{r as _,p as f}from"./typedArrayUtil-6bfe4dae.js";import{f as m,j as d}from"./promiseUtils-281d25c9.js";import{E as w,z as p}from"./Extent-b8913cd1.js";import{n as E,r as q}from"./featureConversionUtils-9849a680.js";import{u as F}from"./FeatureStore-4bec1bdb.js";import{g as S,f as T}from"./projectionSupport-9e49ecb5.js";import{Y as x}from"./QueryEngine-48d87c36.js";import{T as j,I}from"./geojson-9cf4dbc0.js";import{m as b}from"./sourceUtils-3e951b39.js";import{K as C}from"./wfsUtils-4c12bbbd.js";import{r as P}from"./FieldsIndex-105fbc68.js";import"./cast-34ff1fab.js";import"./string-46813dd9.js";import"./ensureType-abaf235a.js";import"./nextTick-3ee5a785.js";import"./jsonUtils-eb956695.js";import"./Polyline-7684a66d.js";import"./OptimizedFeature-06185297.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Evented-fac53f7f.js";import"./aaBoundingBox-77ee83e3.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./aaBoundingRect-71c1e25d.js";import"./PooledRBush-1e12b83d.js";import"./quickselect-322ec8e1.js";import"./centroid-5232e2a4.js";import"./projection-b78b11c8.js";import"./preload-helper-596b5639.js";import"./unitUtils-2906b0b4.js";import"./jsonMap-92eea954.js";import"./SimpleObservable-f97014ec.js";import"./mat4-62d5e6a4.js";import"./assets-4600b25c.js";import"./request-0ae6f728.js";import"./zscale-750d6efd.js";import"./json-48e3ea08.js";import"./MemCache-97cd02d3.js";import"./normalizeUtils-2ed0f8c8.js";import"./geometry-1b3a0099.js";import"./typeUtils-0cf27003.js";import"./utils-97034790.js";import"./QueryEngineResult-ee92c291.js";import"./quantizationUtils-68567b49.js";import"./ItemCache-ca264f50.js";import"./WhereClause-19d09d89.js";import"./utils-9e4ba296.js";import"./generateRendererUtils-87b0fa52.js";import"./colorRamps-d6116b89.js";import"./Color-0f9fdd46.js";import"./colorUtils-639f4d25.js";import"./enumeration-e40d8895.js";import"./Symbol-8a110cc7.js";import"./utils-694a4864.js";import"./fieldUtils-ba80cc48.js";import"./arcadeOnDemand-8d1e3277.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-3d845874.js";import"./Scheduler-8e472f39.js";import"./reactiveUtils-aec98ee9.js";import"./xmlUtils-444cb4c0.js";import"./Field-db318fdd.js";import"./fieldType-11b4c3ca.js";class Gt{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async t=>{const{objectIdField:e}=this._queryEngine,i=await C(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:t});await j(i),m(t);const o=I(i,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:e});if(!w(this._queryEngine.spatialReference,p))for(const r of o)_(r.geometry)&&(r.geometry=E(S(q(r.geometry,this._queryEngine.geometryType,!1,!1),p,this._queryEngine.spatialReference)));let a=1;for(const r of o){const s={};b(this._fieldsIndex,s,r.attributes,!0),r.attributes=s,r.attributes[e]==null&&(r.objectId=r.attributes[e]=a++)}return o}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e){const{getFeatureUrl:i,getFeatureOutputFormat:o,spatialReference:a,fields:r,geometryType:s,featureType:u,objectIdField:h,customParameters:y}=t;this._featureType=u,this._customParameters=y,this._getFeatureUrl=i,this._getFeatureOutputFormat=o,this._fieldsIndex=new P(r),await this._checkProjection(a),m(e),this._queryEngine=new x({fields:r,geometryType:s,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:a,timeInfo:null,featureStore:new F({geometryType:s,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(f(e.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new n("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;return this._customParameters=t,(e=this._snapshotTask)==null||e.abort(),this._snapshotTask=l(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),i&&this._queryEngine.featureStore.addMany(i)},i=>{this._queryEngine.featureStore.clear(),d(i)||g.getLogger("esri.layers.WFSLayer").error(new n("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:i}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await T(p,t)}catch{throw new n("unsupported-projection","Projection not supported",{spatialReference:t})}}}export{Gt as default};
