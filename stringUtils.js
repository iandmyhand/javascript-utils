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
 	"Abc".langCheck('en'); // true
 	"A b   c".langCheck('en'); // true
 	" ".langCheck('en'); // true
 	"Abc*".langCheck('en'); // false
 	")(".langCheck('en'); // false
 	"ㄱㅁㄴ".langCheck('en'); // false
 	"aㄲ".langCheck('en'); // false
 	"".langCheck('en'); // false

 	"가나다".langCheck('ko'); // true
 	"ㄱㄴㄷ".langCheck('ko'); // true
 	"ㄱㄴ  ㄷ  ".langCheck('ko'); // true
 	" ".langCheck('ko'); // true
 	")(".langCheck('ko'); // false
 	"abc".langCheck('ko'); // false
 	"aㄲ".langCheck('ko'); // false
 */
String.prototype.langCheck = function(lang) {
	if (0 >= this.length) {
		return false;
	}
	if("ko" === lang) {
		return !/([^가-힣ㄱ-ㅎㅏ-ㅣ\s])/g.test(this);
	} else if ("en" === lang) {
		return !/[^A-Za-z\s]/g.test(this);
	} else {
		throw "Not supported language code.";
	}
}
