function isPrime(value){
    if(value<0)
        value*=-1;
    if(value<2)
        return false;

    for(let i=2;i<value;i++)
        if(value%i==0)
            return false;

    return true;
}

console.log('isPrime(5)',isPrime(5));
console.log('isPrime(9)',isPrime(9));

console.log('isPrime(83)',isPrime(83));


