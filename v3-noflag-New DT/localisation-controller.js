var language = getDeviceLang();

function getDeviceLang() {

    var lang;
    if (navigator.userLanguage) {
        lang = navigator.userLanguage;
        if(lang.indexOf('zh') == -1)
            lang = lang.split("-")[0].toLowerCase();
    } else if (navigator.language) {
        lang = navigator.language;
        if(lang.indexOf('zh') == -1)
            lang = lang.split("-")[0].toLowerCase();
    } else {
        lang = "en";
    }

    return lang;
}

$('.localised-text').each(function(index) {
    if (typeof localisation !== 'undefined') {
        var phrase = $(this).attr('data-localisation');
        if (typeof localisation[phrase] !== 'undefined' && typeof localisation[phrase][language] !== 'undefined')
            $(this).html(localisation[phrase][language]);
        else
            $(this).html(localisation[phrase]['en']);
    }
});