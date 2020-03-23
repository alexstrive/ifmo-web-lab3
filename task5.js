function createCounter() {
  let innerState = 1

  return () => innerState++
}

const count = createCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5