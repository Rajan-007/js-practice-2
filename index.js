/*
// Template literals

let firstname = "Aravinth";
let lastname = "Rajan";
let place = " chennai";

let msg = `${firstname} ${lastname} lives in ${place}`;
console.log(msg);

// Arrays

let cities = ["chennai ","mumbai","kolkata","delhi"];
let points = [85,58,88,90,98];

// length-total elements of array

console.log(cities.length);
console.log(points.length);

// Indexing

console.log(points[2]);

console.log(cities[cities.length-1]);

// mix of int & string 

let arr = [5,6,7,"abcd","efgh",[1,2,3]];
console.log(arr[5][0]);

// 2D Array

let matrix = [[3,4,0],[5,6,9],[7,6,8]];
console.log(matrix[0][2]);

console.log(matrix[2]);

// array methods

matrix.push("hello");
console.log(matrix);
console.log(matrix.length);

// push
console.log(matrix.push('222'));
console.log(matrix);

// pop
console.log(matrix.pop());
console.log(matrix);

// shift
console.log(arr.shift());
console.log(arr);

// unshift
console.log(arr.unshift('a'));
console.log(arr);

// splice (position,no of elements selected , changing values)

arr.splice(2,1);
console.log(arr);

arr.splice(3,1);
console.log(arr);

arr.splice(2);
console.log(arr);

arr.splice(0,1,'Rajan');
console.log(arr);

arr.splice(1,1,"Rahul",'Ravi');
console.log(arr);

arr.splice(2,0,'Wely','george');
console.log(arr);

arr.splice(2,1);
console.log(arr);

// Slice (starting index , ending index)

console.log(arr.slice(1,2));
console.log(arr.slice(1));

// reverse
 
arr.reverse();
console.log(arr);

// join (convert array to string)

let str = arr.join();
console.log(str);

// split ( convert string to array )

let Str2="abc,gre,hf,'d',dh";
let array = Str2.split();
console.log(array);

// concat & spread operator

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let joinedArr = [arr1,arr2];
console.log(joinedArr)

joinedArr = arr1.concat(arr2);
console.log(joinedArr);

let Joined = [...arr1,...arr2];
console.log(Joined);

// Objects

// let User ={
//     name : "Rajan",
//     Email:"rajan@gmail.com",
//     password : "kumaar&&3",
//     Login : function(){
//         console.log("You were logged in")
//     }
// }

// console.log(User);
// console.log(User.name);

// User.name = "raj";
// console.log(User.name)

// console.log(User);

// User.Login()

// closure

// function outer(){
//     let outervar = "sweet"
//     function inner(){
//         let innervar = "salt"  
//         console.log(innervar)
//         console.log(outervar)

//     }
//     return inner
// }

// let call = outer();
// call()

// function doAdd(x){
//     return function add(y){
//         return x+y
//     }
// }

// let add5= doAdd(5);
// console.log(add5(50))

// let add50= doAdd(50);
// console.log(add50(50))

*/

// Memory location

// (primitive data type)
let a = 100;

let b = a;
b=40;

console.log(a);
console.log(b);

// (Reference data type)

let C = {name:"Rajan ",age : 18}
let D = C;

D.age = 20;
C.name = "Aravinth"
console.log(C)
console.log(D)
