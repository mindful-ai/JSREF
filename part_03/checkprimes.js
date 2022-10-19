function checkprime(x){
    var prime = true;
    for(i = 2; i < x;i++){
        if(x % i == 0) { 
            prime = false; 
        }
    }
    return prime;
}

// ---------------------------------------------

const start  = 100;
const end    = 200;
var   primes = [];
for(i = start; i <= end; i++){
    if(checkprime(i) == true){
        primes.push(i);
    }
}

console.log('Prime Numbers between ' + start + ' and ' + end + ':');
console.log(primes);