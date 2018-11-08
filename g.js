function getType(arg) {
    return typeof arg;
}

var vars = ["str", 1, true, {}, [1,2], null, undefined, NaN];
for (const i of vars) {
    console.log(getType(i));
}