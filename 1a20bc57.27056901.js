(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(87)),c={id:"cli",title:"Command Line Interface",sidebar_label:"Command Line Interface",slug:"/cli"},i={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"Command Line Interface",description:"localhost.run uses SSH, which is already installed on all major operating systems.",source:"@site/docs/cli.md",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/localhost-run/site/edit/main/docs/cli.md",version:"current",sidebar_label:"Command Line Interface",sidebar:"docs",previous:{title:"The Basics",permalink:"/docs/"},next:{title:"Custom Domains",permalink:"/docs/custom-domains"}},l=[{value:"ssh ...",id:"ssh-",children:[{value:"-R [customdomain:]bindport:host:hostport",id:"-r-customdomainbindporthosthostport",children:[]},{value:"--output <em>output</em>",id:"--output-output",children:[]},{value:"--inject-http-proxy-headers",id:"--inject-http-proxy-headers",children:[]},{value:"--inject-proxy-protocol-header",id:"--inject-proxy-protocol-header",children:[]},{value:"--proxy-protocol-header-version <em>version</em>",id:"--proxy-protocol-header-version-version",children:[]}]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"localhost.run uses SSH, which is already installed on all major operating systems."),Object(r.b)("p",null,"Mac OS, Windows and most Linux will use openssh. The man page for openssh is ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://man.openbsd.org/ssh"}),"here"),", the commands you will most often need for tunnels are documented below."),Object(r.b)("h2",{id:"ssh-"},"ssh ..."),Object(r.b)("p",null,"ssh ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#-r-customdomainbindporthosthostport"}),"-R ",Object(r.b)("em",{parentName:"a"},"tunnel"))," localhost.run [-- [",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#--output-output"}),"--output ",Object(r.b)("em",{parentName:"a"},"output")),"] [",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#--inject-http-proxy-headers"}),"--[no-]inject-http-proxy-headers"),"] [",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#--inject-proxy-protocol-header"}),"--[no-]inject-proxy-protocol-header"),"] [",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#--proxy-protocol-header-version-version"}),"--proxy-protocol-header-version ",Object(r.b)("em",{parentName:"a"},"version")),"]"),Object(r.b)("h3",{id:"-r-customdomainbindporthosthostport"},"-R ",Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"#customdomain"}),"[",Object(r.b)("em",{parentName:"a"},"customdomain"),":]"),Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"#bindport"}),Object(r.b)("em",{parentName:"a"},"bindport")),":",Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"#hosthostport"}),Object(r.b)("em",{parentName:"a"},"host"),":",Object(r.b)("em",{parentName:"a"},"hostport"))),Object(r.b)("p",null,"Forward connections from the localhost.run internet accessable domain to ",Object(r.b)("em",{parentName:"p"},"host"),":",Object(r.b)("em",{parentName:"p"},"port"),"."),Object(r.b)("h4",{id:"customdomain"},Object(r.b)("em",{parentName:"h4"},"customdomain")),Object(r.b)("p",null,"Optionally connect a tunnel to a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/custom-domains"}),"custom domain"),"."),Object(r.b)("p",null,"This defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"localhost.run")," which generates a free domain under ",Object(r.b)("inlineCode",{parentName:"p"},"localhost.run"),"."),Object(r.b)("h4",{id:"bindport"},Object(r.b)("em",{parentName:"h4"},"bindport")),Object(r.b)("p",null,"Set your domain to listen on either ",Object(r.b)("inlineCode",{parentName:"p"},"80")," or ",Object(r.b)("inlineCode",{parentName:"p"},"443"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"80")," will deploy an unencrypted forwarder on port 80 and a TLS decryption forwarder on port 443 for your domain and send your application unencrypted traffic from your clients."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"443")," will deploy a redirect to HTTPS on port 80 and a TLS passthru forwarder on port 443 for your domain and send your application the unaltered TLS traffic from your clients."),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"443")," is an advanced mode of operation used to develop TLS applications, like letsencrypt handlers for example. Unless you know with certainly you want to use it, you probably don't want to use it."))),Object(r.b)("h4",{id:"hosthostport"},Object(r.b)("em",{parentName:"h4"},"host"),":",Object(r.b)("em",{parentName:"h4"},"hostport")),Object(r.b)("p",null,"The local address to connect the tunnel to. For example if you access your local application on ",Object(r.b)("inlineCode",{parentName:"p"},"localhost:8080")," then this is also ",Object(r.b)("inlineCode",{parentName:"p"},"localhost:8080")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Some operating systems set ",Object(r.b)("inlineCode",{parentName:"p"},"localhost")," to the ipv6 address ",Object(r.b)("inlineCode",{parentName:"p"},"[::1]")," while some frameworks listen on ",Object(r.b)("inlineCode",{parentName:"p"},"127.0.0.1"),", try ",Object(r.b)("inlineCode",{parentName:"p"},"127.0.0.1")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"localhost")," if there are connection issues."))),Object(r.b)("h3",{id:"--output-output"},"--output ",Object(r.b)("em",{parentName:"h3"},"output")),Object(r.b)("p",null,"Set the output format for event messages:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"text (default)"),Object(r.b)("li",{parentName:"ul"},"json")),Object(r.b)("h3",{id:"--inject-http-proxy-headers"},"--inject-http-proxy-headers"),Object(r.b)("p",null,"Enable http proxy headers."),Object(r.b)("p",null,"This functionality is ",Object(r.b)("em",{parentName:"p"},"on")," by default and can be disabled with ",Object(r.b)("inlineCode",{parentName:"p"},"--no-inject-http-proxy-headers"),"."),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http-tunnels#proxy_headers"}),"HTTP Tunnels Proxy headers section")," for more information."),Object(r.b)("h3",{id:"--inject-proxy-protocol-header"},"--inject-proxy-protocol-header"),Object(r.b)("p",null,"Enable the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt"}),"Proxy Protocol TCP header"),"."),Object(r.b)("p",null,"This functionality is ",Object(r.b)("em",{parentName:"p"},"off")," by default and can be enabled with ",Object(r.b)("inlineCode",{parentName:"p"},"--inject-proxy-protocol-header"),"."),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This is an advanced setting and should only be used with applications that expect a Proxy Protocol TCP header."))),Object(r.b)("h3",{id:"--proxy-protocol-header-version-version"},"--proxy-protocol-header-version ",Object(r.b)("em",{parentName:"h3"},"version")),Object(r.b)("p",null,"Set the Proxy Protocol version:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"v1"),Object(r.b)("li",{parentName:"ul"},"v2")),Object(r.b)("p",null,"This defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"v1")," when the header is enabled."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ssh -R 80:localhost:8080 localhost.run")," will connect a free domain tunnel to localhost on port 8080.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ssh -R 80:localhost:3000 localhost.run")," will connect a free domain tunnel to localhost on port 3000.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ssh -R example.com:80:localhost:3000 localhost.run")," will connect a custom domain tunnel from example.com to localhost on port 3000.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ssh -R www.example.com:80:localhost:3000 -R example.com:80:localhost:3000 localhost.run")," will connect a custom domain tunnel from example.com and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.example.com"}),"www.example.com")," to localhost on port 3000. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/custom-domains"}),"Custom Domains")," for more details about using subdomains included with all custom domains.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ssh -R admin.example.com:80:localhost:8000 -R example.com:80:localhost:3000 localhost.run")," will connect a custom domain tunnel from example.com to localhost on port 3000 and a custom domain tunnel from admin.example.com to localhost on port 8000. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/custom-domains"}),"Custom Domains")," for more details about using subdomains included with all custom domains.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ssh -R example.com:80:localhost:3000 localhost.run -- --no-inject-http-proxy-headers")," will connect a custom domain tunnel from example.com to localhost on port 3000 and not add HTTP Proxy headers.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ssh -R example.com:80:localhost:3000 localhost.run -- --inject-proxy-protocol-header")," will connect a custom domain tunnel from example.com to localhost on port 3000 and send a Proxy Protocol V1 header at the beginning of each TCP connection."))))}b.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||r;return n?o.a.createElement(h,i(i({ref:t},p),{},{components:n})):o.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<r;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);