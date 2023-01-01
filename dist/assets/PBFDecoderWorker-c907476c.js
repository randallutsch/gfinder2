import{n as p}from"./compilerUtils-05c96a64.js";import{t as d}from"./typedArrayUtil-6bfe4dae.js";import{i as m}from"./cast-34ff1fab.js";import{k as c}from"./Extent-b8913cd1.js";import{o as f}from"./zscale-750d6efd.js";import"./byteSizeEstimations-90c5a50d.js";import"./string-46813dd9.js";import{a as y}from"./aaBoundingBox-77ee83e3.js";import{u as _}from"./aaBoundingRect-71c1e25d.js";import"./Polyline-7684a66d.js";import"./typeUtils-0cf27003.js";import{y as g}from"./Field-db318fdd.js";import{p as P,r as C}from"./featureConversionUtils-9849a680.js";import{t as b}from"./pbfQueryUtils-0caab4c3.js";import"./Error-e5869661.js";import"./ensureType-abaf235a.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-281d25c9.js";import"./unitUtils-2906b0b4.js";import"./jsonMap-92eea954.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./enumeration-e40d8895.js";import"./fieldType-11b4c3ca.js";import"./jsonUtils-eb956695.js";import"./OptimizedFeature-06185297.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./pbf-b75e429b.js";class G{constructor(t,e,r){this.uid=t,this.geometry=e,this.attributes=r,this.visible=!0,this.objectId=null,this.centroid=null}}class v{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}y();_();function M(s,t){return t}function h(s,t,e,r){switch(e){case 0:return a(s,t+r,0);case 1:return s.originPosition==="lowerLeft"?a(s,t+r,1):k(s,t+r,1)}}function u(s,t,e,r){return e===2?a(s,t,2):h(s,t,e,r)}function T(s,t,e,r){return e===2?a(s,t,3):h(s,t,e,r)}function R(s,t,e,r){return e===3?a(s,t,3):u(s,t,e,r)}function a({translate:s,scale:t},e,r){return s[r]+e*t[r]}function k({translate:s,scale:t},e,r){return s[r]-e*t[r]}class x{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=M,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return new v}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=f(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(!d(e))for(const r of t.features)e(r.geometry)}createSpatialReference(){return new c}addField(t,e){t.fields.push(g.fromJSON(e));const r=t.fields.map(i=>i.name);this._attributesConstructor=function(){for(const i of r)this[i]=null}}addFeature(t,e){const r=this._options.maxStringAttributeLength?this._options.maxStringAttributeLength:0;if(r>0)for(const i in e.attributes){const o=e.attributes[i];typeof o=="string"&&o.length>r&&(e.attributes[i]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:i}=e,o=P(r.clone(),r,!1,!1,this._transform),l=C(o,i,!1,!1);let n=null;switch(i){case"esriGeometryPoint":n="point";break;case"esriGeometryPolygon":n="polygon";break;case"esriGeometryPolyline":n="polyline";break;case"esriGeometryMultipoint":n="multipoint"}l.type=n,t.queryGeometryType=i,t.queryGeometry=l}prepareFeatures(t){switch(this._transform=t.transform,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(e,r,i)=>this.addCoordinatePoint(e,r,i),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,r,i)=>this._addCoordinatePolygon(e,r,i),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,r,i)=>this._addCoordinatePolyline(e,r,i),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,r,i)=>this._addCoordinateMultipoint(e,r,i),this.createGeometry=e=>this._createMultipointGeometry(e);break;case"mesh":case"extent":break;default:p(t.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new G(m(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce((e,r)=>e+r,0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e,r){this._lengths.length===0&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){switch(e=this._applyTransform(this._transform,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}}_transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._applyTransform(this._transform,t,e,r)}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){r===0&&t.points.push([]);const i=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(i)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){r===0&&this._toAddInCurrentPath--==0&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const i=this._transformPathLikeValue(e,r),o=t[t.length-1];r===0&&o.push(new Float64Array(this._coordinateBuffer.buffer,this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this._vertexDimension)),this._coordinateBuffer[this._coordinateBufferPtr++]=i}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?R:e?u:r?T:h}}class A{_parseFeatureQuery(t){const e=b(t.buffer,new x(t.options)),r={...e,spatialReference:e.spatialReference.toJSON(),fields:e.fields?e.fields.map(i=>i.toJSON()):void 0};return Promise.resolve(r)}}function st(){return new A}export{st as default};
