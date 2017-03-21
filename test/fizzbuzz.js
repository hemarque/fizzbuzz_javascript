'use strict';

var fizzbuzz = function(number){
	return number;
}

var assert = require('assert');

describe('FizzBuzz kata', function(){
	it('should return 1 when 1', function(){
		assert.equal(1, fizzbuzz(1));
	});
	it('should return 2 when 2', function(){
		assert.equal(2, fizzbuzz(2));
	});

});