function solution(s) {
    let answer = 0
    
    let firstLetter = ''
    let count = 0
    
    for (let i = 0; i < s.length; i++) {
        if (count === 0) {
            answer ++
            firstLetter = s[i]
        }
        
        if (s[i] === firstLetter) {
            count ++
        } else {
            count --
        }
    }
    
    return answer
}