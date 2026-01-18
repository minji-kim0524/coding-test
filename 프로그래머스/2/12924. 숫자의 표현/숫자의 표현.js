function solution(n) {
    let answer = 0;

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            if (i % 2 === 1) answer++;

            const pair = n / i;
            if (pair !== i && pair % 2 === 1) answer++;
        }
    }

    return answer;
}
