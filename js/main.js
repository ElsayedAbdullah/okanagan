$(function() {
  "use strict";

  // add class active on navbar when click
  $(".navbar .navbar-nav .nav-item").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  //burgor button
  $(".navbar .burgor").on("click", function(event) {
    if (!event.detail || event.detail == 1) {
      //activate on first click only to avoid hiding again on double clicks
      $(this).toggleClass("active");
      $(this).toggleClass("not-active");
      $("body, html").toggleClass("overlay");
      $(".navbar-collapse").slideToggle();
    }
    return false;
  });

  $("body").on("click", function(e) {
    var $currEl = $(e.currentTarget);
    if (!$currEl.is(".navbar") && !$currEl.closest(".navbar").length) {
      $("html,body").removeClass("overlay");
      $(".navbar .burgor").removeClass("active");
      $(".navbar .burgor").removeClass("not-active");
      $(".navbar-collapse").slideUp();
    }
  });
  $(".navbar").on("click", function(e) {
    e.stopPropagation();
  });

  // switch between tabs in live-product section
  $(".live-content .live-list li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".list-content > div").hide();
    $($(this).data("content")).fadeIn();
  });

  $(".live-list.mobile-show .item li").on("click", function() {
    $(this)
      .addClass("active")
      .parents(".owl-item")
      .siblings()
      .find(".item li")
      .removeClass("active");
    $(".list-content.mobile-show > div").hide();
    $($(this).data("content")).fadeIn();
  });

  $("#slider-one").owlCarousel({
    dots: false,
    nav: false,
    loop: false,
    margin: 30,
    autoWidth: true,
    stagePadding: 30,
    responsive: {
      0: {
        items: 1.4,
        stagePadding: 30
      },
      500: {
        items: 1.8
      }
    }
  });
  $("#slider-two").owlCarousel({
    dots: true,
    dotsEach: true,
    nav: false,
    loop: true,
    margin: 20,
    responsive: {
      0: {
        items: 1.3
      },
      500: {
        items: 1.8
      }
    }
  });
  $("#slider-three").owlCarousel({
    dots: false,
    dotsEach: false,
    nav: false,
    loop: true,
    margin: 20,
    responsive: {
      0: {
        items: 1.18
      },
      500: {
        items: 1.8
      }
    }
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

  // Start Gallery in products page
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
  $(".quantity .button").on("click", function() {
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
      if (oldValue > 1) {
        newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }

    $button
      .parent()
      .find("input")
      .val(newVal);
  });

  // animate to reviewing tab when click reviews link
  $(".product-info .review a").on("click", function() {
    $("html,body").animate(
      {
        scrollTop: $(".list-description #review").offset().top
      },
      600
    );
    $(".list-description #review").click();
  });

  // when press on close button delete the product
  $(".product-table .product-remove").on("click", function() {
    $(this)
      .parent(".item")
      .fadeOut(400)
      .remove();
    calculate_total();
  });

  // calculate the subtotal cost of products that found in cart
  calculate_total();

  function calculate_total() {
    var subtotal = 0;
    $(".item .product-total").each(function() {
      subtotal += parseFloat($(this).text());
      $(".subtotal span").fadeOut(200, function() {
        $(".subtotal span").text(subtotal.toFixed(2));
        $(".subtotal span").fadeIn(200);
      });
    });
  }

  $(".product-quantity .number").change(function() {
    updateQuantity(this);
  });

  /* Update quantity */
  function updateQuantity(quantityInput) {
    /* Calculate line price */
    var productRow = $(quantityInput).parents(".item");

    var price = parseFloat(productRow.children(".product-price").text());
    var quantity = $(quantityInput).val();
    var linePrice = price * quantity;

    /* Update line price display and recalc cart totals */
    productRow.children(".product-total").each(function() {
      $(this).fadeOut(200, function() {
        $(this).text(linePrice.toFixed(2));
        calculate_total();
        $(this).fadeIn(200);
      });
    });
  }

  // validation on client side
  /*
  $(".firstname").blur(function() {
    if ($(this).val() == "") {
      $(this)
        .parents("form")
        .find(".alert-name")
        .fadeIn(300);
      $(this)
        .parents("form")
        .find(".asterisk-fname")
        .fadeIn(300);
    } else {
      $(this)
        .parents("form")
        .find(".alert-name")
        .fadeOut(300);
      $(this)
        .parents("form")
        .find(".asterisk-fname")
        .fadeOut(300);
    }
  });
  $(".lastname").blur(function() {
    if ($(this).val() == "") {
      $(this)
        .parents("form")
        .find(".alert-name")
        .fadeIn(300);
      $(this)
        .parents("form")
        .find(".asterisk-lname")
        .fadeIn(300);
    } else {
      $(this)
        .parents("form")
        .find(".alert-name")
        .fadeOut(300);
      $(this)
        .parents("form")
        .find(".asterisk-lname")
        .fadeOut(300);
    }
  });
  $(".email").blur(function() {
    if ($(this).val() == "") {
      $(this)
        .parents("form")
        .find(".alert-email")
        .fadeIn(300);
    } else {
      $(this)
        .parents("form")
        .find(".alert-email")
        .fadeOut(300);
    }
  });
  $(".address").blur(function() {
    if ($(this).val() == "") {
      $(this)
        .parents("form")
        .find(".alert-address")
        .fadeIn(300);
    } else {
      $(this)
        .parents("form")
        .find(".alert-address")
        .fadeOut(300);
    }
  });

  $(".phone").blur(function() {
    if ($(this).val() == "") {
      $(this)
        .parents("form")
        .find(".alert-phone")
        .fadeIn(300);
    } else {
      $(this)
        .parents("form")
        .find(".alert-phone")
        .fadeOut(300);
    }
  });

  $(".town").blur(function() {
    if ($(this).val() == "") {
      $(this)
        .parents("form")
        .find(".alert-town")
        .fadeIn(300);
    } else {
      $(this)
        .parents("form")
        .find(".alert-town")
        .fadeOut(300);
    }
  });

  $(".zip").blur(function() {
    if ($(this).val() == "") {
      $(this)
        .parents("form")
        .find(".alert-zip")
        .fadeIn(300);
    } else {
      $(this)
        .parents("form")
        .find(".alert-zip")
        .fadeOut(300);
    }
  });
*/
  ////////////////////////////////////////////

  // toggle between credit card and paypal
  $(".credit-payment .card").click(function() {
    $(this)
      .parent()
      .siblings(".card-info")
      .slideDown(500);
  });
  $(".paypal-payment .card").click(function() {
    $(this)
      .parent()
      .siblings(".card-info")
      .slideUp(500);
  });
});
