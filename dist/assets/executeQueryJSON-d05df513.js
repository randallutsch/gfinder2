import{e as o,y as n,n as u,l as m}from"./cast-34ff1fab.js";import"./typedArrayUtil-6bfe4dae.js";import{T as p}from"./ensureType-abaf235a.js";import{f as c}from"./utils-a49efee8.js";import{c as y}from"./query-33c0df26.js";import I from"./FeatureSet-b61b4ed5.js";import{x as h}from"./Query-394dcfc7.js";function g(r){const{exifInfo:e,exifName:i,tagName:a}=r;if(!e||!i||!a)return null;const l=e.find(s=>s.name===i);return l?x({tagName:a,tags:l.tags}):null}function x(r){const{tagName:e,tags:i}=r;if(!i||!e)return null;const a=i.find(l=>l.name===e);return a&&a.value||null}var d;const b={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let t=d=class extends m{constructor(r){super(r),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:r}=this,e=g({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:r});return b[e]||null}clone(){return new d({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};o([n({type:String})],t.prototype,"contentType",void 0),o([n()],t.prototype,"exifInfo",void 0),o([n({readOnly:!0})],t.prototype,"orientationInfo",null),o([n({type:p})],t.prototype,"id",void 0),o([n({type:String})],t.prototype,"globalId",void 0),o([n({type:String})],t.prototype,"keywords",void 0),o([n({type:String})],t.prototype,"name",void 0),o([n({json:{read:!1}})],t.prototype,"parentGlobalId",void 0),o([n({json:{read:!1}})],t.prototype,"parentObjectId",void 0),o([n({type:p})],t.prototype,"size",void 0),o([n({json:{read:!1}})],t.prototype,"url",void 0),t=d=o([u("esri.layers.support.AttachmentInfo")],t);const k=t;async function z(r,e,i){const a=await v(r,e,i);return I.fromJSON(a)}async function v(r,e,i){const a=c(r),l={...i},s=h.from(e),{data:f}=await y(a,s,s.sourceSpatialReference,l);return f}export{k as a,v as b,z as s};
