1. Challenge 1:
  - Answer: b
  - Explanation: bar() logs "xyz". The global foo is now "xyz". The final console.log(foo) also prints "xyz"


2. Challenge 2:
  - Answer: c
  - Explanation: Inside the function → prints 10. Outside the function → global a is still 1


3. Challenge 3:
  - Answer: c
  - Explanation: Function declarations are hoisted. This means JavaScript loads the function definition before executing the code.


4. Challenge 4:
  - Answer: c
  - Explanation: a is a constant reference to an object. b = a means both variables point to the same object.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: rabbit1 was mutated → { name: "Bob", age: 10 }. rabbit2 is the new object → { name: "Ada", age: 20 }
