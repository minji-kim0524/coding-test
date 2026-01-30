function solution(k, m, score) {
    let totalPrice = 0
    
    const ascendScore = score.sort((a, b) => b - a)
    
    for (let i = 0; i + m <= ascendScore.length; i+=m) {
        let seperate = ascendScore.slice(i, i + m)
        let unitPrice = Math.min(...seperate)
        totalPrice += unitPrice * m
    } 
    
    if (ascendScore.length < m) {
        answer = 0
    }
    
    return totalPrice;
}