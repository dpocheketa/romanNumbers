var toRoman = function(number){

	if (number >= 3000) throw new Error("To big number");

	var one = number % 10;
	var ten = Math.floor(number/10) % 10;
	var hundred = Math.floor(number/100) % 10;
	var thousend = Math.floor(number/1000) % 10;
	var result = "";

	switch (thousend) {
		case 0: result += ""; break;
		case 1: result += "M"; break;
		case 2: result += "MM"; break;
		case 3: result += "MMM"; break;
		default: result += "";
	};

	switch (hundred) {
		case 0: result += ""; break;
		case 1: result += "C"; break;
		case 2: result += "CC"; break;
		case 3: result += "CCC"; break;
		case 4: result += "CD"; break;
		case 5: result += "D"; break;
		case 6: result += "DC"; break;
		case 7: result += "DCC"; break;
		case 8: result += "DCCC"; break;
		case 9: result += "CM"; break;
		default: result += "";
	};

	switch (ten) {
		case 0: result += ""; break;
		case 1: result += "X"; break;
		case 2: result += "XX"; break;
		case 3: result += "XXX"; break;
		case 4: result += "XL"; break;
		case 5: result += "L"; break;
		case 6: result += "LX"; break;
		case 7: result += "LXX"; break;
		case 8: result += "LXXX"; break;
		case 9: result += "XC"; break;
		default: result += "";
	};

	switch (one) {
		case 0: result += ""; break;
		case 1: result += "I"; break;
		case 2: result += "II"; break;
		case 3: result += "III"; break;
		case 4: result += "IV"; break;
		case 5: result += "V"; break;
		case 6: result += "VI"; break;
		case 7: result += "VII"; break;
		case 8: result += "VIII"; break;
		case 9: result += "IX"; break;
		default: result += "";
	};

	return result;
};