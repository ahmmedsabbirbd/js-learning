/// Nessting (part 4.5)
console.log("Part 4.5");

var sabbir = "Sabbir";
var shemul = "Simul";
var brother = true;

if ("Sabbir" == sabbir) {
	if ("Shimul" == shemul) {
		if (brother) {
			console.log("Shemul and Sabbir is good boy.");
		} else {
			console.log("They are not brother.");
		}
	} else {
		console.log("They are not brother.");
	}
} else {
	console.log("They are not brother.");
}

/// Nessting short 
if ("Sabbir" == sabbir && "Shimul" == shemul && brother) {
	console.log("They are bother");
} else {
	console.log("They are not bother");
}

/// logical orerators like && ||
var x = 10;
var y = 11;
var xy = 21;
if (19 == x || 12 == y || 21 == xy) {
	console.log("It's True......");
} else {
	console.log("It's not true");
}

/// Prime number untill 20 .. 1 3 5 7 11 13 17 19
var checker = 20;

if (20 >= checker) {
	if (checker == 1 || checker == 3 || checker == 5 || checker == 7 || checker == 11 || checker == 13 || checker == 17 || checker == 19) {
		console.log("It's Prime number. And It's : ", checker);
	} else {
		console.log("It's ",checker, " not prime number.")
	}
} else {
	console.log("It's big of 20. And It's : ", checker);
}

console.log("Group and Short Prime number");
/// Group and Short Prime number untill 20 .. 1 3 5 7 11 13 17 19
checker = 17;

if (checker <= 20 && ( checker == 1 || checker == 3 || checker == 5 || checker == 7 || checker == 11 || checker == 13 || checker == 17 || checker == 19) ) {
	console.log("It's Prime number.", checker);
} else if (checker <= 20) {
	console.log("It's not prime number.", checker);
} else {
	console.log("It's big of 20. Andi it's", checker);
}