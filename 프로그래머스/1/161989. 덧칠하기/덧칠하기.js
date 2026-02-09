function solution(n, m, section) {
    let count = 0;
    let end = 0
    
    for (let i = 0; i < section.length; i++) {
        if (section[i] > end) {
            count++
            end = section[i] + m - 1
        }
    }
    
    return count;
}