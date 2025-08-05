
// console.log(typeof(parseInt("10+2" ))); // output: 10
// console.log(typeof(parseInt("7FM"))); // output: 7
// console.log(typeof(parseInt("MF7")));// output: NaN

// console.log(typeof(isNaN('Mihir')));


// console.log([1,2,3].map(num=> {// arrow function
//     if(num > 0 ) return // num is positive
//     else return num; // if not positive, return the number itself
//     return num * 2; // this line will never be executed
// }));
 

// function abc(){
//  return ;
// }
// console.log(abc())

//syncronous code execution example
console.log('data fetching started')

function fetchData (){
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve("data is received");
        }, 3000)
    })
}
fetchData().then(data=>console.log(data))

console.log("data fetch is complete")