(this["webpackJsonpreact-coin-tracker"]=this["webpackJsonpreact-coin-tracker"]||[]).push([[0],{78:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t.n(r),o=t(23),i=t.n(o),a=t(8),s=t(7),d=t(18),l=t(6),h=t(14),b="https://api.coinpaprika.com/v1";function u(){return fetch("".concat(b,"/coins")).then((function(n){return n.json()}))}function j(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(b,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}var p=t(31),x=t.n(p),f=t(10),g=Object(f.b)({key:"isDark",default:!0}),O=Object(f.b)({key:"isRoot",default:!1}),m=t(1);var v=function(n){var e=n.coinId,t=Object(h.useQuery)(["price",e],(function(){return j(e)})),r=t.isLoading,c=t.data,o=Object(f.c)(g);return Object(m.jsx)(m.Fragment,{children:r?"loading price chart...":Object(m.jsx)("div",{children:Object(m.jsx)(x.a,{type:"candlestick",series:[{data:null===c||void 0===c?void 0:c.map((function(n){return{x:n.time_open.split("T")[0],y:[n.open.toFixed(0),n.high.toFixed(0),n.low.toFixed(0),n.close.toFixed(0)]}}))}],options:{theme:{mode:o?"dark":"light"},chart:{type:"candlestick",height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},plotOptions:{candlestick:{colors:{upward:"#00a8ff",downward:"#ff4154"},wick:{useFillColor:!0}}},stroke:{colors:["pink","purple"]}}})})})};var y,k,w,C,B,L,S,A,q,F=function(n){var e=n.coinId,t=Object(h.useQuery)(["ohlcv",e],(function(){return j(e)})),r=t.isLoading,c=t.data,o=Object(f.c)(g);return Object(m.jsx)("div",{children:r?"loading chart...":Object(m.jsx)(x.a,{type:"line",series:[{name:"price",data:null===c||void 0===c?void 0:c.map((function(n){return n.close}))}],options:{theme:{mode:o?"dark":"light"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:2},yaxis:{show:!1},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1},categories:null===c||void 0===c?void 0:c.map((function(n){return n.time_close})),type:"datetime"},fill:{type:"gradient",gradient:{gradientToColors:["#1abc9c"],stops:[0,100]}},colors:["#3498db"],tooltip:{y:{formatter:function(n){return"$ ".concat(n.toFixed(3))}}}}})})},I=t(24),z=s.c.div(y||(y=Object(a.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),Q=s.c.header(k||(k=Object(a.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),T=s.c.h1(w||(w=Object(a.a)(["\n  font-size: 48px;\n  color:","\n"])),(function(n){return n.theme.accentColor})),D=s.c.span(C||(C=Object(a.a)(["\n  text-align: center;\n  display: block;\n"]))),M=s.c.div(B||(B=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n  background-color: ",";\n  padding: 10px 20px;\n  border-radius: 10px;\n"])),(function(n){return n.theme.headerBtnAccent}),(function(n){return n.theme.headerBtnAccent})),P=s.c.div(L||(L=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),_=s.c.p(S||(S=Object(a.a)(["\n  margin: 20px 0px;\n"]))),R=s.c.div(A||(A=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),H=s.c.span(q||(q=Object(a.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: transparent;\n  border: 1px solid ",";\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var J,$,E,U,G,K,N,V=function(){var n,e,t=Object(l.g)().coinId,r=Object(l.f)().state,c=Object(l.h)("/:coinId/chart"),o=Object(l.h)("/:coinId/price"),i=Object(h.useQuery)(["info",t],(function(){return function(n){return fetch("".concat(b,"/coins/").concat(n)).then((function(n){return n.json()}))}(t)})),a=i.isLoading,s=i.data,u=Object(h.useQuery)(["tickers",t],(function(){return function(n){return fetch("".concat(b,"/tickers/").concat(n)).then((function(n){return n.json()}))}(t)})),j=u.isLoading,p=u.data,x=a||j;return Object(f.d)(O)(!1),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(z,{children:[Object(m.jsx)(I.b,{children:Object(m.jsx)(I.a,{children:Object(m.jsx)("title",{children:null!==r&&void 0!==r&&r.name?r.name:x?"Loading...":null===s||void 0===s?void 0:s.name})})}),Object(m.jsx)(Q,{children:Object(m.jsx)(T,{children:null!==r&&void 0!==r&&r.name?r.name:x?"Loading...":null===s||void 0===s?void 0:s.name})}),x?Object(m.jsx)(D,{children:"...Loading"}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(M,{children:[Object(m.jsxs)(P,{children:[Object(m.jsx)("span",{children:"Rank:"}),Object(m.jsx)("span",{children:null===s||void 0===s?void 0:s.rank})]}),Object(m.jsxs)(P,{children:[Object(m.jsx)("span",{children:"Symbol:"}),Object(m.jsxs)("span",{children:["$",null===s||void 0===s?void 0:s.symbol]})]}),Object(m.jsxs)(P,{children:[Object(m.jsx)("span",{children:"Price:"}),Object(m.jsx)("span",{children:(null===p||void 0===p||null===(n=p.quotes)||void 0===n||null===(e=n.USD)||void 0===e?void 0:e.price)||0})]})]}),Object(m.jsx)(_,{children:null===s||void 0===s?void 0:s.description}),Object(m.jsxs)(M,{children:[Object(m.jsxs)(P,{children:[Object(m.jsx)("span",{children:"Total Suply:"}),Object(m.jsx)("span",{children:null===p||void 0===p?void 0:p.total_supply})]}),Object(m.jsxs)(P,{children:[Object(m.jsx)("span",{children:"Max Supply:"}),Object(m.jsx)("span",{children:null===p||void 0===p?void 0:p.max_supply})]})]}),Object(m.jsxs)(R,{children:[Object(m.jsx)(H,{isActive:null!==c,children:Object(m.jsx)(d.b,{to:"/".concat(t,"/chart"),children:"Chart"})}),Object(m.jsx)(H,{isActive:null!==o,children:Object(m.jsx)(d.b,{to:"/".concat(t,"/price"),children:"Price"})})]}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/".concat(t,"/price"),children:Object(m.jsx)(v,{coinId:t})}),Object(m.jsx)(l.a,{path:"/".concat(t,"/chart"),children:Object(m.jsx)(F,{coinId:t})})]})]})]})})},W=s.c.div(J||(J=Object(a.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),X=s.c.header($||($=Object(a.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Y=s.c.ul(E||(E=Object(a.a)([""]))),Z=s.c.li(U||(U=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  margin-bottom: 10px;\n  border-radius: 15px;\n  a {\n    display: flex;\n    align-items: center;\n    transition: color 0.2s ease-in;\n    padding: 20px;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.cardColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.cardBorderColor}),(function(n){return n.theme.accentColor})),nn=s.c.h1(G||(G=Object(a.a)(["\n  font-size: 48px;\n  color:","\n"])),(function(n){return n.theme.accentColor})),en=s.c.span(K||(K=Object(a.a)(["\n  text-align: center;\n  display: block;\n"]))),tn=s.c.img(N||(N=Object(a.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var rn,cn,on,an=function(){var n=Object(h.useQuery)("allCoins",u),e=n.isLoading,t=n.data;return Object(f.d)(O)(!0),Object(m.jsxs)(W,{children:[Object(m.jsx)(I.b,{children:Object(m.jsx)(I.a,{children:Object(m.jsx)("title",{children:"Coins"})})}),Object(m.jsx)(X,{children:Object(m.jsx)(nn,{children:"Coins"})}),e?Object(m.jsx)(en,{children:"...Loading"}):Object(m.jsx)(Y,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(m.jsx)(Z,{children:Object(m.jsxs)(d.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(m.jsx)(tn,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})},sn=t(52),dn=s.c.header(rn||(rn=Object(a.a)(["\n  width: 100%;\n  height: 60px;\n  background-color: ",";\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n  padding: 12px 30px;\n"])),(function(n){return n.theme.headerColor})),ln=s.c.button(cn||(cn=Object(a.a)(["\n  position: relative;\n  width: 120px;\n  height: 36px;\n  border-radius: 20px;\n  text-align: ",";\n  padding: 0 13px;\n  background-color: ",";\n  box-shadow: ",";\n  color: ",";\n  border: 0;\n  overflow: hidden;\n  cursor: pointer;\n  font-size: 13px;\n  float: right;\n\n  span {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    width: 26px;\n    height: 26px;\n    border-radius: 13px;\n    background-color: ",";\n    box-shadow: 0 0 5px rgb(0 0 0 / 20%);\n    margin-right: ",";\n    transition: 0.3s margin-right;\n  }\n"])),(function(n){return n.isActive?"left":"right"}),(function(n){return n.theme.headerBtnBg}),(function(n){return n.theme.headerBtnShadow}),(function(n){return n.theme.textColor}),(function(n){return n.theme.headerBtnAccent}),(function(n){return n.isActive?"0px":"80px"})),hn=s.c.button(on||(on=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 90px;\n  height: 36px;\n  border-radius: 20px;\n  font-size: 13px;\n  border: 0;\n  padding: 0 20px;\n  background-color: transparent;\n  color: ",";\n  border: 1px solid ",";\n  cursor: pointer;\n  float: left;\n\n  svg {\n    margin-right: 10px;\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor}));var bn=function(){var n=Object(f.c)(g),e=Object(f.c)(O),t=Object(f.d)(g);return Object(m.jsxs)(dn,{children:[e?null:Object(m.jsx)(d.b,{to:"/playground",children:Object(m.jsxs)(hn,{children:[Object(m.jsx)(sn.a,{}),"Back"]})}),Object(m.jsxs)(ln,{onClick:function(){return t((function(n){return!n}))},isActive:n,children:[n?"Dark mode":"Light mode",Object(m.jsx)("span",{})]})]})};var un,jn=function(){return Object(m.jsxs)(d.a,{children:[Object(m.jsx)(bn,{}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/playground",children:Object(m.jsx)(an,{})}),Object(m.jsx)(l.a,{path:"/:coinId",children:Object(m.jsx)(V,{})})]})]})},pn=t(51),xn={bgColor:"#2f3640",textColor:"whitesmoke",accentColor:"#00a8ff",cardColor:"#2f3640",cardBorderColor:"whitesmoke",headerColor:"#293039",headerBtnBg:"rgba(0, 0, 0, 0.1)",headerBtnAccent:"rgba(255, 255, 255, 0.1)",headerBtnShadow:"inset 0 0 10px rgba(0,0,0,0.3)"},fn={bgColor:"whitesmoke",textColor:"black",accentColor:"#00a8ff",cardColor:"white",cardBorderColor:"transparent",headerColor:"#fff",headerBtnBg:"rgba(0, 0, 0, 0.02)",headerBtnAccent:"#fff",headerBtnShadow:"inset 0 0 10px rgba(0,0,0,0.12)"},gn=Object(s.b)(un||(un=Object(a.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, menu, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  main, menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, main, menu, nav, section {\n    display: block;\n  }\n  /* HTML5 hidden-attribute fix for newer browsers */\n  *[hidden] {\n      display: none;\n  }\n  body {\n    line-height: 1;\n  }\n  menu, ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: 'Source Sans Pro', sans-serif;\n    background-color: ",";\n    color: ",";\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var On=function(){var n=Object(f.c)(g);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(s.a,{theme:n?xn:fn,children:[Object(m.jsx)(gn,{}),Object(m.jsx)(jn,{}),Object(m.jsx)(pn.ReactQueryDevtools,{initialIsOpen:!0})]})})},mn=new h.QueryClient;i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(f.a,{children:Object(m.jsx)(h.QueryClientProvider,{client:mn,children:Object(m.jsx)(On,{})})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.c7d48541.chunk.js.map