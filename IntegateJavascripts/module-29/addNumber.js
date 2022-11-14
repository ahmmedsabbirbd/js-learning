function sumNumbers(){ 
    let sum = 0;

    for(const num of arguments) {
        sum += num;    
    }

    return sum;
}

console.log(sumNumbers(2, 3, 3, 2, 3));