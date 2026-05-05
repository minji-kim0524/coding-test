function solution(array) {
    let count = 0
    
    const nums = array.join('').split('')
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === "7") count++
    }

    return count > 0 ? count : 0
}