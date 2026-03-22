function solution(n_str) {
    const string = n_str.split('')
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "0") {
            string.splice(i, 1)
            i -= 1
        }
        else return string.join('')
    }
    

}