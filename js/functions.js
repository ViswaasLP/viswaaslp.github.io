//LOADER
jQuery(window).on("load", function () {
   "use strict";
   $(".loader").fadeOut(800);
});


jQuery(function ($) {
   "use strict";
   var $window = $(window);
   var windowsize = $(window).width();
   var $root = $("html, body");
   var $this = $(this);

   /* ----- Back to Top ----- */
   $("body").append('<a href="#" class="back-top"><i class="fa fa-angle-double-up"></i></a>');
   var amountScrolled = 700;
   var backBtn = $("a.back-top");
   $window.on("scroll", function () {
      if ($window.scrollTop() > amountScrolled) {
         backBtn.addClass("back-top-visible");
      } else {
         backBtn.removeClass("back-top-visible");
      }
   });
   backBtn.on("click", function () {
      $root.animate({
         scrollTop: 0
      }, 700);
      return false;
   });


   /* ------- Menu sticky ------- */
   $window.scroll(function () {
      var $scroll = $window.scrollTop();
      var $navbar = $("#navigation");
      if ($scroll > 50) {
         $navbar.addClass("fixed");
      } else {
         $navbar.removeClass("fixed");
      }
   });


   /*----- push Menu On click -----*/
   if ($(".pushbtn").length) {
      $("body").addClass("pushwrap");
      $(".pushbtn").on("click", function (event) {
         event.preventDefault();
         $(".pushwrap").toggleClass("active");
         $("#toggle-slide").toggleClass("open");
         $("#navslidy").toggleClass("open");
      });
   }


   /* ------- Smooth scroll ------- */
   $(".scrollings").on("click", function (event) {
      if (this.hash !== "") {
         event.preventDefault();
         var hash = this.hash;
         $("html, body").animate({
            scrollTop: $(hash).offset().top
         }, 800, function () {
            window.location.hash = hash;
         });
      }
   });
	
   


   /* ------- DropDown handler ------- */	
   function navbarz() {
   $(".navbar .dropdown").on('click', function() {
		 if ($(window).width() < 990) {
			 $(this).next('.dropdown-menu').show();
			 $(this).next.toggleClass('open'); 
		 }
	});
			
	$(".navbar .dropdown").hover(function () {
		 if ($(window).width() >= 990) {
			 $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
				$(this).toggleClass('open');
		 }
	}, function () {
		 if ($(window).width() >= 990) {
			  $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
				$(this).removeClass('open');
		 }
	});
	}
   navbarz();
   $window.resize(navbarz);
	
	


   /* -------Toggle POPOVER for share blog post -------*/
   $(".share").on("click", function () {
      $(".share_purpose").fadeToggle();
   });


   /* -------BG Video banner -------*/
   $(function () {
      if($("#bgndVideo").length){
         $("#bgndVideo").YTPlayer();
      }
      
   });


   /* ----- Full Screen ----- */
   function resizebanner() {
      var $fullscreen = $(".full-screen");
      $fullscreen.css("height", $window.height());
      $fullscreen.css("width", $window.width());
   }
   resizebanner();
   $window.resize(resizebanner);

   /*for Just Height Solution*/
   function resizeheight() {
      var $fullscreen = $(".full-height");
      $fullscreen.css("height", $window.height());
   }
   resizeheight();
   $window.resize(resizeheight);


   /* --------Equal Heights -------- */
   function checheight() {
      var $smae_height = $(".equalheight");
      if ($smae_height.length) {
         if (windowsize > 767) {
            $smae_height.matchHeight({
               property: "height",
            });
         }
      }
   }
   checheight();
   $window.on("resize", function () {
      checheight();
   });


   /* -------- Progress Bars -------- */
   $(".barwrapper").appear(function () {
      $("[data-toggle='tooltip']").tooltip({
         trigger: "manual"
      }).tooltip("show");
      $(".progress-bar").each(function () {
         var bar_width = $(this).attr("aria-valuenow");
         $(this).width(bar_width + "%");
      });
   });


   /* -------- Pricings -------- */
   $(".pricing_btn").on("click", function () {
      if ($(".pricing_btn").hasClass("active")) {
         var $el = $("." + this.id).fadeIn("slow");
         $(".pricings").not($el).fadeOut("slow");
      }
      $(this).parent().find(".active").removeClass("active");
      $(this).addClass("active");
      return false;
   });



   /* ------ Swiper Slider ------ */

   /*Logos Clients with arrows*/
   $("#logo-arrow.swiper-container").swiper({
      slidesPerView: 5,
      spaceBetween: 15,
      controlBy: "slide",
      grabCursor: true,
      autoplay: 2500,
      speed: 300,
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 10
         },
         480: {
            slidesPerView: 2,
            spaceBetween: 10
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 10
         },
         900: {
            slidesPerView: 4,
            spaceBetween: 10
         }
      },
      nextButton: $this.find(".swiper-button-next"),
      prevButton: $this.find(".swiper-button-prev"),
   });

   /*LOGOS transparent shade*/
   $("#logo-transparent.swiper-container").swiper({
      slidesPerView: 6,
      spaceBetween: 15,
      controlBy: "slide",
      grabCursor: true,
      autoplay: 2500,
      speed: 300,
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 10
         },
         480: {
            slidesPerView: 2,
            spaceBetween: 10
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 10
         },
         900: {
            slidesPerView: 4,
            spaceBetween: 10
         },
         1200: {
            slidesPerView: 5,
            spaceBetween: 10
         }
      },
   });

   /*Team Slider*/
   $("#team-slider.swiper-container").swiper({
      spaceBetween: 0,
      slidesPerView: 2,
      slidesPerColumn: 2,
      controlBy: "slide",
      autoplay: 3500,
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         480: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 1,
         },
         900: {
            slidesPerView: 2,
         },
         1400: {
            slidesPerView: 2,
         }
      },
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
   });
   /*team slider Blocks position */
   $("#team-slider .team-slide").each(function ($num) {
      $num += 1;
      if ($num % 2 === 0) {
         $(".team-text", this).insertBefore($(".team-photo", this));
         $(".team-text", this).css("text-align", "right");
         $(".team-text", this).addClass("right");
      }
   });

   /*Team Slider two columns*/
   $("#team-cols.swiper-container").swiper({
      spaceBetween: 0,
      slidesPerView: 2,
      slidesPerColumn: 1,
      autoplay: 3500,
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         480: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 1,
         },
         900: {
            slidesPerView: 1,
         },
         1400: {
            slidesPerView: 2,
         }
      },
   });

   /*Team Slider 3row with caret buttons*/
   $("#teamrow-slider").each(function () {
      var $this = $(this);
      $this.find(".swiper-container").swiper({
         spaceBetween: 70,
         slidesPerView: 2,
         slidesPerColumn: 3,
         controlBy: "slide",
         loop: true,
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 10,
            },
            480: {
               slidesPerView: 1,
               spaceBetween: 10,
            },
            768: {
               slidesPerView: 1,
               spaceBetween: 20,
            },
            900: {
               slidesPerView: 1,
               spaceBetween: 30,
            },
            1400: {
               slidesPerView: 2,
               spaceBetween: 30,
            }
         },
         nextButton: $this.find(".swiper-button-next"),
         prevButton: $this.find(".swiper-button-prev"),
      });
   });

   /*Address slider  01 */
   $(".our-address").each(function () {
      var $this = $(this);
      $this.find(".swiper-container").swiper({
         slidesPerView: 1,
         controlBy: "slide",
         nextButton: $this.find(".swiper-button-next"),
         prevButton: $this.find(".swiper-button-prev"),
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
         },
      });
   });
   
	/*Cripto version */
   $("#bitco-slider.swiper-container").swiper({
      spaceBetween: 0,
      slidesPerView: 1,
      autoplay: 3500,
      pagination: '.swiper-pagination',
      paginationClickable: true,
    });
   

   /* ------ OWL Slider ------ */
   /*Work with us LOGOS greyscale*/
   $("#logos-centered").owlCarousel({
      center: true,
      items: 5,
      autoplay: 500,
      loop: true,
      margin: 15,
      dots: false,
      nav: false,
      responsive: {
         900: {
            items: 4
         },
         600: {
            items: 2
         },
         480: {
            items: 2,
         },
         320: {
            items: 1,
         },
      }
   });

   /*Testimonial three img dots  */
   $(".testimonial-text.owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      callbacks: true,
      autoplay: 2500,
      autoplayHoverPause: true,
      dots: true,
      dotsContainer: "#owl-thumbs",
      nav: true,
      navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
      responsive: {
         767: {
            items: 1,
            nav: false,
         },
         0: {
            items: 1,
            nav: false,
         }
      }
   });
   
   /*Special Food Offers & Construction Services*/
   $("#food-offers, #constructions").owlCarousel({
      center: true,
      items: 3,
      autoplay: false,
      loop: true,
      margin: 30,
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
      responsive: {
         900: {
            items: 3
         },
         600: {
            items: 2
         },
         480: {
            items: 2,
         },
         320: {
            items: 1,
         },
      }
   });

   /*Testimonial single & Sidebar tweets slide fading  */
   $("#testimonial-fade.owl-carousel, #tweets-slider.owl-carousel").owlCarousel({
      items: 1,
      autoplay: 2500,
      loop: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      dots: false,
      nav: false,
      responsive: {
         0: {
            items: 1
         }
      }
   });

   /*Simple text fadng banner*/
   $("#text-fade").owlCarousel({
      items: 1,
      autoplay: false,
      loop: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      dots: true,
      dotsContainer: "#owl-custom",
      nav: false,
      responsive: {
         0: {
            items: 1
         }
      }
   });
   
   /*Simple fadng blog imgs*/
   $("#blog-fade").owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
      responsive: {
         0: {
            items: 1
         }
      }
   });

   

   /*----- TESTIMONIALS Feedback ----*/
   var feedtext = $(".feedback-text");
   var feedthumb = $(".feedback-thumbs");
   var slidesPerPage = 5; //globaly define number of elements per page
   var syncedSecondary = true;
   feedtext.owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: false,
      autoplay: true,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
   }).on("changed.owl.carousel", syncPosition);

   feedthumb.on("initialized.owl.carousel", function () {
      feedthumb.find(".owl-item").eq(0).addClass("current");
   }).owlCarousel({
      items: slidesPerPage,
      dots: false,
      nav: false,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100
   }).on("changed.owl.carousel", syncPosition2);

   function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;

      //if you disable loop you have to comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - .5);

      if (current < 0) {
         current = count;
      }
      if (current > count) {
         current = 0;
      }
      //end block

      feedthumb.find(".owl-item").removeClass("current").eq(current).addClass("current");
      var onscreen = feedthumb.find(".owl-item.active").length - 1;
      var start = feedthumb.find(".owl-item.active").first().index();
      var end = feedthumb.find(".owl-item.active").last().index();
      if (current > end) {
         feedthumb.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
         feedthumb.data("owl.carousel").to(current - onscreen, 100, true);
      }
   }

   function syncPosition2(el) {
      if (syncedSecondary) {
         var number = el.item.index;
         feedtext.data("owl.carousel").to(number, 100, true);
      }
   }
   feedthumb.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      feedtext.data("owl.carousel").to(number, 300, true);
   });



   /* ----------- Counters ---------- */
   $(".value_formatter").data("countToOptions", {
      formatter: function (value, options) {
         return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
      }
   });
   $(".counters").appear(function () {
      $(".count_nums").each(count);
   });

   function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data("countToOptions") || {});
      $this.countTo(options);
   }


   /* ---------- Parallax Backgrounds ---------- */
   if ($window.width() > 1024) {
      $(".parallaxie").parallaxie({
         speed: 0.55,
         offset: 0,
      });
   }

   /* ---------- CownDown ---------- */
   $(".custom-count").dsCountDown({
      endDate: new Date("April 24, 2018 23:59:00")
   });


   /* ---------- Type Writer ---------- */
   $('#type_it_slider').typeIt({
         speed: 50,
         autoStart: false,
         loop: true,
      })
      .tiType('Parallax Template')
      .tiSettings({
         speed: 700
      })
      .tiPause(1000)
      .tiSettings({
         speed: 50
      })
      .tiDelete()
      .tiType('Creative Agencies')
      .tiSettings({
         speed: 700
      })
      .tiPause(1000)
      .tiSettings({
         speed: 50
      })
      .tiDelete()
      .tiType('Business Startups');


   /*Personal resume page*/
   $('#my_designation').typeIt({
         speed: 30,
         autoStart: false,
         loop: true,
      })
      .tiType('Web Developer.')
      .tiSettings({
         speed: 700
      })
      .tiPause(1000)
      .tiSettings({
         speed: 50
      })
      .tiDelete()
      .tiType('Cyclist.');



   /* ------ CubePortfolio ------ */
   /*3columns white space mixed layout masonry and flat*/
   $("#gallery-grid").cubeportfolio({
      layoutMode: "mosaic",
      sortByDimension: true,
      defaultFilter: "*",
      animationType: "fadeOut",
      gapHorizontal: 30,
      gapVertical: 30,
      gridAdjustment: "responsive",
      mediaQueries: [{
         width: 1500,
         cols: 3,
        }, {
         width: 1100,
         cols: 3,
        }, {
         width: 800,
         cols: 3,
        }, {
         width: 480,
         cols: 2,
        }],
      plugins: {
         loadMore: {
            element: "#space-work",
            action: "click",
         }
      },
   });

   /*3columns no spce*/
   $("#nospace-grid").cubeportfolio({
      layoutMode: "mosaic",
      sortByDimension: true,
      defaultFilter: "*",
      animationType: "fadeOut",
      gapHorizontal: 0,
      gapVertical: 0,
      gridAdjustment: "responsive",
      mediaQueries: [{
         width: 1500,
         cols: 4,
        }, {
         width: 1100,
         cols: 4,
        }, {
         width: 800,
         cols: 3,
        }, {
         width: 480,
         cols: 2,
        }],
      plugins: {
         loadMore: {
            element: "#gallery-work",
            action: "click",
            loadItems: 3,
         }
      },
   });

   /*3columns space*/
   $("#masonry-grid").cubeportfolio({
      filters: "#masonry-filters",
      layoutMode: "grid",
      sortByDimension: true,
      defaultFilter: "*",
      animationType: "skew",
      gapHorizontal: 30,
      gapVertical: 30,
      gridAdjustment: "responsive",
      mediaQueries: [{
         width: 1500,
         cols: 4,
        }, {
         width: 1100,
         cols: 4,
        }, {
         width: 800,
         cols: 3,
        }, {
         width: 480,
         cols: 1,
        }],
   });

   /*three Cols*/
   $("#masonry-light").cubeportfolio({
      filters: "#light-filters",
      layoutMode: "grid",
      sortByDimension: true,
      defaultFilter: "*",
      animationType: "quicksand",
      gapHorizontal: 30,
      gapVertical: 30,
      gridAdjustment: "responsive",
      mediaQueries: [{
         width: 1500,
         cols: 3,
        }, {
         width: 1100,
         cols: 3,
        }, {
         width: 800,
         cols: 4,
        }, {
         width: 480,
         cols: 1,
        }],
   });
   
    /*3 cols mosaic*/
   $("#grid-mosaic").cubeportfolio({
        filters: "#filters-mosaic",
        layoutMode: 'mosaic',
        sortByDimension: true,
        defaultFilter: "*",
        animationType: "quicksand",
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 3,
        }, {
            width: 1100,
            cols: 3,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
        }],
    });






   /* ------ Revolution Slider ------ */
   $("#banner-main").show().revolution({
      sliderType: "standard",
      sliderLayout: "fullscreen",
      scrollbarDrag: "true",
      dottedOverlay: "none",
      delay: 3000,
      navigation: {
         bullets: {
            style: "",
            enable: true,
            rtl: false,
            hide_onmobile: false,
            hide_onleave: false,
            hide_under: 320,
            hide_over: 9999,
            tmp: '',
            direction: "horizontal",
            space: 10,
            h_align: "center",
            v_align: "bottom",
            h_offset: 0,
            v_offset: 30
         },
         arrows: {
            enable: true,
            hide_onmobile: true,
            hide_onleave: false,
            hide_under: 767,
            left: {
               h_align: "left",
               v_align: "bottom",
               h_offset: 20,
               v_offset: 30,
            },
            right: {
               h_align: "right",
               v_align: "bottom",
               h_offset: 20,
               v_offset: 30
            },
         },
         touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false,
         }
      },
      viewPort: {
         enable: true,
         outof: "pause",
         visible_area: "90%"
      },
      responsiveLevels: [4096, 1024, 778, 480],
      gridwidth: [1170, 1024, 750, 480],
      gridheight: [600, 500, 500, 350],
      lazyType: "none",
      parallax: {
         type: "mouse",
         origo: "slidercenter",
         speed: 9000,
         levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
         simplifyAll: "off",
         nextSlideOnWindowFocus: "off",
         disableFocusListener: false,
      }
   });
   
   /*Banner Standard with full Width*/
   $("#banner-standard").show().revolution({
      sliderType: "standard",
      sliderLayout: "fullwidth",
      scrollbarDrag: "true",
      dottedOverlay: "none",
      delay: 3000,
      navigation: {
         bullets: {
            style: "",
            enable: true,
            rtl: false,
            hide_onmobile: false,
            hide_onleave: false,
            hide_under: 320,
            hide_over: 9999,
            tmp: '',
            direction: "horizontal",
            space: 10,
            h_align: "center",
            v_align: "bottom",
            h_offset: 0,
            v_offset: 30
         },
         arrows: {
            enable: true,
            hide_onmobile: true,
            hide_onleave: false,
            hide_under: 767,
            left: {
               h_align: "left",
               v_align: "middle",
               h_offset: 20,
               v_offset: 30,
            },
            right: {
               h_align: "right",
               v_align: "middle",
               h_offset: 20,
               v_offset: 30
            },
         },
         touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false,
         }
      },
      viewPort: {
         enable: true,
         outof: "pause",
         visible_area: "90%"
      },
      responsiveLevels: [4096, 1024, 778, 480],
      gridwidth: [1170, 1024, 750, 480],
      gridheight: [600, 500, 500, 350],
      lazyType: "none",
      parallax: {
         type: "mouse",
         origo: "slidercenter",
         speed: 9000,
         levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
         simplifyAll: "off",
         nextSlideOnWindowFocus: "off",
         disableFocusListener: false,
      }
   });


   /*animated elements banner*/
   $("#rev_single").show().revolution({
      sliderType: "hero",
      jsFileLocation: "revolution/js/",
      sliderLayout: "fullscreen",
      scrollbarDrag: "true",
      dottedOverlay: "none",
      delay: 9000,
      navigation: {},
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1170, 1024, 778, 480],
      gridheight: [868, 768, 960, 720],
      lazyType: "none",
      parallax: {
         type: "scroll",
         origo: "slidercenter",
         speed: 400,
         levels: [10, 15, 20, 25, 30, 35, 40, -10, -15, -20, -25, -30, -35, -40, -45, 55]
      },
      shadow: 0,
      spinner: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
         simplifyAll: "off",
         disableFocusListener: false
      }
   });



   /* -------- Circle bars -------- */
   $(".circular-wrap").appear(function () {
      $(".circle").circleProgress({
         size: 210,
         lineCap: "round",
         fill: {
            gradient: ["#ef233c", "#6a54a0"]
         },
      });
   });
   
   
   $(".circular-wrap.dark").appear(function () {
      $('.myskill').circleProgress({
      lineCap: "round",
      size: 200,
   });
   });

   

   /* ----- Custom scroller ----- */
   if ($("#nav-slides").length) {
      new SimpleBar($("#nav-slides")[0]);
   }

});


/* -------- Crypto Currency Price Fetching -------- */
   if ($("body").hasClass("crypto_currency_version")){

    $.get("https://api.coinmarketcap.com/v1/ticker/", function(data, status) {
        for (var i = 0; i < data.length - 1; i++) {
            if (data[i].id == "litecoin") {
                $("#lprice").html(data[i].price_usd);
            }
            if (data[i].id == "bitcoin") {
                $("#bprice").html(data[i].price_usd);
            }
            if (data[i].id == "ethereum") {
                $("#eprice").html(data[i].price_usd);
            }
            if (data[i].id == "ethereum") {
                $("#e_price").html(data[i].price_usd);
            }
            if (data[i].id == "bitcoin") {
                $("#b_price").html(data[i].price_usd);
            }

        }
    });


}
   

/* -------- Wow Transitions -------- */

new WOW().init();
   
