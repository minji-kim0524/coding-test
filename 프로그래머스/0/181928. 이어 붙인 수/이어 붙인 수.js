function solution(num_list) {
    // 홀수
    const odd = Number(num_list.filter((num) => num % 2 !== 0).join(''))
    
    // 짝수
    const even = Number(num_list.filter((num) => num % 2 === 0).join(''))
    
    return odd + even
}