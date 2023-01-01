import{V as y,P as p,Y as c,w as h,E as d,t as F,e as A,am as f,y as s}from"./arcadeUtils-e458130e.js";import{WhereClause as l}from"./WhereClause-19d09d89.js";import"./geometry-1b3a0099.js";import"./ensureType-abaf235a.js";import"./string-46813dd9.js";import"./typedArrayUtil-6bfe4dae.js";import"./Error-e5869661.js";import"./Extent-b8913cd1.js";import"./cast-34ff1fab.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-281d25c9.js";import"./Polyline-7684a66d.js";import"./typeUtils-0cf27003.js";import"./jsonMap-92eea954.js";import"./preload-helper-596b5639.js";import"./number-91405e46.js";import"./locale-30120714.js";import"./Field-db318fdd.js";import"./enumeration-e40d8895.js";import"./fieldType-11b4c3ca.js";import"./jsonUtils-eb956695.js";import"./featureConversionUtils-9849a680.js";import"./OptimizedFeature-06185297.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./request-0ae6f728.js";import"./unitUtils-2906b0b4.js";import"./Portal-ed3455de.js";import"./Loadable-3c0fb2d0.js";import"./Promise-19e65545.js";import"./PortalGroup-506cda94.js";import"./PortalUser-d46abb74.js";import"./sizeVariableUtils-d4870b0d.js";async function u(n,r,o,t,a,e){if(t.length===1){if(c(t[0]))return f(n,t[0],s(t[1],-1));if(d(t[0]))return f(n,t[0].toArray(),s(t[1],-1))}else if(t.length===2){if(c(t[0]))return f(n,t[0],s(t[1],-1));if(d(t[0]))return f(n,t[0].toArray(),s(t[1],-1));if(p(t[0])){const i=await t[0].load(),m=await g(l.create(t[1],i.getFieldsIndex()),e,a);return t[0].calculateStatistic(n,m,s(t[2],1e3),r.abortSignal)}}else if(t.length===3&&p(t[0])){const i=await t[0].load(),m=await g(l.create(t[1],i.getFieldsIndex()),e,a);return t[0].calculateStatistic(n,m,s(t[2],1e3),r.abortSignal)}return f(n,t,-1)}async function g(n,r,o){const t=n.getVariables();if(t.length>0){const a=[];for(let i=0;i<t.length;i++){const m={name:t[i]};a.push(await r.evaluateIdentifier(o,m))}const e={};for(let i=0;i<t.length;i++)e[t[i]]=a[i];return n.parameters=e,n}return n}function Z(n){n.mode==="async"&&(n.functions.stdev=function(r,o){return n.standardFunctionAsync(r,o,(t,a,e)=>u("stdev",t,a,e,r,n))},n.functions.variance=function(r,o){return n.standardFunctionAsync(r,o,(t,a,e)=>u("variance",t,a,e,r,n))},n.functions.average=function(r,o){return n.standardFunctionAsync(r,o,(t,a,e)=>u("mean",t,a,e,r,n))},n.functions.mean=function(r,o){return n.standardFunctionAsync(r,o,(t,a,e)=>u("mean",t,a,e,r,n))},n.functions.sum=function(r,o){return n.standardFunctionAsync(r,o,(t,a,e)=>u("sum",t,a,e,r,n))},n.functions.min=function(r,o){return n.standardFunctionAsync(r,o,(t,a,e)=>u("min",t,a,e,r,n))},n.functions.max=function(r,o){return n.standardFunctionAsync(r,o,(t,a,e)=>u("max",t,a,e,r,n))},n.functions.count=function(r,o){return n.standardFunctionAsync(r,o,(t,a,e)=>{if(y(e,1,1,r,o),p(e[0]))return e[0].count(t.abortSignal);if(c(e[0])||h(e[0]))return e[0].length;if(d(e[0]))return e[0].length();throw new F(r,A.InvalidParameter,o)})})}export{Z as registerFunctions};
