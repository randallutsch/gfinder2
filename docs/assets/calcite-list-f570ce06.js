import{d as n,H as r,g as a,s as c}from"./widget-578feb2e.js";import{u as s}from"./interactive-52dcf836.js";import"./cast-7ef3a066.js";import"./typedArrayUtil-4015bf74.js";import"./string-7d6c8f5c.js";import"./Error-1dfe2922.js";import"./ArrayPool-45db95ab.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-e323addc.js";import"./intl-5caf62af.js";import"./number-1bdcdfd9.js";import"./jsonMap-c8081704.js";import"./locale-30120714.js";import"./messages-c2cf09a4.js";import"./request-4f5c54dd.js";import"./preload-helper-101896b7.js";import"./assets-6d4d2dad.js";import"./Evented-7dfb249a.js";import"./Promise-e08b9d4d.js";import"./reactiveUtils-b911287d.js";import"./uuid-73213768.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const l={container:"container"},m="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.container *{box-sizing:border-box}::slotted(calcite-list-item){margin-block-end:1px;--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}::slotted(calcite-list-item:last-child){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}",e=n(class extends r{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.disabled=!1}componentDidRender(){s(this)}async setFocus(){const t=this.el.querySelector("calcite-list-item:not([non-interactive])");t==null||t.setFocus()}render(){return a(c,{role:"list"},a("div",{class:l.container},a("slot",null)))}get el(){return this}static get style(){return m}},[1,"calcite-list",{disabled:[516],headingLevel:[514,"heading-level"],setFocus:[64]}]);function o(){if(typeof customElements>"u")return;["calcite-list"].forEach(i=>{switch(i){case"calcite-list":customElements.get(i)||customElements.define(i,e);break}})}o();const I=e,q=o;export{I as CalciteList,q as defineCustomElement};