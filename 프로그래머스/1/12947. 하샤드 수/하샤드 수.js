function solution(x) {
    var answer;
    
    let sum = x.toString().split('').reduce((acc, cur) => acc + Number(cur), 0)
    
    if (x % sum === 0) {
        answer = true
    } else {
        answer = false
    }
     
    return answer;
}