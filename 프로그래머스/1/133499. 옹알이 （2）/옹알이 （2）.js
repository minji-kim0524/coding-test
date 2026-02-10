function solution(babbling) {
    let count = 0;
 
    const words = ["aya", "ye", "woo", "ma"]
    
    for (let i = 0; i < babbling.length; i++) {
        let babblingWord = babbling[i]
        let idx = 0
        let prev = ""
        
        while (babblingWord.length > idx) {
            let isMatched = false
            
            for (let j = 0; j < words.length; j++) {
            if (babblingWord.startsWith(words[j], idx) && words[j] !== prev) {
                idx += words[j].length
                prev = words[j]
                isMatched = true
                break
                }
            }
            
            if (!isMatched) break
        }
        
        
        if(babblingWord.length === idx) count++
    }
    
    return count;
}