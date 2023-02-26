
// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

const solution = (s1, s2) => s1.filter((a) => s2.includes(a)).length

// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    var answer = arr.sort((a, b) => a - b).filter((el) => el % divisor === 0)
    if (answer.length === 0) {
        return [-1]
    } return answer
}
// arr	|        divisor	return
// [5, 9, 7, 10]	 5	  [5, 10]
// [2, 36, 1, 3]	 1	  [1, 2, 3, 36]
// [3,2,6]	         10 	[-1] 



//핸드폰 번호 가리기
function solution(phone_number) {
    var result = phone_number.split("")
    for (let i = 0; i < phone_number.length - 4; i++) {

        result[i] = "*"
    }
    return result.join("")
}

// phone_number  |	return
// "01033334444" |	"*******4444"
// "027778888"   |	"*****8888"

//음양 더하기

function solution(absolutes, signs) {
    var answer = 0;
    let result = absolutes.concat(signs)
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer = answer + absolutes[i]
        } else if (signs[i] === false) {
            answer = answer + absolutes[i] * -1
        }
    }
    return answer;
}
// absolutes | 	signs	             |result
// [4,7,12]	 |  [true,false,true]	 |9
// [1,2,3]	 |  [false,false,true]	 |0