if (typeof config.rating !== 'undefined')
    $('.star-rating').html(returnStars(config.rating))

function returnStars(starRating) {
    starRating = parseFloat(starRating)
    if (starRating > 5)
        starRating = 5
    var floorRating = Math.floor(starRating)
    var string = '';
    for (var i = 0; i < floorRating; i++) {
        string += '<span class="footer" data-icon="i"></span>'
    }
    if (floorRating !== starRating)
        string += '<span class="footer" data-icon="j"></span>'
    return string
}

var vid = document.getElementById('video-elem');

function callSDK(s) {
    vid.pause();
    setTimeout(function() {
        return actionClicked(s);
    }, 10)
}



