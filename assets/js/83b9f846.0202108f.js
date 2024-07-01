"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[470],{4137:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>_});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=t.createContext({}),d=function(e){var n=t.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},s=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=d(o),u=r,_=l["".concat(p,".").concat(u)]||l[u]||m[u]||a;return o?t.createElement(_,i(i({ref:n},s),{},{components:o})):t.createElement(_,i({ref:n},s))}));function _(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[l]="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=o[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9732:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=o(7462),r=(o(7294),o(4137));const a={},i="Percepci\xf3n",c={unversionedId:"API-rest-documentacion/Percepcion",id:"API-rest-documentacion/Percepcion",title:"Percepci\xf3n",description:"Url//demo.pro5.fastura.app/api/perceptions",source:"@site/docs/API-rest-documentacion/13-Percepcion.md",sourceDirName:"API-rest-documentacion",slug:"/API-rest-documentacion/Percepcion",permalink:"/admin/API-rest-documentacion/Percepcion",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Otras funcionalidades",permalink:"/admin/API-rest-documentacion/Otras-funcionalidades"},next:{title:"Productos",permalink:"/admin/API-rest-documentacion/Productos"}},p={},d=[{value:"1. JSON A ENVIAR",id:"1-json-a-enviar",level:2},{value:"2. JSON DE RESPUESTA",id:"2-json-de-respuesta",level:2}],s={toc:d},l="wrapper";function m(e){let{components:n,...o}=e;return(0,r.kt)(l,(0,t.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"percepci\xf3n"},"Percepci\xf3n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Url:")," ",(0,r.kt)("a",{parentName:"li",href:"https://demo.pro5.fastura.app/api/perceptions"},"https://demo.pro5.fastura.app/api/perceptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Token:")," HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt")),(0,r.kt)("h2",{id:"1-json-a-enviar"},"1. JSON A ENVIAR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "serie_documento": "P001",\n  "numero_documento": "#",\n  "fecha_de_emision": "2018-10-09",\n  "hora_de_emision": "10:11:11",\n  "codigo_tipo_documento": "40",\n  "datos_del_emisor": {\n    "codigo_pais": "PE",\n    "ubigeo": "150101",\n    "direccion": "Av. 2 de Mayo",\n    "correo_electronico": "demo@gmail.com",\n    "telefono": "427-1148",\n    "codigo_del_domicilio_fiscal": "0000"\n  }, \n  "datos_del_cliente_o_receptor":{\n    "codigo_tipo_documento_identidad": "6",\n    "numero_documento": "10414711225",\n    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",\n    "nombre_comercial": "EMPRESA XYZ",\n    "codigo_pais": "PE",\n    "ubigeo": "150101",\n    "direccion": "Av. 2 de Mayo",\n    "correo_electronico": "demo@gmail.com",\n    "telefono": "427-1148"\n  },\n  "codigo_tipo_percepcion": "01",\n  "observaciones": "-",\n  "totales": {\n    "total_percibido": 30.00,\n    "total_pagado": 1000.00\n  },\n  "documentos":[\n    {\n      "codigo_tipo_documento": "01",\n      "serie_documento": "F001",\n      "numero_documento": "3",\n      "fecha_de_emision": "2018-10-09",\n      "codigo_tipo_moneda": "PEN",\n      "pagos": [\n        {\n          "fecha_de_pago": "2018-10-09",\n          "total_pago": 200.00,\n          "codigo_tipo_moneda": "PEN"\n        }\n      ],\n      "tipo_de_cambio": {\n        "codigo_tipo_moneda_referencia": "PEN",\n        "codigo_tipo_moneda_objetivo": "PEN",\n        "factor": 1,\n        "fecha_tipo_de_cambio": "2018-10-09"\n      },\n      "fecha_de_percepcion": "2018-10-09",\n      "total_documento": 400.00,\n      "total_percibido": 12.00,\n      "total_a_pagar": 412.00,\n      "total_pagado": 412.00\n    },\n    {\n      "codigo_tipo_documento": "01",\n      "serie_documento": "F001",\n      "numero_documento": "4",\n      "fecha_de_emision": "2018-10-09",\n      "codigo_tipo_moneda": "USD",\n      "total_documento": 200.00,\n      "pagos": [\n        {\n          "fecha_de_pago": "2018-10-09",\n          "total_pago": 200.00,\n          "codigo_tipo_moneda": "USD"\n        }\n      ],\n      "tipo_de_cambio": {\n        "codigo_tipo_moneda_referencia": "USD",\n        "codigo_tipo_moneda_objetivo": "PEN",\n        "factor": 3.00,\n        "fecha_tipo_de_cambio": "2018-10-09"\n      },\n      "fecha_de_percepcion": "2018-10-09",\n      "total_percibido": 18.00,\n      "total_a_pagar": 618.00,\n      "total_pagado": 618.00\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"2-json-de-respuesta"},"2. JSON DE RESPUESTA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": {\n        "number": "P001-1",\n        "filename": "20302019010-40-P001-1",\n        "external_id": "7b41fbbb-b8ae-42f6-8722-61715e8db3b1"\n    },\n    "links": {\n        "xml": "https://demo.pro5.fastura.app/downloads/perception/xml/7b41fbbb-b8ae-42f6-8722-61715e8db3b1",\n        "pdf": "https://demo.pro5.fastura.app/downloads/perception/pdf/7b41fbbb-b8ae-42f6-8722-61715e8db3b1",\n        "cdr": "https://demo.pro5.fastura.app/downloads/perception/cdr/7b41fbbb-b8ae-42f6-8722-61715e8db3b1"\n    },\n    "response": {\n        "code": "0",\n        "description": "El Comprobante numero P001-1 ha sido aceptado",\n        "notes": []\n    }\n}\n')))}m.isMDXComponent=!0}}]);