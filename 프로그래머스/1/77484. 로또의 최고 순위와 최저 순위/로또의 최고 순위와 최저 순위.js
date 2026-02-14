function solution(lottos, win_nums) {
    
    let count = 0
    let zero = 0
    
    for (let i = 0; i < lottos.length; i++) {
        if (win_nums.includes(lottos[i])) count++
        if (lottos[i] === 0) zero++
    }
    
    let max = count + zero
    let min = count
    
    let maxLank = 0
    let minLank = 0
    
    switch (max) {
        case 6 : 
            maxLank = 1;
            break
        case 5: 
            maxLank = 2;
            break
        case 4: 
            maxLank = 3;
            break
        case 3: 
            maxLank = 4;
            break
        case 2: 
            maxLank = 5;
            break
        default : 
            maxLank = 6;
            break
    }
    
        switch (min) {
        case 6 : 
            minLank = 1;
            break
        case 5: 
            minLank = 2;
            break
        case 4: 
            minLank = 3;
            break
        case 3: 
            minLank = 4;
            break
        case 2: 
            minLank = 5;
            break
        default : 
            minLank = 6;
            break
    }

    return [maxLank, minLank];
}