function Left(n){

    for (let i = 1; i <=n; i++) {
        let input='';
       for (let j = 0; j < n-i; j++) {
        input+=' ';
        
       }
       for (let p = 1; p < i; p++) {
        input+='*'
        
       }

        console.log(input)
    }
    for (let index = 1 ; index < n; index ++) {
        var output = "";
        for (var j = 0; j <index; j++) {
            output += " ";
            
        }
        for (var k = n-index; k > 1; k--) {
            
            output += "*";
        }
        
        console.log(output);
    }
    

}
Left(5)