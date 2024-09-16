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

  // リンクのホバー時に不透明度を変更
  $('.myprofile').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5,
    }, 200);
  });
  $('.myprofile').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0,
    },100);
  });
  $('.menu-about').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5,
    }, 200);
  });
  $('.menu-about').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0,
    },100);
  });
  $('.menu-works').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5,
    }, 200);
  });
  $('.menu-works').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0,
    },100);
  });

  // スクロール時にトップに戻るボタンを表示
  $(window).scroll(function(){
    const scrollValue = $(this).scrollTop();
    
    if (scrollValue >= 100) {
      $('#back-btn').css('display', 'inline');
    } else {
      $('#back-btn').css('display', 'none');
    }
  });
  
  // ページ内リンクのスクロールをなめらかにする
  
  
});
