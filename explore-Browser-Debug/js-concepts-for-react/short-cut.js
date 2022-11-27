//'sabbir', 5, true, {}, []
// '', 0, false, null, undifined

const mony = 5550;
const hup = true;
// ternary
const picnic = mony>98 ? 'yeah' : 'na';
console.log(picnic);

const modKhabo = (mony > 1000 && hup) ? 'hobe kela' : 'na re';
console.log(modKhabo);

//  numb to string
const num1 = 2;
const stringNum1 = num1 + '';
console.log(num1, stringNum1);

// string to num
const num2 = '2';
const numStrint = +num2;
console.log(num2, numStrint);

// function show condition
let isTrue = false;
const showData = ()=> console.log('show user');
const hideData = ()=> console.log('hide user');
isTrue ? showData() : hideData();
// left is ture then right is show
isTrue && showData();
// left side is false then show
isTrue || hideData();

// value suice abvale
isTrue = !isTruel; 