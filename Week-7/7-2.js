function getSpiralMatrix(matrix) {
    let res = [];
    let left = 0,
        right = matrix[0].length;
    let top = 0,
        bottom = matrix.length;
    while (left < right && top < bottom) {
        // print the first row:
        for (let i = left; i < right; i++) {
            res.push(matrix[top][i]);
        }
        top++;
        //get the values in rightmost column
        for (let i = top; i < bottom; i++) {
            res.push(matrix[i][right - 1]);
        }
        right--;
        if (!(left < right && top < bottom)) {
            break;
        }
        //get all bottom row numbers
        for (let i = right - 1; i > left - 1; i--) {
            res.push(matrix[bottom - 1][i]);
        }
        bottom--;
        //get left numbers
        for (let i = bottom - 1; i > top - 1; i--) {
            res.push(matrix[i][left]);
        }
        left++;
    }
    console.log(res);
}
let mtr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
getSpiralMatrix(mtr);