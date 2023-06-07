"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[541],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>_});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),l=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(d.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(t),u=a,_=s["".concat(d,".").concat(u)]||s[u]||m[u]||r;return t?o.createElement(_,i(i({ref:n},p),{},{components:t})):o.createElement(_,i({ref:n},p))}));function _(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},18:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(7462),a=(t(7294),t(4137));const r={},i="Otras funcionalidades",c={unversionedId:"API-rest-documentaci\xf3n/Otras-funcionalidades",id:"API-rest-documentaci\xf3n/Otras-funcionalidades",title:"Otras funcionalidades",description:"ENVIAR COMPROBANTE POR CORREO ELECTR\xd3NICO",source:"@site/docs/API-rest-documentaci\xf3n/Otras-funcionalidades.md",sourceDirName:"API-rest-documentaci\xf3n",slug:"/API-rest-documentaci\xf3n/Otras-funcionalidades",permalink:"/admin/API-rest-documentaci\xf3n/Otras-funcionalidades",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Generar res\xfamenes",permalink:"/admin/API-rest-documentaci\xf3n/Generar-resumen"},next:{title:"Pluggin Api",permalink:"/admin/API-rest-documentaci\xf3n/Pluggin-Api"}},d={},l=[{value:"ENVIAR COMPROBANTE POR CORREO ELECTR\xd3NICO",id:"enviar-comprobante-por-correo-electr\xf3nico",level:2},{value:"OBJETO",id:"objeto",level:2},{value:"CAMBIAR FORMATO DE REPRESENTACI\xd3N IMPRESA",id:"cambiar-formato-de-representaci\xf3n-impresa",level:2},{value:"OBJETO",id:"objeto-1",level:2}],p={toc:l},s="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"otras-funcionalidades"},"Otras funcionalidades"),(0,a.kt)("h2",{id:"enviar-comprobante-por-correo-electr\xf3nico"},"ENVIAR COMPROBANTE POR CORREO ELECTR\xd3NICO"),(0,a.kt)("p",null,"Para enviar el comprobante mediante correo electr\xf3nico necesita agregar el siguiente objeto al ",(0,a.kt)("strong",{parentName:"p"},"json")," principal."),(0,a.kt)("h2",{id:"objeto"},"OBJETO"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n"acciones": { \n    "enviar_email":true\n }\n\n')),(0,a.kt)("admonition",{title:"IMPORTANTE:",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Tenga en cuenta que su cliente debe tener un correo v\xe1lido para que el envio sea satisfactorio. El correo a modificar se encuentra en el objeto \u201cdatos_del_cliente_o_receptor\u201d => \u201ccorreo_electr\xf3nico\u201d.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ejemplo:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"JSON A ENVIAR"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n{\n  "serie_documento": "F001",\n  "numero_documento": "#",\n  "fecha_de_emision": "2018-10-09",\n  "hora_de_emision": "10:11:11",\n  "codigo_tipo_operacion": "0101",\n  "codigo_tipo_documento":"01",\n  "codigo_tipo_moneda": "PEN",\n  "fecha_de_vencimiento":"2018-08-30",\n  "numero_orden_de_compra": "0045467898", \n  "datos_del_cliente_o_receptor":{\n    "codigo_tipo_documento_identidad": "6",\n    "numero_documento": "10414711225",\n    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",\n    "codigo_pais": "PE",\n    "ubigeo": "150101",\n    "direccion": "Av. 2 de Mayo",\n    "correo_electronico": "micorreo@gmail.com\n                document.getElementById(\'cloak7aaf291a15d316fb28dce27d9a715818\').innerHTML = \'\';\n                var prefix = \'&#109;a\' + \'i&#108;\' + \'&#116;o\';\n                var path = \'hr\' + \'ef\' + \'=\';\n                var addy7aaf291a15d316fb28dce27d9a715818 = \'m&#105;c&#111;rr&#101;&#111;\' + \'&#64;\';\n                addy7aaf291a15d316fb28dce27d9a715818 = addy7aaf291a15d316fb28dce27d9a715818 + \'gm&#97;&#105;l\' + \'&#46;\' + \'c&#111;m\';\n                var addy_text7aaf291a15d316fb28dce27d9a715818 = \'m&#105;c&#111;rr&#101;&#111;\' + \'&#64;\' + \'gm&#97;&#105;l\' + \'&#46;\' + \'c&#111;m\';document.getElementById(\'cloak7aaf291a15d316fb28dce27d9a715818\').innerHTML += \'<a \' + path + \'\\\'\' + prefix + \':\' + addy7aaf291a15d316fb28dce27d9a715818 + \'\\\'>\'+addy_text7aaf291a15d316fb28dce27d9a715818+\'<\\/a>\';\n        ",\n    "telefono": "427-1148"\n  },\n  "totales": {\n    "total_exportacion": 0.00,\n    "total_operaciones_gravadas": 100.00,\n    "total_operaciones_inafectas": 0.00,\n    "total_operaciones_exoneradas": 0.00,\n    "total_operaciones_gratuitas": 0.00,\n    "total_igv": 18.00,\n    "total_impuestos": 18.00,\n    "total_valor": 100,\n    "total_venta": 118\n  },\n  "items":[\n    {\n      "codigo_interno": "P0121",\n      "descripcion":"Inca Kola 250 ml",\n      "codigo_producto_sunat": "51121703",\n      "unidad_de_medida": "NIU",\n      "cantidad": 2,\n      "valor_unitario": 50,\n      "codigo_tipo_precio": "01",\n      "precio_unitario": 59,\n      "codigo_tipo_afectacion_igv": "10",\n      "total_base_igv": 100.00,\n      "porcentaje_igv": 18,\n      "total_igv": 18,\n      "total_impuestos": 18,\n      "total_valor_item": 100,\n      "total_item": 118\n    }\n  ],\n  "acciones": { \n    "enviar_email":true\n  }\n}\n\n\n')),(0,a.kt)("h2",{id:"cambiar-formato-de-representaci\xf3n-impresa"},"CAMBIAR FORMATO DE REPRESENTACI\xd3N IMPRESA"),(0,a.kt)("p",null,"Para modificar el formato del comprobante necesita agregar el siguiente objeto al json principal."),(0,a.kt)("h2",{id:"objeto-1"},"OBJETO"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n"acciones": {  \n    "formato_pdf":"ticket"\n  }\n\n\n')),(0,a.kt)("p",null,"Los formatos admitidos son ",(0,a.kt)("strong",{parentName:"p"},"A4")," y ",(0,a.kt)("strong",{parentName:"p"},"ticket"),", para ",(0,a.kt)("strong",{parentName:"p"},"Facturas, Boletas y Notas"),", los dem\xe1s comprobantes solo cuentan con el formato A4. Tenga en cuenta que si no envia el formato, por defecto ser\xe1 A4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ejemplo:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"JSON A ENVIAR"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n{\n  "serie_documento": "F001",\n  "numero_documento": "#",\n  "fecha_de_emision": "2018-10-09",\n  "hora_de_emision": "10:11:11",\n  "codigo_tipo_operacion": "0101",\n  "codigo_tipo_documento":"01",\n  "codigo_tipo_moneda": "PEN",\n  "fecha_de_vencimiento":"2018-08-30",\n  "numero_orden_de_compra": "0045467898", \n  "datos_del_cliente_o_receptor":{\n    "codigo_tipo_documento_identidad": "6",\n    "numero_documento": "10414711225",\n    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",\n    "codigo_pais": "PE",\n    "ubigeo": "150101",\n    "direccion": "Av. 2 de Mayo",\n    "correo_electronico": "correo@gmail.com\n                document.getElementById(\'cloak58293d9cfc13f78d61feb86aabfd01a6\').innerHTML = \'\';\n                var prefix = \'&#109;a\' + \'i&#108;\' + \'&#116;o\';\n                var path = \'hr\' + \'ef\' + \'=\';\n                var addy58293d9cfc13f78d61feb86aabfd01a6 = \'c&#111;rr&#101;&#111;\' + \'&#64;\';\n                addy58293d9cfc13f78d61feb86aabfd01a6 = addy58293d9cfc13f78d61feb86aabfd01a6 + \'gm&#97;&#105;l\' + \'&#46;\' + \'c&#111;m\';\n                var addy_text58293d9cfc13f78d61feb86aabfd01a6 = \'c&#111;rr&#101;&#111;\' + \'&#64;\' + \'gm&#97;&#105;l\' + \'&#46;\' + \'c&#111;m\';document.getElementById(\'cloak58293d9cfc13f78d61feb86aabfd01a6\').innerHTML += \'<a \' + path + \'\\\'\' + prefix + \':\' + addy58293d9cfc13f78d61feb86aabfd01a6 + \'\\\'>\'+addy_text58293d9cfc13f78d61feb86aabfd01a6+\'<\\/a>\';\n        ",\n    "telefono": "427-1148"\n  },\n  "totales": {\n    "total_exportacion": 0.00,\n    "total_operaciones_gravadas": 100.00,\n    "total_operaciones_inafectas": 0.00,\n    "total_operaciones_exoneradas": 0.00,\n    "total_operaciones_gratuitas": 0.00,\n    "total_igv": 18.00,\n    "total_impuestos": 18.00,\n    "total_valor": 100,\n    "total_venta": 118\n  },\n  "items":[\n    {\n      "codigo_interno": "P0121",\n      "descripcion":"Inca Kola 250 ml",\n      "codigo_producto_sunat": "51121703",\n      "unidad_de_medida": "NIU",\n      "cantidad": 2,\n      "valor_unitario": 50,\n      "codigo_tipo_precio": "01",\n      "precio_unitario": 59,\n      "codigo_tipo_afectacion_igv": "10",\n      "total_base_igv": 100.00,\n      "porcentaje_igv": 18,\n      "total_igv": 18,\n      "total_impuestos": 18,\n      "total_valor_item": 100,\n      "total_item": 118\n    }\n  ],\n  "acciones": {  \n    "formato_pdf":"ticket"\n  }\n}\n\n\n')))}m.isMDXComponent=!0}}]);