console.log('hello')

gsap.defaults({
    duration:0.8,
    delay:0
})
gsap.from('.hero',{opacity:0,y:60})

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:'.section2',
        start:"top 30%",
        duration:0.6
       // markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    }
})

tl2.from('.section2_col_1',{opacity:0,x:-60})
.from('.section2_col_2',{opacity:0,x:60,delay:0})


var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".section3",
        start:"top 35%",
      //  markers: {startColor: "green", endColor: "red", fontSize: "12px"}
        
    }
});

tl3.from('#section3_img',{opacity:0,x:-60})
.from('.section3_text',{opacity:0,x:60})


var tl4=gsap.timeline({
    scrollTrigger:{
        trigger:".testimonial",
        start:"top 40%",
      //  markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    }
})

tl4.from(".testimonial",{opacity:0,y:60})


var tl5=gsap.timeline({
    scrollTrigger:{
        trigger:".section4",
        start:"top 60%",
       // markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    }
})

tl5.from('.section4',{opacity:0,y:60})