function solution(ingredient) {
    
    // 빵 - 1, 야채 - 2, 고기 - 3 (순서: 1-2-3-1)
    const HAMBURG = [1,2,3,1]
    let count = 0
    
    for (let i = 0; i <= ingredient.length; i++) {
        if(JSON.stringify(ingredient.slice(i, i+4)) === JSON.stringify(HAMBURG)) {
            count++
            ingredient.splice(i, 4)
            i -= 3
        }
    }
    
    return count;
}