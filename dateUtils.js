/**
 * usage:
        unixTimestampFormat("1450076233", "%Y.%M.%d") == "2015.12.14"
 */
var unixTimestampFormat = function(unixTimestamp, formatString) {
    var date = new Date(unixTimestamp * 1000);
    function pad(value) {
        return (value.toString().length < 2) ? '0' + value : value;
    }
    return formatString.replace(/%([a-zA-Z])/g, function (_, formatStringCode) {
        switch (formatStringCode) {
        case 'Y':
            return date.getUTCFullYear();
        case 'M':
            return pad(date.getUTCMonth() + 1);
        case 'd':
            return pad(date.getUTCDate());
        case 'H':
            return pad(date.getUTCHours());
        case 'm':
            return pad(date.getUTCMinutes());
        case 's':
            return pad(date.getUTCSeconds());
        default:
            throw new Error('Unsupported format code: ' + formatStringCode);
        }
    });
}
