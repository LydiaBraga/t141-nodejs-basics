//synchronous operation
function operation1() {
    setTimeout(() =>  console.log("Operation 1"), 100);
}

function operation2() {
    console.log("Operation 2");
}

function operation3() {
    setTimeout(() =>  console.log("Operation 3"), 100);
}

operation1();
operation2();
operation3();
