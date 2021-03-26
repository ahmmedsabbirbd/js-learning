/// Part 4.9 
console.log("Part 4.9 And Multiple Condition");

/// Positive and Nagetive Number (program 01)
var number = 0;

if (0 == number) {
	var result = "This number 0 is Neutrol."
}else if (0 < number) {
	result = "This number " + number + " is Positive.";
} else {
	result = "This number " + number + " is Negetive.";
}
console.log(result);

/// odd and even (program 02)
number = 1;
var result;
var odd_even_result = number % 2;

if (0 == odd_even_result) {
	result = "This number " + number + " is odd";
} else {
	result = "This number " + number + " is even";
}
console.log(result);

/// move checker like pg r 13 g (program 03)
var age = 3;
var rating = "pg";

if ("pg" == rating && 3 <= age) {
	result = "You watch this movie..";
} else if ("13" == rating && 13 <= age) {
	result = "You watch this movie..";
} else if ("r" == rating && 18 <= age) {
	result = "You watch this movie..";
} else if ("g" == rating && 150 >= age) {
	result = "You watch this movie..";
} else {
	result = "You cann't watch this movie.."; 
}
console.log(result);

/// shortly  move checker like pg r 13 g (program 03.5)
age = 3;
rating = "pg";

if ( ("pg" == rating && 3 <= age) || ("13" == rating && 13 <= age) || ("g" == rating && 150 >= age) || ("r" == rating && 18 <= age) ) {
	result = "You watch this movie..";
} else {
	result = "You cann't watch this movie.."; 
}
console.log(result);

/// Age checker (program 04)
age = 300;

if (0 >= age) {
	console.log("You are Vampire........");
} else if (10 >= age ) {
	console.log("You are baby...");
} else if (17 >= age) {
	console.log("You are Nadan...");
} else if (150 >= age) {
	console.log("You are Adalt..");
} else {
	console.log("You are Vampire........");
}