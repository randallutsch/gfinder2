import{e as r,y as i,n as m,l as a}from"./cast-34ff1fab.js";import{i as l}from"./Clonable-a26a28b0.js";import"./typedArrayUtil-6bfe4dae.js";import"./ensureType-abaf235a.js";import{o as d,r as y}from"./Extent-b8913cd1.js";import{t as c}from"./Field-db318fdd.js";import{p as u}from"./FeatureTemplate-f1076210.js";let o=class extends l(a){constructor(t){super(t),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(t){const e={};for(const s of Object.keys(t))e[s]=c(t[s]);return e}writeDomains(t,e){var p;const s={};for(const n of Object.keys(t))t[n]&&(s[n]=(p=t[n])==null?void 0:p.toJSON());e.domains=s}};r([i({json:{write:!0}})],o.prototype,"id",void 0),r([i({json:{write:!0}})],o.prototype,"name",void 0),r([i({json:{write:!0}})],o.prototype,"domains",void 0),r([d("domains")],o.prototype,"readDomains",null),r([y("domains")],o.prototype,"writeDomains",null),r([i({type:[u],json:{write:!0}})],o.prototype,"templates",void 0),o=r([m("esri.layers.support.FeatureType")],o);const O=o;export{O as n};
