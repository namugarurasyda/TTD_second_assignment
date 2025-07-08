//Written by Namugarura Syda & Conrad Waako
import {assert} from 'chai';
//we import factorial function from factorial file
import { factorial } from '../factorial.js';

describe('factorial', function(){
//run simple tests on the factorial method 

  it('Factorial of 0 returns 1', function(){
        assert.equal(factorial(0), 1)
    
 })

  it('Factorial of 1 returns 1', function() {
    assert.equal(factorial(1), 1);
  });

  it('Factorial of 2 returns 2', function() {
    assert.equal(factorial(2), 2);
  });

  it('Factorial of 3 returns 6', function() {
    assert.equal(factorial(3), 6);
  });

  it('Factorial of 4 returns 24', function() {
    assert.equal(factorial(4), 24);
  });

//running a test with a larger number
//e.g it('Factorial of 1200..would take too much, having 3,176 digits

  //taking care of negative numbers
  it('Factorial of a negative returns an error', function() {
    assert.throws(() => factorial(-1), Error, "factorial is not defined for negative numbers");
  });
});
