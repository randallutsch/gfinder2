import{F as v,e as Et,n as Rt}from"./cast-7ef3a066.js";import{r as W,t as Z,B as At}from"./typedArrayUtil-4015bf74.js";import{f as Nt}from"./promiseUtils-e323addc.js";import"./Error-1dfe2922.js";import{e as Ft}from"./ArrayPool-45db95ab.js";import"./string-7d6c8f5c.js";import{g as G,u as j,w as tt,r as et,B as Mt,C as ot,x as K}from"./mathUtils-daf59e84.js";import{n as N,a as f,t as C}from"./common-701a4199.js";import{c as it,v as xt,b as St,j as jt}from"./Util-5a067d82.js";import{s as ft,d as nt,_ as z,p as rt,T as H,k as F,V as st,R as S,N as ht}from"./sphere-f2946ba2.js";import{q as at}from"./QueryEngineResult-1857fe51.js";import"./mat4-62d5e6a4.js";import"./vec4f64-018b3fa6.js";import"./plane-5f88098d.js";import{m as Bt}from"./edgeProcessing-e6b072a1.js";import"./nextTick-3ee5a785.js";import"./vec2f64-e0301652.js";import"./byteSizeEstimations-90c5a50d.js";import"./mat3f64-b33e332c.js";import"./mat4f64-3d813481.js";import"./quatf64-7fd38d64.js";import"./preload-helper-596b5639.js";import"./Polyline-d942e774.js";import"./Extent-54ef1174.js";import"./quantizationUtils-14228c88.js";import"./jsonUtils-196b5f3d.js";import"./ItemCache-eb0f81ed.js";import"./MemCache-15515535.js";import"./WhereClause-f3484bdd.js";import"./utils-e34e3efd.js";import"./generateRendererUtils-8612ca33.js";import"./jsonMap-c8081704.js";import"./colorRamps-68d0ae1f.js";import"./Color-7a3d8c62.js";import"./colorUtils-639f4d25.js";import"./enumeration-cda3949b.js";import"./Symbol-6522d2f3.js";import"./projectionSupport-5e9ecc7f.js";import"./projection-6d5d9468.js";import"./unitUtils-58dc72ed.js";import"./SimpleObservable-ddf0ceba.js";import"./assets-04f03891.js";import"./request-3bbdab19.js";import"./zscale-65468675.js";import"./json-48e3ea08.js";import"./utils-ba1955b6.js";import"./normalizeUtils-5312bea5.js";import"./geometry-22feb2bb.js";import"./typeUtils-17403a33.js";import"./featureConversionUtils-99b22ab9.js";import"./OptimizedFeature-aa2e72dc.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./fieldUtils-cb9b3e6e.js";import"./arcadeOnDemand-490dc8ce.js";import"./deduplicate-eb9d58da.js";import"./InterleavedLayout-7654f6ca.js";import"./BufferView-dfb97f8b.js";import"./vec2-f978aef8.js";import"./types-e1c0a5bf.js";import"./VertexAttribute-9c5c630d.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";function pt(i){return i?{ray:nt(i.ray),c0:i.c0,c1:i.c1}:{ray:nt(),c0:0,c1:Number.MAX_VALUE}}new ft(()=>pt());function $(i,t){for(let e=0;e<X.NUM;e++){const o=i[e];if(o[0]*t[0]+o[1]*t[1]+o[2]*t[2]+o[3]>=t[3])return!1}return!0}var dt,d;(function(i){i[i.LEFT=0]="LEFT",i[i.RIGHT=1]="RIGHT",i[i.BOTTOM=2]="BOTTOM",i[i.TOP=3]="TOP",i[i.NEAR=4]="NEAR",i[i.FAR=5]="FAR"})(dt||(dt={})),function(i){i[i.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",i[i.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",i[i.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",i[i.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",i[i.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",i[i.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",i[i.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",i[i.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(d||(d={}));d.FAR_BOTTOM_RIGHT,d.NEAR_BOTTOM_RIGHT,d.NEAR_BOTTOM_LEFT,d.FAR_BOTTOM_LEFT,d.NEAR_BOTTOM_LEFT,d.NEAR_BOTTOM_RIGHT,d.NEAR_TOP_RIGHT,d.NEAR_TOP_LEFT,d.FAR_BOTTOM_RIGHT,d.FAR_BOTTOM_LEFT,d.FAR_TOP_LEFT,d.FAR_TOP_RIGHT,d.NEAR_BOTTOM_RIGHT,d.FAR_BOTTOM_RIGHT,d.FAR_TOP_RIGHT,d.NEAR_TOP_RIGHT,d.FAR_BOTTOM_LEFT,d.NEAR_BOTTOM_LEFT,d.NEAR_TOP_LEFT,d.FAR_TOP_LEFT,d.FAR_TOP_LEFT,d.NEAR_TOP_LEFT,d.NEAR_TOP_RIGHT,d.FAR_TOP_RIGHT;var X,ct;(function(i){i[i.NUM=6]="NUM"})(X||(X={})),function(i){i[i.NUM=8]="NUM"}(ct||(ct={}));new ft(pt);class B{constructor(t,e){this._objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new c,this._objectCount=0,e&&(e.maximumObjectsPerNode!==void 0&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),e.maximumDepth!==void 0&&(this._maximumDepth=e.maximumDepth))}get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}destroy(){this._degenerateObjects.clear(),c.clearPool(),J[0]=null,M.prune(),x.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const o=c.acquire();for(let n=0;n<e;n++){const r=t[n];this._isDegenerate(r)?this._degenerateObjects.add(r):(o.init(this._root),this._add(r,o))}c.release(o)}remove(t,e=null){this._objectCount-=t.length;const o=c.acquire();for(const n of t){const r=W(e)?e:z(this._objectToBoundingSphere(n),Ct);P(r[3])?(o.init(this._root),this._remove(n,r,o)):this._degenerateObjects.delete(n)}c.release(o),this._shrink()}update(t,e){if(!P(e[3])&&this._isDegenerate(t))return;const o=vt(t);this.remove(o,e),this.add(o)}forEachAlongRay(t,e,o){const n=rt(t,e);this._forEachNode(this._root,r=>{if(!this._intersectsNode(n,r))return!1;const h=r.node;return h.terminals.forAll(s=>{this._intersectsObject(n,s)&&o(s)}),h.residents!==null&&h.residents.forAll(s=>{this._intersectsObject(n,s)&&o(s)}),!0})}forEachAlongRayWithVerticalOffset(t,e,o,n){const r=rt(t,e);this._forEachNode(this._root,h=>{if(!this._intersectsNodeWithOffset(r,h,n))return!1;const s=h.node;return s.terminals.forAll(a=>{this._intersectsObjectWithOffset(r,a,n)&&o(a)}),s.residents!==null&&s.residents.forAll(a=>{this._intersectsObjectWithOffset(r,a,n)&&o(a)}),!0})}forEach(t){this._forEachNode(this._root,e=>{const o=e.node;return o.terminals.forAll(t),o.residents!==null&&o.residents.forAll(t),!0}),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,o,n=()=>!0,r=1/0){let h=1/0,s=1/0,a=null;const u=q(t,e),_=l=>{if(--r,!n(l))return;const O=this._objectToBoundingSphere(l);if(!$(o,O))return;const E=A(t,e,F(O)),I=E-O[3],m=E+O[3];I<h&&(h=I,s=m,a=l)};return this._forEachNodeDepthOrdered(this._root,l=>{if(r<=0||!$(o,l.bounds)||(G(g,u,l.halfSize),j(g,g,l.bounds),A(t,e,g)>s))return!1;const O=l.node;return O.terminals.forAll(E=>_(E)),O.residents!==null&&O.residents.forAll(E=>_(E)),!0},t,e),a}forEachInDepthRange(t,e,o,n,r,h,s){let a=-1/0,u=1/0;const _={setRange:m=>{o===B.DepthOrder.FRONT_TO_BACK?(a=Math.max(a,m.near),u=Math.min(u,m.far)):(a=Math.max(a,-m.far),u=Math.min(u,-m.near))}};_.setRange(n);const l=A(e,o,t),O=q(e,o),E=q(e,-o),I=m=>{if(!s(m))return;const R=this._objectToBoundingSphere(m),L=F(R),Y=A(e,o,L)-l,gt=Y-R[3],bt=Y+R[3];gt>u||bt<a||!$(h,R)||r(m,_)};this._forEachNodeDepthOrdered(this._root,m=>{if(!$(h,m.bounds)||(G(g,O,m.halfSize),j(g,g,m.bounds),A(e,o,g)-l>u)||(G(g,E,m.halfSize),j(g,g,m.bounds),A(e,o,g)-l<a))return!1;const R=m.node;return R.terminals.forAll(L=>I(L)),R.residents!==null&&R.residents.forAll(L=>I(L)),!0},e,o)}forEachNode(t){this._forEachNode(this._root,e=>t(e.node,e.bounds,e.halfSize))}forEachNeighbor(t,e){const o=H(e),n=F(e),r=a=>{const u=this._objectToBoundingSphere(a),_=H(u),l=o+_;return!(tt(F(u),n)-l*l<=0)||t(a)};let h=!0;const s=a=>{h&&(h=r(a))};this._forEachNode(this._root,a=>{const u=H(a.bounds),_=o+u;if(tt(F(a.bounds),n)-_*_>0)return!1;const l=a.node;return l.terminals.forAll(s),h&&l.residents!==null&&l.residents.forAll(s),h}),h&&this.forEachDegenerateObject(s)}_intersectsNode(t,e){return w(e.bounds,2*-e.halfSize,p),w(e.bounds,2*e.halfSize,T),it(t.origin,t.direction,p,T)}_intersectsNodeWithOffset(t,e,o){return w(e.bounds,2*-e.halfSize,p),w(e.bounds,2*e.halfSize,T),o.applyToMinMax(p,T),it(t.origin,t.direction,p,T)}_intersectsObject(t,e){const o=this._objectToBoundingSphere(e);return!(o[3]>0)||st(o,t)}_intersectsObjectWithOffset(t,e,o){const n=this._objectToBoundingSphere(e);return!(n[3]>0)||st(o.applyToBoundingSphere(n),t)}_forEachNode(t,e){let o=c.acquire().init(t);const n=[o];for(;n.length!==0;){if(o=n.pop(),e(o)&&!o.isLeaf())for(let r=0;r<o.node.children.length;r++)o.node.children[r]&&n.push(c.acquire().init(o).advance(r));c.release(o)}}_forEachNodeDepthOrdered(t,e,o,n=B.DepthOrder.FRONT_TO_BACK){let r=c.acquire().init(t);const h=[r];for(Pt(o,n,_t);h.length!==0;){if(r=h.pop(),e(r)&&!r.isLeaf())for(let s=7;s>=0;--s){const a=_t[s];r.node.children[a]&&h.push(c.acquire().init(r).advance(a))}c.release(r)}}_remove(t,e,o){M.clear();const n=o.advanceTo(e,(r,h)=>{M.push(r.node),M.push(h)})?o.node.terminals:o.node.residents;if(n.removeUnordered(t),n.length===0)for(let r=M.length-2;r>=0;r-=2){const h=M.data[r],s=M.data[r+1];if(!this._purge(h,s))break}}_nodeIsEmpty(t){if(t.terminals.length!==0)return!1;if(t.residents!==null)return t.residents.length===0;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(t.residents===null&&(t.residents=new v({shrink:!0})),!0)}_add(t,e){e.advanceTo(this._objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let o=0;o<e.length;o++){const n=c.acquire().init(t);this._add(e.getItemAt(o),n),c.release(n)}}_grow(t,e){if(e!==0&&(lt(t,e,o=>this._objectToBoundingSphere(o),b),P(b[3])&&!this._fitsInsideTree(b)))if(this._nodeIsEmpty(this._root.node))z(b,this._root.bounds),this._root.halfSize=1.25*b[3];else{const o=this._rootBoundsForRootAsSubNode(b);this._placingRootViolatesMaxDepth(o)?this._rebuildTree(b,o):this._growRootAsSubNode(o),c.release(o)}}_rebuildTree(t,e){et(k,e.bounds),k[3]=e.halfSize,lt([t,k],2,n=>n,U);const o=c.acquire().init(this._root);this._root.initFrom(null,U,1.25*U[3]),this._forEachNode(o,n=>(this.add(n.node.terminals.data,n.node.terminals.length),n.node.residents!==null&&this.add(n.node.residents.data,n.node.residents.length),!0)),c.release(o)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let o=0;return this._forEachNode(this._root,n=>(o=Math.max(o,n.depth),o+e<=this._maximumDepth)),o+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],o=t;let n=-1/0;const r=this._root.bounds,h=this._root.halfSize;for(let s=0;s<3;s++){const a=r[s]-h-(o[s]-e),u=o[s]+e-(r[s]+h),_=Math.max(0,Math.ceil(a/(2*h))),l=Math.max(0,Math.ceil(u/(2*h)))+1,O=2**Math.ceil(Math.log(_+l)*Math.LOG2E);n=Math.max(n,O),y[s].min=_,y[s].max=l}for(let s=0;s<3;s++){let a=y[s].min,u=y[s].max;const _=(n-(a+u))/2;a+=Math.ceil(_),u+=Math.floor(_);const l=r[s]-h-a*h*2;V[s]=l+(u+a)*h}return V[3]=n*h*Ot,c.acquire().initFrom(null,V,n*h,0)}_growRootAsSubNode(t){const e=this._root.node;et(b,this._root.bounds),b[3]=this._root.halfSize,this._root.init(t),t.advanceTo(b,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(t===-1)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(this._root.node.terminals.length!==0||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let o=0,n=0;for(;n<e.length&&t==null;)o=n++,t=e[o];for(;n<e.length;)if(e[n++])return-1;return o}_isDegenerate(t){return!P(this._objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,o=this._root.halfSize;return t[3]<=o&&t[0]>=e[0]-o&&t[0]<=e[0]+o&&t[1]>=e[1]-o&&t[1]<=e[1]+o&&t[2]>=e[2]-o&&t[2]<=e[2]+o}}class c{constructor(){this.bounds=S(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,o,n=this.depth){return this.node=W(t)?t:c.createEmptyNode(),W(e)&&z(e,this.bounds),this.halfSize=o,this.depth=n,this}advance(t){let e=this.node.children[t];e||(e=c.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const o=Tt[t];return this.bounds[0]+=o[0]*this.halfSize,this.bounds[1]+=o[1]*this.halfSize,this.bounds[2]+=o[2]*this.halfSize,this.bounds[3]=this.halfSize*Ot,this}advanceTo(t,e,o=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!o)return e&&e(this,-1),!1;this.node.residents=null}const n=this._childIndex(t);e&&e(this,n),this.advance(n)}}isLeaf(){return this.node.residents!=null}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new v({shrink:!0}),residents:new v({shrink:!0})}}static acquire(){return c._pool.acquire()}static release(t){c._pool.release(t)}static clearPool(){c._pool.prune()}}function It(i,t){i[0]=Math.min(i[0],t[0]-t[3]),i[1]=Math.min(i[1],t[1]-t[3]),i[2]=Math.min(i[2],t[2]-t[3])}function Lt(i,t){i[0]=Math.max(i[0],t[0]+t[3]),i[1]=Math.max(i[1],t[1]+t[3]),i[2]=Math.max(i[2],t[2]+t[3])}function w(i,t,e){e[0]=i[0]+t,e[1]=i[1]+t,e[2]=i[2]+t}function lt(i,t,e,o){if(t===1){const n=e(i[0]);z(n,o)}else{p[0]=1/0,p[1]=1/0,p[2]=1/0,T[0]=-1/0,T[1]=-1/0,T[2]=-1/0;for(let n=0;n<t;n++){const r=e(i[n]);P(r[3])&&(It(p,r),Lt(T,r))}Mt(o,p,T,.5),o[3]=Math.max(T[0]-p[0],T[1]-p[1],T[2]-p[2])/2}}function Pt(i,t,e){if(!x.length)for(let o=0;o<8;++o)x.push({index:0,distance:0});for(let o=0;o<8;++o){const n=Tt[o];x.data[o].index=o,x.data[o].distance=A(i,t,n)}x.sort((o,n)=>o.distance-n.distance);for(let o=0;o<8;++o)e[o]=x.data[o].index}function q(i,t){let e,o=1/0;for(let n=0;n<8;++n){const r=A(i,t,ut[n]);r<o&&(o=r,e=ut[n])}return e}function A(i,t,e){return t*(i[0]*e[0]+i[1]*e[1]+i[2]*e[2])}function P(i){return!isNaN(i)&&i!==-1/0&&i!==1/0&&i>0}c._pool=new Ft(c),function(i){var t;(t=i.DepthOrder||(i.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(B||(B={}));const Tt=[f(-1,-1,-1),f(1,-1,-1),f(-1,1,-1),f(1,1,-1),f(-1,-1,1),f(1,-1,1),f(-1,1,1),f(1,1,1)],ut=[f(-1,-1,-1),f(-1,-1,1),f(-1,1,-1),f(-1,1,1),f(1,-1,-1),f(1,-1,1),f(1,1,-1),f(1,1,1)],Ot=Math.sqrt(3),J=[null];function vt(i){return J[0]=i,J}const V=S(),g=N(),p=N(),T=N(),M=new v,Ct=S(),b=S(),k=S(),U=S(),y=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],x=new v,_t=[0,0,0,0,0,0,0,0],mt=B,$t=1e3;function wt(i,t,e){const o=S(),n=F(o);return ot(n,n,i,.5),ot(n,n,t,.5),o[3]=K(n,i),j(n,n,e),o}let Q=class{constructor(){this._idToComponent=new Map,this._components=new mt(i=>i.bounds),this._edges=new mt(i=>i.bounds),this._tmpLineSegment=xt(),this._tmpP1=N(),this._tmpP2=N(),this._tmpP3=N(),this.remoteClient=null}async fetchCandidates(i,t){await Promise.resolve(),Nt(t),await this._ensureEdgeLocations(i,t);const e=[];return this._edges.forEachNeighbor(o=>(this._addCandidates(i,o,e),e.length<$t),i.bounds),{result:{candidates:e}}}async _ensureEdgeLocations(i,t){const e=[];if(this._components.forEachNeighbor(r=>{if(Z(r.info)){const{id:h,uid:s}=r;e.push({id:h,uid:s})}return!0},i.bounds),!e.length)return;const o={components:e},n=await this.remoteClient.invoke("fetchAllEdgeLocations",o,At(t,{}));for(const r of n.components)this._setFetchEdgeLocations(r)}async add(i){const t=new D(i.id,i.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(i){const t=this._idToComponent.get(i.id);if(t){const e=[];this._edges.forEachNeighbor(o=>(o.component===t&&e.push(o),!0),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id)}return{result:{}}}_setFetchEdgeLocations(i){const t=this._idToComponent.get(i.id);if(Z(t)||i.uid!==t.uid)return;const e=Bt.createView(i.locations),o=new Array(e.count),n=N(),r=N();for(let a=0;a<e.count;a++){e.position0.getVec(a,n),e.position1.getVec(a,r);const u=wt(n,r,i.origin),_=new yt(t,a,u);o[a]=_}this._edges.add(o);const{objectIds:h,origin:s}=i;t.info={locations:e,objectIds:h,origin:s}}_addCandidates(i,t,e){const{locations:o,origin:n,objectIds:r}=t.component.info,h=o.position0.getVec(t.index,this._tmpP1),s=o.position1.getVec(t.index,this._tmpP2);j(h,h,n),j(s,s,n);const a=r[o.componentIndex.get(t.index)];this._addEdgeCandidate(i,a,h,s,e),this._addVertexCandidate(i,a,h,e),this._addVertexCandidate(i,a,s,e)}_addEdgeCandidate(i,t,e,o,n){if(!(i.types&at.EDGE))return;const r=F(i.bounds),h=St(e,o,this._tmpLineSegment),s=jt(h,r,this._tmpP3);if(!ht(i.bounds,s))return null;n.push({type:"edge",objectId:t,target:C(s),distance:K(r,s),start:C(e),end:C(o)})}_addVertexCandidate(i,t,e,o){if(!(i.types&at.VERTEX))return;const n=F(i.bounds);if(!ht(i.bounds,e))return null;o.push({type:"vertex",objectId:t,target:C(e),distance:K(n,e)})}};Q=Et([Rt("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],Q);const We=Q;class D{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++D.uid}}D.uid=0;class yt{constructor(t,e,o){this.component=t,this.index=e,this.bounds=o}}export{We as default};
