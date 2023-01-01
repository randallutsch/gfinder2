import{e as n,y as i,n as c,m as _}from"./cast-7ef3a066.js";import{t as m,p as y,r as l,h as f}from"./typedArrayUtil-4015bf74.js";import{E as p,v as b,w as d}from"./promiseUtils-e323addc.js";import"./ArrayPool-45db95ab.js";function H(t,r,s){return p(t.map((o,a)=>r.apply(s,[o,a])))}async function j(t,r,s){return(await p(t.map((o,a)=>r.apply(s,[o,a])))).map(o=>o.value)}function u(t){return{ok:!0,value:t}}function h(t){return{ok:!1,error:t}}function v(t){return l(t)&&t.ok===!0?t.value:null}function w(t){return l(t)&&t.ok===!1?t.error:null}async function x(t){if(m(t))return{ok:!1,error:new Error("no promise provided")};try{return u(await t)}catch(r){return h(r)}}async function A(t){try{return u(await t)}catch(r){return d(r),h(r)}}function E(t,r){return new e(t,r)}let e=class extends _{constructor(t,r){super({}),this._result=null,this._abortHandle=null,this.abort=()=>{this._abortController=y(this._abortController)},this.remove=this.abort,this._abortController=new AbortController;const{signal:s}=this._abortController;this.promise=t(s),this.promise.then(o=>{this._result=u(o),this._cleanup()},o=>{this._result=h(o),this._cleanup()}),this._abortHandle=b(r,this.abort)}get value(){return v(this._result)}get error(){return w(this._result)}get finished(){return l(this._result)}normalizeCtorArgs(){return{}}destroy(){this.abort()}_cleanup(){this._abortHandle=f(this._abortHandle),this._abortController=null}};n([i()],e.prototype,"value",null),n([i()],e.prototype,"error",null),n([i()],e.prototype,"finished",null),n([i()],e.prototype,"promise",void 0),n([i()],e.prototype,"_result",void 0),e=n([c("esri.core.asyncUtils.ReactiveTask")],e);export{x as b,H as c,A as d,j as h,E as j};
