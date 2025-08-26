function solution(slice, n) {
        for(let i = 1; i <= n ; i++) {
        
        if (i * slice >= n) {
                return i
        }
        else if(n <= slice) return 1
    }
}