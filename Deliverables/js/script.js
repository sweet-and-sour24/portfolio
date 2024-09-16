$(function() {
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    fade: true,
    infinite: true,
    autoplayspeed: 3000,
    speed: 2000,
    arrows: false,
  });

  // リンクのホバー時に不透明度を変更（解答見て修正）
  $('a').hover(
    function() {
      $(this).animate({'opacity': 0.5 },200);
    },
    function() {
      $(this).animate({'opacity': 1.0 },200);
    }
  );
  // $('.myprofile').on('mouseover', function() {
  //   $(this).animate({
  //     opacity: 0.5,
  //   }, 200);
  // });
  // $('.myprofile').on('mouseout', function() {
  //   $(this).animate({
  //     opacity: 1.0,
  //   },100);
  // });
  // $('.menu-about').on('mouseover', function() {
  //   $(this).animate({
  //     opacity: 0.5,
  //   }, 200);
  // });
  // $('.menu-about').on('mouseout', function() {
  //   $(this).animate({
  //     opacity: 1.0,
  //   },100);
  // });
  // $('.menu-works').on('mouseover', function() {
  //   $(this).animate({
  //     opacity: 0.5,
  //   }, 200);
  // });
  // $('.menu-works').on('mouseout', function() {
  //   $(this).animate({
  //     opacity: 1.0,
  //   },100);
  // });

  // スクロール時にトップに戻るボタンを表示
  $(window).scroll(function(){
    if ($(this).scrollTop() >= 100) {
      $('#back-btn').css('display', 'inline');
    } else {
      $('#back-btn').css('display', 'none');
    }
  });
  
  // ページ内リンクのスクロールをなめらかにする（分からないので解答見ました）
  $('a[href^="#"]').click(function() {
    const speed = 1000;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    return false;
  });
  
  // スクロールした時にセクションをフェードイン(解答みても理解できない)
  $(window).scroll(function() {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  // Worksの画像をクリックした時にモーダルで拡大表示する（分からないので解答見ました）
  $('.works img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false
  });

  // 閉じるボタンをクリックした時にモーダルを閉じる（分からないので解答見ました）
  $('.close-btn').click(function(){
    $('.modal').fadeOut();
    return false
  });
});
