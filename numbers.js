// Second Exercise
// Adding numbers from commmand line input

var arr = process.argv
var sum = 0;

for (i=2; i < arr.length; i++) {
  sum += parseInt(arr[i])
}

console.log(sum)
