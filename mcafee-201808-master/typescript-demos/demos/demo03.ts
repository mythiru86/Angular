
let sum=(x, y) => x+y;

function printResult(opr,x,y){
    let result= opr(x,y);
    console.log(`result is ${result}`);
}

printResult(sum,8,11);


printResult((x,y)=>x-y, 15,2);


printResult(sum,100,20);