/**
*  home.js
*  Requires: jQuery
*  Copyright 2016 Ph.Creative
*  Some core common js functions (usage based on html classes)
**/
"use strict"; 

$(document).ready(function () { 

    // isotope layout

    var isotopeElem = $('#js-isotope');

    if ($(isotopeElem).length) {

        var $grid = $(isotopeElem);

        $grid.isotope({
          // options
          itemSelector: '#js-isotope > div',
          layoutMode: 'masonry'
        })

        $('.filter-button-group').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ 
            filter: filterValue 
          });
        });
    }

});