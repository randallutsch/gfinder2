import{j as d}from"./Collection-8f94e599.js";import"./string-7d6c8f5c.js";import{E as T}from"./promiseUtils-e323addc.js";import{a as n}from"./lazyLayerLoader-c3069eea.js";import f from"./PortalItem-49bcac17.js";import{selectLayerClassPath as g}from"./portalLayers-03c7c834.js";import{t as G}from"./styleUtils-d1f4a996.js";import"./cast-7ef3a066.js";import"./typedArrayUtil-4015bf74.js";import"./Error-1dfe2922.js";import"./ArrayPool-45db95ab.js";import"./nextTick-3ee5a785.js";import"./Evented-7dfb249a.js";import"./SimpleObservable-ddf0ceba.js";import"./preload-helper-596b5639.js";import"./assets-04f03891.js";import"./request-3bbdab19.js";import"./Loadable-772aaf20.js";import"./Promise-e08b9d4d.js";import"./Extent-54ef1174.js";import"./Portal-af5b2c18.js";import"./locale-30120714.js";import"./PortalGroup-100f1bed.js";import"./jsonMap-c8081704.js";import"./PortalUser-0170111d.js";import"./layersLoader-cefb6b83.js";import"./Layer-d4420615.js";import"./geometry-22feb2bb.js";import"./Polyline-d942e774.js";import"./typeUtils-17403a33.js";import"./Identifiable-d701141a.js";import"./arcgisLayerUrl-af21cccf.js";import"./persistableUrlUtils-2c2cd088.js";import"./jsonContext-96bc6b0c.js";import"./portalItemUtils-187d4bc6.js";import"./projection-6d5d9468.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./unitUtils-58dc72ed.js";import"./mat4-62d5e6a4.js";import"./zscale-65468675.js";import"./asyncUtils-bd6eb812.js";function M(e){return s(e,"notes")}function A(e){return s(e,"markup")}function v(e){return s(e,"route")}function s(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function w(e,r,a){if(!r)return;const i=[];for(const t of r){const y=B(t,a);t.layerType==="GroupLayer"?i.push(x(y,t,a)):i.push(y)}const o=await T(i);for(const t of o)!t.value||a.filter&&!a.filter(t.value)||e.add(t.value)}const b={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},W={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},F={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},C={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},O={ArcGISFeatureLayer:"FeatureLayer"},V={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function B(e,r){return h(await D(e,r),e,r)}async function h(e,r,a){const i=new e;return i.read(r,a.context),i.type==="group"&&m(r)&&await k(i,r,a.context),await G(i,a.context),i}async function D(e,r){const a=r.context,i=U(a);let o=e.layerType||e.type;!o&&r&&r.defaultLayerType&&(o=r.defaultLayerType);const t=i[o];let y=t?n[t]:n.UnknownLayer;if(I(e)){const l=a==null?void 0:a.portal;if(e.itemId){const L=new f({id:e.itemId,portal:l});await L.load();const p=(await g(L)).className||"UnknownLayer";y=n[p]}}else o==="ArcGISFeatureLayer"?M(e)||A(e)?y=n.MapNotesLayer:v(e)?y=n.RouteLayer:m(e)&&(y=n.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?y=n.WMTSLayer:o==="WFS"&&e.wfsInfo.version!=="2.0.0"&&(y=n.UnsupportedLayer);return y()}function m(e){var r,a;return e.layerType!=="ArcGISFeatureLayer"||I(e)?!1:(((a=(r=e.featureCollection)==null?void 0:r.layers)==null?void 0:a.length)??0)>1}function I(e){return e.type==="Feature Collection"}function U(e){let r;if(e.origin==="web-scene")switch(e.layerContainerType){case"basemap":r=F;break;case"ground":r=W;break;default:r=b}else switch(e.layerContainerType){case"basemap":r=V;break;case"tables":r=O;break;default:r=C}return r}async function x(e,r,a){const i=new d,o=w(i,Array.isArray(r.layers)?r.layers:[],a),t=await e;if(await o,t.type==="group")return t.layers.addMany(i),t}async function k(e,r,a){const i=n.FeatureLayer,o=await i(),t=r.featureCollection,y=t.showLegend,l=t.layers.map((L,p)=>{var S;const c=new o;c.read(L,a);const u={...a,ignoreDefaults:!0};return c.read({id:`${e.id}-sublayer-${p}`,visibility:((S=r.visibleLayers)==null?void 0:S.includes(p))??!0},u),y!=null&&c.read({showLegend:y},u),c});e.layers.addMany(l)}export{w as populateOperationalLayers};
