function solution(a, b, n) {
    let answer
    let remain
    let quotient
    const count = []
    
    while(a <= n) {
        quotient = Math.trunc(n / a)
        remain = n % a
        count.push(quotient * b)
        n = (quotient * b) + remain
    }

    answer = count.reduce((acc, cur) => acc + cur)
    return answer
}