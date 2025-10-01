/*
Miniport by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

  var $window = $(window),
      $body = $('body');

  // Breakpoints.
  breakpoints({
    xlarge: [ '1281px', '1680px' ],
    large:  [ '981px',  '1280px' ],
    medium: [ '737px',  '980px'  ],
    small:  [ null,     '736px'  ]
  });

  // Play initial animations on page load.
  $window.on('load', function() {
    window.setTimeout(function() {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Scrolly with dynamic offset
var getOffset = function () {
  return (window.matchMedia('(max-width: 980px)').matches) ? 64 : 100;
};
$('.scrolly').scrolly({
  speed: 1000,
  offset: function() {
    return (window.matchMedia('(max-width: 980px)').matches) ? 64 : 100;
  }
});



})(jQuery);
