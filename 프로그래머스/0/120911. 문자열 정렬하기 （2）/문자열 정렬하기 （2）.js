function solution(my_string) {
    const lowerCase = my_string.toLowerCase()
    const answer = lowerCase.split('').sort().join('')
    return answer;
}