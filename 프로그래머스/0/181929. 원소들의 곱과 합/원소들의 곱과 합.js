function solution(num_list) {
    const multiple = num_list.reduce((acc, cur) => acc * cur)
    const sum = num_list.reduce((acc, cur) => acc + cur)
    const sumSquare = sum ** 2
    
    return multiple < sumSquare ? 1 : 0
}