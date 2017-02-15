
//AJAX PORTFOLIO





/*===========================================================*/

/*  Stick Navigation & Separators

/*===========================================================*/




$(document).ready(function() {

    $("#navigation").sticky({

        topSpacing: 0

    });



    $("ul#menu").click(function(event) {
        var target=$(event.target);
        if(event.target.tagName.toLowerCase()!=='li'){
            target=target.parent();
        }
        target.addClass('current').siblings().removeClass('current');
        if ($("ul#menu li").css('display') != 'inline') {

            if ($("ul#menu").hasClass('showmenu')) {

                $("ul#menu").removeClass('showmenu');

                $("ul#menu li").css('display', 'none');

            } else {

                $("ul#menu").addClass('showmenu');

                $("ul#menu li").css('display', 'block');

            }

        }

    });



    $(window).resize(function() {

        if ($(window).width() >= 1025) {

            if (($("ul#menu li").css('display') == 'none') || ($("ul#menu li").css('display') == 'block'))

                $("ul#menu li").css('display', 'inline');

        } else {

            $("ul#menu li").css('display', 'none');

        }

    });



});





$(document).ready(function() {



    //.parallax(xPosition, speedFactor, outerHeight) options:

    //xPosition - Horizontal position of the element

    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling

    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport

    $('.separator').parallax("100%", 0);

    $('#navigation ul').localScroll(1000);

    $('#arrow ul').localScroll(1000);
	
	
	
	
	
	
	//Animated Counters
	$('.counters').each(function () {
		$(".timer .count").appear(function() {
		var counter = $(this).html();
		$(this).countTo({
			from: 0,
			to: counter,
			speed: 2000,
			refreshInterval: 60,
			});
		});
	});
	
	

});







 /*===========================================================*/
/* Automatically Highlights Navigation Item
/*===========================================================*/
function calculateScroll() {

if(typeof $ == 'undefined'){
var $ = jQuery;
}

if($('#menu li').length < 2) return;

var topRange = 400;
var contentTop = [];
var contentBottom = [];
var winTop = $(window).scrollTop();

//rangeTop is used for changing the class a little sooner that reaching the top of the page
//rangeBottom is similar but used for when scrolling bottom to top
var rangeTop = 200;
var rangeBottom = 500;

// TODO: Remove this when content is available
// var rangeTop = 20;
// var rangeBottom = 50;
var lastObject = 0;
$('#menu').find('a').each(function(){
var element = $( $(this).attr('href') );
if(typeof element.html() == 'string'){
contentTop.push( $( $(this).attr('href') ).offset().top );
contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
lastObject = $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height();
}else {
contentTop.push(lastObject);
contentBottom.push(lastObject);
}
})

$.each( contentTop, function(i){
if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
$('#menu li')
.removeClass('current')
.eq(i).addClass('current');
}
});
}

jQuery(document).ready(function($) {
calculateScroll()
$(window).scroll(function(event) {
calculateScroll();
});
});









/*===========================================================*/

/*  Organic Tabs

/*===========================================================*/







// Portfolio Filters Toggle





$(document).ready(function() {
    var toggle_switch = $('.nav-toggle');
    var show_filter=$('#show_filters');
    $('body').on('click',function(event){
        if(show_filter.css('display') !== 'none'&&$(event.target).parents('.filters').size()===0){
            toggle_switch.triggerHandler('click','trigger');
        }
    });
    $('.nav-toggle').click(function(e,type) {
        //get collapse content selector

        var collapse_content_selector = $(this).attr('href');

        e.preventDefault();

        //make the collapse content to be shown or hide


        $(collapse_content_selector).slideToggle(600, function() {

            if ($(this).css('display') == 'none') {

                //change the button label to be 'Show'

                toggle_switch.html('<i class="fa fa-angle-down"></i> Industry');

            } else {

                //change the button label to be 'Hide'

                toggle_switch.html('<i class="fa fa-angle-up"></i> Industry');

            }

        });

    });





    // Pretty Photo

if ($().prettyPhoto) {

	showprettyPhoto = function() {

		$("a[rel^='prettyPhoto']").prettyPhoto({

			overlay_gallery: false,

			social_tools: false

		});

	};

	showprettyPhoto();

}
    
    //mapa
    var map = L.map('map_canvas').setView([21.881619, -102.295028], 7);

            L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
map.scrollWheelZoom.disable();
              
    var greenIcon = L.icon({
                iconUrl: 'leaflet/images/bamboo.png',
               // shadowUrl: 'leaflet/images/leaf-shadow.png',

                iconSize:     [55, 55], // size of the icon
                //shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [15, 70], // point of the icon which will correspond to marker's location
                //shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            });
    
    L.marker([21.881619, -102.295028], {icon: greenIcon}).addTo(map).bindPopup('<h5><span class="color">GEO</span>PANDA</h5><p>Estamos aqui!! ven y tomate un cafe con nosotros</p>')
                            .openPopup();;
                
                       /* L.marker([21.881619, -102.295028]).addTo(map)
                            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                            .openPopup();*/
    

});





// Fade Text

$(document).ready(function() {

    $('#fade').list_ticker({

        speed: 5000,

        effect: 'fade'

    });

    $('#slide').list_ticker({

        speed: 5000,

        effect: 'slide'

    });

})







// Bouncing Arrow



function animUp() {

    $("#arrow").animate({

        top: "15px"

    }, "slow", "swing", animDown);

}



function animDown() {

    $("#arrow").animate({

        top: "30px"

    }, "slow", "swing", animUp);

}



$(document).ready(function() {

    animUp();

});






function initFlexModal() {
    $('.flexslider').flexslider({

        animation: "slide",

        easing: "swing",

        controlNav: false,

        smoothHeight: true,

        animationSpeed: 1000,

        start: function(slider) {

            $('body').removeClass('loading');

        }

    });
};


$(window).load(function() {
	
	
	// Flex Slider
	
	$('#blog-slider').flexslider({

        animation: "slide",

        easing: "swing",

        controlNav: false,

        smoothHeight: true,

        animationSpeed: 1000,

        start: function(slider) {

            $('body').removeClass('loading');

        }

    });
	
	
	
	
	
	$('#home-text-slider').flexslider({
		animation: "slide",
		direction: "vertical",
		directionNav:false,
		controlNav:true,		
		smoothHeight: true,
		animationLoop:true,
		slideshowSpeed: 3000,						
		slideToStart: 0,
	});
	
	
	$('#clients-slider').flexslider({
		animation: "fade",
		directionNav:false,
		controlNav:false,
		smoothHeight: true,
		animationLoop:true,
		slideshowSpeed: 3000,		
		slideToStart: 0,
	});
	
	$('#clients-text-slider').flexslider({
		animation: "slide",
		directionNav:false,
		controlNav:true,		
		smoothHeight: true,
		animationLoop:true,
		sync: "#clients-slider",
		slideshowSpeed: 3000,						
		slideToStart: 0,
	});
	
	
	
	
	
	
	

	
	
	// Project Page Expander
	
	(function(){
	  
		  var container = $( "#project-page-holder" );
		  var $items = $('.portfolio .link');
		  index = $items.length;
		  $('.portfolio .link').click(function(){
	
		  if ($(this).hasClass('active')){
		  } else 
		  { lastIndex = index;
		  index = $(this).index();
		  $items.removeClass('active');
		  $(this).addClass('active');
	
		  var myUrl = $(this).find('.open-project').attr("href") + " .item-data"; 
	
		  $('html, body').animate({ scrollTop: $(".portfolio-bottom").offset().top +40}, 800);
		   
		  $('.loading_icon').css({ "display": "block", "opacity": "0" }).animate({ "opacity": "0.8" }, 300);
		  
		  $('#project-page-data').animate({opacity:0}, 400,function(){
				
				$("#project-page-data").load(myUrl,function(e){  
					var $helper = $('.helper');
					var height = $helper.height();
					
						$('#project-page-data').css("min-height", height);
							
							
							$('.flexslider').css({'height' : ''});
				});
				
				$('#project-page-data').delay(400).animate({opacity:1}, 400);
	
		  });
		  
		  //Project Page Open
			
		  $('#project-page-holder').slideUp(600, function(){
				
				$('.loading_icon').delay(400).animate({ "opacity": "0" }, 100,function(){
					
					$('.loading_icon').css("display","none");
				});
				
				
				
		  $('#project-page-data').fadeIn('slow',function(){initFlexModal();});
		  
		  
		  
		  
		  
		  
		  		
		  $('#project-page-data').css('visibility', 'visible');}).delay(800).slideDown(600,function(){
		  
				$('#project-page-data').delay(400).animate({opacity:1}, 400 );
			  
		  });
		  
		  
		  
		  
		  
		  
		  }
	
		  return false;       
		  
		  });
	
		  //Project Page Close
		
		  $('#project_close').click(function() {
		  
				
		  $('#project-page-data').animate({opacity:0}, 10,function(){		
				
				$('#project-page-holder').delay(400).slideUp(600);
				
		  });
				
				$('html, body').delay(500).animate({ scrollTop: $(".portfolio-top").offset().top - 70}, 800);
				$items.removeClass('active') ;
		  
				return false;
				
		  });
	
	})();

    
});







// Organic Tabs

$(function() {
	
    $("#organic-tabs").organicTabs();
	
});





// Logo scroll to top

$(function() {

    $("#navigation").on('click','#logo',function(){

        $.scrollTo('#index',500);

        return false;

    });

});



//nicescroll

$(function() {

    $("html").niceScroll({horizrailenabled:false});
	
});






/**********************************
*
*	Twitter area
*
**********************************/
var cb = new Codebird;
cb.setConsumerKey(twConsumerKey, twConsumerKeySecret);
cb.__call(
    "oauth_requestToken",
    {oauth_callback: "oob"},
    function (reply) {
        cb.setToken(reply.oauth_token, reply.oauth_token_secret);
});
cb.__call('statuses/userTimeline', 
    {'screen_name' : twAccount,'count':tweetsNumber},
    function (r){
	var twContainer = jQuery('#twitter-post');

	twContainer.fadeOut(function(){ $(this).html('');
		for(i=0;i<r.length;i++){
			var tweet = r[i];
			var d = new Date(tweet.created_at);
			fmt = new DateFmt()
			var newDate = fmt.format(d,"%n %d,%y")
			var str = '<li><h2>'+tweet.text+'</h2><p class="white">@'+twAccount+' &#8211; '+newDate+'</p></li>';
			twContainer.append(str);
			$('#twitter-post').list_ticker({speed:6000});
		}
		twContainer.fadeIn();
	});
    },true
 );
 
function DateFmt() {
  this.dateMarkers = { 
     d:['getDate',function(v) { return ("0"+v).substr(-2,2)}], 
         m:['getMonth',function(v) { return ("0"+(v+1)).substr(-2,2)}],
         n:['getMonth',function(v) {
             var mthNames = ["January","February","March","April","May","June","July","August","September","October","November","Deccember"];
             return mthNames[v];
             }],
         w:['getDay',function(v) {
             var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
             return dayNames[v];
             }],
         y:['getFullYear'],
         H:['getHours',function(v) { return ("0"+v).substr(-2,2)}],
         M:['getMinutes',function(v) { return ("0"+v).substr(-2,2)}],
         S:['getSeconds',function(v) { return ("0"+v).substr(-2,2)}],
         i:['toISOString',null]
  };

  this.format = function(date, fmt) {
    var dateMarkers = this.dateMarkers
    var dateTxt = fmt.replace(/%(.)/g, function(m, p){
    var rv = date[(dateMarkers[p])[0]]()

    if ( dateMarkers[p][1] != null ) rv = dateMarkers[p][1](rv)

    return rv
  });

  return dateTxt
  }
}

(function($){
  $.fn.list_ticker = function(options){
    
    var defaults = {
      speed:4000,
	  effect:'slide'
    };
    
    var options = $.extend(defaults, options);
    
    return this.each(function(){
      
      var obj = $(this);
      var list = obj.children();
      list.not(':first').hide();
      
      setInterval(function(){
        
        list = obj.children();
        list.not(':first').hide();
        
        var first_li = list.eq(0)
        var second_li = list.eq(1)
		
		if(options.effect == 'slide'){
			first_li.slideUp();
			second_li.slideDown(function(){
				first_li.remove().appendTo(obj);
			});
		} else if(options.effect == 'fade'){
			first_li.fadeOut(function(){
				second_li.fadeIn();
				first_li.remove().appendTo(obj);
			});
		}
      }, options.speed)
    });
  };
})(jQuery);