function solution(i, j, k) {
    let count = 0
    
    for (let x = i; x <= j; x++) {
        const seperate = String(x).split('')
        
        seperate.map((s) => {
            if (s.includes(k)) count++
        })
    }
    
    return count
    
}