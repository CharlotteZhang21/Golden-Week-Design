var cta = document.getElementById('cta');
resizeText($('#ad-title')[0])
resizeText($('#cta-text')[0])
var ctaAnimationOverride;
window.onload = function() {
    $('.animation').addClass('play');

    if (getBrowserLanguage() == 'zh'){
        startTemplate();
    }
};

var ctaAnimationFinished = false;
setTimeout(function() {

    $('#cta').click(function(e) {
        // console.log(e);
        $('.app-info-text,.cta').css({ 'opacity': '1' });
        ctaClick(e);
        callSDK('download');
    });

}, 1000);

function getBrowserLanguage() {
    var lang;
    if (navigator.userLanguage) {
        lang = navigator.userLanguage;
        if(lang.indexOf('zh-TW') == -1)
            lang = lang.split("-")[0];
    } else if (navigator.language) {
        lang = navigator.language;
        if(lang.indexOf('zh-TW') == -1)
            lang = lang.split("-")[0];
    } else {
        lang = "en";
    }

    console.log(lang)
    return lang;

}



resetAppInfo(2000)

function resetAppInfo(delay) {
    clearTimeout(ctaAnimationOverride);
    ctaAnimationOverride = setTimeout(function() {
        $('#cta').css('animation', 'pulse 2s ease-in-out infinite 1s');
        $('.app-info-text , .star-rating , #app-icon').css('animation', 'initial');
        $('#app-icon').css({ 'transform': 'scale(1) translate(-50%)' });
        $('.app-info-text,.cta,#app-icon').css({ 'opacity': '1' });
        ctaAnimationFinished = true;
    }, delay)
}

var resizeTimeout1, resizeTimeout2;

function updateCSS() {
    ctaAnimationFinished = false;
    resizeText(document.getElementById('ad-title'))
    resizeText(document.getElementById('cta-text'))
    $('animation').removeClass('play');
    $('#app-icon').addClass('app-info-drag-transition').removeAttr('style');
    $('.app-info-text').addClass('app-info-drag-transition').removeAttr('style');
    $('#cta').addClass('app-info-drag-transition').removeAttr('style');
    $('.circle-mask').css('animation', 'initial');
    $('#app-icon , .app-info-text, #cta').removeClass('app-info-drag-transition');
    clearTimeout(resizeTimeout1);
    clearTimeout(resizeTimeout2)

    resizeTimeout1 = setTimeout(function() {
        $('.circle-mask').removeAttr('style');
    }, 10)

    resizeTimeout2 = setTimeout(function() {
        $('#cta').css('animation', 'pulse 2s ease-in-out infinite 1s');
        $('.app-info-text , .star-rating , #app-icon').css('animation', 'initial');
        $('#app-icon').css({ 'transform': 'scale(1) translate(-50%)' });
    }, 1000)

    resetAppInfo(1000);
}

function resizeText(elem) {
    elem.style.fontSize = null;
    var unitType = ((window.innerHeight > window.innerWidth) ? 'vw' : 'vh');
    var newsize = adjustFontSize(elem) + unitType;
    // console.log(newsize);
    elem.style.fontSize = newsize;
}

function adjustFontSize(elem) {
    var newfontSize;
    var minimumSize = .7;
    $(elem).addClass('stopWrapping')
    // console.log(elem);
    var parent = elem.parentElement;
    var currentWidth = elem.offsetWidth;
    var currentFontSize = parseFloat(getStyle(elem, 'fontSize'));

    if (window.innerHeight > window.innerWidth) {
        currentFontSize = currentFontSize / document.body.offsetWidth * 100;
    } else {
        currentFontSize = currentFontSize / document.body.offsetHeight * 100;
    }
    // console.log(currentFontSize);


    var rect = elem.getBoundingClientRect();
    var parentRect = parent.getBoundingClientRect();

    var divOffset = rect.left - parentRect.left;

    if (currentWidth > parent.offsetWidth * .95 || currentWidth + divOffset > parent.offsetWidth * .95) {
        var percentage;
        // console.log('bigger');
        if (currentWidth > parent.offsetWidth * .95) {
            percentage = parent.offsetWidth / currentWidth;
        } else {
            percentage = parent.offsetWidth / (currentWidth + divOffset);
            // console.log(percentage)
        }

        if (currentFontSize * percentage > currentFontSize * minimumSize) {
            newfontSize = currentFontSize * percentage * .90;
        } else {
            $(elem).addClass('truncate')
        }
        // console.log(newfontSize);
    }
    $(elem).removeClass('stopWrapping')
    return newfontSize;
}

function ctaClick(e) {
    addClass(cta, 'clicked')
}
window.addEventListener('resize', function() {
    resetTransitions();
})


window.addEventListener('resize', function() {
    updateCSS();
}, true);

function resetTransitions() {
    $('.transition').each(function(index) {
        var elem = this;
        $(elem).addClass('blockTransition');
        setTimeout(function() {
            $(elem).removeClass('blockTransition');
        }, 10);
    });
}