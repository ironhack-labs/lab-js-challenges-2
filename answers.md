1. Challenge 1:
  - Answer: "xyz", "xyz"
  - Explanation: The output will be “xyz”, because: In the global scope, the variable foo was declared with the value “abc”. Then inside the function, the variable was assigned the value “xyz”. Thus, inside the function, foo (from the global scope) was changed to “xyz”.

2. Challenge 2:
  - Answer:10 and 1
  - Explanation:The function example(a) has an argument(local parameter) a, so assigning a = 10 only changes the local copy. The global a remains 1, so the output is 10 and 1.


3. Challenge 3:
  - Answer: "Hi there!"
  - Explanation:In this case the function declarations sayHi() is hoisted to the top of its scope. This means the entire function sayHi() is available before it's defined in the code.


4. Challenge 4:
  - Answer: { num: 90 }
  - Explanation:a and b reference the same object in memory. When you do const b = a, you don't copy the object, you just create a second reference to it. So when you change b.num = 90, you also change the value of a.num.


5. Bonus - Challenge 5:
  - Answer:{ name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation:The function first modifies the original object (rabbit1) by setting age = 10. Then it creates a new object, which is returned as rabbit2, but this reassignment doesn't affect rabbit1.
