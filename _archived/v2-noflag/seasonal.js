function startTemplate() {
	$('head').append('<link rel="stylesheet" href="seasonal.css" />');
	
	$('#cta-text').text('立即下载');

	$('#container').removeClass('theme-green').addClass('theme-seasonal');

	$('#seasonalContainer').removeClass('invisible');
	$('#preAnimate').removeClass('invisible');

	setTimeout(function() {
		preAnimate(1.5); // delay seconds
		animateDeco(1.5);
		animateCharacters(2.2);
		// animateStars(1.5);
		animateMessage(1.3);
	}, 20);

	$('#fullScreenClick').click(function(e){
		ctaClick(e);
        callSDK('download');
	})

}

function preAnimate(_delay) {

	if(window.innerWidth > window.innerHeight){
		
		tween = TweenMax.from($('#preAnimate'), 0.5, {
			left: '0',
			ease: Expo.easeIn,
			delay: _delay,
		});		
	}else{
		tween = TweenMax.from($('#preAnimate'), 0.5, {
			top: '0',
			ease: Expo.easeIn,
			delay: _delay,
		});
	}

	
}

function animateDeco(_delay) {
	$('#seasonalDiv').children().each(function(i, el){
		var _deg = {
			before: (-1) * i%2 * i * 20,
			after: 0
		};
		var _b = {
			before: -400,
			after: 280 + (-1 * (1+i)%2) * i * 50 , 
		};

		var _l = {
			before: -100,
			after: i * 40,
		}

		tween = TweenMax.from($(this), 1 + 0.2 * i, {
			rotation: _deg.before,
			bottom: _b.before,
			// ease: Back.easeOut,
			delay: _delay,
			ease: Power4.easOut,
			transformOrigin:"center"			
		});

	});

}

function animateCharacters(_delay) {
	$('#charactersDiv').children().each(function(i, el){
		var _deg = {
			before: - i * 20,
			after: 0
		};
		var _b = {
			before: -400,
			after: $(this).position().top - i * 50, 
		};

		var _l = {
			before: -100,
			after: $(this).position().left + i * 20
		}

		tween = TweenMax.from($(this), 1.5 + 0.2 * i, {
			// rotation: _deg.before,
			bottom: _b.before,
			// left: _l.before,
			delay: _delay,
			// ease: Back.easeOut,
			ease: Expo.easeInOut,
			transformOrigin:"center center"			
		});

	});
}

function animateStars(_delay) {

	var flagDivTween = TweenMax.from($('#flagDiv'), 0.5, {
		top: $('#flagPreshow').position().top,
		left: $('#flagPreshow').position().left,
		ease: Expo.easeInOut,
		delay: _delay
	});
	
}

function animateMessage( _delay) {

	TweenMax.fromTo($('#message'), .5, {
	   scale: 1,
	},{
		scale: 0,
		ease: Back.easeIn,
		delay: _delay
	});
}

window.addEventListener('resize', function() {

    $('#flagDiv').removeAttr('style');
    $('#charactersDiv').children().each(function(i, ek){
    	$(this).removeAttr('style');	
    })
})

