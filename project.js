const mediaQuery=window.matchMedia("(max-width: 768px)");mediaQuery.matches&&(speed1=.5);const cursor=document.querySelector("#cursor"),cursorCircle=cursor.querySelector(".cursor__circle"),mouse={x:-100,y:-100},pos={x:0,y:0},speed=.1,updateCoordinates=e=>{mouse.x=e.clientX,mouse.y=e.clientY};function getAngle(e,t){return 180*Math.atan2(t,e)/Math.PI}function getSqueeze(e,t){const o=Math.sqrt(Math.pow(e,2)+Math.pow(t,2));return Math.min(o/1500,.6)}window.addEventListener("mousemove",updateCoordinates);const updateCursor=()=>{const e=Math.round(mouse.x-pos.x),t=Math.round(mouse.y-pos.y);pos.x+=.1*e,pos.y+=.1*t;const o=getAngle(e,t),r=getSqueeze(e,t),a="scale("+(1+r)+", "+(1-r)+")",c="rotate("+o+"deg)",n="translate3d("+pos.x+"px ,"+pos.y+"px, 0)";cursor.style.transform=n,cursorCircle.style.transform=c+a};function loop(){updateCursor(),requestAnimationFrame(loop)}function preload(){document.body.style.opacity=1}requestAnimationFrame(loop),window.addEventListener("load",preload);let filter=document.querySelector(".turbulence");document.querySelector(".jack").addEventListener("mouseover",function(){gsap.to(filter,.3,{attr:{scale:"0"}}),gsap.to(".img",.01,{attr:{src:"https://res.cloudinary.com/dznkentev/image/upload/v1620882139/Final%20Portfolio/Jackem_yjkko4.jpg"}}),gsap.to(".img",.2,{opacity:1}),gsap.to(cursor,.2,{opacity:0})}),document.querySelector(".jack").addEventListener("mouseout",function(){gsap.to(filter,.3,{attr:{scale:"120"}}),gsap.to(".img",.2,{opacity:0}),gsap.to(cursor,.2,{opacity:1})});let measure=document.querySelector(".child1").offsetHeight;document.querySelector(".rec_tor").addEventListener("mouseover",function(){gsap.to(filter,.3,{attr:{scale:"0"}}),gsap.to(".img",.01,{attr:{src:"https://res.cloudinary.com/dznkentev/image/upload/v1620882306/Final%20Portfolio/Rector_acxlxw.jpg"}}),gsap.to(".img",.2,{opacity:1}),gsap.to(cursor,.2,{opacity:0}),g}),document.querySelector(".rec_tor").addEventListener("mouseout",function(){gsap.to(filter,.3,{attr:{scale:"120"}}),gsap.to(".img",.2,{opacity:0}),gsap.to(cursor,.2,{opacity:1})});let image=document.querySelector(".img");function lerp(e){gsap.to(image,.5,{top:e.clientY,left:e.clientX})}window.addEventListener("mousemove",lerp),document.querySelector(".rec_tor").addEventListener("click",function(){gsap.to("body",{opacity:0,yoyo:!0,repeat:1,repeatDelay:2}),gsap.to(".overlay",.1,{width:"100%",delay:1.5}),gsap.to(".overlay > *",.1,{opacity:1,pointerEvents:"all",delay:1.5})}),document.querySelector(".jack").addEventListener("click",function(){gsap.to("body",{opacity:0,yoyo:!0,repeat:1,repeatDelay:2}),gsap.to(".overlay2",.1,{width:"100%",delay:1.5}),gsap.to(".overlay2 > *",.1,{opacity:1,pointerEvents:"all",delay:1.5})});let check=document.querySelector(".link");check.addEventListener("click",function(){window.open("https://kshitij98k.github.io/Imagine-Cup-Round-2/","_blank")});let microsoft=document.querySelector(".microsoft");microsoft.addEventListener("click",function(){window.open("https://imaginecup.microsoft.com/en-us/Events","_blank")});let jackemm=document.querySelector(".link2");jackemm.addEventListener("click",function(){window.open("https://kshitij98k.github.io/Jackem_Final/","_blank")});