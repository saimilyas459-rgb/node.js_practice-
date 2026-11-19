const tasks = ["Download file", "Read data", "Process data", "Save result", "Send report"];

function runTask(name) {
  const delay = Math.floor(Math.random() * 1300) + 200;

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name + " completed in " + delay + " ms");
      resolve(name);
    }, delay);
  });
}

async function runSequentially() {
  console.log("\\nSequential tasks:");
  const start = Date.now();

  for (const task of tasks) {
    await runTask(task);
  }

  console.log("Sequential total:", Date.now() - start, "ms");
}

async function runInParallel() {
  console.log("\\nParallel tasks:");
  const start = Date.now();

  await Promise.all(tasks.map((task) => runTask(task)));

  console.log("Parallel total:", Date.now() - start, "ms");
}

async function main() {
  await runSequentially();
  await runInParallel();
}

main().catch(console.error);
