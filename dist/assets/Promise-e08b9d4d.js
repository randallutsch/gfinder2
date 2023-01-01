import{e as n,n as m,m as a}from"./cast-7ef3a066.js";import{x as u}from"./typedArrayUtil-4015bf74.js";import{A as l,a as P,j as p}from"./promiseUtils-e323addc.js";var r;(function(i){i[i.PENDING=0]="PENDING",i[i.RESOLVED=1]="RESOLVED",i[i.REJECTED=2]="REJECTED"})(r||(r={}));class c{constructor(e){this.instance=e,this._resolver=l(),this._status=r.PENDING,this._resolvingPromises=[],this._resolver.promise.then(()=>{this._status=r.RESOLVED,this._cleanUp()},()=>{this._status=r.REJECTED,this._cleanUp()})}addResolvingPromise(e){this._resolvingPromises.push(e),this._tryResolve()}isResolved(){return this._status===r.RESOLVED}isRejected(){return this._status===r.REJECTED}isFulfilled(){return this._status!==r.PENDING}abort(){this._resolver.reject(P())}when(e,s){return this._resolver.promise.then(e,s)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null}_tryResolve(){if(this.isFulfilled())return;const e=l(),s=[...this._resolvingPromises,u(e.promise)],t=this._allPromise=Promise.all(s);t.then(()=>{this.isFulfilled()||this._allPromise!==t||this._resolver.resolve(this.instance)},o=>{this.isFulfilled()||this._allPromise!==t||p(o)||this._resolver.reject(o)}),e.resolve()}}const E=i=>{let e=class extends i{constructor(...s){super(...s),this._promiseProps=new c(this),this.addResolvingPromise(Promise.resolve())}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(s,t){return new Promise((o,_)=>{this._promiseProps.when(o,_)}).then(s,t)}catch(s){return this.when(null,s)}addResolvingPromise(s){s&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in s?s.when():s)}};return e=n([m("esri.core.Promise")],e),e};let h=class extends E(a){};h=n([m("esri.core.Promise")],h);export{h as _,E as m};
