import{o as L}from"./jsonMap-92eea954.js";import{g as c,l as g}from"./locale-30120714.js";import{x as M}from"./typedArrayUtil-6bfe4dae.js";const n={year:"numeric",month:"numeric",day:"numeric"},h={year:"numeric",month:"long",day:"numeric"},m={year:"numeric",month:"short",day:"numeric"},i={year:"numeric",month:"long",weekday:"long",day:"numeric"},e={hour:"numeric",minute:"numeric"},r={...e,second:"numeric"},u={"short-date":n,"short-date-short-time":{...n,...e},"short-date-short-time-24":{...n,...e,hour12:!1},"short-date-long-time":{...n,...r},"short-date-long-time-24":{...n,...r,hour12:!1},"short-date-le":n,"short-date-le-short-time":{...n,...e},"short-date-le-short-time-24":{...n,...e,hour12:!1},"short-date-le-long-time":{...n,...r},"short-date-le-long-time-24":{...n,...r,hour12:!1},"long-month-day-year":h,"long-month-day-year-short-time":{...h,...e},"long-month-day-year-short-time-24":{...h,...e,hour12:!1},"long-month-day-year-long-time":{...h,...r},"long-month-day-year-long-time-24":{...h,...r,hour12:!1},"day-short-month-year":m,"day-short-month-year-short-time":{...m,...e},"day-short-month-year-short-time-24":{...m,...e,hour12:!1},"day-short-month-year-long-time":{...m,...r},"day-short-month-year-long-time-24":{...m,...r,hour12:!1},"long-date":i,"long-date-short-time":{...i,...e},"long-date-short-time-24":{...i,...e,hour12:!1},"long-date-long-time":{...i,...r},"long-date-long-time-24":{...i,...r,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":e,"long-time":r},s=L()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});s.apiValues;s.toJSON.bind(s);s.fromJSON.bind(s);const f={ar:"ar-u-nu-latn-ca-gregory"};let d=new WeakMap,D=u["short-date-short-time"];function p(t){const o=t||D;let a=d.get(o);if(!a){const y=g(),S=f[g()]||y;a=new Intl.DateTimeFormat(S,o),d.set(o,a)}return a}function F(t){return t?u[t]:null}function W(t,o){return p(o).format(t)}c(()=>{d=new WeakMap,D=u["short-date-short-time"]});const Y={ar:"ar-u-nu-latn"};let l=new WeakMap,T={};function w(t){const o=t||T;if(!l.has(o)){const a=g(),y=Y[g()]||a;l.set(o,new Intl.NumberFormat(y,t))}return M(l.get(o))}function b(t={}){const o={};return t.digitSeparator!=null&&(o.useGrouping=t.digitSeparator),t.places!=null&&(o.minimumFractionDigits=o.maximumFractionDigits=t.places),o}function x(t,o){return t===-0&&(t=0),w(o).format(t)}c(()=>{l=new WeakMap,T={}});export{W as L,F as S,x as m,b as u};
