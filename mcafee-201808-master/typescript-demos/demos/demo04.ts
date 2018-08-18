function avg(x:number,y:number){
    return (x+y)/2;
    
}

function avgAll(...values:number[]):number{
    let sum=0;
    for(let value of values){
        sum+=value;
    }
    return sum/values.length;
}

console.log('avg(2,3)',avg(2,3));

console.log('avgAll(2,3,5)',avgAll(2,3,5));

console.log('avgAll(2)',avgAll(2));

console.log('avg("hello","world")'
            ,avg("hello","world"));
