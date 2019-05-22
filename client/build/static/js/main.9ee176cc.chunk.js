(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.9d56970a.svg"},28:function(e,t,a){e.exports=a(57)},34:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),c=a.n(s),l=(a(34),a(60)),o=a(2),i=a(3),u=a(6),h=a(4),m=a(5),p=a(59),d=a(15),g=a(61),f=a(26),E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("h2",null,"Home"),r.a.createElement("p",null,"This is a sample project with the MERN stack"))}}]),t}(n.Component),b=a(23),v=a.n(b).a.create({baseURL:"/api",withCredentials:!0}),C=function(e){if(console.error(e),e.response&&e.response.data)throw console.error("API response",e.response.data),e.response.data.message;throw e},O=function(){return null!=localStorage.getItem("user")},j=function(e){return v.post("/signup",e).then(function(e){return localStorage.setItem("user",JSON.stringify(e.data)),e.data}).catch(C)},y=function(e,t){return v.post("/login",{username:e,password:t}).then(function(e){return localStorage.setItem("user",JSON.stringify(e.data)),e.data}).catch(C)},S=function(){return localStorage.removeItem("user"),v.get("/logout")},k=function(){return v.get("/countries").then(function(e){return e.data}).catch(C)},w=function(e){return v.post("/countries",e).then(function(e){return e.data}).catch(C)},I=function(){return v.get("/secret").then(function(e){return e.data}).catch(C)},N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={countries:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Countries"},r.a.createElement("h2",null,"List of countries"),this.state.countries.map(function(e){return r.a.createElement("li",{key:e._id},e.name)}))}},{key:"componentDidMount",value:function(){var e=this;k().then(function(t){console.log(t),e.setState({countries:t})}).catch(function(e){return console.log(e)})}}]),t}(n.Component),x=a(11),A=a(9),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={name:"",capitals:"",area:"",description:"",message:null},a.handleInputChange=a.handleInputChange.bind(Object(A.a)(Object(A.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleInputChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"handleClick",value:function(e){var t=this;e.preventDefault(),console.log(this.state.name,this.state.description);var a={name:this.state.name,capitals:this.state.capitals,area:this.state.area,description:this.state.description};w(a).then(function(e){console.log("SUCCESS!"),t.setState({name:"",capitals:"",area:"",description:"",message:"Your country '".concat(t.state.name,"' has been created")}),setTimeout(function(){t.setState({message:null})},2e3)}).catch(function(e){return t.setState({message:e.toString()})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"AddCountry"},r.a.createElement("h2",null,"Add country"),r.a.createElement("form",null,"Name: ",r.a.createElement("input",{type:"text",value:this.state.name,name:"name",onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Capitals: ",r.a.createElement("input",{type:"text",value:this.state.capitals,name:"capitals",onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Area: ",r.a.createElement("input",{type:"number",value:this.state.area,name:"area",onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Description: ",r.a.createElement("textarea",{value:this.state.description,name:"description",cols:"30",rows:"10",onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.handleClick(t)}},"Create country")),this.state.message&&r.a.createElement("div",{className:"info"},this.state.message))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={secret:null,message:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Secret"},r.a.createElement("h2",null,"Secret"),r.a.createElement("div",{className:"result"},this.state.secret),this.state.message&&r.a.createElement("div",{className:"info info-danger"},this.state.message))}},{key:"componentDidMount",value:function(){var e=this;I().then(function(t){return e.setState({secret:t.secret})}).catch(function(t){return e.setState({message:t.toString()})})}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={username:"",password:"",message:null},a.handleInputChange=a.handleInputChange.bind(Object(A.a)(Object(A.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleInputChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"handleClick",value:function(e){var t=this;e.preventDefault(),y(this.state.username,this.state.password).then(function(e){console.log("SUCCESS!"),t.props.history.push("/")}).catch(function(e){return t.setState({message:e.toString()})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Login"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",null,"Username: ",r.a.createElement("input",{type:"text",value:this.state.username,name:"username",onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Password: ",r.a.createElement("input",{type:"password",value:this.state.password,name:"password",onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.handleClick(t)}},"Login")),this.state.message&&r.a.createElement("div",{className:"info info-danger"},this.state.message))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={username:"",name:"",password:"",message:null},a.handleInputChange=a.handleInputChange.bind(Object(A.a)(Object(A.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleInputChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"handleClick",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,name:this.state.name,password:this.state.password};j(a).then(function(e){console.log("SUCCESS!"),t.props.history.push("/")}).catch(function(e){return t.setState({message:e.toString()})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Signup"},r.a.createElement("h2",null,"Signup"),r.a.createElement("form",null,"Username: ",r.a.createElement("input",{type:"text",value:this.state.username,name:"username",onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Name: ",r.a.createElement("input",{type:"text",value:this.state.name,name:"name",onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Password: ",r.a.createElement("input",{type:"password",value:this.state.password,name:"password",onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.handleClick(t)}},"Signup")),this.state.message&&r.a.createElement("div",{className:"info info-danger"},this.state.message))}}]),t}(n.Component),M=a(24),H=a.n(M),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={countries:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleLogoutClick",value:function(e){S()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:H.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"MERN Boilerplate"),r.a.createElement(p.a,{to:"/",exact:!0},"Home"),r.a.createElement(p.a,{to:"/countries"},"Countries"),r.a.createElement(p.a,{to:"/add-country"},"Add country"),!O()&&r.a.createElement(p.a,{to:"/signup"},"Signup"),!O()&&r.a.createElement(p.a,{to:"/login"},"Login"),O()&&r.a.createElement(d.a,{to:"/",onClick:function(t){return e.handleLogoutClick(t)}},"Logout"),r.a.createElement(p.a,{to:"/secret"},"Secret")),r.a.createElement(g.a,null,r.a.createElement(f.a,{path:"/",exact:!0,component:E}),r.a.createElement(f.a,{path:"/countries",component:N}),r.a.createElement(f.a,{path:"/add-country",component:L}),r.a.createElement(f.a,{path:"/signup",component:J}),r.a.createElement(f.a,{path:"/login",component:U}),r.a.createElement(f.a,{path:"/secret",component:D}),r.a.createElement(f.a,{render:function(){return r.a.createElement("h2",null,"404")}})))}}]),t}(n.Component);c.a.render(r.a.createElement(l.a,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.9ee176cc.chunk.js.map