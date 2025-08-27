function solution(price) {
    const FIVE_DISCOUNT = 0.05
    const TEN_DISCOUNT = 0.1
    const TWENTY_DISCOUNT = 0.2
          
    if (price >= 100000 && price < 300000) {
        return Math.trunc(price * (1-FIVE_DISCOUNT))
    }else if(price >= 300000 && price < 500000) {
        return Math.trunc(price * (1-TEN_DISCOUNT))
    }else if(price >= 500000 && price <= 1000000) {
        return Math.trunc(price * (1-TWENTY_DISCOUNT))
    }else return price
}