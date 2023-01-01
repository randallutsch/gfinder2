import{u as j,e as r,y as i,n as h,m as P}from"./cast-7ef3a066.js";import{c as C}from"./Analysis-4d661263.js";import{t as a,z as m,r as o,o as g,e as w}from"./typedArrayUtil-4015bf74.js";import{i as H,l as Z}from"./Clonable-c315fc8d.js";import"./ArrayPool-45db95ab.js";import{g as f}from"./persistable-70a4596a.js";import{w as O}from"./Extent-54ef1174.js";import{x as L}from"./ElevationInfo-01beda98.js";import{j as v}from"./Collection-8f94e599.js";import{t as M,n as E}from"./collectionUtils-07fb1a58.js";import{l as z,w as F}from"./reactiveUtils-b911287d.js";import{u as k}from"./projection-6d5d9468.js";import{u as B,c as D,m as G}from"./aaBoundingBox-10130714.js";import{O as J}from"./MultiOriginJSONSupport-98cda0d2.js";import{b as K}from"./Layer-d4420615.js";import{c as Q}from"./OperationalLayer-06028ec1.js";import"./string-7d6c8f5c.js";import"./Error-1dfe2922.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-e323addc.js";import"./Identifiable-d701141a.js";import"./preload-helper-596b5639.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./request-3bbdab19.js";import"./uuid-73213768.js";import"./persistableUrlUtils-2c2cd088.js";import"./jsonMap-c8081704.js";import"./fieldUtils-cb9b3e6e.js";import"./arcadeOnDemand-490dc8ce.js";import"./geometry-22feb2bb.js";import"./Polyline-d942e774.js";import"./typeUtils-17403a33.js";import"./lengthUtils-f3b6e37f.js";import"./unitUtils-58dc72ed.js";import"./Evented-7dfb249a.js";import"./SimpleObservable-ddf0ceba.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./mat4-62d5e6a4.js";import"./assets-04f03891.js";import"./zscale-65468675.js";import"./Loadable-772aaf20.js";import"./Promise-e08b9d4d.js";import"./TimeExtent-dfe3f644.js";import"./opacityUtils-2c2d0d87.js";function R(t,e){return I(t)===I(e)}function I(t){if(a(t))return null;const e=t.layer!=null?t.layer.id:"";let s=null;return s=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,s==null?null:`o-${e}-${s}`}const S={json:{write:{writer:U,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:V}}}};function U(t,e){var s;a(t)||((s=t.layer)==null?void 0:s.objectIdField)==null||t.attributes==null||(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function V(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let p=class extends j(H(P)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return m(this.position,e.position)&&m(this.elevationInfo,e.elevationInfo)&&R(this.feature,e.feature)}};r([i({type:O}),f()],p.prototype,"position",void 0),r([i({type:L}),f()],p.prototype,"elevationInfo",void 0),r([i(S)],p.prototype,"feature",void 0),p=r([h("esri.analysis.LineOfSightAnalysisObserver")],p);const _=p;let u=class extends j(Z){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return m(this.position,t.position)&&m(this.elevationInfo,t.elevationInfo)&&R(this.feature,t.feature)}};r([i({type:O}),f()],u.prototype,"position",void 0),r([i({type:L}),f()],u.prototype,"elevationInfo",void 0),r([i(S)],u.prototype,"feature",void 0),u=r([h("esri.analysis.LineOfSightAnalysisTarget")],u);const A=u;function W(t){return t?tt:et}function X(t,e){return a(e)||!e.mode?W(t).mode:e.mode}function Y(t,e){return X(!!o(t)&&t.hasZ,e)}const tt={mode:"absolute-height",offset:0},et={mode:"on-the-ground",offset:null},b=v.ofType(A);let l=class extends C{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(z(()=>this._computeExtent(),t=>{(a(t)||a(t.pending))&&this._set("extent",o(t)?t.extent:null)},F))}get targets(){return this._get("targets")||new b}set targets(t){this._set("targets",E(t,this.targets,b))}get spatialReference(){return o(this.observer)&&o(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[g(this.observer,t=>t.position)]}async waitComputeExtent(){const t=this._computeExtent();return o(t)?w(t.pending):null}_computeExtent(){const t=this.spatialReference;if(a(this.observer)||a(this.observer.position)||a(t))return null;const e=y=>Y(y.position,y.elevationInfo)==="absolute-height",s=this.observer.position,$=B(s.x,s.y,s.z,s.x,s.y,s.z);for(const y of this.targets)if(o(y.position)){const d=k(y.position,t);if(o(d.pending))return{pending:d.pending,extent:null};if(o(d.geometry)){const{x:T,y:q,z:N}=d.geometry;D($,[T,q,N])}}const c=G($,t);return e(this.observer)&&this.targets.every(e)||(c.zmin=null,c.zmax=null),{pending:null,extent:c}}clear(){this.observer=null,this.targets.removeAll()}};r([i({type:["line-of-sight"]})],l.prototype,"type",void 0),r([i({type:_,json:{read:!0,write:!0}})],l.prototype,"observer",void 0),r([i({cast:M,type:b,nonNullable:!0,json:{read:!0,write:!0}})],l.prototype,"targets",null),r([i({value:null,readOnly:!0})],l.prototype,"extent",void 0),r([i({readOnly:!0})],l.prototype,"spatialReference",null),r([i({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),l=r([h("esri.analysis.LineOfSightAnalysis")],l);const x=l,rt=v.ofType(A);let n=class extends Q(J(K)){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new x,this.opacity=1}initialize(){this.addHandles(z(()=>this.analysis,(t,e)=>{o(e)&&e.parent===this&&(e.parent=null),o(t)&&(t.parent=this)},F))}async load(){return o(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return g(this.analysis,t=>t.observer)}set observer(t){g(this.analysis,e=>e.observer=t)}get targets(){return o(this.analysis)?this.analysis.targets:new v}set targets(t){var e;E(t,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return o(this.analysis)?this.analysis.extent:null}get spatialReference(){return o(this.analysis)?w(this.analysis.spatialReference):null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new x)}};r([i({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),r([i({type:["LineOfSightLayer"]})],n.prototype,"operationalLayerType",void 0),r([i({type:_,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"observer",null),r([i({type:rt,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"targets",null),r([i({nonNullable:!0,json:{read:!1,write:!1}})],n.prototype,"analysis",void 0),r([i({readOnly:!0})],n.prototype,"fullExtent",null),r([i({readOnly:!0})],n.prototype,"spatialReference",null),r([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),r([i({type:["show","hide"]})],n.prototype,"listMode",void 0),n=r([h("esri.layers.LineOfSightLayer")],n);const Ut=n;export{Ut as default};