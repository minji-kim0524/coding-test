function solution(x, n) {
    var answer = Array.from({length: n}, (_, i) => x + x * i)
    
    return answer;
}