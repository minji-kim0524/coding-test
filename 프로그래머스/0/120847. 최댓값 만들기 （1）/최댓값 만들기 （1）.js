function solution(numbers) {
    const array = numbers.sort(function (a, b) {
  return b - a;
})
    const first = array[0]
    const second = array[1]
    
    const answer = first * second
    
    return answer
}