// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.positionLeft = left;
  this.positionTop = top;
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps); // all 'this' keywords refer to makeBlinkyDancer
  // console.log('this ', this);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  // this.$node = $('<span class="dancer"></span>');
  this.positionLeft = left;
  this.positionTop = top;
  this.$node.css(styleSettings);
};

// makeDancer.prototype.lineUp = function() {
//   for (var i = 0; i < window.dancers.length; i++) {

//   }
// };