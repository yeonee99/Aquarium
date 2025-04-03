  $(function(){
    slick('.slideType03');
    slick02('.mainSlide01');
    headerH('header .gnb_list');
    tabUI(".newsTab li",".mainPart05 > div");
    tabUI(".tabMenu01 li",".direcPart02 > div");
    hoverE('.mainPart02 ul > li');
    toggleDown('.accoType01 li b');
    filter('.noticeMenu li');
    noticeFilter(".passPage01 [class^='normal'] ul li > div div a");
  })

  function slick(target){
    $(target).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite : false, 
        autoplay: false,
        prevArrow : $('.prevArrow'), 
        nextArrow : $('.nextArrow'),
        draggable : false
    });
  }

  function slick02(targetSlide) {
    $(targetSlide).on('init beforeChange', function(event, slick, currentSlide, nextSlide) {
        var totalSlides = slick.slideCount;
        var progress = ((nextSlide !== undefined ? nextSlide : 0) + 1) / totalSlides;
        $('.progressbar_fill').css('transform', 'scaleX(' + progress + ')');
    });

    $(targetSlide).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        prevArrow: $('.prevArr'),
        nextArrow: $('.nextArr')
    });
}


  function headerH(targetA) {
    $(targetA).on('mouseenter', function(){
        $('header').addClass('nav-hover');
        
        setTimeout(() => {
            $('.navBg').css("height", '350px');
        }, 10);
    });

    $(targetA).on('mouseleave', function () {
        $('header').removeClass('nav-hover'); 

        if ($('header').hasClass('nav-hover') == false) {
          var navH = $('.header_inner').innerHeight();
          $('.navBg').css("height", navH);
        }
    });
}

function tabUI(tabMenu,tabCont){
  $(tabMenu).click(function(){
      var tabOk = $(this).attr('data-tab');
      $(tabMenu).removeClass('tabAlive');
      $(this).addClass('tabAlive');

      $(tabCont).removeClass('tabLive');
      $("#"+tabOk).addClass('tabLive');
  });
}

function filter(targetD){
    $(targetD).click(function(){
        var filterA = $(this).attr('data-filter');
        if(filterA == 'all'){
            $('.itemBox').show();
        } else{
            $('.itemBox').not('.'+filterA).hide()
            $('.itemBox').filter('.'+filterA).show()
        }
    })
}


function hoverE(targetB){
  $(targetB).hover(function(){
    $(this).addClass('hover');
  },function(){
    $(this).removeClass('hover');
  })
}

function toggleDown(targetC) {
    $(targetC).click(function () {
        $(this).next().stop().slideToggle();
    });
}

function noticeFilter(targetBtn){
    $(targetBtn).click(function(){
        alert("서비스 제공 예정입니다.")
    })
}


var scrollTopRatio;

function scrollTop() {
    if (document.scrollingElement && document.scrollingElement.scrollHeight) {
        scrollTopRatio = $(document).height() / document.scrollingElement.scrollHeight;
    } else {
        scrollTopRatio = 1;
    }
    return $(window).scrollTop() * scrollTopRatio;
}

function ani() {
    $('[animate]').each(function () {
        var $this = $(this),
            posTop = $this.offset().top,
            wY = scrollTop(),
            wH = $(window).height(),
            oH = $this.outerHeight();

        if (posTop >= wY && oH + posTop <= wY + wH) {
            $this.addClass('on');
        } else if ((posTop <= wY && posTop + oH > wY) || (posTop >= wY && posTop <= wY + wH)) {
            $this.addClass('on');
        } else {
            $this.removeClass('on');
        }
    });
}

$(window).on('scroll', function () {
    ani();
    
    setTimeout(function () {	
        $('#wrap').animate({'opacity': 1}, 550);
    }, 100);
});

$(document).ready(function () {
  $('.project-list > li').hover(
      function () {
          $(this).addClass('hover');
      }, 
      function () {
          $(this).removeClass('hover');
      }
  );
});

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".slideType02", {
      effect: "cards",
      grabCursor: true,
    });
  
    document.querySelector(".custom-button-next").addEventListener("click", function () {
      swiper.slideNext();
    });
  
    document.querySelector(".custom-button-prev").addEventListener("click", function () {
      swiper.slidePrev();
    });
  });


document.addEventListener("DOMContentLoaded", function() {
    const slide = new Swiper('.slideType05', {
      slidesPerView: 1.6,
      spaceBetween: 0,
      loop: false,
      pagination: false,
      observer: true,
      observeParents: true,
      grabCursor: true,
      freeMode: true,
      simulateTouch: true,
      touchReleaseOnEdges: true
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const slide = new Swiper('.thema_slide', {
      slidesPerView: 6,
      spaceBetween: 0,
      loop: true,
      pagination: false,
      observer: true,
      observeParents: true,
      grabCursor: true,
      freeMode: true,
      simulateTouch: true,
      touchReleaseOnEdges: true
    });
  });

