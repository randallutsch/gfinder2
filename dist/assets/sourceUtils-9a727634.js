import{_ as p}from"./preload-helper-101896b7.js";import{t as d}from"./typedArrayUtil-4015bf74.js";import{I as m}from"./Extent-54ef1174.js";import{f as g,I as y,i as w,t as I,c as _}from"./fieldUtils-75feb382.js";class b{constructor(){this.code=null,this.description=null}}class v{constructor(e){this.error=new b,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function f(t){return new v(t)}class q{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function S(t){return new q(t)}const u=new Set;function T(t,e,n,h=!1,a){u.clear();for(const r in n){const i=t.get(r);if(!i)continue;const l=n[r],s=P(i,l);if(s!==l&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:i,originalValue:l,sanitizedValue:s}}),u.add(i.name),i&&(h||i.editable)){const c=g(i,s);if(c)return f(y(c,i,s));e[i.name]=s}}for(const r of(t==null?void 0:t.requiredFields)??[])if(!u.has(r.name))return f(`missing required field "${r.name}"`);return null}function P(t,e){let n=e;return typeof e=="string"&&w(t)?n=parseFloat(e):e!=null&&I(t)&&typeof e!="string"&&(n=String(e)),_(n)}let o;function x(t,e){if(!t||!m(e))return t;if("rings"in t||"paths"in t){if(d(o))throw new TypeError("geometry engine not loaded");return o.simplify(e,t)}return t}async function E(){return d(o)&&(o=await p(()=>import("./geometryEngineJSON-a45b7108.js"),["assets/geometryEngineJSON-a45b7108.js","assets/geometryEngineBase-3dd302e0.js","assets/geometryEngineJSON-45c195fe.js","assets/json-48e3ea08.js"])),o}async function z(t,e){!m(t)||e!=="esriGeometryPolygon"&&e!=="esriGeometryPolyline"||await E()}export{f as a,S as f,x as g,T as m,z as w};
