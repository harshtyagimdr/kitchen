jQuery(window).load(function() {
       "use strict";
	 
	jQuery("#up_status").fadeOut();

	jQuery("#loader").delay(700).fadeOut("slow");

var screenwidth = jQuery(window).width();
if (screenwidth>1025) {
	  if(navigator.userAgent.match(/Trident\/7\./)) {
          jQuery('.footer_up_wrap').removeClass('cover');
	}
 jQuery('#wrapper').css('margin-bottom', jQuery('.footer_up_wrap.cover').height());
 

 
 jQuery(".sb_btn.action").mouseenter(function(){
    jQuery(".sb_btn_bg").removeClass("ui-animate-3d-left").addClass("ui-animate-3d-right");
  });
  jQuery(".sb_btn.action").mouseleave(function(){
    jQuery(".sb_btn_bg").removeClass("ui-animate-3d-right").addClass("ui-animate-3d-left");
  });
 
 };	

  if ( jQuery('header').is('.one_p') ) {
	   
	    jQuery('.wrap.maincontent ').css('margin-top', jQuery('header').height());
   };
   
})

	
jQuery(document).ready(function ($) {
		"use strict";
	
		 $('.parallax').scrolly({bgParallax: true});
		$(".post_share a.m").jqSocialSharer();	
		$('#portfoliolist').mixitup();		
		$(".videofit").fitVids();			
		     $('.image-popup-no-margins').magnificPopup({
       type: 'image',
          closeOnContentClick: true,
          mainClass: 'mfp-img-mobile',
          image: {
            verticalFit: true
          }
        });
				
		$('#up_topbar .widget.woocommerce.widget_shopping_cart').hide();
		$('#up_topbar .shop_icon').hover(function () {
			$('.widget.woocommerce.widget_shopping_cart', this).stop().slideToggle(200);
		});		
			$(document).on('click', '.navsearch-icon', function(event){
		event.preventDefault();

		$('body').addClass('navsearch-active');
		$('.js-search-input').focus();
	});
	$(document).on('click', '.search_close', function(){
		$('body').removeClass('navsearch-active');
	});

	$(document).keyup(function(e) {
	  if (e.keyCode == 27  &&  $('body').hasClass('navsearch-active') ) { 
	  	$('body').removeClass('navsearch-active');
	  }   
	});	
	
	
	$(document).on('click', '.popup-icon', function(event){
		event.preventDefault();

		$('body').addClass('popup_menu_active');
		$('.js-search-input').focus();
	});
	$(document).on('click', '.search-nav-close', function(){
		$('body').removeClass('popup_menu_active');
	});

	$(document).keyup(function(e) {
	  if (e.keyCode == 27  &&  $('body').hasClass('popup_menu_active') ) { 
	  	$('body').removeClass('popup_menu_active');
	  }   
	});	
	$( '.up-mobnav li a' ).addClass( 'up-link' );
	
          
           
       
	/* Mobile Menu */
        $('.up-mobnav li.menu-item-has-children').append('<span class="main-menu-toggle"></span>');
        $('.main-menu-toggle').on('click', function () {
            $(this).parent().find('> .sub-menu').toggleClass('submenu-open');
            $(this).parent().find('> .sub-menu').slideToggle();
        });
  

  // Closes responsive menu when a scroll trigger link is clicked
  $('.up-link').on('click', function () {
    $('.up-nav-collapse').collapse('hide');
  });
  
			
 $('[href*="#"]:not([href*="#vc_"], [href="#"], [href*="#tab"] ,[href*="#respond"], a[data-vc-container*=".vc_tta"] )').on('click', function ()
  {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) 
    {
      
      var target = $(this.hash),
	 
      headerHeight = $("header.one_p").height() ;
  
            
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              
      if (target.length) 
      {
        $('html,body').animate({
          scrollTop: target.offset().top - headerHeight 
        }, 500);
        return false;
      }
    }
  });
  

  
  jQuery(window).on('load scroll resize', function () {
    var currentSection = null;
    jQuery('.vc_row').each(function () {
        var element = jQuery(this).attr('id');
        if (jQuery('#' + element).is('*')) {
            if (jQuery(window).scrollTop() >= jQuery('#' + element).offset().top - 180)
            {
                currentSection = element;
            }
        }
    });

    jQuery('.topclass.topclass-onepage ul li').removeClass('active').find('a[href*="#' + currentSection + '"]').parent().addClass('active');
});
  

  	jQuery('ul.sf-menu').superfish({
			delay:       500,                            
			animation:   {opacity:'show',height:'show'},  
			speed:       'fast'                          
		});
  
						  
  				
       $('ul.slides.el').magnificPopup({
          delegate: 'li a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          }
        });
		

		

$('.up_video').magnificPopup({
  type: 'iframe',
  
  
  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                
              '</div>'
  },

  
  
});		

	if ($('.up_progress_bar').length > 0){
		 up_progress_bar();
};	
	if ($('.up_counter').length > 0){
		 up_counter();
};
	if ($('.label-pp').length > 0){
		 callhoverportfolio();
};
	
  $(document).scroll(function(){
        $('#up_topbar_left').stop().animate({
            scrollTop : $(this).scrollTop()
        });            
    });	
	var i = 1;	
	$('.loading_more a').on('click', function(e)  {		
		e.preventDefault();		
		var link = $(this).attr('href');
		var $content = '#portfoliolist';
		var $anchor = '.grid_port_paging .loading_more a';
		var $next_href = $($anchor).attr('href'); 
	
		$.get(link+'', function(data){		
	var $new_content = $($content, data).wrapInner('').html(); 
	$next_href = $($anchor, data).attr('href'); 
	$('.mix.portfolio:last').after($new_content); 			
	var min_height = $('.mix.portfolio:first').height();
	$('.mix.portfolio').css('min-height',min_height);			
	$('#portfoliolist').mixitup('remix','all');
	callhoverportfolio();
	if($('.loading_more').attr('rel') > i) {
				$('.loading_more a').attr('href', $next_href); 
			} else {
				$('.loading_more').remove(); 
			}
			$('#portfoliolist .grid_port_paging:last').remove(); 
			$('.mix.portfolio').css('min-height',0);
			
		});
	i++;		
	});	  
	if ( $(window).width() > 1025) {
	$(window).scroll(function(){var e=$(this),t=$(".topclass.enable_sticky");if(e.scrollTop()>110){t.addClass("topclass-shrink")}else{t.removeClass("topclass-shrink")}});
	}
	 $('a.linkedib').live('click', function(){
        newwindow=window.open($(this).attr('href'),'','height=450,width=700');
        if (window.focus) {newwindow.focus()}
        return false;
    });

	
	    
	$(document).keyup(function(e) {
	  if (e.keyCode == 27  &&  $('.main-navm').hasClass('visible') ) { 
	  	
		$('.main-navm').removeAttr('style');
			
	  }   
	});	
	
	
	
//Portfolio Slider
 $('.port_slider').slick({
  centerMode: true,
  centerPadding: '25%',
  slidesToShow: 1,
  speed: 1000,	
	rows: 0 ,
	responsive: [
    {
      breakpoint: 768,
      settings: {
       
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
         rows: 0 ,
        slidesToShow: 1,
		dots: true,
      }
    }
  ]
 }); 
	
	//testimonial Slider
	$('.tcenter .testimonial_slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
nextArrow: '.flex-prev',
		prevArrow: '.flex-next',
		 
	
	rows: 0 ,
});

	//testimonial Slider
	$('.tright .testimonial_slider').slick({
  dots: true,
  infinite: true,
  speed: 500,

nextArrow: false,
		prevArrow: false,
		 arrows : false,
	
	rows: 0 ,
});

	


});//end

	if ( typeof window['callhoverportfolio'] !== 'function' ) {
  function callhoverportfolio() { 
			jQuery('.label-pp').hover(
		function () {
			jQuery(this).animate({opacity:'1'});
		},
		function () {
			jQuery(this).animate({opacity:'0'});
		}
	);  	
  } 
};


(function ( $, window, document, undefined ) {
   "use strict";
    var pluginName = 'scrolly',
        defaults = {
            bgParallax: false
        },
        didScroll = false;

    function Plugin( element, options ) {
        this.element = element;
        this.$element = $(this.element);

        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this;
        this.startPosition = this.$element.position().top;
        this.offsetTop = this.$element.offset().top;
        this.height = this.$element.outerHeight(true);
        this.velocity = this.$element.attr('data-velocity');
        this.bgStart = parseInt(this.$element.attr('data-fit'), 10);

        $(document).scroll(function(){
            self.didScroll = true;
        });
        
        setInterval(function() {
            if (self.didScroll) {
                self.didScroll = false;
                self.scrolly();
            }
        }, 10);
    };

		if ($(window).width() > 960) {var lengte = 5} else  {var lengte = 0}  
	
    Plugin.prototype.scrolly = function() {
        var dT =  $(window).scrollTop(),
            wH = $(window).height(),
         
    position = dT  * this.velocity / + lengte ;
         
        if(this.bgStart){ position = position + this.bgStart; }

        if(this.options.bgParallax === true) {
            this.$element.css({backgroundPosition: '50% '+position+'px'});
        } else {
            this.$element.css({top: position});
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

})(jQuery, window, document);
	

	   			
	if ( typeof window['up_progress_bar'] !== 'function' ) {
  function up_progress_bar() { 
  "use strict";
    	jQuery('.up_progress_bar').vcwaypoint(function() {
	  		jQuery('.up_progress_bar_inner').each(function(index) {
	        var $this = jQuery(this),
	            bar = $this.find('.up_bar_v'),
				nume =  $this.find('.prog_count'),
	            val = bar.data('percentage');								
	  		  setTimeout(function(){ bar.css({"height" : val+'%'}); },1000);  			  
	jQuery({someValue: 0}).animate({someValue: val}, {
	
      duration: 1500,
      easing:'swing', 
      step: function() {          
          nume.text(Math.round(this.someValue));
      },                
  });   					   					  			  			  
	    	});						
	}, { offset: '85%' });
  }
  
};							
		
	if ( typeof window['up_counter'] !== 'function' ) {
  function up_counter() { 
  "use strict";
    	jQuery('.up_counter').vcwaypoint(function() {
  jQuery('.timer').each(count);
      
      
      function count(options) {
        var $this = jQuery(this);
        options = jQuery.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      };
							
	}, { offset: '85%' });
  }
  
};

(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};

		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);

			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;

			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};

			$self.data('countTo', data);

			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			// initialize the element with the starting value
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}

				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;

					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.text(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(document).ready(function($){
	"use strict"; 
	$( 'ul.products li.up-gallery-woo a:first-child' ).hover( function() {
		$( this ).children( '.wp-post-image' ).removeClass( 'fadeInDown' ).addClass( 'productanim fadeOutUp' );
		$( this ).children( '.sec-image' ).removeClass( 'fadeOutUp' ).addClass( 'productanim fadeInDown' );
	}, function() {
		$( this ).children( '.wp-post-image' ).removeClass( 'fadeOutUp' ).addClass( 'fadeInDown' );
		$( this ).children( '.sec-image' ).removeClass( 'fadeInDown' ).addClass( 'fadeOutUp' );
	});
	

});

(function ($) {
  var vWidth = $(window).width();
  $('#toggle-menu').on('click', function () {
	  $('#pop_left').toggleClass('pop-visible');
	   $(".menu-opener").toggleClass("active");
    $(this).toggleClass('toggle-menu-visible').toggleClass('toggle-menu-hidden');	
    var hidden = $('.main-navm');
    if (hidden.hasClass('visible')){
		
		if (hidden.hasClass('left')){hidden.animate({"left":-vWidth*1.2}, 1000).removeClass('visible');}
		
		else{
			
        hidden.animate({"left":+vWidth*1.2}, 1000).removeClass('visible');}
   

   }

	else {
        hidden.animate({"left":"0px"}, 1000).addClass('visible');
    }
    });
	
	

	

})(jQuery);




(function ($) { 
	"use strict"; 
     var vH = $(window).height();
    $('.height-x').css('height',vH);

     $('.height-x').css('height',vH);
    
})(jQuery);





