var express = require('express');
var app = express();
const findMax = require("./algorithms/findMax")


const arr = [10, 5, 20, 8, 30, 15];

const result = findMax(arr);

console.log("Số lớn nhất:", result);
