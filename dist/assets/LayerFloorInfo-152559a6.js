import{_ as d}from"./preload-helper-101896b7.js";import{r as s}from"./typedArrayUtil-4015bf74.js";import{e as l,y as t,l as p,n as v}from"./cast-7ef3a066.js";import{j as a}from"./Collection-8f94e599.js";import"./ArrayPool-45db95ab.js";async function A(e,r){const{WhereClause:n}=await d(()=>import("./WhereClause-f3484bdd.js"),["assets/WhereClause-f3484bdd.js","assets/string-7d6c8f5c.js","assets/typedArrayUtil-4015bf74.js"]);return n.create(e,r)}function y(e,r){return s(e)?s(r)?`(${e}) AND (${r})`:e:r}var i;let o=i=class extends p{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new a}clone(){return new i({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};l([t({type:String,json:{write:!0}})],o.prototype,"floorField",void 0),l([t({json:{read:!1,write:!1}})],o.prototype,"viewAllMode",void 0),l([t({json:{read:!1,write:!1}})],o.prototype,"viewAllLevelIds",void 0),o=i=l([v("esri.layers.support.LayerFloorInfo")],o);const _=o;export{_ as p,A as r,y as t};
