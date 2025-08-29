function solution(my_string, n) {
    const stringArray = []
    
    for (let i = 0; i < my_string.length; i++) {
        stringArray.push(my_string[i].repeat(n))
    }
    
    return stringArray.join('')
}