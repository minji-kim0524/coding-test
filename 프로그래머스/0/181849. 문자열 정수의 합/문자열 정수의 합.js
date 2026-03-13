function solution(num_str) {
    const number = num_str.split('')
    
    return number.reduce((acc, cur) => Number(acc) + Number(cur))
}