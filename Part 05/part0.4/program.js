/// Numta 
console.log("Numta ...........");
 
var number,numta;

for (numta=1; numta<=10; numta++) {
	console.log(numta+" of Numta........");
	for (number=1;number<=10; number++) {
		result = number*numta;
		console.log(numta+" x "+number+"= "+result);
	}
}