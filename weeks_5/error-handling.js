async function riskyTask() {
  try {
    await Promise.reject(new Error("Something failed"));
  } catch (error) {
    console.error("Caught with try/catch:", error.message);
  }
}

function anotherRiskyTask() {
  Promise.reject(new Error("Another problem"))
    .catch((error) => {
      console.error("Caught with .catch():", error.message);
    });
}

riskyTask();
anotherRiskyTask();
