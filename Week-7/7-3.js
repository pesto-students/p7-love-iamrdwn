function sortArr(nums) {


    console.log(`Unsorted Array ${nums}`)
    let low = 0;
    let mid = 0;
    let high = (nums.length) - 1;
    let temp = 0;
    //   console.log(nums[high]);

    while (mid <= high) {

        if (nums[mid] == 0) {
            temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low++;
            mid++

        } else if (nums[mid] == 1) {

            mid++;
        } else {

            temp = nums[high];
            nums[high] = nums[mid];
            nums[mid] = temp;
            high--;

        }

    }

    return nums


};





let arr = [0, 2, 1, 2, 0, 2, 2, 2, 1, 1, 1];

console.log(sortArr(arr)) //[0,0,1,2,2]