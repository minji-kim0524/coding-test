function solution(arr) {
    const LENGTH = arr.length
    let sum = arr.reduce((acc,cur) => acc + cur, 0);
const answer = sum / LENGTH
    return answer;
}