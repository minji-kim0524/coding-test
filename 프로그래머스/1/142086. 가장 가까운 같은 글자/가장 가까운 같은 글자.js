function solution(s) {
    var answer = [];
    
    const stringArr = s.split('')
    const indexCheckArr = {}
    
    stringArr.forEach((item, index) => {
        if (indexCheckArr[item] === undefined) {
            answer.push(-1)
        } else {
            answer.push(index - indexCheckArr[item])
        }
        
        indexCheckArr[item] = index
    })
    
    return answer;
}