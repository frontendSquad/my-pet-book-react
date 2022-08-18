// ========================================= Owl carousel ============================================================//
$("#home-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  center: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// slick
$(".product-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: ".product-thumbnail",
  autoplay: false,
});

$(".product-thumbnail").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".product-slider",
  dots: false,
  arrows: false,
  focusOnSelect: true,
  loop: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});

// slick


$(document).ready(function () {

  

  setTimeout(function () {
    $("#ctn-preloader").addClass("loaded");
    // Una vez haya terminado el preloader aparezca el scroll
    $("body").removeClass("no-scroll-y");

    if ($("#ctn-preloader").hasClass("loaded")) {
      // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
      $("#preloader")
        .delay(200)
        .queue(function () {
          $(this).remove();
        });
    }
  }, 10);



  // if ($(window).width() > 991){
  let i = 0;
  let target = document.getElementById("maindescription");
  let text = target.innerHTML;
  target.innerHTML = " ";
  let speed = 50; //speed duration of effect in millisec

  typeWriter(); //to call function
  function typeWriter() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  // }
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "230px";
  document.getElementById("main").style.marginLeft = "230px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
new WOW().init();
const SimpleScrollbar = require("simple-scrollbar");
require("simple-scrollbar/simple-scrollbar.css");
