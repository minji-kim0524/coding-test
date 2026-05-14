function solution(n, slicer, num_list) {
    const a = slicer[0]
    const b = slicer[1]
    const c = slicer[2]
    
    console.log(a, b, c)
    
    switch (n) {
        case 1: 
            return num_list.slice(0, b + 1)
            break
        case 2: 
            return num_list.slice(a)
            break
        case 3:
            return num_list.slice(a, b + 1)
            break
        case 4: 
            const result = []
            let num_filter_list = num_list.slice(a, b + 1)
            for (let j = 0; j < num_filter_list.length; j += c) {
                result.push(num_filter_list[j])   
            }
            
            return result
    }
}