function ArmstrongNumber(n) {
    
    const digits = n.toString();
    const numDigits = digits.length;
    
    let sum = 0;
    

    for (let digit of digits) {
      sum += Math.pow(parseInt(digit), numDigits);
    }
    

    if (sum === n) {
      return "Armstrong";
    } else {
      return "Not Armstrong";
    }
  }
  

  console.log(ArmstrongNumber(153));
  console.log(ArmstrongNumber(370));
 
 
 
  