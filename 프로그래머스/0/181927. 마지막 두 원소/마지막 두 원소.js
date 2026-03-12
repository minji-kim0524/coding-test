function solution(num_list) {
    const lastEl = num_list[num_list.length-1]
    const targetEl = num_list[num_list.length-2]
    
    if (lastEl > targetEl) num_list.push(lastEl - targetEl)
    else if (lastEl <= targetEl) num_list.push(lastEl * 2)
    
    return num_list
    
}