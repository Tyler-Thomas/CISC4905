(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{23:function(e,t,c){},40:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(15),r=c.n(a),o=(c(40),c(2)),i=c(3),j=(c(23),c(7)),l=c(6),u=(c.p,c(54)),h=c(29),b=c(55),d=n.a.createContext({user:"Johnny",setUser:function(e){}});function x(e,t){var c=Object(s.useState)(e),n=Object(i.a)(c,2),a=n[0],r=n[1];localStorage.getItem(t)?a=localStorage.getItem(t):(localStorage.setItem(t,a),r(a));return[a,function(e){localStorage.setItem(t,e),r(e)}]}var O=c(1);var m=function(){var e=x("User","user-context"),t=Object(i.a)(e,2),c={user:t[0],setUser:t[1]},s=function(e,t){return"User"===e?Object(O.jsx)(u.a.Brand,{className:"LoginLink",href:"/login",children:"Login"}):Object(O.jsx)(h.a,{className:"LoginLink",children:Object(O.jsx)(b.a,{onClick:function(){t("User")},children:Object(O.jsx)(j.b,{to:"/",children:"Logout"})})})};return Object(O.jsx)(d.Provider,{value:c,children:Object(O.jsx)(d.Consumer,{children:function(e){var t=e.user,c=e.setUser;return Object(O.jsx)("div",{className:"Nav",children:Object(O.jsxs)(u.a,{className:"Navs",children:[Object(O.jsx)(u.a.Brand,{className:"NavHome",href:"/",children:"Home"}),Object(O.jsx)(u.a.Collapse,{className:"justify-content-end",children:Object(O.jsxs)(u.a.Text,{className:"NavText",children:["Hello ",t]})}),s(t,c)]})})}})})},g=function(e){var t=e.character,c=n.a.useState({charVotes:[]}),s=Object(i.a)(c,2),a=s[0],r=s[1],o=n.a.useState([]),l=Object(i.a)(o,2),u=l[0],h=l[1],b=n.a.useState([0,0,0,0,0,0]),d=Object(i.a)(b,2),x=d[0],g=d[1],v=[0,0,0,0,0,0],f=0;return n.a.useEffect((function(){fetch("/votes").then((function(e){return e.json()})).then((function(e){return{votes:e.source.votes,charVotes:e.source.chars[t.index-1].charVotes}})).then((function(e){console.log(e);for(var t=[],c=0;c<e.charVotes.length;c++)v[e.votes[e.charVotes[c]].value-1]++,t.push({user:e.votes[e.charVotes[c]].user,comment:e.votes[e.charVotes[c]].comment}),f+=e.votes[e.charVotes[c]].value,console.log(f);0!==e.charVotes.length&&(v[5]=f/e.charVotes.length),console.log(v),g(v),h(t),r(e),console.log(v)}))}),[]),Object(O.jsxs)("div",{className:"Char",children:[Object(O.jsx)(m,{}),Object(O.jsx)("div",{className:"backbutton",children:Object(O.jsx)(j.b,{className:"back",to:"/",children:Object(O.jsx)("button",{className:"backb",children:"Back"})})}),Object(O.jsxs)("div",{className:"charName",children:[t.name,Object(O.jsx)("div",{className:"PorBox",children:Object(O.jsx)("img",{className:"Portrait",src:"./4905images/".concat(t.name,".png"),alt:"No portrait"},"imgs2".concat(t.name))})]}),Object(O.jsxs)("div",{className:"histogram",children:[Object(O.jsx)("div",{className:"histobox",style:{height:"".concat(x[0]/a.charVotes.length*50,"%"),backgroundColor:"red"},children:"1"}),Object(O.jsx)("div",{className:"histobox",style:{height:"".concat(x[1]/a.charVotes.length*50,"%"),backgroundColor:"orange"},children:"2"}),Object(O.jsx)("div",{className:"histobox",style:{height:"".concat(x[2]/a.charVotes.length*50,"%"),backgroundColor:"yellow"},children:"3"}),Object(O.jsx)("div",{className:"histobox",style:{height:"".concat(x[3]/a.charVotes.length*50,"%"),backgroundColor:"green"},children:"4"}),Object(O.jsx)("div",{className:"histobox",style:{height:"".concat(x[4]/a.charVotes.length*50,"%"),backgroundColor:"blue"},children:"5"}),Object(O.jsxs)("div",{className:"AVG",children:["Average: ",x[5]]})]}),Object(O.jsx)("div",{className:"VoteLink",children:Object(O.jsx)(j.b,{to:"/vote/"+t.index,children:"Your Vote"})}),u.map((function(e){return Object(O.jsxs)("div",{children:[null===e.comment||""===e.comment?Object(O.jsx)("p",{}):Object(O.jsx)("p",{children:e.user}),Object(O.jsx)("p",{children:e.comment})]})}))]})},v=function(e){var t=e.character,c="./4905images/".concat(t,".png");return console.log(c),Object(O.jsxs)("div",{className:"Select",children:[Object(O.jsx)("div",{className:"Chars",children:Object(O.jsx)(j.b,{to:"/"+t,children:t})}),Object(O.jsx)("div",{className:"img",children:Object(O.jsx)("img",{className:"Portrait",id:"imgs".concat(t),src:c,alt:"No portrait"})})]})},f=function(e){var t=e.chars;return Object(O.jsxs)("div",{className:"Home",children:[Object(O.jsx)(m,{}),Object(O.jsxs)("p",{children:["Welcome to FE Community Rankings. The purpose of this site is to ",Object(O.jsx)("br",{}),"be able to glean at a glance how the community views various Fire Emblem Characters.",Object(O.jsx)("br",{}),"You can get started by clicking on any of the characters below."]}),t.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(v,{character:e.name})},e.index)}))]})},p=function(e){var t=e.character,c=x("User","user-context"),s=Object(i.a)(c,2),a=s[0],r=(s[1],n.a.useState(0)),o=Object(i.a)(r,2),l=o[0],u=o[1],h=n.a.useState(""),b=Object(i.a)(h,2),d=b[0],g=b[1],v=n.a.useState({votes:[],charVotes:[],userVotes:[]}),f=Object(i.a)(v,2),p=(f[0],f[1]);n.a.useEffect((function(){fetch("/votes").then((function(e){return e.json()})).then((function(e){return{votes:e.source.votes,charVotes:e.source.chars[t.index-1].charVotes,userVotes:"User"===a?[]:e.source.users[e.source.userList.indexOf(a)].userVotes}})).then((function(e){console.log(e);for(var t=0;t<e.charVotes.length;t++)e.userVotes.includes(e.charVotes[t])&&(u(e.votes[e.charVotes[t]].value),g(e.votes[e.charVotes[t]].comment),t=e.charVotes.length);p(e)}))}),[]);var N,y=0===l?Object(O.jsx)("p",{children:"You have not cast a vote for this character yet."}):Object(O.jsxs)("p",{children:["Your vote: ",l]});return N="User"===a?Object(O.jsx)("p",{children:"You are not logged in. In order to cast or change your vote, you must be logged in."}):Object(O.jsxs)("div",{children:[Object(O.jsxs)("form",{onSubmit:function(e){try{fetch("/votes",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({usr:a,ch:t.index,vote:l,comm:d})}).then((function(e){return e.text()})).then((function(e){console.log(e)}))}catch(c){console.log(c.message)}},children:[Object(O.jsxs)("label",{children:["1",Object(O.jsx)("input",{type:"radio",value:1,checked:1===l,onChange:function(){return u(1)}})]}),Object(O.jsxs)("label",{children:["2",Object(O.jsx)("input",{type:"radio",value:2,checked:2===l,onChange:function(){return u(2)}})]}),Object(O.jsxs)("label",{children:["3",Object(O.jsx)("input",{type:"radio",value:3,checked:3===l,onChange:function(){return u(3)}})]}),Object(O.jsxs)("label",{children:["4",Object(O.jsx)("input",{type:"radio",value:4,checked:4===l,onChange:function(){return u(4)}})]}),Object(O.jsxs)("label",{children:["5",Object(O.jsx)("input",{type:"radio",value:5,checked:5===l,onChange:function(){return u(5)}})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{children:["Comment:",Object(O.jsx)("textarea",{value:d,onChange:function(e){g(e.target.value)}})]}),Object(O.jsx)("input",{type:"submit",value:"Submit"})]}),y]}),Object(O.jsxs)("div",{className:"Char",children:[Object(O.jsx)(m,{}),Object(O.jsx)("div",{className:"backbutton",children:Object(O.jsx)(j.b,{className:"back",to:"/".concat(t.name),children:Object(O.jsx)("button",{className:"backb",children:"Back"})})}),Object(O.jsxs)("div",{className:"charName",children:[t.name,Object(O.jsx)("div",{className:"PorBox",children:Object(O.jsx)("img",{className:"Portrait",id:"imgs2".concat(t.name),src:"./4905images/".concat(t.name,".png"),alt:"No portrait"})})]}),Object(O.jsxs)("p",{children:["This page is where you will give this character a numerical rating based on their in-game performance.",Object(O.jsx)("br",{}),"You are free to rank them however you want, but it is encouraged that you use these criteria for your ratings:",Object(O.jsx)("br",{}),"1: Among the worst units in the game ",Object(O.jsx)("br",{}),"2: Mediocre ",Object(O.jsx)("br",{}),"3: Average ",Object(O.jsx)("br",{}),"4: Above Average ",Object(O.jsx)("br",{}),"5: Among the best units in the game ",Object(O.jsx)("br",{})]}),N]})},N=function(e){var t=e.history,c=n.a.useState("horse"),s=Object(i.a)(c,2),a=s[0],r=s[1],o=n.a.useState("horse"),l=Object(i.a)(o,2),u=l[0],h=l[1],b=n.a.useState(Object(O.jsxs)("p",{children:["Already have an account? ",Object(O.jsx)(j.b,{to:"login",children:"Login."})]})),d=Object(i.a)(b,2),x=d[0],m=d[1];return Object(O.jsxs)("div",{className:"LoginDiv",children:[Object(O.jsx)("div",{className:"FormDiv",children:Object(O.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();try{fetch("/users",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({usr:a,pwd:u})}).then((function(e){return e.text()})).then((function(e){console.log(e),"-1"===e?m(Object(O.jsxs)("p",{children:["A user with that name already exists.",Object(O.jsx)("br",{})," Please try a different name, or try logging in."]})):"0"===e&&t.push("/login")}))}catch(c){console.log(c.message)}},children:[Object(O.jsxs)("label",{children:["Username:",Object(O.jsx)("input",{value:a,onChange:function(e){r(e.target.value)}})]}),Object(O.jsxs)("label",{children:["Password:",Object(O.jsx)("input",{type:"password",value:u,onChange:function(e){h(e.target.value)}})]}),Object(O.jsx)("input",{type:"submit",value:"Submit"})]})}),x]})},y=function(e){var t=e.history,c=n.a.useState({}),s=Object(i.a)(c,2),a=s[0],r=s[1],o=n.a.useState("horse"),l=Object(i.a)(o,2),u=l[0],h=l[1],b=n.a.useState("horse"),d=Object(i.a)(b,2),m=d[0],g=d[1],v=n.a.useState(Object(O.jsxs)("p",{children:["Don't have an account? ",Object(O.jsx)(j.b,{to:"signup",children:"Create One Here."})]})),f=Object(i.a)(v,2),p=f[0],N=f[1],y=x("User","user-context"),C=Object(i.a)(y,2),S=(C[0],C[1]);n.a.useEffect((function(){fetch("/users").then((function(e){return e.json()})).then((function(e){r(e.source),console.log("hello there!",{data:e})}))}),[]);return Object(O.jsxs)("div",{className:"LoginDiv",children:[Object(O.jsx)("div",{className:"FormDiv",children:Object(O.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var c=a.userlist.indexOf(u);console.log("n: ",c),-1!==c&&a.users[c].password===m?(S(u),t.push("/")):N(Object(O.jsxs)("p",{children:["Those credentials are incorrect. ",Object(O.jsx)(j.b,{to:"/signup",children:"If you don't have an account, you can sign up."})]}))},children:[Object(O.jsxs)("label",{children:["Username:",Object(O.jsx)("input",{value:u,onChange:function(e){h(e.target.value)}})]}),Object(O.jsxs)("label",{children:["Password:",Object(O.jsx)("input",{type:"password",value:m,onChange:function(e){g(e.target.value)}})]}),Object(O.jsx)("input",{type:"submit",value:"Submit"})]})}),p]})};var C=function(e){console.log("hello from App!");var t=n.a.useState([]),c=Object(i.a)(t,2),s=c[0],a=c[1];return n.a.useEffect((function(){fetch("/chars").then((function(e){return e.json()})).then((function(e){a(e.source.characters),console.log("hello there!",{data:e})}))}),[]),console.log(s),Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(j.a,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(f,{chars:s})}}),s.map((function(e){return Object(O.jsx)(l.a,{exact:!0,path:"/"+e.name,render:function(t){return Object(O.jsx)(g,{character:e})}},e.name)})),s.map((function(e){return Object(O.jsx)(l.a,{exact:!0,path:"/vote/"+e.index,render:function(t){return Object(O.jsx)(p,{character:e})}},e.index)})),Object(O.jsx)(l.a,{exact:!0,path:"/signup",render:function(t){return Object(O.jsx)(N,Object(o.a)(Object(o.a)({},e),t))}}),Object(O.jsx)(l.a,{exact:!0,path:"/login",render:function(t){return Object(O.jsx)(y,Object(o.a)(Object(o.a)({},e),t))}})]})})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,56)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),S()}},[[50,1,2]]]);
//# sourceMappingURL=main.3a00698f.chunk.js.map