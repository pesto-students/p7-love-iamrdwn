function printNGE(arr) {
    for (let i = 0; i < arr.length; i++) {
        let next = -1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                next = arr[j];
                break;
            }
        }
        console.log(`${arr[i]} -- ${next}`);
    }
}

const arr = [11, 13, 21, 3];
printNGE(arr);
