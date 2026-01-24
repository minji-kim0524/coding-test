function solution(a, b) {
    let answer = '';
    
    const days = {
        0: "SUN",
        1: "MON", 
        2: "TUE",
        3: "WED",
        4: "THU", 
        5: "FRI",
        6: "SAT"
    }
    
    const todayDate = new Date(2016, a-1, b)
    const todayDayNum = todayDate.getDay()
    
    answer = days[todayDayNum]
    return answer
}