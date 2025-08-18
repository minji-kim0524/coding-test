function solution(my_string, alp) {
    if (my_string.includes(alp)) {
        const word = alp.toUpperCase()
        
        return my_string.replaceAll(alp, word)
    }else {
        return my_string
    }
}

solution("orange", "e")