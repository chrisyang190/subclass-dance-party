// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  //var dancer = {};
  // use jQuery to create an HTML <span> tag
  
  
  // this.step = function () {
  //   setTimeout(this.step, timeBetweenSteps);

  // };
  // this.step();
  // // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // // this one sets the position to some random default point within the body
  // this.setPosition = function (top, left) {
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  // this.callCount = 0;
  // this.$node = $('<span class="dancer"></span>');
  //   this.$node.css(styleSettings);
  // };
  // this.setPosition(top, left);
  makeDancer.prototype.step();
  makeDancer.prototype.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  var timeBetweenSteps = this.timeBetweenSteps;
  //var thisObj = this;
  // console.log('thisObj', thisObj);
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  setTimeout(this.step, timeBetweenSteps);
  //this.callCount++;
  
};

makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node = $('<span class="dancer"></span>');
  this.$node.css(styleSettings);

};
