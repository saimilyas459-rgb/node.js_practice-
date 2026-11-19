function step1(callback) {
    setTimeout(() => {
        console.log("Callback: Step 1 complete");
        callback();
    }, 500);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Callback: Step 2 complete");
        callback();
    }, 500);
}

step1(() => {
    step2(() => {
        console.log("All steps completed!");
    });
});
