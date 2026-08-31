console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");


// Kết quả A D C B

// JavaScript có hai loại queue quan trọng:
// Microtask Queue
//     ↓
// Promise.then()
// queueMicrotask()
//     ↓

// Macrotask / Task Queue
//     ↓
// setTimeout()
// setInterval()


// ----- >Event Loop ưu tiên: Call Stack  -->  Microtask Queue. --> Macrotask Queue