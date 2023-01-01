import{e as t,y as l,n as p}from"./cast-7ef3a066.js";import"./geometry-22feb2bb.js";import"./typedArrayUtil-4015bf74.js";import"./ArrayPool-45db95ab.js";import{o as a,k as n}from"./Extent-54ef1174.js";import{r as s,z as c}from"./TilemapCache-67a71cd8.js";const S=o=>{let e=class extends o{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(r,i){return i.minLOD!=null&&i.maxLOD!=null?r:0}readMaxScale(r,i){return i.minLOD!=null&&i.maxLOD!=null?r:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(r,i){return i.capabilities&&i.capabilities.includes("Tilemap")?new c({layer:this}):null}};return t([l({json:{read:{source:"copyrightText"}}})],e.prototype,"copyright",void 0),t([l()],e.prototype,"minScale",void 0),t([a("service","minScale")],e.prototype,"readMinScale",null),t([l()],e.prototype,"maxScale",void 0),t([a("service","maxScale")],e.prototype,"readMaxScale",null),t([l({type:n})],e.prototype,"spatialReference",void 0),t([l({readOnly:!0})],e.prototype,"supportsBlankTile",null),t([l(s)],e.prototype,"tileInfo",void 0),t([l()],e.prototype,"tilemapCache",void 0),t([a("service","tilemapCache",["capabilities"])],e.prototype,"readTilemapCache",null),t([l()],e.prototype,"version",void 0),e=t([p("esri.layers.mixins.ArcGISCachedService")],e),e};export{S as s};
