const averageNumber = [12, 43, 53, 56, 98, 3, 895, -3]

// One Mathod
let minNumber;
for(let i = 0; i < averageNumber.length; i++) {
    let element = averageNumber[0];

    if(element > averageNumber[i]) {
        minNumber = averageNumber[i];
    }
}

// Two Mathod
minNumber = Math.min(...averageNumber);
console.log(minNumber);