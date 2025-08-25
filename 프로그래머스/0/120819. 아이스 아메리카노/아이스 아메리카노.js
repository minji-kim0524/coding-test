function solution(money) {
    const ICE_COFFEE_PRICE = 5500;
    
    let a = parseInt(money / ICE_COFFEE_PRICE);
    let b = money - (ICE_COFFEE_PRICE * a)
    const result = [a, b];
    
    return result
}