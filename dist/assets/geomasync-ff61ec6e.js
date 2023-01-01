import{a as Y}from"./request-3bbdab19.js";import{q as o,V as w,z as L,K as W,t as a,e as u,Y as P,E as I,g as S,v as g,P as z,x as N,y as m,G as J,H as p,S as O,I as k,r as A,L as Q,O as X,R as _,T as $,U as C}from"./arcadeUtils-38db4e06.js";import{p as s,a as b,w as M}from"./Extent-54ef1174.js";import{A as nn,h as tn,S as rn,m as en,x as an,p as un,O as ln,g as cn,R as fn,D as on,b as sn,E as dn,k as mn,y as wn,w as pn,W as K,K as T,F as Z,M as E,d as hn,C as j,U as q,B as yn,L as gn,P as vn,v as Pn,H,N as U,J as In,j as An}from"./geometryEngineAsync-183f1547.js";import{m as F,v as R,u as V}from"./Polyline-d942e774.js";import{v as B}from"./jsonUtils-196b5f3d.js";import{$ as Fn}from"./unitUtils-58dc72ed.js";import"./preload-helper-596b5639.js";import"./Error-1dfe2922.js";import"./string-7d6c8f5c.js";import"./typedArrayUtil-4015bf74.js";import"./promiseUtils-e323addc.js";import"./geometry-22feb2bb.js";import"./ArrayPool-45db95ab.js";import"./typeUtils-17403a33.js";import"./jsonMap-c8081704.js";import"./number-a88b0f3f.js";import"./locale-30120714.js";import"./Field-a857bb5a.js";import"./cast-7ef3a066.js";import"./nextTick-3ee5a785.js";import"./enumeration-cda3949b.js";import"./fieldType-36e8171c.js";import"./featureConversionUtils-99b22ab9.js";import"./OptimizedFeature-aa2e72dc.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Portal-af5b2c18.js";import"./Loadable-772aaf20.js";import"./Promise-e08b9d4d.js";import"./PortalGroup-100f1bed.js";import"./PortalUser-0170111d.js";import"./sizeVariableUtils-d4870b0d.js";import"./workers-957326d1.js";import"./Connection-4985e9bc.js";import"./Queue-26a7c9c9.js";import"./assets-04f03891.js";import"./intl-c3eb9a7a.js";import"./number-1bdcdfd9.js";import"./messages-c2cf09a4.js";function D(e){return Y.indexOf("4.")===0?R.fromExtent(e):new R({spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]})}function v(e,t,r){if(w(e,2,2,t,r),!(e[0]instanceof s&&e[1]instanceof s)){if(!(e[0]instanceof s&&e[1]===null)){if(!(e[1]instanceof s&&e[0]===null)){if(e[0]!==null||e[1]!==null)throw new a(t,u.InvalidParameter,r)}}}}async function G(e,t){if(e.type!=="polygon"&&e.type!=="polyline"&&e.type!=="extent")return 0;let r=1;(e.spatialReference.vcsWkid||e.spatialReference.latestVcsWkid)&&(r=$(e.spatialReference)/Fn(e.spatialReference));let c=0;if(e.type==="polyline")for(const n of e.paths)for(let i=1;i<n.length;i++)c+=C(n[i],n[i-1],r);else if(e.type==="polygon")for(const n of e.rings){for(let i=1;i<n.length;i++)c+=C(n[i],n[i-1],r);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(c+=C(n[0],n[n.length-1],r))}else e.type==="extent"&&(c+=2*C([e.xmin,e.ymin,0],[e.xmax,e.ymin,0],r),c+=2*C([e.xmin,e.ymin,0],[e.xmin,e.ymax,0],r),c*=2,c+=4*Math.abs(m(e.zmax,0)*r-m(e.zmin,0)*r));const f=new F({hasZ:!1,hasM:!1,spatialReference:e.spatialReference,paths:[[0,0],[0,c]]});return Z(f,t)}function ft(e){e.mode==="async"&&(e.functions.disjoint=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>(v(n=o(n),t,r),n[0]===null||n[1]===null||nn(n[0],n[1])))},e.functions.intersects=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>(v(n=o(n),t,r),n[0]!==null&&n[1]!==null&&tn(n[0],n[1])))},e.functions.touches=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>(v(n=o(n),t,r),n[0]!==null&&n[1]!==null&&rn(n[0],n[1])))},e.functions.crosses=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>(v(n=o(n),t,r),n[0]!==null&&n[1]!==null&&en(n[0],n[1])))},e.functions.within=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>(v(n=o(n),t,r),n[0]!==null&&n[1]!==null&&an(n[0],n[1])))},e.functions.contains=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>(v(n=o(n),t,r),n[0]!==null&&n[1]!==null&&un(n[0],n[1])))},e.functions.overlaps=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>(v(n=o(n),t,r),n[0]!==null&&n[1]!==null&&ln(n[0],n[1])))},e.functions.equals=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>(w(n,2,2,t,r),n[0]===n[1]||(n[0]instanceof s&&n[1]instanceof s?cn(n[0],n[1]):!(!L(n[0])||!L(n[1]))&&n[0].getTime()===n[1].getTime())))},e.functions.relate=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{if(n=o(n),w(n,3,3,t,r),n[0]instanceof s&&n[1]instanceof s)return fn(n[0],n[1],W(n[2]));if(n[0]instanceof s&&n[1]===null||n[1]instanceof s&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new a(t,u.InvalidParameter,r)})},e.functions.intersection=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>(v(n=o(n),t,r),n[0]===null||n[1]===null?null:on(n[0],n[1])))},e.functions.union=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{const i=[];if((n=o(n)).length===0)throw new a(t,u.WrongNumberOfParameters,r);if(n.length===1)if(P(n[0])){const l=o(n[0]);for(let d=0;d<l.length;d++)if(l[d]!==null){if(!(l[d]instanceof s))throw new a(t,u.InvalidParameter,r);i.push(l[d])}}else{if(!I(n[0])){if(n[0]instanceof s)return S(g(n[0]),t.spatialReference);if(n[0]===null)return null;throw new a(t,u.InvalidParameter,r)}{const l=o(n[0].toArray());for(let d=0;d<l.length;d++)if(l[d]!==null){if(!(l[d]instanceof s))throw new a(t,u.InvalidParameter,r);i.push(l[d])}}}else for(let l=0;l<n.length;l++)if(n[l]!==null){if(!(n[l]instanceof s))throw new a(t,u.InvalidParameter,r);i.push(n[l])}return i.length===0?null:sn(i)})},e.functions.difference=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>(v(n=o(n),t,r),n[0]!==null&&n[1]===null?g(n[0]):n[0]===null?null:dn(n[0],n[1])))},e.functions.symmetricdifference=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>(v(n=o(n),t,r),n[0]===null&&n[1]===null?null:n[0]===null?g(n[1]):n[1]===null?g(n[0]):mn(n[0],n[1])))},e.functions.clip=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{if(n=o(n),w(n,2,2,t,r),!(n[1]instanceof b)&&n[1]!==null)throw new a(t,u.InvalidParameter,r);if(n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);return n[1]===null?null:wn(n[0],n[1])})},e.functions.cut=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{if(n=o(n),w(n,2,2,t,r),!(n[1]instanceof F)&&n[1]!==null)throw new a(t,u.InvalidParameter,r);if(n[0]===null)return[];if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);return n[1]===null?[g(n[0])]:pn(n[0],n[1])})},e.functions.area=function(t,r){return e.standardFunctionAsync(t,r,async(c,f,n)=>{if(w(n,1,2,t,r),(n=o(n))[0]===null)return 0;if(z(n[0])){const i=await n[0].sumArea(N(m(n[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,u.Cancelled,r);return i}if(P(n[0])||I(n[0])){const i=J(n[0],t.spatialReference);return i===null?0:K(i,N(m(n[1],-1)))}if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);return K(n[0],N(m(n[1],-1)))})},e.functions.areageodetic=function(t,r){return e.standardFunctionAsync(t,r,async(c,f,n)=>{if(w(n,1,2,t,r),(n=o(n))[0]===null)return 0;if(z(n[0])){const i=await n[0].sumArea(N(m(n[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,u.Cancelled,r);return i}if(P(n[0])||I(n[0])){const i=J(n[0],t.spatialReference);return i===null?0:T(i,N(m(n[1],-1)))}if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);return T(n[0],N(m(n[1],-1)))})},e.functions.length=function(t,r){return e.standardFunctionAsync(t,r,async(c,f,n)=>{if(w(n,1,2,t,r),(n=o(n))[0]===null)return 0;if(z(n[0])){const i=await n[0].sumLength(p(m(n[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,u.Cancelled,r);return i}if(P(n[0])||I(n[0])){const i=O(n[0],t.spatialReference);return i===null?0:Z(i,p(m(n[1],-1)))}if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);return Z(n[0],p(m(n[1],-1)))})},e.functions.length3d=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{if(w(n,1,2,t,r),(n=o(n))[0]===null)return 0;if(P(n[0])||I(n[0])){const i=O(n[0],t.spatialReference);return i===null?0:i.hasZ===!0?G(i,p(m(n[1],-1))):Z(i,p(m(n[1],-1)))}if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);return n[0].hasZ===!0?G(n[0],p(m(n[1],-1))):Z(n[0],p(m(n[1],-1)))})},e.functions.lengthgeodetic=function(t,r){return e.standardFunctionAsync(t,r,async(c,f,n)=>{if(w(n,1,2,t,r),(n=o(n))[0]===null)return 0;if(z(n[0])){const i=await n[0].sumLength(p(m(n[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,u.Cancelled,r);return i}if(P(n[0])||I(n[0])){const i=O(n[0],t.spatialReference);return i===null?0:E(i,p(m(n[1],-1)))}if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);return E(n[0],p(m(n[1],-1)))})},e.functions.distance=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{n=o(n),w(n,2,3,t,r);let i=n[0];(P(n[0])||I(n[0]))&&(i=k(n[0],t.spatialReference));let l=n[1];if((P(n[1])||I(n[1]))&&(l=k(n[1],t.spatialReference)),!(i instanceof s))throw new a(t,u.InvalidParameter,r);if(!(l instanceof s))throw new a(t,u.InvalidParameter,r);return hn(i,l,p(m(n[2],-1)))})},e.functions.distancegeodetic=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{n=o(n),w(n,2,3,t,r);const i=n[0],l=n[1];if(!(i instanceof M))throw new a(t,u.InvalidParameter,r);if(!(l instanceof M))throw new a(t,u.InvalidParameter,r);const d=new F({paths:[],spatialReference:i.spatialReference});return d.addPath([i,l]),E(d,p(m(n[2],-1)))})},e.functions.densify=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{if(n=o(n),w(n,2,3,t,r),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);const i=A(n[1]);if(isNaN(i))throw new a(t,u.InvalidParameter,r);if(i<=0)throw new a(t,u.InvalidParameter,r);return n[0]instanceof R||n[0]instanceof F?j(n[0],i,p(m(n[2],-1))):n[0]instanceof b?j(D(n[0]),i,p(m(n[2],-1))):n[0]})},e.functions.densifygeodetic=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{if(n=o(n),w(n,2,3,t,r),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);const i=A(n[1]);if(isNaN(i))throw new a(t,u.InvalidParameter,r);if(i<=0)throw new a(t,u.InvalidParameter,r);return n[0]instanceof R||n[0]instanceof F?q(n[0],i,p(m(n[2],-1))):n[0]instanceof b?q(D(n[0]),i,p(m(n[2],-1))):n[0]})},e.functions.generalize=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{if(n=o(n),w(n,2,4,t,r),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);const i=A(n[1]);if(isNaN(i))throw new a(t,u.InvalidParameter,r);return yn(n[0],i,Q(m(n[2],!0)),p(m(n[3],-1)))})},e.functions.buffer=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{if(n=o(n),w(n,2,3,t,r),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);const i=A(n[1]);if(isNaN(i))throw new a(t,u.InvalidParameter,r);return i===0?g(n[0]):gn(n[0],i,p(m(n[2],-1)))})},e.functions.buffergeodetic=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{if(n=o(n),w(n,2,3,t,r),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);const i=A(n[1]);if(isNaN(i))throw new a(t,u.InvalidParameter,r);return i===0?g(n[0]):vn(n[0],i,p(m(n[2],-1)))})},e.functions.offset=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{if(n=o(n),w(n,2,6,t,r),n[0]===null)return null;if(!(n[0]instanceof R||n[0]instanceof F))throw new a(t,u.InvalidParameter,r);const i=A(n[1]);if(isNaN(i))throw new a(t,u.InvalidParameter,r);const l=A(m(n[4],10));if(isNaN(l))throw new a(t,u.InvalidParameter,r);const d=A(m(n[5],0));if(isNaN(d))throw new a(t,u.InvalidParameter,r);return Pn(n[0],i,p(m(n[2],-1)),W(m(n[3],"round")).toLowerCase(),l,d)})},e.functions.rotate=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{n=o(n),w(n,2,3,t,r);let i=n[0];if(i===null)return null;if(!(i instanceof s))throw new a(t,u.InvalidParameter,r);i instanceof b&&(i=R.fromExtent(i));const l=A(n[1]);if(isNaN(l))throw new a(t,u.InvalidParameter,r);const d=m(n[2],null);if(d===null)return H(i,l);if(d instanceof M)return H(i,l,d);throw new a(t,u.InvalidParameter,r)})},e.functions.centroid=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{if(n=o(n),w(n,1,1,t,r),n[0]===null)return null;let i=n[0];if((P(n[0])||I(n[0]))&&(i=k(n[0],t.spatialReference)),i===null)return null;if(!(i instanceof s))throw new a(t,u.InvalidParameter,r);return i instanceof M?S(g(n[0]),t.spatialReference):i instanceof R?i.centroid:i instanceof F?X(i):i instanceof V?_(i):i instanceof b?i.center:null})},e.functions.multiparttosinglepart=function(t,r){return e.standardFunctionAsync(t,r,async(c,f,n)=>{n=o(n),w(n,1,1,t,r);const i=[];if(n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);if(n[0]instanceof M)return[S(g(n[0]),t.spatialReference)];if(n[0]instanceof b)return[S(g(n[0]),t.spatialReference)];const l=await U(n[0]);if(l instanceof R){const d=[],y=[];for(let h=0;h<l.rings.length;h++)if(l.isClockwise(l.rings[h])){const x=B({rings:[l.rings[h]],hasZ:l.hasZ===!0,hazM:l.hasM===!0,spatialReference:l.spatialReference.toJSON()});d.push(x)}else y.push({ring:l.rings[h],pt:l.getPoint(h,0)});for(let h=0;h<y.length;h++)for(let x=0;x<d.length;x++)if(d[x].contains(y[h].pt)){d[x].addRing(y[h].ring);break}return d}if(l instanceof F){const d=[];for(let y=0;y<l.paths.length;y++){const h=B({paths:[l.paths[y]],hasZ:l.hasZ===!0,hazM:l.hasM===!0,spatialReference:l.spatialReference.toJSON()});d.push(h)}return d}if(n[0]instanceof V){const d=S(g(n[0]),t.spatialReference);for(let y=0;y<d.points.length;y++)i.push(d.getPoint(y));return i}return null})},e.functions.issimple=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{if(n=o(n),w(n,1,1,t,r),n[0]===null)return!0;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);return In(n[0])})},e.functions.simplify=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{if(n=o(n),w(n,1,1,t,r),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);return U(n[0])})},e.functions.convexhull=function(t,r){return e.standardFunctionAsync(t,r,(c,f,n)=>{if(n=o(n),w(n,1,1,t,r),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,r);return An(n[0])})})}export{ft as registerFunctions};
