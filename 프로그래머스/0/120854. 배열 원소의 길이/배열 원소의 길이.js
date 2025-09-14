function solution(strlist) {
    const lengthArr = []
    
    for (let i = 0; i < strlist.length; i++) {
        const strLength = strlist[i].length
        
        lengthArr.push(strLength)
    }
    
    return lengthArr
}