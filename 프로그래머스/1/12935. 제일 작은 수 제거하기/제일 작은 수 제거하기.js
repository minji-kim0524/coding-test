function solution(arr) {
    const minElement = Math.min(...arr)
    
    const answer = arr.filter(i => i !== minElement)
    
    if(answer.length === 0) {
        answer.push(-1)
        return answer
    } else {
        return answer
    }
}