function maxSubArray(arr) {
    let global_sum = 0;
    let local_sum = 0;
    for (let i = 0; i < arr.length; i++) {
        local_sum = Math.max(local_sum + arr[i], arr[i]);
        global_sum = Math.max(global_sum, local_sum);
    }
    return global_sum;
}
let arr = [1, 2, 3, 4, -10];
console.log(maxSubArray(arr));