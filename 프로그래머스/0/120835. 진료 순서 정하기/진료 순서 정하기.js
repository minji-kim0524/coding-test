function solution(emergency) {
    const arraySort = [...emergency].sort((a,b) => b-a)
    
    const result = []
    
    emergency.map((x) => result.push(arraySort.indexOf(x)+1))
    
    return result
}