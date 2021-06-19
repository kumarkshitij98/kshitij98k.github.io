const body=document.body,scrollWrap=document.getElementsByClassName("main_wrap")[0],height=scrollWrap.getBoundingClientRect().height-1;let speed1=.08,offset=0;function smoothScroll(){let e="translateY(-"+(offset+=(window.pageYOffset-offset)*speed1)+"px) translateZ(0)";scrollWrap.style.transform=e,callScroll=requestAnimationFrame(smoothScroll)}body.style.height=Math.floor(height)+"px",smoothScroll();const mediaQuery=window.matchMedia("(max-width: 768px)");mediaQuery.matches&&(speed1=.5);const cursor=document.querySelector("#cursor"),cursorCircle=cursor.querySelector(".cursor__circle"),mouse={x:-100,y:-100},pos={x:0,y:0},speed=.1,updateCoordinates=e=>{mouse.x=e.clientX,mouse.y=e.clientY};function getAngle(e,t){return 180*Math.atan2(t,e)/Math.PI}function getSqueeze(e,t){const o=Math.sqrt(Math.pow(e,2)+Math.pow(t,2));return Math.min(o/1500,.6)}window.addEventListener("mousemove",updateCoordinates);const updateCursor=()=>{const e=Math.round(mouse.x-pos.x),t=Math.round(mouse.y-pos.y);pos.x+=.1*e,pos.y+=.1*t;const o=getAngle(e,t),r=getSqueeze(e,t),n="scale("+(1+r)+", "+(1-r)+")",s="rotate("+o+"deg)",c="translate3d("+pos.x+"px ,"+pos.y+"px, 0)";cursor.style.transform=c,cursorCircle.style.transform=s+n};function loop(){updateCursor(),requestAnimationFrame(loop)}requestAnimationFrame(loop);let filter=document.querySelector(".turbulence"),currPixel=window.pageYOffset;function anime(){const e=window.pageYOffset,t=.2*(e-currPixel);gsap.to(filter,1.5,{attr:{scale:""+8*t},ease:"power4.out"}),currPixel=e,requestAnimationFrame(anime)}function work(){document.body.scrollTop>600||document.documentElement.scrollTop>600?(gsap.to(".about",.5,{opacity:1}),gsap.to(".year",.5,{opacity:1}),gsap.to(".dribble",.5,{opacity:1}),gsap.to(".contact",.5,{opacity:1})):(gsap.to(".about",.5,{opacity:0}),gsap.to(".year",.5,{opacity:0}),gsap.to(".dribble",.5,{opacity:0}),gsap.to(".contact",.5,{opacity:0}))}anime(),window.addEventListener("scroll",work);let projects=document.querySelector(".head2");function hoverIn(){cursorCircle.style.width="16vw",cursorCircle.style.height="16vw",gsap.to(".arrow",.5,{color:"rgb(255, 255, 255)",border:"0.12vw solid rgb(255, 255, 255)"})}function hoverOut(){cursorCircle.style.width="4vw",cursorCircle.style.height="4vw",gsap.to(".arrow",.5,{color:"rgb(0, 0, 0)",border:"0.12vw solid rgb(0 ,0 ,0)"})}projects.addEventListener("mouseover",hoverIn),projects.addEventListener("mouseout",hoverOut);let designs=document.querySelector(".head3");function hoverIn2(){cursorCircle.style.width="16vw",cursorCircle.style.height="16vw",gsap.to(".arrow",.5,{color:"rgb(255, 255, 255)",border:"0.12vw solid rgb(255, 255, 255)"})}function hoverOut2(){cursorCircle.style.width="4vw",cursorCircle.style.height="4vw",gsap.to(".arrow",.5,{color:"rgb(0, 0, 0)",border:"0.12vw solid rgb(0 ,0 ,0)"})}designs.addEventListener("mouseover",hoverIn2),designs.addEventListener("mouseout",hoverOut2);let bar=document.querySelector(".progressBar"),totalHeight=document.body.scrollHeight-window.innerHeight;window.onscroll=function(){let e=window.pageYOffset/totalHeight*100;gsap.to(bar,1,{height:e+"vh",ease:"power4.out"})};let berisha=document.querySelector(".berisha");function href(){window.open("https://dribbble.com/RronBerisha","_blank")}berisha.addEventListener("click",href);let contact=document.querySelector(".contact");function href2(){let e=document.querySelector("#contact").offsetTop;window.scrollTo(0,e)}contact.addEventListener("click",href2);let about=document.querySelector(".about");function href3(){let e=document.querySelector("#about").offsetTop;window.scrollTo(0,e)}about.addEventListener("click",href3);let head2=document.querySelector(".head2");function overlays(){gsap.to(".overlay2",1.5,{width:"100%",ease:"power4.inOut"}),gsap.to(".overlay1",1.5,{width:"100%",ease:"power4.inOut",delay:.4})}function redirect_Page(){var e=setTimeout(function(){window.location.href="projects.html",window.clearTimeout(e)},2e3)}head2.addEventListener("click",overlays),head2.addEventListener("click",redirect_Page);let head3=document.querySelector(".head3");function overlays2(){gsap.to(".overlay2",1.5,{width:"100%",ease:"power4.inOut"}),gsap.to(".overlay1",1.5,{width:"100%",ease:"power4.inOut",delay:.4})}function redirect_Page2(){var e=setTimeout(function(){window.location.href="designs.html",window.clearTimeout(e)},2e3)}function preload(){document.body.style.opacity=1}head3.addEventListener("click",overlays2),head3.addEventListener("click",redirect_Page2),window.addEventListener("load",preload);let ksh=document.querySelector(".dribble");function kshitij(){window.open("https://dribbble.com/kshitij98k","_blank")}ksh.addEventListener("click",kshitij);