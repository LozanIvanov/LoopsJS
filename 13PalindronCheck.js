function Palindrome(str) {
    
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  

  console.log(Palindrome("radar")); 
  console.log(Palindrome("hello")); 
 
 
 
 