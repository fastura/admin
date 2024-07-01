"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[891],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,f=l["".concat(s,".").concat(m)]||l[m]||p[m]||o;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const o={},c="Respuesta API",i={unversionedId:"API-rest-documentacion/Respuesta-API",id:"API-rest-documentacion/Respuesta-API",title:"Respuesta API",description:"Explicaci\xf3n de la respuesta de JSON.",source:"@site/docs/API-rest-documentacion/15-Respuesta-API.md",sourceDirName:"API-rest-documentacion",slug:"/API-rest-documentacion/Respuesta-API",permalink:"/admin/API-rest-documentacion/Respuesta-API",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Productos",permalink:"/admin/API-rest-documentacion/Productos"},next:{title:"Retenci\xf3n",permalink:"/admin/API-rest-documentacion/Retencion"}},s={},u=[{value:"ESTRUCTURA JSON RESPUESTA",id:"estructura-json-respuesta",level:2}],d={toc:u},l="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"respuesta-api"},"Respuesta API"),(0,a.kt)("p",null,"Explicaci\xf3n de la respuesta de JSON."),(0,a.kt)("h2",{id:"estructura-json-respuesta"},"ESTRUCTURA JSON RESPUESTA"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n\n    "success": true,   => Proceso ejecutado correctamente\n\n    "data": {\n        "number": "F001-4", => Serie y n\xfamero del documento emitido\n        "filename": "20415963255-01-F001-4",  => Nombre de documento\n       "external_id": "7eff377b-de6c-4af3-ba6a-893ca5f94677",   => C\xf3digo \xfanico, para comunicaci\xf3n con API\n\n        "number_to_letter": "Ciento dieciocho  con 00/100 ",   => Monto en letras (Leyendas)\n        "hash": "7YhwG4nbDE3TCP4AhgzE/1shijc=",  =>  Usar para modificar la representaci\xf3n impresa (PDF)\n\n        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJY"  => Usar para modificar la representacion impresa (PDF)\n    },\n\n    "links": {\n"xml":     "http://demo26.multifacturalonew.oo:8084/downloads/document/xml/7eff377b-de6c-4af3-ba6a-893ca5f94677",  => Enlace de descarga del XML firmado\n\n"pdf": "http://demo26.multifacturalonew.oo:8084/downloads/document/pdf/7eff377b-de6c-4af3-ba6a-893ca5f94677", => Enlace de descarga del PDF\n\n "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/document/cdr/7eff377b-de6c-4af3-ba6a-893ca5f94677"  => Enlace de descarga del CDR\n\n    },\n\n    "response": {\n        "code": "0",\n        "description": "La Factura n\xfamero F001-4, ha sido aceptada", =>  Respuesta Sunat\n        "notes": []\n    }\n\n}\n')))}p.isMDXComponent=!0}}]);