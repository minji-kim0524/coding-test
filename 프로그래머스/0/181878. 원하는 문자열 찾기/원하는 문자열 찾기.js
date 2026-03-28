function solution(myString, pat) {
    const word = myString.toLowerCase()
    const target = pat.toLowerCase()
    
    return word.includes(target) ? 1 : 0
}