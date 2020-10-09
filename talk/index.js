var answer = "Now that's a good question";

var hello = function (name) {
  console.log("Hello " + name);
};

var intro = function () {
  console.log("I'm a node file called index.js");
};

module.exports = {
  hello: hello,
  intro: intro,
};

module.exports.ask = function (question) {
  console.log(question);
  return answer;
};
