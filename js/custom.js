var $doc = $(document);
var $win = $(window);

/**
 * Alternar el menu de navegación.
 */
function toggleNavBarMenu() {
  $("#toggle_bar_menu").click(function (e) {
    e.preventDefault();
    $(".site_menu_container").toggleClass("show");
  });
}

toggleNavBarMenu();


$(document).scroll(function () {
  var algocool = $(window).scrollTop()
  if (algocool > 10) {
    $('.little-menu').addClass('head-scroll');
  } else {
    $('.little-menu').removeClass('head-scroll');
  }

});
var arreglo = [
  "xxj8NrdLpDo",
  "lsUKF4yZ31o",
  "6aZeMB9M5VA",
  "7BpWW2stsuo",
  "2JhEZckiOXI",
  "FRxN9-SK7Cc",
  "sl9tMpzEIrA",
  "sGBHJN_ptNY",
  "THxYe4D5V2c",
  "b_JUgQ1qYCg",
  "ijo3TTKaBhw",
  "CfVVMUDKfDQ",
  "wS87nxEJmgA",
  "ZsycSKuSncg",
  "ucQKsnydeAE",
  "GW_ui8x6L8g",
  "u1AQlGNeAao",
  "-AVVtiC0HRs",
  "ynsAC7qEh3g",
  "2JhEZckiOXI",
  "l4RXZ-74j-E",
  "YxVsYDr_8u0",
  "YXwZADwuKUA",
  "I6PLRMIIaH4",
  "9Gvq49bGhG4",
  "5UjEtXWYFWw",
  "Sa3MM9HTt30",
  "RIJ95xHqAVg",
  "haU-YgXoEOE",
  "lFKUv1--wak",
  "GWTlZ0Gd1bA",
  "xOkmqm8hhEA",
  "C0f7PzET8lU",
  "RjoD443J1MM",
  "gZy03EU-HOM",
  "TfOe0QHrbZc"
]
var arrayVideos = []

for (let index = 0; index < arreglo.length; index++) {
  const element = arreglo[index];
  arrayVideos.push("https://www.youtube.com/embed/" + element);
}

function loadMore() {
  var counterStep = 3;
  var countInput = $("#count_load_more");
  var nowCount = parseInt(countInput.val());


  for (var i = nowCount; i < parseInt(nowCount + counterStep); i++) {
    if ( typeof  arrayVideos[i] === "undefined") break;

    var element = arrayVideos[i];
    $(".galery-container").append('<div class="galery-item"><iframe src="' + element + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
  }

  var countActual = parseInt(countInput.val())
  countInput.val(parseInt(countActual + counterStep))
  if (countActual + counterStep >= arreglo.length) {
    $(".load-more").hide()
    return;
  };
}
$('.load-more').click(function () {
  loadMore()
  // $('.galery-item').removeClass('item-hide');
  // if ($('.mision').hasClass('d-none')){
  //     $('.mision').removeClass('d-none');
  //     $('.mision').addClass('d-flex');
  //     $('.vision').removeClass('d-flex')
  //     $('.valores').removeClass('d-flex')
  //     $('.title-vision .title-li-quienes').removeClass('shadow-text-quienes');
  //     $('.title-valores .title-li-quienes').removeClass('shadow-text-quienes');
  // }
});

$(document).ready(function () {
  $('.lista-videos-monitoreo').slick({
    arrows: true,
    infinite: false,
    autoplaySpeed: 2000,
    dots: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true
  })
});
