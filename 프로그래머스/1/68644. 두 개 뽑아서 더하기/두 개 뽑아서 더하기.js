function solution(numbers) {
    var answer = [];
    let sum = []
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sum.push(numbers[i]+ numbers[j])
        }
    }
    
    answer = sum.filter((n, idx) => sum.indexOf(n) === idx).sort((a, b) => a-b)
    
    return answer;
}