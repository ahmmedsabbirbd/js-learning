/// part 0.3 
console.log("Do while loop");

var i = 99;
do {
	console.log(i);
	i -=2;
} while (i >= 0);

i = 2;

do {
	console.log(i);
	i += 3;

	if ( i > 20 ) {
		break;
	}
} while (true);