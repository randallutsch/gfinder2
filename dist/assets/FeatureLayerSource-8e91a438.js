import{e as h,y as g,n as k,m as ot}from"./cast-7ef3a066.js";import"./geometry-22feb2bb.js";import{g as nt}from"./Graphic-c3b235bf.js";import{S as it,o as ut,U as y,j as H,G as J,n as L}from"./request-3bbdab19.js";import{T as lt}from"./TimeExtent-dfe3f644.js";import{a as O}from"./Error-1dfe2922.js";import{h as G,o as dt}from"./string-7d6c8f5c.js";import{s as K}from"./jsonMap-c8081704.js";import{m as ct}from"./Loadable-772aaf20.js";import{t as S,F as pt,f as Z,r as c,e as ht}from"./typedArrayUtil-4015bf74.js";import{y as yt,x as mt}from"./promiseUtils-e323addc.js";import"./ArrayPool-45db95ab.js";import{a as M,k as ft}from"./Extent-54ef1174.js";import{c as gt,v as Ft}from"./jsonUtils-196b5f3d.js";import{o as _t}from"./clientSideDefaults-ba31a7fc.js";import{_ as bt}from"./preload-helper-596b5639.js";import{x as Q,K as W}from"./Query-8a7aa408.js";import{a as Rt,b as Ot}from"./executeQueryJSON-27522a1d.js";import{f as R,v as St}from"./normalizeUtils-5312bea5.js";import{o as It}from"./zscale-65468675.js";import{p as qt,r as wt}from"./featureConversionUtils-99b22ab9.js";import{f as xt,t as U,x as jt}from"./query-54e69cb9.js";import V from"./FeatureSet-daef9679.js";import{c as Et,d as A}from"./RelationshipQuery-2b83908f.js";import{n as Tt,s as Dt}from"./executeForIds-744fea7f.js";import{r as Ct}from"./queryZScale-9c82ac96.js";import{v}from"./TopFeaturesQuery-c1b3daab.js";import{g as At}from"./arcgisLayerUrl-af21cccf.js";import{i as vt}from"./editsZScale-6893b5ed.js";import"./nextTick-3ee5a785.js";import"./Polyline-d942e774.js";import"./typeUtils-17403a33.js";import"./PopupTemplate-2917795f.js";import"./Clonable-c315fc8d.js";import"./Collection-8f94e599.js";import"./Evented-7dfb249a.js";import"./SimpleObservable-ddf0ceba.js";import"./fieldUtils-cb9b3e6e.js";import"./arcadeOnDemand-490dc8ce.js";import"./enumeration-cda3949b.js";import"./number-1bdcdfd9.js";import"./locale-30120714.js";import"./Identifiable-d701141a.js";import"./symbols-d548a197.js";import"./CIMSymbol-308c5b42.js";import"./Symbol-6522d2f3.js";import"./Color-7a3d8c62.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-2c2d0d87.js";import"./aaBoundingBox-10130714.js";import"./persistableUrlUtils-2c2cd088.js";import"./collectionUtils-07fb1a58.js";import"./Portal-af5b2c18.js";import"./PortalGroup-100f1bed.js";import"./PortalUser-0170111d.js";import"./Promise-e08b9d4d.js";import"./QueryEngineCapabilities-42e44ded.js";import"./defaultsJSON-b087dd4d.js";import"./Field-a857bb5a.js";import"./fieldType-36e8171c.js";import"./unitUtils-58dc72ed.js";import"./OptimizedFeature-aa2e72dc.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./pbfQueryUtils-b3e55309.js";import"./pbf-99764d75.js";var $;(function(e){e[e.PROJECT_VERTICES=1]="PROJECT_VERTICES"})($||($={}));function Nt(e,t){return t}function B(e,t,r,s){switch(r){case 0:return j(e,t+s,0);case 1:return e.originPosition==="lowerLeft"?j(e,t+s,1):Gt(e,t+s,1)}}function tt(e,t,r,s){return r===2?j(e,t,2):B(e,t,r,s)}function Pt(e,t,r,s){return r===2?j(e,t,3):B(e,t,r,s)}function Jt(e,t,r,s){return r===3?j(e,t,3):tt(e,t,r,s)}function j({translate:e,scale:t},r,s){return e[s]+r*t[s]}function Gt({translate:e,scale:t},r,s){return e[s]-r*t[s]}class $t{constructor(t){this._options=t,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=Nt,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const r=It(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(!S(r))for(const s of t.features)r(s.geometry)}createSpatialReference(){return{}}addField(t,r){const s=t.fields;pt(s),s.push(r);const a=s.map(o=>o.name);this._attributesConstructor=function(){for(const o of a)this[o]=null}}addFeature(t,r){t.features.push(r)}prepareFeatures(t){switch(this._transform=t.transform,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"esriGeometryPoint":this.addCoordinate=(r,s,a)=>this.addCoordinatePoint(r,s,a),this.createGeometry=r=>this.createPointGeometry(r);break;case"esriGeometryPolygon":this.addCoordinate=(r,s,a)=>this._addCoordinatePolygon(r,s,a),this.createGeometry=r=>this._createPolygonGeometry(r);break;case"esriGeometryPolyline":this.addCoordinate=(r,s,a)=>this._addCoordinatePolyline(r,s,a),this.createGeometry=r=>this._createPolylineGeometry(r);break;case"esriGeometryMultipoint":this.addCoordinate=(r,s,a)=>this._addCoordinateMultipoint(r,s,a),this.createGeometry=r=>this._createMultipointGeometry(r)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(t,r,s){this._lengths.length===0&&(this._toAddInCurrentPath=r),this._lengths.push(r)}addQueryGeometry(t,r){const{queryGeometry:s,queryGeometryType:a}=r,o=qt(s.clone(),s,!1,!1,this._transform),n=wt(o,a,!1,!1);t.queryGeometryType=a,t.queryGeometry={...n}}createPointGeometry(t){const r={x:0,y:0,spatialReference:t.spatialReference};return t.hasZ&&(r.z=0),t.hasM&&(r.m=0),r}addCoordinatePoint(t,r,s){const a=Z(this._transform,"transform");switch(r=this._applyTransform(a,r,s,0),s){case 0:t.x=r;break;case 1:t.y=r;break;case 2:"z"in t?t.z=r:t.m=r;break;case 3:t.m=r}}_transformPathLikeValue(t,r){let s=0;r<=1&&(s=this._previousCoordinate[r],this._previousCoordinate[r]+=t);const a=Z(this._transform,"transform");return this._applyTransform(a,t,r,s)}_addCoordinatePolyline(t,r,s){this._dehydratedAddPointsCoordinate(t.paths,r,s)}_addCoordinatePolygon(t,r,s){this._dehydratedAddPointsCoordinate(t.rings,r,s)}_addCoordinateMultipoint(t,r,s){s===0&&t.points.push([]);const a=this._transformPathLikeValue(r,s);t.points[t.points.length-1].push(a)}_createPolygonGeometry(t){return{rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,r,s){s===0&&this._toAddInCurrentPath--==0&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const a=this._transformPathLikeValue(r,s),o=t[t.length-1];s===0&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),o.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=a}_deriveApplyTransform(t){const{hasZ:r,hasM:s}=t;return r&&s?Jt:r?tt:s?Pt:B}}async function kt(e,t,r){const s=R(e),a={...r},o=Q.from(t),n=!o.quantizationParameters,{data:i}=await xt(s,o,new $t({sourceSpatialReference:o.sourceSpatialReference,applyTransform:n}),a);return i}function Mt(e){const t=e.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function et(e,t){const r={};for(const s of e){const{parentObjectId:a,parentGlobalId:o,attachmentInfos:n}=s;for(const i of n){const{id:u}=i,l=it(ut(`${t}/${a}/attachments/${u}`)),d=Rt.fromJSON(i);d.set({url:l,parentObjectId:a,parentGlobalId:o}),r[a]?r[a].push(d):r[a]=[d]}}return r}function Qt(e,t,r){let s={query:U({...e.query,f:"json",...Mt(t)})};return r&&(s={...r,...s,query:{...r.query,...s.query}}),y(e.path+"/queryAttachments",s)}async function Ut(e,t,r){const s=R(e);return Qt(s,Et.from(t),{...r}).then(a=>et(a.data.attachmentGroups,s.path))}async function Vt(e,t,r){const s=R(e);return jt(s,Q.from(t),{...r}).then(a=>({count:a.data.count,extent:M.fromJSON(a.data.extent)}))}function Bt(e,t){const r=e.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),r.outFields&&!(t!=null&&t.returnCountOnly)?r.outFields.includes("*")?r.outFields="*":r.outFields=r.outFields.join(","):delete r.outFields,r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function zt(e,t,r){const s=await rt(e,t,r),a=s.data,o=a.geometryType,n=a.spatialReference,i={};for(const u of a.relatedRecordGroups){const l={fields:void 0,objectIdFieldName:void 0,geometryType:o,spatialReference:n,hasZ:!!a.hasZ,hasM:!!a.hasM,features:u.relatedRecords};if(u.objectId!=null)i[u.objectId]=l;else for(const d in u)u.hasOwnProperty(d)&&d!=="relatedRecords"&&(i[u[d]]=l)}return{...s,data:i}}async function Lt(e,t,r){const s=await rt(e,t,r,{returnCountOnly:!0}),a=s.data,o={};for(const n of a.relatedRecordGroups)n.objectId!=null&&(o[n.objectId]=n.count);return{...s,data:o}}async function rt(e,t,r={},s){const a=U({...e.query,f:"json",...s,...Bt(t,s)});return y(e.path+"/queryRelatedRecords",{...r,query:{...r.query,...a}})}async function Zt(e,t,r){t=A.from(t);const s=R(e);return zt(s,t,r).then(a=>{const o=a.data,n={};return Object.keys(o).forEach(i=>n[i]=V.fromJSON(o[i])),n})}async function Xt(e,t,r){t=A.from(t);const s=R(e);return Lt(s,t,{...r}).then(a=>a.data)}const X="Layer does not support extent calculation.";function Yt(e,t){var o,n;const r=e.geometry,s=e.toJSON(),a=s;if(c(r)&&(a.geometry=JSON.stringify(r),a.geometryType=gt(r),a.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),(o=s.topFilter)!=null&&o.groupByFields&&(a.topFilter.groupByFields=s.topFilter.groupByFields.join(",")),(n=s.topFilter)!=null&&n.orderByFields&&(a.topFilter.orderByFields=s.topFilter.orderByFields.join(",")),s.topFilter&&(a.topFilter=JSON.stringify(a.topFilter)),s.objectIds&&(a.objectIds=s.objectIds.join(",")),s.orderByFields&&(a.orderByFields=s.orderByFields.join(",")),s.outFields&&!(t!=null&&t.returnCountOnly||t!=null&&t.returnExtentOnly||t!=null&&t.returnIdsOnly)?s.outFields.includes("*")?a.outFields="*":a.outFields=s.outFields.join(","):delete a.outFields,s.outSR?a.outSR=s.outSR.wkid||JSON.stringify(s.outSR):r&&s.returnGeometry&&(a.outSR=a.inSR),s.returnGeometry&&delete s.returnGeometry,s.timeExtent){const i=s.timeExtent,{start:u,end:l}=i;u==null&&l==null||(a.time=u===l?u:`${u??"null"},${l??"null"}`),delete s.timeExtent}return a}async function Ht(e,t,r,s){const a=await N(e,t,"json",s);return Ct(t,r,a.data),a}async function Kt(e,t,r){return c(t.timeExtent)&&t.timeExtent.isEmpty?{data:{objectIds:[]}}:N(e,t,"json",r,{returnIdsOnly:!0})}async function Wt(e,t,r){return c(t.timeExtent)&&t.timeExtent.isEmpty?{data:{count:0,extent:null}}:N(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(s=>{const a=s.data;if(a.hasOwnProperty("extent"))return s;if(a.features)throw new Error(X);if(a.hasOwnProperty("count"))throw new Error(X);return s})}function te(e,t,r){return c(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):N(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function N(e,t,r,s={},a={}){const o=typeof e=="string"?H(e):e,n=t.geometry?[t.geometry]:[];return s.responseType=r==="pbf"?"array-buffer":"json",St(n,null,s).then(i=>{const u=i&&i[0];c(u)&&((t=t.clone()).geometry=u);const l=U({...o.query,f:r,...a,...Yt(t,a)});return y(J(o.path,"queryTopFeatures"),{...s,query:{...l,...s.query}})})}async function ee(e,t,r,s){const a=R(e),o={...s},{data:n}=await Ht(a,v.from(t),r,o);return V.fromJSON(n)}async function re(e,t,r){const s=R(e);return(await Kt(s,v.from(t),{...r})).data.objectIds}async function se(e,t,r){const s=R(e),a=await Wt(s,v.from(t),{...r});return{count:a.data.count,extent:M.fromJSON(a.data.extent)}}async function ae(e,t,r){const s=R(e);return(await te(s,v.from(t),{...r})).data.count}let q=class extends ot{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return typeof e!="string"?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return H(e)}_encode(e,t,r){const s={};for(const a in e){if(a==="declaredClass")continue;const o=e[a];if(o!=null&&typeof o!="function")if(Array.isArray(o)){s[a]=[];for(let n=0;n<o.length;n++)s[a][n]=this._encode(o[n])}else if(typeof o=="object")if(o.toJSON){const n=o.toJSON(r&&r[a]);s[a]=t?n:JSON.stringify(n)}else s[a]=t?o:JSON.stringify(o);else s[a]=o}return s}};h([g({readOnly:!0})],q.prototype,"parsedUrl",null),h([g()],q.prototype,"requestOptions",void 0),h([g({type:String})],q.prototype,"url",void 0),q=h([k("esri.tasks.Task")],q);const oe=q;let b=class extends oe{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var u;const r={...this.requestOptions,...t},s=this._normalizeQuery(e),a=((u=e.outStatistics)==null?void 0:u[0])!=null,o=G("featurelayer-pbf-statistics"),n=!a||o;let i;if(this.format==="pbf"&&n)try{i=await kt(this.url,s,r)}catch(l){if(l.name!=="query:parsing-pbf")throw l;this.format="json"}return this.format!=="json"&&n||(i=await Ot(this.url,s,r)),this._normalizeFields(i.fields),i}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||S(this.infoFor3D)||!t.assetMaps||!t.features||!t.features.length)return V.fromJSON(t);const{meshFeatureSetFromJSON:s}=await yt(bt(()=>import("./meshFeatureSet-ca3502d2.js").then(a=>a.a),["assets/meshFeatureSet-ca3502d2.js","assets/Graphic-c3b235bf.js","assets/cast-7ef3a066.js","assets/typedArrayUtil-4015bf74.js","assets/string-7d6c8f5c.js","assets/Error-1dfe2922.js","assets/ArrayPool-45db95ab.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-e323addc.js","assets/geometry-22feb2bb.js","assets/Extent-54ef1174.js","assets/Polyline-d942e774.js","assets/typeUtils-17403a33.js","assets/jsonMap-c8081704.js","assets/PopupTemplate-2917795f.js","assets/Clonable-c315fc8d.js","assets/Collection-8f94e599.js","assets/Evented-7dfb249a.js","assets/SimpleObservable-ddf0ceba.js","assets/fieldUtils-cb9b3e6e.js","assets/preload-helper-596b5639.js","assets/arcadeOnDemand-490dc8ce.js","assets/enumeration-cda3949b.js","assets/number-1bdcdfd9.js","assets/locale-30120714.js","assets/Identifiable-d701141a.js","assets/symbols-d548a197.js","assets/CIMSymbol-308c5b42.js","assets/Symbol-6522d2f3.js","assets/Color-7a3d8c62.js","assets/colorUtils-639f4d25.js","assets/mathUtils-daf59e84.js","assets/common-701a4199.js","assets/screenUtils-7afeb41c.js","assets/opacityUtils-2c2d0d87.js","assets/aaBoundingBox-10130714.js","assets/request-3bbdab19.js","assets/persistableUrlUtils-2c2cd088.js","assets/collectionUtils-07fb1a58.js","assets/Portal-af5b2c18.js","assets/Loadable-772aaf20.js","assets/Promise-e08b9d4d.js","assets/PortalGroup-100f1bed.js","assets/PortalUser-0170111d.js","assets/jsonUtils-196b5f3d.js","assets/HandleOwner-2d282b7c.js","assets/reactiveUtils-b911287d.js","assets/georeference-b05f3049.js","assets/unitUtils-58dc72ed.js","assets/mat3f64-b33e332c.js","assets/mat4-62d5e6a4.js","assets/mat4f64-3d813481.js","assets/mat3-45e3f2eb.js","assets/projection-6d5d9468.js","assets/assets-04f03891.js","assets/zscale-65468675.js","assets/quat-7867de93.js","assets/quatf64-7fd38d64.js","assets/BufferView-dfb97f8b.js","assets/vec2-f978aef8.js","assets/vec33-d985c8f3.js","assets/imageUtils-c2d0d1ae.js","assets/earcut-58237617.js","assets/deduplicate-eb9d58da.js","assets/FeatureSet-daef9679.js","assets/Field-a857bb5a.js","assets/fieldType-36e8171c.js"]),r);return s(e,this.infoFor3D,t)}executeForCount(e,t){const r={...this.requestOptions,...t},s=this._normalizeQuery(e);return Tt(this.url,s,r)}executeForExtent(e,t){const r={...this.requestOptions,...t},s=this._normalizeQuery(e);return Vt(this.url,s,r)}executeForIds(e,t){const r={...this.requestOptions,...t},s=this._normalizeQuery(e);return Dt(this.url,s,r)}executeRelationshipQuery(e,t){e=A.from(e);const r={...this.requestOptions,...t};return(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),Zt(this.url,e,r)}executeRelationshipQueryForCount(e,t){e=A.from(e);const r={...this.requestOptions,...t};return(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),Xt(this.url,e,r)}executeAttachmentQuery(e,t){const r={...this.requestOptions,...t};return Ut(this.url,e,r)}executeTopFeaturesQuery(e,t){const r={...this.requestOptions,...t};return ee(this.parsedUrl,e,this.sourceSpatialReference,r)}executeForTopIds(e,t){const r={...this.requestOptions,...t};return re(this.parsedUrl,e,r)}executeForTopExtents(e,t){const r={...this.requestOptions,...t};return se(this.parsedUrl,e,r)}executeForTopCount(e,t){const r={...this.requestOptions,...t};return ae(this.parsedUrl,e,r)}_normalizeQuery(e){let t=Q.from(e);if(t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?W.from(e.dynamicDataSource):this.dynamicDataSource),c(this.infoFor3D)&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;for(const r of this.infoFor3D.queryFormats){if(r==="3D_glb"){t.formatOf3DObjects=r;break}r!=="3D_gltf"||t.formatOf3DObjects||(t.formatOf3DObjects=r)}if(!t.formatOf3DObjects)throw new O("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(S(t.outFields)||!t.outFields.includes("*")){t=t===e?t.clone():t,S(t.outFields)&&(t.outFields=[]);const{originX:r,originY:s,originZ:a,translationX:o,translationY:n,translationZ:i,scaleX:u,scaleY:l,scaleZ:d,rotationX:_,rotationY:p,rotationZ:m,rotationDeg:F}=this.infoFor3D.transformFieldRoles;t.outFields.push(r,s,a,o,n,i,u,l,d,_,p,m,F)}}return t}_normalizeFields(e){if(c(this.fieldsIndex)&&c(e))for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return c(this.infoFor3D)&&e.returnGeometry&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};h([g({type:W})],b.prototype,"dynamicDataSource",void 0),h([g()],b.prototype,"fieldsIndex",void 0),h([g()],b.prototype,"format",void 0),h([g()],b.prototype,"gdbVersion",void 0),h([g()],b.prototype,"infoFor3D",void 0),h([g()],b.prototype,"sourceSpatialReference",void 0),b=h([k("esri.tasks.QueryTask")],b);const ne=b,ie=new K({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function Y(e){return typeof e=="string"?L(e)||{data:e}:new Promise((t,r)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t(L(s.result)),s.onerror=a=>r(a)})}const ue=new Set(["Feature Layer","Table"]),le=new K({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let w=class extends ct{constructor(){super(...arguments),this.type="feature-layer",this.refresh=mt(async()=>{var r,s;await this.load();const e=(r=this.sourceJSON.editingInfo)==null?void 0:r.lastEditDate;if(e==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const t=e!==((s=this.sourceJSON.editingInfo)==null?void 0:s.lastEditDate);return{dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})}load(e){const t=c(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:r,infoFor3D:s,gdbVersion:a,spatialReference:o,fieldsIndex:n}=this.layer,i=G("featurelayer-pbf")&&e&&S(s)?"pbf":"json";return new ne({url:t.path,format:i,fieldsIndex:n,infoFor3D:s,dynamicDataSource:r,gdbVersion:a,sourceSpatialReference:o})}async addAttachment(e,t){await this.load();const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/addAttachment",a=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(t,a.query);try{const n=await y(s,{body:o});return this._createFeatureEditResult(n.data.addAttachmentResult)}catch(n){throw this._createAttachmentErrorResult(r,n)}}async updateAttachment(e,t,r){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:t}}),n=this._getFormDataForAttachment(r,o.query);try{const i=await y(a,{body:n});return this._createFeatureEditResult(i.data.updateAttachmentResult)}catch(i){throw this._createAttachmentErrorResult(s,i)}}async applyEdits(e,t){await this.load();const r=this.layer.infoFor3D,s=c(r),a=s||(t==null?void 0:t.globalIdUsed),o=e.addFeatures.map(f=>this._serializeFeature(f,r)),n=e.updateFeatures.map(f=>this._serializeFeature(f,r)),i=this._getFeatureIds(e.deleteFeatures,a);vt(o,n,this.layer.spatialReference);const u=[],l=[],d=[...e.deleteAttachments];for(const f of e.addAttachments)u.push(await this._serializeAttachment(f));for(const f of e.updateAttachments)l.push(await this._serializeAttachment(f));const _=u.length||l.length||d.length?{adds:u,updates:l,deletes:d}:null;let p,m=null;if(s){m=new Map;const f=[];for(const x of e.addAssets)f.push(this._serializeAssetMapEditAndUploadAssets(x,m));const T=await Promise.all(f);p=T.length?{adds:T,updates:[],deletes:[]}:void 0}const F={gdbVersion:(t==null?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:t==null?void 0:t.rollbackOnFailureEnabled,useGlobalIds:a,returnEditMoment:t==null?void 0:t.returnEditMoment,usePreviousEditMoment:t==null?void 0:t.usePreviousEditMoment,sessionId:t==null?void 0:t.sessionId};t!=null&&t.returnServiceEditsOption?(F.edits=JSON.stringify([{id:this.layer.layerId,adds:o,updates:n,deletes:i,attachments:_,assetMaps:ht(p)}]),F.returnServiceEditsOption=ie.toJSON(t==null?void 0:t.returnServiceEditsOption),F.returnServiceEditsInSourceSR=t==null?void 0:t.returnServiceEditsInSourceSR):(F.adds=o.length?JSON.stringify(o):null,F.updates=n.length?JSON.stringify(n):null,F.deletes=i.length?a?JSON.stringify(i):i.join(","):null,F.attachments=_&&JSON.stringify(_),F.assetMaps=c(p)?JSON.stringify(p):void 0);const st=this._getLayerRequestOptions({method:"post",query:F}),z=t!=null&&t.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,E=await y(z+"/applyEdits",st);if(s&&E.data!=null&&E.data.assetMaps!=null){const f=E.data,T=this.layer.objectIdField,x=[];for(const I of f.addResults)I.success&&x.push(I.objectId);for(const I of f.updateResults)I.success&&x.push(I.objectId);const at=this._createRequestQueryOptions(),D=await y(z+"/query",{...at,query:{f:"json",formatOf3DObjects:"3D_glb",where:`OBJECTID IN (${x.join(",")})`,outFields:`${T}`}});if(D&&D.data&&D.data.assetMaps&&c(m)){const I=D.data.assetMaps;for(const P of I){const C=m.get(P.parentGlobalId).geometry;c(C)&&C.type==="mesh"&&C.updateExternalSource({source:[{name:P.assetName,source:P.assetName}],extent:C.extent})}}}return this._createEditsResult(E)}async deleteAttachments(e,t){await this.load();const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await y(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(a){throw this._createAttachmentErrorResult(r,a)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then(async()=>{const r=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:s,url:a}=this.layer,{data:o}=await y(`${a}/${s}`,r),{id:n,extent:i,fullExtent:u,timeExtent:l}=o,d=i||u;return{id:n,fullExtent:d&&M.fromJSON(d),timeExtent:l&&lt.fromJSON({start:l[0],end:l[1]})}})}async queryAttachments(e,t={}){const{parsedUrl:r}=this.layer,s=r.path;await this.load();const a=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:o}=e,n=[];for(const i of o){const u=s+"/"+i+"/attachments";n.push(y(u,a))}return Promise.all(n).then(i=>o.map((u,l)=>({parentObjectId:u,attachmentInfos:i[l].data.attachmentInfos}))).then(i=>et(i,s))}return this.queryTask.executeAttachmentQuery(e,a)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!At(this.layer.url))return"unavailable";const e=J(this.layer.url,"status"),t=await y(e,{query:{f:"json"}});return le.fromJSON(t.data.status)}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e==null?void 0:e.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:s}=await y(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:G("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=s}this.sourceJSON=this._patchServiceJSON(e);const r=e.type;if(!ue.has(r))throw new O("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}_patchServiceJSON(e){var t;if(e.type!=="Table"&&e.geometryType&&!((t=e==null?void 0:e.drawingInfo)!=null&&t.renderer)&&!e.defaultSymbol){const r=_t(e.geometryType).renderer;dt("drawingInfo.renderer",r,e)}return e.geometryType==="esriGeometryMultiPatch"&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e,t){const{geometry:r,attributes:s}=e;if(c(t)&&c(e.geometry)&&e.geometry.type==="mesh"){const a={...s},o=e.geometry,n=o.origin,i=o.transform;if(a[t.transformFieldRoles.originX]=n.x,a[t.transformFieldRoles.originY]=n.y,a[t.transformFieldRoles.originZ]=n.z,c(i)){const u=i.translation,l=i.scale,d=i.rotation;a[t.transformFieldRoles.translationX]=u[0],a[t.transformFieldRoles.translationY]=u[1],a[t.transformFieldRoles.translationZ]=u[2],a[t.transformFieldRoles.scaleX]=l[0],a[t.transformFieldRoles.scaleY]=l[1],a[t.transformFieldRoles.scaleZ]=l[2],a[t.transformFieldRoles.rotationX]=d[0],a[t.transformFieldRoles.rotationY]=d[1],a[t.transformFieldRoles.rotationZ]=d[2],a[t.transformFieldRoles.rotationDeg]=d[3]}return{geometry:null,attributes:a}}return S(r)?{attributes:s}:r.type==="mesh"||r.type==="extent"?null:{geometry:r.toJSON(),attributes:s}}async _serializeAttachment(e){const{feature:t,attachment:r}=e,{globalId:s,name:a,contentType:o,data:n,uploadId:i}=r,u={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),i)u.uploadId=i;else if(n){const l=await Y(n);u.contentType=l.mediaType,u.data=l.data,n instanceof File&&(u.name=n.name)}return a&&(u.name=a),o&&(u.contentType=o),u}async _serializeAssetMapEditAndUploadAssets(e,t){const r=this.layer.url;let s=null;try{const l=new Blob([e.data],{type:e.mimeType}),d=new FormData;d.append("f","json"),d.append("file",l,`${e.assetName}`);const _={body:d,method:"post",responseType:"json"},{data:p}=await y(`${r}/uploads/upload`,_);if(!p.success)throw new O("feature-layer-source:upload-failure","Expected upload to be successfull.");s={assetType:e.assetType,assetUploadId:p.item.itemID}}catch{s=null}if(S(s)){const l=await Y(new Blob([e.data]));if(!l.isBase64)throw new O("feature-layer-source:uploadAssets-failure","Expected gltf data in base64 format after conversion.");s={assetType:e.assetType,assetData:l.data}}if(S(s))throw new O("feature-layer-source:uploadAssets-failure","Unable to prepare uploadAsset request options.");const a={method:"post",query:{f:"json",assets:JSON.stringify([s])},responseType:"json"},o=await y(J(this.layer.parsedUrl.path,"uploadAssets"),a);if(o.data.uploadResults.length!==1||!o.data.uploadResults[0].success)throw new O("feature-layer-source:uploadAssets-failure","Bad response.");const n=o.data.uploadResults[0].assetHash,i=[];e.flags&$.PROJECT_VERTICES&&i.push("PROJECT_VERTICES");const u={globalId:e.assetMapGlobalId,parentGlobalId:e.featureGlobalId,assetName:e.assetName,assetHash:n,flags:i};return t.set(e.featureGlobalId,e.feature),u}_getFeatureIds(e,t){const r=e[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map(r=>r.attributes&&r.attributes[t])}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map(t=>t.objectId)}_getGlobalIdsFromFeatureIdentifier(e){return e.map(t=>t.globalId)}_createEditsResult(e){const t=e.data,{layerId:r}=this.layer,s=[];let a=null;if(Array.isArray(t))for(const i of t)s.push({id:i.id,editedFeatures:i.editedFeatures}),i.id===r&&(a={addResults:i.addResults,updateResults:i.updateResults,deleteResults:i.deleteResults,attachments:i.attachments,editMoment:i.editMoment});else a=t;const o=a==null?void 0:a.attachments,n={addFeatureResults:a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:o&&o.addResults?o.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:o&&o.updateResults?o.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:o&&o.deleteResults?o.deleteResults.map(this._createFeatureEditResult,this):[]};if(a.editMoment&&(n.editMoment=a.editMoment),s.length>0){n.editedFeatureResults=[];for(const i of s){const{adds:u,updates:l,deletes:d,spatialReference:_}=i.editedFeatures,p=_?new ft(_):null;n.editedFeatureResults.push({layerId:i.id,editedFeatures:{adds:(u==null?void 0:u.map(m=>this._createEditedFeature(m,p)))||[],updates:(l==null?void 0:l.map(m=>({original:this._createEditedFeature(m[0],p),current:this._createEditedFeature(m[1],p)})))||[],deletes:(d==null?void 0:d.map(m=>this._createEditedFeature(m,p)))||[],spatialReference:p}})}}return n}_createEditedFeature(e,t){return new nt({attributes:e.attributes,geometry:Ft({...e.geometry,spatialReference:t})})}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new O("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const r=t.details.messages&&t.details.messages[0]||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new O("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const s in t){const a=t[s];a!=null&&(r.set?r.set(s,a):r.append(s,a))}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:s}=this.layer;return{...e,query:{gdbVersion:r,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}};h([g()],w.prototype,"type",void 0),h([g({constructOnly:!0})],w.prototype,"layer",void 0),h([g({readOnly:!0})],w.prototype,"queryTask",null),w=h([k("esri.layers.graphics.sources.FeatureLayerSource")],w);const Ir=w;export{Ir as default};