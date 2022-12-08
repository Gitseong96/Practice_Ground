
// todo : 입력받은 배열과 숫자를 입력 받아 배열을 순회하여 값이 있다면 인덱스값을 반환 하고 없다면 -1을 반환
// O(n)
function linearSearch(arr, num) {
    let index = arr.indexOf(num)
    if (index !== -1) {
        return index;
    } else return index

}

function linearSerach2(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num)
            return i
    } return -1
}

// linearSerach2([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // -1