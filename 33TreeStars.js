function Tree(param){
    let space;
    if(param%2==0){
         space=Math.ceil( param/2);
    }
    else{
        space=Math.floor( param/2)+0.5;
    }

    
    for (var i = 0; i < param; i++) {
        var output = "";
        for (var j = 0; j < param - i; j++) {
            output += " ";
            
        }
        for (var k = 0; k <= i*2; k++) {
            
            output += "*";
        }
        
        console.log(output);
    }
   
    console.log(' '.repeat(space*2)+ '*')
}
Tree(3)