String.prototype.hasVowels = function() {
	let regex = /[aeiou]/gi;
    return(regex.test(this)) ? true : false;	
	};

String.prototype.isQuestion = function() {
	let regex = /\?$/;
    return(regex.test(this)) ? true : false;	
	};

String.prototype.toUpper = function() {
		

	};

String.prototype.toLower = function() {
		

	};

String.prototype.ucFirst = function() {
		

	};

String.prototype.words = function() {
		

	};

String.prototype.wordCount = function() {
		

	};

String.prototype.inverseCase = function() {
		
	};

String.prototype.alternatingCase = function() {
		

	};

String.prototype.numberWords = function() {
		

	};

String.prototype.isDigits = function() {
		

	};

String.prototype.toCurrency = function() {
		

	};

String.prototype.fromCurrency = function() {
		

	};


module.exports = String