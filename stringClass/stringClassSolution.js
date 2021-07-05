String.prototype.hasVowels = function() {
	let regex = /[aeiou]/gi;
    return(regex.test(this)) ? true : false;	
};


String.prototype.isQuestion = function() {
	let regex = /\?$/;
    return(regex.test(this)) ? true : false;	
};


String.prototype.toUpper = function() {
	let result = "";
    for(let i = 0; i < this.length; i++){
        let ch = this.charAt(i);
        if(ch >= 'a' && ch <= 'z'){
            result += String.fromCharCode(this.charCodeAt(i) - 32);
        }else{
            result += ch; 
        }
    }
    return result;	
};


String.prototype.toLower = function() {
	let result = "";
    for(let i = 0; i < this.length; i++){
        let ch = this.charAt(i);
        if(ch >= 'A' && ch <='Z'){
            result += String.fromCharCode(this.charCodeAt(i) + 32);
        }else{
            result += ch; 
        }
    }
    return result;	
};


String.prototype.ucFirst = function() {
	return this[0].toUpper() + this.slice(1);	
};


String.prototype.words = function() {
	let regex = /\w+-*\w*/g;
    return this.match(regex);	
};


String.prototype.wordCount = function() {
	return this.words().length;
};


String.prototype.inverseCase = function() {
	let output = "";
    for (let index = 0; index < this.length; index++){
        if(this[index] === this[index].toLower()){
            output += this[index].toUpper();
        } else {
            output += this[index].toLower();
        }
    }
    return output;	
};


String.prototype.alternatingCase = function() {
	let strSplitted = this.toLowerCase().split('');
    for (let index = 1; index < strSplitted.length; index += 2){
        strSplitted[index] = strSplitted[index].toUpperCase();
    }
    return strSplitted.join('');	
};


String.prototype.numberWords = function() {
	let splittedStr = this.split('');
    let obj = {'0': 'zero', '1': 'one', '2': 'two', '3': 'three', 
    '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', 
    '9': 'nine'}
    let output = [];
    for(let element of splittedStr){
        for (let key in obj){
            if (element === key){
                output.push(obj[key]);
            }
        }
    }
    return output.join(' ');	
};


String.prototype.isDigit = function() {
	let regex = /^[\d]{1}$/;
    return(regex.test(this)) ? true : false;	
};


String.prototype.toCurrency = function() {
	var currencyObj = parseFloat(this).toFixed(2);
	var expression = new RegExp('(\\d)(?=(\\d{3})+\\.)', 'g');
	return (currencyObj.replace(expression, '$1,'));	
};


String.prototype.fromCurrency = function() {
	return Number(this.replace(/,/g, ''));	
};


module.exports = String