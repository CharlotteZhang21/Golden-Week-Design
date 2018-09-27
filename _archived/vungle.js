function getStyle(el, cssprop) {
    if (el.currentStyle) // IE & Opera
        return el.currentStyle[cssprop];
    else if (document.defaultView && document.defaultView.getComputedStyle) // Gecko & WebKit
        return document.defaultView.getComputedStyle(el, '')[cssprop];
    else // try and get inline style
        return el.style[cssprop]; // XXX I have no idea who is using that
}

function addClass(el, className) {
    if (!(el instanceof HTMLDivElement)) {
        el = document.getElementById(el);
    }

    if (el.classList) {
        el.classList.add(className);
    } else if (!hasClass(el, className)) {
        el.className += " " + className;
    }
}

function removeClass(el, className) {
    if (!(el instanceof HTMLDivElement)) {
        el = document.getElementById(el);
    }

    if (el.classList) {
        el.classList.remove(className);
    } else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

function hasClass(el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    } else {
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
}

function capitalise(word) {
    return word[0].toUpperCase() + word.substr(1);
}

window.addEventListener('resize', function() {
    resetTransitions();
    resizeText(document.getElementById('ad-title'));
})

function orientationCheck() {
    if (window.innerHeight > window.innerWidth) {
        return 'portrait';
    } else {
        return 'landscape';
    }
}


function callSDK(s) {
    parent.postMessage('download','*')
}

function revealCloseButton() {
    document.getElementById('vungle-close').className = '';
}