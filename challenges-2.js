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

// challenge 4
const b = { num: 42 };
const c = b; 

b.num = 90;

console.log(b);

function magicHat(obj) {
    obj.age = 10;
    obj = { name: "Ada", age: 20 };
    return obj;
  }
    
  const rabbit1 = { name: "Bob", age: 30 };
    
  const rabbit2 = magicHat(rabbit1);
    
  console.log("rabbit1: ", rabbit1);
  console.log("rabbit2: ", rabbit2);