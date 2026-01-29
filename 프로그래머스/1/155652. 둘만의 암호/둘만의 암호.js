function solution(s, skip, index) {
    const word = s.split('')
    const skipWord = skip.split('')
    const ALPHABET = []
    const ALPHABET_LENGTH = 26
    let transferArr = []
    
    for (let i = 0; i < ALPHABET_LENGTH; i++) {
        let firstEl = 'a'
        let otherEl = String.fromCharCode(firstEl.charCodeAt(0) + i)
        ALPHABET.push(otherEl)
    }
    
    const filterAlphabet = ALPHABET.filter(w => !skipWord.includes(w))
    // console.log(filterAlphabet)
    
    for (let j = 0; j < word.length; j++) {
        let currentIdx = filterAlphabet.indexOf(word[j])
        let nextIdx = currentIdx + index
        
        if (nextIdx >= filterAlphabet.length) {
            nextIdx = nextIdx % filterAlphabet.length
        }
        
        let transferEl = filterAlphabet[nextIdx]
        
        transferArr.push(transferEl)
    }
    
    return transferArr.join('');
}