function solution(k, tangerine) {
    var answer = 0;
    
    const count = {}
    tangerine.forEach(num => {
        count[num] = (count[num] || 0) + 1
    })
    
    const counts = Object.values(count).sort((a, b) => b-a)
    
    for (let i = 0; i < counts.length; i++) {
        k -= counts[i]
        answer ++
        
        if (k <= 0) break
    }
    
    return answer;
}