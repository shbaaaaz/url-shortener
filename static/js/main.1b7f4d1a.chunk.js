(this["webpackJsonpurl-shortner"]=this["webpackJsonpurl-shortner"]||[]).push([[0],{191:function(e,t,n){},210:function(e,t){},212:function(e,t){},221:function(e,t){},223:function(e,t){},248:function(e,t){},250:function(e,t){},251:function(e,t){},256:function(e,t){},258:function(e,t){},264:function(e,t){},266:function(e,t){},285:function(e,t){},297:function(e,t){},300:function(e,t){},326:function(e,t){},418:function(e,t,n){"use strict";n.r(t);var c=n(10),s=n(185),i=n.n(s),a=(n(191),n(41)),o=n(186),l=n.n(o),u=n(102),r=n(2),j=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),o=Object(a.a)(i,2),j=o[0],b=o[1],d=Object(c.useState)(!1),h=Object(a.a)(d,2),f=h[0],O=h[1],p=Object(c.useState)(""),x=Object(a.a)(p,2),m=x[0],v=x[1],g=Object(c.useState)(!1),N=Object(a.a)(g,2),C=N[0],w=N[1],y=function(){return w(!1)};return Object(r.jsxs)("div",{className:"home-container",children:[Object(r.jsx)("h1",{children:"URL Shortener"}),f&&Object(r.jsx)("h3",{children:"Loading..."}),m&&Object(r.jsx)("h4",{className:"error-msg",children:m}),!f&&Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"input-combo",children:[Object(r.jsx)("input",{type:"text",id:"inputURL",placeholder:"Please enter the URL",value:n,onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("button",{onClick:function(e){O(!0),v(""),e.preventDefault();try{n&&(n.includes("www.")&&(n.includes(".in")||n.includes(".com")||n.includes(".org")||n.includes(".net"))?l.a.short(n,(function(e,t){console.log(t),b(t)})):v("Please enter a valid URL!"))}catch(t){v(t.message)}finally{O(!1)}},className:"btn-submit",children:"Click here"})]}),j&&Object(r.jsxs)("div",{className:"input-icons",children:[" ",Object(r.jsx)("input",{type:"text",id:"outputURL",className:"input-fields",disabled:!0,value:j}),Object(r.jsxs)("div",{className:"btn-combo",children:[Object(r.jsxs)("button",{onClick:function(e){w(!0),e.preventDefault(),navigator.clipboard.writeText(j),setTimeout(y,2e3)},className:"tooltip",children:[Object(r.jsx)(u.a,{}),Object(r.jsx)("span",{className:"tooltiptext",children:"Copy to clipboard"})]}),Object(r.jsxs)("button",{onClick:function(e){e.preventDefault(),b("")},className:"tooltip",children:[Object(r.jsx)(u.b,{})," ",Object(r.jsx)("span",{className:"tooltiptext",children:"Clear"})]})]}),C&&Object(r.jsx)("p",{className:"copy-message",children:"Copied"})]})]})]})},b=function(){return Object(r.jsxs)("div",{className:"footer",children:["Developed with \ud83d\udc9b by ",Object(r.jsx)("em",{children:Object(r.jsx)("a",{href:"http://www.shahbazkhan.in",children:"Shahbaz Khan"})})]})};var d=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(j,{}),Object(r.jsx)(b,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,419)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};i.a.render(Object(r.jsx)(d,{}),document.getElementById("root")),h()}},[[418,1,2]]]);
//# sourceMappingURL=main.1b7f4d1a.chunk.js.map