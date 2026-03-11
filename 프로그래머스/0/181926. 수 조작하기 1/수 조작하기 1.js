function solution(n, control) {
    const rules = {
        w: 1, 
        s: -1,
        d: 10,
        a: -10
    }
    
    const result = control.split('').map((w) => rules[w]).reduce((acc, cur) => acc + cur)
    
    return n + result

}