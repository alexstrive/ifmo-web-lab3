
function sum (values = []) { 
  return this.reduce((acc, currentValue) => acc + currentValue, 0)
}
console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));