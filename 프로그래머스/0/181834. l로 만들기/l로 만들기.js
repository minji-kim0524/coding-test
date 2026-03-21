function solution(myString) {
    const string = myString.split('')
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] < "l") string[i] = "l"
    }
    
    return string.join('')
}