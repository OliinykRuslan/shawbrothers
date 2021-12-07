$(document).ready(function () {
  //search button
  $(document).on("click", ".searchTrigger", function () {
    $(".main-nav").toggleClass("top-search-open");
    $(".top-search-parent").toggleClass("relative");
    $(".nav-item.has-children .nav-title").removeClass("is-open");
  });

  $(document).on("click", ".nav-item.has-children .nav-title", function () {
    $(this).toggleClass("is-open");
  });

  //mobile menu
  $(document).on("click", ".showMenu", function () {
    $(this).toggleClass("opened");
    $(".toggleMenu").toggleClass("menu-open");
    $("body").toggleClass("active-menu");
    // $("html").toggleClass("overflow");
    $(".navbar-wrapper").toggleClass("navbar-open-menu");
  });
  $(document).on("click", ".overlayJs", function () {
    $(".showMenu").removeClass("opened");
    $(".toggleMenu").removeClass("menu-open");
    $("body").removeClass("active-menu");
    // $("html").removeClass("overflow");
    $(".navbar-wrapper").removeClass("navbar-open-menu");
  });

  // click outside hide megamenu
  $(document).mouseup(function (e) {
    var navigationMenu = $(".main-nav .nav-item");
    if (navigationMenu.has(e.target).length === 0) {
      $(".nav-item.has-children .nav-title").removeClass("is-open");
    }
  });
});
