1. Challenge 1:
  - Answer: b
  - Explanation: foo -> global scope. Inside the function (bar) foo is changed to 'xyz'. both console.log come after this change, so they print 'xyz' for 2 times.

2. Challenge 2:
  - Answer: 10 and 1
  - Explanation: because 'let a = 1' -> global scope , a = 10 -> function scope
  first console.log inside the function, so it gives 10
  second console.log outside. so it gives 1.


3. Challenge 3:
  - Answer: c
  - Explanation: we can invoke the function before the declaration.


4. Challenge 4:
  - Answer: c
  - Explanation:we are copying reference of object, so modifiying copy changes the original one.


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
