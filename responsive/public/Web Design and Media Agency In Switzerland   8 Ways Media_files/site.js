/***  jQuery code | Bálint Baár | 2014 @ GBaRT | www.gbart.hu ***/

/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

/* smallSliders */

function smallSlidersInit(rightButton, leftButton, ulID, liNumber){
	
	$(ulID).css("width","5000% !important").css("left","0px");


	if ( ($(window).width() > 1200) ){
		
		function scroollR() { $(rightButton).trigger('click'); }
		function scroollL() { $(leftButton).trigger('click'); }
	
		var scrolling = 0;
		var scrollPause = 1000;
		
		$(rightButton).hover(function() {
			scroollR();
			scrolling = setInterval(scroollR, scrollPause);
		}, function() {
			clearInterval(scrolling);
		});	
		
		$(leftButton).hover(function() {
			scroollL();
			scrolling = setInterval(scroollL, scrollPause);
		}, function() {
			clearInterval(scrolling);
		});
			
	};

    /* rightButton Click */	
	$(rightButton).css('user-select', 'none').on('selectstart', false).live('click', function() {
		
		var liWidth = parseInt($(ulID+" li").outerWidth(true));
		var liCount = parseInt( $(ulID).children("li").length );
		var currPos = parseInt($(ulID).css('left'));
		var ulLength = parseInt( liWidth * liCount );
		var liPerPage = 1;
		
		if ( $(ulID).is(':animated') ) { return false; };
		
				if ( ulID == "ul#ourclientsslider" ){
					if ($(window).width() < 768){ liPerPage = 1; }
					if ( ($(window).width() > 767) && ($(window).width() < 1200) ){ liPerPage = 2; }
					if ($(window).width() > 1200){ liPerPage = 4; }
				}
				if ( ulID == "nav#services-list ul" ){
					if ($(window).width() < 768){ liPerPage = 1; }
				}
				if ( ulID == "article#our-team ul" ){
					if ($(window).width() < 768){ liPerPage = 1; }
					if ( ($(window).width() > 767) && ($(window).width() < 1200) ){ liPerPage = 1; }
					if ($(window).width() > 1200){ liPerPage = 4; }
				}
				if ( ulID == "ul#figures-circles" ){
					if ($(window).width() < 768){ liPerPage = 1; }
					if ( ($(window).width() > 767) && ($(window).width() < 1200) ){ liPerPage = 3; }
				}	
				if ( ulID == "article#services-subpage ul" ){
					if ($(window).width() < 768){ liPerPage = 1; }
				}	
		
		if ( currPos <= (-ulLength+(liPerPage*liWidth)) ) { 
			$(ulID).stop().delay(4000).animate({ left: 0 }, 600);
		}
		else { 
			$(ulID).stop().animate({ left: currPos-liWidth }, 600);
		}
	
		return false;
		
	});

    /* leftButton Click */
	$(leftButton).css('user-select', 'none').on('selectstart', false).live('click', function() {
		
		var liWidth = parseInt($(ulID+" li").outerWidth(true));
		var liCount = parseInt( $(ulID).children("li").length );
		var currPos = parseInt($(ulID).css('left'));
		var ulLength = parseInt( liWidth * liCount );
		var liPerPage = 1;
		
		if ( $(ulID).is(':animated') ) { return false; };
		
		if ( currPos < 0) {
			$(ulID).stop().animate({ left: currPos+liWidth }, 600); 
		} else {
			
				if ( ulID == "ul#ourclientsslider" ){
					if ($(window).width() < 768){ liPerPage = 1; }
					if ( ($(window).width() > 767) && ($(window).width() < 1200) ){ liPerPage = 2; }
					if ($(window).width() > 1200){ liPerPage = 4; }
					console.log(liPerPage);
				}
				if ( ulID == "nav#services-list ul" ){
					if ($(window).width() < 768){ liPerPage = 1; }
				}
				if ( ulID == "article#our-team ul" ){
					if ($(window).width() < 768){ liPerPage = 1; }
					if ( ($(window).width() > 767) && ($(window).width() < 1200) ){ liPerPage = 1; }
					if ($(window).width() > 1200){ liPerPage = 4; }
				}
				if ( ulID == "ul#figures-circles" ){
					if ($(window).width() < 768){ liPerPage = 1; }
					if ( ($(window).width() > 767) && ($(window).width() < 1200) ){ liPerPage = 3; }
				}	
				if ( ulID == "article#services-subpage ul" ){
					if ($(window).width() < 768){ liPerPage = 1; }
				}	
				if ( ulID == "article#reference-block02 div.slider-container ul" ){
					liPerPage = 1;
				}
				
				
				
			$(ulID).stop().animate({ left: -(liWidth*liCount)+(liPerPage*liWidth) }, 600);
			
		}
		
		return false;
			
	});
	

};

/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

/* Drawing circles */

// counting
function counter(){
	  
	$("article#figures ul#figures-circles li").css("border","none");
	
	var viewportOffset = $("#about-us a").offset();
    if (viewportOffset) {
	var top = viewportOffset.top; // these are relative to the viewport
	var currpos = $(window).scrollTop(); // current position
	
	if (currpos > viewportOffset.top && !$("html").hasClass("runCounting")){
	
		$('#number-first').css("opacity","1");
		generateCanvas("myCanvas1")
		
		$('#number-first').data('countToOptions', {
			onComplete: function (value) {
				$('#text-first').css("opacity","1");
				$('#number-second').each(count);
				$('#number-second').css("opacity","1");
				generateCanvas("myCanvas2")
			}
		});
		
		$('#number-second').data('countToOptions', {
			onComplete: function (value) {
				$('#text-second').css("opacity","1");
				$('#number-third').each(count);
				$('#number-third').css("opacity","1");
				$('#letter-k').css("opacity","1");
				generateCanvas("myCanvas3")
			}
		});
		
		$('#number-third').data('countToOptions', {
			onComplete: function (value) {
				$('#text-third').css("opacity","1");
				$('#number-fourth').each(count);
				$('#number-fourth').css("opacity","1");
				generateCanvas("myCanvas4")
			}
		});
		
		$('#number-fourth').data('countToOptions', {
			onComplete: function (value) {
				$('#text-fourth').css("opacity","1");
				$('#number-fifth').each(count);
				$('#number-fifth').css("opacity","1");
				generateCanvas("myCanvas5")
			}
		});
		
		$('#number-fifth').data('countToOptions', {
			onComplete: function (value) {
				$('#text-fifth').css("opacity","1");
			}
		});
		  
		$('#number-first').each(count);
		$("html").addClass("runCounting");
			
	}	
    }
};
    // 
	function count(options) {
		
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
		
	}
    

    // genereate the Canvas
    function generateCanvas(canvasID){

        (function() {
            var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
            window.requestAnimationFrame = requestAnimationFrame;
        })();

        var canvasID;
        var canvas = document.getElementById(""+canvasID+"");
        var context = canvas.getContext('2d');
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        var radius = 80;
        var endPercent = 101;
        var curPerc = 0;
        var counterClockwise = false;
        var circ = Math.PI * 2;
        var quart = Math.PI / 2;

        context.lineWidth = 4;
        context.strokeStyle = '#A50221';

        function animate(current) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
            context.stroke();
            curPerc++;
            if (curPerc < endPercent) {
                requestAnimationFrame(function () {
                    animate(curPerc / 30)
                });
            }
        }

        animate();

    };

/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

/* Set the Backgrounds */

function setBG() {
	
	//<div class="background3"></div>
	
	$("div.background2, div.background3").remove();
	
	var viewportOffset2 = $("#about-us").offset();	
	var viewportOffset3 = $("#figures").offset();

	var winHeight = parseInt($(window).height());
	
	var aboutHeight = parseInt($("#about-us").height());
	var bg2Start = parseInt(viewportOffset2.top)-winHeight;
	
	var figuresHeight = parseInt($("#figures").height());
	var bg3Start = parseInt(viewportOffset3.top)-winHeight;
	
	var bg2html = '<div class="background2" data-'+(bg2Start-100)+'="height:0%;" data-'+((bg2Start)+winHeight-100)+'="height:100%;"></div>';
	var bg3html = '<div class="background3" data-'+(bg3Start+100)+'="height:0%;" data-'+((bg3Start)+winHeight+100)+'="height:100%;"></div>';
	
	$("div#bg").append(bg2html, bg3html);

};

/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

/* Line Loaders */

function aboutus(){
	
	$("ul#precent-loader li a p").each(function() {
		
		precent = $(this).attr("data-precent");
		$(this).animate({ width: precent+'%' }, (2000*(precent / 100)));
		$("ul#precent-loader li a p strong").animate({ opacity: 1 }, 2000);

	});
	
	$("ul#precent-loader li div p").each(function() {
		
		precent = $(this).attr("data-precent");
		$(this).animate({ width: precent+'%' }, (2000*(precent / 100)));
		$("ul#precent-loader li div p strong").animate({ opacity: 1 }, 2000);

	});
	
	var articleCount = parseInt( $("article#our-history article").length );
	$("article#our-history ul li:nth-child(4)").addClass("last");
	
	if( $('article#our-history').length > 0 ){
        if ($("li.last span.timeline-dot").length > 0){
            var offset = parseInt( $("li.last span.timeline-dot").offset().top - $("article#our-history div.col-big").offset().top );
            $("span.center-line").css("height",offset);
        }

	}
};

/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

/* Calculate Fake Height */

function absoluteHeight(){

	var ulHeight = parseInt($("div.slider-container ul").height());
	$("div.slider-container").css("height",ulHeight);
	
	$(".subpage article#ourclients nav#ourclientsslider-container").css("height",parseInt($(".subpage article#ourclients nav ul#ourclientsslider").height()));
	
	if ($(window).width() > 768){
        leftWidth = parseInt($(".reference-texts ul.list-left").width());
        rightWidth = parseInt($(".reference-texts ul.list-right").width());
        if (leftWidth > rightWidth  ){
            $(".reference-texts ul.list-right").css("width",leftWidth);
        } else {
            $(".reference-texts ul.list-left").css("width",rightWidth);
        }
	}
};

/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

/* Generate Fake Select Skins */

function selectSkin() {
	$('select.select').each(function() {
		var thisWidth = parseInt($(this).width());
		$(this).after('<div class="selectSkin" style="width:'+thisWidth+'px;" />');
		$(this).removeClass('select');
		$(this).clone().appendTo($(this).next('div.selectSkin'));
		$(this).remove()
	});
};

/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

/* Ready Functions */

$(document).ready(function() {
	
	selectSkin();
	
	$(".fancybox").fancybox();
	
	aboutus();
	
	absoluteHeight();
	
	if ( !$("div#main").hasClass("subpage")  ){
        var s = skrollr.init({forceHeight: false});
        s.refresh();  
	}

	if ($(window).width() < 769){
		smallSlidersInit("a.btn.slider.right.clientslider","a.btn.slider.left.clientslider","ul#ourclientsslider","1");	
		smallSlidersInit("a.btn.slider.right.teamslider","a.btn.slider.left.teamslider","article#our-team ul","1");
		smallSlidersInit("a.btn.slider.right.figuresslider","a.btn.slider.left.figuresslider","ul#figures-circles","1");
		smallSlidersInit("a.btn.slider.right.servicesslider","a.btn.slider.left.servicesslider","nav#services-list ul","1");
		smallSlidersInit("article#services-subpage a.btn.slider.red.right","article#services-subpage a.btn.slider.red.left","article#services-subpage ul","1");		
		smallSlidersInit("a.btn.slider.subrefsslider.right","a.btn.slider.subrefsslider.left","article#reference-block02 div.slider-container ul","1");	
	}
	if ( ($(window).width() > 768) && ($(window).width() < 1200) ){
		smallSlidersInit("a.btn.slider.right.clientslider","a.btn.slider.left.clientslider","ul#ourclientsslider","2");	
		smallSlidersInit("a.btn.slider.right.teamslider","a.btn.slider.left.teamslider","article#our-team ul","1");	
		smallSlidersInit("a.btn.slider.right.figuresslider","a.btn.slider.left.figuresslider","ul#figures-circles","3");
		smallSlidersInit("a.btn.slider.subrefsslider.right","a.btn.slider.subrefsslider.left","article#reference-block02 div.slider-container ul","1");	
	}
	if ($(window).width() > 1200) {
		smallSlidersInit("a.btn.slider.right.clientslider","a.btn.slider.left.clientslider","ul#ourclientsslider","4");
		smallSlidersInit("a.btn.slider.right.teamslider","a.btn.slider.left.teamslider","article#our-team ul","4");	
		smallSlidersInit("a.btn.slider.subrefsslider.right","a.btn.slider.subrefsslider.left","article#reference-block02 div.slider-container ul","1");
        if ( !(jQuery.browser.msie && jQuery.browser.version <= 9) ) {
            counter();
        }
	}
    
    if ($(window).width() < 1200) {
        
        $("li.tablet-menu a").live('click', function() {
            if ( $("nav#main_menu").hasClass("active") ){
                    $("nav#main_menu").removeClass("active");
            } else {
                    $("nav#main_menu").addClass("active");
            }
            return false;
        });
        
    }

	$("li.tablet-menu a").live('click', function() {
		$("header").removeClass("hide");
		return false;
	});
	

	
});

/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

/* Resize Functions */

$(window).resize(function(){	
	
	//setBG();
	
	if ( !$("div#main").hasClass("subpage")  ){
        var s = skrollr.init({forceHeight: false});
        s.refresh();  
	}
	absoluteHeight();
	
	aboutus();
	
	//window.location.href=window.location.href;
	
	
	if ($(window).width() < 769){
		smallSlidersInit("a.btn.slider.right.clientslider","a.btn.slider.left.clientslider","ul#ourclientsslider","1");	
		smallSlidersInit("a.btn.slider.right.teamslider","a.btn.slider.left.teamslider","article#our-team ul","1");
		smallSlidersInit("a.btn.slider.right.figuresslider","a.btn.slider.left.figuresslider","ul#figures-circles","1");
		smallSlidersInit("a.btn.slider.right.servicesslider","a.btn.slider.left.servicesslider","nav#services-list ul","1");	
		smallSlidersInit("article#services-subpage a.btn.slider.red.right","article#services-subpage a.btn.slider.red.left","article#services-subpage ul","1");	
		smallSlidersInit("a.btn.slider.subrefsslider.right","a.btn.slider.subrefsslider.left","article#reference-block02 div.slider-container ul","1");	
	}
	if ( ($(window).width() > 768) && ($(window).width() < 1200) ){
		smallSlidersInit("a.btn.slider.right.clientslider","a.btn.slider.left.clientslider","ul#ourclientsslider","2");	
		smallSlidersInit("a.btn.slider.right.teamslider","a.btn.slider.left.teamslider","article#our-team ul","1");	
		smallSlidersInit("a.btn.slider.right.figuresslider","a.btn.slider.left.figuresslider","ul#figures-circles","3");
		smallSlidersInit("a.btn.slider.subrefsslider.right","a.btn.slider.subrefsslider.left","article#reference-block02 div.slider-container ul","1");	
	}
	if ($(window).width() > 1200) {
		smallSlidersInit("a.btn.slider.right.clientslider","a.btn.slider.left.clientslider","ul#ourclientsslider","4");
		smallSlidersInit("a.btn.slider.right.teamslider","a.btn.slider.left.teamslider","article#our-team ul","4");	
		smallSlidersInit("a.btn.slider.subrefsslider.right","a.btn.slider.subrefsslider.left","article#reference-block02 div.slider-container ul","1");	
		if ( !(jQuery.browser.msie && jQuery.browser.version <= 9) ) {
            counter();
        }
	}
	
});