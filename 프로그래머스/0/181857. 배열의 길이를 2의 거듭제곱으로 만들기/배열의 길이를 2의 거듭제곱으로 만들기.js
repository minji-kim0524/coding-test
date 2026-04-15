function solution(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (((arr.length-1) & arr.length) === 0) return arr
        else arr.push(0)
    }
    
    return arr
}