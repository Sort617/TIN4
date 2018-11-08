function fibonacci(m) {
    if (m < 1) {
        return -1;
    }
    let i = 1;
    let temp = 1;
    let prev = 0;
    while (i < m) {
        temp += prev;
        prev = temp - prev;
        i++;
    }
    return temp;
}

var vars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (const i of vars) {
    console.log(`${i}: ` + fibonacci(i));
}