$(document).ready(function(){
  setInterval(function(){
    var pathes = $("#port").find('path');
    pathes.each(function(i, path){
      // 각 path의 길이(length)를 구한다.
      var total_length = path.getTotalLength();
      // stroke-dasharry를 path의 길이(length)로 잡는다.
      path.style.strokeDasharray = total_length + " " + total_length;
      // stroke-offset을 path의 길이로 잡는다. (여기까지 하면 기존의 패스가 투명하게 안보인다.)
      path.style.strokeDashoffset = total_length;
      // 애니메이션으로 stroke-offset을 0으로 가깝게 이동시킨다.
      $(path).animate({
        "strokeDashoffset" : 0
      }, 2500);
    });
  }, 6000);
});
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