function countDown(num) {
    if (num <= 0) {
        console.log("All done!")
        return;
    }
    num--
    countDown(num)
}

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}


// num =3 
// return 3 + sumRange(2)
//         return    2 + sumRange(1)
//                       return 1


function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1)
}


function collectOddValues1(arr) {

    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;
}

function collectOddValues2(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
