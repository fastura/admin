"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[561],{4137:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(t),u=n,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return t?r.createElement(g,l(l({ref:a},d),{},{components:t})):r.createElement(g,l({ref:a},d))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5943:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),n=(t(7294),t(4137));const o={},l="Windows",i={unversionedId:"instalacion/Windows",id:"instalacion/Windows",title:"Windows",description:"Se explicar\xe1 como poder descargar y poder ejecutar el facturador dentro de su m\xe1quina windows.",source:"@site/docs/instalacion/01-Windows.md",sourceDirName:"instalacion",slug:"/instalacion/Windows",permalink:"/admin/instalacion/Windows",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Instalaciones",permalink:"/admin/api"},next:{title:"Docker - Linux",permalink:"/admin/instalacion/Docker-Linux"}},s={},p=[{value:"Requisitos previos del Pro6",id:"requisitos-previos-del-pro6",level:2},{value:"Requisitos previos del ProX",id:"requisitos-previos-del-prox",level:2},{value:"Instalaciones",id:"instalaciones",level:2},{value:"Laragon",id:"laragon",level:3},{value:"PHP",id:"php",level:3},{value:"MySQL",id:"mysql",level:3},{value:"Configuraci\xf3n de Laragon",id:"configuraci\xf3n-de-laragon",level:2},{value:"Activar extensi\xf3n <strong>SOAP</strong>",id:"activar-extensi\xf3n-soap",level:3},{value:"Puertos de los Servicios",id:"puertos-de-los-servicios",level:3},{value:"Hostname",id:"hostname",level:3},{value:"Pasos",id:"pasos",level:2}],d={toc:p},c="wrapper";function m(e){let{components:a,...o}=e;return(0,n.kt)(c,(0,r.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"windows"},"Windows"),(0,n.kt)("p",null,"Se explicar\xe1 como poder descargar y poder ejecutar el facturador dentro de su m\xe1quina windows."),(0,n.kt)("p",null,"Antes de instalar, se tiene que tener presente que hay dos proyectos de facturador: ",(0,n.kt)("strong",{parentName:"p"},"Pro6")," y ",(0,n.kt)("strong",{parentName:"p"},"ProX"),", de las cuales cada uno tiene sus propios requisitos previos"),(0,n.kt)("h2",{id:"requisitos-previos-del-pro6"},"Requisitos previos del Pro6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Tecnolog\xeda"),(0,n.kt)("th",{parentName:"tr",align:null},"Versi\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PHP"),(0,n.kt)("td",{parentName:"tr",align:null},"7.4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,n.kt)("td",{parentName:"tr",align:null},"5.7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Laravel"),(0,n.kt)("td",{parentName:"tr",align:null},"5.6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Node"),(0,n.kt)("td",{parentName:"tr",align:null},"12.22")))),(0,n.kt)("h2",{id:"requisitos-previos-del-prox"},"Requisitos previos del ProX"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Tecnolog\xeda"),(0,n.kt)("th",{parentName:"tr",align:null},"Versi\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PHP"),(0,n.kt)("td",{parentName:"tr",align:null},"8.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,n.kt)("td",{parentName:"tr",align:null},"^5.7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Laravel"),(0,n.kt)("td",{parentName:"tr",align:null},"^9.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Node"),(0,n.kt)("td",{parentName:"tr",align:null},"^14.17")))),(0,n.kt)("h2",{id:"instalaciones"},"Instalaciones"),(0,n.kt)("p",null,"Este t\xf3pico es para ambos proyectos, asi qu funcionar\xe1 con cualquier tecnologias que descargues respecto a la versi\xf3n del facturador. "),(0,n.kt)("h3",{id:"laragon"},"Laragon"),(0,n.kt)("p",null,"Para poder correr el facturador se necesitar\xe1 de un entorno de desarrollo, aqu\xed es donde entra Laragon, si quieres descargalo haz click ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://laragon.org/download/"},"aqui"))," (se recomienda descargar la versi\xf3n full)."),(0,n.kt)("h3",{id:"php"},"PHP"),(0,n.kt)("p",null,"Puede entrar dentro de este repositorio y encontrar\xe1 los binarios de php ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://windows.php.net/downloads/releases/archives/"},"Repositorio PHP"))," (Para este ejemplo se uso la versi\xf3n ",(0,n.kt)("strong",{parentName:"p"},"php-7.4.7-Win32-vc15-x64"),")."),(0,n.kt)("p",null,"Una vez haga click a su versi\xf3n, se le instalar\xe1 un zip, ahora este archivo debe colocarse dentro de Laragon."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Instalar la versi\xf3n de PHP. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Luego dirigirse a donde se encuentra Laragon ",(0,n.kt)("inlineCode",{parentName:"p"}," C:\\laragon")," (Por defecto Laragon te lo descarga en el disco C) y entrar en la carpeta ",(0,n.kt)("strong",{parentName:"p"},"bin"),".\n",(0,n.kt)("img",{alt:"alt text",src:t(6093).Z,width:"643",height:"529"})),(0,n.kt)("p",{parentName:"li"},"Dirigirse a la carpeta ",(0,n.kt)("strong",{parentName:"p"},"php"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"El archivo zip de PHP que descargaste, se deber\xe1 colocar dentro de la carpeta ",(0,n.kt)("strong",{parentName:"p"},"php")," y descomprimirlo con el boton ",(0,n.kt)("strong",{parentName:"p"},"\"Extraer en 'php-7.4.7-Win32-vc15-x64'\""),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"alt text",src:t(4451).Z,width:"885",height:"716"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ya hecho esto, solo faltaria colocar este versi\xf3n de PHP por defecto:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"alt text",src:t(9428).Z,width:"1180",height:"606"})))),(0,n.kt)("h3",{id:"mysql"},"MySQL"),(0,n.kt)("p",null,"Para colocar la version de MySQL correcta dentro de Laragon se debe descargar su zip, para buscar la versi\xf3n de MySQL haga click ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://downloads.mysql.com/archives/community/"},"aqui"))," (Para este ejemplo se uso la versi\xf3n de ",(0,n.kt)("strong",{parentName:"p"},"mysql-5.7.20-winx64"),")."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Instalar la versi\xf3n de MySQL."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"alt text",src:t(8004).Z,width:"1529",height:"643"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Luego dirigirse a donde se encuentra Laragon ",(0,n.kt)("inlineCode",{parentName:"p"}," C:\\laragon")," (Por defecto Laragon te lo descarga en el disco C) y entrar en la carpeta ",(0,n.kt)("strong",{parentName:"p"},"bin"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"alt text",src:t(6093).Z,width:"643",height:"529"})),(0,n.kt)("p",{parentName:"li"},"Ahi se encontrar\xe1 la carpeta de ",(0,n.kt)("strong",{parentName:"p"},"mysql"),", ingresamos a esa carpeta")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"El archivo zip de MySQL que descargaste, se debera colocar dentro de la carpeta mysql y descomprimirlo con el boton ",(0,n.kt)("strong",{parentName:"p"},"Extraer aqu\xed"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"alt text",src:t(3842).Z,width:"836",height:"656"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ya hecho esto, solo faltar\xeda colocar esta versi\xf3n de MySQL por defecto."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"alt text",src:t(5444).Z,width:"1007",height:"639"})))),(0,n.kt)("h2",{id:"configuraci\xf3n-de-laragon"},"Configuraci\xf3n de Laragon"),(0,n.kt)("h3",{id:"activar-extensi\xf3n-soap"},"Activar extensi\xf3n ",(0,n.kt)("strong",{parentName:"h3"},"SOAP")),(0,n.kt)("p",null," ",(0,n.kt)("img",{alt:"alt text",src:t(4281).Z,width:"978",height:"743"})),(0,n.kt)("admonition",{title:"IMPORTANTE",type:"danger"},(0,n.kt)("p",{parentName:"admonition"}," Revisar si esta activado esta extensi\xf3n, algunas funciones podr\xedan fallar, como por ejemplo la creaci\xf3n de facturas.")),(0,n.kt)("h3",{id:"puertos-de-los-servicios"},"Puertos de los Servicios"),(0,n.kt)("p",null,"Algunas veces podrian presentarse un error de puertos ocupados, esto se soluciona si los cambia. Dentro de Laragon hay un icono de una tuerca, haga click y luego dirigirse a ",(0,n.kt)("strong",{parentName:"p"},"Servicios & Puertos"),". Ahi podra personalizar en que puerto desea cambiar."),(0,n.kt)("p",null," ",(0,n.kt)("img",{alt:"alt text",src:t(8272).Z,width:"728",height:"524"})),(0,n.kt)("h3",{id:"hostname"},"Hostname"),(0,n.kt)("p",null,"En laragon crea un dominio, puede cambiarlo a su gusto, por ejemplo ",(0,n.kt)("strong",{parentName:"p"},"{name}.text"),", ",(0,n.kt)("strong",{parentName:"p"},"{name}.pe"),", ",(0,n.kt)("strong",{parentName:"p"},"{name}.oo")),(0,n.kt)("p",null," ",(0,n.kt)("img",{alt:"alt text",src:t(4752).Z,width:"716",height:"515"})),(0,n.kt)("h2",{id:"pasos"},"Pasos"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abre Laragon y haga click en ",(0,n.kt)("strong",{parentName:"p"},"Terminal"),", ahora toda instalaci\xf3n ser\xe1 dentro de la carpeta ",(0,n.kt)("inlineCode",{parentName:"p"},"C:\\laragon\\www"),"\n",(0,n.kt)("img",{alt:"alt text",src:t(4756).Z,width:"675",height:"450"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ahora se debe clonar el proyecto en tu m\xe1quina: "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Entra a tu cuenta que se te brindo y entra al proyecto que elegiste (para este ejemplo se usar\xe1 el ",(0,n.kt)("strong",{parentName:"p"},"Pro6"),")"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"alt text",src:t(2219).Z,width:"1290",height:"439"}),"\nEn el recuadro donde dice ",(0,n.kt)("strong",{parentName:"p"},'"Clone with HTTPS"'),", copia la URL que se encuentra.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ahora tienes que colocar este comando dento de la terminal que abriste en Laragon."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone [La URL que copiaste]\n")),(0,n.kt)("p",{parentName:"li"},"Y luego de esto, se le pedir\xe1 su usuario y contrase\xf1a, una vez verificado se le descargar\xe1 el proyecto.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Se debe crear la base de datos, para ello debes ingresar a la base de datos que esta integrado en Laragon"),(0,n.kt)("admonition",{parentName:"li",title:"Precauci\xf3n",type:"caution"},(0,n.kt)("p",{parentName:"admonition"}," Antes de comenzar, verifique que no tengan ning\xfan otro servicio de MySQL corriendo en su m\xe1quina ya que puede ver conflictos entre ellas. Primero apaga cualquier servicio de MySQL y luego ingrese a la base de datos de Laragon")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:t(4657).Z,width:"670",height:"445"})),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Seleccione alguna sesi\xf3n y ingrese con el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},'"Abrir"'),":"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:t(2166).Z,width:"675",height:"479"}),"\nSi por alguna raz\xf3n no tiene alguna sesi\xf3n, entonces puede crearlo con el bot\xf3n de ",(0,n.kt)("strong",{parentName:"p"},'"Nueva"'),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ahora solo debe crear una base de datos, el nombre depende de usted pero se recomienda que no tenga caracteres especiales. En el recuadro donde esta el nombre de la sesi\xf3n, hazle click derecho y luego dirigase a la opci\xf3n de la imagen de abajo:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:t(8602).Z,width:"637",height:"488"})),(0,n.kt)("admonition",{parentName:"li",title:"RECUERDA",type:"tip"},(0,n.kt)("p",{parentName:"admonition"}," Tenga en cuenta el nombre de su base de datos, se usar\xe1 m\xe1s adelante.")))))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Una vez descargado el proyecto, tendra que tener el archivo ",(0,n.kt)("strong",{parentName:"p"},"pro6"),".\nPara verificar si tienes la carpeta pro6, hazlo con el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"ls")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ingresa a la carpeta pro6"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd pro6\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ahora, coloca este comando para crear un archivo .",(0,n.kt)("strong",{parentName:"p"},"env")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.example .env \n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Se debe modificar el archivo .env que hemos creado, especificamente dos variables:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-env"},"APP_URL_BASE={carpeta}.test\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"carpeta"),", aca debe colocarse el nombre espec\xedfico de la carpeta del proyecto."),(0,n.kt)("li",{parentName:"ul"},"El ",(0,n.kt)("strong",{parentName:"li"},'".test"')," depender\xe1 de la configuraci\xf3n que colocaste dentro del Hostname de Laragon.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-env"},"DB_DATABASE={el nombre de su base de datos}\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Se debe ingresar el nombre de la base de datos que creaste en el Paso 3."))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Instalar las dependencias del proyecto"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composer install\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Y luego seguir estos comandos, cada comando debe hacerse uno por uno."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan key:generate\ncomposer dump-autoload\nphp artisan migrate --seed\nphp artisan storage:link\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abre Laragon y presiones el botom ",(0,n.kt)("strong",{parentName:"p"},'"Iniciar todo"'),"\n",(0,n.kt)("img",{alt:"Alt text",src:t(755).Z,width:"669",height:"450"}),"\nCon esto ya esta encendido el servidor apache."))),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Si todo se ha realizado al pie de la letra, entonces ya puedes ingresar a la pagina. Haga click derecho y se le mostrar\xe1 opciones, eliga la opci\xf3n ",(0,n.kt)("strong",{parentName:"li"},'"www"'),". ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:t(9714).Z,width:"702",height:"604"})),(0,n.kt)("p",null,"Se le mostrar\xe1 la pagina de login, las credenciales son:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Correo electr\xf3nico: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"mailto:admin@gmail.com"},"admin@gmail.com"))),(0,n.kt)("li",{parentName:"ul"},"Contrase\xf1a: ",(0,n.kt)("strong",{parentName:"li"},"1233456"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:t(2169).Z,width:"1915",height:"1002"})))}m.isMDXComponent=!0},755:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/apache-laragon-43171f5edee677456be7d83a22d392f5.png"},4657:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/base-datos-laragon-3c0e9e16773155d0ab859e8c43f7f834.png"},6093:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/carpeta-bin-laragon-41803e5f77bd7da1032c99f638dd8f18.png"},8602:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/crear-db-laragon-5c5c7ebf7707bb2d610373f88f513d57.png"},5444:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/default-mysql-laragon-93833a3777347296468ebd1368009a3e.png"},9428:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/default-version-laragon-498e096033282ade99f71a625abc938b.png"},3842:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/descomprimir-mysql-e1e83480097f950140e8fb13322304ef.png"},4451:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/descomprimir-php-laragon-51f1e4fe0086a605e84199632da85a3b.png"},4752:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/dominios-laragon-bc8f6bd8bf89970e75f4901c1b24816d.png"},4281:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/extension-soap-3ed86f2221ec9fe92445ad7935e514a0.png"},2219:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/gitlab-clone-898d7ff5503b2e5a32c10435f87b2666.png"},9714:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/ingresar-web-laragon-ff45184e601cf4726c1879ce4a4b3394.png"},8004:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/instalacion-mysql-283a07572b1050809af378886d64742e.png"},2169:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/login-pro6-0b0b33b2c584b530e24be05a5ecf7d0b.png"},8272:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/servicios-puertos-9961ef73f07fbc99d5e29f4476e547b0.png"},2166:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/session-datos-laragon-89e3a2714a32fe34748d18abee5e4277.png"},4756:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/terminal-laragon-5468fbb3ec7254dddfaef8e2bc45f04c.png"}}]);