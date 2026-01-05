function solution(n) {
    var answer;
    
    const sqrt = Math.sqrt(n)
    
    if (Number.isInteger(sqrt)) {
        answer = (sqrt + 1) * (sqrt + 1)
    } else {
        answer = -1
    }
    
    return answer;
}