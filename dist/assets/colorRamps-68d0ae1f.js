import{e as o,y as e,n as a,l as C}from"./cast-7ef3a066.js";import{l as c}from"./Color-7a3d8c62.js";import{y as i}from"./string-7d6c8f5c.js";import{T as h}from"./ArrayPool-45db95ab.js";import{r as d}from"./enumeration-cda3949b.js";import"./typedArrayUtil-4015bf74.js";let l=class extends C{constructor(t){super(t),this.type=null}};o([e({readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=o([a("esri.rest.support.ColorRamp")],l);const n=l;var s;let r=s=class extends n{constructor(t){super(t),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new s({fromColor:i(this.fromColor),toColor:i(this.toColor),algorithm:this.algorithm})}};o([d({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],r.prototype,"algorithm",void 0),o([e({type:c,json:{type:[h],write:!0}})],r.prototype,"fromColor",void 0),o([e({type:c,json:{type:[h],write:!0}})],r.prototype,"toColor",void 0),o([e({type:["algorithmic"]})],r.prototype,"type",void 0),r=s=o([a("esri.rest.support.AlgorithmicColorRamp")],r);const y=r;var m;let p=m=class extends n{constructor(t){super(t),this.colorRamps=null,this.type="multipart"}clone(){return new m({colorRamps:i(this.colorRamps)})}};o([e({type:[y],json:{write:!0}})],p.prototype,"colorRamps",void 0),o([e({type:["multipart"]})],p.prototype,"type",void 0),p=m=o([a("esri.rest.support.MultipartColorRamp")],p);const u=p,b={key:"type",base:n,typeMap:{algorithmic:y,multipart:u}};function j(t){return t&&t.type?t.type==="algorithmic"?y.fromJSON(t):t.type==="multipart"?u.fromJSON(t):null:null}export{u as a,b as m,j as p};