function solution(rsp) {
    const scissors = "2"
    const rock = "0"
    const paper = "5"
    
    let answer = ''
    
    for (let i = 0; i < rsp.length; i++) {
        let current = rsp[i]
        
        if (rsp[i] === scissors) answer += rock
        else if (rsp[i] === rock) answer += paper
        else answer += scissors
    }
    
    return answer
}