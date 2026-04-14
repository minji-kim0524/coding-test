function solution(myString, pat) {
    const string = myString.split('')
    const patString = pat.split('')
    const endPatString = patString[patString.length - 1]
    
    for (let i = -1; i <= 0; i--) {
        if(string.at(i) === endPatString) {
            return string.slice(0, string.length + i + 1).join('')
        }
    }
}