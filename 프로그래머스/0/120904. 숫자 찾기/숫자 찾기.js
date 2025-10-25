function solution(num, k) {
    const str = String(num);
    const target = String(k);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      return i + 1; 
    }
  }
  return -1;
}