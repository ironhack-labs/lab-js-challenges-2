1. Challenge 1:
  - Answer: b)
  - Explanation: Inside bar(), you assign a new value to the existing global variable foo.
You are not declaring a new variable (no let, const, or var)


2. Challenge 2:
  - Answer:c)
  - Explanation:"a" in the function shadows the global a. The a inside the function is a parameter, a local variable to the function.
Changing a = 10 only affects the local a, not the global one


3. Challenge 3:
  - Answer:c)
  - Explanation:This works because of hoisting in JavaScript. Function declarations are hoisted completely, meaning the function definition is moved to the top of its scope before any code is executed.


4. Challenge 4:
  - Answer:c)
  - Explanation:a is a constant reference to an object.You cannot reassign a, but you can change the properties of the object it points to. Modifies the num property of the shared object.Since a and b point to the same object, the change is visible through both.


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
  
