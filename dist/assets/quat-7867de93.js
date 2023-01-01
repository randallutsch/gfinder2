import{e as Y}from"./mat3f64-b33e332c.js";import{e as I}from"./quatf64-7fd38d64.js";import{b as _,n as D,a as b,c as L}from"./common-701a4199.js";import{h as O,d as S,k as T,n as k,y as W,j as X,p as Z,q as w,v as B,D as C,E as F,P as G,_ as g,Y as H,z as J}from"./mathUtils-daf59e84.js";function K(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function A(n,o,a){a*=.5;const r=Math.sin(a);return n[0]=r*o[0],n[1]=r*o[1],n[2]=r*o[2],n[3]=Math.cos(a),n}function N(n,o){const a=2*Math.acos(o[3]),r=Math.sin(a/2);return r>_()?(n[0]=o[0]/r,n[1]=o[1]/r,n[2]=o[2]/r):(n[0]=1,n[1]=0,n[2]=0),a}function v(n,o,a){const r=o[0],e=o[1],c=o[2],t=o[3],u=a[0],i=a[1],h=a[2],M=a[3];return n[0]=r*M+t*u+e*h-c*i,n[1]=e*M+t*i+c*u-r*h,n[2]=c*M+t*h+r*i-e*u,n[3]=t*M-r*u-e*i-c*h,n}function Q(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i+t*u,n[1]=e*i+c*u,n[2]=c*i-e*u,n[3]=t*i-r*u,n}function R(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i-c*u,n[1]=e*i+t*u,n[2]=c*i+r*u,n[3]=t*i-e*u,n}function U(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i+e*u,n[1]=e*i-r*u,n[2]=c*i+t*u,n[3]=t*i-c*u,n}function V(n,o){const a=o[0],r=o[1],e=o[2];return n[0]=a,n[1]=r,n[2]=e,n[3]=Math.sqrt(Math.abs(1-a*a-r*r-e*e)),n}function d(n,o,a,r){const e=o[0],c=o[1],t=o[2],u=o[3];let i,h,M,f,l,m=a[0],p=a[1],q=a[2],$=a[3];return h=e*m+c*p+t*q+u*$,h<0&&(h=-h,m=-m,p=-p,q=-q,$=-$),1-h>_()?(i=Math.acos(h),M=Math.sin(i),f=Math.sin((1-r)*i)/M,l=Math.sin(r*i)/M):(f=1-r,l=r),n[0]=f*e+l*m,n[1]=f*c+l*p,n[2]=f*t+l*q,n[3]=f*u+l*$,n}function nn(n){const o=L,a=o(),r=o(),e=o(),c=Math.sqrt(1-a),t=Math.sqrt(a);return n[0]=c*Math.sin(2*Math.PI*r),n[1]=c*Math.cos(2*Math.PI*r),n[2]=t*Math.sin(2*Math.PI*e),n[3]=t*Math.cos(2*Math.PI*e),n}function on(n,o){const a=o[0],r=o[1],e=o[2],c=o[3],t=a*a+r*r+e*e+c*c,u=t?1/t:0;return n[0]=-a*u,n[1]=-r*u,n[2]=-e*u,n[3]=c*u,n}function rn(n,o){return n[0]=-o[0],n[1]=-o[1],n[2]=-o[2],n[3]=o[3],n}function z(n,o){const a=o[0]+o[4]+o[8];let r;if(a>0)r=Math.sqrt(a+1),n[3]=.5*r,r=.5/r,n[0]=(o[5]-o[7])*r,n[1]=(o[6]-o[2])*r,n[2]=(o[1]-o[3])*r;else{let e=0;o[4]>o[0]&&(e=1),o[8]>o[3*e+e]&&(e=2);const c=(e+1)%3,t=(e+2)%3;r=Math.sqrt(o[3*e+e]-o[3*c+c]-o[3*t+t]+1),n[e]=.5*r,r=.5/r,n[3]=(o[3*c+t]-o[3*t+c])*r,n[c]=(o[3*c+e]+o[3*e+c])*r,n[t]=(o[3*t+e]+o[3*e+t])*r}return n}function en(n,o,a,r){const e=.5*Math.PI/180;o*=e,a*=e,r*=e;const c=Math.sin(o),t=Math.cos(o),u=Math.sin(a),i=Math.cos(a),h=Math.sin(r),M=Math.cos(r);return n[0]=c*i*M-t*u*h,n[1]=t*u*M+c*i*h,n[2]=t*i*h-c*u*M,n[3]=t*i*M+c*u*h,n}function an(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const cn=O,tn=S,un=T,hn=v,Mn=k,sn=W,fn=X,E=Z,ln=E,j=w,mn=j,y=B,pn=C,qn=F;function $n(n,o,a){const r=G(o,a);return r<-.999999?(g(s,dn,o),H(s)<1e-6&&g(s,gn,o),J(s,s),A(n,s,Math.PI),n):r>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(g(s,o,a),n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=1+r,y(n,n))}const s=D(),dn=b(1,0,0),gn=b(0,1,0);function yn(n,o,a,r,e,c){return d(P,o,e,c),d(x,a,r,c),d(n,P,x,2*c*(1-c)),n}const P=I(),x=I();function Pn(n,o,a,r){const e=xn;return e[0]=a[0],e[3]=a[1],e[6]=a[2],e[1]=r[0],e[4]=r[1],e[7]=r[2],e[2]=-o[0],e[5]=-o[1],e[8]=-o[2],y(n,z(n,e))}const xn=Y();Object.freeze(Object.defineProperty({__proto__:null,identity:K,setAxisAngle:A,getAxisAngle:N,multiply:v,rotateX:Q,rotateY:R,rotateZ:U,calculateW:V,slerp:d,random:nn,invert:on,conjugate:rn,fromMat3:z,fromEuler:en,str:an,copy:cn,set:tn,add:un,mul:hn,scale:Mn,dot:sn,lerp:fn,length:E,len:ln,squaredLength:j,sqrLen:mn,normalize:y,exactEquals:pn,equals:qn,rotationTo:$n,sqlerp:yn,setAxes:Pn},Symbol.toStringTag,{value:"Module"}));export{pn as K,rn as S,en as k,A as v,N as x,v as y};
