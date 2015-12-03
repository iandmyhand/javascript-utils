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
}
