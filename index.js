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

// splice

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