function solution(s){
    const wordArr = s.toLowerCase().split('')
    
    const WORD_P = "p"
    const WORD_Y = "y"
    
    const arrayOfP = wordArr.filter(w => w === WORD_P)
    const arrayOfY = wordArr.filter(w => w === WORD_Y)
    
    const numberOfP = arrayOfP.length
    const numberOfY = arrayOfY.length
    
    if (numberOfP === numberOfY) {
        return true
    } else if (numberOfP === 0 && numberOfY === 0) {
        return true
    } else {
        return false
    }
}