function solution(food) {
    food.shift()
    let answer = []
    let leftCountArr = []
    
    for (let i = 0 ; i < food.length; i++) {
        let count = (i+1)
        let el = String(count).repeat(food[i]/2)
        if (el !== "") {
            leftCountArr.push(el)
        }
        count++
    }
    
    answer.push(...leftCountArr, 0, ...leftCountArr.reverse())
    return answer.join('')
}