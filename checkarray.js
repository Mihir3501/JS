//check weather an 'input' is an array or not

function checkArr(input){
    if (Array.isArray(input)){
        console.log(("Input is an array"));
        return true
    }
    else{
        console.log(("Input is not an array"));
        return false;
    }
}
console.log(checkArr("hello"));
console.log(checkArr([1,2,3,4]));


//check weather an 'input' is an array or not without using Array.isArray() or any array method
function checkArray(input){
    if (Object.prototype.toString.call(input)=== '[object Array]'){ //using Object.prototype.toString() to check if input is an array or not
        console.log(("Input is an Array"));
        return true;
    }
    else{
        console.log(("Input is not Array"));
        return false;
    }
}
console.log(checkArray([1,2,3,4]));

