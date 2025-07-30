let cars = ["BMW", "Audi", "Mercedes", "Tesla"];

console.log(cars.length);//to get the length of the array
console.log(cars);
cars[2] = "Mitsubishi" //replace the element at index 2 with "Mitsubishi"
console.log(cars);
//push() method adds an element to the end of an array.
cars.push("Ferrari");
cars.push("porsche");
console.log(cars);
//pop() method removes the last element from an array and returns that element.
cars.pop()
cars.pop()
console.log(cars);
//unshift() method adds an element to the beginning of an array.
cars.unshift("TATA")
cars.unshift("Hyundai")
console.log(cars);
//shift() method removes the first element from an array and returns that element.
cars.shift()
cars.shift()
console.log(cars);

//slice() method returns a new array containing a portion of the original array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = arr.slice(0, 2);
console.log(newArr);
//splice() method modifies the original array by removing or replacing elements and/or adding new elements.
arr.splice(0, 2, "Hello")
console.log(arr);
//so what if i want to remove the elements without using splice() method? so what can we do?

//we can use the filter() method to create a new array with all elements that pass the test 
// implemented by the provided function.
let filteredArr = arr.filter(function (element) {
    return element * 2;
})
console.log(filteredArr);

//remove by value using  for loop
let arr2 = [1,2,3,4,5,6]
let valueToremove = 3;
let result = []

for (let i= 0; i< arr2.length; i++){ 
    if(arr2[i] !== valueToremove){ // check if the current element is not equal to the value to remove
        result.push(arr2[i])
    }
}

console.log(result,"remove by value using for loop:");


//concat() method is used to merge two or more arrays.
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c);

//indexof() method returns the first index at which a given element can be found in the array.
let arr1 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(arr1.indexOf(3))//output: 2
console.log(arr1.indexOf(3, 4))//output: 5 

//incude() method determines whether an array includes a certain value 
// among its entries, returning true or false as appropriate.


