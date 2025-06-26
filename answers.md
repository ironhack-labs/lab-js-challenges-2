1. Challenge 1:
  Answer: b) "xyz" and "xyz"
  - Explanation: The variable `foo` changes inside the function. It also changes outside because it's the same variable.


2. Challenge 2:
  - Answer: c) "10" and "1"
  - Explanation: Inside the function, `a` is a copy. Changing it doesn’t change the `a` outside.


3. Challenge 3:
  - Answer: c) "Hi there!"
  - Explanation: Functions like this can be used before they are written, because of hoisting.

4. Challenge 4:
  - Answer: c) { num: 90 }
  - Explanation: `a` and `b` point to the same object, so changing one changes both.


5. Bonus - Challenge 5:
  - Answer: c) { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation: The function changes the original object, then makes a new one and returns it.