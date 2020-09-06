// Print array in reverse order
function printReverse(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

// Return true if all elements in array are identical
function isUniform(array) {
  let firstElement = array[0];
  let result;
  for (let i = 1; i < array.length; i++) {
    if (firstElement !== array[i]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}

// Returns the sum of all numbers in the array
function sumArray(array) {
  let sum = 0;
  array.forEach(function (element) {
    sum += element;
  });
  return sum;
}

// Returns maximum number in array
function max(array) {
  let maximum = array[0];
  array.forEach(function (element) {
    if (element > maximum) maximum = element;
  });
  return maximum;
}

// Create own for each, also example of passing function as argument of another function
function myForEach(arr, func) {
  //loop through array
  for (let i = 0; i < arr.length; i++) {
    //call func for each item in array
    func(arr[i]);
  }
}
// call my own for each
myForEach(colors, function (color) {
  console.log(color);
});

// How to define my for each so I can call it without the data as an argument
Array.prototype.myForEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};
// calling my new personal for each
colors.myForEach(function (color) {
  console.log("This is the color " + color);
});
