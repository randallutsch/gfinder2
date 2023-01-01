import{e as c,y as h,n as J}from"./cast-7ef3a066.js";import{j as _,g as X,U as A,K as C,G as P,B as v,H as Y,f as Q,C as q,F,O as H,p as V,q as Z}from"./request-3bbdab19.js";import{j as tt}from"./asyncUtils-bd6eb812.js";import{s as et,a as b,b as M}from"./Error-1dfe2922.js";import{y as x}from"./string-7d6c8f5c.js";import{P as rt,k as it,e as st}from"./typedArrayUtil-4015bf74.js";import{O as ot}from"./MultiOriginJSONSupport-98cda0d2.js";import{f as z,j as lt,w as T}from"./promiseUtils-e323addc.js";import"./ArrayPool-45db95ab.js";import{a as K,k as at,r as nt,o as pt}from"./Extent-54ef1174.js";import{b as ut}from"./Layer-d4420615.js";import{i as ct}from"./APIKeyMixin-62cd629d.js";import{s as ht}from"./ArcGISCachedService-6e0844a6.js";import{p as yt}from"./ArcGISService-391eca72.js";import{n as dt}from"./BlendLayer-00b35d0f.js";import{o as mt}from"./CustomParametersMixin-1353f893.js";import{c as ft}from"./OperationalLayer-06028ec1.js";import{v as gt}from"./PortalLayer-2a93959d.js";import{t as At}from"./ScaleRangeLayer-21fc7ea0.js";import{j as O}from"./TileInfo-9954a0c0.js";import{n as St,z as wt}from"./TilemapCache-67a71cd8.js";import{e as W}from"./TileKey-03ab4f60.js";import{e as vt}from"./jsonContext-96bc6b0c.js";import{y as xt}from"./persistableUrlUtils-2c2cd088.js";import{l as _t}from"./StyleRepository-c5214428.js";import{l as D}from"./capabilities-dddb0ea5.js";import"./nextTick-3ee5a785.js";import"./preload-helper-596b5639.js";import"./geometry-22feb2bb.js";import"./Polyline-d942e774.js";import"./typeUtils-17403a33.js";import"./jsonMap-c8081704.js";import"./Evented-7dfb249a.js";import"./Identifiable-d701141a.js";import"./Loadable-772aaf20.js";import"./Promise-e08b9d4d.js";import"./arcgisLayerUrl-af21cccf.js";import"./parser-60fed632.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./mat4-62d5e6a4.js";import"./common-701a4199.js";import"./TimeExtent-dfe3f644.js";import"./ElevationInfo-01beda98.js";import"./fieldUtils-cb9b3e6e.js";import"./arcadeOnDemand-490dc8ce.js";import"./lengthUtils-f3b6e37f.js";import"./unitUtils-58dc72ed.js";import"./opacityUtils-2c2d0d87.js";import"./Portal-af5b2c18.js";import"./locale-30120714.js";import"./PortalGroup-100f1bed.js";import"./PortalUser-0170111d.js";import"./PortalItem-49bcac17.js";import"./assets-04f03891.js";import"./aaBoundingRect-e7f76732.js";import"./mathUtils-daf59e84.js";import"./byteSizeEstimations-90c5a50d.js";import"./HandleOwner-2d282b7c.js";import"./reactiveUtils-b911287d.js";import"./LRUCache-f9ba273b.js";import"./MemCache-15515535.js";import"./StyleDefinition-ae208a94.js";import"./enums-ef042d89.js";import"./enums-bfc9e4e9.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./Color-7a3d8c62.js";import"./colorUtils-0c057879.js";import"./unitBezier-881ac1eb.js";import"./GeometryUtils-eebff0a0.js";import"./Geometry-daada628.js";import"./context-util-87dfae31.js";let U=null;function Ut(t){if(U)return U;const e={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return U=new Promise(r=>{const i=new Image;i.onload=()=>{i.onload=i.onerror=null,r(i.width>0&&i.height>0)},i.onerror=()=>{i.onload=i.onerror=null,r(!1)},i.src="data:image/webp;base64,"+e[t]}),U}const E=1.15;let B=class{constructor(e,r){this._spriteSource=e,this._maxTextureSize=r,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded",e.type==="url"&&e.spriteFormat&&(this._spriteImageFormat=e.spriteFormat),e.pixelRatio&&(this.devicePixelRatio=e.pixelRatio),this.baseURL=e.spriteUrl}get spriteNames(){const e=[];for(const r in this._spritesData)e.push(r);return e.sort(),e}getSpriteInfo(e){return this._spritesData?this._spritesData[e]:null}async load(e){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(e),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(e){this._isRetina=this.devicePixelRatio>E;const{width:r,height:i,data:s,json:o}=await this._getSpriteData(this._spriteSource,e),l=Object.keys(o);if(!l||l.length===0||!s)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=o,this.width=r,this.height=i;const n=Math.max(this._maxTextureSize,4096);if(r>n||i>n){const a=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${n} pixels}`;throw et.getLogger("esri.layers.support.SpriteSource").error(a),new b("SpriteSource",a)}let p;for(let a=0;a<s.length;a+=4)p=s[a+3]/255,s[a]=s[a]*p,s[a+1]=s[a+1]*p,s[a+2]=s[a+2]*p;this.image=s}async _getSpriteData(e,r){if(e.type==="image"){let y,d;if(this.devicePixelRatio<E){if(!e.spriteSource1x)throw new b("SpriteSource","no image data provided for low resolution sprites!");y=e.spriteSource1x.image,d=e.spriteSource1x.json}else{if(!e.spriteSource2x)throw new b("SpriteSource","no image data provided for high resolution sprites!");y=e.spriteSource2x.image,d=e.spriteSource2x.json}return"width"in y&&"height"in y&&"data"in y&&(rt(y.data)||it(y.data))?{width:y.width,height:y.height,data:new Uint8Array(y.data),json:d}:{...N(y),json:d}}const i=_(this.baseURL),s=i.query?"?"+X(i.query):"",o=this._isRetina?"@2x":"",l=`${i.path}${o}.${this._spriteImageFormat}${s}`,n=`${i.path}${o}.json${s}`,[p,a]=await Promise.all([A(n,r),A(l,{responseType:"image",...r})]);return{...N(a.data),json:p.data}}};function N(t){const e=document.createElement("canvas"),r=e.getContext("2d");e.width=t.width,e.height=t.height,r.drawImage(t,0,0,t.width,t.height);const i=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,data:new Uint8Array(i.data)}}class It{constructor(e){this.url=e}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=A(this.url).then(e=>e.data.index)),this._tileIndexPromise}async dataKey(e,r){const i=await this.fetchTileIndex();return z(r),this._getIndexedDataKey(i,e)}_getIndexedDataKey(e,r){const i=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let s=r;for(;s.level!==0;)s=new W(s.level-1,s.row>>1,s.col>>1,s.world),i.push(s);let o,l,n=e,p=i.pop();if(n===1)return p;for(;i.length;)if(o=i.pop(),l=(1&o.col)+((1&o.row)<<1),n){if(n[l]===0){p=null;break}if(n[l]===1){p=o;break}p=o,n=n[l]}return p}}let Rt=class{constructor(e,r){this._tilemap=e,this._tileIndexUrl=r}async fetchTileIndex(e){return this._tileIndexPromise||(this._tileIndexPromise=A(this._tileIndexUrl,{query:{...e==null?void 0:e.query}}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(e,r){const{level:i,row:s,col:o}=e,l=new W(e);return this._tilemap.fetchAvailabilityUpsample(i,s,o,l,r).then(()=>(l.world=e.world,l)).catch(n=>{if(lt(n))throw n;return null})}};const I=new Map;function bt(t,e,r,i,s){return Tt(t.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,i.toString()),s)}function Tt(t,e){const r=I.get(t);if(r)return r.then(s=>x(s));const i=A(t,{responseType:"array-buffer",...e}).then(({data:s})=>(I.delete(t),s)).catch(s=>{throw I.delete(t),s});return I.set(t,i),i}let $t=class{constructor(e,r,i){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=e,this.sourceUrl=r;const s=_(this.sourceUrl),o=x(i),l=o.tiles;if(s)for(let f=0;f<l.length;f++){const m=_(l[f]);m&&(C(m.path)||(m.path=P(s.path,m.path)),l[f]=v(m.path,{...s.query,...m.query}))}this.tileServers=l;const n=i.capabilities&&i.capabilities.split(",").map(f=>f.toLowerCase().trim()),p=(i==null?void 0:i.exportTilesAllowed)===!0,a=(n==null?void 0:n.includes("tilemap"))===!0,y=p&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:p,supportsTileMap:a},exportTiles:p?{maxExportTilesCount:+y}:null},this.tileInfo=St(o.tileInfo,o,null,{ignoreMinMaxLOD:!0});const d=i.tileMap?v(P(s.path,i.tileMap),s.query):null;a?(this.type="vector-tile",this.tilemap=new Rt(new wt({layer:{parsedUrl:s,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),d)):d&&(this.tilemap=new It(d)),this.fullExtent=K.fromJSON(i.fullExtent)}destroy(){}async getRefKey(e,r){var i;return((i=this.tilemap)==null?void 0:i.dataKey(e,r))??e}requestTile(e,r,i,s){const o=this.tileServers[r%this.tileServers.length];return bt(o,e,r,i,s)}isCompatibleWith(e){const r=this.tileInfo,i=e.tileInfo;if(!r.spatialReference.equals(i.spatialReference)||!r.origin.equals(i.origin)||Math.round(r.dpi)!==Math.round(i.dpi))return!1;const s=r.lods,o=i.lods,l=Math.min(s.length,o.length);for(let n=0;n<l;n++){const p=s[n],a=o[n];if(p.level!==a.level||Math.round(p.scale)!==Math.round(a.scale))return!1}return!0}};const $=M.defaults&&M.defaults.io.corsEnabledServers;async function Pt(t,e){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[i,s]=typeof t=="string"?[t,null]:[null,t.jsonUrl];await g(r,"esri",t,s,e);const o={layerDefinition:r.validatedSource,url:i,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&w(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&w(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return S(o.spriteUrl),S(o.glyphsUrl),o}function S(t){if(!t)return;const e=Y(t);$&&!$.includes(e)&&$.push(e)}function w(...t){let e;for(let r=0;r<t.length;++r)Q(t[r])?e&&(e=e.split("://")[0]+":"+t[r].trim()):e=C(t[r])?t[r]:P(e,t[r]);return q(e)}async function g(t,e,r,i,s){let o,l,n;if(z(s),typeof r=="string"){const a=F(r);S(a),n=await A(a,{...s,responseType:"json",query:{f:"json",...s==null?void 0:s.query}}),n.ssl&&(o&&(o=o.replace(/^http:/i,"https:")),l&&(l=l.replace(/^http:/i,"https:"))),o=a,l=a}else n={data:r},o=r.jsonUrl||null,l=i;const p=n.data;if(G(p))return t.styleUrl=o||null,Lt(t,p,l,s);if(Ot(p))return t.sourceUrl?k(t,p,l,!1,e,s):(t.sourceUrl=o||null,k(t,p,l,!0,e,s));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function G(t){return!!t.sources}function Ot(t){return!G(t)}async function Lt(t,e,r,i){const s=r?H(r):V();t.styleBase=s,t.style=e,t.styleUrl&&S(t.styleUrl),e["sprite-format"]&&e["sprite-format"].toLowerCase()==="webp"&&(t.spriteFormat="webp");const o=[];if(e.sources&&e.sources.esri){const l=e.sources.esri;l.url?await g(t,"esri",w(s,l.url),void 0,i):o.push(g(t,"esri",l,s,i))}for(const l of Object.keys(e.sources))l!=="esri"&&e.sources[l].type==="vector"&&(e.sources[l].url?o.push(g(t,l,w(s,e.sources[l].url),void 0,i)):e.sources[l].tiles&&o.push(g(t,l,e.sources[l],s,i)));await Promise.all(o)}async function k(t,e,r,i,s,o){const l=r?q(r)+"/":V(),n=jt(e,l),p=new $t(s,v(l,o==null?void 0:o.query),n);if(!i&&t.primarySourceName in t.sourceNameToSource){const a=t.sourceNameToSource[t.primarySourceName];if(!a.isCompatibleWith(p))return;p.fullExtent!=null&&(a.fullExtent!=null?a.fullExtent.union(p.fullExtent):a.fullExtent=p.fullExtent.clone()),a.tileInfo.lods.length<p.tileInfo.lods.length&&(a.tileInfo=p.tileInfo)}if(i?(t.sourceBase=l,t.source=e,t.validatedSource=n,t.primarySourceName=s,t.sourceUrl&&S(t.sourceUrl)):S(l),t.sourceNameToSource[s]=p,!t.style){if(e.defaultStyles==null)throw new Error;return typeof e.defaultStyles=="string"?g(t,"",w(l,e.defaultStyles,"root.json"),void 0,o):g(t,"",e.defaultStyles,w(l,"root.json"),o)}}function jt(t,e){if(t.hasOwnProperty("tileInfo"))return t;const r={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100}},i=512;let s=78271.51696400007,o=2958287637957775e-7;const l=[],n=t.hasOwnProperty("minzoom")?+t.minzoom:0,p=t.hasOwnProperty("maxzoom")?+t.maxzoom:22;for(let a=0;a<=p;a++)a>=n&&l.push({level:a,scale:o,resolution:s}),s/=2,o/=2;for(const a of t.tiles)S(w(e,a));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:t.tiles,tileInfo:{rows:i,cols:i,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:l,spatialReference:{wkid:102100}}}}const R=1e-6;function Mt(t,e){if(t===e)return!0;if(t==null&&e!=null||t!=null&&e==null||t==null||e==null||!t.spatialReference.equals(e.spatialReference)||t.dpi!==e.dpi)return!1;const r=t.origin,i=e.origin;if(Math.abs(r.x-i.x)>=R||Math.abs(r.y-i.y)>=R)return!1;let s,o;t.lods[0].scale>e.lods[0].scale?(s=t,o=e):(o=t,s=e);for(let l=s.lods[0].scale;l>=o.lods[o.lods.length-1].scale-R;l/=2)if(Math.abs(l-o.lods[0].scale)<R)return!0;return!1}function Dt(t,e){if(t===e)return t;if(t==null&&e!=null)return e;if(t!=null&&e==null)return t;if(t==null||e==null)return null;const r=t.size[0],i=t.format,s=t.dpi,o={x:t.origin.x,y:t.origin.y},l=t.spatialReference.toJSON(),n=t.lods[0].scale>e.lods[0].scale?t.lods[0]:e.lods[0],p=t.lods[t.lods.length-1].scale<=e.lods[e.lods.length-1].scale?t.lods[t.lods.length-1]:e.lods[e.lods.length-1],a=n.scale,y=n.resolution,d=p.scale,f=[];let m=a,L=y,j=0;for(;m>d;)f.push({level:j,resolution:L,scale:m}),j++,m/=2,L/=2;return new O({size:[r,r],dpi:s,format:i||"pbf",origin:o,lods:f,spatialReference:l})}let u=class extends dt(At(ht(yt(ft(gt(mt(ct(ot(ut))))))))){constructor(...t){super(...t),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.showCollisionBoxes="none",this.path=null}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}destroy(){if(this.sourceNameToSource)for(const t of Object.values(this.sourceNameToSource))t==null||t.destroy();this._spriteSourceMap.clear()}async prefetchResources(t){await this.loadSpriteSource(globalThis.devicePixelRatio||1,t)}load(t){const e=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},t).catch(T).then(async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await A(r,{...t,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},vt(this.portalItem))}).catch(T).then(()=>this._loadStyle(t));return this.addResolvingPromise(e),Promise.resolve(this)}get attributionDataUrl(){const t=this.currentStyleInfo,e=t&&t.serviceUrl&&_(t.serviceUrl);if(!e)return null;const r=this._getDefaultAttribution(e.path);return r?v(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const t=this.primarySource;return t?t.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var t;return((t=this.primarySource)==null?void 0:t.fullExtent)||null}get parsedUrl(){return this.serviceUrl?_(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(t,e){t&&Q(t)&&(t=`https:${t}`);const r=st(Z(t));e.styleUrl=xt(t,r)}get tileInfo(){var r;const t=[];for(const i in this.sourceNameToSource)t.push(this.sourceNameToSource[i]);let e=((r=this.primarySource)==null?void 0:r.tileInfo)||new O;if(t.length>1)for(let i=0;i<t.length;i++)Mt(e,t[i].tileInfo)&&(e=Dt(e,t[i].tileInfo));return e}readVersion(t,e){return e.version?parseFloat(e.version):parseFloat(e.currentVersion)}async loadSpriteSource(t=1,e){var r,i;if(!this._spriteSourceMap.has(t)){const s=D("2d").maxTextureSize,o=(r=this.currentStyleInfo)!=null&&r.spriteUrl?v(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,l=new B({type:"url",spriteUrl:o,pixelRatio:t,spriteFormat:(i=this.currentStyleInfo)==null?void 0:i.spriteFormat},s);await l.load(e),this._spriteSourceMap.set(t,l)}return this._spriteSourceMap.get(t)}async setSpriteSource(t,e){if(!t)return null;const r=D("2d").maxTextureSize,i=t.spriteUrl,s=i?v(i,{...this.customParameters,token:this.apiKey}):null;if(!s&&t.type==="url")return null;const o=new B(t,r);try{await o.load(e);const l=t.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(l,o),s&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=s),this.emit("spriteSource-change",{spriteSource:o}),o}catch(l){T(l)}return null}async loadStyle(t,e){var i;const r=t||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||((i=this._loadingTask)==null||i.abort(),this._loadingTask=tt(s=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:s})),e)),this._loadingTask.promise}getStyleLayerId(t){return this.styleRepository.getStyleLayerId(t)}getStyleLayerIndex(t){return this.styleRepository.getStyleLayerIndex(t)}getPaintProperties(t){return x(this.styleRepository.getPaintProperties(t))}setPaintProperties(t,e){const r=this.styleRepository.isPainterDataDriven(t);this.styleRepository.setPaintProperties(t,e);const i=this.styleRepository.isPainterDataDriven(t);this.emit("paint-change",{layer:t,paint:e,isDataDriven:r||i})}getStyleLayer(t){return x(this.styleRepository.getStyleLayer(t))}setStyleLayer(t,e){this.styleRepository.setStyleLayer(t,e),this.emit("style-layer-change",{layer:t,index:e})}deleteStyleLayer(t){this.styleRepository.deleteStyleLayer(t),this.emit("delete-style-layer",{layer:t})}getLayoutProperties(t){return x(this.styleRepository.getLayoutProperties(t))}setLayoutProperties(t,e){this.styleRepository.setLayoutProperties(t,e),this.emit("layout-change",{layer:t,layout:e})}setStyleLayerVisibility(t,e){this.styleRepository.setStyleLayerVisibility(t,e),this.emit("style-layer-visibility-change",{layer:t,visibility:e})}getStyleLayerVisibility(t){return this.styleRepository.getStyleLayerVisibility(t)}write(t,e){return e!=null&&e.origin&&!this.styleUrl?(e.messages&&e.messages.push(new b("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(t,e)}getTileUrl(t,e,r){return null}async _getSourceAndStyle(t,e){if(!t)throw new Error("invalid style!");const r=await Pt(t,{...e,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await Ut("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof t=="string"?(this.url=t,this.style=null):(this.url=null,this.style=t),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new _t(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(t){const e=t.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!e)return;const i=e[2]&&e[2].toLowerCase();if(!i)return;const s=e[1]||"";for(const o of r)if(o.toLowerCase().includes(i))return F(`//static.arcgis.com/attribution/Vector${s}/${o}`)}async _loadStyle(t){var e;return((e=this._loadingTask)==null?void 0:e.promise)??this.loadStyle(null,t)}};c([h({readOnly:!0})],u.prototype,"attributionDataUrl",null),c([h({type:["show","hide"]})],u.prototype,"listMode",void 0),c([h({json:{read:!0,write:!0}})],u.prototype,"blendMode",void 0),c([h({readOnly:!0,json:{read:!1}})],u.prototype,"capabilities",null),c([h({readOnly:!0})],u.prototype,"currentStyleInfo",void 0),c([h({json:{read:!1},readOnly:!0,type:K})],u.prototype,"fullExtent",null),c([h()],u.prototype,"style",void 0),c([h({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],u.prototype,"isReference",void 0),c([h({type:["VectorTileLayer"]})],u.prototype,"operationalLayerType",void 0),c([h({readOnly:!0})],u.prototype,"parsedUrl",null),c([h({readOnly:!0})],u.prototype,"serviceUrl",null),c([h({type:at,readOnly:!0})],u.prototype,"spatialReference",null),c([h({readOnly:!0})],u.prototype,"styleRepository",void 0),c([h({readOnly:!0})],u.prototype,"sourceNameToSource",void 0),c([h({readOnly:!0})],u.prototype,"primarySource",void 0),c([h({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],u.prototype,"styleUrl",null),c([nt(["portal-item","web-document"],"styleUrl")],u.prototype,"writeStyleUrl",null),c([h({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:O})],u.prototype,"tileInfo",null),c([h({json:{read:!1},readOnly:!0,value:"vector-tile"})],u.prototype,"type",void 0),c([h({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],u.prototype,"url",void 0),c([h({readOnly:!0})],u.prototype,"version",void 0),c([pt("version",["version","currentVersion"])],u.prototype,"readVersion",null),c([h({type:String})],u.prototype,"showCollisionBoxes",void 0),c([h({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],u.prototype,"path",void 0),u=c([J("esri.layers.VectorTileLayer")],u);const sr=u;export{sr as default};
