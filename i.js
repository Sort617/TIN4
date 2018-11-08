function coins(lt, coins) {
    let result = [];
    coins = coins.sort((a, b) => b - a);
    for (let i = 0; lt > 0; i++) {
        while(coins[i] <= lt) {
            result.push(coins[i]);
            lt -= coins[i];
        }
    }
    return result;
}

console.log(coins(46, [25, 10, 5, 2, 1]));