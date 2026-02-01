function solution(people, limit) {
    let count = 0;
    people.sort((a, b) => a-b)
    
    let j = people.length -1
    
    for (let i = 0; i <= j; i++) {
        let a = people[i]
        let b = people[j]
        let sum = a + b
        
        if (sum <= limit) {
            j--
        } else {
            j--
            i--
        }
        count++   
    }
    
    return count;
}