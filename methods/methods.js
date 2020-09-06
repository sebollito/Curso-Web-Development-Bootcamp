let obj = {
  name: "chuck",
  isCool: false,
  age: 45,
  friends: ["bob", "tina"],
  add: function (x, y) {
    return x + y;
  },
};

function speak() {
  return "socorol";
}

let dogspace = {};
dogspace.speak = function () {
  return "woof";
};

let catspace = {};
catspace.speak = function () {
  return "meow";
};

let comments = {};
comments.data = ["good job", "bye", "lame..."];

// function print(arr) {
//   arr.forEach(function (element) {
//     console.log(element);
//   });
// }
comments.print = function () {
  this.data.forEach(function (element) {
    console.log(element);
  });
};
