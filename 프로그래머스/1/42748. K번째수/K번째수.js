function solution(array, commands) {
    var answer = [];
    
    for (let i = 0; i < commands.length; i++) {
         let start = commands[i][0]
         let ends = commands[i][1]
         let idx = commands[i][2]
         
         let selectedNum = array.slice(start-1, ends).sort((a, b) => a-b)[idx-1]
         answer.push(selectedNum)
    }
    
    return answer;
}