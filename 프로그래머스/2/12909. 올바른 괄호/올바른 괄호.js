function solution(s){
    const newStr = s.replace(/\(/g, 1).replace(/\)/g, 0)
    
    const strArr = newStr.split('')
    const strOne = strArr.filter(i => i === '1')
    const strZero = strArr.filter(i => i === '0')
    
    if(strArr[0] === '0' || strArr[strArr.length -1] === '1') {
        return false
    } 
    
      let count = 0
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === '1') {
            count++
        } else {
          count--  
        } 

        if (count < 0) {
         return false   
        }
    }

    if (strOne.length === strZero.length) {
        return true
    } else {
        return false
    }
}