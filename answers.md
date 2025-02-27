1. Challenge 1:
  - Answer: "b"
  - Explanation: Because foo is a global variable and so it is accessible to both console.log()


2. Challenge 2:
  - Answer: "c"
  - Explanation: Since the global variable didn't have its value changed in the global scope, the value outside of the function remains the same 


3. Challenge 3:
  - Answer: "c" 
  - Explanation: Because of hoisting, you can call a function even though it is coded above the function itself. 


4. Challenge 4:
  - Answer: "c"
  - Explanation: Variable "b" will copy by reference since variable "a" has a value of object, meaning that changing "b" will aftect the value of the other. 


5. Bonus - Challenge 5:
  - Answer: "d" 
  - Explanation: Again we are dealing with objects, and so the value are copied by reference. When the Rabbit1 one goes through the function it modifies it's age because of obj.age = 10; whereas the reassignment of a new object only changes the local reference, or Rabbit 2. 
