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


// Completely avoid array methods (no indexOf)

function removeDuplicate(arr) {
    let uniqueItems = [];

    for (let i = 0; i < arr.length; i++) {
        let Duplicate = false;
        let currentItem = arr[i].toLowerCase();
        for (let j = 0; j < uniqueItems.length; j++) {
            if (uniqueItems[j].toLowerCase() === currentItem) {
                Duplicate = true;
                console.log(`Duplicate item found: ` + arr[i]);
                break
            }
        }
        if (!Duplicate) {
            uniqueItems.push(arr[i]);
        }
        else {
            // console.log(`Duplicate item found new: ` + arr[i]);
        }
    }
    return uniqueItems
}
console.log(removeDuplicate(["apple", "banana", "BaNaNa", "Apple", "orange", "banana", "grape"]));


//remove duplicate using set

const fruits = ["apple", "banana", "BaNaNa", "Apple", "orange", "banana", "grape"];

function removeDuplicatee(arr){
    return [...new Set(arr).map(item => item.toLowerCase())]
        .filter((item, index, self) => self.indexOf(item) === index);
}
console.log(removeDuplicatee(fruits));
