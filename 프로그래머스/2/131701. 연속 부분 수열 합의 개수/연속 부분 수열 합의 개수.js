function solution(elements) {
    const length = elements.length;    
    const circle = elements.concat(elements);
    const sums = new Set();

    for (let size = 1; size <= length; size++) {
        for (let i = 0; i < length; i++) {
            const slice = circle.slice(i, i + size)
            const sum = slice.reduce((acc, cur) => acc + cur, 0)
            sums.add(sum)
        }
    }

    return sums.size
}