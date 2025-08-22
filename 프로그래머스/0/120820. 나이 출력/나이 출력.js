function solution(age) {
    let currentYear = 2022
    let birthYear = currentYear - age

    return birthYear + 1;
}

console.log(solution(40))