(this["webpackJsonptool-tip"]=this["webpackJsonptool-tip"]||[]).push([[0],{12:function(t,e,o){"use strict";o.r(e);var n=o(0),i=o.n(n),l=o(6),a=o.n(l),r=o(1),p=o(2),s=o(4),c=o(3),u=function(t){Object(s.a)(o,t);var e=Object(c.a)(o);function o(){return Object(r.a)(this,o),e.apply(this,arguments)}return Object(p.a)(o,[{key:"componentDidUpdate",value:function(){var t=this.props.position,e=document.getElementById("tooltip-conatiner");console.log("posi update: ",t),"top"===t?(e.style.top="-40px",e.style.left="-50px"):"bottom"===t?(e.style.top="55px",e.style.left="-50px"):"right"===t?(e.style.top="10px",e.style.left="105px"):"left"===t&&(e.style.top="10px",e.style.left="-230px")}},{key:"componentDidMount",value:function(){var t=document.getElementById("tooltip-conatiner");t.style.top="-40px",t.style.left="-50px",t.style.display="none";var e=document.getElementById("show-tip");e.onmouseover=function(){t.style.display="block"},e.onmouseout=function(){t.style.display="none"}}},{key:"render",value:function(){var t={button:{height:"50px",width:"100px",backgroundColor:"grey",color:"white",fontSize:"1.5rem"},buttonDiv:{position:"relative",margin:"20px 0 0 50px",height:"270px",width:"600px",paddingleft:"200px",border:"solid 1px black",display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"lightgrey"},tooltip:{position:"absolute",width:"210px",height:"20px",textAlign:"center",backgroundColor:"white",padding:"5px",border:"1px solid black"},tooltipOuter:{position:"relative"}},e=this.props.position;return i.a.createElement("div",{style:t.buttonDiv,className:"TooltipButton "},i.a.createElement("div",{style:t.tooltipOuter,id:"tooltip-outer"},i.a.createElement("button",{style:t.button,id:"show-tip"},"Tooltip"),i.a.createElement("div",{style:t.tooltip,id:"tooltip-conatiner"},"this is a tooltip shown at ",e)))}}]),o}(i.a.Component),d=function(t){Object(s.a)(o,t);var e=Object(c.a)(o);function o(){return Object(r.a)(this,o),e.apply(this,arguments)}return Object(p.a)(o,[{key:"componentDidMount",value:function(){document.getElementById("top").style.backgroundColor="red"}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"PositionSelector "},i.a.createElement("h3",null,"Hello, this is demo for use of react-tooltip"),i.a.createElement("div",null,i.a.createElement("p",null,"Select the postion u want tooltip to be shown"),i.a.createElement("div",{style:m.positionBlock,onClick:function(){return t.props.posFunc("top")},id:"top",className:"postionblock"},"Top"),i.a.createElement("div",{style:m.positionBlock,onClick:function(){return t.props.posFunc("right")},id:"right",className:"postionblock"},"Right"),i.a.createElement("div",{style:m.positionBlock,onClick:function(){return t.props.posFunc("bottom")},id:"bottom",className:"postionblock"},"Bottom"),i.a.createElement("div",{style:m.positionBlock,onClick:function(){return t.props.posFunc("left")},id:"left",className:"postionblock"},"Left")))}}]),o}(i.a.Component),m={positionBlock:{marginLeft:"80px",paddingLeft:"40px",paddingTop:"15px",color:"white",backgroundColor:"maroon",height:"30px",width:"80px",border:"solid 1px black",boxShadow:"inset 0 0 5px 5px maroon"}},y=d,h=function(t){Object(s.a)(o,t);var e=Object(c.a)(o);function o(){var t;return Object(r.a)(this,o),(t=e.call(this)).changePos=function(e){t.setState({pos:e}),document.querySelectorAll(".postionblock").forEach((function(t){t.style.backgroundColor="maroon"})),document.getElementById(e).style.backgroundColor="red",console.log(t.state)},t.state={pos:"top"},t}return Object(p.a)(o,[{key:"render",value:function(){return i.a.createElement("div",{style:b.main,className:"main"},i.a.createElement(y,{posFunc:this.changePos}),i.a.createElement(u,{position:this.state.pos}))}}]),o}(i.a.Component),b={main:{margin:"20px 0 0 20px",display:"flex"}},f=h;var g=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null))};a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(g,null)),document.getElementById("root"))},7:function(t,e,o){t.exports=o(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.0efd4db0.chunk.js.map