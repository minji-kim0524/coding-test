function solution(sides) {
    sides.sort((a, b) => a - b)
    
    const max = sides[2]
    const legs = sides[0] + sides[1]
    
    if (max < legs) return 1
    else return 2
    
}