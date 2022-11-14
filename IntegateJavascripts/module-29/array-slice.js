const numbers = [1, 2, 3, 4, 5, 6, 7];

// slice
const numbersSlice = numbers.slice(2, 3);

// splice
// const numbersSplice = numbers.splice(2, 3);

// splice
const numbersSplice2 = numbers.splice(2, 1, 12);

console.log(numbersSplice2);
console.log(numbers);