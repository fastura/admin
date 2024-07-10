"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[70],{4137:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>g});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),l=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?t.createElement(g,s(s({ref:r},p),{},{components:a})):t.createElement(g,s({ref:r},p))}));function g(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4370:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=a(7462),n=(a(7294),a(4137));const o={},s="Descargas de reportes en cola",i={unversionedId:"guias-adicionales/Descargas-en-cola",id:"guias-adicionales/Descargas-en-cola",title:"Descargas de reportes en cola",description:"Para solucionar el error de las dsecargas de algunos reportes en cola, por favor verificar estos dos puntos.",source:"@site/docs/guias-adicionales/01-Descargas-en-cola.md",sourceDirName:"guias-adicionales",slug:"/guias-adicionales/Descargas-en-cola",permalink:"/admin/guias-adicionales/Descargas-en-cola",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Guias adicionales",permalink:"/admin/guias-adicionales"},next:{title:"Cantidad de clientes",permalink:"/admin/guias-adicionales/Cantidad-de-clientes"}},c={},l=[{value:"Opci\xf3n 1",id:"opci\xf3n-1",level:2},{value:"Opci\xf3n 2",id:"opci\xf3n-2",level:2},{value:"Linux",id:"linux",level:3}],p={toc:l},u="wrapper";function d(e){let{components:r,...a}=e;return(0,n.kt)(u,(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"descargas-de-reportes-en-cola"},"Descargas de reportes en cola"),(0,n.kt)("p",null,"Para solucionar el error de las dsecargas de algunos reportes en cola, por favor verificar estos dos puntos."),(0,n.kt)("h2",{id:"opci\xf3n-1"},"Opci\xf3n 1"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verifique que exista un archivo supervisor.conf, recuerda que debe ser un archivo."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-config",metastring:'title="supervisor.conf"',title:'"supervisor.conf"'},"[program:laravel-worker]\nprocess_name=%(program_name)s_%(process_num)02d\ncommand=php /var/www/html/artisan queue:work --sleep=3 --tries=3\nautostart=true\nautorestart=true\nstopasgroup=true\nkillasgroup=true\nuser=root\nnumprocs=8\nredirect_stderr=true\nstdout_logfile=/var/www/html/storage/logs/supervisor.log\nstopwaitsecs=3600 \n")))),(0,n.kt)("h2",{id:"opci\xf3n-2"},"Opci\xf3n 2"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Si el archivo ya esta creado entonces debe seguir estos pasos:")),(0,n.kt)("h3",{id:"linux"},"Linux"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Se debe entrar al contenedor del supervisor, para poder omstrar todos los contenedores ",(0,n.kt)("inlineCode",{parentName:"p"},"docker ps "),".Ingrese este comando en su terminal: "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it [nombre de su contenedor supervisor] /bin/bash\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Una vez ingresado en el contenedor del supervisor, entonces se tiene que colocar estos comando en secuencia: "),(0,n.kt)("p",{parentName:"li"},"A. Se ingresa este comando:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan queue:work --queue=high,default\n")),(0,n.kt)("p",{parentName:"li"}," En general no demora mucho, pero si tienes demasiada cosas en descarga, con dos minutos deber\xeda bastar. Luego de eso solo haga ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," para seguir con los siguientes comandos."),(0,n.kt)("p",{parentName:"li"},"B. Luego colocamos estos comando sucesivamente en la terminal para reiniciar el archivo ",(0,n.kt)("strong",{parentName:"p"},"supervisor.conf")," y empiece a correr de nuevo:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"service supervisor start\nsupervisorctl reread\nsupervisorctl update\nsupervisorctl start all\n")))))}d.isMDXComponent=!0}}]);