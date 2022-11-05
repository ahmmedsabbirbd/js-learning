
function aniCalc(fiDisAni, seDisAni, thDisAni, miles) {
    let restMiles = 0; 
    const firstDisMile = fiDisAni;
    const secondDisMile = seDisAni;
    const threedDisMile = thDisAni;
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

const totalAni = aniCalc([10, 5], [20, 10], [50, 19], 50);
console.log(totalAni);