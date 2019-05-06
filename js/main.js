$(function () {
  "use strict";

  // add class active on navbar when click
  $(".my-navbar li a").on("click", function () {
    $(this)
      .addClass("active")
      .parent("li")
      .siblings()
      .find("a")
      .removeClass("active");
  });

  //burgor button
  $(".burgor").on("click", function () {
    $(this).toggleClass("transformed");
    $(".my-navbar").slideToggle(600);
  });

  // switch between tabs in live-product section
  $(".live-list li").on("click", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".list-content > div").hide();
    $($(this).data("content")).fadeIn();
  });

  // switch between tabs in description section in products page
  $(".list-description li").on("click", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".description-content > div").hide();
    $($(this).data("content")).fadeIn();
  });

  //traverse between testimonials
  $(".right-arrow").click(function (e) {
    e.preventDefault();
    if (!$(".slider .active").is(":last-child")) {
      $(".slider .active").fadeOut(1000, function () {
        $(".slider .active")
          .removeClass("active")
          .next(".client")
          .addClass("active")
          .fadeIn();
      });
    } else {
      $(".slider .active").fadeOut(1000, function () {
        $(".slider .active").removeClass("active");
        $(".slider .client")
          .eq(0)
          .addClass("active")
          .fadeIn();
      });
    }
  });

  $(".left-arrow").click(function (e) {
    e.preventDefault();
    if (!$(".slider .active").is(":first-child")) {
      $(".slider .active").fadeOut(1000, function () {
        $(".slider .active")
          .removeClass("active")
          .prev(".client")
          .addClass("active")
          .fadeIn();
      });
    } else {
      $(".slider .active").fadeOut(1000, function () {
        $(".slider .active").removeClass("active");
        $(".slider .client")
          .eq(3)
          .addClass("active")
          .fadeIn();
      });
    }
  });

  // Start Gallery
  $(".gallery img").on("click", function () {
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
  $(".quantity .button").on("click", function () {
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

  //
  $(".product-info .review a").on("click", function () {
    $("html,body").animate({
        scrollTop: $(".list-description #review").offset().top
      },
      600
    );
    $(".list-description #review").click();
  });

  // when press on close button delete the product
  $(".product-table .product-remove").on("click", function () {
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
    $(".item .product-total").each(function () {
      subtotal += parseFloat($(this).text());
      $(".subtotal span").fadeOut(200, function () {
        $(".subtotal span").text(subtotal.toFixed(2));
        $(".subtotal span").fadeIn(200);
      });
    });
  }

  $(".product-quantity .number").change(function () {
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
    productRow.children(".product-total").each(function () {
      $(this).fadeOut(200, function () {
        $(this).text(linePrice.toFixed(2));
        calculate_total();
        $(this).fadeIn(200);
      });
    });
  }

  // validation on client side
  $(".firstname").blur(function () {
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
  $(".lastname").blur(function () {
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
  $(".email").blur(function () {
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
  $(".address").blur(function () {
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

  $(".phone").blur(function () {
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

  $(".town").blur(function () {
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

  $(".zip").blur(function () {
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

  ////////////////////////////////////////////


  $(".credit-payment .card").click(function () {
    $(this).parent().siblings(".card-info").slideDown(500);
  });
  $(".paypal-payment .card").click(function () {
    $(this).parent().siblings(".card-info").slideUp(500);
  });

});