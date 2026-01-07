function solution(s) {
    var answer = '';
    
    const strArr = s.split(' ')
    
    for (let i = 0; i <strArr.length; i++) {
        if(strArr[i].charAt(0) === Number) {
            strArr[i] = strArr[i].charAt(0) + strArr[i].slice(1).toLowerCase()
        } else {
            strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1).toLowerCase()
        }
    }
    
    answer = strArr.join(' ')
    
    return answer;
}