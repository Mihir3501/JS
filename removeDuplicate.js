// This function removes duplicate items from an array, ignoring case sensitivity.
function removeDuplicate(arr) {
    let uniqueItems = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i].toLowerCase();
        if (uniqueItems.indexOf(item) === -1) {
            uniqueItems.push(item);
        } else {
            console.log(`Duplicate item found: ${arr[i]}`);
        }
    }
    return uniqueItems;
}
console.log(removeDuplicate(["apple", "banana","BaNaNa", "Apple", "orange", "banana", "grape"]));
