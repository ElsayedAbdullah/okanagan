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

  // switch between tabs in live-product section
  $(".live-list li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".list-content > div").hide();
    $($(this).data("content")).fadeIn();
  });

  //traverse between testimonials
  $(".right-arrow").click(function(e) {
    e.preventDefault();
    if (!$(".slider .active").is(":last-child")) {
      $(".slider .active").fadeOut(1000, function() {
        $(".slider .active")
          .removeClass("active")
          .next(".client")
          .addClass("active")
          .fadeIn();
      });
    } else {
      $(".slider .active").fadeOut(1000, function() {
        $(".slider .active").removeClass("active");
        $(".slider .client")
          .eq(0)
          .addClass("active")
          .fadeIn();
      });
    }
  });

  $(".left-arrow").click(function(e) {
    e.preventDefault();
    if (!$(".slider .active").is(":first-child")) {
      $(".slider .active").fadeOut(1000, function() {
        $(".slider .active")
          .removeClass("active")
          .prev(".client")
          .addClass("active")
          .fadeIn();
      });
    } else {
      $(".slider .active").fadeOut(1000, function() {
        $(".slider .active").removeClass("active");
        $(".slider .client")
          .eq(3)
          .addClass("active")
          .fadeIn();
      });
    }
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
});
