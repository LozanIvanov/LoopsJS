function House(n) {
    if (n % 2 != 0) {
        for (let i = 1; i < n; i += 2) {
            console.log(' '.repeat(n - 1 - i), '* '.repeat(i))
        }
    }
    else {
        for (let i = 2; i < n; i += 2) {
            console.log(' '.repeat(n - 1 - i), '* '.repeat(i))
        }
    }


    console.log('* '.repeat(n));
    for (let j = 0; j < 2; j++) {
        console.log('* ', ' '.repeat(n - 2), '*')


    }
}


House(5)