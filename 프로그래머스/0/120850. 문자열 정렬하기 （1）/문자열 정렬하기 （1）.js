function solution(my_string) {
    const seperate = my_string.replace(/[^0-9]/g, '')
    const numberArray = seperate.split("")
    
    const numberSort = numberArray.sort(function(a,b) {return a-b})
    const result = numberSort.map(Number)
    
    return result
}