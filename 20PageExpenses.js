function calculateRageExpenses(lostGames, headsetPrice, mousePrice, keyboardPrice, displayPrice) {
    let trashedHeadsets = 0;
    let trashedMice = 0;
    let trashedKeyboards = 0;
    let trashedDisplays = 0;

    for (let game = 1; game <= lostGames; game++) {
        if (game % 2 === 0) {
            trashedHeadsets++;
        }
        if (game % 3 === 0) {
            trashedMice++;
        }
        if (game % 2 === 0 && game % 3 === 0) {
            trashedKeyboards++;
            if (trashedKeyboards % 2 === 0) {
                trashedDisplays++;
            }
        }
    }

    const totalExpenses = 
        (trashedHeadsets * headsetPrice) + 
        (trashedMice * mousePrice) + 
        (trashedKeyboards * keyboardPrice) + 
        (trashedDisplays * displayPrice);

    console.log(`Rage expenses: ${totalExpenses.toFixed(2)} lv.`);
}


calculateRageExpenses(7, 2, 3, 4, 5);  
calculateRageExpenses(10, 5.5, 4.2, 6.8, 7.9); 

