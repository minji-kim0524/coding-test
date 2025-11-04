function solution(s1, s2) {
    const total = s1.concat(s2)
    const duplicate = s1.filter(item => s2.includes(item))

    const answer = duplicate.length
    return answer;
}