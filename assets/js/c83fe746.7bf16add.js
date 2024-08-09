"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[4811],{4137:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(g,s(s({ref:a},d),{},{components:t})):n.createElement(g,s({ref:a},d))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7502:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(7462),r=(t(7294),t(4137));const o={},s="Crear cuenta",i={unversionedId:"Administrador/Crear-cuenta",id:"Administrador/Crear-cuenta",title:"Crear cuenta",description:"En este art\xedculo veremos los pasos necesarios para crear una cuenta y as\xed su cliente podr\xe1 acceder y empezar a usar el sistema de facturaci\xf3n. Puede crear un m\xe1ximo de cuentas seg\xfan su plan actual de reseller (Si usted compr\xf3 el c\xf3digo fuente no tiene limites en la creaci\xf3n de cuentas).",source:"@site/docs/Administrador/02-Crear-cuenta.md",sourceDirName:"Administrador",slug:"/Administrador/Crear-cuenta",permalink:"/admin/Administrador/Crear-cuenta",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Dashboard",permalink:"/admin/Administrador/Dashboard"},next:{title:"Multi Usuarios",permalink:"/admin/Administrador/Multi-Usuarios"}},l={},c=[{value:"Datos principales",id:"datos-principales",level:2},{value:"M\xf3dulos",id:"m\xf3dulos",level:2},{value:"Entorno del sistema",id:"entorno-del-sistema",level:2},{value:"Configuraci\xf3n de correo",id:"configuraci\xf3n-de-correo",level:2},{value:"Requisitos previos",id:"requisitos-previos",level:3}],d={toc:c},u="wrapper";function p(e){let{components:a,...o}=e;return(0,r.kt)(u,(0,n.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"crear-cuenta"},"Crear cuenta"),(0,r.kt)("p",null,"En este art\xedculo veremos los pasos necesarios para crear una cuenta y as\xed su cliente podr\xe1 acceder y empezar a usar el sistema de facturaci\xf3n. Puede crear un m\xe1ximo de cuentas seg\xfan su plan actual de reseller (Si usted compr\xf3 el c\xf3digo fuente no tiene limites en la creaci\xf3n de cuentas)."),(0,r.kt)("p",null,"Iniciamos entrando a nuestro sistema Administrador donde visualizaremos el ",(0,r.kt)("strong",{parentName:"p"},"Dashboard")),(0,r.kt)("p",null,"Luego buscar la secci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Listado de Clientes")," y dar click en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"nuevo"),"."),(0,r.kt)("h2",{id:"datos-principales"},"Datos principales"),(0,r.kt)("p",null,"Posteriormente aparecer\xe1 un formulario a llenar con los siguientes campos:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"RUC:")," Al presionar el bot\xf3n sunat se completar\xe1 autom\xe1ticamente el campo nombre de la empresa. Tambi\xe9n puede escribirlo manualmente."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Nombre del subdominio:")," Este sera la URL (link) de acceso de su cliente a su sistema."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Correo de acceso:")," Puede ser el correo de su cliente o un correo inventado. Este email solo sirve como dato de acceso, no se env\xeda ning\xfan tipo de informaci\xf3n a este correo."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Contrase\xf1a:")," Recuerde proporcionar estos datos a su cliente para que pueda acceder.\nSeleccionamos el plan y opci\xf3n limitar emisi\xf3n de documentos.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(9274).Z,width:"1046",height:"629"})),(0,r.kt)("h2",{id:"m\xf3dulos"},"M\xf3dulos"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"En la secci\xf3n m\xf3dulos:")," Tenemos diferentes opciones, para poder crear diferentes vistas dentro de nuestra cuenta."),(0,r.kt)("admonition",{title:"IMPORTANTE",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Usted puede personalizar los m\xf3dulos seg\xfan las necesidades de su cliente o seg\xfan los planes que usted ha establecido. Por ejemplo en el plan m\xe1s b\xe1sico usted decidi\xf3 que los clientes no tendr\xedan acceso al punto de Venta (POS) entonces usted puede desabilitar ese m\xf3dulo.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(8460).Z,width:"1046",height:"629"})),(0,r.kt)("h2",{id:"entorno-del-sistema"},"Entorno del sistema"),(0,r.kt)("p",null,"En la secci\xf3n entorno del sistema"),(0,r.kt)("p",null,"Se encontrar\xe1 los campos de:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SOAP env\xedo:")," Escoger seg\xfan corresponda Sunat u Ose"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SOAP tipo:")," Este es el tipo de ambiente que usar\xe1 su cliente. Puede ser Demo o Producci\xf3n:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Al escoger Demo (Entorno de prueba): Los comprobantes NO son enviados a SUNAT y por lo tanto no tienen validez fiscal."),(0,r.kt)("li",{parentName:"ul"},"Al escoger Producci\xf3n (Entorno real y funcional): Los comprobantes SI son enviados a SUNAT y son v\xe1lidos.")))),(0,r.kt)("admonition",{title:"IMPORTANTE:",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Es posible que su cliente desee probar el sistema primero, para este caso le recomendamos que le habilite un entorno de prueba con un RUC inventado ya que si crea una cuenta con el RUC real y despu\xe9s quiera pasar al entorno de producci\xf3n el sistema tendr\xe1 historial y registros de productos, inventarios, reportes etc. (estos datos no pueden ser eliminados).")),(0,r.kt)("p",null,"Asimismo, para obtener el usuario secundario y contrase\xf1a de la conexi\xf3n con sunat, en este ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=PZ028aDpR3A"},"video"))," encontrar\xe1s los pasos para realizarlo."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(9098).Z,width:"1046",height:"629"})),(0,r.kt)("h2",{id:"configuraci\xf3n-de-correo"},"Configuraci\xf3n de correo"),(0,r.kt)("p",null,"Esta configuraci\xf3n le ayudar\xe1 a sus clientes a enviar los comprobantes electr\xf3nicos por correo. Para realizar la configuraci\xf3n puedes seguir estos pasos."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(3771).Z,width:"1046",height:"629"})),(0,r.kt)("h3",{id:"requisitos-previos"},"Requisitos previos"),(0,r.kt)("p",null,"En la cuenta de google,",(0,r.kt)("a",{parentName:"p",href:"https://myaccount.google.com/"},"myaccount.google.com")," se debe acceder al apartado de seguridad y luego a la seccion de Verificacion de dos pasos."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:t(520).Z,width:"1500",height:"513"})),(0,r.kt)("p",null,"Luego de activarlo, se puede crear contrase\xf1a de aplicaciones."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:t(8130).Z,width:"1500",height:"513"})),(0,r.kt)("p",null,"Este apartado, generar\xe1 una contrase\xf1a para que se pueda acceder desde otros dispositivos, se recomienda generarla al momento que se va insertar en el sistema ya que es recomendable no usar la contrase\xf1a para otras aplicaciones."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:t(1273).Z,width:"807",height:"642"})),(0,r.kt)("p",null,"Aqui se debe seleccionar la aplicaci\xf3n, en nuestro caso, Correo electr\xf3nico."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:t(9193).Z,width:"544",height:"551"})),(0,r.kt)("p",null,"Para el dispositivo, se seleccionar\xe1 otra, y le colocaremos el nombre (Facturalo)."),(0,r.kt)("p",null,"Se proceder\xe1 a generar la contrase\xf1a de aplicaci\xf3n"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:t(1949).Z,width:"1171",height:"269"})),(0,r.kt)("p",null,"Esto generar\xe1 la contrase\xf1a en el recuadro amarillo que procederemos a copiar en el apartado de contrase\xf1a."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:t(4423).Z,width:"887",height:"695"})),(0,r.kt)("p",null,"Con esto, ya tenemos generada la contrase\xf1a de aplicaci\xf3n."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:t(2548).Z,width:"1087",height:"738"})),(0,r.kt)("p",null,"Es posible eliminarla si no se desea usar sin necesidad de cambiar la contrase\xf1a de la cuenta principal."),(0,r.kt)("p",null,"Se debe tener en cuenta que, si las credenciales son correctas y aun no envia correo, se requiere desbloquear el acceso de aplicaciones mediante el enlace ",(0,r.kt)("a",{parentName:"p",href:"https://accounts.google.com/DisplayUnlockCaptcha"},"accounts.google.com/DisplayUnlockCaptcha")),(0,r.kt)("p",null,"Antes de finalizar usted puede permitir o no que la empresa pueda cambiar de demo a producci\xf3n desde su cuenta."),(0,r.kt)("p",null,"Luego de esto le da en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Guardar")," y su nueva cuenta estar\xe1 lista para ser usada."))}p.isMDXComponent=!0},9274:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/4-191d1bbf88ac85efc36cb91a2082ffd9.png"},8460:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/5-ed3a94fc953477569097fae3c3b24e9f.png"},9098:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/6-319d285224c5b1c4271fcdbabac22a86.png"},3771:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/7-fbc1882d00177582c9cd025aee14b3f2.png"},520:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/img1003-a4c62a6c551eb459569368295c6f40d2.jpg"},8130:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/img1004-94b62251870e207cd4f712a351264f00.jpg"},1273:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/img1005-ca82766bf8190ea597267575e1b3e5e0.jpg"},9193:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/img1006-092df773cc1071042a669bf31f9bb0d1.jpg"},1949:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/img1008-612d131a36fcdf9750b53109756f0ca1.jpg"},4423:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/img1009-329c28add6bae2e28f5315d7bcaa6ccb.jpg"},2548:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/img1010-04d78fd2f493edc95a3094d7ad0cbbd6.jpg"}}]);