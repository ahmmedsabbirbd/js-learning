// object 
let person = {
    firstName:'Sabbir',
    lastName:'Ahmmed',
    fullName: function() {
        return this.firstName + this.lastName;
    }
}

// // tow type acces
// console.log(person.firstName) // dot notetion
// console.log(person['lastName']) // brakect notetion
// console.log(person.fullName()); // method call
// console.log(person);

// object er key value return
const keys = Object.keys(person); // only return key
const value = Object.values(person); // only return value
const keysValue = Object.entries(person); // keys and value return


// console.log(keys);
// console.log(value);
// console.log(keysValue);

// // for in loop in object er upor
// for(const key in person) {
//     console.log(`${key} =======>`+ person[key]);
// }

// array discructing
const names = ['sabbir', 'ahmmed'];
const [fn, ln] = names;
// console.log(fn);

// objects discructing
const yourName = {
    yfn: 'sabbir',
    yln: 'ahmmed'
};
const {yfn, yln} = yourName;
// console.log(ln);

// spread an array into another array
const array1 = [12, 23, 3413];
const array2 = [32342, 2131321, 3, 3413];

const fullyArray = [...array1, ...array2];
// console.log(fullyArray);


// speed operator
function sum(a, b, c, d) {
    return a + b + c + d;
}
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(sum(...numbers));


// copy array
const oldNumber = [1, 2, 3, 4, 5, 6, 7];
const newNumber = [...oldNumber];
newNumber.push(32);
console.log(oldNumber);
console.log(newNumber);


// combine object //  jog duita object
const oldObject = {a: 2, b: 3};
const newObject = {c: 2, d: 3};
const oldNewObject = {...oldObject, ...newObject};
console.log(oldNewObject);

// create new array from old array copy
const orinalArray = [3, 22];
const newArray = [...orinalArray, 32, 21];
console.log(newArray);


// clone oobject
const oldObject1 = {a: 2, b: 3};
const coppyObject = {...oldObject1, c: 23};
console.log(coppyObject);

// accept any number of array
function sum(...numbers) {
    return numbers.reduce((oldValue, newValue) => oldValue + newValue, 0); // 0 means default old value
}

console.log(sum(21, 1));

// string method
// search me
let str = "Hellow, World";
// console.log(str.charAt(1));

// date methods
let today = new Date();
// console.log(today.getDate());

// math function

// nije sikhe nite hobe

// GET request:
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(res=> res.json())
.then(data=> console.log(data))
.catch(error => console.log(error));

// Post request
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));