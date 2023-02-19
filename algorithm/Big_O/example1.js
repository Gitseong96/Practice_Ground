// todo : 두 개의 양의 정수가 주어지면 두 숫자의 자릿수 빈도가 동일한지 확인하십시오.

function sameFrequency(num1, num2) {
    let str1Data = {}
    let str1 = num1.toString()
    let str2 = num2.toString()
    if (str1.length !== str2.length) return false
    for (let i = 0; i < str1.length; i++) {
        let index = str1[i];
        str1Data[index] ? str1Data[index] += 1 : str1Data[index] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let index = str2[i];
        if (!str1Data[index]) {
            return false
        } else {
            str1Data[index] -= 1
        }
        return true
    }
}
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false

// todo:변수 개수의 인수를 허용하고 전달된 인수 중에 중복된 인수가 있는지 확인하는, areThereDuplicates라는 함수를 구현합니다

function areThereDuplicates(...args) {
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}



areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 