(this["webpackJsonpapps-per-day"]=this["webpackJsonpapps-per-day"]||[]).push([[0],{22:function(n,e,t){},27:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var r,c,o,i=t(0),a=t.n(i),s=t(5),l=t.n(s),d=(t(22),t(23),t(4)),u=t(3),b=t(7),h=t(1),j=a.a.createContext(),p=function(n){var e=a.a.useState("light"),t=Object(b.a)(e,2),r=t[0],c=t[1],o=Object(i.useContext)(u.c);return console.log(o,"app theme context"),Object(h.jsx)(j.Provider,{value:{theme:r,switchTheme:function(n){c(n)}},children:n.children})},x={colors:{background:"#ECEFF4",cardBackground:"#E5E9F0",buttonBackground:"#5E81AC",textColor:"#2E3440",buttonColor:"#ECEFF4"}},g={colors:{background:"#333333",cardBackground:"#E5E9F0",buttonBackground:"#5E81AC",textColor:"#f9f9f9",buttonColor:"#ECEFF4"}},f=Object(u.b)(r||(r=Object(d.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n\n    transition: all 0.5s;\n  }\n"]))),m=function(n){var e=n.children,t=Object(i.useContext)(j).theme;return Object(h.jsxs)(u.a,{theme:"light"===t?x:g,children:[Object(h.jsx)(f,{}),e]})},O=(t(27),t(2)),k=t.p+"static/media/sun.8d68e82b.png",C=t.p+"static/media/moon.77059e7c.png",v=u.c.label(c||(c=Object(d.a)(['\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n\n  & input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  & .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n\n  & .slider:before {\n    position: absolute;\n    content: "";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 2px;\n    background-color: #f9f9f950;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n\n  & input + .slider {\n    background-image: url(\'',"');\n    background-size: contain, 5px 5px;\n    background-repeat: no-repeat;\n    background-position: right;\n  }\n\n  & input:checked + .slider {\n    background-image: url('","');\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: left;\n  }\n\n  & input:focus + .slider {\n    box-shadow: 0 0 1px #2196f3;\n  }\n\n  & input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n  & .slider.round {\n    border-radius: 34px;\n  }\n\n  & .slider.round:before {\n    border-radius: 50%;\n  }\n"])),k,C),w=function(n){return Object(h.jsxs)(v,{children:[Object(h.jsx)("input",{type:"checkbox",onChange:function(e){return e.target.checked?n.handleSwitch(n.trueValue):n.handleSwitch(n.falseValue)}}),Object(h.jsx)("span",{className:"slider round"})]})},E=function(){var n=a.a.useContext(j),e=n.switchTheme,t=n.theme,r=a.a.useState(!1),c=Object(b.a)(r,2),o=c[0],i=c[1];return Object(h.jsx)("div",{children:Object(h.jsx)(O.d,{expand:"lg",light:"light"===t,dark:"dark"===t,children:Object(h.jsxs)(O.b,{fluid:!0,children:[Object(h.jsx)(O.e,{href:"#",children:"Apps per Day"}),Object(h.jsx)(O.i,{"aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return i(!o)},children:Object(h.jsx)(O.c,{icon:"bars",fas:!0})}),Object(h.jsxs)(O.a,{navbar:!0,show:o,children:[Object(h.jsxs)(O.h,{className:"mr-auto mb-2 mb-lg-0",children:[Object(h.jsx)(O.f,{children:Object(h.jsx)(O.g,{active:!0,"aria-current":"page",href:"#",children:"Home"})}),Object(h.jsx)(O.f,{children:Object(h.jsx)(O.g,{href:"#",children:"Link"})})]}),Object(h.jsx)("form",{className:"d-flex input-group w-auto",children:Object(h.jsx)(w,{handleSwitch:e,trueValue:"dark",falseValue:"light"})})]})]})})})},F=u.c.h1(o||(o=Object(d.a)(["\n  font-size: 1.5em;\n  text-align: center;\n  color: ",";\n  background-color: ",";\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.background}));var y,S=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(E,{}),Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)(F,{className:"mb-3",children:"Hello i am title"})})]})},B=u.c.div(y||(y=Object(d.a)(["\n  color: ",";\n  background-color: ",";\n  min-height: 100vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.background})),N=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),o(n),i(n)}))};l.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(p,{children:Object(h.jsx)(m,{children:Object(h.jsx)(B,{children:Object(h.jsx)(S,{})})})})}),document.getElementById("root")),N()}},[[28,1,2]]]);
//# sourceMappingURL=main.379de6d1.chunk.js.map