function alpabeticize(str) {
    return str.split('').sort().join('');
}

console.log(alpabeticize("webmaster"));