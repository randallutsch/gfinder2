import{t as i}from"./typedArrayUtil-4015bf74.js";import{o as m}from"./zscale-65468675.js";function a(r,t,e){if(!e||!e.features||!e.hasZ)return;const o=m(e.geometryType,t,r.outSpatialReference);if(!i(o))for(const f of e.features)o(f.geometry)}export{a as r};