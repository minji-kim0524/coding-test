function solution(n) {

    const DIVIDE_NUM = 1234567
    
    let a = 0
    let b = 1
    
    for (let i = 2; i <= n; i++) {
        let c = (a + b) % DIVIDE_NUM
        a = b
        b = c
    }
    
    return b
}