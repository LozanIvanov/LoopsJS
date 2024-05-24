/*Write a program that accepts a positive integer n and prints a rhombus of asterisks of size
n as in the examples below:
Sample input:
input output

f(2) *
    * *
     *    
*/

/*for (let i = 1; i <= 5; i++) {
    let p=7-i;
    for (let index = p; index >0; index--) {
        console.log('+'.repeat(p-1),'* '.repeat(i))
        break;
        
    }   
    
}*/

function Rumb(param) {
    for (var i = 0; i < param; i++) {
        var output = "";
        for (var j = 0; j < param - i; j++) {
            output += " ";
            
        }
        for (var k = 0; k <= i; k++) {
            
            output += "* ";
        }
    
        console.log(output);
    }
    for (let index = 1 ; index < param; index ++) {

        var output = "";
        for (var j = 0; j <index; j++) {
            output += " ";
            
        }
        for (var k = param-index; k > 0; k--) {
            
            output += " *";
        }
        
        console.log(output);
    }

}
Rumb(5)


