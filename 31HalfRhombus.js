/*Write a program that accepts a positive integer n and prints a rhombus of asterisks of size
n as in the examples below:
Sample input:
input output
f(1) *
f(2) * 
*/


function drawRightSideRhombus(n) {


    for (let i = 0; i <=n ; i++) {
        let row = '';

            for (let k = 1; k <= i; k++) {
                row += '* ';
            }   
        
        console.log(row);
    }
     for (let i = n - 1; i >= 1; i--) {
        let row='';
        for (let k = 1; k <= i; k++) {
            row += '* ';
        }
        console.log(row);
    }
     

}


drawRightSideRhombus(3);


