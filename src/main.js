$(document).ready(function () {
  $('body .topbar .addDancerButton').on('click', function() {
    var blinkyDancer = new makeBlinkyDancer(10, 40, 1000);
  });
});