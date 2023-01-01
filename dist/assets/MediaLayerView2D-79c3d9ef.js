import{e as d,y as u,n as Z,m as me}from"./cast-34ff1fab.js";import"./geometry-1b3a0099.js";import{j as ae}from"./Collection-3317d203.js";import{s as ee,a as ne}from"./Error-e5869661.js";import{r as pe}from"./ensureType-abaf235a.js";import{t as _,p as le,r as x}from"./typedArrayUtil-6bfe4dae.js";import{r as he,j as de}from"./promiseUtils-281d25c9.js";import{l as H,h as O,f as ce,a as ue}from"./reactiveUtils-aec98ee9.js";import{c as N,u as fe}from"./aaBoundingRect-71c1e25d.js";import{d as ye,v as _e,a as ve}from"./Extent-b8913cd1.js";import{v as ge}from"./Polyline-7684a66d.js";import{u as we}from"./projection-0e524eaf.js";import{a as Re}from"./normalizeUtilsSync-17da0933.js";import{y as $e,r as Me}from"./TileStrategy-67e80276.js";import"./TileStore-d37d632e.js";import"./TileKey-c8cdd066.js";import{o as xe,S as Ce,c as b}from"./mathUtils-daf59e84.js";import{i as L,c as te,s as k,o as Ee,r as Te,M as Ve,f as be,h as Se}from"./mat3-45e3f2eb.js";import{e as S}from"./mat3f64-b33e332c.js";import{r as qe}from"./vec2-f978aef8.js";import{n as Ae}from"./common-701a4199.js";import{n as De}from"./vec2f64-e0301652.js";import{r as Pe}from"./utils-8ec30506.js";import{E as F,a as Ie}from"./VertexArrayObject-945630a0.js";import{P as Oe,G as je,L as ze,D as Le,F as Y}from"./enums-64ab819c.js";import{n as J,E as Ue}from"./Texture-a2ec75db.js";import{c as We}from"./screenUtils-7afeb41c.js";import{e as Ge}from"./mat3f32-d3d088e8.js";import{t as Be}from"./vec2f32-461e65a9.js";import{r as Qe}from"./vec3f32-4322908d.js";import{U as He}from"./normalizeUtils-f2358696.js";import{c as Ne}from"./MapView-334775ea.js";import{o as ke,c as Fe}from"./WGLContainer-82b81574.js";import{I as Ye}from"./enums-4ca4641f.js";import{y as Je,u as Ke}from"./LayerView-3939a1f4.js";import"./string-46813dd9.js";import"./nextTick-3ee5a785.js";import"./typeUtils-0cf27003.js";import"./jsonMap-92eea954.js";import"./Evented-fac53f7f.js";import"./SimpleObservable-f97014ec.js";import"./preload-helper-596b5639.js";import"./unitUtils-2906b0b4.js";import"./mat4-62d5e6a4.js";import"./assets-544006ef.js";import"./request-c6faf466.js";import"./zscale-750d6efd.js";import"./jsonUtils-eb956695.js";import"./Queue-bd70231f.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./Query-394dcfc7.js";import"./TimeExtent-b83e45a0.js";import"./enumeration-e40d8895.js";import"./Field-db318fdd.js";import"./fieldType-11b4c3ca.js";import"./FullTextSearch-7a786b52.js";import"./Clonable-a26a28b0.js";import"./parser-6760a715.js";import"./colorUtils-639f4d25.js";import"./MaterialKey-7483d64a.js";import"./Utils-a3ec9931.js";import"./enums-ef042d89.js";import"./VertexElementDescriptor-2925c6af.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./Color-0f9fdd46.js";import"./context-util-2080d28f.js";import"./utils-a49efee8.js";import"./Graphic-ba3a92c9.js";import"./PopupTemplate-8759f34d.js";import"./fieldUtils-c253753a.js";import"./arcadeOnDemand-c5034a8b.js";import"./number-4b1bfb24.js";import"./locale-30120714.js";import"./Identifiable-016ad07d.js";import"./symbols-0eeb49ca.js";import"./CIMSymbol-6c8aee70.js";import"./Symbol-8a110cc7.js";import"./opacityUtils-ea6b845d.js";import"./SimpleFillSymbol-80498a78.js";import"./aaBoundingBox-77ee83e3.js";import"./persistableUrlUtils-3427b748.js";import"./collectionUtils-23cca63a.js";import"./Portal-d13c5d2a.js";import"./Loadable-3c0fb2d0.js";import"./Promise-19e65545.js";import"./PortalGroup-506cda94.js";import"./PortalUser-12cb329a.js";import"./Cyclical-1a93cb12.js";import"./CollectionFlattener-489ac26c.js";import"./workers-6a283d68.js";import"./Connection-3d967827.js";import"./intl-1561e875.js";import"./messages-fe8e2c1f.js";import"./TileInfo-f6a83d08.js";import"./jsxFactory-5e151729.js";import"./uuid-73213768.js";import"./HandleOwner-9428adb4.js";import"./byteSizeEstimations-90c5a50d.js";import"./executeQueryJSON-d05df513.js";import"./query-33c0df26.js";import"./pbfQueryUtils-0caab4c3.js";import"./pbf-b75e429b.js";import"./OptimizedFeature-06185297.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-785f7a48.js";import"./FeatureSet-b61b4ed5.js";import"./RelationshipQuery-a9eb59b9.js";import"./widget-d4d1eb31.js";import"./LegendOptions-8b163282.js";import"./utils-21bb166d.js";import"./asyncUtils-64877ef6.js";import"./ItemCache-ca264f50.js";import"./MemCache-97cd02d3.js";import"./jsonUtils-30a58fb0.js";import"./UniqueValueRenderer-07be7be0.js";import"./diffUtils-67450e3a.js";import"./colorRamps-d6116b89.js";import"./sizeVariableUtils-d4870b0d.js";import"./compilerUtils-05c96a64.js";import"./lengthUtils-02fceda8.js";import"./jsonUtils-b9ebb089.js";import"./styleUtils-ea2c30a4.js";import"./DictionaryLoader-076d7343.js";import"./LRUCache-9d77066f.js";import"./deprecate-c2edfb4d.js";import"./featureConversionUtils-9849a680.js";import"./TopFeaturesQuery-80c6fd7d.js";import"./FeatureLayer-51d11ec6.js";import"./MultiOriginJSONSupport-98bacd7d.js";import"./LayerFloorInfo-21f09518.js";import"./FeatureLayerBase-08ed5a89.js";import"./HeightModelInfo-2307586e.js";import"./arcgisLayerUrl-efba9d7a.js";import"./OperationalLayer-421969eb.js";import"./ElevationInfo-7059590d.js";import"./Layer-685ea357.js";import"./editsZScale-ea881b08.js";import"./APIKeyMixin-dfeaf1ef.js";import"./ArcGISService-6da49723.js";import"./BlendLayer-1dfdcb30.js";import"./CustomParametersMixin-190de352.js";import"./EditBusLayer-e5ae410e.js";import"./FeatureReductionLayer-9b4d60f8.js";import"./labelingInfo-2aefe891.js";import"./labelUtils-cfa36e70.js";import"./defaultsJSON-b087dd4d.js";import"./OrderedLayer-1b69d825.js";import"./PortalLayer-10051047.js";import"./PortalItem-a267e3e1.js";import"./RefreshableLayer-d1776f5f.js";import"./ScaleRangeLayer-d814fce3.js";import"./TemporalLayer-b5c0f8d2.js";import"./TimeInfo-5a12a645.js";import"./FeatureTemplate-f1076210.js";import"./FeatureType-b0584768.js";import"./fieldProperties-2bcd082f.js";import"./FieldsIndex-bec5c377.js";import"./versionUtils-053df52a.js";import"./styleUtils-e7c24653.js";import"./popupUtils-6413f999.js";import"./mat2d-80bd93af.js";import"./Scheduler-8e472f39.js";import"./layerViewUtils-eb0f17b5.js";import"./actions-6d573c02.js";import"./GoTo-bb83f615.js";import"./Basemap-b4b68c3f.js";import"./loadAll-e96474c4.js";import"./writeUtils-e29f066b.js";import"./layerUtils-6996b9ea.js";import"./TablesMixin-7b01e198.js";import"./GraphicsCollection-f1594a92.js";import"./ViewingMode-fb6259a5.js";import"./unitBezier-881ac1eb.js";import"./capabilities-41f4ea67.js";import"./pixelUtils-3328f7e1.js";import"./ProgramTemplate-49a2b79c.js";import"./StyleDefinition-ae208a94.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./earcut-58237617.js";let c=class extends me{constructor(i){super(i)}get bounds(){const i=this.coords;return _(i)||_(i.extent)?null:N(i.extent)}get coords(){var e;const i=(e=le(this.element.georeference))==null?void 0:e.coords;return we(i,this.spatialReference).geometry}get normalizedCoords(){return ge.fromJSON(Re(this.coords))}get normalizedBounds(){const i=x(this.normalizedCoords)?this.normalizedCoords.extent:null;return x(i)?N(i):null}};d([u()],c.prototype,"spatialReference",void 0),d([u()],c.prototype,"element",void 0),d([u()],c.prototype,"bounds",null),d([u()],c.prototype,"coords",null),d([u()],c.prototype,"normalizedCoords",null),d([u()],c.prototype,"normalizedBounds",null),c=d([Z("esri.layers.support.media.MediaElementView")],c);const j=Ae(),R=S(),z=S(),K=S();function Xe(i,e,t){return X(z,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),X(K,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),L(i,te(z,z),K)}function X(i,e,t,r,s,o,m,p,f){k(i,e,r,o,t,s,m,1,1,1),xe(j,p,f,1),te(R,i);const[a,n,l]=Ce(j,j,Ee(R,R));return k(R,a,0,0,0,n,0,0,0,l),L(i,R,i)}const $=S();class Ze extends Pe{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=De(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(H(()=>this.elementView.element.opacity,t=>this.opacity=t,O),H(()=>[this.elementView.coords],()=>{this.requestRender()},O),ce(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&x(t.content)&&this._handles.push(he(t.content,"play",()=>this.requestRender()))},O)),e.element.load().catch(t=>{ee.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new ne("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){var e;this._handles.forEach(t=>t.remove()),(e=this.texture)==null||e.dispose(),this.texture=null}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(x(r)){const s=r instanceof HTMLImageElement,o=r instanceof HTMLVideoElement,m=s?r.naturalWidth:o?r.videoWidth:r.width,p=s?r.naturalHeight:o?r.videoHeight:r.height;this._updatePerspectiveTransform(m,p),this.texture?o&&!r.paused&&(this.texture.setData(r),this.requestRender(),(J(t.gl)||b(m)&&b(p))&&this.texture.generateMipmap()):(this.texture=new Ue(t,{pixelFormat:Oe.RGBA,dataType:je.UNSIGNED_BYTE,samplingMode:ze.LINEAR,wrapMode:Le.CLAMP_TO_EDGE,width:m,height:p,preMultiplyAlpha:!0},r),(J(t.gl)||b(m)&&b(p))&&this.texture.generateMipmap(),o&&!r.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const r=this.elementView.coords;if(_(r))return;const[s,o,m,p]=r.rings[0],f=this._vertices,{x:a,y:n}=e,l=t!==0;l?f.set([o[0]-a,o[1]-n,s[0]-a,s[1]-n,m[0]-a,m[1]-n,p[0]-a,p[1]-n,p[0]-a,p[1]-n,o[0]+t-a,o[1]-n,o[0]+t-a,o[1]-n,s[0]+t-a,s[1]-n,m[0]+t-a,m[1]-n,p[0]+t-a,p[1]-n]):f.set([o[0]-a,o[1]-n,s[0]-a,s[1]-n,m[0]-a,m[1]-n,p[0]-a,p[1]-n]),this.isWrapAround=l}getVAO(e,t,r){if(_(this.elementView.coords))return null;const s=this._vertices;if(this._vao)this._geometryVbo.setData(s);else{this._geometryVbo=F.createVertex(e,Y.DYNAMIC_DRAW,s);const o=F.createVertex(e,Y.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Ie(e,r,t,{geometry:this._geometryVbo,tex:o})}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;Xe($,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),qe(this.perspectiveTransform,$[6]/$[8]*e,$[7]/$[8]*t)}}class et extends ke{constructor(){super(...arguments),this._localOrigin=We(0,0),this._viewStateId=-1,this._dvsMat3=Ge(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Fe.overlay],target:()=>this.children,drawPhase:Ye.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:r,size:s,pixelRatio:o,resolution:m,rotation:p,viewpoint:f,displayMat3:a}=t;if(this._viewStateId===r)return;const n=Math.PI/180*p,l=o*s[0],g=o*s[1],{x:C,y:q}=f.targetGeometry,A=He(C,t.spatialReference);this._localOrigin.x=A,this._localOrigin.y=q;const E=m*l,w=m*g,h=Te(this._dvsMat3);L(h,h,a),Ve(h,h,Be(l/2,g/2)),be(h,h,Qe(l/E,-g/w,1)),Se(h,h,-n),this._viewStateId=r}_updateOverlays(e,t){const{state:r}=e,{rotation:s,spatialReference:o,worldScreenWidth:m,size:p,viewpoint:f}=r,a=this._localOrigin;let n=0;if(o.isWrappable){const l=p[0],g=p[1],C=180/Math.PI*s,q=Math.abs(Math.cos(C)),A=Math.abs(Math.sin(C)),E=Math.round(l*q+g*A),[w,h]=ye(o).valid,y=Ne(o),{x:U,y:re}=f.targetGeometry,ie=[U,re],D=[0,0];r.toScreen(D,ie);const T=[0,0];let P;P=E>m?.5*m:.5*E;const W=Math.floor((U+.5*y)/y),oe=w+W*y,se=h+W*y,I=[D[0]+P,0];r.toMap(T,I),T[0]>se&&(n=y),I[0]=D[0]-P,r.toMap(T,I),T[0]<oe&&(n=-y);for(const V of t){const G=V.elementView.bounds;if(_(G))continue;const[B,,Q]=G;B<w&&Q>w?V.updateDrawCoords(a,y):Q>h&&B<h?V.updateDrawCoords(a,-y):V.updateDrawCoords(a,n)}}else for(const l of t)l.updateDrawCoords(a,n)}}let v=class extends Je(Ke){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this.layer=null,this.elements=new ae}attach(){this.handles.add(ue(()=>this.layer.source,"refresh",()=>{for(const i of this._tileStrategy.tiles)this._updateTile(i);this.requestUpdate()})),this._overlayContainer=new et,this.container.addChild(this._overlayContainer),this._fetchQueue=new $e({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(i,e)=>this._queryElements(i,e)}),this._tileStrategy=new Me({cachePolicy:"purge",resampling:!0,acquireTile:i=>this._acquireTile(i),releaseTile:i=>this._releaseTile(i),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.handles.removeAll(),this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear()}supportsSpatialReference(i){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(i){this._tileStrategy.update(i)}async hitTest(i,e){const t=[],r=i.normalize(),s=[r.x,r.y];for(const{projectedElement:{normalizedCoords:o,element:m}}of this._elementReferences.values())x(o)&&_e(o.rings,s)&&t.push({type:"media",element:m,layer:this.layer,mapPoint:i});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){}_acquireTile(i){const e=new tt(i.clone());return this._updateTile(e),e}_updateTile(i){this.updatingHandles.addPromise(this._fetchQueue.push(i.key).then(e=>{const[t,r]=i.setElements(e);this._acquireElements(i,t),this._releaseElements(i,r),this.requestUpdate()},e=>{de(e)||ee.getLogger(this.declaredClass).error(e)}))}_releaseTile(i){this._fetchQueue.abort(i.key.id),i.elements&&this._releaseElements(i,i.elements),this.requestUpdate()}async _queryElements(i,e){const t=this.layer.source;if(_(t))return[];this.view.featuresTilingScheme.getTileBounds(M,i,!0);const r=new ve({xmin:M[0],ymin:M[1],xmax:M[2],ymax:M[3],spatialReference:this.view.spatialReference});return t.queryElements(r,e)}_acquireElements(i,e){const t=this.layer.source,r=this.view.spatialReference;if(!_(t))for(const s of e)pe(this._elementReferences,s.uid,()=>{const o=new c({element:s,spatialReference:r}),m=new Ze(o);return this._overlayContainer.addChild(m),this.elements.add(s),{tiles:new Set,projectedElement:o,overlay:m}}).tiles.add(i)}_releaseElements(i,e){for(const t of e){const r=this._elementReferences.get(t.uid);r.tiles.delete(i),r.tiles.size||(this._overlayContainer.removeChild(r.overlay),r.overlay.destroy(),r.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t))}}};d([u()],v.prototype,"_fetchQueue",void 0),d([u()],v.prototype,"layer",void 0),d([u({readOnly:!0})],v.prototype,"elements",void 0),v=d([Z("esri.views.2d.layers.MediaLayerView2D")],v);const M=fe();class tt{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const s of e)r.has(s)?r.delete(s):t.push(s);return this.isReady=!0,[t,Array.from(r)]}}const Mo=v;export{Mo as default};
