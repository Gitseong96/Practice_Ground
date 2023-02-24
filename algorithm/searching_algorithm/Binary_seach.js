// todo : 정렬된 배열의 값을 찾고 인덱스를 반환하는 함수 구현

function binarySearch(arr, num) {
    let start = 0;
    let last = arr.length - 1;
    let index = Math.floor((start + last) / 2)
    while (start <= last && arr[index] !== num) {
        if (arr[index] > num) {
            last = index - 1
        } else if (arr[index] < num) {
            start = index + 1
        }
        index = Math.floor((start + last) / 2)
    }
    if (arr[index] === num) {
        return index
    } return -1
}


