var crsr = document.querySelector("#cursor")
var blurCrsr = document.querySelector("#blur-crsr")
var p4h1= document.querySelector("#page4 h1")
var elem=document.querySelectorAll(".elem")

document.addEventListener("mousemove",(dets)=>{
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blurCrsr.style.left=dets.x-175+"px"
    blurCrsr.style.top=dets.y-175+"px"
})
var navHover =document.querySelectorAll("#nav-bar h4")
navHover.forEach((elem)=>{
       elem.addEventListener("mouseenter",()=>{
        crsr.style.scale=3
        crsr.style.backgroundColor="transparent"
        crsr.style.border="1px solid #95c11e"
       })
       elem.addEventListener("mouseleave",()=>{
        crsr.style.scale=1
        crsr.style.backgroundColor="#95c11e"
       })
})
elem.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
    p4h1.style.webkitTextStroke = "1px #95c11e";
    })
    elem.addEventListener("mouseleave",()=>{
    p4h1.style.webkitTextStroke = "1px white";
    })
})
gsap.to("#nav-bar",{
    backgroundColor:"#000",
    duration:1,
    height:"100px",
    scrollTrigger:{
         trigger:"#nav-bar",
         scroller:"body",
         start:"top-15%",
         end:"top -17%",
         scrub:true

    }

})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scoller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:1
    }
})
gsap.from("#about-us h3,#about-section" ,{
         y:50,
         opacity:.3,
         duration:1,
         scrollTrigger:{
            trigger:"#about-us",
            scroller:"body",
            start:"top 30%",
            end:"top 31%",
            scrub:1
         }
})
gsap.from("#img1",{
    y:-90,
    x:-40,
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
        start:"top 70%",
        scrub:2
    }
})
gsap.from("#img2",{
    y:90,
    x:40,
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
        start:"top 80%",
        end:"90%",
        scrub:2
    }
})

gsap.from("#page3 p", {
  scale: 0.5,     // start from half size
  duration: 1,
  scrollTrigger:{
   trigger:"#page3 p",
   scroller:"body",
   start:"top 80%",
   end:"top 70%",
   scrub:2
  }
});
gsap.from("#page4 h1",{
    y:-30,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:3,
    }
});
