function solution(n, k) {
    const LAMB_COST = 12000
    const DRINK_COST = 2000
    
    const service = parseInt(n/10)

    if (n >= 10) {
        return (n*LAMB_COST) + ((k-service)*DRINK_COST)
    }else {
        return (n*LAMB_COST) + (k*DRINK_COST)
    }
}