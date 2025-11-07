function solution(arr, divisor) {
    const answer = arr.filter(i => i % divisor === 0).sort((a,b) => a-b)
    
    const empty = -1
    
   if(answer.length == 0) {
       answer.push(empty)
       return answer
   } else {
       return answer
   }
}