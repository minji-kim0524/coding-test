function solution(my_string) {
    const vowel = ["a", "e", "i", "o", "u"]
    
    const word = my_string.split('')
    
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (word[i] === vowel[j]) {
                word.splice(i, 1)
                i--
            }
        }
    }
    
    return word.join('')
}