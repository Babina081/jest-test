// function sum(a, b) {
//   return a + b;
// }

// sum(1, 2);
// console.log(sum(1, 2));

// module.exports = sum;

// function myFunction(input) {
//   if (typeof input !== "number") {
//     throw new Error("input is invalid");
//   }
// }

// module.exports = myFunction;

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("done");
//   }, 1000);
// }

// module.exports = fetchData;

function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
}

module.exports = fetchPromise;
