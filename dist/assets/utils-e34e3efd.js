import{a as F,l as x}from"./generateRendererUtils-8612ca33.js";const D="<Null>",z="equal-interval",I=1,N=5,S=10,M=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,V=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),C=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function b(t){return t==null||typeof t=="string"&&!t?D:t}function k(t){const e=t.normalizationField!=null||t.normalizationType!=null,l=t.minValue!=null||t.maxValue!=null,a=!!t.sqlExpression&&t.supportsSQLExpression;return!e&&!l&&!a}function L(t){const e=t.returnDistinct?[...new Set(t.values)]:t.values,l=e.filter(o=>o!=null).length,a={count:l};return t.supportsNullCount&&(a.nullcount=e.length-l),t.percentileParams&&(a.median=y(e,t.percentileParams)),a}function $(t){const{values:e,useSampleStdDev:l,supportsNullCount:a}=t;let o=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,n=null,r=null,s=null,f=null,u=0;const c=t.minValue==null?-1/0:t.minValue,d=t.maxValue==null?1/0:t.maxValue;for(const m of e)Number.isFinite(m)?m>=c&&m<=d&&(n+=m,o=Math.min(o,m),i=Math.max(i,m),u++):typeof m=="string"&&u++;if(u&&n!=null){r=n/u;let m=0;for(const v of e)Number.isFinite(v)&&v>=c&&v<=d&&(m+=(v-r)**2);f=l?u>1?m/(u-1):0:u>0?m/u:0,s=Math.sqrt(f)}else o=null,i=null;const p={avg:r,count:u,max:i,min:o,stddev:s,sum:n,variance:f};return a&&(p.nullcount=e.length-u),t.percentileParams&&(p.median=y(e,t.percentileParams)),p}function y(t,e){const{fieldType:l,value:a,orderBy:o,isDiscrete:i}=e,n=w(l,o==="desc");if((t=[...t].filter(p=>p!=null).sort((p,m)=>n(p,m))).length===0)return null;if(a<=0)return t[0];if(a>=1)return t[t.length-1];const r=(t.length-1)*a,s=Math.floor(r),f=s+1,u=r%1,c=t[s],d=t[f];return f>=t.length||i||typeof c=="string"||typeof d=="string"?c:c*(1-u)+d*u}function w(t,e){const l=e?1:-1,a=E(e),o=g(e);if(!(t&&["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...V].includes(t)))return(i,n)=>typeof i=="number"&&typeof n=="number"?a(i,n):typeof i=="string"&&typeof n=="string"?o(i,n):l;if(t==="esriFieldTypeDate")return(i,n)=>{const r=new Date(i).getTime(),s=new Date(n).getTime();return isNaN(r)||isNaN(s)?l:a(r,s)};if(V.has(t))return(i,n)=>a(i,n);if(t==="esriFieldTypeString")return(i,n)=>o(i,n);if(t==="esriFieldTypeGUID"||t==="esriFieldTypeGlobalID"){const i=g(e);return(n,r)=>i(T(n),T(r))}return e?(i,n)=>1:(i,n)=>-1}function g(t){return t?(e,l)=>(e=e==null?void 0:e.toUpperCase(),l=l==null?void 0:l.toUpperCase(),e>l?-1:e<l?1:0):(e,l)=>(e=e==null?void 0:e.toUpperCase(),l=l==null?void 0:l.toUpperCase(),e<l?-1:e>l?1:0)}function E(t){return t?(e,l)=>l-e:(e,l)=>e-l}function T(t){return t.substr(24,12)+t.substr(19,4)+t.substr(16,2)+t.substr(14,2)+t.substr(11,2)+t.substr(9,2)+t.substr(6,2)+t.substr(4,2)+t.substr(2,2)+t.substr(0,2)}function Y(t,e){let l;for(l in t)C.includes(l)&&(Number.isFinite(t[l])||(t[l]=null));return e&&["avg","stddev","variance"].forEach(a=>{t[a]!=null&&(t[a]=Math.ceil(t[a]))}),t}function _(t){const e={};for(let l of t)(l==null||typeof l=="string"&&l.trim()==="")&&(l=null),e[l]==null?e[l]={count:1,data:l}:e[l].count++;return{count:e}}function h(t){return(t==null?void 0:t.type)!=="coded-value"?[]:t.codedValues.map(e=>e.code)}function Q(t,e,l,a){const o=t.count,i=[];if(l&&e){const n=[],r=h(e[0]);for(const s of r)if(e[1]){const f=h(e[1]);for(const u of f)if(e[2]){const c=h(e[2]);for(const d of c)n.push(`${b(s)}${a}${b(u)}${a}${b(d)}`)}else n.push(`${b(s)}${a}${b(u)}`)}else n.push(s);for(const s of n)o.hasOwnProperty(s)||(o[s]={data:s,count:0})}for(const n in o){const r=o[n];i.push({value:r.data,count:r.count,label:r.label})}return{uniqueValueInfos:i}}function j(t,e,l,a){let o=null;switch(e){case"log":t!==0&&(o=Math.log(t)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(a)&&a!==0&&(o=t/a*100);break;case"field":Number.isFinite(l)&&l!==0&&(o=t/l);break;case"natural-log":t>0&&(o=Math.log(t));break;case"square-root":t>0&&(o=t**.5)}return o}function q(t,e){const l=P({field:e.field,normalizationType:e.normalizationType,normalizationField:e.normalizationField,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numClasses||N});return t=G(t,e.minValue,e.maxValue),F({definition:l,values:t,normalizationTotal:e.normalizationTotal})}function G(t,e,l){return e=e??-1/0,l=l??1/0,t.filter(a=>Number.isFinite(a)&&a>=e&&a<=l)}function P(t){const e=t.field,l=t.classificationMethod||z,a=t.normalizationType,o=t.normalizationField,i=new x;return i.classificationField=e,i.breakCount=t.breakCount,i.classificationMethod=l,i.standardDeviationInterval=l==="standard-deviation"?t.standardDeviationInterval||I:void 0,i.normalizationType=a,i.normalizationField=a==="field"?o:void 0,i}function H(t,e){let l=t.classBreaks;const a=l.length,o=l[0].minValue,i=l[a-1].maxValue,n=e==="standard-deviation",r=M;return l=l.map(s=>{const f=s.label,u={minValue:s.minValue,maxValue:s.maxValue,label:f};if(n&&f){const c=f.match(r).map(d=>+d.trim());c.length===2?(u.minStdDev=c[0],u.maxStdDev=c[1],c[0]<0&&c[1]>0&&(u.hasAvg=!0)):c.length===1&&(f.includes("<")?(u.minStdDev=null,u.maxStdDev=c[0]):f.includes(">")&&(u.minStdDev=c[0],u.maxStdDev=null))}return u}),{minValue:o,maxValue:i,classBreakInfos:l,normalizationTotal:t.normalizationTotal}}function J(t,e){const{min:l,max:a,intervals:o}=U(t,e),i=o.map((n,r)=>({minValue:o[r][0],maxValue:o[r][1],count:0}));for(const n of t)if(n!=null&&n>=l&&n<=a){const r=B(o,n);r>-1&&i[r].count++}return{bins:i,minValue:l,maxValue:a,normalizationTotal:e.normalizationTotal}}function U(t,e){const{field:l,classificationMethod:a,standardDeviationInterval:o,normalizationType:i,normalizationField:n,normalizationTotal:r,minValue:s,maxValue:f}=e,u=e.numBins||S;let c=null,d=null,p=null;if((!a||a==="equal-interval")&&!i){if(s!=null&&f!=null)c=s,d=f;else{const m=$({values:t,minValue:s,maxValue:f,useSampleStdDev:!i,supportsNullCount:k({normalizationType:i,normalizationField:n,minValue:s,maxValue:f})});c=m.min,d=m.max}p=O(c,d,u)}else{const{classBreaks:m}=q(t,{field:l,normalizationType:i,normalizationField:n,normalizationTotal:r,classificationMethod:a,standardDeviationInterval:o,minValue:s,maxValue:f,numClasses:u});c=m[0].minValue,d=m[m.length-1].maxValue,p=m.map(v=>[v.minValue,v.maxValue])}return{min:c,max:d,intervals:p}}function B(t,e){let l=-1;for(let a=t.length-1;a>=0;a--)if(e>=t[a][0]){l=a;break}return l}function O(t,e,l){const a=(e-t)/l,o=[];let i,n=t;for(let r=1;r<=l;r++)i=n+a,i=Number(i.toFixed(16)),o.push([n,r===l?e:i]),n=i;return o}export{q as D,Q as F,H as N,J as S,_ as T,Y as V,b as c,$ as d,L as f,k as m,y as p,w as v,j as x};
