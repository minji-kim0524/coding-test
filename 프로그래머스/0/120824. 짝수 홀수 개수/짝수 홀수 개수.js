function solution(num_list) {
    const evenArray = []
    const oddArray = []
    
    const result = []
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 ===0) {
            evenArray.push(num_list[i])
        }else if(num_list[i] % 2 ===1) {
            oddArray.push(num_list[i])
        }
    }
    
    const evenLength = evenArray.length
    const oddLength = oddArray.length
    
    result.push(evenLength, oddLength)
    
    return result
}