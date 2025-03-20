  $(function(){
    slick('.slideType03');
  })

  function slick(target){
    $(target).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite : false, 
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow : $('.prevArrow'), 
        nextArrow : $('.nextArrow'),
        draggable : false
    });
  }
