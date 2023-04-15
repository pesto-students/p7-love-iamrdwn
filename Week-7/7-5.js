var findPairs = function(nums, k) {
    let arrMap = new Map();
    let uniquePairs = 0;
    if (nums.length == 0 || k < 0) {
        return 0;
    }
    console.log(nums)
    for (numbers of nums) {
        arrMap.set(numbers, (arrMap.get(numbers) + 1) || 1)
    }
    arrMap.forEach((count, num) => {
        if (k == 0) {
            if (count > 1) {
                uniquePairs++;
            }
        } else {
            if (arrMap.has(num + k)) {
                uniquePairs++
            }
        }
    })
    return uniquePairs;
};
let arr = [3, 1, 4, 1, 5, 4, 6];
console.log(findPairs(arr, 2))