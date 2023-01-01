import{g as I}from"./Graphic-17f3b359.js";import{j as y}from"./Collection-8f94e599.js";import{a as s}from"./Error-1dfe2922.js";import{y as $}from"./string-7d6c8f5c.js";import{r as m,t as w}from"./typedArrayUtil-4015bf74.js";import{n as E}from"./request-4f5c54dd.js";import{n as S}from"./uuid-73213768.js";import{v as R}from"./normalizeUtils-9ff08cf4.js";import{o as O,d as L}from"./EditBusLayer-862b6183.js";import"./cast-7ef3a066.js";import"./ArrayPool-45db95ab.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-e323addc.js";import"./geometry-22feb2bb.js";import"./Extent-54ef1174.js";import"./Polyline-d942e774.js";import"./typeUtils-17403a33.js";import"./jsonMap-c8081704.js";import"./PopupTemplate-9da636f6.js";import"./Clonable-c315fc8d.js";import"./fieldUtils-75feb382.js";import"./preload-helper-101896b7.js";import"./arcadeOnDemand-797f4f1c.js";import"./enumeration-cda3949b.js";import"./number-1bdcdfd9.js";import"./locale-30120714.js";import"./Identifiable-d701141a.js";import"./symbols-87ca67f4.js";import"./CIMSymbol-52d72a23.js";import"./Symbol-6522d2f3.js";import"./Color-7a3d8c62.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-2c2d0d87.js";import"./aaBoundingBox-10130714.js";import"./persistableUrlUtils-afa98d6c.js";import"./collectionUtils-07fb1a58.js";import"./Portal-0c20e3a4.js";import"./Loadable-772aaf20.js";import"./Promise-e08b9d4d.js";import"./PortalGroup-100f1bed.js";import"./PortalUser-7acb0e3c.js";import"./jsonUtils-196b5f3d.js";import"./Evented-7dfb249a.js";import"./SimpleObservable-ddf0ceba.js";var h;(function(e){e.GLTF_BINARY="3D_glb",e.GLTF_JSON="3D_gltf"})(h||(h={}));function U(e){return e&&e.applyEdits!=null}async function Ge(e,t,a,n={}){var r;let i,l;const d={edits:a,result:new Promise((o,p)=>{i=o,l=p})};e.emit("apply-edits",d);try{const{results:o,edits:p}=await G(e,t,a,n),c=A=>A.filter(v=>!v.error).map($),u={edits:p,addedFeatures:c(o.addFeatureResults),updatedFeatures:c(o.updateFeatureResults),deletedFeatures:c(o.deleteFeatureResults),addedAttachments:c(o.addAttachmentResults),updatedAttachments:c(o.updateAttachmentResults),deletedAttachments:c(o.deleteAttachmentResults)};return(r=o.editedFeatureResults)!=null&&r.length&&(u.editedFeatures=o.editedFeatureResults),(u.addedFeatures.length||u.updatedFeatures.length||u.deletedFeatures.length||u.addedAttachments.length||u.updatedAttachments.length||u.deletedAttachments.length)&&(e.emit("edits",u),O(e)&&L.emit("edits",{layer:e,event:u})),i(u),o}catch(o){throw l(o),o}}async function G(e,t,a,n){if(await e.load(),!U(t))throw new s(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!e.editingEnabled)throw new s(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:l}=await T(e,a,n);return i.addFeatures.length||i.updateFeatures.length||i.deleteFeatures.length||i.addAttachments.length||i.updateAttachments.length||i.deleteAttachments.length?{edits:i,results:await t.applyEdits(i,l)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function T(e,t,a){const n=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),i=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),l=m(e.infoFor3D);if(!t||!n&&!i)throw new s(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&a&&a.gdbVersion)throw new s(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&a&&a.rollbackOnFailureEnabled)throw new s(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&a&&a.globalIdUsed)throw new s(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&i)throw new s(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!a||!a.globalIdUsed)&&i)throw new s(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const d={...a};if(d.rollbackOnFailureEnabled!=null||e.capabilities.editing.supportsRollbackOnFailure||(d.rollbackOnFailureEnabled=!0),d.rollbackOnFailureEnabled===!1&&d.returnServiceEditsOption==="original-and-current-features")throw new s(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!e.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference&&d.returnServiceEditsInSourceSR)throw new s(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(d.returnServiceEditsInSourceSR&&d.returnServiceEditsOption!=="original-and-current-features")throw new s(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const r={...t};if(r.addFeatures=t&&y.isCollection(t.addFeatures)?t.addFeatures.toArray():r.addFeatures||[],r.updateFeatures=t&&y.isCollection(t.updateFeatures)?t.updateFeatures.toArray():r.updateFeatures||[],r.deleteFeatures=t&&y.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():r.deleteFeatures||[],r.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new s(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(r.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new s(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(r.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new s(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");r.addAttachments=r.addAttachments||[],r.updateAttachments=r.updateAttachments||[],r.deleteAttachments=r.deleteAttachments||[],r.addFeatures=r.addFeatures.map(b),r.updateFeatures=r.updateFeatures.map(b),r.addAssets=[];const o=a&&a.globalIdUsed||l;return r.addFeatures.forEach(p=>k(p,e,o)),r.updateFeatures.forEach(p=>x(p,e,o)),r.deleteFeatures.forEach(p=>B(p,e,o)),r.addAttachments.forEach(p=>g(p,e)),r.updateAttachments.forEach(p=>g(p,e)),l&&await _(r,e),{edits:await D(r),options:d}}function f(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new s(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&m(e.geometry)){if(e.geometry.hasZ&&t.capabilities.data.supportsZ===!1)throw new s(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&t.capabilities.data.supportsM===!1)throw new s(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function k(e,t,a){f(e,t,a)}function B(e,t,a){f(e,t,a)}function x(e,t,a){if(f(e,t,a),"geometry"in e&&m(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new s(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function g(e,t){const{feature:a,attachment:n}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new s(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new s(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!n.globalId)throw new s(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!n.data&&!n.uploadId)throw new s(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(n.data instanceof File&&n.data.name)&&!n.name)throw new s(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&n.uploadId)throw new s(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof n.data=="string"){const i=E(n.data);if(i&&!i.isBase64)throw new s(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function D(e){const t=e.addFeatures,a=e.updateFeatures,n=t.concat(a).map(r=>r.geometry),i=await R(n),l=t.length,d=a.length;return i.slice(0,l).forEach((r,o)=>e.addFeatures[o].geometry=r),i.slice(l,l+d).forEach((r,o)=>e.updateFeatures[o].geometry=r),e}function b(e){const t=new I;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function _(e,t){if(w(t.infoFor3D))return;const{infoFor3D:a}=t;let n=!1;for(const d of a.editFormats)if(d===h.GLTF_BINARY){n=!0;break}const i=[];for(const d of e.addFeatures)i.push(F(d,e,t,n));for(const d of e.updateFeatures)i.push(F(d,e,t,n));const l=await Promise.allSettled(i);for(const d of l)if(d.status==="rejected")throw d.reason}async function F(e,t,a,n){if(w(e.geometry)||e.geometry.type!=="mesh")return;const i=e.geometry,l=a.globalIdField;if(m(a.parsedUrl)&&m(i.external)&&Array.isArray(i.external.source)&&i.external.source.length===1&&"source"in i.external.source[0]&&typeof i.external.source[0].source=="string"&&i.external.source[0].source.startsWith(a.parsedUrl.path))return;if(!n)throw new s(`${a.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");const d=await i.toBinaryGLTF(),r=await d.buffer(),o=`{${S()}}`,p=`${o}.glb`;t.addAssets.push({featureGlobalId:e.getAttribute(l),assetMapGlobalId:o,assetName:p,flags:0,data:r.data,mimeType:r.type,assetType:h.GLTF_BINARY,feature:e})}export{Ge as applyEdits};
