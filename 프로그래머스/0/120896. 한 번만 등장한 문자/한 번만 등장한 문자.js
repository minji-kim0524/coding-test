function solution(s) {
    const words = s.split('').sort()
    
    const duplicate = new Set(words.filter((item, index) => words.indexOf(item) !== index))
    const removeDuplicate = [...duplicate]
    
    const result = words.filter((item) => !removeDuplicate.includes(item))
    
    return result.join('')
}