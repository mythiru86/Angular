//import {IStack} from './IStack';
//import {DynamicStack} from './DynamicStack';
///<reference path='IStack.ts' />
///<reference path='DynamicStack.ts' />
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
var strStack = new DynamicStack();
testStack(strStack, 'India', 'USA', 'UK', 'France');
