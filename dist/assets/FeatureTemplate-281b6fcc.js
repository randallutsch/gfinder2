import{e as o,y as r,n as l,l as n}from"./cast-7ef3a066.js";import{i as a}from"./Clonable-c315fc8d.js";import{s}from"./jsonMap-c8081704.js";import"./typedArrayUtil-4015bf74.js";import"./ArrayPool-45db95ab.js";const t=new s({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let e=class extends a(n){constructor(i){super(i),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};o([r({json:{write:!0}})],e.prototype,"name",void 0),o([r({json:{write:!0}})],e.prototype,"description",void 0),o([r({json:{read:t.read,write:t.write}})],e.prototype,"drawingTool",void 0),o([r({json:{write:!0}})],e.prototype,"prototype",void 0),o([r({json:{write:!0}})],e.prototype,"thumbnail",void 0),e=o([l("esri.layers.support.FeatureTemplate")],e);const F=e;export{F as p};