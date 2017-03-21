'use strict';

var fizzbuzz = function(number){
	return 1;
}

var assert = require('assert');

describe('FizzBuzz kata', function(){
	it('should return 1 when 1', function(){
		assert(fizzbuzz(1), 1);
	});
});