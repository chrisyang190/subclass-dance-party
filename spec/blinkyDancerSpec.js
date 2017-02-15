describe('blinkyDancer', function() {

  var blinkyDancer, clock, marcus;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    //debugger;
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
    //marcus = new Marcus(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('makeBlinkyDancer.prototype.step should be a function ', function() {
    expect(makeBlinkyDancer.prototype.step).to.be.instanceof(Function);
  });

  it('this.positionLeft and this.positionTop should be numbers', function() {
    expect(this.positionLeft).to.be.a.number;
    expect(this.positionTop).to.be.a.number;
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(marcus.$node, 'flip');
  //   marcus.step();
  //   expect(marcus.$node.addClass.called).to.be.true;
  // });




  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      //debugger;
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
       // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);

      // console.log(blinkyDancer.step.callCount);
      expect(blinkyDancer.step.callCount).to.be.equal(1);
      // console.log(blinkyDancer.step.callCount);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
