function solution(a, d, included) {
    let sequence = []
    let result = 0
    
    for (let i = 0; i < included.length; i++) {
        sequence.push(a + (i*d))
    }
    
    for (let j = 0; j < included.length; j++) {
        if (included[j] === true) result += sequence[j]
    }
    
    return result
}