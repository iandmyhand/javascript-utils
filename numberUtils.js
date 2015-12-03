/**
 * new Number(0).format() == "0"
 * new Number(1234).format() == "1,234"
 * new Number(1234567890).format() == "1,234,567,890"
 * new Number(-1234567890).format() == "-1,234,567,890"
 * new Number(1234567890.123456789).format() == "1,234,567,890.1234567"
 * new Number(-1234567890.123456789).format() == "-1,234,567,890.1234567"
 *
 * Also, you can use variable.
 * var n = 1234567890.123456789; n.format(); == "1,234,567,890.1234567"
 */
Number.prototype.format = function(){
    if(this == 0) return "0";
    var reg = /(^[+-]?\d+)(\d{3})/,
        n = (this + '');
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
    return n;
};
