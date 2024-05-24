/*We have banknotes and coins of 1lv., 2lv. and 5lv. Write a program that receives number
of banknotes and coins and the target amount and displays all possible ways in which the
amount can be paid with the available money.
The input contains exactly 4 parameters:
 Number of coins of 1lv. - positive integer;
 Number of coins of 2lv. - positive integer;
 Number of banknotes of BGN 5 - positive integer;
 Sum - positive integer in the range [1... 1000];
Print all combinations of the given denominations forming the sum, formatted as
follows:
o &quot;{1 count} * 1 lv. + {2 count} * 2 lv. + {5 count} * 5 lv. = {sum} lv.&quot; */

function findCombinations(oneLvCount, twoLvCount, fiveLvCount, targetSum) {

    for (let ones = 0; ones <= oneLvCount; ones++) {
        
        for (let twos = 0; twos <= twoLvCount; twos++) {
            
            for (let fives = 0; fives <= fiveLvCount; fives++) {
        
                let currentSum = ones * 1 + twos * 2 + fives * 5;
            
                if (currentSum === targetSum) {
                    console.log(`${ones} * 1 lv. + ${twos} * 2 lv. + ${fives} * 5 lv. = ${targetSum} lv.`);
                }
            }
        }
    }
}


findCombinations(3, 2, 1, 7);  
