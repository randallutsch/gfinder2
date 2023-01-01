import{l as R}from"./Color-7a3d8c62.js";import{U as G}from"./request-4f5c54dd.js";import{r as F}from"./ArrayPool-45db95ab.js";import{M}from"./mathUtils-daf59e84.js";import{r as m,e as T,o as h,t as P}from"./typedArrayUtil-4015bf74.js";import{g as B}from"./mat3-45e3f2eb.js";import{e as I}from"./mat3f64-b33e332c.js";import{a as D}from"./common-701a4199.js";import{r as U}from"./vec4f64-018b3fa6.js";import{p as j,m as k,c as q,g as z}from"./meshFeatureSet-87d89153.js";import{T as V,i as N,c as O,x as _,u as K,L as Q,O as L,E as W}from"./BufferView-dfb97f8b.js";import{t as X,r as Y,o as Z,b as H,f as J,e as tt,n as rt}from"./vec33-d985c8f3.js";import{a as ot,m as et,r as b,b as nt,h as it,t as E,c as st,j as at,d as mt,e as pt,k as ut,i as ct,f as lt,g as ft,l as dt,o as $t}from"./DefaultMaterial_COLOR_GAMMA-b803c68b.js";import{_ as xt}from"./georeference-243b9071.js";import{E as A,D as C}from"./enums-64ab819c.js";import"./colorUtils-639f4d25.js";import"./preload-helper-101896b7.js";import"./Error-1dfe2922.js";import"./string-7d6c8f5c.js";import"./promiseUtils-e323addc.js";import"./Graphic-17f3b359.js";import"./cast-7ef3a066.js";import"./nextTick-3ee5a785.js";import"./geometry-22feb2bb.js";import"./Extent-54ef1174.js";import"./Polyline-d942e774.js";import"./typeUtils-17403a33.js";import"./jsonMap-c8081704.js";import"./PopupTemplate-9da636f6.js";import"./Clonable-c315fc8d.js";import"./Collection-8f94e599.js";import"./Evented-7dfb249a.js";import"./SimpleObservable-ddf0ceba.js";import"./fieldUtils-75feb382.js";import"./arcadeOnDemand-797f4f1c.js";import"./enumeration-cda3949b.js";import"./number-1bdcdfd9.js";import"./locale-30120714.js";import"./Identifiable-d701141a.js";import"./symbols-87ca67f4.js";import"./CIMSymbol-52d72a23.js";import"./Symbol-6522d2f3.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-2c2d0d87.js";import"./aaBoundingBox-10130714.js";import"./persistableUrlUtils-afa98d6c.js";import"./collectionUtils-07fb1a58.js";import"./Portal-0c20e3a4.js";import"./Loadable-772aaf20.js";import"./Promise-e08b9d4d.js";import"./PortalGroup-100f1bed.js";import"./PortalUser-7acb0e3c.js";import"./jsonUtils-196b5f3d.js";import"./HandleOwner-2d282b7c.js";import"./reactiveUtils-b911287d.js";import"./imageUtils-c2d0d1ae.js";import"./earcut-58237617.js";import"./deduplicate-eb9d58da.js";import"./projection-ef32d842.js";import"./unitUtils-58dc72ed.js";import"./mat4-62d5e6a4.js";import"./assets-6d4d2dad.js";import"./zscale-65468675.js";import"./mat4f64-3d813481.js";import"./FeatureSet-b6696527.js";import"./Field-a857bb5a.js";import"./fieldType-36e8171c.js";import"./vec2-f978aef8.js";import"./types-e1c0a5bf.js";import"./asyncUtils-bd6eb812.js";import"./Version-dcdf768d.js";import"./quat-7867de93.js";import"./quatf64-7fd38d64.js";import"./compilerUtils-c5090cf5.js";async function Xr(t,r,n){const i=new ot(gt(n)),o=(await et(i,r,n,!0)).model,l=o.lods.shift(),p=new Map,u=new Map;o.textures.forEach((g,y)=>p.set(y,bt(g))),o.materials.forEach((g,y)=>u.set(y,vt(g,p)));const a=ht(l);for(const g of a.parts)wt(a,g,u);const{position:d,normal:c,tangent:e,color:s,texCoord0:f}=a.vertexAttributes,x={position:d.typedBuffer,normal:m(c)?c.typedBuffer:null,tangent:m(e)?e.typedBuffer:null,uv:m(f)?f.typedBuffer:null,color:m(s)?s.typedBuffer:null},w=xt(x,t,n);return{transform:w.transform,components:a.components,spatialReference:t.spatialReference,vertexAttributes:new j({position:w.vertexAttributes.position,normal:w.vertexAttributes.normal,tangent:w.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function gt(t){const r=t==null?void 0:t.resolveFile;return r?{busy:!1,request:async(n,i,o)=>{const l=r(n);return(await G(l,{responseType:i==="image"?"image":i==="binary"?"array-buffer":"json",signal:m(o)?o.signal:null})).data}}:null}function v(t,r){if(P(t))return"-";const n=t.typedBuffer;return`${F(r,n.buffer,()=>r.size)}/${n.byteOffset}/${n.byteLength}`}function Tt(t){return m(t)?t.toString():"-"}function ht(t){let r=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},i=new Map,o=new Map,l=[];for(const p of t.parts){const{attributes:{position:u,normal:a,color:d,tangent:c,texCoord0:e}}=p,s=`
      ${v(u,i)}/
      ${v(a,i)}/
      ${v(d,i)}/
      ${v(c,i)}/
      ${v(e,i)}/
      ${Tt(p.transform)}
    `;let f=!1;const x=F(o,s,()=>(f=!0,{start:r,length:u.count}));f&&(r+=u.count),a&&(n.normal=!0),d&&(n.color=!0),c&&(n.tangent=!0),e&&(n.texCoord0=!0),l.push({gltf:p,writeVertices:f,region:x})}return{vertexAttributes:{position:b(V,r),normal:n.normal?b(N,r):null,tangent:n.tangent?b(O,r):null,color:n.color?b(_,r):null,texCoord0:n.texCoord0?b(K,r):null},parts:l,components:[]}}function bt(t){return new k({data:t.data,wrap:Ct(t.parameters.wrap)})}function vt(t,r){const n=new R(Rt(t.color,t.opacity)),i=t.emissiveFactor?new R(Mt(t.emissiveFactor)):null;return new q({color:n,colorTexture:T(h(t.textureColor,o=>r.get(o))),normalTexture:T(h(t.textureNormal,o=>r.get(o))),emissiveColor:i,emissiveTexture:T(h(t.textureEmissive,o=>r.get(o))),occlusionTexture:T(h(t.textureOcclusion,o=>r.get(o))),alphaMode:At(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:T(h(t.textureMetallicRoughness,o=>r.get(o))),colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform})}function wt(t,r,n){r.writeVertices&&yt(t,r);const i=r.gltf,o=Et(i.indices||i.attributes.position.count,i.primitiveType),l=r.region.start;if(l)for(let p=0;p<o.length;p++)o[p]+=l;t.components.push(new z({faces:o,material:n.get(i.material),trustSourceNormals:!0}))}function yt(t,r){const{position:n,normal:i,tangent:o,color:l,texCoord0:p}=t.vertexAttributes,u=r.region.start,{attributes:a,transform:d}=r.gltf,c=a.position.count;if(X(n.slice(u,c),a.position,d),m(a.normal)&&m(i)){const e=B(I(),d),s=i.slice(u,c);Y(s,a.normal,e),M(e)&&Z(s,s)}else m(i)&&H(i,0,0,1,{dstIndex:u,count:c});if(m(a.tangent)&&m(o)){const e=B(I(),d),s=o.slice(u,c);nt(s,a.tangent,e),M(e)&&it(s,s)}else m(o)&&E(o,0,0,1,1,{dstIndex:u,count:c});if(m(a.texCoord0)&&m(p)?st(p.slice(u,c),a.texCoord0):m(p)&&at(p,0,0,{dstIndex:u,count:c}),m(a.color)&&m(l)){const e=a.color,s=l.slice(u,c);if(e.elementCount===4)e instanceof O?mt(s,e,255):e instanceof _?pt(s,e):e instanceof Q&&ut(s,e,8);else{E(s,255,255,255,255);const f=L.fromTypedArray(s.typedBuffer,s.typedBufferStride);e instanceof N?J(f,e,255):e instanceof L?tt(f,e):e instanceof W&&rt(f,e,8)}}else m(l)&&E(l.slice(u,c),255,255,255,255)}function Et(t,r){switch(r){case A.TRIANGLES:return ft(t,dt);case A.TRIANGLE_STRIP:return lt(t);case A.TRIANGLE_FAN:return ct(t)}}function At(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ct(t){return{horizontal:S(t.s),vertical:S(t.t)}}function S(t){switch(t){case C.CLAMP_TO_EDGE:return"clamp";case C.MIRRORED_REPEAT:return"mirror";case C.REPEAT:return"repeat"}}function $(t){return t**(1/$t)*255}function Rt(t,r){return U($(t[0]),$(t[1]),$(t[2]),r)}function Mt(t){return D($(t[0]),$(t[1]),$(t[2]))}export{Xr as loadGLTFMesh};
