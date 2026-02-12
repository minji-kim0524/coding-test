function solution(N, stages) {
    let answer = [];
    let challenge = stages.length
    
    for (let j = 1; j <= N; j++) {
        let start = j
        let users = []
        let failureRate = 0
        let user = 0
        
        for (let k = 0; k < stages.length; k++) {
            let current = stages[k]
            if (start !== current) continue
            if (start === current) {
                users.push(current)
                user = users.length
            }
        }
            failureRate = users.length / (challenge - user)
            answer.push({stage: j, rate: failureRate})
            challenge -= user
    }
    
    answer.sort((a, b) => b.rate - a.rate)
    return answer.map(s => s.stage);
}