import{e as s,y as a,n as o}from"./cast-34ff1fab.js";import{s as h}from"./Error-e5869661.js";import{j as l}from"./promiseUtils-281d25c9.js";import{a as m}from"./reactiveUtils-aec98ee9.js";import"./typedArrayUtil-6bfe4dae.js";import"./ensureType-abaf235a.js";const g=i=>{let e=class extends i{initialize(){this.handles.add(m(()=>this.layer,"refresh",t=>{this.doRefresh(t.dataChanged).catch(r=>{l(r)||h.getLogger(this.declaredClass).error(r)})}),"RefreshableLayerView")}};return s([a()],e.prototype,"layer",void 0),e=s([o("esri.layers.mixins.RefreshableLayerView")],e),e};export{g as i};