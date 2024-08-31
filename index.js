// PAGE 1

// HEADER ANIMATION 
gsap.from('header h1 span:nth-child(1)' , {
  y: -200,
  opacity : 0,
  duration : 1.5
})

gsap.from('header h1 span:nth-child(2)' , {
  y: 50,
  opacity : 0,
  duration : 1.5
})

gsap.from('#scroll-down' , {
  scale : 0,
  duration : 1.5,
  opacity  : 0
})

// PROJECT HEADING 
gsap.to('.animated-heading h1' , {
  transform : "translateX(-200%)",
  scrollTrigger : {
    trigger : ".animated-heading",
    start : 'top 0%',
    end : 'top -100%',
    scrub : 2,
    pin : true
  }
})

gsap.to('.experience-heading h1' , {
  transform : "translateX(-200%)",
  scrollTrigger : {
    trigger : ".experience-heading",
    start : "top 0%",
    end : 'top -100%',
    scrub : 2,
    pin : true
  }
})


// PROJECT IMAGES ANIMATION 
gsap.fromTo('.project-image:nth-child(1) img' ,
  {
    zIndex : -1,
    opacity : 0,
    y : 100,
  }, 
  {
    y :0,
    opacity : 1,
    zIndex : 1,
    duration : 2,
    scrollTrigger :  {
      trigger : ".page2",
      markers:true,
      start : 'top 0%',
      end : 'top -100%'
    }
  }
)


