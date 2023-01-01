import{e as q}from"./mat3f32-d3d088e8.js";import{e as _,y as m,n as U,m as B}from"./cast-7ef3a066.js";import{h as N,y as S}from"./string-7d6c8f5c.js";import{s as M,a as P}from"./Error-1dfe2922.js";import"./ArrayPool-45db95ab.js";import{d as G,n as Y,e as z}from"./parser-60fed632.js";import{n as L}from"./Evented-7dfb249a.js";import{t as k,r as E}from"./typedArrayUtil-4015bf74.js";import{D as C}from"./promiseUtils-e323addc.js";import{E as A,S as V}from"./enums-4ca4641f.js";import{U as j}from"./MaterialKey-13d5dd3c.js";import{b as y}from"./Utils-69437480.js";import{r as W,s as D}from"./enums-ef042d89.js";import{C as c}from"./enums-64ab819c.js";import{u as $}from"./screenUtils-7afeb41c.js";import{u as K}from"./heatmapUtils-90a13d85.js";import{l as J}from"./Color-7a3d8c62.js";const R=-1;let p=class extends B{constructor(s){super(s),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=N("mapview-transitions-duration"),this.effects=[]}set effect(s){if(this._get("effect")!==(s=s||"")){this._set("effect",s);try{this._transitionTo(x(s))}catch(e){this._transitionTo([]),M.getLogger(this.declaredClass).warn("Invalid Effect",{effect:s,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(s){this._updateForScale(s)}get transitioning(){return this._to!==null}canTransitionTo(s){try{return this.scale>0&&F(this._current,x(s),this.scale)}catch{return!1}}transitionStep(s,e){this._applyTimeTransition(s),this._updateForScale(e)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(s){this.scale>0&&F(this._current,s,this.scale)?(this._final=s,this._to=S(s),Q(this._current,this._to,this.scale),this._from=S(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=s),this._set("effects",this._current[0]?S(this._current[0].effects):[])}_applyTimeTransition(s){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=s;const e=Math.min(1,this._time/this.duration);for(let t=0;t<this._current.length;t++){const i=this._current[t],a=this._from[t],o=this._to[t];i.scale=X(a.scale,o.scale,e);for(let r=0;r<i.effects.length;r++){const l=i.effects[r],n=a.effects[r],d=o.effects[r];l.interpolate(n,d,e)}}e===1&&(this._current=this._final,this._set("effects",this._current[0]?S(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(s){if(this._set("scale",s),this._current.length===0)return;const e=this._current,t=this._current.length-1;let i,a,o=1;if(e.length===1||s>=e[0].scale)a=i=e[0].effects;else if(s<=e[t].scale)a=i=e[t].effects;else for(let r=0;r<t;r++){const l=e[r],n=e[r+1];if(l.scale>=s&&n.scale<=s){o=(s-l.scale)/(n.scale-l.scale),i=l.effects,a=n.effects;break}}for(let r=0;r<this.effects.length;r++)this.effects[r].interpolate(i[r],a[r],o)}};function x(s){const e=G(s)||[];return Z(e)?[{scale:R,effects:e}]:e}function F(s,e,t){var i,a,o,r;return!((i=s[0])!=null&&i.effects)||!((a=e[0])!=null&&a.effects)?!0:!((((o=s[0])==null?void 0:o.scale)===R||((r=e[0])==null?void 0:r.scale)===R)&&(s.length>1||e.length>1)&&t<=0)&&Y(s[0].effects,e[0].effects)}function Q(s,e,t){const i=s.length>e.length?s:e,a=s.length>e.length?e:s,o=a[a.length-1],r=(o==null?void 0:o.scale)??t,l=(o==null?void 0:o.effects)??[];for(let n=a.length;n<i.length;n++)a.push({scale:r,effects:[...l]});for(let n=0;n<i.length;n++)a[n].scale=a[n].scale===R?t:a[n].scale,i[n].scale=i[n].scale===R?t:i[n].scale,z(a[n].effects,i[n].effects)}function X(s,e,t){return s+(e-s)*t}function Z(s){const e=s[0];return!!e&&"type"in e}_([m()],p.prototype,"_to",void 0),_([m()],p.prototype,"duration",void 0),_([m({value:""})],p.prototype,"effect",null),_([m({readOnly:!0})],p.prototype,"effects",void 0),_([m({readOnly:!0})],p.prototype,"hasEffects",null),_([m({value:0})],p.prototype,"scale",null),_([m({readOnly:!0})],p.prototype,"transitioning",null),p=_([U("esri.layers.effects.EffectView")],p);const ee=1/N("mapview-transitions-duration");let te=class extends L{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(e){this._clips=e,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(e){this._opacity!==e&&(this._opacity=Math.min(1,Math.max(e,0)),this.requestRender())}get stage(){return this._stage}set stage(e){if(this._stage===e)return;const t=this._stage;this._stage=e,e?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):t.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return k(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(e){this._visible!==e&&(this._visible=e,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=C(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=C(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){var e,t;(e=this._fadeInResolver)==null||e.call(this),this._fadeInResolver=null,(t=this._fadeOutResolver)==null||t.call(this),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(e){this.updateTransitionProperties(e.deltaTime,e.state.scale)}afterRender(e){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&this.computedOpacity===0&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var e;(e=this.parent)==null||e.removeChild(this)}setTransform(e){}processRender(e){this.stage&&this.computedVisible&&this.doRender(e)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(e,t){if(this.fadeTransitionEnabled){const i=this._fadeOutResolver||!this.visible?0:this.opacity,a=this.computedOpacity;if(a===i)this.computedVisible=this.visible;else{const o=e*ee;this.computedOpacity=a>i?Math.max(i,a-o):Math.min(i,a+o),this.computedVisible=this.computedOpacity>0;const r=i===this.computedOpacity;this.inFadeTransition=!r,r||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(e){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}};class ve extends te{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e)}get computedEffects(){var e;return((e=this._effectView)==null?void 0:e.effects)??null}get effect(){var e;return((e=this._effectView)==null?void 0:e.effect)??""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new p),this._effectView.effect=e,this.requestRender())}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender())}doRender(e){const t=this.createRenderParams(e);this.renderChildren(t)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e||this.contains(e))return e;this._needsSort=!0;const i=e.parent;return i&&i!==this&&i.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1)}beforeRender(e){super.beforeRender(e);for(const t of this.children)t.beforeRender(e)}afterRender(e){super.afterRender(e);for(const t of this.children)t.afterRender(e)}_createTransforms(){return{dvs:q()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const t of this.children)t.processRender(e)}createRenderParams(e){return{...e,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}class g{static getStorageSpec(e){return null}static createOrUpdateRendererSchema(e,t){return E(e)&&e.type==="default"?e:{type:"default"}}static getVariation(e){return{}}static getVariationHash(e){return 0}}g.type="default",g.programSpec=null;let b=class extends g{static getStorageSpec({attributes:e}){return{visualVariables:!1,attributes:e??null}}static _createRendererSchema(){return{type:"dot-density",colors:new Float32Array(32),dotValue:-1,dotSize:-1,dotScale:-1,dotBlending:!1,backgroundColor:new Float32Array(4),activeDots:new Float32Array(8),seed:-1}}static createOrUpdateRendererSchema(e,t){const{attributes:i,dotValue:a,referenceScale:o,dotSize:r,dotBlendingEnabled:l,seed:n,backgroundColor:d}=t,f=E(e)&&e.type==="dot-density"?e:this._createRendererSchema();f.dotValue=a,f.dotSize=r,f.dotScale=o,f.dotBlending=l,f.seed=n;const{colors:w,activeDots:v,backgroundColor:u}=f;for(let h=0;h<W;h++){const I=h>=i.length?null:i[h].color;y(w,I,4*h)}for(let h=0;h<8;h++)v[h]=h<t.attributes.length?1:0;return y(u,d),f}static getVariation(e){return{ddDotBlending:e.dotBlending}}static getVariationHash(e){return e.dotBlending?1:0}};b.type="dot-density",b.programSpec={shader:"materials/fill",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:c.SHORT},{location:1,name:"a_id",count:3,type:c.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:c.UNSIGNED_BYTE},{location:3,name:"a_inverseArea",count:1,type:c.FLOAT}]}};class O extends g{static getStorageSpec({field:e,valueExpression:t}){return{visualVariables:!1,attributes:e||t?[{field:e,valueExpression:t}]:null}}static _createRendererSchema(){return{type:"heatmap",radius:-1,referenceScale:-1,isFieldActive:0,minDensity:-1,densityRange:-1,kernel:null,gradient:null,gradientHash:"invalid"}}static createOrUpdateRendererSchema(e,t){const{radius:i,minDensity:a,maxDensity:o,referenceScale:r,field:l,valueExpression:n,colorStops:d}=t,f=o-a,w=l||n?1:0,v=d.map(({color:I,ratio:H})=>`${H}:${I.toString()}`).join();let u,h=!0;return E(e)&&e.type==="heatmap"?(u=e,h=v!==e.gradientHash):u=this._createRendererSchema(),u.radius=$(i),u.minDensity=a,u.densityRange=f,u.referenceScale=r,u.isFieldActive=w,h&&(u.gradient=K(d),u.gradientHash=v),u}}O.type="heatmap",O.programSpec={shader:"materials/icon/heatmapAccumulate",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:c.SHORT},{location:1,name:"a_vertexOffset",count:2,type:c.SHORT},{location:4,name:"a_id",count:4,type:c.UNSIGNED_BYTE}]}};class T extends g{static getStorageSpec({attributes:e}){return{visualVariables:!0,attributes:e??null}}static _createRendererSchema(){return{type:"pie-chart",colors:new Float32Array(4*D),defaultColor:new Float32Array(4),othersColor:new Float32Array(4),outlineColor:new Float32Array(4),holePercentage:0,sectorThreshold:0,outlineWidth:1,numberOfFields:10}}static createOrUpdateRendererSchema(e,t){const{attributes:i,defaultColor:a,holePercentage:o,othersCategory:r,outline:l}=t,n=E(e)&&e.type==="pie-chart"?e:this._createRendererSchema();for(let d=0;d<D;d++){const f=d>=i.length?new J([0,0,0,0]):i[d].color;y(n.colors,f,4*d)}return y(n.defaultColor,a),y(n.othersColor,r==null?void 0:r.color),y(n.outlineColor,l==null?void 0:l.color),n.outlineWidth=$((l==null?void 0:l.width)||0),n.holePercentage=o,n.sectorThreshold=(r==null?void 0:r.threshold)||0,n.numberOfFields=i.length,n}static getVariation(e){return{numberOfFields:e.numberOfFields}}static getVariationHash(e){return e.numberOfFields}}T.type="pie-chart",T.programSpec={shader:"materials/pie",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:c.SHORT},{location:1,name:"a_vertexOffset",count:2,type:c.SHORT},{location:2,name:"a_texCoords",count:2,type:c.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:c.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:c.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:c.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:c.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:c.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:c.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]};function be(s,e){if(s.type!==e)throw new P("material-view-model:unexpected-renderer-schema",`expected to find renderer schema of type "${e}" but found type "${s.type}"`)}function Oe(s){switch(s==null?void 0:s.type){case"dot-density":return b;case"heatmap":return O;case"pie-chart":return T;default:return g}}function Te(s){const{geometryType:e,symbologyType:t}=j.load(s);switch(e){case A.FILL:if(t===V.DOT_DENSITY)return b;break;case A.MARKER:switch(t){case V.HEATMAP:return O;case V.PIE_CHART:return T}}return g}export{p as a,Oe as c,g as e,ve as i,Te as p,te as r,be as s};