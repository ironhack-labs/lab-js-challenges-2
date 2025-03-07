1. Challenge 1:

let foo = "abc";

function bar() {
  foo = "xyz";
  console.log(foo);
}

bar();

console.log(foo);

  - Answer: b) "xyz" and "xyz"
  - Explanation: The output of the code will be "xyz" and "xyz" because the function bar() reassigns the value of the global variable foo by doing foo = "xyz";. We will see "xyz" the first time, when the function is invoked and then a second time when we console.log(foo);.

*********************************************************************************************************************************

2. Challenge 2: 

let a = 1;

function example(a) {
  a = 10;
  console.log(a); // Console log 1
}

example(a);

console.log(a); // Console log 2

  - Answer: c) 10 and 1
  - Explanation: The output of the code will be 10 and 1 because I am passing the argument a = 1 to the function example() and the function takes that as the parameter a and assigns the value 10 to it by doing a = 10;. So we will first see "10" when we invoke the function which is the console.log of the value of "a" (function scope), and then we will see "1" which is the value of "a" (global scope). It is called variable shadowing, when a variable declared within a certain scope has the same name as a variable declared in an outer scope.


*********************************************************************************************************************************

3. Challenge 3:

sayHi();

function sayHi() {
  console.log("Hi there!");
}
  - Answer: c) "Hi there!"
  - Explanation: The output of the code will be "Hi there!" because it is possible to call functions before declaring them and get a defined output. This property is called hoisting.

*********************************************************************************************************************************

4. Challenge 4:

const a = { num: 42 };
const b = a; 

b.num = 90;

console.log(a);

  - Answer: c) { num: 90 }
  - Explanation: The output of the code will be { num: 90 } because objects are stored/copied/passed by reference, so when we copy the object and then change the value of the property in the copy, we are actually modifying the original object.

*********************************************************************************************************************************

5. Bonus - Challenge 5:
  - Answer:
  - Explanation: