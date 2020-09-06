let count1 = -10;
let count2 = 10;
let count3 = 300;
let count4 = 5;

console.log("All numbers between -10 and 19");
while (count1 <= 19) {
  console.log(count1);
  count1++;
}

console.log("All even numbers between 10 and 40");
while (count2 <= 40) {
  if (count2 % 2 === 0) console.log(count2);
  count2++;
}
console.log("All odd numbers between 300 and 333");
while (count3 <= 333) {
  if (count3 % 2 !== 0) console.log(count3);
  count3++;
}
console.log("All numbers divisible by 5 and 3, between 5 and 50");
while (count4 <= 50) {
  if (count4 % 5 === 0 && count4 % 3 === 0) console.log(count4);
  count4++;
}
