// BROWSERS

 // Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
    // At least Safari 3+: "[object HTMLElementConstructor]"
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
    // Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

$('.browse').on('click', function(){
if (isFirefox) {
	alert('ff');
} else if (isChrome){
	alert('chr');
} else if (isSafari){
	alert('saf');
} else if (isOpera){
	alert('oper');
} else {
	alert('no');
}
});

$(document).ready(function(){
	if(isFirefox){
		$('.special').addClass('special-hide');
		}
});

$(document).ready(function(){
	if(isFirefox){
		$('.fox-hide').addClass('hide');
		$('.fox-show').removeClass('hide');
		}
});

$(document).ready(function(){
	if(isFirefox){
		$('#myCarousel').addClass('ff-mobile');
		}
});

//////////////////// HERE ////////////////////


$('.link-scroll a').on('click', function(e){
	var foo = '#' + $(this).attr('href').substr(1);
	var height = $(window).height();
	var id = $(this).attr('id');
	$('.carousel').carousel('pause');
	$(foo).hide().fadeIn(2500);
	$('.thanks').hide().fadeIn(1900);
	$('.parallax').animate({ scrollTop: id*height + 10 }, 1600);
	return false;
});


$('.to-top').on('click', function(e){
	var height = $(window).height();
	$('.parallax').animate({ scrollTop: -1*height}, 2500, function(){
		$('#mus-chevy-con a').removeClass('special-fade');
	});
	return false;
});


$('.fizzler').each(function(){
	$butt = $(this);
	var path = '#' + $butt.attr('id') + '-box';
	var skill = '.' + $butt.attr('id').substr(0,3) + '-skill';
	var closer = '#' + $butt.attr('id').substr(0,3) + '-closer';
	var chevy = path.substr(0,4) + '-chevy-con';
	var theCarousel = '.' + $butt.attr('id') + '-carousel';
	$butt.click(function(){
		$(chevy).fadeOut(800);
		$(skill).fadeOut(800, function(){
			$(path).fadeIn(800).removeClass('hide');
			$(closer).fadeIn(800).removeClass('hide');
			$(chevy).fadeIn(900).removeClass('hide');
			$(theCarousel).carousel();			
			$('#mus-chevy-con a').removeClass('special-fade');
			$('.carousel-caption-sound').fadeIn(800).removeClass('hide');		
		});		
	});
});

$('.closer').on('click', function(){
	$butt = $(this);
	var skill = '.' + $butt.attr('id').substr(0,3) + '-skill';
	var fader = '.' + $butt.attr('id').substr(0,3) + '-fader';
	var con = '#' + $butt.attr('id').substr(0,3) + '-chevy-con';
	var theCarousels = '.' + $butt.attr('id').substr(0,3) + '-carousel';
	$(fader).fadeOut(800).promise().done(function(){
		$(skill).fadeIn(800);
		$(con).fadeIn(800).removeClass('hide');
		$(theCarousels).carousel('pause');
		$('#mus-chevy-con a').removeClass('special-fade');
	});
});

$('.sound-closer').on('click', function(){
	$butt = $(this);
	var caption = '#' + $butt.attr('id').substr(0,3);
	$(caption).fadeOut(800, function(){
		$(caption).addClass('hide');
	}); 
});

$('#mus-chevy-con a').on('click', function(){
	$(this).addClass('special-fade');
});

$('.special-show').on('click', function(){
	$('#mus-chevy-con a').removeClass('special-fade');
});

$('.view-site').on('click', function(){
	$('#myCarousel').carousel('pause');
});

$('.carousel-control').on('click', function(){
	$('#myCarousel').carousel();
})

$(document).ready(function () {
    $('.dev-skill-style').removeClass('offscreen').addClass('onscreen');
    $('.page-1').addClass('opaque');
});

$('.odd').click(function(){
	$('#mus-closer').addClass('sound-special');
});

$('.norm').click(function(){
	$('#mus-closer').removeClass('sound-special');
});

$('.break').click(function(){
	$('#mus-closer').addClass('drum-fix');
});

$('.fix').click(function(){
	$('#mus-closer').removeClass('drum-fix');
});


// $('#dev-webby').click(function(){
// 	alert('plz');
// });

//////////////// TO HERE /////////////////



// $('.test-button').on('click', function(e){
// 		var height = $(window).height();
		
// 		$('.parallax').animate({ scrollTop: 2*height + 10 }, 3000);
// 	});


///////////////// MOBILE ///////////////////////

// $(function(){
// 	var $window = $(window);
// 	var $page2 = $('#web-dev');
// 	var height = $window.height();
// 	$window.scroll(function(){
// 		var wt = $window.scrollTop();
// 		if( wt > height){
// 			$page2.addClass('special-fixed');
// 			//
// 		}else if (wt < height) {
// 			$page2.removeClass('special-fixed');
// 		}
// 	});
// });

// $(function(){
// 	var $window = $(window);
// 	var $page3 = $('#music');
// 	var height = $window.height();
// 	$window.scroll(function(){
// 		var wt = $window.scrollTop();
// 		if( wt > height*2){
// 			$page3.addClass('special-fixed-2');
// 			//
// 		}if (wt < height*2) {
// 			$page3.removeClass('special-fixed-2');
// 		}
// 		if( wt > height*2 + 50){
// 			$page3.removeClass('un-blur');
// 			//
// 		}if (wt < height*2 + 50) {
// 			$page3.addClass('un-blur');
// 		}
// 	});
// });
