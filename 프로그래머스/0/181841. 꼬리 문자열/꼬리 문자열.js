function solution(str_list, ex) {
    const result = str_list.filter((str) => !str.includes(ex))
    
    return result.join('')
}