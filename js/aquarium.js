  $(function(){
    slick('.slideType03');
    headerH('header .gnb_list');
    tabUI(".newsTab li",".mainPart05 > div");
    hoverE('.mainPart02 ul > li');
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
function hoverE(targetB){
  $(targetB).hover(function(){
    $(this).addClass('hover');
  },function(){
    $(this).removeClass('hover');
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
          $(this).addClass('hover'); // 마우스 올리면 hover 클래스 추가
      }, 
      function () {
          $(this).removeClass('hover'); // 마우스 내리면 hover 클래스 제거
      }
  );
});