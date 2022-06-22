$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false ,
    arrows:true,
    prevArrow:'.myslider-prev1' ,
    nextArrow:'.myslider-next1' ,
    autoplayspeed:500 , 
    
   
   
  });




  $('.slider2').slick({
    dots:false,
    infinite: false,
    speed:300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:false ,
    arrows:true,
    prevArrow:'.myslider-prev' ,
    nextArrow:'.myslider-next' ,
    autoplayspeed:100 , 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false ,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      
    ]
  });


  $(".navbar-toggler").click(function(){
  if($(".navbar-bg").css("display")=="none"){
     $(".navbar-bg").css("display","block")
  }
  else{
     $(".navbar-bg").css("display","none")
  }
  })


  $(".navbar-bg").click(function(){
    $(".navbar-collapse").removeClass("show");
    $(".navbar-bg").css("display","none")
    $(".navbar-toggler").addClass("collapsed");

  })
  
