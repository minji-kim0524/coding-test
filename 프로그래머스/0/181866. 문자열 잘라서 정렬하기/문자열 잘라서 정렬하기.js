function solution(myString) {
    return myString.split('x').filter((w) => w !== "").sort()
}