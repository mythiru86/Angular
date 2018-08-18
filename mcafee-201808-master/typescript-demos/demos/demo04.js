"use strict";
function avg(x, y) {
    return (x + y) / 2;
}
function avgAll() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
        sum += value;
    }
    return sum / values.length;
}
console.log('avg(2,3)', avg(2, 3));
console.log('avgAll(2,3,5)', avgAll(2, 3, 5));
console.log('avgAll(2)', avgAll(2));
console.log('avg("hello","world")', avg("hello", "world"));
