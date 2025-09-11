function solution(n) {
    const array = n.toString().split('').map(Number)
    
    const sumArray = array.reduce((acc, current) => acc + current)
    
    return sumArray
}