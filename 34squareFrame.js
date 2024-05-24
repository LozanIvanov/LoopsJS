function Frame(param){
    const space=param-2;
    
    console.log('+'+' -'.repeat(space)+' +');
    for (let index = 0; index < space; index++) {
        console.log('|'+' -'.repeat(space)+' |')
        
    }
    console.log('+'+' -'.repeat(space)+' +');
}
Frame(5)