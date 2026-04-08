function solution(my_string) {
    const words = my_string.split('')
    const result = []
    
    for (let i = 0; i < words.length; i++) {
        result.push(words.slice(i).join(''))
    }
    
    return result.sort()
}