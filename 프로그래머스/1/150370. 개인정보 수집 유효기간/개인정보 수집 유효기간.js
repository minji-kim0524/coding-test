function solution(today, terms, privacies) {
  const date = new Date(today.replace(/\./g, "-"))

  const typeArr = terms.map(item => item.split(' ')[0])
  const monthArr = terms.map(item => item.split(' ')[1])

  const privaciesDate = privacies.map(item => item.split(' '))

  const expiration = []

  for (let i = 0; i < privacies.length; i++) {
    const [dateStr, type] = privaciesDate[i]
    const idx = typeArr.indexOf(type);
    const monthAdd = Number(monthArr[idx]); 

    const d = new Date(dateStr.replace(/\./g, "-"));

    d.setMonth(d.getMonth() + monthAdd);

    d.setDate(d.getDate() - 1);

    expiration.push(d);
  }

  const result = [];
  for (let i = 0; i < expiration.length; i++) {
    if (expiration[i] < date) {
      result.push(i + 1);
    }
  }

  return result;
}