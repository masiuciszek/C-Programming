(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{115:function(t,n,c){"use strict";c.r(n);var e=c(1),a=c(111),o=c(113),i=c(114);const u=Object(a.b)({id:"counter",initial:"inactive",context:{count:0},states:{inactive:{on:{TOGGLE:{target:"active"}}},active:{entry:Object(a.a)({count:t=>t.count+1}),on:{TOGGLE:{target:"inactive"},RESET:{actions:Object(a.a)({count:0})}}}}});n.default=()=>{const[t,n]=Object(o.a)(u),c=t.matches("active");return e.a(i.a,null,e.a("h1",null,t.value),e.a("h3",null,t.context.count),e.a("button",{type:"button",onClick:()=>n("TOGGLE")},c?"Now I am Active":"No I am Inactive"),t.context.count>0&&"active"===t.value&&e.a("button",{type:"button",onClick:()=>n("RESET")},"Reset"))}}}]);