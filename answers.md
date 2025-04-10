1. Challenge 1:
  - Answer: b
  - Explanation: The output of the code will be "xyz / xyz" because when the bar function runs, the variable foo is initialized to "xyz" and then logged to the console. After the function ends, the variable foo is logged again, and its value is still "xyz".

2. Challenge 2:
  - Answer: c
  - Explanation: The output of the code will be "10 / 1" because when the example function runs, the parameter a is initialized with a copy of the global variable a, which is 1. Inside the function, this local a is changed to 10, and it is logged to the console. But after the function ends, the global a remains unchanged, so when it is logged again, its value is still 1.

3. Challenge 3:
  - Answer: c
  - Explanation: The output of the code will be "Hi there!" because In JavaScript, function declarations are hoisted to the top of their scope during the compilation phase. This means the function sayHi is available before its actual definition in the code.

4. Challenge 4:
  - Answer: c
  - Explanation: The output of the code will be "{ num: 90 }" because when the variable b is assigned to a, it doesn’t create a new object — instead, both a and b point to the same object in memory. Then, when the property num is changed to 90 through b, it also affects the object referenced by a. So when a is logged to the console, the updated value { num: 90 } is shown.

5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: My answer was incorrect, but I learned the solution and now I understand the reason behind it.
