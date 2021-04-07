/// s0 = 1 2 3 4 5 6 7 ......
/// s1 = 2 4 6 8 10 12 ......
/// s2 =  1 4 7 10 13 ......
/// s3 = 0 3 8 15 24 35  ......
/// s4 = 1 4 3 8 5 12 7 16 9 20 ......
/// s5 = 0 1 1 2 3 5 8 13  ......

/// s0 = 1 2 3 4 5 6 7
console.log("Series number One");
var i;
var series="";
for (i=0; i<=10; i++) {
	series =series+i+" ";
}
console.log(series);

/// s1 = 2 4 6 8 10 12 ......
console.log("Series number Two");
series="";
for(i=2;i<=30;i+=2) {
	series=series+i+" ";
}
console.log(series);

/// s2 =  1 4 7 10 13 ......
console.log("Series number There");
series="";
for(i=1;i<=25;i+=3) {
	series=series+i+" ";
}
console.log(series);

/// s3 = 0 3 8 15 24 35  ......
console.log("Series number Four");
series="";
for(i=1;i<=1000;i++) {
	var n=i;
	n*=i;
	m=n-1;
	if(m<=50){
		series=series+m+" ";
	}
}
console.log(series);

/// Optional 
var m,n,number;
console.log("Optional");
series=" ";
number=30;
for(i=1;true;i++) {
	n=i;
	n*=i;
	m=n-1;
	series=series+m+" ";
	if (m>number){
		break;
	}
}
console.log(series);

/// s4 = 1 4 3 8 5 12 7 16 9 20 ......
console.log("Series number Five");
m=0;
series="";
for(i=1;i<=30;i++) {
	n=i;
	m=i%2;
	if (0==m) {
		n*=2;
		series=series+n+" ";
	} else {
		series=series+i+" ";
	}
}
console.log(series);


console.log("bejor number");
bejor="";
for (i=1;i<=100;i+=2) {
	bejor=bejor+i+" ";
}
console.log(bejor)

/// s5 = 0 1 1 2 3 5 8 13  ......
console.log("Series number Five");
series=" 0 1 ";
var a,b,result;
a=0;
b=1;
for (i=1;i<10;i++) { 
	result=a+b;
	a=b;
	b=result;
	series=series+result+" ";
}
console.log(series);
