function solution(cipher, code) {
    let word = []
    
    for (let i = 1; i <= cipher.length; i++) {
        let idx = i * code
        if (idx > cipher.length) break
        word.push(cipher[idx - 1])
    }
    
    return word.join('')
}