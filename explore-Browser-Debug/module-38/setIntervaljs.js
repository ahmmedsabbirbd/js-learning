const welcome = ()=> {
    console.log(2);
}
console.log(1);
// setInterval(welcome, 3000);
console.log(3);

let second = 0;

const timing = setInterval(() => {
    second++;

    if(second === 10) {
        clearInterval(timing);
    }
    console.log(second)
}, 1000);