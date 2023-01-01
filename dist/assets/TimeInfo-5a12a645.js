import{e as i,y as l,n as y,l as T}from"./cast-34ff1fab.js";import{g as U,T as f}from"./TimeExtent-b83e45a0.js";import{r as h}from"./typedArrayUtil-6bfe4dae.js";import"./ensureType-abaf235a.js";import{o as E}from"./jsonMap-92eea954.js";import{y as g}from"./string-46813dd9.js";import{o as m,r as w}from"./Extent-b8913cd1.js";const a=E()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});var p;let o=p=class extends T{constructor(t){super(t),this.value=0,this.unit="milliseconds"}toMilliseconds(){return U(this.value,this.unit,"milliseconds")}clone(){return new p({value:this.value,unit:this.unit})}};i([l({type:Number,json:{write:!0},nonNullable:!0})],o.prototype,"value",void 0),i([l({type:a.apiValues,json:{type:a.jsonValues,read:a.read,write:a.write},nonNullable:!0})],o.prototype,"unit",void 0),o=p=i([y("esri.TimeInterval")],o);const d=o;var v;let s=v=class extends T{constructor(t){super(t),this.respectsDaylightSaving=!1,this.timezone=null}readRespectsDaylightSaving(t,e){return e.respectsDaylightSaving!==void 0?e.respectsDaylightSaving:e.respectDaylightSaving!==void 0&&e.respectDaylightSaving}clone(){const{respectsDaylightSaving:t,timezone:e}=this;return new v({respectsDaylightSaving:t,timezone:e})}};i([l({type:Boolean,json:{write:!0}})],s.prototype,"respectsDaylightSaving",void 0),i([m("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],s.prototype,"readRespectsDaylightSaving",null),i([l({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],s.prototype,"timezone",void 0),s=v=i([y("esri.layers.support.TimeReference")],s);const j=s;var c;let n=c=class extends T{constructor(t){super(t),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(t,e){if(!e.timeExtent||!Array.isArray(e.timeExtent)||e.timeExtent.length!==2)return null;const r=new Date(e.timeExtent[0]),u=new Date(e.timeExtent[1]);return new f({start:r,end:u})}writeFullTimeExtent(t,e){t&&h(t.start)&&h(t.end)?e.timeExtent=[t.start.getTime(),t.end.getTime()]:e.timeExtent=null}readInterval(t,e){return e.timeInterval&&e.timeIntervalUnits?new d({value:e.timeInterval,unit:a.fromJSON(e.timeIntervalUnits)}):e.defaultTimeInterval&&e.defaultTimeIntervalUnits?new d({value:e.defaultTimeInterval,unit:a.fromJSON(e.defaultTimeIntervalUnits)}):null}writeInterval(t,e){if(t){const r=t.toJSON();e.timeInterval=r.value,e.timeIntervalUnits=r.unit}else e.timeInterval=null,e.timeIntervalUnits=null}clone(){const{cumulative:t,endField:e,hasLiveData:r,interval:u,startField:x,timeReference:I,fullTimeExtent:D,trackIdField:S,useTime:F}=this;return new c({cumulative:t,endField:e,hasLiveData:r,interval:u,startField:x,timeReference:g(I),fullTimeExtent:g(D),trackIdField:S,useTime:F})}};i([l({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],n.prototype,"cumulative",void 0),i([l({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],n.prototype,"endField",void 0),i([l({type:f,json:{write:{enabled:!0,allowNull:!0}}})],n.prototype,"fullTimeExtent",void 0),i([m("fullTimeExtent",["timeExtent"])],n.prototype,"readFullTimeExtent",null),i([w("fullTimeExtent")],n.prototype,"writeFullTimeExtent",null),i([l({type:Boolean,json:{write:!0}})],n.prototype,"hasLiveData",void 0),i([l({type:d,json:{write:{enabled:!0,allowNull:!0}}})],n.prototype,"interval",void 0),i([m("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],n.prototype,"readInterval",null),i([w("interval")],n.prototype,"writeInterval",null),i([l({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],n.prototype,"startField",void 0),i([l({type:j,json:{write:{enabled:!0,allowNull:!0}}})],n.prototype,"timeReference",void 0),i([l({type:String,json:{write:{enabled:!0,allowNull:!0}}})],n.prototype,"trackIdField",void 0),i([l({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],n.prototype,"useTime",void 0),n=c=i([y("esri.layers.support.TimeInfo")],n);const B=n;export{a as e,d as l,B as v};
