1. Challenge 1:
  - Answer: "xyz" and "xyz"
  - Explanation:  foo is reassigned inside the function bar() without using let or const, so it affects the outer scope. console.log(foo) inside and outside the function both print "xyz".


2. Challenge 2:
  - Answer: 10 and 1
  - Explanation: The function example receives a copy of the variable a. Inside the function, a is reassigned to 10, but this does not affect the original a outside the function. So, it logs 10 inside and 1 outside.


3. Challenge 3:
  - Answer: "Hi there!"
  - Explanation: Function declarations are hoisted in JavaScript. This means sayHi is available before its declaration, so the function runs without error and prints "Hi there!".


4. Challenge 4:
  - Answer: { num: 90 }
  - Explanation:  a is a const object, but the properties can be changed. b is a reference to a, so changing b.num also changes a.num. The object itself isn’t reassigned, just mutated.




5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
