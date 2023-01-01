import{e as o,y as p,n as e}from"./cast-34ff1fab.js";import{s as a}from"./Error-e5869661.js";import{j as s}from"./promiseUtils-281d25c9.js";import"./typedArrayUtil-6bfe4dae.js";import"./ensureType-abaf235a.js";import{a as n}from"./BitmapContainer-8069c016.js";import{y as h,u as d}from"./LayerView-3939a1f4.js";import{v as c}from"./ExportStrategy-5bb9cd75.js";import{i as u}from"./RefreshableLayerView-233725a1.js";import"./string-46813dd9.js";import"./nextTick-3ee5a785.js";import"./WGLContainer-82b81574.js";import"./mat3f32-d3d088e8.js";import"./enums-64ab819c.js";import"./mat3-45e3f2eb.js";import"./common-701a4199.js";import"./vec2f32-461e65a9.js";import"./pixelUtils-3328f7e1.js";import"./utils-8ec30506.js";import"./parser-6760a715.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./mat4-62d5e6a4.js";import"./Evented-fac53f7f.js";import"./enums-4ca4641f.js";import"./MaterialKey-7483d64a.js";import"./Utils-a3ec9931.js";import"./mathUtils-daf59e84.js";import"./enums-ef042d89.js";import"./Texture-a2ec75db.js";import"./context-util-2080d28f.js";import"./VertexElementDescriptor-2925c6af.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./Color-0f9fdd46.js";import"./vec2f64-e0301652.js";import"./VertexArrayObject-945630a0.js";import"./ProgramTemplate-49a2b79c.js";import"./StyleDefinition-ae208a94.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./reactiveUtils-aec98ee9.js";import"./earcut-58237617.js";import"./vec2-f978aef8.js";import"./featureConversionUtils-9849a680.js";import"./jsonUtils-eb956695.js";import"./Extent-b8913cd1.js";import"./Polyline-7684a66d.js";import"./OptimizedFeature-06185297.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Collection-3317d203.js";import"./SimpleObservable-f97014ec.js";import"./collectionUtils-23cca63a.js";import"./geometry-1b3a0099.js";import"./typeUtils-0cf27003.js";import"./jsonMap-92eea954.js";import"./HandleOwner-9428adb4.js";import"./Identifiable-016ad07d.js";import"./Promise-19e65545.js";import"./aaBoundingRect-71c1e25d.js";import"./TileInfo-f6a83d08.js";import"./unitUtils-2906b0b4.js";import"./Bitmap-0184cfeb.js";import"./TileStore-d37d632e.js";import"./Queue-bd70231f.js";import"./TileKey-c8cdd066.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./Query-394dcfc7.js";import"./TimeExtent-b83e45a0.js";import"./enumeration-e40d8895.js";import"./Field-db318fdd.js";import"./fieldType-11b4c3ca.js";import"./FullTextSearch-7a786b52.js";import"./Clonable-a26a28b0.js";let t=class extends u(h(d)){update(r){this._strategy.update(r).catch(i=>{s(i)||a.getLogger(this.declaredClass).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImage(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([e("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const It=t;export{It as default};