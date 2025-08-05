// console.log("hey this is node js");
const file = require("fs");

// this is the example of blocking operations
file.writeFileSync("test.txt", "check it it will write or not");
// console.log(test);

const result = file.readFileSync("test.txt");
console.log(result);

//this is Asynchronous and the example of non-blocking operation
file.readFile("test.txt", "utf-8", (err, result) => {
  console.log(result);
});
