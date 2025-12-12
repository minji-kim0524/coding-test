function solution(name, yearning, photo) {
    const answer = []

  for (let i = 0; i < photo.length; i++) {
    const includesIndex = photo[i].map(p => name.indexOf(p))
    
    const includesYearning = includesIndex.reduce((acc, cur) => {
      if (cur !== -1) acc.push(yearning[cur]);
      return acc;
    }, []);

    const result = includesYearning.reduce((acc, cur) => {
      return acc + cur
    }, 0)

    answer.push(result)
  } 

  return answer
}