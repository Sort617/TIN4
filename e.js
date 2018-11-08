function findLongestWord(str) {
    str.trim();
    str = str.split(/\s+/);
    return str.sort((a, b) => a.length - b.length)[str.length - 1];

}

var str = "Lorem Ipsum is simplydummytext of the printing and typesetting industry. ";
console.log(findLongestWord(str));