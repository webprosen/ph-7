function woodCalculator(chairQty, tableQty, bedQty){

    const perChairWood = 3;
    const perTableWood = 5;
    const perBedWood = 10;

    const chair = perChairWood * chairQty;
    const table = perTableWood * tableQty;
    const bed = perBedWood * bedQty;

    totalWood = chair + table + bed;
    return totalWood;
}

totalWood = woodCalculator(0, 0, 5);
console.log(totalWood);