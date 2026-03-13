function solution(numbers) {
    numbers.sort((a, b) => b - a)
    const value1 = numbers[0] * numbers[1]
    const value2 = numbers.at(-1) * numbers.at(-2)
    
    return value1 > value2 ? value1 : value2
}