/*Write a program that generates and prints on the console four-digit numbers in which the
first and second pairs of digits form two-digit primes (an example of such a number
1723). The final value to which the pairs should be generated is determined by another 2
digits received as input, which determine how much the final value is greater than the
initial
The input contains exactly 4 parameters:
 In the first row – the initial value of the first first pair of numbers – a positive
integer in the range [10... 90]
 In the second row – the initial value of the second pair of numbers – a
positive integer in the range [10... 90]
 In the third row – the difference between the initial and final values of the first
pair of numbers – a positive integer in the range [1... 9]
 In the fourth row – the difference between the initial and final values of the
second pair of numbers – a positive integer in the range [1... 9]
Print four-digit numbers in which the first two and second two digits are prime two-digit
numbers. */

function calculateCoins(amount) {
    
    let totalStotinki = Math.round(amount * 100);

    
    const coins = [200, 100, 50, 20, 10, 5, 2, 1];
    let coinCount = 0;

    for (let coin of coins) {
        if (totalStotinki === 0) break;
        if (totalStotinki >= coin) {
            coinCount += Math.floor(totalStotinki / coin);
            totalStotinki %= coin;
        }
    }

    return coinCount;
}
console.log(calculateCoins(1.23)); 
console.log(calculateCoins(2.00)); 
console.log(calculateCoins(0.56)); 
console.log(calculateCoins(2.73)); 

























