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

// O(n)
function FrequencyCounter(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

// O(n)
function stringMatch(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const result = {};

    for (let i = 0; i < str1.length; i++) {
        let index = str1[i];
        result[index] ? result[index] += 1 : result[index] = 1;
    }
    console.log(result)

    for (let i = 0; i < str2.length; i++) {
        let index = str2[i];
        if (!result[index]) {
            return false;
        } else {
            result[index] -= 1;
        }
    }

    return true;
}