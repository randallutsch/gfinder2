import{w as s,a as c}from"./Extent-b8913cd1.js";import{v as m,m as h,u as p}from"./Polyline-7684a66d.js";import"./cast-34ff1fab.js";import"./typedArrayUtil-6bfe4dae.js";import"./string-46813dd9.js";import"./Error-e5869661.js";import"./ensureType-abaf235a.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-281d25c9.js";const E={convertToGEGeometry:x,exportPoint:g,exportPolygon:u,exportPolyline:f,exportMultipoint:l,exportExtent:M};function x(t,e){if(e==null)return null;let o="cache"in e?e.cache._geVersion:void 0;return o==null&&(o=t.convertJSONToGeometry(e),"cache"in e&&(e.cache._geVersion=o)),o}function g(t,e,o){const i=t.hasZ(e),n=t.hasM(e),r=new s({x:t.getPointX(e),y:t.getPointY(e),spatialReference:o});return i&&(r.z=t.getPointZ(e)),n&&(r.m=t.getPointM(e)),r.cache._geVersion=e,r}function u(t,e,o){const i=new m({rings:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:o});return i.cache._geVersion=e,i}function f(t,e,o){const i=new h({paths:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:o});return i.cache._geVersion=e,i}function l(t,e,o){const i=new p({hasZ:t.hasZ(e),hasM:t.hasM(e),points:t.exportPoints(e),spatialReference:o});return i.cache._geVersion=e,i}function M(t,e,o){const i=t.hasZ(e),n=t.hasM(e),r=new c({xmin:t.getXMin(e),ymin:t.getYMin(e),xmax:t.getXMax(e),ymax:t.getYMax(e),spatialReference:o});if(i){const a=t.getZExtent(e);r.zmin=a.vmin,r.zmax=a.vmax}if(n){const a=t.getMExtent(e);r.mmin=a.vmin,r.mmax=a.vmax}return r.cache._geVersion=e,r}export{E as hydratedAdapter};
