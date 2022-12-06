

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



//인덱스나 위치에 해당하는 값을 만든 다을 특정 조건에 따라 지점을 향해 이동시키는 방법
// O(n^2)
function sumZeroSearch1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; i++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        } return false
    }
}


function sumZeroSearch2(arr) {
    let result1 = [];
    let result2 = {};
    arr.map((el) => {
        if (el < 0) {
            result1.push(el * -1)
        } else {
            result1.push(el)
        }
    });

    for (let i = 0; i < result1.length; i++) {
        let index = result1[i];
        result2[index] ? result2[index] += 1 : result2[index] = 1;
    }

    for (let key of result2) {
        if (key === 2) return [-key, key]
    }
}

// O(n)
function sumZeroSearch3(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) { return [arr[left], arr[right]] }
        else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}




function countValue(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
