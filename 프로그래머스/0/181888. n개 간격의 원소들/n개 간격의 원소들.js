function solution(num_list, n) {
    const result = []
    
    for (let idx = 0; idx < num_list.length; ) {
        result.push(num_list[idx])
        idx = idx + n
    }
    
    return result
}