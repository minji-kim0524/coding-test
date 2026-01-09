function solution(A,B){
    var answer = 0;
    const subResult = []
    
    const sortOfA = A.sort((a,b) => a-b)
    const sortOfB = B.sort((a,b) => b-a)
    
    for (let i = 0; i < A.length; i++) {
        let multiplyNum = sortOfA[i] * sortOfB[i]
        answer += multiplyNum
    }

    return answer
}