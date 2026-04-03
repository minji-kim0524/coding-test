function solution(my_string) {
    const words = my_string.split('')
    return [...new Set(words)].join('')
}