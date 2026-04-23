function solution(array, n) {
    // 1. array 의 정수와 n 의 차이(절대값)를 differ 배열에 저장
    // 2. differ 배열의 최소값 확인 -> Math.min() 활용
    // 3. 최소값의 인덱스 확인 -> findIndex
    // 4. array 배열 내 해당 인덱스값 return
    
    const differ = []
    
    for (let i = 0; i < array.length; i++) {
        let differValue = Math.abs(array[i] - n)
        differ.push(differValue)
    }
    
    const min = Math.min(...differ)
    let result = array.filter((_, i) => differ[i] === min)
    
    return Math.min(...result)
    
}