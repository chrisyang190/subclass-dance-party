$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];



    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.min($("body").height() * Math.random(), 640),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function(event) {

    // var lineUp = function () {
    //   var position = 0;
    //   for (var i = 0; i < window.dancers.length; i++) {
    //     return window.dancers[i].setPosition(100, 40);
    //   }
    // };
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(300, i * 100);
    }

    // lineUp();
  });

  $('.newCohort').on('click', function(event) {

    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] instanceof Marcus) {
        var marcusLeft = window.dancers[i].positionLeft;
        var marcusTop = window.dancers[i].positionTop;
      }

    }
    for (var j = 0; j < window.dancers.length; j++) {
      if (window.dancers[j] instanceof Erik) {
        window.dancers[j].setPosition(marcusTop + 50, marcusLeft);
      }
    }

    for (var k = 0; k < window.dancers.length; k++) {
      if (window.dancers[k] instanceof Fred) {
        window.dancers[k].setPosition(marcusTop - 50, marcusLeft);
      }
    }
    for (var q = 0; q < window.dancers.length; q++) {
      if (window.dancers[q] instanceof Marcus) {
        window.dancers[q].setPosition(marcusTop - 50, marcusLeft);
      }
    }

  });

  $('body').on('mouseenter', '.bouncer', function(event) {
    console.log('clicked');
    $('.bouncer').removeClass('bounce').addClass('rubberBand');
  });

  $('body').on('mouseenter', '.flipper', function(event) {
    console.log('clicked');
    $('.flipper').removeClass('flip').addClass('rubberBand');
  });

  $('body').on('mouseenter', '.blinky', function(event) {
    console.log('clicked');
    $('.blinky').removeClass('tada').addClass('rubberBand');
  });


  $('body').on('mouseleave', '.dancer', function(event) {
    console.log('clicked');
    $('.bouncer').addClass('bounce').removeClass('rubberBand');
    $('flipper').addClass('flip').removeClass('rubberBand');
    $('blinky').addClass('tada').removeClass('rubberBand');
  });

  $('.earthquake').on('click', function(event) {
    $('.dancer').toggle();
  });
});

