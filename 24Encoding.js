/*Write a program that receive an integer. On the console should be printed as many lines
as there are digits in the number. Each line is formed from the digits of the reversed
number. A symbol must be printed on each line with the following conditions:
 the symbol to be printed is from the ASCII table. Its decimal ASCII code is formed
as 33 is added to the digit of the number entered that corresponds to a
given line.
 The symbol is printed as many times as the digit
 if for a given line corresponds digit 0 on this line print &quot;ZERO&quot; */

function printReversedNumberPatterns(number) {

    const reversedNumber = number.toString().split('').reverse().join('');
    
    
    for (let digit of reversedNumber) {
        const digitValue = parseInt(digit);
        
        if (digitValue === 0) {
            console.log("ZERO");
        } else {
            
            const symbol = String.fromCharCode(digitValue + 33);
            
            console.log(symbol.repeat(digitValue));
        }
    }
}


printReversedNumberPatterns(2049);  

