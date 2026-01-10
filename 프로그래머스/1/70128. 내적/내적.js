function solution(a, b) {
    var answer;
    const sumArr = []
    
    for (let i = 0; i < a.length; i++) {
        let sum = a[i] * b[i]
        sumArr.push(sum)
    }
    
    answer = sumArr.reduce((acc, cur) => acc + cur)
    
    return answer;
}