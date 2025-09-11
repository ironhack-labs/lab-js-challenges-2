1. Challenge 1: bien
  - Answer: b
  - Explanation: let foo = “abc” is in the global scope, so from the bar function we can access it and change it to “xyz”.


2. Challenge 2: error
  - Answer: a  / c
  - Explanation: Let this be in the parent scoop. From the child scoop, we can change (a) to 10 since we have access.
 

3. Challenge 3: // error
  - Answer: d / c
  - Explanation: sayHi is not a well-defined function and will return a typerror, since we did not invoke the function correctly.


4. Challenge 4: Error
  - Answer: d / c
  - Explanation: I think it gives an error because it does not have access to the object from const B.

5. Bonus - Challenge 5:
  - Answer: a 
  - Explanation: I think it's because the variable rabbit1 doesn't have access to the object, so everything stays the same and only the age changes from 10 to 20 within the object. 
