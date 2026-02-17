function solution(dartResult) {
    let score = 0;
    
    const start = dartResult.match(/\d+[SDT][*#]?/g)
    const table = []
    
    for (let i = 0; i < start.length; i++) {
        let check = start[i]
        let num = Number(check.match(/\d+/)[0])
        
        if (check.includes('S')) {
            check = num**1
        } else if (check.includes('D')) {
            check = num**2
        } else if (check.includes('T')) {
            check = num**3
        }
        
        if (start[i].includes("*")) {
            check = check * 2
            if (i > 0) table[i-1] *= 2
        } else if (start[i].includes("#")) {
            check = check * -1
        }
        
        table.push(check)
    }
    
    score = table.reduce((acc, cur) => acc + cur, 0)
    return score;
}