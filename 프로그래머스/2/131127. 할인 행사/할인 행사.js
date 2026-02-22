function solution(want, number, discount) {
  let answer = 0

  const wishList = {}
  for (let i = 0; i < want.length; i++) {
    wishList[want[i]] = number[i]
  }

  for (let i = 0; i <= discount.length - 10; i++) {
    const discountList = {}

    for (let j = i; j < i + 10; j++) {
      discountList[discount[j]] =(discountList[discount[j]] || 0) + 1
    }

    let isValid = true
    
    for (let k = 0; k < want.length; k++) {
      if (discountList[want[k]] !== number[k]) {
        isValid = false
        break
      }
    }

    if (isValid) answer++
  }

  return answer
}