import{e as v,y as V,n as z,l as I}from"./cast-34ff1fab.js";import{s as q}from"./jsonMap-92eea954.js";import"./typedArrayUtil-6bfe4dae.js";import"./ensureType-abaf235a.js";import{m as D,p as F}from"./colorRamps-d6116b89.js";import{a as B}from"./Symbol-8a110cc7.js";import{s as N}from"./Error-e5869661.js";const S=new q({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let x=class extends I{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null}};v([V({type:B,json:{write:!0}})],x.prototype,"baseSymbol",void 0),v([V({types:D,json:{read:{reader:F},write:!0}})],x.prototype,"colorRamp",void 0),v([V({json:{read:S.read,write:S.write}})],x.prototype,"type",void 0),x=v([z("esri.rest.support.ClassificationDefinition")],x);const T=x,$=new q({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),C=new q({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let y=class extends T{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition"}set standardDeviationInterval(t){this.classificationMethod==="standard-deviation"&&this._set("standardDeviationInterval",t)}set definedInterval(t){this.classificationMethod==="defined-interval"&&this._set("definedInterval",t)}};v([V({json:{write:!0}})],y.prototype,"breakCount",void 0),v([V({json:{write:!0}})],y.prototype,"classificationField",void 0),v([V({type:String,json:{read:$.read,write:$.write}})],y.prototype,"classificationMethod",void 0),v([V({json:{write:!0}})],y.prototype,"normalizationField",void 0),v([V({json:{read:C.read,write:C.write}})],y.prototype,"normalizationType",void 0),v([V({value:null,json:{write:!0}})],y.prototype,"standardDeviationInterval",null),v([V({value:null,json:{write:!0}})],y.prototype,"definedInterval",null),v([V()],y.prototype,"type",void 0),y=v([z("esri.rest.support.ClassBreaksDefinition")],y);const Z=y,E=N.getLogger("esri.rest.support.generateRendererUtils");function M(t,r){return Number(t.toFixed(r))}function ee(t){const{normalizationTotal:r}=t;return{classBreaks:L(t),normalizationTotal:r}}function L(t){const r=t.definition,{classificationMethod:a,breakCount:i,normalizationType:u,definedInterval:d}=r,f=[];let l=t.values;if(l.length===0)return[];l=l.sort((s,c)=>s-c);const p=l[0],m=l[l.length-1];if(a==="equal-interval")if(l.length>=i){const s=(m-p)/i;let c=p;for(let n=1;n<i;n++){const e=M(p+n*s,6);f.push({minValue:c,maxValue:e,label:b(c,e,u)}),c=e}f.push({minValue:c,maxValue:m,label:b(c,m,u)})}else l.forEach(s=>{f.push({minValue:s,maxValue:s,label:b(s,s,u)})});else if(a==="natural-breaks"){const s=R(l),c=t.valueFrequency||s.valueFrequency,n=_(s.uniqueValues,c,i);let e=p;for(let o=1;o<i;o++)if(s.uniqueValues.length>o){const h=M(s.uniqueValues[n[o]],6);f.push({minValue:e,maxValue:h,label:b(e,h,u)}),e=h}f.push({minValue:e,maxValue:m,label:b(e,m,u)})}else if(a==="quantile")if(l.length>=i&&p!==m){let s=p,c=Math.ceil(l.length/i),n=0;for(let e=1;e<i;e++){let o=c+n-1;o>l.length&&(o=l.length-1),o<0&&(o=0),f.push({minValue:s,maxValue:l[o],label:b(s,l[o],u)}),s=l[o],n+=c,c=Math.ceil((l.length-n)/(i-e))}f.push({minValue:s,maxValue:m,label:b(s,m,u)})}else{let s=-1;for(let c=0;c<l.length;c++){const n=l[c];n!==s&&(s=n,f.push({minValue:s,maxValue:n,label:b(s,n,u)}),s=n)}}else if(a==="standard-deviation"){const s=O(l),c=P(l,s);if(c===0)f.push({minValue:l[0],maxValue:l[0],label:b(l[0],l[0],u)});else{const n=A(p,m,i,s,c)*c;let e=0,o=p;for(let g=i;g>=1;g--){const k=M(s-(g-.5)*n,6);f.push({minValue:o,maxValue:k,label:b(o,k,u)}),o=k,e++}let h=M(s+.5*n,6);f.push({minValue:o,maxValue:h,label:b(o,h,u)}),o=h,e++;for(let g=1;g<=i;g++)h=e===2*i?m:M(s+(g+.5)*n,6),f.push({minValue:o,maxValue:h,label:b(o,h,u)}),o=h,e++}}else if(a==="defined-interval"){if(!d)return f;const s=l[0],c=l[l.length-1],n=Math.ceil((c-s)/d);let e=s;for(let o=1;o<n;o++){const h=M(s+o*d,6);f.push({minValue:e,maxValue:h,label:b(e,h,u)}),e=h}f.push({minValue:e,maxValue:c,label:b(e,c,u)})}return f}function b(t,r,a){let i=null;return i=t===r?a&&a==="percent-of-total"?t+"%":t.toString():a&&a==="percent-of-total"?t+"% - "+r+"%":t+" - "+r,i}function R(t){const r=[],a=[];let i=Number.MIN_VALUE,u=1,d=-1;for(let f=0;f<t.length;f++){const l=t[f];l===i?(u++,a[d]=u):l!==null&&(r.push(l),i=l,u=1,a.push(u),d++)}return{uniqueValues:r,valueFrequency:a}}function _(t,r,a){const i=t.length,u=[];a>i&&(a=i);for(let f=0;f<a;f++)u.push(Math.round(f*i/a-1));u.push(i-1);let d=j(u,t,r,a);return U(d.mean,d.sdcm,u,t,r,a)&&(d=j(u,t,r,a)),u}function j(t,r,a,i){let u=[],d=[],f=[],l=0;const p=[],m=[];for(let e=0;e<i;e++){const o=w(e,t,r,a);p.push(o.sbMean),m.push(o.sbSdcm),l+=m[e]}let s,c=l,n=!0;for(;n||l<c;){n=!1,u=[];for(let e=0;e<i;e++)u.push(t[e]);for(let e=0;e<i;e++)for(let o=t[e]+1;o<=t[e+1];o++)if(s=r[o],e>0&&o!==t[e+1]&&Math.abs(s-p[e])>Math.abs(s-p[e-1]))t[e]=o;else if(e<i-1&&t[e]!==o-1&&Math.abs(s-p[e])>Math.abs(s-p[e+1])){t[e+1]=o-1;break}c=l,l=0,d=[],f=[];for(let e=0;e<i;e++){d.push(p[e]),f.push(m[e]);const o=w(e,t,r,a);p[e]=o.sbMean,m[e]=o.sbSdcm,l+=m[e]}}if(l>c){for(let e=0;e<i;e++)t[e]=u[e],p[e]=d[e],m[e]=f[e];l=c}return{mean:p,sdcm:m}}function U(t,r,a,i,u,d){let f=0,l=0,p=0,m=0,s=!0;for(let c=0;c<2&&s;c++){c===0&&(s=!1);for(let n=0;n<d-1;n++)for(;a[n+1]+1!==a[n+2];){a[n+1]=a[n+1]+1;const e=w(n,a,i,u);p=e.sbMean,f=e.sbSdcm;const o=w(n+1,a,i,u);if(m=o.sbMean,l=o.sbSdcm,!(f+l<r[n]+r[n+1])){a[n+1]=a[n+1]-1;break}r[n]=f,r[n+1]=l,t[n]=p,t[n+1]=m,s=!0}for(let n=d-1;n>0;n--)for(;a[n]!==a[n-1]+1;){a[n]=a[n]-1;const e=w(n-1,a,i,u);p=e.sbMean,f=e.sbSdcm;const o=w(n,a,i,u);if(m=o.sbMean,l=o.sbSdcm,!(f+l<r[n-1]+r[n])){a[n]=a[n]+1;break}r[n-1]=f,r[n]=l,t[n-1]=p,t[n]=m,s=!0}}return s}function A(t,r,a,i,u){let d=Math.max(i-t,r-i)/u/a;return d=d>=1?1:d>=.5?.5:.25,d}function O(t){let r=0;for(let a=0;a<t.length;a++)r+=t[a];return r/=t.length,r}function P(t,r){let a=0;for(let i=0;i<t.length;i++){const u=t[i];a+=(u-r)*(u-r)}return a/=t.length,Math.sqrt(a)}function w(t,r,a,i){let u=0,d=0;for(let p=r[t]+1;p<=r[t+1];p++){const m=i[p];u+=a[p]*m,d+=m}d<=0&&E.warn("Exception in Natural Breaks calculation");const f=u/d;let l=0;for(let p=r[t]+1;p<=r[t+1];p++)l+=i[p]*(a[p]-f)**2;return{sbMean:f,sbSdcm:l}}export{ee as a,Z as l};
