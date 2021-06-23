// PART ONE
var studentName = ['Sabbir Ahmmed', 'Shorif Ahmmed', 'Samin Ahmmed', 'Sojol Ahmmed', 'Demmha'];

console.log(studentName[0]);
var addStudent = studentName.length;
studentName[addStudent] = 'rohim';
var lastName = studentName.length-1;
console.log(studentName[lastName]);

// PART TOW 
color = ['red', 'blue', 'green', 'yellow', 'prink'];

color.push('white');
color.push('black');
color.unshift('darkblack');
color.shift();
color.pop();
console.log(color);
var lastColor = color.length-1;
console.log(color[lastColor]);
console.log(color.length);

// PART THREE
var male = ['Sabbir', 'Bonna', 'Elias', 'riyad', 'Sokal'];
var female = ['borsha', 'rotna', 'nodi', 'sadia'];

var removeFemale = male.pop();
var removeFname = male[1];
female.push(removeFemale,removeFname);
// delete(male[1]);
male.splice(1,1);
console.log(male);
console.log(female);

// PART THREE
var daysName = [
	'sunday',
	'monday',
	'tuesday',
	'wednessday',
	'thusday',
	'friday',
	'satarday',
];
// var daysSlice = daysName.slice(1,4);
console.log(daysName/*,daysSlice*/);

// var dayslength = daysName.length;
// var last3length = dayslength - 3;
// var last3print = daysName.slice(last3length,dayslength);
// console.log(last3print);

var last3print = daysName.slice(-4,-1);
console.log(last3print);

// PART THREE SIX
var manDetails = [
	'Sabbir Ahmmed',
	'Fulbari',
	'Fulbari Model Hight School',
	'Bad student',
];

// var usesplice = manDetails.splice(0,3);
var reverssplice = manDetails.splice(-3,1);

console.log(manDetails,reverssplice);

// PART SEVEN & shallo coppy and deep coppy use it
var daysName = [
	'sunday',
	'monday',
	'tuesday',
	'wednessday',
	'thusday',
	'friday',
	'satarday',
];

var coppyDays = daysName.slice();
console.log(daysName,coppyDays);

// PART EIGHT & MERGE ARRAY
var name = [
	'sabbir',
	'sakil',
	'sohan',
	'sumon',
]

var age = [
	18,
	21,
	19,
	32,
]

var address = [
	'Fulbari',
	'Walia',
	'Walia',
	'Walia',
]

var inpormation = name.concat(age,address);

console.log(inpormation);

// externlink
const pritice = [
  {
	name: "Block quote",
	pattern: /> ?((\w|\d|=| |>|<|-{0,2}|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|;){0,})\n/g,
	replacement: "<div class='quote'>$1</div>"
  },
  {
	name: "H6",
	pattern: /#{6} ((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|\\|`)+)\n/g,
	replacement: "<h6>$1</h6>"
  },
  {
	name: "H5",
	pattern: /#{5} ((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|\\|`)+)\n/g,
	replacement: "<h5>$1</h5>"
  },
  {
	name: "H1",
	pattern: /# ((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|\\|`)+)\n/g,
	replace/*ment*/: "<h1>$1</h1>"
  },
]

console.log(pritice[3].name);

// PART EIGHT & PRINT OF LOOP
var print = [
	'January',
	'February',
	'March',
	'April',
	'June',
	'July',
]

for (var i=0; i<print.length; i++) {
	console.log("Name of Mounth : "+print[i]);
}

console.log(typeof(print));
console.log(typeof(pritice[2].name));

// SIMPLE METHO PRINT OF ARRAY ELEMENT
for (i in print) {
	var mounth = print[i];
	document.write("Name of Mounth : ",mounth,"<br>");
}

// PART NINE & PRINT OF LOOP IN FRESH ARRAY
var br = "<br>";
document.write("PART NINE",br);

var fresh= [
	"sabbir",
	,
	"sakil",
	null,
	undefined,
	"sunny",
	"Demmha",
]

console.log(fresh);

var fresh_array = [];

// fresh_array.push(fresh[0]);

console.log(fresh_array);

// new fresh array procces
for (i in fresh) {
	if (fresh[i]) {
		console.log("Fresh array : ",fresh[i]);
		fresh_array.push(fresh[i],br);
	}
}

document.write(fresh_array);
/// SORT 
document.write("PART TEN & SORT",br);

var sort = [
	"Z ",
	"A ",
	"C ",
	"D ",
	"B ",
]

document.write(sort,br);
document.write(sort.sort(),br);

/// SORT FULL WORD 
var sort = [
	"zahid ",
	"pahid ",
	"ahid ",
	"Zahid ",
	"Azim ",
	"SCiyam ",
	"Diya ",
	"Bonna ",
]

document.write(sort,br);
document.write(sort.sort(),br);

/// SORT OF NUMBER 
var sort = [
	 1,2,9,3,10,30,
]

document.write(sort,br);
var n = function  (a,b) {
	return a-b
}
// var sortNumber = sortNumber(3,5);
// sortNumber(a,b);
// console.log(sortNumber);
document.write(sort.sort(n));


// PART ELEVEN & ARRAY TO STRING and STRING TO ARRAY

var a = "Hi, Everyone! I'm happy and you";
document.write(br,a,br);

var string2array = a.split(" ");
console.log(br,string2array,br);

var array2string = string2array.join(" ");
console.log(br,array2string,br);

// REVERS METHO
var name = "Sabbir Ahmmed";
var name2array = name.split("");
var reverseName = name2array.reverse("");
var reverseName = reverseName.join("");

document.write(br,name,br,reverseName);

// PART 12 & PROGRAM OF FUNNY
var text = "amar sonar bangla, ami tomay valobashi. cirodin tomay akash";
var text2word = text.split(" ");
var textallworld = text2word.length;
console.log(textallworld);
