"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[3582],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(7462),r=(t(7294),t(4137));const o={},l="Anulaci\xf3n boletas",i={unversionedId:"API-rest-documentacion/Anulacion-boletas",id:"API-rest-documentacion/Anulacion-boletas",title:"Anulaci\xf3n boletas",description:"REGISTRAR Y ENVIAR ANULACI\xd3N",source:"@site/docs/API-rest-documentacion/08-Anulacion-boletas.md",sourceDirName:"API-rest-documentacion",slug:"/API-rest-documentacion/Anulacion-boletas",permalink:"/admin/API-rest-documentacion/Anulacion-boletas",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Anulaci\xf3n facturas - notas",permalink:"/admin/API-rest-documentacion/Anulacion-facturas-notas"},next:{title:"Gu\xeda de remisi\xf3n",permalink:"/admin/API-rest-documentacion/Guia-de-remision"}},s={},u=[{value:"REGISTRAR Y ENVIAR ANULACI\xd3N",id:"registrar-y-enviar-anulaci\xf3n",level:2},{value:"Ejemplo:",id:"ejemplo",level:3},{value:"1. JSON A ENVIAR",id:"1-json-a-enviar",level:3},{value:"2. JSON RESPUESTA",id:"2-json-respuesta",level:3},{value:"CONSULTAR TICKET ANULACI\xd3N",id:"consultar-ticket-anulaci\xf3n",level:2},{value:"Ejemplo:",id:"ejemplo-1",level:3},{value:"1. JSON A ENVIAR",id:"1-json-a-enviar-1",level:3},{value:"2. JSON RESPUESTA",id:"2-json-respuesta-1",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anulaci\xf3n-boletas"},"Anulaci\xf3n boletas"),(0,r.kt)("h2",{id:"registrar-y-enviar-anulaci\xf3n"},"REGISTRAR Y ENVIAR ANULACI\xd3N"),(0,r.kt)("p",null,"Cuando se genera una anulaci\xf3n de boleta, esta no se env\xeda inmediatamente a Sunat. Este documento se env\xeda mediante un res\xfamen, este puede contener 1 o m\xe1s boletas, para registrar y enviar el res\xfamen de anulaci\xf3n puede usar el siguiente servicio, necesitar\xe1 la url, el token, la fecha de emisi\xf3n de las boletas que conformar\xe1n el resumen, y la data de los documentos."),(0,r.kt)("p",null,"Cuando haya culminado este procedimiento, deber\xe1 consultar el ticket del resumen de anulaci\xf3n generado, se explicar\xe1 en el siguiente punto."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"M\xe9todo:")," POST"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Url:")," ",(0,r.kt)("a",{parentName:"li",href:"https://demo.pro5.fastura.app/api/summaries"},"https://demo.pro5.fastura.app/api/summaries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Token:")," HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt")),(0,r.kt)("h3",{id:"ejemplo"},"Ejemplo:"),(0,r.kt)("h3",{id:"1-json-a-enviar"},"1. JSON A ENVIAR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fecha_de_emision_de_documentos": "2019-01-20",\n  "codigo_tipo_proceso": "3",\n  "documentos": [\n    {\n      "external_id": "470cd665-c7bf-4b7d-9e0c-8631bf444c9c",\n      "motivo_anulacion": "Se duplic\xf3 documento"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"2-json-respuesta"},"2. JSON RESPUESTA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": {\n        "external_id": "8f6568f5-e478-4ae2-8d21-0b91c0112e57",\n        "ticket": "1548517805048"\n    }\n}\n')),(0,r.kt)("h2",{id:"consultar-ticket-anulaci\xf3n"},"CONSULTAR TICKET ANULACI\xd3N"),(0,r.kt)("p",null,"Para consultar el ticket del resumen de anulaci\xf3n generado puede usar el siguiente servicio, necesitar\xe1 la ",(0,r.kt)("strong",{parentName:"p"},"url"),", el ",(0,r.kt)("strong",{parentName:"p"},"token"),", el ",(0,r.kt)("strong",{parentName:"p"},"external_id")," (resumen) y el ",(0,r.kt)("strong",{parentName:"p"},"numero de ticket"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"M\xe9todo:")," POST"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Url:"),"  ",(0,r.kt)("a",{parentName:"li",href:"https://demo.pro5.fastura.app/api/summaries/status"},"https://demo.pro5.fastura.app/api/summaries/status")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Token:")," HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt")),(0,r.kt)("p",null,"Cuando haya culminado este procedimiento, el resumen de anulaci\xf3n con la boletas que lo conforman han sido aceptadas exitosamente por Sunat, es decir el (los) documento(s) han sido anulados."),(0,r.kt)("h3",{id:"ejemplo-1"},"Ejemplo:"),(0,r.kt)("h3",{id:"1-json-a-enviar-1"},"1. JSON A ENVIAR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n        "external_id": "8f6568f5-e478-4ae2-8d21-0b91c0112e57",\n        "ticket": "1548517805048"\n}\n\n')),(0,r.kt)("h3",{id:"2-json-respuesta-1"},"2. JSON RESPUESTA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": {\n        "filename": "20415963255-RC-20190126-6",\n        "external_id": "8f6568f5-e478-4ae2-8d21-0b91c0112e57"\n    },\n    "links": {\n        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/summary/xml/8f6568f5-e478-4ae2-8d21-0b91c0112e57",\n        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/summary/cdr/8f6568f5-e478-4ae2-8d21-0b91c0112e57"\n    },\n    "response": {\n        "code": "0",\n        "description": "El Resumen diario RC-20190126-6, ha sido aceptado",\n        "notes": []\n    }\n}\n\n')))}d.isMDXComponent=!0}}]);