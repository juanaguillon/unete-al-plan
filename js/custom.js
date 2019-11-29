var $doc = $(document);
var $win = $(window);

/**
 * Alternar el menu de navegación.
 */
function toggleNavBarMenu() {
  $("#toggle_bar_menu").click(function(e) {
    e.preventDefault();
    $(".site_menu_container").toggleClass("show");
  });
}

toggleNavBarMenu();


$(document).scroll(function(){
  var algocool = $(window).scrollTop()
  if(algocool > 10){
      $('.little-menu').addClass('head-scroll');
  }else{
      $('.little-menu').removeClass('head-scroll');
  }
  
});