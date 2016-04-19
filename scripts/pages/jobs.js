/**
*  home.js
*  Requires: jQuery
*  Copyright 2016 Ph.Creative
*  Some core common js functions (usage based on html classes)
**/
"use strict";

$(document).ready(function () {

    //select2 plugin

    var selectElem = $('.js-select');

    if ($(selectElem).length) {
        $(selectElem).select2({ width: 'resolve' });
    }

});

