import{e as o,y as n,n as d}from"./cast-34ff1fab.js";import{y,c}from"./string-46813dd9.js";import"./ensureType-abaf235a.js";import{r as f}from"./enumeration-e40d8895.js";import{o as u,r as h}from"./Extent-b8913cd1.js";import{S as v}from"./fieldUtils-ba80cc48.js";import{a as w}from"./Symbol-8a110cc7.js";var i;let r=i=class extends w{constructor(t){super(t),this.data=null,this.type="cim"}readData(t,e){return e}writeData(t,e){if(t)for(const a in t)e[a]=t[a]}async collectRequiredFields(t,e){var a;if(((a=this.data)==null?void 0:a.type)==="CIMSymbolReference"){const s=this.data.primitiveOverrides;if(s){const p=s.map(m=>{const l=m.valueExpressionInfo;return v(t,e,l.expression)});await Promise.all(p)}}}clone(){return new i({data:y(this.data)})}hash(){return c(JSON.stringify(this.data)).toString()}};o([n({json:{write:!1}})],r.prototype,"color",void 0),o([n({json:{write:!0}})],r.prototype,"data",void 0),o([u("data",["symbol"])],r.prototype,"readData",null),o([h("data",{})],r.prototype,"writeData",null),o([f({CIMSymbolReference:"cim"},{readOnly:!0})],r.prototype,"type",void 0),r=i=o([d("esri.symbols.CIMSymbol")],r);const O=r;export{O as d};
