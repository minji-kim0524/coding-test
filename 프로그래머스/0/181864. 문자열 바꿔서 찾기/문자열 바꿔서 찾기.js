function solution(myString, pat) {
    const string = myString.split('')
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "A") string[i] = "B"
        else if (string[i] === "B") string[i] = "A"
    }
    
    return string.join('').includes(pat) ? 1 : 0

}