// Hello.

//

// This is The Scripts used for ___________ Theme

//

//



function main() {



(function () {

   'use strict';



    /*====================================

    Main Navigation Stick to Top when Scroll

    ======================================*/

    function sticky_relocate() {

	    var window_top = $(window).scrollTop();

	    var div_top = $('#sticky-anchor').offset().top;

	    if (window_top > div_top) {

	        $('#main-menu').addClass('stick');

	    } else {

	        $('#main-menu').removeClass('stick');

	    }

	}



	$(function () {

	    $(window).scroll(sticky_relocate);

	    sticky_relocate();

	});





	/*====================================

	//Portfolio Carousel 

	======================================*/

	var owl = $("#portfolio-items");

	  owl.owlCarousel({

	     

	      itemsCustom : [

	        [0, 1],

	        [450, 1],

	        [660, 2],

	        [700, 3],

	        [1200, 4],

	        [1600, 4]

	      ],

	      navigation : true,

	      navigationText: ["<i class='fa fa-chevron-circle-left'></i>","<i class='fa fa-chevron-circle-right'></i>"],

	      pagination: false,

	  });



	/* ==============================================

  	Testimonial Slider

  	=============================================== */ 

	 $("#testimonial").owlCarousel({

	   

	        navigation : false, // Show next and prev buttons

	        slideSpeed : 300,

	        paginationSpeed : 400,

	        singleItem:true,

	        autoHeight : true

	   

	    });



  	/*====================================

    Portfolio Isotope Filter

    ======================================*/

        var $container = $('#itemsWork');

        $container.isotope({

            filter: '*',

            animationOptions: {

                duration: 750,

                easing: 'linear',

                queue: false

            }

        });

        $('.cat a').click(function() {

            $('.cat .active').removeClass('active');

            $(this).addClass('active');

            var selector = $(this).attr('data-filter');

            $container.isotope({

                filter: selector,

                animationOptions: {

                    duration: 750,

                    easing: 'linear',

                    queue: false

                }

            });

            return false;

        });

        $container.imagesLoaded()

		  .progress( function() {

		    // trigger reLayout everytime an image loads

		    $container.isotope('reLayout');

		  });





    /*====================================

    Nivo Lightbox 

    ======================================*/

    // Agency Portfolio Popup

    $('#popup a').nivoLightbox({

            effect: 'slideDown',  

            keyboardNav: true,                            

        });



 	/*====================================

   	Accordion Active Calling 

    ======================================*/

    // When we click on the Panel heading

	$("#accordion3>.panel-default > .panel-heading").click(function(){

	  // If this isn't already active

	  if (!$(this).hasClass("active")) {

	    // Remove the class from anything that is active

	    $("#accordion3>.panel-default > .panel-heading.active").removeClass("active");

	    // And make this active

	    $(this).addClass("active");

	  }

	});



	// When we click on the Panel heading

	$("#accordion4>.panel-default > .panel-heading").click(function(){

	  // If this isn't already active

	  if (!$(this).hasClass("active")) {

	    // Remove the class from anything that is active

	    $("#accordion4>.panel-default > .panel-heading.active").removeClass("active");

	    // And make this active

	    $(this).addClass("active");

	  }

	});



}());
}

main();


$(function(){
 // vars for clients list carousel
  // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
  var $clientcarousel = $('#clients-list');
  var clients = $clientcarousel.children().length;
  var clientwidth = (clients * 10); // 140px width for each client item 
  $clientcarousel.css('height',clientwidth);
  
  var rotating = true;
  var clientspeed = 0;
  var seeclients = setInterval(rotateClients, clientspeed);
  
  $(document).on({
    mouseenter: function(){
      rotating = false; // turn off rotation when hovering
    },
    mouseleave: function(){
      rotating = true;
    }
  }, '.our-client');
  
  function rotateClients() {
    if(rotating != false) {
      var $first = $('#clients-list li:first');
      $first.animate({ 'margin-top': '-160px' }, 2000, function() {
        $first.remove().css({ 'margin-top': '0px' });
        $('#clients-list li:last').after($first);
      });
    }
  }
});


