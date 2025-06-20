//DEFINE A ARRAY
var arr = [12,34,54,56];
console.log(arr);

// try to pass data with a different datatype in single array
var arr = [12,23,"Mohit",23.67];
console.log(arr);                     // work normaly means we can store data with different datatye in single array

//print array by loop
var arr = ["mohit" , "Krishna" , "shiva" , "Vishnu"];
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//ARRAYS METHOd
// 1 convert array to string
var arr = [1,2,4,5,6,7,8];
const string = arr.toString();
console.log(string);

// 2 return the elemnt of the given index
var arr = [1,2,4,5,6,7,8];
console.log(arr.at(2));

//3 removes the last element of the array
var arr = [1,2,4,5,6,7,8];
console.log(arr.pop());  // it is printing the deleated element 8
console.log(arr.pop());  // output is 7.

//4 add a new element in the last
var arr = [1,2,4,5,6,7,8];
console.log(arr.push(9));  // now the output of this is 8 
arr.push(9)
console.log(arr);   // now output is 1,2,4,5,6,7,8,9,9    9 is push 2times


//5 remove first element of a array
var arr = [1,2,4,5,6,7,8];
console.log(arr.shift());  //output is 1
arr.shift();
console.log(arr);   //output is 2,4,5,6,7,8


//6 add a elemnt in the starting of the aray
var arr = [1,2,4,5,6,7,8];
console.log(arr.unshift());   // when we not pass any value it is showing the length of array
arr.unshift(90)
console.log(arr);              // the output is 90, 90, 1, 2, 4, 5,6, 7, 8
console.log(arr.length);       // the length of the array is increase


//7 create holes in the array by remove the element
var arr = [1,2,4,5,6,7,8];
delete arr[4];
delete arr[5];
console.log(arr);   // the output is [ 1, 2, 4, 5, <2 empty items>, 8 ]


//8 merge TWO array
var arr1 = [1,2,4,5,6,7,8];
var arr2 = [10,12,14,15];
const arr3 = arr1.concat(arr2);
console.log(arr3);