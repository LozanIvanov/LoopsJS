function fr(n){
    for (let i = 0,j=n-2; i < n/2-1; i++,j-=2) {
        console.log('£'.repeat(i),'#','£'.repeat(j),'#','£'.repeat(i))   
    }
    if(n%2==0){
    console.log(' '.repeat(n/2),'##')
    }
    else{
        console.log(' '.repeat(n/2),'#')
    }
    for (let i = 0,j=2; i < n/2-1; i++,j+=2) {
        console.log('£'.repeat(n/4-i),'#','£'.repeat(j),'#','£'.repeat(n/4-i)) 
    }
}
fr(6)