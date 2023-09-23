"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[687],{4137:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>_});var t=o(7294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},d=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(o),m=a,_=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return o?t.createElement(_,i(i({ref:n},d),{},{components:o})):t.createElement(_,i({ref:n},d))}));function _(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=o[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5499:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var t=o(7462),a=(o(7294),o(4137));const r={},i="Otras funcionalidades",c={unversionedId:"API-rest-documentacion/Otras-funcionalidades",id:"API-rest-documentacion/Otras-funcionalidades",title:"Otras funcionalidades",description:"ENVIAR COMPROBANTE POR CORREO ELECTR\xd3NICO",source:"@site/docs/API-rest-documentacion/Otras-funcionalidades.md",sourceDirName:"API-rest-documentacion",slug:"/API-rest-documentacion/Otras-funcionalidades",permalink:"/admin/API-rest-documentacion/Otras-funcionalidades",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Filtro rango de fechas",permalink:"/admin/API-rest-documentacion/Documentos-Filtro-rango"},next:{title:"Percepcion",permalink:"/admin/API-rest-documentacion/Percepcion"}},l={},s=[{value:"ENVIAR COMPROBANTE POR CORREO ELECTR\xd3NICO",id:"enviar-comprobante-por-correo-electr\xf3nico",level:2},{value:"OBJETO",id:"objeto",level:3},{value:"Ejemplo:",id:"ejemplo",level:3},{value:"1. JSON A ENVIAR",id:"1-json-a-enviar",level:3},{value:"CAMBIAR FORMATO DE REPRESENTACI\xd3N IMPRESA",id:"cambiar-formato-de-representaci\xf3n-impresa",level:2},{value:"OBJETO",id:"objeto-1",level:3},{value:"Ejemplo:",id:"ejemplo-1",level:3},{value:"1. JSON A ENVIAR",id:"1-json-a-enviar-1",level:3}],d={toc:s},p="wrapper";function u(e){let{components:n,...o}=e;return(0,a.kt)(p,(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"otras-funcionalidades"},"Otras funcionalidades"),(0,a.kt)("h2",{id:"enviar-comprobante-por-correo-electr\xf3nico"},"ENVIAR COMPROBANTE POR CORREO ELECTR\xd3NICO"),(0,a.kt)("p",null,"Para enviar el comprobante mediante correo electr\xf3nico necesita agregar el siguiente objeto al ",(0,a.kt)("strong",{parentName:"p"},"json")," principal."),(0,a.kt)("h3",{id:"objeto"},"OBJETO"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"acciones": { \n    "enviar_email":true\n }\n')),(0,a.kt)("admonition",{title:"IMPORTANTE:",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Tenga en cuenta que su cliente debe tener un correo v\xe1lido para que el envio sea satisfactorio. El correo a modificar se encuentra en el objeto \u201cdatos_del_cliente_o_receptor\u201d => \u201ccorreo_electr\xf3nico\u201d.")),(0,a.kt)("h3",{id:"ejemplo"},"Ejemplo:"),(0,a.kt)("h3",{id:"1-json-a-enviar"},"1. JSON A ENVIAR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "serie_documento": "F001",\n  "numero_documento": "#",\n  "fecha_de_emision": "2018-10-09",\n  "hora_de_emision": "10:11:11",\n  "codigo_tipo_operacion": "0101",\n  "codigo_tipo_documento":"01",\n  "codigo_tipo_moneda": "PEN",\n  "fecha_de_vencimiento":"2018-08-30",\n  "numero_orden_de_compra": "0045467898", \n  "datos_del_cliente_o_receptor":{\n    "codigo_tipo_documento_identidad": "6",\n    "numero_documento": "10414711225",\n    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",\n    "codigo_pais": "PE",\n    "ubigeo": "150101",\n    "direccion": "Av. 2 de Mayo",\n    "correo_electronico": "micorreo@gmail.com",\n    "telefono": "427-1148"\n  },\n  "totales": {\n    "total_exportacion": 0.00,\n    "total_operaciones_gravadas": 100.00,\n    "total_operaciones_inafectas": 0.00,\n    "total_operaciones_exoneradas": 0.00,\n    "total_operaciones_gratuitas": 0.00,\n    "total_igv": 18.00,\n    "total_impuestos": 18.00,\n    "total_valor": 100,\n    "total_venta": 118\n  },\n  "items":[\n    {\n      "codigo_interno": "P0121",\n      "descripcion":"Inca Kola 250 ml",\n      "codigo_producto_sunat": "51121703",\n      "unidad_de_medida": "NIU",\n      "cantidad": 2,\n      "valor_unitario": 50,\n      "codigo_tipo_precio": "01",\n      "precio_unitario": 59,\n      "codigo_tipo_afectacion_igv": "10",\n      "total_base_igv": 100.00,\n      "porcentaje_igv": 18,\n      "total_igv": 18,\n      "total_impuestos": 18,\n      "total_valor_item": 100,\n      "total_item": 118\n    }\n  ],\n  "acciones": { \n    "enviar_email":true\n  }\n}\n')),(0,a.kt)("h2",{id:"cambiar-formato-de-representaci\xf3n-impresa"},"CAMBIAR FORMATO DE REPRESENTACI\xd3N IMPRESA"),(0,a.kt)("p",null,"Para modificar el formato del comprobante necesita agregar el siguiente objeto al json principal."),(0,a.kt)("h3",{id:"objeto-1"},"OBJETO"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"acciones": {  \n    "formato_pdf":"ticket"\n  }\n')),(0,a.kt)("p",null,"Los formatos admitidos son ",(0,a.kt)("strong",{parentName:"p"},"A4")," y ",(0,a.kt)("strong",{parentName:"p"},"ticket"),", para ",(0,a.kt)("strong",{parentName:"p"},"Facturas, Boletas y Notas"),", los dem\xe1s comprobantes solo cuentan con el formato A4. Tenga en cuenta que si no envia el formato, por defecto ser\xe1 A4."),(0,a.kt)("h3",{id:"ejemplo-1"},"Ejemplo:"),(0,a.kt)("h3",{id:"1-json-a-enviar-1"},"1. JSON A ENVIAR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "serie_documento": "F001",\n  "numero_documento": "#",\n  "fecha_de_emision": "2018-10-09",\n  "hora_de_emision": "10:11:11",\n  "codigo_tipo_operacion": "0101",\n  "codigo_tipo_documento":"01",\n  "codigo_tipo_moneda": "PEN",\n  "fecha_de_vencimiento":"2018-08-30",\n  "numero_orden_de_compra": "0045467898", \n  "datos_del_cliente_o_receptor":{\n    "codigo_tipo_documento_identidad": "6",\n    "numero_documento": "10414711225",\n    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",\n    "codigo_pais": "PE",\n    "ubigeo": "150101",\n    "direccion": "Av. 2 de Mayo",\n    "correo_electronico": "correo@gmail.com",\n    "telefono": "427-1148"\n  },\n  "totales": {\n    "total_exportacion": 0.00,\n    "total_operaciones_gravadas": 100.00,\n    "total_operaciones_inafectas": 0.00,\n    "total_operaciones_exoneradas": 0.00,\n    "total_operaciones_gratuitas": 0.00,\n    "total_igv": 18.00,\n    "total_impuestos": 18.00,\n    "total_valor": 100,\n    "total_venta": 118\n  },\n  "items":[\n    {\n      "codigo_interno": "P0121",\n      "descripcion":"Inca Kola 250 ml",\n      "codigo_producto_sunat": "51121703",\n      "unidad_de_medida": "NIU",\n      "cantidad": 2,\n      "valor_unitario": 50,\n      "codigo_tipo_precio": "01",\n      "precio_unitario": 59,\n      "codigo_tipo_afectacion_igv": "10",\n      "total_base_igv": 100.00,\n      "porcentaje_igv": 18,\n      "total_igv": 18,\n      "total_impuestos": 18,\n      "total_valor_item": 100,\n      "total_item": 118\n    }\n  ],\n  "acciones": {  \n    "formato_pdf":"ticket"\n  }\n}\n')))}u.isMDXComponent=!0}}]);