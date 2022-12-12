

function SeletinSort1(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        if (i !== lowest) {

            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr
}

SeletinSort1([34, 20, 16, 15, 13, 4, 8]);

//O(N^2)

function SeletinSort2(arr) {
    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        if (i !== lowest) swap(arr, i, lowest)
    }
    return arr
}

SeletinSort2([34, 20, 16, 15, 13, 4, 8]);