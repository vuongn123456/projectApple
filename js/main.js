$(function () {
  $(window).scroll(function (event) {
    var pos_fixed = $("html,body").scrollTop();
    if (pos_fixed > 10) {
      $(".header__product").addClass("product-fixed");
      $(".header").addClass("mar-header");
    } else {
      $(".header__product").removeClass("product-fixed");
      $(".header").removeClass("mar-header");
    }
  });
});
