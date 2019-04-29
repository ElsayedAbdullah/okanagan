$(function() {
  "use strict";

  // add class active on navbar when click
  $(".my-navbar li a").on("click", function() {
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

  // switch between tabs in description section in products page
  $(".list-description li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".description-content > div").hide();
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

  // Start Gallery
  $(".gallery img").on("click", function() {
    $(this)
      .addClass("selected")
      .siblings()
      .removeClass("selected");
    $(".master-image .master")
      .hide()
      .attr("src", $(this).attr("src"))
      .fadeIn(500);
  });

  // increase and decreace the quantity of product by custom input type number
  $(".product-quantity .quantity .button").on("click", function() {
    var $button = $(this);
    var oldValue = $button
      .parent()
      .find("input")
      .val();
    var newVal;

    if ($button.text() == "+") {
      newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $button
      .parent()
      .find("input")
      .val(newVal);
  });

  //
  $(".product-info .review a").on("click", function() {
    $("html,body").animate(
      {
        scrollTop: $(".list-description #review").offset().top
      },
      600
    );
    $(".list-description #review").click();
  });
});
