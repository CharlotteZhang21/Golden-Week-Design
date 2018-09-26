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
		animateStars(1.5);
		animateMessage(1.3);
	}, 20);

	$('#fullScreenClick').click(function(e){
		ctaClick(e);
        callSDK('download');
	})

}

function preAnimate(_delay) {
	tween = TweenMax.from($('#preAnimate'), 0.5, {
		top: '0',
		ease: Expo.easeIn,
		delay: _delay,
	});
}

function animateDeco(_delay) {
	$('#seasonalDiv').children().each(function(i, el){
		var _deg = {
			before: (-1) * i%2 * i * 20,
			after: 0
		};
		var _b = {
			before: -300,
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
			before: -300,
			after: $(this).position().top - i * 50, 
		};

		var _l = {
			before: -100,
			after: $(this).position().left + i * 20
		}

		tween = TweenMax.from($(this), 1 + 0.4 * i, {
			// rotation: _deg.before,
			bottom: _b.before,
			// left: _l.before,
			delay: _delay,
			// ease: Back.easeOut,
			ease: Power4.easeOut,
			// ease: CustomEase.create("custom", "M0,0 C0.128,0.572 0.257,0.976 0.512,1.05 0.672,1.096 0.838,1 1,1"),
			transformOrigin:"center center"			
		});

	});
}

function animateStars(_delay) {

	var flagDivTween = TweenMax.from($('#flagDiv'), 0.5, {
		top: $('#flagPreshow').position().top,
		left: $('#flagPreshow').position().left,
		ease: Expo.easeIn,
		delay: _delay,
		onComplete: function() {
			$('#flagDiv').children().each(function(i, el){
				var currentY = $(this).position().top;
				var _deg = {
					before: - i * 10,
					after: 0
				};
				var _scale = {
					before: 1,
					after: 1.2, 
				};
				var _top = {
					before: 80,
					after: currentY
				}

				tween = TweenMax.fromTo($(this), 1 + 0.1 * i, {
					// rotation: _deg.before,
					scale: _scale.before,
					// top: _top.before,
				},{
					// rotation: _deg.after,
					scale: _scale.after,
					// top: _top.after,
					ease: Power4.easeIn,
					// ease: CustomEase.create("custom", "M0,0 C0.128,0.572 0.257,0.976 0.512,1.05 0.672,1.096 0.838,1 1,1"),
					transformOrigin:"center centre"			
				});

			});
		}
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
