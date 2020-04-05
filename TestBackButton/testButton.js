history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=2");
history.back();
history.go(1); 

var initial = false;
var flag_back = false;

$(document).ready(function () {
   
    $(".popup-panel").show();
    $(".popup-panel").focus();
});

window.onpopstate = function (event) {
    if (location.hash == "#1" && flag_back == false) {
        initial = true;
        window.location.hash = "2";
    }
    else if (initial == false && location.hash == "") {
        initial == true
        window.location.hash = "1";
    }
    if (location.hash == "#1" && initial == true && flag_back == true)
    {
        alert('atras');
        $(".popup-panel").hide();
        flag_back == false;
    }
};


window.onhashchange = function () {
    if (location.hash == "#2") {
        flag_back = true;
    }
}

