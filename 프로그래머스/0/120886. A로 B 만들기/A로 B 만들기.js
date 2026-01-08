function solution(before, after) {
    var answer = 0;
    
    const beforeAscend = before.split('').sort().join('')
    const afterAscend = after.split('').sort().join('')

    if (beforeAscend === afterAscend) {
        answer = 1
    } else {
        answer = 0
    }
    
    return answer;
}