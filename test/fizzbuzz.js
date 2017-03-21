'use strict';



var fizzbuzz = function(number){
	if (isFizz(number)){
		return 'Fizz';
	}else{
		return number;
	}
}

var isFizz = function(number){
	return number%3==0;
}

var assert = require('assert');

describe('FizzBuzz kata', function(){
	it('should return 1 when 1', function(){
		assert.equal(1, fizzbuzz(1));
	});
	it('should return 2 when 2', function(){
		assert.equal(2, fizzbuzz(2));
	});
	it('should return Fizz when 3', function(){
		assert.equal(fizzbuzz(3), 'Fizz');
	});
});