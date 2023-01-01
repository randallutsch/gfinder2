import{r as n,t as d,o as g}from"./typedArrayUtil-6bfe4dae.js";import{D as m,d as _,b as f}from"./promiseUtils-281d25c9.js";import{r as w,M as c,h as B,b as R,i as b}from"./mat3-45e3f2eb.js";import{e as S}from"./mat3f32-d3d088e8.js";import{t as u}from"./vec2f32-461e65a9.js";import{r as T}from"./utils-8ec30506.js";import{r as v}from"./context-util-2080d28f.js";import{M as k,P as p,U as E,G as y,D as M}from"./enums-64ab819c.js";import{E as P}from"./Texture-a2ec75db.js";class A{constructor(t,e,i){this.pixelBlock=t,this.extent=e,this.originalPixelBlock=i}get width(){return n(this.pixelBlock)?this.pixelBlock.width:0}get height(){return n(this.pixelBlock)?this.pixelBlock.height:0}render(t){const e=this.pixelBlock;if(d(e))return;const i=this.filter({pixelBlock:e});if(d(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),h=t.createImageData(i.pixelBlock.width,i.pixelBlock.height);h.data.set(r),t.putImageData(h,0,0)}getRenderedRasterPixels(){const t=this.filter({pixelBlock:this.pixelBlock});return d(t.pixelBlock)?null:{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)}}}function D(s){return s&&"render"in s}function I(s){const t=document.createElement("canvas");return t.width=s.width,t.height=s.height,s.render(t.getContext("2d")),t}function $(s){return D(s)?s instanceof A?g(s.getRenderedRasterPixels(),t=>t.renderedRasterPixels):I(s):s}class j extends T{constructor(t=null,e){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=e.immutable??!1,this.requestRenderOnSourceChangedEnabled=e.requestRenderOnSourceChangedEnabled??!0,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),n(this._uploadStatus)&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return this._height!==void 0?this._height:this._sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){t==null&&this._source==null||(this._source=t,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width),this.invalidateTexture())}get width(){return this._width!==void 0?this._width:this._sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t)}async setSourceAsync(t,e){n(this._uploadStatus)&&this._uploadStatus.controller.abort();const i=new AbortController,r=m();return _(e,()=>i.abort()),_(i,h=>r.reject(h)),this._uploadStatus={controller:i,resolver:r},this.source=t,r.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}updateTransitionProperties(t,e){t>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(t,e)}setTransform(t){const e=w(this.transforms.dvs),[i,r]=t.toScreenNoRotation([0,0],[this.x,this.y]),h=this.resolution/this.pixelRatio/t.resolution,o=h*this.width,a=h*this.height,l=Math.PI*this.rotation/180;c(e,e,u(i,r)),c(e,e,u(o/2,a/2)),B(e,e,-l),c(e,e,u(-o/2,-a/2)),R(e,e,u(o,a)),b(this.transforms.dvs,t.displayViewMat3,e)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}async updateTexture({context:t,painter:e}){if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const i=$(this.source);try{if(n(this._uploadStatus)){const{controller:r,resolver:h}=this._uploadStatus,o={signal:r.signal},{width:a,height:l}=this,x=this._texture;await e.textureUploadManager.enqueueTextureUpdate({data:i,texture:x,width:a,height:l},o),h.resolve(),this._uploadStatus=null}else this._texture.setData(i);this.ready()}catch(r){f(r)}}onDetach(){this.destroy()}_createTransforms(){return{dvs:S()}}_createTexture(t){const e=this.immutable&&t.type===v.WEBGL2;return new P(t,{target:k.TEXTURE_2D,pixelFormat:p.RGBA,internalFormat:e?E.RGBA8:p.RGBA,dataType:y.UNSIGNED_BYTE,wrapMode:M.CLAMP_TO_EDGE,isImmutable:e,width:this._sourceWidth,height:this._sourceHeight})}}export{j as R,D as S,I as T,A as i};
