function solution(answers) {
    let answer = [];
    
    const ONE = [1,2,3,4,5]
    const TWO = [2, 1, 2, 3, 2, 4, 2, 5]
    const THREE = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    let one = 0
    let two = 0
    let three = 0
    let match = []
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === ONE[i % ONE.length]) one++
        if (answers[i] === TWO[i % TWO.length]) two++
        if (answers[i] === THREE[i % THREE.length]) three++
    }
    match.push(one,two,three)
    
    let max = Math.max(...match)
    
    for (let i = 0; i < match.length; i++) {
        if (match[i] === max) answer.push(i+1)
    }
    
    return answer.sort((a, b) => a-b);
}