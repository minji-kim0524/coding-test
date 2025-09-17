function solution(array) {
    const maxValue = Math.max(...array)
    const maxValueIndex = array.indexOf(maxValue)
    
    const result = []
    result.push(maxValue, maxValueIndex)
    
    return result
}