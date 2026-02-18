function solution(X, Y) {
    const x = X.split('')
    const y = Y.split('')
    const count = Array(10).fill(0)
    let stack = []

    for (let i = 0; i < y.length; i++) {
        count[y[i]]++
    }

    for (let i = 0; i < x.length; i++) {
        let a = x[i]
        
        if (count[a] > 0) {
            stack.push(a)
            count[a]--
        }
    }
    
    if (stack.length === 0) return "-1"
    if (stack[0] === "0") return "0"; 
    return stack.sort((a, b) => b - a).join('')
}
