$(".image-slider1").owlCarousel({
  margin:20,
  loop:true,
  autoplay:true,
  nav:true,
  navText:["←","→"],
  responsive:{
        0:{
            items:1
        },
        600:{
            items:3,
            merge:true,
                                
        },
        1000:{
            items:4
        }
  }
});
$(".image-slider2").owlCarousel({
    margin:20,
    loop:true,
    autoplay:true,
    nav:true,
    navText:["←","→"],
    responsive:{
          0:{
              items:1
          },
          600:{
              items:4,
              merge:true,
                                  
          },
          1000:{
              items:8
          }
    }
  });