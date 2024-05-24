function generateSpecialNumbers(n) {
    let specialNumbers = [];

    for (let num = 1111; num <= 9999; num++) {
        let numStr = num.toString();
        let isSpecial = true;

        for (let i = 0; i < numStr.length; i++) {
            let digit = parseInt(numStr[i]);
            if (digit === 0 || n % digit !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            specialNumbers.push(num);
        }
    }

    if (specialNumbers.length > 0) {
        specialNumbers.forEach(number => console.log(number));
    } else {
        console.log("None");
    }
}

generateSpecialNumbers(3);


