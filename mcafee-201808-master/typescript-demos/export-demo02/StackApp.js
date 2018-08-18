define("IStack", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("DynamicStack", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
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
});
define("StackApp", ["require", "exports", "DynamicStack"], function (require, exports, DynamicStack_1) {
    "use strict";
    exports.__esModule = true;
    function testStack(stack) {
        var testData = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            testData[_i - 1] = arguments[_i];
        }
        console.log('pushing given values...');
        for (var _a = 0, testData_1 = testData; _a < testData_1.length; _a++) {
            var data = testData_1[_a];
            stack.push(data);
        }
        console.log('after push', stack.toString());
        while (stack.count() > 0)
            console.log('popped', stack.pop());
    }
    var strStack = new DynamicStack_1.DynamicStack();
    testStack(strStack, 'India', 'USA', 'UK', 'France');
});
