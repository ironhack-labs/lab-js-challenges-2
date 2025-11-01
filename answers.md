1. Challenge 1:
  - Answer: b
  - Explanation: The assignment inside the function modifies the existing foo from the outer scope. So both logs print "xyz", because it’s the same variable.


2. Challenge 2:
  - Answer: c
  - Explanation: The parameter a inside the function shadows the outer a. So when we assign a = 10 inside the function, we only change the local variable. That’s why the function logs 10, but outside it still logs 1.


3. Challenge 3:
  - Answer: c
  - Explanation: Function declarations are hoisted: they are placed in memory before execution, so you can call them before their definition appears in the code.


4. Challenge 4:
  - Answer: c
  - Explanation: a and b both reference the same object in memory. So when you change a property through b, you are actually modifying that same object — and a sees the change too.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: The first assignment mutates the original object (rabbit1.age = 10). The second assignment just reassigns the local parameter to a new object. So rabbit1 is modified, and rabbit2 is the new object returned.
