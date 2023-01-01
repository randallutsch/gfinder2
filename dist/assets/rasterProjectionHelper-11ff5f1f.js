import"./geometry-1b3a0099.js";import{a as Pt}from"./Error-e5869661.js";import{t as k,r as S}from"./typedArrayUtil-6bfe4dae.js";import{$ as L}from"./unitUtils-2906b0b4.js";import{e as Q,t as bt,r as W,A as St,E as v,s as T,P as it,a as Gt,O as Nt,b as ot}from"./projection-b78b11c8.js";import{a as F,w as N,k as Et}from"./Extent-b8913cd1.js";import{v as kt}from"./Polyline-7684a66d.js";var H;function ht(t,n,i){return!St(t,n,i)}function A(t,n,i){const r=ht(t,n,i);if(r&&!Q())throw new Pt("rasterprojectionhelper-project","projection engine is not loaded");return r}(function(t){t[t.None=0]="None",t[t.North=1]="North",t[t.South=2]="South",t[t.Both=3]="Both"})(H||(H={}));const st=(t,n,i,r=0)=>{if(i[0]===1)return[0,0];let s=1,e=-1,o=1,u=-1;for(let a=0;a<t.length;a+=2)isNaN(t[a])||(s=s>t[a]?t[a]:s,e=e>t[a]?e:t[a],o=o>t[a+1]?t[a+1]:o,u=u>t[a+1]?u:t[a+1]);const{cols:f,rows:c}=n,l=(e-s)/f/i[0],d=(u-o)/c/i[1],p=2*r;let m=0,h=!1,x=[0,0];for(let a=0;a<f-3;a++){for(let w=0;w<c-3;w++){const y=a*c*2+2*w,g=(t[y]+t[y+4]+t[y+4*c]+t[y+4*c+4])/4,M=(t[y+1]+t[y+5]+t[y+4*c+1]+t[y+4*c+5])/4,R=Math.abs((g-t[y+2*c+2])/l),P=Math.abs((M-t[y+2*c+3])/d);if(R+P>m&&(m=R+P,x=[R,P]),p&&m>p){h=!0;break}}if(h)break}return x},Tt={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},j=32,I=4,X=I,K=new Map,U=new Map,B=500;async function qt(){Q()||await bt()}function Jt(t,n,i){return A(t.spatialReference,n)?i?ot(n,t.spatialReference,t):ot(t.spatialReference,n,t):null}function rt(t,n,i,r=null){const s=t.spatialReference;if(s.equals(n))return t;A(s,n,r);const e=i.center,o=new F({xmin:e.x-t.x/2,xmax:e.x+t.x/2,ymin:e.y-t.y/2,ymax:e.y+t.y/2,spatialReference:s}),u=W(o,n,r),f=C(n);let c;if(k(u)||S(f)&&u.width>=f){const l=L(s)/L(n);c={x:t.x*l,y:t.y*l}}else c={x:u.width,y:u.height};return c}function E(t,n=.01){return L(t)?n/L(t):0}function at(t,n,i=null,r=!0){const s=t.spatialReference;if(s.equals(n))return t;A(s,n,i);const e=W(t,n,i);return r&&e&&xt([t],[e],s,n),e}function xt(t,n,i,r){const s=Y(i,!0),e=Y(r,!0),o=E(i,B),u=E(r,B);if(o&&S(s)&&S(e))for(let f=0;f<t.length;f++){const c=n[f];if(!c)continue;const{x:l}=t[f],{x:d}=c;d>=e[1]-u&&Math.abs(l-s[0])<o?c.x-=e[1]-e[0]:d<=e[0]+u&&Math.abs(l-s[1])<o&&(c.x+=e[1]-e[0])}}function vt(t){const{inSR:n,outSR:i,datumTransformation:r,preferPE:s}=t;if(n.equals(i)){const{points:e}=V(t,null);return e}if(n.isWebMercator&&i.isWGS84||n.isWGS84&&i.isWebMercator)return _t(t);if(A(n,i,r)&&s){if(n.isGeographic)return lt(t);const e=O(n);if(S(e))return lt(t)}return Ct(t)}function Ct(t){const{points:n}=V(t,null),{inSR:i,outSR:r,datumTransformation:s}=t,e=n.map(u=>new N(u[0],u[1],i)),o=W(e,r,s);return s&&xt(e,o,i,r),o.map(u=>u?[u.x,u.y]:[NaN,NaN])}function lt(t){const{inSR:n,outSR:i,datumTransformation:r}=t,s=O(n),{points:e,mask:o}=V(t,s);if(!n.isGeographic){const f=n.wkid?v.coordsys(n.wkid):v.fromString(n.isGeographic?T.PE_TYPE_GEOGCS:T.PE_TYPE_PROJCS,n.wkt);it.projToGeog(f,e.length,e)}if(S(r)&&r.steps.length){let f;if(i.isGeographic&&(f=e.map(([l])=>l>179.9955?1:l<-179.9955?-1:0)),r.steps.forEach(l=>{const d=l.wkid?v.geogtran(l.wkid):v.fromString(T.PE_TYPE_GEOGTRAN,l.wkt);Gt.geogToGeog(d,e.length,e,null,l.isInverse?T.PE_TRANSFORM_2_TO_1:T.PE_TRANSFORM_1_TO_2)}),f)for(let l=0;l<e.length;l++){const d=f[l],p=e[l][0],m=p>179.9955?1:p<-179.9955?-1:0;d&&m&&d!==m&&(e[l][0]=d>0?p+360:p-360)}}if(!i.isGeographic){const f=O(i,!0),c=S(f)&&f.isEnvelope?[f.bbox[1],f.bbox[3]]:[-90,90];zt(e,c);const l=i.wkid?v.coordsys(i.wkid):v.fromString(i.isGeographic?T.PE_TYPE_GEOGCS:T.PE_TYPE_PROJCS,i.wkt);it.geogToProj(l,e.length,e)}let u=e;if(o&&e.length!==o.length){u=[];for(let f=0,c=0;f<o.length;f++)o[f]?u.push(e[c++]):u.push([NaN,NaN])}return u}function _t(t){const{cols:n,rows:i,xres:r,yres:s,usePixelCenter:e,inSR:o,outSR:u}=t;let{xmin:f,ymax:c}=t;e&&(f+=r/2,c-=s/2);const l=[],d=[],p=Math.max(n,i);for(let h=0;h<p;h++){const x=f+r*Math.min(n,h),a=c-s*Math.min(i,h),w=W(new N({x,y:a,spatialReference:o}),u);h<=n&&l.push(w.x),h<=i&&d.push(w.y)}const m=[];for(let h=0;h<n;h++)for(let x=0;x<i;x++)m.push([l[h],d[x]]);return m}function O(t,n=!1){let i=t.wkid||t.wkt;if(!i||t.isGeographic)return null;if(i=String(i),K.has(i)){const o=K.get(i);return n?o==null?void 0:o.gcs:o==null?void 0:o.pcs}const r=t.wkid?v.coordsys(t.wkid):v.fromString(t.isGeographic?T.PE_TYPE_GEOGCS:T.PE_TYPE_PROJCS,t.wkt),s=ct(r,E(t,1e-4)),e=ct(r,0,!0);return K.set(i,{pcs:s,gcs:e}),n?e:s}function ct(t,n=0,i=!1){const r=Nt.generate(t),s=i?t.horizonGcsGenerate():t.horizonPcsGenerate();if(!r||!(s!=null&&s.length))return null;let e=!1,o=s.find(a=>a.getInclusive()===1&&a.getKind()===1);if(!o){if(o=s.find(a=>a.getInclusive()===1&&a.getKind()===0),!o)return null;e=!0}const u=i?0:(r.getNorthPoleLocation()===2?1:0)|(r.getSouthPoleLocation()===2?2:0),f=r.isPannableRectangle(),c=o.getCoord();if(e)return{isEnvelope:e,isPannable:f,vertices:c,coef:null,bbox:[c[0][0]-n,c[0][1]-n,c[1][0]+n,c[1][1]+n],poleLocation:u};let l=0;const d=[];let[p,m]=c[0],[h,x]=c[0];for(let a=0,w=c.length;a<w;a++){l++,l===w&&(l=0);const[y,g]=c[a],[M,R]=c[l];if(R===g)d.push([y,M,g,R,2]);else{const P=(M-y)/(R-g||1e-4),G=y-P*g;g<R?d.push([P,G,g,R,0]):d.push([P,G,R,g,1])}p=p<y?p:y,m=m<g?m:g,h=h>y?h:y,x=x>g?x:g}return{isEnvelope:!1,isPannable:f,vertices:c,coef:d,bbox:[p,m,h,x],poleLocation:u}}function V(t,n){const i=[],{cols:r,rows:s,xres:e,yres:o,usePixelCenter:u}=t;let{xmin:f,ymax:c}=t;if(u&&(f+=e/2,c-=o/2),k(n)){for(let m=0;m<r;m++)for(let h=0;h<s;h++)i.push([f+e*m,c-o*h]);return{points:i}}const l=new Uint8Array(r*s);if(n.isEnvelope){const{bbox:[m,h,x,a]}=n;for(let w=0,y=0;w<r;w++){const g=f+e*w,M=n.isPannable||g>=m&&g<=x;for(let R=0;R<s;R++,y++){const P=c-o*R;M&&P>=h&&P<=a&&(i.push([g,P]),l[y]=1)}}return{points:i,mask:l}}const d=n.coef,p=[];for(let m=0;m<s;m++){const h=c-o*m,x=[],a=[];for(let y=0;y<d.length;y++){const[g,M,R,P,G]=d[y];if(h===R&&R===P)x.push(g),x.push(M),a.push(2),a.push(2);else if(h>=R&&h<=P){const _=g*h+M;x.push(_),a.push(G)}}let w=x;if(x.length>2){let y=a[0]===2?0:a[0],g=x[0];w=[];for(let M=1;M<a.length;M++)a[M]===2&&M!==a.length-1||(a[M]!==y&&(w.push(y===0?Math.min(g,x[M-1]):Math.max(g,x[M-1])),y=a[M],g=x[M]),M===a.length-1&&w.push(a[M]===0?Math.min(g,x[M]):Math.max(g,x[M])));w.sort((M,R)=>M-R)}else x[0]>x[1]&&(w=[x[1],x[0]]);p.push(w)}for(let m=0,h=0;m<r;m++){const x=f+e*m;for(let a=0;a<s;a++,h++){const w=c-o*a,y=p[a];if(y.length===2)x>=y[0]&&x<=y[1]&&(i.push([x,w]),l[h]=1);else if(y.length>2){let g=!1;for(let M=0;M<y.length;M+=2)if(x>=y[M]&&x<=y[M+1]){g=!0;break}g&&(i.push([x,w]),l[h]=1)}}}return{points:i,mask:l}}function zt(t,n){const[i,r]=n;for(let s=0;s<t.length;s++){const e=t[s][1];(e<i||e>r)&&(t[s]=[NaN,NaN])}}function pt(t){const n=C(t[0].spatialReference);if(t.length<2||k(n))return t[0];let{xmin:i,xmax:r,ymin:s,ymax:e}=t[0];for(let o=1;o<t.length;o++){const u=t[o];r=u.xmax+n*o,s=Math.min(s,u.ymin),e=Math.max(e,u.ymax)}return new F({xmin:i,xmax:r,ymin:s,ymax:e,spatialReference:t[0].spatialReference})}function gt(t,n,i=null,r=!0){const s=t.spatialReference;if(s.equals(n))return t;const e=Lt(t),o=C(s,!0),u=C(n);if(e===0||k(o)||k(u)){const c=ft(t,n,i,r);if(k(o)&&S(u)&&Math.abs(c.width-u)<E(n)&&Q()){const l=O(s);if(S(l)&&l.poleLocation===H.None&&t.width<(l.bbox[2]-l.bbox[0])/2)return Ot(t,n)||c}return c}const f=t.clone().normalize();if(f.length===1&&t.xmax<o&&t.xmax-o/2>E(s)){const{xmin:c,xmax:l}=t;for(let d=0;d<=e;d++){const p=d===0?c:-o/2,m=d===e?l-o*d:o/2;f[d]=new F({xmin:p,xmax:m,ymin:t.ymin,ymax:t.ymax,spatialReference:s})}}return pt(f.map(c=>ft(c,n,i,r)).filter(S))}function Ot(t,n){const i=C(n);if(k(i))return null;let{xmin:r,ymin:s,xmax:e,ymax:o}=t;const u=t.spatialReference,f=new kt({spatialReference:u,rings:[[[r,s],[e,s],[e,o],[r,o],[r,s]]]}),c=W(f,n);if(c.rings.length!==2||!c.rings[0].length||!c.rings[1].length)return null;const{rings:l}=c,d=E(u),p=new F({spatialReference:n});for(let m=0;m<2;m++){r=e=l[m][0][0],s=o=l[m][0][1];for(let h=0;h<l[m].length;h++)r=r>l[m][h][0]?l[m][h][0]:r,e=e<l[m][h][0]?l[m][h][0]:e,s=s>l[m][h][1]?l[m][h][1]:s,o=o<l[m][h][1]?l[m][h][1]:o;if(m===0)p.ymin=s,p.ymax=o,p.xmin=r,p.xmax=e;else if(p.ymin=Math.min(p.ymin,s),p.ymax=Math.max(p.ymax,o),Math.abs(e-i/2)<d)p.xmin=r,p.xmax=p.xmax+i;else{if(!(Math.abs(r+i/2)<d))return null;p.xmax=e+i}}return p}function ft(t,n,i=null,r=!0,s=!0){const e=t.spatialReference;if(e.equals(n)||!n)return t;A(e,n,i);const o=W(t,n,i);if(s&&n.isWebMercator&&o&&(o.ymax=Math.min(20037508342787e-6,o.ymax),o.ymin=Math.max(-20037508342787e-6,o.ymin),o.ymin>=o.ymax))return null;if(!r||!o)return o;const u=Y(e,!0),f=Y(n,!0);if(k(u)||k(f))return o;const c=E(e,.001),l=E(e,B),d=E(n,.001);if(Math.abs(o.xmin-f[0])<d&&Math.abs(o.xmax-f[1])<d){const p=Math.abs(t.xmin-u[0]),m=Math.abs(u[1]-t.xmax);if(p<c&&m>l){o.xmin=f[0];const h=[];h.push(new N(t.xmax,t.ymin,e)),h.push(new N(t.xmax,(t.ymin+t.ymax)/2,e)),h.push(new N(t.xmax,t.ymax,e));const x=h.map(a=>at(a,n,i)).filter(a=>!isNaN(a==null?void 0:a.x)).map(a=>a.x);o.xmax=Math.max.apply(null,x)}if(m<c&&p>l){o.xmax=f[1];const h=[];h.push(new N(t.xmin,t.ymin,e)),h.push(new N(t.xmin,(t.ymin+t.ymax)/2,e)),h.push(new N(t.xmin,t.ymax,e));const x=h.map(a=>at(a,n,i)).filter(a=>!isNaN(a==null?void 0:a.x)).map(a=>a.x);o.xmin=Math.min.apply(null,x)}}else{const p=E(n,.001);Math.abs(o.xmin-f[0])<p&&(o.xmin=f[0]),Math.abs(o.xmax-f[1])<p&&(o.xmax=f[1])}return o}function C(t,n=!1){if(!t)return null;const i=n?20037508342787e-6:20037508342788905e-9;return t.isWebMercator?2*i:t.wkid&&t.isGeographic?360:2*Tt[t.wkid]||null}function Y(t,n=!1){if(t.isGeographic)return[-180,180];const i=C(t,n);return S(i)?[-i/2,i/2]:null}function ut(t,n,i,r){let s=(t-n)/i;return s-Math.floor(s)!=0?s=Math.floor(s):r&&(s-=1),s}function Lt(t,n=!1){const i=C(t.spatialReference);if(k(i))return 0;const r=n?0:-(i/2),s=E(t.spatialReference),e=!n&&Math.abs(t.xmax-i/2)<s?i/2:t.xmax,o=!n&&Math.abs(t.xmin+i/2)<s?-i/2:t.xmin;return ut(e,r,i,!0)-ut(o,r,i,!1)}function Xt(t){const n=t.storageInfo.origin.x,i=C(t.spatialReference,!0);if(k(i))return{originX:n,halfWorldWidth:null,pyramidsInfo:null};const r=i/2,{nativePixelSize:s,storageInfo:e,extent:o}=t,{maximumPyramidLevel:u,blockWidth:f,pyramidScalingFactor:c}=e;let l=s.x;const d=[],p=S(t.transform)&&t.transform.type==="gcs-shift",m=n+(p?0:r),h=p?i-n:r-n;for(let x=0;x<=u;x++){const a=(o.xmax-n)/l/f,w=a-Math.floor(a)==0?a:Math.ceil(a),y=h/l/f,g=y-Math.floor(y)==0?y:Math.ceil(y),M=Math.floor(m/l/f),R=Math.round(m/l)%f,P=(f-Math.round(h/l)%f)%f;d.push({resolutionX:l,blockWidth:f,datsetColumnCount:w,worldColumnCountFromOrigin:g,leftMargin:R,rightPadding:P,originColumnOffset:M}),l*=c}return{originX:n,halfWorldWidth:r,pyramidsInfo:d,hasGCSSShiftTransform:p}}function Wt(t){if(!t||t.isGeographic)return t;const n=String(t.wkid||t.wkt);let i;return U.has(n)?i=U.get(n):(i=(t.wkid?v.coordsys(t.wkid):v.fromString(T.PE_TYPE_PROJCS,t.wkt)).getGeogcs().getCode(),U.set(n,i)),new Et({wkid:i})}function Kt(t){const n=t.isAdaptive&&t.spacing==null;let i=t.spacing||[j,j],r=D(t),s={cols:r.size[0]+1,rows:r.size[1]+1};const e=r.outofBoundPointCount>0&&r.outofBoundPointCount<r.offsets.length/2;let o=r.outofBoundPointCount===r.offsets.length/2||n&&e?[0,0]:st(r.offsets,s,i,X);const u=(o[0]+o[1])/2,f=t.projectedExtent.spatialReference,c=t.srcBufferExtent.spatialReference;if(n&&(e||u>X)&&(ht(f,c,t.datumTransformation)&&(f.isGeographic||S(O(f))),i=[I,I],r=D({...t,spacing:i}),s={cols:r.size[0]+1,rows:r.size[1]+1},o=st(r.offsets,s,i,X)),r.error=o,i[0]>1&&(r.coefficients=mt(r.offsets,s,e)),t.includeGCSGrid&&!f.isGeographic&&!f.isWebMercator)if(c.isGeographic)r.gcsGrid={offsets:r.offsets,coefficients:r.coefficients,spacing:i};else{const l=O(f);if(S(l)&&!l.isEnvelope){const d=Wt(f),p=gt(t.projectedExtent,d),{offsets:m}=D({...t,srcBufferExtent:p,spacing:i}),h=mt(m,s,e);r.gcsGrid={offsets:m,coefficients:h,spacing:i}}}return r}function D(t){const{projectedExtent:n,srcBufferExtent:i,pixelSize:r,datumTransformation:s,rasterTransform:e}=t,o=n.spatialReference,u=i.spatialReference,f=A(o,u),{xmin:c,ymin:l,xmax:d,ymax:p}=n,m=C(u),h=S(m)&&(t.hasWrapAround||(e==null?void 0:e.type)==="gcs-shift"),x=t.spacing||[j,j],a=x[0]*r.x,w=x[1]*r.y,y=x[0]===1,g=Math.ceil((d-c)/a-.1/x[0])+(y?0:1),M=Math.ceil((p-l)/w-.1/x[1])+(y?0:1),R=vt({cols:g,rows:M,xmin:c,ymax:p,xres:a,yres:w,inSR:o,outSR:u,datumTransformation:s,preferPE:x[0]<=I,usePixelCenter:y}),P=[];let G,_=0;const Z=y?-1:NaN,{xmin:tt,xmax:q,ymax:yt,width:dt,height:Mt}=i,wt=E(u,B),Rt=S(m)&&tt>0&&q>m/2;let nt=!1;if(f){const z=O(o);nt=S(z)&&z.poleLocation>0}for(let z=0;z<g;z++){const J=[];for(let $=0;$<M;$++){let b=R[z*M+$];if(h&&b[0]>q&&b[0]>m/2-wt?b[0]-=m:h&&z===0&&b[0]<0&&Rt&&!e&&(b[0]+=m),!b||isNaN(b[0])||isNaN(b[1]))P.push(Z),P.push(Z),J.push(null),_++;else{if(e){const et=e.inverseTransform(new N({x:b[0],y:b[1],spatialReference:u}));b=[et.x,et.y]}J.push(b),z>0&&h&&G[$]&&b[0]<G[$][0]&&(b[0]+=m,nt&&b[0]>q&&b[0]>m&&(b[0]-=m)),P.push((b[0]-tt)/dt),P.push((yt-b[1])/Mt)}}G=J}return{offsets:P,error:null,coefficients:null,outofBoundPointCount:_,spacing:x,size:y?[g,M]:[g-1,M-1]}}function mt(t,n,i){const{cols:r,rows:s}=n,e=new Float32Array((r-1)*(s-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),u=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let f=0;f<r-1;f++){for(let c=0;c<s-1;c++){let l=f*s*2+2*c;const d=t[l],p=t[l+1],m=t[l+2],h=t[l+3];l+=2*s;const x=t[l],a=t[l+1],w=t[l+2],y=t[l+3];let g=0,M=12*(c*(r-1)+f);for(let R=0;R<3;R++)e[M++]=o[g++]*d+o[g++]*m+o[g++]*w;g=0;for(let R=0;R<3;R++)e[M++]=o[g++]*p+o[g++]*h+o[g++]*y;g=0;for(let R=0;R<3;R++)e[M++]=u[g++]*d+u[g++]*x+u[g++]*w;g=0;for(let R=0;R<3;R++)e[M++]=u[g++]*p+u[g++]*a+u[g++]*y}if(i)for(let c=0;c<e.length;c++)isNaN(e[c])&&(e[c]=-1)}return e}function Ut(t){const n=t.clone().normalize();return n.length===1?n[0]:pt(n)}function Dt(t,n,i){const{storageInfo:r,pixelSize:s}=n;let e=0,o=!1;const{pyramidResolutions:u}=r;if(S(u)&&u.length){const p=(t.x+t.y)/2,m=u[u.length-1],h=(m.x+m.y)/2,x=(s.x+s.y)/2;if(p<=x)e=0;else if(p>=h)e=u.length,o=p/h>8;else{let w,y=x;for(let g=1;g<=u.length;g++){if(w=(u[g-1].x+u[g-1].y)/2,p<=w){p===w?e=g:i==="down"?(e=g-1,o=p/y>8):e=i==="up"||p-y>w-p||p/y>2?g:g-1;break}y=w}}const a=e===0?s:u[e-1];return o&&Math.min(a.x,a.y)*L(n.spatialReference)>19567&&(o=!1),{pyramidLevel:e,pyramidResolution:new N({x:a.x,y:a.y,spatialReference:n.spatialReference}),excessiveReading:o}}const f=Math.log(t.x/s.x)/Math.LN2,c=Math.log(t.y/s.y)/Math.LN2,l=n.storageInfo.maximumPyramidLevel||0;e=i==="down"?Math.floor(Math.min(f,c)):i==="up"?Math.ceil(Math.max(f,c)):Math.round((f+c)/2),e<0?e=0:e>l&&(o=e>l+3,e=l);const d=2**e;return{pyramidLevel:e,pyramidResolution:new N({x:d*n.nativePixelSize.x,y:d*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:o}}function Ht(t,n,i=512,r=!0){const{extent:s,spatialReference:e,pixelSize:o}=t,u=rt(new N({x:o.x,y:o.y,spatialReference:e}),n,s);if(u==null)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const f=(u.x+u.y)/2,c=L(n),l=f*c*96*39.37,d=n.isGeographic?256/i*2958287637958547e-7:256/i*591657527591555e-6;let p=t.dataType==="vector-magdir"||t.dataType==="vector-uv";const m=gt(s,n),h=Math.min(Math.ceil(Math.log(Math.min(t.width,t.height)/32)/Math.LN2),Math.ceil(Math.log(d/2/l)/Math.LN2));if(!p&&r&&(n.isGeographic||n.isWebMercator)&&(p=m.xmin*m.xmax<0,!p&&h<3)){const P=C(n);if(S(P)){const G=2**h*f*i,_=Math.ceil(P/G);p=_===1||_===2&&P/2-m.xmax<G}}let x,a=l;const w=1.001;if(p){a=d;const P=n.isGeographic?1341104507446289e-21:.29858214164761665,G=P*(96*c*39.37),_=n.isGeographic?4326:3857;x=rt(new N({x:P,y:P,spatialReference:{wkid:_}}),e,m),x.x*=a/G,x.y*=a/G}else{x={x:o.x,y:o.y};let P=0;for(;a<d*(w/2)&&P<h;)P++,a*=2,x.x*=2,x.y*=2;Math.max(a,d)/Math.min(a,d)<=w&&(a=d)}const y=[a],g=[{x:x.x,y:x.y}],M=70.5310735,R=Math.min(M,l)/w;for(;a>=R;)a/=2,x.x/=2,x.y/=2,y.push(a),g.push({x:x.x,y:x.y});return{projectedPixelSize:u,scales:y,srcResolutions:g,isCustomTilingScheme:!p}}export{Kt as $,rt as C,gt as J,ht as M,Lt as Q,qt as T,C as U,Xt as V,Ht as i,at as j,Ut as n,Dt as o,Jt as v};
