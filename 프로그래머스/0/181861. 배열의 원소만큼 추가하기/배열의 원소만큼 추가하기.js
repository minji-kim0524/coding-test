function solution(arr) {
    const result = []
    let count = 1
    
    for (let i = 0; i < arr.length; i++) {
        if (count <= arr[i]) {
            result.push(arr[i])
            count++
            i--
        } else if (count > arr[i]) {
            count = 1
            continue
        }
    }
    
    return result
}