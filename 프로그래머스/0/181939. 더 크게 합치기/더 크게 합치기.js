function solution(a, b) {
    const str1 = Number(a.toString() + b.toString())
    const str2 = Number(b.toString() + a.toString())
    
    return str1 === str2 ? str1 : Math.max(str1, str2)
}