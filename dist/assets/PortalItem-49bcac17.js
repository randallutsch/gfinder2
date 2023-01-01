import{_ as h}from"./preload-helper-596b5639.js";import{e as r,s as U,y as o,n as b,m as P,u as T}from"./cast-7ef3a066.js";import{a as q}from"./assets-04f03891.js";import{s as L,a as g}from"./Error-1dfe2922.js";import{y as n,p as j}from"./string-7d6c8f5c.js";import{m as C}from"./Loadable-772aaf20.js";import{r as u,t as I,q as F,f as c}from"./typedArrayUtil-4015bf74.js";import{K as _,_ as N,X as J,Q as K}from"./request-3bbdab19.js";import{v as $}from"./ArrayPool-45db95ab.js";import{a as R,o as D}from"./Extent-54ef1174.js";import{j as O}from"./Portal-af5b2c18.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-e323addc.js";import"./Promise-e08b9d4d.js";import"./locale-30120714.js";import"./PortalGroup-100f1bed.js";import"./jsonMap-c8081704.js";import"./PortalUser-0170111d.js";let p=class extends P{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e&&e.portalItem&&e.path?{...e,path:this._normalizePath(e.path,e.portalItem)}:e}set path(e){u(e)&&_(e)?L.getLogger(this.declaredClass).error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return this._normalizePath(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(e="json",t){const i=this.url;if(I(i))throw new g("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal._request(i,{responseType:e,query:{token:this.portalItem.apiKey},signal:F(t,"signal")})}async update(e,t){return(await h(()=>import("./resourceUtils-d21ef409.js"),["assets/resourceUtils-d21ef409.js","assets/request-3bbdab19.js","assets/preload-helper-596b5639.js","assets/Error-1dfe2922.js","assets/string-7d6c8f5c.js","assets/typedArrayUtil-4015bf74.js","assets/promiseUtils-e323addc.js"])).addOrUpdateResource(this,"update",e,t)}hasPath(){return u(this.path)}_normalizePath(e,t){return I(e)?e:(e=e.replace(/^\/+/,""),u(t)&&_(e)&&(e=N(e,t.itemUrl)),e.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}};r([o()],p.prototype,"portalItem",void 0),r([o({type:String,value:null})],p.prototype,"path",null),r([U("path")],p.prototype,"_castPath",null),r([o({type:String,readOnly:!0})],p.prototype,"url",null),r([o({type:String,readOnly:!0})],p.prototype,"itemRelativeUrl",null),p=r([b("esri.portal.PortalItemResource")],p);const E=p;let m=class extends P{constructor(e){super(e),this.created=null,this.rating=null}};r([o()],m.prototype,"created",void 0),r([o()],m.prototype,"rating",void 0),m=r([b("esri.portal.PortalRating")],m);const f=m;var d;const V=new Set(["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","GeoJson","CSV","KML","WFS","WMTS","WMS","Feed"]),A=new Set(["KML","GeoJson","CSV"]);let a=d=class extends T(C){constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.spatialReference=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}static from(e){return $(d,e)}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[];let i=e;return e==="Feature Service"||e==="Feature Collection"?i=t.includes("Table")?"Table":t.includes("Route Layer")?"Route Layer":t.includes("Markup")?"Markup":"Feature Layer":e==="Image Service"?i=t.includes("Elevation 3D Layer")?"Elevation Layer":t.includes("Tiled Imagery")?"Tiled Imagery Layer":"Imagery Layer":e==="Scene Service"?i="Scene Layer":e==="Video Service"?i="Video Layer":e==="Scene Package"?i="Scene Layer Package":e==="Stream Service"?i="Feature Layer":e==="Geoprocessing Service"&&this.portal&&this.portal.isPortal?i=t.includes("Web Tool")?"Tool":"Geoprocessing Service":e==="Geocoding Service"?i="Locator":e==="Geoenrichment Service"?i="GeoEnrichment Service":e==="Microsoft Powerpoint"?i="Microsoft PowerPoint":e==="GeoJson"?i="GeoJSON":e==="Globe Service"?i="Globe Layer":e==="Vector Tile Service"?i="Tile Layer":e==="netCDF"?i="NetCDF":e==="Map Service"?i=t.includes("Spatiotemporal")||!t.includes("Hosted Service")&&!t.includes("Tiled")||t.includes("Relational")?"Map Image Layer":"Tile Layer":e&&e.toLowerCase().includes("add in")?i=e.replace(/(add in)/gi,"Add-In"):e==="datastore catalog service"?i="Big Data File Share":e==="Compact Tile Package"?i="Tile Package (tpkx)":e==="OGCFeatureServer"?i="OGC Feature Layer":e==="web mapping application"&&t.includes("configurableApp")&&(i="Instant App"),i}readExtent(e){return e&&e.length?new R(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",t=this.typeKeywords||[],i="esri/images/portal/",s="16";let l,y=!1,v=!1,k=!1,S=!1,w=!1,x=!1;return e.indexOf("service")>0||e==="feature collection"||e==="kml"||e==="wms"||e==="wmts"||e==="wfs"?(y=t.includes("Hosted Service"),e==="feature service"||e==="feature collection"||e==="kml"||e==="wfs"?(v=t.includes("Table"),k=t.includes("Route Layer"),S=t.includes("Markup"),w=t.includes("Spatiotemporal"),x=t.includes("UtilityNetwork"),l=w&&v?"spatiotemporaltable":v?"table":k?"routelayer":S?"markup":w?"spatiotemporal":y?"featureshosted":x?"utilitynetwork":"features"):l=e==="map service"||e==="wms"||e==="wmts"?y||t.includes("Tiled")||e==="wmts"?"maptiles":"mapimages":e==="scene service"?t.includes("Line")?"sceneweblayerline":t.includes("3DObject")?"sceneweblayermultipatch":t.includes("Point")?"sceneweblayerpoint":t.includes("IntegratedMesh")?"sceneweblayermesh":t.includes("PointCloud")?"sceneweblayerpointcloud":t.includes("Polygon")?"sceneweblayerpolygon":t.includes("Building")?"sceneweblayerbuilding":t.includes("Voxel")?"sceneweblayervoxel":"sceneweblayer":e==="image service"?t.includes("Elevation 3D Layer")?"elevationlayer":t.includes("Tiled Imagery")?"tiledimagerylayer":"imagery":e==="stream service"?"streamlayer":e==="video service"?"mediaservice":e==="vector tile service"?"vectortile":e==="datastore catalog service"?"datastorecollection":e==="geocoding service"?"geocodeservice":e==="geoprocessing service"?t.includes("Web Tool")&&this.portal&&this.portal.isPortal?"tool":"layers":e==="geodata service"?"geodataservice":"layers"):l=e==="web map"||e==="cityengine web scene"?"maps":e==="web scene"?t.includes("ViewingMode-Local")?"webscenelocal":"websceneglobal":e==="web mapping application"&&t.includes("configurableApp")?"instantapps":e==="web mapping application"||e==="mobile application"||e==="application"||e==="operation view"||e==="desktop application"?"apps":e==="map document"||e==="map package"||e==="published map"||e==="scene document"||e==="globe document"||e==="basemap package"||e==="mobile basemap package"||e==="mobile map package"||e==="project package"||e==="project template"||e==="pro map"||e==="layout"||e==="layer"&&t.includes("ArcGIS Pro")||e==="explorer map"&&t.indexOf("Explorer Document")?"mapsgray":e==="service definition"||e==="csv"||e==="shapefile"||e==="cad drawing"||e==="geojson"||e==="360 vr experience"||e==="netcdf"||e==="administrative report"?"datafiles":e==="explorer add in"||e==="desktop add in"||e==="windows viewer add in"||e==="windows viewer configuration"?"appsgray":e==="arcgis pro add in"||e==="arcgis pro configuration"?"addindesktop":e==="rule package"||e==="file geodatabase"||e==="sqlite geodatabase"||e==="csv collection"||e==="kml collection"||e==="windows mobile package"||e==="map template"||e==="desktop application template"||e==="gml"||e==="arcpad package"||e==="code sample"||e==="form"||e==="document link"||e==="earth configuration"||e==="operations dashboard add in"||e==="rules package"||e==="image"||e==="workflow manager package"||e==="explorer map"&&t.includes("Explorer Mapping Application")||t.includes("Document")?"datafilesgray":e==="network analysis service"||e==="geoprocessing service"||e==="geodata service"||e==="geometry service"||e==="geoprocessing package"||e==="locator package"||e==="geoprocessing sample"||e==="workflow manager service"?"toolsgray":e==="layer"||e==="layer package"||e==="explorer layer"?"layersgray":e==="scene package"?"scenepackage":e==="mobile scene package"?"mobilescenepackage":e==="tile package"||e==="compact tile package"?"tilepackage":e==="task file"?"taskfile":e==="report template"?"report-template":e==="statistical data collection"?"statisticaldatacollection":e==="insights workbook"?"workbook":e==="insights model"?"insightsmodel":e==="insights page"?"insightspage":e==="insights theme"?"insightstheme":e==="hub initiative"?"hubinitiative":e==="hubpage"?"hubpage":e==="hub event"?"hubevent":e==="hub site application"?"hubsite":e==="hub project"?"hubproject":e==="relational database connection"?"relationaldatabaseconnection":e==="big data file share"?"datastorecollection":e==="image collection"?"imagecollection":e==="style"?"style":e==="desktop style"?"desktopstyle":e==="dashboard"?"dashboard":e==="raster function template"?"rasterprocessingtemplate":e==="vector tile package"?"vectortilepackage":e==="ortho mapping project"?"orthomappingproject":e==="ortho mapping template"?"orthomappingtemplate":e==="solution"?"solutions":e==="geopackage"?"geopackage":e==="deep learning package"?"deeplearningpackage":e==="real time analytic"?"realtimeanalytics":e==="big data analytic"?"bigdataanalytics":e==="feed"?"feed":e==="excalibur imagery project"?"excaliburimageryproject":e==="notebook"?"notebook":e==="storymap"?"storymap":e==="survey123 add in"?"survey123addin":e==="mission"?"mission":e==="mission report"?"missionreport":e==="quickcapture project"?"quickcaptureproject":e==="pro report"?"proreport":e==="pro report template"?"proreporttemplate":e==="urban model"?"urbanmodel":e==="web experience"?"experiencebuilder":e==="web experience template"?"webexperiencetemplate":e==="experience builder widget"?"experiencebuilderwidget":e==="experience builder widget package"?"experiencebuilderwidgetpackage":e==="workflow"?"workflow":e==="insights script"?"insightsscript":e==="kernel gateway connection"?"kernelgatewayconnection":e==="hub initiative template"?"hubinitiativetemplate":e==="storymap theme"?"storymaptheme":e==="knowledge graph"?"knowledgegraph":e==="native application"?"nativeapp":e==="native application installer"?"nativeappinstaller":e==="link chart"?"linkchart":e==="investigation"?"investigation":e==="ogcfeatureserver"?"features":e==="pro project"?"proproject":e==="insights workbook package"?"insightsworkbookpackage":e==="apache parquet"?"apacheparquet":e==="notebook code snippets"||e==="notebook code snippet library"?"notebookcodesnippets":e==="suitability model"?"suitabilitymodel":e==="esri classifier definition"?"classifierdefinition":e==="esri classification schema"?"classificationschema":e==="insights data engineering workbook"?"dataengineeringworkbook":e==="insights data engineering model"?"dataengineeringmodel":e==="deep learning studio project"?"deeplearningproject":e==="discussion"?"discussion":"maps",l?q(i+l+s+".png"):null}get isLayer(){return this.type!=null&&V.has(this.type)}get itemPageUrl(){var t;const e=(t=this.portal)==null?void 0:t.itemPageUrl;return e&&this.id?`${e}?id=${this.id}`:null}get itemUrl(){var t;const e=(t=this.portal)==null?void 0:t.restUrl;return e&&this.id?`${e}/content/items/${this.id}`:null}get thumbnailUrl(){var i;const e=this.itemUrl,t=this.thumbnail;return e&&t?((i=this.portal)==null?void 0:i._normalizeUrl(`${e}/info/${t}?f=json`))??null:null}get userItemUrl(){const e=this.get("portal.restUrl");if(!e)return null;const t=this.owner||this.get("portal.user.username");return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){const t=this.portal??(this.portal=O.getDefault()),i=t.load(e).then(()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?t._request(this.itemUrl,{signal:u(e)?e.signal:null,query:{token:this.apiKey}}):{}).then(s=>{this.sourceJSON=s,this.read(s)});return this.addResolvingPromise(i),Promise.resolve(this)}async addRating(e){const t={method:"post",query:{}};return e instanceof f&&(e=e.rating),e==null||isNaN(e)||typeof e!="number"||(t.query.rating=e),this.portal?(await this.portal._request(this.itemUrl+"/addRating",t),new f({rating:e,created:new Date})):null}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:n(this.applicationProxies),avgRating:this.avgRating,categories:n(this.categories),created:n(this.created),culture:this.culture,description:this.description,extent:n(this.extent),groupCategories:n(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:n(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:n(this.screenshots),size:this.size,snippet:this.snippet,spatialReference:this.spatialReference,tags:n(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:n(this.typeKeywords),url:this.url};return this.loaded&&(e.loadStatus="loaded"),new d({sourceJSON:this.sourceJSON}).set(e)}createPostQuery(){const e=this.toJSON();for(const i of["tags","typeKeywords","categories"])e[i]&&(e[i]=e[i].join(", "));const{extent:t}=e;return t&&(e.extent=JSON.stringify(t)),e}async deleteRating(){await c(this.portal)._request(this.itemUrl+"/deleteRating",{method:"post"})}fetchData(e="json",t){return c(this.portal)._request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}async fetchRating(e){const t=await c(this.portal)._request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e});return t.rating!=null?(t.created=new Date(t.created),new f(t)):null}fetchRelatedItems(e,t){return c(this.portal)._requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},d)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t}reload(){return c(this.portal)._request(this.itemUrl??"",{cacheBust:!0,query:{token:this.apiKey}}).then(e=>(this.sourceJSON=e,this.read(e),this))}update(e){return this.id?this.load().then(()=>c(this.portal)._signIn()).then(()=>{const t=e&&e.data,i={method:"post"};i.query=this.createPostQuery();for(const s in i.query)i.query[s]===null&&(i.query[s]="");return i.query.clearEmptyFields=!0,t!=null&&(typeof t=="string"?i.query.text=t:typeof t=="object"&&(i.query.text=JSON.stringify(t))),this.portal._request(`${this.userItemUrl}/update`,i).then(()=>this.reload())}):Promise.reject(new g("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}updateThumbnail(e){return this.id?this.load().then(()=>this.portal._signIn()).then(()=>{const t=e.thumbnail,i=e.filename,s={method:"post"};if(typeof t=="string")J(t)?s.query={data:t}:s.query={url:K(t)},u(i)&&(s.query.filename=i);else{const l=new FormData;u(i)?l.append("file",t,i):l.append("file",t),s.body=l}return this.portal._request(`${this.userItemUrl}/updateThumbnail`,s).then(()=>this.reload())}):Promise.reject(new g("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return(await h(()=>import("./resourceUtils-d21ef409.js"),["assets/resourceUtils-d21ef409.js","assets/request-3bbdab19.js","assets/preload-helper-596b5639.js","assets/Error-1dfe2922.js","assets/string-7d6c8f5c.js","assets/typedArrayUtil-4015bf74.js","assets/promiseUtils-e323addc.js"])).fetchResources(this,e,t)}async addResource(e,t,i){const s=await h(()=>import("./resourceUtils-d21ef409.js"),["assets/resourceUtils-d21ef409.js","assets/request-3bbdab19.js","assets/preload-helper-596b5639.js","assets/Error-1dfe2922.js","assets/string-7d6c8f5c.js","assets/typedArrayUtil-4015bf74.js","assets/promiseUtils-e323addc.js"]);return e.portalItem=this,s.addOrUpdateResource(e,"add",t,i)}async removeResource(e,t){const i=await h(()=>import("./resourceUtils-d21ef409.js"),["assets/resourceUtils-d21ef409.js","assets/request-3bbdab19.js","assets/preload-helper-596b5639.js","assets/Error-1dfe2922.js","assets/string-7d6c8f5c.js","assets/typedArrayUtil-4015bf74.js","assets/promiseUtils-e323addc.js"]);if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new g("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return i.removeResource(this,e,t)}async removeAllResources(e){return(await h(()=>import("./resourceUtils-d21ef409.js"),["assets/resourceUtils-d21ef409.js","assets/request-3bbdab19.js","assets/preload-helper-596b5639.js","assets/Error-1dfe2922.js","assets/string-7d6c8f5c.js","assets/typedArrayUtil-4015bf74.js","assets/promiseUtils-e323addc.js"])).removeAllResources(this,e)}resourceFromPath(e){return new E({portalItem:this,path:e})}toJSON(){const e=this.extent,t={accessInformation:this.accessInformation,categories:n(this.categories),created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,licenseInfo:this.licenseInfo,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,spatialReference:this.spatialReference,tags:n(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:n(this.typeKeywords),url:this.url};return j(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new d({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)t==="tags"&&e[t]!==null&&(e[t]=e[t].join(", ")),t==="typeKeywords"&&e[t]!==null&&(e[t]=e[t].join(", ")),t==="extent"&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};r([o({type:["private","shared","org","public"]})],a.prototype,"access",void 0),r([o()],a.prototype,"accessInformation",void 0),r([o({type:String})],a.prototype,"apiKey",void 0),r([o({json:{read:{source:"appProxies"}}})],a.prototype,"applicationProxies",void 0),r([o()],a.prototype,"avgRating",void 0),r([o()],a.prototype,"categories",void 0),r([o({type:Date})],a.prototype,"created",void 0),r([o()],a.prototype,"culture",void 0),r([o()],a.prototype,"description",void 0),r([o({readOnly:!0})],a.prototype,"displayName",null),r([o({type:R})],a.prototype,"extent",void 0),r([D("extent")],a.prototype,"readExtent",null),r([o()],a.prototype,"groupCategories",void 0),r([o({readOnly:!0})],a.prototype,"iconUrl",null),r([o()],a.prototype,"id",void 0),r([o({readOnly:!0})],a.prototype,"isLayer",null),r([o()],a.prototype,"itemControl",void 0),r([o({readOnly:!0})],a.prototype,"itemPageUrl",null),r([o({readOnly:!0})],a.prototype,"itemUrl",null),r([o()],a.prototype,"licenseInfo",void 0),r([o({type:Date})],a.prototype,"modified",void 0),r([o()],a.prototype,"name",void 0),r([o()],a.prototype,"numComments",void 0),r([o()],a.prototype,"numRatings",void 0),r([o()],a.prototype,"numViews",void 0),r([o()],a.prototype,"owner",void 0),r([o()],a.prototype,"ownerFolder",void 0),r([o({type:O})],a.prototype,"portal",void 0),r([o()],a.prototype,"screenshots",void 0),r([o()],a.prototype,"size",void 0),r([o()],a.prototype,"snippet",void 0),r([o()],a.prototype,"sourceJSON",void 0),r([o({type:String})],a.prototype,"spatialReference",void 0),r([o()],a.prototype,"tags",void 0),r([o()],a.prototype,"thumbnail",void 0),r([o({readOnly:!0})],a.prototype,"thumbnailUrl",null),r([o()],a.prototype,"title",void 0),r([o()],a.prototype,"type",void 0),r([o()],a.prototype,"typeKeywords",void 0),r([o({type:String,json:{read(e,t){var i;if(A.has(t.type)){const s=(i=this.portal)==null?void 0:i.restUrl;e||(e=s&&this.id?`${s}/content/items/${this.id}/data`:null)}return e}}})],a.prototype,"url",void 0),r([o({readOnly:!0})],a.prototype,"userItemUrl",null),a=d=r([b("esri.portal.PortalItem")],a);const le=a;export{le as default};
