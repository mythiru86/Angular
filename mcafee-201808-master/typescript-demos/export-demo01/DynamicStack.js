"use strict";
//import {IStack} from './IStack'
exports.__esModule = true;
///<reference path='./IStack.ts' />
var DynamicStack = /** @class */ (function () {
    function DynamicStack() {
        this.elements = [];
        this._count = 0;
    }
    DynamicStack.prototype.push = function (item) {
        this.elements.push(item);
        this._count++;
    };
    DynamicStack.prototype.pop = function () {
        if (this.count() == 0)
            throw new Error('Underflow Exception');
        return this.elements[--this._count];
    };
    DynamicStack.prototype.count = function () {
        return this._count;
    };
    DynamicStack.prototype.isEmpty = function () {
        return this._count == 0;
    };
    DynamicStack.prototype.toString = function () {
        var str = 'Stack[\t';
        for (var i = 0; i < this._count; i++) {
            str = "" + str + this.elements[i] + "\t";
        }
        str = str + "]";
        return str;
    };
    return DynamicStack;
}());
exports.DynamicStack = DynamicStack;
