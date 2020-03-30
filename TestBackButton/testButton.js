$(document).ready(function () {

    $(".popup-btn").click(function () {
        location.hash = "popup";
        $(".popup-panel").show();
    });

});

$(window).bind('hashchange', function () {

    if (location.hash == null || location.hash == "") {
        //cookie donde registra que se cerró el pop up por parte del usuario.
        $(".popup-panel").hide();
    }

});