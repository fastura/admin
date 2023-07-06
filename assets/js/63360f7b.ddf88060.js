"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[830],{4137:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>_});var t=o(7294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=t.createContext({}),l=function(e){var n=t.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},p=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(o),m=a,_=s["".concat(d,".").concat(m)]||s[m]||u[m]||r;return o?t.createElement(_,i(i({ref:n},p),{},{components:o})):t.createElement(_,i({ref:n},p))}));function _(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1501:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=o(7462),a=(o(7294),o(4137));const r={},i="Retenci\xf3n",c={unversionedId:"API-rest-documentacion/Retencion",id:"API-rest-documentacion/Retencion",title:"Retenci\xf3n",description:"GENERAR COMPROBANTE DE RETENCI\xd3N",source:"@site/docs/API-rest-documentacion/Retencion.md",sourceDirName:"API-rest-documentacion",slug:"/API-rest-documentacion/Retencion",permalink:"/admin/API-rest-documentacion/Retencion",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Respuesta API",permalink:"/admin/API-rest-documentacion/Respuesta-API"},next:{title:"Manuales de instalaci\xf3n",permalink:"/admin/api-rest-documentacion"}},d={},l=[{value:"GENERAR COMPROBANTE DE RETENCI\xd3N",id:"generar-comprobante-de-retenci\xf3n",level:2},{value:"Ejemplo:",id:"ejemplo",level:3},{value:"1. JSON A ENVIAR",id:"1-json-a-enviar",level:3},{value:"2. JSON RESPUESTA",id:"2-json-respuesta",level:2}],p={toc:l},s="wrapper";function u(e){let{components:n,...o}=e;return(0,a.kt)(s,(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"retenci\xf3n"},"Retenci\xf3n"),(0,a.kt)("h2",{id:"generar-comprobante-de-retenci\xf3n"},"GENERAR COMPROBANTE DE RETENCI\xd3N"),(0,a.kt)("p",null,"Es una constancia de que alguna persona moral te retuvo alg\xfan tipo de impuesto, (relativo al Impuesto Sobre la Renta), y sirve para demostrar que dicho impuesto te fue retenido, y presentarlo a la autoridad fiscal en caso que te sea requerido."),(0,a.kt)("p",null,"Para generar un comprobante de retenci\xf3n puede usar el siguiente servicio, necesitar\xe1 la ",(0,a.kt)("strong",{parentName:"p"},"url"),", el ",(0,a.kt)("strong",{parentName:"p"},"token"),", y los ",(0,a.kt)("strong",{parentName:"p"},"datos del documento"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Url:")," ",(0,a.kt)("a",{parentName:"li",href:"http://demo.fastura.app/api/retentions"},"http://demo.fastura.app/api/retentions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Token:")," oZoKGFDzqGJfJilCHowJlZrTadQRBtuJ2fr3PkJz02aU46WPPg")),(0,a.kt)("h3",{id:"ejemplo"},"Ejemplo:"),(0,a.kt)("h3",{id:"1-json-a-enviar"},"1. JSON A ENVIAR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "serie_documento": "R001",\n  "numero_documento": "#",\n  "fecha_de_emision": "2018-10-09",\n  "hora_de_emision": "10:11:11",\n  "codigo_tipo_documento": "20",\n  "datos_del_emisor": {\n    "codigo_pais": "PE",\n    "ubigeo": "150101",\n    "direccion": "Av. 2 de Mayo",\n    "correo_electronico": "demo@gmail.com",\n    "telefono": "427-1148",\n    "codigo_del_domicilio_fiscal": "0000"\n  },\n  "datos_del_proveedor":{\n    "codigo_tipo_documento_identidad": "6",\n    "numero_documento": "10414711225",\n    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",\n    "nombre_comercial": "EMPRESA XYZ",\n    "codigo_pais": "PE",\n    "ubigeo": "150101",\n    "direccion": "Av. 2 de Mayo",\n    "correo_electronico": "demo@gmail.com",\n    "telefono": "427-1148"\n  },\n  "codigo_tipo_retencion": "01",\n  "observaciones": "-",\n  "totales": {\n    "total_retenido": 30.00,\n    "total_pagado": 1000.00\n  },\n  "documentos":[\n    {\n      "codigo_tipo_documento": "01",\n      "serie_documento": "F001",\n      "numero_documento": "3",\n      "fecha_de_emision": "2018-10-09",\n      "codigo_tipo_moneda": "PEN",\n      "pagos": [\n        {\n          "fecha_de_pago": "2018-10-09",\n          "total_pago": 200.00,\n          "codigo_tipo_moneda": "PEN"\n        }\n      ],\n      "tipo_de_cambio": {\n        "codigo_tipo_moneda_referencia": "PEN",\n        "codigo_tipo_moneda_objetivo": "PEN",\n        "factor": 1,\n        "fecha_tipo_de_cambio": "2018-10-09"\n      },\n      "fecha_de_retencion": "2018-10-09",\n      "total_documento": 400.00,\n      "total_retenido": 12.00,\n      "total_a_pagar": 412.00,\n      "total_pagado": 412.00\n    },\n    {\n      "codigo_tipo_documento": "01",\n      "serie_documento": "F001",\n      "numero_documento": "4",\n      "fecha_de_emision": "2018-10-09",\n      "codigo_tipo_moneda": "USD",\n      "total_documento": 200.00,\n      "pagos": [\n        {\n          "fecha_de_pago": "2018-10-09",\n          "total_pago": 200.00,\n          "codigo_tipo_moneda": "USD"\n        }\n      ],\n      "tipo_de_cambio": {\n        "codigo_tipo_moneda_referencia": "USD",\n        "codigo_tipo_moneda_objetivo": "PEN",\n        "factor": 3.00,\n        "fecha_tipo_de_cambio": "2018-10-09"\n      },\n      "fecha_de_retencion": "2018-10-09",\n      "total_retenido": 18.00,\n      "total_a_pagar": 618.00,\n      "total_pagado": 618.00\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"2-json-respuesta"},"2. JSON RESPUESTA"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": {\n        "number": "R001-1",\n        "filename": "20415963255-20-R001-1",\n        "external_id": "3249264a-fa7a-4c02-a7ce-37e19186dba0"\n    },\n    "links": {\n        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/retention/xml/3249264a-fa7a-4c02-a7ce-37e19186dba0",\n        "pdf": "http://demo26.multifacturalonew.oo:8084/downloads/retention/pdf/3249264a-fa7a-4c02-a7ce-37e19186dba0",\n        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/retention/cdr/3249264a-fa7a-4c02-a7ce-37e19186dba0"\n    },\n    "response": {\n        "code": "0",\n        "description": "El Comprobante numero R001-1 ha sido aceptado",\n        "notes": []\n    }\n}\n')))}u.isMDXComponent=!0}}]);