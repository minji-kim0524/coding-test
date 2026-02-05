function solution(s, n) {
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
        
        if (s[i] === ' ') {
            answer += ' '
        } else {
            const standard = s[i] === s[i].toUpperCase() ? 
                  "A".charCodeAt(0) : "a".charCodeAt(0)
        
            answer += String.fromCharCode(standard + (s[i].charCodeAt(0) - standard + n) % 26)   
        }
    }
    
    return answer;
}