1. Challenge 1:
  - Answer: b
  - Explanation:  after bar execution, foo value is "xyz", because it was modified in the function.


2. Challenge 2:
  - Answer: c
  - Explanation: The parameter a inside the function is a local variable. It is independent of the global variable a. Reassigning the value of the parameter a inside the function does not affect the global variable a.


3. Challenge 3:
  - Answer: c
  - Explanation: Since the function sayHi is hoisted and fully defined, when the line sayHi(); is executed, it will call the function and print "Hi there!" to the console.


4. Challenge 4:
  - Answer: c
  - Explanation: Using const ensures that the reference to the object cannot be changed, but it does not make the object itself immutable.
You can still modify the properties of the object even if it is declared with const.


5. Bonus - Challenge 5:
  - Answer: c 
  - Explanation:  objects are passed by reference, allowing their properties to be modified within a function, but reassigning the object variable inside the function does not affect the original object due to local scope.
