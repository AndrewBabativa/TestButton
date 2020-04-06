var initial = false;
var flag_back = false;

$(document).ready(function () {
    $(".popup-panel").show();
    window.location.hash = "index";
});

history.pushState({}, '');

window.onpopstate = function () {
    if (location.hash == "#index" && flag_back == false) {
        initial = true;
        window.location.hash = "home";
    }
    else if (location.hash == "") {
        $('#modalLead').modal('toggle');
        //$.cookie('ModalHide', 'true', { expires: 1 });
        flag_back == false;
    }
};

window.onhashchange = function () {
    if (location.hash == "") {
        $('#modalLead').modal('toggle');
        //$.cookie('ModalHide', 'true', { expires: 1 });
        flag_back == false;
    }
}

