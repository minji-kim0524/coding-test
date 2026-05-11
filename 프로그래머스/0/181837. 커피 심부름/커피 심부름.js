function solution(order) {
    
    const orderPrice = order.map((menu) => {
        if (menu.includes("cafelatte")) return 5000
        else if (menu.includes("americano")) return 4500
        else return 4500
    })
    
    let result = orderPrice.reduce((acc, cur) => acc + cur, 0)
    
    return result
}