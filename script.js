
console.log("Challenges-2");

// ##################### Challenges 2

// Challenge 1
let foo = "abc";

function bar() {
  foo = "xyz";
  console.log(foo);
}

bar();
console.log(foo);

// Challenge 2
let a = 1;

function example(a) {
  a = 10;
  console.log(a); // Console log 1
}

example(a);
console.log(a);  // Console log 2

// Challenge 3

sayHi();

function sayHi() {
  console.log("Hi there!");
}

// Challenge 4
const a2 = { num: 42 };
const b2 = a2; 

b2.num = 90;

console.log(a2);

// Challenge 5
function magicHat(obj) {
  obj.age = 10;
  obj = { name: "Ada", age: 20 };
  return obj;
}
  
const rabbit1 = { name: "Bob", age: 30 };  
const rabbit2 = magicHat(rabbit1);
  
console.log("rabbit1: ", rabbit1);
console.log("rabbit2: ", rabbit2);