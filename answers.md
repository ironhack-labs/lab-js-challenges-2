1. Challenge 1:
  - Answer: b
  - Explanation: It will be b because we have reassigned "foo" value when we invoked the bar() function.


2. Challenge 2:
  - Answer: c
  - Explanation: When a variable is passed as a parameter to a function, it creates a new local variable with the same name, inside the function's scope. It is independent of the variable outside the function, so the original a stays the same.


3. Challenge 3:
  - Answer: c
  - Explanation: A function can be invoked before its creation because of how JS is compiling the code (function declarations will be read first)


4. Challenge 4:
  - Answer: c
  - Explanation: Because it is a shallow copy and we are trying to change some value INSIDE one of the related copied values, so it also affects the original


5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: because it's reassigning the values of rabbit1 inside the function to become rabbit2
