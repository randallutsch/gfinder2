import"./Error-e5869661.js";import{j as s}from"./request-c6faf466.js";import{y as c}from"./string-46813dd9.js";import{c as u,d as y}from"./jsonUtils-eb956695.js";function J(e,t){return t?{...t,query:{...e,...t.query}}:{query:e}}function N(e){return typeof e=="string"?s(e):c(e)}function m(e,t,f){const o={};for(const n in e){if(n==="declaredClass")continue;const r=e[n];if(r!=null&&typeof r!="function")if(Array.isArray(r)){o[n]=[];for(let i=0;i<r.length;i++)o[n][i]=m(r[i])}else if(typeof r=="object")if(r.toJSON){const i=r.toJSON(f&&f[n]);o[n]=t?i:JSON.stringify(i)}else o[n]=t?r:JSON.stringify(r);else o[n]=r}return o}function O(e){return{geometryType:u(e[0]),geometries:e.map(t=>t.toJSON())}}function S(e,t,f){const o=y(t);return e.map(n=>{const r=o.fromJSON(n);return r.spatialReference=f,r})}export{N as f,J as i,S as o,O as r,m as s};