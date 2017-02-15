var Fred = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps); // this allows BlinkyDancer to obtain all Dancer properties
  

  // debugger;
  //this.$node = $('<span class="dancer"></span>');
};
Fred.prototype = Object.create(makeDancer.prototype);
Fred.prototype.constructor = Fred;
Fred.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  // var oldStep = this.step;
  makeDancer.prototype.step.call(this); //this refers to makeDancer
      //setTimeOut is invoked
  // console.log('this is', this);

  this.$node.addClass('animated blinky tada infinite');

};
