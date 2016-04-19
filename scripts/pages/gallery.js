/**
*  home.js
*  Requires: jQuery
*  Copyright 2016 Ph.Creative
*  Some core common js functions (usage based on html classes)
**/
"use strict";

$(document).ready(function () {

    //lightbox: image
    var imageLightbox = $('.js-image-lightbox');

    if ($(imageLightbox).length) {
        $(imageLightbox).magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            tLoading: 'Loading image #%curr%...',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title');
                }
            }
        });
    }

    //lightbox: video
    var videoLightbox = $('.js-video-lightbox');

    if ($(videoLightbox).length) {
        $(videoLightbox).magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            tLoading: 'Loading video #%curr%...',
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            }
        });

    }

});

