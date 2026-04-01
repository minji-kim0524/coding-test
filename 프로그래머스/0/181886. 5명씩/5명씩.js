function solution(names) {
    const result = []
    
    for (let i = 0; i < names.length;) {
        result.push(names[i])
        i = i + 5
    }
    
    return result
}