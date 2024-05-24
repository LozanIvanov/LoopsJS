function generatePasswords(n, l) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.slice(0, l);
    let passwords = [];

    for (let d1 = 1; d1 <= n; d1++) {
        for (let d2 = 1; d2 <= n; d2++) {
            for (let ch1 = 0; ch1 < l; ch1++) {
                for (let ch2 = 0; ch2 < l; ch2++) {
                    for (let d3 = 1; d3 <= n; d3++) {
                    
                        if (d3 > d1 && d3 > d2) {
                            passwords.push(`${d1}${d2}${letters[ch1]}${letters[ch2]}${d3}`);
                        }
                    }
                }
            }
        }
    }


    if (passwords.length > 0) {
        passwords.forEach(password => console.log(password));
    } else {
        console.log("None");
    }
}

generatePasswords(2, 4);


