function solution(numbers) {
    const std = Array.from({length: 10}, (_, i) => 1 * i)
    
    const setNum = new Set(numbers)

    const differ = std.filter(n => !setNum.has(n));
    
    const answer = differ.reduce((acc, cur) => acc + cur, 0)
    
    return answer;
}