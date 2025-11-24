function solution(array, n) {
    const midAnswer = array.filter(i => i === n)
    const answer = midAnswer.length;
    return answer;
}