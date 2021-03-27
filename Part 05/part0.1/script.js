/// while loop 
console.log("While loop")
var i = 50;

while (i > 0) {
	console.log(i);
	i--;
}

console.log("New While");
while (i < 30) {
	i += 5;
	console.log(i);
}

/// infinite loop
console.log("Infinite loop of while");
i=0;

while (true) {
	console.log(i);

	if (11 == i) {
		break;
	}
	i++;
}