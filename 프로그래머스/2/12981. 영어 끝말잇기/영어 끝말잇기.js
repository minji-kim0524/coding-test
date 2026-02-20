function solution(n, words) {
    const isDuplicate = {}
    
    isDuplicate[words[0]] = true

    for (let i = 0; i < words.length - 1; i++) {
        let prev = words[i]
        let current = words[i+1]
        
        // 끝말잇기가 이루어지지 않은 경우
        if (prev[prev.length - 1] !== current[0]) {
            let loser = ((i + 1) % n) + 1
            let turn  = Math.floor((i + 1) / n) + 1
            return [loser, turn]
        }
        
        // 단어가 중복되는 경우
        if (isDuplicate[current]) {
            let loser = ((i + 1) % n) + 1
            let turn  = Math.floor((i + 1) / n) + 1
            return [loser, turn]            
        }
        
        isDuplicate[current] = true
    }
    
    return [0, 0]

}