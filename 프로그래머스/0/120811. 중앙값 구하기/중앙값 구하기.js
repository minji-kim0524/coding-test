function solution(array) {
    let ascenArray = array.sort((a, b) => a-b)
    let i = parseInt((ascenArray.length-1) / 2)
    
    return ascenArray[i]
}