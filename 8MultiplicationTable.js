function Table(){
    for (let i = 1; i <=10; i++) {
        for (let index = 1; index <= 10; index++) {
            const element = i * index;
            console.log(`${i} * ${index} = ${element}`)
            
        }
        
    }
}
Table()