/*Write a function that takes an integer n and prints a pyramid of numbers as in */
function printNumberPyramid(n) {
    let currentNumber = 1;
    let rowLength = 1;

    while (currentNumber <= n) {
        let rowNumbers = [];
        for (let i = 0; i < rowLength; i++) {
            if (currentNumber > n) {
                break;
            }
            rowNumbers.push(currentNumber);
            currentNumber++;
        }
        console.log(rowNumbers.join(' '));
        rowLength++;
    }
}
 
printNumberPyramid(10);

