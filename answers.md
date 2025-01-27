1. Challenge 1:
  - Answer: b
  - Explanation: The variable "foo" is changed by the line foo = "xyz" inside the function "bar"; since the the variable "foo" is impacted by the changes made in the aforementioned function, both the outcome for bar() and console.log(foo) are going to be the same (xyz).


2. Challenge 2:
  - Answer: c
  - Explanation: Running a = 10 inside the function only modifies the local parameter (a) and not the global parameter.


3. Challenge 3:
  - Answer: c
  - Explanation: As the function declaration was moved to the top of the scope they´re supposed to declare, it won´t generate an output; only the console.log("hi there") will be considered and printed.


4. Challenge 4:
  - Answer: c
  - Explanation: Since b points to the same object as a, changing b.num will also change the num property of a.


5. Bonus - Challenge 5:
  - Answer: 
  - Explanation:
