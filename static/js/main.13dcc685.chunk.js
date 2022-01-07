(this["webpackJsonpreact-quiz-game"]=this["webpackJsonpreact-quiz-game"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a,r,c=n(2),s=n.n(c),l=n(12),i=n.n(l),o=n(4),d=n(3);!function(e){e.Standard="STANDARD",e.Time="TIME",e.Marathon="MARATHON"}(a||(a={})),function(e){e.Main_Menu="Main_Menu",e.Options="Options",e.Quiz="Quiz"}(r||(r={}));var u=n(1),x=s.a.createContext(null),b=function(){return Object(c.useContext)(x)},m=function(e){var t=e.children,n=Object(c.useState)(r.Main_Menu),s=Object(o.a)(n,2),l=s[0],i=s[1],b=Object(c.useState)({category:"",difficulty:"",type:"",amount:10}),m=Object(o.a)(b,2),j=m[0],f=m[1],h=Object(c.useState)("https://opentdb.com/api.php?amount=10&encode=url3986"),O=Object(o.a)(h,2),p=O[0],y=O[1],g=Object(c.useState)(a.Standard),v=Object(o.a)(g,2),w=v[0],N=v[1],k=function(e){var t={};e.category&&(t=Object(d.a)(Object(d.a)({},t),{},{category:e.category})),e.difficulty&&(t=Object(d.a)(Object(d.a)({},t),{},{difficulty:e.difficulty})),e.type&&(t=Object(d.a)(Object(d.a)({},t),{},{type:e.type})),t=Object(d.a)(Object(d.a)({},t),{},{amount:e.amount}),t=Object(d.a)(Object(d.a)({},t),{},{encode:"url3986"});var n=new URLSearchParams(t);return console.log("https://opentdb.com/api.php?".concat(n)),"https://opentdb.com/api.php?".concat(n)};return Object(u.jsx)(x.Provider,{value:{activeComponent:l,gameOptions:j,fetchURL:p,gameMode:w,navigateToMainMenu:function(){i(r.Main_Menu)},navigateToOptions:function(){i(r.Options)},navigateToQuiz:function(e){i(r.Quiz),N(e),e===a.Marathon&&y(k(Object(d.a)(Object(d.a)({},j),{},{category:"",type:"multiple",amount:50})))},updateGameOptions:function(e){f(e),y(k(e))}},children:t})},j=n(5),f=n(13),h=function(){var e=b(),t=e.navigateToQuiz,n=e.navigateToOptions,r=Object(c.useState)(a.Standard),s=Object(o.a)(r,2),l=s[0],i=s[1];return Object(u.jsxs)("section",{className:"main-menu-container",children:[Object(u.jsx)("div",{className:"absolute top-1/2 left-0 z-20 transform -translate-y-1/2 -translate-x-20 sm:-translate-x-24 md:-translate-x-28 h-60 w-60 sm:h-72 sm:w-72 md:h-88 md:w-88 rounded-full border-12 sm:border-16 md:border-20 border-gray-800 bg-gray-500 ",children:function(){switch(l){case a.Standard:return Object(u.jsx)(j.e,{className:"w-full h-full p-14 text-white"});case a.Time:return Object(u.jsx)(f.a,{className:"w-full h-full p-14 text-white transform -rotate-12"});case a.Marathon:return Object(u.jsx)(j.g,{className:"w-full h-full p-14 text-white"});default:throw Error("No matching mode found!")}}()}),Object(u.jsx)("h1",{className:"text-center text-5xl sm:text-6xl md:text-7xl text-white font-black filter text-shadow-multi my-8",children:"Trivia Quiz"}),Object(u.jsxs)("div",{className:"absolute top-1/2 left-20 md:left-32 z-10 w-2/3 transform -translate-y-1/2 flex flex-col space-y-4 sm:space-y-6 md:space-y-8 md:space-y-10",children:[Object(u.jsx)("button",{className:"btn-standard",onClick:function(){return t(a.Standard)},onMouseEnter:function(){return i(a.Standard)},children:"Standard"}),Object(u.jsx)("button",{className:"btn-standard",onClick:function(){return t(a.Time)},onMouseEnter:function(){return i(a.Time)},children:"Timed"}),Object(u.jsx)("button",{className:"btn-standard",onClick:function(){return t(a.Marathon)},onMouseEnter:function(){return i(a.Marathon)},children:"Marathon"})]}),Object(u.jsxs)("div",{className:"absolute bottom-0 w-full flex justify-between p-5 z-10",children:[Object(u.jsxs)("button",{className:"text-5xl sm:text-6xl md:text-7xl text-white",onClick:n,children:[Object(u.jsx)(j.c,{"aria-hidden":!0,focusable:!1}),Object(u.jsx)("span",{className:"visually-hidden",children:"Options"})]}),Object(u.jsxs)("button",{className:"text-5xl sm:text-6xl md:text-7xl text-white",onClick:n,children:[Object(u.jsx)(j.b,{"aria-hidden":!0,focusable:!1}),Object(u.jsx)("span",{className:"visually-hidden",children:"Score"})]})]})]})},O=n(11),p=n.n(O),y=n(14),g=function(e,t){var n=Object(c.useRef)({}),a=Object(c.useRef)(!1),r={error:void 0,data:void 0},s=Object(c.useReducer)((function(e,t){switch(t.type){case"loading":return Object(d.a)({},r);case"fetched":return Object(d.a)(Object(d.a)({},r),{},{data:t.payload});case"error":return Object(d.a)(Object(d.a)({},r),{},{error:t.payload});default:return e}}),r),l=Object(o.a)(s,2),i=l[0],u=l[1];return Object(c.useEffect)((function(){if(e){var r=function(){var r=Object(y.a)(p.a.mark((function r(){var c,s;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(u({type:"loading"}),!n.current[e]){r.next=4;break}return u({type:"fetched",payload:n.current[e]}),r.abrupt("return");case 4:return r.prev=4,r.next=7,fetch(e,t);case 7:if((c=r.sent).ok){r.next=10;break}throw new Error(c.statusText);case 10:return r.next=12,c.json();case 12:if(s=r.sent,n.current[e]=s,!a.current){r.next=16;break}return r.abrupt("return");case 16:u({type:"fetched",payload:s}),r.next=24;break;case 19:if(r.prev=19,r.t0=r.catch(4),!a.current){r.next=23;break}return r.abrupt("return");case 23:u({type:"error",payload:r.t0});case 24:case"end":return r.stop()}}),r,null,[[4,19]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){a.current=!0}}}),[e]),i},v=n(9),w=function(){var e=g("https://opentdb.com/api_category.php"),t=e.data,n=(e.error,b()),a=n.gameOptions,r=n.navigateToMainMenu,s=n.updateGameOptions,l=Object(c.useState)(a),i=Object(o.a)(l,2),x=i[0],m=i[1];return Object(u.jsxs)("section",{className:"options-container",children:[Object(u.jsx)("h1",{className:"text-center text-5xl sm:text-6xl md:text-7xl text-white font-black filter text-shadow-multi my-4 sm:my-6",children:"Options"}),Object(u.jsx)("label",{className:"block text-center text-2xl sm:text-3xl mt-8 mb-2 sm:mb-4 text-gray-800 font-bold",htmlFor:"categories",children:"Select Category"}),Object(u.jsxs)("select",{className:"block py-2 text-center rounded-lg text-xl bg-gray-300 mx-auto max-w-full border-2 border-gray-800",id:"categories",value:x.category,onChange:function(e){return m(Object(d.a)(Object(d.a)({},x),{},{category:e.target.value}))},children:[Object(u.jsx)("option",{value:"",children:"Any Category"}),t&&t.trivia_categories.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name})}))]}),Object(u.jsx)("h2",{className:"text-center text-2xl sm:text-3xl mt-8 mb-2 sm:mb-4 text-gray-800 font-bold",children:"Select Difficulty"}),Object(u.jsxs)("div",{className:"flex justify-center items-center space-x-1",children:[Object(u.jsxs)("div",{className:"inline-flex rounded-lg",children:[Object(u.jsx)("input",{type:"radio",name:"difficulty",id:"difficultyAny",value:"",hidden:!0,checked:""===x.difficulty,onChange:function(e){return m(Object(d.a)(Object(d.a)({},x),{},{difficulty:e.target.value}))}}),Object(u.jsx)("label",{htmlFor:"difficultyAny",className:"radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800",children:"Any"})]}),Object(u.jsxs)("div",{className:"inline-flex rounded-lg",children:[Object(u.jsx)("input",{type:"radio",name:"difficulty",id:"difficultyEasy",value:"easy",hidden:!0,checked:"easy"===x.difficulty,onChange:function(e){return m(Object(d.a)(Object(d.a)({},x),{},{difficulty:e.target.value}))}}),Object(u.jsx)("label",{htmlFor:"difficultyEasy",className:"radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800",children:"Easy"})]}),Object(u.jsxs)("div",{className:"inline-flex rounded-lg",children:[Object(u.jsx)("input",{type:"radio",name:"difficulty",id:"difficultyMedium",value:"medium",hidden:!0,checked:"medium"===x.difficulty,onChange:function(e){return m(Object(d.a)(Object(d.a)({},x),{},{difficulty:e.target.value}))}}),Object(u.jsx)("label",{htmlFor:"difficultyMedium",className:"radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800",children:"Medium"})]}),Object(u.jsxs)("div",{className:"inline-flex rounded-lg",children:[Object(u.jsx)("input",{type:"radio",name:"difficulty",id:"difficultyHard",value:"hard",hidden:!0,checked:"hard"===x.difficulty,onChange:function(e){return m(Object(d.a)(Object(d.a)({},x),{},{difficulty:e.target.value}))}}),Object(u.jsx)("label",{htmlFor:"difficultyHard",className:"radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800",children:"Hard"})]})]}),Object(u.jsx)("h2",{className:"text-center text-2xl sm:text-3xl mt-8 mb-2 sm:mb-4 text-gray-800 font-bold",children:"Select Type"}),Object(u.jsxs)("div",{className:"flex justify-center items-center space-x-1",children:[Object(u.jsxs)("div",{className:"inline-flex rounded-lg",children:[Object(u.jsx)("input",{type:"radio",name:"type",id:"typeAny",value:"",hidden:!0,checked:""===x.type,onChange:function(e){return m(Object(d.a)(Object(d.a)({},x),{},{type:e.target.value}))}}),Object(u.jsx)("label",{htmlFor:"typeAny",className:"radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800",children:"Any"})]}),Object(u.jsxs)("div",{className:"inline-flex rounded-lg",children:[Object(u.jsx)("input",{type:"radio",name:"type",id:"typeMultiple",value:"multiple",hidden:!0,checked:"multiple"===x.type,onChange:function(e){return m(Object(d.a)(Object(d.a)({},x),{},{type:e.target.value}))}}),Object(u.jsx)("label",{htmlFor:"typeMultiple",className:"radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800",children:"Multiple Choice"})]}),Object(u.jsxs)("div",{className:"inline-flex rounded-lg",children:[Object(u.jsx)("input",{type:"radio",name:"type",id:"typeBoolean",value:"boolean",hidden:!0,checked:"boolean"===x.type,onChange:function(e){return m(Object(d.a)(Object(d.a)({},x),{},{type:e.target.value}))}}),Object(u.jsx)("label",{htmlFor:"typeBoolean",className:"radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800",children:"True / False"})]})]}),Object(u.jsx)("h2",{className:"text-center text-2xl sm:text-3xl mt-8 mb-2 sm:mb-4 text-gray-800 font-bold",children:"Select Number of Questions"}),Object(u.jsxs)("div",{className:"flex justify-center items-center space-x-1",children:[Object(u.jsxs)("div",{className:"inline-flex rounded-lg",children:[Object(u.jsx)("input",{type:"radio",name:"amount",id:"amountTen",value:10,hidden:!0,checked:10===x.amount,onChange:function(e){return m(Object(d.a)(Object(d.a)({},x),{},{amount:parseInt(e.target.value)}))}}),Object(u.jsx)("label",{htmlFor:"amountTen",className:"radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800",children:"10"})]}),Object(u.jsxs)("div",{className:"inline-flex rounded-lg",children:[Object(u.jsx)("input",{type:"radio",name:"amount",id:"amountFifteen",value:15,hidden:!0,checked:15===x.amount,onChange:function(e){return m(Object(d.a)(Object(d.a)({},x),{},{amount:parseInt(e.target.value)}))}}),Object(u.jsx)("label",{htmlFor:"amountFifteen",className:"radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800",children:"15"})]}),Object(u.jsxs)("div",{className:"inline-flex rounded-lg",children:[Object(u.jsx)("input",{type:"radio",name:"amount",id:"amountTwenty",value:20,hidden:!0,checked:20===x.amount,onChange:function(e){return m(Object(d.a)(Object(d.a)({},x),{},{amount:parseInt(e.target.value)}))}}),Object(u.jsx)("label",{htmlFor:"amountTwenty",className:"radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800",children:"20"})]})]}),Object(u.jsxs)("button",{className:"absolute bottom-5 left-5 z-10 text-5xl sm:text-6xl md:text-7xl text-white",onClick:function(){s(x),r()},children:[Object(u.jsx)(v.a,{"aria-hidden":!0,focusable:!1}),Object(u.jsx)("span",{className:"visually-hidden",children:"Back"})]})]})},N=n(6),k=function(e,t){var n=g(e,t),a=n.data,r=n.error,s=Object(c.useState)(),l=Object(o.a)(s,2),i=l[0],u=l[1];return Object(c.useEffect)((function(){if(a){var e=a.results.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{category:decodeURIComponent(e.category),question:decodeURIComponent(e.question),correct_answer:decodeURIComponent(e.correct_answer),incorrect_answers:e.incorrect_answers.map((function(e){return decodeURIComponent(e)}))})}));u(e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{shuffled_answers:(t=[].concat(Object(N.a)(e.incorrect_answers),[e.correct_answer]),Object(N.a)(t).sort((function(){return Math.random()-.5})))});var t})))}}),[a]),[i,r]},M=function(e){var t,n=e.question,a=e.userAnswer,r=e.questionNum,c=e.questionCount,s=e.callback;return Object(u.jsxs)("div",{className:"flex flex-col justify-center h-full",children:[Object(u.jsx)("h1",{className:"w-full sm:w-4/5 mx-auto p-4 md:p-6 break-words text-center text-xl sm:text-2xl md:text-3xl font-bold sm:rounded-b-3xl bg-gray-800 text-gray-100",children:n.question}),Object(u.jsx)("div",{className:"flex flex-row justify-around w-1/2 mx-auto py-1 md:py-2 text-xl sm:text-2xl md:text-3xl rounded-b-full bg-gray-500 text-gray-100 text-shadow",children:Object(u.jsxs)("h4",{children:[r," / ",c]})}),Object(u.jsx)("div",{className:"flex flex-col h-full space-y-10 z-10 justify-center items-center",children:null===(t=n.shuffled_answers)||void 0===t?void 0:t.map((function(e,t){return Object(u.jsxs)("button",{className:"w-4/5 sm:w-3/4 md:w-3/5 filter drop-shadow-md",value:e,disabled:!!a,onClick:function(e){return s(e.currentTarget.value)},children:[Object(u.jsx)("span",{className:"block my-auto py-2 rounded-lg text-lg sm:text-xl text-shadow text-gray-100 font-semibold bg-gray-500",children:e}),a?Object(u.jsx)("span",{className:"flex justify-cente text-white font-semibold h-6 w-1/2 mx-auto rounded-b-full ".concat(a.correctAnswer===e?"bg-green-800":"bg-red-800"),children:a.correctAnswer===e?Object(u.jsx)(j.a,{className:"m-auto"}):Object(u.jsx)(j.h,{className:"m-auto"})}):Object(u.jsx)("span",{className:"flex justify-center bg-gray-800 text-white font-semibold h-6 w-1/2 mx-auto rounded-b-full",children:"ABCD".charAt(t)})]},t)}))})]})},C=function(e){var t=e.score,n=e.userAnswers,a=e.navigateBack;return Object(u.jsxs)("div",{className:"results-container flex flex-col h-full",children:[Object(u.jsx)("h2",{className:"text-4xl md:text-6xl text-center my-4 font-black text-white filter text-shadow-multi",children:"Results"}),Object(u.jsx)("div",{className:"flex flex-col items-center space-y-5 px-4 md:px-5 overflow-y-auto pb-1/4vh",children:n.map((function(e,t){return Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("h3",{className:"text-lg sm:text-xl md:text-2xl font-black mb-2 text-gray-800",children:"".concat(t+1,") ").concat(e.question)}),Object(u.jsxs)("h4",{className:"text-md sm:text-lg md:text-xl font-bold ".concat(e.correct?"text-green-900":"text-red-900"),children:["Your Answer:- ",e.answer]}),Object(u.jsxs)("h4",{className:"text-md sm:text-lg md:text-xl font-bold text-green-900",children:["Correct Answer:- ",e.correctAnswer]})]},t)}))}),Object(u.jsxs)("div",{className:"absolute bottom-2 sm:bottom-6 left-0 w-full text-center text-gray-100 filter text-shadow-multi z-10",children:[Object(u.jsx)("h2",{className:"text-xl sm:text-3xl md:text-4xl font-bold",children:"Your Final Score"}),Object(u.jsx)("h3",{className:"text-xl sm:text-3xl md:text-4xl font-bold",children:t})]}),Object(u.jsxs)("button",{className:"absolute bottom-2 left-2 z-10 text-5xl sm:text-6xl md:text-7xl text-white",onClick:a,children:[Object(u.jsx)(v.a,{"aria-hidden":!0,focusable:!1}),Object(u.jsx)("span",{className:"visually-hidden",children:"Back"})]})]})},T=function(e,t){var n=Object(c.useState)(e),a=Object(o.a)(n,2),r=a[0],s=a[1],l=Object(c.useState)(!1),i=Object(o.a)(l,2),d=i[0],u=i[1],x=Object(c.useRef)(),b=Object(c.useRef)(),m=function(){u(!1)};return Object(c.useEffect)((function(){b.current=t}),[t]),Object(c.useEffect)((function(){return d&&(x.current=window.setInterval((function(){var e=r-1;e>=0?s(e):(b.current&&b.current(),m())}),1e3)),function(){return window.clearInterval(x.current)}}),[d,r]),[r,d,function(){u(!0)},m,function(){s(e),u(!1)}]},S=function(e){var t=e.currentTime,n=t/e.maxTime*100;return Object(u.jsx)("div",{className:"h-3 sm:h-5 bg-gray-800 relative",children:Object(u.jsx)("div",{style:{width:"".concat(n,"%")},className:"h-3 sm:h-5 bg-gray-500 transition-{width} duration-1000 ease-linear ".concat(t<5?"animate-pulse-full":"animate-none")})})},A=function(e){var t=e.currentLives,n=e.maxLives,a=Array.from(Array(n).keys());return Object(u.jsx)("div",{className:"flex flex-row justify-center space-x-1 my-1 md:my-2 text-xl sm:text-2xl md:text-3xl",children:a.map((function(e,n){return n<t?Object(u.jsx)(j.d,{className:"fill-current text-red-500"}):Object(u.jsx)(j.f,{className:"fill-current text-red-500"})}))})},_=function(e){var t=e.url,n=e.mode,r=k(t),s=Object(o.a)(r,2),l=s[0],i=s[1],d=Object(c.useState)(0),x=Object(o.a)(d,2),m=x[0],j=x[1],f=Object(c.useState)(0),h=Object(o.a)(f,2),O=h[0],p=h[1],y=Object(c.useState)(!1),g=Object(o.a)(y,2),v=g[0],w=g[1],_=Object(c.useState)([]),z=Object(o.a)(_,2),E=z[0],F=z[1],R=T(20,(function(){return J("")})),q=Object(o.a)(R,5),I=q[0],B=(q[1],q[2]),L=(q[3],q[4]),Q=Object(c.useState)(5),U=Object(o.a)(Q,2),D=U[0],H=U[1],G=b().navigateToMainMenu,J=function(e){if(l){var t=l[m].correct_answer===e;if(t&&Y(),!t&&n===a.Marathon){var r=D-1;r>=0?H(r):w(!0)}var c={question:l[m].question,answer:e,correct:t,correctAnswer:l[m].correct_answer};F((function(e){return[].concat(Object(N.a)(e),[c])})),setTimeout((function(){P()}),1e3)}},P=function(){var e=m+1;l&&e<l.length?j(e):w(!0)},Y=function(){switch(n){case a.Standard:p((function(e){return e+1}));break;case a.Time:p((function(e){return e+Math.max(0,I)}));break;case a.Marathon:p((function(e){return e+5*D}));break;default:throw new Error("No matching mode found!")}};return Object(c.useEffect)((function(){n===a.Time&&(L(),B())}),[m]),i?Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:i.message})}):l?v?Object(u.jsx)(C,{score:O,userAnswers:E,navigateBack:G}):Object(u.jsxs)("div",{className:"relative flex flex-col h-full w-full max-w-screen-md max-h-screen-lg overflow-hidden bg-gray-200",children:[Object(u.jsx)(M,{question:l[m],userAnswer:E[m],questionNum:m+1,questionCount:l.length,callback:J}),n===a.Marathon&&Object(u.jsx)(A,{currentLives:D,maxLives:5}),Object(u.jsx)("div",{className:"flex flex-row justify-around text-2xl sm:text-3xl md:text-4xl w-1/2 mx-auto py-0 sm:py-1 md:py-2 rounded-t-full bg-gray-800 text-gray-100 ",children:Object(u.jsx)("h4",{children:O})}),n===a.Time&&Object(u.jsx)(S,{currentTime:I,maxTime:20})]}):Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Loading..."})})};var z=function(){var e=b(),t=e.activeComponent,n=e.fetchURL,a=e.gameMode;return Object(u.jsxs)("main",{className:"h-screen w-screen flex justify-center items-center",children:[t===r.Main_Menu&&Object(u.jsx)(h,{}),t===r.Options&&Object(u.jsx)(w,{}),t===r.Quiz&&Object(u.jsx)(_,{url:n,mode:a})]})};n(21);i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(m,{children:Object(u.jsx)(z,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.13dcc685.chunk.js.map