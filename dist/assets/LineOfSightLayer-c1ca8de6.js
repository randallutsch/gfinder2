import{u as j,e as r,y as i,n as h,m as P}from"./cast-34ff1fab.js";import{c as C}from"./Analysis-ef40fc56.js";import{t as a,F as m,r as o,o as g,p as w}from"./typedArrayUtil-6bfe4dae.js";import{i as H,l as Z}from"./Clonable-a26a28b0.js";import"./ensureType-abaf235a.js";import{g as f}from"./persistable-39873ec6.js";import{w as O}from"./Extent-b8913cd1.js";import{x as L}from"./ElevationInfo-7059590d.js";import{j as v}from"./Collection-3317d203.js";import{t as M,n as E}from"./collectionUtils-23cca63a.js";import{l as F,w as R}from"./reactiveUtils-aec98ee9.js";import{u as k}from"./projection-0e524eaf.js";import{u as B,c as D,m as G}from"./aaBoundingBox-77ee83e3.js";import{O as J}from"./MultiOriginJSONSupport-98bacd7d.js";import{b as K}from"./Layer-685ea357.js";import{c as Q}from"./OperationalLayer-421969eb.js";import"./string-46813dd9.js";import"./Error-e5869661.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-281d25c9.js";import"./Identifiable-016ad07d.js";import"./preload-helper-596b5639.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./request-c6faf466.js";import"./uuid-73213768.js";import"./persistableUrlUtils-3427b748.js";import"./jsonMap-92eea954.js";import"./fieldUtils-c253753a.js";import"./arcadeOnDemand-c5034a8b.js";import"./geometry-1b3a0099.js";import"./Polyline-7684a66d.js";import"./typeUtils-0cf27003.js";import"./lengthUtils-02fceda8.js";import"./unitUtils-2906b0b4.js";import"./Evented-fac53f7f.js";import"./SimpleObservable-f97014ec.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./mat4-62d5e6a4.js";import"./assets-544006ef.js";import"./zscale-750d6efd.js";import"./Loadable-3c0fb2d0.js";import"./Promise-19e65545.js";import"./TimeExtent-b83e45a0.js";import"./opacityUtils-ea6b845d.js";function S(t,e){return I(t)===I(e)}function I(t){if(a(t))return null;const e=t.layer!=null?t.layer.id:"";let s=null;return s=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,s==null?null:`o-${e}-${s}`}const z={json:{write:{writer:U,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:V}}}};function U(t,e){var s;a(t)||((s=t.layer)==null?void 0:s.objectIdField)==null||t.attributes==null||(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function V(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let p=class extends j(H(P)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return m(this.position,e.position)&&m(this.elevationInfo,e.elevationInfo)&&S(this.feature,e.feature)}};r([i({type:O}),f()],p.prototype,"position",void 0),r([i({type:L}),f()],p.prototype,"elevationInfo",void 0),r([i(z)],p.prototype,"feature",void 0),p=r([h("esri.analysis.LineOfSightAnalysisObserver")],p);const _=p;let u=class extends j(Z){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return m(this.position,t.position)&&m(this.elevationInfo,t.elevationInfo)&&S(this.feature,t.feature)}};r([i({type:O}),f()],u.prototype,"position",void 0),r([i({type:L}),f()],u.prototype,"elevationInfo",void 0),r([i(z)],u.prototype,"feature",void 0),u=r([h("esri.analysis.LineOfSightAnalysisTarget")],u);const A=u;function W(t){return t?tt:et}function X(t,e){return a(e)||!e.mode?W(t).mode:e.mode}function Y(t,e){return X(!!o(t)&&t.hasZ,e)}const tt={mode:"absolute-height",offset:0},et={mode:"on-the-ground",offset:null},b=v.ofType(A);let l=class extends C{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(F(()=>this._computeExtent(),t=>{(a(t)||a(t.pending))&&this._set("extent",o(t)?t.extent:null)},R))}get targets(){return this._get("targets")||new b}set targets(t){this._set("targets",E(t,this.targets,b))}get spatialReference(){return o(this.observer)&&o(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[g(this.observer,t=>t.position)]}async waitComputeExtent(){const t=this._computeExtent();return o(t)?w(t.pending):null}_computeExtent(){const t=this.spatialReference;if(a(this.observer)||a(this.observer.position)||a(t))return null;const e=y=>Y(y.position,y.elevationInfo)==="absolute-height",s=this.observer.position,$=B(s.x,s.y,s.z,s.x,s.y,s.z);for(const y of this.targets)if(o(y.position)){const d=k(y.position,t);if(o(d.pending))return{pending:d.pending,extent:null};if(o(d.geometry)){const{x:T,y:q,z:N}=d.geometry;D($,[T,q,N])}}const c=G($,t);return e(this.observer)&&this.targets.every(e)||(c.zmin=null,c.zmax=null),{pending:null,extent:c}}clear(){this.observer=null,this.targets.removeAll()}};r([i({type:["line-of-sight"]})],l.prototype,"type",void 0),r([i({type:_,json:{read:!0,write:!0}})],l.prototype,"observer",void 0),r([i({cast:M,type:b,nonNullable:!0,json:{read:!0,write:!0}})],l.prototype,"targets",null),r([i({value:null,readOnly:!0})],l.prototype,"extent",void 0),r([i({readOnly:!0})],l.prototype,"spatialReference",null),r([i({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),l=r([h("esri.analysis.LineOfSightAnalysis")],l);const x=l,rt=v.ofType(A);let n=class extends Q(J(K)){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new x,this.opacity=1}initialize(){this.addHandles(F(()=>this.analysis,(t,e)=>{o(e)&&e.parent===this&&(e.parent=null),o(t)&&(t.parent=this)},R))}async load(){return o(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return g(this.analysis,t=>t.observer)}set observer(t){g(this.analysis,e=>e.observer=t)}get targets(){return o(this.analysis)?this.analysis.targets:new v}set targets(t){var e;E(t,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return o(this.analysis)?this.analysis.extent:null}get spatialReference(){return o(this.analysis)?w(this.analysis.spatialReference):null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new x)}};r([i({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),r([i({type:["LineOfSightLayer"]})],n.prototype,"operationalLayerType",void 0),r([i({type:_,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"observer",null),r([i({type:rt,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"targets",null),r([i({nonNullable:!0,json:{read:!1,write:!1}})],n.prototype,"analysis",void 0),r([i({readOnly:!0})],n.prototype,"fullExtent",null),r([i({readOnly:!0})],n.prototype,"spatialReference",null),r([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),r([i({type:["show","hide"]})],n.prototype,"listMode",void 0),n=r([h("esri.layers.LineOfSightLayer")],n);const Ut=n;export{Ut as default};