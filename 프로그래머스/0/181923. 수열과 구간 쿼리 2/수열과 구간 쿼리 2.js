function solution(arr, queries) {
    let result = []
    
    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0]
        let end = queries[i][1]
        let std = queries[i][2]
        
        let target = arr.slice(start, end + 1).filter((n) => n > std)
        
        if (target.length > 0) result.push(Math.min(...target))
        else result.push(-1)
    }
    
    return result
}