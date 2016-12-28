/*! Frontend - v1.0.0 - built on 28-12-2016 */
window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"!=b||e}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;d<e;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;g<h;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.8.3",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;g<i;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==q.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=r.shift();s=1,a?a.t?o(function(){("c"==a.t?m.injectCss:m.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):s=0}function i(a,c,d,e,f,i,j){function k(b){if(!n&&g(l.readyState)&&(t.r=n=1,!s&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&o(function(){v.removeChild(l)},50);for(var d in A[c])A[c].hasOwnProperty(d)&&A[c][d].onload()}}var j=j||m.errorTimeout,l=b.createElement(a),n=0,q=0,t={t:d,s:c,e:f,a:i,x:j};1===A[c]&&(q=1,A[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,q)},r.splice(e,0,t),"img"!=a&&(q||2===A[c]?(v.insertBefore(l,u?null:p),o(k,j)):A[c].push(l))}function j(a,b,c,d,f){return s=0,b=b||"j",e(a)?i("c"==b?x:w,a,b,this.i++,c,d,f):(r.splice(this.i++,0,a),1==r.length&&h()),this}function k(){var a=m;return a.loader={load:j,i:0},a}var l,m,n=b.documentElement,o=a.setTimeout,p=b.getElementsByTagName("script")[0],q={}.toString,r=[],s=0,t="MozAppearance"in n.style,u=t&&!!b.createRange().compareNode,v=u?n:p.parentNode,n=a.opera&&"[object Opera]"==q.call(a.opera),n=!!b.attachEvent&&!n,w=t?"object":n?"script":"img",x=n?"script":w,y=Array.isArray||function(a){return"[object Array]"==q.call(a)},z=[],A={},B={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};m=function(a){function b(a){var b,c,d,a=a.split("!"),e=z.length,f=a.pop(),g=a.length,f={url:f,origUrl:f,prefixes:a};for(c=0;c<g;c++)d=a[c].split("="),(b=B[d.shift()])&&(f=b(f,d));for(c=0;c<e;c++)f=z[c](f);return f}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(A[i.url]?i.noexec=!0:A[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),A[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}),g(a,l,b,0,j);else if(Object(a)===a)for(i in h=function(){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c}(),a)a.hasOwnProperty(i)&&(!c&&!--h&&(d(l)?l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}:l[i]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),n()}}(m[i])),g(a[i],l,b,i,j))}else!c&&n()}var h,i,j=!!a.test,k=a.load||a.both,l=a.callback||f,m=l,n=a.complete||f;c(j?a.yep:a.nope,!!k),k&&c(k)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(y(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):y(j)?m(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},m.addPrefix=function(a,b){B[a]=b},m.addFilter=function(a){z.push(a)},m.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",l=function(){b.removeEventListener("DOMContentLoaded",l,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k,l,n=b.createElement("script"),e=e||m.errorTimeout;n.src=a;for(l in d)n.setAttribute(l,d[l]);c=j?h:c||f,n.onreadystatechange=n.onload=function(){!k&&g(n.readyState)&&(k=1,c(),n.onload=n.onreadystatechange=null)},o(function(){k||(k=1,c(1))},e),i?n.onload():p.parentNode.insertBefore(n,p)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(p.parentNode.insertBefore(e,p),o(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},window.Detectizr=function(a,b,c,d){function e(a,b){var c,d,f;if(arguments.length>2)for(c=1,d=arguments.length;c<d;c+=1)e(a,arguments[c]);else for(f in b)b.hasOwnProperty(f)&&(a[f]=b[f]);return a}function f(a){return u.browser.userAgent.indexOf(a)>-1}function g(a){return a.test(u.browser.userAgent)}function h(a){return a.exec(u.browser.userAgent)}function i(a){return a.replace(/^\s+|\s+$/g,"")}function j(a){return null===a||a===d?"":String(a).replace(/((\s|\-|\.)+[a-z0-9])/g,function(a){return a.toUpperCase().replace(/(\s|\-|\.)/g,"")})}function k(a,b){var c=b||"",d=1===a.nodeType&&(a.className?(" "+a.className+" ").replace(z," "):"");if(d){for(;d.indexOf(" "+c+" ")>=0;)d=d.replace(" "+c+" "," ");a.className=b?i(d):""}}function l(a,b,c){a&&(a=j(a),b&&(b=j(b),m(a+b,!0),c&&m(a+b+"_"+c,!0)))}function m(a,b){a&&v&&(x.addAllFeaturesAsClass?v.addTest(a,b):(b="function"==typeof b?b():b,b?v.addTest(a,!0):(delete v[a],k(A,a))))}function n(a,b){a.version=b;var c=b.split(".");c.length>0?(c=c.reverse(),a.major=c.pop(),c.length>0?(a.minor=c.pop(),c.length>0?(c=c.reverse(),a.patch=c.join(".")):a.patch="0"):a.minor="0"):a.major="0"}function o(){a.clearTimeout(s),s=a.setTimeout(function(){t=u.device.orientation,a.innerHeight>a.innerWidth?u.device.orientation="portrait":u.device.orientation="landscape",m(u.device.orientation,!0),t!==u.device.orientation&&m(t,!1)},10)}function p(a){var c,d,e,f,g,h=b.plugins;for(f=h.length-1;f>=0;f--){for(c=h[f],d=c.name+c.description,e=0,g=a.length;g>=0;g--)d.indexOf(a[g])!==-1&&(e+=1);if(e===a.length)return!0}return!1}function q(a){var b;for(b=a.length-1;b>=0;b--)try{new ActiveXObject(a[b])}catch(c){}return!1}function r(d){var i,k,r,s,t,z,A;if(x=e({},x,d||{}),x.detectDevice){for(u.device={type:"",model:"",orientation:""},r=u.device,g(/googletv|smarttv|smart-tv|internet.tv|netcast|nettv|appletv|boxee|kylo|roku|dlnadoc|roku|pov_tv|hbbtv|ce\-html/)?(r.type=w[0],r.model="smartTv"):g(/xbox|playstation.3|wii/)?(r.type=w[0],r.model="gameConsole"):g(/ip(a|ro)d/)?(r.type=w[1],r.model="ipad"):g(/tablet/)&&!g(/rx-34/)||g(/folio/)?(r.type=w[1],r.model=String(h(/playbook/)||"")):g(/linux/)&&g(/android/)&&!g(/fennec|mobi|htc.magic|htcX06ht|nexus.one|sc-02b|fone.945/)?(r.type=w[1],r.model="android"):g(/kindle/)||g(/mac.os/)&&g(/silk/)?(r.type=w[1],r.model="kindle"):g(/gt-p10|sc-01c|shw-m180s|sgh-t849|sch-i800|shw-m180l|sph-p100|sgh-i987|zt180|htc(.flyer|\_flyer)|sprint.atp51|viewpad7|pandigital(sprnova|nova)|ideos.s7|dell.streak.7|advent.vega|a101it|a70bht|mid7015|next2|nook/)||g(/mb511/)&&g(/rutem/)?(r.type=w[1],r.model="android"):g(/bb10/)?(r.type=w[1],r.model="blackberry"):(r.model=h(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/),null!==r.model?(r.type=w[2],r.model=String(r.model)):(r.model="",g(/bolt|fennec|iris|maemo|minimo|mobi|mowser|netfront|novarra|prism|rx-34|skyfire|tear|xv6875|xv6975|google.wireless.transcoder/)?r.type=w[2]:g(/opera/)&&g(/windows.nt.5/)&&g(/htc|xda|mini|vario|samsung\-gt\-i8000|samsung\-sgh\-i9/)?r.type=w[2]:g(/windows.(nt|xp|me|9)/)&&!g(/phone/)||g(/win(9|.9|nt)/)||g(/\(windows 8\)/)?r.type=w[3]:g(/macintosh|powerpc/)&&!g(/silk/)?(r.type=w[3],r.model="mac"):g(/linux/)&&g(/x11/)?r.type=w[3]:g(/solaris|sunos|bsd/)?r.type=w[3]:g(/cros/)?r.type=w[3]:g(/bot|crawler|spider|yahoo|ia_archiver|covario-ids|findlinks|dataparksearch|larbin|mediapartners-google|ng-search|snappy|teoma|jeeves|tineye/)&&!g(/mobile/)?(r.type=w[3],r.model="crawler"):r.type=w[2])),i=0,k=w.length;i<k;i+=1)m(w[i],r.type===w[i]);x.detectDeviceModel&&m(j(r.model),!0)}if(x.detectScreen&&(r.screen={},v&&v.mq&&(v.mq("only screen and (max-width: 240px)")?(r.screen.size="veryVerySmall",m("veryVerySmallScreen",!0)):v.mq("only screen and (max-width: 320px)")?(r.screen.size="verySmall",m("verySmallScreen",!0)):v.mq("only screen and (max-width: 480px)")&&(r.screen.size="small",m("smallScreen",!0)),r.type!==w[1]&&r.type!==w[2]||v.mq("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)")&&(r.screen.resolution="high",m("highresolution",!0))),r.type===w[1]||r.type===w[2]?(a.onresize=function(a){o(a)},o()):(r.orientation="landscape",m(r.orientation,!0))),x.detectOS&&(u.os={},s=u.os,""!==r.model&&("ipad"===r.model||"iphone"===r.model||"ipod"===r.model?(s.name="ios",n(s,(g(/os\s([\d_]+)/)?RegExp.$1:"").replace(/_/g,"."))):"android"===r.model?(s.name="android",n(s,g(/android\s([\d\.]+)/)?RegExp.$1:"")):"blackberry"===r.model?(s.name="blackberry",n(s,g(/version\/([^\s]+)/)?RegExp.$1:"")):"playbook"===r.model&&(s.name="blackberry",n(s,g(/os ([^\s]+)/)?RegExp.$1.replace(";",""):""))),s.name||(f("win")||f("16bit")?(s.name="windows",f("windows nt 10")?n(s,"10"):f("windows nt 6.3")?n(s,"8.1"):f("windows nt 6.2")||g(/\(windows 8\)/)?n(s,"8"):f("windows nt 6.1")?n(s,"7"):f("windows nt 6.0")?n(s,"vista"):f("windows nt 5.2")||f("windows nt 5.1")||f("windows xp")?n(s,"xp"):f("windows nt 5.0")||f("windows 2000")?n(s,"2k"):f("winnt")||f("windows nt")?n(s,"nt"):f("win98")||f("windows 98")?n(s,"98"):(f("win95")||f("windows 95"))&&n(s,"95")):f("mac")||f("darwin")?(s.name="mac os",f("68k")||f("68000")?n(s,"68k"):f("ppc")||f("powerpc")?n(s,"ppc"):f("os x")&&n(s,(g(/os\sx\s([\d_]+)/)?RegExp.$1:"os x").replace(/_/g,"."))):f("webtv")?s.name="webtv":f("x11")||f("inux")?s.name="linux":f("sunos")?s.name="sun":f("irix")?s.name="irix":f("freebsd")?s.name="freebsd":f("bsd")&&(s.name="bsd")),s.name&&(m(s.name,!0),s.major&&(l(s.name,s.major),s.minor&&l(s.name,s.major,s.minor))),g(/\sx64|\sx86|\swin64|\swow64|\samd64/)?s.addressRegisterSize="64bit":s.addressRegisterSize="32bit",m(s.addressRegisterSize,!0)),x.detectBrowser&&(t=u.browser,g(/opera|webtv/)||!g(/msie\s([\d\w\.]+)/)&&!f("trident")?f("firefox")?(t.engine="gecko",t.name="firefox",n(t,g(/firefox\/([\d\w\.]+)/)?RegExp.$1:"")):f("gecko/")?t.engine="gecko":f("opera")?(t.name="opera",t.engine="presto",n(t,g(/version\/([\d\.]+)/)?RegExp.$1:g(/opera(\s|\/)([\d\.]+)/)?RegExp.$2:"")):f("konqueror")?t.name="konqueror":f("edge")?(t.engine="webkit",t.name="edge",n(t,g(/edge\/([\d\.]+)/)?RegExp.$1:"")):f("chrome")?(t.engine="webkit",t.name="chrome",n(t,g(/chrome\/([\d\.]+)/)?RegExp.$1:"")):f("iron")?(t.engine="webkit",t.name="iron"):f("crios")?(t.name="chrome",t.engine="webkit",n(t,g(/crios\/([\d\.]+)/)?RegExp.$1:"")):f("applewebkit/")?(t.name="safari",t.engine="webkit",n(t,g(/version\/([\d\.]+)/)?RegExp.$1:"")):f("mozilla/")&&(t.engine="gecko"):(t.engine="trident",t.name="ie",!a.addEventListener&&c.documentMode&&7===c.documentMode?n(t,"8.compat"):g(/trident.*rv[ :](\d+)\./)?n(t,RegExp.$1):n(t,g(/trident\/4\.0/)?"8":RegExp.$1)),t.name&&(m(t.name,!0),t.major&&(l(t.name,t.major),t.minor&&l(t.name,t.major,t.minor))),m(t.engine,!0),t.language=b.userLanguage||b.language,m(t.language,!0)),x.detectPlugins){for(t.plugins=[],i=y.length-1;i>=0;i--)z=y[i],A=!1,a.ActiveXObject?A=q(z.progIds):b.plugins&&(A=p(z.substrs)),A&&(t.plugins.push(z.name),m(z.name,!0));b.javaEnabled()&&(t.plugins.push("java"),m("java",!0))}}var s,t,u={},v=a.Modernizr,w=["tv","tablet","mobile","desktop"],x={addAllFeaturesAsClass:!1,detectDevice:!0,detectDeviceModel:!0,detectScreen:!0,detectOS:!0,detectBrowser:!0,detectPlugins:!0},y=[{name:"adobereader",substrs:["Adobe","Acrobat"],progIds:["AcroPDF.PDF","PDF.PDFCtrl.5"]},{name:"flash",substrs:["Shockwave Flash"],progIds:["ShockwaveFlash.ShockwaveFlash.1"]},{name:"wmplayer",substrs:["Windows Media"],progIds:["wmplayer.ocx"]},{name:"silverlight",substrs:["Silverlight"],progIds:["AgControl.AgControl"]},{name:"quicktime",substrs:["QuickTime"],progIds:["QuickTime.QuickTime"]}],z=/[\t\r\n]/g,A=c.documentElement;return u.detect=function(a){return r(a)},u.init=function(){u!==d&&(u.browser={userAgent:(b.userAgent||b.vendor||a.opera).toLowerCase()},u.detect())},u.init(),u}(this,this.navigator,this.document);