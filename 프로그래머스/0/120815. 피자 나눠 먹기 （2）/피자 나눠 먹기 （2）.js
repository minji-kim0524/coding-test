function solution(n) {
    const PIZZA_SLICE = 6
    
    for(let i = 1; i <= n ; i++) {
        
        if (i * PIZZA_SLICE >= n) {
            if ((i * PIZZA_SLICE) % n === 0) {
                return i
            }
        }
        else if(n <= PIZZA_SLICE) return 1
    }
}