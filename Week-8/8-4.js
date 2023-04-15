function areBracketsBalanced(expr) {
    const stack = [];
    const pairs = {'(': ')', '[': ']', '{': '}'};

    for (let i = 0; i < expr.length; i++) {
        const char = expr[i];

        if (pairs[char]) {
            stack.push(char);
        } else if (pairs[stack[stack.length - 1]] === char) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
}
