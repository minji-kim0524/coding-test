function solution(my_strings, parts) {
    const result = []
    
    for (let i = 0; i < my_strings.length; i++) {
        let start = parts[i][0]
        let end = parts[i][1]
        result.push(my_strings[i].slice(start, end + 1))
    }
    
    return result.join('')
}