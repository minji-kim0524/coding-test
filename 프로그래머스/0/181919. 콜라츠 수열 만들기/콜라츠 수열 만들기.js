function solution(n) {
    const answer = []
    answer.push(n)
    
    for (let i = 0; ; i++) {
        if (answer[i] % 2 === 0 && answer[i] !== 1) answer.push(answer[i] / 2)
        else if (answer[i] % 2 !== 0 && answer[i] !== 1) answer.push(answer[i] * 3 + 1)
        else if (answer[i] === 1) break
    }
    
    return answer
}