function solution(n, m) {
    var answer = [];
    
    // 최대공약수  
    function gcd(n, m) {
        if (m === 0) return n;
        return gcd(m, n % m);
    }

 
    // 최소공배수
    let LCM = (n*m) / gcd(n, m)
    
    answer = [gcd(n, m), LCM]
    return answer;
}