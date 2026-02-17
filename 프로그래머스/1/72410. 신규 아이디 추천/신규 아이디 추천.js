function solution(new_id) {
    
    const step_1 = new_id.toLowerCase()
    const step_2 = step_1.replace(/[^a-z0-9\-_.]/g, '')
    const step_3 = step_2.replace(/\.{2,}/g, '.')
    let step_4 = step_3.replace(/^\.+|\.+$/g, '')
    const step_5 = step_4 === "" ? 'a' : step_4
    let step_6 = step_5.length >= 16 ? step_5.substring(0, 15).replace(/\.+$/, '') : step_5
    let step_7 = step_6.length <= 2 ? step_6.padEnd(3, step_6[step_6.length -1]) : step_6
    
    return step_7;
}