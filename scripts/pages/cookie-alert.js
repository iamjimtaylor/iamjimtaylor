"use strict";

    // Cookie Info Banner
    var cookieBar = $('#js-cookie-bar');
    var cookieName = "cookieAgree";

    if ($(cookieBar).length) {

        if ($.cookie(cookieName) === undefined) {

            $(cookieBar).removeClass("hidden")

            $('#js-cookie-agree').click(function (e) {
                e.preventDefault();
                $(cookieBar).fadeOut();
                $.cookie(cookieName, '1', { expires: 365, path: '/' });
            });
        }
    }