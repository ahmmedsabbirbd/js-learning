function factorial(number) {
    let factorial = 1;
    for(let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }

    return factorial;
}

console.log('factorial of number 5: ', factorial(5))
console.log('factorial of number 6: ', factorial(6))
console.log('factorial of number 7: ', factorial(7))
console.log('factorial of number 8: ', factorial(8))