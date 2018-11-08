function isPrime(n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

var vars = [1, 2, 3, 4, 5, 8, 71, 83, 107, 207];
for (const i of vars) {
    console.log(`${i}: ` + isPrime(i));
}