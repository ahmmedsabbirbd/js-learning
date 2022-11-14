const numbers = [2, 3, 4, 5, 5];

// console.log(numbers);
// only value show
// console.log(...numbers);

const maxNumber = Math.max(...numbers);
// console.log(maxNumber, numbers);

const numbers2 = numbers;
const numbers3 = [...numbers, 33];
numbers.push(200);

console.log(numbers, numbers2, numbers3);