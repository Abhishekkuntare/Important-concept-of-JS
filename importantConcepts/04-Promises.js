// let fs = require("fs");
let fs = require("fs/promises");

// fs.readFile("File.txt", "utf-8", (err, data) => {
//   console.log(err, data);
// }); // after ths one

let a = fs.readFile("File.txt", "utf-8");
a.then((data) => {
  console.log(data);
});

console.log("Abhishek"); // 1st print this statement
