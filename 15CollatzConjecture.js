function collatzSequence(n) {
    let sequence = [n]; 
    
    while (n !== 1) {
      if (n % 2 === 0) {
        
        n /= 2;
      } else {

        n = 3 * n + 1;
      }
      sequence.push(n); 
    }
    
    return sequence;
  }

  function printCollatzSequence(n) {
    const sequence = collatzSequence(n);

    console.log(sequence.join(' ')); 
  }
  
  
  printCollatzSequence(6);
  printCollatzSequence(7);
  
  