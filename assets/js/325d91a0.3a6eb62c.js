"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[819],{4137:(e,n,o)=>{o.d(n,{Zo:()=>l,kt:()=>f});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=t.createContext({}),s=function(e){var n=t.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},l=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(o),p=r,f=u["".concat(d,".").concat(p)]||u[p]||m[p]||a;return o?t.createElement(f,i(i({ref:n},l),{},{components:o})):t.createElement(f,i({ref:n},l))}));function f(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=o[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6176:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var t=o(7462),r=(o(7294),o(4137));const a={},i="Gu\xeda de remisi\xf3n",c={unversionedId:"API-rest-documentacion/Guia-de-remision",id:"API-rest-documentacion/Guia-de-remision",title:"Gu\xeda de remisi\xf3n",description:"GENERAR GUIA DE REMISI\xd3N",source:"@site/docs/API-rest-documentacion/Guia-de-remision.md",sourceDirName:"API-rest-documentacion",slug:"/API-rest-documentacion/Guia-de-remision",permalink:"/admin/API-rest-documentacion/Guia-de-remision",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Generar res\xfamenes",permalink:"/admin/API-rest-documentacion/Generar-resumen"},next:{title:"Introducci\xf3n",permalink:"/admin/API-rest-documentacion/Introduccion"}},d={},s=[{value:"GENERAR GUIA DE REMISI\xd3N",id:"generar-guia-de-remisi\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"1. JSON A ENVIAR",id:"1-json-a-enviar",level:3},{value:"2. JSON RESPUESTA",id:"2-json-respuesta",level:3}],l={toc:s},u="wrapper";function m(e){let{components:n,...o}=e;return(0,r.kt)(u,(0,t.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gu\xeda-de-remisi\xf3n"},"Gu\xeda de remisi\xf3n"),(0,r.kt)("h2",{id:"generar-guia-de-remisi\xf3n"},"GENERAR GUIA DE REMISI\xd3N"),(0,r.kt)("p",null,"Las Gu\xedas de Remisi\xf3n son documentos que sustentan el traslado de bienes entre distintas direcciones, existen distintas modalidades y aspectos relevantes."),(0,r.kt)("p",null,"Para generar una guia de remision puede usar el siguiente servicio, necesitar\xe1 la ",(0,r.kt)("strong",{parentName:"p"},"url"),", ",(0,r.kt)("strong",{parentName:"p"},"el token"),", y ",(0,r.kt)("strong",{parentName:"p"},"los datos del documento"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Url:")," ",(0,r.kt)("a",{parentName:"li",href:"http://demo.fastura.app/api/dispatches"},"http://demo.fastura.app/api/dispatches")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Token:")," oZoKGFDzqGJfJilCHowJlZrTadQRBtuJ2fr3PkJz02aU46WPPg")),(0,r.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,r.kt)("h3",{id:"1-json-a-enviar"},"1. JSON A ENVIAR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "serie_documento": "T001",\n  "numero_documento": "#",\n  "fecha_de_emision": "2018-10-09",\n  "hora_de_emision": "10:11:11",\n  "codigo_tipo_documento": "09",\n  "datos_del_emisor": {\n    "codigo_pais": "PE",\n    "ubigeo": "150101",\n    "direccion": "Av. 2 de Mayo",\n    "correo_electronico": "demo@gmail.com",\n    "telefono": "427-1148",\n    "codigo_del_domicilio_fiscal": "0000"\n  },\n  "datos_del_cliente_o_receptor":{\n    "codigo_tipo_documento_identidad": "6",\n    "numero_documento": "10414711225",\n    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",\n    "nombre_comercial": "EMPRESA XYZ",\n    "codigo_pais": "PE",\n    "ubigeo": "150101",\n    "direccion": "Av. 2 de Mayo",\n    "correo_electronico": "demo@gmail.com",\n    "telefono": "427-1148"\n  },\n  "observaciones": "aaaaaaaaaaaaaaa",\n  "codigo_modo_transporte": "01",\n  "codigo_motivo_traslado": "01",\n  "descripcion_motivo_traslado": "El cliente solicito envia a su trabajo en ...",\n  "fecha_de_traslado": "2019-01-16",\n  "codigo_de_puerto": "",\n  "indicador_de_transbordo": false,\n  "unidad_peso_total": "KGM",\n  "peso_total": 30.00,\n  "numero_de_bultos": 1,\n "numero_de_contenedor": "",\n  "direccion_partida": {\n    "ubigeo": "150101",\n    "direccion": "PUNTO A"\n  },\n  "direccion_llegada": {\n    "ubigeo": "150101",\n    "direccion": "PUNTO 2"\n  },\n  "transportista": {\n    "codigo_tipo_documento_identidad": "6",\n    "numero_documento": "10417844398",\n    "apellidos_y_nombres_o_razon_social": "aaaaaaaaa"\n  },\n  "chofer": {\n    "codigo_tipo_documento_identidad": "1",\n    "numero_documento": "4177874"\n  },\n  "numero_de_placa": "A01-1254",\n  "items":[\n    {\n      "codigo_interno": "P0121",\n      "cantidad": 2\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"2-json-respuesta"},"2. JSON RESPUESTA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": {\n        "number": "T001-1",\n        "filename": "20415963255-09-T001-1",\n        "external_id": "89f6931f-9be0-4f92-80ad-8a7fbfce9160"\n    },\n    "links": {\n        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/dispatch/xml/89f6931f-9be0-4f92-80ad-8a7fbfce9160",\n        "pdf": "http://demo26.multifacturalonew.oo:8084/downloads/dispatch/pdf/89f6931f-9be0-4f92-80ad-8a7fbfce9160",\n        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/dispatch/cdr/89f6931f-9be0-4f92-80ad-8a7fbfce9160"\n    },\n    "response": {\n        "code": "0",\n        "description": "El Comprobante numero T001-1 ha sido aceptado",\n        "notes": []\n    }\n}\n')))}m.isMDXComponent=!0}}]);