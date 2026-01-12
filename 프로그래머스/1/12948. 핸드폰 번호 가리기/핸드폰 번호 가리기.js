function solution(phone_number) {
    var answer
    const LENGTH = phone_number.length
    
    const hidden_number = phone_number.slice(0, LENGTH - 4)
    
    answer = "*".repeat(hidden_number.length) + phone_number.slice(hidden_number.length)
    
    return answer;
}