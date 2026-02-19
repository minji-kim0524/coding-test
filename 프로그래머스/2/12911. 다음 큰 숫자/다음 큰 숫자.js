function solution(n) {

    const binary = n.toString(2)    
    let count = 0
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') count++
    }
    
    for (let next = n + 1; ; next++) {
        let nextCount = 0
        const nextBinary = next.toString(2)
        
        for (let j = 0; j < nextBinary.length; j++) {
            if (nextBinary[j] === '1') nextCount++
        }
        
        if (count === nextCount) return next
    }
}