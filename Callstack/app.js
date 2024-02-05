const multiply = (x, y) => x * y;
const square = x => multiply(x, y);

const isRightTraingle = (a, b, c) =>
    square(a) + square(b) === square(c);


console.log("This is the start");

setTimeout(() => {
    console.log("I print after 3 seconds");
}, 3000);
console.log("I am at the end");
