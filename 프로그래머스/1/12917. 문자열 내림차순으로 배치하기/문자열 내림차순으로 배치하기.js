function solution(s) {
    var answer
    
    const upperStringArr = s.split('').filter(s => s === s.toUpperCase()).sort((a, b) => b.localeCompare(a))
    const lowerStringArr = s.split('').filter(s => s === s.toLowerCase()).sort((a, b) => b.localeCompare(a))
    
    answer = [...lowerStringArr, ...upperStringArr].join('')
    
    return answer;
}