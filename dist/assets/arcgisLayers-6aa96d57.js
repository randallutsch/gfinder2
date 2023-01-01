import{_ as v}from"./preload-helper-101896b7.js";import{a as w}from"./Error-1dfe2922.js";import{t as S,r as d}from"./typedArrayUtil-4015bf74.js";import{h as L,j as O}from"./request-4f5c54dd.js";import{m as P,w as T}from"./arcgisLayerUrl-10f7b1f9.js";import{a as c,r as g}from"./fetchService-1e47ed44.js";import{a as C}from"./lazyLayerLoader-e128ee3d.js";import"./string-7d6c8f5c.js";import"./promiseUtils-e323addc.js";import"./persistableUrlUtils-afa98d6c.js";async function G(e){var s;const l=(s=e.properties)==null?void 0:s.customParameters,r=await N(e.url,l),a={...e.properties,url:e.url};if(!r.sublayerIds)return r.layerOrTableId!=null&&(a.layerId=r.layerOrTableId,a.sourceJSON=r.sourceJSON),new r.Constructor(a);const n=new(await v(()=>import("./GroupLayer-f3374f1e.js"),["assets/GroupLayer-f3374f1e.js","assets/cast-7ef3a066.js","assets/typedArrayUtil-4015bf74.js","assets/string-7d6c8f5c.js","assets/Error-1dfe2922.js","assets/ArrayPool-45db95ab.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-e323addc.js","assets/CollectionFlattener-8cf1891d.js","assets/Collection-8f94e599.js","assets/Evented-7dfb249a.js","assets/SimpleObservable-ddf0ceba.js","assets/loadAll-b6703d72.js","assets/asyncUtils-bd6eb812.js","assets/Loadable-772aaf20.js","assets/Promise-e08b9d4d.js","assets/MultiOriginJSONSupport-98cda0d2.js","assets/reactiveUtils-b911287d.js","assets/Extent-54ef1174.js","assets/Layer-aa68e6a9.js","assets/preload-helper-101896b7.js","assets/geometry-22feb2bb.js","assets/Polyline-d942e774.js","assets/typeUtils-17403a33.js","assets/jsonMap-c8081704.js","assets/request-4f5c54dd.js","assets/Identifiable-d701141a.js","assets/BlendLayer-00b35d0f.js","assets/parser-60fed632.js","assets/colorUtils-639f4d25.js","assets/screenUtils-7afeb41c.js","assets/mat4-62d5e6a4.js","assets/common-701a4199.js","assets/OperationalLayer-0fbaa211.js","assets/TimeExtent-dfe3f644.js","assets/persistableUrlUtils-afa98d6c.js","assets/ElevationInfo-a7cee627.js","assets/fieldUtils-75feb382.js","assets/arcadeOnDemand-797f4f1c.js","assets/lengthUtils-f3b6e37f.js","assets/unitUtils-58dc72ed.js","assets/opacityUtils-2c2d0d87.js","assets/PortalLayer-7f41b677.js","assets/Portal-0c20e3a4.js","assets/locale-30120714.js","assets/PortalGroup-100f1bed.js","assets/PortalUser-7acb0e3c.js","assets/PortalItem-fdbc6f1a.js","assets/assets-6d4d2dad.js","assets/ScaleRangeLayer-21fc7ea0.js","assets/lazyLayerLoader-e128ee3d.js","assets/TablesMixin-d73bf6f2.js","assets/collectionUtils-07fb1a58.js","assets/writeUtils-5e02c8fc.js","assets/layerUtils-6996b9ea.js"])).default({title:r.parsedUrl.title});return F(n,r,a),n}function b(e,l){return e?e.find(r=>r.id===l):null}function F(e,l,r){function a(n,s){const o={...r,layerId:n,sublayerTitleMode:"service-name"};return d(s)&&(o.sourceJSON=s),new l.Constructor(o)}l.sublayerIds.forEach(n=>{const s=a(n,b(l.sublayerInfos,n));e.add(s)}),l.tableIds.forEach(n=>{const s=a(n,b(l.tableInfos,n));e.tables.add(s)})}async function N(e,l){let r=P(e);if(S(r)&&(r=await U(e,l)),S(r))throw new w("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:a,sublayer:n}=r;let s;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":s=n!=null?"FeatureLayer":V(e,l).then(t=>t?"TileLayer":"MapImageLayer");break;case"ImageServer":s=c(e,{customParameters:l}).then(t=>{const y=t.tileInfo&&t.tileInfo.format;return t.tileInfo?(y==null?void 0:y.toUpperCase())!=="LERC"||t.cacheType&&t.cacheType.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case"SceneServer":s=c(r.url.path,{customParameters:l}).then(t=>{var y;if(t){if((t==null?void 0:t.layerType)==="Voxel")return"VoxelLayer";if(t!=null&&t.layers&&Array.isArray(t.layers)&&t.layers.length>0){const f={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},I=(y=t.layers[0])==null?void 0:y.layerType;if(f[I]!=null)return f[I]}}return"SceneLayer"});break;default:s=o[a]}const u={FeatureLayer:!0,SceneLayer:!0},m=a==="FeatureServer",i={parsedUrl:r,Constructor:null,layerOrTableId:m?n:null,sublayerIds:null,tableIds:null},p=await s;if(u[p]&&n==null){const t=await _(e,a,l);m&&(i.sublayerInfos=t.layerInfos,i.tableInfos=t.tableInfos),t.layerIds.length+t.tableIds.length!==1?(i.sublayerIds=t.layerIds,i.tableIds=t.tableIds):m&&(i.layerOrTableId=t.layerIds[0]??t.tableIds[0],i.sourceJSON=t.layerInfos[0]??t.tableInfos[0])}return i.Constructor=await J(p),i}async function U(e,l){var u;const r=await c(e,{customParameters:l});let a=null,n=null;const s=r.type;if(s==="Feature Layer"||s==="Table"?(a="FeatureServer",n=r.id):s==="indexedVector"?a="VectorTileServer":r.hasOwnProperty("mapName")?a="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?a="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":r.hasOwnProperty("streamUrls")?a="StreamServer":h(r)?(a="SceneServer",n=r.id):r.hasOwnProperty("layers")&&h((u=r.layers)==null?void 0:u[0])&&(a="SceneServer"),!a)return null;const o=n!=null?T(e):null;return{title:d(o)&&r.name||L(e),serverType:a,sublayer:n,url:{path:d(o)?o.serviceUrl:O(e).path}}}function h(e){return(e==null?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&typeof e.id=="number"}async function _(e,l,r){let a,n=!1;if(l==="FeatureServer"){const u=await g(e,{customParameters:r});n=!!u.layersJSON,a=u.layersJSON||u.serviceJSON}else a=await c(e,{customParameters:r});const s=a==null?void 0:a.layers,o=a==null?void 0:a.tables;return{layerIds:(s==null?void 0:s.map(u=>u.id).reverse())||[],tableIds:(o==null?void 0:o.map(u=>u.id).reverse())||[],layerInfos:n?s:[],tableInfos:n?o:[]}}async function J(e){return(0,C[e])()}async function V(e,l){return(await c(e,{customParameters:l})).tileInfo}export{G as fromUrl};
