var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // var blinkyDancer = new makeBlinkyDancer(top, left, timeBetweenSteps);
  //console.log(this.$node);
  
  // this.callCount = 0;

  // debugger;
  //this.$node = $('<span class="dancer"></span>');
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  var oldStep = this.step;
  makeDancer.prototype.step.call(this);
  // oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  //debugger;
  console.log('this is', this);
  this.$node.toggle();
  //this.callCount++;

  // console.log(this.callCount);
};


// var blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);


// console.log(blinkyDancer.step.callCount)