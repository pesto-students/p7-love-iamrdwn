function hasDuplicate(arr) {
    let set = new Set(arr);
    if (set.size === arr.length) {
        return false;
    } else {
        return true;
    }
}
console.log(hasDuplicate([1, 2, 2, 3, 4]));