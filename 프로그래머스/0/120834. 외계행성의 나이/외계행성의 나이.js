function solution(age) {
    const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    
    age = String(age).split('')
    
    const mappingData = age.map(i => data[i])
    const result = mappingData.join('')
    
    return result
}