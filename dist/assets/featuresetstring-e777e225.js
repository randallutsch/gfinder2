import{V as o,c as s,ao as A,r as m,K as u,P as c,ap as l,t as p,e as v,aq as b,J as f,ar as h,as as x,at as g,au as F,av as P,y as I,aw as V,ax as w}from"./arcadeUtils-38db4e06.js";import"./geometry-22feb2bb.js";import"./ArrayPool-45db95ab.js";import"./string-7d6c8f5c.js";import"./typedArrayUtil-4015bf74.js";import"./Error-1dfe2922.js";import"./Extent-54ef1174.js";import"./cast-7ef3a066.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-e323addc.js";import"./Polyline-d942e774.js";import"./typeUtils-17403a33.js";import"./jsonMap-c8081704.js";import"./preload-helper-596b5639.js";import"./number-a88b0f3f.js";import"./locale-30120714.js";import"./Field-a857bb5a.js";import"./enumeration-cda3949b.js";import"./fieldType-36e8171c.js";import"./jsonUtils-196b5f3d.js";import"./featureConversionUtils-99b22ab9.js";import"./OptimizedFeature-aa2e72dc.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./request-3bbdab19.js";import"./unitUtils-58dc72ed.js";import"./Portal-af5b2c18.js";import"./Loadable-772aaf20.js";import"./Promise-e08b9d4d.js";import"./PortalGroup-100f1bed.js";import"./PortalUser-0170111d.js";import"./sizeVariableUtils-d4870b0d.js";function y(t){return t&&t.domain?t.domain.type==="coded-value"||t.domain.type==="codedValue"?f.convertObjectToArcadeDictionary({type:"codedValue",name:t.domain.name,dataType:w[t.field.type],codedValues:t.domain.codedValues.map(r=>({name:r.name,code:r.code}))}):f.convertObjectToArcadeDictionary({type:"range",name:t.domain.name,dataType:w[t.field.type],min:t.domain.min,max:t.domain.max}):null}function en(t){t.mode==="async"&&(t.functions.domain=function(r,a){return t.standardFunctionAsync(r,a,async(i,d,n)=>{if(o(n,2,3,r,a),s(n[0]))return y(A(n[0],u(n[1]),n[2]===void 0?void 0:m(n[2])));if(c(n[0]))return await n[0]._ensureLoaded(),y(l(u(n[1]),n[0],null,n[2]===void 0?void 0:m(n[2])));throw new p(r,v.InvalidParameter,a)})},t.functions.subtypes=function(r,a){return t.standardFunctionAsync(r,a,async(i,d,n)=>{if(o(n,1,1,r,a),s(n[0])){const e=b(n[0]);return e?f.convertObjectToArcadeDictionary(e):null}if(c(n[0])){await n[0]._ensureLoaded();const e=n[0].subtypes();return e?f.convertObjectToArcadeDictionary(e):null}throw new p(r,v.InvalidParameter,a)})},t.functions.domainname=function(r,a){return t.standardFunctionAsync(r,a,async(i,d,n)=>{if(o(n,2,4,r,a),s(n[0]))return h(n[0],u(n[1]),n[2],n[3]===void 0?void 0:m(n[3]));if(c(n[0])){await n[0]._ensureLoaded();const e=l(u(n[1]),n[0],null,n[3]===void 0?void 0:m(n[3]));return x(e,n[2])}throw new p(r,v.InvalidParameter,a)})},t.signatures.push({name:"domainname",min:2,max:4}),t.functions.domaincode=function(r,a){return t.standardFunctionAsync(r,a,async(i,d,n)=>{if(o(n,2,4,r,a),s(n[0]))return g(n[0],u(n[1]),n[2],n[3]===void 0?void 0:m(n[3]));if(c(n[0])){await n[0]._ensureLoaded();const e=l(u(n[1]),n[0],null,n[3]===void 0?void 0:m(n[3]));return F(e,n[2])}throw new p(r,v.InvalidParameter,a)})},t.signatures.push({name:"domaincode",min:2,max:4})),t.functions.text=function(r,a){return t.standardFunctionAsync(r,a,(i,d,n)=>{if(o(n,1,2,r,a),!c(n[0]))return P(n[0],n[1]);{const e=I(n[1],"");if(e==="")return n[0].castToText();if(e.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(e.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal)}})},t.functions.gdbversion=function(r,a){return t.standardFunctionAsync(r,a,async(i,d,n)=>{if(o(n,1,1,r,a),s(n[0]))return n[0].gdbVersion();if(c(n[0]))return(await n[0].load()).gdbVersion;throw new p(r,v.InvalidParameter,a)})},t.functions.schema=function(r,a){return t.standardFunctionAsync(r,a,async(i,d,n)=>{if(o(n,1,1,r,a),c(n[0]))return await n[0].load(),f.convertObjectToArcadeDictionary(n[0].schema());if(s(n[0])){const e=V(n[0]);return e?f.convertObjectToArcadeDictionary(e):null}throw new p(r,v.InvalidParameter,a)})}}export{en as registerFunctions};
