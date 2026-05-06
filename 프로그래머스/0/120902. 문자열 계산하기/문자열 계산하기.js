function solution(my_string) {
    const strings = my_string.split(' ')
    
    let result = Number(strings[0])
    
    for (let i = 1; i < strings.length; i += 2) {
        let operator = strings[i]
        let num = Number(strings[i + 1])
        
        if (operator === '+') {
            result += num
        } else if (operator === '-') {
            result -= num
        }
    }
    
    return result
    
}