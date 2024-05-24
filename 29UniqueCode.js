/*Write a function that generates three-digit codes, with the digits of each code in a certain
interval. For a code to be valid, it must meet the following conditions:
 The first and third digits must be even.
 The second digit must be a prime number in the range [2...7].
Input
You take 3 parameters:
 The upper limit of the first number - an integer in the range [1...9]
 The upper limit of the second number - an integer in the range [1...9]
 The upper limit of the third number - an integer in the range [1...9]

Output
Print on the console all valid three-digit codes whose digits correspond to the appropriate
intervals.
 */

function generateCodes(firstLimit, secondLimit, thirdLimit) {

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;}


    for (let i = 2; i <= firstLimit; i += 2) {
        for (let j = 2; j <= secondLimit; j++) {
            if (isPrime(j)) {
                for (let k = 2; k <= thirdLimit; k += 2) {
                    console.log(`${i}${j}${k}`);
                }
            }
        }
    }

}




generateCodes(3, 5, 5);
