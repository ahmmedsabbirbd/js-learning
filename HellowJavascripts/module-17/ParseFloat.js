
// ParseFloat
function sum (a, b) {
    const pa = parseFloat(a);
    const pb = parseFloat(b);
    const sum = pa + pb;

    return sum;
}

console.log(sum('10', 10));



// ParseFloat & ParseInt
const parstNumber = "12.243443";

console.log(parseInt(parstNumber), parstNumber, parseFloat(parstNumber));