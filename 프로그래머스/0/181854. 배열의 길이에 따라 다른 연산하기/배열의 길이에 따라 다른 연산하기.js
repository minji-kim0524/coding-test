function solution(arr, n) {
    const length = arr.length
    
    if (length % 2 !== 0) {
        for (let i = 0; i < length; ) {
            arr[i] += n
            i += 2
        }
    } else {
        for (let i = 1; i < length; ) {
            arr[i] += n
            i += 2
        }
    }
    
    return arr
}