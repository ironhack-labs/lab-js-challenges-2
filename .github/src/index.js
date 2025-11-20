
// =======================
// Challenge 1
// =======================
console.log("=== Challenge 1 ===");

let foo = "abc";

function bar() {
  foo = "xyz";
  console.log("Inside bar():", foo); // Expected: "xyz"
}

bar();
console.log("Outside bar():", foo); // Expected: "xyz"


// =======================
// Challenge 2
// =======================
console.log("\n=== Challenge 2 ===");

let a = 1;

function example(a) {
  a = 10;
  console.log("Inside example():", a); // Expected: 10
}

example(a);
console.log("Outside example():", a);  // Expected: 1


// =======================
// Challenge 3
// =======================
console.log("\n=== Challenge 3 ===");

sayHi();

function sayHi() {
  console.log("Hi there!"); // Expected: "Hi there!"
}


// =======================
// Challenge 4
// =======================
console.log("\n=== Challenge 4 ===");

const objA = { num: 42 };
const objB = objA;

objB.num = 90;

console.log("objA after modification:", objA); // Expected: { num: 90 }


// =======================
// Bonus: Challenge 5
// =======================
console.log("\n=== Challenge 5 ===");

function magicHat(obj) {
  obj.age = 10;
  obj = { name: "Ada", age: 20 };
  return obj;
}

const rabbit1 = { name: "Bob", age: 30 };
const rabbit2 = magicHat(rabbit1);

console.log("rabbit1:", rabbit1); // Expected: { name: "Bob", age: 10 }
console.log("rabbit2:", rabbit2); // Expected: { name: "Ada", age: 20 }
