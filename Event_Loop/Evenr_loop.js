console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");

// Kết quả 1 3 2
// Tại sao 2 không chạy trước: JavaScript có Call Stack, còn setTimeout là công việc bất đồng bộ.

// ┌─────────────────┐
// console.log("1") │   Call Stack    │
//                  └────────┬────────┘
//                           │
//                           ▼
//                     chạy "1"

// setTimeout ───────► Web API / Timer
//                           │
//                           │ hết 0ms
//                           ▼
//                     Callback Queue
//                           │
//                           │ Event Loop thấy
//                           │ Call Stack trống
//                           ▼
//                     Call Stack
//                           │
//                           ▼
//                       chạy "2"

