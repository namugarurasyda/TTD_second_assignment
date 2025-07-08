import {assert} from 'chai';
import { factorial } from '../factorial.js';

describe('factorial', function(){


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


  it('Factorial of a negative returns an error', function() {
    assert.throws(() => factorial(-1), Error, "factorial is not defined for negative numbers");
  });
});






