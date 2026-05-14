1. Challenge 1:
  - Answer: b
  - Explanation: Because the function reassigns the value of foo to the string 'xyz', logs it after it's reassigned. This function is the called and after foo is logged again. As it's logged twice it will show twice.


2. Challenge 2:
  - Answer: c
  - Explanation: Because inside the function the parameter a has function scope, so any input put into the parameter will be reassigned to the number 10 and logged as 10. However since there is an a with function scope, it will not reassign the variable in the global scope, so logging a will return 1.


3. Challenge 3:
  - Answer: c
  - Explanation: Because traditional functions can be hoisted, so when javascript recognises there is a function it takes not of it first, so the function can be called before it is made.


4. Challenge 4:
  - Answer: c
  - Explanation: This is because a is stored with an object which is a dynamic data type. So when we attempt to make a copy with b it doesn't make a new object but only creates a reference to the existing one. Meaning if we change the object in b we change the object in a.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: Rabbit 1 will have it's object affected by the function, it's age will be reassigned to 10. Rabbit 2 will get a new function since we apply the function to it and will be reassigned to the object in the function.
