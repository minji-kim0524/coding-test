function solution(n) {
    let numArr = []
    
    for (let i = 1; i <= n ; i+=2) {
        numArr.push(i)
    }

    let oddNumArr = numArr.sort((a,b) => a-b);

    return oddNumArr
}