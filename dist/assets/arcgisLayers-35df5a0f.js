import{_ as v}from"./preload-helper-596b5639.js";import{a as w}from"./Error-e5869661.js";import{t as S,r as d}from"./typedArrayUtil-6bfe4dae.js";import{h as L,j as O}from"./request-0ae6f728.js";import{m as P,w as T}from"./arcgisLayerUrl-52d50722.js";import{a as c,r as g}from"./fetchService-082858f7.js";import{a as C}from"./lazyLayerLoader-22258b11.js";import"./string-46813dd9.js";import"./promiseUtils-281d25c9.js";import"./persistableUrlUtils-94eb42ca.js";async function G(e){var s;const l=(s=e.properties)==null?void 0:s.customParameters,r=await N(e.url,l),a={...e.properties,url:e.url};if(!r.sublayerIds)return r.layerOrTableId!=null&&(a.layerId=r.layerOrTableId,a.sourceJSON=r.sourceJSON),new r.Constructor(a);const n=new(await v(()=>import("./GroupLayer-5f16954d.js"),["assets/GroupLayer-5f16954d.js","assets/cast-34ff1fab.js","assets/typedArrayUtil-6bfe4dae.js","assets/string-46813dd9.js","assets/Error-e5869661.js","assets/ensureType-abaf235a.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-281d25c9.js","assets/CollectionFlattener-489ac26c.js","assets/Collection-3317d203.js","assets/Evented-fac53f7f.js","assets/SimpleObservable-f97014ec.js","assets/loadAll-e96474c4.js","assets/asyncUtils-64877ef6.js","assets/Loadable-3c0fb2d0.js","assets/Promise-19e65545.js","assets/MultiOriginJSONSupport-98bacd7d.js","assets/reactiveUtils-aec98ee9.js","assets/Extent-b8913cd1.js","assets/Layer-3ff9d31c.js","assets/preload-helper-596b5639.js","assets/geometry-1b3a0099.js","assets/Polyline-7684a66d.js","assets/typeUtils-0cf27003.js","assets/jsonMap-92eea954.js","assets/request-0ae6f728.js","assets/Identifiable-016ad07d.js","assets/BlendLayer-1dfdcb30.js","assets/parser-6760a715.js","assets/colorUtils-639f4d25.js","assets/screenUtils-7afeb41c.js","assets/mat4-62d5e6a4.js","assets/common-701a4199.js","assets/OperationalLayer-22b6ebd6.js","assets/TimeExtent-b83e45a0.js","assets/persistableUrlUtils-94eb42ca.js","assets/ElevationInfo-d6cce4ca.js","assets/fieldUtils-ba80cc48.js","assets/arcadeOnDemand-8d1e3277.js","assets/lengthUtils-02fceda8.js","assets/unitUtils-2906b0b4.js","assets/opacityUtils-ea6b845d.js","assets/PortalLayer-ce06c43d.js","assets/Portal-ed3455de.js","assets/locale-30120714.js","assets/PortalGroup-506cda94.js","assets/PortalUser-d46abb74.js","assets/PortalItem-7875d255.js","assets/assets-4600b25c.js","assets/ScaleRangeLayer-d814fce3.js","assets/lazyLayerLoader-22258b11.js","assets/TablesMixin-2ce04f46.js","assets/collectionUtils-23cca63a.js","assets/writeUtils-e29f066b.js","assets/layerUtils-6996b9ea.js"])).default({title:r.parsedUrl.title});return F(n,r,a),n}function b(e,l){return e?e.find(r=>r.id===l):null}function F(e,l,r){function a(n,s){const o={...r,layerId:n,sublayerTitleMode:"service-name"};return d(s)&&(o.sourceJSON=s),new l.Constructor(o)}l.sublayerIds.forEach(n=>{const s=a(n,b(l.sublayerInfos,n));e.add(s)}),l.tableIds.forEach(n=>{const s=a(n,b(l.tableInfos,n));e.tables.add(s)})}async function N(e,l){let r=P(e);if(S(r)&&(r=await U(e,l)),S(r))throw new w("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:a,sublayer:n}=r;let s;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":s=n!=null?"FeatureLayer":V(e,l).then(t=>t?"TileLayer":"MapImageLayer");break;case"ImageServer":s=c(e,{customParameters:l}).then(t=>{const y=t.tileInfo&&t.tileInfo.format;return t.tileInfo?(y==null?void 0:y.toUpperCase())!=="LERC"||t.cacheType&&t.cacheType.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case"SceneServer":s=c(r.url.path,{customParameters:l}).then(t=>{var y;if(t){if((t==null?void 0:t.layerType)==="Voxel")return"VoxelLayer";if(t!=null&&t.layers&&Array.isArray(t.layers)&&t.layers.length>0){const f={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},I=(y=t.layers[0])==null?void 0:y.layerType;if(f[I]!=null)return f[I]}}return"SceneLayer"});break;default:s=o[a]}const u={FeatureLayer:!0,SceneLayer:!0},m=a==="FeatureServer",i={parsedUrl:r,Constructor:null,layerOrTableId:m?n:null,sublayerIds:null,tableIds:null},p=await s;if(u[p]&&n==null){const t=await _(e,a,l);m&&(i.sublayerInfos=t.layerInfos,i.tableInfos=t.tableInfos),t.layerIds.length+t.tableIds.length!==1?(i.sublayerIds=t.layerIds,i.tableIds=t.tableIds):m&&(i.layerOrTableId=t.layerIds[0]??t.tableIds[0],i.sourceJSON=t.layerInfos[0]??t.tableInfos[0])}return i.Constructor=await J(p),i}async function U(e,l){var u;const r=await c(e,{customParameters:l});let a=null,n=null;const s=r.type;if(s==="Feature Layer"||s==="Table"?(a="FeatureServer",n=r.id):s==="indexedVector"?a="VectorTileServer":r.hasOwnProperty("mapName")?a="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?a="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":r.hasOwnProperty("streamUrls")?a="StreamServer":h(r)?(a="SceneServer",n=r.id):r.hasOwnProperty("layers")&&h((u=r.layers)==null?void 0:u[0])&&(a="SceneServer"),!a)return null;const o=n!=null?T(e):null;return{title:d(o)&&r.name||L(e),serverType:a,sublayer:n,url:{path:d(o)?o.serviceUrl:O(e).path}}}function h(e){return(e==null?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&typeof e.id=="number"}async function _(e,l,r){let a,n=!1;if(l==="FeatureServer"){const u=await g(e,{customParameters:r});n=!!u.layersJSON,a=u.layersJSON||u.serviceJSON}else a=await c(e,{customParameters:r});const s=a==null?void 0:a.layers,o=a==null?void 0:a.tables;return{layerIds:(s==null?void 0:s.map(u=>u.id).reverse())||[],tableIds:(o==null?void 0:o.map(u=>u.id).reverse())||[],layerInfos:n?s:[],tableInfos:n?o:[]}}async function J(e){return(0,C[e])()}async function V(e,l){return(await c(e,{customParameters:l})).tileInfo}export{G as fromUrl};
