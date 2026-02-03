function solution(k, score) {
    let answer = [];
    
    const top = []
    
    for (const num of score) {
        if (top.length < k) {
            top.push(num)
        } else {
            const min = Math.min(...top)
            
            if (num > min) {
                const idx = top.indexOf(min)
                top[idx] = num
            }
        }
         answer.push(Math.min(...top))
    }
    return answer;
}