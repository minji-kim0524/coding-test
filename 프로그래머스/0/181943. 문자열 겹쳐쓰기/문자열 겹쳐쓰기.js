function solution(my_string, overwrite_string, s) {
    const length = overwrite_string.length
    let start = my_string.slice(0, s)
    let end = my_string.slice(s + length)
    
    return start + overwrite_string + end
}