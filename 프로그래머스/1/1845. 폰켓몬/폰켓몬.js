function solution(nums) {
    let answer
    
    const TAKE_NUM = nums.length/2
    const filterNums = [...new Set(nums)]
    
    if (filterNums.length > TAKE_NUM) {
        answer = TAKE_NUM
    } else {
        answer = filterNums.length
    }
    
    return answer;
}