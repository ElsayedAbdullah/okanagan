$(function() {
  "use strict";

  // add class active on navbar when click
  $(".navbar li a").on("click", function() {
    $(this)
      .addClass("active")
      .parent("li")
      .siblings()
      .find("a")
      .removeClass("active");
  });

  // Trigger niceScroll plugin
  $("body").niceScroll({
    cursorcolor: "#a9b090",
    cursorwidth: "10px",
    cursorborder: "1px solid #a9b090",
    cursorborderradius: 2,
    zindex: 9999
  });

  // switch between tabs in live-product section
  $(".live-list li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".list-content > div").hide();
    $($(this).data("content")).fadeIn();
  });

  // scroll to top button
  var scrollButton = $(".scroll-top");
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 700) {
      scrollButton.fadeIn(400);
    } else {
      scrollButton.fadeOut(400);
    }
  });

  scrollButton.on("click", function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      600
    );
  });

  // cycling the carousel every 5 seconds
  $(".carousel").carousel({
    interval: 5000
  });
});
