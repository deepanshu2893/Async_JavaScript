const multiply = (x, y) => x * y;
const square = x => multiply(x, y);

const isRightTraingle = (a, b, c) =>
    square(a) + square(b) === square(c); 