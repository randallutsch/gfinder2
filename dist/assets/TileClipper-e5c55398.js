import{_ as Vt}from"./preload-helper-596b5639.js";import{a as Dt}from"./assets-04f03891.js";import{h as It}from"./string-7d6c8f5c.js";import{a3 as Bt,G as C,H as W,Q as kt}from"./enums-ef042d89.js";import{t as S,s as tt}from"./Geometry-daada628.js";import{g as pt}from"./GeometryUtils-c093d234.js";const Ut=128e3;let vt=null,Pt=null;async function qt(){return vt||(vt=St()),vt}async function St(){Pt=await(It("esri-csp-restrictions")?await Vt(()=>import("./libtess-asm-7670ce64.js"),[]).then(t=>t.l):await Vt(()=>import("./libtess-36567f67.js"),[]).then(t=>t.l)).load({locateFile:t=>Dt(`esri/core/libs/libtess/${t}`)})}function Qt(o,t){const i=Math.max(o.length,Ut);return Pt.triangulate(o,t,i)}function bt(o,t){return o.x===t.x&&o.y===t.y}function $t(o){if(!o)return;const t=o.length;if(t<=1)return;let i=0;for(let n=1;n<t;n++)bt(o[n],o[i])||++i===n||(o[i]=o[n]);o.length=i+1}function z(o,t){return o.x=t.y,o.y=-t.x,o}function U(o,t){return o.x=-t.y,o.y=t.x,o}function Et(o,t){return o.x=t.x,o.y=t.y,o}function wt(o,t){return o.x=-t.x,o.y=-t.y,o}function Rt(o){return Math.sqrt(o.x*o.x+o.y*o.y)}function Ot(o,t){return o.x*t.y-o.y*t.x}function Mt(o,t){return o.x*t.x+o.y*t.y}function ht(o,t,i,n){return o.x=t.x*i+t.y*n,o.y=t.x*n-t.y*i,o}class Ct{constructor(t,i,n){this._writeVertex=t,this._writeTriangle=i,this._canUseThinTessellation=n,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(t,i){$t(t),this._canUseThinTessellation&&i.halfWidth<Bt&&!i.offset?this._tessellateThin(t,i):this._tessellate(t,i)}_tessellateThin(t,i){if(t.length<2)return;const n=i.wrapDistance||65535;let h=i.initialDistance||0,l=!1,x=t[0].x,a=t[0].y;const y=t.length;for(let u=1;u<y;++u){l&&(l=!1,h=0);let b=t[u].x,T=t[u].y,c=b-x,p=T-a,_=Math.sqrt(c*c+p*p);if(c/=_,p/=_,h+_>n){l=!0;const s=(n-h)/_;_=n-h,b=(1-s)*x+s*b,T=(1-s)*a+s*T,--u}const r=this._writeVertex(x,a,0,0,c,p,p,-c,0,-1,h),m=this._writeVertex(x,a,0,0,c,p,-p,c,0,1,h);h+=_;const d=this._writeVertex(b,T,0,0,c,p,p,-c,0,-1,h),e=this._writeVertex(b,T,0,0,c,p,-p,c,0,1,h);this._writeTriangle(r,m,d),this._writeTriangle(m,d,e),x=b,a=T}}_tessellate(t,i){const n=t[0],h=t[t.length-1],l=bt(n,h),x=l?3:2;if(t.length<x)return;const a=i.pixelCoordRatio,y=i.capType!=null?i.capType:C.BUTT,u=i.joinType!=null?i.joinType:W.MITER,b=i.miterLimit!=null?Math.min(i.miterLimit,4):2,T=i.roundLimit!=null?Math.min(i.roundLimit,1.05):1.05,c=i.halfWidth!=null?i.halfWidth:2,p=!!i.textured;let _,r,m,d=null;const e=this._prevNormal,s=this._nextNormal;let it=-1,G=-1;const g=this._joinNormal;let V,E;const rt=this._textureNormalLeft,lt=this._textureNormalRight,L=this._textureNormal;let M=-1,v=-1;const ft=i.wrapDistance||65535;let w=i.initialDistance||0;const Lt=this._writeVertex,Nt=this._writeTriangle,P=($,yt,Y,I,H,X)=>{const j=Lt(r,m,V,E,Y,I,$,yt,H,X,w);return M>=0&&v>=0&&j>=0&&Nt(M,v,j),M=v,v=j,j};l&&(_=t[t.length-2],s.x=h.x-_.x,s.y=h.y-_.y,G=Rt(s),s.x/=G,s.y/=G);let st=!1;for(let $=0;$<t.length;++$){if(st&&(st=!1,w=0),_&&(e.x=-s.x,e.y=-s.y,it=G,w+it>ft&&(st=!0)),st){const f=(ft-w)/it;it=ft-w,_={x:(1-f)*_.x+f*t[$].x,y:(1-f)*_.y+f*t[$].y},--$}else _=t[$];r=_.x,m=_.y;const yt=$<=0&&!st,Y=$===t.length-1;if(yt||(w+=it),d=Y?l?t[1]:null:t[$+1],d?(s.x=d.x-r,s.y=d.y-m,G=Rt(s),s.x/=G,s.y/=G):(s.x=void 0,s.y=void 0),!l){if(yt){U(g,s),V=g.x,E=g.y,y===C.SQUARE&&(P(-s.y-s.x,s.x-s.y,s.x,s.y,0,-1),P(s.y-s.x,-s.x-s.y,s.x,s.y,0,1)),y===C.ROUND&&(P(-s.y-s.x,s.x-s.y,s.x,s.y,-1,-1),P(s.y-s.x,-s.x-s.y,s.x,s.y,-1,1)),y!==C.ROUND&&y!==C.BUTT||(P(-s.y,s.x,s.x,s.y,0,-1),P(s.y,-s.x,s.x,s.y,0,1));continue}if(Y){z(g,e),V=g.x,E=g.y,y!==C.ROUND&&y!==C.BUTT||(P(e.y,-e.x,-e.x,-e.y,0,-1),P(-e.y,e.x,-e.x,-e.y,0,1)),y===C.SQUARE&&(P(e.y-e.x,-e.x-e.y,-e.x,-e.y,0,-1),P(-e.y-e.x,e.x-e.y,-e.x,-e.y,0,1)),y===C.ROUND&&(P(e.y-e.x,-e.x-e.y,-e.x,-e.y,1,-1),P(-e.y-e.x,e.x-e.y,-e.x,-e.y,1,1));continue}}let I,H,X=-Ot(e,s);if(Math.abs(X)<.01)Mt(e,s)>0?(g.x=e.x,g.y=e.y,X=1,I=Number.MAX_VALUE,H=!0):(U(g,s),X=1,I=1,H=!1);else{g.x=(e.x+s.x)/X,g.y=(e.y+s.y)/X,I=Rt(g);const f=(I-1)*c*a;H=I>4||f>it&&f>G}V=g.x,E=g.y;let j=u;switch(u){case W.BEVEL:I<1.05&&(j=W.MITER);break;case W.ROUND:I<T&&(j=W.MITER);break;case W.MITER:I>b&&(j=W.BEVEL)}switch(j){case W.MITER:if(P(g.x,g.y,-e.x,-e.y,0,-1),P(-g.x,-g.y,-e.x,-e.y,0,1),Y)break;if(p){const f=st?0:w;M=this._writeVertex(r,m,V,E,s.x,s.y,g.x,g.y,0,-1,f),v=this._writeVertex(r,m,V,E,s.x,s.y,-g.x,-g.y,0,1,f)}break;case W.BEVEL:{const f=X<0;let D,B,J,O;if(f){const R=M;M=v,v=R,D=rt,B=lt}else D=lt,B=rt;if(H)J=f?U(this._innerPrev,e):z(this._innerPrev,e),O=f?z(this._innerNext,s):U(this._innerNext,s);else{const R=f?wt(this._inner,g):Et(this._inner,g);J=R,O=R}const A=f?z(this._bevelStart,e):U(this._bevelStart,e);P(J.x,J.y,-e.x,-e.y,D.x,D.y);const ot=P(A.x,A.y,-e.x,-e.y,B.x,B.y);if(Y)break;const q=f?U(this._bevelEnd,s):z(this._bevelEnd,s);if(H){const R=this._writeVertex(r,m,V,E,-e.x,-e.y,0,0,0,0,w);M=this._writeVertex(r,m,V,E,s.x,s.y,O.x,O.y,D.x,D.y,w),v=this._writeVertex(r,m,V,E,s.x,s.y,q.x,q.y,B.x,B.y,w),this._writeTriangle(ot,R,v)}else{if(p){const R=this._bevelMiddle;R.x=(A.x+q.x)/2,R.y=(A.y+q.y)/2,ht(L,R,-e.x,-e.y),P(R.x,R.y,-e.x,-e.y,L.x,L.y),ht(L,R,s.x,s.y),M=this._writeVertex(r,m,V,E,s.x,s.y,R.x,R.y,L.x,L.y,w),v=this._writeVertex(r,m,V,E,s.x,s.y,O.x,O.y,D.x,D.y,w)}else{const R=M;M=v,v=R}P(q.x,q.y,s.x,s.y,B.x,B.y)}if(f){const R=M;M=v,v=R}break}case W.ROUND:{const f=X<0;let D,B;if(f){const k=M;M=v,v=k,D=rt,B=lt}else D=lt,B=rt;const J=f?wt(this._inner,g):Et(this._inner,g);let O,A;H?(O=f?U(this._innerPrev,e):z(this._innerPrev,e),A=f?z(this._innerNext,s):U(this._innerNext,s)):(O=J,A=J);const ot=f?z(this._roundStart,e):U(this._roundStart,e),q=f?U(this._roundEnd,s):z(this._roundEnd,s),R=P(O.x,O.y,-e.x,-e.y,D.x,D.y),at=P(ot.x,ot.y,-e.x,-e.y,B.x,B.y);if(Y)break;const K=this._writeVertex(r,m,V,E,-e.x,-e.y,0,0,0,0,w);H||this._writeTriangle(M,v,K);const Q=wt(this._outer,J),Z=this._writeVertex(r,m,V,E,s.x,s.y,q.x,q.y,B.x,B.y,w);let et,nt;const ut=I>2;if(ut){let k;I!==Number.MAX_VALUE?(Q.x/=I,Q.y/=I,k=Mt(e,Q),k=(I*(k*k-1)+1)/k):k=-1,et=f?z(this._startBreak,e):U(this._startBreak,e),et.x+=e.x*k,et.y+=e.y*k,nt=f?U(this._endBreak,s):z(this._endBreak,s),nt.x+=s.x*k,nt.y+=s.y*k}ht(L,Q,-e.x,-e.y);const mt=this._writeVertex(r,m,V,E,-e.x,-e.y,Q.x,Q.y,L.x,L.y,w);ht(L,Q,s.x,s.y);const gt=p?this._writeVertex(r,m,V,E,s.x,s.y,Q.x,Q.y,L.x,L.y,w):mt,Tt=K,ct=p?this._writeVertex(r,m,V,E,s.x,s.y,0,0,0,0,w):K;let xt=-1,_t=-1;if(ut&&(ht(L,et,-e.x,-e.y),xt=this._writeVertex(r,m,V,E,-e.x,-e.y,et.x,et.y,L.x,L.y,w),ht(L,nt,s.x,s.y),_t=this._writeVertex(r,m,V,E,s.x,s.y,nt.x,nt.y,L.x,L.y,w)),p?ut?(this._writeTriangle(Tt,at,xt),this._writeTriangle(Tt,xt,mt),this._writeTriangle(ct,gt,_t),this._writeTriangle(ct,_t,Z)):(this._writeTriangle(Tt,at,mt),this._writeTriangle(ct,gt,Z)):ut?(this._writeTriangle(K,at,xt),this._writeTriangle(K,xt,_t),this._writeTriangle(K,_t,Z)):(this._writeTriangle(K,at,mt),this._writeTriangle(K,gt,Z)),H?(M=this._writeVertex(r,m,V,E,s.x,s.y,A.x,A.y,D.x,D.y,w),v=Z):(M=p?this._writeVertex(r,m,V,E,s.x,s.y,A.x,A.y,D.x,D.y,w):R,this._writeTriangle(M,ct,Z),v=Z),f){const k=M;M=v,v=k}break}}}}}class dt{constructor(t,i,n){this.ratio=t,this.x=i,this.y=n}}class Ft{constructor(t,i,n,h=8,l=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=h,this._pixelMargin=l,this._tileSize=kt*h,this._dz=t,this._yPos=i,this._xPos=n}setPixelMargin(t){t!==this._pixelMargin&&(this._pixelMargin=t,this.setExtent(this._extent))}setExtent(t){this._extent=t,this._finalRatio=this._tileSize/t*(1<<this._dz);let i=this._pixelRatio*this._pixelMargin;i/=this._finalRatio;const n=t>>this._dz;i>n&&(i=n),this._margin=i,this._xmin=n*this._xPos-i,this._ymin=n*this._yPos-i,this._xmax=this._xmin+n+2*i,this._ymax=this._ymin+n+2*i}reset(t){this._type=t,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(t,i){this._pushLine(),this._prevIsIn=this._isIn(t,i),this._moveTo(t,i,this._prevIsIn),this._prevPt=new S(t,i),this._firstPt=new S(t,i),this._dist=0}lineTo(t,i){const n=this._isIn(t,i),h=new S(t,i),l=S.distance(this._prevPt,h);let x,a,y,u,b,T,c,p;if(n)this._prevIsIn?this._lineTo(t,i,!0):(x=this._prevPt,a=h,y=this._intersect(a,x),this._start=this._dist+l*(1-this._r),this._lineTo(y.x,y.y,!0),this._lineTo(a.x,a.y,!0));else if(this._prevIsIn)a=this._prevPt,x=h,y=this._intersect(a,x),this._lineTo(y.x,y.y,!0),this._lineTo(x.x,x.y,!1);else{const _=this._prevPt,r=h;if(_.x<=this._xmin&&r.x<=this._xmin||_.x>=this._xmax&&r.x>=this._xmax||_.y<=this._ymin&&r.y<=this._ymin||_.y>=this._ymax&&r.y>=this._ymax)this._lineTo(r.x,r.y,!1);else{const m=[];if((_.x<this._xmin&&r.x>this._xmin||_.x>this._xmin&&r.x<this._xmin)&&(u=(this._xmin-_.x)/(r.x-_.x),p=_.y+u*(r.y-_.y),p<=this._ymin?T=!1:p>=this._ymax?T=!0:m.push(new dt(u,this._xmin,p))),(_.x<this._xmax&&r.x>this._xmax||_.x>this._xmax&&r.x<this._xmax)&&(u=(this._xmax-_.x)/(r.x-_.x),p=_.y+u*(r.y-_.y),p<=this._ymin?T=!1:p>=this._ymax?T=!0:m.push(new dt(u,this._xmax,p))),(_.y<this._ymin&&r.y>this._ymin||_.y>this._ymin&&r.y<this._ymin)&&(u=(this._ymin-_.y)/(r.y-_.y),c=_.x+u*(r.x-_.x),c<=this._xmin?b=!1:c>=this._xmax?b=!0:m.push(new dt(u,c,this._ymin))),(_.y<this._ymax&&r.y>this._ymax||_.y>this._ymax&&r.y<this._ymax)&&(u=(this._ymax-_.y)/(r.y-_.y),c=_.x+u*(r.x-_.x),c<=this._xmin?b=!1:c>=this._xmax?b=!0:m.push(new dt(u,c,this._ymax))),m.length===0)b?T?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):T?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0);else if(m.length>1&&m[0].ratio>m[1].ratio)this._start=this._dist+l*m[1].ratio,this._lineTo(m[1].x,m[1].y,!0),this._lineTo(m[0].x,m[0].y,!0);else{this._start=this._dist+l*m[0].ratio;for(let d=0;d<m.length;d++)this._lineTo(m[d].x,m[d].y,!0)}this._lineTo(r.x,r.y,!1)}}this._dist+=l,this._prevIsIn=n,this._prevPt=h}close(){if(this._line.length>2){const t=this._firstPt,i=this._prevPt;t.x===i.x&&t.y===i.y||this.lineTo(t.x,t.y);const n=this._line;let h=n.length;for(;h>=4&&(n[0].x===n[1].x&&n[0].x===n[h-2].x||n[0].y===n[1].y&&n[0].y===n[h-2].y);)n.pop(),n[0].x=n[h-2].x,n[0].y=n[h-2].y,--h}}result(t=!0){return this._pushLine(),this._lines.length===0?null:(this._type===tt.Polygon&&t&&F.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==tt.LineString)throw new Error("Only valid for lines");this._pushLine();const t=this._lines,i=t.length;if(i===0)return null;const n=[];for(let h=0;h<i;h++)n.push({line:t[h],start:this._starts[h]||0});return n}_isIn(t,i){return t>=this._xmin&&t<=this._xmax&&i>=this._ymin&&i<=this._ymax}_intersect(t,i){let n,h,l;if(i.x>=this._xmin&&i.x<=this._xmax)h=i.y<=this._ymin?this._ymin:this._ymax,l=(h-t.y)/(i.y-t.y),n=t.x+l*(i.x-t.x);else if(i.y>=this._ymin&&i.y<=this._ymax)n=i.x<=this._xmin?this._xmin:this._xmax,l=(n-t.x)/(i.x-t.x),h=t.y+l*(i.y-t.y);else{h=i.y<=this._ymin?this._ymin:this._ymax,n=i.x<=this._xmin?this._xmin:this._xmax;const x=(n-t.x)/(i.x-t.x),a=(h-t.y)/(i.y-t.y);x<a?(l=x,h=t.y+x*(i.y-t.y)):(l=a,n=t.x+a*(i.x-t.x))}return this._r=l,new S(n,h)}_pushLine(){this._line&&(this._type===tt.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===tt.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===tt.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(t,i,n){this._type!==tt.Polygon?n&&(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.push(new S(t,i))):(n||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),i<this._ymin&&(i=this._ymin),i>this._ymax&&(i=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.push(new S(t,i)),this._isH=!1,this._isV=!1)}_lineTo(t,i,n){let h,l;if(this._type!==tt.Polygon)if(n){if(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(h=this._line[this._line.length-1],h.equals(t,i)))return;this._line.push(new S(t,i))}else this._line&&this._line.length>0&&this._pushLine();else if(n||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),i<this._ymin&&(i=this._ymin),i>this._ymax&&(i=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){h=this._line[this._line.length-1];const x=h.x===t,a=h.y===i;if(x&&a)return;this._isH&&x||this._isV&&a?(h.x=t,h.y=i,l=this._line[this._line.length-2],l.x===t&&l.y===i?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(l=this._line[this._line.length-2],this._isH=l.x===t,this._isV=l.y===i)):(this._isH=l.x===t,this._isV=l.y===i)):(this._line.push(new S(t,i)),this._isH=x,this._isV=a)}else this._line.push(new S(t,i))}}class Gt{setExtent(t){this._ratio=t===4096?1:4096/t}get validateTessellation(){return this._ratio<1}reset(t){this._lines=[],this._line=null}moveTo(t,i){this._line&&this._lines.push(this._line),this._line=[];const n=this._ratio;this._line.push(new S(t*n,i*n))}lineTo(t,i){const n=this._ratio;this._line.push(new S(t*n,i*n))}close(){const t=this._line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}result(){return this._line&&this._lines.push(this._line),this._lines.length===0?null:this._lines}}var N;(function(o){o[o.sideLeft=0]="sideLeft",o[o.sideRight=1]="sideRight",o[o.sideTop=2]="sideTop",o[o.sideBottom=3]="sideBottom"})(N||(N={}));class F{static simplify(t,i,n){if(!n)return;const h=-i,l=t+i,x=-i,a=t+i,y=[],u=[],b=n.length;for(let c=0;c<b;++c){const p=n[c];if(!p||p.length<2)continue;let _,r=p[0];const m=p.length;for(let d=1;d<m;++d)_=p[d],r.x===_.x&&(r.x<=h&&(r.y>_.y?(y.push(c),y.push(d),y.push(N.sideLeft),y.push(-1)):(u.push(c),u.push(d),u.push(N.sideLeft),u.push(-1))),r.x>=l&&(r.y<_.y?(y.push(c),y.push(d),y.push(N.sideRight),y.push(-1)):(u.push(c),u.push(d),u.push(N.sideRight),u.push(-1)))),r.y===_.y&&(r.y<=x&&(r.x<_.x?(y.push(c),y.push(d),y.push(N.sideTop),y.push(-1)):(u.push(c),u.push(d),u.push(N.sideTop),u.push(-1))),r.y>=a&&(r.x>_.x?(y.push(c),y.push(d),y.push(N.sideBottom),y.push(-1)):(u.push(c),u.push(d),u.push(N.sideBottom),u.push(-1)))),r=_}if(y.length===0||u.length===0)return;F.fillParent(n,u,y),F.fillParent(n,y,u);const T=[];F.calcDeltas(T,u,y),F.calcDeltas(T,y,u),F.addDeltas(T,n)}static fillParent(t,i,n){const h=n.length,l=i.length;for(let x=0;x<l;x+=4){const a=i[x],y=i[x+1],u=i[x+2],b=t[a][y-1],T=t[a][y];let c=8092,p=-1;for(let _=0;_<h;_+=4){if(n[_+2]!==u)continue;const r=n[_],m=n[_+1],d=t[r][m-1],e=t[r][m];switch(u){case N.sideLeft:case N.sideRight:if(pt(b.y,d.y,e.y)&&pt(T.y,d.y,e.y)){const s=Math.abs(e.y-d.y);s<c&&(c=s,p=_)}break;case N.sideTop:case N.sideBottom:if(pt(b.x,d.x,e.x)&&pt(T.x,d.x,e.x)){const s=Math.abs(e.x-d.x);s<c&&(c=s,p=_)}}}i[x+3]=p}}static calcDeltas(t,i,n){const h=i.length;for(let l=0;l<h;l+=4){const x=[],a=F.calcDelta(l,i,n,x);t.push(i[l]),t.push(i[l+1]),t.push(i[l+2]),t.push(a)}}static calcDelta(t,i,n,h){const l=i[t+3];if(l===-1)return 0;const x=h.length;return x>1&&h[x-2]===l?0:(h.push(l),F.calcDelta(l,n,i,h)+1)}static addDeltas(t,i){const n=t.length;let h=0;for(let l=0;l<n;l+=4){const x=t[l+3];x>h&&(h=x)}for(let l=0;l<n;l+=4){const x=i[t[l]],a=t[l+1],y=h-t[l+3];switch(t[l+2]){case N.sideLeft:x[a-1].x-=y,x[a].x-=y,a===1&&(x[x.length-1].x-=y),a===x.length-1&&(x[0].x-=y);break;case N.sideRight:x[a-1].x+=y,x[a].x+=y,a===1&&(x[x.length-1].x+=y),a===x.length-1&&(x[0].x+=y);break;case N.sideTop:x[a-1].y-=y,x[a].y-=y,a===1&&(x[x.length-1].y-=y),a===x.length-1&&(x[0].y-=y);break;case N.sideBottom:x[a-1].y+=y,x[a].y+=y,a===1&&(x[x.length-1].y+=y),a===x.length-1&&(x[0].y+=y)}}}}export{Gt as _,Ct as c,qt as i,Ft as n,Qt as r};
