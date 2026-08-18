var express = require('express');
var app = express();
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ImportfindMin() {
    rl.question("Nhập các số trong mảng, cách nhau bằng dấu cách: ", function(input) {

        let arr = input.split(" ").map(Number);
    
        let min = arr[0];
    
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
    
        console.log("Mảng:", arr);
        console.log("Số nhỏ nhất:", min);
    
        rl.close();
    });
}

module.exports = ImportfindMin;