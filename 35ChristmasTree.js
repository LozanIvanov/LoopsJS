function Tree(input){
    
    
        
         for (let index = 1; index <=input-1; index++) {
            if(index==1){
            
            console.log(' '.repeat(input+1)+' |')}
           
           
            console.log(' '.repeat(input-index),'*'.repeat(index), '|','*'.repeat(index))
           
         }
       
        
     
    
    
    

}
Tree(7)