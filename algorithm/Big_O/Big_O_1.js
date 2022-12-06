// O(n)
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += 1
    }
    return total
}

// O(1)
function addUpto2(n) {
    return n * (n + 1) / 2
}


var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)


// O(n제곱)
function Part2(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; i++) {
            console.log(i, j)
        }
    }
}

// O(n^2)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correntIndex = arr2.indeOf(arr1[i] ** 2)
        if (correntIndex === -1) {
            return false;
        }
        arr2.splice(correntIndex, 1)
    } return true;
}

