function solution(n) {
    const array = []
    
    for(let i = 0; i <= n; i++) {
        if(i % 2 === 0) {
            array.push(i)
        }
    }
    
    const result = array.reduce((a, b) => a + b)
    
    return result
}