/*** Fibonacci function */
function fibo(number, nth) {
    if(typeof(nth) !== 'number') {
    }
    
    if(nth < 2 ) {
        return 'Please give a 2 & 2+ number';
    }

    for(let i = 2; i < nth; i++) {
        number[i] = number[i - 1] + number[i - 2];
    }
    return number;
}

console.log(fibo([1, 2], 2));