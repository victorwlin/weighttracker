(this.webpackJsonpweighttracker=this.webpackJsonpweighttracker||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),l=a(8),o=a(1),s=a(2),u=a(3),m=a(5),h=a(4),b=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={entry:{date:"",weight:""}},e.componentDidMount=function(){var t=(new Date).toISOString().substring(0,10);e.setState({entry:Object(o.a)({},e.state.entry,{date:t})})},e.onDateChange=function(t){e.setState({entry:Object(o.a)({},e.state.entry,{date:t.target.value})})},e.onWeightChange=function(t){e.setState({entry:Object(o.a)({},e.state.entry,{weight:t.target.value})})},e.onFormSubmit=function(t){t.preventDefault(),e.state.entry.date?(e.props.onSubmit(Object(o.a)({},e.state.entry)),e.setState({entry:{date:"",weight:""}})):window.alert("Please enter a date")},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui form"},r.a.createElement("div",{className:"fields"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"field"},r.a.createElement("label",null,"Date"),r.a.createElement("input",{type:"date",value:this.state.entry.date,onChange:this.onDateChange})),r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"field"},r.a.createElement("label",null,"Weight"),r.a.createElement("input",{type:"number",step:"0.01",value:this.state.entry.weight,onChange:this.onWeightChange}))),r.a.createElement("div",{onClick:this.onFormSubmit,className:"ui submit button"},"Submit"))}}]),a}(r.a.Component),d=function(e){return e.entries.sort((function(e,t){var a=0;return e.date>t.date?a=1:e.date<t.date&&(a=-1),a})),r.a.createElement("table",{className:"ui celled table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{backgroundColor:"#118ab2",color:"white"}},"Date"),r.a.createElement("th",{style:{backgroundColor:"#118ab2",color:"white"}},"Weight"))),r.a.createElement("tbody",null,e.entries.map((function(e){return r.a.createElement("tr",{key:e.date},r.a.createElement("td",{"data-label":"Date"},e.date),r.a.createElement("td",{"data-label":"Weight"},(Math.round(100*e.weight)/100).toFixed(2)))}))))},g=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={entries:[]},e.onEntrySubmit=function(t){for(var a=0,n=0;n<e.state.entries.length;n++)t.date===e.state.entries[n].date&&a++;a?e.setState((function(e){return{entries:e.entries.map((function(e){return e.date===t.date?Object(o.a)({},e,{weight:t.weight}):e}))}})):e.setState((function(e){return{entries:[].concat(Object(l.a)(e.entries),[t])}}))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement("h1",null,"Weight Tracker"),r.a.createElement(b,{onSubmit:this.onEntrySubmit}),r.a.createElement(d,{entries:this.state.entries}))}}]),a}(r.a.Component);c.a.render(r.a.createElement(g,null),document.querySelector("#root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.daeab4a0.chunk.js.map