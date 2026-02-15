function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b)
    reserve.sort((a, b) => a - b)
    
    for (let i = 0; i < reserve.length; i++) {
        if (lost.includes(reserve[i])) {
            lost.splice(lost.indexOf(reserve[i]), 1)
            reserve.splice(i, 1)
            i--
        }
    }
    
    let count = n - lost.length;
    
    for (let i = 0; i < reserve.length; i++) {
       let reserveEl = reserve[i]
       
       for (let j = 0; j < lost.length; j++) {
           let lostEl = lost[j]
           if (Math.abs(reserveEl - lostEl) === 1) {
                count++
               lost.splice(j, 1)
               break
           }
       }
    }

    return count;
}