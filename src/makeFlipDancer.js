var Marcus = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps); // this allows BlinkyDancer to obtain all Dancer properties
  

  // debugger;
  //this.$node = $('<span class="dancer"></span>');
};
Marcus.prototype = Object.create(makeDancer.prototype);
Marcus.prototype.constructor = Marcus;
Marcus.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  // var oldStep = this.step;
  makeDancer.prototype.step.call(this); //this refers to makeDancer
      //setTimeOut is invoked
  // console.log('this is', this);
  //this.$node.addClass('flip');
  // this.$node.removeClass('dancer');
  this.$node.addClass('animated flipper flip infinite');

};