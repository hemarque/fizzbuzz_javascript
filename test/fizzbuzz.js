'use strict';

var fizzbuzz = function(number){
	if(isFizz(number) && isBuzz(number)){
		return 'FizzBuzz';
	}
	
	if (isFizz(number)){
		return 'Fizz';
	}
	if(isBuzz(number)){
		return 'Buzz';
	}
	return number;
}

var isFizz = function(number){
	return number%3==0;
}

var isBuzz = function(number){
	return number%5==0;
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
	it('should return Buzz when 5', function(){
		assert.equal(fizzbuzz(5), 'Buzz');
	});
	it('should return FizzBuzz when 15', function(){
		assert.equal(fizzbuzz(15), 'FizzBuzz');
	});
});