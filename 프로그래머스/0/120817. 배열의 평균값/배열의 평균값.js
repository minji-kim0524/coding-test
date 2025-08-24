function solution(numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
    const deno = numbers.length
    
    return sum / deno ;
}