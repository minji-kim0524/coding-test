function solution(strArr) {
    const PART_STRING = "ad"
    
    let result = strArr.filter(i => !i.includes(PART_STRING))
    
    return result
}