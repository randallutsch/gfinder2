import{v as m,e as t,y as p,n as s}from"./cast-34ff1fab.js";import{a}from"./Error-e5869661.js";import{O as y}from"./MultiOriginJSONSupport-98bacd7d.js";import"./typedArrayUtil-6bfe4dae.js";import"./ensureType-abaf235a.js";import{b as l}from"./Layer-685ea357.js";import{v as u}from"./PortalLayer-10051047.js";import"./string-46813dd9.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-281d25c9.js";import"./preload-helper-596b5639.js";import"./geometry-1b3a0099.js";import"./Extent-b8913cd1.js";import"./Polyline-7684a66d.js";import"./typeUtils-0cf27003.js";import"./jsonMap-92eea954.js";import"./request-c6faf466.js";import"./Evented-fac53f7f.js";import"./Identifiable-016ad07d.js";import"./Loadable-3c0fb2d0.js";import"./Promise-19e65545.js";import"./asyncUtils-64877ef6.js";import"./Portal-d13c5d2a.js";import"./locale-30120714.js";import"./PortalGroup-506cda94.js";import"./PortalUser-12cb329a.js";import"./PortalItem-a267e3e1.js";import"./assets-544006ef.js";let r=class extends u(y(l)){constructor(o){super(o),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((o,e)=>{m(()=>{const i=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let n="Unknown layer type";i&&(n+=" "+i),e(new a("layer:unknown-layer-type",n,{layerType:i}))})}))}read(o,e){super.read({resourceInfo:o},e)}write(){return null}};t([p({readOnly:!0})],r.prototype,"resourceInfo",void 0),t([p({type:["show","hide"]})],r.prototype,"listMode",void 0),t([p({json:{read:!1},readOnly:!0,value:"unknown"})],r.prototype,"type",void 0),r=t([s("esri.layers.UnknownLayer")],r);const G=r;export{G as default};