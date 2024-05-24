function calculateEquipmentCost(money, students, lightsaberPrice, robePrice, beltPrice) {

    const lightsabersNeeded = Math.ceil(students * 1.1);

    
    const freeBelts = Math.floor(students / 6);


    const totalLightsaberCost = lightsabersNeeded * lightsaberPrice;
    const totalRobeCost = students * robePrice;
    const totalBeltCost = (students - freeBelts) * beltPrice;


    const totalCost = totalLightsaberCost + totalRobeCost + totalBeltCost;


    const roundedTotalCost = totalCost.toFixed(2);


    if (totalCost <= money) {
        console.log(`The money is enough - it would cost ${roundedTotalCost}lv.`);
    } else {
        const neededMoney = (totalCost - money).toFixed(2);
        console.log(`George Lucas will need ${neededMoney}lv more.`);
    }
}

calculateEquipmentCost(100, 2, 1.0, 2.0, 3.0);
calculateEquipmentCost(100, 42, 12.0, 4.0, 3.0);
