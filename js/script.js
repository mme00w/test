$(function () {
  $('.nav_accordionBtn,.nav_tap-area,.nav_linkList').click(function () {
    //  $(this).next().animate({ width: 'toggle' }, 'slow');
    $('.nav_accordionBtn').toggleClass('click');
    $('.js-spnav-drawer').animate({ height: 'toggle' }, 'fast');
    // $('.nav_tap-area').animate({ width: 'toggle' }, 'slow');
  });
});


$(function () {
  var mediaQuery = matchMedia('(min-width: 768px)');
  // ページが読み込まれた時に実行
  handle(mediaQuery);
  // ウィンドウサイズが変更されても実行されるように
  mediaQuery.addListener(handle);
  function handle(mq) {
    if (mq.matches) {
      $(function () {
        $(window).on("scroll", function () {
          //スクロールの位置を取得する
          var scroll_top = $(window).scrollTop();
          var window_h = $(window).height();

          $(".scroll").each(function () {
            //各box要素のtopの位置を取得する
            var elem_pos = $(this).offset().top;

            //どのタイミングでフェードインさせるか
            if (scroll_top >= elem_pos + window_h) {
              $(this).addClass("on");
              $(".header_nav_list").addClass("on");
              $(".logoImgBox").removeClass("on");
            } else if (scroll_top === 0) {
              $(this).removeClass("on");
              $(".logoImgBox").addClass("on");
              $(".header_nav_list").removeClass("on");
            }
          });
        });

        

      });
      
      $(".menu-link").addClass("slidedown");
      /*クリックイベント*/
      $('.pc-searchBtn').on('click', function (e) {
        e.preventDefault();
        // $(this).toggleClass('click');
        $('.searchbox').animate({ height: 'toggle' }, 'fast');
      });
      $('.tabBtn').on('click', function (e) {
        e.preventDefault();
        $('.tabBtn').removeClass('is-active-btn');
        $('.tabmenu_item').removeClass("is-active-item");
        $(this).addClass('is-active-btn');
        $($(this).attr("href")).addClass("is-active-item");

      });
      
    }
  }
});

  /* --------------------------------------------------
   * section01 tabmenu
   */

$(window).on("scroll", function () {
  //スクロールの位置を取得する
  var scroll_top = $(window).scrollTop();
  var window_h = $(window).height();
  $(".slide-title").each(function () {
    //各box要素のtopの位置を取得する
    var elem_pos = $(this).offset().top;

    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h + 100) {
      $(".l-heading-border").addClass("active");
      $(".slide-title").addClass("slidein");
    }
  });

  $(".slideout-1,.slideout-2").each(function () {
    //各box要素のtopの位置を取得する
    var elem_pos = $(this).offset().top;

    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h + 200) {
      $(this).addClass("slidein");
    }
  });

  $(".js-slideItem").each(function () {
    //各box要素のtopの位置を取得する
    var elem_pos = $(this).offset().top;
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h + 200) {
      $(this).addClass("slideup");
    }
  });

  $(".contact_list,.voice_list").each(function () {
    //各box要素のtopの位置を取得する
    var elem_pos = $(this).offset().top;
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h + 200) {
      $(this).addClass("rotateIn");
    }
  });

  $(".service").each(function () {
    //各box要素のtopの位置を取得する
    var elem_pos = $(this).offset().top;

    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h + 50) {
      $(this).addClass("slideup");
    }
  });
});


  /* -------------------------
   * accordion
   */

    // $(function(){
    //   $(".sp-accordion-btn").on("click", function() {
    //   $(this).next().slideToggle();
    //   });
    //   });
    
  $(function () {
    $('.sp-accordion-btn,.tap-area,.sp-accordion-box').click(function () {
    //  $(this).next().animate({ width: 'toggle' }, 'slow');
      $('.sp-accordion-btn').toggleClass('click');
      $('.sp-accordion-box').animate({ width: 'toggle' }, 'slow');
      $('.tap-area').animate({ width: 'toggle' }, 'slow');
      

    });
  });

  // $('.sp-accordion-box,.tap-area').click(function () {
  //   // $('.sp-accordion-btn').removeClass('click');
  //   $('.sp-accordion-box').animate({ width: 'toggle' }, 'slow');
  // });

  

 /* -----------------------
   * グローバルメニュー
   */
  $('.header_nav_list').mouseover(function (e) {
      e.preventDefault();
      childPanel = $(this).children
      $(this).children('.opencontent').addClass('active');

    
      $('.logoImgBox').addClass('open');
    });

    $('.header_nav_list').mouseout(function (e) {
      e.preventDefault();
      $(this).children('.opencontent').removeClass('active');
      $('.logoImgBox').removeClass('open');
    });
  // if ($('a').hasClass('active')) {
  //   $('.logoImg').addClass('open');
  // } else {
  //   $('.logoImg').removeClass('open');
  // }

   /* -----------------------
   * 要素のフェードイン
   */



  
/* --------------------------------------------------
 * トップページへ
 */



  $(function () {
    var topBtn = $('.jump-top');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  });





  /* --------------------------------------------------
   * slick
   */

$('.single').slick({
  autoplay: true, //自動再生
  dots: true,
  arrows:false,
});


$(function () {
  var mediaQuery = matchMedia('(max-width: 980px)');
  // ページが読み込まれた時に実行
  handle(mediaQuery);
  // ウィンドウサイズが変更されても実行されるように
  mediaQuery.addListener(handle);
  function handle(mq) {

    if (mq.matches) {
      // ウィンドウサイズが980px以下のとき
      $('.multiple').slick({
        autoplay: false, //自動再生
        infinite: true, //スライドのループ有効化
        dots: false, //ドットのナビゲーションを表示
        // arrow: true,
        slidesToShow: 2, //表示するスライドの数
        slidesToScroll: 2, //スクロールで切り替わるスライドの数
        responsive: [{
          breakpoint: 550, //ブレークポイントが480px
          settings: {
            slidesToShow: 1, //表示するスライドの数
            slidesToScroll: 1, //スクロールで切り替わるスライドの数
          }
        }]
      });
    }
  }
});







  /* --------------------------------------------------
   * 発火
   */






