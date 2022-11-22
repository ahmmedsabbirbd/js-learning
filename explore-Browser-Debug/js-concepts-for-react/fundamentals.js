// 1. declear let and const
const fotherName = 'morsid';
let year = 2022;
year = 2023;

// 2. 6 condition: >,<, ===, !==, <=, =>
// multiple condition: &&, || 
if (6 === 3 || 2022 == year) {
    console.log('Now fifa');
} else if( 1 === 1) {
    console.log(1)
} else {
    console.log('else');
}

// 3. array
// index, length, push, 
const numbers = [1, 2, 3, 4, 5];

// 4. for loop
for(let i = 0; i > 10; i++) {
    console.log(i);
}

// 5. function
function multiply(a, b){
    return a * b;
}
const output = multiply(3, 2);

// method 2
const multiply1 = (a, b) => {
    return a * b;
}
// method 3
const multiply2 = (a, b) => a * b;
console.log(output, multiply1(3, 2), multiply2(3, 2));

// 9. object
const student = {
    name: 'sabbir',
    age: 10
}

// 3 way to access property
console.log(student.age); //direct by proerty
console.log(student['age']); // access via property name string
const myAge = 'age';
console.log(student[myAge]); // access via property name vairable