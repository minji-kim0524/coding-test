function solution(arr, idx) {
    const idxArr = []
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 && i >= idx) idxArr.push(i)
    }
    
    return idxArr.length > 0 ? idxArr[0] : -1
}