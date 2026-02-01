function solution(s) {

    let binaryNum = s
    
    let changeCount = 0
    let zeroCount = 0
    
    while (binaryNum !== '1') {
        let oneCount = 0
        
        for (const num of binaryNum) {
        if (num === '0') {
            zeroCount++
        } else {
            oneCount++    
        }
    }
 
        binaryNum = oneCount.toString(2)
        changeCount++
    }
    
    return [changeCount, zeroCount]
}