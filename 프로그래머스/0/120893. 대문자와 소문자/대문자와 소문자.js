function solution(my_string) {
    const word = my_string.split('')
    let answer = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            answer += word[i].toLowerCase()
        } else {
            answer += word[i].toUpperCase()
        }
    }

    return answer;
}