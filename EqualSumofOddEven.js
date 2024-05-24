function checkSumsEqual(num) {
    const strNum = num.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < strNum.length; i++) {
        if (i % 2 === 0) {
            evenSum += parseInt(strNum[i]);
        } else {
            oddSum += parseInt(strNum[i]);
        }
    }

    return evenSum === oddSum;
}

function printMatchingNumbers(start, end) {
    let matchingNumbers = [];

    for (let num = start; num <= end; num++) {
        if (checkSumsEqual(num)) {
            matchingNumbers.push(num);
        }
    }

    if (matchingNumbers.length > 0) {
        matchingNumbers.forEach(number => console.log(number));
    } else {
        console.log("None");
    }
}


printMatchingNumbers(100000, 100050);

