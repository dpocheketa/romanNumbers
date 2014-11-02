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

	describe('when input "10"', function(){
		it('should return "X"', function(){
			expect(toRoman(10)).toEqual("X");
		});
	});

	describe('when input "7"', function(){
		it('should return "VII"', function(){
			expect(toRoman(7)).toEqual("VII");
		});
	});

	describe('when input "17"', function(){
		it('should return "XVII"', function(){
			expect(toRoman(17)).toEqual("XVII");
		});
	});

	describe('when input "89"', function(){
		it('should return "LXXXIX"', function(){
			expect(toRoman(89)).toEqual("LXXXIX");
		});
	});

	describe('when input "689"', function(){
		it('should return "DCLXXXIX"', function(){
			expect(toRoman(689)).toEqual("DCLXXXIX");
		});
	});

	describe('when input "2084"', function(){
		it('should return "MMLXXXIV"', function(){
			expect(toRoman(2084)).toEqual("MMLXXXIV");
		});
	});

	describe('when input number more then 3000', function(){
		it('should thrown error', function(){
			expect(function(){toRoman(3001)}).toThrow();
		});
	});

});