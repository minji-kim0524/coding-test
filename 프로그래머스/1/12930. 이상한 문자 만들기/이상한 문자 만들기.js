function solution(s) {
    var answer = s.split(' ').map(word => word.split('').map((w, idx) => idx % 2 === 0 ? w.toUpperCase() : w.toLowerCase()).join('')).join(' ')
    
    
    return answer;
}