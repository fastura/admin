"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[574],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(4137));const o={},i="Backups",s={unversionedId:"Administrador/Backup",id:"Administrador/Backup",title:"Backups",description:"Generar copias de seguridad de manera peri\xf3dica es importante ya que contar con el respaldo de los datos de nuestros clientes, para generarlos es necesario:",source:"@site/docs/Administrador/06-Backup.md",sourceDirName:"Administrador",slug:"/Administrador/Backup",permalink:"/admin/Administrador/Backup",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Actualizaci\xf3n",permalink:"/admin/Administrador/Actualizacion"},next:{title:"Informaci\xf3n",permalink:"/admin/Administrador/Informacion"}},c={},p=[{value:"Generar un backup",id:"generar-un-backup",level:2},{value:"Tipos",id:"tipos",level:2},{value:"Descomprimir",id:"descomprimir",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"backups"},"Backups"),(0,n.kt)("p",null,"Generar copias de seguridad de manera peri\xf3dica es importante ya que contar con el respaldo de los datos de nuestros clientes, para generarlos es necesario:"),(0,n.kt)("p",null,"Iniciar entrando a nuestro sistema Administrador, donde visualizaremos el m\xf3dulo de ",(0,n.kt)("strong",{parentName:"p"},"Backup"),"."),(0,n.kt)("p",null," En la parte lateral se observa las opciones para conectar por ",(0,n.kt)("strong",{parentName:"p"},"FTP"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:r(1783).Z,width:"948",height:"587"})),(0,n.kt)("h2",{id:"generar-un-backup"},"Generar un backup"),(0,n.kt)("p",null,"Para generar un ",(0,n.kt)("strong",{parentName:"p"},"Backup"),", o copia de todos los archivos."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:r(1888).Z,width:"831",height:"500"})),(0,n.kt)("h2",{id:"tipos"},"Tipos"),(0,n.kt)("p",null,"Debemos seleccionar los siguientes tipos:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Todos: esta opci\xf3n descarga en un solo archivo comprimido (.zip) todos los comprobantes, pdf, archivos y base de datos de todas las cuentas que actualmente tengamos en el sistema."),(0,n.kt)("li",{parentName:"ol"},"Individual: esta opci\xf3n descarga un archivo comprimido (.zip) con todos los comprobantes, pdf, archivos y base de datos de una empresa en espec\xedfico.")),(0,n.kt)("admonition",{title:"NOTA",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"En las copias backup NO contienen logos ni im\xe1genes de los productos.")),(0,n.kt)("h2",{id:"descomprimir"},"Descomprimir"),(0,n.kt)("p",null,"Seleccione el bot\xf3n de iniciar proceso, despu\xe9s aparecer\xe1 el Backup generado y podr\xe1 descargarlo."),(0,n.kt)("p",null,"Finalmente podr\xe1 descargar y descomprimir el archivo .zip para visualizar sus documentos."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:r(7202).Z,width:"771",height:"431"})),(0,n.kt)("admonition",{title:"IMPORTANTE",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Recomendamos que realicen su copias de manera peri\xf3dica por seguridad.")))}u.isMDXComponent=!0},1783:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/1-e71489161014acf02e16b6b231c874ae.jpg"},1888:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2-dc5671ae2e909401c65038476c40558f.jpg"},7202:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/36-50763b77ff9d73cb5d1f3aba947806ad.jpg"}}]);