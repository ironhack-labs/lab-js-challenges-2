1. Challenge 1:
  - Answer: b
  - Explanation: 'foo' is a global variable. 'bar()' changes it to "xyz". Both logs print "xyz" because the global variable is modified.


2. Challenge 2:
  - Answer: b
  - Explanation: The function parameter 'a' shadows the global 'a'. Inside the function, a = 10 changes the local variable only. Global 'a' remains "1".


3. Challenge 3:
  - Answer: c
  - Explanation: This is a function declaration, which is hoisted. You can call it before it appears in the code.


4. Challenge 4:
  - Answer: c
  - Explanation: 'a' and 'b' refer to the same object. Changing a property through 'b' also affects 'a'.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: 'obj.age= 10' modifies the original object (rabbit1). 'obj = { name: "Ada", age: 20 }' creates a new object for 'rabbit2'. 'rabbit1' is partially changes, 'rabbit2' is the new object.
 