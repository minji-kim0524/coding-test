function solution(my_string, indices) {
    const wordsArr = my_string.split('')
    indices.sort((a, b) => a - b)
    const indicesArr = []
    
    for (let i = 0; i < indices.length; i++) {
        indicesArr.push(wordsArr[indices[i]])
    }

    const result = wordsArr.filter((_, index) => !indices.includes(index))
    
    return result.join('')
}