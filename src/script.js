$(document).ready(function () {

  // Add click event listener to the zealot card
    $("#slang-card").click(function () {
    // Redirect to the specified link
    window.location.href = "https://github.com/kmr-ankitt/S-lang";
    });

    $("#zealot-card").click(function () {
        // Redirect to the specified link
    window.location.href = "https://github.com/kmr-ankitt/Zealot";
  });

  // Add click event listener to the portfolio card
  $("#cax-card").click(function () {
    // Redirect to the specified link
    window.location.href = "https://github.com/kmr-ankitt/Cax";
  });
  
  // Add click event listener to the portfolio card
  $("#myshell-card").click(function () {
    // Redirect to the specified link
    window.location.href = "https://github.com/kmr-ankitt/Myshell";
  });

  // Add click event listener to the portfolio card
  $("#bfg-card").click(function () {
    // Redirect to the specified link
    window.location.href = "https://github.com/kmr-ankitt/Brainfuck-go";
  });

  // Add click event listener to the portfolio card
  $("#porfolio-card").click(function () {
    // Redirect to the specified link
    window.location.href = "https://github.com/kmr-ankitt/Piscan-portfolio";
  });
  
  // Add click event listener to the garbage collector card
  $("#gc-card").click(function () {
    // Redirect to the specified link
    window.location.href = "https://github.com/kmr-ankitt/Garbage-Collector";
  });

  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Learner", "Student", "Designer", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Learner", "Student", "Designer", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
