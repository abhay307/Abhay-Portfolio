var timeline =  gsap.timeline();
timeline.from("header #name h1",{
	x:-200,
	duration:1,
},"same")
timeline.from("header #logo img",{
	rotate:360,
	opacity:0,
	duration:1,
},"same")
timeline.from("header #social-media i",{
	x:300,
	opacity:0,
	duration:1,
	stagger:0.2
},"same")

timeline.from("main h1 span",{
	x:-200,
	scale:0,
	opacity:0,
	duration:1,
	stagger:0.1,
	ease:"elastic",
	
},"same")
/*timeline.from("main #photo",{
	delay:1.5,
	scale:0,
	opacity:0,
	duration:2,
	stagger:0.1,
	ease:"bounce",
	
},"same")*/



window.addEventListener("wheel",function(dets){
    if (dets.deltaY>0){
        gsap.to(".marque",{
            transform:"translateX(-300%)",
            duration:4,
            repeat: -1,
            ease:"none"
        })
    }else{
        gsap.to(".marque",{
            transform:"translateX(0%)",
            duration:4,
            repeat: -1,
            ease:"none"
        })
    }
})

gsap.from("#page3 h1",{
	scale:0,
	duration:0.5,
	opacity:0,
	scrollTrigger:{
		trigger:"#page3",
		scroller:"body",
		start:"top 100%;",
		
		
	}
})
gsap.from("#page4 h1",{
	x:-200,
	duration:0.5,
	opacity:0,
	scrollTrigger:{
		trigger:"#page4",
		scroller:"body",
		start:"top 100%;",
		/*markers:true*/
		
	}
})
gsap.from("#page4 h4",{
	x:200,
	duration:0.5,
	opacity:0,
	scrollTrigger:{
		trigger:"#page4",
		scroller:"body",
		start:"top 100%;",
		/*markers:true*/
		
	}
})
gsap.from("#page4 #skills-logo img",{
	x:400,
	scale:0,
	duration:0.5,
	opacity:0,
	stagger:0.3,
	scrollTrigger:{
		trigger:"#page4",
		scroller:"body",
		start:"top 90%;",
		/*markers:true*/
		
	}
})
gsap.from("#contact h1",{
	scale:0,
	duration:0.5,
	scrollTrigger:{
		trigger:"#contact",
		scroller:"body",
		start:"top 80%;",
		
	}
})
gsap.from("#contact p",{
	x:-400,
	duration:2,
	opacity:0,
	stagger:0.3,
	ease:"elastic",
	scrollTrigger:{
		trigger:"#contact",
		scroller:"body",
		start:"top 5%;",
		
		
	}
})
