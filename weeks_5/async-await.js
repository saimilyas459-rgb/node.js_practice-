function delay(name, milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name + " finished");
      resolve(name);
    }, milliseconds);
  });
}

async function runInOrder() {
  console.log("\nSequential run:");
  const start = Date.now();

  const first = await delay("Task A", 2000);
  const second = await delay("Task B", 1500);

  console.log("Results:", first, second);
  console.log("Sequential time:", Date.now() - start, "ms");
}

async function runInParallel() {
  console.log("\nParallel run:");
  const start = Date.now();

  const [first, second] = await Promise.all([
    delay("Task A", 2000),
    delay("Task B", 1500)
  ]);

  console.log("Results:", first, second);
  console.log("Parallel time:", Date.now() - start, "ms");
}

async function main() {
  await runInOrder();
  await runInParallel();
}

main().catch((error) => console.error(error));
