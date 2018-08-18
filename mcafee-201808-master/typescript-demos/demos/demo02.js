"use strict";
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.toString = function () {
        return "Point(" + this.x + "," + this.y + ")";
    };
    Point.prototype.distance = function (p2) {
        var dx = this.x - p2.x;
        var dy = this.y - p2.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    return Point;
}());
var p1 = new Point(3, 4);
var origin = new Point();
console.log("distance between " + p1 + " and " + origin + " is " + p1.distance(origin));
