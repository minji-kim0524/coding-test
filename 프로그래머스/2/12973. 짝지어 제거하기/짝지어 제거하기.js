function solution(s)
{

    var walk = [];
    for (var n of s) {
        var last = walk.pop();
        if (last != n) {
            last && walk.push(last);
            walk.push(n);
        }
    }
    return walk.length ? 0 : 1;
}
