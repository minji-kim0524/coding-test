function solution(left, right) {
    var answer;
    
    const numArr = []
    // const divisorArr = []
    
    for (let i = left; i <= right; i++) {
        let num = i
        numArr.push(num)
    }
    
    const divisorArr = numArr.map(num => {
        const divisor = []
        
        for (let j = 0; j <= num; j++) {
            if (num % j === 0) {
                divisor.push(j)
            }
        }
        return divisor
    })
    
    const divisorCount = numArr.map((value, index) => ({
        key: value,
        value: divisorArr[index].length
    }))
    
    answer = divisorCount.reduce((acc, cur) => {
        if (cur.value % 2 === 0) {
            return acc + cur.key
        } else {
            return acc - cur.key
        }
    }, 0)
    
    
    return answer;
}