// 10 = 1 2 5 

var n = 10;
var range = Math.ceil(n);
var sqrt_Range = Math.sqrt(range);
var result = "";

for (i=1; i<=sqrt_Range; i++ ) {
	if (n%i == 0) {
		if(i==n/i) {
			result += i +" ";
		} else {
			result +=i+" "+(n/i)+" ";
		}
	}
}
console.log(result);
