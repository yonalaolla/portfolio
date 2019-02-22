// btnClick scroll
$("a").click(function(e){
  if(this.hash !== ""){
    e.preventDefault();
    var hash = this.hash;
    $("html, body").stop().animate({
      scrollTop: $(hash).offset().top
    }, 800, "easeInOutCubic", function(){
      window.location.hash = hash;
    });
  }
});

// scroll to top button
$(window).scroll(function(){
  if($(this).scrollTop() > 200) {
    $('.btn_top').fadeIn();
  }else{
    $('.btn_top').fadeOut();
  }
})
$('.btn_top').click(function(e){
  e.preventDefault();
  $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
  return false;
})