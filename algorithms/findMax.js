var express = require('express');
var app = express();

function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

module.exports = findMax;


// Giải thích
// Quan trọng nhất: vòng for
// Đây là đoạn cần chú ý: for (let i = 1; i < arr.length; i++) {}
// Vòng for có 3 phần: for (khởi tạo; điều kiện; tăng/giảm) {
    // code chạy lặp
//}