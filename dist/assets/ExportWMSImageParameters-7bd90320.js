import{e as t,y as l,n as c,m as h}from"./cast-7ef3a066.js";import{a as b}from"./HandleOwner-2d282b7c.js";import"./typedArrayUtil-4015bf74.js";import"./ArrayPool-45db95ab.js";const v={visible:"visibleSublayers"};let s=class extends b(h){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("wms-sublayer-update",r=>this.notifyChange(v[r.propertyName]))],"layer"))}get layers(){return this.visibleSublayers.filter(({name:e})=>e).map(({name:e})=>e).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:r}=this,a=e==null?void 0:e.sublayers,i=[],o=n=>{const{minScale:y,maxScale:p,sublayers:m,visible:u}=n;u&&(r===0||(y===0||r<=y)&&(p===0||r>=p))&&(m?m.forEach(o):i.push(n))};return a==null||a.forEach(o),i}toJSON(){const{layer:e,layers:r}=this,{imageFormat:a,imageTransparency:i,version:o}=e;return{format:a,request:"GetMap",service:"WMS",styles:"",transparent:i?"TRUE":"FALSE",version:o,layers:r}}};t([l()],s.prototype,"layer",null),t([l({readOnly:!0})],s.prototype,"layers",null),t([l({type:Number})],s.prototype,"scale",void 0),t([l({readOnly:!0})],s.prototype,"version",null),t([l({readOnly:!0})],s.prototype,"visibleSublayers",null),s=t([c("esri.layers.support.ExportWMSImageParameters")],s);export{s as l};
