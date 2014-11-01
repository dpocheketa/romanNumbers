describe("toRoman converter", function(){
	it("should be defined", function(){
		expect(toRoman).toBeDefined();
	});

	it('should be a function', function(){
		expect(toRoman).toEqual(jasmine.any(Function));
	});

	describe('when input "1"', function(){
		it('should return "I"', function(){
			expect(toRoman(1)).toEqual("I");
		});
	});

	describe('when input "5"', function(){
		it('should return "V"', function(){
			expect(toRoman(5)).toEqual("V");
		});
	});
});