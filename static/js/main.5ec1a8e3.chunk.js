(this["webpackJsonpreact-auth-code-input-example"]=this["webpackJsonpreact-auth-code-input-example"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);a(2);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),i=a(1),u=["alpha","numeric","alphanumeric"],o={alpha:{type:"text",inputMode:"text",pattern:"[a-zA-Z]{1}"},alphanumeric:{type:"text",inputMode:"text",pattern:"[a-zA-Z0-9]{1}"},numeric:{type:"number",inputMode:"numeric",pattern:"[0-9]{1}",min:"0",max:"9"}},s=Object(n.forwardRef)((function(e,t){var a=e.allowedCharacters,c=void 0===a?"alphanumeric":a,l=e.ariaLabel,i=e.autoFocus,s=void 0===i||i,m=e.disabled,d=e.length,p=void 0===d?6:d,h=e.containerClassName,v=e.inputClassName,f=e.isPassword,g=void 0!==f&&f,b=e.onChange;if(isNaN(p)||p<1)throw new Error("Length should be a number and greater than 0");if(!u.some((function(e){return e===c})))throw new Error("Invalid value for allowedCharacters. Use alpha, numeric, or alphanumeric");var E=Object(n.useRef)([]),w=o[c];Object(n.useImperativeHandle)(t,(function(){return{focus:function(){E.current&&E.current[0].focus()},clear:function(){if(E.current){for(var e=0;e<E.current.length;e++)E.current[e].value="";E.current[0].focus()}C()}}})),Object(n.useEffect)((function(){s&&E.current[0].focus()}),[]);for(var C=function(){var e=E.current.map((function(e){return e.value})).join("");b&&b(e)},x=function(e){var t=e.target,a=t.value,n=t.nextElementSibling;a.length>1?(e.target.value=a.charAt(0),null!==n&&n.focus()):a.match(w.pattern)?null!==n&&n.focus():e.target.value="",C()},y=function(e){var t=e.key,a=e.target;if("Backspace"===t){if(""===a.value){if(null!==a.previousElementSibling){var n=a.previousElementSibling;n.value="",n.focus(),e.preventDefault()}}else a.value="";C()}},O=function(e){e.target.select()},j=function(e){for(var t=e.clipboardData.getData("Text"),a=0,n=0;n<t.length;n++){var r=t.charAt(n),c=E.current[a].value;r.match(w.pattern)&&(c||(E.current[a].value=r,null!==E.current[a].nextElementSibling&&(E.current[a].nextElementSibling.focus(),a++)))}C(),e.preventDefault()},k=[],N=function(e){k.push(r.a.createElement("input",Object.assign({key:e,onChange:x,onKeyDown:y,onFocus:O,onPaste:j},w,{type:g?"password":w.type,ref:function(t){E.current[e]=t},maxLength:1,className:v,autoComplete:"one-time-code","aria-label":l?"".concat(l,". Character ").concat(e+1,"."):"Character ".concat(e+1,"."),disabled:m})))},P=0;P<p;P++)N(P);return r.a.createElement("div",{className:h},k)})),m=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(!1),o=Object(i.a)(u,2),m=o[0],d=o[1],p=Object(n.useState)(!1),h=Object(i.a)(p,2),v=h[0],f=h[1];return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"React Auth Code Input"),r.a.createElement("p",null,"One-time password (OTP) React component."),r.a.createElement("div",{className:"badges"},r.a.createElement("img",{alt:"",src:"https://img.shields.io/npm/v/react-auth-code-input.svg"}),r.a.createElement("img",{alt:"code style standard",src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg"}),r.a.createElement("img",{alt:"license MIT",src:"https://img.shields.io/badge/license-MIT-brightgreen.svg"}),r.a.createElement("img",{alt:"",src:"https://img.shields.io/npm/dt/react-auth-code-input.svg"}),r.a.createElement("img",{alt:"",src:"https://img.shields.io/npm/dw/react-auth-code-input.svg"})),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/drac94/react-auth-code-input"},"View documentation on GitHub")),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Two-Factor",r.a.createElement("br",null)," Authentication"),r.a.createElement(s,{ref:e,onChange:function(e){l(e)},containerClassName:"container",inputClassName:"input",isPassword:m,disabled:v}),r.a.createElement("p",null,"A message with a verification code has been sent to ",r.a.createElement("br",null),"your devices. Enter the code to continue."),r.a.createElement("p",null,"Code: ",c),r.a.createElement("div",{className:"controls"},r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"isPassword",name:"isPassword",onChange:function(e){return d(e.target.checked)}}),r.a.createElement("label",{htmlFor:"isPassword"},"Password")),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"disabled",name:"disabled",onChange:function(e){return f(e.target.checked)}}),r.a.createElement("label",{htmlFor:"disabled"},"Disabled")),r.a.createElement("button",{onClick:function(){var t;return null===(t=e.current)||void 0===t?void 0:t.focus()}},"Focus"),r.a.createElement("button",{onClick:function(){var t;return null===(t=e.current)||void 0===t?void 0:t.clear()}},"Clear")))))};l.a.render(r.a.createElement(m,null),document.getElementById("root"))},2:function(e,t,a){},5:function(e,t,a){e.exports=a(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.5ec1a8e3.chunk.js.map