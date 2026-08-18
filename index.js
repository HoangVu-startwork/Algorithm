var express = require('express');
var app = express();
// Tìm số lớn nhất trong mảng
const findMax = require("./algorithms/findMax")
// Tìm số lớn nhất trong mảng ImportfindMax
const readline = require("readline");
const ImportfindMax = require("./algorithms/ImportfindMax");


// Tìm số nhỏ nhất trong mảng
const findMin = require("./the_smallest_number/findMin")


// file findMax
// const arr = [10, 5, 20, 8, 30, 15];
// const result = findMax(arr);
// console.log("Số lớn nhất:", result);


// file InportindMax.js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// nhập mảng
// rl.question("Nhập các số trong mảng: ", (input) => {

//   // Chuyển chuỗi nhập vào thành mảng số
//   const arr = input
//       .split(" ")
//       .map(Number);

//   console.log("Mảng:", arr);

//   const result = findMax(arr);

//   console.log("Số lớn nhất:", result);

//   rl.close();
// });

// nhập số lượng trong mảng
// ImportfindMax()


// Số nhỏ nhất
const arr = [10, 5, 20, 8, 30, 15];
const result = findMin(arr);
console.log("Số nhỏ nhất:", result);