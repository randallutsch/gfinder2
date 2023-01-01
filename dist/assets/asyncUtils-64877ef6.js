import{e as n,y as i,n as c,m}from"./cast-34ff1fab.js";import{t as _,v as y,r as l,m as f}from"./typedArrayUtil-6bfe4dae.js";import{v as b,E as h,w as d}from"./promiseUtils-281d25c9.js";import"./ensureType-abaf235a.js";function H(t,r,s){return h(t.map((o,a)=>r.apply(s,[o,a])))}async function j(t,r,s){return(await h(t.map((o,a)=>r.apply(s,[o,a])))).map(o=>o.value)}function u(t){return{ok:!0,value:t}}function p(t){return{ok:!1,error:t}}function v(t){return l(t)&&t.ok===!0?t.value:null}function w(t){return l(t)&&t.ok===!1?t.error:null}async function x(t){if(_(t))return{ok:!1,error:new Error("no promise provided")};try{return u(await t)}catch(r){return p(r)}}async function A(t){try{return u(await t)}catch(r){return d(r),p(r)}}function E(t,r){return new e(t,r)}let e=class extends m{constructor(t,r){super({}),this._result=null,this._abortHandle=null,this.abort=()=>{this._abortController=y(this._abortController)},this.remove=this.abort,this._abortController=new AbortController;const{signal:s}=this._abortController;this.promise=t(s),this.promise.then(o=>{this._result=u(o),this._cleanup()},o=>{this._result=p(o),this._cleanup()}),this._abortHandle=b(r,this.abort)}get value(){return v(this._result)}get error(){return w(this._result)}get finished(){return l(this._result)}normalizeCtorArgs(){return{}}destroy(){this.abort()}_cleanup(){this._abortHandle=f(this._abortHandle),this._abortController=null}};n([i()],e.prototype,"value",null),n([i()],e.prototype,"error",null),n([i()],e.prototype,"finished",null),n([i()],e.prototype,"promise",void 0),n([i()],e.prototype,"_result",void 0),e=n([c("esri.core.asyncUtils.ReactiveTask")],e);export{x as b,H as c,A as d,j as h,E as j};