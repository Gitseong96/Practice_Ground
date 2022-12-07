// todo : Math.pow() 을 구현하시요

function power(num1, num2) {
    if (num2 === 0) return 1;
    return num1 * power(num1, num2 - 1)
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// todo : 배열의 숫자를 모두 곱하는 함수 구현

function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1))
}
// shift가 안돼는 이유


// todo : 0부터 입력받은 숫자의 합을 구하는 함수 구현

function recursiveRange(num) {
    if (num === 0) return 0;
    return num + recursiveRange(num - 1)
}

// recursiveRange(6) // 21
// recursiveRange(10) // 55 