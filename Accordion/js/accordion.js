$(document).ready(function(){
    // alert(this);
    $(".button").click(function(){
    //  alert(this);
    if($(this).hasClass("active")){
      $(this).removeClass("active").next().slideUp();
      $(this).children("i").removeClass("fa-circle-chevron-up").addClass("fa-circle-chevron-down");
    }
    else{
      $(".button").removeClass("active").next().slideUp();
      $(".button").children("i").removeClass("fa-circle-chevron-up").addClass("fa-circle-chevron-down");
      $(this).addClass("active").next().slideDown();
      $(this).children("i").removeClass("fa-circle-chevron-down").addClass("fa-circle-chevron-up");
    }
  });
});