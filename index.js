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

matrix[3].push("hello");
console.log(matrix);
console.log(matrix.length);
