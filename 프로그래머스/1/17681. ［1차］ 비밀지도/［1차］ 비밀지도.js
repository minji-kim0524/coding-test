function solution(n, arr1, arr2) {
    let answer = [];
    let binary = ""
    
    const map1 = arr1.map(num => num.toString(2).padStart(n, 0))
    const map2 = arr2.map(num => num.toString(2).padStart(n, 0))
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (map1[i][j] === '1' || map2[i][j] === '1') {
                binary += '#'
            } else {
                binary += ' '
            }
        }
    }
    
    for (let k = 0; k < binary.length; k += n) {
        answer.push(binary.slice(k, k+n))
    }
    
    return answer;
}