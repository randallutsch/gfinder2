import{r as l,e as p,P as $,G as h,g as w,a as j,u as x}from"./mathUtils-daf59e84.js";import{s as A,c as E}from"./sphere-f2946ba2.js";import{t as m,n as a}from"./common-701a4199.js";import"./vec2f64-e0301652.js";import"./vec4f64-018b3fa6.js";function v(r){return r?{origin:m(r.origin),vector:m(r.vector)}:{origin:a(),vector:a()}}function y(r,o,e=v()){return l(e.origin,r),p(e.vector,o,r),e}function z(r,o,e){return b(r,o,0,1,e)}function b(r,o,e,f,n){const{vector:i,origin:t}=r,s=p(E.get(),o,t),c=$(i,s)/h(i);return w(n,i,j(c,e,f)),x(n,n,r.origin)}new A(()=>v());class k{constructor(o){this.message=o}toString(){return`AssertException: ${this.message}`}}function B(r,o){if(!r)throw o=o||"assert",console.log(new Error(o).stack),new k(o)}function C(r,o,e,f){let n,i=(e[0]-r[0])/o[0],t=(f[0]-r[0])/o[0];i>t&&(n=i,i=t,t=n);let s=(e[1]-r[1])/o[1],c=(f[1]-r[1])/o[1];if(s>c&&(n=s,s=c,c=n),i>c||s>t)return!1;s>i&&(i=s),c<t&&(t=c);let g=(e[2]-r[2])/o[2],u=(f[2]-r[2])/o[2];return g>u&&(n=g,g=u,u=n),!(i>u||g>t)&&(u<t&&(t=u),!(t<0))}export{y as b,C as c,B as e,z as j,v};
