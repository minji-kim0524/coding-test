function solution(t, p) {
    
    const STANDARD_LENGTH = p.length
    let arr = []
    
    for (let i = 0; i < t.length; i++) {
        const partWord = t.slice(i, i + STANDARD_LENGTH)
        if (partWord.length === STANDARD_LENGTH) {
            arr.push(partWord)
        } 
    }
    
    let answer = arr.filter(w => w <= p).length
    
    return answer;
}