function solution(n) {
    const startWord = "수"
    const repeatWord = "박수"
    var answer = startWord.padEnd(n, repeatWord);
    return answer;
}