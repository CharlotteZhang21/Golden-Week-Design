var isMuted = true;
var muteOpacity;

var muteFile = config.sound === 'muted' ? 'mute' : 'unmute'

$('#volume-icon').attr('src','' + muteFile + '.svg')


muteOpacity = setTimeout(function() {
    $('#volume-icon').addClass('mute-hidden');
}, 5000)

$('#video-elem').click(function() {
    console.log(isMuted)
    $('#volume-icon').removeClass('mute-hidden');
    if (isMuted) {
        $('video').prop('muted', false);
        $('#volume-icon').attr('src', 'unmute.svg')
    } else {
        $('video').prop('muted', true);
        $('#volume-icon').attr('src', 'mute.svg')
    }
    isMuted = !isMuted;
    clearTimeout(muteOpacity)
    muteOpacity = setTimeout(function() {
        $('#volume-icon').addClass('mute-hidden');
    }, 2500)
});