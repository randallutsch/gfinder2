import{j as d}from"./Collection-3317d203.js";import"./string-46813dd9.js";import{E as T}from"./promiseUtils-281d25c9.js";import{a as n}from"./lazyLayerLoader-7ac8051e.js";import f from"./PortalItem-a267e3e1.js";import{selectLayerClassPath as g}from"./portalLayers-0473e676.js";import{t as G}from"./styleUtils-e7c24653.js";import"./cast-34ff1fab.js";import"./typedArrayUtil-6bfe4dae.js";import"./Error-e5869661.js";import"./ensureType-abaf235a.js";import"./nextTick-3ee5a785.js";import"./Evented-fac53f7f.js";import"./SimpleObservable-f97014ec.js";import"./preload-helper-596b5639.js";import"./assets-544006ef.js";import"./request-c6faf466.js";import"./Loadable-3c0fb2d0.js";import"./Promise-19e65545.js";import"./Extent-b8913cd1.js";import"./Portal-d13c5d2a.js";import"./locale-30120714.js";import"./PortalGroup-506cda94.js";import"./jsonMap-92eea954.js";import"./PortalUser-12cb329a.js";import"./layersLoader-349bcc0b.js";import"./Layer-685ea357.js";import"./geometry-1b3a0099.js";import"./Polyline-7684a66d.js";import"./typeUtils-0cf27003.js";import"./Identifiable-016ad07d.js";import"./arcgisLayerUrl-efba9d7a.js";import"./persistableUrlUtils-3427b748.js";import"./jsonContext-9e6fe4f6.js";import"./portalItemUtils-a176d8fc.js";import"./projection-0e524eaf.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./unitUtils-2906b0b4.js";import"./mat4-62d5e6a4.js";import"./zscale-750d6efd.js";import"./asyncUtils-64877ef6.js";function M(e){return s(e,"notes")}function A(e){return s(e,"markup")}function v(e){return s(e,"route")}function s(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function w(e,r,a){if(!r)return;const i=[];for(const t of r){const y=B(t,a);t.layerType==="GroupLayer"?i.push(x(y,t,a)):i.push(y)}const o=await T(i);for(const t of o)!t.value||a.filter&&!a.filter(t.value)||e.add(t.value)}const b={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},W={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},F={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},C={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},O={ArcGISFeatureLayer:"FeatureLayer"},V={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function B(e,r){return h(await D(e,r),e,r)}async function h(e,r,a){const i=new e;return i.read(r,a.context),i.type==="group"&&m(r)&&await k(i,r,a.context),await G(i,a.context),i}async function D(e,r){const a=r.context,i=U(a);let o=e.layerType||e.type;!o&&r&&r.defaultLayerType&&(o=r.defaultLayerType);const t=i[o];let y=t?n[t]:n.UnknownLayer;if(I(e)){const l=a==null?void 0:a.portal;if(e.itemId){const L=new f({id:e.itemId,portal:l});await L.load();const p=(await g(L)).className||"UnknownLayer";y=n[p]}}else o==="ArcGISFeatureLayer"?M(e)||A(e)?y=n.MapNotesLayer:v(e)?y=n.RouteLayer:m(e)&&(y=n.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?y=n.WMTSLayer:o==="WFS"&&e.wfsInfo.version!=="2.0.0"&&(y=n.UnsupportedLayer);return y()}function m(e){var r,a;return e.layerType!=="ArcGISFeatureLayer"||I(e)?!1:(((a=(r=e.featureCollection)==null?void 0:r.layers)==null?void 0:a.length)??0)>1}function I(e){return e.type==="Feature Collection"}function U(e){let r;if(e.origin==="web-scene")switch(e.layerContainerType){case"basemap":r=F;break;case"ground":r=W;break;default:r=b}else switch(e.layerContainerType){case"basemap":r=V;break;case"tables":r=O;break;default:r=C}return r}async function x(e,r,a){const i=new d,o=w(i,Array.isArray(r.layers)?r.layers:[],a),t=await e;if(await o,t.type==="group")return t.layers.addMany(i),t}async function k(e,r,a){const i=n.FeatureLayer,o=await i(),t=r.featureCollection,y=t.showLegend,l=t.layers.map((L,p)=>{var S;const c=new o;c.read(L,a);const u={...a,ignoreDefaults:!0};return c.read({id:`${e.id}-sublayer-${p}`,visibility:((S=r.visibleLayers)==null?void 0:S.includes(p))??!0},u),y!=null&&c.read({showLegend:y},u),c});e.layers.addMany(l)}export{w as populateOperationalLayers};
