var fs = require("fs");

console.log("Going to get a file");

var onFileLoad = () => {
  console.log("Got the file");
};

var file = fs.readFile("./async/settimeout.js", onFileLoad);

console.log("App continues ...");
