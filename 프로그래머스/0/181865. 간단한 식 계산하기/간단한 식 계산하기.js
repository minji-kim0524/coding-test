function solution(binomial) {
    const seperated = binomial.split(' ')
    const a = Number(seperated[0])
    const op = seperated[1]
    const b = Number(seperated[2])
    
    switch(op) {
        case '+' : 
            return a + b
            break
        case '-' :
            return a - b
            break
        case '*' :
            return a * b
            break
    }
    
}