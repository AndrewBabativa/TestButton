history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=2");
history.back();
history.go(1); 

var initial = false;
location.hash = "";

$(document).ready(function () {
   
    $(".popup-panel").show();
    $(".popup-panel").focus();
});

window.onpopstate = function (event) {
    if (location.hash == "#1" && initial == false) {
        initial = true;
        var hash_current = parseInt(location.hash.substr(1, 1)) + 1;
        window.location.hash = hash_current;

    }
    else if (initial == false) {
        window.location.hash = "1";
    }
    else
    {
        window.location.hash = "3";
    }
};


$(window).bind('hashchange', function () {

    if (location.hash == "#3") {
        //cookie donde registra que se cerró el pop up por parte del usuario.
        $(".popup-panel").hide();
    }
});
