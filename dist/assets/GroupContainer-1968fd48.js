import{o as c}from"./WGLContainer-0eb146a3.js";import{L as d}from"./enums-64ab819c.js";class h extends c{constructor(){super(...arguments),this.requiresDedicatedFBO=!1}dispose(){}doRender(r){const o=this.createRenderParams(r),{context:e,painter:t,profiler:n}=o;this._prevFBO=e.getBoundFramebufferObject(),n.recordContainerStart(this.name);const i=this._getFbo(o),a=t.getRenderTarget();e.bindFramebuffer(i),t.setRenderTarget(i),e.setDepthWriteEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.setClearDepth(1),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.setDepthWriteEnabled(!1);for(const s of this.children)s.beforeRender(r);for(const s of this.children)s.processRender(o);for(const s of this.children)s.afterRender(r);t.setRenderTarget(a),t.releaseFbo(i),e.bindFramebuffer(this._prevFBO),t.beforeRenderLayer(o,this._clippingInfos?255:0,this.computedOpacity),e.setStencilTestEnabled(!1),e.setStencilWriteMask(0),t.blitTexture(e,i.colorTexture,d.NEAREST),t.compositeLayer(o,this.computedOpacity),n.recordContainerEnd()}createRenderParams(r){return{...super.createRenderParams(r),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(r){const{context:o,painter:e}=r,{width:t,height:n}=o.getViewport();return e.acquireFbo(t,n)}}export{h as r};
