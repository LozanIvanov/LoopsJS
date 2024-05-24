/*Write a function that takes a number n and draws a square of n * n asterisks. Between
each two asterisks there is a whitespace.
Sample input:
input output
f(2) * *
* *
f(3) * * *
* * *
* * * */
function drawSquare(n) {
    
    for (let i = 0; i < n; i++) {
        let row = '';
        
        for (let j = 0; j < n; j++) {
            
            row += '* ';
        }
        
        console.log(row);
    }
}


drawSquare(2);
drawSquare(3);
