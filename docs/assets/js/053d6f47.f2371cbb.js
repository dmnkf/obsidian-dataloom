"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i=n.p+"assets/images/new-loom-sidebar-39a74507a587a422402aec5a35eb7805.png",o=n.p+"assets/images/new-loom-folder-6f0eca2b8c18ebaef014a500f76af10a.png",l={sidebar_position:1},s="Quick start",c={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",title:"Quick start",description:"Installation",source:"@site/docs/getting-started/quick-start.mdx",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/getting-started/quick-start",draft:!1,editUrl:"https://github.com/trey-wallis/obsidian-dataloom/tree/master/docusaurus/docs/getting-started/quick-start.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/"},next:{title:"Hot keys",permalink:"/getting-started/hot-keys"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Installing the plugin",id:"installing-the-plugin",level:3},{value:"Linking loom files",id:"linking-loom-files",level:3},{value:"Create a new loom",id:"create-a-new-loom",level:2}],m={toc:u},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick start"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"installing-the-plugin"},"Installing the plugin"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In Obsidian, open ",(0,a.kt)("strong",{parentName:"li"},"Settings")),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Community plugins")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Browse")),(0,a.kt)("li",{parentName:"ol"},"Search for ",(0,a.kt)("strong",{parentName:"li"},"DataLoom")," by ",(0,a.kt)("strong",{parentName:"li"},"Trey Wallis")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Install")),(0,a.kt)("li",{parentName:"ol"},"Then select ",(0,a.kt)("strong",{parentName:"li"},"Enable"))),(0,a.kt)("h3",{id:"linking-loom-files"},"Linking loom files"),(0,a.kt)("p",null,"By default, Obsidian won't display ",(0,a.kt)("inlineCode",{parentName:"p"},".loom")," files in the menu that opens when you type double brackets ",(0,a.kt)("inlineCode",{parentName:"p"},"[["),". In order for Obsidian to do this, you must enable detection of all file extensions."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In Obsidian, open ",(0,a.kt)("strong",{parentName:"li"},"Settings")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"File & Links")),(0,a.kt)("li",{parentName:"ol"},"Toggle ",(0,a.kt)("strong",{parentName:"li"},"Detect all file extensions"))),(0,a.kt)("p",null,"This will allow you to make links to a loom e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"[[filename.loom]]")),(0,a.kt)("h2",{id:"create-a-new-loom"},"Create a new loom"),(0,a.kt)("p",null,"To create a new loom you can click on the table icon on the sidebar."),(0,a.kt)("img",{src:i,alt:"Example banner",width:"300px"}),";",(0,a.kt)("p",null,"You can also right click on any folder and click ",(0,a.kt)("strong",{parentName:"p"},"New loom"),"."),(0,a.kt)("img",{src:o,alt:"Example banner",width:"450px"}),";")}g.isMDXComponent=!0}}]);