require("./instanthello");
var goodbye = require("./talk/goodbye");
var talk = require("./talk");

talk.intro();
var answer = talk.ask("What is your name?");
console.log(answer);

goodbye();
