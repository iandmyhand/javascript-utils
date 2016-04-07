/**
 * "10".isInteger() == true
 * "0".isInteger() == true
 * "-10".isInteger() == true
 * "10.3".isInteger() == false
 * "-10.3".isInteger() == false
 * "one".isInteger() == false
 * "10two".isInteger() == false
 */
String.prototype.isInteger = function() {
	return this % 1 === 0;
};

/**
 * "test".getPosition("t", 1) == 0
 * "test".getPosition("t", 2) == 3
 * "test".getPosition("t", 3) == -1
 */
String.prototype.getPosition = function(match, times) {
	if(0 >= times) return -1;

	var index = -1;
	for(var i=0; i<times; i++) {
		index = this.indexOf(match, index + 1);
		if(0 > index) return -1;
	}
	return index;
};

/**
 * "Title: {THIS} is {COLOR}.".replaceEach({THIS: "The Apple", COLOR: "red"}) == "Title: The Apple is red."
 */
String.prototype.replaceEach = function(matchs) {
	var result = this;
	for (index in matchs) {
		result = (result.replace(new RegExp("{" + index + "}", "g"), matchs[index]));
	}
	return result;
};

/**
 * Some browser does not support startsWith and endsWith function...
 */ 
if("undefined" === typeof(String.prototype.startsWith)) {
    String.prototype.startsWith = function(prefix) {
        return this.indexOf(prefix) === 0;
    };
}
if("undefined" === typeof(String.prototype.endsWith)) {
    String.prototype.endsWith = function(suffix) {
        if (this.length < suffix.length)
            return false;
        return this.lastIndexOf(suffix) === this.length - suffix.length;
    };
}

/**
 * Language checker.
 * Usage:
 	langCheck('Abc', 'en'); // true
 	langCheck('Abc*', 'en'); // false
 	langCheck(')(', 'en'); // false
 	langCheck('ㄱㅁㄴ', 'en'); // false
 	langCheck('aㄲ', 'en'); // false
 	langCheck(' ', 'en'); // false

 	langCheck('가나다', 'ko'); // true
 	langCheck('ㄱㄴㄷ', 'ko'); // true
 	langCheck(')(', 'ko'); // false
 	langCheck('abc', 'ko'); // false
 	langCheck('aㄲ', 'ko'); // false
 	langCheck(' ', 'ko'); // false
 */
var langCheck = function(str, lang) {
	if ("string" != typeof(str) || 0 >= str.length) {
		return false;
	}
	if("ko" === lang) {
		return !/([^가-힣ㄱ-ㅎㅏ-ㅣ])/g.test(str);
	} else if ("en" === lang) {
		return !/[^A-Za-z]/g.test(str);
	} else {
		throw "Not supported language code.";
	}
}
