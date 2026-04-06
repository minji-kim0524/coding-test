function solution(order) {
    let count = 0
    const orderArr = String(order).split('')
    
    
    for (let i = 0; i < orderArr.length; i++) {
        if (orderArr[i] === '3' || orderArr[i] === '6' || orderArr[i] === '9') count++
        continue
    }
    
    return count
}