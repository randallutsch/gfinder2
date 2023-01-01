import{e as t,y as r,n}from"./cast-34ff1fab.js";import"./geometry-1b3a0099.js";import"./typedArrayUtil-6bfe4dae.js";import"./ensureType-abaf235a.js";import{w as s,k as i,a}from"./Extent-b8913cd1.js";import{x as m}from"./WebTileLayer-e3731b2b.js";import{j as l,p as e}from"./TileInfo-f6a83d08.js";import c from"./PortalItem-a267e3e1.js";import"./string-46813dd9.js";import"./Error-e5869661.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-281d25c9.js";import"./Polyline-7684a66d.js";import"./typeUtils-0cf27003.js";import"./jsonMap-92eea954.js";import"./request-c6faf466.js";import"./preload-helper-596b5639.js";import"./MultiOriginJSONSupport-98bacd7d.js";import"./Layer-685ea357.js";import"./Evented-fac53f7f.js";import"./Identifiable-016ad07d.js";import"./Loadable-3c0fb2d0.js";import"./Promise-19e65545.js";import"./BlendLayer-1dfdcb30.js";import"./parser-6760a715.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./mat4-62d5e6a4.js";import"./common-701a4199.js";import"./OperationalLayer-421969eb.js";import"./TimeExtent-b83e45a0.js";import"./persistableUrlUtils-3427b748.js";import"./ElevationInfo-7059590d.js";import"./fieldUtils-c253753a.js";import"./arcadeOnDemand-c5034a8b.js";import"./lengthUtils-02fceda8.js";import"./unitUtils-2906b0b4.js";import"./opacityUtils-ea6b845d.js";import"./PortalLayer-10051047.js";import"./asyncUtils-64877ef6.js";import"./Portal-d13c5d2a.js";import"./locale-30120714.js";import"./PortalGroup-506cda94.js";import"./PortalUser-12cb329a.js";import"./RefreshableLayer-d1776f5f.js";import"./Collection-3317d203.js";import"./SimpleObservable-f97014ec.js";import"./ScaleRangeLayer-d814fce3.js";import"./aaBoundingRect-71c1e25d.js";import"./mathUtils-daf59e84.js";import"./assets-544006ef.js";let o=class extends m{constructor(...p){super(...p),this.portalItem=null,this.isReference=null,this.tileInfo=new l({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new s({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:i.WebMercator}),spatialReference:i.WebMercator,lods:[new e({level:0,scale:591657527591555e-6,resolution:156543.033928}),new e({level:1,scale:295828763795777e-6,resolution:78271.5169639999}),new e({level:2,scale:147914381897889e-6,resolution:39135.7584820001}),new e({level:3,scale:73957190948944e-6,resolution:19567.8792409999}),new e({level:4,scale:36978595474472e-6,resolution:9783.93962049996}),new e({level:5,scale:18489297737236e-6,resolution:4891.96981024998}),new e({level:6,scale:9244648868618e-6,resolution:2445.98490512499}),new e({level:7,scale:4622324434309e-6,resolution:1222.99245256249}),new e({level:8,scale:2311162217155e-6,resolution:611.49622628138}),new e({level:9,scale:1155581108577e-6,resolution:305.748113140558}),new e({level:10,scale:577790.554289,resolution:152.874056570411}),new e({level:11,scale:288895.277144,resolution:76.4370282850732}),new e({level:12,scale:144447.638572,resolution:38.2185141425366}),new e({level:13,scale:72223.819286,resolution:19.1092570712683}),new e({level:14,scale:36111.909643,resolution:9.55462853563415}),new e({level:15,scale:18055.954822,resolution:4.77731426794937}),new e({level:16,scale:9027.977411,resolution:2.38865713397468}),new e({level:17,scale:4513.988705,resolution:1.19432856685505}),new e({level:18,scale:2256.994353,resolution:.597164283559817}),new e({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.subDomains=["a","b","c"],this.fullExtent=new a(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,i.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA"}get refreshInterval(){return 0}};t([r({type:c,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],o.prototype,"portalItem",void 0),t([r({type:Boolean,json:{read:!1,write:!1}})],o.prototype,"isReference",void 0),t([r({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],o.prototype,"refreshInterval",null),t([r({type:l,json:{write:!1}})],o.prototype,"tileInfo",void 0),t([r({type:["show","hide"]})],o.prototype,"listMode",void 0),t([r({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"subDomains",void 0),t([r({readOnly:!0,json:{read:!1,write:!1},nonNullable:!0})],o.prototype,"fullExtent",void 0),t([r({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"urlTemplate",void 0),t([r({type:["OpenStreetMap"]})],o.prototype,"operationalLayerType",void 0),t([r({json:{read:!1}})],o.prototype,"type",void 0),t([r({json:{read:!1,write:!1}})],o.prototype,"copyright",void 0),t([r({json:{read:!1,write:!1}})],o.prototype,"wmtsInfo",void 0),o=t([n("esri.layers.OpenStreetMapLayer")],o);const ae=o;export{ae as default};
