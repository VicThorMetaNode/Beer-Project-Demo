import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
 
    const tl = gsap.timeline();
  
    tl.to(position, {
        x: 0.48,
        y: -0.87,
        z: -9.95,
        // trigger then properties we want to change
     scrollTrigger: {
        trigger: '.join-section',
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false
     },
     onUpdate
    })
    .to(target, {
        x: -1.72,
        y: 4.11,
        z: -8.94,
        // trigger then properties we want to change
     scrollTrigger: {
        trigger: '.join-section',
        start: "top bottom",
        end: "top top",
        scrub: 4,
        immediateRender: false
     },
    
    })
    .to('.hero-section', {
      opacity:0,
     
       // trigger then properties we want to change
       scrollTrigger: {
       trigger: '.join-section',
       start: "top bottom",
       end: "top top",
       scrub: 2,
       immediateRender: false
    },
   
   })
   .to('.join-section-content', {
      opacity: 1,
      // trigger properties to change when scrolling
      scrollTrigger: {
        trigger: '.join-section',
        start: 'top bottom',
        end: 'top top',
        scrub: 2,
        immediateRender: false
      }
    })
   .to('.join-section-content', {
      opacity: 0,
      // trigger properties to change when scrolling
      scrollTrigger: {
        trigger: '.shop-section',
        start: 'top bottom',
        end: 'top top',
        scrub: 2,
        immediateRender: false
      }
    })
    .to('.shop-section', {
      opacity: 1,
      // trigger properties to change when scrolling
      scrollTrigger: {
        trigger: '.shop-section',
        start: 'top bottom',
        end: 'top top',
        scrub: 2,
        immediateRender: false
      }
    })
  
}
