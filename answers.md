// =========================
// Challenge 1
// =========================
let foo = "abc";

function bar() {
  foo = "xyz";
  console.log("Challenge 1 - inside bar():", foo);
}

bar();
console.log("Challenge 1 - global foo:", foo);


// =========================
// Challenge 2
// =========================
let a = 1;

function example(a) {
  a = 10;
  console.log("Challenge 2 - inside example():", a);
}

example(a);
console.log("Challenge 2 - global a:", a);


// =========================
// Challenge 3
// =========================
sayHi();

function sayHi() {
  console.log("Challenge 3:", "Hi there!");
}


// =========================
// Challenge 4
// =========================
const objA = { num: 42 };
const objB = objA;

objB.num = 90;

console.log("Challenge 4:", objA);


// =========================
// Challenge 5 (Bonus)
// =========================
function magicHat(obj) {
  obj.age = 10;
  obj = { name: "Ada", age: 20 };
  return obj;
}

const rabbit1 = { name: "Bob", age: 30 };
const rabbit2 = magicHat(rabbit1);

console.log("Challenge 5 - rabbit1:", rabbit1);
console.log("Challenge 5 - rabbit2:", rabbit2);
