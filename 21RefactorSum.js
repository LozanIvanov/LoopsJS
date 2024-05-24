function printOddNumbersAndSum(n) {
    let sum = 0;
    let number = 1;

    for (let i = 0; i < n; i++) {
        console.log(number);
        sum += number;
        number += 2;
    }

    console.log('Sum: ' + sum);
}


printOddNumbersAndSum(5);
