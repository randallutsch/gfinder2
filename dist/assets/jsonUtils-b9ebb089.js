import{c as u,f as d,a as b,b as w,y as h,n as C,d as $,S as x,m as I,e as D,k as L,i as M}from"./symbols-0eeb49ca.js";import{a as c}from"./Error-e5869661.js";import{r as f,t as k}from"./typedArrayUtil-6bfe4dae.js";import{m as v,S as T}from"./SimpleFillSymbol-80498a78.js";const y={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function F(e,s=y){var a,m;if(!e)return{symbol:null};const{retainId:i=y.retainId,ignoreDrivers:n=y.ignoreDrivers,hasLabelingContext:r=y.hasLabelingContext,retainCIM:l=y.retainCIM}=s;let o=null;if(u(e)||e instanceof d)o=e.clone();else if(e.type==="cim"){const t=(m=(a=e.data)==null?void 0:a.symbol)==null?void 0:m.type;if(t!=="CIMPointSymbol")return{error:new c("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${t||"unknown"}' is unsupported in 3D`,{symbol:e})};o=l?e.clone():b.fromCIMSymbol(e)}else if(e instanceof v)o=w.fromSimpleLineSymbol(e);else if(e instanceof h)o=b.fromSimpleMarkerSymbol(e);else if(e instanceof C)o=b.fromPictureMarkerSymbol(e);else if(e instanceof T)o=s.geometryType&&s.geometryType==="mesh"?$.fromSimpleFillSymbol(e):x.fromSimpleFillSymbol(e);else{if(!(e instanceof I))return{error:new c("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${e.type||e.declaredClass}' is unsupported in 3D`,{symbol:e})};o=r?D.fromTextSymbol(e):b.fromTextSymbol(e)}if(i&&o&&o.type!=="cim"&&(o.id=e.id),n&&u(o))for(let t=0;t<o.symbolLayers.length;++t)o.symbolLayers.getItemAt(t)._ignoreDrivers=!0;return{symbol:o}}const P=["building-scene","integrated-mesh","point-cloud","scene"];function A(e,s,i,n){const r=g(e,{},{context:n,isLabelSymbol:!1});f(r)&&(s[i]=r)}function W(e,s,i,n){const r=g(e,{},{context:n,isLabelSymbol:!0});f(r)&&(s[i]=r)}function p(e){return e instanceof L||e instanceof d}function g(e,s,i){var m;if(k(e))return null;const{context:n,isLabelSymbol:r}=i,l=n==null?void 0:n.origin,o=n==null?void 0:n.messages;if(l==="web-scene"&&!p(e)){const t=F(e,{retainCIM:!0,hasLabelingContext:r});return f(t.symbol)?t.symbol.write(s,n):(o==null||o.push(new c("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:n,error:t.error})),null)}const a=(m=n==null?void 0:n.layer)==null?void 0:m.type;return l!=="web-map"&&(l!=="portal-item"||a&&P.includes(a))||!p(e)?e.write(s,n):(o==null||o.push(new c("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:e,context:n})),null)}function _(e,s){return M(e,null,s)}export{W as c,A as m,_ as p};