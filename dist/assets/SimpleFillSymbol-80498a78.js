import{e as t,y as i,n as d,l as C}from"./cast-34ff1fab.js";import{l as D}from"./Color-0f9fdd46.js";import{s as j}from"./jsonMap-92eea954.js";import{y as g}from"./string-46813dd9.js";import"./ensureType-abaf235a.js";import{r as u}from"./enumeration-e40d8895.js";import"./typedArrayUtil-6bfe4dae.js";import{o as S}from"./screenUtils-7afeb41c.js";import{a as k}from"./Symbol-8a110cc7.js";import{r as f,o as x}from"./Extent-b8913cd1.js";let h=class extends k{constructor(e){super(e),this.type="simple-line",this.width=.75}hash(){return`${this.type}.${this.width}`}};t([u({esriSLS:"simple-line"},{readOnly:!0})],h.prototype,"type",void 0),t([i({type:Number,cast:S,json:{write:!0}})],h.prototype,"width",void 0),h=t([d("esri.symbols.LineSymbol")],h);const O=h,G=["begin","end","begin-end"],z=["arrow","circle","square","diamond","cross","x"];var w;let l=w=class extends C{constructor(e){super(e),this.placement="begin-end",this.type="line-marker",this.style="arrow"}writeStyle(e,s,o,r){s[o]=(r==null?void 0:r.origin)==="web-map"?"arrow":e}set color(e){this._set("color",e)}readColor(e){return e&&e[0]!=null?[e[0],e[1],e[2],e[3]/255]:e}writeColor(e,s,o,r){(r==null?void 0:r.origin)==="web-map"||(s[o]=e)}clone(){return new w({color:g(this.color),placement:this.placement,style:this.style})}hash(){var e;return`${this.placement}.${(e=this.color)==null?void 0:e.hash()}.${this.style}`}};t([i({type:["begin","end","begin-end"],json:{write:!0}})],l.prototype,"placement",void 0),t([u({"line-marker":"line-marker"},{readOnly:!0}),i({json:{origins:{"web-map":{write:!1}}}})],l.prototype,"type",void 0),t([i({type:z})],l.prototype,"style",void 0),t([f("style")],l.prototype,"writeStyle",null),t([i({type:D,value:null,json:{write:{allowNull:!0}}})],l.prototype,"color",null),t([x("color")],l.prototype,"readColor",null),t([f("color")],l.prototype,"writeColor",null),l=w=t([d("esri.symbols.LineSymbolMarker")],l);const N=l;var b;const m=new j({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});let n=b=class extends O{constructor(...e){super(...e),this.type="simple-line",this.style="solid",this.cap="round",this.join="round",this.marker=null,this.miterLimit=2}normalizeCtorArgs(e,s,o,r,v,L){if(e&&typeof e!="string")return e;const a={};return e!=null&&(a.style=e),s!=null&&(a.color=s),o!=null&&(a.width=S(o)),r!=null&&(a.cap=r),v!=null&&(a.join=v),L!=null&&(a.miterLimit=S(L)),a}clone(){var e;return new b({color:g(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:(e=this.marker)==null?void 0:e.clone()})}hash(){var e,s;return`${super.hash()}.${(e=this.color)==null?void 0:e.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${(s=this.marker)==null?void 0:s.hash()}`}};t([u({esriSLS:"simple-line"},{readOnly:!0})],n.prototype,"type",void 0),t([i({type:m.apiValues,json:{read:m.read,write:m.write}})],n.prototype,"style",void 0),t([i({type:["butt","round","square"],json:{write:{overridePolicy:(e,s,o)=>({enabled:e!=="round"&&(o==null||o.origin==null)})}}})],n.prototype,"cap",void 0),t([i({type:["miter","round","bevel"],json:{write:{overridePolicy:(e,s,o)=>({enabled:e!=="round"&&(o==null||o.origin==null)})}}})],n.prototype,"join",void 0),t([i({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":N}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],n.prototype,"marker",void 0),t([i({type:Number,json:{read:!1,write:!1}})],n.prototype,"miterLimit",void 0),n=b=t([d("esri.symbols.SimpleLineSymbol")],n);const F=n;let y=class extends k{constructor(e){super(e),this.outline=null,this.type=null}hash(){return`${this.type}.${this.outline&&this.outline.hash()}`}};t([i({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":F}},json:{default:null,write:!0}})],y.prototype,"outline",void 0),t([i({type:["simple-fill","picture-fill"],readOnly:!0})],y.prototype,"type",void 0),y=t([d("esri.symbols.FillSymbol")],y);const V=y;var $;const c=new j({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});let p=$=class extends V{constructor(...e){super(...e),this.color=new D([0,0,0,.25]),this.outline=new F,this.type="simple-fill",this.style="solid"}normalizeCtorArgs(e,s,o){if(e&&typeof e!="string")return e;const r={};return e&&(r.style=e),s&&(r.outline=s),o&&(r.color=o),r}clone(){return new $({color:g(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}hash(){return`${super.hash()}${this.style}.${this.color&&this.color.hash()}`}};t([i()],p.prototype,"color",void 0),t([i()],p.prototype,"outline",void 0),t([u({esriSFS:"simple-fill"},{readOnly:!0})],p.prototype,"type",void 0),t([i({type:c.apiValues,json:{read:c.read,write:c.write}})],p.prototype,"style",void 0),p=$=t([d("esri.symbols.SimpleFillSymbol")],p);const _=p,J=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));export{_ as S,J as a,G as e,F as m,z as n,V as p};
