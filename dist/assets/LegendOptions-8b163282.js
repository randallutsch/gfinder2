import{e as t,y as r,n,l as p}from"./cast-34ff1fab.js";import{l as c}from"./Color-0f9fdd46.js";import"./typedArrayUtil-6bfe4dae.js";import{T as v}from"./ensureType-abaf235a.js";import{r as m}from"./Extent-b8913cd1.js";var s;let e=s=class extends p{constructor(o){super(o),this.color=null,this.label=null,this.value=null}writeValue(o,u,a){u[a]=o??0}clone(){return new s({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};t([r({type:c,json:{type:[v],write:!0}})],e.prototype,"color",void 0),t([r({type:String,json:{write:!0}})],e.prototype,"label",void 0),t([r({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],e.prototype,"value",void 0),t([m("value")],e.prototype,"writeValue",null),e=s=t([n("esri.renderers.visualVariables.support.ColorStop")],e);const f=e;var i;let l=i=class extends p{constructor(){super(...arguments),this.title=null}clone(){return new i({title:this.title})}};t([r({type:String,json:{write:!0}})],l.prototype,"title",void 0),l=i=t([n("esri.renderers.support.LegendOptions")],l);export{f as a,l as p};
