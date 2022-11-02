/*** largestAge big number find fuction */
function largestAge(ages) {
    let  largestNumber = ages[0];

    for(let i = 0; i < ages.length; i++){
        let element = ages[i];
        if(largestNumber < element) {
            largestNumber = element;
        }
    }

    return largestNumber;
}

const bigMan = largestAge([800, 10, 20, 30]);
console.log('Big Man: ', bigMan);

/*** smallestAge small number find fuction */
function smallestAge(ages) {
    let smallestNumber = ages[0];

    for(let i = 0; i < ages.length; i++) {
        let element = ages[i];

        if (smallestNumber > element) {
            smallestNumber = element;
        }
    }

    return smallestNumber;;
}

const smallMan = smallestAge([800, 10, 20, 30, -1]);
console.log('Small Man: ', smallMan);