function blockFor(milliseconds) {
  const end = Date.now() + milliseconds;

  while (Date.now() < end) {
    // Intentionally busy-waiting to demonstrate blocking
  }
}

console.log("Blocking example: start");
blockFor(3000);
console.log("Blocking example: end (about 3 seconds later)");

console.log("\nNon-blocking example: start");

setTimeout(() => {
  console.log("Timer fired after about 1 second");
}, 1000);

console.log("This message appears before the timer");
