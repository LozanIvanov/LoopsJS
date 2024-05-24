
/*Write a function that accepts text (string) and calculates and prints the sum of the values
of the vowel letters according to the table below: */
function Sum(input) {
    
    const vowelValues = {
        'a': 1,'e': 2,'i': 3,'o': 4,'u': 5,
        'A': 1,'E': 2,'I': 3, 'O': 4,'U': 5
      };
      let sum=0;
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (vowelValues.hasOwnProperty(element)) {
            sum += vowelValues[element];
          }
        

        
    }
    console.log(sum)
    
}
Sum('hi')