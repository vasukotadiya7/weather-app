console.log("Starting");

setTimeout(() => {
  console.log("2 second after");
}, 2000);

setTimeout(() => {
  console.log("0 second after");
}, 0);

console.log("Stopping");
