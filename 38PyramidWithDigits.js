function generatePattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';

        
        for (let s = 0; s < n - i; s++) {
            row += ' ';
        }

        // Отначало до средата
        for (let j = i; j < 2 * i; j++) {
            row += j;
        }

        // От средата до края
        for (let j = 2 * i - 2; j >= i; j--) {
            row += j;
        }

        console.log(row);
    }
}


generatePattern(5);

