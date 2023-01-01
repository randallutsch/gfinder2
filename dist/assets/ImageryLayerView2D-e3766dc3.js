import{e as a,y as o,n as v,m as T}from"./cast-7ef3a066.js";import{g as f}from"./Graphic-17f3b359.js";import{j as $}from"./Collection-8f94e599.js";import{l as g,w as _,U as V}from"./reactiveUtils-b911287d.js";import{r as b,t as E,e as I}from"./typedArrayUtil-4015bf74.js";import"./ArrayPool-45db95ab.js";import{i as U}from"./GraphicsLayer-585ce116.js";import{y as z,d as A}from"./RasterVFDisplayObject-a7929aac.js";import{y as M,u as O}from"./LayerView-3ffe8f9a.js";import{o as j}from"./BaseGraphicContainer-9a57caae.js";import{n as N}from"./HighlightGraphicContainer-2a2bc162.js";import{s as P,a as S}from"./Error-1dfe2922.js";import{j as R,x as J}from"./promiseUtils-e323addc.js";import{A as L}from"./pixelUtils-d21f4266.js";import{a as G}from"./BitmapContainer-4014ec9b.js";import{i as H}from"./utils-b31292b4.js";import{i as W}from"./Bitmap-16faffe0.js";import{v as K}from"./ExportStrategy-b5fe9e09.js";import{U as Q}from"./request-4f5c54dd.js";import{d as X}from"./HandleOwner-2d282b7c.js";import{a as k,w as q}from"./Extent-54ef1174.js";import{J as Y}from"./rasterProjectionHelper-6a26cb15.js";import{x as Z,d as tt}from"./dataUtils-c75aab1e.js";import{o as et,d as it}from"./WGLContainer-0eb146a3.js";import{I as D}from"./enums-4ca4641f.js";import{g as rt}from"./OperationalLayer-0fbaa211.js";import{x as st}from"./Query-8a7aa408.js";import{s as at}from"./popupUtils-46813370.js";import{i as ot}from"./RefreshableLayerView-5bc632d3.js";import"./string-7d6c8f5c.js";import"./nextTick-3ee5a785.js";import"./geometry-22feb2bb.js";import"./Polyline-d942e774.js";import"./typeUtils-17403a33.js";import"./jsonMap-c8081704.js";import"./PopupTemplate-9da636f6.js";import"./Clonable-c315fc8d.js";import"./fieldUtils-75feb382.js";import"./preload-helper-101896b7.js";import"./arcadeOnDemand-797f4f1c.js";import"./enumeration-cda3949b.js";import"./number-1bdcdfd9.js";import"./locale-30120714.js";import"./Identifiable-d701141a.js";import"./symbols-87ca67f4.js";import"./CIMSymbol-52d72a23.js";import"./Symbol-6522d2f3.js";import"./Color-7a3d8c62.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-2c2d0d87.js";import"./aaBoundingBox-10130714.js";import"./persistableUrlUtils-afa98d6c.js";import"./collectionUtils-07fb1a58.js";import"./Portal-0c20e3a4.js";import"./Loadable-772aaf20.js";import"./Promise-e08b9d4d.js";import"./PortalGroup-100f1bed.js";import"./PortalUser-7acb0e3c.js";import"./jsonUtils-196b5f3d.js";import"./Evented-7dfb249a.js";import"./SimpleObservable-ddf0ceba.js";import"./Layer-aa68e6a9.js";import"./BlendLayer-00b35d0f.js";import"./parser-60fed632.js";import"./mat4-62d5e6a4.js";import"./ScaleRangeLayer-21fc7ea0.js";import"./ElevationInfo-a7cee627.js";import"./lengthUtils-f3b6e37f.js";import"./unitUtils-58dc72ed.js";import"./VertexArrayObject-27eaf50f.js";import"./Texture-2d4e629f.js";import"./context-util-87dfae31.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./mat3-45e3f2eb.js";import"./mat3f32-d3d088e8.js";import"./vec2f32-461e65a9.js";import"./Utils-69437480.js";import"./enums-ef042d89.js";import"./ExpandedCIM-e40bb4ca.js";import"./BidiEngine-836b7ef6.js";import"./aaBoundingRect-e7f76732.js";import"./MaterialKey-13d5dd3c.js";import"./mat2d-80bd93af.js";import"./vec2-f978aef8.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-14228c88.js";import"./GeometryUtils-eebff0a0.js";import"./floatRGBA-305df8f3.js";import"./normalizeUtilsSync-106b4c98.js";import"./normalizeUtils-9ff08cf4.js";import"./projectionSupport-22303543.js";import"./projection-ef32d842.js";import"./assets-6d4d2dad.js";import"./zscale-65468675.js";import"./json-48e3ea08.js";import"./labelingInfo-f5cd653d.js";import"./labelUtils-d3906ba4.js";import"./defaultsJSON-b087dd4d.js";import"./jsonUtils-d1659db1.js";import"./FeatureContainer-9ffbac33.js";import"./TileContainer-5404bedc.js";import"./TileKey-03ab4f60.js";import"./Queue-26a7c9c9.js";import"./visualVariablesUtils-cd632025.js";import"./visualVariablesUtils-b964ebb8.js";import"./capabilities-dddb0ea5.js";import"./Matcher-94f40cdf.js";import"./TileStrategy-b2d2fa5e.js";import"./TileStore-e480c2b6.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./tileUtils-d57fc766.js";import"./TileClipper-b8854753.js";import"./Geometry-daada628.js";import"./GeometryUtils-c093d234.js";import"./featureConversionUtils-99b22ab9.js";import"./OptimizedFeature-aa2e72dc.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./earcut-58237617.js";import"./LRUCache-f9ba273b.js";import"./MemCache-15515535.js";import"./devEnvironmentUtils-5002a058.js";import"./styleUtils-5b0ea69d.js";import"./schemaUtils-85d1403c.js";import"./LayerFloorInfo-152559a6.js";import"./diffUtils-f2c670bd.js";import"./createSymbolSchema-0ec759f8.js";import"./rendererUtils-0c1268cc.js";import"./FeatureReductionLayer-be2d99dd.js";import"./TimeExtent-dfe3f644.js";import"./UniqueValueRenderer-5b8937c2.js";import"./LegendOptions-998df0a8.js";import"./colorRamps-68d0ae1f.js";import"./sizeVariableUtils-d4870b0d.js";import"./compilerUtils-c5090cf5.js";import"./jsonUtils-b516d686.js";import"./DictionaryLoader-3932e3bb.js";import"./deprecate-9e0289e6.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./util-72a186a3.js";import"./ComputedAttributeStorage-002a0545.js";import"./FeatureSetReader-67ae9e70.js";import"./centroid-e729b670.js";import"./FieldsIndex-7523f868.js";import"./vec3f32-4322908d.js";import"./TileInfo-9954a0c0.js";import"./vec2f64-e0301652.js";import"./ProgramTemplate-921deefe.js";import"./StyleDefinition-ae208a94.js";import"./config-1337d16e.js";import"./Field-a857bb5a.js";import"./fieldType-36e8171c.js";let l=class extends T{constructor(){super(...arguments),this.attached=!1,this.container=new H,this.updateRequested=!1,this.type="imagery",this._bitmapView=new G}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch(e=>{R(e)||P.getLogger(this.declaredClass).error(e)})}hitTest(t){return new f({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new K({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async t=>{if(t.source instanceof HTMLImageElement)return;const e=await this.layer.applyRenderer({extent:t.source.extent,pixelBlock:t.source.originalPixelBlock??t.source.pixelBlock}),i=t.source;i.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...e,extent:i.extent}}).catch(t=>{R(t)||P.getLogger(this.declaredClass).error(t)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(t.length===1&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map(s=>s.source).filter(s=>s.extent&&s.extent.intersects(e)).map(s=>({extent:s.extent,pixelBlock:s.originalPixelBlock})),r=L(i,e);return b(r)?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}_fetchImage(t,e,i,r){return(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,this.layer.fetchImage(t,e,i,r).then(s=>s.imageOrCanvasElement?s.imageOrCanvasElement:this.layer.applyRenderer(s.pixelData,{signal:r.signal}).then(n=>{const p=new W(n.pixelBlock,n.extent.clone(),s.pixelData.pixelBlock);return p.filter=u=>this.layer.applyFilter(u),p}))}};a([o()],l.prototype,"attached",void 0),a([o()],l.prototype,"container",void 0),a([o()],l.prototype,"layer",void 0),a([o()],l.prototype,"strategy",void 0),a([o()],l.prototype,"timeExtent",void 0),a([o()],l.prototype,"view",void 0),a([o()],l.prototype,"updateRequested",void 0),a([o()],l.prototype,"updating",null),a([o()],l.prototype,"type",void 0),l=a([v("esri.views.2d.layers.imagery.ImageryView2D")],l);const nt=l;class pt extends et{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(e){const i=e.registerRenderPass({name:"imagery (vf)",brushes:[it],target:()=>this.children,drawPhase:D.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===D.MAP&&this.symbolTypes.forEach(i=>{e.renderPass=i,super.doRender(e)})}}let y=class extends T{constructor(t){super(t),this.update=J((e,i)=>this._update(e,i).catch(r=>{R(r)||P.getLogger(this.declaredClass).error(r)}))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const e=this.container.children[0];e.symbolizerParameters=t,e.invalidateVAO(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,e,i){if(!t.stationary)return;const{extent:r,spatialReference:s}=t.state,n=new k({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:s}),[p,u]=t.state.size;this._loading=this.fetchPixels(n,p,u,i);const h=await this._loading;this._addToDisplay(h,e,t.state),this._loading=null}_addToDisplay(t,e,i){if(E(t.pixelBlock))return this.container.children.forEach(p=>p.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:s}=t,n=new z(s);n.offset=[0,0],n.symbolizerParameters=e,n.rawPixelData=t,n.invalidateVAO(),n.x=r.xmin,n.y=r.ymax,n.pixelRatio=i.pixelRatio,n.rotation=i.rotation,n.resolution=i.resolution,n.width=s.width*e.symbolTileSize,n.height=s.height*e.symbolTileSize,this.container.children.forEach(p=>p.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(n)}};a([o()],y.prototype,"fetchPixels",void 0),a([o()],y.prototype,"container",void 0),a([o()],y.prototype,"_loading",void 0),a([o()],y.prototype,"updating",null),y=a([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const lt=y;let m=class extends X{constructor(){super(...arguments),this.attached=!1,this.container=new pt,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,i,r)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:n}=this.layer.renderer,{extent:p,width:u,height:h}=Z(t,e,i,n,s);if(b(s)&&!s.intersects(t))return{extent:p,pixelBlock:null};const d={bbox:`${p.xmin}, ${p.ymin}, ${p.xmax}, ${p.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:n,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(d)){const c=this.getPixelData();if(b(c)&&`${c.extent.xmin}, ${c.extent.ymin}, ${c.extent.xmax}, ${c.extent.ymax}`===d.bbox)return c}const{pixelData:w}=await this.layer.fetchImage(p,u,h,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});return this._dataParameters=d,E(w.pixelBlock)?{extent:p,pixelBlock:null}:{extent:p,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?I(tt(w.pixelBlock,"vector-uv")):w.pixelBlock}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new lt({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(g(()=>this.layer.renderer,t=>this._updateSymbolizerParams(t),_),"vector-field-view-update")}detach(){this._strategy.destroy(),this.container.children.forEach(t=>t.destroy()),this.container.removeAllChildren(),this.handles.remove("vector-field-view-update"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){if(this.updating||!this.container.children.length)return null;const{extent:t,pixelBlock:e}=this.container.children[0].rawPixelData;return{extent:t,pixelBlock:e}}hitTest(t){return new f({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams)}redraw(){this._updateSymbolizerParams(this.layer.renderer),this._strategy.redraw(this._symbolizerParams)}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,i=this._dataParameters.time===t.time,r=this._dataParameters.symbolTileSize===t.symbolTileSize,s=this._dataParameters.bbox===t.bbox;return e&&i&&r&&s}async _getProjectedFullExtent(t){try{return await Y(this.layer.fullExtent,t)}catch{try{const i=(await Q(this.layer.url,{query:{option:"footprints",outSR:t.wkid||JSON.stringify(t.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?k.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(t){t.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};a([o()],m.prototype,"attached",void 0),a([o()],m.prototype,"container",void 0),a([o()],m.prototype,"layer",void 0),a([o()],m.prototype,"timeExtent",void 0),a([o()],m.prototype,"type",void 0),a([o()],m.prototype,"view",void 0),a([o()],m.prototype,"updating",null),m=a([v("esri.views.2d.layers.imagery.VectorFieldView2D")],m);const mt=m,ht=t=>{let e=class extends t{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(i,r){const{layer:s}=this;if(!i)throw new S("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:n}=s,p=at(s,r);if(!n||E(p))throw new S("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:p});const u=await p.getRequiredFields(),h=new st;h.timeExtent=this.timeExtent,h.geometry=i,h.outFields=u,h.outSpatialReference=i.spatialReference;const d=this.view.resolution,w=this.view.type==="2d"?new q(d,d,this.view.spatialReference):new q(.5*d,.5*d,this.view.spatialReference),{returnTopmostRaster:c,showNoDataRecords:B}=p.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},C={returnDomainValues:!0,returnTopmostRaster:c,pixelSize:w,showNoDataRecords:B,signal:b(r)?r.signal:null};return s.queryVisibleRasters(h,C).then(F=>F)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return a([o()],e.prototype,"layer",void 0),a([o()],e.prototype,"suspended",void 0),a([o(rt)],e.prototype,"timeExtent",void 0),a([o()],e.prototype,"view",void 0),e=a([v("esri.views.layers.ImageryLayerView")],e),e};let x=class extends ht(ot(M(O))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new U,this.subview=null}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}async hitTest(t,e){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(t),layer:this.layer,mapPoint:t}]:null}update(t){var e;(e=this.subview)==null||e.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new j({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new N(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.handles.add([g(()=>this.layer.blendMode??"normal",t=>this.subview.container.blendMode=t,_),g(()=>this.layer.effect??null,t=>this.subview.container.effect=t,_),g(()=>this.layer.exportImageServiceParameters.version,t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())},V),g(()=>this.timeExtent,t=>{this.subview.timeExtent=t,"redraw"in this.subview?this.requestUpdate():this.subview.redrawOrRefetch()},V),this.layer.on("redraw",()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch()}),g(()=>this.layer.renderer,()=>this._setSubView())],"imagerylayerview-update")}detach(){var t,e;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(t=this.subview)==null||t.destroy(),this.handles.remove("imagerylayerview-update"),this.subview=null,(e=this._highlightView)==null||e.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,e){if(!((Array.isArray(t)?t[0]:$.isCollection(t)?t.getItemAt(0):t)instanceof f))return{remove:()=>{}};let i=[];return Array.isArray(t)||$.isCollection(t)?i=t.map(r=>r.clone()):t instanceof f&&(i=[t.clone()]),this._highlightGraphics.addMany(i),{remove:()=>{this._highlightGraphics.removeMany(i)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var i,r;if(!this.view)return;const t=(i=this.layer.renderer)==null?void 0:i.type;let e="imagery";if(t==="vector-field"?e="imageryVF":t==="flow"&&(e="flow"),this.subview){const{type:s}=this.subview;if(s===e)return this._attachSubview(this.subview),void(s==="flow"?this.subview.redrawOrRefetch():s==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=e==="imagery"?new nt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):e==="imageryVF"?new mt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new A({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0),t.container.blendMode=this.layer.blendMode,t.container.effect=this.layer.effect)}_detachSubview(t){t!=null&&t.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};a([o()],x.prototype,"pixelData",null),a([o()],x.prototype,"subview",void 0),x=a([v("esri.views.2d.layers.ImageryLayerView2D")],x);const nr=x;export{nr as default};
