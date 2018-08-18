//import {IStack} from './IStack';
//import {DynamicStack} from './DynamicStack';

///<reference path='IStack.ts' />
///<reference path='DynamicStack.ts' />


function testStack<T>(stack:IStack<T>, ... testData:T[]):void{

console.log('pushing given values...');
for(let data of testData)
    stack.push(data);

console.log('after push', stack.toString());

while(stack.count()>0)
    console.log('popped', stack.pop());
}


let strStack=new DynamicStack<string>();

testStack(strStack, 'India','USA','UK','France');
