function solution(n) {
    const PIZZA_SLICE = 7
    
    for(let i = 1; i <= n ; i++) {
        
        if (i * PIZZA_SLICE >= n) return i
        else if(n <= PIZZA_SLICE) return 1
    }
}