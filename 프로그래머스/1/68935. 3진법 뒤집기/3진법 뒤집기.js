function solution(n) {
    var answer;
    
    const ternary = n.toString(3).split('').reverse().join('')
    answer = parseInt(ternary, 3)
    
    return answer;
}