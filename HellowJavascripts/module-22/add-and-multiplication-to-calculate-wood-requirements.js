function woodCalculator(chair, bed, window) {
    const perChairWood = 3;
    const perBedWood = 7;
    const perWindowWood = 5;
    
    const totalChairWood = perChairWood * chair; 
    const totalBedWood = perBedWood * bed; 
    const totalWindowWood = perWindowWood * window;

    totalWood = totalChairWood + totalBedWood + totalWindowWood;

    return totalWood;
}

console.log('Total Wood for Chair, Bed, and Window:', woodCalculator(1, 2, 1))