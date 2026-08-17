var express = require('express');
var app = express();
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ImportfindMax() {
    rl.question("Nhập số lượng phần tử: ", (n) => {
        const arr = [];

        function inputElement(index) {
            if (index === Number(n)) {
                console.log("Mảng:", arr);

                let max = arr[0];

                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                    }
                }

                console.log("Số lớn nhất:", max);

                rl.close();
                return;
            }

            rl.question(`Nhập phần tử ${index + 1}: `, (value) => {
                arr.push(Number(value));

                inputElement(index + 1);
            });
        }

        inputElement(0);
    });
}

module.exports = ImportfindMax;