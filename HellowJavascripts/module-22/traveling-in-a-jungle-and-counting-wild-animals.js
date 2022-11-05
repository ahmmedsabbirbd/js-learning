
function aniCalc(miles) {
    let restMiles = 0; 
    const firstDisMile = [10, 5]; // 10
    const secondDisMile = [20, 10]; // 20
    const threedDisMile = [50, 20]; //50
    let totalanimiles = 0;

    const constantFirstDis = (firstDisMile[0] - 0);
    const constantSecondDis = (secondDisMile[0] - firstDisMile[0]);
    const constantThreeDis = (threedDisMile[0] - secondDisMile[0]);
    
    if (miles >= threedDisMile[0]) {
        restMiles = miles - threedDisMile[0];
        totalanimiles = (constantFirstDis * firstDisMile[1]) + (constantSecondDis * secondDisMile[1]) + (constantThreeDis * threedDisMile[1]) + (restMiles * threedDisMile[1]);
    } else if (miles >= secondDisMile[0]) {
        restMiles = miles - secondDisMile[0];
        totalanimiles = (constantFirstDis * firstDisMile[1]) + (constantSecondDis * secondDisMile[1]) + (restMiles * threedDisMile[1]);
    } else if (miles >= constantFirstDis) {
        restMiles = miles - constantFirstDis;
        totalanimiles = (constantFirstDis * firstDisMile[1]) + (restMiles * secondDisMile[1]);
    } else { 
        totalanimiles = firstDisMile[0] * firstDisMile[1];
    }

    return totalanimiles;
}

console.log(aniCalc(50));

// function aniCalc(fiDisAni, seDisAni, threDisAni, miles) {
//     let restMiles = 0; 
//     const firstDisMile = fiDisAni; // 10
//     const secondDisMile = seDisAni; // 20
//     const threedDisMile = threDisAni; //50
//     let totalanimiles = 0;

//     const constantFirstDis = (firstDisMile[0] - 0);
//     const constantSecondDis = (secondDisMile[0] - firstDisMile[0]);
//     const constantThreeDis = (threedDisMile[0] - secondDisMile[0]);
    
//     if (miles >= threedDisMile[0]) {
//         restMiles = miles - threedDisMile[0];
//         totalanimiles = (constantFirstDis * firstDisMile[1]) + (constantSecondDis * secondDisMile[1]) + (constantThreeDis * threedDisMile[1]) + (restMiles * threedDisMile[1]);
//     } else if (miles >= secondDisMile[0]) {
//         restMiles = miles - secondDisMile[0];
//         totalanimiles = (constantFirstDis * firstDisMile[1]) + (constantSecondDis * secondDisMile[1]) + (restMiles * threedDisMile[1]);
//     } else if (miles >= constantFirstDis) {
//         restMiles = miles - constantFirstDis;
//         totalanimiles = (constantFirstDis * firstDisMile[1]) + (restMiles * secondDisMile[1]);
//     } else { 
//         totalanimiles = firstDisMile[0] * firstDisMile[1];
//     }

//     return totalanimiles;
// }

// const totalAni = aniCalc([2, 10], [4, 20], [6, 50], 50);
// console.log(totalAni);
