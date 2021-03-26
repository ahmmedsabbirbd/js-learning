/*/// Comparisons operators like : == != > >= < <= (===, !=== (value and type)); ///*/

/// Number Check 
console.log("Now Print Number Checker Program");
/// Use  > and >= 
var x = 5;
var y = 15;

if ( x > y ) {
	console.log("This Number : ", y , "Greater then ", x);
} else if ( x >= y ) {
	console.log("Equal to Equal ", x, "=", y);
} else {
	console.log("This number : ", y , "Not greater then ", x);
}
/// Use < and <=
var a = 11;
var b = 10;

if ( a < b) {
	console.log("This number", a, "less then", b);
} else if ( a <= b ) {
	console.log("Equal to Equal ", a, "=", b);
} else {
	console.log("This number : ", a, "Not less then", b);
}
/// Use != 
var e = "Sabbir";
var f = "Ahmmed";

if ( e != f) {
	console.log("It's not same and it's  Value : ", e, f);
} else {
	console.log("It's Same", e, "=", f);
}

/// Use !== (value with type);
e = "6";
f = 6;

if ( e !== f ) {
	console.log("It's not same. Beacause ", e,"It's ", typeof(e), "and", f, "It's ",  typeof(f));
} else {
	console.log("It's Same");
}
