const [firstNumber, secondNumber] = [10, 11];
console.log(firstNumber, secondNumber);

// Array destructuring
const foods = {
    name: 'apple',
    price: 22,
    color: ['red', 'black']
}
const [foodColor1, foodColor2] = foods.color;
console.log(foodColor1, foodColor2);

// Array destructuring
const setArray = (a, b) => {
    return [a, b];
}
const [a, b] = setArray(1, 3);
console.log(a, b);

const {name, birthday} = {name: 'sabbir', age: 20, birthday: '27.11.2022'};
console.log(name, birthday);

const students = {
    name: 'sabbir',
    age: 20,
    subjects: [
        'math',
        'bangla',
        [
            { subSubject: ['English-1', 'English-2'] },
            { 
                subBook: {
                    funy: 'Tom and Jery',
                    extarnEducation: 'bissho biggan'
                } 
            }
        ]
    ]
}

const [favarateSubject, commonSubject, subSubjects] = students.subjects;
console.log(favarateSubject, commonSubject, subSubjects);

const [subSubject, subBook] = subSubjects;
console.log('new', subSubject, subBook);