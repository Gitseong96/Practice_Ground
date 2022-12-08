function naiveSearch(lognstr, shortstr) {
    let count = 0;
    for (let i = 0; i < lognstr.length; i++) {
        for (let j = 0; j < shortstr.length; j++) {
            if (shortstr[j] !== lognstr[i + j]) break;
            if (j === shortstr.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")