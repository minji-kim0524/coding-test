function solution(seoul) {
    var answer;
    
    if (seoul.includes("Kim")) {
        let idx = seoul.indexOf("Kim")
        answer = `김서방은 ${idx}에 있다`
    }
    
    return answer;
}