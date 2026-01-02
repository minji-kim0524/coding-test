function solution(s) {
    var answer = [];
    
    const strArr = s.split(' ')
    
    const min = Math.min(...strArr)
    const max = Math.max(...strArr)
    
    answer.push(min, max)
    
    return answer.join(' ');
}