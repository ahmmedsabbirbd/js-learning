
function sum(numbers) {
    if(typeof(numbers) !== 'object') {
        return 'Please provide object';
    }

    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }
    
    return sum;
}

console.log(sum([2, 4, 6, 2, -16]));