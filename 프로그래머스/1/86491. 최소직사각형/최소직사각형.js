function solution(sizes) {
    let w = 0;
    let h = 0;

    for (const [a, b] of sizes) {
        w = Math.max(w, Math.max(a, b));
        h = Math.max(h, Math.min(a, b));
    }
    return w * h;
}