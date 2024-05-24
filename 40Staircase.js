function Case(n) {
    console.log('#');
    console.log('##');
    let y=1;
    for (let i = 1; i < n-2; i++) {
        
        console.log(' '.repeat(y),'#'.repeat(i+2))
        y+=i+2
        
    }
}
Case(7)