function solution(number, n, m) {
    let multipleN = number % n === 0
    let multipleM = number % m === 0
    
    if(multipleN && multipleM) { return 1 }
    else { return 0 }
}