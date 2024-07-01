"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[174],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},_=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),_=r,m=u["".concat(l,".").concat(_)]||u[_]||d[_]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=_;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}_.displayName="MDXCreateElement"},9079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(4137));const i={},o="Productos",s={unversionedId:"API-rest-documentacion/Productos",id:"API-rest-documentacion/Productos",title:"Productos",description:"REGISTRAR PRODUCTOS",source:"@site/docs/API-rest-documentacion/14-Productos.md",sourceDirName:"API-rest-documentacion",slug:"/API-rest-documentacion/Productos",permalink:"/admin/API-rest-documentacion/Productos",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Percepci\xf3n",permalink:"/admin/API-rest-documentacion/Percepcion"},next:{title:"Respuesta API",permalink:"/admin/API-rest-documentacion/Respuesta-API"}},l={},p=[{value:"REGISTRAR PRODUCTOS",id:"registrar-productos",level:2},{value:"Ejemplo:",id:"ejemplo",level:3},{value:"1. JSON A ENVIAR",id:"1-json-a-enviar",level:3},{value:"2. JSON RESPUESTA",id:"2-json-respuesta",level:3},{value:"LISTAR PRODUCTOS",id:"listar-productos",level:2},{value:"1. JSON RESPUESTA",id:"1-json-respuesta",level:3},{value:"BUSCAR PRODUCTOS",id:"buscar-productos",level:2},{value:"1. JSON RESPUESTA",id:"1-json-respuesta-1",level:3},{value:"EDITAR PRODUCTOS",id:"editar-productos",level:2},{value:"1. JSON A ENVIAR",id:"1-json-a-enviar-1",level:3},{value:"2. JSON RESPUESTA",id:"2-json-respuesta-1",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"productos"},"Productos"),(0,r.kt)("h2",{id:"registrar-productos"},"REGISTRAR PRODUCTOS"),(0,r.kt)("p",null,"Para registrar productos debe enviar hacia:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Url:")," ",(0,r.kt)("a",{parentName:"li",href:"https://demo.pro5.fastura.app/api/item"},"https://demo.pro5.fastura.app/api/item")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Token:")," HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt")),(0,r.kt)("h3",{id:"ejemplo"},"Ejemplo:"),(0,r.kt)("h3",{id:"1-json-a-enviar"},"1. JSON A ENVIAR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": null,\n    "item_type_id": "01",\n    "internal_id": "rrr",\n    "item_code": null,\n    "item_code_gs1": null,\n    "description": "apk",\n    "name": "apk",\n    "second_name": null,\n    "unit_type_id": "NIU",\n    "currency_type_id": "PEN",\n    "sale_unit_price": "500",\n    "purchase_unit_price": 0,\n    "has_isc": false,\n    "system_isc_type_id": null,\n    "percentage_isc": 0,\n    "suggested_price": 0,\n    "sale_affectation_igv_type_id": "10",\n    "purchase_affectation_igv_type_id": "10",\n    "calculate_quantity": false,\n    "stock": 0,\n    "stock_min": 0,\n    "has_igv": true,\n    "has_perception": false,\n    "item_unit_types": [],\n    "percentage_of_profit": 0,\n    "percentage_perception": 0,\n    "image": null,\n    "image_url": null,\n    "temp_path": null,\n    "is_set": false,\n    "account_id": null,\n    "category_id": null,\n    "brand_id": null,\n    "date_of_due": null,\n    "lot_code": null,\n    "lots_enabled": false,\n    "lots": []\n}\n')),(0,r.kt)("h3",{id:"2-json-respuesta"},"2. JSON RESPUESTA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "msg": "Producto registrado con \xe9xito",\n    "data": {\n        "id": 2,\n        "item_id": 2,\n        "name": "la descripci\xf3n",\n        "full_description": "123456 - el nombre",\n        "description": "el nombre",\n        "currency_type_id": "PEN",\n        "internal_id": "123456",\n        "item_code": null,\n        "currency_type_symbol": "S/",\n        "sale_unit_price": "5.00",\n        "purchase_unit_price": 0,\n        "unit_type_id": "NIU",\n        "sale_affectation_igv_type_id": "10",\n        "purchase_affectation_igv_type_id": "10",\n        "calculate_quantity": false,\n        "has_igv": true,\n        "is_set": false,\n        "aux_quantity": 1\n    }\n}\n')),(0,r.kt)("h2",{id:"listar-productos"},"LISTAR PRODUCTOS"),(0,r.kt)("p",null,"Para listar productos debe enviar por ",(0,r.kt)("strong",{parentName:"p"},"m\xe9todo get"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Url:")," ",(0,r.kt)("a",{parentName:"li",href:"https://demo.pro5.fastura.app/api/document/search-items"},"https://demo.pro5.fastura.app/api/document/search-items")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Token:")," HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt")),(0,r.kt)("h3",{id:"1-json-respuesta"},"1. JSON RESPUESTA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": {\n        "items": [\n            {\n                "id": 3908,\n                "item_id": 3908,\n                "name": null,\n                "full_description": "1006 - CHEESE TRIS X 16 Grs",\n                "description": "CHEESE TRIS X 16 Grs",\n                "currency_type_id": "PEN",\n                "internal_id": "1006",\n                "item_code": null,\n                "currency_type_symbol": "S/",\n                "sale_unit_price": "0.42",\n                "purchase_unit_price": "0.000000",\n                "unit_type_id": "NIU",\n                "sale_affectation_igv_type_id": "10",\n                "purchase_affectation_igv_type_id": "10",\n                "calculate_quantity": false,\n                "has_igv": true,\n                "is_set": false,\n                "aux_quantity": 1,\n                "brand": "",\n                "category": "",\n                "stock": -12,\n                "image": "https://demo.fastura.app/logo/imagen-no-disponible.jpg",\n                "warehouses": [\n                    {\n                        "warehouse_description": "Almac\xe9n Oficina Principal",\n                        "stock": "7995.0000",\n                        "warehouse_id": 1\n                    },\n                    {\n                        "warehouse_description": "Almac\xe9n - Oficina Arequipa",\n                        "stock": "-12.0000",\n                        "warehouse_id": 4\n                    }\n                ]\n            },\n            {\n                "id": 3912,\n                "item_id": 3912,\n                "name": null,\n                "full_description": "2003 - DORITOS X 40 Grs",\n                "description": "DORITOS X 40 Grs",\n                "currency_type_id": "PEN",\n                "internal_id": "2003",\n                "item_code": null,\n                "currency_type_symbol": "S/",\n                "sale_unit_price": "1.00",\n                "purchase_unit_price": "0.000000",\n                "unit_type_id": "NIU",\n                "sale_affectation_igv_type_id": "10",\n                "purchase_affectation_igv_type_id": "10",\n                "calculate_quantity": false,\n                "has_igv": true,\n                "is_set": false,\n                "aux_quantity": 1,\n                "brand": "",\n                "category": "",\n                "stock": -6,\n                "image": "https://demo.fastura.app/logo/imagen-no-disponible.jpg",\n                "warehouses": [\n                    {\n                        "warehouse_description": "Almac\xe9n Oficina Principal",\n                        "stock": "3060.0000",\n                        "warehouse_id": 1\n                    },\n                    {\n                        "warehouse_description": "Almac\xe9n - Oficina Arequipa",\n                        "stock": "-6.0000",\n                        "warehouse_id": 4\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"buscar-productos"},"BUSCAR PRODUCTOS"),(0,r.kt)("p",null,"Para buscar productos debe enviar por m\xe9todo get:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Url:")," ",(0,r.kt)("a",{parentName:"li",href:"https://demo.pro5.fastura.app/api/document/search-items?input=cod_interno_o_descripcion"},"https://demo.pro5.fastura.app/api/document/search-items?input=cod_interno_o_descripcion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Token:")," HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt")),(0,r.kt)("h3",{id:"1-json-respuesta-1"},"1. JSON RESPUESTA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": {\n        "items": [\n            {\n                "id": 3946,\n                "item_id": 3946,\n                "name": "apk",\n                "full_description": "rrr - apk",\n                "description": "apk",\n                "currency_type_id": "PEN",\n                "internal_id": "rrr",\n                "item_code": null,\n                "currency_type_symbol": "S/",\n                "sale_unit_price": "500.00",\n                "purchase_unit_price": "0.000000",\n                "unit_type_id": "NIU",\n                "sale_affectation_igv_type_id": "10",\n                "purchase_affectation_igv_type_id": "10",\n                "calculate_quantity": false,\n                "has_igv": true,\n                "is_set": false,\n                "aux_quantity": 1,\n                "brand": "",\n                "category": "",\n                "stock": 0,\n                "image": "https://demo.fastura.app/logo/imagen-no-disponible.jpg",\n                "warehouses": [\n                    {\n                        "warehouse_description": "Almac\xe9n - Oficina Arequipa",\n                        "stock": "0.0000",\n                        "warehouse_id": 4\n                    }\n                ]\n        }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"editar-productos"},"EDITAR PRODUCTOS"),(0,r.kt)("p",null,"Para editar productos debe enviar a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Url"),": ",(0,r.kt)("a",{parentName:"li",href:"https://demo.pro5.fastura.app/api/items/%5Bid_del_producto%5D/update"},"https://demo.pro5.fastura.app/api/items/[id_del_producto]/update"))),(0,r.kt)("h3",{id:"1-json-a-enviar-1"},"1. JSON A ENVIAR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 3946,\n    "item_type_id": "01",\n    "internal_id": "rrr",\n    "item_code": "new_code",\n    "item_code_gs1": null,\n    "description": "apk",\n    "name": "apk",\n    "second_name": null,\n    "unit_type_id": "NIU",\n    "currency_type_id": "PEN",\n    "sale_unit_price": "500",\n    "purchase_unit_price": 0,\n    "has_isc": false,\n    "system_isc_type_id": null,\n    "percentage_isc": 0,\n    "suggested_price": 0,\n    "sale_affectation_igv_type_id": "10",\n    "purchase_affectation_igv_type_id": "10",\n    "calculate_quantity": false,\n    "stock": 0,\n    "stock_min": 0,\n    "has_igv": true,\n    "has_perception": false,\n    "item_unit_types": [],\n    "percentage_of_profit": 0,\n    "percentage_perception": 0,\n    "image": null,\n    "image_url": null,\n    "temp_path": null,\n    "is_set": false,\n    "account_id": null,\n    "category_id": null,\n    "brand_id": null,\n    "date_of_due": null,\n    "lot_code": null,\n    "lots_enabled": false,\n    "lots": []\n}\n')),(0,r.kt)("h3",{id:"2-json-respuesta-1"},"2. JSON RESPUESTA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "msg": "Producto editado con \xe9xito",\n    "data": {\n        "id": 3946,\n        "item_id": 3946,\n        "name": "apk",\n        "full_description": "rrr - apk",\n        "description": "apk",\n        "currency_type_id": "PEN",\n        "internal_id": "rrr",\n        "item_code": "new_code",\n        "currency_type_symbol": "S/",\n        "sale_unit_price": "500.00",\n        "purchase_unit_price": "0.000000",\n        "unit_type_id": "NIU",\n        "sale_affectation_igv_type_id": "10",\n        "purchase_affectation_igv_type_id": "10",\n        "calculate_quantity": false,\n        "has_igv": true,\n        "is_set": false,\n        "aux_quantity": 1\n    }\n}\n')))}d.isMDXComponent=!0}}]);