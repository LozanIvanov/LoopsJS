function Sun(input) {
    const g = input * 2 - 2;
    if (input < 3 || input > 99) {
        console.log('Invalid number')
        return;
    }
    console.log('*'.repeat(input * 2), ' '.repeat(input), '*'.repeat(input * 2))
    if (input == 3) {
        console.log('*' + '/'.repeat(g) + '*', '|'.repeat(input), '*' + '/'.repeat(g) + '*');
    }
    else {
        for (let i = 0; i < input - 2; i++) {
         
            if ( input%2==0 && i == (input/2 -2 )) {
                console.log('*' + '/'.repeat(g) + '*', '|'.repeat(input), '*' + '/'.repeat(g) + '*');
            }
           else  if(input%2!=0 && i==(Math.floor(input/2-1))){
                console.log('*' + '/'.repeat(g) + '*', '|'.repeat(input), '*' + '/'.repeat(g) + '*');
            }
          else{

            console.log('*' + '/'.repeat(g) + '*', ' '.repeat(input), '*' + '/'.repeat(g) + '*')
          } 
        }


    }
    console.log('*'.repeat(input * 2), ' '.repeat(input), '*'.repeat(input * 2))

}
Sun(8)