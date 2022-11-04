const averageNumber = [12, 43, 53, 56, 98, 3, 895, -3]

// One Mathod
let maxNumber;
for(let i = 0; i < averageNumber.length; i++) {
    let element = averageNumber[0];

    if(element < averageNumber[i]) {
        maxNumber = averageNumber[i];
    }
}

// Two Mathod
maxNumber = Math.max(...averageNumber);
console.log(maxNumber);