/**
*  main.js
*  Requires: jQuery
*  Copyright 2016 Ph.Creative
*  Some core common js functions (usage based on html classes)
**/
"use strict";

$(document).ready(function () {

    // close collapse elements as another opens
    $("[data-collapse-group='collapse-group']").click(function (f) {
        f.preventDefault();
        var $this = $(this);
        $("[data-collapse-group='collapse-group']:not([data-target='" + $this.data("target") + "'])").each(function () {
            $($(this).data("target")).removeClass("in").addClass('collapse');
            $(this).addClass('collapsed');
        });
    });

    // Match heights: by row
    var matchHeight = $('.js-match-height');

    if ($(matchHeight).length) {
        $(matchHeight).matchHeight();
    }

    // Responsive Tables
    var contentTable = $('.cms-content table');

    if ($(contentTable).length) {
        $(contentTable).addClass('table table-bordered').wrap('<div class="table-responsive"></div>');
    }

    //can remove if not supporting ie9
    if (!Modernizr.input.placeholder) {
        $('[placeholder]').focus(function () {
            var input = $(this);
            if (input.val() === input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function () {
            var input = $(this);
            if (input.val() === '' || input.val() === input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    }

}); // end doc ready    