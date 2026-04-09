function solution(my_string, s, e) {
    const word = my_string.split('')
    const target = word.slice(s, e+1).reverse()
    
    word.splice(s, (e-s+1), ...target)
    
    return word.join('')
}