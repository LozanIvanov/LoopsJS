function Arrow(n){
    for (let i = 1; i< n; i++) {
        console.log(' '.repeat(n-1-i),' * '.repeat(i));
        
    }
    for (let index = 0; index < n-1; index++) {
        console.log(' '.repeat(n-2),'*'.repeat(n-1));
        
    }
}Arrow(6)