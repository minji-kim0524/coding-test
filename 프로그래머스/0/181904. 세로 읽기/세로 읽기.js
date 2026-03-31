function solution(my_string, m, c) {
    const result = []
    
    for (let i = c-1; i < my_string.length; ) {
        result.push(my_string[i])
        i = i + m
    }
    
    return result.join('')
}