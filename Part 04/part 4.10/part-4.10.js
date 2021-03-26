/// Part 4.10 and Ternary operator
console.log("Part 4.10. And It's optional. And It's Ternary Operators");

/// Negative and Positive Number without ternary operators 
var number = -5;
var result;

if (number > 0) {
	result = "This Number" + number + " is Positive";
} else {
	result = "This number " + number + " is Negetive";
}
console.log(result);

/// even and odd Number with ternary operators 
number = 6;
evenOdd =  number % 2;
result = (evenOdd == 0) ? "Odd" : "Even";


console.log("This number", number, " is ", result);