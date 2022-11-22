const numbers = [1, 2, 3, 4, 5];
const student = {
    name: 'sabbir',
    age: 10,
    subject: ['math', 'bangla']
};

// 1. template string
const about = `My name ${student.name}. And my age ${student.age}. My subject ${student.subject[0]}`;
console.log(about);

// 2. arrow function
const getFiveNumber = () => 5;
const addFive = numbers => numbers + 5;
const isEven = x => x % 2 == 0;
const addThreeNumber = (a, b, c) => a + b + c;
const doMath = (a, b) => {
    let sum = 0;
    sum = a + b;

    return(sum);
}

console.log(doMath(1, 1))

// 3. spread operator
//array duplicate
const newNumbers = [...numbers];
numbers.push(99);
const currentNumber = [...newNumbers, 21, 31, 'ki re'];

console.log(numbers, newNumbers, currentNumber);