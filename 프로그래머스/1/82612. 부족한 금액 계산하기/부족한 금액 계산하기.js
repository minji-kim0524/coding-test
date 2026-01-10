function solution(price, money, count) {
    var answer;
    const sumArr = []
    let totalPrice = 0
    
    for (let i = 1; i <= count; i++) {
        totalPrice += price * i
    }
    
    if (totalPrice < money) {
        answer = 0
    } else {
        answer = totalPrice - money
    }

    return answer;
}