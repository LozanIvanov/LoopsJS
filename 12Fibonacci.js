function fibonacciSum(n) {
    let sum = 0;
    let prev = 0;
    let curr = 1;
  
    for (let i = 1; i <= n; i++) {
      sum += curr; 
      const next = prev + curr; 
      prev = curr; 
      curr = next; 
    }
  
    return sum;
  }
  
 
 
 
  console.log(fibonacciSum(5)); 
  console.log(fibonacciSum(10));
  