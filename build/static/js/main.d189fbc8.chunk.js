(this.webpackJsonpsolarsystem=this.webpackJsonpsolarsystem||[]).push([[0],[,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),i=a.n(r),n=a(4),c=a.n(n),s=(a(9),a(2)),o=(a(10),a(11),a(0));var l=function(e){var t=-1,a=0,i=Object(r.useRef)(null);function n(){if(i.current){var r=360/(86400*e.orbitalCycleDay);a+=r,i.current.style.transform=["translate(-50%, -50%)","rotate(".concat(a,"deg)")].join(" "),t=requestAnimationFrame(n)}}return Object(r.useEffect)((function(){if(e.origin)return t=requestAnimationFrame(n),console.log("Update"),function(){console.log("Cancle",t),cancelAnimationFrame(t)}}),[e]),Object(o.jsxs)("div",{className:"Planet",ref:i,style:{width:e.size+"rem"},children:[Object(o.jsx)("img",{src:e.img,style:{width:e.size+"rem",height:e.size+"rem"}}),e.children]})};var u=function(e){var t=-1,a=0,i=Object(r.useRef)(null);function n(){if(i.current){var r=360/(86400*e.orbitalCycleDay);i.current.style.transform=["translate(-50%, -50%)","rotate(".concat(a-=r,"deg)")].join(" "),t=requestAnimationFrame(n)}}Object(r.useEffect)((function(){return t=requestAnimationFrame(n),function(){console.log("Cancle",t),cancelAnimationFrame(t)}}),[e]);var c={width:e.radius+"rem",height:e.radius+"rem",transform:["translate(-50%, -50%)"].join(" ")};return Object(o.jsx)("div",{className:"Orbit",style:c,ref:i,children:Object(o.jsx)(l,{img:e.img,size:e.size,orbitalCycleDay:e.orbitalCycleDay,origin:e.origin,children:e.children})})};a(13);var d=function(){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){if(e.current)for(var t=e.current.getContext("2d"),a=0;a<500;a++){var r=Math.random()*e.current.offsetWidth,i=Math.random()*e.current.offsetHeight,n=1.1*Math.random();t.beginPath(),t.arc(r,i,n,0,360),t.fillStyle="rgba(223, 223, 223, 0.8)",t.fill()}}),[]),Object(o.jsx)("canvas",{className:"Starfield",width:document.body.offsetWidth,height:document.body.offsetHeight,style:{background:"#1a1d2c"},ref:e})};a(14);var f=function(e){var t=Object(r.useRef)(null),a=-1,i=0,n=360/(86400*e.orbitalCycleDay);function c(){t.current&&(t.current.style.transform=["translate(-50%, -50%)","rotate(".concat(i-=n,"deg)")].join(" ")),a=requestAnimationFrame(c)}function s(e){return e*parseFloat(getComputedStyle(document.documentElement).fontSize)}Object(r.useEffect)((function(){return a=requestAnimationFrame(c),function(){console.log("Cancle",a),cancelAnimationFrame(a)}}),[e.orbitalCycleDay]),Object(r.useEffect)((function(){if(t.current){console.log("Draw",t.current);var a=t.current.getContext("2d");a.fillStyle="white";for(var r=0;r<1e3;r++){var i=Math.random()*t.current.offsetWidth,n=Math.random()*t.current.offsetHeight,c=2*Math.random();a.beginPath(),a.arc(i,n,c,0,360),a.fillStyle="rgba(223, 223, 223, 0.5)",a.fill()}t.current.style.setProperty("--circle","".concat((s(e.radius)-s(e.size))/2,"px"))}}),[e.size]);var l={width:e.radius+"rem",height:e.radius+"rem",zIndex:5};return Object(o.jsx)("canvas",{className:"Asteroidbelt",ref:t,style:l,width:s(e.radius),height:s(e.radius)})},m=a.p+"static/media/Solar.a8b62947.svg",j=a.p+"static/media/MercuryShadow.140bd3c2.svg",b=a.p+"static/media/VenusShadow.ccc19caf.svg",h=a.p+"static/media/EarthShadow.d32d1818.svg",g=a.p+"static/media/MoonShadow.6188f2fa.svg",y=a.p+"static/media/MarsShadow.003c95ea.svg",O=a.p+"static/media/JupiterShadow.08a0f6c7.svg",v=a.p+"static/media/SaturnShadow.8e44fdb4.svg",x=a.p+"static/media/UranusShadow.c2a8405b.svg",p=a.p+"static/media/NeptuneShadow.e0e09804.svg";a(15);var S=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],i=t[1],n=performance.now();return Object(r.useEffect)((function e(){var t=(performance.now()-n)/1e3;n=performance.now(),i((1/t).toFixed(2)),requestAnimationFrame(e)}),[]),Object(o.jsx)("span",{className:"FPS",children:a})};var C=function(e){return Object(o.jsxs)("div",{className:"Config",children:[Object(o.jsx)("span",{children:"Config"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Time"})," ",Object(o.jsx)("input",{type:"number",defaultValue:e.SpaceTime,onChange:function(t){e.setSpaceTime(1|Number(t.target.value))}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Scale"})," ",Object(o.jsx)("input",{type:"number",defaultValue:e.Scale,onChange:function(t){e.setScale(Number(t.target.value))}})]}),Object(o.jsxs)("div",{style:{textAlign:"left"},children:[Object(o.jsx)("span",{children:"FPS: "})," ",Object(o.jsx)(S,{})]})]})};function w(e){var t={width:e.size+"rem",height:e.size+"rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",verticalAlign:"middle",textAlign:"center",margin:"auto",filter:"drop-shadow(0 0 20px #f3ad0d)"};return Object(o.jsxs)("div",{style:{width:"100%"},children:[Object(o.jsx)("img",{src:m,style:t,ref:e.refs}),e.children]})}var z=function(){var e=Object(r.useState)(1e4),t=Object(s.a)(e,2),a=t[0],i=t[1],n=Object(r.useState)(.6),c=Object(s.a)(n,2),l=c[0],m=c[1],S=Object(r.useRef)(null);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(C,{SpaceTime:a,setSpaceTime:i,Scale:l,setScale:m}),Object(o.jsx)(d,{}),Object(o.jsxs)(w,{size:4*l,refs:S,children:[Object(o.jsx)(u,{radius:8*l,size:.95*l,img:j,orbitalCycleDay:88/a}),Object(o.jsx)(u,{radius:15*l,size:.95*1.5*l,img:b,orbitalCycleDay:225/a}),Object(o.jsx)(u,{radius:23*l,size:1.52*l,img:h,orbitalCycleDay:365/a,children:Object(o.jsx)(u,{radius:5*l,size:.95*l,img:g,orbitalCycleDay:27/a,origin:!0})}),Object(o.jsx)(u,{radius:38*l,size:3.04*l,img:y,orbitalCycleDay:687/a}),Object(o.jsx)(f,{radius:55*l,size:10*l,orbitalCycleDay:4343.5/a}),Object(o.jsx)(u,{radius:60*l,size:4.75*l,img:O,orbitalCycleDay:4380/a}),Object(o.jsx)(u,{radius:70*l,size:.95*3*l,img:v,orbitalCycleDay:10585/a}),Object(o.jsx)(u,{radius:80*l,size:3.8*l,img:x,orbitalCycleDay:30660/a}),Object(o.jsx)(u,{radius:90*l,size:.95*3.5*l,img:p,orbitalCycleDay:60225/a})]})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,r=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),r(e),i(e),n(e),c(e)}))};c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(z,{})}),document.getElementById("root")),F()}],[[16,1,2]]]);
//# sourceMappingURL=main.d189fbc8.chunk.js.map