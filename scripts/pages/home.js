/**
*  home.js
*  Requires: jQuery
*  Copyright 2016 Ph.Creative
*  Some core common js functions (usage based on html classes)
**/
"use strict"; 

$(document).ready(function () { 

    // single item carousel
    var singleCarousel = $('.js-single-carousel');

    if ($(singleCarousel).length) {
        $(singleCarousel).owlCarousel({
            navigation: false,
            pagination: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true
        });  
    }

    // mobile only carousel
    var mobileCarousel = $('.js-mobile-carousel');

    if ($(mobileCarousel).length) {
        $(window).resize(function () {
            var owl = $(mobileCarousel).data('owlCarousel');
            if (Modernizr.mq('(max-width:767px)') && !owl) {
                $(mobileCarousel).owlCarousel({
                    navigation: false,
                    pagination: true,
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    singleItem: true
                });
            } else if (Modernizr.mq('(min-width:768px)') && owl) {
                owl.destroy();                       
            } 
        }).trigger('resize');
    }

});

