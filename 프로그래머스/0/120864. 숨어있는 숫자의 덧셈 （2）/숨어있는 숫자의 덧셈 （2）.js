function solution(my_string) {
    let result = 0
    const string = my_string.split(/[a-z]+/i)
    
    return string.reduce((acc, cur) => Number(acc) + Number(cur), 0)
}