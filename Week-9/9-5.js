const findJudge = (n, trust) => {
    if (n === 1 && !trust.length) return 1;
    const trustCount = new Array(n + 1).fill(0);
    for (let i = 0; i < trust.length; i++) {
        trustCount[trust[i][0]]--;
        trustCount[trust[i][1]]++;
    }
    for (let i = 1; i <= n; i++) {
        if (trustCount[i] === n - 1) return i;
    }
    return -1;
}
