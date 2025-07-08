// Function to get full details of a student using three functions
// function studentFullDetails (first, second, third, name, fees) {
//     // Call each function and concatenate their results with newlines
//     return first(name, fees) + "\n" + second(fees) + "\n" + third(name);
// }

// Function to return name and fees details
// function first(name, fees) {
//     return "Your Name is :" + name + "\n and Fees is : " + fees;
// }

// Function to return EMI details
// function second(fees) {
//     return "EMI :- " + fees / 10 + " /month ";
// }
// cons
// Function to return a welcome message
// function third(name) {
//     return "Welcome " + name + " beta";
// }

// Log the full student details to the console
// console.log(studentFullDetails(first, second, third, "Ankit", 10000));




// const words = ["apple", "banana", "cherry", "date", "elderberry"];

// const result = words.filter((word) => word.length > 5)

// console.log(result);

// Array.prototype.customFilter = function(logic) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (logic(this[i], i, this)) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// }
// const customResult = words.customFilter((word) => word.length > 5);
// console.log(customResult);


// Array.prototype.customReduce = function(callback, initialValue) {
//     let acc = initialValue, i = 0;
//     if (acc === undefined) {
//         if (!this.length) throw new TypeError('Reduce of empty array with no initial value');
//         acc = this[0]; i = 1;
//     }
//     for (; i < this.length; i++) acc = callback(acc, this[i], i, this);
//     return acc;
// };

// Example usage:
// 
// const mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved after 2 seconds");
//     }, 2000);
// });
// mypromise
//     .then((message) => {
//         console.log(message);
//         return "Next step after promise";
//     })
//     .then((nextMessage) => {
//         console.log(nextMessage);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });
//     const promise1 = () => new Promise(resolve => setTimeout(() => resolve("First promise resolved"), 1000));
//     const promise2 = () => new Promise(resolve => setTimeout(() => resolve("Second promise resolved"), 1000));
//     const promise3 = () => new Promise(resolve => setTimeout(() => resolve("Third promise resolved"), 1000));

//     promise1()
//         .then(res1 => {
//             console.log(res1);
//             return promise2();
//         })
//         .then(res2 => {
//             console.log(res2);
//             return promise3();
//         })
//         .then(res3 => {
//             console.log(res3);
//         })
//         .catch(err => {
//             console.error("Error:", err);
//         });


// Promise.resolve("Resolved immediately").then(msg => console.log(msg));


// Promise.reject("Rejected immediately").catch(err => console.error(err));

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
Promise.all([p1, p2, p3]).then(values => console.log("Promise.all:", values));


const fast = new Promise(resolve => setTimeout(() => resolve("fast"), 500));
const slow = new Promise(resolve => setTimeout(() => resolve("slow"), 1500));
Promise.race([fast, slow])
.then(result => console.log("Promise.race:", result));

    
const ok = Promise.resolve("ok");
const fail = Promise.reject("fail");
Promise.allSettled([ok, fail])
.then(results => console.log("Promise.allSettled:", results));


const fail1 = Promise.reject("fail1");
const pass = Promise.resolve("pass");
Promise.any([fail1, pass])
.then(result => console.log("Promise.any:", result));