"use strict";(self.webpackChunkesquizobanderas=self.webpackChunkesquizobanderas||[]).push([[590],{590:(e,t,a)=>{a.r(t);var n=a(751),i=a.n(n),o=a(745),s=a(379),r=a.n(s),c=a(795),l=a.n(c),d=a(569),p=a.n(d),h=a(565),m=a.n(h),u=a(216),f=a.n(u),v=a(589),b=a.n(v),g=a(424),y={};y.styleTagTransform=b(),y.setAttributes=m(),y.insert=p().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=f(),r()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;var x=a(87),w={};w.styleTagTransform=b(),w.setAttributes=m(),w.insert=p().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=f(),r()(x.Z,w),x.Z&&x.Z.locals&&x.Z.locals;var E=a(332),z=a(671);class k extends n.Component{constructor(e){super(e),this.canvas=(0,n.createRef)(),this.width=1e3,this.height=700,this.maxScaleFactor=.7,this.state={scaleFactor:this.getScaleFactor(),republican:!1,coat:null,size:"x",position:"left"},this.availableSizes={x:200,s:240,m:420,l:590},this.availablePositions={left:[300,300],center:[450,300],right:[600,300]},this.availableCoats={constitucional:(0,n.createRef)(),franquista:(0,n.createRef)(),republicano:(0,n.createRef)(),agujero:(0,n.createRef)(),shahada:(0,n.createRef)(),sol_de_mayo:(0,n.createRef)(),venezuela:(0,n.createRef)(),marruecos:(0,n.createRef)(),nazi:(0,n.createRef)(),estrella:(0,n.createRef)(),mercadona:(0,n.createRef)(),paris:(0,n.createRef)(),sagrado_corazon:(0,n.createRef)(),roto2:(0,n.createRef)(),falange:(0,n.createRef)(),david:(0,n.createRef)(),only:(0,n.createRef)(),minusvalido:(0,n.createRef)()}}componentDidMount(){window.addEventListener("resize",(()=>{this.setState({scaleFactor:this.getScaleFactor()}),this.drawCanvas()})),this.drawCanvas()}getScaleFactor(){return window.innerWidth<this.width*this.maxScaleFactor?window.innerWidth/this.width:this.maxScaleFactor}drawCanvas(){let e=this.getTempCanvas();this.canvas.current.getContext("2d").drawImage(e,0,0,this.width*this.state.scaleFactor,this.height*this.state.scaleFactor)}getTempCanvas(){const e=document.createElement("canvas");e.width=this.width,e.height=this.height;const t=e.getContext("2d");return t.fillStyle="white",t.fillRect(0,0,this.width,this.height),this.drawFlag(t),this.drawCoat(t),this.drawUrl(t),e}drawFlag(e){this.state.republican?(e.fillStyle="#da121a",e.fillRect(50,50,900,200),e.fillStyle="#fcdd09",e.fillRect(50,250,900,200),e.fillStyle="#630b57",e.fillRect(50,450,900,200)):(e.fillStyle="#ad1519",e.fillRect(50,50,900,150),e.fillStyle="#fabd00",e.fillRect(50,200,900,300),e.fillStyle="#ad1519",e.fillRect(50,500,900,150))}drawCoat(e){if(this.state.coat){const t=[this.availablePositions[this.state.position][0]+50-this.availableSizes[this.state.size]/2,this.availablePositions[this.state.position][1]+50-this.availableSizes[this.state.size]/2];e.drawImage(this.state.coat,t[0],t[1],this.availableSizes[this.state.size],this.availableSizes[this.state.size])}}drawUrl(e){e.font="40px ComicTypo",e.textAlign="center",e.fillStyle="black",e.fillText("progredemente.com/esquizobanderas",this.width/2,this.height-15)}load(){let e=document.createElement("input");e.type="file",e.accept="image/png, image/jpeg",e.onchange=()=>{let t=new FileReader;t.addEventListener("load",(e=>{let t=new Image;t.src=e.target.result,t.onload=()=>{const e=Math.max(t.width,t.height),a=document.createElement("canvas");a.width=e,a.height=e,a.getContext("2d").drawImage(t,e/2-t.width/2,e/2-t.height/2),this.setState({coat:a},(()=>this.drawCanvas))}})),t.readAsDataURL(e.files[0])},e.click()}download(){const e=document.createElement("a");e.download="esquizobanderas.png",this.getTempCanvas().toBlob((t=>{let a=URL.createObjectURL(t);e.href=a,e.click()}))}render(){return i().createElement(E.AppsBar,{current:"esquizobanderas"},i().createElement("div",{className:"app"},i().createElement("div",{className:"flag-container"},i().createElement("div",{className:"title"},i().createElement("img",{src:"./esquizobanderas.png",alt:"logo",className:"logo"}),i().createElement("div",{className:"subtitle"},i().createElement("div",null,"Crea la bandera que más se ajuste a tu delirio"),i().createElement("div",null,"por ",i().createElement("a",{href:"/",target:"_blank"},"progredemente")))),i().createElement("canvas",{ref:this.canvas,width:this.width*this.state.scaleFactor,height:this.height*this.state.scaleFactor}),this.state.coat&&i().createElement("div",{className:"prg-button download",onClick:()=>{this.download()}},"Descargar ",i().createElement(z.Icon,{icon:"D"}))),i().createElement("div",{className:"options-container"},i().createElement("div",{className:"options-title"},"Opciones"),i().createElement("div",{className:"options"},i().createElement("div",null,"-50 de IQ",i().createElement("span",{className:"prg-button autism ".concat(this.state.republican?"":" republican"),onClick:()=>this.setState({republican:!this.state.republican},this.drawCanvas)},this.state.republican?"Desa":"A","ctivar")),i().createElement("div",null,i().createElement("div",{className:"option-title"},"Escudo"),i().createElement("div",{className:"option-content coats"},Object.keys(this.availableCoats).map((e=>i().createElement("img",{key:e,src:"./".concat(e,".png"),alt:e,className:null!=this.state.coat&&this.state.coat===this.availableCoats[e].current?"selected":"",onClick:()=>{this.setState({coat:this.availableCoats[e].current},this.drawCanvas)},ref:this.availableCoats[e]}))),i().createElement("span",{className:"prg-button",onClick:()=>{this.load()}},"Elige el tuyo propio"))),this.state.coat&&i().createElement("div",null,i().createElement("div",{className:"option-title"},"Tamaño y posición"),i().createElement("div",{className:"option-content"},i().createElement("div",{className:"modification-container"},i().createElement("div",{className:"size-container"},i().createElement("div",{className:"prg-button size-action".concat(0===Object.keys(this.availableSizes).indexOf(this.state.size)?" hide":""),onClick:()=>this.setState({size:Object.keys(this.availableSizes)[Object.keys(this.availableSizes).indexOf(this.state.size)-1]},this.drawCanvas)},"-"),i().createElement("div",{style:{"--size":this.availableSizes[this.state.size]/600,"--modification-x":this.availablePositions[this.state.position][0]/600,"--modification-y":this.availablePositions[this.state.position][1]/600},className:"modification"}),i().createElement("div",{className:"prg-button size-action".concat(3===Object.keys(this.availableSizes).indexOf(this.state.size)?" hide":""),onClick:()=>this.setState({size:Object.keys(this.availableSizes)[Object.keys(this.availableSizes).indexOf(this.state.size)+1]},this.drawCanvas)},"+")),i().createElement("div",{className:"position-container"},i().createElement("div",{className:"prg-button position-action".concat(0===Object.keys(this.availablePositions).indexOf(this.state.position)?" hide":""),onClick:()=>this.setState({position:Object.keys(this.availablePositions)[Object.keys(this.availablePositions).indexOf(this.state.position)-1]},this.drawCanvas)},"<<"),i().createElement("div",{className:"prg-button position-action".concat(2===Object.keys(this.availablePositions).indexOf(this.state.position)?" hide":""),onClick:()=>this.setState({position:Object.keys(this.availablePositions)[Object.keys(this.availablePositions).indexOf(this.state.position)+1]},this.drawCanvas)},">>")))))))))}}const C=k;o.createRoot(document.getElementById("root")).render(i().createElement(i().StrictMode,null,i().createElement(C,null)))},87:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(81),i=a.n(n),o=a(645),s=a.n(o)()(i());s.push([e.id,".app {\n    display: flex;\n    align-content: stretch;\n    height: 100%;\n}\n\n@media all and (max-width: 1000px){\n    .app {\n        display: initial;\n        height: initial;\n    }\n}\n\n.flag-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.title {\n    max-width: 600px;\n    display: flex;\n    align-items: center;\n}\n\n.logo {\n    max-width: 300px;\n}\n\n.subtitle > div {\n    margin: 10px;\n}\n\n.subtitle > :last-child {\n    text-align: right;\n    font-size: 1.25rem;\n}\n\n@media all and (max-width: 500px){\n    .title {\n        flex-direction: column;\n    }\n}\n\ncanvas {\n    box-sizing: content-box;\n}\n\n.options-container {\n    flex-grow: 1;\n    width: 100%;\n    background-color: var(--secondary-color);\n    padding: 0 10px;\n    color: var(--primary-color);\n    overflow-y: auto;\n}\n\n.options-title {\n    font-size: 2.5rem;\n    text-align: center;\n    margin: 30px;\n}\n\n.options > div {\n    margin: 40px 0;\n}\n\n.option-title {\n    text-align: center;\n    font-size: 2rem;\n    margin-top: 20px;\n}\n\n.option-content {\n    background-color: var(--background-color);\n    border-radius: 10px;\n    padding: 10px;\n}\n\n.coats {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n\n.coats > img {\n    width: 100px;\n    padding: 10px;\n    cursor: pointer;\n    border-radius: 10px;\n}\n\n.coats > img.selected {\n    background-color: var(--primary-color);\n}\n\n.prg-button.autism {\n    --prg-button-background-color: var(--primary-color);\n    --prg-button-text-color: var(--secondary-color);\n}\n\n.prg-button.autism.republican {\n    --prg-button-background-color: #630b57;\n}\n\n.modification-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.size-container {\n    display: flex;\n    align-items: center;\n\n}\n\n.modification {\n    width: 150px;\n    height: 100px;\n    cursor: pointer;\n    border-radius: 10px;\n    background-color: var(--primary-color);\n    position: relative;\n}\n\n.modification::after {\n    position: absolute;\n    display: block;\n    content: ' ';\n    width: calc(100px * var(--size));\n    height: calc(100px * var(--size));\n    top: calc(100px * var(--modification-y) - (100px * var(--size) / 2));\n    left: calc(100px * var(--modification-x) - (100px * var(--size) / 2));\n    border-radius: 50%;\n    background-color: var(--secondary-color);\n}\n\n.position-container {\n    display: flex;\n}\n\n.position-action {\n    margin-bottom: 0;\n}\n\n.hide {\n    visibility: hidden;\n}\n\n.download {\n    font-size: 2.25rem\n}\n\n",""]);const r=s},424:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(81),i=a.n(n),o=a(645),s=a.n(o)()(i());s.push([e.id,"* {\n    font-family: ComicTypo;\n    box-sizing: border-box;\n    --primary-color: #ad1519;\n    --secondary-color: #fabd00;\n    --background-color: #ffebb1;\n}\n\nhtml, body, #root {\n    height: 100%;\n}\n\nbody {\n    margin: 0 auto;\n    font-size: 1.5rem;\n    background-color: var(--background-color);\n}\n\na {\n    text-decoration: none;\n    color: var(--primary-color);\n}\n\n.apps-bar-container {\n    --apps-bar-primary-color: var(--secondary-color) !important;\n    --apps-bar-secondary-color: var(--primary-color) !important;\n    --apps-bar-text-primary-color: white !important;\n    --apps-bar-text-secondary-color: black !important;\n}\n\n.prg-button {\n    --prg-button-background-color: var(--secondary-color);\n    --prg-button-text-color: var(--primary-color);\n}\n",""]);const r=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",n=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),n&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),n&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,n,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),a&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=a):d[2]=a),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},745:(e,t,a)=>{var n=a(576);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},379:e=>{var t=[];function a(e){for(var a=-1,n=0;n<t.length;n++)if(t[n].identifier===e){a=n;break}return a}function n(e,n){for(var o={},s=[],r=0;r<e.length;r++){var c=e[r],l=n.base?c[0]+n.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var h=a(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(m);else{var u=i(m,n);n.byIndex=r,t.splice(r,0,{identifier:p,updater:u,references:1})}s.push(p)}return s}function i(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,i){var o=n(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var r=a(o[s]);t[r].references--}for(var c=n(e,i),l=0;l<o.length;l++){var d=a(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,a){var n=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var n="";a.supports&&(n+="@supports (".concat(a.supports,") {")),a.media&&(n+="@media ".concat(a.media," {"));var i=void 0!==a.layer;i&&(n+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),n+=a.css,i&&(n+="}"),a.media&&(n+="}"),a.supports&&(n+="}");var o=a.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);