function solution(nums) {
    let count = 0
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k]
                
                let isPrime = true
                
                for (let n = 2; n * n <= sum; n++) {
                    if (sum % n === 0) {
                        isPrime = false
                        break
                    }  
                }
                if (isPrime) count++
            }
        }
    }
    
    return count
}