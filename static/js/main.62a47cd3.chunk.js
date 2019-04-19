(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(25)},22:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(6),s=t.n(i),r=(t(21),t(22),t(3)),c=t.n(r),o=t(7),m=t(1),d=t(8),u=t(9),h=t(13),p=t(10),y=t(14),f=t(4),b=t(12),v=function(e){var a=e.className,t=void 0===a?"":a,n=e.width;return l.a.createElement("div",{className:"skeleton-line ".concat(t),style:{width:n}})},E=function(e){var a=e.entries,t=void 0===a?25:a;return l.a.createElement("div",null,l.a.createElement("div",{className:"mb2 flex items-center justify-between"},l.a.createElement(v,{width:70}),l.a.createElement(v,{className:"h2",width:100})),Object(b.a)(Array(t)).map(function(e,a){return l.a.createElement("div",{key:a,className:"mb3 pl2 py2 result"},l.a.createElement("div",{className:"mb2"},l.a.createElement(v,{className:"mb1 h3",width:"60%"}),l.a.createElement(v,{className:"mb1 h3",width:"80%"})),l.a.createElement(v,{className:"h5",width:"30%"}))}))},N=t(11),g=t(2),j=function(e){return Object.entries(e).filter(function(e){var a=Object(g.a)(e,2);a[0];return""!==a[1]}).map(function(e){var a=Object(g.a)(e,2),t=a[0],n=a[1];return"".concat(t,"=").concat(encodeURIComponent(n))}).join("&")},k="https://late-night-jokes-api.herokuapp.com/",w=[{id:"",display:"All hosts"},{id:"Conan",display:"Conan O'Brien"},{id:"Ferguson",display:"Craig Ferguson"},{id:"Letterman",display:"David Letterman"},{id:"Corden",display:"James Corden"},{id:"Leno",display:"Jay Leno"},{id:"Fallon",display:"Jimmy Fallon"},{id:"Kimmel",display:"Jimmy Kimmel"},{id:"Meyers",display:"Seth Meyers"},{id:"Colbert",display:"Stephen Colbert"}],x=[{id:"",display:"All years"},{id:"2009",display:"2009"},{id:"2010",display:"2010"},{id:"2011",display:"2011"},{id:"2012",display:"2012"},{id:"2013",display:"2013"},{id:"2014",display:"2014"},{id:"2015",display:"2015"},{id:"2016",display:"2016"},{id:"2017",display:"2017"},{id:"2018",display:"2018"}],C=[{id:"",display:"New to old"},{id:"date",display:"Old to new"},{id:"host",display:"Host (A to Z)"}],O={host:w,year:x,order:C},S=w.slice(1).reduce(function(e,a){return Object(N.a)({},e,Object(m.a)({},a.id,a.display))},{}),J=function(e,a){var t=O[e];return t&&t.find(function(e){return e.id===a})?a:t[0].id},L=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).handleQueryChange=function(e){var a=e.target.value;t.setState({query:a},t.updateUrl)},t.handleSelectChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(m.a)({},n,l),function(){t.updateUrl(),t.fetchJokes()})},t.handleSubmit=function(e){e.preventDefault(),t.fetchJokes()},t.fetchJokes=Object(o.a)(c.a.mark(function e(){var a,n,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.state.query){e.next=2;break}return e.abrupt("return");case 2:return t.setState({jokes:[],isLoading:!0}),a=j(t.getParams()),e.next=6,fetch("".concat(k,"?").concat(a));case 6:return n=e.sent,e.next=9,n.json();case 9:l=e.sent,t.setState({jokes:l.results,isLoading:!1});case 11:case"end":return e.stop()}},e)})),t.updateUrl=function(){window.location.hash=j(t.getParams())},t.getParams=function(){var e=t.state;return{query:e.query,host:e.host,year:e.year,order:e.order}},t.state={jokes:null,isLoading:!1,query:e.initialQuery,host:e.initialHost,year:e.initialYear,order:e.initialOrder},t}return Object(y.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.updateUrl(),this.fetchJokes()}},{key:"render",value:function(){var e,a=this.state,t=a.host,n=a.jokes,i=a.order,s=a.query,r=a.year,c=a.isLoading;return l.a.createElement("div",{className:"container mx-auto p2"},l.a.createElement("div",{className:"mb2 flex items-center"},l.a.createElement("div",{className:"flex-auto"},l.a.createElement("h1",{className:"m0 h2 sm-h1"},"Late Night Joke Library"),l.a.createElement("p",{className:"m0 h4 sm-h3"},"Explore 10+ years of monologue jokes")),l.a.createElement("div",{className:"right-align xs-hide"},l.a.createElement("div",{className:"line-height-1"},l.a.createElement(f.b,{className:"ml1"}),l.a.createElement(f.a,{className:"ml1"})),l.a.createElement("div",{className:"h6"},l.a.createElement("span",{className:"underline"},"About")," /"," ",l.a.createElement("span",{className:"underline"},"Send feedback")))),l.a.createElement("form",{className:"mb2 p2 sm-p3 bg-light rounded sm-flex justify-between",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"flex sm-col-6 mb2 sm-m0"},l.a.createElement("input",{className:"input m0 rounded-left",type:"search",name:"query",placeholder:"Search...",value:s,onChange:this.handleQueryChange,required:!0}),l.a.createElement("button",{className:"btn btn-primary rounded-right",type:"submit",disabled:c},"Go")),l.a.createElement("div",{className:"flex sm-col-5 mxn1 h5"},l.a.createElement("select",{className:"select mx1 my0 col-7",name:"host",value:t,onChange:this.handleSelectChange},w.map(function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.display)})),l.a.createElement("select",{className:"select mx1 my0 col-5",name:"year",value:r,onChange:this.handleSelectChange},x.map(function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.display)})))),null!=n&&(0===n.length?c?l.a.createElement(E,null):l.a.createElement("p",null,"No jokes :("):l.a.createElement("div",null,l.a.createElement("div",{className:"mb2 flex items-center justify-between"},l.a.createElement("h5",{className:"m0"},(e=n.length,"".concat(e).concat(500===e?"+":""," result").concat(1!==e?"s":""))),l.a.createElement("div",{className:"flex items-center justify-center"},l.a.createElement("h5",{className:"m0 pr1 flex-none"},"Sort by:"),l.a.createElement("select",{className:"m0 select select-skinny h5",name:"order",value:i,onChange:this.handleSelectChange},C.map(function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.display)})))),n.map(function(e){return l.a.createElement("div",{key:e.id,className:"mb3 pl2 py2 result"},l.a.createElement("div",{className:"mb2"},e.text),l.a.createElement("div",{className:"h5"},S[e.host]||e.host,l.a.createElement("span",{className:"px1"},"/"),e.date))}))))}}]),a}(n.Component),q=window.location.hash.slice(1).split("&").filter(function(e){return e.length}).reduce(function(e,a){var t=a.split("="),n=Object(g.a)(t,2),l=n[0],i=n[1],s=void 0===i?null:decodeURIComponent(i);return Object.assign(e,Object(m.a)({},l,s))},{}),U=q.query,A=q.host,F=q.year,Q=q.order;s.a.render(l.a.createElement(L,{initialQuery:U||"",initialHost:J("host",A),initialYear:J("year",F),initialOrder:J("order",Q)}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.62a47cd3.chunk.js.map