function solution(absolutes, signs) {
    const filterArr = []
    
    for (let i = 0; i < absolutes.length ; i++) {
        if (signs[i] === false) {
            const filterNumber = absolutes[i] * -1
            filterArr.push(filterNumber)
        } else {
            filterArr.push(absolutes[i])
        }
    }
    let answer = filterArr.reduce((acc, cur) => acc + cur);
    return answer;
}