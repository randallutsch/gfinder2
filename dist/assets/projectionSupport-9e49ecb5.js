import{r as a}from"./typedArrayUtil-6bfe4dae.js";import{_ as M,l}from"./projection-b78b11c8.js";import{t as h}from"./json-48e3ea08.js";import{y as Z,q as b,I as m,E as c,u as p,g as f}from"./Extent-b8913cd1.js";const t=[0,0];function x(e,n){if(!n)return null;if("x"in n){const s={x:0,y:0};return[s.x,s.y]=e(n.x,n.y,t),n.z!=null&&(s.z=n.z),n.m!=null&&(s.m=n.m),s}if("xmin"in n){const s={xmin:0,ymin:0,xmax:0,ymax:0};return[s.xmin,s.ymin]=e(n.xmin,n.ymin,t),[s.xmax,s.ymax]=e(n.xmax,n.ymax,t),n.hasZ&&(s.zmin=n.zmin,s.zmax=n.zmax,s.hasZ=!0),n.hasM&&(s.mmin=n.mmin,s.mmax=n.mmax,s.hasM=!0),s}return"rings"in n?{rings:u(n.rings,e),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:u(n.paths,e),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:y(n.points,e),hasM:n.hasM,hasZ:n.hasZ}:null}function u(e,n){const s=[];for(const i of e)s.push(y(i,n));return s}function y(e,n){const s=[];for(const i of e){const r=n(i[0],i[1],[0,0]);s.push(r),i.length>2&&r.push(i[2]),i.length>3&&r.push(i[3])}return s}async function w(e,n){if(!e||!n)return;const s=Array.isArray(e)?e.map(i=>a(i.geometry)?i.geometry.spatialReference:null).filter(a):[e];await M(s.map(i=>({source:i,dest:n})))}const _=x.bind(null,Z),g=x.bind(null,b);function A(e,n,s,i){if(!e||(s||(s=n,n=e.spatialReference),!m(n)||!m(s)||c(n,s)))return e;if(p(n,s)){const r=f(s)?_(e):g(e);return r.spatialReference=s,r}return l(h,[e],n,s,null,i)[0]}class z{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(n,s,i){if(!n||!n.length||!s||!i||c(s,i))return n;const r={geometries:n,inSpatialReference:s,outSpatialReference:i,resolve:null};return this._jobs.push(r),new Promise(o=>{r.resolve=o,this._timer===null&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null;const n=this._jobs.shift();if(!n)return;const{geometries:s,inSpatialReference:i,outSpatialReference:r,resolve:o}=n;p(i,r)?f(r)?o(s.map(_)):o(s.map(g)):o(l(h,s,i,r,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const R=new z;function E(e,n,s){return R.push(e,n,s)}export{E as M,w as f,A as g};
