"use strict";
var sum = function (x, y) { return x + y; };
function printResult(opr, x, y) {
    var result = opr(x, y);
    console.log("result is " + result);
}
printResult(sum, 8, 11);
printResult(function (x, y) { return x - y; }, 15, 2);
printResult(sum, 100, 20);
