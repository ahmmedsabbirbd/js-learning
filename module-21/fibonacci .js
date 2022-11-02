/*** Fibonacci function */
function fibo(number) {
    for(let i = 2; i <= 10; i++) {
        number[i] = number[i - 1] + number[i - 2];
    }
    return number;
}

console.log(fibo([1, 2]));