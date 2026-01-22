process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const star = "*"
    const widthStar = star.repeat(a) + "\n"
    console.log(widthStar.repeat(b))
    // console.log(a);
    // console.log(b);
});